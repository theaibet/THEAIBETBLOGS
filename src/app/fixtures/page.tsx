import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getSite, getSiteUrl } from "@/config/site";
import { getAFLData } from "@/lib/sports/afl/provider";
import { RoundGames } from "@/components/afl/RoundGames";

export function generateMetadata(): Metadata {
  return {
    title: "AFL Fixtures — Upcoming Matches",
    description: "Upcoming AFL fixtures by round: dates, times and venues.",
    alternates: { canonical: `${getSiteUrl()}/fixtures` },
  };
}

export default async function FixturesPage() {
  const site = getSite();
  if (site.key !== "aflreviews") notFound();
  const afl = await getAFLData();
  const upcoming = afl?.games.filter((g) => g.complete < 100) ?? [];
  const rounds = [...new Set(upcoming.map((g) => g.round))].sort((a, b) => a - b).slice(0, 3);

  return (
    <>
      <header className="border-b-2 border-ink/90 pb-5">
        <h1 className="font-heading text-3xl sm:text-4xl">AFL Fixtures</h1>
        <p className="mt-2 max-w-2xl text-muted">Upcoming matches with dates, times (AEST) and venues.</p>
      </header>
      {afl && rounds.length ? (
        rounds.map((r) => (
          <section key={r} className="mt-10">
            <h2 className="font-heading text-xl">
              {upcoming.find((g) => g.round === r)?.roundName ?? `Round ${r}`}
            </h2>
            <div className="mt-5">
              <RoundGames games={upcoming.filter((g) => g.round === r)} />
            </div>
          </section>
        ))
      ) : (
        <p className="mt-8 text-muted">
          {afl ? "No upcoming fixtures — season complete." : "Fixture data is temporarily unavailable — check back shortly."}
        </p>
      )}
      {afl && <p className="mt-10 text-xs text-muted">{afl.attribution}</p>}
    </>
  );
}
