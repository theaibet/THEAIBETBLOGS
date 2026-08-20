import { getArticles } from "@/lib/content";
import { getSite } from "@/config/site";
import { JsonLd } from "@/components/JsonLd";
import { websiteJsonLd } from "@/lib/seo";
import { BroadsheetHome, IndexHome, MagazineHome, NewsHome } from "@/components/home/variants";
import { AFLHomepage } from "@/components/home/AFLHomepage";
import { UFCHomepage } from "@/components/home/UFCHomepage";

export default async function HomePage() {
  const site = getSite();
  const articles = await getArticles(24);

  // Publication-specific homepages (brief §6): AFL Reviews gets a live-data
  // sports product; other brands keep their distinct editorial layouts until
  // their own product builds land (UFC event product next).
  const home =
    site.key === "aflreviews" ? (
      <AFLHomepage articles={articles} />
    ) : site.key === "ufcreview" ? (
      <UFCHomepage articles={articles} />
    ) : (
      (() => {
        const Home = {
          news: NewsHome,
          broadsheet: BroadsheetHome,
          magazine: MagazineHome,
          index: IndexHome,
        }[site.homeVariant];
        return <Home articles={articles} />;
      })()
    );

  return (
    <>
      <JsonLd data={websiteJsonLd()} />
      <h1 className="sr-only">
        {site.name} — {site.tagline}
      </h1>
      {home}
    </>
  );
}
