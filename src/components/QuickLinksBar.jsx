import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { withAlpha } from '../theme';

const DIVIDER_ALPHA   = 0.15;
const HOVER_ALPHA     = 0.08;
const LABEL_FONT_SIZE = '11px';
const LABEL_TRACKING  = '1.6px';

const icons = {
  Alumni: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} className="w-7 h-7">
      <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
  ),
  'Mandatory Disclosures': (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} className="w-7 h-7">
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
    </svg>
  ),
  Events: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} className="w-7 h-7">
      <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
    </svg>
  ),
  Infrastructure: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} className="w-7 h-7">
      <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
    </svg>
  ),
};

const DefaultIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} className="w-7 h-7">
    <path strokeLinecap="round" strokeLinejoin="round" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M14.828 14.828a4 4 0 015.656 0l-4 4a4 4 0 01-5.656-5.656l1.1-1.1" />
  </svg>
);

const Chevron = ({ dir }) => (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24" aria-hidden="true">
    <path strokeLinecap="round" strokeLinejoin="round" d={dir === 'left' ? 'M15 19l-7-7 7-7' : 'M9 5l7 7-7 7'} />
  </svg>
);

export default function QuickLinksBar({ college }) {
  const scrollRef = useRef(null);
  const scroll = (dir) => scrollRef.current?.scrollBy({ left: dir * 220, behavior: 'smooth' });

  return (
    <div
      className="w-full flex items-stretch overflow-hidden"
      style={{
        backgroundColor: college.softAccent,
        borderBottom: `1px solid ${withAlpha(college.primaryColor, DIVIDER_ALPHA)}`,
      }}
    >
      {/* Arrows — mobile/tablet only */}
      <button
        onClick={() => scroll(-1)}
        className="lg:hidden flex-shrink-0 flex items-center justify-center w-10 h-full transition-colors"
        style={{ color: college.primaryColor }}
        aria-label="Scroll left"
        onMouseEnter={e => e.currentTarget.style.backgroundColor = withAlpha(college.primaryColor, HOVER_ALPHA)}
        onMouseLeave={e => e.currentTarget.style.backgroundColor = 'transparent'}
      >
        <Chevron dir="left" />
      </button>

      {/* Link strip */}
      <div
        ref={scrollRef}
        className="flex-1 flex items-stretch overflow-x-auto"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {college.quickLinks.map((item, i) => (
          <Link
            key={item.label}
            to={item.href}
            className="flex flex-col items-center justify-center gap-2 py-5 px-2 font-dm-sans font-bold uppercase transition-colors duration-200"
            style={{
              flex: '1 0 120px',
              fontSize: LABEL_FONT_SIZE,
              letterSpacing: LABEL_TRACKING,
              color: college.primaryColor,
              borderRight: i < college.quickLinks.length - 1
                ? `1px solid ${withAlpha(college.primaryColor, DIVIDER_ALPHA)}`
                : 'none',
            }}
            onMouseEnter={e => e.currentTarget.style.backgroundColor = withAlpha(college.primaryColor, HOVER_ALPHA)}
            onMouseLeave={e => e.currentTarget.style.backgroundColor = 'transparent'}
          >
            <span style={{ color: college.primaryColor }}>
              {icons[item.label] || <DefaultIcon />}
            </span>
            <span className="text-center leading-tight">{item.label}</span>
          </Link>
        ))}
      </div>

      <button
        onClick={() => scroll(1)}
        className="lg:hidden flex-shrink-0 flex items-center justify-center w-10 h-full transition-colors"
        style={{ color: college.primaryColor }}
        aria-label="Scroll right"
        onMouseEnter={e => e.currentTarget.style.backgroundColor = withAlpha(college.primaryColor, HOVER_ALPHA)}
        onMouseLeave={e => e.currentTarget.style.backgroundColor = 'transparent'}
      >
        <Chevron dir="right" />
      </button>
    </div>
  );
}
