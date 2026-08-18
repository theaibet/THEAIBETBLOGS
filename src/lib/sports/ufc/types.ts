/** Normalised UFC data types. */

export interface UFCMainEvent {
  fighterA: string;
  fighterARank: string | null;
  fighterB: string;
  fighterBRank: string | null;
  weightClass: string;
  titleFight: boolean;
}

export interface UFCEvent {
  slug: string;
  name: string;
  shortName: string;
  /** ISO 8601 with offset, main-card start time */
  dateAEST: string;
  dateNote: string;
  venue: string;
  city: string;
  country: string;
  mainEvent: UFCMainEvent | null;
  mainEventNote?: string;
  broadcast: string;
  theaibetPath: string;
  sources: string[];
}

export interface UFCEventsSnapshot {
  lastVerified: string;
  verificationNote: string;
  events: UFCEvent[];
}

export interface UFCFighter {
  name: string;
  nickname: string | null;
  division: string;
  nationality: string | null;
  team: string | null;
  wins: number;
  losses: number;
  draws: number;
  noContests: number;
  totalFights: number;
  winRate: number;
  finishRate: number;
  winsByKoTko: number;
  winsBySubmission: number;
  winsByDecision: number;
  slpm: number;
  sigStrikeAcc: number;
  sapm: number;
  sigStrikeDef: number;
  tdAvg: number;
  tdAcc: number;
  tdDef: number;
  subAvg: number;
  /** TheAIbet composite model rating (0-100) — NOT an official UFC ranking */
  overallPowerRating: number;
}
