export type SiteKey =
  | "aflreviews"
  | "ufcreview"
  | "puntersreview"
  | "sportinformation"
  | "punterstory";

export interface BrandTheme {
  /** Page background */
  bg: string;
  /** Card / surface background */
  surface: string;
  /** Primary text */
  text: string;
  /** Secondary text */
  muted: string;
  /** Brand accent (links, highlights, category chips) */
  accent: string;
  /** Text colour on top of accent */
  accentContrast: string;
  /** Header / footer background */
  chrome: string;
  /** Text colour on chrome */
  chromeText: string;
  /** Border colour */
  border: string;
  /** Accent used on top of chrome (wordmark); defaults to accent */
  chromeAccent?: string;
  /** Heading font stack */
  fontHeading: string;
  /** Body font stack */
  fontBody: string;
  /** Heading treatment */
  headingTransform: "none" | "uppercase";
  headingWeight: number;
  /** Corner radius token, e.g. "0.75rem" or "0" */
  radius: string;
}

export interface NavCategory {
  slug: string;
  name: string;
  description: string;
}

export interface BrandConfig {
  key: SiteKey;
  name: string;
  domain: string; // production domain, no protocol
  tagline: string;
  description: string;
  /** Sport(s) this publication covers — used for CTA copy + schema */
  sports: string[];
  /** Publication categories (mirrors WordPress categories) */
  categories: NavCategory[];
  theme: BrandTheme;
  /** Default TheAIbet section this brand feeds into, used when an article has no explicit destination */
  theaibetDefaultPath: string;
  /** Wordmark treatment */
  logoText: string;
  logoAccentText?: string;
  twitter?: string;
}
