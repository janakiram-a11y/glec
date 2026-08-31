import { Link } from 'react-router-dom';

const ChevronRight = () => (
  <svg viewBox="0 0 16 16" fill="none" className="w-4 h-4">
    <path d="M6 4l4 4-4 4" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

const FEATURED_PROGRAM_HREFS = ['/departments/cse', '/departments/cse-aiml']

export default function AcademicPrograms({ college }) {
  const featured = college.academicPrograms.filter((p) => FEATURED_PROGRAM_HREFS.includes(p.href))

  return (
    <section className="w-full bg-[#5B1027] section-pad">
      <div className="flex flex-col lg:flex-row items-start gap-10 lg:gap-12">

        {/* Left: label + heading + desc + CTA */}
        <div className="flex flex-col gap-6 w-full lg:w-[320px] flex-shrink-0">
          <p className="font-hind font-bold text-[14px] leading-5 uppercase tracking-[1.4px] text-[#F3DAB2]">
            {college.academicProgramsLabel}
          </p>
          <h2 className="font-hind font-semibold text-[28px] leading-9 lg:text-[40px] lg:leading-[48px] text-white">
            {college.academicProgramsHeading}
          </h2>
          <p className="font-hind font-normal text-[16px] leading-6 text-[#E1D3D9]">
            {college.academicProgramsDesc}
          </p>
          <Link
            to="/admissions/programs"
            className="w-fit bg-[#C32033] text-white font-dm-sans font-semibold text-[16px] leading-[22px] px-7 py-4 rounded hover:bg-[#a81b2a] transition-colors inline-block text-center"
            style={{ boxShadow: '0px 10px 15px -3px rgba(0,0,0,0.1), 0px 4px 6px -4px rgba(0,0,0,0.1)' }}
          >
            View all programs
          </Link>
        </div>

        {/* Right: cards */}
        <div className="flex-1 min-w-0 grid grid-cols-1 sm:grid-cols-2 gap-6 w-full">
          {featured.map(({ count, title, desc, href }) => (
            <div
              key={title}
              className="bg-white/10 border border-white/20 rounded-3xl p-8 flex flex-col justify-between gap-4"
              style={{ minHeight: '320px' }}
            >
              <div className="flex flex-col gap-2 flex-1">
                <span className="font-hind font-bold text-[34px] leading-[40px] text-[#F3DAB2] block">{count}</span>
                <span className="font-hind font-bold text-[22px] leading-[30px] text-white block">{title}</span>
                <p className="font-hind font-normal text-[15px] leading-[24px] text-[#E1D3D9] mt-2">{desc}</p>
              </div>
              <Link to={href} className="flex items-center justify-end gap-1.5">
                <span className="font-dm-sans font-semibold text-[14px] leading-5 text-white">Learn More</span>
                <ChevronRight />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
