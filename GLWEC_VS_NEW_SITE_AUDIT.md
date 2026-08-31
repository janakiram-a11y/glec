# GLWEC (Old Live Site) vs New GLEC Site — Full Content Audit

**Old site:** https://www.glwec.in/ (live-crawled 2026‑08‑24, ~50 pages)
**New site:** this repository (`glec-site-v1`), all of `src/theme.js` + every page/component
**Method:** six parallel crawlers fetched every old-site page reachable from the nav/footer (admin, admissions, academics, all 5 department sub-page sets, research, examinations, placements, alumni, events, infrastructure, contact, mandatory disclosures); findings below are cross-checked line-by-line against the new site's actual data and rendering, not assumed.

## Legend

| # | Category | Meaning |
|---|---|---|
| 1 | **Missing – Must Add** | Real content exists on the old site and has no equivalent on the new site |
| 2 | **Different – Needs Correction** | Content exists on both but numbers/names/facts disagree, or a link is broken |
| 3 | **Already Present – No Change** | Verified matching (or faithfully adapted) on both sites |
| 4 | **Outdated – Do Not Migrate** | Old-site content that is stale, buggy, or reflects the pre-co-ed GLWEC era |
| 5 | **New Website Content – Keep** | New site has content the old site never had — generally good, but flagged where it's an *authored/unverifiable* factual claim |

> ⚠️ **Cross-cutting caution, flagged once here and not repeated line-by-line:** several places on the new site state specific factual claims (event attendance figures, prize amounts, lab equipment lists, department "recent news") that do **not** trace back to anything on the old site — the old site's equivalent pages are either empty or don't exist. These aren't necessarily wrong, but they were authored for the new site rather than sourced, so treat them as **Category 5 needing sign-off**, not verified fact. Called out again where most material.

---

## 0. Top 10 findings if you only read one section

1. **Mandatory Disclosures is the single biggest gap.** Old site publishes 14 real regulatory PDFs (4 years of EOA reports, an LOA report, AICTE Mandatory Disclosure, Annual Report, 2 years of Balance Sheets, 4 years of OU Affiliation letters). New site's Mandatory Disclosures page has none of these — it links instead to guessed URLs (`AICTE_Approval_2024-25.pdf` etc.) that don't match any real file on the old site and are almost certainly 404s. **Category 1 + 2, highest priority.**
2. **IQAC committee roster differs from the official one**, dropping the Student, Alumni, Industrialist, and Academic-Peer nominees entirely and substituting two faculty members not on the old roster. **Category 2, compliance-relevant.**
3. **IT and CS departments have no HOD section at all** on the new site (the data field is simply missing), even though the old site names Dr. Padmalaya Nayak as HOD for both, same as CSE. **Category 1.**
4. **All 6 Ph.D. thesis titles have been reworded**, and one (Dr. Archana Mullapudi's) now describes a different research topic entirely (crop-yield prediction vs. the old site's drought assessment). **Category 2, needs verification against official records.**
5. **EAPCET rank data is one year stale** — new site shows the 2024 cycle; the old site has already published 2025 cycle numbers (which are different).
6. **No syllabus content anywhere on the new site** — old site has real per-semester syllabus PDFs for every department; new site has nothing.
7. **Ombudsperson and RTI Act pages/sections don't exist on the new site**, despite being footer-linked (`/administration#ombudsperson`, `/administration#rti` point at anchors that aren't in `AdministrationPage.jsx`'s 13 sections) and containing AICTE/UGC-mandated PIO/Ombudsperson contact details.
8. **The "253 offers / 6+ LPA" headline placement stat appears nowhere on the old site** — the old placements page has zero numeric statistics. This number is repeated everywhere on the new site (hero, stats bar, homepage, placements page, department pages, FAQs) with no traceable source in this crawl. **Recommend verifying against actual placement records before further use.**
9. **Recruiter list has been altered**: new site drops "Mahindra Rise" and "Tata Advanced Systems Limited (TASL)" (both on the old site) and adds "TCS" and "Tech Mahindra" instead — different companies, not just renames.
10. **Old-site content that should explicitly NOT be migrated**: the "Women's Engineering College" branding baked into the old site's domain/copyright/social handles and its Google Maps place-name, and homepage language about "addressing stereotypes in STEM fields" — all leftover from the pre-2024 GLWEC (women's-only) era. The new site has already correctly avoided this.

---

## 1. Sitewide / Global elements

| Item | Old | New | Category |
|---|---|---|---|
| Main nav labels & structure (Home, About, Administration, Admissions, Academics, Departments, Research, Placements, Examinations, Contact) | Present | Present, identical | 3 |
| Administration submenu (13 items) | Present | Present, identical labels/order | 3 |
| Departments submenu (5 depts) | Present, each with About/HOD/Faculty/Syllabus/Events(/Publications) sub-links | Consolidated into one page per department (see §7) | 2 (structure differs, most content maps) |
| Footer "Important Links" (9 items: About College, Chairman, VP, Registrar, Principal, Placements, Infrastructure, SKILL Series, Contact) | Present, Chairman/VP go to standalone pages | Present, identical labels but Chairman/VP go to `/about#chairman` / `/about#vice-president` anchors instead of dedicated pages | 2 (minor — no dedicated shareable URL for Chairman/VP anymore) |
| Footer "Administration" (13 items) | Present | Present, identical | 3 |
| Footer "Student Life" (Health, Sports, Placements, Physically Challenged, Ombudsperson, RTI Act) | Present, each a real standalone page | Labels present in `college.resources`, but **Ombudsperson and RTI Act anchors point to sections that don't exist in `AdministrationPage.jsx`** | **1 (high priority — see §14)** |
| Social links (Instagram/Facebook/LinkedIn/YouTube URLs) | Present | Identical URLs | 3 |
| Address, TG EAPCET code (GLWC) | Present | Present, identical | 3 |
| Site branding "GLWEC" / "Women's Engineering College" in domain, copyright, social handles, Google Maps place name | Present throughout old site | Correctly avoided — new site consistently says "GLEC" and its own Maps query already says "Engineering College" | **4 (do not migrate) — already handled correctly** |
| Homepage "Why GLEC" language about addressing STEM gender stereotypes | Present on old homepage | Not present | **4 (do not migrate)** — this is pre-co-ed framing and shouldn't return |

---

## 2. Homepage

| Item | Old | New | Category |
|---|---|---|---|
| Institution overview paragraph, Vision, Mission | Present, near-verbatim match | Present | 3 |
| NIPUN / DHI / SEEKH descriptions | Present | Present, matches | 3 |
| Programs listed on homepage | Only CSE (360) and CSE AI&ML (120) mentioned | All 5 programs (adds IT, CS, H&S) | **5 — new site is more accurate**; old homepage is itself incomplete (IT/CS/H&S exist as departments but aren't listed as offered programmes anywhere on the old homepage or old Admissions section) |
| News ticker items (classwork start, document submission, job openings, faculty recruitment, GLWC code) | Present | Present, matches closely | 3 |
| StatsBar / QuickLinksBar / NewsEvents ticker rendered on homepage | N/A (old site has no equivalent componentized homepage) | Rendered (confirmed in `GlecPage.jsx`) | 5 |

---

## 3. About Us

| Item | Old (`aboutus.php`) | New (`AboutPage.jsx`) | Category |
|---|---|---|---|
| Intro paragraph | Present, 1 paragraph | Present (`aboutP1`), close match | 3 |
| Vision | Present, verbatim | Matches exactly | 3 |
| Mission (4 items) | Present, verbatim | Matches exactly | 3 |
| Quality Policy | Present, verbatim | Matches exactly | 3 |
| Core Values (7 items) | Present, verbatim, same names/descriptions | Matches exactly | 3 |
| Chairman & VP biography text | Present on `Administration.php`/`Chairman.php`/`Vice_President.php` | Reproduced **verbatim** in `leadership[]` cards | 3 (accurately migrated) |
| "About Inspirer and Promoters" section | Not a distinct section on old site (facts scattered across Administration.php) | Present (`aboutFounders`) | 5 — consistent with old-site facts, but authored/synthesized, not copied |
| "The Sponsoring Society" paragraph | Not a distinct section on `aboutus.php` (GRES description is on `Sponsoring-Body.php`) | Present (`aboutSociety`) | 5 — consistent, but check phrasing against `Sponsoring-Body.php` original |
| "Strategies" list (6 items) | **Not found anywhere on old site** | Present (`strategies[]`) | **5 — fully authored, not sourced. Recommend sign-off from the institution before treating as official policy.** |
| 5-paragraph "About GLEC" detailed history | Not present as a discrete block on old site | Present (`aboutDetailedParagraphs`) | 5 — plausible synthesis of facts found elsewhere on old site, but not verbatim-sourced |

---

## 4. Administration (13 sections + Chairman/VP)

| Section | Finding | Category |
|---|---|---|
| **Management** | Chairman/VP bios match old exactly | 3 |
| **Sponsoring Body & MOAG** | 9 committee members match old exactly, address matches. **Objectives list is missing 1 of 6 old bullet items** ("operates under India's constitutional provisions") | 1 (minor) |
| **Governing Body** | All 10 members (name/role/category/email) match old exactly | 3 |
| **Registrar** | Bio, qualifications match old almost exactly; **old also states DOB (24 Sept 1956)**, dropped on new site | 1 (minor) |
| **Principal** | Matches old almost exactly (PhD year, patents, IEEE/CSI, PhD guide status). **Old also states "2 research projects, ~₹8.6 lakh funding"**, dropped on new site | 1 (minor) |
| **ID Plan** | 5-member core committee matches old exactly; PDF link field present in data (verify it renders) | 3 |
| **Anti-Ragging Committee** | 10 staff members match old exactly. **Missing: several of old's 9 listed measures** (Supreme-Court notices on noticeboards, anti-ragging posters, website scrolling bar, phone numbers displayed, anti-ragging oath for 2nd-years). **Missing entirely: the 6 named student committee members** from the old site | **1 — though for the students specifically, consider a privacy review (old site lists full home addresses) rather than reproducing that verbatim** |
| **Anti-Sexual Harassment Committee** | 5 members and 7 functions match old closely | 3 |
| **Grievance Redressal** | 11 members, 5-channel process (incl. the same Google Form) match old closely | 3 |
| **SEGD Cell** | 7 members match exactly; objectives match in substance | 3 |
| **Finance Committee** | All members/roles match old exactly (Chairman, Director, Registrar as Member-Secretary, 3 teacher reps, OU nominee) | 3 |
| **Equal Opportunity Cell** | 5 members match; objectives match in substance. **Activities list is genericized** — old site names specific real events (Self-Defence Training by N. Lakshmi Samrajyam; International Women's Day 8 Mar 2024 with chief guest Smt. Tangirala Vidya Rani; International Yoga Day sessions) that add credibility but aren't reflected on the new site | 2 (optional enhancement — reinstate the specific named events if still accurate) |
| **ICC** | 11 members (incl. 3 named students) match old exactly. **Missing: the separate "Functions of the Committee" list** (4 items — publicize contact details, run training, train ICC members, maintain complaint email/suggestion box) that exists on old site alongside Objectives | 1 |
| **IQAC** | ⚠️ **Roster mismatch.** Old (13 total): Chairperson, Management Member, 6 Faculty (incl. Dr. Usha Sree, Mr. Gopi Krishna, Dr. Joshna), 2 Student Nominees (Manaswini Lanka, Tavvala Lakshya), 1 Alumni Nominee (Basani Arthi Reddy), 1 Industrialist Nominee (Mr. CSN Prasad, TCS), 1 Academic Peer Nominee (Dr. Shesham Anand, MVSR Engineering College), 1 Coordinator (K. Srinivasa Rao). New site (8 total): swaps in Dr. K. Deepthi Varma and Dr. M. Rekharani (not on old roster) and **drops all 4 external/student/alumni/industry nominee categories** entirely. Also drops the old "Benefits" list (6 items). | **2 — compliance-relevant, verify actual current membership with the Principal's office** |
| **Mandatory Disclosures** | See §0 and §14 — **the largest single gap in this audit** | **1 + 2, highest priority** |
| **Chairman / Vice President standalone pages** | Old has dedicated `Chairman.php` / `Vice_President.php` URLs (footer-linked directly); new only has anchors on `/about` | 2 (minor, URL/shareability only — content itself matches, see §3) |

---

## 5. Admissions

Old site's Admissions section is thin — only 5 pages exist (Courses Offered, Admission Procedure, Course Fees, EAPCET Ranks, Fee Refund Policy). New site has 12 sections.

| Section | Finding | Category |
|---|---|---|
| **Programs Offered** | Old's "Courses Offered" page lists only 2 programmes (CSE, AI&ML) — doesn't mention IT/CS/H&S at all, even though those departments exist elsewhere on the old site. New site lists all 5. | **5 — new site is more complete/accurate than old** |
| **Fee Structure** | Old (live, visible) publishes 5 cohort tables, 2022-23 through **2026-27**, flat ₹70,000 tuition every year, special fee ₹5,500 (Yr1)/₹2,500 (Yr2-4) for all cohorts. New site has only 3 cohorts (2024-25, 2023-24, **2021-22 with ₹35,000 tuition**). The ₹35,000 figure only exists in a **commented-out/hidden** table in the old site's HTML source, not its live published table. **New site is missing the live 2025-26 and 2026-27 tables**, and its 2021-22 figures come from a non-published old-site source that should be verified, not assumed correct. | **1 (missing 2 recent cohorts) + 2 (unverified historical figure)** |
| **EAPCET Ranks** | ⚠️ New site shows **2024** cycle data; old site has already published **2025** cycle data (different rank numbers for both CSE and CSE AI&ML, across all categories/genders). | **2 — stale by one full cycle, high visibility to prospective students** |
| **Eligibility Criteria** | Not a distinct list on old site (only prose in Admission Procedure) | 5 — reasonable formalization, consistent with old prose |
| **Required Documents** | Not an explicit list on old site | 5 |
| **Scholarships** | **Not on old site at all** | 5 |
| **Hostel & Transport** | **Not found anywhere on old site** | 5 — verify these routes/hostel details are currently accurate before publishing |
| **Notifications** (admissions-specific) | Old has no separate admissions-notifications page (only the sitewide Examinations Notifications) | 5 |
| **Fee Refund Policy** | 4 cases match old almost verbatim | 3 |
| **FAQs** | Not on old site | 5 |
| **Admission Procedure** (EAPCET 70% / Management 30%, lateral entry via ECET) | Matches old closely | 3 |

---

## 6. Academics

| Section | Finding | Category |
|---|---|---|
| **Academic Leadership** | 7 members match old exactly; responsibilities list is a reasonable close paraphrase (with one added item) | 3 |
| **Academic Collaborations** | 4 organisations (Infosys, SR University, Suntek Corp, Human Capital for Third Sector) match old exactly | 3 |
| **IQAC** | See §4 — membership discrepancy | 2 |
| **Library** | Stats (Volumes 5,776 / Titles 1,357 / Journals 48 / Reading capacity 150 / Multimedia PCs 10 / LMS 1) match old exactly. **Old's table also shows the AICTE-required benchmark alongside each figure** (e.g. Required 5,000 volumes vs Available 5,776) — this compliance comparison is dropped on the new site. New site adds Rules (8 items) and hours/contact not present on old site at all. | 1 (missing benchmark columns) + 5 (new rules/hours content, verify accuracy) |
| **Rules & Regulations** | Old page has **no inline text at all** — content is entirely a single PDF (`BE_Rules_Regulations_2020.pdf`). New site's actual Rules content wasn't verified in this pass (data isn't in `theme.js`, likely hardcoded in `AcademicsPage.jsx`) — but the **PDF itself is not hosted/linked anywhere on the new site**. | **1 — the actual official Rules & Regulations document should be hosted/linked** |
| **Academic Calendar** | Old site currently links to **two differently-named files** for "Academic Calendar" (`Academic-Calendar2.pdf` and `Acadamic Calender.pdf`) depending on which nav path you take. New site references `Academic-Calendar1.pdf` — **a third, different filename that doesn't match either live old-site file** and is likely a dead link. This link is reused in Admissions Notifications, Examination Committee, and Examination Online Services. | **2 — likely broken link, appears in multiple places** |

---

## 7. Departments (CSE, AI&ML, H&S, IT, CS)

Old site structures each department as separate About/HOD/Faculty/Syllabus/Events(/Publications) pages; new site consolidates into one `DepartmentPage.jsx` template per department, driven by `theme.js`.

### 7.1 Faculty rosters
| Dept | Old count | New count | Match |
|---|---|---|---|
| CSE | 34 (incl. a genuine duplicate Faculty ID `7079` used by 2 different people) | 34, **duplicate ID carried over faithfully** | 3 (content matches) + **2 (the underlying data error should be corrected, not just replicated)** |
| CSE AI&ML | 7 (incl. a typo email `naseerbaba7866@gmai.com`) | 7, typo carried over faithfully | 3 + 2 (fix the typo) |
| H&S | 24 | 24 | 3 — exact match |
| IT | 6 | 6 | 3 — exact match |
| CS | **0** — old site's faculty table literally says "No Data Found" | 0 (no `faculty` array in `theme.js` for this dept) | **3 — correctly reflects reality, not a gap** |

### 7.2 Heads of Department
| Dept | Old | New | Category |
|---|---|---|---|
| CSE | Dr. Padmalaya Nayak, full bio | Present, full bio matches | 3 |
| CSE AI&ML | Dr. Padmalaya Nayak (shared with CSE) | Present | 3 |
| H&S | Dr. J. Kishore Babu — old bio is **short** (PhD, 20 yrs teaching, joined GRIET 2012, LSI/ISTE member) | Present, but **noticeably longer/more elaborate** than old's version, with added claims (mentoring emphasis, specific phrasing not in old source) | **2 — verify the expanded bio content with the department before publishing** |
| IT | Dr. Padmalaya Nayak (same shared HOD, confirmed on old `it_HOD.php`) | **No `hod` field exists in the IT department object in `theme.js` — no HOD section renders at all** | **1 — high priority** |
| CS | Dr. Padmalaya Nayak (same shared HOD, confirmed on old `CS_HOD.php`) | **No `hod` field exists in the CS department object either** | **1 — high priority** |

### 7.3 About / Vision / Mission / PEOs text
- CSE, AI&ML, IT, CS, H&S vision/mission/PEO text on the new site matches the old site's department pages closely to verbatim in most cases. Good fidelity overall. **Category 3.**
- **Old site error, correctly NOT migrated:** old `CSE.php` states CSE's intake as "120" in its about-text (everywhere else on the old site, including its own Admission/Programmes pages, CSE intake is 360 — this is a stray copy-paste from AI&ML). New site correctly states 360 throughout and doesn't reproduce the "120" text. **Category 4 (do not migrate the old error) — already handled correctly.**
- **Old site bug, correctly NOT migrated:** `it.php`'s heading literally reads "Department of Humanities **and Information Technology**" (a template bug mixing H&S and IT). New site's IT page has a clean, correct heading. **Category 4 — already handled correctly.**
- **Discrepancy needing verification:** old `AI_ML.php`'s intro text says the AI&ML programme was "launched" in "academic year 2024," while both the old site's own other references and the new site's `established: 2022` / "3+ Years of Excellence" figures say 2022. These two facts conflict even within the old site. **Category 2 — confirm actual founding year with the department.**

### 7.4 Syllabus
**Entirely missing from the new site.** Old site has real per-semester syllabus PDFs:
- CSE: semesters 1–8 (6 PDF links, with one apparent duplicate/versioned pair for sem 3&4)
- AI&ML: semesters 1–4 only (consistent with a newer programme)
- IT: semesters 1–8 (4 PDF links)
- CS: semesters 3–4 only (2 PDF links)
- H&S: **broken on the old site itself** — `hs_syllabus.php` actually renders CSE's syllabus content (a bug on the old site; nothing genuine to migrate for H&S specifically)

**Category 1 — high priority, genuinely useful content with no new-site equivalent at all.**

### 7.5 Department Events & Publications/Projects pages (old site)
- CSE Events: empty template, no real events.
- CSE Publications & Projects: empty template (columns defined, zero rows).
- AI&ML Events: empty.
- AI&ML has no Publications & Projects page.
- H&S Events: only 2 duplicate placeholder "Test evenet" entries (broken links).
- IT Events: empty.
- IT Publications & Projects: **this URL doesn't render a publications page at all — it accidentally serves the site's homepage.**
- CS Events: empty.
- CS has no Publications & Projects page.

**Conclusion: none of the old site's department-level Events or Publications/Projects pages contain real data.** The new site's per-department `news[]` arrays (e.g., "Hackathon 2025," "NIPUN Batch 4 Launch," specific dates) are therefore **entirely authored for the new site, not migrated from anywhere.** **Category 5 — flag for verification before continued publication, since these read as real institutional news but have no old-site source to confirm them.**

---

## 8. Research

| Item | Finding | Category |
|---|---|---|
| **Publications count** | Old (live): 2021-22: 4, 2022-23: **8**, 2023-24: 11, 2024-25: **14** = 37 total. New: 4, **7**, 11, **13** = 35 total. | **1 — missing 2 specific papers:** (a) 2022-23: "Students Academic Performance Prediction Using Ensemble Methods through Educational Data Mining" (SCI Proceedings/Springer, 2022); (b) a UPLC/ritonavir-darunapoint paper (Bio-Medical Chromatography/Wiley) appears on old's list but not new's |
| **Publication details** | Authors/venues/publishers match closely where present in both | 3 |
| **ISSN/ISBN per paper** | Present in old's table | Not captured in new site's data model at all | 1 (low priority, bibliographic completeness) |
| **Facilities** | Old `Facilities.php` describes **only** an "Idea Lab" with 2 pieces of equipment (3D Printing, Magnetic Stirrers). New site adds two entirely new labs — "AI/ML Research Lab" and "Chemistry & Nanotechnology Lab" — with specific equipment (GPU workstations, UPLC system, nanofluid characterisation setup) not mentioned anywhere on the old site. | **5 — verify these facilities and equipment genuinely exist before publishing; this is a factual infrastructure claim, not just copy** |
| **Research Awards** | Old page's actual recipient/year data exists **only as images** (not text-extractable); new site instead describes 4 generic award *categories* with no recipient list. | 3/5 — reasonable parallel treatment; consider transcribing the real award-winner images from the old site for more credible, specific content |
| **Ph.D. Awarded** | 6 names/departments/dates match. **All 6 thesis titles have been reworded from the old site's versions**, and one — Dr. Archana Mullapudi's — describes a **different research topic** (new: "Agricultural Crop Yield Prediction"; old: "Agricultural Drought Assessment in Ahmednagar Region Using Multisensor Remote Sensing Data"). Others lose specificity (e.g., Dr. Sailaja Eswara's thesis drops the named authors "Anita Rau Badami and Uma Parameswaran" it's actually about). | **2 — verify all 6 titles against the actual conferred thesis records; the Mullapudi entry looks like a real factual error, not just a paraphrase** |

---

## 9. Examinations

| Item | Finding | Category |
|---|---|---|
| **Examination Committee** | 6 members match old exactly by name/role/qualification/phone. Old's table also includes Staff ID and DOJ columns, dropped on new site. Functions list is a reasonable 6-item condensation of old's 9-item list. | 3, with 1 (minor, Staff ID/DOJ) |
| **Notifications** | Old site actively publishes a **live, frequently-updated list of 17 dated notifications** — CIE timetables per semester, exam notifications, revaluation press notes — running through the "2025-2026" academic year. New site has 12 largely static/evergreen entries and **none of the specific CIE timetable notifications**. | **1 — high priority, but really a process gap: the site needs a way to keep this list current, not just a one-time content fix** |
| **Results** | Old site links to 5 dated Osmania University result-portal pages (external, `osmania.ac.in`). Not confirmed whether these specific 5 links exist anywhere on the new site (no backing array found in `theme.js`; content may be hardcoded in `ExaminationsPage.jsx` and wasn't directly verified). | Needs direct verification — flagged as likely **1** pending confirmation |
| **Exam Branch Online Services** | Old site's actual functional link is the **Osmania University ERP self-service portal** (`online.osmaniaerp.com/AFC/info/index`) for name corrections, transcripts, and duplicate mark memos. New site's 5-item list (Grievance Form, OU Results, Exam Branch email, Academic Verification, Academic Calendar) **does not include this ERP portal link at all.** | **1 — a genuinely actionable, missing link** |

---

## 10. Placements

| Item | Finding | Category |
|---|---|---|
| Training philosophy narrative, "Python NPTEL Certification in first year" detail | Matches old closely | 3 |
| Placement Cell contacts (Dr. K. Butchi Raju, Dr. Arvind Kumar, Mrs. A. Bhavya Sri — names, roles, phones) | Match old exactly | 3 |
| **Numeric placement stats** ("253 offers," "6+ LPA highest") | **Old site's placements page — and every other old-site page — has zero numeric placement statistics anywhere.** This figure is used extensively across the new site (hero, stats bar, homepage, placements page, every department's achievements, research stats, admissions FAQs). | **⚠️ Unverified against old-site source. Recommend confirming 253/6+LPA against actual official placement records before further use — it's the single most-repeated number on the entire new site and has no traceable source in this crawl.** |
| **Recruiter list** | Old (16): …Mahindra Rise, Tata Advanced Systems Limited (TASL), L&T Constructions… New (16): …**TCS**, **Tech Mahindra**… (Mahindra Rise and TASL dropped) | **2 — these are different real companies, not renamed ones; reconcile with actual recruiter records** |
| Year-wise placement records | Old site: none exist. New site: explicitly marked "Coming Soon" | 3 (both currently absent, consistently) |

---

## 11. Alumni

| Item | Old | New | Category |
|---|---|---|---|
| Mission paragraph | Present, specific and evocative ("keep alive memories that are cherished… knowledge is transferred, information is shared…") | Replaced with generic community-network framing, not sourced from old text | 2 — consider retaining some of the old site's actual language for authenticity |
| **Alumni Association Committee** (8 named people: Dr. A. Ushasree – Incharge; Mrs. P.M. Madhuri & Mr. R. Sai Nikhil – Coordinators; Dr. Padmalaya Nayak & Dr. Kishore Babu – HOD members; 3 named students from the 21-25 batch) | Present, real table | **Not present anywhere on the new Alumni page** | **1 — real, verifiable institutional data, should be added** |
| "Alumni Benefits" (Networking, Career Support, Continuing Education, Give Back) | Not on old site | Present | 5 |
| "How to Register" 3-step flow + contact CTA | Old site has **no registration mechanism at all** | Present | 5 — confirm this process is actually operational at the alumni cell before publishing |

---

## 12. Events

Old site's Events page contains **only two identical placeholder entries** ("Test evenet," same date, broken "Read More" links) — there is no real event archive to compare against. The new site's 6 detailed events (TECHNOVA 2025, UTSAV 2025, Annual Sports Meet 2025, SKILL Series Workshop, NAVARANG 2024, IEEE & CSI Talk Series), each with specific attendance figures and prize amounts, are **entirely authored for the new site.**

**Category 5 — verify these events, dates, and figures are accurate before continued publication; there is no old-site record to fall back on if challenged.**

---

## 13. Mandatory Disclosures — detail (see also §0)

**Old site (`mandatory-disclosures.php`) — 14 real PDF links across 5 categories:**
- EOA Reports: 2025-26, 2024-25, 2023-24, 2022-23
- LOA Report: 2021-22
- AICTE Mandatory Disclosure 2024-25
- Annual Report 2023-2024
- Balance Sheet: 2023-24, 2022-23
- OU Affiliation letters: 2024-25, 2023-24, 2022-23, 2021-22

**New site (`MandatoryDisclosuresPage.jsx`)** — a completely different structure: "AICTE Approvals & Affiliation" links point to `https://www.glwec.in/downloads/AICTE_Approval_2024-25.pdf` and similar — filenames that **do not match any real file found on the live old site** (real EOA/LOA/Annual Report/Balance Sheet files live under `downloads/MD/...` with different names entirely). The rest of the new page's content is just internal cross-links (Governance & Committees, Admissions, Academic Information, RTI & Ombudsperson) rather than actual disclosure documents.

**Category 1 (all 14 real documents missing) + Category 2 (existing links are almost certainly broken) — this is the top-priority fix in the whole audit**, since Mandatory Disclosures is an AICTE regulatory requirement, not just informational content.

---

## 14. Infrastructure & Student Life

| Item | Old | New | Category |
|---|---|---|---|
| Campus stats (3.0 Acres, 1,10,000 sq ft building permission, ~55,000 sq ft first-year built area) | Present | Present, exact match | 3 |
| Lab/library/sports/hostel descriptions | Old is just an image gallery with category tabs and no descriptive text | New has detailed structured sections for each | 5 — richer, but verify equipment/technical claims (GPU labs, ethical-hacking lab, etc.) are accurate |
| General campus canteen (day-scholar facility) | Explicitly mentioned ("Spacious canteen") | Not mentioned (only hostel "Mess & Dining" is covered) | 1 (minor) |
| **Health Facilities** | 5-item list: Health Centers, Emergency Services, Pharmacy, Counseling Services, Health Camps | Different content (Medical Room, Tie-up Hospitals, Counselling Cell, Insurance Coverage) | 2 — review, not necessarily wrong but not the same facts |
| **Sports Facilities safety details** | Specific facts: full-time nurse on duty until 6:30pm, an ambulance on campus round the clock, a 5-bed health centre, first-aid boxes at the Sports Dept | **Not mentioned anywhere on the new site** | **1 — a genuine safety-relevant fact worth reinstating** |
| **Physically Challenged / Accessibility** | Specifically states GLEC **provides scribes for examinations** for differently-abled students (per OU/AICTE rules) | New site's Accessibility section (Ramp Access, Accessible Restrooms, Reserved Seating, Support Staff) **does not mention exam scribes** | **1 — an important, specific accommodation fact, missing** |
| **Ombudsperson** | Real page: names Dr. Gaddam Naresh Reddy (Registrar, Osmania University) as Ombudsperson, with address/email/phone | **No equivalent section exists anywhere on the new site** — `/administration#ombudsperson` points at nothing | **1 — AICTE/UGC-relevant disclosure, currently entirely absent** |
| **RTI Act** | Real page: names PIO (K.V.S. Raju) and APIO (K. Srinivasa Rao) with emails/phones, plus the Act's statutory text | **No equivalent section exists anywhere on the new site** — `/administration#rti` points at nothing | **1 — same priority as Ombudsperson** |

---

## 15. Contact

| Item | Old | New | Category |
|---|---|---|---|
| Address, main phone/email | Match | Match | 3 |
| Department-wise contacts | Old: Administration, Scholarships, Grievance Redressal, Bonafides/Bus Passes, Transcripts, Feedback links, Website queries, 24×7 Women's Helpline (+91 7675802603) | New (`contact.departments`): Principal, Admissions, Exam Branch, Placements, Library, Accounts | 2 — different set of departments listed; **the 24×7 Women's Helpline number is not carried over anywhere on the new site** (Category 1) |
| Google Maps embed | Still geocoded under the old "Womens Engineering College" place name | Query string already says "Engineering College" | 4 (old defect) — already correctly avoided on new site |
| Enquiry form | Old: Name/Email/Phone/Location/Message, static, no backend | New: richer form (adds Subject dropdown) but also frontend-only (no backend wired, confirmed in code) | 3 — same limitation on both, not a regression |
| AICTE Faculty/Student Feedback external links | Present | Not found on new Contact page | 1 (minor) |

---

## Summary table

| Category | Count of distinct findings |
|---|---|
| 1 – Missing, Must Add | ~28 |
| 2 – Different, Needs Correction | ~16 |
| 3 – Already Present, No Change | ~40+ |
| 4 – Outdated, Do Not Migrate | 5 (all already correctly avoided) |
| 5 – New Website Content, Keep (some flagged for verification) | ~15 |

**Highest-priority fixes, roughly in order:**
1. Mandatory Disclosures — add the 14 real documents, fix/remove the broken guessed links
2. Add HOD sections for IT and CS departments
3. Verify and fix the 6 Ph.D. thesis titles (especially Mullapudi's)
4. Update EAPCET Ranks to the 2025 cycle
5. Reconcile the recruiter list (Mahindra Rise, TASL vs TCS, Tech Mahindra)
6. Add Ombudsperson and RTI Act content (currently broken anchors, and AICTE/UGC-relevant)
7. Verify the "253 offers / 6+ LPA" placement statistic against real records
8. Reconcile IQAC committee membership with the official roster
9. Add per-department syllabus links
10. Fix the Academic Calendar PDF link (currently references a filename that doesn't exist on the old site either)

This is a findings report only — no code has been changed. Let me know which items you'd like to act on and I'll implement them.
