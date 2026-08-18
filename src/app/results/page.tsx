import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getSite, getSiteUrl } from "@/config/site";
import { getAFLData } from "@/lib/sports/afl/provider";
import { RoundGames } from "@/components/afl/RoundGames";

export function generateMetadata(): Metadata {
  return {
    title: "AFL Results — Latest Scores",
    description: "Completed AFL matches by round: final scores, margins and venues.",
    alternates: { canonical: `${getSiteUrl()}/results` },
  };
}

export default async function ResultsPage() {
  const site = getSite();
  if (site.key !== "aflreviews") notFound();
  const afl = await getAFLData();
  const completed = afl?.games.filter((g) => g.complete === 100) ?? [];
  const rounds = [...new Set(completed.map((g) => g.round))].sort((a, b) => b - a).slice(0, 3);

  return (
    <>
      <header className="border-b-2 border-ink/90 pb-5">
        <h1 className="font-heading text-3xl sm:text-4xl">AFL Results</h1>
        <p className="mt-2 max-w-2xl text-muted">Final scores from recent rounds.</p>
      </header>
      {afl && rounds.length ? (
        rounds.map((r) => (
          <section key={r} className="mt-10">
            <h2 className="font-heading text-xl">
              {completed.find((g) => g.round === r)?.roundName ?? `Round ${r}`}
            </h2>
            <div className="mt-5">
              <RoundGames games={completed.filter((g) => g.round === r)} />
            </div>
          </section>
        ))
      ) : (
        <p className="mt-8 text-muted">
          {afl ? "No completed matches yet this season." : "Results data is temporarily unavailable — check back shortly."}
        </p>
      )}
      {afl && <p className="mt-10 text-xs text-muted">{afl.attribution}</p>}
    </>
  );
}
