import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getSite, getSiteUrl, THEAIBET_BASE_URL } from "@/config/site";
import { getUFCEvents, formatEventDate } from "@/lib/sports/ufc/provider";
import { EventCountdown } from "@/components/ufc/EventCountdown";
import { JsonLd } from "@/components/JsonLd";

export async function generateStaticParams() {
  if ((process.env.SITE ?? process.env.NEXT_PUBLIC_SITE) !== "ufcreview") return [];
  const snapshot = await getUFCEvents();
  return (snapshot?.events ?? []).map((e) => ({ slug: e.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const snapshot = await getUFCEvents();
  const event = snapshot?.events.find((e) => e.slug === slug);
  if (!event) return {};
  const title = event.mainEvent
    ? `${event.name}: ${event.mainEvent.fighterA} vs. ${event.mainEvent.fighterB} — Date, Venue, Countdown`
    : `${event.name} — Date, Venue, Countdown`;
  const description = `${event.name} takes place ${formatEventDate(event.dateAEST)} at ${event.venue}, ${event.city}. ${
    event.mainEvent
      ? `Main event: ${event.mainEvent.fighterA} vs. ${event.mainEvent.fighterB} (${event.mainEvent.weightClass}).`
      : ""
  }`;
  return {
    title,
    description,
    alternates: { canonical: `${getSiteUrl()}/events/${slug}` },
  };
}

function buildEventTheAIbetUrl(theaibetPath: string, slug: string, siteDomain: string): string {
  const base = theaibetPath.startsWith("http") ? theaibetPath : `${THEAIBET_BASE_URL}${theaibetPath}`;
  const url = new URL(base);
  url.searchParams.set("utm_source", siteDomain);
  url.searchParams.set("utm_medium", "referral");
  url.searchParams.set("utm_campaign", "media-network");
  url.searchParams.set("utm_content", slug);
  return url.toString();
}

export default async function EventDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const site = getSite();
  if (site.key !== "ufcreview") notFound();
  const { slug } = await params;
  const snapshot = await getUFCEvents();
  const event = snapshot?.events.find((e) => e.slug === slug);
  if (!event) notFound();

  const theaibetUrl = buildEventTheAIbetUrl(event.theaibetPath, event.slug, site.domain);

  const sportsEventJsonLd = {
    "@context": "https://schema.org",
    "@type": "SportsEvent",
    name: event.name,
    startDate: event.dateAEST,
    location: {
      "@type": "Place",
      name: event.venue,
      address: `${event.city}, ${event.country}`,
    },
    ...(event.mainEvent
      ? {
          competitor: [
            { "@type": "Person", name: event.mainEvent.fighterA },
            { "@type": "Person", name: event.mainEvent.fighterB },
          ],
        }
      : {}),
    organizer: { "@type": "Organization", name: "UFC" },
    url: `${getSiteUrl()}/events/${event.slug}`,
  };

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: getSiteUrl() },
      { "@type": "ListItem", position: 2, name: "Events", item: `${getSiteUrl()}/events` },
      { "@type": "ListItem", position: 3, name: event.name, item: `${getSiteUrl()}/events/${event.slug}` },
    ],
  };

  return (
    <>
      <JsonLd data={sportsEventJsonLd} />
      <JsonLd data={breadcrumbJsonLd} />
      <header className="border-b-2 border-ink/90 pb-5">
        <div className="text-[11px] font-semibold uppercase tracking-[0.15em] text-accent">
          {event.shortName}
          {event.mainEvent?.titleFight && " · Title Fight"}
        </div>
        <h1 className="mt-2 font-heading text-3xl leading-tight sm:text-4xl">
          {event.mainEvent
            ? `${event.mainEvent.fighterA} vs. ${event.mainEvent.fighterB}`
            : event.name}
        </h1>
        <p className="mt-2 max-w-2xl text-muted">
          {event.venue}, {event.city}, {event.country} · {formatEventDate(event.dateAEST)}
        </p>
      </header>

      <section className="mt-8 rounded-brand border border-edge bg-surface p-6 sm:p-8">
        <div className="text-[11px] font-semibold uppercase tracking-[0.15em] text-muted">
          Countdown to Main Card
        </div>
        <div className="mt-4">
          <EventCountdown dateAEST={event.dateAEST} />
        </div>
        <p className="mt-4 text-xs text-muted">{event.dateNote}</p>
      </section>

      <section className="mt-8 grid gap-4 sm:grid-cols-2">
        {event.mainEvent ? (
          <>
            <div className="rounded-brand border border-edge bg-surface p-5">
              <div className="text-[11px] uppercase tracking-[0.1em] text-muted">Fighter A</div>
              <div className="mt-1 font-heading text-xl">{event.mainEvent.fighterA}</div>
              {event.mainEvent.fighterARank && (
                <div className="mt-1 text-sm text-muted">{event.mainEvent.fighterARank}</div>
              )}
            </div>
            <div className="rounded-brand border border-edge bg-surface p-5">
              <div className="text-[11px] uppercase tracking-[0.1em] text-muted">Fighter B</div>
              <div className="mt-1 font-heading text-xl">{event.mainEvent.fighterB}</div>
              {event.mainEvent.fighterBRank && (
                <div className="mt-1 text-sm text-muted">{event.mainEvent.fighterBRank}</div>
              )}
            </div>
          </>
        ) : (
          <div className="rounded-brand border border-edge bg-surface p-5 sm:col-span-2">
            <p className="text-muted">{event.mainEventNote ?? "Main event not yet announced."}</p>
          </div>
        )}
      </section>

      <aside
        aria-label="TheAIbet analysis"
        className="my-10 overflow-hidden rounded-brand border border-accent/40 bg-accent/[0.06]"
      >
        <div className="flex flex-col gap-4 p-6 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <div className="text-xs font-semibold uppercase tracking-[0.15em] text-accent">
              AI Model Analysis
            </div>
            <p className="mt-1.5 max-w-md text-sm leading-relaxed text-muted">
              Probability, confidence and edge for {event.mainEvent ? `${event.mainEvent.fighterA} vs. ${event.mainEvent.fighterB}` : "this event"} — from the models at TheAIbet.
            </p>
          </div>
          <a
            href={theaibetUrl}
            rel="noopener sponsored"
            className="inline-flex shrink-0 items-center gap-2 rounded-brand bg-accent px-5 py-3 text-sm font-semibold text-accent-contrast transition hover:opacity-90"
          >
            View the AI model analysis on TheAIbet
            <span aria-hidden>→</span>
          </a>
        </div>
      </aside>

      <div className="border-t border-edge pt-4 text-xs text-muted">
        Verified {snapshot?.lastVerified} against:{" "}
        {event.sources.map((s, i) => (
          <span key={s}>
            {i > 0 && ", "}
            <a href={s} rel="noopener nofollow" className="underline hover:text-accent">
              source
            </a>
          </span>
        ))}
        . {snapshot?.verificationNote}
      </div>
    </>
  );
}
