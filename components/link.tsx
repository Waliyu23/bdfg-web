import type { AnchorHTMLAttributes } from "react";

type LinkProps = Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "href"> & {
  href: string;
  /** Accepted for API compatibility with next/link; ignored. */
  prefetch?: boolean;
  scroll?: boolean;
  replace?: boolean;
};

/**
 * Plain-anchor stand-in for `next/link`.
 *
 * The site ships as a static export that must also work when hosted from a
 * sub-path, where the client router's absolute route paths would 404. Native
 * anchors resolve against the document instead, so links keep working wherever
 * the `out/` folder is served from. Swap this back to `next/link` if the site
 * is ever hosted at a domain root and client-side transitions are wanted.
 */
export default function Link({ href, prefetch, scroll, replace, ...rest }: LinkProps) {
  return <a href={href} {...rest} />;
}
