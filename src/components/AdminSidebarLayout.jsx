import { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import SiteHeader from './SiteHeader';
import PageHero from './PageHero';
import AdmissionsCTA from './AdmissionsCTA';
import Footer from './Footer';

export default function AdminSidebarLayout({
  college,
  pageTitle,
  pageSubtitle,
  pageBreadcrumb = [],
  sections = [],
  currentSection,
}) {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [location.pathname]);

  const sidebarSections = sections.filter((s) => s.sidebar !== false);

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

      <main className="flex-1 section-pad">
        <div className="max-w-[1320px] mx-auto px-5 md:px-[60px]">
          <div className="flex gap-8 items-start">

            {/* Sidebar */}
            <aside className="hidden lg:block w-[260px] flex-shrink-0 sticky top-[120px]">
              <div className="rounded-2xl overflow-hidden border border-[#E5E7EB]">
                {/* Header */}
                <div
                  className="px-5 py-4"
                  style={{ backgroundColor: college.primaryColor }}
                >
                  <span className="font-hind font-bold text-[16px] text-white">
                    {pageTitle}
                  </span>
                </div>

                {/* Nav items */}
                <nav className="bg-white">
                  {sidebarSections.map((s, i) => {
                    const isActive = s.id === currentSection?.id;
                    return (
                      <Link
                        key={s.id}
                        to={s.path}
                        className="flex items-center gap-3 px-5 py-3 transition-colors"
                        style={{
                          borderBottom: i < sidebarSections.length - 1 ? '1px solid #F3F4F6' : 'none',
                          backgroundColor: isActive ? `${college.primaryColor}06` : 'transparent',
                        }}
                        onMouseEnter={e => { if (!isActive) e.currentTarget.style.backgroundColor = `${college.primaryColor}06`; }}
                        onMouseLeave={e => { if (!isActive) e.currentTarget.style.backgroundColor = 'transparent'; }}
                      >
                        <span
                          className="w-2 h-2 rounded-full flex-shrink-0"
                          style={{ backgroundColor: college.accentColor }}
                        />
                        <span
                          className="font-dm-sans text-[13.5px] leading-snug"
                          style={{
                            color: college.primaryColor,
                            fontWeight: isActive ? 700 : 400,
                          }}
                        >
                          {s.label}
                        </span>
                      </Link>
                    );
                  })}
                </nav>
              </div>
            </aside>

            {/* Main content */}
            <div className="flex-1 min-w-0">
              {currentSection?.content}
            </div>

          </div>
        </div>
      </main>

      <AdmissionsCTA college={college} />
      <Footer college={college} />
    </div>
    </div>
  );
}
