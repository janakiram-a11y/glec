import college from '../theme';
import SiteHeader from '../components/SiteHeader';
import PageHero from '../components/PageHero';
import AdmissionsCTA from '../components/AdmissionsCTA';
import Footer from '../components/Footer';

export default function AlumniPage() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <SiteHeader college={college} />

      <PageHero
        college={college}
        title="Alumni Association"
        subtitle="Reconnect, inspire, and grow with the GLEC alumni community — your bond with GLEC never ends"
        breadcrumb={['Alumni']}
        bgImage={college.heroBgImage}
      />

      {/* Intro */}
      <section className="w-full section-pad bg-white">
        <div className="max-w-[1320px] mx-auto px-5 md:px-[60px]">
          <div className="max-w-[780px] mx-auto text-center">
            <p className="font-dm-sans font-bold text-[11px] uppercase tracking-[2px] mb-3" style={{ color: college.accentColor }}>
              Our Community
            </p>
            <h2 className="font-hind font-semibold text-[28px] lg:text-[36px] leading-tight mb-5" style={{ color: college.primaryColor }}>
              Alumni Association
            </h2>
            <p className="font-hind text-[16px] leading-7 text-[#555555]">
              {college.alumniAssociation.mission}
            </p>
          </div>
        </div>
      </section>

      {/* Alumni Association Committee */}
      <section className="w-full section-pad bg-white">
        <div className="max-w-[1320px] mx-auto px-5 md:px-[60px]">
          <div className="text-center mb-10 max-w-[820px] mx-auto">
            <h2 className="font-hind font-semibold text-[26px] lg:text-[32px]" style={{ color: college.primaryColor }}>
              Alumni Association Committee
            </h2>
          </div>
          <div className="overflow-x-auto rounded-xl border" style={{ borderColor: `${college.primaryColor}18` }}>
            <table className="w-full min-w-[560px]">
              <thead>
                <tr style={{ backgroundColor: college.primaryColor }}>
                  {['S.No.', 'Name', 'Position', 'Role'].map(h => (
                    <th key={h} className="text-left font-dm-sans font-semibold text-[13px] text-white px-5 py-3.5">{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {college.alumniAssociation.members.map((m) => (
                  <tr key={m.sno} style={{ backgroundColor: m.sno % 2 === 0 ? '#FAFAFA' : '#fff' }}>
                    <td className="px-5 py-3.5 font-dm-sans text-[14px] text-[#374151]">{m.sno}</td>
                    <td className="px-5 py-3.5 font-dm-sans font-semibold text-[14px]" style={{ color: college.primaryColor }}>{m.name}</td>
                    <td className="px-5 py-3.5 font-dm-sans text-[14px] text-[#374151]">{m.position}</td>
                    <td className="px-5 py-3.5 font-dm-sans text-[14px] text-[#374151]">{m.role}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <AdmissionsCTA college={college} />
      <Footer college={college} />
    </div>
  );
}
