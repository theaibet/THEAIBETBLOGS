/**
 * UFCDataProvider (product brief §2).
 *
 * The UI never talks to a vendor directly — components consume UFCSnapshot
 * from getUFCData(). Swapping in TheAIbet's own fight data or a commercial
 * feed (e.g. Sportradar MMA) means implementing this interface and registering
 * it; no component changes.
 *
 * CURRENT SOURCE: `CuratedProvider` — a hand-verified schedule. Every event,
 * fighter, record and venue below was checked against ufc.com's own event
 * pages and announcements on 2026-08-20. Nothing here is invented: where the
 * UFC has not announced a main event, the event is marked `tbaMainEvent` and
 * the UI says so rather than filling the gap.
 *
 * This is deliberately a stopgap. Curated data goes stale — `verifiedAt` is
 * rendered in the UI so nobody mistakes it for a live feed, and the sanity
 * check in getUFCData() drops events whose date has passed.
 */

export interface Fighter {
  name: string;
  record?: string;
  rank?: string;
  country?: string;
}

export interface Bout {
  a: Fighter;
  b: Fighter;
  weightClass: string;
  /** "main" | "co-main" | "main-card" | "prelim" */
  slot: "main" | "co-main" | "main-card" | "prelim";
  titleFight?: boolean;
  /** Result once fought */
  result?: { winner: string; method: string; round?: number; time?: string };
}

export interface UFCEvent {
  id: string;
  name: string;
  shortName: string;
  /** ISO date of the event in US local terms (UFC's published date) */
  dateUS: string;
  /** Australian broadcast day — UFC cards land Sunday AEST */
  dateAEST: string;
  venue: string;
  city: string;
  numbered: boolean;
  tbaMainEvent?: boolean;
  bouts: Bout[];
}

export interface UFCSnapshot {
  nextEvent: UFCEvent | null;
  upcoming: UFCEvent[];
  recentResults: UFCEvent[];
  verifiedAt: string;
  source: string;
}

const VERIFIED_AT = "2026-08-20";
const SOURCE = "Card data verified against ufc.com";

const UPCOMING: UFCEvent[] = [
  {
    id: "ufc-sacramento-2026",
    name: "UFC Fight Night: Hernandez vs Rodrigues",
    shortName: "UFC Sacramento",
    dateUS: "2026-08-22",
    dateAEST: "2026-08-23",
    venue: "Golden 1 Center",
    city: "Sacramento, California",
    numbered: false,
    bouts: [
      { slot: "main", weightClass: "Middleweight",
        a: { name: "Anthony Hernandez", record: "15-3 (1 NC)", country: "United States" },
        b: { name: "Gregory Rodrigues", record: "19-6", country: "Brazil" } },
    ],
  },
  {
    id: "ufc-shanghai-2026",
    name: "UFC Fight Night: Nurmagomedov vs Song",
    shortName: "UFC Shanghai",
    dateUS: "2026-08-29",
    dateAEST: "2026-08-29",
    venue: "Shanghai Oriental Sports Center",
    city: "Shanghai, China",
    numbered: false,
    bouts: [
      { slot: "main", weightClass: "Bantamweight",
        a: { name: "Umar Nurmagomedov", record: "20-1", rank: "#3" },
        b: { name: "Song Yadong", record: "23-9-1", rank: "#5" } },
      { slot: "co-main", weightClass: "Women's Strawweight",
        a: { name: "Yan Xiaonan", record: "19-5", rank: "#4" },
        b: { name: "Denise Gomes", record: "12-3", rank: "#13" } },
      { slot: "main-card", weightClass: "Flyweight",
        a: { name: "Alex Perez", record: "26-10" },
        b: { name: "Sumudaerji", record: "19-7" } },
      { slot: "main-card", weightClass: "Light Heavyweight",
        a: { name: "Junior Tafa", record: "7-6" },
        b: { name: "Liu Ce", record: "3-1" } },
      { slot: "prelim", weightClass: "Flyweight",
        a: { name: "Rei Tsuruya", record: "11-1" },
        b: { name: "Kevin Borjas", record: "11-5" } },
    ],
  },
  {
    id: "ufc-paris-2026",
    name: "UFC Fight Night: Hooker vs Parnasse",
    shortName: "UFC Paris",
    dateUS: "2026-09-05",
    dateAEST: "2026-09-06",
    venue: "Accor Arena",
    city: "Paris, France",
    numbered: false,
    bouts: [
      { slot: "main", weightClass: "Lightweight",
        a: { name: "Dan Hooker", rank: "#10", country: "New Zealand" },
        b: { name: "Salahdine Parnasse", country: "France" } },
      { slot: "co-main", weightClass: "Lightweight",
        a: { name: "Farès Ziam", country: "France" },
        b: { name: "Axel Sola", country: "France" } },
      { slot: "main-card", weightClass: "Middleweight",
        a: { name: "Michael Venom Page" }, b: { name: "Nursulton Ruziboev" } },
      { slot: "main-card", weightClass: "Featherweight",
        a: { name: "Morgan Charrière" }, b: { name: "Felipe Lima" } },
      { slot: "prelim", weightClass: "Women's Bantamweight",
        a: { name: "Nora Cornolle", rank: "#13" }, b: { name: "Klaudia Sygula" } },
    ],
  },
  {
    id: "ufc-glendale-2026",
    name: "UFC Fight Night: Rodriguez vs Silva",
    shortName: "Noche UFC",
    dateUS: "2026-09-12",
    dateAEST: "2026-09-13",
    venue: "Desert Diamond Arena",
    city: "Glendale, Arizona",
    numbered: false,
    bouts: [
      { slot: "main", weightClass: "Main Event",
        a: { name: "Rodriguez" }, b: { name: "Silva" } },
    ],
  },
  {
    id: "ufc-331",
    name: "UFC 331: Van vs Pantoja 2",
    shortName: "UFC 331",
    dateUS: "2026-09-19",
    dateAEST: "2026-09-20",
    venue: "Crypto.com Arena",
    city: "Los Angeles, California",
    numbered: true,
    bouts: [
      { slot: "main", weightClass: "Flyweight Title", titleFight: true,
        a: { name: "Joshua Van", rank: "C", country: "Myanmar" },
        b: { name: "Alexandre Pantoja", rank: "#1", country: "Brazil" } },
      { slot: "co-main", weightClass: "Lightweight",
        a: { name: "Arman Tsarukyan", rank: "#2", country: "Armenia" },
        b: { name: "Mauricio Ruffy", rank: "#7", country: "Brazil" } },
      { slot: "main-card", weightClass: "Lightweight",
        a: { name: "Renato Moicano", rank: "#11" }, b: { name: "Brian Ortega" } },
      { slot: "main-card", weightClass: "Featherweight",
        a: { name: "Patricio Pitbull", rank: "#15" }, b: { name: "Dooho Choi" } },
      { slot: "main-card", weightClass: "Light Heavyweight",
        a: { name: "Alonzo Menifield", rank: "#14" }, b: { name: "Iwo Baraniewski" } },
    ],
  },
  {
    id: "ufc-vegas-sep-2026",
    name: "UFC Fight Night",
    shortName: "UFC Vegas",
    dateUS: "2026-09-26",
    dateAEST: "2026-09-27",
    venue: "UFC APEX",
    city: "Las Vegas, Nevada",
    numbered: false,
    tbaMainEvent: true,
    bouts: [],
  },
  {
    id: "ufc-332",
    name: "UFC 332",
    shortName: "UFC 332",
    dateUS: "2026-10-03",
    dateAEST: "2026-10-04",
    venue: "Delta Center",
    city: "Salt Lake City, Utah",
    numbered: true,
    tbaMainEvent: true,
    bouts: [],
  },
];

const RESULTS: UFCEvent[] = [
  {
    id: "ufc-330",
    name: "UFC 330: Makhachev vs Machado Garry",
    shortName: "UFC 330",
    dateUS: "2026-08-15",
    dateAEST: "2026-08-16",
    venue: "Xfinity Mobile Arena",
    city: "Philadelphia, Pennsylvania",
    numbered: true,
    bouts: [
      { slot: "main", weightClass: "Welterweight Title", titleFight: true,
        a: { name: "Islam Makhachev" }, b: { name: "Ian Machado Garry" },
        result: { winner: "Islam Makhachev", method: "Unanimous decision (49-46, 49-46, 48-47)" } },
      { slot: "co-main", weightClass: "Women's Strawweight Title", titleFight: true,
        a: { name: "Mackenzie Dern" }, b: { name: "Gillian Robertson" },
        result: { winner: "Mackenzie Dern", method: "Unanimous decision (49-46, 49-46, 48-47)" } },
      { slot: "main-card", weightClass: "Lightweight",
        a: { name: "Jalin Turner" }, b: { name: "Kauê Fernandes" },
        result: { winner: "Jalin Turner", method: "KO (strikes)", round: 1, time: "0:39" } },
      { slot: "main-card", weightClass: "Middleweight",
        a: { name: "Dustin Stoltzfus" }, b: { name: "Mansur Abdul-Malik" },
        result: { winner: "Dustin Stoltzfus", method: "Submission (rear-naked choke)", round: 2, time: "4:25" } },
      { slot: "main-card", weightClass: "Featherweight",
        a: { name: "Esteban Ribovics" }, b: { name: "Edson Barboza" },
        result: { winner: "Esteban Ribovics", method: "TKO (strikes)", round: 2, time: "1:32" } },
    ],
  },
];

export interface UFCDataProvider {
  id: string;
  getSnapshot(now: Date): Promise<UFCSnapshot>;
}

class CuratedProvider implements UFCDataProvider {
  id = "curated-verified";
  async getSnapshot(now: Date): Promise<UFCSnapshot> {
    // Drop anything already fought so a stale build never shows a past card as "next"
    const today = now.toISOString().slice(0, 10);
    const upcoming = UPCOMING.filter((e) => e.dateAEST >= today);
    return {
      nextEvent: upcoming[0] ?? null,
      upcoming,
      recentResults: RESULTS,
      verifiedAt: VERIFIED_AT,
      source: SOURCE,
    };
  }
}

let provider: UFCDataProvider = new CuratedProvider();
export function setUFCProvider(p: UFCDataProvider) {
  provider = p;
}

export async function getUFCData(): Promise<UFCSnapshot | null> {
  try {
    return await provider.getSnapshot(new Date());
  } catch {
    return null;
  }
}

const DAYS = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
const MONTHS = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];

export function formatEventDate(iso: string): string {
  const d = new Date(`${iso}T00:00:00Z`);
  return `${DAYS[d.getUTCDay()]} ${d.getUTCDate()} ${MONTHS[d.getUTCMonth()]}`;
}

/** Whole days until an event (AEST date basis). */
export function daysUntil(iso: string, now = new Date()): number {
  const target = new Date(`${iso}T00:00:00Z`).getTime();
  const today = new Date(now.toISOString().slice(0, 10) + "T00:00:00Z").getTime();
  return Math.max(0, Math.round((target - today) / 86400000));
}
