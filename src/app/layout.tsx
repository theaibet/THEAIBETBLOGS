import type { Metadata } from "next";
import { getSite, getSiteUrl } from "@/config/site";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import "./globals.css";

export function generateMetadata(): Metadata {
  const site = getSite();
  return {
    metadataBase: new URL(getSiteUrl()),
    title: {
      default: `${site.name} — ${site.tagline}`,
      template: `%s | ${site.name}`,
    },
    description: site.description,
    openGraph: {
      type: "website",
      siteName: site.name,
      url: getSiteUrl(),
      title: `${site.name} — ${site.tagline}`,
      description: site.description,
      locale: "en_AU",
    },
    twitter: {
      card: "summary_large_image",
      site: site.twitter,
    },
    alternates: { canonical: "/" },
    robots: { index: true, follow: true },
  };
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const site = getSite();
  const t = site.theme;
  const vars = {
    "--brand-bg": t.bg,
    "--brand-surface": t.surface,
    "--brand-text": t.text,
    "--brand-muted": t.muted,
    "--brand-accent": t.accent,
    "--brand-accent-contrast": t.accentContrast,
    "--brand-chrome": t.chrome,
    "--brand-chrome-text": t.chromeText,
    "--brand-border": t.border,
    "--brand-chrome-accent": t.chromeAccent ?? t.accent,
    "--brand-font-heading": t.fontHeading,
    "--brand-font-body": t.fontBody,
    "--brand-heading-transform": t.headingTransform,
    "--brand-heading-weight": String(t.headingWeight),
    "--brand-radius": t.radius,
  } as React.CSSProperties;

  return (
    <html lang="en-AU" style={vars}>
      <body className="min-h-screen">
        <Header />
        <main className="mx-auto max-w-6xl px-4 py-10">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
