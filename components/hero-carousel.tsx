"use client";

import Image from "next/image";
import Link from "next/link";
import { useCallback, useEffect, useRef, useState } from "react";

import ArrowRight from "@/components/arrow-right";

type Slide = {
  eyebrow: string;
  title: React.ReactNode;
  body: string;
  primary: { href: string; label: string };
  secondary: { href: string; label: string };
  image: string;
  imageAlt: string;
  quote: string;
  quoteMeta: string;
};

const slides: Slide[] = [
  {
    eyebrow: "Non-political · Non-profit · Since 2001",
    title: (
      <>
        Better lives, built <span className="text-blue-600">with</span> communities.
      </>
    ),
    body: "Better Dream Foundation Ghana expands access to social services and promotes sustainable development for marginalised communities — empowering women, youth, persons with disabilities and underserved districts through practical programmes, advocacy and strategic partnerships.",
    primary: { href: "/focus-areas", label: "Explore our focus areas" },
    secondary: { href: "/donate", label: "Support our work" },
    image: "/images/hero-community.webp",
    imageAlt:
      "Women and young women of a northern Ghana community standing together in warm afternoon light",
    quote: "Together we will make better future",
    quoteMeta: "Accra · Tamale · Daboya, Savannah Region",
  },
  {
    eyebrow: "Education · Daboya · Tamale",
    title: (
      <>
        Every child <span className="text-blue-600">enrolled</span>, and learning well.
      </>
    ),
    body: "We work with schools, districts and parents to remove the practical barriers that push children out of the classroom — school kits, girls education clubs, retention follow-up and stronger parent-teacher structures in deprived districts.",
    primary: { href: "/focus-areas/education", label: "See our education work" },
    secondary: { href: "/get-involved", label: "Volunteer with us" },
    image: "/images/focus-education.webp",
    imageAlt:
      "Pupils reading exercise books in a community classroom while a teacher writes on the chalkboard",
    quote: "Girls education clubs in five Daboya basic schools",
    quoteMeta: "Education programme, Savannah Region",
  },
  {
    eyebrow: "Women & Youth Empowerment",
    title: (
      <>
        Skills, capital and <span className="text-blue-600">confidence</span> for women and youth.
      </>
    ),
    body: "Savings and loan groups, vocational and digital skills, and mentoring that help women and young people earn a living with dignity in the districts where they already live.",
    primary: { href: "/focus-areas/women-youth-empowerment", label: "See the programme" },
    secondary: { href: "/donate", label: "Fund a savings group" },
    image: "/images/focus-women.webp",
    imageAlt: "Women seated in a circle during a savings group meeting under a tree",
    quote: "Village savings and loan groups",
    quoteMeta: "Women & Youth Empowerment programme",
  },
];

const stats = [
  { value: "2001", label: "Incorporated in Ghana" },
  { value: "3", label: "Offices nationwide" },
  { value: "5", label: "Programme focus areas" },
];

const AUTOPLAY_MS = 7000;

export default function HeroCarousel() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const timer = useRef<ReturnType<typeof setInterval> | null>(null);

  const goTo = useCallback((index: number) => {
    setActive((index + slides.length) % slides.length);
  }, []);

  useEffect(() => {
    if (paused) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    timer.current = setInterval(() => {
      setActive((current) => (current + 1) % slides.length);
    }, AUTOPLAY_MS);

    return () => {
      if (timer.current) clearInterval(timer.current);
    };
  }, [paused]);

  return (
    <section
      className="relative overflow-hidden bg-paper"
      aria-roledescription="carousel"
      aria-label="Better Dream Foundation Ghana highlights"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-0 top-0 hidden w-[38%] bg-blue-800 lg:block lg:h-[calc(6rem+540px+2.25rem)]"
      />
      <div className="shell-wide relative">
        <div className="overflow-hidden">
          <div
            className="flex motion-safe:transition-transform motion-safe:duration-[900ms] motion-safe:ease-[cubic-bezier(0.22,1,0.36,1)]"
            style={{ transform: `translate3d(-${active * 100}%, 0, 0)` }}
          >
            {slides.map((slide, index) => {
              const isActive = index === active;
              return (
                <div
                  key={slide.eyebrow}
                  className="w-full shrink-0 grow-0 basis-full"
                  role="group"
                  aria-roledescription="slide"
                  aria-label={`${index + 1} of ${slides.length}`}
                  aria-hidden={!isActive}
                >
                  <div className="grid items-center gap-12 py-14 sm:py-20 lg:grid-cols-[1.02fr_1fr] lg:gap-16 lg:py-24">
                    <div
                      className={`transition-all duration-700 ease-out ${
                        isActive ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
                      }`}
                    >
                      <p className="eyebrow">{slide.eyebrow}</p>
                      <h1 className="h1 mt-6 max-w-[19ch] text-blue-900">{slide.title}</h1>
                      <p className="lede mt-6 max-w-xl">{slide.body}</p>
                      <div className="mt-9 flex flex-wrap gap-3">
                        <Link
                          href={slide.primary.href}
                          className="btn-primary"
                          tabIndex={isActive ? undefined : -1}
                        >
                          {slide.primary.label} <ArrowRight />
                        </Link>
                        <Link
                          href={slide.secondary.href}
                          className="btn-ghost"
                          tabIndex={isActive ? undefined : -1}
                        >
                          {slide.secondary.label}
                        </Link>
                      </div>
                      <dl className="mt-12 grid max-w-lg grid-cols-3 gap-6 border-t border-line pt-8">
                        {stats.map((stat) => (
                          <div key={stat.label}>
                            <dt className="font-display text-[1.75rem] leading-none text-blue-700">
                              {stat.value}
                            </dt>
                            <dd className="mt-2 text-xs leading-snug text-ink/55">{stat.label}</dd>
                          </div>
                        ))}
                      </dl>
                    </div>

                    <div className="relative">
                      <div className="relative overflow-hidden rounded-xl2 shadow-lift">
                        <Image
                          src={slide.image}
                          alt={slide.imageAlt}
                          width={1600}
                          height={1067}
                          priority={index === 0}
                          sizes="(max-width: 1024px) 100vw, 50vw"
                          className={`h-[300px] w-full object-cover transition-transform duration-[1400ms] ease-out sm:h-[420px] lg:h-[540px] ${
                            isActive ? "scale-100" : "scale-[1.06]"
                          }`}
                        />
                      </div>
                      <div
                        className={`absolute -bottom-6 left-4 right-4 rounded-xl2 border border-line bg-white/95 p-5 shadow-card backdrop-blur transition-all duration-700 ease-out sm:left-8 sm:right-auto sm:max-w-[300px] sm:p-6 ${
                          isActive ? "translate-y-0 opacity-100" : "translate-y-3 opacity-0"
                        }`}
                      >
                        <p className="font-display text-base leading-snug text-blue-800">
                          &ldquo;{slide.quote}&rdquo;
                        </p>
                        <p className="mt-2 text-xs text-ink/55">{slide.quoteMeta}</p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="relative z-10 flex items-center gap-4 pb-10 pt-12 sm:pt-14">
          <div className="flex gap-2">
            <button
              type="button"
              onClick={() => goTo(active - 1)}
              aria-label="Previous slide"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-line bg-white text-blue-700 transition-colors duration-200 hover:border-blue-600 hover:text-blue-900"
            >
              <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2.1" aria-hidden="true">
                <path d="M15 5.5L8.5 12 15 18.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
            <button
              type="button"
              onClick={() => goTo(active + 1)}
              aria-label="Next slide"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-line bg-white text-blue-700 transition-colors duration-200 hover:border-blue-600 hover:text-blue-900"
            >
              <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2.1" aria-hidden="true">
                <path d="M9 5.5L15.5 12 9 18.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          </div>

          <div className="flex items-center gap-2" role="tablist" aria-label="Choose slide">
            {slides.map((slide, index) => (
              <button
                key={slide.eyebrow}
                type="button"
                role="tab"
                aria-selected={index === active}
                aria-label={slide.eyebrow}
                onClick={() => goTo(index)}
                className={`h-[3px] rounded-full transition-all duration-300 ${
                  index === active ? "w-10 bg-blue-700" : "w-5 bg-ink/20 hover:bg-ink/40"
                }`}
              />
            ))}
          </div>

          <span className="ml-auto hidden text-xs font-semibold uppercase tracking-[0.16em] text-ink/40 sm:block lg:text-white/50">
            {String(active + 1).padStart(2, "0")} / {String(slides.length).padStart(2, "0")}
          </span>
        </div>
      </div>
      <div className="kente" />
    </section>
  );
}
