import college from '../theme';
import SiteHeader from '../components/SiteHeader';
import PageHero from '../components/PageHero';
import Footer from '../components/Footer';

const disclosures = [
  {
    category: 'AICTE Approvals & Affiliation',
    items: [
      { label: 'AICTE Approval Letter 2024–25', href: 'https://www.glwec.in/downloads/AICTE_Approval_2024-25.pdf' },
      { label: 'AICTE Approval Letter 2023–24', href: 'https://www.glwec.in/downloads/AICTE_Approval_2023-24.pdf' },
      { label: 'Osmania University Affiliation Letter', href: 'https://www.glwec.in/downloads/OU_Affiliation.pdf' },
    ],
  },
  {
    category: 'Fee Structure',
    items: [
      { label: 'Fee Structure 2024–25 (Approved)', href: 'https://www.glwec.in/downloads/Fee_Structure_2024-25.pdf' },
      { label: 'Fee Refund Policy', href: '/admissions/fee-refund' },
    ],
  },
  {
    category: 'Governance & Committees',
    items: [
      { label: 'Governing Body Members', href: '/administration/governing-body' },
      { label: 'Anti-Ragging Committee', href: '/administration/anti-ragging' },
      { label: 'Anti-Sexual Harassment Committee (ICC)', href: '/administration/icc' },
      { label: 'Grievance Redressal Policy', href: '/administration/grievance' },
      { label: 'Equal Opportunity Cell', href: '/administration/equal-opportunity' },
    ],
  },
  {
    category: 'Admissions',
    items: [
      { label: 'Admissions Overview', href: '/admissions/overview' },
      { label: 'Eligibility Criteria', href: '/admissions/eligibility' },
      { label: 'Programs Offered & Intake', href: '/admissions/programs' },
      { label: 'EAPCET Ranks (Previous Year)', href: '/admissions/eapcet-ranks' },
      { label: 'Scholarships Available', href: '/admissions/scholarships' },
    ],
  },
  {
    category: 'Academic Information',
    items: [
      { label: 'Academic Calendar 2024–25', href: '/academics/calendar' },
      { label: 'Rules & Regulations', href: '/academics/rules' },
      { label: 'IQAC Details', href: '/academics/iqac' },
    ],
  },
  {
    category: 'RTI & Ombudsperson',
    items: [
      { label: 'RTI Act — Public Information Officer Details', href: '/administration#rti' },
      { label: 'Ombudsperson Details', href: '/administration#ombudsperson' },
    ],
  },
];

function ExternalIcon() {
  return (
    <svg viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4 flex-shrink-0 opacity-60">
      <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" />
      <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" />
    </svg>
  );
}

export default function MandatoryDisclosuresPage() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <SiteHeader college={college} />

      <PageHero
        college={college}
        title="Mandatory Disclosures"
        subtitle="Regulatory and statutory disclosures as mandated by AICTE, UGC, and the Government of India"
        breadcrumb={['Mandatory Disclosures']}
        bgImage={college.heroBgImage}
      />

      <main className="flex-1 max-w-[1320px] mx-auto w-full px-5 md:px-[60px] py-14">
        <p className="font-hind text-[15px] leading-7 text-[#555555] mb-10 max-w-[720px]">
          In accordance with the AICTE Act and the Right to Information Act 2005, Gokaraju Lailavathi Engineering College publishes the following mandatory disclosures for the information of students, parents, and the public.
        </p>

        <div className="flex flex-col gap-10">
          {disclosures.map((section) => (
            <div key={section.category}>
              {/* Category heading */}
              <div className="flex items-center gap-3 mb-5">
                <h2
                  className="font-hind font-semibold text-[18px]"
                  style={{ color: college.primaryColor }}
                >
                  {section.category}
                </h2>
                <div className="flex-1 h-px" style={{ backgroundColor: 'rgba(91,16,39,0.12)' }} />
              </div>

              {/* Items */}
              <div className="flex flex-col divide-y" style={{ borderColor: 'rgba(91,16,39,0.08)' }}>
                {section.items.map((item) => {
                  const isExternal = item.href.startsWith('http');
                  return (
                    <a
                      key={item.label}
                      href={item.href}
                      target={isExternal ? '_blank' : undefined}
                      rel="noopener noreferrer"
                      className="flex items-center justify-between gap-4 py-3.5 px-4 rounded transition-colors group"
                      style={{ border: '1px solid transparent' }}
                      onMouseEnter={e => {
                        e.currentTarget.style.backgroundColor = 'rgba(91,16,39,0.04)';
                        e.currentTarget.style.borderColor = 'rgba(91,16,39,0.10)';
                      }}
                      onMouseLeave={e => {
                        e.currentTarget.style.backgroundColor = 'transparent';
                        e.currentTarget.style.borderColor = 'transparent';
                      }}
                    >
                      <div className="flex items-center gap-3">
                        <span
                          className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                          style={{ backgroundColor: college.accentColor }}
                        />
                        <span
                          className="font-hind text-[15px] group-hover:underline underline-offset-2"
                          style={{ color: college.primaryColor }}
                        >
                          {item.label}
                        </span>
                      </div>
                      <div className="flex items-center gap-1.5 flex-shrink-0" style={{ color: college.accentColor }}>
                        <span className="font-dm-sans text-[12px] font-medium hidden sm:inline">
                          {isExternal ? 'Download PDF' : 'View'}
                        </span>
                        <ExternalIcon />
                      </div>
                    </a>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </main>

      <Footer college={college} />
    </div>
  );
}
