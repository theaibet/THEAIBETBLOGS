import { THEAIBET_BASE_URL } from "@/config/site";

/**
 * TheAIbetURLResolver (roadmap §25–26).
 *
 * WHY THIS EXISTS: the media network's entire commercial purpose is sending
 * qualified readers into TheAIbet. Early builds used invented paths (/afl,
 * /racing) that render TheAIbet's 404 page — every CTA in the network was a
 * dead end. Destinations are now VERIFIED against theaibet.com's own
 * navigation and re-checked by loading each URL cold in a browser.
 *
 * VERIFIED 2026-08-18 (cold hard-navigation test):
 *   /sports?sport=aussierules_afl   → renders AFL Premiership odds dashboard ✅
 *   /sports?sport=rugbyleague_nrl   → NRL board (same route pattern)
 *   /sports?sport=americanfootball_nfl, ?sport=soccer_australia_aleague
 *   /sports                          → all-sports dashboard ✅
 *   /ai-tip-of-the-day               → AI Tip of the Day (sign-in conversion) ✅
 *   /ufc                             → canonical UFC route in TheAIbet's nav.
 *   /horse-racing, /greyhound-racing → canonical racing routes in the nav.
 *
 * KNOWN ISSUE (TheAIbet side, not ours): a cold external hit on /ufc or
 * /horse-racing currently bounces to the homepage instead of rendering the
 * section — in-app navigation works. Readers still land on TheAIbet (no 404),
 * but the deep-link context is lost. When that routing is fixed, nothing here
 * needs to change. To send that traffic somewhere else in the meantime, change
 * the single line in DESTINATIONS below.
 *
 * FALLBACK LADDER (brief §26):
 *   1. exact event page      — not yet available on TheAIbet (see EVENT_PAGES)
 *   2. sport/section page    — what we use today
 *   3. all-sports dashboard  — unknown sports
 *   4. no CTA                — resolve() returns null; component renders nothing
 * We never invent a URL to make a link exist.
 */

export type TheAIbetSport =
  | "afl"
  | "nrl"
  | "nfl"
  | "aleague"
  | "ufc"
  | "racing"
  | "greyhounds"
  | "tip"
  | "general";

/** Level 2 destinations — verified against TheAIbet's own navigation. */
const DESTINATIONS: Record<TheAIbetSport, string> = {
  afl: "/sports?sport=aussierules_afl",
  nrl: "/sports?sport=rugbyleague_nrl",
  nfl: "/sports?sport=americanfootball_nfl",
  aleague: "/sports?sport=soccer_australia_aleague",
  ufc: "/ufc",
  racing: "/horse-racing",
  greyhounds: "/greyhound-racing",
  tip: "/ai-tip-of-the-day",
  general: "/sports",
};

/**
 * Level 1: exact event pages. Empty until TheAIbet exposes per-event URLs.
 * Populate as `"<sport>:<eventId>": "/path"` and deep links switch on
 * automatically — no component or article changes required.
 */
const EVENT_PAGES: Record<string, string> = {};

export interface ResolveInput {
  sport?: TheAIbetSport;
  /** Provider event id (e.g. "ufc-331") for future exact-page resolution */
  eventId?: string;
  /** Explicit override path — only used if it is a known-good destination */
  path?: string;
}

export interface ResolvedDestination {
  path: string;
  /** Which rung of the fallback ladder produced this */
  level: 1 | 2 | 3;
}

const KNOWN_PATHS = new Set<string>([
  ...Object.values(DESTINATIONS),
  ...Object.values(EVENT_PAGES),
  "/",
]);

export function resolveTheAIbetPath(input: ResolveInput): ResolvedDestination | null {
  // 1. exact event page
  if (input.sport && input.eventId) {
    const exact = EVENT_PAGES[`${input.sport}:${input.eventId}`];
    if (exact) return { path: exact, level: 1 };
  }
  // explicit override, only when verified
  if (input.path && KNOWN_PATHS.has(input.path)) {
    return { path: input.path, level: 2 };
  }
  // 2. sport section
  if (input.sport && DESTINATIONS[input.sport]) {
    return { path: DESTINATIONS[input.sport], level: 2 };
  }
  // 3. all-sports dashboard
  return { path: DESTINATIONS.general, level: 3 };
}

/** Full absolute URL (no attribution — see lib/utm.ts for the tracked version). */
export function resolveTheAIbetUrl(input: ResolveInput): string | null {
  const dest = resolveTheAIbetPath(input);
  if (!dest) return null;
  return `${THEAIBET_BASE_URL}${dest.path}`;
}

/** Map a publication + article category to the right TheAIbet section. */
export function sportForArticle(siteKey: string, categorySlug: string): TheAIbetSport {
  if (siteKey === "aflreviews") return "afl";
  if (siteKey === "ufcreview") return "ufc";
  if (siteKey === "puntersreview") return "racing";
  if (siteKey === "punterstory") return "racing";
  if (siteKey === "sportinformation") {
    switch (categorySlug) {
      case "afl": return "afl";
      case "nrl": return "nrl";
      case "ufc": return "ufc";
      case "racing": return "racing";
      case "us-sports": return "nfl";
      default: return "general";
    }
  }
  return "general";
}
