import { Link } from 'react-router-dom';
import SiteHeader from '../components/SiteHeader';
import PageHero from '../components/PageHero';
import AdmissionsCTA from '../components/AdmissionsCTA';
import Footer from '../components/Footer';
import college from '../theme';

export default function PlacementsPage() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <SiteHeader college={college} />
      <PageHero
        college={college}
        title="Placements"
        subtitle="Connecting GLEC graduates with industry-leading opportunities"
        breadcrumb={['Placements']}
        bgImage={college.heroBgImage}
      />

      <main className="flex-1 section-pad">
        <div className="max-w-[1200px] mx-auto">

          {/* Placement Stats */}
          <section className="mb-14">
            <div className="mb-6">
              <span
                className="font-dm-sans font-semibold text-[12px] uppercase tracking-[2px] mb-2 block"
                style={{ color: college.accentColor }}
              >
                2025 Batch
              </span>
              <h2
                className="font-hind font-semibold text-[28px] leading-9 lg:text-[40px] lg:leading-[48px] pb-3"
                style={{
                  color: college.primaryColor,
                  borderBottom: `3px solid ${college.accentColor}`,
                  display: 'inline-block',
                }}
              >
                Placement Highlights
              </h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-6">
              <div
                className="rounded-2xl p-8 flex flex-col gap-2"
                style={{ backgroundColor: '#5B1027' }}
              >
                <span className="font-hind font-bold text-[40px] text-white">{college.careerOffersCount}</span>
                <span
                  className="font-dm-sans font-semibold text-[11px] uppercase tracking-[2px]"
                  style={{ color: '#F3DAB2' }}
                >
                  Placement Offers
                </span>
              </div>
              <div
                className="rounded-2xl p-8 flex flex-col gap-2"
                style={{ backgroundColor: '#5B1027' }}
              >
                <span className="font-hind font-bold text-[40px] text-white">{college.careerHighestPackage}</span>
                <span
                  className="font-dm-sans font-semibold text-[11px] uppercase tracking-[2px]"
                  style={{ color: '#F3DAB2' }}
                >
                  Highest Package
                </span>
              </div>
              <div
                className="rounded-2xl p-8 flex flex-col gap-2"
                style={{ backgroundColor: '#5B1027' }}
              >
                <span className="font-hind font-bold text-[40px] text-white">{college.careerRecruiters.length}+</span>
                <span
                  className="font-dm-sans font-semibold text-[11px] uppercase tracking-[2px]"
                  style={{ color: '#F3DAB2' }}
                >
                  Recruiters
                </span>
              </div>
            </div>
          </section>

          {/* Top Recruiters */}
          <section className="mb-14">
            <div className="mb-6">
              <h2
                className="font-hind font-semibold text-[28px] leading-9 lg:text-[40px] lg:leading-[48px] pb-3"
                style={{
                  color: college.primaryColor,
                  borderBottom: `3px solid ${college.accentColor}`,
                  display: 'inline-block',
                }}
              >
                Top Recruiters
              </h2>
            </div>
            <div className="flex flex-wrap gap-3 mt-4">
              {college.careerRecruiters.map((r) => (
                <span
                  key={r}
                  className="font-dm-sans font-semibold text-[14px] px-4 py-2 rounded-full border"
                  style={{ borderColor: `${college.primaryColor}30`, color: college.primaryColor, backgroundColor: `${college.primaryColor}08` }}
                >
                  {r}
                </span>
              ))}
            </div>
          </section>

          {/* About Placements */}
          <section className="mb-14">
            <div className="mb-6">
              <h2
                className="font-hind font-semibold text-[28px] leading-9 lg:text-[40px] lg:leading-[48px] pb-3"
                style={{
                  color: college.primaryColor,
                  borderBottom: `3px solid ${college.accentColor}`,
                  display: 'inline-block',
                }}
              >
                Training &amp; Placements
              </h2>
            </div>
            <div className="flex flex-col gap-4">
              {college.placementsDescription.map((para, i) => (
                <p key={i} className="font-hind font-normal text-[15px] leading-[27px] text-[#474747]">
                  {para}
                </p>
              ))}
            </div>
          </section>

          {/* Placement Cell Contacts */}
          <section className="mb-14">
            <div className="mb-6">
              <h2
                className="font-hind font-semibold text-[28px] leading-9 lg:text-[40px] lg:leading-[48px] pb-3"
                style={{
                  color: college.primaryColor,
                  borderBottom: `3px solid ${college.accentColor}`,
                  display: 'inline-block',
                }}
              >
                Placement Cell
              </h2>
            </div>
            <div className="overflow-x-auto rounded-2xl border" style={{ borderColor: `${college.primaryColor}18` }}>
              <table className="w-full min-w-[520px]">
                <thead>
                  <tr style={{ backgroundColor: college.primaryColor }}>
                    {['Role', 'Name', 'Phone', 'Email'].map(h => (
                      <th key={h} className="text-left font-dm-sans font-semibold text-[13px] text-white px-5 py-3.5">{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {college.placementsContacts.map((c, i) => (
                    <tr key={i} style={{ backgroundColor: i % 2 === 0 ? '#fff' : '#FAFAFA' }}>
                      <td className="px-5 py-3.5 font-dm-sans font-semibold text-[14px]" style={{ color: college.primaryColor }}>{c.role}</td>
                      <td className="px-5 py-3.5 font-dm-sans text-[14px] text-[#374151]">{c.name}</td>
                      <td className="px-5 py-3.5 font-dm-sans text-[14px] text-[#374151]">
                        <a href={`tel:${c.phone}`} className="hover:underline" style={{ color: college.primaryColor }}>{c.phone}</a>
                      </td>
                      <td className="px-5 py-3.5 font-dm-sans text-[14px] text-[#374151]">
                        <a href={`mailto:${c.email}`} className="hover:underline" style={{ color: college.primaryColor }}>{c.email}</a>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* Placement Initiatives */}
          <section className="mb-14">
            <div className="mb-6">
              <h2
                className="font-hind font-semibold text-[28px] leading-9 lg:text-[40px] lg:leading-[48px] pb-3"
                style={{
                  color: college.primaryColor,
                  borderBottom: `3px solid ${college.accentColor}`,
                  display: 'inline-block',
                }}
              >
                Placement Initiatives
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-4">
              {[
                { name: 'NIPUN', desc: 'Industry Bridge Programme — connecting students with live projects, internships, and domain experts from top companies.' },
                { name: 'SEEKH', desc: 'Experiential Learning — hands-on, project-based curriculum that turns theory into real-world engineering skills.' },
                { name: 'DHI', desc: 'Communication & Leadership — structured programme building professional communication, presentation, and leadership capabilities.' },
              ].map((prog) => (
                <div
                  key={prog.name}
                  className="rounded-2xl p-8 border"
                  style={{ borderColor: `${college.primaryColor}18`, backgroundColor: '#FAFAFA' }}
                >
                  <h3
                    className="font-hind font-medium text-[22px] mb-3"
                    style={{ color: college.primaryColor }}
                  >
                    {prog.name}
                  </h3>
                  <div className="w-10 h-0.5 mb-4 rounded-full" style={{ backgroundColor: college.accentColor }} />
                  <p className="font-hind font-normal text-[14px] leading-[22px] text-[#474747]">{prog.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Coming Soon note */}
          <div
            className="rounded-2xl p-8 text-center"
            style={{ backgroundColor: `${college.primaryColor}08`, border: `1px solid ${college.primaryColor}18` }}
          >
            <p className="font-hind font-normal text-[16px] leading-6 text-[#474747]">
              Detailed placement records, year-wise data, and company-wise statistics will be published here.{' '}
              <Link
                to="/contact"
                className="font-semibold transition-colors"
                style={{ color: college.primaryColor }}
                onMouseEnter={(e) => (e.currentTarget.style.color = college.accentColor)}
                onMouseLeave={(e) => (e.currentTarget.style.color = college.primaryColor)}
              >
                Contact the Placements Cell
              </Link>{' '}
              for more information.
            </p>
          </div>

        </div>
      </main>

      <AdmissionsCTA college={college} />
      <Footer college={college} />
    </div>
  );
}
