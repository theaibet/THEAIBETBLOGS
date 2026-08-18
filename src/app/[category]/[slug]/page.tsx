import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getArticleBySlug, getArticles, getRelatedArticles } from "@/lib/content";
import { getSite } from "@/config/site";
import { articleJsonLd, articleUrl, breadcrumbJsonLd } from "@/lib/seo";
import { JsonLd } from "@/components/JsonLd";
import { TheAIbetCta } from "@/components/TheAIbetCta";
import { ArtImage, ImageCredit } from "@/components/ArtImage";

/**
 * Editorial layout for long reads: split the body ahead of its final <h2>
 * so a secondary image can sit between major sections (imagery brief §5).
 */
function splitForInlineImage(bodyHtml: string): [string, string] | null {
  const marker = "<h2>";
  const first = bodyHtml.indexOf(marker);
  const last = bodyHtml.lastIndexOf(marker);
  if (first === -1 || last === first) return null;
  return [bodyHtml.slice(0, last), bodyHtml.slice(last)];
}
import { RelatedStories } from "@/components/RelatedStories";
import { formatDate } from "@/lib/format";

interface Params {
  category: string;
  slug: string;
}

export async function generateStaticParams(): Promise<Params[]> {
  const articles = await getArticles(100);
  return articles.map((a) => ({ category: a.categorySlug, slug: a.slug }));
}

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const { slug } = await params;
  const article = await getArticleBySlug(slug);
  if (!article) return {};
  return {
    title: article.seoTitle ?? article.title,
    description: article.seoDescription ?? article.excerpt,
    alternates: { canonical: articleUrl(article) },
    openGraph: {
      type: "article",
      title: article.seoTitle ?? article.title,
      description: article.seoDescription ?? article.excerpt,
      url: articleUrl(article),
      publishedTime: article.publishedAt,
      modifiedTime: article.updatedAt,
      authors: [article.author.name],
      ...(article.featuredImage ? { images: [{ url: article.featuredImage.url, alt: article.featuredImage.alt }] } : {}),
    },
  };
}

export default async function ArticlePage({ params }: { params: Promise<Params> }) {
  const { category, slug } = await params;
  const article = await getArticleBySlug(slug);
  if (!article || article.categorySlug !== category) notFound();

  const site = getSite();
  const cat = site.categories.find((c) => c.slug === article.categorySlug);
  const related = await getRelatedArticles(article, 3);

  return (
    <>
      <JsonLd data={articleJsonLd(article)} />
      <JsonLd data={breadcrumbJsonLd(article)} />

      <article className="mx-auto max-w-3xl">
        <nav aria-label="Breadcrumb" className="text-sm text-muted">
          <ol className="flex flex-wrap items-center gap-1.5">
            <li>
              <Link href="/" className="transition hover:text-accent">Home</Link>
            </li>
            <li aria-hidden>/</li>
            <li>
              <Link href={`/category/${article.categorySlug}`} className="transition hover:text-accent">
                {cat?.name ?? article.categorySlug}
              </Link>
            </li>
          </ol>
        </nav>

        <header className="mt-4">
          <h1 className="font-heading text-3xl leading-[1.08] sm:text-5xl">{article.title}</h1>
          <p className="mt-4 text-lg leading-relaxed text-muted">{article.excerpt}</p>
          <div className="mt-6 flex flex-wrap items-center gap-x-3 gap-y-1 border-y border-edge py-4 text-sm">
            <Link
              href={`/author/${article.author.slug}`}
              className="font-semibold transition hover:text-accent"
            >
              {article.author.name}
            </Link>
            <span className="text-muted">{article.author.role}</span>
            <span aria-hidden className="text-muted">·</span>
            <time dateTime={article.publishedAt} className="text-muted">
              {formatDate(article.publishedAt)}
            </time>
            {article.updatedAt !== article.publishedAt && (
              <span className="text-muted">(updated {formatDate(article.updatedAt)})</span>
            )}
          </div>
        </header>

        <figure className="mt-8">
          <div className="overflow-hidden rounded-brand border border-edge">
            <ArtImage
              image={article.featuredImage}
              alt={article.featuredImage?.alt ?? article.title}
              className="aspect-[16/9] w-full object-cover"
              eager
            />
          </div>
          <ImageCredit image={article.featuredImage} />
        </figure>

        {(() => {
          const split = article.inlineImage ? splitForInlineImage(article.bodyHtml) : null;
          if (!split) {
            return (
              <div
                className="article-body mt-9"
                dangerouslySetInnerHTML={{ __html: article.bodyHtml }}
              />
            );
          }
          const [before, after] = split;
          return (
            <>
              <div className="article-body mt-9" dangerouslySetInnerHTML={{ __html: before }} />
              <figure className="my-10">
                <div className="overflow-hidden rounded-brand border border-edge">
                  <ArtImage
                    image={article.inlineImage}
                    alt={article.inlineImage?.alt ?? article.title}
                    className="aspect-[21/9] w-full object-cover"
                  />
                </div>
                <ImageCredit image={article.inlineImage} />
              </figure>
              <div className="article-body" dangerouslySetInnerHTML={{ __html: after }} />
            </>
          );
        })()}

        <TheAIbetCta article={article} />

        {article.tags.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {article.tags.map((t) => (
              <span
                key={t}
                className="rounded-brand border border-edge bg-surface px-3 py-1 text-xs text-muted"
              >
                {t}
              </span>
            ))}
          </div>
        )}
      </article>

      <div className="mx-auto max-w-5xl">
        <RelatedStories articles={related} />
      </div>
    </>
  );
}
