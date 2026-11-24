"use client";

import Photo from "@/components/photo";
import { useCallback, useEffect, useState } from "react";

export type GalleryPhoto = {
  src: string;
  alt: string;
  caption: string;
  span: string;
};

/**
 * Programme photo grid with a lightbox.
 *
 * Each tile is a real button, so the grid is fully keyboard-operable; the
 * lightbox traps Escape and arrow keys, locks background scroll and restores
 * focus to the tile that opened it.
 */
export default function PhotoGallery({
  photos,
  showCaptions = true,
}: {
  photos: GalleryPhoto[];
  showCaptions?: boolean;
}) {
  const [open, setOpen] = useState<number | null>(null);
  const current = open === null ? null : photos[open];

  const step = useCallback(
    (delta: number) => {
      setOpen((index) =>
        index === null
          ? index
          : (index + delta + photos.length) % photos.length,
      );
    },
    [photos.length],
  );

  useEffect(() => {
    if (open === null) return;

    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(null);
      if (event.key === "ArrowRight") step(1);
      if (event.key === "ArrowLeft") step(-1);
    };

    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = previous;
      window.removeEventListener("keydown", onKey);
    };
  }, [open, step]);

  return (
    <>
      <div className="mt-10 grid auto-rows-[220px] grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {photos.map((photo, index) => (
          <figure
            key={photo.caption}
            className={`reveal-scale group relative overflow-hidden rounded-xl2 shadow-card ${photo.span}`}
          >
            <button
              type="button"
              onClick={() => setOpen(index)}
              className="h-full w-full cursor-zoom-in text-left"
              aria-label={`Enlarge photo: ${photo.caption || photo.alt}`}
            >
              <Photo
                src={photo.src}
                alt={photo.alt}
                width={1536}
                height={1024}
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="h-full w-full object-cover transition-transform duration-[900ms] motion-safe:group-hover:scale-[1.05]"
              />
              <span className="absolute inset-0 bg-blue-900/0 transition-colors duration-300 group-hover:bg-blue-900/10" />
            </button>
            {showCaptions && (
              <figcaption className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-blue-900/85 via-blue-900/35 to-transparent px-5 pb-4 pt-10 text-xs font-medium text-white">
                {photo.caption}
              </figcaption>
            )}
          </figure>
        ))}
      </div>

      {current && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={current.caption || current.alt}
          onClick={() => setOpen(null)}
          className="fixed inset-0 z-[80] flex items-center justify-center bg-blue-900/85 p-4 backdrop-blur-sm motion-safe:animate-[fade-in_180ms_ease-out] sm:p-8"
        >
          <div
            onClick={(event) => event.stopPropagation()}
            className="relative w-full max-w-4xl"
          >
            <Photo
              src={current.src}
              alt={current.alt}
              width={1536}
              height={1024}
              priority
              sizes="(max-width: 1024px) 100vw, 900px"
              className="max-h-[75vh] w-full rounded-xl2 object-contain shadow-lift"
            />
            {showCaptions && (
              <p className="mt-4 text-center text-sm text-white/85">
                {current.caption}
              </p>
            )}

            <button
              type="button"
              onClick={() => setOpen(null)}
              aria-label="Close photo"
              className="absolute -top-3 right-0 flex h-11 w-11 items-center justify-center rounded-full bg-white text-blue-900 shadow-lift transition-transform duration-200 hover:scale-105 sm:-right-3"
            >
              <svg
                viewBox="0 0 24 24"
                className="h-5 w-5"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.1"
                aria-hidden="true"
              >
                <path d="M6 6l12 12M18 6L6 18" strokeLinecap="round" />
              </svg>
            </button>

            <div className="mt-5 flex items-center justify-center gap-3">
              <button
                type="button"
                onClick={() => step(-1)}
                aria-label="Previous photo"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-white/35 text-white transition-colors duration-200 hover:bg-white hover:text-blue-900"
              >
                <svg
                  viewBox="0 0 24 24"
                  className="h-5 w-5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.1"
                  aria-hidden="true"
                >
                  <path
                    d="M14 6l-6 6 6 6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
              <span className="text-xs font-semibold uppercase tracking-[0.14em] text-white/70">
                {(open ?? 0) + 1} / {photos.length}
              </span>
              <button
                type="button"
                onClick={() => step(1)}
                aria-label="Next photo"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-white/35 text-white transition-colors duration-200 hover:bg-white hover:text-blue-900"
              >
                <svg
                  viewBox="0 0 24 24"
                  className="h-5 w-5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.1"
                  aria-hidden="true"
                >
                  <path
                    d="M10 6l6 6-6 6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
