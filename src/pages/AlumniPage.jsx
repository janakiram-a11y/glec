import college from '../theme';
import SiteHeader from '../components/SiteHeader';
import PageHero from '../components/PageHero';
import AdmissionsCTA from '../components/AdmissionsCTA';
import Footer from '../components/Footer';

const benefits = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    title: 'Networking',
    desc: 'Connect with fellow graduates, faculty, and industry leaders through exclusive alumni events and online forums.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    title: 'Career Support',
    desc: 'Access job postings, referrals, and mentorship opportunities through the GLEC alumni professional network.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
      </svg>
    ),
    title: 'Continuing Education',
    desc: 'Stay updated with the latest in technology and engineering through workshops, webinars, and alumni lectures.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    ),
    title: 'Give Back',
    desc: 'Mentor current students, offer internships, or contribute to scholarships — be the change you once needed.',
  },
];

const steps = [
  { num: '01', title: 'Fill the Registration Form', desc: 'Complete the online alumni registration form with your details and batch information.' },
  { num: '02', title: 'Verification', desc: 'Your details are verified against college records by the Alumni Relations Cell.' },
  { num: '03', title: 'Welcome Kit', desc: 'Receive your alumni ID card and welcome kit granting access to the alumni portal and events.' },
];

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
              Welcome to the GLEC Alumni Network
            </h2>
            <p className="font-hind text-[16px] leading-7 text-[#555555] mb-4">
              Gokaraju Lailavathi Engineering College Alumni Association (GLECAA) connects graduates with the institution and with each other. Whether you graduated recently or years ago, the GLEC alumni network is your lifelong professional home.
            </p>
            <p className="font-hind text-[16px] leading-7 text-[#555555]">
              As a sister institution of GRIET, GLEC alumni benefit from a combined network of thousands of engineers, technologists, and leaders across India and abroad. We host reunions, professional events, mentorship programmes, and industry connect sessions throughout the year.
            </p>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="w-full section-pad" style={{ backgroundColor: '#FAFAFA' }}>
        <div className="max-w-[1320px] mx-auto px-5 md:px-[60px]">
          <div className="text-center mb-10">
            <h2 className="font-hind font-semibold text-[26px] lg:text-[32px]" style={{ color: college.primaryColor }}>
              Alumni Benefits
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((b) => (
              <div
                key={b.title}
                className="bg-white rounded-xl p-6 flex flex-col gap-4"
                style={{ border: '1.5px solid rgba(91,16,39,0.10)', boxShadow: '0 1px 4px rgba(91,16,39,0.05)' }}
              >
                <div
                  className="w-11 h-11 rounded-lg flex items-center justify-center"
                  style={{ backgroundColor: 'rgba(91,16,39,0.07)', color: college.primaryColor }}
                >
                  {b.icon}
                </div>
                <h3 className="font-hind font-semibold text-[16px]" style={{ color: college.primaryColor }}>{b.title}</h3>
                <p className="font-hind text-[14px] leading-[22px] text-[#555555]">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How to Register */}
      <section className="w-full section-pad bg-white">
        <div className="max-w-[1320px] mx-auto px-5 md:px-[60px]">
          <div className="text-center mb-10">
            <h2 className="font-hind font-semibold text-[26px] lg:text-[32px]" style={{ color: college.primaryColor }}>
              How to Register
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-[900px] mx-auto">
            {steps.map((s) => (
              <div key={s.num} className="flex flex-col items-center text-center gap-3">
                <span
                  className="font-hind font-bold text-[40px] leading-none"
                  style={{ color: 'rgba(91,16,39,0.12)' }}
                >
                  {s.num}
                </span>
                <h3 className="font-hind font-semibold text-[16px]" style={{ color: college.primaryColor }}>{s.title}</h3>
                <p className="font-hind text-[14px] leading-[22px] text-[#666666]">{s.desc}</p>
              </div>
            ))}
          </div>
          <div className="flex justify-center mt-10">
            <a
              href={`mailto:${college.email}`}
              className="inline-block font-dm-sans font-semibold text-[15px] px-8 py-3.5 rounded text-white transition-colors"
              style={{ backgroundColor: college.primaryColor }}
              onMouseEnter={e => e.currentTarget.style.backgroundColor = college.accentColor}
              onMouseLeave={e => e.currentTarget.style.backgroundColor = college.primaryColor}
            >
              Register / Contact Alumni Cell
            </a>
          </div>
        </div>
      </section>

      <AdmissionsCTA college={college} />
      <Footer college={college} />
    </div>
  );
}
