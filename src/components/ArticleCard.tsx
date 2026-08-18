import Link from "next/link";
import Image from "next/image";
import type { Article } from "@/lib/content/types";
import { getSite } from "@/config/site";
import { formatDate } from "@/lib/format";

export function ArticleCard({ article, featured = false }: { article: Article; featured?: boolean }) {
  const site = getSite();
  const category = site.categories.find((c) => c.slug === article.categorySlug);
  const href = `/${article.categorySlug}/${article.slug}`;

  return (
    <article
      className={`group overflow-hidden rounded-brand border border-edge bg-surface transition hover:shadow-lg ${
        featured ? "md:col-span-2" : ""
      }`}
    >
      <Link href={href} className="block">
        <div
          className={`relative flex items-end bg-gradient-to-br from-accent/25 via-accent/10 to-transparent ${
            featured ? "aspect-[21/9]" : "aspect-[16/9]"
          }`}
        >
          {article.featuredImage ? (
            <Image
              src={article.featuredImage.url}
              alt={article.featuredImage.alt}
              fill
              className="object-cover"
              sizes={featured ? "(min-width: 768px) 66vw, 100vw" : "(min-width: 768px) 33vw, 100vw"}
            />
          ) : (
            <div aria-hidden className="absolute inset-0 flex items-center justify-center">
              <span className="font-heading select-none text-5xl tracking-tight opacity-[0.08]">
                {site.logoText}
              </span>
            </div>
          )}
          <span className="relative m-3 rounded-brand bg-accent px-2.5 py-1 text-xs font-semibold text-accent-contrast">
            {category?.name ?? article.categorySlug}
          </span>
        </div>
        <div className="p-5">
          <h2
            className={`font-heading leading-snug transition group-hover:text-accent ${
              featured ? "text-2xl" : "text-lg"
            }`}
          >
            {article.title}
          </h2>
          <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-muted">{article.excerpt}</p>
          <div className="mt-4 flex items-center gap-2 text-xs text-muted">
            <span className="font-medium text-ink">{article.author.name}</span>
            <span aria-hidden>·</span>
            <time dateTime={article.publishedAt}>{formatDate(article.publishedAt)}</time>
          </div>
        </div>
      </Link>
    </article>
  );
}
