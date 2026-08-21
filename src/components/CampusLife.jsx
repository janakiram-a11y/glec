const GalleryCard = ({ title, desc, img, className }) => (
  <div className={`relative rounded-3xl overflow-hidden h-[240px] md:h-[300px] lg:h-auto ${className}`}>
    <img src={img} alt={title} className="absolute inset-0 w-full h-full object-cover" />
    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
    <div className="absolute bottom-0 left-0 right-0 p-6 lg:p-8">
      <h4 className="font-hind font-bold text-white leading-tight mb-1">{title}</h4>
      <p className="font-dm-sans font-normal text-[14px] leading-[17px] text-white/80">{desc}</p>
    </div>
  </div>
)

export default function CampusLife({ college }) {
  const [large, ...rest] = college.campusLifeCards

  return (
    <section className="w-full bg-[#F6F1F2] section-pad">
      <div className="flex flex-col gap-6">
        <div className="flex flex-col gap-4 sm:flex-row sm:justify-between sm:items-end">
          <div className="flex flex-col gap-4">
            <p className="font-hind font-bold text-[14px] leading-5 uppercase tracking-[1.4px] text-[#5B1027]">
              {college.campusLifeLabel}
            </p>
            <h2 className="font-hind font-bold text-[28px] leading-[40px] lg:text-[36px] lg:leading-[54px] text-[#2E2E2E]">
              {college.campusLifeHeading}
            </h2>
          </div>
          <button className="self-start sm:self-auto border-2 border-[#5B1027] text-[#5B1027] font-dm-sans font-medium text-[16px] leading-6 px-6 py-2 rounded-lg hover:bg-[#5B1027] hover:text-white transition-colors shrink-0">
            Explore Gallery
          </button>
        </div>

        <div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6 lg:[grid-template-rows:384px_288px]"
        >
          <GalleryCard
            title={large.title}
            desc={large.desc}
            img={large.img}
            className="md:col-span-2 lg:col-span-2 row-span-1 text-2xl"
          />
          {rest.slice(0, 1).map(card => (
            <GalleryCard key={card.title} {...card} className="col-span-1 row-span-1 text-xl" />
          ))}
          {rest.slice(1).map(card => (
            <GalleryCard key={card.title} {...card} className="col-span-1 row-span-1 text-xl" />
          ))}
        </div>
      </div>
    </section>
  )
}
