import type { Metadata } from "next";
import { getSite, getSiteUrl } from "@/config/site";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
// Self-hosted webfonts (browsers only download the faces the active brand uses)
import "@fontsource/inter/400.css";
import "@fontsource/inter/500.css";
import "@fontsource/inter/600.css";
import "@fontsource/archivo/700.css";
import "@fontsource/archivo/800.css";
import "@fontsource/barlow-condensed/600.css";
import "@fontsource/barlow-condensed/700.css";
import "@fontsource/barlow/400.css";
import "@fontsource/barlow/500.css";
import "@fontsource/fraunces/600.css";
import "@fontsource/fraunces/700.css";
import "@fontsource/space-grotesk/500.css";
import "@fontsource/space-grotesk/700.css";
import "@fontsource/playfair-display/700.css";
import "@fontsource/playfair-display/800.css";
import "@fontsource/lora/400.css";
import "@fontsource/lora/500.css";
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
