import Image from "next/image";
import type { ArticleImage } from "@/lib/content/types";
import { getSite } from "@/config/site";

/**
 * Renders an article image. Local editorial artwork (/art/...) renders as a
 * plain <img> (SVG, already optimised); remote CMS photography goes through
 * next/image for responsive optimisation (WebP/AVIF, srcset).
 */
export function ArtImage({
  image,
  alt,
  className,
  sizes,
  eager = false,
}: {
  image?: ArticleImage;
  alt: string;
  className?: string;
  sizes?: string;
  eager?: boolean;
}) {
  const site = getSite();
  const url = image?.url ?? `/art/${site.key}/_default.svg`;

  if (url.startsWith("/")) {
    return (
      // eslint-disable-next-line @next/next/no-img-element
      <img
        src={url}
        alt={alt}
        className={className}
        loading={eager ? "eager" : "lazy"}
        fetchPriority={eager ? "high" : "auto"}
      />
    );
  }
  return (
    <Image
      src={url}
      alt={alt}
      fill
      priority={eager}
      className={className}
      sizes={sizes ?? "(min-width: 768px) 50vw, 100vw"}
    />
  );
}

/** Small credit line for licensed/owned photography or artwork. */
export function ImageCredit({ image }: { image?: ArticleImage }) {
  if (!image?.credit) return null;
  return (
    <figcaption className="mt-2 text-[11px] uppercase tracking-[0.12em] text-muted">
      {image.caption ? `${image.caption} — ` : ""}
      {image.credit}
    </figcaption>
  );
}
