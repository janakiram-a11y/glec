import { Link } from 'react-router-dom';
import { withAlpha } from '../theme';

const DIVIDER_ALPHA   = 0.15;   // matches QuickLinksBar divider
const HOVER_ALPHA     = 0.08;   // matches QuickLinksBar hover
const LABEL_FONT_SIZE = '11px'; // matches QuickLinksBar label
const LABEL_TRACKING  = '1.6px';

const links = [
  {
    label: 'Admissions',
    href: '/admissions',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} className="w-7 h-7">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 14l9-5-9-5-9 5 9 5z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998a12.078 12.078 0 01.665-6.479L12 14z" />
      </svg>
    ),
  },
  {
    label: 'Placements',
    href: '/placements',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} className="w-7 h-7">
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    label: 'Research',
    href: '/research',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} className="w-7 h-7">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
  },
  {
    label: 'Events',
    href: '/examinations/notifications',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} className="w-7 h-7">
        <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    label: 'Infrastructure',
    href: '/about/infrastructure',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} className="w-7 h-7">
        <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
  },
  {
    label: 'Contact Us',
    href: '/contact',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} className="w-7 h-7">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
  },
];

export default function SecondaryLinks({ college }) {
  return (
    <div
      className="w-full"
      style={{
        backgroundColor: college.softAccent,
        borderBottom: `1px solid ${withAlpha(college.primaryColor, DIVIDER_ALPHA)}`,
      }}
    >
      <div className="max-w-[1320px] mx-auto grid grid-cols-3 sm:grid-cols-6">
        {links.map((link, i) => (
          <Link
            key={link.label}
            to={link.href}
            className="flex flex-col items-center justify-center gap-2 py-5 px-2 transition-colors duration-200"
            style={{
              color: college.primaryColor,
              borderRight: i < links.length - 1
                ? `1px solid ${withAlpha(college.primaryColor, DIVIDER_ALPHA)}`
                : 'none',
            }}
            onMouseEnter={e => e.currentTarget.style.backgroundColor = withAlpha(college.primaryColor, HOVER_ALPHA)}
            onMouseLeave={e => e.currentTarget.style.backgroundColor = 'transparent'}
          >
            <span style={{ color: college.primaryColor }}>{link.icon}</span>
            <span
              className="font-dm-sans font-bold uppercase text-center leading-tight"
              style={{ fontSize: LABEL_FONT_SIZE, letterSpacing: LABEL_TRACKING }}
            >
              {link.label}
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
}
