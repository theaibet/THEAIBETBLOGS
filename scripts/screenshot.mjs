/** Verification: desktop + mobile captures + HTML checks for a running site. */
import { chromium } from "playwright";
import { mkdirSync } from "node:fs";

const [brand, port, articlePath] = process.argv.slice(2);
const base = `http://localhost:${port}`;
mkdirSync("screenshots", { recursive: true });

const browser = await chromium.launch({ executablePath: "/opt/pw-browsers/chromium" });

// Desktop
const desktop = await browser.newPage({ viewport: { width: 1440, height: 1000 } });
await desktop.goto(base, { waitUntil: "networkidle" });
await desktop.screenshot({ path: `screenshots/${brand}-home.png` });
if (articlePath) {
  await desktop.goto(`${base}${articlePath}`, { waitUntil: "networkidle" });
  await desktop.screenshot({ path: `screenshots/${brand}-article.png` });
  const cta = desktop.locator('aside[aria-label="TheAIbet analysis"]');
  if (await cta.count()) {
    await cta.scrollIntoViewIfNeeded();
    await desktop.screenshot({ path: `screenshots/${brand}-cta.png` });
  }
}

// Mobile (iPhone-ish)
const mobile = await browser.newPage({
  viewport: { width: 390, height: 844 },
  isMobile: true,
  hasTouch: true,
  deviceScaleFactor: 2,
});
await mobile.goto(base, { waitUntil: "networkidle" });
await mobile.screenshot({ path: `screenshots/${brand}-home-mobile.png` });
if (articlePath) {
  await mobile.goto(`${base}${articlePath}`, { waitUntil: "networkidle" });
  await mobile.screenshot({ path: `screenshots/${brand}-article-mobile.png` });
}

await browser.close();
console.log(`captured ${brand} (desktop+mobile)`);
