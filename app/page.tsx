import CountUp from "@/components/count-up";
import Photo from "@/components/photo";
import Link from "@/components/link";

import ArrowRight from "@/components/arrow-right";
import CtaBand from "@/components/cta-band";
import FocusTicker from "@/components/focus-ticker";
import HeroCarousel from "@/components/hero-carousel";
import NewsCard from "@/components/news-card";
import { focusAreas } from "@/lib/focus-areas";
import { news } from "@/lib/news";
import PartnerMarquee from "@/components/partner-marquee";
import { officeLocations, site } from "@/lib/site";

const principles = [
  {
    title: "Community-led",
    body: "Priorities come from durbars and needs assessments, not from a donor template.",
  },
  {
    title: "Inclusive by design",
    body: "Women, youth and persons with disabilities are in the room and on the committees.",
  },
  {
    title: "Accountable",
    body: "We report results back to the communities first, and to partners in full.",
  },
  {
    title: "Built to last",
    body: "Local committees and savings groups continue after a project closes.",
  },
];

const footprint = [
  {
    value: "24",
    suffix: "+",
    label: "Years of community service",
    detail: "Incorporated in Ghana since 2001",
  },
  {
    value: "3",
    suffix: "",
    label: "Operational offices",
    detail: "Accra, Tamale and Daboya",
  },
  {
    value: "5",
    suffix: "",
    label: "Programme focus areas",
    detail: "From education to fellowships",
  },
  {
    value: "100",
    suffix: "%",
    label: "Non-political, non-profit",
    detail: "Accountable to the communities we serve",
  },
];

const partnershipRoutes = [
  {
    title: "District assemblies and government agencies",
    body: "We plan with district assemblies, education and health directorates so activities sit inside the district plan instead of running parallel to it.",
  },
  {
    title: "Schools, health facilities and traditional authorities",
    body: "Head teachers, PTAs, clinic staff, chiefs and queen mothers co-design and co-own every community activity we run.",
  },
  {
    title: "Donors, foundations and corporate social investors",
    body: "Restricted and unrestricted funding, in-kind supplies and staff volunteering, with narrative and financial reporting to your format.",
  },
];

export default function HomePage() {
  const featuredNews = news.slice(0, 3);

  return (
    <>
      {/* Hero art is the largest-contentful paint on this page: preload the
          exact srcset candidate the browser will pick. */}
      <link
        rel="preload"
        href="/images/hero-community-1200.webp"
        as="image"
        type="image/webp"
        imageSrcSet="/images/hero-community-480.webp 480w, /images/hero-community-768.webp 768w, /images/hero-community-1200.webp 1200w, /images/hero-community-1536.webp 1536w"
        imageSizes="(max-width: 1024px) 100vw, 46vw"
        fetchPriority="high"
      />
      <HeroCarousel />
      <FocusTicker />

      {/* Who we are */}
      <section className="section">
        <div className="shell grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
          <div className="reveal">
            <p className="eyebrow">Who we are</p>
            <h2 className="h2 mt-5 text-blue-900">
              Twenty-four years of showing up in the same communities.
            </h2>
          </div>
          <div className="reveal prose-body">
            <p>
              Better Dream Foundation Ghana is a non-political, non-profit
              organisation established and incorporated under Ghana&rsquo;s
              Companies Act in 2001. We are committed to improving the lives of
              marginalised communities throughout Ghana by expanding access to
              social services and promoting sustainable development.
            </p>
            <p>
              Our work focuses on empowering women, youth, persons with
              disabilities and underserved communities through practical
              programmes, advocacy and strategic partnerships. We are
              deliberately small in overhead and deliberately close to the
              ground: our staff and volunteers live in the districts where our
              programmes run.
            </p>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {principles.map((item) => (
                <div
                  key={item.title}
                  className="rounded-xl border border-line bg-white p-5"
                >
                  <h3 className="h3 text-blue-800">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink/65">
                    {item.body}
                  </p>
                </div>
              ))}
            </div>
            <Link href="/about" className="link-underline mt-8">
              Read more about the Foundation <ArrowRight />
            </Link>
          </div>
        </div>
      </section>

      {/* Focus areas */}
      <section className="section bg-gold-400">
        <div className="shell">
          <div className="reveal flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="eyebrow">What we do</p>
              <h2 className="h2 mt-5 max-w-[24ch] text-blue-900">
                Five focus areas, one connected agenda.
              </h2>
            </div>
            <Link
              href="/focus-areas"
              className="inline-flex shrink-0 items-center gap-1.5 border-b-2 border-blue-900/40 pb-1 text-sm font-semibold text-blue-900 transition-colors hover:border-blue-900"
            >
              All focus areas <ArrowRight />
            </Link>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {focusAreas.map((area, index) => (
              <Link
                key={area.slug}
                href={`/focus-areas/${area.slug}`}
                className={`reveal group relative flex flex-col overflow-hidden rounded-xl2 border border-line bg-white shadow-card transition-shadow duration-300 hover:shadow-lift ${
                  index === 0 ? "lg:col-span-2" : ""
                }`}
              >
                <div className="relative overflow-hidden">
                  <Photo
                    src={area.image}
                    alt={area.imageAlt}
                    width={1536}
                    height={1024}
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className={`w-full object-cover transition-transform duration-700 group-hover:scale-[1.04] ${
                      index === 0 ? "h-56 sm:h-72" : "h-44"
                    }`}
                  />
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <span className="text-[0.6875rem] font-semibold uppercase tracking-[0.16em] text-gold-600">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <h3 className="mt-3 font-display text-xl leading-tight text-blue-800">
                    {area.title}
                  </h3>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-ink/65">
                    {area.lede}
                  </p>
                  <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-blue-700">
                    Learn more
                    <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Footprint */}
      <section className="bg-blue-900 py-16 text-white sm:py-20">
        <div className="shell">
          <div className="reveal max-w-2xl">
            <p className="mb-4 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-gold-300">
              <span
                aria-hidden="true"
                className="block h-[2px] w-6 bg-gold-400"
              />
              Our footprint
            </p>
            <h2 className="font-display text-[1.7rem] leading-[1.14] sm:text-[2.1rem]">
              A small organisation with a long memory in the districts it
              serves.
            </h2>
          </div>
          <dl className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {footprint.map((stat) => (
              <div
                key={stat.label}
                className="reveal border-t border-white/15 pt-6"
              >
                <dt className="font-display text-[2.5rem] leading-none text-gold-300">
                  <CountUp value={Number(stat.value)} />
                  <span className="text-gold-400">{stat.suffix}</span>
                </dt>
                <dd className="mt-3">
                  <span className="block text-sm font-semibold">
                    {stat.label}
                  </span>
                  <span className="mt-1 block text-xs leading-relaxed text-white/55">
                    {stat.detail}
                  </span>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* Where we work */}
      <section className="section">
        <div className="shell grid gap-12 lg:grid-cols-[1fr_0.95fr] lg:items-center lg:gap-16">
          <div className="reveal-left overflow-hidden rounded-xl2 shadow-card">
            <Photo
              src="/images/about-field.webp"
              alt="Field officers walking and talking with community members, including a young man in a wheelchair, on a path in Daboya"
              width={1536}
              height={1024}
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="h-[280px] w-full object-cover sm:h-[400px]"
            />
          </div>
          <div className="reveal-right">
            <p className="eyebrow">Where we work</p>
            <h2 className="h2 mt-5 text-blue-900">
              Three offices, from the capital to the Savannah.
            </h2>
            <ul className="mt-8 space-y-6">
              {officeLocations.map((office) => (
                <li
                  key={office.city}
                  className="border-l-2 border-gold-400 pl-5"
                >
                  <h3 className="h3 text-blue-800">
                    {office.city}
                    <span className="ml-2 text-xs font-medium uppercase tracking-[0.12em] text-ink/40">
                      {office.region}
                    </span>
                  </h3>
                  <p className="mt-1 text-xs font-semibold uppercase tracking-[0.1em] text-gold-600">
                    {office.role}
                  </p>
                  <p className="mt-2 text-sm leading-relaxed text-ink/65">
                    {office.body}
                  </p>
                </li>
              ))}
            </ul>
            <Link href="/contact" className="link-underline mt-8">
              Contact the right office <ArrowRight />
            </Link>
          </div>
        </div>
      </section>

      {/* Latest news */}
      <section className="section bg-blue-50">
        <div className="shell">
          <div className="reveal flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="eyebrow">Latest</p>
              <h2 className="h2 mt-5 text-blue-900">News from the field</h2>
            </div>
            <Link href="/news" className="link-underline shrink-0">
              All news &amp; stories <ArrowRight />
            </Link>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {featuredNews.map((item) => (
              <NewsCard key={item.slug} item={item} />
            ))}
          </div>
        </div>
      </section>

      {/* Partnership */}
      <section className="section">
        <div className="shell">
          <div className="reveal flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="eyebrow">Partnership</p>
              <h2 className="h2 mt-5 max-w-[26ch] text-blue-900">
                Nothing here was built alone.
              </h2>
            </div>
            <Link href="/about#partnership" className="link-underline shrink-0">
              How we partner <ArrowRight />
            </Link>
          </div>
          <p className="reveal lede mt-6 max-w-3xl">
            Better Dream Foundation Ghana delivers through strategic
            partnerships — with district assemblies, schools and clinics,
            traditional authorities, donors, fellow NGOs and diaspora groups who
            share the districts and the goals.
          </p>

          <div className="mt-12">
            <PartnerMarquee />
          </div>

          <div className="reveal mt-10 grid gap-8 md:grid-cols-3">
            {partnershipRoutes.map((route, index) => (
              <div key={route.title} className="border-t border-line pt-5">
                <span className="text-[0.6875rem] font-semibold uppercase tracking-[0.16em] text-gold-600">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-2 font-display text-lg leading-snug text-blue-800">
                  {route.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-ink/65">
                  {route.body}
                </p>
              </div>
            ))}
          </div>

          <div className="reveal mt-10 flex flex-col gap-4 rounded-xl2 border border-gold-200 bg-gold-50 p-7 sm:flex-row sm:items-center sm:justify-between">
            <p className="max-w-2xl text-sm leading-relaxed text-ink/75">
              <strong className="font-semibold text-blue-900">
                Partner logos:
              </strong>{" "}
              the marks above are defaults. Send each partner&rsquo;s registered
              name and logo file (SVG or transparent PNG) to{" "}
              <a
                href={`mailto:${site.email}`}
                className="link-underline break-all"
              >
                {site.email}
              </a>{" "}
              and they will be displayed exactly as supplied.
            </p>
            <Link href="/contact" className="btn-primary shrink-0">
              Start a conversation <ArrowRight />
            </Link>
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
