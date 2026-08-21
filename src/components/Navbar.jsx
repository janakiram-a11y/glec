import { useState, useEffect } from 'react';
import { withAlpha } from '../theme';


function useIsDesktop() {
  const [isDesktop, setIsDesktop] = useState(() => typeof window !== 'undefined' && window.innerWidth >= 1024);
  useEffect(() => {
    const handler = () => setIsDesktop(window.innerWidth >= 1024);
    window.addEventListener('resize', handler, { passive: true });
    return () => window.removeEventListener('resize', handler);
  }, []);
  return isDesktop;
}

function useScrolled(threshold = 10) {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > threshold);
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, [threshold]);
  return scrolled;
}

export default function Navbar({ college }) {
  const isDesktop = useIsDesktop();
  const scrolled = useScrolled();

  return (
    <nav
        className="w-full bg-white/[0.95] backdrop-blur-md sticky top-0 z-50"
      style={{
        padding: isDesktop ? (scrolled ? '8px 0' : '12px 0') : '0',
        borderBottom: `1px solid ${withAlpha(college.primaryColor, 0.08)}`,
        transition: 'padding 0.3s ease',
      }}
    >
      <div
        className="max-w-[1320px] mx-auto px-4 md:px-8 lg:px-[60px] flex justify-between items-center"
        style={{
          height: isDesktop ? (scrolled ? '60px' : '88px') : '56px',
          transition: 'height 0.3s ease',
        }}
      >
        {/* Left — college logo */}
        <div className="flex items-center">
          <img
            src={college.logo}
            alt={`${college.shortName} Logo`}
            className="flex-shrink-0 object-contain object-left"
            style={{
              width: isDesktop ? '300px' : '180px',
              height: isDesktop ? (scrolled ? '50px' : '80px') : '40px',
              transition: 'height 0.3s ease',
            }}
          />
        </div>

        {/* Right — affiliations / accreditation logos */}
        {college.accreditationLogo && (
          <div className="hidden md:flex items-center">
            <img
              src={college.accreditationLogo}
              alt="Affiliations"
              className="object-contain flex-shrink-0"
              style={{
                height: isDesktop ? (scrolled ? '40px' : '64px') : '40px',
                maxWidth: '360px',
                transition: 'height 0.3s ease',
              }}
            />
          </div>
        )}
      </div>
    </nav>
  );
}
