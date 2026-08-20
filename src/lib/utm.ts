import { getSite } from "@/config/site";
import type { Article } from "./content/types";
import { resolveTheAIbetUrl, sportForArticle, type TheAIbetSport } from "./theaibet/resolver";

/**
 * Builds the contextual TheAIbet destination URL for an article, with full UTM
 * attribution so conversions trace back to the exact domain + article (§7).
 *
 * Destinations come from TheAIbetURLResolver — never from hand-written paths,
 * because invented paths render TheAIbet's 404 page and kill the funnel.
 *
 * utm_source   = publication domain (e.g. ufcreview.com.au)
 * utm_medium   = referral
 * utm_campaign = media-network
 * utm_content  = article slug
 * utm_term     = master story ID when present
 */
export function buildTheAIbetUrl(article: Article): string {
  const site = getSite();
  const sport: TheAIbetSport =
    article.theaibetSport ?? sportForArticle(site.key, article.categorySlug);

  const base = resolveTheAIbetUrl({
    sport,
    eventId: article.theaibetEventId,
    path: article.theaibetPath,
  });
  // Resolver always returns at least the all-sports dashboard.
  const url = new URL(base ?? "https://www.theaibet.com/sports");
  url.searchParams.set("utm_source", site.domain);
  url.searchParams.set("utm_medium", "referral");
  url.searchParams.set("utm_campaign", "media-network");
  url.searchParams.set("utm_content", article.slug);
  if (article.masterStoryId) url.searchParams.set("utm_term", article.masterStoryId);
  return url.toString();
}
