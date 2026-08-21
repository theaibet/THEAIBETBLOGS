import Link from "next/link";
import type { Article } from "@/lib/content/types";
import { getSite } from "@/config/site";
import { formatDate } from "@/lib/format";
import { getPopulatedCategories } from "@/lib/content";
import { ArtImage } from "@/components/ArtImage";
import { ArticleCard } from "@/components/ArticleCard";
import { HeroLead } from "./HeroLead";
import { SectionRule } from "./SectionRule";

async function CategoryTiles({ prominent = false }: { prominent?: boolean }) {
  const categories = await getPopulatedCategories();
  return (
    <div className={`grid gap-5 sm:grid-cols-2 ${prominent ? "lg:grid-cols-3" : "lg:grid-cols-3"}`}>
      {categories.map((c) => (
        <Link
          key={c.slug}
          href={`/category/${c.slug}`}
          className="group rounded-brand border border-edge bg-surface p-5 transition-all hover:-translate-y-0.5 hover:border-accent hover:shadow-lg"
        >
          <div className="flex items-center justify-between">
            <span className="font-heading text-lg transition-colors group-hover:text-accent">
              {c.name}
            </span>
            <span
              aria-hidden
              className="text-accent opacity-0 transition-all group-hover:translate-x-1 group-hover:opacity-100"
            >
              →
            </span>
          </div>
          <p className="mt-1.5 text-sm leading-relaxed text-muted">{c.description}</p>
        </Link>
      ))}
    </div>
  );
}

function RailItem({ article, index }: { article: Article; index: number }) {
  return (
    <li>
      <Link
        href={`/${article.categorySlug}/${article.slug}`}
        className="group flex gap-4 border-b border-edge py-4 first:pt-0 last:border-0"
      >
        <span className="font-heading text-3xl leading-none text-accent/70">
          {String(index + 1).padStart(2, "0")}
        </span>
        <div>
          <h3 className="font-heading text-base leading-snug transition-colors group-hover:text-accent">
            {article.title}
          </h3>
          <div className="mt-1.5 text-xs text-muted">
            {article.author.name} · {formatDate(article.publishedAt)}
          </div>
        </div>
      </Link>
    </li>
  );
}

/** NEWS — modern sports daily: dominant lead + numbered rail, then grid. */
export function NewsHome({ articles }: { articles: Article[] }) {
  const site = getSite();
  const [lead, ...rest] = articles;
  return (
    <>
      <section aria-label="Top stories" className="grid gap-8 lg:grid-cols-3">
        <div className="lg:col-span-2">{lead && <HeroLead article={lead} />}</div>
        <aside className="rounded-brand border border-edge bg-surface p-5">
          <h2 className="font-heading border-b-2 border-accent pb-2 text-sm uppercase tracking-[0.15em]">
            The Latest
          </h2>
          <ul className="mt-2">
            {rest.slice(0, 4).map((a, i) => (
              <RailItem key={a.slug} article={a} index={i} />
            ))}
          </ul>
        </aside>
      </section>

      <section aria-label="More stories" className="mt-14">
        <SectionRule title="Analysis" kicker={site.tagline} />
        <div className="mt-7 grid gap-7 md:grid-cols-3">
          {rest.map((a) => (
            <ArticleCard key={a.slug} article={a} />
          ))}
        </div>
      </section>

      <section aria-label="Browse by section" className="mt-16">
        <SectionRule title={`Browse ${site.name}`} />
        <div className="mt-7">
          <CategoryTiles />
        </div>
      </section>
    </>
  );
}

/** BROADSHEET — premium racing journal: ruled columns, text-forward. */
export function BroadsheetHome({ articles }: { articles: Article[] }) {
  const site = getSite();
  const [lead, ...rest] = articles;
  return (
    <>
      {lead && (
        <section aria-label="Lead story" className="border-b-2 border-ink/90 pb-10">
          <HeroLead article={lead} />
        </section>
      )}

      <section aria-label="Today's racing reads" className="mt-10">
        <div className="grid gap-0 divide-y divide-edge md:grid-cols-3 md:divide-x md:divide-y-0">
          {rest.map((a) => {
            const cat = site.categories.find((c) => c.slug === a.categorySlug);
            return (
              <Link
                key={a.slug}
                href={`/${a.categorySlug}/${a.slug}`}
                className="group flex flex-col gap-3 py-6 md:px-7 md:py-2 md:first:pl-0 md:last:pr-0"
              >
                <span className="text-[11px] font-bold uppercase tracking-[0.14em] text-accent">
                  {cat?.name ?? a.categorySlug}
                </span>
                <h3 className="font-heading text-2xl leading-snug transition-colors group-hover:text-accent">
                  {a.title}
                </h3>
                <p className="line-clamp-3 text-sm leading-relaxed text-muted">{a.excerpt}</p>
                <div className="mt-auto overflow-hidden rounded-brand border border-edge">
                  <ArtImage
                    image={a.featuredImage}
                    alt={a.featuredImage?.alt ?? a.title}
                    className="aspect-[16/7] w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                  />
                </div>
                <div className="text-xs text-muted">
                  {a.author.name} · {formatDate(a.publishedAt)}
                </div>
              </Link>
            );
          })}
        </div>
      </section>

      <section aria-label="Browse by section" className="mt-16">
        <SectionRule title="The Form Guide" kicker="Sections" />
        <div className="mt-7">
          <CategoryTiles />
        </div>
      </section>
    </>
  );
}

/** MAGAZINE — editorial storytelling: centred deck, alternating features. */
export function MagazineHome({ articles }: { articles: Article[] }) {
  const site = getSite();
  const [lead, ...rest] = articles;
  return (
    <>
      <p className="mx-auto max-w-2xl text-center text-sm font-medium uppercase tracking-[0.3em] text-muted">
        {site.tagline}
      </p>

      {lead && (
        <section aria-label="Feature story" className="mt-8">
          <Link href={`/${lead.categorySlug}/${lead.slug}`} className="group block">
            <div className="overflow-hidden rounded-brand border border-edge">
              <ArtImage
                image={lead.featuredImage}
                alt={lead.featuredImage?.alt ?? lead.title}
                className="aspect-[21/9] w-full object-cover transition-transform duration-700 group-hover:scale-[1.02]"
                eager
              />
            </div>
            <div className="mx-auto mt-7 max-w-3xl text-center">
              <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-accent">
                {site.categories.find((c) => c.slug === lead.categorySlug)?.name}
              </span>
              <h2 className="font-heading mt-3 text-3xl leading-[1.1] transition-colors group-hover:text-accent sm:text-5xl">
                {lead.title}
              </h2>
              <p className="mt-4 text-lg leading-relaxed text-muted">{lead.excerpt}</p>
              <div className="mt-4 text-xs uppercase tracking-[0.15em] text-muted">
                By {lead.author.name} · {formatDate(lead.publishedAt)}
              </div>
            </div>
          </Link>
        </section>
      )}

      <div className="mx-auto mt-16 max-w-4xl space-y-12">
        {rest.map((a, i) => {
          const cat = site.categories.find((c) => c.slug === a.categorySlug);
          return (
            <Link
              key={a.slug}
              href={`/${a.categorySlug}/${a.slug}`}
              className={`group grid items-center gap-7 border-t border-edge pt-12 sm:grid-cols-2 ${
                i % 2 ? "sm:[&>*:first-child]:order-2" : ""
              }`}
            >
              <div className="overflow-hidden rounded-brand border border-edge">
                <ArtImage
                  image={a.featuredImage}
                  alt={a.featuredImage?.alt ?? a.title}
                  className="aspect-[4/3] w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                />
              </div>
              <div>
                <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-accent">
                  {cat?.name ?? a.categorySlug}
                </span>
                <h3 className="font-heading mt-2 text-2xl leading-snug transition-colors group-hover:text-accent sm:text-3xl">
                  {a.title}
                </h3>
                <p className="mt-3 leading-relaxed text-muted">{a.excerpt}</p>
                <div className="mt-4 text-xs uppercase tracking-[0.15em] text-muted">
                  By {a.author.name} · {formatDate(a.publishedAt)}
                </div>
              </div>
            </Link>
          );
        })}
      </div>

      <section aria-label="Browse by section" className="mx-auto mt-16 max-w-4xl">
        <SectionRule title="Read by theme" />
        <div className="mt-7">
          <CategoryTiles />
        </div>
      </section>
    </>
  );
}

/** INDEX — authoritative reference: compact hero, sections first, then reads. */
export function IndexHome({ articles }: { articles: Article[] }) {
  const site = getSite();
  const [lead, ...rest] = articles;
  return (
    <>
      {lead && <HeroLead article={lead} compact />}

      <section aria-label="Browse by sport" className="mt-12">
        <SectionRule title="Find your sport" kicker="Reference sections" />
        <div className="mt-7">
          <CategoryTiles prominent />
        </div>
      </section>

      <section aria-label="Latest explainers" className="mt-14">
        <SectionRule title="Latest guides & explainers" kicker={site.tagline} />
        <div className="mt-7 grid gap-7 md:grid-cols-3">
          {rest.map((a) => (
            <ArticleCard key={a.slug} article={a} />
          ))}
        </div>
      </section>
    </>
  );
}
