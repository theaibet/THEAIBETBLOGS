import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getArticlesByCategory, getPopulatedCategories } from "@/lib/content";
import { getSite, getSiteUrl } from "@/config/site";
import { ArticleCard } from "@/components/ArticleCard";
import { getAFLData } from "@/lib/sports/afl/provider";
import { LadderTable } from "@/components/afl/LadderTable";
import { RoundGames } from "@/components/afl/RoundGames";

interface Params {
  slug: string;
}

export async function generateStaticParams(): Promise<Params[]> {
  // Build only categories that have articles. An empty category page is thin
  // content; it 404s until its first article publishes, then appears
  // automatically in nav, sitemap and here.
  const categories = await getPopulatedCategories();
  return categories.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const { slug } = await params;
  const site = getSite();
  const category = site.categories.find((c) => c.slug === slug);
  if (!category) return {};
  return {
    title: category.name,
    description: category.description,
    alternates: { canonical: `${getSiteUrl()}/category/${slug}` },
  };
}

export default async function CategoryPage({ params }: { params: Promise<Params> }) {
  const { slug } = await params;
  const site = getSite();
  const category = site.categories.find((c) => c.slug === slug);
  if (!category) notFound();

  const articles = await getArticlesByCategory(slug);
  if (articles.length === 0) notFound();

  // AFL Reviews "Stats & Ladder" is a live data page, not just an archive
  const isAflStats = site.key === "aflreviews" && slug === "stats";
  const afl = isAflStats ? await getAFLData() : null;

  return (
    <>
      <header className="border-b border-edge pb-6">
        <h1 className="font-heading text-3xl">{isAflStats ? "AFL Stats & Ladder" : category.name}</h1>
        <p className="mt-2 max-w-2xl text-muted">{category.description}</p>
      </header>
      {isAflStats && afl && (
        <div className="mt-8 grid gap-8 lg:grid-cols-5">
          <div className="lg:col-span-3">
            <h2 className="font-heading mb-4 text-xl">Live AFL Ladder</h2>
            <LadderTable standings={afl.standings} games={afl.games} attribution={afl.attribution} />
          </div>
          <div className="lg:col-span-2">
            <h2 className="font-heading mb-4 text-xl">Round {afl.lastCompletedRound} Results</h2>
            <div className="grid gap-4">
              {afl.lastResults.slice(0, 4).map((g) => (
                <RoundGames key={g.id} games={[g]} columns={1} />
              ))}
            </div>
          </div>
        </div>
      )}
      {articles.length ? (
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {articles.map((a) => (
            <ArticleCard key={a.slug} article={a} />
          ))}
        </div>
      ) : (
        <p className="mt-8 text-muted">No stories in this section yet — check back soon.</p>
      )}
    </>
  );
}
