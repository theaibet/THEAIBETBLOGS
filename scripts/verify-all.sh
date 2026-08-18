#!/bin/bash
set -e
declare -A ARTICLES=(
  [aflreviews]="/previews/collingwood-vs-carlton-round-23-preview"
  [ufcreview]="/previews/ufc-330-full-card-breakdown"
  [puntersreview]="/previews/memsie-stakes-day-preview-caulfield"
  [sportinformation]="/explainers/afl-finals-system-explained"
  [punterstory]="/big-wins/the-day-the-tab-went-quiet"
)
PORT=4600
for BRAND in aflreviews ufcreview puntersreview sportinformation punterstory; do
  echo "=== Building $BRAND ==="
  SITE=$BRAND npx next build > /tmp/build-$BRAND.log 2>&1 || { echo "BUILD FAILED: $BRAND"; tail -20 /tmp/build-$BRAND.log; exit 1; }
  SITE=$BRAND npx next start -p $PORT > /tmp/start-$BRAND.log 2>&1 &
  for i in $(seq 1 40); do curl -sf http://localhost:$PORT >/dev/null 2>&1 && break; sleep 0.5; done
  node scripts/screenshot.mjs $BRAND $PORT "${ARTICLES[$BRAND]}"
  curl -sf http://localhost:$PORT/sitemap.xml | head -c 300 > /tmp/sitemap-$BRAND.txt
  curl -sf http://localhost:$PORT/robots.txt > /tmp/robots-$BRAND.txt
  PIDS=$(lsof -ti:$PORT || true)
  [ -n "$PIDS" ] && kill $PIDS 2>/dev/null
  sleep 1
  PORT=$((PORT+1))
done
echo "ALL FIVE BRANDS BUILT AND CAPTURED"
