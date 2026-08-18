import type { MetadataRoute } from "next";
import { getArticles } from "@/lib/content";
import { getSite, getSiteUrl } from "@/config/site";
import { getUFCEvents } from "@/lib/sports/ufc/provider";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const site = getSite();
  const base = getSiteUrl();
  const articles = await getArticles(100);
  const ufcEvents = site.key === "ufcreview" ? (await getUFCEvents())?.events ?? [] : [];

  return [
    { url: base, changeFrequency: "hourly", priority: 1 },
    ...(site.dataNav ?? []).map((d) => ({
      url: `${base}${d.href}`,
      changeFrequency: "hourly" as const,
      priority: 0.9,
    })),
    ...ufcEvents.map((e) => ({
      url: `${base}/events/${e.slug}`,
      changeFrequency: "daily" as const,
      priority: 0.9,
    })),
    ...site.categories.map((c) => ({
      url: `${base}/category/${c.slug}`,
      changeFrequency: "daily" as const,
      priority: 0.8,
    })),
    ...articles.map((a) => ({
      url: `${base}/${a.categorySlug}/${a.slug}`,
      lastModified: new Date(a.updatedAt),
      changeFrequency: "daily" as const,
      priority: 0.9,
    })),
  ];
}
