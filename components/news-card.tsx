import Photo from "@/components/photo";
import Link from "@/components/link";

import type { NewsItem } from "@/lib/news";

export default function NewsCard({ item }: { item: NewsItem }) {
  return (
    <Link
      href={`/news/${item.slug}`}
      className="reveal group flex flex-col overflow-hidden rounded-xl2 border border-line bg-white shadow-card transition-shadow hover:shadow-lift"
    >
      <Photo
        src={item.image}
        alt={item.imageAlt}
        width={1536}
        height={1024}
        sizes="(max-width: 768px) 100vw, 33vw"
        className="h-44 w-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
      />
      <div className="flex flex-1 flex-col p-6">
        <div className="flex items-center gap-3 text-[0.6875rem] font-semibold uppercase tracking-[0.14em] text-gold-600">
          <span>{item.category}</span>
          <span aria-hidden="true" className="h-1 w-1 rounded-full bg-line" />
          <time dateTime={item.date} className="text-ink/45">
            {item.dateDisplay}
          </time>
        </div>
        <h3 className="mt-3 font-display text-[1.1rem] leading-snug text-blue-800">
          {item.title}
        </h3>
        <p className="mt-3 flex-1 text-sm leading-relaxed text-ink/65">
          {item.summary}
        </p>
        <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-blue-700">
          Read the story
          <svg
            viewBox="0 0 24 24"
            className="h-4 w-4 transition-transform group-hover:translate-x-1"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            aria-hidden="true"
          >
            <path
              d="M5 12h13M12 5.5l6.5 6.5L12 18.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </span>
      </div>
    </Link>
  );
}
