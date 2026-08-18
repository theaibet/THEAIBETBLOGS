import { getArticles } from "@/lib/content";
import { getSite } from "@/config/site";
import { ArticleCard } from "@/components/ArticleCard";
import { JsonLd } from "@/components/JsonLd";
import { websiteJsonLd } from "@/lib/seo";
import Link from "next/link";

export default async function HomePage() {
  const site = getSite();
  const articles = await getArticles(24);
  const [lead, ...rest] = articles;

  return (
    <>
      <JsonLd data={websiteJsonLd()} />
      <h1 className="sr-only">
        {site.name} — {site.tagline}
      </h1>

      {lead && (
        <section aria-label="Lead story" className="grid gap-6 md:grid-cols-3">
          <ArticleCard article={lead} featured />
          <div className="flex flex-col gap-6">
            {rest.slice(0, 1).map((a) => (
              <ArticleCard key={a.slug} article={a} />
            ))}
          </div>
        </section>
      )}

      <section aria-label="Latest stories" className="mt-12">
        <div className="flex items-baseline justify-between">
          <h2 className="font-heading text-2xl">Latest</h2>
        </div>
        <div className="mt-6 grid gap-6 md:grid-cols-3">
          {rest.slice(1).map((a) => (
            <ArticleCard key={a.slug} article={a} />
          ))}
        </div>
      </section>

      <section aria-label="Browse by section" className="mt-14 rounded-brand border border-edge bg-surface p-6">
        <h2 className="font-heading text-xl">Browse {site.name}</h2>
        <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {site.categories.map((c) => (
            <Link
              key={c.slug}
              href={`/category/${c.slug}`}
              className="group rounded-brand border border-edge p-4 transition hover:border-accent"
            >
              <div className="font-heading text-base transition group-hover:text-accent">{c.name}</div>
              <p className="mt-1 text-sm leading-relaxed text-muted">{c.description}</p>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
