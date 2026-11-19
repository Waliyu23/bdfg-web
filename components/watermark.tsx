import { site } from "@/lib/site";

/** Faint repeating crest + wordmark behind the whole page. */
export default function Watermark() {
  return (
    <svg
      aria-hidden="true"
      focusable="false"
      className="pointer-events-none fixed inset-0 z-[5] h-full w-full select-none"
      width="100%"
      height="100%"
    >
      <defs>
        <pattern
          id="bdfg-watermark"
          width="470"
          height="280"
          patternUnits="userSpaceOnUse"
          patternTransform="rotate(-24)"
        >
          <g transform="translate(18 34)">
            <image
              href={site.logoSmall}
              x="0"
              y="0"
              width="52"
              height="52"
              preserveAspectRatio="xMidYMid meet"
            />
            <text
              x="66"
              y="24"
              fill="#12409B"
              fontSize="15"
              fontWeight="700"
              letterSpacing="2.4"
              fontFamily="'General Sans', system-ui, sans-serif"
            >
              BETTER DREAM FOUNDATION
            </text>
            <text
              x="66"
              y="44"
              fill="#12409B"
              fontSize="12"
              fontWeight="600"
              letterSpacing="6"
              fontFamily="'General Sans', system-ui, sans-serif"
            >
              GHANA · SINCE {site.founded}
            </text>
          </g>
        </pattern>
      </defs>
      <rect
        width="100%"
        height="100%"
        fill="url(#bdfg-watermark)"
        opacity="0.05"
      />
    </svg>
  );
}
