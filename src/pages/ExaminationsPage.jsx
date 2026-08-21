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

function DataTable({ members, columns }) {
  return (
    <div className="overflow-x-auto rounded-xl border border-[#E5E7EB]">
      <table className="w-full min-w-[480px]">
        <thead>
          <tr style={{ backgroundColor: primary }}>
            {columns.map((col) => (
              <th key={col.key} className="text-left font-dm-sans font-semibold text-[13px] text-white px-5 py-3.5">
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
                  className="font-dm-sans font-normal text-[14px] px-5 py-3.5"
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

const TYPE_COLORS = {
  Results:     { bg: '#DCFCE7', text: '#15803D' },
  Revaluation: { bg: '#FEF9C3', text: '#A16207' },
  Academic:    { bg: '#DBEAFE', text: '#1D4ED8' },
  Recruitment: { bg: '#F3E8FF', text: '#7C3AED' },
};

// ── Section: Examination Committee ───────────────────────────────────────────

function CommitteeContent() {
  const ec = college.examinationCommittee;
  return (
    <>
      <SectionHeader label="Examinations" title="Examination Committee" />
      <p className="font-dm-sans text-[15px] leading-[27px] text-[#474747] mb-8">
        {ec.description}
      </p>

      <DataTable
        members={ec.members}
        columns={[
          { key: 'name',          label: 'Name',          accent: true },
          { key: 'designation',   label: 'Designation' },
          { key: 'qualification', label: 'Qualification' },
          { key: 'phone',         label: 'Contact' },
        ]}
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10">
        {/* Functions */}
        <div>
          <p className="font-hind font-semibold text-[15px] mb-4" style={{ color: primary }}>
            Key Functions
          </p>
          <ul className="flex flex-col gap-3">
            {ec.functions.map((fn, i) => (
              <li key={i} className="flex items-start gap-3">
                <span className="mt-[7px] w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ backgroundColor: accent }} />
                <span className="font-dm-sans text-[15px] leading-[26px] text-[#474747]">{fn}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact + calendar */}
        <div className="flex flex-col gap-4">
          <div
            className="rounded-xl p-5 flex items-center gap-4"
            style={{ backgroundColor: `${primary}08`, border: `1px solid ${primary}15` }}
          >
            <div
              className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
              style={{ backgroundColor: `${primary}15` }}
            >
              <svg viewBox="0 0 20 20" fill="none" className="w-5 h-5" stroke={primary} strokeWidth="1.5">
                <path d="M3 4h14a1 1 0 011 1v10a1 1 0 01-1 1H3a1 1 0 01-1-1V5a1 1 0 011-1z" strokeLinecap="round" />
                <path d="M2 5l8 6 8-6" strokeLinecap="round" />
              </svg>
            </div>
            <div>
              <p className="font-hind font-semibold text-[14px]" style={{ color: primary }}>
                Exam Branch Email
              </p>
              <a href={`mailto:${ec.email}`} className="font-dm-sans text-[13px] text-[#6B7280] hover:underline">
                {ec.email}
              </a>
            </div>
          </div>
          <a
            href={ec.calendarPdf}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-3 rounded-lg font-dm-sans font-semibold text-[13px] text-white self-start transition-opacity hover:opacity-90"
            style={{ backgroundColor: accent }}
          >
            <svg viewBox="0 0 20 20" fill="none" className="w-4 h-4" stroke="currentColor" strokeWidth="1.5">
              <path d="M10 2v10m0 0l-3-3m3 3l3-3M3 15v2a1 1 0 001 1h12a1 1 0 001-1v-2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            Download Academic Calendar
          </a>
        </div>
      </div>
    </>
  );
}

// ── Section: Notifications ────────────────────────────────────────────────────

function NotificationsContent() {
  const notifications = college.examinationNotifications;
  return (
    <>
      <SectionHeader label="Updates" title="Notifications" />
      <p className="font-dm-sans text-[15px] leading-[27px] text-[#474747] mb-8">
        Stay updated with the latest examination notifications, result announcements, and academic
        circulars from GLEC and Osmania University.
      </p>
      <div className="flex flex-col gap-4">
        {notifications.map((notif, i) => {
          const badge = TYPE_COLORS[notif.type] || { bg: '#F3F4F6', text: '#374151' };
          return (
            <div
              key={i}
              className="flex items-start gap-5 p-5 rounded-xl border bg-white hover:shadow-sm transition-shadow"
              style={{ borderColor: `${primary}18` }}
            >
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 mt-0.5"
                style={{ backgroundColor: `${primary}0F` }}
              >
                <svg viewBox="0 0 20 20" fill="none" className="w-5 h-5" stroke={primary} strokeWidth="1.5">
                  <path d="M9 2h2a1 1 0 011 1v1H8V3a1 1 0 011-1zM5 4h10a1 1 0 011 1v11a1 1 0 01-1 1H5a1 1 0 01-1-1V5a1 1 0 011-1z" strokeLinecap="round" />
                  <path d="M7 9h6M7 12h4" strokeLinecap="round" />
                </svg>
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex flex-wrap items-center gap-2 mb-1">
                  <span
                    className="font-dm-sans font-semibold text-[11px] px-2.5 py-0.5 rounded-full"
                    style={{ backgroundColor: badge.bg, color: badge.text }}
                  >
                    {notif.type}
                  </span>
                  {notif.date && (
                    <span className="font-dm-sans text-[12px] text-[#9CA3AF]">{notif.date}</span>
                  )}
                </div>
                <p className="font-dm-sans font-medium text-[14px] leading-[22px] text-[#111827]">
                  {notif.title}
                </p>
              </div>
              {notif.link && notif.link !== '#' && (
                <a
                  href={notif.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-shrink-0 flex items-center gap-1 font-dm-sans font-semibold text-[12px] mt-1 transition-colors"
                  style={{ color: primary }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = accent)}
                  onMouseLeave={(e) => (e.currentTarget.style.color = primary)}
                >
                  View
                  <svg viewBox="0 0 16 16" fill="none" className="w-3.5 h-3.5" stroke="currentColor" strokeWidth="1.5">
                    <path d="M6 4l4 4-4 4" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </a>
              )}
            </div>
          );
        })}
      </div>
    </>
  );
}

// ── Section: Results ──────────────────────────────────────────────────────────

function ResultsContent() {
  const results = college.examinationNotifications.filter(
    (n) => n.type === 'Results' || n.type === 'Revaluation'
  );
  return (
    <>
      <SectionHeader label="Examinations" title="Results" />
      <p className="font-dm-sans text-[15px] leading-[27px] text-[#474747] mb-8">
        GLEC examination results are hosted on the Osmania University examination portal. Click the
        link below to access semester results and revaluation outcomes.
      </p>

      {/* OU portal card */}
      <div
        className="flex flex-col sm:flex-row items-start gap-6 p-6 rounded-2xl mb-8"
        style={{ backgroundColor: `${primary}08`, border: `1px solid ${primary}15` }}
      >
        <div
          className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
          style={{ backgroundColor: primary }}
        >
          <svg viewBox="0 0 20 20" fill="none" className="w-6 h-6" stroke="white" strokeWidth="1.5">
            <circle cx="10" cy="10" r="8" />
            <path d="M10 6v4l2.5 2.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
        <div className="flex-1">
          <p className="font-hind font-bold text-[16px] mb-1" style={{ color: primary }}>
            Osmania University Examination Results
          </p>
          <p className="font-dm-sans text-[13px] leading-[22px] text-[#6B7280] mb-3">
            All B.E. semester and revaluation results are published on the official Osmania University examination portal.
          </p>
          <a
            href="https://www.osmania.ac.in/examination-results.php"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg font-dm-sans font-semibold text-[13px] text-white transition-opacity hover:opacity-90"
            style={{ backgroundColor: primary }}
          >
            Visit OU Results Portal →
          </a>
        </div>
      </div>

      <p className="font-hind font-semibold text-[15px] mb-4" style={{ color: primary }}>
        Recent Result Announcements
      </p>
      <div className="flex flex-col gap-4">
        {results.map((r, i) => {
          const badge = TYPE_COLORS[r.type] || { bg: '#F3F4F6', text: '#374151' };
          return (
            <div
              key={i}
              className="flex flex-wrap items-center gap-4 p-5 rounded-xl border bg-white"
              style={{ borderColor: `${primary}15` }}
            >
              <span
                className="font-dm-sans font-semibold text-[11px] px-2.5 py-1 rounded-full flex-shrink-0"
                style={{ backgroundColor: badge.bg, color: badge.text }}
              >
                {r.type}
              </span>
              <p className="font-dm-sans font-medium text-[14px] text-[#111827] flex-1">{r.title}</p>
              {r.date && (
                <span className="font-dm-sans text-[12px] text-[#9CA3AF] flex-shrink-0">{r.date}</span>
              )}
              <a
                href={r.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-shrink-0 flex items-center gap-1 font-dm-sans font-semibold text-[12px] transition-colors"
                style={{ color: primary }}
                onMouseEnter={(e) => (e.currentTarget.style.color = accent)}
                onMouseLeave={(e) => (e.currentTarget.style.color = primary)}
              >
                View
                <svg viewBox="0 0 16 16" fill="none" className="w-3.5 h-3.5" stroke="currentColor" strokeWidth="1.5">
                  <path d="M6 4l4 4-4 4" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
            </div>
          );
        })}
      </div>
    </>
  );
}

// ── Section: Online Services ──────────────────────────────────────────────────

function OnlineServicesContent() {
  const services = college.examinationOnlineServices;

  const icons = {
    'Student Support': (c) => (
      <svg viewBox="0 0 20 20" fill="none" className="w-5 h-5" stroke={c} strokeWidth="1.5">
        <path d="M10 10a4 4 0 100-8 4 4 0 000 8zM3 18c0-3.314 3.134-6 7-6s7 2.686 7 6" strokeLinecap="round" />
      </svg>
    ),
    Results: (c) => (
      <svg viewBox="0 0 20 20" fill="none" className="w-5 h-5" stroke={c} strokeWidth="1.5">
        <path d="M9 2h2a1 1 0 011 1v1H8V3a1 1 0 011-1zM5 4h10a1 1 0 011 1v11a1 1 0 01-1 1H5a1 1 0 01-1-1V5a1 1 0 011-1z" strokeLinecap="round" />
        <path d="M7 9h6M7 12h4" strokeLinecap="round" />
      </svg>
    ),
    Contact: (c) => (
      <svg viewBox="0 0 20 20" fill="none" className="w-5 h-5" stroke={c} strokeWidth="1.5">
        <path d="M3 4h14a1 1 0 011 1v10a1 1 0 01-1 1H3a1 1 0 01-1-1V5a1 1 0 011-1z" strokeLinecap="round" />
        <path d="M2 5l8 6 8-6" strokeLinecap="round" />
      </svg>
    ),
    Records: (c) => (
      <svg viewBox="0 0 20 20" fill="none" className="w-5 h-5" stroke={c} strokeWidth="1.5">
        <path d="M4 2h8l4 4v12a1 1 0 01-1 1H4a1 1 0 01-1-1V3a1 1 0 011-1z" strokeLinecap="round" />
        <path d="M12 2v4h4M7 9h6M7 12h6M7 15h4" strokeLinecap="round" />
      </svg>
    ),
    Calendar: (c) => (
      <svg viewBox="0 0 20 20" fill="none" className="w-5 h-5" stroke={c} strokeWidth="1.5">
        <path d="M2.5 7.5h15M6 2v3m8-3v3M3 4.5h14a.5.5 0 01.5.5v12a.5.5 0 01-.5.5H3a.5.5 0 01-.5-.5V5a.5.5 0 01.5-.5z" strokeLinecap="round" />
      </svg>
    ),
  };

  return (
    <>
      <SectionHeader label="Online Services" title="Exam Branch Online Services" />
      <p className="font-dm-sans text-[15px] leading-[27px] text-[#474747] mb-8">
        Access examination-related digital services, portals, and resources through the links below.
        For queries, contact the Exam Branch at{' '}
        <a href="mailto:examglec@gmail.com" className="font-semibold hover:underline" style={{ color: primary }}>
          examglec@gmail.com
        </a>.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {services.map((svc, i) => {
          const Icon = icons[svc.category] || icons['Results'];
          const isExternal = svc.link.startsWith('http') || svc.link.startsWith('mailto');
          return (
            <a
              key={i}
              href={svc.link}
              target={isExternal ? '_blank' : undefined}
              rel={svc.link.startsWith('http') ? 'noopener noreferrer' : undefined}
              className="flex flex-col gap-4 p-6 rounded-2xl border bg-white hover:shadow-md transition-all group"
              style={{ borderColor: `${primary}18` }}
              onMouseEnter={(e) => (e.currentTarget.style.borderColor = `${primary}40`)}
              onMouseLeave={(e) => (e.currentTarget.style.borderColor = `${primary}18`)}
            >
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center"
                style={{ backgroundColor: `${primary}0F` }}
              >
                {Icon(primary)}
              </div>
              <div className="flex flex-col gap-1.5">
                <div className="flex items-center justify-between gap-2">
                  <p className="font-hind font-semibold text-[15px] leading-snug group-hover:underline" style={{ color: primary }}>
                    {svc.title}
                  </p>
                  <svg viewBox="0 0 16 16" fill="none" className="w-4 h-4 flex-shrink-0 opacity-40 group-hover:opacity-80 transition-opacity" stroke={primary} strokeWidth="1.5">
                    <path d="M6 4l4 4-4 4" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <span
                  className="font-dm-sans font-semibold text-[11px] uppercase tracking-wide self-start px-2 py-0.5 rounded"
                  style={{ backgroundColor: `${accent}18`, color: '#7a5a0a' }}
                >
                  {svc.category}
                </span>
                <p className="font-dm-sans text-[13px] leading-[22px] text-[#6B7280]">{svc.desc}</p>
              </div>
            </a>
          );
        })}
      </div>
    </>
  );
}

// ── Section registry ──────────────────────────────────────────────────────────

const SECTIONS = [
  { id: 'committee',      path: '/examinations/committee',      label: 'Examination Committee',       content: <CommitteeContent /> },
  { id: 'notifications',  path: '/examinations/notifications',  label: 'Notifications',               content: <NotificationsContent /> },
  { id: 'results',        path: '/examinations/results',        label: 'Results',                     content: <ResultsContent /> },
  { id: 'online-services',path: '/examinations/online-services',label: 'Exam Branch Online Services', content: <OnlineServicesContent /> },
];

// ── Page component ────────────────────────────────────────────────────────────

export default function ExaminationsPage() {
  const { section } = useParams();
  const activeId = section || 'committee';
  const currentSection = SECTIONS.find((s) => s.id === activeId);

  if (!currentSection) {
    return <Navigate to="/examinations/committee" replace />;
  }

  return (
    <AdminSidebarLayout
      college={college}
      pageTitle="Examinations"
      pageSubtitle="Examination committee, notifications, results, and online services"
      pageBreadcrumb={['Examinations', currentSection.label]}
      sections={SECTIONS}
      currentSection={currentSection}
    />
  );
}
