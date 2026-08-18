import Link from "next/link";
import { getSite } from "@/config/site";

export default function NotFound() {
  const site = getSite();
  return (
    <div className="py-20 text-center">
      <p className="text-sm font-semibold uppercase tracking-[0.2em] text-accent">404</p>
      <h1 className="mt-3 font-heading text-3xl">Page not found</h1>
      <p className="mx-auto mt-3 max-w-md text-muted">
        That page doesn&apos;t exist on {site.name}. It may have moved, or the link may be wrong.
      </p>
      <Link
        href="/"
        className="mt-8 inline-block rounded-brand bg-accent px-6 py-3 text-sm font-semibold text-accent-contrast transition hover:opacity-90"
      >
        Back to the front page
      </Link>
    </div>
  );
}
