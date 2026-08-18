import { BRANDS } from "./brands";
import type { BrandConfig, SiteKey } from "./types";

const VALID_KEYS = Object.keys(BRANDS) as SiteKey[];

/**
 * Resolves the active brand from the SITE env var.
 * Each Vercel project deploys the same repo with a different SITE value:
 *   SITE=aflreviews | ufcreview | puntersreview | sportinformation | punterstory
 */
export function getSite(): BrandConfig {
  const key = (process.env.SITE ?? process.env.NEXT_PUBLIC_SITE ?? "aflreviews") as SiteKey;
  if (!VALID_KEYS.includes(key)) {
    throw new Error(
      `Invalid SITE env var "${key}". Expected one of: ${VALID_KEYS.join(", ")}`
    );
  }
  return BRANDS[key];
}

export function getSiteUrl(): string {
  const site = getSite();
  // Allow preview deployments to override
  return process.env.NEXT_PUBLIC_SITE_URL ?? `https://${site.domain}`;
}

export const THEAIBET_BASE_URL =
  process.env.NEXT_PUBLIC_THEAIBET_URL ?? "https://www.theaibet.com";
