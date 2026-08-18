import Link from "next/link";
import type { Article } from "@/lib/content/types";
import { getSite } from "@/config/site";
import { getAFLData } from "@/lib/sports/afl/provider";
import { LadderTable } from "@/components/afl/LadderTable";
import { RoundGames } from "@/components/afl/RoundGames";
import { ArticleCard } from "@/components/ArticleCard";
import { HeroLead } from "./HeroLead";
import { SectionRule } from "./SectionRule";
import { formatDate } from "@/lib/format";

/**
 * AFL Reviews homepage — an AFL destination, not a blog grid (brief §1).
 * Hero + latest rail, then the real current round, then the live ladder
 * beside analysis. Data modules hide gracefully if the provider is down.
 */
export async function AFLHomepage({ articles }: { articles: Article[] }) {
  const site = getSite();
  const afl = await getAFLData();
  const [lead, ...rest] = articles;

  return (
    <>
      {/* HERO + latest stories */}
      <section aria-label="Top stories" className="grid gap-8 lg:grid-cols-3">
        <div className="lg:col-span-2">{lead && <HeroLead article={lead} />}</div>
        <aside className="flex flex-col gap-4">
          {rest.slice(0, 3).map((a) => (
            <Link
              key={a.slug}
              href={`/${a.categorySlug}/${a.slug}`}
              className="group rounded-brand border border-edge bg-surface p-4 transition hover:border-accent"
            >
              <span className="text-[10px] font-bold uppercase tracking-[0.14em] text-accent">
                {site.categories.find((c) => c.slug === a.categorySlug)?.name ?? a.categorySlug}
              </span>
              <h3 className="font-heading mt-1 text-base leading-snug transition-colors group-hover:text-accent">
                {a.title}
              </h3>
              <div className="mt-1.5 text-xs text-muted">
                {a.author.name} · {formatDate(a.publishedAt)}
              </div>
            </Link>
          ))}
        </aside>
      </section>

      {/* CURRENT ROUND — real fixture data */}
      {afl && afl.currentRoundGames.length > 0 && (
        <section aria-label="Current round" className="mt-14">
          <SectionRule
            title={afl.currentRoundName}
            kicker={`Season ${new Date(afl.currentRoundGames[0].dateAEST).getFullYear()} · ${afl.attribution}`}
          />
          <div className="mt-6">
            <RoundGames games={afl.currentRoundGames} />
          </div>
          <div className="mt-4 flex gap-4 text-sm font-semibold">
            <Link href="/fixtures" className="text-accent hover:underline">
              All fixtures →
            </Link>
            <Link href="/results" className="text-accent hover:underline">
              Results →
            </Link>
          </div>
        </section>
      )}

      {/* LADDER + ANALYSIS side by side */}
      <section aria-label="Ladder and analysis" className="mt-14 grid gap-8 lg:grid-cols-5">
        {afl && (
          <div className="lg:col-span-2">
            <SectionRule title="AFL Ladder" kicker="Live" />
            <div className="mt-6">
              <LadderTable standings={afl.standings} compact attribution={afl.attribution} />
            </div>
          </div>
        )}
        <div className={afl ? "lg:col-span-3" : "lg:col-span-5"}>
          <SectionRule title="Analysis" kicker={site.tagline} />
          <div className="mt-6 grid gap-6 sm:grid-cols-2">
            {rest.map((a) => (
              <ArticleCard key={a.slug} article={a} />
            ))}
          </div>
        </div>
      </section>

      {/* LAST ROUND RESULTS */}
      {afl && afl.lastResults.length > 0 && (
        <section aria-label="Last round results" className="mt-14">
          <SectionRule title={`Round ${afl.lastCompletedRound} Results`} kicker="Final scores" />
          <div className="mt-6">
            <RoundGames games={afl.lastResults} columns={3} />
          </div>
        </section>
      )}

      {/* SECTIONS */}
      <section aria-label="Browse by section" className="mt-16">
        <SectionRule title="Browse AFL Reviews" />
        <div className="mt-7 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {site.categories.map((c) => (
            <Link
              key={c.slug}
              href={`/category/${c.slug}`}
              className="group rounded-brand border border-edge bg-surface p-5 transition-all hover:-translate-y-0.5 hover:border-accent hover:shadow-lg"
            >
              <span className="font-heading text-lg transition-colors group-hover:text-accent">
                {c.name}
              </span>
              <p className="mt-1.5 text-sm leading-relaxed text-muted">{c.description}</p>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
