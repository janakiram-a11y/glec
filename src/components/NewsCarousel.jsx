import { useRef } from 'react';

export default function NewsCarousel({ college }) {
  const trackRef = useRef(null);

  function scrollByCards(dir) {
    const track = trackRef.current;
    if (!track) return;
    const card = track.querySelector('[data-card]');
    const step = card ? card.offsetWidth + 16 : 300;
    track.scrollBy({ left: dir * step * 2, behavior: 'smooth' });
  }

  return (
    <section className="w-full bg-white section-pad">
      <div className="flex items-end justify-between gap-6 mb-8">
        <div className="flex flex-col gap-2">
          <span
            className="font-dm-sans font-semibold text-[12px] uppercase tracking-[2px]"
            style={{ color: college.accentColor }}
          >
            {college.newsCarouselLabel}
          </span>
          <h2
            className="font-hind font-semibold text-[26px] lg:text-[34px] leading-tight"
            style={{ color: college.primaryColor }}
          >
            {college.newsCarouselHeading}
          </h2>
        </div>
        <div className="hidden sm:flex items-center gap-2 flex-shrink-0">
          <button
            type="button"
            aria-label="Scroll left"
            onClick={() => scrollByCards(-1)}
            className="w-10 h-10 rounded-full flex items-center justify-center border transition-colors"
            style={{ borderColor: `${college.primaryColor}30`, color: college.primaryColor }}
          >
            <svg viewBox="0 0 20 20" fill="none" className="w-4 h-4" stroke="currentColor" strokeWidth="1.8">
              <path d="M12 15l-5-5 5-5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
          <button
            type="button"
            aria-label="Scroll right"
            onClick={() => scrollByCards(1)}
            className="w-10 h-10 rounded-full flex items-center justify-center border transition-colors"
            style={{ borderColor: `${college.primaryColor}30`, color: college.primaryColor }}
          >
            <svg viewBox="0 0 20 20" fill="none" className="w-4 h-4" stroke="currentColor" strokeWidth="1.8">
              <path d="M8 15l5-5-5-5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </div>
      </div>

      <div
        ref={trackRef}
        className="flex gap-4 overflow-x-auto pb-2"
        style={{ scrollSnapType: 'x mandatory', scrollbarWidth: 'thin' }}
      >
        {college.newsCarousel.map((item, i) => (
          <div
            key={i}
            data-card
            className="flex-shrink-0 rounded-2xl overflow-hidden group"
            style={{
              width: 240,
              scrollSnapAlign: 'start',
              border: `1px solid ${college.primaryColor}12`,
              boxShadow: '0 1px 4px rgba(0,0,0,0.05)',
            }}
          >
            <div className="w-full aspect-[4/3]" style={{ backgroundColor: `${college.primaryColor}08` }}>
              <img
                src={item.src}
                alt={item.caption}
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                onError={(e) => { e.currentTarget.closest('[data-card]').style.display = 'none'; }}
              />
            </div>
            <p
              className="font-dm-sans text-[12.5px] leading-snug px-3 py-2.5"
              style={{ color: college.primaryColor }}
            >
              {item.caption}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
