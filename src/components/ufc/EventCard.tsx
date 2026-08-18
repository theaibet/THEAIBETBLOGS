import Link from "next/link";
import type { UFCEvent } from "@/lib/sports/ufc/types";
import { formatEventDate } from "@/lib/sports/ufc/provider";

export function EventCard({ event }: { event: UFCEvent }) {
  return (
    <Link
      href={`/events/${event.slug}`}
      className="block rounded-brand border border-edge bg-surface p-5 transition hover:border-accent/60"
    >
      <div className="flex items-center justify-between text-[11px] uppercase tracking-[0.12em] text-muted">
        <span>{event.shortName}</span>
        {event.mainEvent?.titleFight && (
          <span className="font-bold text-accent">Title Fight</span>
        )}
      </div>
      <h3 className="mt-2 font-heading text-lg leading-snug sm:text-xl">
        {event.mainEvent
          ? `${event.mainEvent.fighterA} vs. ${event.mainEvent.fighterB}`
          : event.name}
      </h3>
      {event.mainEvent && (
        <p className="mt-1 text-sm text-muted">{event.mainEvent.weightClass}</p>
      )}
      {!event.mainEvent && event.mainEventNote && (
        <p className="mt-1 text-sm text-muted">{event.mainEventNote}</p>
      )}
      <div className="mt-4 flex items-center justify-between border-t border-edge pt-3 text-xs text-muted">
        <span>{formatEventDate(event.dateAEST)}</span>
        <span>
          {event.city}, {event.country}
        </span>
      </div>
    </Link>
  );
}
