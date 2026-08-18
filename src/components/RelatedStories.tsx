import type { Article } from "@/lib/content/types";
import { ArticleCard } from "./ArticleCard";

export function RelatedStories({ articles }: { articles: Article[] }) {
  if (!articles.length) return null;
  return (
    <section aria-label="Related stories" className="mt-14">
      <h2 className="font-heading text-xl">Related Stories</h2>
      <div className="mt-5 grid gap-6 md:grid-cols-3">
        {articles.map((a) => (
          <ArticleCard key={a.slug} article={a} />
        ))}
      </div>
    </section>
  );
}
