import type { Bout, UFCEvent } from "@/lib/sports/ufc/provider";

function FighterSide({ f, align = "left", winner }: { f: Bout["a"]; align?: "left" | "right"; winner?: boolean }) {
  return (
    <div className={`flex-1 ${align === "right" ? "text-right" : ""}`}>
      <div className={`font-heading text-base leading-tight sm:text-lg ${winner ? "text-accent" : ""}`}>
        {f.name}
      </div>
      <div className="mt-0.5 text-xs text-muted">
        {f.rank && <span className="mr-1.5 font-bold text-accent">{f.rank}</span>}
        {f.record}
        {f.country && !f.record ? f.country : ""}
      </div>
    </div>
  );
}

export function BoutRow({ bout }: { bout: Bout }) {
  const label =
    bout.slot === "main" ? "Main Event" :
    bout.slot === "co-main" ? "Co-Main" :
    bout.slot === "prelim" ? "Prelim" : "Main Card";
  return (
    <div className="border-b border-edge px-4 py-4 last:border-0">
      <div className="mb-2 flex items-center justify-between text-[10px] font-bold uppercase tracking-[0.14em] text-muted">
        <span className={bout.slot === "main" || bout.slot === "co-main" ? "text-accent" : ""}>{label}</span>
        <span>{bout.titleFight ? "🏆 " : ""}{bout.weightClass}</span>
      </div>
      <div className="flex items-center gap-3">
        <FighterSide f={bout.a} winner={bout.result?.winner === bout.a.name} />
        <span className="shrink-0 text-xs font-bold text-muted">vs</span>
        <FighterSide f={bout.b} align="right" winner={bout.result?.winner === bout.b.name} />
      </div>
      {bout.result && (
        <div className="mt-2 text-right text-xs text-muted">
          {bout.result.winner} — {bout.result.method}
          {bout.result.round ? ` · R${bout.result.round} ${bout.result.time ?? ""}` : ""}
        </div>
      )}
    </div>
  );
}

export function FightCard({ event, limit }: { event: UFCEvent; limit?: number }) {
  const bouts = limit ? event.bouts.slice(0, limit) : event.bouts;
  if (!bouts.length) {
    return (
      <div className="rounded-brand border border-edge bg-surface p-6 text-sm text-muted">
        Bouts for this card have not been announced yet.
      </div>
    );
  }
  return (
    <div className="overflow-hidden rounded-brand border border-edge bg-surface">
      {bouts.map((b, i) => <BoutRow key={i} bout={b} />)}
    </div>
  );
}
