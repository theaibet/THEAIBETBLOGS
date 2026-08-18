import type { Metadata } from "next";
import { searchArticles } from "@/lib/content";
import { ArticleCard } from "@/components/ArticleCard";

export const metadata: Metadata = {
  title: "Search",
  robots: { index: false, follow: true },
};

export default async function SearchPage({
  searchParams,
}: {
  searchParams: Promise<{ q?: string }>;
}) {
  const { q = "" } = await searchParams;
  const results = q ? await searchArticles(q) : [];

  return (
    <>
      <h1 className="font-heading text-3xl">Search</h1>
      <form action="/search" method="get" className="mt-6 flex max-w-xl gap-2" role="search">
        <input
          type="search"
          name="q"
          defaultValue={q}
          placeholder="Search stories…"
          className="w-full rounded-brand border border-edge bg-surface px-4 py-3 text-sm outline-none focus:border-accent"
          aria-label="Search stories"
        />
        <button
          type="submit"
          className="rounded-brand bg-accent px-5 py-3 text-sm font-semibold text-accent-contrast transition hover:opacity-90"
        >
          Search
        </button>
      </form>
      {q && (
        <p className="mt-6 text-sm text-muted">
          {results.length} result{results.length === 1 ? "" : "s"} for “{q}”
        </p>
      )}
      <div className="mt-6 grid gap-6 md:grid-cols-3">
        {results.map((a) => (
          <ArticleCard key={a.slug} article={a} />
        ))}
      </div>
    </>
  );
}
