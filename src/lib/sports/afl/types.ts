/** Normalised AFL data types — every provider maps into these. */

export interface LadderEntry {
  rank: number;
  teamId: number;
  team: string;
  played: number;
  wins: number;
  losses: number;
  draws: number;
  percentage: number;
  points: number;
  pointsFor: number;
  pointsAgainst: number;
}

export interface AFLGame {
  id: number;
  round: number;
  roundName: string;
  homeTeam: string;
  awayTeam: string;
  homeTeamId: number;
  awayTeamId: number;
  homeScore: number | null;
  awayScore: number | null;
  homeGoals: number | null;
  homeBehinds: number | null;
  awayGoals: number | null;
  awayBehinds: number | null;
  /** 0 = not started, 1-99 in progress, 100 = final */
  complete: number;
  winner: string | null;
  /** AEST kickoff, "YYYY-MM-DD HH:MM:SS" */
  dateAEST: string;
  venue: string;
  timeStr: string | null;
  isFinal: boolean;
  isGrandFinal: boolean;
}

export interface AFLSnapshot {
  standings: LadderEntry[];
  games: AFLGame[];
  currentRound: number;
  currentRoundName: string;
  currentRoundGames: AFLGame[];
  lastCompletedRound: number;
  lastResults: AFLGame[];
  provider: string;
  attribution: string;
  fetchedAt: string;
}
