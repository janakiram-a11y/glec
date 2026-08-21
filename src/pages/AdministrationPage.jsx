import { useParams, Navigate } from 'react-router-dom';
import college from '../theme';
import AdminSidebarLayout from '../components/AdminSidebarLayout';

// ── Shared primitive sub-components ──────────────────────────────────────────

function SectionHeader({ label, title }) {
  return (
    <div className="flex flex-col gap-2 mb-8">
      {label && (
        <span
          className="font-dm-sans font-semibold text-[11px] tracking-[0.2em] uppercase"
          style={{ color: `${college.primaryColor}80` }}
        >
          {label}
        </span>
      )}
      <h2
        className="font-hind font-bold text-[26px] leading-tight"
        style={{ color: college.primaryColor }}
      >
        {title}
      </h2>
      <div className="w-14 h-[3px] rounded-full" style={{ backgroundColor: college.accentColor }} />
    </div>
  );
}

function SectionDesc({ text }) {
  return (
    <p className="font-dm-sans font-normal text-[15px] leading-[27px] text-[#474747] mb-8">
      {text}
    </p>
  );
}

function ObjectivesList({ items }) {
  return (
    <ul className="flex flex-col gap-3">
      {items.map((item, i) => (
        <li key={i} className="flex items-start gap-3">
          <span
            className="mt-[7px] w-1.5 h-1.5 rounded-full flex-shrink-0"
            style={{ backgroundColor: college.accentColor }}
          />
          <span className="font-dm-sans font-normal text-[15px] leading-[26px] text-[#474747]">
            {item}
          </span>
        </li>
      ))}
    </ul>
  );
}

function CommitteeTable({ members, columns }) {
  return (
    <div className="overflow-x-auto rounded-xl border border-[#E5E7EB]">
      <table className="w-full min-w-[480px]">
        <thead>
          <tr style={{ backgroundColor: college.primaryColor }}>
            {columns.map((col) => (
              <th
                key={col.key}
                className="text-left font-dm-sans font-semibold text-[13px] text-white px-5 py-3.5"
              >
                {col.label}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {members.map((m, i) => (
            <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-[#FAFAFA]'}>
              {columns.map((col) => (
                <td
                  key={col.key}
                  className="font-dm-sans font-normal text-[14px] text-[#374151] px-5 py-3.5"
                  style={col.accent ? { color: college.primaryColor, fontWeight: 600 } : {}}
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

function DownloadButton({ href, label }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg font-dm-sans font-semibold text-[13px] text-white transition-colors self-start"
      style={{ backgroundColor: college.accentColor }}
      onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#a81b2a')}
      onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = college.accentColor)}
    >
      <svg viewBox="0 0 20 20" fill="none" className="w-4 h-4" stroke="currentColor" strokeWidth="1.5">
        <path d="M10 2v10m0 0l-3-3m3 3l3-3M3 15v2a1 1 0 001 1h12a1 1 0 001-1v-2"
          strokeLinecap="round" strokeLinejoin="round" />
      </svg>
      {label}
    </a>
  );
}

// ── Section content components ────────────────────────────────────────────────

function ManagementContent() {
  return (
    <>
      <SectionHeader label="Leadership" title="Management" />
      <p className="font-dm-sans font-normal text-[15px] leading-[27px] text-[#474747] mb-10">
        GLEC is led by a distinguished management team under the Gokaraju Rangaraju Educational Society,
        comprising visionary industrialists, academic leaders, and experienced administrators committed to
        delivering world-class engineering education.
      </p>
      <div className="flex flex-col gap-6">
        {college.leadership.map((person) => (
          <div
            key={person.name}
            className="rounded-2xl border border-[#E5E7EB] bg-white overflow-hidden"
          >
            {/* Role label bar */}
            <div
              className="px-6 py-3 flex items-center gap-3"
              style={{ backgroundColor: `${college.primaryColor}08`, borderBottom: `1px solid ${college.primaryColor}18` }}
            >
              <span
                className="w-[3px] h-5 rounded-full flex-shrink-0"
                style={{ backgroundColor: college.primaryColor }}
              />
              <span
                className="font-dm-sans font-bold text-[12px] uppercase tracking-[0.18em]"
                style={{ color: college.primaryColor }}
              >
                {person.title}
              </span>
            </div>

            {/* Profile body */}
            <div className="flex flex-col sm:flex-row gap-8 p-8">
              {/* Left — circular image + name/title */}
              <div className="flex flex-col items-center gap-3 sm:w-[160px] flex-shrink-0">
                <img
                  src={person.image}
                  alt={person.name}
                  className="w-[130px] h-[130px] rounded-full object-cover object-top"
                  style={{ boxShadow: `0 4px 16px -4px ${college.primaryColor}33` }}
                  onError={(e) => { e.currentTarget.style.display = 'none'; }}
                />
                <div className="text-center">
                  <p className="font-hind font-bold text-[15px] leading-snug" style={{ color: college.primaryColor }}>
                    {person.name}
                  </p>
                  <p className="font-dm-sans text-[12px] mt-0.5 text-[#9CA3AF]">{person.title}</p>
                </div>
              </div>

              {/* Right — bio */}
              <div className="flex-1">
                <p className="font-dm-sans font-normal text-[14px] leading-[26px] text-[#374151] text-justify">
                  {person.bio}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

function SponsoringBodyContent() {
  const sb = college.sponsoringBody;
  return (
    <>
      <SectionHeader label="Administration" title="Sponsoring Body & MOAG" />
      <SectionDesc text={sb.description} />
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-10">
        <div>
          <p className="font-hind font-semibold text-[15px] mb-4" style={{ color: college.primaryColor }}>
            Society Objectives
          </p>
          <ObjectivesList items={sb.objectives} />
        </div>
        <div
          className="rounded-2xl p-6 flex flex-col gap-3"
          style={{ backgroundColor: `${college.primaryColor}08`, border: `1px solid ${college.primaryColor}15` }}
        >
          <p className="font-hind font-bold text-[15px]" style={{ color: college.primaryColor }}>
            {sb.societyName}
          </p>
          <p className="font-dm-sans font-normal text-[13px] leading-[22px] text-[#6B7280]">
            {sb.address}
          </p>
        </div>
      </div>
      <p className="font-hind font-semibold text-[15px] mb-4" style={{ color: college.primaryColor }}>
        Executive Committee Members
      </p>
      <CommitteeTable
        members={sb.members}
        columns={[
          { key: 'role', label: 'Designation', accent: true },
          { key: 'name', label: 'Name' },
        ]}
      />
    </>
  );
}

function GoverningBodyContent() {
  const gb = college.governingBody;
  return (
    <>
      <SectionHeader label={`Academic Year ${gb.year}`} title="Governing Body" />
      <p className="font-dm-sans font-normal text-[15px] leading-[27px] text-[#474747] mb-8">
        The Governing Body of GLEC is the apex decision-making authority responsible for academic,
        administrative, and financial oversight of the institution, comprising representatives from the
        sponsoring society, university nominees, faculty, and industry experts.
      </p>
      <CommitteeTable
        members={gb.members}
        columns={[
          { key: 'no', label: 'S.No.' },
          { key: 'name', label: 'Name', accent: true },
          { key: 'role', label: 'Role' },
          { key: 'category', label: 'Category' },
          { key: 'email', label: 'Email' },
        ]}
      />
    </>
  );
}

function RegistrarContent() {
  const r = college.registrar;
  return (
    <>
      <SectionHeader label="Administration" title="Registrar" />
      <div className="flex flex-col md:flex-row gap-8 items-start p-8 rounded-2xl border border-[#E5E7EB] bg-white">
        <div className="flex-shrink-0">
          <img
            src={r.image}
            alt={r.name}
            className="w-[160px] h-[180px] object-cover object-top rounded-xl"
            style={{ boxShadow: '0px 8px 24px -4px rgba(91,17,39,0.12)' }}
            onError={(e) => { e.currentTarget.style.display = 'none'; }}
          />
        </div>
        <div className="flex flex-col gap-5 flex-1">
          <div>
            <h3 className="font-hind font-bold text-[22px] leading-tight" style={{ color: college.primaryColor }}>
              {r.fullName}
            </h3>
            <p className="font-dm-sans font-semibold text-[14px] mt-1" style={{ color: college.accentColor }}>
              {r.title}
            </p>
          </div>
          {r.bio.map((para, i) => (
            <p key={i} className="font-dm-sans font-normal text-[14px] leading-[26px] text-[#474747]">
              {para}
            </p>
          ))}
          <div>
            <p className="font-hind font-semibold text-[13px] mb-3" style={{ color: college.primaryColor }}>
              Qualifications
            </p>
            <ObjectivesList items={r.qualifications} />
          </div>
        </div>
      </div>
    </>
  );
}

function PrincipalContent() {
  const pp = college.principalProfile;
  return (
    <>
      <SectionHeader label="Academic Leadership" title="Principal" />
      <div className="flex flex-col md:flex-row gap-8 items-start p-8 rounded-2xl border border-[#E5E7EB] bg-white">
        <div className="flex-shrink-0">
          <img
            src={pp.image}
            alt={pp.name}
            className="w-[160px] h-[180px] object-cover object-top rounded-xl"
            style={{ boxShadow: '0px 8px 24px -4px rgba(91,17,39,0.12)' }}
            onError={(e) => { e.currentTarget.style.display = 'none'; }}
          />
        </div>
        <div className="flex flex-col gap-5 flex-1">
          <div>
            <h3 className="font-hind font-bold text-[22px] leading-tight" style={{ color: college.primaryColor }}>
              {pp.fullName}
            </h3>
            <p className="font-dm-sans font-semibold text-[14px] mt-1" style={{ color: college.accentColor }}>
              {pp.title}
            </p>
            <span
              className="inline-flex mt-2 items-center px-3 py-1 rounded-full text-[12px] font-dm-sans font-semibold"
              style={{ backgroundColor: `${college.primaryColor}0F`, color: college.primaryColor }}
            >
              {pp.experience}
            </span>
          </div>
          {pp.bio.map((para, i) => (
            <p key={i} className="font-dm-sans font-normal text-[14px] leading-[26px] text-[#474747]">
              {para}
            </p>
          ))}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <p className="font-hind font-semibold text-[13px] mb-3" style={{ color: college.primaryColor }}>
                Qualifications
              </p>
              <ObjectivesList items={pp.qualifications} />
            </div>
            <div>
              <p className="font-hind font-semibold text-[13px] mb-3" style={{ color: college.primaryColor }}>
                Research Interests
              </p>
              <ObjectivesList items={pp.researchInterests} />
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <p className="font-hind font-semibold text-[13px] mb-3" style={{ color: college.primaryColor }}>
                Administrative Roles
              </p>
              <ObjectivesList items={pp.roles} />
            </div>
            <div>
              <p className="font-hind font-semibold text-[13px] mb-3" style={{ color: college.primaryColor }}>
                Patents
              </p>
              <ObjectivesList items={pp.patents} />
            </div>
          </div>
          <div className="flex items-center gap-4 flex-wrap">
            <div
              className="px-4 py-2 rounded-lg text-[13px] font-dm-sans font-semibold"
              style={{ backgroundColor: `${college.accentColor}18`, color: '#7a5a0a' }}
            >
              {pp.publications}
            </div>
            {pp.memberships.map((m) => (
              <div
                key={m}
                className="px-4 py-2 rounded-lg text-[13px] font-dm-sans font-semibold"
                style={{ backgroundColor: `${college.primaryColor}0F`, color: college.primaryColor }}
              >
                {m} Member
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

function IdPlanContent() {
  const idp = college.idPlan;
  return (
    <>
      <SectionHeader label="Strategic Planning" title={idp.title} />
      <SectionDesc text={idp.description} />
      <div
        className="rounded-2xl p-6 flex flex-col gap-4 mb-10"
        style={{ backgroundColor: `${college.primaryColor}08`, border: `1px solid ${college.primaryColor}15` }}
      >
        <p className="font-hind font-bold text-[20px]" style={{ color: college.primaryColor }}>
          {idp.subtitle}
        </p>
        <p className="font-dm-sans font-normal text-[13px] leading-[22px] text-[#6B7280]">
          Strategic plan covering academic, infrastructure, research, and administrative development for 2021–2026.
        </p>
        <DownloadButton href={idp.pdfLink} label="Download IDP 2021–26" />
      </div>
      <p className="font-hind font-semibold text-[15px] mb-4" style={{ color: college.primaryColor }}>
        IDP Core Committee
      </p>
      <CommitteeTable
        members={idp.committee}
        columns={[
          { key: 'name', label: 'Name', accent: true },
          { key: 'designation', label: 'Designation' },
          { key: 'role', label: 'Role in IDP' },
        ]}
      />
    </>
  );
}

function AntiRaggingContent() {
  const ar = college.antiRagging;
  return (
    <>
      <SectionHeader label="Student Safety" title="Anti Ragging Committee" />
      <SectionDesc text={ar.description} />
      <CommitteeTable
        members={ar.members}
        columns={[
          { key: 'name', label: 'Name', accent: true },
          { key: 'designation', label: 'Designation' },
          { key: 'phone', label: 'Contact' },
        ]}
      />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10">
        <div>
          <p className="font-hind font-semibold text-[15px] mb-4" style={{ color: college.primaryColor }}>
            Preventive Measures
          </p>
          <ObjectivesList items={ar.measures} />
        </div>
        <div>
          <p className="font-hind font-semibold text-[15px] mb-4" style={{ color: college.primaryColor }}>
            Emergency Helplines
          </p>
          <div className="flex flex-col gap-3">
            {ar.helplines.map((h, i) => (
              <div
                key={i}
                className="flex items-center justify-between px-5 py-3 rounded-xl border"
                style={{ borderColor: `${college.primaryColor}20`, backgroundColor: `${college.primaryColor}06` }}
              >
                <span className="font-dm-sans font-medium text-[13px] text-[#374151]">{h.label}</span>
                <a
                  href={`tel:${h.number}`}
                  className="font-hind font-bold text-[16px]"
                  style={{ color: college.primaryColor }}
                >
                  {h.number}
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

function AntiSexualHarassmentContent() {
  const ash = college.antiSexualHarassment;
  return (
    <>
      <SectionHeader label="Student Safety" title="Anti Sexual Harassment Committee" />
      <SectionDesc text={ash.description} />
      <CommitteeTable
        members={ash.members}
        columns={[
          { key: 'sno', label: 'S.No.' },
          { key: 'name', label: 'Name', accent: true },
          { key: 'designation', label: 'Designation' },
          { key: 'phone', label: 'Contact' },
        ]}
      />
      <div className="mt-10">
        <p className="font-hind font-semibold text-[15px] mb-4" style={{ color: college.primaryColor }}>
          Committee Functions
        </p>
        <ObjectivesList items={ash.functions} />
      </div>
    </>
  );
}

function GrievanceContent() {
  const g = college.grievance;
  return (
    <>
      <SectionHeader label="Student Support" title="Grievance Redressal Policy" />
      <SectionDesc text={g.description} />
      <CommitteeTable
        members={g.members}
        columns={[
          { key: 'name', label: 'Name', accent: true },
          { key: 'designation', label: 'Designation' },
          { key: 'role', label: 'Role' },
        ]}
      />
      <div className="mt-10">
        <p className="font-hind font-semibold text-[15px] mb-6" style={{ color: college.primaryColor }}>
          How to Submit a Grievance
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
          {g.process.map((step, i) => (
            <div
              key={i}
              className="flex flex-col gap-2 p-5 rounded-xl border"
              style={{ borderColor: `${college.primaryColor}18` }}
            >
              <div
                className="w-8 h-8 rounded-lg flex items-center justify-center font-hind font-bold text-[14px] text-white flex-shrink-0"
                style={{ backgroundColor: college.primaryColor }}
              >
                {i + 1}
              </div>
              <p className="font-hind font-semibold text-[14px]" style={{ color: college.primaryColor }}>
                {step.label}
              </p>
              <p className="font-dm-sans font-normal text-[13px] leading-[22px] text-[#6B7280]">
                {step.desc}
              </p>
            </div>
          ))}
        </div>
        <a
          href={g.formUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-lg font-dm-sans font-semibold text-[14px] text-white transition-colors"
          style={{ backgroundColor: college.accentColor }}
          onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#a81b2a')}
          onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = college.accentColor)}
        >
          Submit Online Grievance →
        </a>
      </div>
    </>
  );
}

function SegdContent() {
  const s = college.segd;
  return (
    <>
      <SectionHeader label="Inclusive Education" title={s.shortName} />
      <p className="font-dm-sans font-normal text-[15px] leading-[27px] text-[#474747] mb-2">
        <span className="font-semibold" style={{ color: college.primaryColor }}>Full Name: </span>
        {s.fullName}
      </p>
      <SectionDesc text={s.description} />
      <CommitteeTable
        members={s.members}
        columns={[
          { key: 'name', label: 'Name', accent: true },
          { key: 'designation', label: 'Designation' },
          { key: 'role', label: 'Role' },
        ]}
      />
      <div className="mt-10">
        <p className="font-hind font-semibold text-[15px] mb-4" style={{ color: college.primaryColor }}>
          Cell Objectives
        </p>
        <ObjectivesList items={s.objectives} />
      </div>
    </>
  );
}

function FinanceContent() {
  const fc = college.financeCommittee;
  return (
    <>
      <SectionHeader label={`Academic Year ${fc.year}`} title="Finance Committee" />
      <SectionDesc text={fc.description} />
      <CommitteeTable
        members={fc.members}
        columns={[
          { key: 'name', label: 'Name', accent: true },
          { key: 'designation', label: 'Designation' },
          { key: 'role', label: 'Role' },
        ]}
      />
    </>
  );
}

function EqualOpportunityContent() {
  const eoc = college.equalOpportunityCell;
  return (
    <>
      <SectionHeader label="Inclusive Campus" title="Equal Opportunity Cell" />
      <SectionDesc text={eoc.description} />
      <CommitteeTable
        members={eoc.members}
        columns={[
          { key: 'name', label: 'Name', accent: true },
          { key: 'designation', label: 'Designation' },
          { key: 'role', label: 'Role' },
        ]}
      />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10">
        <div>
          <p className="font-hind font-semibold text-[15px] mb-4" style={{ color: college.primaryColor }}>
            Objectives
          </p>
          <ObjectivesList items={eoc.objectives} />
        </div>
        <div>
          <p className="font-hind font-semibold text-[15px] mb-4" style={{ color: college.primaryColor }}>
            Activities
          </p>
          <ObjectivesList items={eoc.activities} />
        </div>
      </div>
    </>
  );
}

function IccContent() {
  const icc = college.icc;
  return (
    <>
      <SectionHeader label="Complaints & Safety" title={icc.fullName} />
      <SectionDesc text={icc.description} />
      <CommitteeTable
        members={icc.members}
        columns={[
          { key: 'name', label: 'Name', accent: true },
          { key: 'designation', label: 'Designation' },
          { key: 'role', label: 'Role' },
          { key: 'phone', label: 'Contact' },
        ]}
      />
      <div className="mt-10">
        <p className="font-hind font-semibold text-[15px] mb-4" style={{ color: college.primaryColor }}>
          Committee Objectives
        </p>
        <ObjectivesList items={icc.objectives} />
      </div>
    </>
  );
}

// ── Section registry — single source of truth for all admin sections ──────────

const SECTIONS = [
  {
    id: 'management',
    path: '/administration/management',
    label: 'Management',
    content: <ManagementContent />,
  },
  {
    id: 'sponsoring-body',
    path: '/administration/sponsoring-body',
    label: 'Sponsoring Body & MOAG',
    content: <SponsoringBodyContent />,
  },
  {
    id: 'governing-body',
    path: '/administration/governing-body',
    label: 'Governing Body',
    content: <GoverningBodyContent />,
  },
  {
    id: 'registrar',
    path: '/administration/registrar',
    label: 'Registrar',
    sidebar: false,
    content: <RegistrarContent />,
  },
  {
    id: 'principal',
    path: '/administration/principal',
    label: 'Principal',
    sidebar: false,
    content: <PrincipalContent />,
  },
  {
    id: 'id-plan',
    path: '/administration/id-plan',
    label: 'ID Plan',
    content: <IdPlanContent />,
  },
  {
    id: 'anti-ragging',
    path: '/administration/anti-ragging',
    label: 'Anti Ragging Committee',
    content: <AntiRaggingContent />,
  },
  {
    id: 'anti-harassment',
    path: '/administration/anti-harassment',
    label: 'Anti Sexual Harassment',
    content: <AntiSexualHarassmentContent />,
  },
  {
    id: 'grievance',
    path: '/administration/grievance',
    label: 'Grievance Redressal',
    content: <GrievanceContent />,
  },
  {
    id: 'segd',
    path: '/administration/segd',
    label: 'SEGD Cell',
    content: <SegdContent />,
  },
  {
    id: 'finance',
    path: '/administration/finance',
    label: 'Finance Committee',
    content: <FinanceContent />,
  },
  {
    id: 'equal-opportunity',
    path: '/administration/equal-opportunity',
    label: 'Equal Opportunity Cell',
    content: <EqualOpportunityContent />,
  },
  {
    id: 'icc',
    path: '/administration/icc',
    label: 'ICC',
    content: <IccContent />,
  },
];

// ── Page component ────────────────────────────────────────────────────────────

export default function AdministrationPage() {
  const { section } = useParams();

  // /administration (no section) → default to management
  const activeId = section || 'management';

  // Find current section
  const currentSection = SECTIONS.find((s) => s.id === activeId);

  // Unknown section → redirect to management
  if (!currentSection) {
    return <Navigate to="/administration/management" replace />;
  }

  return (
    <AdminSidebarLayout
      college={college}
      pageTitle="Administration"
      pageSubtitle="Governance, leadership, and institutional committees at GLEC"
      pageBreadcrumb={['Administration', currentSection.label]}
      sections={SECTIONS}
      currentSection={currentSection}
    />
  );
}
