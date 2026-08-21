import { useState } from 'react';
import SiteHeader from '../components/SiteHeader';
import PageHero from '../components/PageHero';
import AdmissionsCTA from '../components/AdmissionsCTA';
import Footer from '../components/Footer';
import college from '../theme';

const primary = college.primaryColor;
const accent  = college.accentColor;
const { contact: ct } = college;

/* ─── Inline SVG atoms ────────────────────────────────────────────────────── */

const Ico = {
  location: (
    <svg fill="none" stroke="currentColor" strokeWidth={1.6} viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
    </svg>
  ),
  phone: (
    <svg fill="none" stroke="currentColor" strokeWidth={1.6} viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
    </svg>
  ),
  email: (
    <svg fill="none" stroke="currentColor" strokeWidth={1.6} viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
    </svg>
  ),
  clock: (
    <svg fill="none" stroke="currentColor" strokeWidth={1.6} viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  ),
  arrowRight: (
    <svg fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
    </svg>
  ),
  send: (
    <svg fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.269 20.876L5.999 12zm0 0h7.5" />
    </svg>
  ),
  check: (
    <svg fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
    </svg>
  ),
  map: (
    <svg fill="none" stroke="currentColor" strokeWidth={1.6} viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 6.75V15m6-6v8.25m.503 3.498l4.875-2.437c.381-.19.622-.58.622-1.006V4.82c0-.836-.88-1.38-1.628-1.006l-3.869 1.934c-.317.159-.69.159-1.006 0L9.503 3.252a1.125 1.125 0 00-1.006 0L3.622 5.689C3.24 5.88 3 6.27 3 6.695V19.18c0 .836.88 1.38 1.628 1.006l3.869-1.934c.317-.159.69-.159 1.006 0l4.994 2.497c.317.158.69.158 1.006 0z" />
    </svg>
  ),
};

const DEPT_ICONS = {
  principal: (
    <svg fill="none" stroke="currentColor" strokeWidth={1.6} viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
  ),
  admissions: (
    <svg fill="none" stroke="currentColor" strokeWidth={1.6} viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.438 60.438 0 00-.491 6.347A48.62 48.62 0 0112 20.904a48.62 48.62 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.636 50.636 0 00-2.658-.813A59.906 59.906 0 0112 3.493a59.903 59.903 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" />
    </svg>
  ),
  exam: (
    <svg fill="none" stroke="currentColor" strokeWidth={1.6} viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25z" />
    </svg>
  ),
  placements: (
    <svg fill="none" stroke="currentColor" strokeWidth={1.6} viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0" />
    </svg>
  ),
  library: (
    <svg fill="none" stroke="currentColor" strokeWidth={1.6} viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.966 8.966 0 00-6 2.292m0-14.25v14.25" />
    </svg>
  ),
  accounts: (
    <svg fill="none" stroke="currentColor" strokeWidth={1.6} viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z" />
    </svg>
  ),
};

/* ─── Section heading ─────────────────────────────────────────────────────── */

function SectionHeader({ eyebrow, title, center }) {
  return (
    <div className={`mb-10 ${center ? 'text-center' : ''}`}>
      {eyebrow && (
        <span
          className="inline-block font-dm-sans font-semibold text-[11px] tracking-[0.22em] uppercase mb-3"
          style={{ color: accent }}
        >
          {eyebrow}
        </span>
      )}
      <h2 className="font-hind font-bold text-[26px] md:text-[30px] leading-tight mb-3" style={{ color: primary }}>
        {title}
      </h2>
      <div
        className={`h-[3px] w-12 rounded-full ${center ? 'mx-auto' : ''}`}
        style={{ backgroundColor: accent }}
      />
    </div>
  );
}

/* ─── Info cards ──────────────────────────────────────────────────────────── */

function InfoCards() {
  const cards = [
    {
      icon: Ico.location,
      eyebrow: 'Address',
      title: 'Campus Location',
      lines: ct.addressLines,
      cta: { label: 'Get Directions', href: ct.googleMapsDirections, external: true },
    },
    {
      icon: Ico.phone,
      eyebrow: 'Phone',
      title: 'Call Us',
      lines: [college.phone, 'Admissions: ' + college.admissionsPhone],
      cta: { label: 'Call Now', href: `tel:${college.phone}` },
    },
    {
      icon: Ico.email,
      eyebrow: 'Email',
      title: 'Write to Us',
      lines: [college.email, 'examglec@gmail.com'],
      cta: { label: 'Send Email', href: `mailto:${college.email}` },
    },
    {
      icon: Ico.clock,
      eyebrow: 'Office Hours',
      title: 'Working Hours',
      lines: ct.workingHours.map((w) => `${w.day}: ${w.hours}`),
      cta: null,
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">
      {cards.map((card, i) => (
        <div
          key={i}
          className="group relative bg-white rounded-2xl overflow-hidden flex flex-col transition-all duration-300 hover:-translate-y-1.5"
          style={{
            boxShadow: '0 1px 4px rgba(0,0,0,0.06), 0 4px 16px rgba(0,0,0,0.06)',
          }}
          onMouseEnter={(e) => { e.currentTarget.style.boxShadow = `0 8px 32px rgba(91,17,39,0.14), 0 2px 8px rgba(0,0,0,0.06)`; }}
          onMouseLeave={(e) => { e.currentTarget.style.boxShadow = '0 1px 4px rgba(0,0,0,0.06), 0 4px 16px rgba(0,0,0,0.06)'; }}
        >
          {/* Accent top bar */}
          <div className="h-1 w-full" style={{ backgroundColor: accent }} />

          <div className="flex flex-col gap-5 p-6 flex-1">
            {/* Icon */}
            <div
              className="w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0"
              style={{ backgroundColor: `${primary}0F` }}
            >
              <div className="w-7 h-7" style={{ color: primary }}>{card.icon}</div>
            </div>

            {/* Text */}
            <div className="flex flex-col gap-1 flex-1">
              <p
                className="font-dm-sans font-semibold text-[10.5px] uppercase tracking-[0.2em]"
                style={{ color: accent }}
              >
                {card.eyebrow}
              </p>
              <h3 className="font-hind font-bold text-[17px] mb-2" style={{ color: primary }}>
                {card.title}
              </h3>
              {card.lines.map((line, j) => (
                <p key={j} className="font-dm-sans text-[13.5px] leading-[22px] text-[#4B5563]">
                  {line}
                </p>
              ))}
            </div>

            {/* CTA */}
            {card.cta ? (
              <a
                href={card.cta.href}
                target={card.cta.external ? '_blank' : undefined}
                rel={card.cta.external ? 'noopener noreferrer' : undefined}
                className="inline-flex items-center gap-2 font-dm-sans font-semibold text-[12.5px] mt-1 group/link"
                style={{ color: primary }}
              >
                <span className="group-hover/link:underline underline-offset-2">{card.cta.label}</span>
                <span className="w-3.5 h-3.5 transition-transform group-hover/link:translate-x-1">{Ico.arrowRight}</span>
              </a>
            ) : (
              <div className="h-[22px]" />
            )}
          </div>
        </div>
      ))}
    </div>
  );
}

/* ─── Enquiry form ────────────────────────────────────────────────────────── */

function EnquiryForm() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', subject: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading]     = useState(false);

  function handleChange(e) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => { setLoading(false); setSubmitted(true); }, 900);
  }

  const fieldWrap = 'flex flex-col gap-1.5';
  const labelCls  = 'font-dm-sans font-semibold text-[11.5px] uppercase tracking-[0.12em]';
  const baseCls   = [
    'w-full px-4 py-3 rounded-xl font-dm-sans text-[14px] text-[#1F2937]',
    'border-2 outline-none bg-[#FAFAFA] transition-all duration-200',
  ].join(' ');

  function inputProps(name, type = 'text', required = false, placeholder = '') {
    return {
      name, type, required, placeholder,
      value: form[name],
      onChange: handleChange,
      className: baseCls,
      style: { borderColor: `${primary}1A` },
      onFocus: (e) => { e.target.style.borderColor = accent; e.target.style.backgroundColor = '#fff'; },
      onBlur:  (e) => { e.target.style.borderColor = `${primary}1A`; e.target.style.backgroundColor = '#FAFAFA'; },
    };
  }

  /* ── Success state ── */
  if (submitted) {
    return (
      <div className="flex flex-col items-center justify-center gap-6 py-20 text-center">
        <div
          className="w-20 h-20 rounded-full flex items-center justify-center"
          style={{ backgroundColor: `${accent}18`, border: `2px solid ${accent}30` }}
        >
          <div className="w-9 h-9" style={{ color: accent }}>{Ico.check}</div>
        </div>
        <div>
          <p className="font-hind font-bold text-[22px] mb-2" style={{ color: primary }}>Message Sent!</p>
          <p className="font-dm-sans text-[14px] leading-relaxed text-[#6B7280] max-w-[300px]">
            Thank you for reaching out. We'll get back to you within 24–48 working hours.
          </p>
        </div>
        <button
          onClick={() => { setSubmitted(false); setForm({ name: '', email: '', phone: '', subject: '', message: '' }); }}
          className="font-dm-sans font-semibold text-[13px] px-6 py-2.5 rounded-xl border-2 transition-all hover:bg-opacity-10"
          style={{ color: primary, borderColor: `${primary}30` }}
          onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = `${primary}0A`; }}
          onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = 'transparent'; }}
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-5">
      {/* Name + Email */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div className={fieldWrap}>
          <label className={labelCls} style={{ color: `${primary}80` }}>
            Full Name <span style={{ color: accent }}>*</span>
          </label>
          <input {...inputProps('name', 'text', true, 'Your full name')} />
        </div>
        <div className={fieldWrap}>
          <label className={labelCls} style={{ color: `${primary}80` }}>
            Email Address <span style={{ color: accent }}>*</span>
          </label>
          <input {...inputProps('email', 'email', true, 'your@email.com')} />
        </div>
      </div>

      {/* Phone + Subject */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div className={fieldWrap}>
          <label className={labelCls} style={{ color: `${primary}80` }}>Phone Number</label>
          <input {...inputProps('phone', 'tel', false, '+91 XXXXX XXXXX')} />
        </div>
        <div className={fieldWrap}>
          <label className={labelCls} style={{ color: `${primary}80` }}>
            Subject <span style={{ color: accent }}>*</span>
          </label>
          <select
            name="subject" required value={form.subject} onChange={handleChange}
            className={baseCls}
            style={{ borderColor: `${primary}1A`, color: form.subject ? '#1F2937' : '#9CA3AF' }}
            onFocus={(e) => { e.target.style.borderColor = accent; e.target.style.backgroundColor = '#fff'; }}
            onBlur={(e)  => { e.target.style.borderColor = `${primary}1A`; e.target.style.backgroundColor = '#FAFAFA'; }}
          >
            <option value="" disabled>Select a subject</option>
            <option value="Admissions Enquiry">Admissions Enquiry</option>
            <option value="Academic Query">Academic Query</option>
            <option value="Examination">Examination</option>
            <option value="Placements">Placements</option>
            <option value="Hostel &amp; Transport">Hostel &amp; Transport</option>
            <option value="Research Collaboration">Research Collaboration</option>
            <option value="General Enquiry">General Enquiry</option>
          </select>
        </div>
      </div>

      {/* Message */}
      <div className={fieldWrap}>
        <label className={labelCls} style={{ color: `${primary}80` }}>
          Message <span style={{ color: accent }}>*</span>
        </label>
        <textarea
          name="message" required rows={5} value={form.message} onChange={handleChange}
          placeholder="Write your message here…"
          className={`${baseCls} resize-none`}
          style={{ borderColor: `${primary}1A` }}
          onFocus={(e) => { e.target.style.borderColor = accent; e.target.style.backgroundColor = '#fff'; }}
          onBlur={(e)  => { e.target.style.borderColor = `${primary}1A`; e.target.style.backgroundColor = '#FAFAFA'; }}
        />
      </div>

      {/* Submit */}
      <button
        type="submit"
        disabled={loading}
        className="w-full flex items-center justify-center gap-2.5 py-4 rounded-xl font-dm-sans font-semibold text-[14px] text-white transition-all duration-200 hover:opacity-90 disabled:opacity-60 active:scale-[0.99]"
        style={{ backgroundColor: primary }}
      >
        {loading ? (
          <>
            <svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z" />
            </svg>
            Sending…
          </>
        ) : (
          <>
            Send Message
            <span className="w-4 h-4">{Ico.send}</span>
          </>
        )}
      </button>
    </form>
  );
}

/* ─── Department contact row ──────────────────────────────────────────────── */

function DeptCard({ dept }) {
  return (
    <div
      className="group flex items-center gap-4 px-4 py-3.5 rounded-xl bg-white transition-all duration-200"
      style={{
        borderLeft: `3px solid ${accent}`,
        boxShadow: '0 1px 3px rgba(0,0,0,0.04)',
      }}
      onMouseEnter={(e) => { e.currentTarget.style.boxShadow = `0 4px 16px rgba(91,17,39,0.09)`; e.currentTarget.style.transform = 'translateX(3px)'; }}
      onMouseLeave={(e) => { e.currentTarget.style.boxShadow = '0 1px 3px rgba(0,0,0,0.04)'; e.currentTarget.style.transform = 'translateX(0)'; }}
    >
      {/* Icon */}
      <div
        className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0"
        style={{ backgroundColor: `${primary}0C`, color: primary }}
      >
        <div className="w-4 h-4">{DEPT_ICONS[dept.icon]}</div>
      </div>

      {/* Info */}
      <div className="flex-1 min-w-0">
        <p className="font-hind font-semibold text-[13px] leading-tight mb-1" style={{ color: primary }}>
          {dept.name}
        </p>
        <div className="flex flex-col gap-0.5">
          {dept.email && (
            <a href={`mailto:${dept.email}`}
              className="font-dm-sans text-[11.5px] text-[#6B7280] hover:text-[#374151] truncate transition-colors"
            >
              {dept.email}
            </a>
          )}
          {dept.phone && (
            <a href={`tel:${dept.phone}`}
              className="font-dm-sans text-[11.5px] text-[#6B7280] hover:text-[#374151] transition-colors"
            >
              {dept.phone}
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

/* ─── Social link row ─────────────────────────────────────────────────────── */

function SocialRow() {
  const links = [
    {
      name: 'Instagram',
      href: college.socialLinks.instagram,
      icon: <svg className="w-[18px] h-[18px]" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>,
    },
    {
      name: 'Facebook',
      href: college.socialLinks.facebook,
      icon: <svg className="w-[18px] h-[18px]" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>,
    },
    {
      name: 'LinkedIn',
      href: college.socialLinks.linkedin,
      icon: <svg className="w-[18px] h-[18px]" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>,
    },
    {
      name: 'YouTube',
      href: college.socialLinks.youtube,
      icon: <svg className="w-[18px] h-[18px]" fill="currentColor" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>,
    },
  ];

  return (
    <div className="flex items-center gap-2.5 flex-wrap">
      {links.map((l) => (
        <a
          key={l.name}
          href={l.href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={l.name}
          className="w-9 h-9 rounded-xl flex items-center justify-center transition-all duration-200 hover:scale-110"
          style={{ backgroundColor: `${primary}0D`, color: primary }}
          onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = primary; e.currentTarget.style.color = '#fff'; }}
          onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = `${primary}0D`; e.currentTarget.style.color = primary; }}
        >
          {l.icon}
        </a>
      ))}
    </div>
  );
}

/* ─── Page ────────────────────────────────────────────────────────────────── */

export default function ContactPage() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <SiteHeader college={college} />

      <PageHero
        college={college}
        title="Contact Us"
        subtitle="We're here to help — reach out to the GLEC team for any query or information"
        breadcrumb={['Contact Us']}
        bgImage={college.heroBgImage}
      />

      {/* ── Info cards ─────────────────────────────────────────────────── */}
      <section className="section-pad" style={{ backgroundColor: '#F8F5F6' }}>
        <SectionHeader eyebrow="Contact Information" title="How to Reach Us" />
        <InfoCards />
      </section>

      {/* ── Form + Department contacts ─────────────────────────────────── */}
      <section className="section-pad bg-white">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_400px] gap-12 xl:gap-16">

          {/* Left — enquiry form */}
          <div>
            <SectionHeader eyebrow="Get in Touch" title="Send Us a Message" />
            {/* Form card */}
            <div
              className="rounded-2xl p-7 md:p-8"
              style={{
                border: `1.5px solid ${primary}0F`,
                boxShadow: '0 2px 8px rgba(0,0,0,0.04), 0 8px 32px rgba(91,17,39,0.05)',
              }}
            >
              <EnquiryForm />
            </div>
          </div>

          {/* Right — departments + social */}
          <div className="flex flex-col gap-8">
            <div>
              <SectionHeader eyebrow="Department Contacts" title="Who to Reach" />
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2 gap-3">
                {ct.departments.map((dept, i) => (
                  <DeptCard key={i} dept={dept} />
                ))}
              </div>
            </div>

            {/* Social strip */}
            <div
              className="rounded-2xl p-6"
              style={{ backgroundColor: `${primary}05`, border: `1.5px solid ${primary}0A` }}
            >
              <p
                className="font-dm-sans font-semibold text-[11px] uppercase tracking-[0.2em] mb-4"
                style={{ color: `${primary}70` }}
              >
                Follow Us on Social Media
              </p>
              <SocialRow />
              <p className="font-dm-sans text-[12.5px] text-[#9CA3AF] mt-3">
                Stay updated with campus events, news, and announcements.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Location / Map ─────────────────────────────────────────────── */}
      <section style={{ backgroundColor: '#F8F5F6', borderTop: `1px solid ${primary}0A` }}>
        <div className="section-pad">

          {/* Heading */}
          <SectionHeader eyebrow="Find Us" title="Our Location" center />

          {/* Map */}
          <div
            className="w-full overflow-hidden rounded-2xl mb-6"
            style={{
              height: 'clamp(300px, 42vw, 460px)',
              boxShadow: '0 4px 24px rgba(91,17,39,0.10)',
              border: `1.5px solid ${primary}10`,
            }}
          >
            <iframe
              title="GLEC Location Map"
              src={ct.googleMapsUrl}
              width="100%"
              height="100%"
              style={{ border: 0, display: 'block' }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>

          {/* Address bar */}
          <div
            className="rounded-2xl p-5 md:p-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 bg-white"
            style={{
              border: `1.5px solid ${primary}0F`,
              boxShadow: '0 2px 12px rgba(91,17,39,0.06)',
            }}
          >
            <div className="flex items-start gap-4">
              <div
                className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0"
                style={{ backgroundColor: `${primary}0D` }}
              >
                <div className="w-5 h-5" style={{ color: primary }}>{Ico.location}</div>
              </div>
              <div>
                <p className="font-hind font-semibold text-[15px] mb-0.5" style={{ color: primary }}>
                  {college.fullName}
                </p>
                <p className="font-dm-sans text-[13.5px] text-[#6B7280] leading-relaxed">
                  {ct.addressLines.join(' ')}
                </p>
              </div>
            </div>
            <a
              href={ct.googleMapsDirections}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 px-6 py-3 rounded-xl font-dm-sans font-semibold text-[13.5px] text-white transition-all duration-200 hover:opacity-90 hover:scale-[1.02] flex-shrink-0"
              style={{ backgroundColor: primary }}
            >
              <span className="w-4 h-4">{Ico.map}</span>
              Get Directions
            </a>
          </div>

        </div>
      </section>

      <AdmissionsCTA college={college} />
      <Footer college={college} />
    </div>
  );
}
