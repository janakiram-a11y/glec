import { useParams, Navigate } from 'react-router-dom';
import college from '../theme';
import AdminSidebarLayout from '../components/AdminSidebarLayout';

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

function BulletList({ items, small }) {
  return (
    <ul className="flex flex-col gap-3">
      {items.map((item, i) => (
        <li key={i} className="flex items-start gap-3">
          <span
            className="mt-[7px] w-1.5 h-1.5 rounded-full flex-shrink-0"
            style={{ backgroundColor: accent }}
          />
          <span
            className={`font-dm-sans font-normal leading-[26px] text-[#474747] ${
              small ? 'text-[13px] leading-[22px]' : 'text-[15px]'
            }`}
          >
            {item}
          </span>
        </li>
      ))}
    </ul>
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

function SubHeading({ children }) {
  return (
    <h3 className="font-hind font-semibold text-[17px] mb-5 mt-8 first:mt-0" style={{ color: primary }}>
      {children}
    </h3>
  );
}

function DataTable({ members, columns }) {
  return (
    <div className="overflow-x-auto rounded-xl border border-[#E5E7EB]">
      <table className="w-full min-w-[480px]">
        <thead>
          <tr style={{ backgroundColor: primary }}>
            {columns.map((col) => (
              <th
                key={col.key}
                className="text-left font-dm-sans font-semibold text-[12px] text-white px-5 py-3.5 tracking-wide"
              >
                {col.label}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {members.map((m, i) => (
            <tr key={i} style={{ backgroundColor: i % 2 === 0 ? '#fff' : '#FAFAFA' }}>
              {columns.map((col) => (
                <td
                  key={col.key}
                  className="font-dm-sans text-[14px] px-5 py-3.5"
                  style={col.accent ? { color: primary, fontWeight: 600 } : { color: '#374151' }}
                >
                  {m[col.key] ?? '—'}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

// ── Section: Academic Leadership ─────────────────────────────────────────────

function LeadershipContent() {
  const { academicLeadershipCommittee: alc } = college;
  return (
    <>
      <SectionHeader label={`Academic Year ${alc.year}`} title="Academic Leadership" />
      <p className="font-dm-sans text-[15px] leading-[27px] text-[#474747] mb-8">
        {alc.description}
      </p>

      <DataTable
        members={alc.members}
        columns={[
          { key: 'sno',         label: 'S.No' },
          { key: 'name',        label: 'Name', accent: true },
          { key: 'designation', label: 'Designation' },
          { key: 'role',        label: 'Role' },
        ]}
      />

      <div className="mt-10">
        <SubHeading>Key Responsibilities</SubHeading>
        <BulletList items={alc.responsibilities} />
      </div>
    </>
  );
}

// ── Section: Academic Collaborations ─────────────────────────────────────────

function CollaborationsContent() {
  const collabs = college.academicCollaborations;
  return (
    <>
      <SectionHeader label="Partnerships & MOUs" title="Academic Collaborations" />
      <p className="font-dm-sans text-[15px] leading-[27px] text-[#474747] mb-10">
        GLEC has forged strategic academic and industry collaborations through formal Memoranda of
        Understanding (MOUs) to enhance student learning, placement outcomes, and research engagement.
        These partnerships connect students with leading organisations across technology, education, and
        the social sector.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {collabs.map((collab, i) => (
          <div
            key={i}
            className="flex flex-col gap-4 p-6 rounded-2xl border bg-white hover:shadow-md transition-shadow"
            style={{ borderColor: `${primary}18` }}
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <h3 className="font-hind font-bold text-[18px] leading-snug" style={{ color: primary }}>
                  {collab.name}
                </h3>
                <span
                  className="inline-flex mt-1.5 px-3 py-1 rounded-full font-dm-sans font-semibold text-[11px] uppercase tracking-wide"
                  style={{ backgroundColor: `${accent}20`, color: '#7a5a0a' }}
                >
                  {collab.type}
                </span>
              </div>
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                style={{ backgroundColor: `${primary}0F` }}
              >
                <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5" stroke={primary} strokeWidth="1.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                </svg>
              </div>
            </div>
            <p className="font-dm-sans text-[14px] leading-[24px] text-[#6B7280]">{collab.desc}</p>
          </div>
        ))}
      </div>

      <InfoCallout>
        A Memorandum of Understanding (MOU) is a formal agreement between two or more parties signalling
        willingness to move forward with a collaborative arrangement. GLEC actively pursues MOUs that
        benefit students through internships, skill development, and placement opportunities.
      </InfoCallout>
    </>
  );
}

// ── Section: IQAC ─────────────────────────────────────────────────────────────

function IqacContent() {
  const iqac = college.iqac;
  return (
    <>
      <SectionHeader label={`Academic Year ${iqac.year}`} title="Internal Quality Assurance Cell (IQAC)" />
      <p className="font-dm-sans text-[15px] leading-[27px] text-[#474747] mb-8">
        {iqac.description}
      </p>

      <DataTable
        members={iqac.members}
        columns={[
          { key: 'name',        label: 'Name', accent: true },
          { key: 'designation', label: 'Designation' },
          { key: 'role',        label: 'Role in IQAC' },
        ]}
      />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10">
        {[
          { title: 'Primary Aims',    items: iqac.aims },
          { title: 'Key Functions',   items: iqac.functions },
          { title: 'Strategic Focus', items: iqac.strategicFocus },
        ].map(({ title, items }) => (
          <div key={title}>
            <p className="font-hind font-semibold text-[14px] mb-4" style={{ color: primary }}>
              {title}
            </p>
            <BulletList items={items} small />
          </div>
        ))}
      </div>
    </>
  );
}

// ── Section: Library ──────────────────────────────────────────────────────────

function LibraryContent() {
  const lib = college.library;
  return (
    <>
      <SectionHeader label="Knowledge Resources" title="Central Library" />
      <p className="font-dm-sans text-[15px] leading-[27px] text-[#474747] mb-8">
        {lib.description}
      </p>

      {/* Stats row */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 mb-10">
        {lib.stats.map((s) => (
          <div
            key={s.label}
            className="rounded-xl p-4 text-center"
            style={{ backgroundColor: `${primary}07`, border: `1px solid ${primary}14` }}
          >
            <p className="font-hind font-bold text-[22px]" style={{ color: primary }}>{s.value}</p>
            <p className="font-dm-sans text-[11px] text-[#6B7280] mt-1 leading-tight">{s.label}</p>
          </div>
        ))}
      </div>

      {/* Facilities cards */}
      <SubHeading>Facilities & Resources</SubHeading>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-10">
        {lib.facilities.map((f, i) => (
          <div
            key={i}
            className="flex gap-4 p-5 rounded-xl border"
            style={{ borderColor: `${primary}14` }}
          >
            <div
              className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0 font-hind font-bold text-[12px]"
              style={{ backgroundColor: `${primary}12`, color: primary }}
            >
              {String(i + 1).padStart(2, '0')}
            </div>
            <div>
              <p className="font-hind font-semibold text-[14px] mb-1" style={{ color: primary }}>
                {f.title}
              </p>
              <p className="font-dm-sans text-[13px] leading-[22px] text-[#6B7280]">{f.desc}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Hours + Contact */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
        <div className="rounded-xl p-5" style={{ backgroundColor: `${primary}08`, border: `1px solid ${primary}14` }}>
          <p className="font-dm-sans font-semibold text-[11px] uppercase tracking-widest mb-1" style={{ color: `${primary}70` }}>
            Working Hours
          </p>
          <p className="font-hind font-semibold text-[15px]" style={{ color: primary }}>{lib.hours}</p>
        </div>
        <div className="rounded-xl p-5" style={{ backgroundColor: `${primary}08`, border: `1px solid ${primary}14` }}>
          <p className="font-dm-sans font-semibold text-[11px] uppercase tracking-widest mb-1" style={{ color: `${primary}70` }}>
            Library Contact
          </p>
          <a href={`mailto:${lib.contact}`} className="font-hind font-semibold text-[15px] hover:underline" style={{ color: primary }}>
            {lib.contact}
          </a>
        </div>
      </div>

      {/* Library Rules */}
      <SubHeading>Library Rules</SubHeading>
      <BulletList items={lib.rules} />
    </>
  );
}

// ── Section: Rules & Regulations ─────────────────────────────────────────────

function RulesContent() {
  const rules = [
    { title: 'Attendance Policy', desc: 'Students must maintain a minimum of 75% attendance in each subject. Those with less than 75% are not eligible to appear in end-semester examinations without prior condonation approval.' },
    { title: 'Dress Code', desc: 'Students must wear the prescribed college uniform on all working days and during examinations. ID cards must be worn visibly within the campus at all times.' },
    { title: 'Academic Conduct', desc: 'Malpractice during sessional or end-semester examinations is treated as a serious offence, resulting in disciplinary action as per Osmania University and AICTE guidelines.' },
    { title: 'Campus Behaviour', desc: 'Students must maintain decorum within the campus premises. Ragging, harassment, or any form of anti-social behaviour will attract strict disciplinary action including expulsion.' },
    { title: 'Mobile Phones', desc: 'Use of mobile phones is strictly prohibited in classrooms, laboratories, and examination halls during academic hours. Violations may lead to confiscation and fine.' },
    { title: 'Library Usage', desc: 'Library books must be returned within 14 days. Late returns attract a fine of ₹2 per day per book. Reference books, journals, and periodicals must not be taken out of the library.' },
    { title: 'Laboratory Conduct', desc: 'Students must wear lab coats in chemistry and other applicable laboratories. Equipment must be handled with care and any damage reported immediately to the lab instructor.' },
    { title: 'Fee Payment', desc: 'Tuition and special fees must be paid by the due dates notified each semester. Late payment attracts a penalty as per institutional rules.' },
  ];

  return (
    <>
      <SectionHeader label="Academic Policy" title="Rules & Regulations" />
      <p className="font-dm-sans text-[15px] leading-[27px] text-[#474747] mb-8">
        As per Osmania University guidelines, the following rules and regulations are prescribed for all
        students of Gokaraju Lailavathi Engineering College. These norms govern academic conduct,
        discipline, and campus behaviour across all B.E. programmes.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-8">
        {rules.map((rule, i) => (
          <div
            key={i}
            className="flex gap-4 p-5 rounded-xl border"
            style={{ borderColor: `${primary}18` }}
          >
            <div
              className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 font-hind font-bold text-[13px] text-white"
              style={{ backgroundColor: primary }}
            >
              {i + 1}
            </div>
            <div>
              <p className="font-hind font-semibold text-[14px] mb-1" style={{ color: primary }}>
                {rule.title}
              </p>
              <p className="font-dm-sans text-[13px] leading-[22px] text-[#6B7280]">{rule.desc}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Download PDF */}
      <div
        className="rounded-2xl p-6 flex flex-col sm:flex-row sm:items-center gap-4"
        style={{ backgroundColor: `${primary}07`, border: `1px solid ${primary}14` }}
      >
        <div className="flex-1">
          <p className="font-hind font-semibold text-[16px] mb-1" style={{ color: primary }}>
            B.E. Rules & Regulations — Official Document
          </p>
          <p className="font-dm-sans text-[13px] text-[#6B7280]">
            Download the complete official Rules & Regulations document as per Osmania University norms (2020).
          </p>
        </div>
        <a
          href="https://www.glwec.in/downloads/BE_Rules_Regulations_2020.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg font-dm-sans font-semibold text-[13px] text-white transition-opacity hover:opacity-90 flex-shrink-0"
          style={{ backgroundColor: accent }}
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v12m0 0l-4-4m4 4l4-4M3 17v2a2 2 0 002 2h14a2 2 0 002-2v-2" />
          </svg>
          Download PDF
        </a>
      </div>
    </>
  );
}

// ── Section: Academic Calendar ────────────────────────────────────────────────

function CalendarContent() {
  const keyDates = [
    { event: 'Commencement of Classes — B.E. I Year 2025–26', date: '28 Aug 2025' },
    { event: 'I Sessional Examinations',                       date: 'Sep – Oct 2025' },
    { event: 'II Sessional Examinations',                      date: 'Nov 2025' },
    { event: 'End Semester Examinations',                      date: 'Dec 2025 – Jan 2026' },
    { event: 'Winter Vacation',                                date: 'Dec 2025' },
    { event: 'Commencement of II Semester',                    date: 'Jan 2026' },
    { event: 'III Sessional Examinations',                     date: 'Feb – Mar 2026' },
    { event: 'II End Semester Examinations',                   date: 'Apr – May 2026' },
  ];

  return (
    <>
      <SectionHeader label="Academic Schedule" title="Academic Calendar" />
      <p className="font-dm-sans text-[15px] leading-[27px] text-[#474747] mb-8">
        The Academic Calendar for GLEC is prepared in alignment with the Osmania University almanac and
        AICTE norms. It outlines semester schedules, examination dates, holidays, and key academic events
        for the academic year.
      </p>

      {/* Download card */}
      <div
        className="rounded-2xl p-7 flex flex-col sm:flex-row sm:items-center gap-5 mb-10"
        style={{ background: `linear-gradient(135deg, ${primary} 0%, #3a0b1a 100%)` }}
      >
        <div className="flex-1">
          <p className="font-dm-sans font-semibold text-[11px] tracking-[0.2em] uppercase text-white/60 mb-1">
            Download
          </p>
          <p className="font-hind font-bold text-[22px] text-white mb-1">
            Academic Calendar 2025–26
          </p>
          <p className="font-dm-sans text-[13px] text-white/70">
            Official calendar with semester schedules, examination timetables, and important institutional dates.
          </p>
        </div>
        <a
          href={college.examinationCommittee.calendarPdf}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-dm-sans font-semibold text-[14px] transition-opacity hover:opacity-90 flex-shrink-0"
          style={{ backgroundColor: accent, color: '#fff' }}
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v12m0 0l-4-4m4 4l4-4M3 17v2a2 2 0 002 2h14a2 2 0 002-2v-2" />
          </svg>
          Download PDF
        </a>
      </div>

      {/* Key dates */}
      <SubHeading>Key Academic Dates 2025–26</SubHeading>
      <div className="flex flex-col gap-0 rounded-xl overflow-hidden border border-[#E5E7EB]">
        {keyDates.map((item, i) => (
          <div
            key={i}
            className="flex items-center justify-between gap-4 px-5 py-4 border-b last:border-0"
            style={{
              backgroundColor: i % 2 === 0 ? '#fff' : '#FAFAFA',
              borderColor: '#F3F4F6',
            }}
          >
            <span className="font-dm-sans font-normal text-[14px] text-[#374151]">{item.event}</span>
            <span
              className="font-dm-sans font-semibold text-[12px] flex-shrink-0 px-3 py-1 rounded-full"
              style={{ backgroundColor: `${accent}18`, color: '#7a5a0a' }}
            >
              {item.date}
            </span>
          </div>
        ))}
      </div>

      <InfoCallout>
        Academic calendar dates are subject to revision as per Osmania University notifications or government orders. Students are advised to check the official college notice board and website for updates.
      </InfoCallout>
    </>
  );
}

// ── Section registry ──────────────────────────────────────────────────────────

const SECTIONS = [
  { id: 'leadership',       path: '/academics/leadership',       label: 'Academic Leadership',    content: <LeadershipContent /> },
  { id: 'collaborations',   path: '/academics/collaborations',   label: 'Academic Collaborations', content: <CollaborationsContent /> },
  { id: 'iqac',             path: '/academics/iqac',             label: 'IQAC',                   content: <IqacContent /> },
  { id: 'library',          path: '/academics/library',          label: 'Library',                content: <LibraryContent /> },
  { id: 'rules',            path: '/academics/rules',            label: 'Rules & Regulations',    content: <RulesContent /> },
  { id: 'calendar',         path: '/academics/calendar',         label: 'Academic Calendar',      content: <CalendarContent /> },
];

// ── Page component ────────────────────────────────────────────────────────────

export default function AcademicsPage() {
  const { section } = useParams();
  const activeId = section || 'leadership';
  const currentSection = SECTIONS.find((s) => s.id === activeId);

  if (!currentSection) {
    return <Navigate to="/academics/leadership" replace />;
  }

  return (
    <AdminSidebarLayout
      college={college}
      pageTitle="Academics"
      pageSubtitle="Academic leadership, quality assurance, collaborations, and institutional resources"
      pageBreadcrumb={['Academics', currentSection.label]}
      sections={SECTIONS}
      currentSection={currentSection}
    />
  );
}
