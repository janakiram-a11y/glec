import { Link, useParams } from 'react-router-dom';
import SiteHeader from '../components/SiteHeader';
import Footer from '../components/Footer';
import AdmissionsCTA from '../components/AdmissionsCTA';
import college from '../theme';

const BellIcon = () => (
  <svg viewBox="0 0 18 18" fill="none" className="w-4 h-4 flex-shrink-0" stroke="currentColor" strokeWidth="1.5">
    <path d="M9 1.5a5.25 5.25 0 015.25 5.25c0 2.625.75 4.5 1.5 5.25H2.25c.75-.75 1.5-2.625 1.5-5.25A5.25 5.25 0 019 1.5z" />
    <path d="M6.75 12v.75a2.25 2.25 0 004.5 0V12" strokeLinecap="round" />
  </svg>
);

const CalendarIcon = () => (
  <svg viewBox="0 0 16 16" fill="none" className="w-3.5 h-3.5" stroke="currentColor" strokeWidth="1.5">
    <rect x="1" y="2.5" width="14" height="12" rx="1.5" />
    <path d="M5 1v3M11 1v3M1 6.5h14" strokeLinecap="round" />
  </svg>
);

const ChevronRight = () => (
  <svg viewBox="0 0 16 16" fill="none" className="w-4 h-4" stroke="currentColor" strokeWidth="1.5">
    <path d="M6 4l4 4-4 4" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export default function DepartmentPage() {
  const { slug } = useParams();
  const dept = college.departments?.find(d => d.slug === slug);

  if (!dept) {
    return (
      <div className="min-h-screen flex flex-col bg-white">
        <SiteHeader college={college} />
        <div className="flex-1 flex items-center justify-center py-32 px-6">
          <div className="text-center">
            <h1 className="font-hind font-bold text-[32px] mb-4" style={{ color: college.primaryColor }}>Department Not Found</h1>
            <Link to="/" className="font-dm-sans text-[15px]" style={{ color: college.primaryColor }}>
              ← Back to Home
            </Link>
          </div>
        </div>
        <Footer college={college} />
      </div>
    );
  }

  const primaryColor = college.primaryColor;
  const accentColor = college.accentColor;

  return (
    <div className="min-h-screen flex flex-col bg-white overflow-x-hidden">
      <SiteHeader college={college} />

      {/* ── Hero Banner ─────────────────────────────────────────────────── */}
      <div className="relative w-full flex flex-col items-center justify-center" style={{ minHeight: 220, background: college.primaryColor }}>
        <img
          src={dept.heroBgImage}
          alt={dept.name}
          className="absolute inset-0 w-full h-full object-cover object-center opacity-25"
        />
        <div className="relative z-10 flex flex-col items-center gap-3 px-6 py-14 text-center">
          <p className="font-dm-sans text-[12px] font-semibold tracking-[0.18em] uppercase text-white/50">
            GLEC &rsaquo; Department
          </p>
          <h1 className="font-hind font-bold text-[36px] md:text-[44px] leading-tight text-white">
            {dept.name}
          </h1>
        </div>
      </div>
      {/* Stats strip */}
      <div
        className="w-full"
        style={{
          backgroundColor: '#F3DAB2',
          borderTop: '1px solid rgba(91,16,39,0.12)',
          borderBottom: '1px solid rgba(91,16,39,0.12)',
        }}
      >
        <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-2 py-3 px-6">
          <span className="font-dm-sans font-semibold text-[13px]" style={{ color: primaryColor }}>
            Est. {dept.established}
          </span>
          <span className="text-[10px]" style={{ color: accentColor }}>●</span>
          <span className="font-dm-sans font-semibold text-[13px]" style={{ color: primaryColor }}>
            {dept.degree} Intake: {dept.ugIntake}
          </span>
          <span className="text-[10px]" style={{ color: accentColor }}>●</span>
          <span className="font-dm-sans font-semibold text-[13px]" style={{ color: primaryColor }}>
            {dept.accreditation}
          </span>
          <span className="text-[10px]" style={{ color: accentColor }}>●</span>
          <span className="font-dm-sans font-semibold text-[13px]" style={{ color: primaryColor }}>
            Osmania University Affiliated
          </span>
        </div>
      </div>

      {/* ── About + Announcements ────────────────────────────────────────── */}
      <div className="w-full bg-white section-pad">
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-14">

          {/* About text */}
          <div className="flex-1 min-w-0">
            <div className="flex flex-col gap-2 mb-6">
              <h2 className="font-hind font-bold text-[24px] leading-tight" style={{ color: primaryColor }}>
                About the Department
              </h2>
              <div className="w-14 h-[3px] rounded-full" style={{ backgroundColor: accentColor }} />
            </div>
            <div className="flex flex-col gap-4">
              {dept.about.map((para, i) => (
                <p key={i} className="font-dm-sans font-normal text-[15px] leading-[27px] text-[#474747]">
                  {para}
                </p>
              ))}
            </div>
          </div>

          {/* Announcements sidebar */}
          <div className="w-full lg:w-[300px] flex-shrink-0">
            <div className="border border-[#E5E7EB] rounded-xl overflow-hidden">
              <div className="flex items-center gap-2 px-5 py-3" style={{ backgroundColor: primaryColor }}>
                <BellIcon />
                <span className="font-hind font-semibold text-[14px] text-white">Announcements</span>
              </div>
              <ul className="divide-y divide-[#F3F4F6]">
                {dept.announcements.map((note, i) => (
                  <li key={i} className="flex items-start gap-3 px-5 py-4 hover:bg-[#FAFAFA] transition-colors cursor-pointer group">
                    <span className="mt-1 w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ backgroundColor: accentColor }} />
                    <span className="font-dm-sans font-normal text-[13px] leading-[22px] text-[#374151] group-hover:text-[#111827] transition-colors">
                      {note}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

        </div>
      </div>

      {/* ── Vision & Mission ─────────────────────────────────────────────── */}
      <div className="w-full">
        <div className="section-pad bg-white">
          <div className="flex flex-col gap-2 mb-8">
            <h2 className="font-hind font-bold text-[24px] leading-tight" style={{ color: primaryColor }}>
              Vision &amp; Mission
            </h2>
            <div className="w-14 h-[3px] rounded-full" style={{ backgroundColor: accentColor }} />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Vision */}
            <div className="rounded-2xl p-8 flex flex-col gap-4" style={{ backgroundColor: '#F6F1F2', border: '1px solid rgba(91,16,39,0.10)' }}>
              <div>
                <span className="font-dm-sans font-semibold text-[11px] tracking-[0.18em] uppercase" style={{ color: 'rgba(91,16,39,0.55)' }}>
                  Our Vision
                </span>
                <h3 className="font-hind font-bold text-[22px] mt-1" style={{ color: primaryColor }}>Vision</h3>
                <div className="w-8 h-0.5 rounded-full mt-2" style={{ backgroundColor: accentColor }} />
              </div>
              <p className="font-dm-sans font-normal text-[14px] leading-[25px]" style={{ color: '#474747' }}>
                {dept.vision}
              </p>
            </div>
            {/* Mission */}
            <div className="rounded-2xl p-8 flex flex-col gap-4" style={{ backgroundColor: primaryColor }}>
              <div>
                <span className="font-dm-sans font-semibold text-[11px] tracking-[0.18em] uppercase text-white/50">
                  Our Mission
                </span>
                <h3 className="font-hind font-bold text-[22px] text-white mt-1">Mission</h3>
                <div className="w-8 h-0.5 rounded-full mt-2" style={{ backgroundColor: accentColor }} />
              </div>
              <ul className="flex flex-col gap-3">
                {dept.mission.map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="mt-[7px] w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ backgroundColor: accentColor }} />
                    <span className="font-dm-sans font-normal text-[14px] leading-[24px] text-white/80">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* ── HOD Profile ─────────────────────────────────────────────────── */}
      {dept.hod && (
        <div className="w-full bg-[#F6F1F2] section-pad">
          <div className="flex flex-col gap-2 mb-8">
            <h2 className="font-hind font-bold text-[24px] leading-tight" style={{ color: primaryColor }}>
              Head of the Department
            </h2>
            <div className="w-14 h-[3px] rounded-full" style={{ backgroundColor: accentColor }} />
          </div>
          <div className="flex flex-col md:flex-row gap-8 items-start p-8 rounded-2xl border border-[#E5E7EB] bg-white">
            <div className="flex-shrink-0">
              <img
                src={dept.hod.image}
                alt={dept.hod.name}
                className="w-[140px] h-[160px] object-cover object-top rounded-xl"
                style={{ boxShadow: '0px 8px 24px -4px rgba(91,17,39,0.12)' }}
                onError={(e) => { e.currentTarget.style.display = 'none'; }}
              />
            </div>
            <div className="flex flex-col gap-4 flex-1">
              <div>
                <h3 className="font-hind font-bold text-[20px] leading-tight" style={{ color: primaryColor }}>
                  {dept.hod.name}
                </h3>
                <p className="font-dm-sans font-semibold text-[13px] mt-1" style={{ color: accentColor }}>
                  {dept.hod.title}
                </p>
              </div>
              {dept.hod.bio.map((para, i) => (
                <p key={i} className="font-dm-sans font-normal text-[14px] leading-[26px] text-[#474747]">
                  {para}
                </p>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* ── Program Educational Objectives ──────────────────────────────── */}
      {dept.peos && dept.peos.length > 0 && (
        <div className="w-full bg-[#F6F1F2] section-pad">
          <div className="flex flex-col gap-2 mb-8">
            <h2 className="font-hind font-bold text-[24px] leading-tight" style={{ color: primaryColor }}>
              Program Educational Objectives
            </h2>
            <div className="w-14 h-[3px] rounded-full" style={{ backgroundColor: accentColor }} />
          </div>
          <ul className="flex flex-col gap-4">
            {dept.peos.map((item, i) => (
              <li key={i} className="flex items-start gap-4 bg-white rounded-xl px-6 py-4 shadow-sm">
                <span className="mt-[6px] w-2 h-2 rounded-full flex-shrink-0" style={{ backgroundColor: accentColor }} />
                <span className="font-dm-sans font-normal text-[15px] leading-[27px] text-[#374151]">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* ── News & Events ────────────────────────────────────────────────── */}
      {dept.news.length > 0 && (
        <div className="w-full bg-[#F6F1F2] section-pad">
          <div className="flex items-center justify-between mb-8">
            <div className="flex flex-col gap-2">
              <h2 className="font-hind font-bold text-[24px] leading-tight" style={{ color: primaryColor }}>
                News &amp; Events
              </h2>
              <div className="w-14 h-[3px] rounded-full" style={{ backgroundColor: accentColor }} />
            </div>
            <button
              className="font-dm-sans font-semibold text-[13px] px-5 py-2.5 rounded-lg text-white transition-colors"
              style={{ backgroundColor: primaryColor }}
            >
              View All
            </button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {dept.news.map((item, i) => (
              <div key={i} className="bg-white rounded-xl p-6 flex flex-col gap-3 hover:shadow-md transition-shadow">
                <div className="flex items-center gap-2 text-[#9CA3AF]">
                  <CalendarIcon />
                  <span className="font-dm-sans text-[12px]">{item.date}</span>
                </div>
                <div className="w-full h-[2px] rounded-full" style={{ backgroundColor: primaryColor, opacity: 0.15 }} />
                <h4 className="font-hind font-semibold text-[15px] leading-tight text-[#111827]">{item.title}</h4>
                <p className="font-dm-sans font-normal text-[13px] leading-[22px] text-[#6B7280] flex-1">{item.desc}</p>
                <button className="flex items-center gap-1 font-dm-sans font-semibold text-[13px] mt-1 self-start transition-colors"
                  style={{ color: primaryColor }}>
                  Read More <ChevronRight />
                </button>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* ── Notable Placed Alumni ────────────────────────────────────────── */}
      {dept.alumni.length > 0 && (
        <div className="w-full bg-white section-pad">
          <div className="flex flex-col gap-2 mb-8">
            <h2 className="font-hind font-bold text-[24px] leading-tight" style={{ color: primaryColor }}>
              Notable Placed Alumni
            </h2>
            <div className="w-14 h-[3px] rounded-full" style={{ backgroundColor: accentColor }} />
          </div>
          <div className="overflow-x-auto rounded-xl border border-[#E5E7EB]">
            <table className="w-full min-w-[560px]">
              <thead>
                <tr style={{ backgroundColor: primaryColor }}>
                  <th className="text-left font-dm-sans font-semibold text-[13px] text-white px-6 py-4">Name</th>
                  <th className="text-left font-dm-sans font-semibold text-[13px] text-white px-6 py-4">Role</th>
                  <th className="text-left font-dm-sans font-semibold text-[13px] text-white px-6 py-4">Company</th>
                </tr>
              </thead>
              <tbody>
                {dept.alumni.map((person, i) => (
                  <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-[#FAFAFA]'}>
                    <td className="font-dm-sans font-normal text-[14px] text-[#374151] px-6 py-4">{person.name}</td>
                    <td className="font-dm-sans font-normal text-[14px] text-[#374151] px-6 py-4">{person.role}</td>
                    <td className="font-dm-sans font-semibold text-[14px] px-6 py-4" style={{ color: primaryColor }}>{person.company}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* ── Faculty ─────────────────────────────────────────────────────── */}
      {dept.faculty && dept.faculty.length > 0 && (
        <div className="w-full bg-white section-pad">
          <div className="flex flex-col gap-2 mb-8">
            <h2 className="font-hind font-bold text-[24px] leading-tight" style={{ color: primaryColor }}>
              Faculty
            </h2>
            <div className="w-14 h-[3px] rounded-full" style={{ backgroundColor: accentColor }} />
          </div>
          <div className="overflow-x-auto rounded-xl border border-[#E5E7EB]">
            <table className="w-full" style={{ minWidth: 700 }}>
              <thead>
                <tr style={{ backgroundColor: primaryColor }}>
                  {['S.No.', 'Staff ID', 'Name', 'Designation', 'Qualification', 'Date of Joining', 'Email'].map(h => (
                    <th key={h} className="text-left font-dm-sans font-semibold text-[12px] text-white px-4 py-3 whitespace-nowrap">{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {dept.faculty.map((f, i) => (
                  <tr key={i} style={{ backgroundColor: i % 2 === 0 ? '#fff' : '#FAFAFA' }}>
                    <td className="px-4 py-3 font-dm-sans text-[13px] text-[#374151]">{i + 1}</td>
                    <td className="px-4 py-3 font-dm-sans text-[13px] text-[#374151] whitespace-nowrap">{f.id ?? '—'}</td>
                    <td className="px-4 py-3 font-dm-sans font-semibold text-[13px] whitespace-nowrap" style={{ color: primaryColor }}>{f.name}</td>
                    <td className="px-4 py-3 font-dm-sans text-[13px] text-[#374151]">{f.designation}</td>
                    <td className="px-4 py-3 font-dm-sans text-[13px] text-[#374151]">{f.qualification ?? '—'}</td>
                    <td className="px-4 py-3 font-dm-sans text-[13px] text-[#374151] whitespace-nowrap">{f.doj ?? '—'}</td>
                    <td className="px-4 py-3 font-dm-sans text-[13px] text-[#374151]">{f.email ?? '—'}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* ── Department at a Glance ───────────────────────────────────────── */}
      <div className="w-full section-pad" style={{ backgroundColor: '#5B1027' }}>
        <div className="flex flex-col items-center gap-2 mb-10 text-center">
          <p className="font-dm-sans font-semibold text-[11px] tracking-[0.2em] uppercase" style={{ color: '#F3DAB2' }}>
            Department at a Glance
          </p>
          <h2 className="font-hind font-bold text-[28px] text-white">
            {dept.shortName} – Key Achievements
          </h2>
          <div className="w-12 h-0.5 rounded-full mt-1" style={{ backgroundColor: accentColor }} />
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
          {dept.achievements.map((item, i) => (
            <div
              key={i}
              className="rounded-2xl p-6 flex flex-col gap-2 border border-white/10"
              style={{ backgroundColor: 'rgba(255,255,255,0.08)' }}
            >
              <span className="font-hind font-bold text-[36px] leading-none" style={{ color: '#F3DAB2' }}>
                {item.count}
              </span>
              <span className="font-hind font-semibold text-[15px] text-white leading-tight">{item.label}</span>
              <p className="font-dm-sans font-normal text-[12px] leading-[18px] text-white/60">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* ── Facilities & Opportunities ───────────────────────────────────── */}
      <div className="w-full section-pad" style={{ backgroundColor: '#F6F1F2' }}>
        <div className="flex flex-col items-center gap-2 mb-10 text-center">
          <p className="font-dm-sans font-semibold text-[11px] tracking-[0.2em] uppercase" style={{ color: accentColor }}>
            What We Offer
          </p>
          <h2 className="font-hind font-bold text-[28px]" style={{ color: accentColor }}>
            Facilities &amp; Opportunities
          </h2>
          <div className="w-12 h-0.5 rounded-full mt-1" style={{ backgroundColor: accentColor }} />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {dept.facilities.map((item, i) => (
            <div
              key={i}
              className="rounded-2xl p-8 flex flex-col gap-4 bg-white"
              style={{ border: '1px solid rgba(91,16,39,0.12)', boxShadow: '0px 4px 12px rgba(0,0,0,0.06)' }}
            >
              <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                style={{ backgroundColor: `${accentColor}15` }}>
                <svg viewBox="0 0 20 20" fill="none" className="w-5 h-5" stroke={accentColor} strokeWidth="1.5">
                  <path d="M10 2l2 5h5l-4 3 1.5 5L10 12l-4.5 3L7 10 3 7h5L10 2z" strokeLinejoin="round" />
                </svg>
              </div>
              <div>
                <h4 className="font-hind font-semibold text-[16px] mb-2" style={{ color: primaryColor }}>{item.title}</h4>
                <p className="font-dm-sans font-normal text-[13px] leading-[22px]" style={{ color: '#474747' }}>{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <AdmissionsCTA college={college} />
      <Footer college={college} />
    </div>
  );
}
