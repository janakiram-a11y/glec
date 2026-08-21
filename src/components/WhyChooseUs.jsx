import { Link } from 'react-router-dom';

const PhoneIcon = () => (
  <svg viewBox="0 0 20 20" fill="none" className="w-5 h-5">
    <path d="M2 3a1 1 0 011-1h2a1 1 0 011 .836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74A1 1 0 0118 15v2a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"
      stroke="#5B1027" strokeWidth="1.5" />
  </svg>
)
const ShieldIcon = () => (
  <svg viewBox="0 0 20 20" fill="none" className="w-5 h-5">
    <path d="M10 2l7 3v5c0 4-3.5 7-7 8-3.5-1-7-4-7-8V5l7-3z"
      stroke="#5B1027" strokeWidth="1.5" strokeLinejoin="round" />
    <path d="M7 10l2 2 4-4" stroke="#5B1027" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)
const CapIcon = () => (
  <svg viewBox="0 0 20 20" fill="none" className="w-5 h-5">
    <path d="M10 3l8 4-8 4-8-4 8-4z" stroke="#5B1027" strokeWidth="1.5" strokeLinejoin="round" />
    <path d="M6 9v3.5C7.333 13.833 8.667 14.5 10 14.5S12.667 13.833 14 12.5V9"
      stroke="#5B1027" strokeWidth="1.5" strokeLinecap="round" />
  </svg>
)
const BuildingIcon = () => (
  <svg viewBox="0 0 20 20" fill="none" className="w-5 h-5">
    <rect x="3" y="3" width="14" height="15" rx="1" stroke="#5B1027" strokeWidth="1.5" />
    <path d="M8 7h1M8 11h1M11 7h1M11 11h1M8 15h4" stroke="#5B1027" strokeWidth="1.5" strokeLinecap="round" />
  </svg>
)

const featureIcons = [PhoneIcon, ShieldIcon, CapIcon, BuildingIcon]

export default function WhyChooseUs({ college }) {
  return (
    <section className="w-full bg-white section-pad">
      <div className="flex flex-col gap-[30px] items-start lg:flex-row">
        <div className="flex-1 flex flex-col gap-3 lg:pr-8">
          <h2 className="font-hind font-semibold text-[28px] leading-9 lg:text-[40px] lg:leading-[48px] text-[#111827]">
            {college.aboutHeading}
          </h2>
          <p className="font-hind font-normal text-[16px] leading-6 text-[#666666]">
            {college.aboutP1}
          </p>
          <p className="font-hind font-normal text-[16px] leading-6 text-[#666666]">
            {college.aboutP2}
          </p>
          <p className="font-hind font-normal text-[16px] leading-6 text-[#666666]">
            {college.aboutP3}
          </p>
          <div className="mt-4">
            <Link
              to="/about"
              className="inline-flex items-center gap-2 font-dm-sans font-semibold text-[15px] transition-colors"
              style={{ color: '#5B1027' }}
              onMouseEnter={e => e.currentTarget.style.color = '#C32033'}
              onMouseLeave={e => e.currentTarget.style.color = '#5B1027'}
            >
              Read More
              <svg viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
                <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </Link>
          </div>
        </div>

        <div className="flex-1 flex justify-end relative lg:min-h-[480px]">
          <div className="relative w-full lg:w-[585px]">
            <img
              src={college.aboutImage}
              alt={`${college.shortName} Campus`}
              className="w-full h-auto"
            />
            <div
              className="hidden lg:block absolute -left-6 -bottom-6 w-[240px] bg-white rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-1.5"
              style={{
                boxShadow: '0 4px 6px -1px rgba(91,16,39,0.06), 0 8px 32px -4px rgba(91,16,39,0.14)',
                border: '1px solid rgba(91,16,39,0.08)',
              }}
            >
              {/* Gradient accent stripe */}
              <div
                className="h-[3px] w-full"
                style={{ background: `linear-gradient(90deg, ${college.primaryColor}, ${college.accentColor})` }}
              />
              <div className="px-6 py-5">
                {/* Stat number */}
                <span
                  className="font-hind font-bold text-[52px] leading-[1] block"
                  style={{ color: college.primaryColor }}
                >
                  {college.aboutYears}
                </span>
                {/* Label */}
                <span className="font-dm-sans font-medium text-[13px] leading-[18px] text-[#555555] mt-1.5 block">
                  {college.aboutYearsLabel}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
