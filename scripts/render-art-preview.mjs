import { chromium } from "playwright";
const browser = await chromium.launch({ executablePath: "/opt/pw-browsers/chromium" });
const page = await browser.newPage({ viewport: { width: 1600, height: 900 }, deviceScaleFactor: 0.5 });
const files = [
  ["aflreviews", "collingwood-vs-carlton-round-23-preview"],
  ["ufcreview", "ufc-330-full-card-breakdown"],
  ["puntersreview", "memsie-stakes-day-preview-caulfield"],
  ["punterstory", "the-day-the-tab-went-quiet"],
];
for (const [b, s] of files) {
  await page.goto(`file:///home/claude/work/theaibet-media-network/public/art/${b}/${s}.svg`);
  await page.screenshot({ path: `/tmp/art-${b}.png` });
}
await browser.close();
console.log("done");
