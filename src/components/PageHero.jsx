import { Link } from 'react-router-dom';

export default function PageHero({ college, title, subtitle, breadcrumb = [], bgImage }) {
  const isLight = !bgImage;

  return (
    <section className="relative w-full overflow-hidden" style={{ minHeight: '260px' }}>
      {bgImage && (
        <img
          src={bgImage}
          alt=""
          className="absolute inset-0 w-full h-full object-cover"
        />
      )}

      {/* Background */}
      <div
        className="absolute inset-0"
        style={{
          background: bgImage
            ? `linear-gradient(to right, ${college.primaryColor}F0, ${college.primaryColor}CC)`
            : 'linear-gradient(135deg, #FAF4EE 0%, #F3E8D4 100%)',
        }}
      />

      {/* Subtle diagonal texture */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `repeating-linear-gradient(45deg, ${isLight ? '#5B1027' : '#fff'} 0, ${isLight ? '#5B1027' : '#fff'} 1px, transparent 0, transparent 50%)`,
          backgroundSize: '20px 20px',
          opacity: isLight ? 0.025 : 0.04,
        }}
      />

      {/* Bottom separator for light variant */}
      {isLight && (
        <div className="absolute bottom-0 inset-x-0 h-px" style={{ backgroundColor: 'rgba(91,16,39,0.10)' }} />
      )}

      <div className="relative z-10 w-full px-5 py-10 md:px-[60px] md:py-[60px] lg:px-[120px] lg:py-[80px] flex flex-col gap-4">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 flex-wrap">
          <Link
            to="/"
            className="font-dm-sans text-[13px] leading-4 transition-colors"
            style={{ color: isLight ? 'rgba(91,16,39,0.50)' : `${college.accentColor}CC` }}
            onMouseEnter={(e) => (e.currentTarget.style.color = isLight ? college.primaryColor : '#F3DAB2')}
            onMouseLeave={(e) => (e.currentTarget.style.color = isLight ? 'rgba(91,16,39,0.50)' : `${college.accentColor}CC`)}
          >
            Home
          </Link>
          {breadcrumb.map((crumb, i) => (
            <span key={i} className="flex items-center gap-2">
              <svg
                className="w-3 h-3"
                style={{ opacity: isLight ? 0.35 : 0.4 }}
                viewBox="0 0 12 12"
                fill="none"
              >
                <path
                  d="M4 2l4 4-4 4"
                  stroke={isLight ? '#5B1027' : 'white'}
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <span
                className="font-dm-sans text-[13px] leading-4"
                style={{
                  color: i === breadcrumb.length - 1
                    ? (isLight ? college.primaryColor : 'rgba(255,255,255,0.85)')
                    : (isLight ? 'rgba(91,16,39,0.55)' : 'rgba(255,255,255,0.55)'),
                }}
              >
                {crumb}
              </span>
            </span>
          ))}
        </nav>

        {/* Title */}
        <h1
          className="font-hind font-bold text-[42px] leading-[52px] max-w-[700px]"
          style={{
            color: isLight ? college.primaryColor : 'white',
            filter: bgImage ? 'drop-shadow(0px 2px 4px rgba(0,0,0,0.15))' : 'none',
          }}
        >
          {title}
        </h1>

        {/* Subtitle */}
        {subtitle && (
          <p
            className="font-dm-sans font-normal text-[16px] leading-[26px] max-w-[580px]"
            style={{ color: isLight ? 'rgba(91,16,39,0.65)' : 'rgba(255,255,255,0.80)' }}
          >
            {subtitle}
          </p>
        )}

        {/* Accent line */}
        <div className="w-16 h-1 rounded-full mt-1" style={{ backgroundColor: college.accentColor }} />
      </div>
    </section>
  );
}
