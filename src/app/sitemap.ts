import type { MetadataRoute } from "next";
import { getArticles, getAuthors, getPopulatedCategories } from "@/lib/content";
import { getSite, getSiteUrl } from "@/config/site";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const site = getSite();
  const base = getSiteUrl();
  const articles = await getArticles(100);
  const categories = await getPopulatedCategories();
  const authors = await getAuthors();

  return [
    { url: base, changeFrequency: "hourly", priority: 1 },
    ...(site.dataNav ?? []).map((d) => ({
      url: `${base}${d.href}`,
      changeFrequency: "hourly" as const,
      priority: 0.9,
    })),
    // Populated categories only — empty category pages are thin content and
    // should not be submitted for indexing.
    ...categories.map((c) => ({
      url: `${base}/category/${c.slug}`,
      changeFrequency: "daily" as const,
      priority: 0.8,
    })),
    // Author pages (roadmap §8).
    ...authors.map((a) => ({
      url: `${base}/author/${a.slug}`,
      changeFrequency: "weekly" as const,
      priority: 0.5,
    })),
    ...articles.map((a) => ({
      url: `${base}/${a.categorySlug}/${a.slug}`,
      lastModified: new Date(a.updatedAt),
      changeFrequency: "daily" as const,
      priority: 0.9,
    })),
  ];
}
