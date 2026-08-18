import type { UFCFighter } from "@/lib/sports/ufc/types";

export function FighterRatingsTable({
  division,
  fighters,
}: {
  division: string;
  fighters: UFCFighter[];
}) {
  return (
    <div className="overflow-hidden rounded-brand border border-edge bg-surface">
      <div className="border-b-2 border-accent px-4 py-3">
        <h3 className="font-heading text-base sm:text-lg">{division}</h3>
      </div>
      <table className="w-full text-sm">
        <thead>
          <tr className="border-b border-edge text-left text-[11px] uppercase tracking-[0.1em] text-muted">
            <th className="py-2 pl-4 pr-2 font-bold">#</th>
            <th className="px-2 py-2 font-bold">Fighter</th>
            <th className="px-2 py-2 text-center font-bold">Record</th>
            <th className="px-2 py-2 text-right font-bold">Win %</th>
            <th className="py-2 pl-2 pr-4 text-right font-bold">Rating</th>
          </tr>
        </thead>
        <tbody>
          {fighters.map((f, i) => (
            <tr key={f.name} className="border-b border-edge last:border-0">
              <td className="py-2.5 pl-4 pr-2 text-muted">{i + 1}</td>
              <td className="px-2 py-2.5 font-semibold">
                {f.name}
                {f.nickname && (
                  <span className="ml-1.5 font-normal text-muted">&quot;{f.nickname}&quot;</span>
                )}
              </td>
              <td className="px-2 py-2.5 text-center tabular-nums text-muted">
                {f.wins}-{f.losses}
                {f.draws ? `-${f.draws}` : ""}
              </td>
              <td className="px-2 py-2.5 text-right tabular-nums">{f.winRate.toFixed(1)}%</td>
              <td className="py-2.5 pl-2 pr-4 text-right font-bold tabular-nums text-accent">
                {f.overallPowerRating.toFixed(1)}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
