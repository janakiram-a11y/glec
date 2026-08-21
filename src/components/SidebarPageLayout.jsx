import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import SiteHeader from './SiteHeader';
import PageHero from './PageHero';
import AdmissionsCTA from './AdmissionsCTA';
import Footer from './Footer';

export default function SidebarPageLayout({ college, pageTitle, pageSubtitle, pageBreadcrumb = [], sections }) {
  const [activeId, setActiveId] = useState(sections[0]?.id || '');
  const location = useLocation();

  // Scroll to hash on load or when location hash changes
  useEffect(() => {
    const hash = location.hash.slice(1);
    if (hash) {
      setTimeout(() => scrollToId(hash), 200);
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [location.hash]);

  // IntersectionObserver for active sidebar highlight
  useEffect(() => {
    const observers = [];
    sections.forEach((section) => {
      const el = document.getElementById(section.id);
      if (!el) return;
      const obs = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActiveId(section.id); },
        { rootMargin: '-15% 0px -75% 0px', threshold: 0 }
      );
      obs.observe(el);
      observers.push(obs);
    });
    return () => observers.forEach((o) => o.disconnect());
  }, [sections]);

  function scrollToId(id) {
    const el = document.getElementById(id);
    if (!el) return;
    const offset = 170;
    const top = el.getBoundingClientRect().top + window.scrollY - offset;
    window.scrollTo({ top, behavior: 'smooth' });
  }

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <SiteHeader college={college} />
    <div className="flex flex-col flex-1 overflow-x-hidden">

      <PageHero
        college={college}
        title={pageTitle}
        subtitle={pageSubtitle}
        breadcrumb={pageBreadcrumb}
        bgImage={college.heroBgImage}
      />

      {/* Mobile horizontal tab bar */}
      <div
        className="lg:hidden w-full bg-white border-b overflow-x-auto"
        style={{ borderColor: `${college.primaryColor}18` }}
      >
        <div className="flex px-4 py-2.5 gap-2 min-w-max">
          {sections.map((section) => (
            <button
              key={section.id}
              onClick={() => scrollToId(section.id)}
              className="px-3 py-1.5 rounded-full font-dm-sans font-semibold text-[12px] whitespace-nowrap transition-colors flex-shrink-0"
              style={{
                color: activeId === section.id ? '#fff' : college.primaryColor,
                backgroundColor: activeId === section.id ? college.primaryColor : `${college.primaryColor}12`,
              }}
            >
              {section.label}
            </button>
          ))}
        </div>
      </div>

      <div className="flex flex-1">
        {/* Desktop sticky sidebar */}
        <aside
          className="hidden lg:flex flex-col sidebar-scroll flex-shrink-0"
          style={{
            width: '272px',
            position: 'sticky',
            top: '159px',
            height: 'calc(100vh - 159px)',
            borderRight: `1px solid ${college.primaryColor}15`,
            backgroundColor: '#FDFCFC',
          }}
        >
          <div className="px-5 pt-6 pb-4">
            <p
              className="font-dm-sans font-semibold text-[10px] tracking-[0.22em] uppercase mb-4 px-1"
              style={{ color: `${college.primaryColor}70` }}
            >
              {pageTitle}
            </p>
            <nav className="flex flex-col gap-0.5">
              {sections.map((section) => {
                const isActive = activeId === section.id;
                return (
                  <button
                    key={section.id}
                    onClick={() => scrollToId(section.id)}
                    className="text-left px-3 py-2.5 rounded-lg font-dm-sans font-medium text-[13px] leading-snug transition-all duration-150"
                    style={{
                      color: isActive ? college.primaryColor : '#4B5563',
                      backgroundColor: isActive ? `${college.primaryColor}0C` : 'transparent',
                      borderLeft: isActive
                        ? `3px solid ${college.primaryColor}`
                        : '3px solid transparent',
                    }}
                    onMouseEnter={(e) => {
                      if (!isActive) {
                        e.currentTarget.style.backgroundColor = `${college.primaryColor}07`;
                        e.currentTarget.style.color = college.primaryColor;
                      }
                    }}
                    onMouseLeave={(e) => {
                      if (!isActive) {
                        e.currentTarget.style.backgroundColor = 'transparent';
                        e.currentTarget.style.color = '#4B5563';
                      }
                    }}
                  >
                    {section.label}
                  </button>
                );
              })}
            </nav>
          </div>
        </aside>

        {/* Main content */}
        <main className="flex-1 min-w-0">
          {sections.map((section, i) => (
            <section
              key={section.id}
              id={section.id}
              className="w-full section-pad"
              style={{ backgroundColor: i % 2 === 0 ? '#FFFFFF' : '#F9F6F7' }}
            >
              {section.content}
            </section>
          ))}
        </main>
      </div>

      <AdmissionsCTA college={college} />
      <Footer college={college} />
    </div>
    </div>
  );
}
