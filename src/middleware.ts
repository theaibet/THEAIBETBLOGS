import { NextRequest, NextResponse } from "next/server";

/**
 * Host-level permanent redirects (roadmap §6 Phase 3):
 *  - punterstory.com (+www) → punterstory.com.au, path preserved
 *  - www.<brand>.com.au → apex, path preserved
 *
 * punterstory.com is added as a domain on the punterstory Vercel project;
 * this middleware 308s it rather than serving a duplicate site.
 */
const HOST_REDIRECTS: Record<string, string> = {
  "punterstory.com": "punterstory.com.au",
  "www.punterstory.com": "punterstory.com.au",
  "www.punterstory.com.au": "punterstory.com.au",
  "www.aflreviews.com.au": "aflreviews.com.au",
  "www.ufcreview.com.au": "ufcreview.com.au",
  "www.puntersreview.com.au": "puntersreview.com.au",
  "www.sportinformation.com.au": "sportinformation.com.au",
};

export function middleware(request: NextRequest) {
  const host = request.headers.get("host")?.toLowerCase().split(":")[0];
  if (host && HOST_REDIRECTS[host]) {
    const url = request.nextUrl.clone();
    url.protocol = "https:";
    url.host = HOST_REDIRECTS[host];
    url.port = "";
    return NextResponse.redirect(url, 308);
  }
  return NextResponse.next();
}

export const config = {
  // Skip static assets and Next internals
  matcher: ["/((?!_next/static|_next/image|favicon.ico).*)"],
};
