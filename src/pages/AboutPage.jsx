import { Link } from 'react-router-dom';
import SiteHeader from '../components/SiteHeader';
import Footer from '../components/Footer';
import AdmissionsCTA from '../components/AdmissionsCTA';
import college from '../theme';

function SectionHeading({ children, primaryColor }) {
  return (
    <div className="flex flex-col items-start gap-3 mb-8">
      <h2 className="font-hind font-semibold text-[28px] leading-9 lg:text-[40px] lg:leading-[48px] text-left" style={{ color: primaryColor }}>
        {children}
      </h2>
      <div className="h-[3px] rounded-full" style={{ width: '60px', backgroundColor: '#C32033' }} />
    </div>
  );
}

export default function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <SiteHeader college={college} />

      {/* Hero */}
      <div
        className="relative w-full flex items-center justify-center"
        style={{ minHeight: 340, background: college.primaryColor }}
      >
        <img
          src={college.heroBgImage}
          alt="About GLEC"
          className="absolute inset-0 w-full h-full object-cover object-center opacity-30"
        />
        <div className="relative z-10 flex flex-col items-center gap-3 px-6 py-16 text-center">
          <p className="font-dm-sans font-semibold text-[13px] tracking-[0.2em] uppercase text-white/60">
            GLEC — Est. 2021
          </p>
          <h1 className="font-hind font-semibold text-[32px] leading-[40px] sm:text-[36px] sm:leading-[48px] lg:text-[48px] lg:leading-[56px] text-white uppercase tracking-wide">
            About GLEC
          </h1>
          <div className="flex items-center gap-2 text-white/50 font-dm-sans text-sm mt-2">
            <Link to="/" className="hover:text-white transition-colors">Home</Link>
            <span>/</span>
            <span className="text-white">About</span>
          </div>
        </div>
      </div>

      {/* Text Sections + Vision & Mission */}
      <div className="w-full bg-white section-pad">
        <div className="flex flex-col gap-16">

          {/* Inspirer & Promoters */}
          <section>
            <SectionHeading primaryColor={college.primaryColor}>
              About Inspirer and Promoters
            </SectionHeading>
            <p className="font-hind font-normal text-[16px] leading-6 text-[#474747]">
              {college.aboutFounders}
            </p>
          </section>

          {/* Sponsoring Society */}
          <section>
            <SectionHeading primaryColor={college.primaryColor}>
              The Sponsoring Society:
            </SectionHeading>
            <p className="font-hind font-normal text-[16px] leading-6 text-[#474747]">
              {college.aboutSociety}
            </p>
          </section>

          {/* About GLEC */}
          <section>
            <SectionHeading primaryColor={college.primaryColor}>
              About GLEC:
            </SectionHeading>
            <div className="flex flex-col gap-5">
              {college.aboutDetailedParagraphs.map((para, i) => (
                <p key={i} className="font-hind font-normal text-[16px] leading-6 text-[#474747]">
                  {para}
                </p>
              ))}
            </div>
          </section>

          <div className="w-full h-px" style={{ backgroundColor: `${college.primaryColor}18` }} />

          {/* Leadership */}
          <section>
            <SectionHeading primaryColor={college.primaryColor}>
              Leadership
            </SectionHeading>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {college.leadership.map((leader) => {
                const idMap = {
                  'Chairman': 'chairman',
                  'Vice President': 'vice-president',
                  'Principal': 'principal',
                  'Registrar': 'registrar',
                };
                return (
                  <div
                    key={leader.name}
                    id={idMap[leader.title] || leader.title.toLowerCase().replace(/\s+/g, '-')}
                    className="rounded-xl bg-white flex flex-col overflow-hidden"
                    style={{
                      border: `1px solid rgba(91,16,39,0.12)`,
                      borderTop: `4px solid ${college.primaryColor}`,
                      boxShadow: '0 1px 6px rgba(91,16,39,0.06)',
                    }}
                  >
                    {/* Header: photo left + info right */}
                    <div className="flex items-start gap-5 p-6">
                      {/* Circular photo with maroon ring */}
                      <div
                        className="rounded-full flex-shrink-0 overflow-hidden"
                        style={{
                          width: '82px',
                          height: '82px',
                          border: `2.5px solid ${college.primaryColor}`,
                          boxShadow: `0 2px 10px rgba(91,16,39,0.15)`,
                        }}
                      >
                        <img
                          src={leader.image}
                          alt={leader.name}
                          className="w-full h-full object-cover object-top"
                          onError={(e) => { e.currentTarget.style.display = 'none'; }}
                        />
                      </div>

                      {/* Name / role / credentials */}
                      <div className="flex flex-col justify-center gap-0.5 pt-1">
                        <h3
                          className="font-hind font-bold text-[17px] leading-snug"
                          style={{ color: college.primaryColor }}
                        >
                          {leader.name}
                        </h3>
                        <span
                          className="font-dm-sans font-semibold text-[13px]"
                          style={{ color: college.accentColor }}
                        >
                          {leader.institution || leader.title}
                        </span>
                        {leader.credentials && (
                          <span className="font-dm-sans text-[12px] text-[#6B7280] mt-0.5 leading-snug">
                            {leader.credentials}
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Divider */}
                    <div className="mx-6" style={{ height: '1px', backgroundColor: `rgba(91,16,39,0.09)` }} />

                    {/* Bio */}
                    <div className="flex-1 px-6 py-5">
                      <p className="font-dm-sans font-normal text-[13.5px] leading-[26px] text-[#374151]">
                        {leader.bio}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </section>

          <div className="w-full h-px" style={{ backgroundColor: `${college.primaryColor}18` }} />

          {/* Vision & Mission */}
          <section>
            <div className="mb-6">
              <span
                className="font-dm-sans font-semibold text-[12px] uppercase tracking-[2px] mb-2 block"
                style={{ color: college.accentColor }}
              >
                Values &amp; Direction
              </span>
              <h2
                className="font-hind font-semibold text-[28px] leading-9 lg:text-[40px] lg:leading-[48px] pb-3"
                style={{
                  color: college.primaryColor,
                  borderBottom: `3px solid ${college.accentColor}`,
                  display: 'inline-block',
                }}
              >
                Vision &amp; Mission
              </h2>
            </div>
            <div className="mt-8 space-y-10">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                {/* Vision */}
                <div className="rounded-xl p-7 bg-white" style={{ border: '1.5px solid rgba(91,16,39,0.16)', boxShadow: '0 1px 3px rgba(91,16,39,0.05), 0 6px 20px -4px rgba(91,16,39,0.08)' }}>
                  <span
                    className="font-dm-sans font-semibold text-[11px] uppercase tracking-[2px] mb-2 block"
                    style={{ color: college.accentColor }}
                  >
                    Our Vision
                  </span>
                  <h3 className="font-hind font-medium text-[20px] mb-3" style={{ color: college.primaryColor }}>Vision</h3>
                  <div className="w-8 h-[3px] mb-4 rounded-full" style={{ backgroundColor: college.accentColor }} />
                  <p className="font-hind font-normal text-[14px] leading-[22px] text-[#474747]">{college.vision}</p>
                </div>

                {/* Mission */}
                <div className="rounded-xl p-7 bg-white" style={{ border: '1.5px solid rgba(91,16,39,0.16)', boxShadow: '0 1px 3px rgba(91,16,39,0.05), 0 6px 20px -4px rgba(91,16,39,0.08)' }}>
                  <span
                    className="font-dm-sans font-semibold text-[11px] uppercase tracking-[2px] mb-2 block"
                    style={{ color: college.accentColor }}
                  >
                    Our Mission
                  </span>
                  <h3 className="font-hind font-medium text-[20px] mb-3" style={{ color: college.primaryColor }}>Mission</h3>
                  <div className="w-8 h-[3px] mb-4 rounded-full" style={{ backgroundColor: college.accentColor }} />
                  <ul className="space-y-2">
                    {college.mission.map((item, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span
                          className="w-1.5 h-1.5 rounded-full flex-shrink-0 mt-[9px]"
                          style={{ backgroundColor: college.accentColor }}
                        />
                        <span className="font-hind font-normal text-[14px] leading-[22px] text-[#474747]">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Quality Policy */}
                <div className="rounded-xl p-7 bg-white" style={{ border: '1.5px solid rgba(91,16,39,0.16)', boxShadow: '0 1px 3px rgba(91,16,39,0.05), 0 6px 20px -4px rgba(91,16,39,0.08)' }}>
                  <span
                    className="font-dm-sans font-semibold text-[11px] uppercase tracking-[2px] mb-2 block"
                    style={{ color: college.accentColor }}
                  >
                    Our Standard
                  </span>
                  <h3 className="font-hind font-medium text-[20px] mb-3" style={{ color: college.primaryColor }}>Quality Policy</h3>
                  <div className="w-8 h-[3px] mb-4 rounded-full" style={{ backgroundColor: college.accentColor }} />
                  <p className="font-hind font-normal text-[14px] leading-[22px] text-[#474747]">{college.qualityPolicy}</p>
                </div>

                {/* Strategies */}
                <div className="rounded-xl p-7 bg-white" style={{ border: '1.5px solid rgba(91,16,39,0.16)', boxShadow: '0 1px 3px rgba(91,16,39,0.05), 0 6px 20px -4px rgba(91,16,39,0.08)' }}>
                  <span
                    className="font-dm-sans font-semibold text-[11px] uppercase tracking-[2px] mb-2 block"
                    style={{ color: college.accentColor }}
                  >
                    Our Approach
                  </span>
                  <h3 className="font-hind font-medium text-[20px] mb-3" style={{ color: college.primaryColor }}>Strategies</h3>
                  <div className="w-8 h-[3px] mb-4 rounded-full" style={{ backgroundColor: college.accentColor }} />
                  <ul className="space-y-2">
                    {college.strategies.map((item, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span
                          className="w-1.5 h-1.5 rounded-full flex-shrink-0 mt-[9px]"
                          style={{ backgroundColor: college.accentColor }}
                        />
                        <span className="font-hind font-normal text-[14px] leading-[22px] text-[#474747]">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

              </div>

              {/* Core Values */}
              <div className="rounded-xl p-8" style={{ backgroundColor: '#F6F1F2' }}>
                <div className="mb-7 text-center">
                  <span
                    className="font-dm-sans font-semibold text-[11px] uppercase tracking-[2px] mb-2 block"
                    style={{ color: college.accentColor }}
                  >
                    Our Foundation
                  </span>
                  <h3 className="font-hind font-medium text-[22px]" style={{ color: college.primaryColor }}>Core Values</h3>
                  <div
                    className="w-10 h-[3px] rounded-full mx-auto mt-3"
                    style={{ backgroundColor: college.accentColor }}
                  />
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {college.coreValues.map((value) => (
                    <div
                      key={value.name}
                      className="bg-white rounded-xl p-5"
                      style={{ border: '1.5px solid rgba(91,16,39,0.13)', borderLeftWidth: '4px', borderLeftColor: college.primaryColor, boxShadow: '0 1px 4px rgba(91,16,39,0.05)' }}
                    >
                      <h4 className="font-hind font-medium text-[15px] mb-1.5" style={{ color: college.primaryColor }}>{value.name}</h4>
                      <p className="font-hind font-normal text-[14px] leading-[22px] text-[#474747]">{value.desc}</p>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </section>

        </div>
      </div>

      <AdmissionsCTA college={college} />
      <Footer college={college} />
    </div>
  );
}
