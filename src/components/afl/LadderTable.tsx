import type { AFLGame, LadderEntry } from "@/lib/sports/afl/types";
import { teamAbbrev, teamForm } from "@/lib/sports/afl/provider";
import Link from "next/link";

function FormDots({ form }: { form: string[] }) {
  return (
    <span className="flex gap-1">
      {form.map((r, i) => (
        <span
          key={i}
          title={r}
          className={`inline-block h-2 w-2 rounded-full ${
            r === "W" ? "bg-emerald-500" : r === "L" ? "bg-red-400" : "bg-amber-400"
          }`}
        />
      ))}
    </span>
  );
}

export function LadderTable({
  standings,
  games,
  compact = false,
  attribution,
}: {
  standings: LadderEntry[];
  games?: AFLGame[];
  compact?: boolean;
  attribution?: string;
}) {
  // 2026 finals format: top six advance directly; 7th-10th contest the new
  // Wildcard Round (7v10, 8v9) before the finals proper. See afl.com.au.
  const rows = compact ? standings.slice(0, 10) : standings;
  return (
    <div className="overflow-hidden rounded-brand border border-edge bg-surface">
      <table className="w-full text-sm">
        <thead>
          <tr className="border-b-2 border-accent text-left text-[11px] uppercase tracking-[0.1em] text-muted">
            <th className="py-2.5 pl-4 pr-2 font-bold">Pos</th>
            <th className="px-2 py-2.5 font-bold">Team</th>
            <th className="px-2 py-2.5 text-center font-bold">P</th>
            <th className="px-2 py-2.5 text-center font-bold">W</th>
            <th className="px-2 py-2.5 text-center font-bold">L</th>
            {!compact && <th className="px-2 py-2.5 text-center font-bold">D</th>}
            <th className="px-2 py-2.5 text-right font-bold">%</th>
            <th className="py-2.5 pl-2 pr-4 text-right font-bold">Pts</th>
            {!compact && games && <th className="py-2.5 pl-2 pr-4 font-bold">Form</th>}
          </tr>
        </thead>
        <tbody>
          {rows.map((t) => (
            <tr
              key={t.teamId}
              className={`border-b border-edge last:border-0 ${
                t.rank <= 4
                  ? "bg-accent/[0.07]"
                  : t.rank <= 6
                    ? "bg-accent/[0.035]"
                    : t.rank <= 10
                      ? "bg-amber-400/[0.10]"
                      : ""
              }`}
            >
              <td className="py-2.5 pl-4 pr-2">
                <span
                  className={`inline-flex h-6 w-6 items-center justify-center rounded-full text-xs font-bold ${
                    t.rank <= 4
                      ? "bg-accent text-accent-contrast"
                      : t.rank <= 6
                        ? "border border-accent text-accent"
                        : t.rank <= 10
                          ? "border border-amber-500 text-amber-600"
                          : "text-muted"
                  }`}
                >
                  {t.rank}
                </span>
              </td>
              <td className="px-2 py-2.5 font-semibold">
                <span className="hidden sm:inline">{t.team}</span>
                <span className="sm:hidden">{teamAbbrev(t.team)}</span>
              </td>
              <td className="px-2 py-2.5 text-center text-muted">{t.played}</td>
              <td className="px-2 py-2.5 text-center">{t.wins}</td>
              <td className="px-2 py-2.5 text-center">{t.losses}</td>
              {!compact && <td className="px-2 py-2.5 text-center text-muted">{t.draws}</td>}
              <td className="px-2 py-2.5 text-right tabular-nums">{t.percentage.toFixed(1)}</td>
              <td className="py-2.5 pl-2 pr-4 text-right font-bold tabular-nums">{t.points}</td>
              {!compact && games && (
                <td className="py-2.5 pl-2 pr-4">
                  <FormDots form={teamForm(games, t.team)} />
                </td>
              )}
            </tr>
          ))}
        </tbody>
      </table>
      <div className="flex items-center justify-between border-t border-edge px-4 py-2.5 text-[11px] text-muted">
        <span>
          <span className="mr-3"><span className="mr-1 inline-block h-2 w-2 rounded-sm bg-accent" />Double chance</span>
          <span className="mr-3"><span className="mr-1 inline-block h-2 w-2 rounded-sm border border-accent" />Top 6</span>
          <span><span className="mr-1 inline-block h-2 w-2 rounded-sm border border-amber-500" />Wildcard</span>
        </span>
        <span>{attribution ?? "Data: Squiggle"}</span>
      </div>
      {compact && (
        <Link
          href="/ladder"
          className="block border-t border-edge py-2.5 text-center text-sm font-semibold text-accent transition hover:bg-accent/5"
        >
          View full ladder →
        </Link>
      )}
    </div>
  );
}
