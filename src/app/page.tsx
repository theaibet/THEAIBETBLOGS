import { getArticles } from "@/lib/content";
import { getSite } from "@/config/site";
import { JsonLd } from "@/components/JsonLd";
import { websiteJsonLd } from "@/lib/seo";
import { BroadsheetHome, IndexHome, MagazineHome, NewsHome } from "@/components/home/variants";

export default async function HomePage() {
  const site = getSite();
  const articles = await getArticles(24);

  const Home = {
    news: NewsHome,
    broadsheet: BroadsheetHome,
    magazine: MagazineHome,
    index: IndexHome,
  }[site.homeVariant];

  return (
    <>
      <JsonLd data={websiteJsonLd()} />
      <h1 className="sr-only">
        {site.name} — {site.tagline}
      </h1>
      <Home articles={articles} />
    </>
  );
}
