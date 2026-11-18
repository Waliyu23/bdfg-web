const partnerLogos = Array.from({ length: 7 }, (_, index) => ({
  src: `/images/partners/${index + 1}.jpeg`,
  name: `Partner logo ${index + 1}`,
}));

/** Continuously scrolling cards for the supplied partner logos. */
export default function PartnerMarquee() {
  return (
    <div className="marquee" aria-label="Partner organisation logos">
      <ul className="marquee-track py-1">
        {[...partnerLogos, ...partnerLogos].map((partner, index) => (
          <li
            key={`${partner.src}-${index}`}
            aria-hidden={index >= partnerLogos.length ? true : undefined}
            className="w-[210px] shrink-0 sm:w-[240px]"
          >
            <div className="flex h-36 items-center justify-center rounded-xl2 border border-line bg-white p-5 shadow-card sm:h-40 sm:p-6">
              <img
                src={partner.src}
                alt={index >= partnerLogos.length ? "" : partner.name}
                loading="lazy"
                decoding="async"
                className="max-h-full max-w-full object-contain"
              />
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
