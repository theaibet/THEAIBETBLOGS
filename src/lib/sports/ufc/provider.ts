import { log } from "@/lib/log";
import type { UFCEvent, UFCEventsSnapshot, UFCFighter } from "./types";

/**
 * UFC data provider (product brief §1, mirrors the AFL provider pattern).
 *
 * Unlike AFL there is no free, reliable, terms-friendly live API for UFC
 * event schedules — so events are served from a hand-verified snapshot
 * (data/ufc/events.json) rather than invented or scraped at request time.
 * The snapshot carries its own verification date, a note on volatility, and
 * per-event source URLs so editorial can re-check before publishing.
 *
 * Fighter ratings come from TheAIbet's own FightSimLab dataset
 * (data/ufc/fighters.json) — real career records and a composite model
 * rating. These are explicitly NOT official UFC rankings; the UI must never
 * present them as such (roadmap §8: no invented/misrepresented data).
 */

let cachedEvents: UFCEventsSnapshot | null = null;
let cachedFighters: UFCFighter[] | null = null;

export async function getUFCEvents(): Promise<UFCEventsSnapshot | null> {
  if (cachedEvents) return cachedEvents;
  try {
    const { promises: fs } = await import("fs");
    const path = await import("path");
    const file = path.join(process.cwd(), "data/ufc/events.json");
    const raw = JSON.parse(await fs.readFile(file, "utf8")) as UFCEventsSnapshot;
    cachedEvents = raw;
    return raw;
  } catch (err) {
    log.error("ufc-data", "failed to load events snapshot", {
      error: err instanceof Error ? err.message : String(err),
    });
    return null;
  }
}

export async function getUFCFighters(): Promise<UFCFighter[] | null> {
  if (cachedFighters) return cachedFighters;
  try {
    const { promises: fs } = await import("fs");
    const path = await import("path");
    const file = path.join(process.cwd(), "data/ufc/fighters.json");
    const raw = JSON.parse(await fs.readFile(file, "utf8")) as UFCFighter[];
    cachedFighters = raw;
    return raw;
  } catch (err) {
    log.error("ufc-data", "failed to load fighters dataset", {
      error: err instanceof Error ? err.message : String(err),
    });
    return null;
  }
}

export function nextEvent(events: UFCEvent[], now: Date = new Date()): UFCEvent | null {
  const upcoming = events
    .filter((e) => new Date(e.dateAEST).getTime() > now.getTime())
    .sort((a, b) => new Date(a.dateAEST).getTime() - new Date(b.dateAEST).getTime());
  return upcoming[0] ?? null;
}

export function fightersByDivision(fighters: UFCFighter[]): Map<string, UFCFighter[]> {
  const map = new Map<string, UFCFighter[]>();
  for (const f of fighters) {
    const list = map.get(f.division) ?? [];
    list.push(f);
    map.set(f.division, list);
  }
  return map;
}

/** Deterministic AEST formatting (no locale drift). */
const DAYS = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
const MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

export function formatEventDate(dateAEST: string): string {
  const d = new Date(dateAEST);
  const day = DAYS[d.getUTCDay()];
  const date = d.getUTCDate();
  const month = MONTHS[d.getUTCMonth()];
  let h = d.getUTCHours();
  const m = d.getUTCMinutes();
  const ampm = h >= 12 ? "pm" : "am";
  h = h % 12 || 12;
  return `${day} ${date} ${month} · ${h}:${String(m).padStart(2, "0")}${ampm} AEST`;
}
