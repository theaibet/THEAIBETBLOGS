import Link from "next/link";
import type { Article } from "@/lib/content/types";
import { getSite } from "@/config/site";
import { formatDate } from "@/lib/format";
import { ArtImage } from "@/components/ArtImage";

export function HeroLead({
  article,
  compact = false,
}: {
  article: Article;
  compact?: boolean;
}) {
  const site = getSite();
  const category = site.categories.find((c) => c.slug === article.categorySlug);
  return (
    <Link
      href={`/${article.categorySlug}/${article.slug}`}
      className="group relative block overflow-hidden rounded-brand border border-edge"
    >
      <div className={`relative ${compact ? "aspect-[21/8]" : "aspect-[16/9] sm:aspect-[16/8]"}`}>
        <ArtImage
          image={article.featuredImage}
          alt={article.featuredImage?.alt ?? article.title}
          className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.02]"
          eager
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/25 to-transparent" />
      </div>
      <div className="absolute inset-x-0 bottom-0 p-5 sm:p-8">
        <span className="rounded-brand bg-accent px-3 py-1 text-[11px] font-bold uppercase tracking-[0.1em] text-accent-contrast">
          {category?.name ?? article.categorySlug}
        </span>
        <h2
          className={`font-heading mt-3 max-w-4xl leading-[1.05] text-white drop-shadow ${
            compact ? "text-2xl sm:text-4xl" : "text-2xl sm:text-5xl"
          }`}
        >
          {article.title}
        </h2>
        {!compact && (
          <p className="mt-3 hidden max-w-2xl text-base leading-relaxed text-white/85 sm:block">
            {article.excerpt}
          </p>
        )}
        <div className="mt-4 flex items-center gap-2 text-xs font-medium text-white/75">
          <span>{article.author.name}</span>
          <span aria-hidden>·</span>
          <time dateTime={article.publishedAt}>{formatDate(article.publishedAt)}</time>
        </div>
      </div>
    </Link>
  );
}
