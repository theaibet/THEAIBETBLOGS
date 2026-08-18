import { getSite, THEAIBET_BASE_URL } from "@/config/site";
import type { Article } from "./content/types";

/**
 * Builds the contextual TheAIbet destination URL for an article,
 * with full UTM attribution so conversions can be traced back to
 * the exact domain + article responsible (roadmap §7).
 *
 * utm_source   = publication domain (e.g. ufcreview.com.au)
 * utm_medium   = referral
 * utm_campaign = media-network
 * utm_content  = article slug
 * utm_term     = master story ID when present
 */
export function buildTheAIbetUrl(article: Article): string {
  const site = getSite();
  const path = article.theaibetPath || site.theaibetDefaultPath;
  const base = path.startsWith("http") ? path : `${THEAIBET_BASE_URL}${path}`;
  const url = new URL(base);
  url.searchParams.set("utm_source", site.domain);
  url.searchParams.set("utm_medium", "referral");
  url.searchParams.set("utm_campaign", "media-network");
  url.searchParams.set("utm_content", article.slug);
  if (article.masterStoryId) url.searchParams.set("utm_term", article.masterStoryId);
  return url.toString();
}
