import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getSite, getSiteUrl } from "@/config/site";
import { getUFCData, formatEventDate, daysUntil } from "@/lib/sports/ufc/provider";
import { FightCard } from "@/components/ufc/FightCard";

export function generateMetadata(): Metadata {
  return {
    title: "UFC Schedule — Upcoming Events and Fight Cards",
    description:
      "Every upcoming UFC event: dates in AEST, venues, and the full announced fight card for each card.",
    alternates: { canonical: `${getSiteUrl()}/events` },
  };
}

export default async function EventsPage() {
  const site = getSite();
  if (site.key !== "ufcreview") notFound();
  const ufc = await getUFCData();

  return (
    <>
      <header className="border-b-2 border-ink/90 pb-5">
        <h1 className="font-heading text-3xl sm:text-4xl">UFC Schedule</h1>
        <p className="mt-2 max-w-2xl text-muted">
          Upcoming UFC events with announced fight cards. Dates shown are the Australian broadcast day (AEST).
        </p>
      </header>

      {ufc ? (
        <div className="mt-10 space-y-12">
          {ufc.upcoming.map((e) => {
            const days = daysUntil(e.dateAEST);
            return (
              <section key={e.id}>
                <div className="flex flex-wrap items-baseline justify-between gap-2 border-b border-edge pb-3">
                  <h2 className="font-heading text-xl">{e.name}</h2>
                  <div className="text-sm text-muted">
                    {formatEventDate(e.dateAEST)} · {e.venue}, {e.city}
                    {days > 0 && <span className="ml-2 font-bold text-accent">{days}d</span>}
                  </div>
                </div>
                <div className="mt-5">
                  <FightCard event={e} />
                </div>
              </section>
            );
          })}
          <p className="text-xs text-muted">{ufc.source} · verified {ufc.verifiedAt}</p>
        </div>
      ) : (
        <p className="mt-8 text-muted">Schedule data is temporarily unavailable — check back shortly.</p>
      )}
    </>
  );
}
