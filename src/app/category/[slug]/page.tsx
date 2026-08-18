import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getArticlesByCategory } from "@/lib/content";
import { getSite, getSiteUrl } from "@/config/site";
import { ArticleCard } from "@/components/ArticleCard";

interface Params {
  slug: string;
}

export function generateStaticParams(): Params[] {
  return getSite().categories.map((c) => ({ slug: c.slug }));
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

  return (
    <>
      <header className="border-b border-edge pb-6">
        <h1 className="font-heading text-3xl">{category.name}</h1>
        <p className="mt-2 max-w-2xl text-muted">{category.description}</p>
      </header>
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
