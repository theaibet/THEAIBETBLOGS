import { log } from "@/lib/log";
import type { AFLGame, AFLSnapshot, LadderEntry } from "./types";

/**
 * AFLDataProvider abstraction (product brief §1).
 *
 * The UI never talks to a vendor API directly — it consumes AFLSnapshot from
 * getAFLData(). Swap or add providers (commercial AFL data, TheAIbet's own
 * feeds) without touching components.
 *
 * Providers:
 *  - SquiggleProvider (default): api.squiggle.com.au — free community AFL API.
 *    Terms ask for a identifying User-Agent and attribution; both implemented.
 *    Cached via Next ISR: ladder/games revalidate 600s (~10 min). If a
 *    revalidation fetch fails, Next keeps serving the last good page — the
 *    site never breaks and never shows fake data (brief §7–8).
 *  - SnapshotProvider: reads a captured real Squiggle response from disk.
 *    Used ONLY for local build verification where outbound network is
 *    unavailable (AFL_DATA_MODE=snapshot). Never enabled in production.
 */

export interface AFLDataProvider {
  id: string;
  attribution: string;
  getStandings(): Promise<LadderEntry[]>;
  getGames(year: number): Promise<AFLGame[]>;
}

interface SquiggleStanding {
  rank: number; id: number; name: string; played: number; wins: number;
  losses: number; draws: number; percentage: number; pts: number;
  for: number; against: number;
}

interface SquiggleGame {
  id: number; round: number; roundname: string; hteam: string; ateam: string;
  hteamid: number; ateamid: number; hscore: number | null; ascore: number | null;
  hgoals: number | null; hbehinds: number | null; agoals: number | null;
  abehinds: number | null; complete: number; winner: string | null;
  date: string; venue: string; timestr: string | null; is_final: number;
  is_grand_final: number;
}

function mapStanding(s: SquiggleStanding): LadderEntry {
  return {
    rank: s.rank, teamId: s.id, team: s.name, played: s.played, wins: s.wins,
    losses: s.losses, draws: s.draws, percentage: s.percentage, points: s.pts,
    pointsFor: s.for, pointsAgainst: s.against,
  };
}

function mapGame(g: SquiggleGame): AFLGame {
  return {
    id: g.id, round: g.round, roundName: g.roundname,
    homeTeam: g.hteam, awayTeam: g.ateam, homeTeamId: g.hteamid, awayTeamId: g.ateamid,
    homeScore: g.hscore, awayScore: g.ascore,
    homeGoals: g.hgoals, homeBehinds: g.hbehinds, awayGoals: g.agoals, awayBehinds: g.abehinds,
    complete: g.complete, winner: g.winner, dateAEST: g.date, venue: g.venue,
    timeStr: g.timestr, isFinal: g.is_final === 1, isGrandFinal: g.is_grand_final === 1,
  };
}

class SquiggleProvider implements AFLDataProvider {
  id = "squiggle";
  attribution = "Data: Squiggle (api.squiggle.com.au)";
  private base = process.env.AFL_DATA_API ?? "https://api.squiggle.com.au";
  private headers = {
    "User-Agent": "TheAIbetMediaNetwork/1.0 (aflreviews.com.au; contact via site)",
  };

  private async fetchJson<T>(query: string, revalidate: number): Promise<T> {
    const res = await fetch(`${this.base}/?q=${query}`, {
      headers: this.headers,
      next: { revalidate },
    });
    if (!res.ok) throw new Error(`Squiggle ${res.status} for ${query}`);
    return (await res.json()) as T;
  }

  async getStandings(): Promise<LadderEntry[]> {
    const data = await this.fetchJson<{ standings: SquiggleStanding[] }>("standings", 600);
    return data.standings.map(mapStanding).sort((a, b) => a.rank - b.rank);
  }

  async getGames(year: number): Promise<AFLGame[]> {
    const data = await this.fetchJson<{ games: SquiggleGame[] }>(`games;year=${year}`, 600);
    return data.games.map(mapGame);
  }
}

/** Real captured Squiggle data from disk — local verification only. */
class SnapshotProvider implements AFLDataProvider {
  id = "squiggle-snapshot";
  attribution = "Data: Squiggle (api.squiggle.com.au)";
  async getStandings(): Promise<LadderEntry[]> {
    const { promises: fs } = await import("fs");
    const raw = JSON.parse(await fs.readFile("data/afl-snapshot/standings.json", "utf8"));
    return (raw as SquiggleStanding[]).map(mapStanding).sort((a, b) => a.rank - b.rank);
  }
  async getGames(): Promise<AFLGame[]> {
    const { promises: fs } = await import("fs");
    const raw = JSON.parse(await fs.readFile("data/afl-snapshot/games.json", "utf8"));
    return (raw as SquiggleGame[]).map(mapGame);
  }
}

function activeProvider(): AFLDataProvider {
  if (process.env.AFL_DATA_MODE === "snapshot") return new SnapshotProvider();
  return new SquiggleProvider();
}

export const AFL_SEASON = Number(process.env.AFL_SEASON ?? "2026");

/**
 * The single entry point components use. Returns null on total failure —
 * pages render their editorial content and hide data modules rather than
 * breaking or showing invented numbers.
 */
export async function getAFLData(): Promise<AFLSnapshot | null> {
  const provider = activeProvider();
  try {
    const [standings, games] = await Promise.all([
      provider.getStandings(),
      provider.getGames(AFL_SEASON),
    ]);
    const incomplete = games.filter((g) => g.complete < 100);
    const currentRound = incomplete.length
      ? Math.min(...incomplete.map((g) => g.round))
      : Math.max(...games.map((g) => g.round));
    const completedRounds = games.filter((g) => g.complete === 100).map((g) => g.round);
    const lastCompletedRound = completedRounds.length ? Math.max(...completedRounds) : 0;
    const currentRoundGames = games
      .filter((g) => g.round === currentRound)
      .sort((a, b) => a.dateAEST.localeCompare(b.dateAEST));
    const lastResults = games
      .filter((g) => g.round === lastCompletedRound && g.complete === 100)
      .sort((a, b) => a.dateAEST.localeCompare(b.dateAEST));
    return {
      standings,
      games,
      currentRound,
      currentRoundName: currentRoundGames[0]?.roundName ?? `Round ${currentRound}`,
      currentRoundGames,
      lastCompletedRound,
      lastResults,
      provider: provider.id,
      attribution: provider.attribution,
      fetchedAt: new Date().toISOString(),
    };
  } catch (err) {
    log.error("afl-data", "provider failed", {
      provider: provider.id,
      error: err instanceof Error ? err.message : String(err),
    });
    return null;
  }
}

/** Deterministic AEST formatting helpers (no locale drift). */
const DAYS = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
const MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

export function formatGameTime(dateAEST: string): string {
  const d = new Date(dateAEST.replace(" ", "T") + "Z"); // treat as fixed clock time
  const day = DAYS[d.getUTCDay()];
  const date = d.getUTCDate();
  const month = MONTHS[d.getUTCMonth()];
  let h = d.getUTCHours();
  const m = d.getUTCMinutes();
  const ampm = h >= 12 ? "pm" : "am";
  h = h % 12 || 12;
  return `${day} ${date} ${month} · ${h}:${String(m).padStart(2, "0")}${ampm} AEST`;
}

/** Team display abbreviations */
export const TEAM_ABBREV: Record<string, string> = {
  Adelaide: "ADE", "Brisbane Lions": "BRI", Carlton: "CAR", Collingwood: "COL",
  Essendon: "ESS", Fremantle: "FRE", Geelong: "GEE", "Gold Coast": "GCS",
  "Greater Western Sydney": "GWS", Hawthorn: "HAW", Melbourne: "MEL",
  "North Melbourne": "NTH", "Port Adelaide": "PTA", Richmond: "RIC",
  "St Kilda": "STK", Sydney: "SYD", "West Coast": "WCE", "Western Bulldogs": "WBD",
};

export function teamAbbrev(name: string): string {
  return TEAM_ABBREV[name] ?? name.slice(0, 3).toUpperCase();
}

/** Last-N form for a team from completed games, most recent last: "W L D" */
export function teamForm(games: AFLGame[], team: string, n = 5): string[] {
  const played = games
    .filter((g) => g.complete === 100 && (g.homeTeam === team || g.awayTeam === team))
    .sort((a, b) => a.dateAEST.localeCompare(b.dateAEST))
    .slice(-n);
  return played.map((g) => (g.winner === null ? "D" : g.winner === team ? "W" : "L"));
}
