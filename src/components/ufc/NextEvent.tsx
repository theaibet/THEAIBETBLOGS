import { daysUntil, formatEventDate, type UFCEvent } from "@/lib/sports/ufc/provider";
import { FightCard } from "./FightCard";

export function NextEvent({ event }: { event: UFCEvent }) {
  const days = daysUntil(event.dateAEST);
  const main = event.bouts.find((b) => b.slot === "main");
  return (
    <section aria-label="Next UFC event" className="overflow-hidden rounded-brand border border-accent/40 bg-surface">
      <div className="border-b border-edge bg-accent/[0.07] px-6 py-5">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div>
            <div className="text-[11px] font-bold uppercase tracking-[0.2em] text-accent">Next Event</div>
            <h2 className="font-heading mt-1 text-2xl leading-tight sm:text-3xl">{event.name}</h2>
            <div className="mt-1.5 text-sm text-muted">
              {formatEventDate(event.dateAEST)} AEST · {event.venue}, {event.city}
            </div>
          </div>
          <div className="rounded-brand border border-accent/50 px-5 py-3 text-center">
            <div className="font-heading text-3xl leading-none text-accent">
              {days === 0 ? "TODAY" : days}
            </div>
            <div className="mt-1 text-[10px] font-bold uppercase tracking-[0.14em] text-muted">
              {days === 0 ? "fight day" : days === 1 ? "day away" : "days away"}
            </div>
          </div>
        </div>
      </div>

      {main && (
        <div className="grid items-center gap-4 px-6 py-8 text-center sm:grid-cols-[1fr_auto_1fr]">
          <div>
            <div className="font-heading text-2xl leading-tight sm:text-3xl">{main.a.name}</div>
            <div className="mt-1 text-sm text-muted">
              {main.a.rank && <span className="mr-1.5 font-bold text-accent">{main.a.rank}</span>}
              {main.a.record ?? main.a.country}
            </div>
          </div>
          <div className="font-heading text-xl text-accent">VS</div>
          <div>
            <div className="font-heading text-2xl leading-tight sm:text-3xl">{main.b.name}</div>
            <div className="mt-1 text-sm text-muted">
              {main.b.rank && <span className="mr-1.5 font-bold text-accent">{main.b.rank}</span>}
              {main.b.record ?? main.b.country}
            </div>
          </div>
          <div className="text-[11px] font-bold uppercase tracking-[0.14em] text-muted sm:col-span-3">
            {main.titleFight ? "Title Fight · " : ""}{main.weightClass}
          </div>
        </div>
      )}

      <div className="px-6 pb-6">
        <h3 className="font-heading mb-3 text-sm uppercase tracking-[0.14em] text-muted">Fight Card</h3>
        <FightCard event={event} />
      </div>
    </section>
  );
}
