/**
 * Verification script: for a running site on PORT, capture homepage + one
 * article page. Usage: node scripts/screenshot.mjs <brandKey> <port> <articlePath>
 */
import { chromium } from "playwright";
import { mkdirSync } from "node:fs";

const [brand, port, articlePath] = process.argv.slice(2);
const base = `http://localhost:${port}`;
mkdirSync("screenshots", { recursive: true });

const browser = await chromium.launch({
  executablePath: "/opt/pw-browsers/chromium",
});
const page = await browser.newPage({ viewport: { width: 1440, height: 1000 } });

await page.goto(base, { waitUntil: "networkidle" });
await page.screenshot({ path: `screenshots/${brand}-home.png`, fullPage: false });

if (articlePath) {
  await page.goto(`${base}${articlePath}`, { waitUntil: "networkidle" });
  await page.screenshot({ path: `screenshots/${brand}-article.png`, fullPage: false });
  // scroll to CTA for a second capture
  const cta = page.locator('aside[aria-label="TheAIbet analysis"]');
  if (await cta.count()) {
    await cta.scrollIntoViewIfNeeded();
    await page.screenshot({ path: `screenshots/${brand}-cta.png`, fullPage: false });
  }
}

await browser.close();
console.log(`captured ${brand}`);
