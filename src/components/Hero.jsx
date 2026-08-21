import { Link } from 'react-router-dom';

export default function Hero({ college }) {
  const isExternal = college.heroCTAHref?.startsWith('http');

  return (
    <section className="relative w-full h-[480px] md:h-[550px] lg:h-[600px] flex items-center overflow-hidden">
      {college.heroBgImage && (
        <img
          src={college.heroBgImage}
          alt=""
          className="absolute inset-0 w-full h-full object-cover"
        />
      )}
      <div className="absolute inset-0" style={{ backgroundColor: 'rgba(91,16,39,0.65)' }} />
      <div className="absolute inset-0 bg-gradient-to-r from-[#5B1027] via-[#5B1027]/70 to-transparent" />

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
