import { getSite, getSiteUrl } from "@/config/site";
import type { Article } from "./content/types";

export function articleUrl(article: Article): string {
  return `${getSiteUrl()}/${article.categorySlug}/${article.slug}`;
}

/** NewsArticle JSON-LD (roadmap §8: Article schema) */
export function articleJsonLd(article: Article) {
  const site = getSite();
  const url = articleUrl(article);
  return {
    "@context": "https://schema.org",
    "@type": "NewsArticle",
    headline: article.title,
    description: article.excerpt,
    datePublished: article.publishedAt,
    dateModified: article.updatedAt,
    mainEntityOfPage: { "@type": "WebPage", "@id": url },
    url,
    ...(article.featuredImage ? { image: [article.featuredImage.url] } : {}),
    author: {
      "@type": "Person",
      name: article.author.name,
      url: `${getSiteUrl()}/author/${article.author.slug}`,
    },
    publisher: {
      "@type": "Organization",
      name: site.name,
      url: getSiteUrl(),
    },
    keywords: article.tags.join(", "),
  };
}

/** BreadcrumbList JSON-LD (roadmap §8: Breadcrumb schema) */
export function breadcrumbJsonLd(article: Article) {
  const site = getSite();
  const category = site.categories.find((c) => c.slug === article.categorySlug);
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: getSiteUrl() },
      {
        "@type": "ListItem",
        position: 2,
        name: category?.name ?? article.categorySlug,
        item: `${getSiteUrl()}/category/${article.categorySlug}`,
      },
      { "@type": "ListItem", position: 3, name: article.title, item: articleUrl(article) },
    ],
  };
}

/** WebSite JSON-LD for the homepage */
export function websiteJsonLd() {
  const site = getSite();
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: site.name,
    url: getSiteUrl(),
    description: site.description,
    potentialAction: {
      "@type": "SearchAction",
      target: `${getSiteUrl()}/search?q={search_term_string}`,
      "query-input": "required name=search_term_string",
    },
  };
}

/** FAQPage JSON-LD for articles with FAQ blocks (AEO: answer-engine surfacing) */
export function faqJsonLd(faq: { q: string; a: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faq.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
}
