#!/bin/bash
set -e
declare -A ARTICLES=(
  [aflreviews]="/previews/collingwood-v-brisbane-lions-round-24-preview"
  [ufcreview]="/results/ufc-330-results-makhachev-breaks-record"
  [puntersreview]="/previews/memsie-stakes-day-preview-caulfield"
  [sportinformation]="/explainers/afl-finals-system-explained"
  [punterstory]="/big-wins/the-day-the-tab-went-quiet"
)
PORT=4600
# kill stale servers from previous runs (EADDRINUSE -> screenshots hit old builds)
for p in 4600 4601 4602 4603 4604; do pids=$(lsof -ti:$p 2>/dev/null || true); if [ -n "$pids" ]; then kill $pids; sleep 1; fi; done
for BRAND in aflreviews ufcreview puntersreview sportinformation punterstory; do
  echo "=== Building $BRAND ==="
  SITE=$BRAND npx next build > /tmp/build-$BRAND.log 2>&1 || { echo "BUILD FAILED: $BRAND"; tail -30 /tmp/build-$BRAND.log; exit 1; }
  SITE=$BRAND npx next start -p $PORT > /tmp/start-$BRAND.log 2>&1 &
  sleep 2
  if grep -q EADDRINUSE /tmp/start-$BRAND.log; then echo "PORT $PORT IN USE — aborting"; exit 1; fi
  for i in $(seq 1 40); do curl -sf http://localhost:$PORT >/dev/null 2>&1 && break; sleep 0.5; done
  curl -s http://localhost:$PORT >/dev/null; sleep 3; node scripts/screenshot.mjs $BRAND $PORT "${ARTICLES[$BRAND]}"
  # HTML integrity checks
  HTML=$(curl -s "http://localhost:$PORT${ARTICLES[$BRAND]}")
  echo "$HTML" | grep -q "utm_source=" && echo "  ✅ CTA UTM present" || echo "  ❌ CTA UTM MISSING"
  echo "$HTML" | grep -q 'rel="canonical"' && echo "  ✅ canonical present" || echo "  ❌ canonical MISSING"
  echo "$HTML" | grep -q '/art/' && echo "  ✅ artwork present" || echo "  ❌ artwork MISSING"
  echo "$HTML" | grep -q 'og:image' && echo "  ✅ og:image present" || echo "  ❌ og:image MISSING"
  curl -sf "http://localhost:$PORT/sitemap.xml" | grep -q "<urlset" && echo "  ✅ sitemap ok" || echo "  ❌ sitemap FAIL"
  curl -sf "http://localhost:$PORT/robots.txt" | grep -q "Sitemap:" && echo "  ✅ robots ok" || echo "  ❌ robots FAIL"
  PIDS=$(lsof -ti:$PORT || true)
  [ -n "$PIDS" ] && kill $PIDS 2>/dev/null
  sleep 1
  PORT=$((PORT+1))
done
echo "ALL FIVE BRANDS BUILT, CAPTURED AND CHECKED"
