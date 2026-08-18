import type { AFLGame } from "@/lib/sports/afl/types";
import { formatGameTime, teamAbbrev } from "@/lib/sports/afl/provider";

function TeamRow({
  name,
  score,
  goals,
  behinds,
  isWinner,
  finished,
}: {
  name: string;
  score: number | null;
  goals: number | null;
  behinds: number | null;
  isWinner: boolean;
  finished: boolean;
}) {
  return (
    <div className="flex items-center justify-between gap-2">
      <span className={`text-sm ${isWinner ? "font-bold" : finished ? "text-muted" : "font-semibold"}`}>
        <span className="hidden md:inline">{name}</span>
        <span className="md:hidden">{teamAbbrev(name)}</span>
      </span>
      {finished && (
        <span className={`tabular-nums text-sm ${isWinner ? "font-bold" : "text-muted"}`}>
          {goals != null && behinds != null && (
            <span className="mr-1.5 hidden text-xs lg:inline">
              {goals}.{behinds}
            </span>
          )}
          {score}
        </span>
      )}
    </div>
  );
}

export function GameCard({ game }: { game: AFLGame }) {
  const finished = game.complete === 100;
  const live = game.complete > 0 && game.complete < 100;
  return (
    <div className="rounded-brand border border-edge bg-surface p-4">
      <div className="mb-3 flex items-center justify-between text-[11px] uppercase tracking-[0.1em] text-muted">
        <span>{game.venue}</span>
        {finished ? (
          <span className="font-bold text-accent">Final</span>
        ) : live ? (
          <span className="font-bold text-emerald-500">Live</span>
        ) : (
          <span>Upcoming</span>
        )}
      </div>
      <div className="space-y-2">
        <TeamRow
          name={game.homeTeam}
          score={game.homeScore}
          goals={game.homeGoals}
          behinds={game.homeBehinds}
          isWinner={finished && game.winner === game.homeTeam}
          finished={finished}
        />
        <TeamRow
          name={game.awayTeam}
          score={game.awayScore}
          goals={game.awayGoals}
          behinds={game.awayBehinds}
          isWinner={finished && game.winner === game.awayTeam}
          finished={finished}
        />
      </div>
      <div className="mt-3 border-t border-edge pt-2.5 text-xs text-muted">
        {finished
          ? game.winner
            ? `${teamAbbrev(game.winner)} by ${Math.abs((game.homeScore ?? 0) - (game.awayScore ?? 0))}`
            : "Draw"
          : formatGameTime(game.dateAEST)}
      </div>
    </div>
  );
}

export function RoundGames({ games, columns = 3 }: { games: AFLGame[]; columns?: number }) {
  return (
    <div className={`grid gap-4 sm:grid-cols-2 ${columns === 3 ? "lg:grid-cols-3" : columns === 4 ? "lg:grid-cols-4" : ""}`}>
      {games.map((g) => (
        <GameCard key={g.id} game={g} />
      ))}
    </div>
  );
}
