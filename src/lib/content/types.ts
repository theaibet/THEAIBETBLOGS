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
