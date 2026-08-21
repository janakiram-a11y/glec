import { Link } from 'react-router-dom';
import college from '../theme';
import SiteHeader from '../components/SiteHeader';
import PageHero from '../components/PageHero';
import AdmissionsCTA from '../components/AdmissionsCTA';
import Footer from '../components/Footer';

const sections = [
  {
    id: 'labs',
    title: 'Computing & Engineering Labs',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} className="w-6 h-6">
        <rect x="2" y="3" width="20" height="14" rx="2" />
        <path strokeLinecap="round" d="M8 21h8M12 17v4" />
      </svg>
    ),
    items: [
      { name: 'Advanced Computing Lab', desc: 'High-performance workstations with the latest software tools and cloud computing access for CSE, IT, and CS programmes.' },
      { name: 'AI & Machine Learning Lab', desc: 'GPU-enabled systems configured for deep learning frameworks, data science toolkits, and AI research projects.' },
      { name: 'Cybersecurity Lab', desc: 'Dedicated environment for network security, ethical hacking simulations, and cyber defence training.' },
      { name: 'Electronics & Physics Lab', desc: 'Fully equipped lab supporting practical sessions in applied physics, electronics, and engineering fundamentals for H&S.' },
      { name: 'Chemistry Lab', desc: 'Modern wet lab with analytical instruments supporting engineering chemistry practicals and research.' },
    ],
  },
  {
    id: 'library',
    title: 'Central Library',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
      </svg>
    ),
    items: [
      { name: 'Book Collection', desc: '5,776 volumes across 1,357 titles spanning all B.E. programme disciplines — updated annually.' },
      { name: 'Periodicals & Journals', desc: '48 national and international journals subscribed, exceeding the AICTE requirement of 12.' },
      { name: 'Reading Room', desc: 'Spacious reading hall with seating capacity for 150 students with individual carrels and group discussion corners.' },
      { name: 'Multimedia Lab', desc: '10 multimedia PCs with internet access for NPTEL lectures, e-books, and online journal access.' },
      { name: 'Operating Hours', desc: 'Monday–Saturday: 9:00 AM – 5:00 PM.' },
    ],
  },
  {
    id: 'sports',
    title: 'Sports Facilities',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} className="w-6 h-6">
        <circle cx="12" cy="12" r="10" />
        <path strokeLinecap="round" d="M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z" />
        <path strokeLinecap="round" d="M2 12h20" />
      </svg>
    ),
    items: [
      { name: 'Indoor Sports Hall', desc: 'Multi-purpose hall for badminton, table tennis, chess, carrom, and other indoor activities.' },
      { name: 'Outdoor Play Areas', desc: 'Cricket practice nets, volleyball court, basketball court, and athletics track.' },
      { name: 'Fitness Centre', desc: 'Equipped gymnasium with cardio machines, free weights, and supervised fitness programmes.' },
      { name: 'Yoga & Wellness', desc: 'Dedicated space for yoga sessions, meditation, and mental wellness activities.' },
    ],
  },
  {
    id: 'hostel',
    title: 'Hostel & Accommodation',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
      </svg>
    ),
    items: [
      { name: 'Boys Hostel Block', desc: 'Separate, fully furnished hostel block for male students with 24×7 security and warden supervision.' },
      { name: "Girls Hostel Block", desc: 'Safe, dedicated block for female students with round-the-clock CCTV surveillance and lady warden.' },
      { name: 'Amenities', desc: 'RO purified water, Wi-Fi connectivity, common recreation room, laundry, and 24-hour power backup.' },
      { name: 'Mess & Dining', desc: 'Hygienic cafeteria serving balanced vegetarian and non-vegetarian meals. Special diet options available.' },
    ],
  },
  {
    id: 'health',
    title: 'Health Facilities',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    ),
    items: [
      { name: 'Medical Room', desc: 'On-campus first-aid and medical room staffed during college hours with basic medications and trained personnel.' },
      { name: 'Tie-up Hospitals', desc: 'Empanelled hospitals near campus for emergency medical care and specialist consultations.' },
      { name: 'Counselling Cell', desc: 'Professional counsellors available for academic stress management and personal well-being support.' },
      { name: 'Insurance Coverage', desc: 'Student insurance programme providing coverage for accidental and medical emergencies.' },
    ],
  },
  {
    id: 'accessibility',
    title: 'Physically Challenged Facilities',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} className="w-6 h-6">
        <circle cx="12" cy="5" r="2" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 22v-8m0 0l-3 3m3-3l3 3M9 12H7a2 2 0 01-2-2V8" />
      </svg>
    ),
    items: [
      { name: 'Ramp Access', desc: 'Wheelchair-friendly ramps at all major building entrances and across campus pathways.' },
      { name: 'Accessible Restrooms', desc: 'Specially designed restrooms on every floor equipped for differently-abled users.' },
      { name: 'Reserved Seating', desc: 'Front-row and easily accessible seating reserved in all classrooms and seminar halls.' },
      { name: 'Support Staff', desc: 'Dedicated support staff to assist differently-abled students with daily academic and campus activities.' },
    ],
  },
];

export default function InfrastructurePage() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <SiteHeader college={college} />

      <PageHero
        college={college}
        title="Infrastructure"
        subtitle="State-of-the-art facilities designed to support academic excellence, student well-being, and holistic development"
        breadcrumb={['About', 'Infrastructure']}
        bgImage={college.heroBgImage}
      />

      {/* Campus Specs */}
      <div className="w-full bg-white border-b" style={{ borderColor: 'rgba(91,16,39,0.08)' }}>
        <div className="max-w-[1320px] mx-auto px-5 md:px-[60px] py-8">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {[
              { label: 'Campus Area', value: '3.0 Acres' },
              { label: 'Building Permission', value: '1,10,000 sq ft' },
              { label: 'First Year Built Area', value: '~55,000 sq ft' },
            ].map((spec) => (
              <div
                key={spec.label}
                className="flex flex-col gap-1 p-5 rounded-xl"
                style={{ backgroundColor: 'rgba(91,16,39,0.04)', border: '1px solid rgba(91,16,39,0.10)' }}
              >
                <span className="font-dm-sans font-semibold text-[11px] uppercase tracking-[0.18em]" style={{ color: 'rgba(91,16,39,0.55)' }}>
                  {spec.label}
                </span>
                <span className="font-hind font-bold text-[28px] leading-none" style={{ color: college.primaryColor }}>
                  {spec.value}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Quick jump links */}
      <div
        className="w-full border-b"
        style={{ borderColor: `rgba(91,16,39,0.10)`, backgroundColor: '#FAFAFA' }}
      >
        <div className="max-w-[1320px] mx-auto px-5 md:px-[60px] flex flex-wrap gap-x-6 gap-y-2 py-3">
          {sections.map((s) => (
            <a
              key={s.id}
              href={`#${s.id}`}
              className="font-dm-sans text-[13px] font-medium transition-colors"
              style={{ color: college.primaryColor }}
              onMouseEnter={e => e.currentTarget.style.color = college.accentColor}
              onMouseLeave={e => e.currentTarget.style.color = college.primaryColor}
            >
              {s.title}
            </a>
          ))}
        </div>
      </div>

      {/* Sections */}
      <main className="flex-1 max-w-[1320px] mx-auto w-full px-5 md:px-[60px] py-14 flex flex-col gap-16">
        {sections.map((section, si) => (
          <section key={section.id} id={section.id}>
            {/* Section heading */}
            <div className="flex items-center gap-3 mb-8">
              <div
                className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0"
                style={{ backgroundColor: `rgba(91,16,39,0.08)`, color: college.primaryColor }}
              >
                {section.icon}
              </div>
              <div>
                <h2
                  className="font-hind font-semibold text-[22px] leading-7"
                  style={{ color: college.primaryColor }}
                >
                  {section.title}
                </h2>
                <div
                  className="h-[3px] w-12 rounded-full mt-1"
                  style={{ backgroundColor: college.accentColor }}
                />
              </div>
            </div>

            {/* Items grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {section.items.map((item) => (
                <div
                  key={item.name}
                  className="bg-white rounded-xl p-6"
                  style={{
                    border: '1.5px solid rgba(91,16,39,0.10)',
                    borderLeftWidth: '4px',
                    borderLeftColor: college.primaryColor,
                    boxShadow: '0 1px 4px rgba(91,16,39,0.05)',
                  }}
                >
                  <h3
                    className="font-hind font-semibold text-[15px] mb-2"
                    style={{ color: college.primaryColor }}
                  >
                    {item.name}
                  </h3>
                  <p className="font-hind font-normal text-[14px] leading-[22px] text-[#474747]">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>

            {si < sections.length - 1 && (
              <div className="mt-16 h-px" style={{ backgroundColor: 'rgba(91,16,39,0.08)' }} />
            )}
          </section>
        ))}
      </main>

      <AdmissionsCTA college={college} />
      <Footer college={college} />
    </div>
  );
}
