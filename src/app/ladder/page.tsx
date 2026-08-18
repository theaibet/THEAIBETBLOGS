import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getSite, getSiteUrl } from "@/config/site";
import { getAFLData } from "@/lib/sports/afl/provider";
import { LadderTable } from "@/components/afl/LadderTable";

export function generateMetadata(): Metadata {
  return {
    title: "AFL Ladder — Live Standings",
    description:
      "The live AFL ladder: every team's wins, losses, percentage and premiership points, with top four and finals positions highlighted.",
    alternates: { canonical: `${getSiteUrl()}/ladder` },
  };
}

export default async function LadderPage() {
  const site = getSite();
  if (site.key !== "aflreviews") notFound();
  const afl = await getAFLData();

  return (
    <>
      <header className="border-b-2 border-ink/90 pb-5">
        <h1 className="font-heading text-3xl sm:text-4xl">AFL Ladder</h1>
        <p className="mt-2 max-w-2xl text-muted">
          Live standings for the AFL season — top four and finals positions highlighted, with
          each club&apos;s last five results.
        </p>
      </header>
      <div className="mt-8 max-w-4xl">
        {afl ? (
          <LadderTable standings={afl.standings} games={afl.games} attribution={afl.attribution} />
        ) : (
          <p className="text-muted">Ladder data is temporarily unavailable — check back shortly.</p>
        )}
      </div>
    </>
  );
}
