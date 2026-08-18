# TheAIbet Sports Media Network — Publishing Platform

One Next.js codebase → five publications. Brand is selected per deployment via the `SITE` env var, so every Vercel project deploys the **same repo** with different env vars (roadmap Phase 2: one reusable platform, never five codebases).

| SITE value         | Publication        | Domain                  |
| ------------------ | ------------------ | ----------------------- |
| `aflreviews`       | AFL Reviews        | aflreviews.com.au       |
| `ufcreview`        | UFC Review         | ufcreview.com.au        |
| `puntersreview`    | Punters Review     | puntersreview.com.au    |
| `sportinformation` | Sport Information  | sportinformation.com.au |
| `punterstory`      | Punter Story       | punterstory.com.au      |

## Architecture

```
src/config/brands.ts      ← the 5 brand identities (colours, fonts, nav, categories)
src/config/site.ts        ← SITE env var → active brand
src/lib/content/          ← content layer
  ├─ types.ts             ← normalised Article/Author shape all components use
  ├─ wordpress.ts         ← headless WP adapter (used when WORDPRESS_API_URL is set)
  ├─ fixtures.ts          ← demo content (used until WordPress exists)
  └─ index.ts             ← source switch — components never know the difference
src/lib/utm.ts            ← TheAIbet deep-link + UTM attribution builder
src/lib/seo.ts            ← NewsArticle / BreadcrumbList / WebSite JSON-LD
src/components/           ← shared article engine, header/footer, TheAIbet CTA
src/app/                  ← routes: /, /[category]/[slug], /category/[slug],
                            /author/[slug], /search, sitemap.xml, robots.txt
wordpress/                ← mu-plugin for the publication taxonomy + meta fields
```

**Content mode switch:** if `WORDPRESS_API_URL` is unset, the sites serve fixture content so they can be deployed and reviewed before the CMS exists. Set the env var and redeploy — zero code changes.

## Deploying (per brand, on Vercel)

Create five Vercel projects from this repo. Per project env vars:

```
SITE=ufcreview                                  # required — selects the brand
NEXT_PUBLIC_SITE_URL=https://ufcreview.com.au   # canonical base URL
WORDPRESS_API_URL=                              # later: https://cms.../wp-json/wp/v2
WORDPRESS_MEDIA_HOST=                           # later: cms media hostname for next/image
NEXT_PUBLIC_THEAIBET_URL=https://www.theaibet.com
```

Then attach each domain in Vercel → Domains.

**punterstory.com redirect:** add `punterstory.com` (and `www.punterstory.com`) as additional domains on the *punterstory* Vercel project. `src/middleware.ts` issues a path-preserving 308 to `punterstory.com.au` (e.g. `/story/example` → `punterstory.com.au/story/example`). The same middleware normalises `www.` → apex for all brands. No duplicate site is ever served on the .com.

## Quality gates / CI

GitHub Actions (`.github/workflows/ci.yml`) runs on every push and PR:

1. `npm run lint` — ESLint (next/core-web-vitals + typescript, flat config)
2. `npm run typecheck` — `tsc --noEmit`
3. **Matrix production build of all five SITE values** — a change cannot land if it fixes one publication and breaks another.

Run the same gate locally with `npm run verify` (all five builds) plus `npm run lint && npm run typecheck`.

## Environment & secrets

All configuration is via env vars — see `.env.example` for the complete documented set. Never commit credentials; `.env*` is gitignored. `WORDPRESS_USERNAME` / `WORDPRESS_APPLICATION_PASSWORD` are reserved for the future newsroom→WordPress publisher service and are NOT required by the public sites (which read the public REST API only).

## WordPress requirements (when you stand it up)

1. Any standard WordPress host (must expose `/wp-json/wp/v2`).
2. Copy `wordpress/mu-plugin-publication-taxonomy.php` → `wp-content/mu-plugins/`.
   This registers the `publication` taxonomy (term slugs = SITE keys), the
   `?publication_slug=` REST filter the frontends query with, and the article
   meta fields: `theaibet_path`, `theaibet_cta_label`, `master_story_id`,
   `seo_title`, `seo_description`.
3. Tag every post with exactly one `publication` term. Categories must use the
   slugs defined per brand in `src/config/brands.ts`.
4. Optional: Yoast — the adapter reads `yoast_head_json` automatically.

## TheAIbet breadcrumb system (roadmap §6–7)

Every article carries a `theaibet_path` (e.g. `/ufc/ufc-330`) and optional CTA label. The `TheAIbetCta` component renders ONE contextual deep link per article with full attribution:

```
utm_source   = publication domain     → which site converted
utm_medium   = referral
utm_campaign = media-network
utm_content  = article slug           → which article converted
utm_term     = master story ID        → which newsroom story converted
```

No generic "Visit TheAIbet" links. Footer carries a single attributed brand link.

## SEO (roadmap §8) — implemented per brand

XML sitemap (`/sitemap.xml`), robots.txt (blocks `/search`), canonical URLs, OpenGraph + Twitter cards, NewsArticle + BreadcrumbList + WebSite/SearchAction JSON-LD, author pages with Person schema, category pages, clean URLs (`/{category}/{slug}`), image alt text, ISR (5-min revalidate against WordPress), mobile-first, en-AU locale, gambling-help disclaimer in every footer.

## Adding a sixth publication

Add one entry to `src/config/brands.ts`, add fixture content (optional), create a Vercel project with the new `SITE` value. Nothing else.

## Local dev

```
npm install
SITE=ufcreview npm run dev        # any brand
./scripts/verify-all.sh           # builds all 5 brands + captures screenshots
```
