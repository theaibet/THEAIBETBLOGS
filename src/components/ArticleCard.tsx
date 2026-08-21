import Link from "next/link";
import type { Article } from "@/lib/content/types";
import { getSite } from "@/config/site";
import { formatDate } from "@/lib/format";
import { ArtImage } from "./ArtImage";

export function ArticleCard({ article, featured = false }: { article: Article; featured?: boolean }) {
  const site = getSite();
  const category = site.categories.find((c) => c.slug === article.categorySlug);
  const href = `/${article.categorySlug}/${article.slug}`;

  return (
    <article
      className={`group overflow-hidden rounded-brand border border-edge bg-surface transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl ${
        featured ? "md:col-span-2" : ""
      }`}
    >
      <Link href={href} className="block">
        <div className={`relative overflow-hidden ${featured ? "aspect-[21/10]" : "aspect-[16/9]"}`}>
          <ArtImage
            image={article.featuredImage}
            alt={article.featuredImage?.alt ?? article.title}
            className="absolute inset-0 h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent" />
          <span className="absolute left-4 top-4 rounded-brand bg-accent px-2.5 py-1 text-[11px] font-bold uppercase tracking-[0.08em] text-accent-contrast">
            {category?.name ?? article.categorySlug}
          </span>
          {featured && (
            <div className="absolute inset-x-0 bottom-0 hidden p-6 sm:block">
              <h2 className="font-heading max-w-3xl text-3xl leading-[1.08] text-white drop-shadow-sm">
                {article.title}
              </h2>
            </div>
          )}
        </div>
        <div className="p-5">
          {!featured && (
            <h2 className="font-heading text-xl leading-snug transition-colors group-hover:text-accent">
              {article.title}
            </h2>
          )}
          <p className={`line-clamp-2 text-sm leading-relaxed text-muted ${featured ? "" : "mt-2"}`}>
            {article.excerpt}
          </p>
          <div className="mt-4 flex items-center gap-2 text-xs text-muted">
            <span
              aria-hidden
              className="flex h-6 w-6 items-center justify-center rounded-full bg-accent text-[10px] font-bold text-accent-contrast"
            >
              {article.author.name
                .split(" ")
                .map((n) => n[0])
                .join("")}
            </span>
            <span className="font-semibold text-ink">{article.author.name}</span>
            <span aria-hidden>·</span>
            <time dateTime={article.publishedAt}>{formatDate(article.publishedAt)}</time>
          </div>
        </div>
      </Link>
    </article>
  );
}
