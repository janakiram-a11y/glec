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

// ── Section: Academics Overview ───────────────────────────────────────────────

function OverviewContent() {
  return (
    <>
      <SectionHeader label="Academics" title="Academics" />
      <p className="font-dm-sans text-[15px] leading-[27px] text-[#474747] mb-6">
        The departments of the GLEC are responsible for the academic activities which include Teaching,
        Research and Industrial Consultancy. The courses of study are organized on semester basis. The
        medium of instruction is English.
      </p>
      <p className="font-dm-sans text-[15px] leading-[27px] text-[#474747] mb-6">
        Students are evaluated on a continuous basis each academic year, which consists of two semesters
        with each semester providing a minimum of seventeen weeks of instructions. Evaluation comprises of
        Continuous Internal Evaluation (CIE) and Semester End Examination (SEE). The rigours of academic
        study at each level are balanced with a number of other related activities which include
        co-curricular activities.
      </p>
      <p className="font-dm-sans text-[15px] leading-[27px] text-[#474747] mb-6">
        Special lectures on varied topics of academic relevance are held under the Extra Mural Lecture
        series. A number of conferences, symposia, and workshops are organized by the faculty, which
        attract participation from scholars from all corners of India and abroad. Guest lectures and
        industrial visits complement classroom interactions.
      </p>
      <p className="font-dm-sans text-[15px] leading-[27px] text-[#474747]">
        The academic atmosphere at the Institute is a rare blend of modern-day technical skills and the
        traditional emphasis on imparting knowledge. All the academic activities at the institute are
        monitored by the Principal and HODs' Academic Affairs, and can be viewed through the academic
        calendar, time tables of individual programmes, examination schedules, and yearly college diary.
      </p>
    </>
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
      <p className="font-dm-sans text-[15px] leading-[27px] text-[#474747] mb-8">
        {college.academicCollaborationsIntro}
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {collabs.map((collab, i) => (
          <div
            key={i}
            className="flex items-center gap-3 p-5 rounded-xl border bg-white"
            style={{ borderColor: `${primary}18` }}
          >
            <div
              className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0"
              style={{ backgroundColor: `${primary}0F` }}
            >
              <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5" stroke={primary} strokeWidth="1.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
              </svg>
            </div>
            <h3 className="font-hind font-semibold text-[16px]" style={{ color: primary }}>
              {collab.name}
            </h3>
          </div>
        ))}
      </div>
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
          { key: 'category',    label: 'Category' },
          { key: 'role',        label: 'Role in IQAC' },
        ]}
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10">
        {[
          { title: 'Primary Aims',    items: iqac.aims },
          { title: 'Key Functions',   items: iqac.functions },
          { title: 'Strategic Focus', items: iqac.strategicFocus },
          { title: 'Benefits',        items: iqac.benefits },
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
      <p className="font-dm-sans text-[15px] leading-[27px] text-[#474747] mb-4">
        {lib.description}
      </p>
      <p className="font-dm-sans text-[15px] leading-[27px] text-[#474747] mb-8">
        {lib.description2}
      </p>

      {/* Stats row */}
      <SubHeading>Availability of Particulars</SubHeading>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 mb-4">
        {lib.stats.map((s) => (
          <div
            key={s.label}
            className="rounded-xl p-4 text-center"
            style={{ backgroundColor: `${primary}07`, border: `1px solid ${primary}14` }}
          >
            <p className="font-hind font-bold text-[22px]" style={{ color: primary }}>{s.value}</p>
            <p className="font-dm-sans text-[11px] text-[#6B7280] mt-1 leading-tight">{s.label}</p>
            {s.required && (
              <p className="font-dm-sans text-[10px] text-[#9CA3AF] mt-0.5 leading-tight">{s.required}</p>
            )}
          </div>
        ))}
      </div>
    </>
  );
}

// ── Section: Rules & Regulations ─────────────────────────────────────────────

function RulesContent() {
  return (
    <>
      <SectionHeader label="Academic Policy" title="Rules & Regulations" />
      <p className="font-dm-sans text-[15px] leading-[27px] text-[#474747] mb-8">
        As per Osmania University guidelines, the following are the Rules and Regulations prescribed for
        the Gokaraju Lailavathi Engineering College. In this regard, Osmania University is the competent
        authority to amend the rules from time to time.
      </p>

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
          href="/downloads/academics/be-rules-regulations-2020.pdf"
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
  return (
    <>
      <SectionHeader label="Academic Schedule" title="Academic Calendar" />

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
    </>
  );
}

// ── Section registry ──────────────────────────────────────────────────────────

const SECTIONS = [
  { id: 'overview',         path: '/academics/overview',         label: 'Academics',              content: <OverviewContent /> },
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
  const activeId = section || 'overview';
  const currentSection = SECTIONS.find((s) => s.id === activeId);

  if (!currentSection) {
    return <Navigate to="/academics/overview" replace />;
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
