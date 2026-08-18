#!/bin/bash
# Build verification: every SITE variant must build.
# A change must never fix one publication and break another.
set -e
for BRAND in aflreviews ufcreview puntersreview sportinformation punterstory; do
  echo "=== next build — SITE=$BRAND ==="
  SITE=$BRAND npx next build > /tmp/build-$BRAND.log 2>&1 \
    || { echo "❌ BUILD FAILED: $BRAND"; tail -30 /tmp/build-$BRAND.log; exit 1; }
  echo "✅ $BRAND"
done
echo "ALL FIVE SITE BUILDS PASSED"
