import { getPopulatedCategories } from "@/lib/content";
import Link from "next/link";
import type { Article } from "@/lib/content/types";
import { getSite } from "@/config/site";
import { getUFCData, formatEventDate } from "@/lib/sports/ufc/provider";
import { NextEvent } from "@/components/ufc/NextEvent";
import { FightCard } from "@/components/ufc/FightCard";
import { ArticleCard } from "@/components/ArticleCard";
import { SectionRule } from "./SectionRule";

/**
 * UFC Review homepage — an event product, not a blog grid (brief §2).
 * Next event + countdown + card → analysis → recent results → schedule.
 */
export async function UFCHomepage({ articles }: { articles: Article[] }) {
  const categories = await getPopulatedCategories();
  const site = getSite();
  const ufc = await getUFCData();
  const [lead, ...rest] = articles;

  return (
    <>
      {ufc?.nextEvent && <NextEvent event={ufc.nextEvent} />}

      <section aria-label="Latest analysis" className="mt-14">
        <SectionRule title="Latest Analysis" kicker={site.tagline} />
        <div className="mt-7 grid gap-7 md:grid-cols-3">
          {lead && <ArticleCard article={lead} featured />}
          {rest.slice(0, 1).map((a) => <ArticleCard key={a.slug} article={a} />)}
        </div>
        <div className="mt-7 grid gap-7 md:grid-cols-3">
          {rest.slice(1).map((a) => <ArticleCard key={a.slug} article={a} />)}
        </div>
      </section>

      {ufc && ufc.recentResults.length > 0 && (
        <section aria-label="Recent results" className="mt-14">
          <SectionRule title="Latest Results" kicker={ufc.recentResults[0].shortName} />
          <div className="mt-6 grid gap-6 lg:grid-cols-2">
            <div>
              <div className="mb-3 text-sm text-muted">
                {ufc.recentResults[0].name} · {formatEventDate(ufc.recentResults[0].dateAEST)} · {ufc.recentResults[0].city}
              </div>
              <FightCard event={ufc.recentResults[0]} />
            </div>
            <div className="rounded-brand border border-edge bg-surface p-6">
              <h3 className="font-heading text-lg">Upcoming Schedule</h3>
              <ul className="mt-4 space-y-3">
                {ufc.upcoming.map((e) => (
                  <li key={e.id} className="flex items-baseline justify-between gap-3 border-b border-edge pb-3 last:border-0">
                    <div>
                      <div className="font-heading text-sm">{e.shortName}</div>
                      <div className="text-xs text-muted">
                        {e.tbaMainEvent
                          ? "Main event to be announced"
                          : e.bouts.find((b) => b.slot === "main")
                            ? `${e.bouts.find((b) => b.slot === "main")!.a.name} v ${e.bouts.find((b) => b.slot === "main")!.b.name}`
                            : ""}
                      </div>
                    </div>
                    <div className="shrink-0 text-right text-xs text-muted">
                      {formatEventDate(e.dateAEST)}
                      <div className="text-[10px]">{e.city.split(",")[0]}</div>
                    </div>
                  </li>
                ))}
              </ul>
              <p className="mt-4 text-[11px] text-muted">
                Card data verified {ufc.verifiedAt} against ufc.com. Cards change — check the promotion for late changes.
              </p>
            </div>
          </div>
        </section>
      )}

      <section aria-label="Browse" className="mt-16">
        <SectionRule title="Browse UFC Review" />
        <div className="mt-7 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {categories.map((c) => (
            <Link key={c.slug} href={`/category/${c.slug}`}
              className="group rounded-brand border border-edge bg-surface p-5 transition-all hover:-translate-y-0.5 hover:border-accent hover:shadow-lg">
              <span className="font-heading text-lg transition-colors group-hover:text-accent">{c.name}</span>
              <p className="mt-1.5 text-sm leading-relaxed text-muted">{c.description}</p>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
