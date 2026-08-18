import Link from "next/link";
import { getSite } from "@/config/site";

export function Header() {
  const site = getSite();
  return (
    <header className="bg-chrome text-chrome-text border-b border-edge/40">
      <div className="mx-auto max-w-6xl px-4">
        <div className="flex items-center justify-between py-6">
          <Link href="/" className="group flex items-baseline gap-2" aria-label={`${site.name} home`}>
            <span className="font-heading text-3xl tracking-tight sm:text-4xl">{site.logoText}</span>
            {site.logoAccentText && (
              <span className="font-heading text-3xl tracking-tight text-chrome-accent sm:text-4xl">
                {site.logoAccentText}
              </span>
            )}
          </Link>
          <div className="hidden text-[11px] font-semibold uppercase tracking-[0.28em] opacity-60 md:block">
            {site.tagline}
          </div>
          <Link
            href="/search"
            className="rounded-brand border border-current/25 px-3.5 py-1.5 text-sm font-medium opacity-80 transition hover:border-current/60 hover:opacity-100"
          >
            Search
          </Link>
        </div>
        <nav
          aria-label="Categories"
          className="-mx-1 flex gap-0.5 overflow-x-auto border-t border-current/10 pb-0"
        >
          {site.categories.map((c) => (
            <Link
              key={c.slug}
              href={`/category/${c.slug}`}
              className="whitespace-nowrap border-b-2 border-transparent px-3.5 py-3 text-sm font-semibold opacity-80 transition hover:border-accent hover:opacity-100"
            >
              {c.name}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
