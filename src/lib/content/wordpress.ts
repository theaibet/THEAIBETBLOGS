import type { Article, Author } from "./types";
import { getSite } from "@/config/site";
import { log } from "@/lib/log";

/**
 * Headless WordPress adapter.
 *
 * Expects a standard WordPress REST API (wp-json/wp/v2) with:
 *  - posts filtered per publication via a category prefix or a `publication`
 *    taxonomy term matching the brand key (recommended: custom taxonomy
 *    `publication` with terms aflreviews/ufcreview/puntersreview/...)
 *  - ACF/meta fields: theaibet_path, theaibet_cta_label, master_story_id,
 *    seo_title, seo_description (or Yoast, which exposes yoast_head_json)
 *
 * Set WORDPRESS_API_URL, e.g. https://cms.example.com/wp-json/wp/v2
 */

const API = process.env.WORDPRESS_API_URL?.replace(/\/$/, "");

export function wordpressEnabled(): boolean {
  return Boolean(API);
}

interface WpRendered {
  rendered: string;
}

interface WpPost {
  id: number;
  slug: string;
  date_gmt: string;
  modified_gmt: string;
  title: WpRendered;
  excerpt: WpRendered;
  content: WpRendered;
  meta?: Record<string, unknown>;
  acf?: Record<string, unknown>;
  yoast_head_json?: { title?: string; description?: string };
  _embedded?: {
    author?: Array<{ slug: string; name: string; description: string; avatar_urls?: Record<string, string> }>;
    "wp:featuredmedia"?: Array<{
      source_url: string;
      alt_text: string;
      media_details?: { width: number; height: number };
    }>;
    "wp:term"?: Array<Array<{ taxonomy: string; slug: string; name: string }>>;
  };
}

function stripTags(html: string): string {
  return html.replace(/<[^>]*>/g, "").replace(/\s+/g, " ").trim();
}

function meta(post: WpPost, key: string): string | undefined {
  const v = (post.acf?.[key] ?? post.meta?.[key]) as string | undefined;
  return v && String(v).length > 0 ? String(v) : undefined;
}

function mapPost(post: WpPost): Article {
  const embeddedAuthor = post._embedded?.author?.[0];
  const author: Author = embeddedAuthor
    ? {
        slug: embeddedAuthor.slug,
        name: embeddedAuthor.name,
        bio: embeddedAuthor.description ?? "",
        role: "Contributor",
        avatarUrl: embeddedAuthor.avatar_urls?.["96"],
      }
    : { slug: "editorial", name: "Editorial Team", bio: "", role: "Editorial" };

  const media = post._embedded?.["wp:featuredmedia"]?.[0];
  const terms = post._embedded?.["wp:term"]?.flat() ?? [];
  const category = terms.find((t) => t.taxonomy === "category");
  const tags = terms.filter((t) => t.taxonomy === "post_tag").map((t) => t.name);

  return {
    id: String(post.id),
    slug: post.slug,
    title: stripTags(post.title.rendered),
    excerpt: stripTags(post.excerpt.rendered),
    bodyHtml: post.content.rendered,
    categorySlug: category?.slug ?? "news",
    tags,
    author,
    publishedAt: `${post.date_gmt}Z`,
    updatedAt: `${post.modified_gmt}Z`,
    featuredImage: media
      ? {
          url: media.source_url,
          alt: media.alt_text || stripTags(post.title.rendered),
          width: media.media_details?.width,
          height: media.media_details?.height,
        }
      : undefined,
    seoTitle: post.yoast_head_json?.title ?? meta(post, "seo_title"),
    seoDescription: post.yoast_head_json?.description ?? meta(post, "seo_description"),
    theaibetPath: meta(post, "theaibet_path"),
    theaibetCtaLabel: meta(post, "theaibet_cta_label"),
    masterStoryId: meta(post, "master_story_id"),
  };
}

async function wpFetch<T>(path: string): Promise<T> {
  try {
    const res = await fetch(`${API}${path}`, {
      // ISR: revalidate every 5 minutes so published WP content flows out
      next: { revalidate: 300 },
    });
    if (!res.ok) {
      log.error("wordpress", "API request failed", { path, status: res.status });
      throw new Error(`WordPress API error ${res.status} for ${path}`);
    }
    return (await res.json()) as T;
  } catch (err) {
    if (!(err instanceof Error && err.message.startsWith("WordPress API error"))) {
      log.error("wordpress", "API request threw", {
        path,
        error: err instanceof Error ? err.message : String(err),
      });
    }
    throw err;
  }
}

/** Query filtered to this publication via the `publication` taxonomy term slug. */
function publicationFilter(): string {
  const site = getSite();
  // WP: register taxonomy `publication`, expose in REST as `publication`.
  // Filtering by slug requires resolving term ID at runtime; simplest robust
  // approach is the `publication_slug` filter param provided by a small
  // must-use plugin (documented in /wordpress/README.md).
  return `publication_slug=${site.key}`;
}

export async function wpGetArticles(limit = 50): Promise<Article[]> {
  const posts = await wpFetch<WpPost[]>(
    `/posts?_embed=1&per_page=${Math.min(limit, 100)}&status=publish&${publicationFilter()}`
  );
  return posts.map(mapPost);
}

export async function wpGetArticleBySlug(slug: string): Promise<Article | null> {
  const posts = await wpFetch<WpPost[]>(
    `/posts?_embed=1&slug=${encodeURIComponent(slug)}&${publicationFilter()}`
  );
  return posts.length ? mapPost(posts[0]) : null;
}

export async function wpGetArticlesByCategory(categorySlug: string): Promise<Article[]> {
  const all = await wpGetArticles(100);
  return all.filter((a) => a.categorySlug === categorySlug);
}

export async function wpGetArticlesByAuthor(authorSlug: string): Promise<Article[]> {
  const all = await wpGetArticles(100);
  return all.filter((a) => a.author.slug === authorSlug);
}
