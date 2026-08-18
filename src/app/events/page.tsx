import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getSite, getSiteUrl } from "@/config/site";
import { getUFCEvents, nextEvent, formatEventDate } from "@/lib/sports/ufc/provider";
import { EventCard } from "@/components/ufc/EventCard";
import { EventCountdown } from "@/components/ufc/EventCountdown";
import { JsonLd } from "@/components/JsonLd";

export function generateMetadata(): Metadata {
  return {
    title: "UFC Events — Upcoming Fight Cards & Countdown",
    description:
      "Every confirmed upcoming UFC event: dates, venues and main event matchups, with a live countdown to the next card.",
    alternates: { canonical: `${getSiteUrl()}/events` },
  };
}

export default async function EventsPage() {
  const site = getSite();
  if (site.key !== "ufcreview") notFound();
  const snapshot = await getUFCEvents();
  const events = snapshot?.events ?? [];
  const next = nextEvent(events);

  const itemListJsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: events.map((e, i) => ({
      "@type": "ListItem",
      position: i + 1,
      url: `${getSiteUrl()}/events/${e.slug}`,
      name: e.name,
    })),
  };

  return (
    <>
      {snapshot && <JsonLd data={itemListJsonLd} />}
      <header className="border-b-2 border-ink/90 pb-5">
        <h1 className="font-heading text-3xl sm:text-4xl">UFC Events</h1>
        <p className="mt-2 max-w-2xl text-muted">
          Confirmed upcoming UFC cards — dates, venues and main event matchups.
        </p>
      </header>

      {next && (
        <section className="mt-8 rounded-brand border border-accent/40 bg-accent/[0.06] p-6 sm:p-8">
          <div className="text-[11px] font-semibold uppercase tracking-[0.15em] text-accent">
            Next Card
          </div>
          <h2 className="mt-2 font-heading text-2xl sm:text-3xl">
            {next.mainEvent
              ? `${next.mainEvent.fighterA} vs. ${next.mainEvent.fighterB}`
              : next.name}
          </h2>
          <p className="mt-1 text-sm text-muted">
            {next.venue}, {next.city}, {next.country} · {formatEventDate(next.dateAEST)}
          </p>
          <div className="mt-6">
            <EventCountdown dateAEST={next.dateAEST} />
          </div>
          <a
            href={`/events/${next.slug}`}
            className="mt-6 inline-flex items-center gap-2 rounded-brand bg-accent px-5 py-2.5 text-sm font-semibold text-accent-contrast transition hover:opacity-90"
          >
            Full card details <span aria-hidden>→</span>
          </a>
        </section>
      )}

      {events.length ? (
        <section className="mt-10">
          <h2 className="font-heading text-xl">All Confirmed Events</h2>
          <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {events.map((e) => (
              <EventCard key={e.slug} event={e} />
            ))}
          </div>
        </section>
      ) : (
        <p className="mt-8 text-muted">Event data is temporarily unavailable — check back shortly.</p>
      )}

      {snapshot && (
        <p className="mt-10 text-xs text-muted">
          Verified {snapshot.lastVerified}. {snapshot.verificationNote}
        </p>
      )}
    </>
  );
}
