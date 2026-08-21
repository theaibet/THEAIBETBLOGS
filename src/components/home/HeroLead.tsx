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
      {/* The caption block sits in normal flow inside a min-height box rather
          than absolutely at the bottom. An absolutely-positioned overlay grows
          upward and gets clipped by overflow-hidden the moment a headline runs
          long — which is exactly what happened with the Wildcard Round story.
          This way the hero grows to fit the text instead of cropping it. */}
      <div className={`relative ${compact ? "min-h-[240px] sm:min-h-[300px]" : "min-h-[340px] sm:min-h-[440px]"}`}>
        <ArtImage
          image={article.featuredImage}
          alt={article.featuredImage?.alt ?? article.title}
          className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.02]"
          eager
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent" />
      <div className={`relative flex ${compact ? "min-h-[240px] sm:min-h-[300px]" : "min-h-[340px] sm:min-h-[440px]"} flex-col justify-end p-5 sm:p-8`}>
        <span className="w-fit self-start rounded-brand bg-accent px-3 py-1 text-[11px] font-bold uppercase tracking-[0.1em] text-accent-contrast">
          {category?.name ?? article.categorySlug}
        </span>
        <h2
          className={`font-heading mt-3 line-clamp-3 max-w-4xl leading-[1.08] text-white drop-shadow ${
            compact ? "text-2xl sm:text-3xl" : "text-2xl sm:text-[2.75rem]"
          }`}
        >
          {article.title}
        </h2>
        {!compact && (
          <p className="mt-3 hidden max-w-2xl text-base leading-relaxed text-white/85 sm:block">
            {article.excerpt}
          </p>
        )}
        <div className="mt-4 flex flex-wrap items-center gap-2 text-xs font-medium text-white/75">
          <span>{article.author.name}</span>
          <span aria-hidden>·</span>
          <time dateTime={article.publishedAt}>{formatDate(article.publishedAt)}</time>
        </div>
      </div>
      </div>
    </Link>
  );
}
