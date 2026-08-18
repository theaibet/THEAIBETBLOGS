import type { MetadataRoute } from "next";
import { getSiteUrl } from "@/config/site";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [{ userAgent: "*", allow: "/", disallow: ["/search"] }],
    sitemap: `${getSiteUrl()}/sitemap.xml`,
  };
}
