export interface Author {
  slug: string;
  name: string;
  bio: string;
  role: string;
  avatarUrl?: string;
}

export interface ArticleImage {
  url: string;
  alt: string;
  width?: number;
  height?: number;
  /** Photographer / creator credit, shown under the image when present */
  credit?: string;
  /** Licence identifier, e.g. "owned", "editorial-licence", "cc0", "artwork" */
  license?: string;
  /** Where the image came from (provider id or original URL) */
  source?: string;
  /** Optional caption rendered under the image */
  caption?: string;
}

/**
 * The normalised article shape every frontend consumes.
 * Both the WordPress adapter and the fixture source map into this,
 * so swapping sources requires zero component changes.
 */
export interface Article {
  id: string;
  slug: string;
  title: string;
  /** Short standfirst / meta description */
  excerpt: string;
  /** Sanitised HTML body */
  bodyHtml: string;
  categorySlug: string;
  tags: string[];
  author: Author;
  publishedAt: string; // ISO 8601
  updatedAt: string; // ISO 8601
  featuredImage?: ArticleImage;
  /** Optional secondary image placed between major sections of long articles */
  inlineImage?: ArticleImage;
  /** SEO overrides (fall back to title/excerpt) */
  seoTitle?: string;
  seoDescription?: string;
  /**
   * The relevant TheAIbet destination for this article's contextual CTA.
   * Stored per-article (mirrors the "TheAIbet destination URL" field in the
   * content database). Path or absolute URL. Empty = no CTA rendered.
   */
  theaibetPath?: string;
  /** CTA label, e.g. "View the AI model analysis for UFC 330" */
  theaibetCtaLabel?: string;
  /** Master story ID from the central newsroom (attribution + dedup) */
  masterStoryId?: string;
}
