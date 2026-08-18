import { getSite } from "@/config/site";
import type { Article, Author } from "./types";
import { getFixtures } from "./fixtures";
import {
  wordpressEnabled,
  wpGetArticleBySlug,
  wpGetArticles,
  wpGetArticlesByAuthor,
  wpGetArticlesByCategory,
} from "./wordpress";

/**
 * Content source switch.
 * WORDPRESS_API_URL set  → headless WordPress
 * WORDPRESS_API_URL unset → fixture content (pre-CMS demo mode)
 */

function sortByDate(articles: Article[]): Article[] {
  return [...articles].sort(
    (a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
  );
}

export async function getArticles(limit = 50): Promise<Article[]> {
  if (wordpressEnabled()) return sortByDate(await wpGetArticles(limit)).slice(0, limit);
  return sortByDate(getFixtures(getSite().key)).slice(0, limit);
}

export async function getArticleBySlug(slug: string): Promise<Article | null> {
  if (wordpressEnabled()) return wpGetArticleBySlug(slug);
  return getFixtures(getSite().key).find((a) => a.slug === slug) ?? null;
}

export async function getArticlesByCategory(categorySlug: string): Promise<Article[]> {
  if (wordpressEnabled()) return sortByDate(await wpGetArticlesByCategory(categorySlug));
  return sortByDate(getFixtures(getSite().key).filter((a) => a.categorySlug === categorySlug));
}

export async function getArticlesByAuthor(authorSlug: string): Promise<Article[]> {
  if (wordpressEnabled()) return sortByDate(await wpGetArticlesByAuthor(authorSlug));
  return sortByDate(getFixtures(getSite().key).filter((a) => a.author.slug === authorSlug));
}

export async function getAuthors(): Promise<Author[]> {
  const articles = await getArticles(100);
  const map = new Map<string, Author>();
  for (const a of articles) map.set(a.author.slug, a.author);
  return [...map.values()];
}

export async function getAuthorBySlug(slug: string): Promise<Author | null> {
  const authors = await getAuthors();
  return authors.find((a) => a.slug === slug) ?? null;
}

export async function getRelatedArticles(article: Article, limit = 3): Promise<Article[]> {
  const all = await getArticles(100);
  const scored = all
    .filter((a) => a.slug !== article.slug)
    .map((a) => {
      let score = 0;
      if (a.categorySlug === article.categorySlug) score += 2;
      score += a.tags.filter((t) => article.tags.includes(t)).length;
      return { a, score };
    })
    .sort((x, y) => y.score - x.score || +new Date(y.a.publishedAt) - +new Date(x.a.publishedAt));
  return scored.slice(0, limit).map((s) => s.a);
}

export async function searchArticles(query: string): Promise<Article[]> {
  const q = query.trim().toLowerCase();
  if (!q) return [];
  const all = await getArticles(100);
  return all.filter(
    (a) =>
      a.title.toLowerCase().includes(q) ||
      a.excerpt.toLowerCase().includes(q) ||
      a.tags.some((t) => t.toLowerCase().includes(q))
  );
}

export type { Article, Author };
