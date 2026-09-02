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
    title: 'Technical Symposium',
    category: 'technical',
    desc: 'A technical fest featuring paper presentations, project exhibitions, hackathons, coding contests, and expert keynote sessions from industry leaders.',
  },
  {
    title: 'Cultural Fest',
    category: 'cultural',
    desc: 'Annual cultural celebration of music, dance, drama, fine arts, and fashion — showcasing the creative talent of GLEC students.',
  },
  {
    title: 'Annual Sports Meet',
    category: 'sports',
    desc: 'Inter-departmental sports meet with competitions in cricket, volleyball, basketball, badminton, athletics, and chess.',
  },
  {
    title: 'SKILL Series Workshop',
    category: 'technical',
    desc: 'Hands-on workshops on emerging technologies conducted under GLEC\'s SKILL Series, covering tools, frameworks, and real-world project development.',
  },
  {
    title: 'Freshers Welcome',
    category: 'cultural',
    desc: 'A welcome event for newly admitted students featuring performances, talent showcases, and an introduction to campus life at GLEC.',
  },
  {
    title: 'IEEE & CSI Chapter Technical Talks',
    category: 'academic',
    desc: 'Expert talk sessions organised by the IEEE Student Branch and CSI Chapter featuring industry professionals and researchers.',
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
                  {/* Category */}
                  <span
                    className="font-dm-sans text-[11px] font-bold uppercase tracking-wider px-2.5 py-1 rounded w-fit"
                    style={{ backgroundColor: cat.bg, color: cat.color }}
                  >
                    {cat.label}
                  </span>

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
