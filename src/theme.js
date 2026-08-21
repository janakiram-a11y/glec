export function withAlpha(hex, opacity) {
  return hex + Math.round(opacity * 255).toString(16).padStart(2, '0').toUpperCase();
}

const college = {
  id: 'glec',
  shortName: 'GLEC',
  fullName: 'Gokaraju Lailavathi Engineering College',
  tagline: "Building tomorrow's engineers with excellence and integrity.",
  email: 'placements@glwec.in',
  phone: '+91 7207344440',
  admissionsPhone: '+91 7207344440',
  admissionsLabel: 'Admissions helpdesk available for 2025–26',
  address: 'Nizampet Road, Bachupally, Kukatpally, Hyderabad – 500090',
  counsellingCode: 'GLWC',
  counsellingExam: 'TG EAPCET',
  logo: '/imgi_1_GLEC_Logo.png',
  accreditationLogo: '/affiliations.png',
  smallLogo: '/small-logo.png',
  primaryColor: '#5B1027',
  accentColor: '#C32033',
  highlightColor: '#C32033',
  darkAccent: '#222222',
  neutralAccent: '#BFBFBF',
  softAccent: '#F3DAB2',

  socialLinks: {
    instagram: 'https://www.instagram.com/glwec_hyd/',
    facebook: 'https://www.facebook.com/GLWEC',
    linkedin: 'https://www.linkedin.com/company/gokaraju-lailavathi-women-s-engineering-college-glwec/',
    youtube: 'https://www.youtube.com/@gokarajulailavathiwomensen5087/videos/',
  },

  announcements: [
    { text: 'Admissions Open for 2025–26', href: '/admissions', badge: 'NEW' },
    { text: 'TG EAPCET Counselling Code: GLWC', href: '/admissions' },
    { text: '253 Placement Offers | Highest Package 6+ LPA', href: '/placements' },
  ],

  newsItems: [
    { text: 'Attention I B.E. 2025–2026 admitted students: regular classwork commences 28 Aug 2025, Block 1 GLEC. Time: 10:00 AM – 1:00 PM.' },
    { text: 'Document submission procedure — ', linkText: 'Click Here', href: 'https://www.glwec.in/downloads/Document_submission.pdf' },
    { text: 'Job Openings — ', linkText: 'Click Here', href: '/contact' },
    { text: 'GLEC is Co-Education from AY 2024–25. TG-EAPCET Counselling Code: GLWC.' },
    { text: 'Faculty Recruitment Application Form — ', linkText: 'Click Here', href: 'https://www.glwec.in/downloads/Faculty_Recruitment.pdf' },
    { text: 'B.E. CSE — 360 Seats | B.E. CSE AI&ML — 120 Seats' },
    { text: 'For academic verification: ', linkText: 'placements@glwec.in', href: 'mailto:placements@glwec.in' },
  ],

  noticeItems: [
    { text: 'Attention I B.E. 2025–2026 admitted students: regular classwork commences 28 Aug 2025, Block 1 GLEC. Time: 10:00 AM – 1:00 PM.' },
    { text: 'GLEC is Co-Education from AY 2024–25. Boys & Girls can opt for TG-EAPCET-2025. Counselling Code: GLWC.' },
    { text: 'Grievance submission at ', href: 'https://forms.gle/FG8wCibS5UptBFN46', linkText: 'forms.gle/FG8wCibS5UptBFN46' },
  ],

  navLinks: [
    { name: 'Home', href: '/' },
    { name: 'About us', href: '/about' },
    {
      name: 'Administration',
      href: '/administration',
      dropdown: [
        { label: 'Management', href: '/administration/management' },
        { label: 'Sponsoring Body & MOAG', href: '/administration/sponsoring-body' },
        { label: 'Governing Body', href: '/administration/governing-body' },
        { label: 'Registrar', href: '/administration/registrar' },
        { label: 'Principal', href: '/administration/principal' },
        { label: 'ID Plan', href: '/administration/id-plan' },
        { label: 'Anti Ragging Committee', href: '/administration/anti-ragging' },
        { label: 'Anti Sexual Harassment Committee', href: '/administration/anti-harassment' },
        { label: 'Grievance Redressal Policy', href: '/administration/grievance' },
        { label: 'SEGD Cell', href: '/administration/segd' },
        { label: 'Finance Committee', href: '/administration/finance' },
        { label: 'Equal Opportunity Cell', href: '/administration/equal-opportunity' },
        { label: 'ICC', href: '/administration/icc' },
      ],
    },
    {
      name: 'Admissions',
      href: '/admissions/overview',
      dropdown: [
        { label: 'Admissions Overview', href: '/admissions/overview' },
        { label: 'Programs Offered', href: '/admissions/programs' },
        { label: 'Admission Procedure', href: '/admissions/procedure' },
        { label: 'Eligibility Criteria', href: '/admissions/eligibility' },
        { label: 'Fee Structure', href: '/admissions/fee-structure' },
        { label: 'EAPCET Ranks', href: '/admissions/eapcet-ranks' },
        { label: 'Required Documents', href: '/admissions/documents' },
        { label: 'Scholarships', href: '/admissions/scholarships' },
        { label: 'Hostel & Transport', href: '/admissions/hostel-transport' },
        { label: 'Notifications', href: '/admissions/notifications' },
        { label: 'Fee Refund Policy', href: '/admissions/fee-refund' },
        { label: 'FAQs', href: '/admissions/faqs' },
      ],
    },
    {
      name: 'Academics',
      href: '/academics/leadership',
      dropdown: [
        { label: 'Academic Leadership', href: '/academics/leadership' },
        { label: 'Academic Collaborations', href: '/academics/collaborations' },
        { label: 'IQAC', href: '/academics/iqac' },
        { label: 'Library', href: '/academics/library' },
        { label: 'Rules & Regulations', href: '/academics/rules' },
        { label: 'Academic Calendar', href: '/academics/calendar' },
      ],
    },
    {
      name: 'Departments',
      href: '/departments/cse',
      dropdown: [
        { label: 'B.E. (CSE)', href: '/departments/cse' },
        { label: 'B.E. (CSE AI & ML)', href: '/departments/cse-aiml' },
        { label: 'B.E. (IT)', href: '/departments/it' },
        { label: 'B.E. (CS)', href: '/departments/cyber-security' },
        { label: 'B.E. (H&S)', href: '/departments/hs' },
      ],
    },
    {
      name: 'Research',
      href: '/research/publications',
      dropdown: [
        { label: 'Publications',    href: '/research/publications' },
        { label: 'Collaborations',  href: '/research/collaborations' },
        { label: 'Facilities',      href: '/research/facilities' },
        { label: 'Research Awards', href: '/research/awards' },
        { label: 'Ph.D Awarded',    href: '/research/phd-awarded' },
      ],
    },
    { name: 'Placements', href: '/placements' },
    {
      name: 'Examinations',
      href: '/examinations/committee',
      dropdown: [
        { label: 'Examination Committee',       href: '/examinations/committee' },
        { label: 'Notifications',               href: '/examinations/notifications' },
        { label: 'Results',                     href: '/examinations/results' },
        { label: 'Exam Branch Online Services', href: '/examinations/online-services' },
      ],
    },
    { name: 'Contact Us', href: '/contact' },
  ],

  quickLinks: [
    { label: 'Alumni', href: '/alumni' },
    { label: 'Mandatory Disclosures', href: '/mandatory-disclosures' },
    { label: 'Events', href: '/events' },
    { label: 'Infrastructure', href: '/about/infrastructure' },
  ],

  resources: [
    { label: 'Health Facilities', href: '/about/infrastructure#health' },
    { label: 'Sports Facilities', href: '/about/infrastructure#sports' },
    { label: 'Placements', href: '/placements' },
    { label: 'Physically Challenged', href: '/about/infrastructure#accessibility' },
    { label: 'Ombudsperson', href: '/administration#ombudsperson' },
    { label: 'RTI Act', href: '/administration#rti' },
  ],

  footerQuickLinks: [
    { label: 'About College',   href: '/about' },
    { label: 'Chairman',        href: '/about#chairman' },
    { label: 'Vice President',  href: '/about#vice-president' },
    { label: 'Registrar',       href: '/administration/registrar' },
    { label: 'Principal',       href: '/administration/principal' },
    { label: 'Placements',      href: '/placements' },
    { label: 'Infrastructure',  href: '/about/infrastructure' },
    { label: 'SKILL Series',    href: 'https://www.griet.ac.in/griet_skill_series.php' },
    { label: 'Contact Us',      href: '/contact' },
  ],

  footerAdminLinks: [
    { label: 'Management',                      href: '/administration/management' },
    { label: 'Sponsoring Body & MOAG',          href: '/administration/sponsoring-body' },
    { label: 'Governing Body',                  href: '/administration/governing-body' },
    { label: 'Registrar',                       href: '/administration/registrar' },
    { label: 'Principal',                       href: '/administration/principal' },
    { label: 'ID Plan',                         href: '/administration/id-plan' },
    { label: 'Anti Ragging Committee',          href: '/administration/anti-ragging' },
    { label: 'Anti Sexual Harassment Committee',href: '/administration/anti-harassment' },
    { label: 'Grievance Redressal Policy',      href: '/administration/grievance' },
    { label: 'SEGD Cell',                       href: '/administration/segd' },
    { label: 'Finance Committee',               href: '/administration/finance' },
    { label: 'Equal Opportunity Cell',          href: '/administration/equal-opportunity' },
    { label: 'ICC',                             href: '/administration/icc' },
  ],

  // ── Hero ──────────────────────────────────────────────────────────────────
  heroHeading: "Shaping Tomorrow's Engineers with Excellence & Innovation",
  heroSubtext: 'Gokaraju Lailavathi Engineering College, established in 2021, is committed to providing world-class technical education. AICTE approved and affiliated with Osmania University, GLEC nurtures students into competent professionals under the Gokaraju Group legacy.',
  heroCTALabel: 'Admissions Open 2025',
  heroCTAHref: '/admissions/overview',
  heroBgImage: '/imgi_5_aboutusbanner.jpg',

  // ── Stats Bar ─────────────────────────────────────────────────────────────
  statsBarItems: [
    { value: 'AICTE', label: 'Approved' },
    { value: 'Osmania University', label: 'Affiliated' },
    { value: '253', label: 'Placement Offers' },
    { value: '6+ LPA', label: 'Highest Package' },
  ],

  // ── Campus Intro ──────────────────────────────────────────────────────────
  campusIntroLabel: 'Campus Experience',
  campusIntroHeading: 'Be a Part of the GLEC Experience',
  campusIntroDesc: 'Step into a future-focused campus where innovation meets opportunity. At GLEC, students learn beyond classrooms through hands-on labs, collaborative projects, industry exposure, and a thriving student community dedicated to excellence.',
  campusVideoSrc: null,
  campusIntroImage: '/imgi_4_Gokaraju-Rangaraju.jpg',

  // ── Highlight Cards ───────────────────────────────────────────────────────
  highlightCards: [
    { title: 'AICTE Approved', desc: 'Recognized by AICTE with programs meeting national quality standards.' },
    { title: 'Placements', desc: '253 placement offers with top recruiters for the 2025 batch.' },
    { title: 'Community', desc: 'A vibrant student community with innovative clubs and student chapters.' },
  ],

  // ── About ─────────────────────────────────────────────────────────────────
  aboutHeading: 'Welcome to Gokaraju Lailavathi Engineering College',
  aboutP1: 'Gokaraju Lailavathi Engineering College (GLEC) — previously Gokaraju Lailavathi Womens Engineering College (GLWEC) — was established in 2021 by Dr. G. Gangaraju as a self-financed institution under the Gokaraju Rangaraju Educational Society. Approved by AICTE, New Delhi, and affiliated with Osmania University, Hyderabad.',
  aboutP2: 'As a sister concern of GRIET, GLEC adopts its world-class facilities and teaching-learning processes to ensure excellence in education. The college converted to co-education from the academic year 2024–25, now welcoming all students with a TG EAPCET counselling code of GLWC.',
  aboutP3: 'With a management committee comprising experts from various industries and academia, GLEC is committed to fostering experiential learning, innovation, and holistic development — shaping graduates who are career-ready and globally competitive.',
  aboutFeatures: [
    { title: 'AICTE Approved', sub: 'Nationally recognized programs' },
    { title: 'OU Affiliated', sub: 'Osmania University, Hyderabad' },
    { title: 'Expert Faculty', sub: 'Industry & research veterans' },
    { title: 'Modern Infrastructure', sub: 'State-of-the-art labs & campus' },
  ],
  aboutYears: '4+',
  aboutYearsLabel: 'Years of Academic Excellence',
  aboutImage: '/Why choose us.png',
  aboutTotalSeats: '480+',

  // ── Vision & Mission ──────────────────────────────────────────────────────
  // ── About Page Content ────────────────────────────────────────────────────────
  aboutFounders: 'Dr. G. Gangaraju, Chairman of the Gokaraju Rangaraju Educational Society (GRES) and the Laila Group of Industries, is the inspiring force behind Gokaraju Lailavathi Engineering College. A visionary industrialist and philanthropist, Dr. Gangaraju established GRIET in 1997 and extended his commitment to technical education by founding GLEC in 2021. His mission has always been to create institutions that empower young minds with practical skills, ethical values, and the confidence to compete on a global stage.',

  aboutSociety: "Gokaraju Lailavathi Engineering College is established by the Gokaraju Rangaraju Educational Society (GRES), a trust founded with a singular commitment to providing quality higher education in Engineering and Technology. GRES operates Gokaraju Rangaraju Institute of Engineering & Technology (GRIET), one of Hyderabad's most reputed autonomous engineering colleges, and extended its educational vision to GLEC in 2021. The Society is committed to fostering centres of academic excellence that produce globally competent engineers.",

  aboutDetailedParagraphs: [
    "Gokaraju Lailavathi Engineering College (GLEC) — formerly Gokaraju Lailavathi Women's Engineering College (GLWEC) — was established in 2021 under the Gokaraju Rangaraju Educational Society by Dr. G. Gangaraju. Approved by AICTE, New Delhi, and affiliated with Osmania University, Hyderabad, GLEC is a self-financed institution committed to delivering world-class engineering education.",
    'As a sister institution of GRIET, GLEC inherits a culture of academic rigour, research orientation, and industry engagement developed over 25+ years. The college converted to co-education from the academic year 2024–25 and now offers B.E. programmes in Computer Science & Engineering, CSE (AI & ML), Information Technology, Computer Science, and Humanities & Sciences.',
    'The institution is led by a visionary management committee comprising industry experts, academic leaders, and research scholars. GLEC operates from a modern, fully equipped campus at Nizampet Road, Bachupally, Hyderabad, with state-of-the-art laboratories, a central library, sports facilities, and residential hostels.',
    "GLEC's flagship skill development programmes — NIPUN (industry bridge), DHI (communication & leadership), and SEEKH (experiential learning) — ensure that graduates are not only technically proficient but also industry-ready communicators and problem solvers. The 2025 batch recorded 253 placement offers with a highest package of 6+ LPA from recruiters including Microsoft, Oracle, TCS, Capgemini, Infosys, and Deloitte.",
    'Driven by values of Excellence, Integrity, Innovation, and Service to the Nation, GLEC aspires to be a world-class engineering college that inspires young technocrats to become globally competent professionals and leaders committed to societal development.',
  ],

  vision: 'To be world class engineering college for imparting experiential, innovative and critical skills addressing societal problems. Inspiring young technocrats to become globally competent in technical education and research to emerge as world class leaders.',

  mission: [
    'To promote experiential learning in students by engaging them in hands on experience and reflection, so that, they are able to connect theories and knowledge learned in the classroom to real-world situations.',
    'To create an ambience in which novel ideas, research and development flourish in order to shape the emerging innovators.',
    'To provide infrastructure and facilities to meet the latest technology trends.',
    'To avail necessary support for skill enhancement to reduce the industry-academia gap.',
  ],

  qualityPolicy: 'To provide an integrated learning environment to enable students to grow towards their full potential and meet the high expectations of the Industry and the Society.',

  strategies: [
    'Develop and sustain a qualified, research-oriented, and industry-experienced faculty pool.',
    'Forge strategic partnerships with leading industries for internships, projects, and placements.',
    'Continuously update curricula to align with emerging technologies and national/global industry needs.',
    'Foster a culture of innovation through research centres, student clubs, and entrepreneurship cells.',
    'Implement outcome-based education (OBE) with regular feedback loops from alumni, industry, and academia.',
    'Provide comprehensive student support — mentoring, counselling, health, sports, and career services.',
  ],

  coreValues: [
    { name: 'Excellence', desc: 'Continually strive to achieve the highest standards in education and research.' },
    { name: 'Integrity', desc: 'Sustain an atmosphere of honesty, openness, and transparency in all dealings.' },
    { name: 'Innovation', desc: 'Promote a culture of curiosity and reward originality of thought and action.' },
    { name: 'Entrepreneurship', desc: 'Promote and nurture entrepreneurial spirit among students.' },
    { name: 'Leadership', desc: 'Develop leaders with ability to find creative solutions to the problems of the industry.' },
    { name: 'Sustainability', desc: 'Conduct research that addresses critical global challenges and promote public awareness of the issues involved.' },
    { name: 'Service to the Nation', desc: 'Utilize technology for building national wealth.' },
  ],

  // ── Academic Leadership Committee (Academics page) ───────────────────────
  academicLeadershipCommittee: {
    year: '2025–26',
    description: 'The Academic Leadership Committee at GLEC exercises general supervision over all academic work of the institution, providing guidance on instruction methods, research standards, curriculum development, and student welfare in compliance with AICTE and Osmania University norms.',
    responsibilities: [
      'General supervision over the academic work of the institute',
      'Guidance on effective instruction methods and pedagogical best practices',
      'Maintenance of research standards and outcome-based education',
      'Recommendation of new academic programmes to the Governing Body',
      'Advice on institutional scholarships, awards, and student welfare measures',
      'Coordination between departments for academic calendar and examination planning',
    ],
    members: [
      { sno: 1, name: 'Dr. A. Sai Hanuman',   designation: 'Principal',                        role: 'Chairman' },
      { sno: 2, name: 'Dr. Padmalaya Nayak',   designation: 'Professor & Head, CSE & IT',       role: 'Member' },
      { sno: 3, name: 'Dr. J. Kishore Babu',   designation: 'Assistant Professor & Head, H&S',  role: 'Member' },
      { sno: 4, name: 'Dr. K. Deepthi Varma',  designation: 'Incharge, Exam Branch',            role: 'Member' },
      { sno: 5, name: 'Mr. P. Gopi Krishna',   designation: 'Controller of Examinations',       role: 'Member' },
      { sno: 6, name: 'Mr. K. Srinivasa Rao',  designation: 'Incharge, Infrastructure',         role: 'Member' },
      { sno: 7, name: 'Mrs. B. Aruna',          designation: 'Incharge, Training & Placement',  role: 'Member' },
    ],
  },

  // ── Library ───────────────────────────────────────────────────────────────
  library: {
    description: 'The Central Library at GLEC is a cornerstone of academic enrichment, providing curated materials spanning books, magazines, encyclopaedias, and journals. The collection supports coursework, competitive exam preparation, and personal development across all B.E. programme disciplines.',
    stats: [
      { label: 'Volumes',          value: '5,776' },
      { label: 'Titles',           value: '1,357' },
      { label: 'Journals',         value: '48' },
      { label: 'Reading Capacity', value: '150 seats' },
      { label: 'Multimedia PCs',   value: '10' },
      { label: 'LMS System',       value: '1' },
    ],
    facilities: [
      { title: 'Print Collection',      desc: '5,776 volumes across 1,357 titles covering all B.E. programme disciplines including textbooks, reference books, encyclopaedias, and technical publications.' },
      { title: 'Periodicals & Journals', desc: '48 national and international journals and periodicals subscribed, exceeding the AICTE-mandated requirement of 12 periodicals.' },
      { title: 'Reading Room',          desc: 'Spacious reading hall with seating capacity for 150 students, with individual study carrels and group discussion corners for focused academic work.' },
      { title: 'Multimedia Lab',        desc: '10 multimedia PCs with internet access for digital learning, NPTEL lectures, e-books, and online journal access.' },
      { title: 'Library Management System', desc: 'Automated LMS for seamless book cataloguing, issue/return, and member management — ensuring efficient and transparent library operations.' },
      { title: 'Digital Resources',     desc: 'Access to e-books, NPTEL video lectures, and digital databases supporting self-learning, research, and competitive exam preparation.' },
    ],
    rules: [
      'Students must produce their library card to borrow books.',
      'A maximum of two books may be issued at a time for a period of 14 days.',
      'Books not returned on time attract a fine of ₹2 per day per book.',
      'Reference books, journals, and periodicals are for in-library use only.',
      'Students are responsible for any damage or loss of library books.',
      'Silence must be maintained inside the library and reading room at all times.',
      'Mobile phones must be switched off or kept on silent mode inside the library.',
      'Bags and personal belongings must be deposited at the entry counter.',
    ],
    hours: 'Monday–Saturday: 9:00 AM – 5:00 PM',
    contact: 'library@glwec.in',
  },

  // ── Leadership ────────────────────────────────────────────────────────────
  leadership: [
    {
      name: 'Dr. Gokaraju Ganga Raju',
      title: 'Chairman',
      institution: 'Chairman, GRIET',
      credentials: 'B.Pharma., Ph.D. | Chairman, Laila Group of Companies',
      image: 'https://www.glwec.in/images/Gokaraju_Ganga_Raju.jpg',
      bio: 'Dr. Gokaraju Ganga Raju is the founder of Gokaraju Rangaraju Educational Society (GRES) and Chairman of Laila Group of Companies. An Indian politician and former Member of Parliament to the 16th Lok Sabha from Narsapuram, Andhra Pradesh, he initiated both engineering and pharmacy education under GRES in 1997. His dynamic, optimistic, and compassionate leadership has guided GRIET to become one of the foremost engineering institutions in Telangana. He is renowned for his deep commitment to quality education and student welfare.',
    },
    {
      name: 'Sri G.V.K. Ranga Raju',
      title: 'Vice President',
      institution: 'Vice President, GRIET',
      credentials: 'B.Tech. | Managing Director, Delta Paper Mills',
      image: 'https://www.glwec.in/images/Ranga_Raju.jpg',
      bio: 'Sri G.V.K. Ranga Raju is the eldest son of Dr. G. Ganga Raju and oversees the day-to-day administrative and institutional matters of GRIET. As Managing Director of Delta Paper Mills, he brings strong industry and management acumen to the institution\'s operations. He is a firm advocate of technology-driven education, student empowerment, and building an environment that nurtures innovation and entrepreneurship among students.',
    },
  ],

  // ── Why Choose GLEC ───────────────────────────────────────────────────────
  whyChooseLabel: 'Why Choose GLEC',
  whyChooseHeading: 'Academic Excellence That Shapes Your Success',
  whyChooseCards: [
    { title: 'Quality Education', desc: 'Programs designed with strong educational benchmarks and AICTE-approved quality standards for career-ready graduates.' },
    { title: 'Career Advantage', desc: '253 placement offers across top companies for the 2025 batch — with Microsoft, Oracle, Capgemini, Infosys, and more.' },
    { title: 'Innovative Teaching', desc: 'Teaching practices aligned with modern industry needs through NIPUN, DHI, and SEEKH skill-development initiatives.' },
    { title: 'Skill Development', desc: 'Dedicated programs bridging the academia-industry gap through experiential learning and communication workshops.' },
    { title: 'Innovation Culture', desc: 'Strong support for research, innovation clubs, student-driven projects, and emerging technology exploration.' },
    { title: 'GRIET Legacy', desc: "Backed by the Gokaraju Group — sharing GRIET's world-class infrastructure, faculty network, and 25+ years of excellence." },
  ],

  // ── Academic Programs ─────────────────────────────────────────────────────
  academicProgramsLabel: 'Academic Programs',
  academicProgramsHeading: 'Programs Designed for Future Engineers',
  academicProgramsDesc: 'Explore career-focused programs built to prepare students for innovation, leadership, and industry success.',
  academicPrograms: [
    {
      count: 'B.E.',
      title: 'Computer Science & Engineering',
      seats: 360,
      desc: 'Industry-focused engineering degree with strong foundations in software, systems, and emerging technologies. Intake: 360 seats.',
      href: '/departments/cse',
    },
    {
      count: 'B.E.',
      title: 'CSE (Artificial Intelligence & Machine Learning)',
      seats: 120,
      desc: 'Specialization in Artificial Intelligence and Machine Learning for future-ready, high-demand careers. Intake: 120 seats.',
      href: '/departments/cse-aiml',
    },
    {
      count: 'B.E.',
      title: 'Information Technology',
      seats: 60,
      desc: 'Comprehensive IT program covering networks, databases, cloud computing, and enterprise systems. Intake: 60 seats.',
      href: '/departments/it',
    },
    {
      count: 'B.E.',
      title: 'Computer Science',
      seats: 60,
      desc: 'Programme covering AI, cybersecurity, data science, cloud computing, software development, and next-generation computing. Intake: 60 seats.',
      href: '/departments/cyber-security',
    },
    {
      count: 'B.E.',
      title: 'Humanities & Sciences',
      seats: null,
      desc: 'Foundational program in mathematics, physics, chemistry, English, and environmental sciences supporting all engineering disciplines.',
      href: '/departments/hs',
    },
  ],

  // ── Career Outcomes ───────────────────────────────────────────────────────
  careerLabel: 'Career Outcomes',
  careerHeading: 'Where Talent Meets Opportunity',
  careerDesc: 'GLEC graduates are hired by top recruiters across technology and core engineering domains. Strong placement training, mentoring through NIPUN and SEEKH initiatives, and industry collaborations help students launch successful careers.',
  careerHighestPackage: '6+ LPA',
  careerOffersCount: '253+',
  careerRecruiters: [
    'Microsoft', 'Oracle', 'Capgemini', 'TCS', 'Infosys',
    'Deloitte', 'Cognizant', 'Accenture', 'Wipro', 'TechMahindra',
    'Pega Systems', 'ADP', 'Factset', 'NetCracker', 'S&P Capital IQ', 'L&T Constructions',
  ],
  careerImage: '/Career Outcomes.png',

  // ── Research & Initiatives ────────────────────────────────────────────────
  researchLabel: 'Our Initiatives',
  researchHeading: 'Innovation & Skill Development at GLEC',
  researchStats: [
    {
      count: 'NIPUN',
      label: 'Industry Bridge Program',
      desc: 'Nurtures innovative thinking and bridges the academia-industry gap through project-based learning.',
    },
    {
      count: 'DHI',
      label: 'Communication & Leadership',
      desc: 'Develops public speaking, essay writing, dramatics, debates, JAM sessions, and group discussions.',
    },
    {
      count: 'SEEKH',
      label: 'Experiential Learning',
      desc: 'Delivers hands-on experiential learning for budding engineers through real-world application.',
    },
    {
      count: '253+',
      label: 'Placement Offers',
      desc: 'Total placement offers for the 2025 batch across top companies in technology and engineering.',
    },
  ],

  // ── Campus Life ───────────────────────────────────────────────────────────
  campusLifeLabel: 'Student Experience',
  campusLifeHeading: 'Vibrant Campus Life',
  campusLifeCards: [
    { title: 'Cultural Events & Fests', desc: 'Annual flagship events bringing students together from across the campus.', img: '/Cultural event & Fests.png', large: true },
    { title: 'Sports Facilities', desc: 'Indoor and outdoor sports complexes for every student.', img: '/Sports fecilities.png' },
    { title: 'Innovation Clubs', desc: 'Student-run tech and non-tech chapters fostering creativity.', img: '/Innovation clubs.png' },
    { title: 'Hostel Life', desc: 'Comfortable, secure, and vibrant residential halls.', img: '/Hostel life.png' },
    { title: 'Central Library', desc: 'A hub of knowledge with thousands of curated resources.', img: '/Central library.png' },
  ],

  // ── Departments ───────────────────────────────────────────────────────────
  departments: [
    {
      slug: 'cse',
      name: 'Computer Science & Engineering',
      shortName: 'CSE',
      degree: 'B.E.',
      ugIntake: 360,
      established: 2021,
      accreditation: 'AICTE Approved',
      heroBgImage: '/imgi_5_aboutusbanner.jpg',
      about: [
        'The Department of Computer Science & Engineering at Gokaraju Lailavathi Engineering College was established with the primary objective of imparting quality technical education and fostering research-oriented thinking. The department produces graduates who are technically proficient and equipped with problem-solving, communication, and leadership skills demanded by the global industry.',
        "The department offers the B.E. programme in CSE with an intake of 360 students. Supported by GLEC's flagship skill development initiatives — NIPUN, SEEKH, and DHI — the department ensures strong academia-industry alignment. With experienced faculty, state-of-the-art laboratories, and active placement support, the CSE department has delivered 253+ placement offers for the 2025 batch.",
      ],
      announcements: [
        'B.E. CSE 2025–26 admissions open — TG EAPCET code: GLWC',
        'Industry Expert Lecture on Cloud Architecture — 20 Feb 2025',
        'Hackathon 2025: Register by 28 February 2025',
        'Guest Lecture: "AI in Production" by Microsoft Engineer — 15 Mar 2025',
        'NIPUN Industry Bridge Programme — Batch 4 registrations open',
      ],
      vision: 'Producing quality graduates who are trained in the latest software technologies and related skill sets and tools, so as to make India a world leader in software products and services.',
      mission: [
        'To create a faculty pool which has a deep understanding and passion for algorithmic thought process and who can in turn impart these skills to the students. The faculty will be nurtured to retain their cutting edge all through their tenure.',
        'To impart in students knowledge & skills in Computer Science which will not be limited by university prescribed curriculum. These skills may include programming languages, frameworks, platforms, etc., which will help in development of a well-rounded Computer Science professional.',
        'To facilitate the use of multimodal learning platforms including e-learning, blended learning, remote testing, etc.',
        'To expose the students to different domains, different paradigms and to the financial and commercial underpinnings of the modern business environment.',
        'To foster a temperament of research and innovation in the students.',
        "To create a socially conscious and emotionally mature individuals who are aware of India's challenges and opportunities and who understand and appreciate the role and responsibility of engineers towards achieving the goal of job and wealth creation.",
      ],
      peos: [
        'Graduates who will have successful careers in computer related engineering fields or will be able to successfully pursue advanced higher education degrees.',
        'Graduates who can provide solutions to challenging problems in their profession by applying computer engineering knowledge.',
        'Graduates with skill sets for life-long learning and for rapidly adapting to the changing work environment.',
        'Graduates who can communicate effectively, work collaboratively and exhibit high levels of professionalism and ethical responsibility.',
      ],
      hod: {
        name: 'Dr. Padmalaya Nayak',
        title: 'Professor & Head of the Department, CSE/IT',
        image: 'https://www.glwec.in/images/padmalaya.jpg',
        bio: [
          'Dr. Padmalaya Nayak is working as a Professor and Head of the Department, CSE/IT, at Gokaraju Lailavathi Engineering College, Hyderabad, under Osmania University, Hyderabad. Prior to that, she was working as a professor in the department of CSE at Gokaraju Rangaraju Institute of Engineering and Technology, Hyderabad, since 2009. She obtained her doctoral degree from the National Institute of Technology, Tiruchirappalli, India, in 2010 and her Master\'s in CSE from the University of Madras in 2002. She has 23 years of teaching and research experience in the area of Ad hoc and Sensor Networks. She has published more than 80 research papers in various peer-reviewed International Journals and Conferences. She has visited many countries to present her research paper at many International Conferences. She has also contributed 7 book chapters, one Indian Patent, and one Australian Patent to her credit. Prof. Nayak is the Editor of three books published by Taylor and Francis. She is the Reviewer of many IEEE/SPRINGER/ELSEVIER Journals and Conferences.',
          'Prof. Nayak has completed many funding projects sponsored by AICTE and UGC. She has received the Young Women Scientist Award from DRDO experts, the 100 Best Professor Award from the World Education Congress, highly cited paper "UILA award" and the Women Excellence Award by ILDC. Moreover, she has received the "Best Researcher Award" for the last 5 consecutive years from GRIET and various Professional bodies for her research contributions in various domain of CSE. She is a Senior Member of IEEE, IETE, CSI, and IEANG professional bodies. She is also a member of the advisory committee and Technical Program Committee for several International Conferences and Professional bodies like IEEE, CSI, IETE, IAENG, etc. Prof. Nayak is the Convenor of an International Conference (ICWSNUCA), proceedings approved by Springer. There are 2 Research Scholars who completed Ph. D. under her guidance and 2 research scholars are pursuing Ph.D. under her guidance. Her h index is 17, her i10 index is 23, and one thousand five hundred eighty citations to her credit. Her research interest includes Wireless Sensor Networks, IoT Networks, Network Security, AI ML, DL, etc.',
        ],
      },
      faculty: [
        { id: '7069', name: 'Dr. A Ushasree',                    designation: 'Assistant Professor', qualification: 'M.Tech, Ph.D',    doj: '2024-03-20', email: 'ushasreemishra@gmail.com' },
        { id: '7014', name: 'Mrs. K. Jaya Jones',                designation: 'Assistant Professor', qualification: 'M.Tech',           doj: '2021-10-18', email: 'jayajones.glwec@gmail.com' },
        { id: '7017', name: 'Mrs. P M Madhuri',                  designation: 'Assistant Professor', qualification: 'M.Tech, (Ph.D)',   doj: '2021-11-01', email: 'pmmadhuri18@gmail.com' },
        { id: '7030', name: 'Mrs. Ch. Sandhya',                  designation: 'Assistant Professor', qualification: 'M.Tech',           doj: '2022-09-23', email: 'sandy.sangem@gmail.com' },
        { id: '7035', name: 'Mr. M Bapi Raju',                   designation: 'Assistant Professor', qualification: 'M.Tech',           doj: '2022-09-01', email: 'bapiraju4@gmail.com' },
        { id: '7039', name: 'Mrs. S Priyanka',                   designation: 'Assistant Professor', qualification: 'M.Tech (Ph.D)',    doj: '2023-01-23', email: 'priyanka.glwec@gmail.com' },
        { id: '7042', name: 'Mrs. J Siva Naga Jyothi',           designation: 'Assistant Professor', qualification: 'M.Tech (Ph.D)',    doj: '2023-04-01', email: 'jastijyothi@gmail.com' },
        { id: '7043', name: 'Mr. V L Kartheek',                  designation: 'Assistant Professor', qualification: 'M.Tech (Ph.D)',    doj: '2023-04-06', email: 'kartheekv999@gmail.com' },
        { id: '7046', name: 'Mr. R. Sai Nikhil',                 designation: 'Assistant Professor', qualification: 'M.Tech',           doj: '2023-04-17', email: 'nikoonikhil22@gmail.com' },
        { id: '7048', name: 'Mrs. K Divya Sri',                  designation: 'Assistant Professor', qualification: 'M.Tech',           doj: '2023-05-01', email: 'dvsri29@gmail.com' },
        { id: '7049', name: 'Mrs. A Swetha',                     designation: 'Assistant Professor', qualification: 'M.Tech (Ph.D)',    doj: '2023-05-26', email: 'andhuri.swetha503@gmail.com' },
        { id: '7050', name: 'Mrs. Katha Beulah',                 designation: 'Assistant Professor', qualification: 'M.Tech',           doj: '2023-07-30', email: 'beulah1307@gmail.com' },
        { id: '7051', name: 'Mr. Rajkumar Patil',                designation: 'Assistant Professor', qualification: 'M.Tech (Ph.D)',    doj: '2023-08-07', email: 'rajkpatil@gmail.com' },
        { id: '7052', name: 'Mr. CH Dhanunjayarao',              designation: 'Assistant Professor', qualification: 'M.Tech (Ph.D)',    doj: '2023-08-17', email: 'drao.mtech@gmail.com' },
        { id: '7056', name: 'Mrs. Sara Pallavi',                 designation: 'Assistant Professor', qualification: 'M.Tech',           doj: '2023-11-08', email: 'sarapallavi@gmail.com' },
        { id: '7058', name: 'Mr. K Sudheer Kumar',               designation: 'Assistant Professor', qualification: 'M.Tech (Ph.D)',    doj: '2023-12-08', email: 'sudheerkumar19@gmail.com' },
        { id: '7060', name: 'Mrs. Nangunuri Swathi',             designation: 'Assistant Professor', qualification: 'M.Tech',           doj: '2024-02-02', email: 'smailycherry939@gmail.com' },
        { id: '7061', name: 'Mrs. K Ganga Swathi',               designation: 'Assistant Professor', qualification: 'M.Tech (Ph.D)',    doj: '2024-02-08', email: 'kapuganti.ganga@gmail.com' },
        { id: '7062', name: 'Mrs. Mukkawar Sowmya',              designation: 'Assistant Professor', qualification: 'M.Tech',           doj: '2024-02-08', email: 'sowmya.mukkawar@gmail.com' },
        { id: '7063', name: 'Mr. K V Nanda Kishore',             designation: 'Assistant Professor', qualification: 'M.Tech (Ph.D)',    doj: '2024-03-11', email: 'nandakishoreconnect@gmail.com' },
        { id: '7064', name: 'Mrs. Sraddha Roy Choudhury',        designation: 'Assistant Professor', qualification: 'M.Tech',           doj: '2024-02-16', email: 'sraddharoychoudhury6@gmail.com' },
        { id: '7065', name: 'Mrs. Jampa Sakunthala Devi',        designation: 'Assistant Professor', qualification: 'M.Tech',           doj: '2024-02-16', email: 'jsdevi.jampa@gmail.com' },
        { id: '7066', name: 'Mrs. Bhakare Saraswathi Sambhaji',  designation: 'Assistant Professor', qualification: 'M.Tech',           doj: '2024-02-20', email: 'sarubhakare@gmail.com' },
        { id: '7070', name: 'Mrs. GL Suma Lata',                 designation: 'Assistant Professor', qualification: 'M.Tech (Ph.D)',    doj: '2024-03-20', email: 'sumaprasadgl@gmail.com' },
        { id: '7071', name: 'Mrs. Aruna B',                      designation: 'Assistant Professor', qualification: 'M.Tech',           doj: '2024-03-14', email: 'arunapinjala478@gmail.com' },
        { id: '7074', name: 'Mrs. Varadi Lakshmi',               designation: 'Assistant Professor', qualification: 'M.Tech',           doj: '2024-02-23', email: 'lakshmivaradi@gmail.com' },
        { id: '7076', name: 'Mrs. Vani Vurla',                   designation: 'Assistant Professor', qualification: 'M.Tech',           doj: '2024-03-01', email: 'vanidornala@gmail.com' },
        { id: '7077', name: 'Mrs. Yelchuri Venkata Naga Vasavi', designation: 'Assistant Professor', qualification: 'M.Tech',           doj: '2024-03-04', email: 'yakkalavasavi92@gmail.com' },
        { id: '7079', name: 'Mrs. Ravula Savitha',               designation: 'Assistant Professor', qualification: 'M.Tech',           doj: '2024-03-11', email: 'savitharavula@gmail.com' },
        { id: '7080', name: 'Mrs. M Divya Sri',                  designation: 'Assistant Professor', qualification: 'M.Tech',           doj: '2024-03-13', email: 'divya.madhavarapu93@gmail.com' },
        { id: '7081', name: 'Mrs. Meghana N',                    designation: 'Assistant Professor', qualification: 'M.Tech',           doj: '2024-03-18', email: 'meghana1389@gmail.com' },
        { id: '7083', name: 'Mrs. Burra Sindhura',               designation: 'Assistant Professor', qualification: 'M.Tech',           doj: '2024-04-25', email: 'sindhura.pb2015@gmail.com' },
        { id: '7086', name: 'Mrs. Atluri Bhavya Sri',            designation: 'Assistant Professor', qualification: 'M.Tech',           doj: '2024-05-23', email: 'bhavyasri.atluri@gmail.com' },
        { id: '7079', name: 'Mr. Chandra Mohan T',               designation: 'Assistant Professor', qualification: 'M.Tech',           doj: '2022-06-01', email: 'mohan0901@gmail.com' },
      ],
      achievements: [
        { count: '360', label: 'UG Intake', desc: 'B.E. Computer Science & Engineering' },
        { count: '253+', label: 'Placements 2025', desc: 'Offers from top tech recruiters' },
        { count: '4+', label: 'Years of Excellence', desc: 'Established since GLEC inception in 2021' },
        { count: '20+', label: 'Expert Faculty', desc: 'Industry & research experienced staff' },
      ],
      news: [
        { title: 'Hackathon 2025', desc: 'CSE students secured top positions at the inter-college hackathon organised at GRIET campus.', date: 'Feb 2025' },
        { title: 'Cloud Computing Workshop', desc: 'Two-day hands-on workshop on AWS and Azure cloud platforms conducted by industry experts.', date: 'Jan 2025' },
        { title: 'NIPUN Batch 4 Launch', desc: 'New batch of the NIPUN Industry Bridge Programme launched with 120 CSE students enrolled.', date: 'Dec 2024' },
        { title: 'Guest Lecture: AI in Production', desc: 'Microsoft engineer delivered an expert session on deploying machine learning models at scale.', date: 'Nov 2024' },
        { title: 'Orientation Programme 2024–25', desc: 'Welcome orientation for the 2024–25 B.E. CSE batch with industry mentors and faculty.', date: 'Aug 2024' },
        { title: 'Cybersecurity Awareness Seminar', desc: 'Department organised a seminar on cybersecurity best practices for students and faculty.', date: 'Sep 2024' },
      ],
      alumni: [
        { name: 'Priya Sharma (2022)', role: 'Software Engineer', company: 'Microsoft' },
        { name: 'Rahul Verma (2022)', role: 'Data Analyst', company: 'Capgemini' },
        { name: 'Sneha Reddy (2023)', role: 'Cloud Engineer', company: 'TCS' },
        { name: 'Aditya Kumar (2023)', role: 'Full Stack Developer', company: 'Infosys' },
        { name: 'Divya Nair (2024)', role: 'ML Engineer', company: 'Oracle' },
        { name: 'Karthik Rao (2024)', role: 'DevOps Engineer', company: 'Accenture' },
      ],
      facilities: [
        { title: 'Advanced Computing Labs', desc: 'State-of-the-art labs equipped with high-performance workstations, latest software tools, and cloud computing access for hands-on learning in programming, AI/ML, and networks.' },
        { title: 'Training & Skill Development', desc: 'Dedicated training cells running NIPUN, SEEKH, and DHI programmes — covering technical skills, communication, aptitude, and industry project simulations for placement readiness.' },
        { title: 'Campus Placements', desc: 'Exceptional placement support with 253+ offers in 2025. Dedicated placement coordinators, mock interviews, resume workshops, and active recruiter partnerships with 16+ top companies.' },
      ],
    },
    {
      hod: {
        name: 'Dr. Padmalaya Nayak',
        title: 'Professor & Head of the Department, CSE/IT',
        image: 'https://www.glwec.in/images/padmalaya.jpg',
        bio: [
          'Dr. Padmalaya Nayak is working as a Professor and Head of the Department, CSE/IT, at Gokaraju Lailavathi Engineering College, Hyderabad, under Osmania University, Hyderabad. Prior to that, she was working as a professor in the department of CSE at Gokaraju Rangaraju Institute of Engineering and Technology, Hyderabad, since 2009. She obtained her doctoral degree from the National Institute of Technology, Tiruchirappalli, India, in 2010 and her Master\'s in CSE from the University of Madras in 2002. She has 23 years of teaching and research experience in the area of Ad hoc and Sensor Networks. She has published more than 80 research papers in various peer-reviewed International Journals and Conferences. She has visited many countries to present her research paper at many International Conferences. She has also contributed 7 book chapters, one Indian Patent, and one Australian Patent to her credit. Prof. Nayak is the Editor of three books published by Taylor and Francis. She is the Reviewer of many IEEE/SPRINGER/ELSEVIER Journals and Conferences.',
          'Prof. Nayak has completed many funding projects sponsored by AICTE and UGC. She has received the Young Women Scientist Award from DRDO experts, the 100 Best Professor Award from the World Education Congress, highly cited paper "UILA award" and the Women Excellence Award by ILDC. Moreover, she has received the "Best Researcher Award" for the last 5 consecutive years from GRIET and various Professional bodies for her research contributions in various domain of CSE. She is a Senior Member of IEEE, IETE, CSI, and IEANG professional bodies. She is also a member of the advisory committee and Technical Program Committee for several International Conferences and Professional bodies like IEEE, CSI, IETE, IAENG, etc. Prof. Nayak is the Convenor of an International Conference (ICWSNUCA), proceedings approved by Springer. There are 2 Research Scholars who completed Ph. D. under her guidance and 2 research scholars are pursuing Ph.D. under her guidance. Her h index is 17, her i10 index is 23, and one thousand five hundred eighty citations to her credit. Her research interest includes Wireless Sensor Networks, IoT Networks, Network Security, AI ML, DL, etc.',
        ],
      },
      slug: 'cse-aiml',
      name: 'CSE (Artificial Intelligence & Machine Learning)',
      shortName: 'CSE AI&ML',
      degree: 'B.E.',
      ugIntake: 120,
      established: 2022,
      accreditation: 'AICTE Approved',
      heroBgImage: '/imgi_5_aboutusbanner.jpg',
      about: [
        'The Department of CSE (Artificial Intelligence & Machine Learning) at Gokaraju Lailavathi Engineering College was established in 2022 to meet the growing industry demand for AI-skilled professionals. Offering a B.E. programme with an intake of 120 students, the department is dedicated to producing graduates who can design, develop, and deploy intelligent systems that solve real-world problems.',
        "The curriculum integrates core computer science foundations with specialised modules in machine learning, deep learning, natural language processing, computer vision, and data science. Backed by GLEC's NIPUN, SEEKH, and DHI initiatives, students gain hands-on project experience, strong communication skills, and industry exposure — making them placement-ready from day one.",
      ],
      announcements: [
        'B.E. CSE (AI & ML) 2025–26 admissions open — TG EAPCET code: GLWC',
        'Deep Learning & Computer Vision Workshop — March 2025',
        'AI Hackathon 2025: Registrations open till 10 March',
        'Guest Lecture: "Generative AI in Enterprise" — 22 Feb 2025',
        'SEEKH Experiential Learning Batch 3 — Enrol Now',
      ],
      vision: 'Develop skilled technocrats, innovative researchers, and visionary entrepreneurs in Artificial Intelligence & Machine Learning, fostering an ecosystem that makes a significant impact on national growth.',
      mission: [
        'To equip students with technical expertise through diverse learning methodologies and value-added courses.',
        'To foster a research-oriented mindset by encouraging participation in innovative projects and publications.',
        'To provide real-world exposure through internships and mentorships in collaboration with industries and premier institutions.',
        'To nurture a collaborative learning environment that bridges the gap between academia and industry.',
      ],
      peos: [
        'Graduates leverage artificial intelligence, machine learning, and data science to create innovative technological solutions.',
        'Graduates integrate cybersecurity, cloud computing, and blockchain technologies to enhance digital security and efficiency.',
        'Graduates apply software engineering principles and automation tools to develop scalable and reliable computing systems.',
        'Graduates contribute to smart technologies, IoT, and intelligent systems for solving real-world industry challenges.',
        'Graduates embrace continuous learning to stay ahead in advancements like quantum computing, big data, and edge computing.',
        'Graduates uphold ethical AI practices, data privacy, and responsible computing while working in diverse technological environments.',
      ],
      faculty: [
        { id: '7097', name: 'Dr. Gutha Jaya Krishna',  designation: 'Associate Professor',  qualification: 'M.Tech, Ph.D',   doj: '2025-04-16', email: 'krishna.gutha@gmail.com' },
        { id: '7047', name: 'Dr. Harika Vanam',         designation: 'Assistant Professor', qualification: 'M.Tech, Ph.D',   doj: '2023-05-01', email: 'harikaphd17@gmail.com' },
        { id: '7026', name: 'Dr. Archana Mullapudi',    designation: 'Assistant Professor', qualification: 'M.Tech, Ph.D.',  doj: '2022-07-01', email: 'archanamullapudi21@gmail.com' },
        { id: '7036', name: 'Mrs. Ch. Mani Pushpa',     designation: 'Assistant Professor', qualification: 'M.Tech',         doj: '2022-09-01', email: 'maniaddla@gmail.com' },
        { id: '7094', name: 'Mrs. B. Grace',             designation: 'Assistant Professor', qualification: 'M.Tech',         doj: '2025-03-15', email: 'grace5584@gmail.com' },
        { id: '7095', name: 'Mrs. K S Niraja',           designation: 'Assistant Professor', qualification: 'M.Tech, (Ph.D)', doj: '2025-03-20', email: 'niraja.ksvce@gmail.com' },
        { id: '7093', name: 'Shaik Naseer Baba',         designation: 'Assistant Professor', qualification: 'M.Tech',         doj: '2025-03-11', email: 'naseerbaba7866@gmai.com' },
      ],
      achievements: [
        { count: '120', label: 'UG Intake', desc: 'B.E. CSE (Artificial Intelligence & Machine Learning)' },
        { count: '50+', label: 'Placements 2025', desc: 'Offers in AI, ML & Data Science roles' },
        { count: '3+', label: 'Years of Excellence', desc: 'Established since 2022 at GLEC' },
        { count: '12+', label: 'Expert Faculty', desc: 'Specialists in AI, ML, NLP & Computer Vision' },
      ],
      news: [
        { title: 'AI Hackathon 2025', desc: 'CSE AI&ML students won second place at the inter-college AI hackathon, presenting a real-time object detection model.', date: 'Feb 2025' },
        { title: 'Deep Learning Workshop', desc: 'Two-day intensive workshop on CNNs and Transformers conducted in collaboration with an industry AI research team.', date: 'Jan 2025' },
        { title: 'Guest Lecture: Generative AI', desc: 'Senior ML Engineer from a leading tech firm delivered a session on LLMs and their enterprise deployment strategies.', date: 'Feb 2025' },
        { title: 'SEEKH Batch 3 Launch', desc: 'Third batch of the SEEKH experiential learning programme launched with 60 CSE AI&ML students building end-to-end ML pipelines.', date: 'Dec 2024' },
        { title: 'Research Paper Publication', desc: 'Faculty and final-year students co-authored a paper on "Federated Learning for Healthcare" accepted at a national conference.', date: 'Nov 2024' },
        { title: 'Orientation 2024–25', desc: 'Welcome orientation for the new B.E. CSE AI&ML batch featuring alumni talks, lab tours, and faculty introductions.', date: 'Aug 2024' },
      ],
      alumni: [
        { name: 'Ananya Reddy (2023)', role: 'ML Engineer', company: 'Oracle' },
        { name: 'Rohan Mehta (2023)', role: 'Data Scientist', company: 'Deloitte' },
        { name: 'Sai Priya (2024)', role: 'AI Research Intern', company: 'Microsoft' },
        { name: 'Vikram Nair (2024)', role: 'Computer Vision Engineer', company: 'TCS' },
        { name: 'Meghna Sharma (2024)', role: 'NLP Engineer', company: 'Infosys' },
        { name: 'Arjun Rao (2024)', role: 'Data Analyst', company: 'Capgemini' },
      ],
      facilities: [
        { title: 'AI/ML Research Lab', desc: 'Dedicated GPU-enabled workstations for deep learning model training, computer vision research, and large-scale NLP experiments using TensorFlow and PyTorch.' },
        { title: 'Data Science Studio', desc: 'Collaborative workspace with big data tools (Hadoop, Spark), cloud ML platforms (AWS SageMaker, Azure ML), and advanced data visualisation software.' },
        { title: 'Industry Project Cell', desc: 'Live project engagements with industry partners in computer vision, NLP, and predictive analytics — giving students real-world AI deployment experience before graduation.' },
      ],
    },
    {
      slug: 'hs',
      name: 'Humanities & Sciences',
      shortName: 'H&S',
      degree: 'B.E.',
      ugIntake: null,
      established: 2021,
      accreditation: 'AICTE Approved',
      heroBgImage: '/imgi_5_aboutusbanner.jpg',
      about: [
        'The Department of Humanities & Sciences at Gokaraju Lailavathi Engineering College serves as the foundational pillar of engineering education at GLEC. Established in 2021, the department offers core instruction in Mathematics, Physics, Chemistry, English Communication, and Management Sciences to all first-year engineering students across all branches.',
        "The department plays a crucial role in strengthening analytical thinking, scientific reasoning, and communication skills that are fundamental to every engineering discipline. Through well-equipped physics and chemistry laboratories, language labs, and a team of experienced faculty, the H&S department ensures that GLEC students build a strong academic foundation for their specialised engineering programmes. The department also supports GLEC's DHI initiative — focusing on communication, leadership, and professional development.",
      ],
      announcements: [
        'First-year student orientation and timetable — August 2025',
        'Mathematics Bridge Course for new B.E. students — 1st week of semester',
        'English Communication & Soft Skills workshop — Sept 2025',
        'DHI Programme Batch 5 — Registrations open for 1st year students',
        'Chemistry lab safety training — Mandatory for all new students',
      ],
      vision: 'To empower students with technical expertise, critical thinking skills, and confidence to succeed in their careers and adapt to future challenges.',
      mission: [
        'To build a successful career, students need a strong foundation in Science and Humanities, which enhances their knowledge, skills, and understanding of core engineering subjects.',
      ],
      hod: {
        name: 'Dr. J. Kishore Babu',
        title: 'Head of the Department, H&S',
        image: 'https://www.glwec.in/images/Dr J Kishore Babu.jpeg',
        bio: [
          'Dr. J. Kishore Babu is the Head of the H&S Department at Gokaraju Lailavathi Engineering College (GLEC), Hyderabad. He earned his Ph.D. in Physics from Acharya Nagarjuna University and has an extensive teaching career spanning 20 years. He joined Gokaraju Rangaraju Institute of Engineering and Technology (GRIET) in 2012, where he played a crucial role in academics and research before taking on his leadership position at GLEC. He holds memberships in professional bodies such as the LSI & ISTE. With a deep commitment to education and scientific research, Dr. Kishore Babu has been instrumental in mentoring students and enhancing the quality of foundational sciences in engineering education. Throughout his career, Dr. Babu has published several journal articles and conference proceedings, reflecting his dedication to advancing scientific knowledge. His expertise and experience continue to contribute significantly to the academic excellence of the institution.',
        ],
      },
      faculty: [
        { id: 7003, name: 'Dr KSN Raju', designation: 'Registrar', qualification: 'MBA, Ph.D', doj: '2021-09-13', email: 'aogriet@griet.ac.in' },
        { id: 7005, name: 'Dr. Sailaja Eswara', designation: 'Assistant Professor', qualification: 'M.A, Ph.D', doj: '2021-09-14', email: 'sailu.eswara@gmail.com' },
        { id: 7006, name: 'Mr.P.Gopikrishna', designation: 'Assistant Professor', qualification: 'M.Sc', doj: '2021-09-14', email: 'gopiglwec@gmail.com' },
        { id: 7009, name: 'Dr.K.Deepthi Varma', designation: 'Assistant Professor', qualification: 'M.Sc, Ph.D', doj: '2021-10-01', email: 'deepthivarmakatari@gmail.com' },
        { id: 7010, name: 'Dr M.Jyothsna', designation: 'Assistant Professor', qualification: 'M.Sc, Ph.D', doj: '2021-10-01', email: 'jyothsna.glwec@gmail.com' },
        { id: 7011, name: 'Dr.M.Rekharani', designation: 'Assistant Professor', qualification: 'M.Sc, Ph.D', doj: '2021-10-04', email: 'rekha2021@gmail.com' },
        { id: 7012, name: 'Ms. G. Saimatha', designation: 'Assistant Professor', qualification: 'M.Sc', doj: '2021-10-11', email: 'saimatha.glwec@gmail.com' },
        { id: 7016, name: 'Ms.M Snehapriya', designation: 'Assistant Professor', qualification: 'M.Tech (Ph.D)', doj: '2021-10-11', email: 'snehapriya.glwec@gmail.com' },
        { id: 7019, name: 'Mrs.M Karthika', designation: 'Assistant Professor', qualification: 'M.Tech (Ph.D)', doj: '2021-12-22', email: 'karthika.2021glwec@gmail.com' },
        { id: 7021, name: 'Dr S Bhanu Teja', designation: 'Assistant Professor', qualification: 'M.Tech, Ph.D', doj: '2022-04-11', email: 'bhanusanduru@gmail.com' },
        { id: 7024, name: 'Mrs.Hepsiba Nirmala V', designation: 'Assistant Professor', qualification: 'M.A', doj: '2022-06-06', email: 'hepsibanirmala717@gmail.com' },
        { id: 7031, name: 'Mrs.Nadimpally Harika', designation: 'Assistant Professor', qualification: 'MBA', doj: '2022-08-08', email: 'harikanadimpalli5677@gmail.com' },
        { id: 7034, name: 'Dr.B.Deepa', designation: 'Assistant Professor', qualification: 'M.A, Ph.D', doj: '2022-09-12', email: 'deepahyd@gmail.com' },
        { id: 7073, name: 'Dr.Venkata Krishna Sarma', designation: 'Assistant Professor', qualification: 'M.Sc, Ph.D', doj: '2024-04-26', email: 'sarma.krishna1@gmail.com' },
        { id: 7084, name: 'Mrs.K Sudha', designation: 'Assistant Professor', qualification: 'M.Tech', doj: '2024-04-26', email: 'sudha.kalathi@gmail.com' },
        { id: 7085, name: 'Dr.M Kashiram', designation: 'Assistant Professor', qualification: 'M.A, Ph.D', doj: '2024-05-15', email: 'mkrphd2014@gmail.com' },
        { id: 7088, name: 'Dr.K Subbarao', designation: 'Assistant Professor', qualification: 'M.Sc, Ph.D', doj: '2024-09-01', email: 'drksrchem@gmail.com' },
        { id: 7089, name: 'Mrs.B.Laxmi Prasanna', designation: 'Assistant Professor', qualification: 'M.Sc', doj: '2024-09-20', email: 'bprasanna511@gmail.com' },
        { id: 7090, name: 'Dr.Tenneti Bhavani', designation: 'Assistant Professor', qualification: 'M.Sc, Ph.D', doj: '2024-09-24', email: 'tennetib@gmail.com' },
        { id: 7091, name: 'Dr.S Rani', designation: 'Assistant Professor', qualification: 'MBA, Ph.D', doj: '2025-02-01', email: 'sadasivamrani@gmail.com' },
        { id: 7092, name: 'Mr.Noel Nalli', designation: 'Assistant Professor', qualification: 'M.Sc', doj: '2025-02-10', email: 'noelnn7@gmail.com' },
        { id: 19002, name: 'Mrs.Ch Vani', designation: 'Assistant Professor', qualification: 'M.Sc', doj: '2021-10-01', email: 'chvanivani@gmail.com' },
        { id: 19004, name: 'Mrs.IVSS Nagamani', designation: 'Assistant Professor', qualification: 'MBA', doj: '2021-10-01', email: 'nagamani.inukonda@gmail.com' },
        { id: 19007, name: 'Mr.M Viswanath', designation: 'Assistant Professor', qualification: 'M.Tech', doj: '2021-10-26', email: 'vissuchowdappa@gmail.com' },
      ],
      achievements: [
        { count: '5+', label: 'Core Subjects', desc: 'Maths, Physics, Chemistry, English & Management' },
        { count: '4+', label: 'Years of Excellence', desc: 'Foundation department since GLEC inception 2021' },
        { count: '15+', label: 'Expert Faculty', desc: 'PhD holders & experienced science educators' },
        { count: '1000+', label: 'Students Trained', desc: 'First-year students across all B.E. programmes' },
      ],
      news: [
        { title: 'National Science Day Celebrations', desc: 'Department organised science demonstrations and quiz competitions celebrating National Science Day with participation from all first-year students.', date: 'Feb 2025' },
        { title: 'English Communication Workshop', desc: 'Intensive two-day workshop on technical writing, presentation skills, and group discussion techniques conducted for B.E. first-year students.', date: 'Jan 2025' },
        { title: 'DHI Batch 5 Launch', desc: 'Fifth batch of the DHI communication and leadership programme launched, covering public speaking, essay writing, and JAM sessions.', date: 'Dec 2024' },
        { title: 'Mathematics Remedial Programme', desc: 'Special remedial sessions in Engineering Mathematics for students needing additional support, conducted by senior faculty.', date: 'Nov 2024' },
        { title: 'Chemistry Lab Practical Exhibition', desc: 'Annual chemistry lab exhibition where first-year students showcased experimental results and findings to faculty and senior students.', date: 'Oct 2024' },
        { title: 'Orientation 2024–25', desc: 'Departmental orientation for all new B.E. students covering academic structure, lab rules, and the role of H&S in engineering education.', date: 'Aug 2024' },
      ],
      alumni: [
        { name: 'Pooja Verma (2022)', role: 'Software Engineer', company: 'TCS' },
        { name: 'Srinivas Reddy (2022)', role: 'Systems Analyst', company: 'Infosys' },
        { name: 'Kavya Nair (2023)', role: 'Business Analyst', company: 'Capgemini' },
        { name: 'Ravi Kumar (2023)', role: 'Technical Writer', company: 'Accenture' },
        { name: 'Lavanya Singh (2024)', role: 'Data Analyst', company: 'Wipro' },
        { name: 'Nikhil Rao (2024)', role: 'Operations Executive', company: 'Deloitte' },
      ],
      facilities: [
        { title: 'Physics & Chemistry Labs', desc: 'Fully equipped physics and chemistry laboratories with modern instruments enabling students to conduct experiments aligned with first-year B.E. syllabi prescribed by Osmania University.' },
        { title: 'English Language Lab', desc: 'Dedicated language lab with audio-visual systems and communication software supporting spoken English, pronunciation, listening skills, and professional communication development.' },
        { title: 'DHI Communication Centre', desc: 'Dedicated space for the DHI programme — hosting group discussions, JAM sessions, debates, essay competitions, and dramatics to build leadership and communication excellence.' },
      ],
    },
    {
      slug: 'it',
      name: 'Information Technology',
      shortName: 'IT',
      degree: 'B.E.',
      ugIntake: 120,
      established: 2021,
      accreditation: 'AICTE Approved',
      heroBgImage: '/imgi_5_aboutusbanner.jpg',
      about: [
        'The Department of Information Technology, established in 2021, focuses on comprehensive learning to empower students for meaningful contributions to the IT industry and society, with an intake of 120.',
      ],
      announcements: [
        'B.E. IT 2025–26 admissions open — TG EAPCET code: GLWC',
        'Network Security & Ethical Hacking Workshop — March 2025',
        'Cloud Computing Certification Drive (AWS/Azure) — Feb 2025',
        'Industry Expert Talk: "Enterprise IT Architecture" — 18 Feb 2025',
        'NIPUN Industry Bridge Programme — IT Batch 4 open',
      ],
      vision: 'To deliver quality technical education, foster excellence in scientific research, and produce world-class professionals who excel in the evolving field of Information Technology while addressing societal needs.',
      mission: [
        'To achieve excellence in higher education and research by providing strong technical education in advanced computing.',
        'To explore and create opportunities in the IT industry through continuous innovation and collaboration.',
        'To maintain high ethical and professional standards, contributing to global technological advancements.',
        'To deliver quality education and enhance problem-solving skills using emerging technologies in IT.',
        'To promote research across multiple disciplines and encourage technology-driven consultancy projects.',
        'To build strong industry-academia partnerships while developing entrepreneurship skills in tech professionals.',
      ],
      peos: [
        'Graduates establish successful careers in IT, take on leadership and collaborative roles, and contribute effectively to interdisciplinary technology-driven projects.',
        'Graduates acquire expertise in database management, big data analytics, and simulation technologies while strengthening their engineering and computational skills.',
        'Graduates develop expertise in software engineering, full-stack development, and system architecture to solve complex IT challenges.',
        'Graduates innovate in emerging fields like blockchain, IoT, and edge computing to enhance digital transformation.',
      ],
      faculty: [
        { id: 7037, name: 'Mrs. K. Gayathri', designation: 'Asst. Professor', qualification: 'M.Tech', doj: '2022-09-05', email: 'kuruvagayathri.glwec@gmail.com' },
        { id: 7038, name: 'Mr. N. Madhusudhana Rao', designation: 'Asst. Professor', qualification: 'M.Tech', doj: '2022-09-13', email: 'madhuglwec@gmail.com' },
        { id: 7040, name: 'Mrs. K. Akhila', designation: 'Asst. Professor', qualification: 'M.Tech', doj: '2022-02-20', email: 'akhila.glwec@gmail.com' },
        { id: 7041, name: 'Mrs. M. Naga Jyothi', designation: 'Asst. Professor', qualification: 'M.Tech', doj: '2023-02-22', email: 'jyothi.glwec@gmail.com' },
        { id: 7044, name: 'Mr. K. Srinivasa Rao', designation: 'Asst. Professor', qualification: 'M.Tech (Ph.D)', doj: '2023-04-15', email: 'srinivasaraokglwec@gmail.com' },
        { id: 19009, name: 'Mrs. K. Vijaya Lakshmi', designation: 'Asst. Professor', qualification: 'M.Tech', doj: '2021-11-26', email: 'konkavijayalaxmi@gmail.com' },
      ],
      achievements: [
        { count: '120+', label: 'Students Trained', desc: 'B.E. Information Technology programme' },
        { count: '80+', label: 'Placements 2025', desc: 'Offers in IT service & product companies' },
        { count: '4+', label: 'Years of Excellence', desc: 'Established since GLEC inception in 2021' },
        { count: '15+', label: 'Expert Faculty', desc: 'Industry & research experienced IT educators' },
      ],
      news: [
        { title: 'Cloud Computing Workshop', desc: 'Hands-on workshop on AWS and Microsoft Azure fundamentals attended by IT students, culminating in a certification preparation session.', date: 'Feb 2025' },
        { title: 'Network Security Seminar', desc: 'Cybersecurity expert delivered a session on ethical hacking, penetration testing, and network vulnerability assessment tools.', date: 'Jan 2025' },
        { title: 'NIPUN IT Batch 4 Launch', desc: 'Fourth batch of NIPUN launched for IT students focusing on full-stack web development, API design, and cloud deployment pipelines.', date: 'Dec 2024' },
        { title: 'Database Design Competition', desc: 'Intra-department competition on relational and NoSQL database design where teams built and presented end-to-end data management solutions.', date: 'Nov 2024' },
        { title: 'Industry Visit: IT Park Hyderabad', desc: 'IT students visited leading IT companies at the Hyderabad IT corridor, gaining insight into enterprise software development environments.', date: 'Oct 2024' },
        { title: 'Orientation 2024–25', desc: 'Welcome orientation for the new B.E. IT batch with faculty introductions, lab tours, and industry alumni interactions.', date: 'Aug 2024' },
      ],
      alumni: [
        { name: 'Harsha Vardhan (2022)', role: 'Software Developer', company: 'TCS' },
        { name: 'Swathi Reddy (2022)', role: 'Network Engineer', company: 'Infosys' },
        { name: 'Manish Kumar (2023)', role: 'Cloud Support Engineer', company: 'Wipro' },
        { name: 'Deepika Nair (2023)', role: 'Database Administrator', company: 'Capgemini' },
        { name: 'Suresh Babu (2024)', role: 'Full Stack Developer', company: 'Accenture' },
        { name: 'Preethi Sharma (2024)', role: 'IT Analyst', company: 'Cognizant' },
      ],
      facilities: [
        { title: 'Networking & Systems Lab', desc: 'Fully equipped lab with routers, switches, firewalls, and network simulation software (Cisco Packet Tracer, GNS3) enabling hands-on network configuration and troubleshooting exercises.' },
        { title: 'Cloud & Enterprise Computing Centre', desc: 'Lab with access to AWS, Azure, and Google Cloud platforms for students to build, deploy, and manage cloud-native applications as part of their coursework and projects.' },
        { title: 'Software Development Studio', desc: 'Collaborative studio with modern development tools, version control systems, CI/CD pipelines, and agile project management platforms supporting team-based software engineering projects.' },
      ],
    },
    {
      slug: 'cyber-security',
      name: 'Computer Science',
      shortName: 'CS',
      degree: 'B.E.',
      ugIntake: 60,
      established: 2023,
      accreditation: 'AICTE Approved',
      heroBgImage: '/imgi_5_aboutusbanner.jpg',
      about: [
        'The Department of Computer Science at Gokaraju Lailavathi Engineering College was established in 2023 with an intake of 60, focused on producing graduates skilled in the latest computing disciplines.',
        "The curriculum empowers students with expertise in artificial intelligence, cybersecurity, data science, cloud computing, software development, and blockchain. Backed by GLEC's NIPUN and SEEKH programmes, students develop strong technical and professional competencies essential for careers in the evolving global IT landscape.",
      ],
      announcements: [
        'B.E. Computer Science 2025–26 admissions open — TG EAPCET code: GLWC',
        'Ethical Hacking & Penetration Testing Workshop — March 2025',
        'CTF (Capture The Flag) Competition — Register by 15 Feb 2025',
        'Guest Lecture: "Zero Trust Architecture in Enterprise" — 20 Feb 2025',
        'SEEKH Batch 3 for Computer Science students — Enrol Now',
      ],
      vision: 'Equip technocrats in computer science with the skills and knowledge needed to thrive in the data-driven world.',
      mission: [
        'To drive excellence in computer science education and research through cutting-edge technologies and innovation.',
        'To empower students with expertise in artificial intelligence, cybersecurity, data science, and cloud computing.',
        'To foster advancements in software development, blockchain, and next-generation computing solutions.',
        'To bridge the gap between academia and industry by integrating emerging technologies into learning.',
        'To cultivate a tech-driven mindset for solving complex global challenges with smart computing solutions.',
      ],
      peos: [
        'Graduates develop a strong foundation in computer science principles, enabling them to solve complex technical challenges.',
        'Graduates apply critical thinking and problem-solving skills to design and develop efficient software and computing solutions.',
        'Graduates engage in multidisciplinary research and innovation, contributing to advancements in science and technology.',
        'Graduates embrace lifelong learning to adapt to technological advancements and enhance their career growth in the global IT industry.',
      ],
      achievements: [
        { count: '60+', label: 'Students Trained', desc: 'B.E. Computer Science programme' },
        { count: '2023', label: 'Established', desc: 'Dedicated to cutting-edge computing disciplines' },
        { count: '4+', label: 'Years of Excellence', desc: 'Under the Gokaraju Group legacy' },
        { count: '10+', label: 'Expert Faculty', desc: 'Specialists in AI, data science & cloud computing' },
      ],
      news: [
        { title: 'CTF Competition 2025', desc: 'Computer Science students participated in a national Capture The Flag competition, securing top-10 positions against 200+ teams.', date: 'Feb 2025' },
        { title: 'Penetration Testing Workshop', desc: 'Industry-led two-day workshop on ethical hacking and penetration testing using Kali Linux, Metasploit, and Burp Suite.', date: 'Jan 2025' },
        { title: 'Guest Lecture: Zero Trust Security', desc: 'Senior security architect delivered a session on Zero Trust Architecture and its enterprise implementation.', date: 'Feb 2025' },
        { title: 'SEEKH Batch 3 Launch', desc: 'Third SEEKH batch for CS students kicked off with projects on vulnerability assessment, SIEM tools, and cloud security monitoring.', date: 'Dec 2024' },
        { title: 'Cyber Awareness Week', desc: 'Department organised a week-long awareness programme with quizzes, demos, and workshops open to all GLEC students.', date: 'Oct 2024' },
        { title: 'Orientation 2024–25', desc: 'Welcome orientation for new B.E. Computer Science students covering lab protocols, programme structure, and career pathways.', date: 'Aug 2024' },
      ],
      alumni: [
        { name: 'Arjun Mehta (2022)', role: 'Security Analyst', company: 'Wipro' },
        { name: 'Divya Krishnan (2022)', role: 'Network Security Engineer', company: 'TCS' },
        { name: 'Siddharth Rao (2023)', role: 'Ethical Hacker', company: 'Infosys' },
        { name: 'Pooja Shenoy (2023)', role: 'SOC Analyst', company: 'Capgemini' },
        { name: 'Rohit Verma (2024)', role: 'Cloud Security Engineer', company: 'Accenture' },
        { name: 'Sneha Patil (2024)', role: 'Digital Forensics Analyst', company: 'Deloitte' },
      ],
      facilities: [
        { title: 'Computing Lab', desc: 'Dedicated lab equipped for hands-on learning in AI, machine learning, data science, and cloud computing with industry-standard tools and frameworks.' },
        { title: 'Cybersecurity Lab', desc: 'Isolated network environments for ethical hacking, penetration testing, vulnerability scanning, and malware analysis using Kali Linux, Wireshark, and Metasploit.' },
        { title: 'Software Development Studio', desc: 'Project-focused workspace supporting blockchain, full-stack development, and next-generation computing solutions with mentored industry projects.' },
      ],
    },
  ],

  // ── Placements ────────────────────────────────────────────────────────────
  placementsDescription: [
    'Gokaraju Lailavathi Engineering College (GLEC), formerly Gokaraju Lailavathi Women\'s Engineering College, offers a comprehensive Training and Placement programme to equip students with the skills required to excel in their professional careers. The Training & Placement Cell coordinates with top recruiters across technology, core engineering, and business domains to provide the best opportunities for our students.',
    'In GLEC the placements training will start from first year onwards. Students are trained to accomplish Python NPTEL Certification in the First year. The Placement Cell provides end-to-end support from skill development and interview preparation to final placement confirmation.',
    'GLEC\'s flagship programmes — NIPUN (Industry Bridge), SEEKH (Experiential Learning), and DHI (Communication & Leadership) — ensure that every student is industry-ready from day one. The 2025 batch recorded 253 placement offers with a highest package of 6+ LPA.',
  ],
  placementsContacts: [
    { role: 'Dean, Training & Placements', name: 'Dr. K. Butchi Raju', phone: '7702964747', email: 'placements@glwec.in' },
    { role: 'Manager, Training & Placements', name: 'Dr. Arvind Kumar', phone: '9849027132', email: 'placements@glwec.in' },
    { role: 'Placement Officer', name: 'Mrs. A. Bhavya Sri', phone: '9493805895', email: 'placements@glwec.in' },
  ],

  // ── Admissions CTA ────────────────────────────────────────────────────────
  ctaHeading: 'Admissions Open for 2025–26',
  ctaDesc: 'Take the first step towards a bright future. Join GLEC and shape your engineering career with world-class education, strong placement support, and a legacy of excellence.',
  ctaCTALabel: 'Apply Now',
  ctaCTAHref: '/admissions/overview',

  // ── Sponsoring Body ───────────────────────────────────────────────────────
  sponsoringBody: {
    societyName: 'Gokaraju Rangaraju Educational Society (GRES)',
    address: 'Gokaraju Rangaraju Hotel Complex, Juvvalapalem Road, Bhimavaram, Andhra Pradesh',
    description: 'Gokaraju Lailavathi Engineering College is established by the Gokaraju Rangaraju Educational Society (GRES), a trust founded with a singular commitment to providing quality higher education in Engineering and Technology. GRES operates Gokaraju Rangaraju Institute of Engineering & Technology (GRIET), one of Hyderabad\'s most reputed autonomous engineering colleges, and extended its educational vision to GLEC in 2021.',
    members: [
      { role: 'President', name: 'G. Ganga Raju' },
      { role: 'Vice President', name: 'GVK Ranga Raju' },
      { role: 'Secretary', name: 'G. Rama Raju' },
      { role: 'Joint Secretary', name: 'Bhupathi Raju Ravindra' },
      { role: 'Assistant Secretary', name: 'Penmetsa Venkata Satyavathi' },
      { role: 'Treasurer', name: 'Yarlagadda Vijaya Rani' },
      { role: 'Committee Member', name: 'Chandra Shekhar' },
      { role: 'Committee Member', name: 'Venkateswara Rao' },
      { role: 'Committee Member', name: 'Yalamanchili Rama' },
    ],
    objectives: [
      'Work toward removing illiteracy among the people',
      'Establish technical education schools in Andhra Pradesh',
      'Train individuals with industrial backgrounds for technical roles',
      'Develop training institutions to advance educational endeavors',
      'Promote scientific and technical needs of rural masses',
    ],
  },

  // ── Governing Body ────────────────────────────────────────────────────────
  governingBody: {
    year: '2024–25',
    members: [
      { no: 1, name: 'Dr. G. Ganga Raju', role: 'President', category: 'Society Nominee', email: 'mail@lailanutra.com' },
      { no: 2, name: 'Sri G. V. K. Ranga Raju', role: 'Vice President', category: 'Society Nominee', email: 'gvk555@gmail.com' },
      { no: 3, name: 'Sri G. Rama Raju', role: 'Secretary', category: 'Society Nominee', email: 'asrams@yahoo.com' },
      { no: 4, name: 'Smt. Vani Ranga Raju', role: 'Member', category: 'Society Nominee', email: 'gvaniraju@gmail.com' },
      { no: 5, name: 'Prof. G. Mallesham', role: 'University Nominee', category: 'University Nominee', email: 'gm.eed.cs@gmail.com' },
      { no: 6, name: 'Dr. D. N. Reddy', role: 'Member', category: 'Member', email: 'reddydn@gmail.com' },
      { no: 7, name: 'Dr. Syeda Sameen Fathima', role: 'Member', category: 'Member', email: 'sameenf@gmail.com' },
      { no: 8, name: 'Prof. J.N. Murthy', role: 'Member', category: 'Member', email: 'nm.jandhyala@gmail.com' },
      { no: 9, name: 'Dr. K.V.S. Raju, Ph.D.', role: 'Member (Registrar)', category: 'Senior Faculty', email: 'ao@griet.ac.in' },
      { no: 10, name: 'Dr. A. Sai Hanuman, Ph.D.', role: 'Member Secretary & Principal', category: 'Member Secretary', email: 'admnglwec@gmail.com' },
    ],
  },

  // ── Registrar ─────────────────────────────────────────────────────────────
  registrar: {
    name: 'Prof. K.V.S. Raju',
    fullName: 'Prof. Kalidindi Venkata Satyanarayana Raju',
    title: 'Registrar',
    image: 'https://www.glwec.in/images/K_VS_Raju.jpg',
    qualifications: [
      'M.Sc. from Barakathulla University, Madhya Pradesh (1981)',
      'CAIIB — Certified Associate of Indian Institute of Bankers',
      'MBA from Dr. B.R. Ambedkar Open University, Hyderabad',
      'Ph.D. in Management from JNTU Hyderabad (2014)',
    ],
    bio: [
      'Prof. Kalidindi Venkata Satyanarayana Raju (Prof. K.V.S. Raju) is a multi-specialty and multi-faceted personality with a distinguished career spanning banking and academia. Born September 24, 1956, he began his professional journey with Bank of Baroda, gaining extensive experience across various locations and departments including IT.',
      'He subsequently joined Godavari Institute of Engineering and Technology, Rajamundry, before becoming Administrative Officer cum Professor at Gokaraju Rangaraju Institute of Engineering and Technology (GRIET), Hyderabad in 2005 — a position he continues to hold. He teaches B.Tech. and MBA students and has published articles in national and international journals.',
      'His Ph.D. research focuses on leadership development in public sector banks. He has attended and organised several national and international seminars, workshops, and conferences, contributing significantly to academic administration and management research.',
    ],
  },

  // ── Principal ─────────────────────────────────────────────────────────────
  principalProfile: {
    name: 'Dr. A. Sai Hanuman',
    fullName: 'Dr. Akundi Sai Hanuman',
    title: 'Principal & Professor of Computer Science',
    image: 'https://www.glwec.in/images/Akund_Sai_Hanuman.jpg',
    phone: '9849078370',
    qualifications: [
      'Ph.D. from Acharya Nagarjuna University, Guntur (2012)',
      'M.Tech. in Computer Science & Engineering',
      'B.Tech. in Computer Science & Engineering',
    ],
    experience: '24+ Years in Academics, Industry & Research',
    researchInterests: ['Data Clustering', 'Data Sciences', 'Machine Learning', 'Optimization Techniques', 'Distributed Systems'],
    roles: [
      'Dean of Academics',
      'Dean of Examinations',
      'Head of Department',
      'Chairman of Board of Studies',
      'Convener for national and international events',
    ],
    memberships: ['IEEE', 'CSI'],
    publications: '35+ papers in national and international journals',
    patents: [
      'A Generic Framework for Multi Model Document Image Analysis',
      'An Efficient Mechanism using Smart Belt to Prevent School Children Abduction (2020)',
    ],
    bio: [
      'Dr. Akundi Sai Hanuman is a distinguished academician and researcher serving as Principal of Gokaraju Lailavathi Engineering College. With over 24 years of experience spanning academics, industry, and research, he has consistently been at the forefront of technological education and innovation.',
      'He holds a Ph.D. from Acharya Nagarjuna University, Guntur (2012) and has published 35+ research papers in reputed national and international journals. His research spans data clustering, machine learning, optimization techniques, and distributed systems — areas central to modern computing and artificial intelligence.',
      'As Principal, Dr. Sai Hanuman has led the transformation of GLEC into a modern co-education engineering institution with a strong focus on outcome-based education, industry partnerships, and student placement outcomes. He is a registered PhD Guide at JNTU Hyderabad, currently mentoring two PhD scholars.',
    ],
  },

  // ── Institution Development Plan ──────────────────────────────────────────
  idPlan: {
    title: 'Institution Development Plan',
    subtitle: 'IDP 2021–2026',
    description: 'The Institution Development Plan (IDP) is a comprehensive strategic document outlining the goals, targets, and action plans for the holistic development of Gokaraju Lailavathi Engineering College for the period 2021–2026. It encompasses academic, infrastructural, research, and administrative development initiatives.',
    committee: [
      { name: 'Dr. A. Sai Hanuman', designation: 'Principal', role: 'Coordinator' },
      { name: 'Dr. K.V.S. Raju', designation: 'Registrar', role: 'Administration Representative' },
      { name: 'Dr. Padmalaya Nayak', designation: 'HOD CSE', role: 'Computer Science Branches Representative' },
      { name: 'Dr. J. Kishore Babu', designation: 'HOD H&S', role: 'Basic Sciences Representative' },
      { name: 'Mr. P. Gopi Krishna', designation: 'Controller of Examinations', role: 'Examinations Representative' },
    ],
    pdfLink: 'https://www.glwec.in/downloads/IDP%202021-26.pdf',
  },

  // ── Anti Ragging ──────────────────────────────────────────────────────────
  antiRagging: {
    description: 'GLEC is committed to maintaining a ragging-free campus in compliance with the Supreme Court directives and AICTE guidelines. The Anti-Ragging Committee oversees all preventive measures to ensure a safe, inclusive environment for every student.',
    members: [
      { name: 'Dr. A. Sai Hanuman', designation: 'Principal', phone: '9849078370' },
      { name: 'Dr. Padmalaya Nayak', designation: 'Prof. & HOD CSE', phone: '8397356416' },
      { name: 'Dr. J. Kishore Babu', designation: 'Asst. Prof. HOD H&S', phone: '9866444077' },
      { name: 'Mr. K. Srinivasa Rao', designation: 'Incharge Student Affairs', phone: '9441283890' },
      { name: 'Dr. A. Ushasree', designation: 'Incharge Discipline', phone: '9291657212' },
      { name: 'Sri. B. Prabhakar Reddy', designation: 'Inspector of Police', phone: '8801014801' },
      { name: 'Ms. Kranthi Ahron Jannu', designation: 'State Coordinator, NGO My Choice Foundation', phone: '9493870274' },
      { name: 'Mr. M. Srinivas', designation: 'Parent Representative', phone: '8247472701' },
      { name: 'Mr. Koteswara Rao', designation: 'Non-Teaching Staff', phone: '9490494376' },
      { name: 'Mr. Muthyala Narasimhulu', designation: 'Local Media Representative', phone: '9391148672' },
    ],
    helplines: [
      { label: 'Eve Teasing Complaints', number: '100' },
      { label: 'Balanagar She Team WhatsApp', number: '9490617444' },
      { label: 'Balanagar SI', number: '9490617349' },
    ],
    measures: [
      'Anti-ragging squad patrols throughout operating hours',
      'Staggered class schedules separating seniors and freshers',
      'Orientation sessions with counseling for first-year students',
      'Student and parental affidavits acknowledging ragging laws',
    ],
  },

  // ── Anti Sexual Harassment ────────────────────────────────────────────────
  antiSexualHarassment: {
    description: 'The Anti Sexual Harassment Committee at GLEC is committed to implementing Supreme Court and UGC directives on policies against sexual harassment, ensuring a safe, dignified environment for all students, faculty, and staff.',
    members: [
      { sno: 1, name: 'Dr. A. Sai Hanuman', designation: 'Principal', phone: '9849078370' },
      { sno: 2, name: 'Dr. Padmalaya Nayak', designation: 'Prof. & HOD (CSE)', phone: '8397356416' },
      { sno: 3, name: 'Dr. K. Deepthi Varma', designation: 'Asst. Prof., H&S', phone: '9949430761' },
      { sno: 4, name: 'Dr. M. Rekharani', designation: 'Asst. Prof., H&S', phone: '6302448505' },
      { sno: 5, name: 'Dr. J. Kishore Babu', designation: 'Asst. Prof., HOD (H&S)', phone: '9866444077' },
    ],
    functions: [
      'Implement Supreme Court and UGC directives on policies against sexual harassment',
      'Establish mechanisms for addressing gender-based violence cases',
      'Ensure full and effective policy implementation through complaint procedures',
      'Foster environments free from gender discrimination',
      'Guarantee equal access to all facilities and participation in college activities',
      'Create safe environments discouraging harassment',
      'Promote awareness regarding harassment through supportive settings',
    ],
  },

  // ── Grievance Redressal ───────────────────────────────────────────────────
  grievance: {
    description: 'The Grievance Redressal Committee at GLEC aims to develop a responsive and accountable attitude among all stakeholders, maintaining a harmonious educational environment by addressing student complaints effectively and impartially.',
    members: [
      { name: 'Dr. A. Sai Hanuman', designation: 'Principal', role: 'Chairman' },
      { name: 'Dr. Padmalaya Nayak', designation: 'Prof. & HOD (CSE)', role: 'Member' },
      { name: 'Dr. K.V.S. Raju', designation: 'Registrar', role: 'Member' },
      { name: 'Dr. J. Kishore Babu', designation: 'Asst. Prof. HOD (H&S)', role: 'Member' },
      { name: 'Dr. A. Ushasree', designation: 'Incharge Discipline', role: 'Member' },
      { name: 'Dr. M. Jyothsna', designation: 'Asst. Prof., H&S', role: 'Member' },
      { name: 'K. Srinivasa Rao', designation: 'Asst. Prof., IT', role: 'Member' },
      { name: 'Singireddy Niharika', designation: 'B.E. III Year CSE', role: 'Student Member' },
      { name: 'Turumella Haarika', designation: 'B.E. III Year IT', role: 'Student Member' },
      { name: 'Kollipara Sahithi Lalithasri', designation: 'B.E. II Year CSE', role: 'Student Member' },
      { name: 'Udumula Akhila', designation: 'B.E. II Year IT', role: 'Student Member' },
    ],
    process: [
      { label: 'In-Person', desc: 'Directly approach any committee member for immediate assistance.' },
      { label: 'Written', desc: 'Submit a formal grievance letter to the committee or Principal.' },
      { label: 'Anonymous', desc: 'Use the Suggestion/Complaint Register at the Administrative Block.' },
      { label: 'Email', desc: 'Send your grievance via email to the committee or directly to the Principal.' },
      { label: 'Online Form', desc: 'Submit your grievance through the official online portal.' },
    ],
    formUrl: 'https://forms.gle/FG8wCibS5UptBFN46',
  },

  // ── SEGD Cell ─────────────────────────────────────────────────────────────
  segd: {
    fullName: 'Socio-Economically Disadvantaged Groups Cell',
    shortName: 'SEGD Cell',
    description: 'The SEGD Cell at GLEC is dedicated to ensuring inclusive participation, equal opportunities, and holistic support for students from SC/ST and other socio-economically disadvantaged backgrounds.',
    members: [
      { name: 'Dr. Padmalaya Nayak', designation: 'Prof. & HOD CSE', role: 'Chairman' },
      { name: 'Dr. J. Kishore Babu', designation: 'Professor & H&S HOD', role: 'Coordinator' },
      { name: 'Dr. K.V.S. Raju', designation: 'Registrar', role: 'Member' },
      { name: 'M. Jyothsna', designation: 'Assistant Professor', role: 'Member' },
      { name: 'V. Laxmaiah', designation: 'System Admin', role: 'Member' },
      { name: 'Hepsiba Nirmala V', designation: 'Assistant Professor', role: 'Member' },
      { name: 'K. Srinivasa Rao', designation: 'Assistant Professor', role: 'Member' },
    ],
    objectives: [
      'Handle academic and non-academic issues and complaints received from SC/ST students',
      'Ensure discrimination-free participation in academic and placement activities',
      'Distribute information on scholarships and educational opportunities from government agencies',
      'Implement constitutional protections for SC/ST students',
      'Organise skill development programs for career advancement of disadvantaged students',
    ],
  },

  // ── Finance Committee ─────────────────────────────────────────────────────
  financeCommittee: {
    year: '2024–25',
    description: 'The Finance Committee oversees the financial management and budgetary matters of the college, ensuring transparent and accountable administration of institutional funds in compliance with regulatory requirements.',
    members: [
      { name: 'Dr. A. Sai Hanuman', designation: 'Principal', role: 'Chairman' },
      { name: 'Dr. Jandhyala N. Murthy', designation: 'Director', role: 'Nominated by Governing Body' },
      { name: 'Prof. K. V. S. Raju', designation: 'Professor & Registrar', role: 'Member Secretary' },
      { name: 'Dr. Padmalaya Nayak', designation: 'HOD CSE', role: 'Teacher Representative' },
      { name: 'Dr. J. Kishore Babu', designation: 'HOD H&S', role: 'Teacher Representative' },
      { name: 'K. Srinivasa Rao', designation: 'Assistant Professor, IT', role: 'Teacher Representative' },
      { name: 'Prof. G. Mallesham', designation: 'OU Nominee', role: 'University Representative' },
    ],
  },

  // ── Equal Opportunity Cell ────────────────────────────────────────────────
  equalOpportunityCell: {
    description: 'The Equal Opportunity Cell at GLEC is committed to fostering an inclusive campus environment where every student, regardless of gender, caste, religion, or socioeconomic background, has equal access to educational opportunities and a harassment-free learning experience.',
    members: [
      { name: 'Dr. Padmalaya Nayak', designation: 'Prof. & HOD CSE', role: 'Coordinator' },
      { name: 'Dr. M. Rekharani', designation: 'Asst. Prof., H&S', role: 'Member' },
      { name: 'Dr. K. Deepthi', designation: 'Asst. Prof., H&S', role: 'Member' },
      { name: 'Dr. Deepa', designation: 'Asst. Prof., H&S', role: 'Member' },
      { name: 'Sailaja Eswara', designation: 'Asst. Prof., H&S', role: 'Member' },
    ],
    objectives: [
      'Foster awareness regarding equitable opportunities for women, driving positive attitude shifts',
      'Promote behavioural transformation among female youth',
      'Establish a harassment-free environment with accountability for equal treatment',
      'Conduct empowerment initiatives addressing financial, emotional, mental, and physical wellbeing',
      'Address sexual harassment complaints and discriminatory grievances with appropriate action',
    ],
    activities: [
      'Seminars, workshops, and conferences on gender equality',
      'Personality development programs',
      "Women's health initiatives",
      'Engagement with accomplished women professionals',
      'Competitive sports and games',
      'Self-defence training',
      "International Women's Day observances",
      'Yoga and wellness programming',
    ],
  },

  // ── ICC ───────────────────────────────────────────────────────────────────
  icc: {
    fullName: 'Internal Complaints Committee',
    description: 'The Internal Complaints Committee (ICC) at GLEC ensures a safe and respectful environment for all members of the institution by handling complaints related to sexual harassment and discrimination with fairness, confidentiality, and impartiality.',
    members: [
      { name: 'Dr. B. Deepa', designation: 'Associate Professor', role: 'Chairman', email: 'deepahyd@gmail.com', phone: '9866193863' },
      { name: 'Mrs. B. Aruna', designation: 'Assistant Professor', role: 'Member', email: 'maniaddla@gmail.com', phone: '7386252424' },
      { name: 'Dr. K.S.N. Raju', designation: 'Professor, H&S', role: 'Member', email: 'ao@griet.ac.in', phone: '9949655559' },
      { name: 'Dr. A. Ushasree', designation: 'Assistant Professor', role: 'Discipline Incharge', email: 'ushasreemishra@gmail.com', phone: '9291657212' },
      { name: 'Mr. K. Srinivasa Rao', designation: 'Assistant Professor, IT', role: 'Student Affairs Incharge', email: 'srinivasaraokglwec@gmail.com', phone: '9441283890' },
      { name: 'Ms. Kranthi Ahron Jannu', designation: 'NGO Coordinator', role: 'External Member', email: 'karnthiahron@gmail.com', phone: '9493870274' },
      { name: 'Mrs. Kodavaluru Swathi', designation: 'Lab Assistant', role: 'Member', email: 'swathik.glwec@gmail.com', phone: '9381421690' },
      { name: 'Mrs. Ch. Mrudula', designation: 'Lab Assistant', role: 'Member', email: 'mrudulapolina@gmail.com', phone: '9581453131' },
      { name: 'Arthi Reddy Basani', designation: 'IV Year Student', role: 'Student Member', email: 'arthib04@gmail.com', phone: '9063004409' },
      { name: 'Lisa Mandro', designation: 'III Year Student', role: 'Student Member', email: 'mandrolisa@gmail.com', phone: '7330788037' },
      { name: 'Ridhima Bhupathiraju', designation: 'II Year Student', role: 'Student Member', email: 'ryddm06@gmail.com', phone: '7993909887' },
    ],
    objectives: [
      'Create a secure reporting environment for harassment and discrimination incidents',
      'Conduct fair and impartial investigations while maintaining confidentiality throughout the process',
      'Implement corrective measures including disciplinary action when warranted',
      'Provide awareness training on rights and responsibilities to all stakeholders',
      'Continuously improve policies to foster a respectful and inclusive workplace culture',
    ],
  },

  // ── IQAC ─────────────────────────────────────────────────────────────────
  iqac: {
    year: '2025–26',
    description: 'The Internal Quality Assurance Cell (IQAC) at GLEC works to develop a system for conscious, consistent, and catalytic action to improve the academic and administrative performance of the institution through periodic assessment and quality benchmarking.',
    members: [
      { name: 'Dr. A. Sai Hanuman', designation: 'Principal', role: 'Chairperson' },
      { name: 'Dr. Padmalaya Nayak', designation: 'Professor & Head of CSE & IT', role: 'Head of Department' },
      { name: 'Dr. K. V. S. Raju', designation: 'Registrar', role: 'Senior Faculty' },
      { name: 'Dr. J. Kishore Babu', designation: 'Asst. Prof. & H&S HOD', role: 'Senior Faculty' },
      { name: 'Dr. K. Deepthi Varma', designation: 'Asst. Prof., Chemistry', role: 'Faculty Member' },
      { name: 'Dr. M. Rekharani', designation: 'Asst. Prof., Physics', role: 'Faculty Member' },
      { name: 'Mrs. Archana Mullapudi', designation: 'Asst. Prof., CSE', role: 'Faculty Member' },
      { name: 'Mr. P. Gopi Krishna', designation: 'Asst. Prof., H&S', role: 'Faculty Nominee' },
    ],
    aims: [
      'Develop a system for conscious, consistent, and catalytic action to improve academic and administrative performance',
      'Periodic assessment and benchmarking against quality standards in higher education',
      'Internal quality checks across all programmes, departments, and administrative functions',
    ],
    functions: [
      'Direct and indirect assessment of course outcomes and programme outcomes',
      'Teaching-learning process facilitation using ICT-enabled tools and methods',
      'Stakeholder feedback metrics collection, analysis, and action planning',
      'Organisation of faculty development workshops, seminars, and training programmes',
      'Industry-institute interaction facilitation for curriculum relevance',
      'Annual Quality Assurance Report (AQAR) preparation and submission',
    ],
    strategicFocus: [
      'Teaching-learning process optimisation',
      'Evaluation credibility and transparency',
      'Research activity relevance and enhancement',
      'Cost-effective academic accessibility',
      'Infrastructure adequacy assessment',
      'Resource mobilisation for consulting and extension services',
    ],
  },

  // ── Academic Collaborations ───────────────────────────────────────────────
  academicCollaborations: [
    {
      name: 'Infosys',
      type: 'Industry-Academia MOU',
      desc: 'Strategic partnership with Infosys for student skill development, internship opportunities, campus placement support, and curriculum alignment with industry standards.',
    },
    {
      name: 'SR University',
      type: 'Inter-Institutional MOU',
      desc: 'Collaborative agreement with SR University for joint research initiatives, faculty exchange programmes, and cross-institutional knowledge sharing.',
    },
    {
      name: 'Suntek Corp Solutions Pvt. Ltd.',
      type: 'Corporate MOU',
      desc: 'Partnership with Suntek Corp Solutions for student internships, live project engagements, and industry-exposure programmes aligned with real-world IT environments.',
    },
    {
      name: 'Human Capital for Third Sector',
      type: 'Social Sector MOU',
      desc: 'Collaboration focused on social sector skill development, community engagement initiatives, and career opportunities for students in the development sector.',
    },
  ],

  // ── Examination Committee ─────────────────────────────────────────────────
  examinationCommittee: {
    email: 'examglec@gmail.com',
    calendarPdf: 'https://www.glwec.in/downloads/Academic-Calendar1.pdf',
    description: 'The Examination Committee at GLEC administers sessional and end-semester examinations in accordance with the Osmania University almanac, ensuring fair, transparent, and efficient conduct of all examinations.',
    members: [
      { name: 'Dr. A. Sai Hanuman', designation: 'Chief Superintendent', qualification: 'M.Tech, Ph.D', phone: '9849078370' },
      { name: 'P. Gopi Krishna', designation: 'Controller of Examinations', qualification: 'M.Sc.', phone: '9703643628' },
      { name: 'Dr. K. Deepthi Varma', designation: 'In-charge Examinations', qualification: 'M.Sc, Ph.D', phone: '9949430761' },
      { name: 'N. Madhusudhan Rao', designation: 'Coordinator', qualification: 'M.Tech', phone: '9010527205' },
      { name: 'P.M. Madhuri', designation: 'Coordinator', qualification: 'M.Tech', phone: '8374124317' },
      { name: 'M. Sneha Priya', designation: 'Coordinator', qualification: 'M.Tech', phone: '7659991957' },
    ],
    functions: [
      'Administering sessional and end-semester examinations as per Osmania University almanac',
      'Recording theory and practical marks in university portals',
      'Conducting result analysis for academic performance improvement',
      'Notifying parents about exam results and absenteeism via SMS and post',
      'Preparing inspection documentation for OU, AICTE, and governance bodies',
      'Handling answer script evaluation and mark recording',
    ],
  },

  // ── Examination Notifications ─────────────────────────────────────────────
  examinationNotifications: [
    { title: 'Attention I B.E. 2025–26 admitted students — Regular classwork commences from 28th August 2025 at Block 1, GLEC. Time: 10:00 AM to 1:00 PM', date: '28 Aug 2025', link: '#', type: 'Academic' },
    { title: 'Procedure for Document Submission @ College Reporting', date: '', link: 'https://www.glwec.in/downloads/Document_submission.pdf', type: 'Academic' },
    { title: 'Job Openings — Current Vacancies at GLEC', date: '', link: 'https://www.glwec.in/downloads/Paper%20Add.pdf', type: 'Recruitment' },
    { title: 'GLWEC converted to GLEC (Co-Education) from Academic Year 2024–25. Both Boys and Girls can opt for this institute in TS EAPCET-2025 counselling.', date: '', link: '#', type: 'Academic' },
    { title: 'Faculty Recruitment — Application Form Available', date: '', link: 'https://www.glwec.in/downloads/Faculty%20Recruitment%20Application%20Form.pdf', type: 'Recruitment' },
    { title: 'B.E. Computer Science & Engineering — Intake: 360 Seats', date: '', link: '/admissions/programs', type: 'Academic' },
    { title: 'B.E. CSE (AI & ML) — Intake: 120 Seats', date: '', link: '/admissions/programs', type: 'Academic' },
    { title: 'For Student Academic Verification, please mail details to placements@glwec.in', date: '', link: 'mailto:placements@glwec.in', type: 'Academic' },
    { title: 'Osmania University Revaluation Results — Feb/Mar 2025', date: '29 May 2025', link: 'https://www.osmania.ac.in/examination-results.php', type: 'Revaluation' },
    { title: 'Osmania University Results — Feb/Mar 2025', date: '11 Apr 2025', link: 'https://www.osmania.ac.in/examination-results.php', type: 'Results' },
    { title: 'B.E. (CBCS) & Non-CBCS Revaluation Results — Aug/Sept 2024', date: '31 Dec 2024', link: 'https://www.osmania.ac.in/examination-results.php', type: 'Revaluation' },
    { title: 'B.E. Semester Results I–VI Sem. Feb-2023 & VIII Sem. Jun-2023 Revaluation', date: '28 Aug 2023', link: 'https://www.osmania.ac.in/examination-results.php', type: 'Results' },
  ],

  // ── Contact ───────────────────────────────────────────────────────────────────
  contact: {
    addressLines: [
      'Nizampet Road, Bachupally,',
      'Kukatpally, Hyderabad – 500090',
      'Telangana, India',
    ],
    googleMapsUrl: 'https://maps.google.com/maps?q=Gokaraju+Lailavathi+Engineering+College,+Nizampet+Road,+Bachupally,+Hyderabad+500090&output=embed',
    googleMapsDirections: 'https://www.google.com/maps/dir/?api=1&destination=Gokaraju+Lailavathi+Engineering+College,+Bachupally,+Hyderabad',
    workingHours: [
      { day: 'Monday – Friday', hours: '9:00 AM – 5:00 PM' },
      { day: 'Saturday',        hours: '9:00 AM – 1:00 PM' },
      { day: 'Sunday',          hours: 'Closed' },
    ],
    departments: [
      { name: 'Principal',          email: 'admnglwec@gmail.com',     phone: '+91 9849078370', icon: 'principal' },
      { name: 'Admissions Office',  email: 'admnglwec@gmail.com',     phone: '+91 7207344440', icon: 'admissions' },
      { name: 'Exam Branch',        email: 'examglec@gmail.com',      phone: '+91 9703643628', icon: 'exam' },
      { name: 'Placements & T&P',   email: 'placements@glwec.in',     phone: '+91 8397356416', icon: 'placements' },
      { name: 'Library',            email: 'library@glwec.in',        phone: null,             icon: 'library' },
      { name: 'Accounts',           email: 'accounts@glwec.in',       phone: null,             icon: 'accounts' },
    ],
  },

  // ── Admissions ───────────────────────────────────────────────────────────────
  admissions: {
    overview: {
      counsellingCode: 'GLWC',
      exam: 'TG EAPCET',
      affiliation: 'Osmania University, Hyderabad',
      approval: 'AICTE, New Delhi',
      intro: 'Gokaraju Lailavathi Engineering College (GLEC) — formerly Gokaraju Lailavathi Womens Engineering College — is a co-education institution from the academic year 2024–25, now welcoming both boys and girls. Admissions to B.E. programmes are conducted through TG EAPCET counselling by the Telangana State Council for Higher Education (TSCHE). The institution is AICTE-approved and affiliated with Osmania University, Hyderabad.',
      keyFacts: [
        { label: 'Counselling Code', value: 'GLWC' },
        { label: 'Counselling Exam', value: 'TG EAPCET / TG ECET' },
        { label: 'Affiliation', value: 'Osmania University, Hyderabad' },
        { label: 'Approval', value: 'AICTE, New Delhi' },
        { label: 'Co-Education Since', value: '2024–25' },
        { label: 'Admissions Open', value: '2025–26' },
      ],
    },
    programs: [
      { name: 'B.E. Computer Science & Engineering', code: 'CSE', intake: 360, duration: '4 Years', affiliation: 'Osmania University' },
      { name: 'B.E. CSE (Artificial Intelligence & Machine Learning)', code: 'CSE (AI&ML)', intake: 120, duration: '4 Years', affiliation: 'Osmania University' },
      { name: 'B.E. Information Technology', code: 'IT', intake: 60, duration: '4 Years', affiliation: 'Osmania University' },
      { name: 'B.E. Computer Science', code: 'CS', intake: 60, duration: '4 Years', affiliation: 'Osmania University' },
      { name: 'B.E. Humanities & Sciences', code: 'H&S', intake: null, duration: '4 Years', affiliation: 'Osmania University' },
    ],
    feeStructure: {
      note: 'Fees regulated by the Telangana State Fee Regulation Committee (TSFRC). Government scholarship (SC/ST/BC/EBC) students pay only the special fee; tuition fee is reimbursed by the government.',
      batches: [
        {
          label: 'Year of Admission 2024–25 (Current Batch)',
          rows: [
            { year: 'I Year (AY 2024–25)', tuition: 70000, special: 5500, total: 75500 },
            { year: 'II Year (AY 2025–26)', tuition: 70000, special: 2500, total: 72500 },
            { year: 'III Year (AY 2026–27)', tuition: 70000, special: 2500, total: 72500 },
            { year: 'IV Year (AY 2027–28)', tuition: 70000, special: 2500, total: 72500 },
          ],
        },
        {
          label: 'Year of Admission 2023–24',
          rows: [
            { year: 'I Year (AY 2023–24)', tuition: 70000, special: 5500, total: 75500 },
            { year: 'II Year (AY 2024–25)', tuition: 70000, special: 2500, total: 72500 },
            { year: 'III Year (AY 2025–26)', tuition: 70000, special: 2500, total: 72500 },
            { year: 'IV Year (AY 2026–27)', tuition: 70000, special: 2500, total: 72500 },
          ],
        },
        {
          label: 'Year of Admission 2021–22',
          rows: [
            { year: 'I Year (AY 2021–22)', tuition: 35000, special: 5500, total: 40500 },
            { year: 'II Year (AY 2022–23)', tuition: 35000, special: 2500, total: 37500 },
            { year: 'III Year (AY 2023–24)', tuition: 35000, special: 2500, total: 37500 },
            { year: 'IV Year (AY 2024–25)', tuition: 35000, special: 2500, total: 37500 },
          ],
        },
      ],
    },
    eapcetRanks: {
      year: '2024',
      departments: [
        {
          name: 'Computer Science & Engineering (CSE)',
          data: [
            { category: 'OC',      boysFirst: 9319,   boysLast: 16292,  girlsFirst: 8971,   girlsLast: 28338  },
            { category: 'OC EWS', boysFirst: 19692,  boysLast: 28306,  girlsFirst: 15378,  girlsLast: 27315  },
            { category: 'BC-A',   boysFirst: 40865,  boysLast: 49365,  girlsFirst: 30680,  girlsLast: 68334  },
            { category: 'BC-B',   boysFirst: 15083,  boysLast: 50566,  girlsFirst: 23956,  girlsLast: 48835  },
            { category: 'BC-C',   boysFirst: null,   boysLast: null,   girlsFirst: 64011,  girlsLast: 64011  },
            { category: 'BC-D',   boysFirst: null,   boysLast: 32241,  girlsFirst: 22408,  girlsLast: 90654  },
            { category: 'BC-E',   boysFirst: null,   boysLast: null,   girlsFirst: 31924,  girlsLast: 106239 },
            { category: 'SC',     boysFirst: 61697,  boysLast: 101837, girlsFirst: 36434,  girlsLast: 128044 },
            { category: 'ST',     boysFirst: 148635, boysLast: null,   girlsFirst: 46541,  girlsLast: 172199 },
          ],
        },
        {
          name: 'CSE (Artificial Intelligence & Machine Learning)',
          data: [
            { category: 'OC',      boysFirst: 19666,  boysLast: 24895,  girlsFirst: 22001,  girlsLast: 25427  },
            { category: 'OC EWS', boysFirst: 25178,  boysLast: 27168,  girlsFirst: 22031,  girlsLast: 27961  },
            { category: 'BC-A',   boysFirst: 59321,  boysLast: 67023,  girlsFirst: 34884,  girlsLast: 70051  },
            { category: 'BC-B',   boysFirst: 32303,  boysLast: 50169,  girlsFirst: 29170,  girlsLast: 48916  },
            { category: 'BC-C',   boysFirst: null,   boysLast: null,   girlsFirst: null,   girlsLast: null   },
            { category: 'BC-D',   boysFirst: 30208,  boysLast: 38324,  girlsFirst: 32215,  girlsLast: 37998  },
            { category: 'BC-E',   boysFirst: 67881,  boysLast: null,   girlsFirst: 70429,  girlsLast: 73014  },
            { category: 'SC',     boysFirst: 83339,  boysLast: 120597, girlsFirst: 55322,  girlsLast: 125873 },
            { category: 'ST',     boysFirst: 146641, boysLast: 168594, girlsFirst: 140159, girlsLast: 176907 },
          ],
        },
      ],
    },
    procedure: {
      eapcet: [
        { step: '01', title: 'Qualify TG EAPCET', desc: 'Appear and qualify in the Telangana State Engineering Agricultural and Pharmacy Common Entrance Test (TG EAPCET) conducted by TSCHE, Hyderabad.' },
        { step: '02', title: 'Register for Counselling', desc: 'Register on the official TSCHE counselling portal (tgeapcet.nic.in) with your hall ticket number, rank, and required personal details.' },
        { step: '03', title: 'Certificate Verification', desc: 'Attend certificate verification at any designated Help Line Centre (HLC) with originals and self-attested copies of all required documents.' },
        { step: '04', title: 'Exercise Web Options', desc: 'Enter college and branch preferences in order of priority online during the specified web options window. Enter GLWC to find GLEC.' },
        { step: '05', title: 'Seat Allotment', desc: 'Seats are allotted based on merit, category, and preferences. Download the allotment order from the TSCHE counselling portal.' },
        { step: '06', title: 'Report to GLEC', desc: 'Report to GLEC with the allotment order and original certificates within the stipulated time. Pay the fee to confirm your admission.' },
      ],
      management: [
        { step: '01', title: 'Contact Admissions Office', desc: 'Reach out to the GLEC admissions office at +91 7207344440 or submit an online enquiry. Management quota seats are 30% of total intake.' },
        { step: '02', title: 'Verify Eligibility', desc: 'Ensure you have passed 10+2 / Intermediate with Physics, Chemistry, and Mathematics (PCM) from a recognised board.' },
        { step: '03', title: 'Submit Application', desc: 'Fill and submit the management quota application form along with self-attested copies of required documents to the admissions office.' },
        { step: '04', title: 'Confirmation & Fee Payment', desc: 'Management will review the application and confirm seat allocation. Pay fees as per TSFRC-approved rates to secure admission.' },
        { step: '05', title: 'Document Submission', desc: 'Submit original certificates at the college for verification and complete all admission formalities before the deadline.' },
      ],
    },
    eligibility: {
      ug: [
        'Pass in 10+2 / Intermediate examination with Physics, Chemistry, and Mathematics as compulsory subjects from a recognised board.',
        'Minimum 45% aggregate marks in PCM subjects (40% for SC/ST candidates) as per AICTE norms.',
        'Qualification in TG EAPCET conducted by TSCHE is mandatory for the 70% merit category seats.',
        'For management quota (30%) seats: 10+2 pass in PCM from a recognised board is sufficient; TG EAPCET not mandatory.',
        'Candidates must have completed 17 years of age as on 31 December of the admission year.',
      ],
      lateral: [
        'Diploma in Engineering / Technology from a State Board of Technical Education in a relevant engineering discipline.',
        'Minimum 60% aggregate marks in Diploma (55% for SC/ST candidates).',
        'Qualification in TG ECET (Engineering Common Entrance Test) conducted by TSCHE.',
        'Lateral entry is directly to the 2nd year B.E., subject to availability of seats in the lateral entry quota.',
      ],
    },
    documents: [
      { title: 'SSC / 10th Marks Memo', desc: 'Original marks memorandum as proof of date of birth and schooling qualification.' },
      { title: 'Intermediate / 12th Marks Memo', desc: 'Marks sheets for all years/semesters showing Physics, Chemistry, and Mathematics subjects.' },
      { title: 'Intermediate Pass Certificate', desc: 'Original pass/completion certificate issued by the State Board.' },
      { title: 'TG EAPCET Hall Ticket & Rank Card', desc: 'Mandatory for all EAPCET merit seat holders. Shows rank and category details.' },
      { title: 'TG EAPCET Allotment Order', desc: 'Web counselling seat allotment letter downloaded from the official TSCHE portal.' },
      { title: 'Transfer Certificate (TC)', desc: 'From the last institution attended, authorising transfer to a new institution.' },
      { title: 'Study / Residence Certificates', desc: 'Proof of study for the required number of years in Telangana for local/non-local category determination.' },
      { title: 'Category / Caste Certificate', desc: 'OBC / SC / ST / EWS certificate issued by the competent authority (if applicable).' },
      { title: 'Income Certificate', desc: 'Required for scholarship applications and EWS-category students.' },
      { title: 'Aadhar Card', desc: 'Mandatory for scholarship disbursement and fee reimbursement through government schemes.' },
      { title: 'Passport-size Photographs', desc: 'Six recent colour photographs with white background.' },
      { title: 'Migration Certificate', desc: 'Required for candidates from boards other than the Telangana State Board of Intermediate Education.' },
    ],
    scholarships: [
      { name: 'SC / ST Fee Reimbursement', provider: 'Govt. of Telangana', desc: 'Full tuition fee reimbursement for SC and ST students with parental income below ₹2.5 lakh per annum. Disbursed via ePASS portal.', link: 'https://epass.telangana.gov.in/' },
      { name: 'BC / EBC Fee Reimbursement', provider: 'Govt. of Telangana', desc: 'Tuition fee reimbursement for BC (income < ₹1.5 lakh) and EBC (income < ₹1 lakh) students per annum. Applied through ePASS.', link: 'https://epass.telangana.gov.in/' },
      { name: 'Minority Scholarship', provider: 'Govt. of Telangana', desc: 'Scholarships for students from notified minority communities based on merit and income criteria, disbursed through the state scholarship portal.', link: 'https://epass.telangana.gov.in/' },
      { name: 'AICTE Pragati Scholarship', provider: 'AICTE', desc: 'For girl students in AICTE-approved technical institutions. ₹50,000 per annum covering tuition fee and contingency expenses.', link: 'https://www.aicte-india.org/' },
      { name: 'AICTE Saksham Scholarship', provider: 'AICTE', desc: 'For Divyangjan (differently-abled) students in AICTE-approved institutions. ₹50,000 per annum support.', link: 'https://www.aicte-india.org/' },
      { name: 'National Scholarship Portal (NSP)', provider: 'Ministry of Education', desc: 'Central sector scholarships for meritorious students from families with annual income below ₹8 lakh. Apply at scholarships.gov.in.', link: 'https://scholarships.gov.in/' },
    ],
    hostelTransport: {
      hostel: {
        desc: 'GLEC provides safe and comfortable residential facilities within the campus for outstation students, with separate well-managed blocks for boys and girls under the supervision of experienced wardens.',
        features: [
          'Separate hostel blocks for boys and girls',
          'Furnished rooms with beds, study tables, and storage',
          '24×7 security with CCTV surveillance',
          'Pure drinking water with RO plant',
          'Mess facility with nutritious vegetarian and non-vegetarian meals',
          'Wi-Fi enabled study rooms and common areas',
          'Indoor recreation and reading rooms',
          'Medical assistance and first-aid facility on campus',
        ],
        contact: '+91 7207344440',
      },
      transport: {
        desc: 'GLEC operates a fleet of buses covering major residential areas in Hyderabad and Secunderabad, ensuring safe and punctual commute for day scholars.',
        routes: [
          'Kukatpally – Nizampet – Bachupally – GLEC',
          'JNTU – Miyapur – Bachupally – GLEC',
          'Ameerpet – SR Nagar – Kukatpally – GLEC',
          'Secunderabad – Kompally – Bachupally – GLEC',
          'LB Nagar – Uppal – ECIL – Bachupally – GLEC',
          'Shamshabad – Rajendranagar – Tolichowki – GLEC',
        ],
        note: 'Transport schedules and exact routes are updated at the start of each academic year. Contact the college office for the current timetable.',
      },
    },
    notifications: [
      { title: 'Admissions Open 2025–26 — B.E. (CSE, AI&ML, IT, CS)', date: '01 Jun 2025', type: 'Admissions', link: '#' },
      { title: 'TG EAPCET Counselling: Select Boys & Girls — Code: GLWC', date: '15 May 2025', type: 'Counselling', link: 'https://tgeapcet.nic.in/' },
      { title: 'Regular Classwork Commencement — B.E. I Year 2025–26: 28 Aug 2025', date: '28 Aug 2025', type: 'Academic', link: '#' },
      { title: 'Document Submission Procedure @ College Reporting', date: '01 Jun 2025', type: 'Procedure', link: 'https://www.glwec.in/downloads/Document_submission.pdf' },
      { title: 'Institution Converted to Co-Education from 2024–25', date: '01 Jun 2024', type: 'Notice', link: '#' },
      { title: 'Academic Calendar 2025–26 — Download', date: '01 Aug 2025', type: 'Academic', link: 'https://www.glwec.in/downloads/Academic-Calendar1.pdf' },
    ],
    feeRefund: {
      desc: 'The following refund policy is applicable to all students admitted to GLEC, in compliance with AICTE, TSCHE, and institutional guidelines.',
      cases: [
        { title: 'Technical Payment Issues', desc: 'If a payment is debited from the student\'s account but does not reflect in the ERP system due to a technical error, the amount will be recorded manually within 7–10 working days after confirmation from the payment gateway.' },
        { title: 'Duplicate Payments', desc: 'In case of duplicate charges confirmed by the payment gateway, the excess amount will be refunded to the source account or credited toward the following month\'s fee within 7–10 working days.' },
        { title: 'Caution Deposit', desc: 'Caution deposits collected for library books or other institutional purposes will be refunded after successful completion of the academic year or full programme, subject to clearance of dues.' },
        { title: 'Withdrawal / Cancellation', desc: 'Students withdrawing before the commencement of classes may be eligible for refund as per prevailing TSCHE / AICTE cancellation and refund norms. The institution\'s decision shall be final and binding.' },
      ],
      processingTime: '7–10 working days',
      contact: 'accounts@glwec.in',
    },
    faqs: [
      { q: 'What is the TG EAPCET counselling code for GLEC?', a: 'The TG EAPCET counselling code for GLEC is GLWC. Select "Boys & Girls" in the gender preference during counselling, as GLEC is now co-educational.' },
      { q: 'Is GLEC now co-educational?', a: 'Yes. GLEC (formerly Gokaraju Lailavathi Womens Engineering College) converted to co-education from academic year 2024–25. Both boys and girls are eligible for admission across all programmes.' },
      { q: 'What programmes are offered and what is the seat intake?', a: 'GLEC offers B.E. in CSE (360 seats), B.E. in CSE AI&ML (120 seats), B.E. in IT (60 seats), B.E. in Computer Science (60 seats), and B.E. in Humanities & Sciences.' },
      { q: 'What is the eligibility for B.E. admission?', a: 'Pass in 10+2 / Intermediate with Physics, Chemistry, and Mathematics. Minimum 45% aggregate in PCM (40% for SC/ST). TG EAPCET qualification is required for the 70% merit category seats.' },
      { q: 'What is the annual fee for B.E. programmes?', a: 'The tuition fee is ₹70,000 per year. Special fee is ₹5,500 in I Year and ₹2,500 in subsequent years. Total fee for I Year: ₹75,500.' },
      { q: 'Are government scholarships available?', a: 'Yes. SC, ST, BC, EBC, and Minority students are eligible for fee reimbursement through the Telangana ePASS portal. AICTE Pragati and Saksham scholarships are also available for eligible students.' },
      { q: 'Does GLEC have hostel facilities?', a: 'Yes. GLEC has separate hostel blocks for boys and girls with furnished rooms, 24×7 security, mess, Wi-Fi, and medical assistance.' },
      { q: 'How do I apply for management quota?', a: 'Contact the admissions office at +91 7207344440 or visit the campus. Management quota (30% seats) does not require TG EAPCET; 10+2 with PCM pass is sufficient.' },
      { q: 'What documents are required at admission?', a: 'SSC and Intermediate marks memos, TC, EAPCET hall ticket & rank card, allotment order, category certificate (if applicable), Aadhar card, income certificate, and photographs. See the Documents page for the complete list.' },
      { q: 'When does the 2025–26 academic year begin?', a: 'Regular classwork for B.E. I Year 2025–26 commences on 28 August 2025. Official notifications are published on the college website and notice boards.' },
    ],
    downloads: [
      { title: 'Academic Calendar 2025–26', type: 'PDF', size: '—', link: 'https://www.glwec.in/downloads/Academic-Calendar1.pdf' },
      { title: 'Document Submission Procedure', type: 'PDF', size: '—', link: 'https://www.glwec.in/downloads/Document_submission.pdf' },
    ],
  },

  // ── Research ─────────────────────────────────────────────────────────────────
  research: {
    publications: [
      {
        year: '2024–25',
        papers: [
          { title: 'Diabetes Monitoring and Prediction Using Computational Intelligence Techniques: A Systematic Review', authors: 'Dr. Padmalaya Nayak', venue: 'SN Computer Science Journal', publisher: 'Springer', type: 'Journal' },
          { title: 'Predicting Early Risk of Diabetes Using Hierarchical Fuzzy Logic', authors: 'K. Ananya, Padmalaya Nayak, V. Trivedi', venue: 'ICSES Proceedings', publisher: 'IEEE', doi: '10.1109/ICSES63445.2024.10763099', type: 'Conference' },
          { title: 'Intrusion Detection System for Restricted Areas Entry Using Haar Cascade and LBP Classifier', authors: 'Balina Sri Vaisnavi, Padmalaya Nayak', venue: 'ICCCNet Proceedings', publisher: 'Springer', type: 'Conference' },
          { title: 'Sentiment Analysis on Amazon Reviews Using Machine Learning Techniques', authors: 'Varsha, Kavya, Padmalaya Nayak', venue: 'ISBM Proceedings', publisher: 'Springer', type: 'Conference' },
          { title: 'IoT Assisted Indoor Air Quality Sensing and Predictive Analysis Using Machine Learning Techniques', authors: 'Padmalaya Nayak, Veena Trivedi', venue: 'ASIANCON Proceedings', publisher: 'IEEE', doi: '10.1109/ASIANCON62057.2024.10837710', type: 'Conference' },
          { title: 'Ensemble Deep Learning Framework for Skin Cancer Classification', authors: 'Devakishan Adla, G. Venkata Rami Reddy, Padmalaya Nayak', venue: 'ICAITPR Proceedings', publisher: 'IEEE', type: 'Conference' },
          { title: 'Intelligent Computing on IOT 2.0, Big Data Analytics and Block Chain Technology', authors: 'M. S. Obaidat, Dr. Padmalaya Nayak, Niranjan K. Ray', venue: 'Edited Book', publisher: 'Taylor & Francis', doi: 'doi.org/10.12001/9781003326236', type: 'Book' },
          { title: 'Artificial Neural Network based Clustering in Wireless Sensor Networks to balance energy Consumption', authors: 'P. Nayak, V. Trivedi, S. Gupta', venue: 'Cogent Engineering, Vol. 11', publisher: 'Taylor & Francis', type: 'Journal' },
          { title: 'Comparison of Stability and Thermophysical Properties of CNT-GNP Hybrid Nanofluids using different Surface Modification Techniques', authors: 'B. Sanduru, S. Vadapalli, K. Satyanarayana, D. V. Nemova, A. Joshi', venue: 'Cogent Engineering, Vol. 11', publisher: 'Taylor & Francis', type: 'Journal' },
          { title: 'Quality by Design Tool Evaluated Green Stability-Indicating UPLC Content Determination Method for Olanzapine and Samidorphan Dosage Form', authors: 'Jyothsna Menda, Vaishnavi Chintala, et al.', venue: 'Microchemical Journal, Vol. 197', publisher: 'Elsevier', type: 'Journal' },
          { title: 'Fabrication and Mechanical Properties of Hybrid Fibre-Reinforced Polymer Composite with Graphene Nanoplatelets and MWCNTs', authors: 'B. R. Reddivari, S. Vadapalli, B. Sanduru, T. Buddi, et al.', venue: 'Cogent Engineering, Vol. 11', publisher: 'Taylor & Francis', type: 'Journal' },
          { title: 'Life Cycle Analysis of Energy Storage Technologies: A Comparative Study', authors: 'B. Sanduru, M. Dhyani, R. Thakur, S. Dixit', venue: 'SDEA Proceedings, Vol. 537', publisher: 'E3S', type: 'Conference' },
          { title: 'Particle Swarm Optimization for Sizing of Solar-Wind Hybrid Microgrids', authors: 'B. Sanduru, A. S. Negi, N. Sharma, L. Bhalla', venue: 'SDEA Proceedings, Vol. 537', publisher: 'E3S', type: 'Conference' },
        ],
      },
      {
        year: '2023–24',
        papers: [
          { title: 'Deep Neural Network Architecture for Mobile Device Identification', authors: 'Surbhi Gupta, Neeraj Mohan, Padmalaya Nayak, P. Gopala Krishna', venue: 'ICCCNT Proceedings', publisher: 'IEEE', doi: '10.1109/ICCCNT56998.2023.10306741', type: 'Conference' },
          { title: 'Exponential Gannet Firefly Optimization Algorithm Enabled Deep Learning for Diabetic Retinopathy Detection', authors: 'T. Prabhakar, T. V. M. Rao, B. Maram, D. Chigurukota', venue: 'Biomedical Signal Processing and Control, Vol. 87', publisher: 'Elsevier', type: 'Journal' },
          { title: 'Prediction of Diabetes Mellitus using ML Techniques: A Systematic Overview', authors: 'T. Krishna Manaswini, Padmalaya Nayak, et al.', venue: 'ICSCSS Proceedings', publisher: 'IEEE', doi: '10.1109/ICSCSS57650.2023.10169244', type: 'Conference' },
          { title: 'A Full Resolution Convolutional Network with a Dynamic Graph Cut Algorithm for Skin Care Classification and Detection', authors: 'Devakishan Adla, G. Venkata Rami Reddy, Padmalaya Nayak, G. Karuna', venue: 'Healthcare Analytics, Vol. 3', publisher: 'Elsevier', type: 'Journal' },
          { title: 'A Survey on Deep Learning based Computer-Aided Diagnosis Model for Skin Cancer Detection using Dermoscopic Images', authors: 'Devakishan Adla, G. Venkata Rami Reddy, Padmalaya Nayak, G. Karuna', venue: 'ICCSAI Proceedings, Vol. 40', publisher: 'IEEE', type: 'Conference' },
          { title: 'Security Issues in IoT Applications using Signcryption Schemes: An Overview', authors: 'Padmalaya Nayak, G. Swapna', venue: 'Internet of Things, Vol. 21', publisher: 'Elsevier', type: 'Journal' },
          { title: 'Predicting Students Academic Performance by Mining Educational Data through Machine Learning Based Classification Model', authors: 'Padmalaya Nayak, Sk. Vaheed, Surbhi Gupta, Neeraj Mohan', venue: 'Education and Information Technologies, Vol. 28', publisher: 'Springer', type: 'Journal' },
          { title: 'Machine Learning Enabled Framework for Classification and Detection of Intrusion in MANET', authors: 'Veena Trivedi, Meghna Dubey, Padmalaya Nayak', venue: 'ICCNT Proceedings', publisher: 'IEEE', doi: '10.1109/ICCCNT56998.2023.10307264', type: 'Conference' },
          { title: 'Prediction of Thermophysical Properties of Hybrid Nanofluids using Machine Learning Algorithms', authors: 'S. Bhanuteja, V. Srinivas, Ch. V. K. N. S. N. Moorthy, et al.', venue: 'IJIDeM Proceedings', publisher: 'Springer', type: 'Conference' },
          { title: 'Effect of Size of Multi-Walled Carbon Nanotubes on Thermal Conductivity and Viscosity of Ethylene Glycol-Based Nanofluids', authors: 'Abhishek Dosodia, Srinivas Vadapalli, Amitabh Kumar Jain, et al.', venue: 'Physics of Fluids, Vol. 35', publisher: 'AIP', type: 'Journal' },
          { title: 'Quality by Design Tool Assessed UPLC Method for Analysis of Remogliflozin and Teneligliptin in Oral Dosage Form', authors: 'Jyothsna Menda, Vaishnavi Chintala, et al.', venue: 'ACS Omega, Vol. 9', publisher: 'ACS Publications', type: 'Journal' },
        ],
      },
      {
        year: '2022–23',
        papers: [
          { title: 'Predicting Stock Market Price using Machine Learning Techniques', authors: 'Padmalaya Nayak, K. Srinivasa Nihal, Y. Tagore Ashish, et al.', venue: 'Data Analytics and Management, Vol. 572', publisher: 'Springer', type: 'Conference' },
          { title: 'An Investigation of Various Versions of AODV Protocol for Discovering Routing Path and Eliminating Packet Loss', authors: 'Veena Trivedi, Padmalaya Nayak', venue: 'ECS Transactions, Vol. 107', publisher: 'IOP', type: 'Journal' },
          { title: 'A Deep Survey on Vehicular Route Guidance Algorithms', authors: 'Bhavya Goje, Padmalaya Nayak', venue: 'ICOSEC Proceedings', publisher: 'IEEE', doi: '10.1109/ICOSEC54921.2022.9951975', type: 'Conference' },
          { title: 'An Optimal Route Finding on Road Networks using A*, Dijkstra, and Bidirectional Algorithms', authors: 'Bhavya Goje, Padmalaya Nayak, A. Sai Hanuman', venue: 'ICCCNT Proceedings', publisher: 'IEEE', doi: '10.1109/ICCCNT54827.2022.9984394', type: 'Conference' },
          { title: 'Classification of Marine Vessels Using Deep Learning Models based on SAR Images', authors: 'Aneesh Reddy Sannapu, Padmalaya Nayak, et al.', venue: 'ICICT Proceedings', publisher: 'IEEE', doi: '10.1109/ICICT54344.2022.9850767', type: 'Conference' },
          { title: 'Building IoT Assisted Indoor Air Quality Pollution Monitoring System', authors: 'Sk. Vaheed, Padmalaya Nayak, et al.', venue: 'ICCES Proceedings', publisher: 'IEEE', doi: '10.1109/ICCES54183.2022.9835822', type: 'Conference' },
          { title: 'Smart Attendance Monitoring System for Online Classes Using Facial Recognition', authors: 'Suraj Goud, R. Abhiram, Padmalaya Nayak, Priyanka Kaushal', venue: 'ICICC Proceedings, Vol. 471', publisher: 'Springer', type: 'Conference' },
        ],
      },
      {
        year: '2021–22',
        papers: [
          { title: 'Routing in Sensor Networks using Machine Learning Techniques: Challenges and Opportunities', authors: 'Padmalaya Nayak, G. K. Swetha, Surbhi Gupta, K. Madhavi', venue: 'Measurement, Vol. 178', publisher: 'Elsevier', type: 'Journal' },
          { title: 'Deep Learning based Computer Aided Diagnosis Model for Skin Cancer Detection and Classification', authors: 'Devakishan Adla, G. Venkata Rami Reddy, Padmalaya Nayak, G. Karuna', venue: 'Distributed and Parallel Databases, Vol. 40', publisher: 'Springer', type: 'Journal' },
          { title: 'Deep Vision based Surveillance System to Prevent Train-Elephant Collisions', authors: 'Surbhi Gupta, Neeraj Mohan, Padmalaya Nayak, et al.', venue: 'Soft Computing, Vol. 26', publisher: 'Springer', type: 'Journal' },
          { title: 'Analysis of COVID-19 Data through Machine Learning Techniques', authors: 'CSE Faculty', venue: 'ICMIB Conference Proceedings, Vol. 431', publisher: 'Springer', type: 'Conference' },
        ],
      },
    ],

    phdAwarded: [
      { name: 'Dr. A. Usha Sree',       dept: 'ECE',          thesis: 'Design, Fabrication and Testing of Microwave Antennas for Wideband Applications', date: '4 May 2024' },
      { name: 'Dr. Harika Vanam',        dept: 'CSE',          thesis: 'An Enhanced Sentiment Analysis Model Using Deep Learning for Social Media Data', date: '18 Aug 2024' },
      { name: 'Dr. S. Bhanu Teja',       dept: 'Mech. Engg.',  thesis: 'Prediction of Thermophysical Properties of Hybrid Nanofluids Using Machine Learning', date: '26 Feb 2025' },
      { name: 'Dr. Sailaja Eswara',      dept: 'H&S (English)',thesis: 'A Study of Diasporic Themes in Select Novels of Indian Writing in English', date: '6 May 2025' },
      { name: 'Dr. M. Jyothsna',         dept: 'H&S (Chemistry)', thesis: 'An Application of Quality by Design (QbD) Approach in Pharmaceutical Analysis', date: '16 May 2025' },
      { name: 'Dr. Archana Mullapudi',   dept: 'CSE',          thesis: 'Machine Learning Modeling for Agricultural Crop Yield Prediction', date: '13 Aug 2025' },
    ],

    awards: {
      desc: 'GLEC faculty members consistently receive recognition for their outstanding research contributions. The institution honours researchers with cash incentives, certificates, and mementos through an annual Research Excellence Award programme.',
      categories: [
        { title: 'Best Research Paper Award', desc: 'Awarded to faculty/students with the most impactful published paper in a Scopus/Web of Science-indexed journal or reputed conference each academic year.' },
        { title: 'Research Excellence Award', desc: 'Recognises faculty who demonstrate consistent research output — publishing in high-impact journals, presenting at international conferences, and securing funded projects.' },
        { title: 'Young Researcher Award', desc: 'Encourages early-career faculty and research students who show exceptional promise through novel research contributions and publications.' },
        { title: 'Innovation & Patent Award', desc: 'Celebrates faculty and student inventors who file or receive patents for novel technological solutions and innovations.' },
      ],
    },

    facilities: [
      {
        name: 'Idea Lab',
        desc: 'A state-of-the-art technological hub established to promote, nurture, and facilitate a robust platform for students and faculty to engage in innovative and collaborative research. The Idea Lab aspires to transform the institute into a centre of excellence.',
        equipment: [
          { name: '3D Printing', purpose: 'Enables rapid prototyping, iterative testing, and cost-effective experimentation for complex, customised structures in engineering, biomedicine, and materials research.' },
          { name: 'Magnetic Stirrers with Hot Plates', purpose: 'Ensures precise mixing and controlled heating for chemical, biological, and material science experiments; maintains optimal reaction conditions for reproducible results.' },
        ],
        image: 'https://www.glwec.in/images/research-facilities.jpg',
      },
      {
        name: 'AI / ML Research Lab',
        desc: 'Dedicated GPU-enabled workstations for deep learning model training, computer vision research, and large-scale NLP experiments using TensorFlow, PyTorch, and cloud-based HPC resources.',
        equipment: [
          { name: 'GPU Workstations', purpose: 'High-performance NVIDIA GPU systems for accelerated deep learning model training and inference experiments.' },
          { name: 'Dataset Repository', purpose: 'Curated local and cloud datasets for computer vision, NLP, and tabular ML research across departments.' },
        ],
        image: null,
      },
      {
        name: 'Chemistry & Nanotechnology Lab',
        desc: 'Equipped for advanced materials research including nanofluid characterisation, polymer composites, and pharmaceutical analysis using UPLC, viscometers, and thermal measurement instruments.',
        equipment: [
          { name: 'UPLC System', purpose: 'Ultra-Performance Liquid Chromatography for pharmaceutical compound analysis and quality-by-design research.' },
          { name: 'Nanofluid Characterisation Setup', purpose: 'Instruments for measuring thermal conductivity, viscosity, and stability of hybrid nanofluids for renewable energy applications.' },
        ],
        image: null,
      },
    ],
  },

  // ── Examination Online Services ───────────────────────────────────────────
  examinationOnlineServices: [
    { title: 'Online Grievance Form', desc: 'Submit institutional grievances through the official online portal.', link: 'https://forms.gle/FG8wCibS5UptBFN46', category: 'Student Support' },
    { title: 'Osmania University Results', desc: 'Access official semester examination results through the OU examination portal.', link: 'https://www.osmania.ac.in/examination-results.php', category: 'Results' },
    { title: 'Exam Branch Email', desc: 'Contact the examination branch directly for queries regarding examinations and marks.', link: 'mailto:examglec@gmail.com', category: 'Contact' },
    { title: 'Academic Verification', desc: 'Request verification of academic credentials and transcripts via email.', link: 'mailto:placements@glwec.in', category: 'Records' },
    { title: 'Academic Calendar', desc: 'Download the academic calendar for scheduled examination dates and events.', link: 'https://www.glwec.in/downloads/Academic-Calendar1.pdf', category: 'Calendar' },
  ],
};

export default college;
