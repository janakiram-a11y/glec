export default function ResearchSection({ college }) {
  return (
    <section className="w-full bg-[#5B1027] section-pad">
      <div className="flex flex-col gap-12">
        <div className="flex flex-col items-center gap-3">
          <p className="font-hind font-bold text-[20px] leading-5 uppercase tracking-[1.4px] text-[#F3DAB2] text-center">
            {college.researchLabel}
          </p>
          <h2 className="font-hind font-semibold text-[28px] leading-9 lg:text-[40px] lg:leading-[48px] text-white text-center">
            {college.researchHeading}
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {college.researchStats.map(({ count, label, desc }) => (
            <div
              key={label}
              className="bg-white/10 border border-white/20 rounded-xl px-8 py-[31px] flex flex-col items-center text-center gap-3"
            >
              <span className="font-hind font-bold text-[30px] leading-[38px] text-[#F3DAB2]">{count}</span>
              <span className="font-hind font-semibold text-[18px] leading-7 text-white">{label}</span>
              <span className="font-hind font-normal text-[14px] leading-5 text-[#E1D3D9]">{desc}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
