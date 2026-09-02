import { Link } from 'react-router-dom';
import college from '../theme';
import SiteHeader from '../components/SiteHeader';
import PageHero from '../components/PageHero';
import AdmissionsCTA from '../components/AdmissionsCTA';
import Footer from '../components/Footer';

const campusGallery = [
  '/images/infrastructure/campus/GLWEC2.png',
  '/images/infrastructure/campus/GLWEC3.jpg',
  '/images/infrastructure/campus/GLWEC4.jpg',
  '/images/infrastructure/campus/GLWEC5.jpg',
  '/images/infrastructure/campus/GLWEC6.jpg',
];

const sections = [
  {
    id: 'labs',
    title: 'Computing & Engineering Labs',
    gallery: [
      '/images/infrastructure/labs/GLWEC_bee_1.jpg',
      '/images/infrastructure/labs/GLWEC_bee_2.jpg',
      '/images/infrastructure/labs/GLWEC_bee_3.jpg',
      '/images/infrastructure/labs/GLWEC_bee_4.jpg',
      '/images/infrastructure/labs/GLWEC_PhysicsLab_1.jpg',
      '/images/infrastructure/labs/GLWEC_PhysicsLab_2.jpg',
      '/images/infrastructure/labs/GLWEC_PhysicsLab_3.jpg',
      '/images/infrastructure/labs/GLWEC_PhysicsLab_4.jpg',
      '/images/infrastructure/labs/GLWEC_ChemistryLab_1.jpg',
      '/images/infrastructure/labs/GLWEC_Workshop_1.jpg',
      '/images/infrastructure/labs/GLWEC_Workshop_2.jpg',
      '/images/infrastructure/labs/GLWEC12.jpg',
    ],
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
    gallery: [
      '/images/infrastructure/library/GLWEC16.jpg',
      '/images/infrastructure/library/GLWEC17.jpg',
    ],
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
    gallery: Array.from({ length: 17 }, (_, i) => `/images/infrastructure/sports/${i + 1}.jpg`),
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} className="w-6 h-6">
        <circle cx="12" cy="12" r="10" />
        <path strokeLinecap="round" d="M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z" />
        <path strokeLinecap="round" d="M2 12h20" />
      </svg>
    ),
    items: [
      { name: 'Outdoor Games', desc: 'The Department of Physical Education conducts sports and games for staff and students in Cricket, Basketball, Volleyball, Kabbadi, Athletics, Throw Ball, and Tennikoit.' },
      { name: 'Indoor Games', desc: 'Table Tennis, Carroms, Badminton, and Chess, encouraging holistic development of every student.' },
      { name: 'Competitions', desc: 'Our students have excelled and won prizes in various intra-college, inter-college, and university competitions. Facilities are made available even beyond college hours, with transport provided for students participating in sports and games beyond college hours.' },
      { name: 'Sports Medical Support', desc: 'A full-time trained staff nurse is appointed and stays up to 6:30 PM, attending to first-aid for students injured during sports and games. An ambulance with all facilities is available round the clock, five beds are provided in the health centre for any medical emergency, general medicines are made available, and first-aid boxes are kept in the Sports & Games Department.' },
      { name: 'University-Level Participation', desc: 'Our students have also participated in various games and sports organized by Osmania University, JNTU, and other colleges.' },
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
      { name: 'Mess & Dining', desc: 'Hygienic hostel mess serving balanced vegetarian and non-vegetarian meals, plus a spacious general campus canteen for day scholars. Special diet options available.' },
    ],
  },
  {
    id: 'health',
    title: 'Health Facilities',
    gallery: Array.from({ length: 4 }, (_, i) => `/images/infrastructure/hf/${i + 1}.jpg`),
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    ),
    items: [
      { name: 'Health Centers', desc: 'On-campus health centers provide basic medical services, often staffed by qualified doctors and nurses.' },
      { name: 'Emergency Services', desc: 'Arrangements with nearby hospitals ensure students have access to emergency medical care.' },
      { name: 'Pharmacy', desc: 'On-campus pharmacies provide easy access to medications and health supplies.' },
      { name: 'Counseling Services', desc: 'Mental health support is available through counseling services for emotional and psychological well-being.' },
      { name: 'Health Camps and Check-ups', desc: 'Regular health camps and check-ups help monitor and maintain students\' health.' },
    ],
  },
  {
    id: 'accessibility',
    title: 'Physically Challenged Facilities',
    gallery: Array.from({ length: 3 }, (_, i) => `/images/infrastructure/pc/${i + 1}.jpg`),
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} className="w-6 h-6">
        <circle cx="12" cy="5" r="2" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 22v-8m0 0l-3 3m3-3l3 3M9 12H7a2 2 0 01-2-2V8" />
      </svg>
    ),
    items: [
      { name: 'Barrier-Free Environment', desc: 'GLEC has an architectural barrier-free environment that differently-abled persons find easy for their day-to-day functioning, addressing accessibility as per the stipulations of the Persons with Disabilities Act, 1995. All existing infrastructure is disabled-friendly, and future construction is also based on the principle of inclusion.' },
      { name: 'Ramps and Hand Rails', desc: 'Apart from stair access and lifts, GLEC blocks are constructed with ramps and hand rails as sloped pathways providing access to buildings — an alternative to stairs for wheelchair users, people with mobility issues, and people with prams, bicycles, and other wheeled items.' },
      { name: 'Mobility Devices', desc: 'Wheel chairs and walkers are made available in the College, along with special toilets and other necessary facilities to meet the needs of differently-abled persons.' },
      { name: 'Scribes for Examinations', desc: 'GLEC provides scribes for differently-abled students if required during examinations, as per the OU and AICTE rules of examinations.' },
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

      {/* Campus gallery */}
      <div className="w-full bg-white">
        <div className="max-w-[1320px] mx-auto px-5 md:px-[60px] py-8">
          <div className="grid grid-cols-2 sm:grid-cols-5 gap-3">
            {campusGallery.map((src, i) => (
              <div key={i} className="aspect-square rounded-xl overflow-hidden" style={{ backgroundColor: 'rgba(91,16,39,0.06)' }}>
                <img
                  src={src}
                  alt="GLEC Campus"
                  className="w-full h-full object-cover"
                  onError={(e) => { e.currentTarget.parentElement.style.display = 'none'; }}
                />
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

            {/* Photo gallery */}
            {section.gallery && section.gallery.length > 0 && (
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 mt-6">
                {section.gallery.map((src, i) => (
                  <div
                    key={i}
                    className="aspect-[4/3] rounded-xl overflow-hidden"
                    style={{ backgroundColor: 'rgba(91,16,39,0.06)' }}
                  >
                    <img
                      src={src}
                      alt={section.title}
                      className="w-full h-full object-cover"
                      onError={(e) => { e.currentTarget.parentElement.style.display = 'none'; }}
                    />
                  </div>
                ))}
              </div>
            )}

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
