export default function StatsBar({ college }) {
  const items = college.statsBarItems

  return (
    <div
      className="w-full"
      style={{ backgroundColor: college.primaryColor }}
    >
      <div className="flex justify-center items-stretch flex-wrap">
        {items.map((item, i) => (
          <div
            key={item.value}
            className="flex items-center px-8 md:px-12 lg:px-16 py-5"
            style={{
              borderRight: i < items.length - 1 ? `1px solid rgba(255,255,255,0.15)` : 'none',
            }}
          >
            <div className="flex items-center gap-4">
              <span
                className="w-[3px] h-[38px] rounded-full flex-shrink-0"
                style={{ backgroundColor: 'rgba(255,255,255,0.3)' }}
              />
              <div className="flex flex-col gap-0.5">
                <span
                  className="font-hind font-bold text-[22px] leading-[26px] tracking-wide whitespace-nowrap"
                  style={{ color: '#F3DAB2' }}
                >
                  {item.value}
                </span>
                <span
                  className="font-dm-sans font-semibold text-[11px] uppercase tracking-[0.18em] whitespace-nowrap"
                  style={{ color: 'rgba(243,218,178,0.65)' }}
                >
                  {item.label}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
