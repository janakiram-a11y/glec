import { useState } from 'react';
import { useParams, Navigate } from 'react-router-dom';
import college from '../theme';
import AdminSidebarLayout from '../components/AdminSidebarLayout';

const { research: d } = college;
const primary = college.primaryColor;
const accent  = college.accentColor;

// ── Shared primitives ─────────────────────────────────────────────────────────

function SectionHeader({ label, title }) {
  return (
    <div className="flex flex-col gap-2 mb-8">
      {label && (
        <span
          className="font-dm-sans font-semibold text-[11px] tracking-[0.2em] uppercase"
          style={{ color: `${primary}80` }}
        >
          {label}
        </span>
      )}
      <h2 className="font-hind font-bold text-[26px] leading-tight" style={{ color: primary }}>
        {title}
      </h2>
      <div className="w-14 h-[3px] rounded-full" style={{ backgroundColor: accent }} />
    </div>
  );
}

function SubHeading({ children }) {
  return (
    <h3 className="font-hind font-semibold text-[17px] mb-5 mt-8 first:mt-0" style={{ color: primary }}>
      {children}
    </h3>
  );
}

function InfoCallout({ children }) {
  return (
    <div
      className="rounded-xl p-5 flex items-start gap-3 mt-6"
      style={{ backgroundColor: `${primary}08`, borderLeft: `4px solid ${accent}` }}
    >
      <svg className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: accent }} fill="currentColor" viewBox="0 0 20 20">
        <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
      </svg>
      <p className="font-dm-sans text-[14px] leading-[24px] text-[#4B5563]">{children}</p>
    </div>
  );
}

const TYPE_STYLES = {
  Journal:    { bg: '#EFF6FF', text: '#1D4ED8' },
  Conference: { bg: '#F0FDF4', text: '#15803D' },
  Book:       { bg: '#FDF4FF', text: '#7E22CE' },
};

// ── Publications ──────────────────────────────────────────────────────────────

function PublicationsContent() {
  const [activeYear, setActiveYear] = useState(d.publications[0].year);
  const yearData = d.publications.find((y) => y.year === activeYear);

  const total = d.publications.reduce((sum, y) => sum + y.papers.length, 0);

  return (
    <>
      <SectionHeader label="Research Output" title="Publications" />

      {/* Summary stat */}
      <div className="flex flex-wrap gap-4 mb-8">
        {[
          { label: 'Total Publications', value: `${total}+` },
          { label: 'Years of Research', value: d.publications.length },
          { label: 'Publishers', value: 'IEEE · Springer · Elsevier · Taylor & Francis · ACS' },
        ].map((s) => (
          <div
            key={s.label}
            className="flex-1 min-w-[160px] rounded-xl p-4"
            style={{ backgroundColor: `${primary}07`, border: `1px solid ${primary}14` }}
          >
            <p className="font-hind font-bold text-[22px]" style={{ color: primary }}>{s.value}</p>
            <p className="font-dm-sans text-[12px] text-[#6B7280] mt-1">{s.label}</p>
          </div>
        ))}
      </div>

      {/* Year tabs */}
      <div className="flex flex-wrap gap-2 mb-6">
        {d.publications.map((y) => {
          const active = y.year === activeYear;
          return (
            <button
              key={y.year}
              onClick={() => setActiveYear(y.year)}
              className="px-4 py-1.5 rounded-full font-dm-sans font-semibold text-[13px] transition-colors"
              style={{
                backgroundColor: active ? primary : `${primary}0E`,
                color: active ? '#fff' : primary,
              }}
            >
              {y.year} <span className="opacity-70 text-[11px]">({y.papers.length})</span>
            </button>
          );
        })}
      </div>

      {/* Papers list */}
      <div className="flex flex-col gap-3">
        {yearData?.papers.map((paper, i) => {
          const tc = TYPE_STYLES[paper.type] || { bg: '#F9FAFB', text: '#374151' };
          return (
            <div
              key={i}
              className="rounded-xl p-5 border"
              style={{ borderColor: `${primary}12`, backgroundColor: '#fff' }}
            >
              <div className="flex flex-wrap items-start gap-2 mb-2">
                <span
                  className="inline-block px-2.5 py-0.5 rounded-full font-dm-sans font-semibold text-[10px] tracking-wide flex-shrink-0"
                  style={{ backgroundColor: tc.bg, color: tc.text }}
                >
                  {paper.type}
                </span>
                <span className="font-dm-sans text-[11px] text-[#9CA3AF]">{yearData.year}</span>
              </div>
              <p className="font-dm-sans font-semibold text-[14px] leading-[22px] text-[#1F2937] mb-1.5">
                {paper.title}
              </p>
              <p className="font-dm-sans text-[12px] text-[#6B7280] mb-1">
                <span className="font-medium text-[#374151]">Authors: </span>{paper.authors}
              </p>
              <p className="font-dm-sans text-[12px] text-[#6B7280]">
                <span className="font-medium text-[#374151]">Venue: </span>
                {paper.venue}
                {paper.publisher && ` · ${paper.publisher}`}
                {paper.doi && (
                  <> · <a href={`https://doi.org/${paper.doi.replace(/^https?:\/\/doi\.org\//,'')}`} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">DOI</a></>
                )}
              </p>
            </div>
          );
        })}
      </div>
    </>
  );
}

// ── Collaborations ────────────────────────────────────────────────────────────

function CollaborationsContent() {
  const collabs = college.academicCollaborations;
  return (
    <>
      <SectionHeader label="Research Partnerships" title="Collaborations" />
      <p className="font-dm-sans text-[15px] leading-[27px] text-[#474747] mb-10">
        GLEC has established formal research and academic collaborations through Memoranda of Understanding
        (MOUs) with leading industry organisations and academic institutions. These partnerships enhance
        research exposure, internship opportunities, joint projects, and placement outcomes for students and faculty.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {collabs.map((c, i) => (
          <div
            key={i}
            className="flex flex-col gap-4 p-6 rounded-2xl border bg-white hover:shadow-md transition-shadow"
            style={{ borderColor: `${primary}18` }}
          >
            <div className="flex items-start justify-between gap-3">
              <div>
                <h3 className="font-hind font-bold text-[18px]" style={{ color: primary }}>
                  {c.name}
                </h3>
                <span
                  className="inline-flex mt-1.5 px-3 py-1 rounded-full font-dm-sans font-semibold text-[11px] uppercase tracking-wide"
                  style={{ backgroundColor: `${accent}20`, color: '#7a5a0a' }}
                >
                  {c.type}
                </span>
              </div>
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                style={{ backgroundColor: `${primary}0F` }}
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke={primary} strokeWidth="1.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                </svg>
              </div>
            </div>
            <p className="font-dm-sans text-[14px] leading-[24px] text-[#6B7280]">{c.desc}</p>
          </div>
        ))}
      </div>

      <InfoCallout>
        GLEC actively pursues new industry and institutional collaborations to strengthen research ecosystems.
        Faculty and students interested in collaborative research may contact the Research Cell through the Principal's office.
      </InfoCallout>
    </>
  );
}

// ── Facilities ────────────────────────────────────────────────────────────────

function FacilitiesContent() {
  return (
    <>
      <SectionHeader label="Infrastructure" title="Research Facilities" />
      <p className="font-dm-sans text-[15px] leading-[27px] text-[#474747] mb-8">
        GLEC provides state-of-the-art research infrastructure to promote, nurture, and facilitate innovative
        and collaborative research among students and faculty. The institution continuously invests in research
        facilities to develop a centre of excellence.
      </p>

      <div className="flex flex-col gap-8">
        {d.facilities.map((lab, i) => (
          <div
            key={i}
            className="rounded-2xl border overflow-hidden"
            style={{ borderColor: `${primary}14` }}
          >
            {/* Lab header */}
            <div className="px-6 py-5" style={{ backgroundColor: `${primary}08` }}>
              <div className="flex items-center gap-3">
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{ backgroundColor: primary }}
                >
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15M14.25 3.104c.251.023.501.05.75.082M19.8 15l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23-.607L5 14.5m14.8.5l-1.135 5.543A1.875 1.875 0 0116.8 21.75h-9.6a1.875 1.875 0 01-1.865-1.707L4.2 15m10.8 0H5" />
                  </svg>
                </div>
                <h3 className="font-hind font-bold text-[18px]" style={{ color: primary }}>
                  {lab.name}
                </h3>
              </div>
            </div>

            {/* Lab body */}
            <div className="px-6 py-5 bg-white">
              <p className="font-dm-sans text-[14px] leading-[26px] text-[#4B5563] mb-6">{lab.desc}</p>

              <p className="font-hind font-semibold text-[13px] mb-4" style={{ color: primary }}>
                Equipment & Capabilities
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {lab.equipment.map((eq, j) => (
                  <div
                    key={j}
                    className="flex items-start gap-3 p-4 rounded-xl"
                    style={{ backgroundColor: `${primary}05`, border: `1px solid ${primary}10` }}
                  >
                    <span
                      className="mt-[3px] w-1.5 h-1.5 rounded-full flex-shrink-0"
                      style={{ backgroundColor: accent }}
                    />
                    <div>
                      <p className="font-dm-sans font-semibold text-[13px]" style={{ color: primary }}>
                        {eq.name}
                      </p>
                      <p className="font-dm-sans text-[12px] leading-[20px] text-[#6B7280] mt-0.5">
                        {eq.purpose}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

// ── Research Awards ───────────────────────────────────────────────────────────

function AwardsContent() {
  return (
    <>
      <SectionHeader label="Recognition" title="Research Awards" />
      <p className="font-dm-sans text-[15px] leading-[27px] text-[#474747] mb-8">
        {d.awards.desc}
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
        {d.awards.categories.map((cat, i) => (
          <div
            key={i}
            className="rounded-2xl p-6 border"
            style={{ borderColor: `${primary}14`, backgroundColor: i % 2 === 0 ? '#fff' : `${primary}04` }}
          >
            <div className="flex items-start gap-4 mb-3">
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                style={{ backgroundColor: `${accent}18` }}
              >
                <svg className="w-5 h-5" style={{ color: accent }} fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              </div>
              <h3 className="font-hind font-bold text-[16px]" style={{ color: primary }}>
                {cat.title}
              </h3>
            </div>
            <p className="font-dm-sans text-[14px] leading-[24px] text-[#6B7280]">{cat.desc}</p>
          </div>
        ))}
      </div>

      {/* Photo gallery placeholders */}
      <SubHeading>Award Gallery</SubHeading>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {['research-awards.jpg', 'research-awards2.jpg'].map((img) => (
          <div
            key={img}
            className="aspect-[4/3] rounded-2xl overflow-hidden"
            style={{ backgroundColor: `${primary}08`, border: `1px solid ${primary}12` }}
          >
            <img
              src={`https://www.glwec.in/images/${img}`}
              alt="Research Awards at GLEC"
              className="w-full h-full object-cover"
              onError={(e) => {
                e.currentTarget.parentElement.innerHTML = `<div class="w-full h-full flex flex-col items-center justify-center gap-2"><svg class="w-10 h-10 opacity-20" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"/></svg><p class="font-dm-sans text-[12px] text-gray-400">Award Ceremony</p></div>`;
              }}
            />
          </div>
        ))}
      </div>

      <InfoCallout>
        Research awards are presented annually at the GLEC Research Day event. Faculty are encouraged to publish in SCOPUS/WoS-indexed journals and present at reputed national and international conferences.
      </InfoCallout>
    </>
  );
}

// ── Ph.D Awarded ──────────────────────────────────────────────────────────────

function PhdAwardedContent() {
  return (
    <>
      <SectionHeader label="Doctoral Achievements" title="Ph.D Awarded" />
      <p className="font-dm-sans text-[15px] leading-[27px] text-[#474747] mb-8">
        GLEC takes pride in its research-driven faculty. The following faculty members have been awarded
        their doctoral degrees, contributing significantly to their respective fields through original research.
      </p>

      {/* Stats */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-10">
        {[
          { label: 'PhDs Awarded', value: d.phdAwarded.length },
          { label: 'Departments', value: [...new Set(d.phdAwarded.map((p) => p.dept))].length },
          { label: 'Latest Award', value: '2025' },
          { label: 'Ongoing Research', value: 'Active' },
        ].map((s) => (
          <div
            key={s.label}
            className="rounded-xl p-4 text-center"
            style={{ backgroundColor: `${primary}07`, border: `1px solid ${primary}14` }}
          >
            <p className="font-hind font-bold text-[24px]" style={{ color: primary }}>{s.value}</p>
            <p className="font-dm-sans text-[11px] text-[#6B7280] mt-1">{s.label}</p>
          </div>
        ))}
      </div>

      {/* PhD table */}
      <div className="overflow-x-auto rounded-xl border border-[#E5E7EB]">
        <table className="w-full min-w-[560px]">
          <thead>
            <tr style={{ backgroundColor: primary }}>
              {['S.No', 'Name', 'Department', 'Thesis Title', 'Award Date'].map((h) => (
                <th
                  key={h}
                  className="text-left px-5 py-3.5 font-dm-sans font-semibold text-[12px] text-white tracking-wide"
                >
                  {h}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {d.phdAwarded.map((p, i) => (
              <tr key={i} style={{ backgroundColor: i % 2 === 0 ? '#fff' : '#FAFAFA' }}>
                <td className="px-5 py-4 font-dm-sans text-[13px] text-[#9CA3AF]">{i + 1}</td>
                <td className="px-5 py-4 font-dm-sans font-semibold text-[14px]" style={{ color: primary }}>
                  {p.name}
                </td>
                <td className="px-5 py-4 font-dm-sans text-[13px] text-[#374151]">{p.dept}</td>
                <td className="px-5 py-4 font-dm-sans text-[13px] text-[#374151] max-w-[280px] leading-[20px]">
                  <em>{p.thesis}</em>
                </td>
                <td className="px-5 py-4 font-dm-sans font-semibold text-[12px] whitespace-nowrap" style={{ color: accent }}>
                  {p.date}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <InfoCallout>
        GLEC supports faculty pursuing doctoral research by providing study leave, library access, lab facilities, and funding for conference presentations. Faculty interested in pursuing Ph.D. may contact the Research Cell.
      </InfoCallout>
    </>
  );
}

// ── Section registry ──────────────────────────────────────────────────────────

const SECTIONS = [
  { id: 'publications', path: '/research/publications', label: 'Publications',    content: <PublicationsContent /> },
  { id: 'collaborations',path: '/research/collaborations',label: 'Collaborations', content: <CollaborationsContent /> },
  { id: 'facilities',   path: '/research/facilities',   label: 'Facilities',      content: <FacilitiesContent /> },
  { id: 'awards',       path: '/research/awards',       label: 'Research Awards', content: <AwardsContent /> },
  { id: 'phd-awarded',  path: '/research/phd-awarded',  label: 'Ph.D Awarded',   content: <PhdAwardedContent /> },
];

// ── Page component ────────────────────────────────────────────────────────────

export default function ResearchPage() {
  const { section } = useParams();
  const activeId = section || 'publications';
  const currentSection = SECTIONS.find((s) => s.id === activeId);

  if (!currentSection) {
    return <Navigate to="/research/publications" replace />;
  }

  return (
    <AdminSidebarLayout
      college={college}
      pageTitle="Research"
      pageSubtitle="Publications, collaborations, facilities, awards, and doctoral achievements"
      pageBreadcrumb={['Research', currentSection.label]}
      sections={SECTIONS}
      currentSection={currentSection}
    />
  );
}
