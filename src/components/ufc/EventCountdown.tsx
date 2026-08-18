"use client";

import { useEffect, useState } from "react";

function timeParts(targetMs: number) {
  const diff = Math.max(0, targetMs - Date.now());
  const days = Math.floor(diff / 86_400_000);
  const hours = Math.floor((diff % 86_400_000) / 3_600_000);
  const minutes = Math.floor((diff % 3_600_000) / 60_000);
  const seconds = Math.floor((diff % 60_000) / 1000);
  return { days, hours, minutes, seconds, done: diff <= 0 };
}

function Unit({ value, label }: { value: number; label: string }) {
  return (
    <div className="flex flex-col items-center">
      <span className="font-heading text-3xl tabular-nums text-ink sm:text-4xl">
        {String(value).padStart(2, "0")}
      </span>
      <span className="mt-1 text-[10px] font-semibold uppercase tracking-[0.15em] text-muted">
        {label}
      </span>
    </div>
  );
}

/** Client-side countdown to a fixed ISO timestamp. Renders static parts on first paint to avoid hydration flash. */
export function EventCountdown({ dateAEST }: { dateAEST: string }) {
  const target = new Date(dateAEST).getTime();
  const [parts, setParts] = useState(() => timeParts(target));

  useEffect(() => {
    const id = setInterval(() => setParts(timeParts(target)), 1000);
    return () => clearInterval(id);
  }, [target]);

  if (parts.done) {
    return <p className="font-heading text-lg text-accent">Main card is live</p>;
  }

  return (
    <div className="flex gap-5 sm:gap-8">
      <Unit value={parts.days} label="Days" />
      <Unit value={parts.hours} label="Hrs" />
      <Unit value={parts.minutes} label="Min" />
      <Unit value={parts.seconds} label="Sec" />
    </div>
  );
}
