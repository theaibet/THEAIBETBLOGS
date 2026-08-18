import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getArticlesByAuthor, getAuthorBySlug, getAuthors } from "@/lib/content";
import { getSiteUrl } from "@/config/site";
import { ArticleCard } from "@/components/ArticleCard";
import { JsonLd } from "@/components/JsonLd";

interface Params {
  slug: string;
}

export async function generateStaticParams(): Promise<Params[]> {
  const authors = await getAuthors();
  return authors.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const { slug } = await params;
  const author = await getAuthorBySlug(slug);
  if (!author) return {};
  return {
    title: `${author.name} — ${author.role}`,
    description: author.bio,
    alternates: { canonical: `${getSiteUrl()}/author/${slug}` },
  };
}

export default async function AuthorPage({ params }: { params: Promise<Params> }) {
  const { slug } = await params;
  const author = await getAuthorBySlug(slug);
  if (!author) notFound();

  const articles = await getArticlesByAuthor(slug);

  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Person",
          name: author.name,
          jobTitle: author.role,
          description: author.bio,
          url: `${getSiteUrl()}/author/${slug}`,
        }}
      />
      <header className="border-b border-edge pb-6">
        <div className="flex items-center gap-4">
          <div
            aria-hidden
            className="flex h-16 w-16 items-center justify-center rounded-full bg-accent text-xl font-bold text-accent-contrast"
          >
            {author.name
              .split(" ")
              .map((n) => n[0])
              .join("")}
          </div>
          <div>
            <h1 className="font-heading text-3xl">{author.name}</h1>
            <p className="text-sm font-medium text-accent">{author.role}</p>
          </div>
        </div>
        <p className="mt-4 max-w-2xl leading-relaxed text-muted">{author.bio}</p>
      </header>
      <h2 className="mt-8 font-heading text-xl">Stories by {author.name}</h2>
      <div className="mt-5 grid gap-6 md:grid-cols-3">
        {articles.map((a) => (
          <ArticleCard key={a.slug} article={a} />
        ))}
      </div>
    </>
  );
}
