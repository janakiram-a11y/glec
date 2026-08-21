import { useParams, Navigate } from 'react-router-dom';
import college from '../theme';
import AdminSidebarLayout from '../components/AdminSidebarLayout';

const { admissions: d } = college;
const primary = college.primaryColor;
const accent = college.accentColor;

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

function BulletList({ items }) {
  return (
    <ul className="flex flex-col gap-3">
      {items.map((item, i) => (
        <li key={i} className="flex items-start gap-3">
          <span className="mt-[7px] w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ backgroundColor: accent }} />
          <span className="font-dm-sans font-normal text-[15px] leading-[26px] text-[#474747]">
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
    <h3
      className="font-hind font-semibold text-[17px] mb-5 mt-8 first:mt-0"
      style={{ color: primary }}
    >
      {children}
    </h3>
  );
}

// ── Section content components ────────────────────────────────────────────────

function OverviewContent() {
  const { overview } = d;
  return (
    <>
      <SectionHeader label="Admissions 2025–26" title="Admissions Overview" />
      <p className="font-dm-sans text-[15px] leading-[27px] text-[#474747] mb-10">
        {overview.intro}
      </p>

      {/* Key Facts */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-10">
        {overview.keyFacts.map((f) => (
          <div
            key={f.label}
            className="rounded-xl p-5"
            style={{ backgroundColor: `${primary}06`, border: `1px solid ${primary}14` }}
          >
            <p className="font-dm-sans font-semibold text-[11px] tracking-[0.18em] uppercase mb-1" style={{ color: `${primary}70` }}>
              {f.label}
            </p>
            <p className="font-hind font-bold text-[16px]" style={{ color: primary }}>
              {f.value}
            </p>
          </div>
        ))}
      </div>

      {/* Highlight Banner */}
      <div
        className="rounded-2xl p-7 flex flex-col sm:flex-row items-start sm:items-center gap-5"
        style={{ background: `linear-gradient(135deg, ${primary} 0%, #3a0b1a 100%)` }}
      >
        <div className="flex-1">
          <p className="font-dm-sans font-semibold text-[11px] tracking-[0.2em] uppercase text-white/60 mb-1">
            Counselling Code
          </p>
          <p className="font-hind font-bold text-[40px] leading-none text-white tracking-widest mb-1">
            {overview.counsellingCode}
          </p>
          <p className="font-dm-sans text-[14px] text-white/70">
            {overview.exam} Counselling · Select <span className="font-semibold text-white">Boys &amp; Girls</span>
          </p>
        </div>
        <a
          href="https://tgeapcet.nic.in/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg font-dm-sans font-semibold text-[13px] flex-shrink-0 transition-opacity hover:opacity-90"
          style={{ backgroundColor: accent, color: '#fff' }}
        >
          Counselling Portal
          <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
          </svg>
        </a>
      </div>

      <InfoCallout>
        GLEC converted from a women-only institution to full co-education from 2024–25. During TG EAPCET counselling, candidates must select <strong>Boys &amp; Girls</strong> in the gender preference to be eligible for GLEC.
      </InfoCallout>
    </>
  );
}

function ProgramsContent() {
  return (
    <>
      <SectionHeader label="Seat Intake" title="Programs Offered" />
      <p className="font-dm-sans text-[15px] leading-[27px] text-[#474747] mb-8">
        GLEC offers AICTE-approved B.E. programmes affiliated to Osmania University, Hyderabad. All programmes follow a four-year curriculum with outcome-based education.
      </p>

      <div className="overflow-x-auto rounded-xl border border-[#E5E7EB]">
        <table className="w-full min-w-[560px]">
          <thead>
            <tr style={{ backgroundColor: primary }}>
              {['Programme', 'Code', 'Duration', 'Seat Intake', 'Affiliation'].map((h) => (
                <th key={h} className="text-left px-5 py-3.5 font-dm-sans font-semibold text-[12px] text-white tracking-wide">
                  {h}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {d.programs.map((p, i) => (
              <tr key={p.code} style={{ backgroundColor: i % 2 === 0 ? '#fff' : '#FAFAFA' }}>
                <td className="px-5 py-4 font-dm-sans font-semibold text-[14px]" style={{ color: primary }}>
                  {p.name}
                </td>
                <td className="px-5 py-4 font-dm-sans font-medium text-[13px] text-[#374151]">{p.code}</td>
                <td className="px-5 py-4 font-dm-sans text-[13px] text-[#374151]">{p.duration}</td>
                <td className="px-5 py-4 font-hind font-bold text-[16px]" style={{ color: accent }}>
                  {p.intake ?? '—'}
                </td>
                <td className="px-5 py-4 font-dm-sans text-[13px] text-[#374151]">{p.affiliation}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <InfoCallout>
        70% of seats are filled through TG EAPCET merit counselling and 30% under Management / NRI quota. Seat intake is subject to AICTE and university approval for each academic year.
      </InfoCallout>
    </>
  );
}

function ProcedureContent() {
  const { eapcet, management } = d.procedure;

  function StepList({ steps }) {
    return (
      <div className="flex flex-col gap-0">
        {steps.map((s, i) => (
          <div key={i} className="flex gap-5">
            {/* Connector */}
            <div className="flex flex-col items-center">
              <div
                className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 font-hind font-bold text-[13px] text-white"
                style={{ backgroundColor: primary }}
              >
                {s.step}
              </div>
              {i < steps.length - 1 && (
                <div className="w-px flex-1 my-1" style={{ backgroundColor: `${primary}20` }} />
              )}
            </div>
            <div className={`pb-7 ${i === steps.length - 1 ? '' : ''}`}>
              <p className="font-hind font-semibold text-[15px] mb-1" style={{ color: primary }}>
                {s.title}
              </p>
              <p className="font-dm-sans text-[14px] leading-[24px] text-[#4B5563]">{s.desc}</p>
            </div>
          </div>
        ))}
      </div>
    );
  }

  return (
    <>
      <SectionHeader label="How to Apply" title="Admission Procedure" />

      <SubHeading>{eapcet ? 'TG EAPCET Counselling — 70% Seats (Merit Category)' : ''}</SubHeading>
      <StepList steps={eapcet} />

      <div className="my-8 border-t" style={{ borderColor: `${primary}15` }} />

      <SubHeading>Management Quota — 30% Seats</SubHeading>
      <StepList steps={management} />

      <InfoCallout>
        For TG ECET (Lateral Entry) candidates: apply through TSCHE ECET counselling. Lateral entry admits join the 2nd year B.E. directly, subject to seat availability.
      </InfoCallout>
    </>
  );
}

function EligibilityContent() {
  return (
    <>
      <SectionHeader label="Requirements" title="Eligibility Criteria" />

      <SubHeading>B.E. First Year (10+2 / Intermediate Pass)</SubHeading>
      <BulletList items={d.eligibility.ug} />

      <div className="my-8 border-t" style={{ borderColor: `${primary}15` }} />

      <SubHeading>Lateral Entry — B.E. Second Year (Diploma Holders)</SubHeading>
      <BulletList items={d.eligibility.lateral} />

      <InfoCallout>
        Reservation of seats for various categories (SC/ST/BC/EBC/Women/PH) is as per the Telangana State government norms and TSCHE counselling rules.
      </InfoCallout>
    </>
  );
}

function FeeStructureContent() {
  const { batches, note } = d.feeStructure;
  return (
    <>
      <SectionHeader label="TSFRC Regulated" title="Fee Structure" />
      <InfoCallout>{note}</InfoCallout>

      {batches.map((batch) => (
        <div key={batch.label} className="mt-8">
          <p className="font-hind font-semibold text-[15px] mb-4" style={{ color: primary }}>
            {batch.label}
          </p>
          <div className="overflow-x-auto rounded-xl border border-[#E5E7EB]">
            <table className="w-full min-w-[460px]">
              <thead>
                <tr style={{ backgroundColor: primary }}>
                  {['Academic Year', 'Tuition Fee', 'Special Fee', 'Total Fee'].map((h) => (
                    <th key={h} className="text-left px-5 py-3.5 font-dm-sans font-semibold text-[12px] text-white tracking-wide">
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {batch.rows.map((r, i) => (
                  <tr key={r.year} style={{ backgroundColor: i % 2 === 0 ? '#fff' : '#FAFAFA' }}>
                    <td className="px-5 py-4 font-dm-sans font-medium text-[14px] text-[#374151]">{r.year}</td>
                    <td className="px-5 py-4 font-dm-sans text-[14px] text-[#374151]">₹{r.tuition.toLocaleString('en-IN')}</td>
                    <td className="px-5 py-4 font-dm-sans text-[14px] text-[#374151]">₹{r.special.toLocaleString('en-IN')}</td>
                    <td className="px-5 py-4 font-hind font-bold text-[15px]" style={{ color: primary }}>
                      ₹{r.total.toLocaleString('en-IN')}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      ))}
    </>
  );
}

function EapcetRanksContent() {
  const { year, departments } = d.eapcetRanks;
  return (
    <>
      <SectionHeader label={`TG EAPCET ${year} — First & Last Ranks`} title="EAPCET Cutoff Ranks" />
      <p className="font-dm-sans text-[15px] leading-[27px] text-[#474747] mb-8">
        The table below shows the first and last ranks admitted in {year} counselling for each category. Use this to estimate your chances of admission.
      </p>

      {departments.map((dept) => (
        <div key={dept.name} className="mb-10">
          <p className="font-hind font-semibold text-[15px] mb-4" style={{ color: primary }}>
            {dept.name}
          </p>
          <div className="overflow-x-auto rounded-xl border border-[#E5E7EB]">
            <table className="w-full min-w-[640px]">
              <thead>
                <tr style={{ backgroundColor: primary }}>
                  <th className="text-left px-4 py-3.5 font-dm-sans font-semibold text-[12px] text-white tracking-wide">Category</th>
                  <th className="text-center px-4 py-3.5 font-dm-sans font-semibold text-[12px] text-white tracking-wide" colSpan={2}>Boys</th>
                  <th className="text-center px-4 py-3.5 font-dm-sans font-semibold text-[12px] text-white tracking-wide" colSpan={2}>Girls</th>
                </tr>
                <tr style={{ backgroundColor: `${primary}CC` }}>
                  <th className="px-4 py-2" />
                  {['First', 'Last', 'First', 'Last'].map((l, i) => (
                    <th key={i} className="text-center px-4 py-2 font-dm-sans font-medium text-[11px] text-white/80 tracking-wide">{l} Rank</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {dept.data.map((row, i) => (
                  <tr key={row.category} style={{ backgroundColor: i % 2 === 0 ? '#fff' : '#FAFAFA' }}>
                    <td className="px-4 py-3.5 font-dm-sans font-semibold text-[13px]" style={{ color: primary }}>{row.category}</td>
                    {[row.boysFirst, row.boysLast, row.girlsFirst, row.girlsLast].map((v, j) => (
                      <td key={j} className="text-center px-4 py-3.5 font-dm-sans text-[13px] text-[#374151]">
                        {v != null ? v.toLocaleString('en-IN') : <span className="text-[#9CA3AF]">NA</span>}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      ))}

      <InfoCallout>
        Ranks shown are for TG EAPCET {year} counselling (Phase 1 & 2 combined). Cutoffs vary each year based on the number of qualified candidates and seat availability.
      </InfoCallout>
    </>
  );
}

function DocumentsContent() {
  return (
    <>
      <SectionHeader label="At the Time of Reporting" title="Required Documents" />
      <p className="font-dm-sans text-[15px] leading-[27px] text-[#474747] mb-8">
        Candidates must bring originals along with two sets of self-attested photocopies of all documents listed below when reporting to GLEC for admission.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {d.documents.map((doc, i) => (
          <div
            key={i}
            className="flex items-start gap-4 rounded-xl p-5"
            style={{ border: `1px solid ${primary}14`, backgroundColor: `${primary}04` }}
          >
            <div
              className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0 font-hind font-bold text-[13px]"
              style={{ backgroundColor: `${primary}12`, color: primary }}
            >
              {String(i + 1).padStart(2, '0')}
            </div>
            <div>
              <p className="font-hind font-semibold text-[14px] mb-1" style={{ color: primary }}>
                {doc.title}
              </p>
              <p className="font-dm-sans text-[13px] leading-[22px] text-[#6B7280]">{doc.desc}</p>
            </div>
          </div>
        ))}
      </div>

      <InfoCallout>
        Original certificates will be returned after verification. GLEC retains originals only as per Osmania University and TSCHE regulations. Students are advised to keep additional photocopies for personal records.
      </InfoCallout>
    </>
  );
}

function ScholarshipsContent() {
  return (
    <>
      <SectionHeader label="Financial Assistance" title="Scholarships" />
      <p className="font-dm-sans text-[15px] leading-[27px] text-[#474747] mb-8">
        Several government and institutional scholarships are available to eligible GLEC students. The college actively assists students in applying for and availing scholarship benefits.
      </p>

      <div className="flex flex-col gap-5">
        {d.scholarships.map((s, i) => (
          <div
            key={i}
            className="rounded-xl p-6"
            style={{ border: `1px solid ${primary}14`, backgroundColor: '#fff' }}
          >
            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-3">
              <div>
                <p className="font-hind font-bold text-[16px]" style={{ color: primary }}>
                  {s.name}
                </p>
                <p className="font-dm-sans font-medium text-[12px] mt-0.5" style={{ color: accent }}>
                  {s.provider}
                </p>
              </div>
              {s.link && (
                <a
                  href={s.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-lg font-dm-sans font-semibold text-[12px] flex-shrink-0 transition-opacity hover:opacity-80"
                  style={{ backgroundColor: `${primary}10`, color: primary }}
                >
                  Apply / Info
                  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              )}
            </div>
            <p className="font-dm-sans text-[14px] leading-[24px] text-[#4B5563]">{s.desc}</p>
          </div>
        ))}
      </div>

      <InfoCallout>
        Students must apply for scholarships online through the respective portals (ePASS / NSP) within the notified deadlines. The college examination and accounts sections assist with documentation.
      </InfoCallout>
    </>
  );
}

function HostelTransportContent() {
  const { hostel, transport } = d.hostelTransport;
  return (
    <>
      <SectionHeader label="Campus Living" title="Hostel & Transport" />

      {/* Hostel */}
      <SubHeading>Hostel Facilities</SubHeading>
      <p className="font-dm-sans text-[15px] leading-[27px] text-[#474747] mb-6">{hostel.desc}</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
        {hostel.features.map((f, i) => (
          <div key={i} className="flex items-start gap-3">
            <span className="mt-[7px] w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ backgroundColor: accent }} />
            <span className="font-dm-sans text-[14px] leading-[24px] text-[#474747]">{f}</span>
          </div>
        ))}
      </div>
      <div
        className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg font-dm-sans font-semibold text-[13px]"
        style={{ backgroundColor: `${primary}08`, color: primary }}
      >
        <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
        </svg>
        Hostel Enquiry: {hostel.contact}
      </div>

      <div className="my-8 border-t" style={{ borderColor: `${primary}15` }} />

      {/* Transport */}
      <SubHeading>Transport Routes</SubHeading>
      <p className="font-dm-sans text-[15px] leading-[27px] text-[#474747] mb-6">{transport.desc}</p>
      <div className="flex flex-col gap-3 mb-6">
        {transport.routes.map((route, i) => (
          <div
            key={i}
            className="flex items-center gap-4 px-5 py-3.5 rounded-xl"
            style={{ backgroundColor: `${primary}06`, border: `1px solid ${primary}12` }}
          >
            <span
              className="w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0 font-hind font-bold text-[11px] text-white"
              style={{ backgroundColor: primary }}
            >
              {i + 1}
            </span>
            <span className="font-dm-sans font-medium text-[14px] text-[#374151]">{route}</span>
          </div>
        ))}
      </div>
      <InfoCallout>{transport.note}</InfoCallout>
    </>
  );
}

function NotificationsContent() {
  const typeColors = {
    Admissions:  { bg: '#EFF6FF', text: '#1D4ED8' },
    Counselling: { bg: '#F0FDF4', text: '#15803D' },
    Academic:    { bg: '#FFFBEB', text: '#B45309' },
    Procedure:   { bg: '#FDF4FF', text: '#7E22CE' },
    Notice:      { bg: '#FFF1F2', text: '#BE123C' },
  };

  return (
    <>
      <SectionHeader label="Latest Updates" title="Admission Notifications" />
      <div className="flex flex-col gap-4">
        {d.notifications.map((n, i) => {
          const c = typeColors[n.type] || { bg: '#F9FAFB', text: '#374151' };
          return (
            <div
              key={i}
              className="flex flex-col sm:flex-row sm:items-center gap-4 rounded-xl p-5"
              style={{ border: `1px solid ${primary}12`, backgroundColor: '#fff' }}
            >
              <div className="flex-1">
                <div className="flex flex-wrap items-center gap-2 mb-1.5">
                  <span
                    className="inline-block px-2.5 py-0.5 rounded-full font-dm-sans font-semibold text-[10px] tracking-wide"
                    style={{ backgroundColor: c.bg, color: c.text }}
                  >
                    {n.type}
                  </span>
                  {n.date && (
                    <span className="font-dm-sans text-[12px] text-[#9CA3AF]">{n.date}</span>
                  )}
                </div>
                <p className="font-dm-sans font-semibold text-[14px] text-[#1F2937]">{n.title}</p>
              </div>
              {n.link && n.link !== '#' && (
                <a
                  href={n.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg font-dm-sans font-semibold text-[12px] flex-shrink-0 transition-opacity hover:opacity-80"
                  style={{ backgroundColor: `${primary}10`, color: primary }}
                >
                  View / Download
                  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
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

function FeeRefundContent() {
  const { desc, cases, processingTime, contact } = d.feeRefund;
  return (
    <>
      <SectionHeader label="Policy" title="Fee Refund Policy" />
      <p className="font-dm-sans text-[15px] leading-[27px] text-[#474747] mb-8">{desc}</p>

      <div className="flex flex-col gap-5">
        {cases.map((c, i) => (
          <div
            key={i}
            className="rounded-xl p-6"
            style={{ border: `1px solid ${primary}14`, backgroundColor: `${primary}04` }}
          >
            <p className="font-hind font-semibold text-[15px] mb-2" style={{ color: primary }}>
              {c.title}
            </p>
            <p className="font-dm-sans text-[14px] leading-[24px] text-[#4B5563]">{c.desc}</p>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
        <div className="rounded-xl p-5" style={{ backgroundColor: `${primary}08`, border: `1px solid ${primary}14` }}>
          <p className="font-dm-sans font-semibold text-[11px] uppercase tracking-widest mb-1" style={{ color: `${primary}70` }}>
            Processing Time
          </p>
          <p className="font-hind font-bold text-[20px]" style={{ color: primary }}>{processingTime}</p>
        </div>
        <div className="rounded-xl p-5" style={{ backgroundColor: `${primary}08`, border: `1px solid ${primary}14` }}>
          <p className="font-dm-sans font-semibold text-[11px] uppercase tracking-widest mb-1" style={{ color: `${primary}70` }}>
            Contact for Queries
          </p>
          <a
            href={`mailto:${contact}`}
            className="font-hind font-bold text-[16px] hover:underline"
            style={{ color: primary }}
          >
            {contact}
          </a>
        </div>
      </div>
    </>
  );
}

function FaqsContent() {
  return (
    <>
      <SectionHeader label="Common Questions" title="Frequently Asked Questions" />
      <div className="flex flex-col gap-4">
        {d.faqs.map((faq, i) => (
          <details
            key={i}
            className="group rounded-xl overflow-hidden"
            style={{ border: `1px solid ${primary}14` }}
          >
            <summary
              className="flex items-center justify-between px-6 py-4 cursor-pointer list-none"
              style={{ backgroundColor: `${primary}06` }}
            >
              <span className="font-dm-sans font-semibold text-[14px] pr-4" style={{ color: primary }}>
                {faq.q}
              </span>
              <span
                className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 transition-transform duration-200 group-open:rotate-45"
                style={{ backgroundColor: `${primary}15`, color: primary }}
              >
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
                </svg>
              </span>
            </summary>
            <div className="px-6 py-5 bg-white">
              <p className="font-dm-sans text-[14px] leading-[24px] text-[#4B5563]">{faq.a}</p>
            </div>
          </details>
        ))}
      </div>
    </>
  );
}

// ── Section registry ──────────────────────────────────────────────────────────

const SECTIONS = [
  { id: 'overview',        path: '/admissions/overview',        label: 'Admissions Overview',   content: <OverviewContent /> },
  { id: 'programs',        path: '/admissions/programs',        label: 'Programs Offered',       content: <ProgramsContent /> },
  { id: 'procedure',       path: '/admissions/procedure',       label: 'Admission Procedure',    content: <ProcedureContent /> },
  { id: 'eligibility',     path: '/admissions/eligibility',     label: 'Eligibility Criteria',   content: <EligibilityContent /> },
  { id: 'fee-structure',   path: '/admissions/fee-structure',   label: 'Fee Structure',          content: <FeeStructureContent /> },
  { id: 'eapcet-ranks',    path: '/admissions/eapcet-ranks',    label: 'EAPCET Ranks',           content: <EapcetRanksContent /> },
  { id: 'documents',       path: '/admissions/documents',       label: 'Required Documents',     content: <DocumentsContent /> },
  { id: 'scholarships',    path: '/admissions/scholarships',    label: 'Scholarships',           content: <ScholarshipsContent /> },
  { id: 'hostel-transport',path: '/admissions/hostel-transport',label: 'Hostel & Transport',     content: <HostelTransportContent /> },
  { id: 'notifications',   path: '/admissions/notifications',   label: 'Notifications',          content: <NotificationsContent /> },
  { id: 'fee-refund',      path: '/admissions/fee-refund',      label: 'Fee Refund Policy',      content: <FeeRefundContent /> },
  { id: 'faqs',            path: '/admissions/faqs',            label: 'FAQs',                   content: <FaqsContent /> },
];

// ── Page component ────────────────────────────────────────────────────────────

export default function AdmissionsPage() {
  const { section } = useParams();
  const activeId = section || 'overview';
  const currentSection = SECTIONS.find((s) => s.id === activeId);

  if (!currentSection) {
    return <Navigate to="/admissions/overview" replace />;
  }

  return (
    <AdminSidebarLayout
      college={college}
      pageTitle="Admissions"
      pageSubtitle="Join GLEC — Admissions open for 2025–26 via TG EAPCET counselling (Code: GLWC)"
      pageBreadcrumb={['Admissions', currentSection.label]}
      sections={SECTIONS}
      currentSection={currentSection}
    />
  );
}
