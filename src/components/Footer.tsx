import Link from "next/link";
import { getSite, THEAIBET_BASE_URL } from "@/config/site";
import { BRANDS } from "@/config/brands";

export function Footer() {
  const site = getSite();
  const network = Object.values(BRANDS).filter((b) => b.key !== site.key);
  return (
    <footer className="mt-16 bg-chrome text-chrome-text border-t border-edge/40">
      <div className="mx-auto max-w-6xl px-4 py-12">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <div className="flex items-baseline gap-1.5">
              <span className="font-heading text-xl">{site.logoText}</span>
              {site.logoAccentText && (
                <span className="font-heading text-xl text-chrome-accent">{site.logoAccentText}</span>
              )}
            </div>
            <p className="mt-3 max-w-xs text-sm leading-relaxed opacity-70">{site.description}</p>
          </div>
          <div>
            <h3 className="font-heading text-sm tracking-wide opacity-90">Sections</h3>
            <ul className="mt-3 space-y-2 text-sm">
              {site.categories.map((c) => (
                <li key={c.slug}>
                  <Link href={`/category/${c.slug}`} className="opacity-70 transition hover:opacity-100">
                    {c.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="font-heading text-sm tracking-wide opacity-90">Our Network</h3>
            <ul className="mt-3 space-y-2 text-sm">
              {network.map((b) => (
                <li key={b.key}>
                  <a
                    href={`https://${b.domain}`}
                    className="opacity-70 transition hover:opacity-100"
                    rel="noopener"
                  >
                    {b.name}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href={`${THEAIBET_BASE_URL}?utm_source=${site.domain}&utm_medium=referral&utm_campaign=media-network&utm_content=footer`}
                  className="font-medium text-chrome-accent transition hover:opacity-90"
                  rel="noopener"
                >
                  TheAIbet — AI Sports Analysis
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-10 border-t border-current/15 pt-6 text-xs leading-relaxed opacity-60">
          <p>
            © {new Date().getFullYear()} {site.name}. All rights reserved. Independent publication —
            not affiliated with any league, promotion or wagering operator.
          </p>
          <p className="mt-2">
            18+. Gamble responsibly. What&apos;s gambling really costing you? For free and confidential
            support call 1800 858 858 or visit{" "}
            <a href="https://www.gamblinghelponline.org.au" rel="noopener" className="underline">
              gamblinghelponline.org.au
            </a>
            .
          </p>
        </div>
      </div>
    </footer>
  );
}
