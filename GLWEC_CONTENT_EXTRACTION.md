# GLWEC (glwec.in) — Full Content Extraction

**Source:** live crawl of https://www.glwec.in/, performed 2026-08-29 (fresh re-crawl; supersedes the 2026-08-24 pass referenced in `GLWEC_VS_NEW_SITE_AUDIT.md`).
**Method:** full nav/footer discovery pass, then 9 parallel crawlers covering every reachable page, followed by a manual browser-verification pass (raw `get_page_text`, not AI-summarized) on every page an agent flagged as possibly under-captured.
**Scope:** 61 distinct URLs across Home, About, Administration (13 sections + Ombudsperson/RTI/Mandatory Disclosures), Admissions, Academics, 5 Departments × 5–6 sub-pages each, Research, Placements, Examinations, Contact, Alumni, Events, Infrastructure, and Student Life.
**Status:** pure extraction — nothing in this document has been implemented into the new site. No files under `src/` were touched to produce this.
**Reading this document:** content is reproduced verbatim in quotes where source text is quoted; section 0 covers boilerplate shared by literally every page so it isn't repeated 60 times below. Section 13 is a standalone findings log — duplicate/broken/empty/outdated items — as requested, kept separate from the content itself.

---

## 0. Sitewide elements (present on every page)

**Header:** college logo (`images/logo.png?v-0.3`), an affiliations banner (`images/affiliations.png`), and the line "TG EAPCET counselling code: GLWC".

**Flash news banner (scrolling text, homepage and likely sitewide):**
> "Gokaraju Lailavathi Engineering College is Co-Education college from the AY 24-25 (previously this is Gokaraju Lailavathi Womens Engineering College)" | Grievance can be submitted online @ https://forms.gle/FG8wCibS5UptBFN46

**Main navigation** (label → URL; sub-items indented):
- Home → `index.php`
- About us → `aboutus.php`
- Administration → Management (`Administration.php`), Sponsoring Body & MOAG (`Sponsoring-Body.php`), Governing Body (`Governing_Body.php`), Registrar (`registrar.php`), Principal (`principal.php`), ID Plan (`Institution-Development-Plan.php`), Anti Ragging Committee (`Anti_Ragging_Committee.php`), Anti Sexual Harassment Committee (`Anti_Sexual_Harassment_Cell.php`), Grievance Redressal Policy (`Grievance-Redressal.php`), SEGD Cell (`SEDG.php`), Finance Commitee [sic] (`Finance_Commitee.php`), Equal Opportunity Cell (`Equal-Opportunity-Cell.php`), ICC (`ICC.php`)
- Admissions → Courses Offered (`Programmes.php`), Admission Procedure (`admission_procedure.php`), Course Fees (`FEE_Structure.php`), EAPCET Ranks (`EAPCET_Ranks.php`), Fee Refund Policy (`Fee-Refund-Policy.php`)
- Academics → Academic Leadership (`Academic-Leadership.php`), Academic Collaborations (`Academic-Collaborations.php`), IQAC (`iqac.php`), Library (`Library.php`), Rules & Regulations (`Rules_and_Regulations.php`), Academic Calendar (`Academic_Calendar.php`)
- Departments → 5 programs, each with About/HOD/Faculty/Syllabus/Events(/Publications & Projects) sub-links (full list in §7)
- Research → Publications (`Publications.php`), Collaborations (`Academic-Collaborations.php`, same URL as under Academics), Facilities (`Facilities.php`), Research Awards (`Research-Awards.php`), Ph.D Awarded (`Ph-D-Awarded.php`)
- Placements → `placements.php` (no sub-items)
- Examinations → examination committee (`examination-committee.php`), Notifications (`Notifications.php`), results (`results.php`), exam branch Online services (`exam-branch-downloads.php`)
- Contact us → `contactus.php`

**Footer — Important Links:** About College (`aboutus.php`), Chairman (`Chairman.php`), Vice President (`Vice_President.php`), Registrar (`registrar.php`), Principal (`principal.php`), Placements (`placements.php`), Infrastructure (`Infrastructure.php`), SKILL Series (external: `https://www.griet.ac.in/griet_skill_series.php`), Contact us (`contactus.php`)

**Footer — Administration:** identical 13-item list to the main nav's Administration submenu.

**Footer — Student Life:** Health Facilities (`Health-Facilities.php`), Sports Facilities (`Sports-Facilities.php`), Placements (`placements.php`), Physically Challenged (`Physically-Challenged.php`), Ombudsperson (`Ombudsperson.php`), RTI Act (`RTI-Act.php`)

**Footer — additional links seen sitewide:** Alumni Association (`Alumni-Association.php`), Mandatory Disclosures (`mandatory-disclosures.php`), Events (`events.php`), Infrastructure (`Infrastructure.php`)

**Footer — Contact:** "Nizampet Road, Bachupally, Kukatpally, Hyderabad- 500090" (spelling of "Kukatpally" varies slightly page to page — "Kukatpully"/"Kukatpalli" also seen, reproduced as found)

**Social links:** Instagram `https://www.instagram.com/glwec_hyd/` · Facebook `https://www.facebook.com/GLWEC` · LinkedIn `https://www.linkedin.com/company/gokaraju-lailavathi-women-s-engineering-college-glwec/` · YouTube `https://www.youtube.com/@gokarajulailavathiwomensen5087/videos/` — all four still branded "GLWEC" / "Women's Engineering College", inconsistent with the site's own stated co-ed rename.

**Copyright:** "© Copyright 2025 - All Rights Reserved www.glwec.in"

**Homepage-only carousel:** confirmed via live browser render — the top-of-homepage carousel is 4 slides, each just an image + label linking onward: ALUMNI ASSOCIATION, MANDATORY DISCLOSURES, EVENTS, INFRASTRUCTURE (not 80+ event photos as one crawler initially guessed from a WebFetch summary — that guess is superseded by this direct check).

---

## 1. Home (`index.php`)

**About section heading:** "Gokaraju Lailavathi Engineering College"

**About paragraph (verbatim):**
> "Gokaraju Lailavathi Engineering College (GLEC) [previously Gokaraju Lailavathi Womens Engineering College (GLWEC)] was established in 2021 by Dr. G. Gangaraju as a self-financed institution under the Gokaraju Rangaraju Educational Society, dedicated to promoting quality education. Approved by AICTE, New Delhi, and affiliated with Osmania University, Hyderabad, GLEC is recognized for its innovative teaching practices. The college benefits from the guidance of an experienced management committee comprising experts from various industries and academia. As a sister concern of GRIET, GLEC adopts its facilities and teaching-learning processes to ensure excellence in education."

"Read more" button → `aboutus.php`

**News & Events ticker (verbatim items):**
- "Attention I B.E. 2025-2026 admitted students regular classwork commences from 28th August 2025 at Block 1, GLEC. Time: 10:00 AM to 1:00 PM."
- Procedure for Document submission @ college Reporting → PDF link
- Job Openings → PDF link
- "GOKARAJU LAILAVATHI WOMENS ENGINEERING COLLEGE is converted to GOKARAJU LAILAVATHI ENGINEERING COLLEGE (Co Education) from the academic year 2024-2025. Both Boys and Girls can opt for this Institute in the counselling of TS-EAPCET-2025."
- Faculty Recruitment Application Form → PDF link
- "B.E. Computer Science and Engineering with Intake 360 seats"
- "B.E. CSE (AI & ML) with Intake 120 seats"
- "For Student Academic Verification, please mail us the details to placements@glwec.in"

**Vision:**
> "To be world class engineering college for imparting experiential, innovative and critical skills addressing societal problems. Inspiring young technocrats to become globally competent in technical education and research to emerge as world class leaders."

**Mission (4 bullets):**
1. "To promote experiential learning in students by engaging them in hands on experience and reflection, so that, they are able to connect theories and knowledge learned in the classroom to real-world situations"
2. "To create an ambience in which novel ideas, research and development flourish in order to shape the emerging innovators"
3. "To provide infrastructure and facilities to meet the latest technology trends"
4. "To avail necessary support for skill enhancement to reduce the industry-academia gap"

**"Why GLEC?" section (verbatim):**
> "Gokaraju Lailavathi Engineering College (GLEC) was established in 2021 by Dr. G. Gangaraju as a self-financed institute under the aegis of Gokaraju Rangaraju Educational Society. Despite advancements in the education sector, challenges remain in fostering equal opportunities for all. Stereotypes often undermine capabilities in STEM fields, entrepreneurship, critical thinking, and problem-solving. At GLEC, we actively address these challenges by creating an inclusive learning environment. Beyond the university curriculum, we offer specialized programs designed to equip students with the skills needed to become globally competent professionals and future leaders."
*(This is legacy pre-co-ed framing — flagged in §13 as do-not-migrate.)*

**Our Initiatives (3 cards, each linking to its own page — see §3):** NIPUN, DHI, SEEKH — one-line teaser text each.

**Departments section:** two banner links only (CSE, AI&ML) — matches the homepage's programs-offered list not covering IT/CS/H&S.

---

## 2. About Us & Leadership

### 2.1 About Us (`aboutus.php`)
Content duplicates the homepage About paragraph, plus:

**Quality Policy:**
> "To provide an integrated learning environment to enable students to grow towards their full potential and meet the high expectations of the Industry and the Society"

**Core Values (7):** Excellence, Integrity, Innovation, Entrepreneurship, Leadership, Sustainability, Service to the Nation.

### 2.2 Chairman (`Chairman.php`)
**Dr. Gokaraju Ganga Raju, Chairman.** Bio (verbatim excerpt): "Dr.G.Ganga Raju is renowned for his dynamic, optimistic, and compassionate nature. As an outstanding team leader, he takes ownership of issues around him, takes control of situations, and promotes universal good." Founded GRIET (1997) and a pharmacy college (2003) under the Gokaraju Rangaraju Educational Society. Photo: `images/Gokaraju_Ganga_Raju.jpg`.

### 2.3 Vice President (`Vice_President.php`)
**Sri G.V.K. Ranga Raju, Vice President** — "the eldest son of Dr.G.Ganga Raju." Bio emphasizes his "people skills," a "no-compromise policy" on institutional oversight, and exposing "students on cutting edge technology." Photo: `images/Ranga_Raju.jpg`.

### 2.4 Sponsoring Body (`Sponsoring-Body.php`)

**Executive Committee (9 members):**
| S.No | Name | Designation |
|---|---|---|
| 1 | G.Ganga Raju | President |
| 2 | GVK Ranga Raju | Vice President |
| 3 | G. Rama Raju | Secretary |
| 4 | Bhupathi Raju Ravindra | Joint Secretary |
| 5 | Penmetsa Venkata Satyavathi | Assistant Secretary |
| 6 | Yarlagadda Vijaya Rani | Treasurer |
| 7 | Chandra Shekhar | Committee Member |
| 8 | Venkateswara Rao | Committee Member |
| 9 | Yalamanchili Rama | Committee Member |

Society name: "Gokaraju Rangaraju Educational Society", office at "Gokaraju Rangaraju Hotel Complex, Juvvalapalem Road, Bhimavaram- Andhra Pradesh".

**Aim & Objectives (6 bullets, verbatim):**
1. "The society is established and shall be administered under the provisions of the Constitution of India."
2. "The society shall work to the cause of removing illiteracy among the people."
3. "The society shall make efforts to start technical education schools in Andhra Pradesh."
4. "The society shall strive to train technical persons with industrial Back- Ground."
5. "The society shall also establish training schools and colleges to strengthen and promote Educational Activities."
6. "It shall work-out a plan to remove gaps in Educational setup in order to promote scientific and technical needs of rural masses."

---

## 3. Initiatives

### 3.1 NIPUN (`nipun.php`) — browser-verified, complete
> "NIPUN is designed to bridge the gap between industry and academia by offering a diverse range of skill enhancement courses, including Joy of Computing, Full Stack Development, IoT, Blockchain, AR/VR, MERN Stack, DevOps, HTML, CSS, Python, and other programming languages. These programs equip students with the ability to identify problems, apply appropriate solutions, and develop industry-ready skills.
>
> In an era of increasing automation, an innovative mindset, problem-solving abilities, and critical thinking are crucial for engineers to enhance their employability. Beyond university degrees, employability skills, soft skills, and communication skills are key to thriving in a professional environment.
>
> Through NIPUN, GLEC bridges the gap between acquired and required knowledge, academia and industry, employability and employment, and skill and subject by fostering continuous learning, unlearning, and relearning. This program runs every semester, allowing students to explore technologies of their interest and gain hands-on experience before making career choices."

- **I Year — Joy of Computing:** "Joy of Computing focuses and instil the students mind to think logically and arrive at a solution programmatically. They learn and practice, current advances in computing and the art of programming with python as a language that enhances their skill set and knowledge. Students learn programming with anecdotes, analogies and illustrious examples."
- **II Year — Full Stack Development:** "Full Stack Developers are developers that design complete apps and websites. These developers work on all facets of development, from frontend, to backend, to database and even debugging and testing. In short, the developer must understand the app through and through. Frontend developers are more sought after because of their expertise of not in one but multiple technologies. They can handle all aspects of development, and it can result in a more seamlessly created product."
- No III/IV Year content exists on the page — confirmed complete, not truncated.

### 3.2 DHI (`DHI.php`)
> "DHI! where creative minds congregate: the impossible becomes possible and the ordinary becomes extraordinary. Rooted in the Sanskrit word Vāc (वाच), meaning speech, Dhi embodies understanding, reflection, intellect, imagination, and innovation."
>
> "The DHI program at GLEC serves as a platform for students to evolve, develop, and demonstrate their knowledge while nurturing their ability to think beyond conventional boundaries."
>
> "In today's fast-paced and ever-evolving tech landscape, success requires more than just academic excellence; analytical thinking, interpersonal skills, and soft skills play a crucial role."

### 3.3 SEEKH (`seek.php`)
> "Engineering is not just about adopting someone else's approach to solving a problem—it's about discovering and developing one's own. SEEKH is a unique program designed to impart experiential learning to budding engineers. GLEC has introduced this comprehensive initiative to bridge the gap between theory and practice, enabling students to gain hands-on experience and apply their knowledge effectively.
>
> While academic grades provide qualifications, true employability comes from mastering core concepts. SEEKH empowers students by integrating academic learning with practical application, fostering problem-solving skills, innovation, and technical expertise.
>
> This distinctive platform encourages young technocrats to think creatively, translating technical knowledge into real-world solutions. It nurtures both hard and soft skills, emphasizing creativity and application over rote learning. SEEKH seamlessly connects academia with industry, ensuring that students are well-prepared to excel in their professional journeys."

---

## 4. Administration

### 4.1 Management (`Administration.php`)
Repeats Chairman/Vice-President bios from §2.2/2.3 (condensed). Note: bio text references "GRIET" (the sister institution) rather than GLEC in places — reproduced as found, not corrected.

### 4.2 Governing Body (`Governing_Body.php`)
Intro: "Gokaraju Lailavathi Engineering College (GLEC) affiliated to Osmania University Hyderabad. GLEC is a self-financed institution and is governed through a Governing Body, which is responsible for its overall administration and control." — "The following is the Governing Body Constitution for the Academic Year 2024-25."

| Sl.No | Name | Designation | Category | Email |
|---|---|---|---|---|
| 1 | Dr. G. Ganga Raju, Chairman, Laila Group of Industries, Vijayawada, AP | President | Chairman / Society Nominee | mail@lailanutra.com |
| 2 | Sri G.V.K. Ranga Raju, M.D., Delta Paper Mills, AP | Vice President | Society Nominee | gvk555@gmail.com |
| 3 | Sri G. Rama Raju, M.D., Laila Impex, Vijayawada, AP | Secretary | Society Nominee | asrams@yahoo.com |
| 4 | Smt. Vani Ranga Raju, M.D., Ganges Valley School, Hyderabad | Member | Society Nominee | gvaniraju@gmail.com |
| 5 | Prof. G. Mallesham, Dept. of Electrical Engg., UCE, OU, Hyderabad | University Nominee | University Nominee | gm.eed.cs@gmail.com |
| 6 | Dr. D. N. Reddy, Chairman, Recruitment Board, DRDO | Member | Member | reddydn@gmail.com |
| 7 | Dr. Syeda Sameen Fathima, Professor, Anurag University | Member | Member | sameenf@gmail.com |
| 8 | Prof. J.N. Murthy, Director, GRIET, Hyderabad | Member | Member | nm.jandhyala@gmail.com |
| 9 | Dr. K.V.S. Raju, Ph.D., Registrar, GLEC | Member | Member, Senior Faculty | ao@griet.ac.in |
| 10 | Dr. A. Sai Hanuman, Ph.D., Professor & Principal, GLEC | Member Secretary | Member Secretary & Principal | admnglwec@gmail.com |

Each member has a photo under `images/gbpics/`. Note member 9's email is on the `griet.ac.in` domain, not `glwec.in`.

### 4.3 Registrar (`registrar.php`)
**Prof. Kalidindi Venkata Satyanarayana Raju** (Dr. K V S Raju), born 24 Sept 1956. M.Sc. from Barakathulla University (1981); career in banking (Bank of Baroda), CAIIB certified; MBA via Dr. B.R. Ambedkar Open University; VRS from banking in 2001; joined GRIET as Administrative Officer in 2005; Ph.D. in Management from JNTU Hyderabad (2014), thesis on "Leadership Development in Public Sector Banks." Photo: `images/K_VS_Raju.jpg`.

### 4.4 Principal (`principal.php`)
**Dr. Akundi Sai Hanuman**, Professor of CSE, Ph.D. from Acharya Nagarjuna University, Guntur (2012), 24+ years' experience in academics/industry/research. Research interests: Data Clustering, Data Sciences, Machine Learning, Optimization Techniques, Distributed Systems. Roles held: Dean Academics, Dean of Examinations, HOD, Chairman BOS, convener for national/international events. Member of IEEE and CSI. 35+ published papers; two patents ("A Generic Framework for Multi Model Document Image Analysis" and "An Efficient Mechanism using Smart Belt to Prevent School Children Abduction", both 2020). Completed 2 research projects (~₹8.6 lakh total funding). Registered Ph.D. Guide at JNTU Hyderabad CSE dept.; currently guiding 2 Ph.D. scholars. Photo: `images/Principal.jpeg`.

### 4.5 Institution Development Plan (`Institution-Development-Plan.php`)
**Core Committee:**
| S.No | Name | Position |
|---|---|---|
| 1 | Dr A Sai Hanuman | Principal (Coordinator, IDP) |
| 2 | Dr KVS Raju | Registrar (Member, Administration) |
| 3 | Dr Padmalaya Nayak | HOD, CSE (Member, Computer Science Branches) |
| 4 | Dr J Kishore Babu | HOD, H&S (Member, Basic Sciences) |
| 5 | Mr P. Gopi Krishna | (Member, Controller of Examinations) |

Document link: "IDP 2021-2026" → `downloads/IDP 2021-26.pdf` (the substantive plan content lives only inside this PDF, not extracted here).

### 4.6 Anti Ragging Committee (`Anti_Ragging_Committee.php`)
Context: policy aligned with Supreme Court/AICTE/UGC/state directives. Preventive measures listed include notice-board postings of Supreme Court directives, anti-ragging propaganda on the site's scrolling bar, posted phone numbers, a first-three-months Anti-Ragging Squad campus patrol, AICTE-ragging-prohibition info in the prospectus, mandatory student/parent affidavits, orientation counseling, and staggered class schedules separating year groups.

Emergency contacts: Dial 100 · Bala Nagar Zone She Team WhatsApp 9490617444 · Balanagar SI 9490617349.

**Committee members (10, with home addresses and personal phone numbers):**
Dr. A. Sai Hanuman (Principal) · Dr. Padmalaya Nayak (Prof. & HOD CSE) · Dr. J. Kishore Babu (Asst. Prof., HOD H&S) · Mr. K. Srinivasa Rao (Incharge Student Affairs) · Dr. A. Ushasree (Incharge Discipline) · Sri. B. Prabhakar Reddy (Inspector of Police) · Ms Kranthi Ahron Jannu (State Coordinator, NGO My Choice Foundation) · Mr M. Srinivas (Parent) · Mr. Koteswara Rao (Non Teaching) · Mr. Muthyala Narasimhulu (Local Media Representative).

**Student members (6, with home addresses/phones):** Greeshmaja K, Sainni. Manaswika, Pendem Sathwika, Pulepelly Sanjana, Bollam Jyothika, S. Karthika Bhanusri — full names/IDs/addresses/phone numbers on the live page (privacy-sensitive; see §13 for the ID-collision flag).

### 4.7 Anti-Sexual Harassment Committee (`Anti_Sexual_Harassment_Cell.php`) — browser-verified, complete
**Functions (7, verbatim, none truncated):**
1. "Implement the Supreme Court and UGC directives on policies against sexual harassment within the institution."
2. "Develop a mechanism to prevent and address cases of sexual harassment and other gender-based violence."
3. "Ensure the policy is implemented fully and effectively through proper complaint reporting and follow-up procedures."
4. "Create an environment free from gender-based discrimination."
5. "Guarantee equal access to all facilities and participation in college activities for everyone."
6. "Establish a safe physical and social environment that discourages acts of sexual harassment."
7. "Promote awareness about sexual harassment in its various forms through a supportive social and psychological environment."

**Members (5):** Dr.A.Sai Hanuman (Principal) · Dr. Padmalaya Nayak (Prof. & HOD CSE) · Dr.K. Deepthi Varma (Asst. Prof., H&S) · Dr. M. Rekharani (Asst. Prof., H&S) · Dr. J. Kishore Babu (Asst.Prof., HOD H&S) — each with home address and phone on the live page.

### 4.8 Grievance Redressal Policy (`Grievance-Redressal.php`)
Intro: "The College has a Students' Grievance Redressal Committee. The functions of the Committee are to look into the complaints lodged by any student, and judge its merit. The Grievance Redressal Committee is also empowered to look into matters of harassment." Objectives (7 bullets, verbatim, including a suggestion-box mechanism at the Administrative Block and a ragging-prohibition clause).

**Committee (4):** Dr. A. Sai Hanuman (Chairman) · Dr. Padmalaya Nayak · Dr. K.V.S. Raju · Dr. J. Kishore Babu.
**Discipline Committee members (3):** Dr. A. Ushasree · Dr M.Jyothsna · K Srinivasa Rao.
**Student members (4):** Singireddy Niharika, Turumella Haarika, Kollipara Sahithi Lalithasri, Udumula Akhila.

### 4.9 SEGD Cell (`SEDG.php`)
Title on page: "Socio-Economically Disadvantaged Groups Cell" — constituted "to redress the grievance of SC/ST students and faculty." Committee (7): Dr. Padmalaya Nayak (Chairman) · Dr. Kishore Babu (Coordinator) · Dr. K.V.S. Raju · M.Jyothsna · Mr.V.Laxmaiah · Mrs.Hepsiba Nirmala V · K. Srinivasa Rao. Responsibilities (5 bullets) cover complaint redressal, non-discrimination, circulating scholarship info, implementing constitutional rights, and skill-oriented career programs.

### 4.10 Finance Committee (`Finance_Commitee.php`) — page title itself misspelled "Commitee"
Members nominated for AY 2024-25: Chairman — Dr. A. Sai Hanuman (Principal). Governing-Body nominees — Dr Jandhyala N Murthy (Director), Prof. K.V.S. Raju (Member/Secretary). Principal-nominated teachers — Dr. Padmalaya Nayak, Dr. J Kishore Babu, K Srinivasa Rao. University representative — Prof G Mallesham (OU Nominee).

### 4.11 Equal Opportunity Cell (`Equal-Opportunity-Cell.php`)
Objectives (5 bullets) on women's empowerment/anti-harassment. **Committee (5):** Dr. Padmalaya Nayak (Coordinator), Dr. M. Rekharani, Dr. K. Deepthi, Dr. Deepa, Sailaja Eswara. Activities list: seminars/workshops, personality development, women's health programs, interactions with women achievers, competitions/games. Named real events: **Self-Defence Training** ("Two sessions of Self Defense for I year students were conducted by Women Development Cell every year by N Lakshmi Samrajyam, founder of Rudrama devi self-defense academy"); **International Women's Day**, 8 March 2024, theme "DigitALL: Innovation and technology for gender equality" (Dr. G. Mamatha), Chief Guest **Smt. Tangirala Vidya Rani** (High Court advocate/artist); **International Yoga Day** sessions with Dr. Giriraj T. Kulkarni and certified yoga trainer Sailaja Simma.

### 4.12 ICC — Internal Complaint Committee (`ICC.php`)
Objectives (5) and Functions (4: publicize contact details/procedures, run training programs, train committee members in complaint handling, maintain an email/suggestion-box channel).

**Committee (11, with individual emails and phone numbers):** Dr.B.Deepa (Chairman) · Mrs. B. Aruna · Dr. K.S.N. Raju (email on `griet.ac.in` domain) · Dr. A. Ushasree (Incharge Discipline) · Mr. K Srinivasa Rao (Incharge Student Affairs) · Ms Kranthi Ahron Jannu (NGO State Coordinator) · Mrs. Kodavaluru Swathi (Lab Assistant) · Mrs Ch. Mrudula (Lab Assistant) · Miss. Arthi Reddy Basani (B.E. IV Yr student) · Miss. Lisa Mandro (B.E. III Yr student) · Miss. Ridhima Bhupathiraju (B.E. II Yr student).

### 4.13 Ombudsperson (`Ombudsperson.php`)
"For grievances outside management purview, the Registrar of Osmania University serves as Ombudsperson." **Dr. Gaddam Naresh Reddy**, Registrar, Professor in Commerce, University College of Commerce; Address: Administrative Building, Osmania University campus, Hyderabad-500007; Email displayed with anti-spam spacing "registrar @ Osmania.ac.in"; Landline 040-27098048.

### 4.14 RTI Act (`RTI-Act.php`)
Cites the Right to Information Act, 2005 (effective 15 June 2005) and its transparency/accountability purpose. **PIO:** K.V.S. Raju, Registrar, GLEC — aogriet@gmail.com — 9339818181. **APIO:** K. Srinivasa Rao, Asst. Professor — srinivasaraokglwec@gmail.com — 9441283890.

### 4.15 Mandatory Disclosures (`mandatory-disclosures.php`) — browser/dual-fetch confirmed, 13 document links total
| Category | Link text | File |
|---|---|---|
| AICTE Disclosures | EOA 2025-26 | `downloads/MD/EOA_Report_2025-26.pdf` |
| | EOA 2024-25 | `downloads/MD/EOA_Report_2024-25.pdf` |
| | EOA 2023-24 | `downloads/MD/EOA_Report_2023-24.pdf` |
| | EOA 2022-23 | `downloads/MD/EOA_Report_2022-23.pdf` |
| | LOA 2021-22 | `downloads/MD/LOA_Report_2021-22.pdf` |
| AICTE Mandatory Disclosure | Download | `downloads/MD/AICTE MandatoryDisclosure 24-25.pdf` |
| Annual Reports | Annual Report | `downloads/MD/Annual Report 2023-2024.pdf` |
| Balance Sheet | 2023-24 | `downloads/MD/2023-2024.pdf` |
| | 2022-23 | `downloads/MD/2022-2023.pdf` |
| OU Disclosures | OU Affiliation 2024-25 | `downloads/MD/OU Affiliation 2024-25.pdf` |
| | OU Affiliation 2023-24 | `downloads/MD/OU Affiliation 2023-24.pdf` |
| | OU Affiliation 2022-23 | `downloads/MD/OU Affiliation 2022-23.pdf` |
| | OU Affiliation 2021-22 | `downloads/MD/OU Affiliation 2021-22.pdf` |

The page contains no other content — it's purely this document index.

---

## 5. Admissions

### 5.1 Courses Offered (`Programmes.php`)
Intro: "All the below listed courses are approved by the Osmania University, Government of Telangana, All India Council Of Technical Education (AICTE) New Delhi." Table lists only 2 programmes:
| Programme | Intake |
|---|---|
| B.E. Computer Science and Engineering | 360 |
| B.E. CSE(AI & ML) | 120 |
(IT/CS/H&S are not listed here even though those departments exist elsewhere on the site.)

### 5.2 Admission Procedure (`admission_procedure.php`)
**First year:** pass Intermediate (PCM) + qualify EAPCET; 70% seats by EAPCET merit, 30% Management/NRI quota. **Second year (Lateral):** Diploma/Polytechnic pass + qualify E-CET. Intake table again lists only CSE (360, 4yrs) and CSE(AI&ML) (120, 4yrs). *(Note: the browser tab `<title>` on this page literally reads "Admission Procedure - Gokaraju RangaRaju College of Pharmacy" — confirmed live on the site itself, a leftover template artifact from a sister institution; the visible body content is correctly GLEC's own.)*

### 5.3 Course Fees (`FEE_Structure.php`)
Five cohort tables, one per admission year 2022-23 through 2026-27. Every cohort shows an identical pattern across all 4 years of study: **Tuition Fee ₹70,000/year flat**, **Special Fee ₹5,500 in Year 1, ₹2,500 in Years 2–4**. (This flat uniformity across 5 different admission-year cohorts was returned consistently by two independent fetches — reproduced as found, though a direct visual spot-check is still worth doing given how unusual flat fees across years are.)

### 5.4 EAPCET Ranks (`EAPCET_Ranks.php`)
Subtitle: "EAPCET : 2025 First & Last Ranks - Dept. wise" (i.e., the live site is already on the 2025 admission cycle).

**CSE:**
| Gender | OC | OC-EWS | BC-A | BC-B | BC-C | BC-D | BC-E | SC | ST |
|---|---|---|---|---|---|---|---|---|---|
| Boys | 7976–16795 | 16612–20871 | 15971–41160 | 22879–28608 | 49426–NA | 20496–28912 | 20466–52394 | 40978–109319 | 87559–126453 |
| Girls | 11332–18112 | 17293–22878 | 24633–39902 | 14949–28011 | 30051–NA | 17939–36683 | 36640–70967 | 48580–149866 | 80429–121561 |

**CSE(AI&ML):**
| Gender | OC | OC-EWS | BC-A | BC-B | BC-C | BC-D | BC-E | SC | ST |
|---|---|---|---|---|---|---|---|---|---|
| Boys | 14434–21143 | NA | 32450–36071 | 16835–26354 | NA | 10851–28355 | 22200–51121 | 35953–94177 | 85389–106863 |
| Girls | 11031–27446 | NA | 37733–98661 | 19071–27015 | NA | 23657–25625 | 44530–46510 | 46442–111154 | 83460–128077 |
(Each cell is "first rank–last rank" for that category.)

### 5.5 Fee Refund Policy (`Fee-Refund-Policy.php`)
Four verbatim cases: **Technical issue** (payment debited but not reflected — manual ERP entry, 7-10 working days), **Multiple Payments** (duplicate payment refunded in 7-10 working days, or adjustable against next month's fee), **Caution Deposit** (refunded after completing the academic year/course), **Other Payments** (parents contact college directly; college decision is final).

---

## 6. Academics

### 6.1 Academic Leadership (`Academic-Leadership.php`)
"Powers and Functions" (5 verbatim bullets covering academic supervision, new-programme recommendations, scholarships/prizes, advising the Governing Body, and other assigned functions).

**Members (7, AY 2025-26):** Dr A Sai Hanuman (Chairman/Principal) · Dr Padmalaya Nayak (HOD CSE) · Dr J Kishore Babu (HOD H&S) · Dr K Deepthi Varma (Incharge Exam Branch) · Mr P Gopi Krishna (Controller of Examinations) · Mr K Srinivasa Rao (Incharge Infrastructure) · Mrs B Aruna (Incharge Training & Placement).

### 6.2 Academic Collaborations (`Academic-Collaborations.php`)
Definition of an MOU, then: "Gokaraju Lailavathi Engineering College (GLEC) maintains academic partnerships with" **Infosys, SR University, Suntek Corp Solutions PVT.Ltd, Human Capital for Third Sector.**

### 6.3 IQAC (`iqac.php`) — browser-verified
Context paragraph on IQAC's role/scope. "The following members have been nominated as the IQAC Members for the Academic Year 2025-26 with immediate effect."

| # | Name | Position (Current) | Position (Academic Council) |
|---|---|---|---|
| — Chairperson | | | |
| 1 | Dr. A. Sai Hanuman | Principal | Chairman |
| — Management Members | | | |
| 2 | Dr. K V S Raju | Registrar GLEC | Member |
| — Faculty Members | | | |
| 3 | Dr. Padmalaya Nayak | Professor & Head of CSE & CSE(AI&ML) | Member |
| 4 | Dr. J. Kishore Babu | Asst. Prof., Head of H&S | Member |
| 5 | Dr. A Usha Sree | Asst. Prof., CSE Dept. | Member |
| 6 | Mr. P. Gopi Krishna | Asst. Prof., Maths Dept. | Member |
| **7** | Dr Archana Mullapudi | Asst. Prof., CSE(AI&ML) Dept | Member |
| **7** | Dr Joshna | Asst. Prof., Chemistry Dept | Member |
| — Students Nominee | | | |
| 8 | Manaswini Lanka | IV-Year Student | Member |
| 9 | Tavvala Lakshya | III-Year Student | Member |
| 10 | Basani Arthi Reddy | Alumni Nominee | Member |
| — Industrialist Nominee | | | |
| 11 | Mr. CSN Prasad | TCS Corporation PVT Limited | Member |
| — Academic Peer Nominee | | | |
| 12 | Dr Shesham Anand | Professor, CSE, MVSR Engineering College | Member |
| — Coordinator IQAC | | | |
| 13 | Mr K. Srinivasa Rao | Asst. Prof., CSE(AI&ML) Dept | Member |

*(Rows 7/7 duplicate numbering is real and confirmed live on the site — not an extraction artifact.)*

Objectives (6), Functions (13), Strategies (10), and Benefits (6) — all verbatim bullet lists on the page (full text captured in the raw crawl file, condensed here for length; see the live page for exact wording of each).

### 6.4 Library (`Library.php`)
> "The GLEC Library stands as a cornerstone of academic enrichment, fostering a culture of curiosity and continuous learning."

Provides "books, magazines, encyclopedias, and journals" plus co-curricular/competitive-exam materials.

| Particulars | Available | Required (AICTE benchmark) |
|---|---|---|
| Volumes | 5,776 | 5,000 |
| Titles | 1,357 | 300 |
| Journals | 48 | 12 |
| Library Management System | 1 | 1 |
| Reading Room Seating Capacity | 150 | 150 |
| MultiMedia PC | 10 | 10 |

### 6.5 Rules & Regulations (`Rules_and_Regulations.php`)
Body text: "As per Osmania University guidelines, the following are the Rules and Regulations prescribed for the Gokaraju Lailavathi Engineering College. In this regard, Osmania University is the competent authority to amend the rules from time to time." Single document link: `downloads/BE_Rules_Regulations_2020.pdf` — no other inline content on the page.

### 6.6 Academic Calendar (`Academic_Calendar.php`) — browser-verified
Two PDF links, both labeled "Academic Calendar": `downloads/Academic-Calendar2.pdf` and `downloads/Acadamic Calender.pdf` (the second filename has genuine typos — "Acadamic"/"Calender" — and a literal space, confirmed live). Nearly every other page's footer/related-links elsewhere on the site links only to the `Acadamic Calender.pdf` file, suggesting it — not `Academic-Calendar2.pdf` — is the one actually treated as canonical sitewide.

---

## 7. Departments

Common structure per department: About Department / HOD / Faculty / Syllabus / Events (/ Publications & Projects for CSE and IT only).

### 7.1 CSE — Computer Science and Engineering
- **About (`CSE.php`):** Intake 120 *(text on this page itself says 120 — inconsistent with the 360 stated everywhere else on the site, including this same department's own admission/programme pages; a stray copy-paste on the source site)*. Vision: "Producing quality graduates who are trained in the latest software technologies and related skill sets and tools, so as to make India a world leader in software products and services." Mission (6 bullets) and PEOs (4 bullets) present.
- **HOD (`CSE_HOD.php`):** **Dr. Padmalaya Nayak**, Professor & HOD, CSE/IT. Ph.D. NIT Tiruchirappalli (2010); M.Tech CSE Univ. of Madras (2002); 23 yrs experience in Ad hoc/Sensor Networks. 80+ publications, 7 book chapters, 1 Indian + 1 Australian patent, editor of 3 Taylor & Francis books, Young Women Scientist Award (DRDO), 100 Best Professor Award (World Education Congress), UILA highly-cited-paper award, Women Excellence Award (ILDC), Best Researcher Award (5 consecutive years, GRIET), h-index 17 / i10-index 23 / 1,580 citations, Senior Member IEEE/IETE/CSI/IEANG, 2 Ph.D. scholars completed + 2 pursuing.
- **Faculty (`faculty.php?department=CSE`):** 34 rows (name, qualification, designation, Faculty ID, DoJ, email, nature of association) — full roster captured in the raw crawl file. Faculty ID **7079 is duplicated** across two different people (Mrs. Ravula Savitha and Mr. Chandra Mohan T) — a real data issue on the live site.
- **Syllabus (`CSE_syllabus.php`):** Two batch groupings — "2024 Admitted Batch (Y2025)": Sem 1, Sem 2, Sem 3&4 combined PDFs; "2020-23 Admitted Batch (Y2020)": Sem 3&4, Sem 5&6, Sem 7&8 combined PDFs.
- **Events (`CSE_Events.php`):** empty — no entries.
- **Publications & Projects (`CSE_Publications_Projects.php`):** empty template — column headers only (Publications, Consultancy Projects, Patents sections), zero data rows.

### 7.2 CSE (AI & ML)
- **About (`AI_ML.php`):** "GLEC consistently leads in introducing the latest and trending programs, and in the academic year 2024, it launched Artificial Intelligence and Machine Learning (AIML) program with an intake of 120 students." *(Elsewhere the site/new-site both give 2022 as the founding year — a genuine internal conflict on the old site.)* Vision, Mission (4 bullets), PEOs (6 bullets) present and AI/ML-specific.
- **HOD (`AI_ML_HOD.php`):** Same person/bio as CSE HOD (Dr. Padmalaya Nayak), reused verbatim with two additions: a "Research Interests" line (Wireless Sensor Networks, IoT Networks, Network Security, AI/ML, Deep Learning) and a note about prior professorship at GRIET since 2009.
- **Faculty (`faculty.php?department=AIML`):** 7 rows. Row 7 (Shaik Naseer Baba) email has a live typo: `naseerbaba7866@gmai.com` (missing the "l" in gmail).
- **Syllabus (`AI_ML_syllabus.php`):** Only Sem 1&2 and Sem 3&4 combined PDFs exist (consistent with a newer programme).
- **Events (`AI_ML_Events.php`):** empty — no entries.
- No Publications & Projects sub-link exists for this department.

### 7.3 H&S — Humanities and Sciences
- **About (`hs.php`):** "Department of Humanities and Sciences." Provides foundational courses (Engineering Graphics, English, Maths, Physics, Chemistry, Environmental Studies, Programming) via labs (Scientific Programming Lab, English Lab, Engineering Physics Lab, Chemistry Labs, Engineering Workshop, Basic Electrical Engineering Lab). Mentions an "Advanced Academic Center (AAC)" for talented students. Vision/Mission present.
- **HOD (`HS_HOD.php`):** **Dr. J. Kishore Babu**, Ph.D. Physics, Acharya Nagarjuna University. 20 years' teaching; joined GRIET in 2012; LSI & ISTE member. Bio is short/generic relative to other HOD pages on this site.
- **Faculty (`faculty.php?department=HS`):** 24 rows. Row 1 (Dr KSN Raju, "Registarar" [sic], email on `griet.ac.in` domain) looks like a misplaced Registrar/AO row rather than genuine H&S teaching faculty.
- **Syllabus (`hs_syllabus.php`) — CONFIRMED SITE BUG:** this URL renders the *CSE* syllabus heading ("B.E. CSE / Syllabus") and CSE/CSE(AI&ML) PDF links, not any H&S-specific content. No real H&S syllabus exists anywhere on the site.
- **Events (`hs_Events.php`):** two entries, both dated 03/04/2025, both literally titled **"Test evenet"** (typo, sic) — confirmed placeholder data, one with a "Photos" link to `media/...healthseminar(05-03-2025)...jpg` suggesting the underlying real event was a health seminar that was never properly titled.
- The site's footer "Faculty" download link for H&S is misnamed `downloads/CSE-H_S-Faculty.pdf`, further evidence of H&S/CSE asset cross-wiring in the template.

### 7.4 IT — Information Technology
- **About (`it.php`) — CONFIRMED SITE BUG:** page heading reads **"Department of Humanities and Information Technology"** (a copy/paste leftover merging the H&S heading template with IT). Body text below the heading is correctly IT-specific: "The Department of Information Technology, established in 2021... with an intake of 120." Vision, Mission (6 bullets), PEOs (4 bullets) all IT-appropriate.
- **HOD (`it_HOD.php`):** Same Dr. Padmalaya Nayak bio as CSE, with designation explicitly spanning "CSE/IT."
- **Faculty (`faculty.php?department=IT`):** 6 rows, all Assistant Professors.
- **Syllabus (`it_syllabus.php`):** "2020-2023 Admitted Batches" — 4 combined-semester PDFs (1&2, 3&4, 5&6, 7&8).
- **Events (`it_Events.php`):** empty.
- **Publications & Projects (`it_Publications_Projects.php`):** empty/no content returned.

### 7.5 CS — Computer Science
- **About (`CS.php`):** "Department of Computer Science was established in 2023 with an intake capacity of 60 students." Vision: "Equip technocrats in computer science with the skills and knowledge needed to thrive in the data-driven world." Mission described as prose covering AI/cybersecurity/data science/cloud/blockchain/academia-industry bridging. PEOs (4 bullets).
- **HOD (`CS_HOD.php`):** Same Dr. Padmalaya Nayak bio again (labeled "CSE/IT" even on the CS page).
- **Faculty (`faculty.php?department=CS`):** page literally displays **"No Data Found"** — confirmed, matches the department's own template state, not a broken fetch.
- **Syllabus (`CS_Syllabus.php`):** only 2 PDFs — "BE (CS) III-Sem Syllabus" and "BE (CS) IV-Sem Syllabus" (2024_25), consistent with the department being 2 years old.
- **Events (`CS_Events.php`):** empty.
- No Publications & Projects sub-link exists for this department.

---

## 8. Research

### 8.1 Publications (`Publications.php`)
College-wide list (not filtered by department), 37 entries across 4 years:
- **2024-25 (14):** incl. Padmalaya Nayak — "Diabetes Monitoring and Prediction Using Computational Intelligence Techniques" (SN Computer Science/Springer); Menda et al. — "Quality by Design Tool Evaluated Green Stability-Indicating UPLC Content Determination Method" (Microchemical Journal/Elsevier, Vol 197, pp.109835-109844); Sanduru et al. — "Comparison of Stability and Thermo physical Properties of CNT-GNP Hybrid Nanofluids" (Cogent Engineering/Taylor & Francis); and 11 more — full list with authors/venues/publishers/years/pages in the raw crawl file.
- **2023-24 (11):** incl. Nayak/Gupta/Vaheed — "Predicting Students Academic Performance by Mining Educational Data Through Machine Learning" (Education and Information Technologies/Springer, Vol 28, pp.14611-14637); Menda et al. — UPLC method for HIV/AIDS drugs (Bio-Medical Chromatography/Wiley, Vol 37 Issue 9); 9 more.
- **2022-23 (8):** incl. one entry authored simply as **"CSE"** (department-level credit, not a named person) — "Students Academic Performance Prediction Using Ensemble Methods Through Educational Data Mining" (SCI Proceedings/Springer, Vol 1, pp.215-224); 7 more.
- **2021-22 (4):** incl. another "CSE"-authored entry — "Analysis of COVID-19 Data Through Machine Learning Techniques" (ICMIB/Springer, Vol 431, pp.67-80); 3 more.

Full author/title/venue/publisher/year/page detail for all 37 entries is preserved verbatim in the raw crawl file (`audit_bucket_G_cs_research.md` in the extraction working files) and can be pulled into a follow-up document on request.

### 8.2 Facilities (`Facilities.php`) — browser-verified, complete
Only one lab exists: the **Idea Lab**, with exactly two pieces of equipment:
- **3D Printing** — "accelerates research by enabling rapid prototyping, iterative testing, and cost-effective experimentation... benefiting fields like engineering and biomedicine."
- **Magnetic Stirrers with Hot Plates** — "ensure precise mixing and controlled heating, enhancing experimental accuracy and efficiency... Their non-contact operation minimizes contamination risks."

No other labs/equipment exist on this page (confirmed by direct browser render, not just the WebFetch pass).

### 8.3 Research Awards (`Research-Awards.php`)
Body text on GRES's commitment to research excellence and encouraging Scopus/Web of Science/SCI publishing; "GLEC faculty members consistently receive Research Excellence Awards each year, recognizing their outstanding contributions with cash incentives, certificates, and mementos." Recipient-level detail (names, years, amounts) exists only inside 3 images (`Research Awards(2025).png`, `research-awards2.jpg`, `research-awards.jpg`) and is not text-extractable — would need a manual visual read if that detail matters.

### 8.4 Ph.D. Awarded (`Ph-D-Awarded.php`) — browser-verified, complete, verbatim
No table — six standalone congratulatory paragraphs, one per recipient, no "Guide/advisor" field exists anywhere on the page:
1. **Dr A Usha Sree** (ECE), 4 May 2024 — "Design fabrication and testing of microwave frequency antennas for subsurface imaging applications"
2. **Dr Harika Vanam** (CSE), 18 Aug 2024 — "An enhanced sentiment analysis model using auto encoder bi-directional RNN"
3. **Dr S Bhanu Teja** (MECH), 26 Feb 2025 — "Prediction of thermophysical properties of ethylene glycol water based solar thermic fluids dispersed with carbon nanotubes and graphene nano-platelets"
4. **Dr Sailaja Eswara** (H&S/English), 6 May 2025 — "A Study of Diasporic Themes in Select Novels of Anita Rau Badami and Uma Parameswaran"
5. **Dr M Jyothsna** (H&S/Chemistry), 16 May 2025 — "An application of Quality by Design(QbD) approach in UPLC analytical Method development and validation for selected dosage forms and their stability"
6. **Dr Archana Mullapudi** (CSE), 13 Aug 2025 — "Machine Learning Modeling For Agricultural Drought Assessment in Ahmednagar Region Using Multisensor Remote Sensing Data"

(This list spans ECE/CSE/MECH/H&S — it is college-wide, not limited to the CS or CSE departments specifically.)

---

## 9. Placements (`placements.php`)

Philosophy (verbatim excerpts): "GLEC places a strong emphasis on experiential learning within its training process" with "comprehensive personal and career-oriented support to students"; "overall personality development is a critical aspect of every course of study"; "extensive training program hours during the vacation period following the pre-final year exams"; placement training starts from first year; students trained for **Python NPTEL Certification** in first year.

**Placement Cell contacts:**
| Role | Name | Phone |
|---|---|---|
| Dean – Training & Placements | Dr. K. Butchi Raju | 7702964747 |
| Manager – Corporate Relations | Dr. Arvind Kumar | 9849027132 |
| Officer – Corporate Relations | Mrs. A. Bhavya Sri | 9493805895 |

Email: placements@glwec.in

**No numeric stats exist on this page at all** — no offers-made count, no highest/average package figure, no year-wise placement table.

**Recruiter list (text only, no logos):** Microsoft, Oracle, Pega Systems, S&P Capital IQ, Deloitte, Factset, NetCracker, ADP, Infosys, Cognizant, Accenture, Wipro, Mahindra Rise, Tata Advanced Systems Limited (TASL), L&T Constructions, CapGemini.

---

## 10. Examinations

### 10.1 Examination Committee (`examination-committee.php`)
Functions (8 bullets): administering sessional exams per OU almanac, evaluating scripts, recording marks in the OU portal/ledger, SMS notifications to parents on absentees/marks, mailing end-semester result memos, administering end-semester practicals, result analysis, compiling inspection documents for OU/AICTE/Governing Body.

**Core Committee (6, with Staff ID and DOJ):**
| Name | Staff ID | Designation | DOJ | Mobile |
|---|---|---|---|---|
| Dr. A Sai Hanuman | 1001 | Chief Superintendent | 08-04-2021 | 98490 78370 |
| P Gopi Krishna | 1006 | Controller Of Examinations | 14-09-2021 | 9703643628 |
| Dr. K Deepthi Varma | 1009 | Incharge Examinations | 01-10-2021 | 99494 30761 |
| N. Madhusudhan Rao | 1038 | Coordinator | 13-09-2021 | 90105 27205 |
| PM Madhuri | 1017 | Coordinator | 01-11-2021 | 83741 24317 |
| M Sneha Priya | 1016 | Coordinator | 25-10-2021 | 7659 991 957 |

General contact: examglec@gmail.com

### 10.2 Notifications (`Notifications.php`) — 17 entries, all captured
1. Examination notification for 2025-2026
2. B.E. VII Sem – CIE II Time Table, Dec 2025
3. B.E. V Sem – CIE II Time Table, Dec 2025
4. B.E. III Sem – CIE II Time Table, Dec 2025
5. B.E. VII Sem – CIE I Time Table, Oct 2025 *(underlying filename is oddly labeled "I Sem" — a live mislabeling, reproduced as found)*
6. B.E. V Sem – CIE I Time Table, Oct 2025
7. B.E. I Sem – CIE I Time Table, Sep 2025
8. B.E. III Sem – CIE I Time Table, Sep 2025
9. B.E. VI Sem – CIE I Time Table, June 2025
10. B.E. VIII Sem – CIE II Time Table, June 2025
11. FEE Notification for July 2025 Examinations
12. B.E. VIII Sem, June 25 Exam Notification
13. B.E. VIII Sem – CIE I Time Table, April 2025
14. B.E. IV Sem – CIE I Time Table, April 2025
15. Revaluation Press Note, 15-4-2025
16. B.E. II Sem – CIE I Time Table, April 2025
17. B.E. Osmania University Feb/Mar 25 Exams Time Table

(Exact PDF/media URLs for each are preserved in the raw crawl file.)

### 10.3 Results (`results.php`) — 6 external OU links
General OU results page, plus 5 dated portal links: Revaluation results Feb/Mar 2025 (29-05-2025); OU results Feb/Mar 2025 (11-04-2025); B.E. (CBCS) (RV) Aug/Sept-2024 Results (31-12-2024); B.E. (Non-CBCS) (RV) Aug/Sept-2024 Results (31-12-2024); B.E. I–VI Sem Feb-2023 (RV) and VIII Sem June-2023 (RV) Results (28-08-2023).

### 10.4 Exam Branch Online Services (`exam-branch-downloads.php`)
Single functional link — the **Osmania University ERP self-service portal**: `https://online.osmaniaerp.com/AFC/info/index`, used for name corrections, transcripts, and duplicate mark memos (login required). No separate downloadable-file list exists on this page.

---

## 11. Contact (`contactus.php`)

Registrar contact: Dr K V S Raju, Ph: 9339818181. Address: "Gokaraju Lailavathi Engineering College, GRIET Campus, Nizampet Road, Bachupally, Kukatpally, Hyderabad- 500090, Telangana State, India." Main email: admnglwec@gmail.com.

**Department-wise contacts:** Administration — Dr K V S Raju · Scholarships — Mrs.IVSS Nagamani · Grievance Redressal — opens a modal form (see below) · Bonafides/Bus Passes — Mrs.IVSS Nagamani · Transcripts & Certificates — Examination Branch. (No individual phone/email given per department beyond the Registrar's.)

**External feedback links:** AICTE Faculty Feedback (`https://www.aicte-india.org/feedback/faculty.php`), AICTE Student Feedback (`https://www.aicte-india.org/feedback/students.php`).

**Website queries contact:** K. Srinivasa Rao, Asst. Professor, Dept. of IT.

**24×7 Women Helpline: +91 7675802603.**

**Quick Enquiry form fields:** First Name, Last Name, Email Address, Phone Number, Location, Message, "Submit Request" button.

**Grievance Redressal modal form fields:** Your Name, Email address, "Choose" dropdown (Student/Faculty/Parents), Message, "Submit" button.

**Google Maps embed:** still geocoded to the place name "GOKARAJU LAILAVATHI WOMENS ENGINEERING COLLEGE" (legacy branding baked into the map query itself).

---

## 12. Alumni, Events, Infrastructure, Student Life

### 12.1 Alumni Association (`Alumni-Association.php`)
Mission: "Gokaraju Lailavathi Engineering College (GLEC) Alumni Association is formed with a view to create a platform that helps improve student interaction and relations beyond the completion of their course at GLEC."

**Committee (8):** Dr. A. Ushasree (Incharge) · Mrs. P. M. Maduri (Coordinator) · Mr. R. Sai Nikhil (Coordinator) · Dr. Padmalaya Nayak (HOD CSE, Member) · Dr. Kishore Babu (HOD H&S, Member) · Ms. B. Arthi Reddy (CSE student, 21-25 batch) · Ms. B. Sripada (IT student, 21-25 batch) · Ms. P. Sriya (IT student, 21-25 batch).

### 12.2 Events (`events.php`)
Only 2 entries exist, both dated 03/04/2025, both titled **"Test evenet"** (typo), both tagged Department "B.E. (H&S)" — confirmed placeholder/duplicate data, not a real event archive.

### 12.3 Infrastructure (`Infrastructure.php`)
Campus stats: **3.0 Acres**, **1,10,000 sq ft** building permission, **~55,000 sq ft** first-year built area. Page is primarily an image-gallery with category tabs (Campus, Computer Lab, BEE Lab, Physics Lab, Chemistry Lab, Workshop, Library, "Show all") and almost no descriptive prose — image alt-text is mostly the generic non-descriptive word "Lights" repeated across nearly every photo. Brief facility mentions: a "Spacious canteen," and sports (Volleyball, Basketball, Table Tennis, Caroms, Chess, Gym).

### 12.4 Health Facilities (`Health-Facilities.php`)
Five-item list: on-campus health centers with doctors/nurses; hospital tie-ups for emergency care; on-campus pharmacies; counseling services for mental health; regular health camps/check-ups.

### 12.5 Sports Facilities (`Sports-Facilities.php`)
Outdoor: Cricket, Basketball, Volleyball, Kabbadi, Athletics, Throw Ball, Tennikoit. Indoor: Table Tennis, Carroms, Badminton, Chess.

**Safety/medical details (verbatim):** "A full-time trained staff nurse has been appointed who will stay upto 6.30 p.m. and attend to the first-aid in case the students injured during the conduct of sports & games." "An Ambulance with all facilities is available in the college for emergency services round the clock." "Five beds are provided in the health centre for any medical emergency. General medicines are made available in the centre." "First-aid boxes are kept in the Sports & Games Department for medical emergency."

Transport provided for off-hours sports participation; students compete intra-college, inter-college, and in OU/JNTU-organized events.

### 12.6 Physically Challenged (`Physically-Challenged.php`)
Compliant with the Persons with Disabilities Act 1995: ramps/hand rails, lifts, wheelchair-accessible pathways, accessible toilets. Quote: "GLEC has architectural barrier free environment that disabled persons find easy for their day-to-day functioning." Provides mobility devices (wheelchairs, walkers). **Exam accommodation (verbatim):** "GLEC provides scribes for differently-abled students if required during examinations" per OU/AICTE regulations.

---

## 13. Findings log — duplicates, broken links, bugs, and empty pages (separate from content, per request)

**Confirmed empty/placeholder pages (real, not fetch errors):**
- `CSE_Events.php`, `AI_ML_Events.php`, `it_Events.php`, `CS_Events.php` — no events.
- `CSE_Publications_Projects.php` — column headers only, zero data rows.
- `it_Publications_Projects.php` — no content at all.
- `faculty.php?department=CS` — literally displays "No Data Found."
- `hs_Events.php` and `events.php` (sitewide Events page) — both event listings are 2 duplicate placeholder entries literally titled **"Test evenet"** (typo in source), not real content.

**Confirmed template/content bugs on the live site (not extraction artifacts):**
- `hs_syllabus.php` renders CSE's syllabus heading/content instead of H&S's — no real H&S syllabus exists anywhere.
- `it.php`'s page heading reads "Department of Humanities **and Information Technology**" — a copy/paste leftover mixing the H&S and IT templates.
- `admission_procedure.php`'s browser tab `<title>` reads "Admission Procedure - **Gokaraju RangaRaju College of Pharmacy**" — a stray title from a sister institution's template (body content is correctly GLEC's own).
- `iqac.php`'s committee table has two rows both numbered "7" (Dr Archana Mullapudi and Dr Joshna) — a live numbering bug.
- `Academic_Calendar.php` links to two differently-named PDFs ("Academic-Calendar2.pdf" and "Acadamic Calender.pdf" — the latter has genuine typos and a literal space in the filename); most other pages sitewide only ever link to the second one.
- Faculty ID **7079** is assigned to two different CSE faculty members in the CSE roster table.
- AI&ML faculty roster has a live email typo: `naseerbaba7866@gmai.com` (missing the "l").
- H&S faculty roster's row 1 ("Dr KSN Raju," designation "Registarar" [sic], `griet.ac.in` email) looks like a misplaced Registrar/AO record rather than genuine H&S teaching faculty.
- Anti-Ragging Committee's student table: two students (Pulepelly Sanjana, Bollam Jyothika) share the identical ID "245622737007."
- CSE, AI&ML, IT, and CS HOD pages all reuse the exact same Dr. Padmalaya Nayak bio (she is the shared HOD across all four), and the H&S Faculty download link (`downloads/CSE-H_S-Faculty.pdf`) is misnamed to reference CSE.
- Sitewide social-media links (Instagram/Facebook/LinkedIn/YouTube) and the Google Maps embed on the Contact page both still reference the pre-2024 "GLWEC"/"Women's Engineering College" branding, inconsistent with the site's own stated co-ed rename.
- Homepage's "Why GLEC?" section still carries pre-co-ed framing about "addressing stereotypes in STEM fields" for women specifically.
- `CSE.php`'s own about-text states intake as "120" — every other reference sitewide (including this department's own admissions data) says 360.
- `AI_ML.php` says the programme "launched" in "academic year 2024," while the site's own "established" framing elsewhere implies 2022 — an internal date conflict.
- Finance Committee page/menu label is spelled "Commitee" (missing a "t") consistently across the site.

**Privacy-sensitive content found (reproduce with care if migrating):** Anti-Ragging Committee and Anti-Sexual Harassment Committee tables list home addresses and personal phone numbers for staff and, in the Anti-Ragging case, six named students with ID numbers and home addresses.

**Content only available as images (not text-extractable):** Research-Awards.php's recipient/year/amount detail exists solely inside 3 photos; Infrastructure.php is almost entirely a photo gallery with non-descriptive "Lights" alt-text throughout.

**No pages 404'd, redirected, or failed to load** across all 61 URLs crawled.

---

## 14. Extraction confidence notes

Most pages were fetched via an AI-summarizing tool rather than a raw HTML dump; every spot an agent flagged as possibly condensed or truncated was independently re-verified with a direct (non-AI) browser text render. All re-checks confirmed the original extraction was either already complete (the page itself is just short — e.g. `nipun.php`, `Facilities.php`, `Anti_Sexual_Harassment_Cell.php`'s functions list, `Ph-D-Awarded.php`) or surfaced a genuine site bug rather than a missing extraction (the IQAC duplicate row, the two Academic Calendar filenames, the stray Pharmacy-college page title). Two areas were not independently re-verified and are worth a second look before being treated as load-bearing: the Research Publications list's ISSN/ISBN-looking values (some look like article-number fragments, not real ISSNs), and the Research Awards page's image-only recipient data (would need a visual read, not a text fetch).
