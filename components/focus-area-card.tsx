import Image from "next/image";
import Link from "next/link";

import type { FocusArea } from "@/lib/focus-areas";

export default function FocusAreaCard({ area }: { area: FocusArea }) {
  return (
    <Link
      href={`/focus-areas/${area.slug}`}
      className="reveal group flex flex-col overflow-hidden rounded-xl2 border border-line bg-white shadow-card transition-shadow hover:shadow-lift"
    >
      <Image
        src={area.image}
        alt={area.imageAlt}
        width={1600}
        height={1200}
        sizes="(max-width: 768px) 100vw, 25vw"
        className="h-36 w-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
      />
      <div className="flex flex-1 flex-col p-5">
        <h3 className="font-display text-base leading-snug text-blue-800">{area.title}</h3>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-ink/60">{area.lede}</p>
      </div>
    </Link>
  );
}
