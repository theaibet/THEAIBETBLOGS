import type { ArticleImage } from "@/lib/content/types";
import type { SiteKey } from "@/config/types";

/**
 * Image sourcing abstraction (roadmap §3 of the imagery brief).
 *
 * The newsroom extracts subjects from an article (sport, event, teams,
 * fighters, horses, venue) and asks registered providers for candidates.
 * An editor picks one; it is saved to the WordPress Media Library with full
 * attribution metadata. Nothing is coupled to a single vendor.
 *
 * Providers ship in three tiers:
 *  1. wordpress  — media already in the CMS library (owned/licensed uploads)
 *  2. local-art  — the generated editorial artwork system (always available)
 *  3. licensed-api — future: approved licensed photo APIs; implement
 *     LicensedApiProvider against the chosen vendor and register it here.
 *
 * HARD RULE (publisher policy): no scraping of Google Images, news sites,
 * Getty, sporting bodies or other publishers without usage rights. Every
 * stored image carries source/credit/licence metadata.
 */

export interface ImageQuery {
  site: SiteKey;
  sport?: string;
  event?: string;
  participants?: string[]; // teams / fighters / horses
  venue?: string;
  subject?: string; // free-text main subject
  categorySlug?: string;
  slug?: string;
}

export interface ImageCandidate extends ArticleImage {
  providerId: string;
  /** Higher = better match for the query */
  score: number;
}

export interface ImageProvider {
  id: string;
  search(query: ImageQuery): Promise<ImageCandidate[]>;
}

/** Editorial artwork generated into /public/art — always available, clearly
 *  an illustration (never presented as documentary photography). */
export class LocalArtProvider implements ImageProvider {
  id = "local-art";
  async search(q: ImageQuery): Promise<ImageCandidate[]> {
    const base = `/art/${q.site}`;
    const candidates: ImageCandidate[] = [];
    if (q.slug) {
      candidates.push({
        providerId: this.id,
        score: 1,
        url: `${base}/${q.slug}.svg`,
        alt: q.subject ?? q.slug.replace(/-/g, " "),
        license: "artwork",
        source: "generated-editorial-artwork",
        width: 1600,
        height: 900,
      });
    }
    candidates.push({
      providerId: this.id,
      score: 0.1,
      url: `${base}/_default.svg`,
      alt: q.subject ?? "Editorial artwork",
      license: "artwork",
      source: "generated-editorial-artwork",
      width: 1600,
      height: 900,
    });
    return candidates;
  }
}

/** Media already uploaded to the headless WordPress library. */
export class WordPressMediaProvider implements ImageProvider {
  id = "wordpress";
  constructor(private apiBase = process.env.WORDPRESS_API_URL) {}
  async search(q: ImageQuery): Promise<ImageCandidate[]> {
    if (!this.apiBase) return [];
    const term = [q.event, q.subject, ...(q.participants ?? [])].filter(Boolean).join(" ");
    const res = await fetch(
      `${this.apiBase}/media?search=${encodeURIComponent(term)}&per_page=12`,
      { next: { revalidate: 300 } }
    );
    if (!res.ok) return [];
    const items = (await res.json()) as Array<{
      source_url: string;
      alt_text: string;
      caption?: { rendered?: string };
      media_details?: { width: number; height: number };
      description?: { rendered?: string };
    }>;
    return items.map((m, i) => ({
      providerId: this.id,
      score: 0.9 - i * 0.05,
      url: m.source_url,
      alt: m.alt_text || term,
      width: m.media_details?.width,
      height: m.media_details?.height,
      license: "library",
      source: "wordpress-media-library",
    }));
  }
}

const registry: ImageProvider[] = [new WordPressMediaProvider(), new LocalArtProvider()];

export function registerImageProvider(p: ImageProvider) {
  registry.unshift(p);
}

/** Query all providers, best candidates first. */
export async function findImages(query: ImageQuery): Promise<ImageCandidate[]> {
  const results = await Promise.all(
    registry.map((p) => p.search(query).catch(() => [] as ImageCandidate[]))
  );
  return results.flat().sort((a, b) => b.score - a.score);
}
