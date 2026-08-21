import college from '../theme';
import SiteHeader from '../components/SiteHeader';
import PageHero from '../components/PageHero';
import AdmissionsCTA from '../components/AdmissionsCTA';
import Footer from '../components/Footer';

const categories = [
  {
    id: 'technical',
    label: 'Technical',
    color: '#1D4ED8',
    bg: '#EFF6FF',
  },
  {
    id: 'cultural',
    label: 'Cultural',
    color: '#7C3AED',
    bg: '#F5F3FF',
  },
  {
    id: 'sports',
    label: 'Sports',
    color: '#047857',
    bg: '#ECFDF5',
  },
  {
    id: 'academic',
    label: 'Academic',
    color: '#B45309',
    bg: '#FFFBEB',
  },
];

const events = [
  {
    title: 'TECHNOVA 2025 — National Level Technical Symposium',
    date: 'March 2025',
    category: 'technical',
    desc: 'A two-day national-level technical fest featuring paper presentations, project exhibitions, hackathon, coding contests, and expert keynote sessions from industry leaders.',
    highlights: ['700+ participants', 'Cash prizes worth ₹1.5 Lakhs', '12 events across 5 departments'],
  },
  {
    title: 'GLEC Cultural Fest — UTSAV 2025',
    date: 'February 2025',
    category: 'cultural',
    desc: 'Annual cultural extravaganza celebrating music, dance, drama, fine arts, and fashion — showcasing the vibrant creative talent of GLEC students.',
    highlights: ['500+ participants', 'Inter-college competitions', 'Celebrity guest performance'],
  },
  {
    title: 'Annual Sports Meet 2025',
    date: 'January 2025',
    category: 'sports',
    desc: 'The annual inter-departmental sports meet with competitions in cricket, volleyball, basketball, badminton, athletics, and chess.',
    highlights: ['300+ student athletes', '15 sports disciplines', 'Trophy & medals ceremony'],
  },
  {
    title: 'SKILL Series Workshop — AI & Data Science',
    date: 'December 2024',
    category: 'technical',
    desc: 'A hands-on 3-day workshop on Artificial Intelligence and Data Science tools, covering Python, TensorFlow, data visualization, and real-world project development.',
    highlights: ['Industry-led training', 'Certificate of completion', 'Project mentoring sessions'],
  },
  {
    title: 'Freshers Welcome — NAVARANG 2024',
    date: 'October 2024',
    category: 'cultural',
    desc: 'A grand welcome event for the 2024–25 batch featuring performances, talent hunts, and interactive introductions to college life at GLEC.',
    highlights: ['Talent hunt competition', 'Faculty-student interaction', 'Campus orientation tour'],
  },
  {
    title: 'IEEE & CSI Chapter Technical Talk Series',
    date: 'November 2024',
    category: 'academic',
    desc: 'Monthly expert talk series organized by the IEEE Student Branch and CSI Chapter featuring sessions by industry professionals and researchers.',
    highlights: ['Monthly schedule', 'Industry expert speakers', 'IEEE/CSI membership benefits'],
  },
];

const categoryMap = Object.fromEntries(categories.map(c => [c.id, c]));

export default function EventsPage() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <SiteHeader college={college} />

      <PageHero
        college={college}
        title="Events"
        subtitle="Celebrating excellence — technical fests, cultural programmes, sports meets, and academic workshops at GLEC"
        breadcrumb={['Events']}
        bgImage={college.heroBgImage}
      />

      {/* Category filter pills */}
      <div className="w-full bg-white border-b" style={{ borderColor: 'rgba(91,16,39,0.10)' }}>
        <div className="max-w-[1320px] mx-auto px-5 md:px-[60px] py-4 flex flex-wrap gap-3">
          <span
            className="font-dm-sans text-[13px] font-semibold px-4 py-1.5 rounded-full text-white"
            style={{ backgroundColor: college.primaryColor }}
          >
            All Events
          </span>
          {categories.map(c => (
            <span
              key={c.id}
              className="font-dm-sans text-[13px] font-medium px-4 py-1.5 rounded-full"
              style={{ backgroundColor: c.bg, color: c.color, border: `1px solid ${c.color}30` }}
            >
              {c.label}
            </span>
          ))}
        </div>
      </div>

      {/* Events grid */}
      <main className="flex-1 max-w-[1320px] mx-auto w-full px-5 md:px-[60px] py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {events.map((ev) => {
            const cat = categoryMap[ev.category];
            return (
              <div
                key={ev.title}
                className="bg-white rounded-xl flex flex-col overflow-hidden"
                style={{
                  border: '1.5px solid rgba(91,16,39,0.10)',
                  boxShadow: '0 2px 8px rgba(91,16,39,0.06)',
                }}
              >
                {/* Top accent */}
                <div className="h-1 w-full" style={{ backgroundColor: cat.color }} />

                <div className="p-6 flex flex-col flex-1 gap-4">
                  {/* Category + date row */}
                  <div className="flex items-center justify-between">
                    <span
                      className="font-dm-sans text-[11px] font-bold uppercase tracking-wider px-2.5 py-1 rounded"
                      style={{ backgroundColor: cat.bg, color: cat.color }}
                    >
                      {cat.label}
                    </span>
                    <span className="font-dm-sans text-[12px] text-[#888888]">{ev.date}</span>
                  </div>

                  {/* Title */}
                  <h3
                    className="font-hind font-semibold text-[17px] leading-6"
                    style={{ color: college.primaryColor }}
                  >
                    {ev.title}
                  </h3>

                  {/* Desc */}
                  <p className="font-hind text-[14px] leading-[22px] text-[#555555] flex-1">
                    {ev.desc}
                  </p>

                  {/* Highlights */}
                  <ul className="flex flex-col gap-1.5">
                    {ev.highlights.map(h => (
                      <li key={h} className="flex items-center gap-2">
                        <span
                          className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                          style={{ backgroundColor: cat.color }}
                        />
                        <span className="font-hind text-[13px] text-[#444444]">{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>

        {/* Notifications CTA */}
        <div
          className="mt-12 rounded-xl p-8 flex flex-col sm:flex-row items-center gap-6 justify-between"
          style={{
            backgroundColor: 'rgba(91,16,39,0.04)',
            border: '1.5px solid rgba(91,16,39,0.10)',
          }}
        >
          <div>
            <h3 className="font-hind font-semibold text-[20px]" style={{ color: college.primaryColor }}>
              Stay updated on upcoming events
            </h3>
            <p className="font-hind text-[14px] text-[#666666] mt-1">
              Check examination notifications and announcements regularly for event schedules.
            </p>
          </div>
          <a
            href="/examinations/notifications"
            className="flex-shrink-0 font-dm-sans font-semibold text-[14px] px-6 py-3 rounded text-white transition-colors"
            style={{ backgroundColor: college.primaryColor }}
            onMouseEnter={e => e.currentTarget.style.backgroundColor = college.accentColor}
            onMouseLeave={e => e.currentTarget.style.backgroundColor = college.primaryColor}
          >
            View Notifications
          </a>
        </div>
      </main>

      <AdmissionsCTA college={college} />
      <Footer college={college} />
    </div>
  );
}
