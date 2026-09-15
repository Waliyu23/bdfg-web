import Link from "@/components/link";

import { focusAreas } from "@/lib/focus-areas";

/**
 * Full-bleed band under the hero: the five focus areas set in large display type,
 * scrolling continuously. The list is rendered twice so the loop is seamless; the
 * duplicate copy is hidden from assistive tech and removed from the tab order.
 * Hovering or focusing the band pauses it, and `prefers-reduced-motion` turns it
 * into a plain wrapped row of links.
 */
export default function FocusTicker() {
  const items = [...focusAreas, ...focusAreas];

  return (
    <section
      aria-labelledby="focus-ticker-heading"
      className="relative overflow-hidden border-y border-blue-800/60 bg-blue-900 py-3 text-white sm:py-4"
    >
      <h2 id="focus-ticker-heading" className="sr-only">
        Our focus areas
      </h2>

      <div className="ticker" data-ticker>
        <ul className="ticker-track">
          {items.map((area, index) => {
            const duplicate = index >= focusAreas.length;
            return (
              <li
                key={`${area.slug}-${index}`}
                aria-hidden={duplicate ? true : undefined}
                className="flex shrink-0 items-center"
              >
                <Link
                  href={`/focus-areas/${area.slug}/`}
                  tabIndex={duplicate ? -1 : undefined}
                  className="ticker-item group"
                >
                  <span className="ticker-index" aria-hidden="true">
                    {String((index % focusAreas.length) + 1).padStart(2, "0")}
                  </span>
                  <span className="ticker-label">{area.title}</span>
                </Link>
                <span className="ticker-sep" aria-hidden="true">
                  <svg viewBox="0 0 12 12" className="h-2.5 w-2.5" fill="none">
                    <path d="M6 0.5 11.5 6 6 11.5 0.5 6Z" fill="currentColor" />
                  </svg>
                </span>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
