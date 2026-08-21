import { withAlpha } from '../theme';

export default function NewsEvents({ college }) {
  const items = college.newsItems || [];

  return (
    <section className="w-full section-pad" style={{ backgroundColor: '#FAFAFA' }}>
      <div className="max-w-[1320px] mx-auto px-5 md:px-[60px]">
        {/* Section header */}
        <div className="flex items-center gap-4 mb-8">
          <div>
            <p
              className="font-dm-sans font-bold text-[11px] uppercase tracking-[2px] mb-1"
              style={{ color: college.accentColor }}
            >
              Latest Updates
            </p>
            <h2
              className="font-hind font-semibold text-[28px] leading-9 lg:text-[36px] lg:leading-[44px]"
              style={{ color: college.primaryColor }}
            >
              News &amp; Events
            </h2>
          </div>
        </div>

        {/* Ticker container */}
        <div
          className="rounded-xl overflow-hidden"
          style={{
            border: `1.5px solid ${withAlpha(college.primaryColor, 0.12)}`,
            boxShadow: '0 2px 12px rgba(91,16,39,0.06)',
          }}
        >
          {items.map((item, i) => (
            <div
              key={i}
              className="flex items-start gap-4 px-6 py-4 border-b last:border-b-0 transition-colors duration-150"
              style={{
                borderColor: withAlpha(college.primaryColor, 0.08),
                backgroundColor: i % 2 === 0 ? '#FFFFFF' : '#FDFCFB',
              }}
              onMouseEnter={e => e.currentTarget.style.backgroundColor = withAlpha(college.primaryColor, 0.035)}
              onMouseLeave={e => e.currentTarget.style.backgroundColor = i % 2 === 0 ? '#FFFFFF' : '#FDFCFB'}
            >
              {/* Bullet */}
              <span
                className="w-2 h-2 rounded-full flex-shrink-0 mt-[7px]"
                style={{ backgroundColor: college.accentColor }}
              />

              {/* Text */}
              <p className="font-hind text-[14px] leading-[22px] text-[#333333]">
                {item.text}
                {item.linkText && item.href && (
                  <a
                    href={item.href}
                    target={item.href.startsWith('http') ? '_blank' : undefined}
                    rel="noopener noreferrer"
                    className="font-semibold underline underline-offset-2 ml-0.5 transition-colors"
                    style={{ color: college.accentColor }}
                    onMouseEnter={e => e.currentTarget.style.color = college.primaryColor}
                    onMouseLeave={e => e.currentTarget.style.color = college.accentColor}
                  >
                    {item.linkText}
                  </a>
                )}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
