export default function CareerOutcomes({ college }) {
  return (
    <section className="w-full bg-[#F6F1F2] section-pad">
      <div className="flex flex-col lg:flex-row items-start gap-12 lg:gap-16">

        {/* Left: text + stats + recruiters */}
        <div className="flex flex-col flex-1 min-w-0 gap-6">
          <div>
            <p className="font-hind font-bold text-[14px] leading-5 uppercase tracking-[1.4px] text-[#5B1027] mb-3">
              {college.careerLabel}
            </p>
            <h2 className="font-hind font-semibold text-[28px] leading-9 lg:text-[40px] lg:leading-[48px] text-[#111827] mb-4">
              {college.careerHeading}
            </h2>
            <p className="font-hind font-normal text-[16px] leading-6 text-[#4B5563] max-w-[480px]">
              {college.careerDesc}
            </p>
          </div>

          {/* Stats */}
          <div className="flex gap-10">
            <div className="pl-5 border-l-2 border-[#5B1027] flex flex-col gap-1">
              <span className="font-hind font-bold text-[36px] leading-10 text-[#111827]">{college.careerHighestPackage}</span>
              <span className="font-dm-sans font-bold text-[11px] leading-4 uppercase tracking-[1.1px] text-[#4B5563]">Highest Package</span>
            </div>
            <div className="pl-5 border-l-2 border-[#C32033] flex flex-col gap-1">
              <span className="font-hind font-bold text-[36px] leading-10 text-[#111827]">{college.careerOffersCount}</span>
              <span className="font-dm-sans font-bold text-[11px] leading-4 uppercase tracking-[1.1px] text-[#4B5563]">Offers Made</span>
            </div>
          </div>

          {/* Recruiters */}
          <div className="border border-[rgba(229,231,235,0.5)] rounded-sm bg-white px-5 py-4 flex flex-col gap-3">
            <p className="font-dm-sans font-bold text-[10px] leading-[15px] uppercase tracking-[1px] text-[#111827] opacity-70">
              Top Recruiters
            </p>
            <div className="flex flex-wrap items-center gap-x-8 gap-y-3 opacity-60">
              {college.careerRecruiters.map(r => (
                <span key={r} className="font-hind font-bold text-[18px] leading-6 text-[#111827]">{r}</span>
              ))}
            </div>
          </div>
        </div>

        {/* Right: image */}
        <div className="w-full lg:w-[460px] flex-shrink-0">
          <img
            src={college.careerImage}
            alt="Career Outcomes"
            className="w-full h-auto rounded-xl"
          />
        </div>

      </div>
    </section>
  )
}
