import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const SLIDE_INTERVAL_MS = 5000;

export default function Hero({ college }) {
  const isExternal = college.heroCTAHref?.startsWith('http');
  const slides = college.heroBgImages?.length ? college.heroBgImages : [college.heroBgImage].filter(Boolean);
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    if (slides.length < 2) return;
    const id = setInterval(() => {
      setActiveSlide((i) => (i + 1) % slides.length);
    }, SLIDE_INTERVAL_MS);
    return () => clearInterval(id);
  }, [slides.length]);

  return (
    <section className="relative w-full h-[480px] md:h-[550px] lg:h-[600px] flex items-center overflow-hidden">
      <div
        className="absolute inset-0 flex transition-transform duration-700 ease-in-out"
        style={{ transform: `translateX(-${activeSlide * 100}%)` }}
      >
        {slides.map((src) => (
          <img
            key={src}
            src={src}
            alt=""
            className="w-full h-full object-cover flex-shrink-0"
          />
        ))}
      </div>
      <div className="absolute inset-0" style={{ backgroundColor: 'rgba(91,16,39,0.65)' }} />
      <div className="absolute inset-0 bg-gradient-to-r from-[#5B1027] via-[#5B1027]/70 to-transparent" />

      {slides.length > 1 && (
        <div className="absolute bottom-5 left-1/2 -translate-x-1/2 z-10 flex items-center gap-2">
          {slides.map((src, i) => (
            <button
              key={src}
              type="button"
              aria-label={`Show slide ${i + 1}`}
              onClick={() => setActiveSlide(i)}
              className="h-2 rounded-full transition-all duration-300"
              style={{
                width: i === activeSlide ? 22 : 8,
                backgroundColor: i === activeSlide ? '#ffffff' : 'rgba(255,255,255,0.45)',
              }}
            />
          ))}
        </div>
      )}

      <div className="relative z-10 w-full px-6 md:px-[60px] lg:px-[120px] flex justify-between items-center">
        <div className="flex flex-col gap-[18px] max-w-[686px]">
          <h1
            className="font-hind font-semibold text-[32px] leading-[40px] sm:text-[36px] sm:leading-[48px] lg:text-[48px] lg:leading-[56px] text-white"
            style={{ filter: 'drop-shadow(0px 3px 3px rgba(0,0,0,0.12))' }}
          >
            {college.heroHeading}
          </h1>
          <p
            className="font-hind font-normal text-[18px] leading-7 text-white/90"
            style={{ filter: 'drop-shadow(0px 1px 2px rgba(0,0,0,0.15))' }}
          >
            {college.heroSubtext}
          </p>
          <div className="flex flex-wrap items-center gap-3 md:gap-4">
            {isExternal ? (
              <a
                href={college.heroCTAHref}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#C32033] text-white font-dm-sans font-semibold text-[16px] leading-6 px-8 py-[14px] rounded hover:bg-[#a81b2a] transition-colors inline-block"
                style={{ boxShadow: '0px 10px 15px -3px rgba(0,0,0,0.1), 0px 4px 6px -4px rgba(0,0,0,0.1)' }}
              >
                {college.heroCTALabel}
              </a>
            ) : (
              <Link
                to={college.heroCTAHref}
                className="bg-[#C32033] text-white font-dm-sans font-semibold text-[16px] leading-6 px-8 py-[14px] rounded hover:bg-[#a81b2a] transition-colors inline-block"
                style={{ boxShadow: '0px 10px 15px -3px rgba(0,0,0,0.1), 0px 4px 6px -4px rgba(0,0,0,0.1)' }}
              >
                {college.heroCTALabel}
              </Link>
            )}
            <Link
              to="/admissions/programs"
              className="bg-white text-[#5B1027] font-dm-sans font-semibold text-[16px] leading-6 px-8 py-[14px] rounded hover:bg-gray-50 transition-colors inline-block"
              style={{ boxShadow: '0px 10px 15px -3px rgba(0,0,0,0.1), 0px 4px 6px -4px rgba(0,0,0,0.1)' }}
            >
              Explore Programs
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
