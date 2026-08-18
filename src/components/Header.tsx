import Link from "next/link";
import { getSite } from "@/config/site";

export function Header() {
  const site = getSite();
  return (
    <header className="bg-chrome text-chrome-text border-b border-edge/40">
      <div className="mx-auto max-w-6xl px-4">
        <div className="flex items-center justify-between py-5">
          <Link href="/" className="group flex items-baseline gap-1.5" aria-label={`${site.name} home`}>
            <span className="font-heading text-2xl tracking-tight">{site.logoText}</span>
            {site.logoAccentText && (
              <span className="font-heading text-2xl tracking-tight text-chrome-accent">
                {site.logoAccentText}
              </span>
            )}
          </Link>
          <div className="hidden text-xs uppercase tracking-[0.2em] opacity-70 sm:block">
            {site.tagline}
          </div>
          <Link
            href="/search"
            className="rounded-brand border border-current/30 px-3 py-1.5 text-sm opacity-80 transition hover:opacity-100"
          >
            Search
          </Link>
        </div>
        <nav aria-label="Categories" className="flex gap-1 overflow-x-auto pb-3 -mx-1">
          {site.categories.map((c) => (
            <Link
              key={c.slug}
              href={`/category/${c.slug}`}
              className="whitespace-nowrap rounded-brand px-3 py-1.5 text-sm font-medium opacity-85 transition hover:bg-accent hover:text-accent-contrast hover:opacity-100"
            >
              {c.name}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
