const cardIcons = [
  () => (
    <svg viewBox="0 0 28 28" fill="none" className="w-7 h-7">
      <path d="M14 3l2.5 5.5 6 .5-4.5 4 1.5 5.5L14 16l-5.5 2.5 1.5-5.5L5.5 9l6-.5L14 3z"
        stroke="#5B1027" strokeWidth="2" strokeLinejoin="round" />
    </svg>
  ),
  () => (
    <svg viewBox="0 0 28 28" fill="none" className="w-7 h-7">
      <rect x="3" y="10" width="22" height="14" rx="2" stroke="#5B1027" strokeWidth="2" />
      <path d="M9 10V7a2 2 0 012-2h6a2 2 0 012 2v3" stroke="#5B1027" strokeWidth="2" />
      <path d="M3 17h22" stroke="#5B1027" strokeWidth="2" />
    </svg>
  ),
  () => (
    <svg viewBox="0 0 28 28" fill="none" className="w-7 h-7">
      <path d="M3 6h9a3 3 0 013 3v13H3V6z" stroke="#5B1027" strokeWidth="2" />
      <path d="M25 6h-9a3 3 0 00-3 3v13h12V6z" stroke="#5B1027" strokeWidth="2" />
    </svg>
  ),
  () => (
    <svg viewBox="0 0 28 28" fill="none" className="w-7 h-7">
      <circle cx="14" cy="14" r="11" stroke="#5B1027" strokeWidth="2" />
      <path d="M14 8l3 6-6 3 3-9z" stroke="#5B1027" strokeWidth="2" strokeLinejoin="round" />
    </svg>
  ),
  () => (
    <svg viewBox="0 0 28 28" fill="none" className="w-7 h-7">
      <path d="M14 4a7 7 0 015 11.5L18 19h-8l-1-3.5A7 7 0 0114 4z" stroke="#5B1027" strokeWidth="2" />
      <path d="M11 19h6M11.5 23h5" stroke="#5B1027" strokeWidth="2" strokeLinecap="round" />
    </svg>
  ),
  () => (
    <svg viewBox="0 0 28 28" fill="none" className="w-7 h-7">
      <circle cx="14" cy="9" r="4" stroke="#5B1027" strokeWidth="2" />
      <path d="M4 24a10 10 0 0120 0" stroke="#5B1027" strokeWidth="2" strokeLinecap="round" />
    </svg>
  ),
]

export default function AccreditationSection({ college }) {
  return (
    <section className="w-full bg-[#F6F1F2] section-pad">
      <div className="flex flex-col gap-16">
        <div className="flex flex-col items-center gap-4">
          <p className="font-hind font-bold text-[20px] leading-[30px] uppercase text-[#5B1027] text-center">
            {college.whyChooseLabel}
          </p>
          <h2 className="font-hind font-semibold text-[28px] leading-9 lg:text-[40px] lg:leading-[48px] text-[#111827] text-center">
            {college.whyChooseHeading}
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {college.whyChooseCards.map((card, i) => {
            const Icon = cardIcons[i % cardIcons.length]
            return (
              <div
                key={card.title}
                className="bg-white border border-black/[0.04] rounded-xl overflow-hidden"
                style={{ boxShadow: '0px 20px 40px -10px rgba(0,0,0,0.05)' }}
              >
                <div className="relative p-8" style={{ paddingTop: '105px', minHeight: '225px' }}>
                  <div className="absolute left-[33px] top-[33px] w-14 h-14 bg-[rgba(91,16,39,0.07)] rounded-lg flex items-center justify-center">
                    <Icon />
                  </div>
                  <h3 className="font-hind font-semibold text-[20px] leading-[26px] tracking-[-0.2px] text-[#111827] mb-3">
                    {card.title}
                  </h3>
                  <p className="font-hind font-normal text-[14px] leading-[22px] text-[#876874]">
                    {card.desc}
                  </p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
