"use client";

import { useEffect } from "react";

export default function ErrorPage({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Surfaces in Vercel function logs / browser console
    console.error("[page-error]", error.digest ?? "", error.message);
  }, [error]);

  return (
    <div className="py-20 text-center">
      <p className="text-sm font-semibold uppercase tracking-[0.2em] text-accent">Error</p>
      <h1 className="mt-3 font-heading text-3xl">Something went wrong</h1>
      <p className="mx-auto mt-3 max-w-md text-muted">
        We couldn&apos;t load this page. It&apos;s usually temporary.
      </p>
      <button
        onClick={reset}
        className="mt-8 inline-block rounded-brand bg-accent px-6 py-3 text-sm font-semibold text-accent-contrast transition hover:opacity-90"
      >
        Try again
      </button>
    </div>
  );
}
