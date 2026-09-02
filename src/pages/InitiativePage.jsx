import { Link, useParams, Navigate } from 'react-router-dom';
import college from '../theme';
import SiteHeader from '../components/SiteHeader';
import PageHero from '../components/PageHero';
import AdmissionsCTA from '../components/AdmissionsCTA';
import Footer from '../components/Footer';

export default function InitiativePage() {
  const { slug } = useParams();
  const initiative = college.initiatives?.[slug];

  if (!initiative) {
    return <Navigate to="/" replace />;
  }

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <SiteHeader college={college} />

      <PageHero
        college={college}
        title={initiative.title}
        subtitle="One of GLEC's flagship skill-development initiatives"
        breadcrumb={[initiative.title]}
        bgImage={college.heroBgImage}
      />

      <main className="flex-1 w-full section-pad">
        <div className="max-w-[820px] mx-auto flex flex-col gap-5">
          {initiative.paragraphs.map((para, i) => (
            <p key={i} className="font-dm-sans font-normal text-[15px] leading-[27px] text-[#474747]">
              {para}
            </p>
          ))}

          {initiative.batches && initiative.batches.length > 0 && (
            <div className="mt-6 flex flex-col gap-5">
              {initiative.batches.map((b, i) => (
                <div
                  key={i}
                  className="rounded-2xl p-6 border"
                  style={{ borderColor: `${college.primaryColor}18`, backgroundColor: `${college.primaryColor}05` }}
                >
                  <p
                    className="font-dm-sans font-semibold text-[11px] tracking-[0.18em] uppercase mb-2"
                    style={{ color: college.accentColor }}
                  >
                    {b.year}
                  </p>
                  <h3 className="font-hind font-bold text-[18px] mb-2" style={{ color: college.primaryColor }}>
                    {b.title}
                  </h3>
                  <p className="font-dm-sans text-[14px] leading-[24px] text-[#4B5563]">{b.desc}</p>
                </div>
              ))}
            </div>
          )}

          <div className="mt-4">
            <Link
              to="/"
              className="inline-flex items-center gap-2 font-dm-sans font-semibold text-[15px]"
              style={{ color: college.primaryColor }}
            >
              ← Back to Home
            </Link>
          </div>
        </div>
      </main>

      <AdmissionsCTA college={college} />
      <Footer college={college} />
    </div>
  );
}
