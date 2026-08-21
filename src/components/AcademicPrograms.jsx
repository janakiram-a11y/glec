import { useRef, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const BookIcon = () => (
  <svg viewBox="0 0 28 28" fill="none" className="w-7 h-7">
    <path d="M3 5h22v18H3z" stroke="#F3DAB2" strokeWidth="2" strokeLinejoin="round" />
    <path d="M14 5v18M3 12h11" stroke="#F3DAB2" strokeWidth="2" strokeLinecap="round" />
  </svg>
)
const MortarIcon = () => (
  <svg viewBox="0 0 28 28" fill="none" className="w-7 h-7">
    <path d="M14 4L3 10l11 5 11-5-11-6z" stroke="#F3DAB2" strokeWidth="2" strokeLinejoin="round" />
    <path d="M7 13v4c2 2 7 3 7 3s5-1 7-3v-4" stroke="#F3DAB2" strokeWidth="2" strokeLinecap="round" />
  </svg>
)
const ChevronRight = () => (
  <svg viewBox="0 0 16 16" fill="none" className="w-4 h-4">
    <path d="M6 4l4 4-4 4" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)
const ArrowLeft = () => (
  <svg viewBox="0 0 20 20" fill="none" className="w-5 h-5">
    <path d="M13 4l-6 6 6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)
const ArrowRight = () => (
  <svg viewBox="0 0 20 20" fill="none" className="w-5 h-5">
    <path d="M7 4l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

const programIcons = [BookIcon, MortarIcon]
const SCROLL_AMOUNT = 260

const ArrowBtn = ({ onClick, disabled, label, children }) => (
  <button
    onClick={onClick}
    disabled={disabled}
    aria-label={label}
    className="w-10 h-10 rounded-full border flex items-center justify-center transition-all duration-200"
    style={{
      color: disabled ? 'rgba(255,255,255,0.25)' : '#F3DAB2',
      borderColor: disabled ? 'rgba(255,255,255,0.2)' : '#F3DAB2',
      backgroundColor: disabled ? 'transparent' : 'rgba(243,218,178,0.12)',
      cursor: disabled ? 'not-allowed' : 'pointer',
    }}
  >
    {children}
  </button>
)

export default function AcademicPrograms({ college }) {
  const scrollRef = useRef(null)
  const [canScrollLeft, setCanScrollLeft] = useState(false)
  const [canScrollRight, setCanScrollRight] = useState(true)

  const updateArrows = () => {
    const el = scrollRef.current
    if (!el) return
    setCanScrollLeft(el.scrollLeft > 4)
    setCanScrollRight(el.scrollLeft < el.scrollWidth - el.clientWidth - 4)
  }

  useEffect(() => {
    const el = scrollRef.current
    if (!el) return
    updateArrows()
    el.addEventListener('scroll', updateArrows, { passive: true })
    return () => el.removeEventListener('scroll', updateArrows)
  }, [])

  const scroll = (dir) => {
    scrollRef.current?.scrollBy({ left: dir * SCROLL_AMOUNT, behavior: 'smooth' })
  }

  return (
    <section className="w-full bg-[#5B1027] section-pad">
      <div className="flex flex-col lg:flex-row items-start gap-10 lg:gap-12">

        {/* Left: label + heading + desc + CTAs */}
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
          <div className="flex flex-col gap-4 mt-2 w-full">
            <Link
              to="/admissions/programs"
              className="w-full bg-[#C32033] text-white font-dm-sans font-semibold text-[16px] leading-[22px] px-7 py-4 rounded hover:bg-[#a81b2a] transition-colors inline-block text-center"
              style={{ boxShadow: '0px 10px 15px -3px rgba(0,0,0,0.1), 0px 4px 6px -4px rgba(0,0,0,0.1)' }}
            >
              View all programs
            </Link>
          </div>
        </div>

        {/* Right: cards + arrows below right-aligned */}
        <div className="flex-1 min-w-0 flex flex-col gap-5">

          {/* Scrollable cards strip */}
          <div
            ref={scrollRef}
            className="overflow-x-auto"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            <div className="flex gap-5" style={{ width: 'max-content' }}>
              {college.academicPrograms.map(({ count, title, desc, href }, i) => {
                const Icon = programIcons[i % programIcons.length]
                return (
                  <div
                    key={title}
                    className="w-[240px] bg-white/10 border border-white/20 rounded-3xl p-6 flex flex-col justify-between gap-4"
                    style={{ minHeight: '280px' }}
                  >
                    <div className="flex flex-col gap-1 flex-1">
                      <span className="font-hind font-bold text-[28px] leading-[34px] text-[#F3DAB2] block">{count}</span>
                      <span className="font-hind font-bold text-[17px] leading-6 text-white block">{title}</span>
                      <p className="font-hind font-normal text-[13px] leading-[20px] text-[#E1D3D9] mt-1">{desc}</p>
                    </div>
                    <Link to={href || '/departments/cse'} className="flex items-center justify-end gap-1">
                      <span className="font-dm-sans font-semibold text-[13px] leading-5 text-white">Learn More</span>
                      <ChevronRight />
                    </Link>
                  </div>
                )
              })}
            </div>
          </div>

          {/* Arrows — below cards, right-aligned */}
          <div className="flex items-center justify-end gap-3">
            <ArrowBtn onClick={() => scroll(-1)} disabled={!canScrollLeft} label="Scroll left">
              <ArrowLeft />
            </ArrowBtn>
            <ArrowBtn onClick={() => scroll(1)} disabled={!canScrollRight} label="Scroll right">
              <ArrowRight />
            </ArrowBtn>
          </div>

        </div>
      </div>
    </section>
  )
}
