export function SectionRule({ title, kicker }: { title: string; kicker?: string }) {
  return (
    <div className="flex items-baseline justify-between border-b-2 border-ink/90 pb-3">
      <h2 className="font-heading text-2xl tracking-tight">{title}</h2>
      {kicker && (
        <span className="hidden text-xs font-semibold uppercase tracking-[0.15em] text-muted sm:block">
          {kicker}
        </span>
      )}
    </div>
  );
}
