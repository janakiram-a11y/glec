export default function CampusIntro({ college }) {
  return (
    <section className="w-full bg-white section-pad">
      <div className="flex flex-col gap-12">
        <div className="flex flex-col items-center gap-2">
          <p className="font-hind font-bold text-[20px] leading-[30px] uppercase text-[#5B1027] text-center">
            {college.campusIntroLabel}
          </p>
          <h2 className="font-hind font-semibold text-[28px] leading-9 lg:text-[40px] lg:leading-[48px] text-[#111827] text-center">
            {college.campusIntroHeading}
          </h2>
          <p className="font-hind font-normal text-[16px] leading-6 text-[#666666] text-center">
            {college.campusIntroDesc}
          </p>
        </div>

        <div
          className="w-full rounded-xl overflow-hidden"
          style={{ aspectRatio: '16/9', boxShadow: '0px 24px 48px -12px rgba(74,13,38,0.15)' }}
        >
          {college.campusVideoSrc ? (
            <video
              src={college.campusVideoSrc}
              className="w-full h-full object-cover"
              autoPlay
              muted
              loop
              playsInline
            />
          ) : (
            <img
              src={college.campusIntroImage}
              alt={college.campusIntroHeading}
              className="w-full h-full object-cover"
            />
          )}
        </div>
      </div>
    </section>
  )
}
