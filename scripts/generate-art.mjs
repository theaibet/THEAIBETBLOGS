/**
 * Editorial art generator — produces branded SVG artwork for every fixture
 * article + a default per category. Deterministic (seeded by slug) so builds
 * are reproducible. Output: public/art/<brand>/<slug>.svg (1600×900).
 */
import { mkdirSync, writeFileSync } from "node:fs";

// ── seeded rng ──────────────────────────────────────────────────────────────
function rng(seed) {
  let h = 2166136261;
  for (const c of seed) {
    h ^= c.charCodeAt(0);
    h = Math.imul(h, 16777619);
  }
  return () => {
    h = Math.imul(h ^ (h >>> 15), 2246822507);
    h = Math.imul(h ^ (h >>> 13), 3266489909);
    return ((h ^= h >>> 16) >>> 0) / 4294967296;
  };
}

// ── brand art palettes ──────────────────────────────────────────────────────
const BRANDS = {
  aflreviews: {
    bg1: "#0B1F3A", bg2: "#12305B", bg3: "#081527",
    accent: "#E4404A", accent2: "#F0B429",
    lineC: "#33507E", glyph: "afl",
  },
  ufcreview: {
    bg1: "#111216", bg2: "#1D1F26", bg3: "#08090B",
    accent: "#E8B71A", accent2: "#E8442A",
    lineC: "#2E3038", glyph: "ufc",
  },
  puntersreview: {
    bg1: "#0E3B2A", bg2: "#155940", bg3: "#092619",
    accent: "#D9B64A", accent2: "#F3EFDF",
    lineC: "#2C6A50", glyph: "racing",
  },
  sportinformation: {
    bg1: "#0F2A66", bg2: "#1156D6", bg3: "#0A1B42",
    accent: "#5B9BFF", accent2: "#9BE8C6",
    lineC: "#2C4E9E", glyph: "data",
  },
  punterstory: {
    bg1: "#221E1A", bg2: "#3A3129", bg3: "#171310",
    accent: "#C86A3B", accent2: "#E8D9C0",
    lineC: "#4A4036", glyph: "story",
  },
};

// ── glyphs (large abstract sport iconography, drawn at 0,0 in a 400×400 box) ─
function glyph(kind, color, accent) {
  switch (kind) {
    case "afl": // footy oval + goal posts
      return `
      <g fill="none" stroke="${color}" stroke-width="7">
        <ellipse cx="200" cy="230" rx="185" ry="118"/>
        <ellipse cx="200" cy="230" rx="90" ry="55" opacity="0.6"/>
        <circle cx="200" cy="230" r="6" fill="${color}"/>
      </g>
      <g stroke="${accent}" stroke-width="10" stroke-linecap="round">
        <line x1="150" y1="40" x2="150" y2="140"/>
        <line x1="250" y1="40" x2="250" y2="140"/>
        <line x1="105" y1="70" x2="105" y2="140" opacity="0.7"/>
        <line x1="295" y1="70" x2="295" y2="140" opacity="0.7"/>
      </g>`;
    case "ufc": // octagon + cross-lines
      { const pts = Array.from({ length: 8 }, (_, i) => {
          const a = (Math.PI / 4) * i + Math.PI / 8;
          return `${200 + 175 * Math.cos(a)},${200 + 175 * Math.sin(a)}`;
        }).join(" ");
        const pts2 = Array.from({ length: 8 }, (_, i) => {
          const a = (Math.PI / 4) * i + Math.PI / 8;
          return `${200 + 120 * Math.cos(a)},${200 + 120 * Math.sin(a)}`;
        }).join(" ");
        return `
        <polygon points="${pts}" fill="none" stroke="${color}" stroke-width="8"/>
        <polygon points="${pts2}" fill="none" stroke="${color}" stroke-width="3" opacity="0.55"/>
        <line x1="200" y1="80" x2="200" y2="320" stroke="${accent}" stroke-width="4" opacity="0.8"/>
        <line x1="80" y1="200" x2="320" y2="200" stroke="${accent}" stroke-width="4" opacity="0.8"/>`; }
    case "racing": // track bend + rail + furlong ticks
      return `
      <g fill="none">
        <path d="M 20 330 C 90 120 310 120 380 330" stroke="${color}" stroke-width="8"/>
        <path d="M 55 330 C 115 165 285 165 345 330" stroke="${color}" stroke-width="4" opacity="0.6"/>
        <path d="M 90 330 C 140 205 260 205 310 330" stroke="${color}" stroke-width="2.5" opacity="0.35"/>
        ${[0.12, 0.3, 0.5, 0.7, 0.88]
          .map((t) => {
            const x = 20 + 360 * t;
            return `<line x1="${x}" y1="345" x2="${x}" y2="365" stroke="${accent}" stroke-width="5"/>`;
          })
          .join("")}
        <circle cx="200" cy="176" r="10" fill="${accent}"/>
      </g>`;
    case "data": // chart bars + trend line
      return `
      <g>
        ${[70, 130, 190, 250, 310]
          .map((x, i) => {
            const h = [90, 150, 120, 210, 260][i];
            return `<rect x="${x - 22}" y="${340 - h}" width="44" height="${h}" rx="6" fill="${color}" opacity="${0.35 + i * 0.12}"/>`;
          })
          .join("")}
        <polyline points="48,250 130,205 190,225 250,140 332,80" fill="none" stroke="${accent}" stroke-width="7" stroke-linecap="round" stroke-linejoin="round"/>
        <circle cx="332" cy="80" r="11" fill="${accent}"/>
      </g>`;
    case "story": // oversized quote marks + rule
      return `
      <g fill="${color}">
        <path d="M 60 120 q -40 60 -20 130 l 80 0 q -5 -55 15 -95 l -35 -55 z"/>
        <path d="M 200 120 q -40 60 -20 130 l 80 0 q -5 -55 15 -95 l -35 -55 z"/>
      </g>
      <line x1="60" y1="310" x2="340" y2="310" stroke="${accent}" stroke-width="6" stroke-linecap="round"/>`;
    default:
      return "";
  }
}

function art(brandKey, slug, title) {
  const b = BRANDS[brandKey];
  const r = rng(`${brandKey}/${slug}`);
  const angle = Math.floor(r() * 360);
  const gs = 1.1 + r() * 0.55;
  const gx = 950 + Math.floor(r() * 250);
  const gy = 60 + Math.floor(r() * 130);
  const grot = Math.floor(r() * 16 - 8);
  const beamX = Math.floor(r() * 600);

  // fine grid
  let grid = "";
  for (let x = 0; x <= 1600; x += 80) grid += `<line x1="${x}" y1="0" x2="${x}" y2="900"/>`;
  for (let y = 0; y <= 900; y += 80) grid += `<line x1="0" y1="${y}" x2="1600" y2="${y}"/>`;

  // dot texture cluster
  let dots = "";
  const dcx = 150 + r() * 350, dcy = 550 + r() * 250;
  for (let i = 0; i < 90; i++) {
    const a = r() * Math.PI * 2, d = r() * 230;
    dots += `<circle cx="${(dcx + Math.cos(a) * d).toFixed(0)}" cy="${(dcy + Math.sin(a) * d * 0.6).toFixed(0)}" r="${(1 + r() * 2.4).toFixed(1)}"/>`;
  }

  return `<svg xmlns="http://www.w3.org/2000/svg" width="1600" height="900" viewBox="0 0 1600 900" role="img" aria-label="${title.replace(/"/g, "&quot;")}">
  <defs>
    <linearGradient id="bg" gradientTransform="rotate(${angle} 0.5 0.5)">
      <stop offset="0%" stop-color="${b.bg2}"/>
      <stop offset="55%" stop-color="${b.bg1}"/>
      <stop offset="100%" stop-color="${b.bg3}"/>
    </linearGradient>
    <radialGradient id="glow" cx="${(gx / 1600).toFixed(2)}" cy="${(gy / 900).toFixed(2)}" r="0.75">
      <stop offset="0%" stop-color="${b.accent}" stop-opacity="0.28"/>
      <stop offset="55%" stop-color="${b.accent}" stop-opacity="0.05"/>
      <stop offset="100%" stop-color="${b.accent}" stop-opacity="0"/>
    </radialGradient>
    <linearGradient id="beam" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="${b.accent2}" stop-opacity="0.07"/>
      <stop offset="100%" stop-color="${b.accent2}" stop-opacity="0"/>
    </linearGradient>
    <filter id="grain">
      <feTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="2" stitchTiles="stitch"/>
      <feColorMatrix type="matrix" values="0 0 0 0 1  0 0 0 0 1  0 0 0 0 1  0 0 0 0.05 0"/>
    </filter>
  </defs>
  <rect width="1600" height="900" fill="url(#bg)"/>
  <rect width="1600" height="900" fill="url(#glow)"/>
  <g stroke="${b.lineC}" stroke-width="1" opacity="0.28">${grid}</g>
  <polygon points="${beamX},900 ${beamX + 460},0 ${beamX + 640},0 ${beamX + 180},900" fill="url(#beam)"/>
  <g fill="${b.accent}" opacity="0.5">${dots}</g>
  <g transform="translate(${gx - 200 * gs} ${gy}) scale(${gs.toFixed(2)}) rotate(${grot} 200 200)" opacity="0.85">
    ${glyph(b.glyph, b.lineC, b.accent)}
  </g>
  <rect x="0" y="852" width="1600" height="48" fill="${b.bg3}" opacity="0.65"/>
  <rect x="0" y="852" width="420" height="6" fill="${b.accent}"/>
  <rect width="1600" height="900" filter="url(#grain)"/>
</svg>`;
}

// article slugs per brand (must match fixtures.ts) + a category-default set
const ARTICLES = {
  aflreviews: [
    "collingwood-vs-carlton-round-23-preview",
    "top-four-race-ladder-scenarios-2026",
    "why-forward-pressure-is-the-2026-premiership-stat",
    "injury-list-round-23-who-returns-for-finals",
    "_default",
    "_inline",
  ],
  ufcreview: [
    "ufc-330-full-card-breakdown",
    "model-vs-market-where-the-numbers-disagree-ufc-330",
    "the-southpaw-problem-style-matchups-explained",
    "prospect-watch-five-fighters-to-track-2026",
    "_default",
    "_inline",
  ],
  puntersreview: [
    "memsie-stakes-day-preview-caulfield",
    "understanding-market-percentages-betting-education",
    "flemington-track-bias-report-winter-2026",
    "spring-carnival-2026-early-markets-value-scan",
    "_default",
    "_inline",
  ],
  sportinformation: [
    "afl-finals-system-explained",
    "how-ufc-scoring-works-10-point-must",
    "melbourne-cup-history-facts-records",
    "nrl-vs-afl-key-differences-explained",
    "_default",
    "_inline",
  ],
  punterstory: [
    "the-day-the-tab-went-quiet",
    "grand-final-day-1989-a-punting-memory",
    "interview-thirty-years-on-course-bookmaker",
    "the-quaddie-that-paid-for-a-wedding",
    "_default",
    "_inline",
  ],
};

let count = 0;
for (const [brand, slugs] of Object.entries(ARTICLES)) {
  mkdirSync(`public/art/${brand}`, { recursive: true });
  for (const slug of slugs) {
    writeFileSync(`public/art/${brand}/${slug}.svg`, art(brand, slug, slug.replace(/-/g, " ")));
    count++;
  }
}
console.log(`generated ${count} artworks`);
