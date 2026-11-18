"use client";

import ArrowRight from "@/components/arrow-right";
import Link from "@/components/link";
import Photo from "@/components/photo";
import { useEffect, useState } from "react";

const slides = [
  "/images/Heros/Hero-1.jpeg",
  "/images/Heros/Hero-2.jpeg",
  "/images/Heros/Hero-3.jpeg",
];

export default function HomeHero() {
  const [activeSlide, setActiveSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const updatePreference = () => setPrefersReducedMotion(mediaQuery.matches);

    updatePreference();
    mediaQuery.addEventListener("change", updatePreference);
    return () => mediaQuery.removeEventListener("change", updatePreference);
  }, []);

  useEffect(() => {
    if (isPaused || prefersReducedMotion) return;

    const interval = window.setInterval(() => {
      setActiveSlide((current) => (current + 1) % slides.length);
    }, 6000);

    return () => window.clearInterval(interval);
  }, [isPaused, prefersReducedMotion]);

  const showPrevious = () => {
    setActiveSlide((current) => (current - 1 + slides.length) % slides.length);
  };

  const showNext = () => {
    setActiveSlide((current) => (current + 1) % slides.length);
  };

  return (
    <section
      aria-label="Featured programmes"
      aria-roledescription="carousel"
      className="relative flex min-h-[620px] overflow-hidden bg-blue-950 text-white sm:min-h-[680px]"
    >
      <div className="absolute inset-0" aria-hidden="true">
        <div
          className="flex h-full w-[300%] transition-transform duration-700 ease-in-out motion-reduce:transition-none"
          style={{ transform: `translateX(-${(activeSlide * 100) / slides.length}%)` }}
        >
          {slides.map((src) => (
            <div key={src} className="relative h-full w-1/3 shrink-0">
              <Photo
                src={src}
                alt=""
                width={1536}
                height={1024}
                priority
                sizes="100vw"
                className="h-full w-full object-cover"
              />
            </div>
          ))}
        </div>
      </div>
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-r from-blue-950/85 via-blue-950/65 to-blue-950/20"
      />
      <div className="shell relative flex flex-1 flex-col justify-center py-24 sm:py-28">
        <div className="max-w-3xl">
          <p className="mb-5 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-gold-300">
            <span aria-hidden="true" className="block h-[2px] w-6 bg-gold-400" />
            Better Dream Foundation Ghana
          </p>
          <h1 className="font-display text-[2.6rem] leading-[1.05] sm:text-[4rem] lg:text-[4.75rem]">
            Together, we can build a better future.
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-white/75 sm:text-lg">
            Working alongside communities across Ghana to expand access to
            social services and create lasting, sustainable change.
          </p>
          <div className="mt-9 flex flex-wrap gap-3">
            <Link href="/get-involved" className="btn-gold">
              Get involved <ArrowRight />
            </Link>
            <Link href="/focus-areas" className="btn-onblue">
              Explore our work <ArrowRight />
            </Link>
          </div>
        </div>
      </div>
      <div
        className="absolute bottom-8 right-5 z-10 flex items-center gap-1 rounded-full border border-white/20 bg-blue-950/55 p-1.5 backdrop-blur-sm sm:right-8"
      >
        <button
          type="button"
          onClick={showPrevious}
          aria-label="Previous hero image"
          className="flex h-9 w-9 items-center justify-center rounded-full text-white transition-colors hover:bg-white/15"
        >
          <svg
            viewBox="0 0 24 24"
            className="h-5 w-5"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            aria-hidden="true"
          >
            <path
              d="M15 18l-6-6 6-6"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
        {slides.map((src, index) => (
          <button
            key={src}
            type="button"
            onClick={() => setActiveSlide(index)}
            aria-label={`Show hero image ${index + 1}`}
            aria-pressed={activeSlide === index}
            className={`h-2.5 rounded-full transition-all ${
              activeSlide === index ? "w-6 bg-gold-300" : "w-2.5 bg-white/65"
            }`}
          />
        ))}
        {!prefersReducedMotion && (
          <button
            type="button"
            onClick={() => setIsPaused((paused) => !paused)}
            aria-label={isPaused ? "Resume hero images" : "Pause hero images"}
            aria-pressed={isPaused}
            className="flex h-9 w-9 items-center justify-center rounded-full text-white transition-colors hover:bg-white/15"
          >
            {isPaused ? (
              <svg
                viewBox="0 0 24 24"
                className="h-4 w-4"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M8 5v14l11-7z" />
              </svg>
            ) : (
              <svg
                viewBox="0 0 24 24"
                className="h-4 w-4"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M7 5h4v14H7zM15 5h4v14h-4z" />
              </svg>
            )}
          </button>
        )}
        <button
          type="button"
          onClick={showNext}
          aria-label="Next hero image"
          className="flex h-9 w-9 items-center justify-center rounded-full text-white transition-colors hover:bg-white/15"
        >
          <svg
            viewBox="0 0 24 24"
            className="h-5 w-5"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            aria-hidden="true"
          >
            <path
              d="M9 18l6-6-6-6"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>
      <div className="kente absolute inset-x-0 bottom-0" />
    </section>
  );
}
