import type { Article } from "@/lib/content/types";
import { buildTheAIbetUrl } from "@/lib/utm";

/**
 * The contextual TheAIbet breadcrumb CTA (roadmap §6).
 * Renders ONE relevant, deep-linked CTA per article — never a generic
 * "Visit TheAIbet". If the article has no destination and no meaningful
 * default exists, render nothing (roadmap §7: don't spam links).
 */
export function TheAIbetCta({ article }: { article: Article }) {
  const url = buildTheAIbetUrl(article);
  const label = article.theaibetCtaLabel ?? "View the AI model analysis on TheAIbet";

  return (
    <aside
      aria-label="TheAIbet analysis"
      className="my-10 overflow-hidden rounded-brand border border-accent/40 bg-accent/[0.06]"
    >
      <div className="flex flex-col gap-4 p-6 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <div className="text-xs font-semibold uppercase tracking-[0.15em] text-accent">
            AI Model Analysis
          </div>
          <p className="mt-1.5 max-w-md text-sm leading-relaxed text-muted">
            Probability, confidence and edge for this event — from the models at TheAIbet.
          </p>
        </div>
        <a
          href={url}
          rel="noopener sponsored"
          className="inline-flex shrink-0 items-center gap-2 rounded-brand bg-accent px-5 py-3 text-sm font-semibold text-accent-contrast transition hover:opacity-90"
        >
          {label}
          <span aria-hidden>→</span>
        </a>
      </div>
    </aside>
  );
}
