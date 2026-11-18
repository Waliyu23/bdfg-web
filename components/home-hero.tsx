import ArrowRight from "@/components/arrow-right";
import Link from "@/components/link";
import Photo from "@/components/photo";

export default function HomeHero() {
  return (
    <section className="relative flex min-h-[620px] overflow-hidden bg-blue-950 text-white sm:min-h-[680px]">
      <div className="absolute inset-0" aria-hidden="true">
        <Photo
          src="/images/hero-community.webp"
          alt="Community members working together in Ghana"
          width={1536}
          height={1024}
          priority
          sizes="100vw"
          className="h-full w-full object-cover"
        />
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
      <div className="kente absolute inset-x-0 bottom-0" />
    </section>
  );
}
