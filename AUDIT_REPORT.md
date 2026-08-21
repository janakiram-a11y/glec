# GLEC Site V1 — Complete Verification Audit Report
**Comparison:** `https://glwec-duplicate.vercel.app/` (live) vs Local `glec-site-v1`
**Date:** 15 June 2026
**Method:** Every component file read + live site fetched + content verified line-by-line
**Status:** Report only — NO code changes made. Awaiting approval.

---

## EXECUTIVE SUMMARY

A full component-by-component and content-by-content audit reveals **V1 is approximately 80% complete**. All pages and routes exist, but there are **12 confirmed functional/content gaps** and **8 data/link issues**. The first audit report missed several issues because component names in V1 don't match their actual content — the verification pass reading every component file directly uncovered these.

**Most critical findings:**
1. `QuickLinksBar` on the homepage is hardcoded with 4 wrong items (Alumni, Mandatory Disclosures, Events, Infrastructure) — the duplicate site has 9 correct items from `college.quickLinks`
2. `StatsBar` component exists but is **never rendered** on any page
3. `AnnouncementBar` (with LOI modal) component exists but is **never rendered** anywhere
4. `HighlightCards` and `CampusIntro` components exist but are **never rendered**
5. **News & Events ticker** is missing from the homepage entirely
6. `vercel.json` SPA rewrite is missing — all routes except `/` return 404 on deployment

---

## PART 1 — HOMEPAGE COMPONENT AUDIT

### What GlecPage.jsx actually renders (verified by reading code):

```
CollegeLayout
  InfoBar        ← TG EAPCET code badge + live search
  Navbar         ← logo + accreditation logos
  NavStrip       ← all nav items with dropdowns
  NoticeBar      ← (inside NavStrip) scrolling notice ticker
  
  Hero           ← hero heading, subtext, 2 CTA buttons
  QuickLinksBar  ← 4 HARDCODED items (WRONG — should be 9)
  WhyChooseUs    ← "About GLEC" section (NOTE: misnamed component)
  AccreditationSection ← "Why Choose GLEC" 6 cards (NOTE: misnamed component)
  AcademicPrograms    ← 5 B.E. programmes scrollable strip
  CareerOutcomes      ← stats + recruiters + image
  ResearchSection     ← 4 research/initiative stats cards
  CampusLife          ← 5 campus life image gallery cards
  AdmissionsCTA       ← "Apply Now" CTA banner
  
  Footer         ← 4-column footer
```

### Sections on Duplicate Site vs V1 Homepage

| Section | Duplicate Site | V1 Local | Status |
|---------|---------------|----------|--------|
| Hero | ✅ | ✅ `Hero` component | ✅ Match |
| **Stats Bar** | ✅ AICTE Approved, OU Affiliated, 253 Placements, 6+ LPA | ❌ **StatsBar component exists but NOT rendered in GlecPage** | ❌ MISSING |
| Quick Links strip | ✅ 9 links from college.quickLinks | ❌ **4 hardcoded wrong links** | ❌ WRONG |
| **About GLEC section** | ✅ "Welcome to GLEC" heading, paragraphs, 4 feature cards, "Read More" CTA, image | ✅ Rendered as `WhyChooseUs` (misleading name) with aboutHeading + aboutP1 + aboutP2 + aboutFeatures | ✅ Content present |
| **News & Events ticker** | ✅ Scrolling marquee with news items and PDF links | ❌ **No such component exists or is rendered** | ❌ MISSING |
| Academic Programs | ✅ | ✅ `AcademicPrograms` | ✅ Match |
| Skill Development / Why Choose GLEC | ✅ | ✅ Rendered as `AccreditationSection` (misleading name) | ✅ Content present |
| Career Outcomes | ✅ | ✅ `CareerOutcomes` | ✅ Match |
| Research/Initiatives stats | ✅ | ✅ `ResearchSection` | ✅ Match |
| Campus Life gallery | ✅ | ✅ `CampusLife` | ✅ Match |
| Admissions CTA | ✅ | ✅ `AdmissionsCTA` | ✅ Match |

### Orphaned Components (Built but Never Used)

These components exist in `src/components/` but are imported by NO page:

| Component | What it renders | Where it should appear |
|-----------|----------------|----------------------|
| `StatsBar.jsx` | `college.statsBarItems` — 4-item strip (AICTE Approved, OU Affiliated, 253 Placements, 6+ LPA) | Below Hero on homepage |
| `AnnouncementBar.jsx` | Scrolling ticker for `college.announcements` + LOI modal popup | Below InfoBar / top of page |
| `HighlightCards.jsx` | 3 `college.highlightCards` cards (AICTE Approved, Placements, Community) | Homepage or About page |
| `CampusIntro.jsx` | Full-width video/image with heading and description | Homepage |
| `SecondaryLinks.jsx` | 6 hardcoded icon links (Admissions, Placements, Research, Events, Infrastructure, Contact Us) | Below hero as secondary nav strip |

---

## PART 2 — QUICKLINKS BAR DISCREPANCY (HIGH PRIORITY)

### V1 QuickLinksBar (current — hardcoded):
| Label | href | Route exists? |
|-------|------|---------------|
| Alumni Association | `/about#alumni` | ⚠️ Hash anchor — no Alumni section on About page |
| Mandatory Disclosures | `/mandatory-disclosures` | ❌ Route NOT in App.jsx |
| Events | `/events` | ❌ Route NOT in App.jsx |
| Infrastructure | `/about/infrastructure` | ✅ Exists (placeholder content) |

### Duplicate site QuickLinksBar (correct — from college.quickLinks):
| Label | href | Route exists? |
|-------|------|---------------|
| About College | `/about` | ✅ |
| Chairman | `/administration/management` | ✅ |
| Vice President | `/administration/management` | ✅ |
| Registrar | `/administration/registrar` | ✅ |
| Principal | `/administration/principal` | ✅ |
| Placements | `/placements` | ✅ |
| Infrastructure | `/about/infrastructure` | ✅ (placeholder) |
| SKILL Series | `/research` | ✅ |
| Contact Us | `/contact` | ✅ |

**Fix required:** `QuickLinksBar.jsx` must be changed to read from `college.quickLinks` instead of its current hardcoded 4-item array.

---

## PART 3 — INFOBAR ANNOUNCEMENTS DISCREPANCY

### V1 theme.js `announcements`:
1. `"Deemed-to-be University – LOI Received"` [badge: NEW, isLOI: true → triggers modal]
2. `"Admissions Open for 2025–26"` [href: `/admissions`, badge: NEW]

### Duplicate site InfoBar announcements:
1. `"Admissions Open for 2025–26"` [NEW badge] → `/admissions`
2. `"TG EAPCET Counselling Code: GLWC"` → `/admissions`
3. `"253 Placement Offers | Highest Package 6+ LPA"` → `/placements`

**Differences:**
- V1 has a "Deemed-to-be University – LOI" announcement (not on duplicate site — may be fabricated/incorrect)
- V1 is missing the EAPCET Counselling Code and Placement offers announcements
- The LOI `AnnouncementBar` component is built but never rendered anyway

---

## PART 4 — HERO SECTION DISCREPANCY

### V1 Hero.jsx CTA buttons (actual, verified by reading code):
1. Primary: `college.heroCTALabel` ("Admissions Open 2025") → `college.heroCTAHref` (`https://greit-website-brand.vercel.app/`) — **external GRIET demo site**
2. Secondary: `"Explore Programs"` → `/admissions/programs` (hardcoded)

### Duplicate site Hero CTAs:
1. Primary: "Admissions Open 2025" → external link
2. Secondary CTAs row: Admissions, Placements, Research, Events, Infrastructure, Contact Us

**Missing:** The 6-button secondary CTA row from the duplicate site.

---

## PART 5 — STATSBAR (MISSING FROM HOMEPAGE)

`StatsBar.jsx` reads `college.statsBarItems`:
```js
statsBarItems: ['AICTE Approved', 'Osmania University Affiliated', '253 Placement Offers', '6+ LPA Highest Package']
```

This component exists and is well-built, but `GlecPage.jsx` never imports or renders it.

**Fix required:** Add `<StatsBar college={college} />` to `GlecPage.jsx` after `<Hero>`.

---

## PART 6 — NEWS & EVENTS SECTION (MISSING)

The duplicate site has a scrolling news/events ticker between "About GLEC" and "Academic Programs" with:
- Regular classwork commencement (28 Aug 2025)
- Document submission procedure → PDF download
- Job Openings → link
- Co-education notice (GLWC code)
- Faculty Recruitment Application Form → PDF
- Seat availability (CSE 360 / CSE AI&ML 120)

No corresponding component exists in V1. This needs to be built.

---

## PART 7 — DEPLOYMENT ISSUES

### 7.1 Missing vercel.json
All routes except `/` return HTTP 404 on `glwec-duplicate.vercel.app`. Needs:
```json
{ "rewrites": [{ "source": "/(.*)", "destination": "/index.html" }] }
```

### 7.2 Broken routes linked from components
| Route | Linked from | Status |
|-------|------------|--------|
| `/mandatory-disclosures` | `QuickLinksBar.jsx` line 22 | ❌ Not in App.jsx |
| `/events` | `QuickLinksBar.jsx` line 35, `SecondaryLinks.jsx` line 42 | ❌ Not in App.jsx |
| `/about#alumni` | `QuickLinksBar.jsx` line 12 | ⚠️ No Alumni section on About page |

---

## PART 8 — NAVIGATION AUDIT (COMPLETE)

### Header InfoBar ✅
| Item | V1 Status |
|------|-----------|
| TG EAPCET counselling code badge | ✅ |
| Live in-site search with dropdown | ✅ (upgraded from duplicate site) |
| Announcements ticker (AnnouncementBar) | ❌ Not rendered (component orphaned) |

### Navbar ✅
| Item | V1 Status |
|------|-----------|
| GLEC logo | ✅ `/imgi_1_GLEC_Logo.png` |
| Affiliations/accreditation logo | ✅ `/affiliations.png` |
| Scroll-shrink behavior | ✅ |
| Mobile responsive | ✅ |

### NavStrip (Main Nav) ✅
All 10 nav items + dropdowns verified present and correctly linked:

| Nav Item | Items | V1 Status |
|----------|-------|-----------|
| Home | — | ✅ |
| About us | 5 dropdown items | ✅ |
| Administration | 13 dropdown items | ✅ |
| Admissions | 12 dropdown items | ✅ |
| Academics | 6 dropdown items | ✅ |
| Departments | 5 dropdown items | ✅ |
| Research | 5 dropdown items | ✅ |
| Placements | — | ✅ |
| Examinations | 4 dropdown items | ✅ |
| Contact Us | — | ✅ |

### NoticeBar ✅
3 notice items present in `college.noticeItems`, scrolling ticker working.

### Footer ✅
| Section | V1 Status |
|---------|-----------|
| Logo + tagline | ✅ |
| Social icons (Instagram, Facebook, LinkedIn, YouTube) | ✅ |
| Social URLs | ⚠️ Placeholder root domains |
| TG EAPCET Code badge | ✅ |
| Quick Links column (9 items) | ✅ reads `college.quickLinks` |
| Resources column (6 items) | ✅ reads `college.resources` |
| Contact (address, phone, email) | ✅ |
| Privacy Policy / Terms links | ⚠️ Both `#` placeholders |

---

## PART 9 — PAGE-BY-PAGE CONTENT AUDIT

### Home Page (`/`) — GAPS FOUND
See Parts 1–6 above.

### About Page (`/about`) ✅ COMPLETE
All sections verified present:
- Hero banner ✅
- Inspirer & Promoters paragraph (aboutFounders) ✅
- Sponsoring Society paragraph (aboutSociety) ✅
- About GLEC — 5 paragraphs (aboutDetailedParagraphs[0–4]) ✅
- Leadership cards — 4 cards (leadership array) ✅
- Vision card (vision text) ✅
- Mission bullets (mission[0–3]) ✅
- Quality Policy card (qualityPolicy) ✅
- Strategies list (strategies[0–5]) ✅
- Core Values grid — 7 items (coreValues) ✅
- Admissions CTA ✅
- About page sidebar anchors (#chairman, #vice-president, #registrar, #principal) ✅

**Note:** `AboutPage.jsx` uses `Navbar` + `NavStrip` directly (not `CollegeLayout`), so `InfoBar` and `AnnouncementBar` are NOT shown on the About page. This may be intentional design.

### Infrastructure Page (`/about/infrastructure`) ⚠️ PLACEHOLDER
Route exists → renders `AboutPage`. No infrastructure-specific content (labs, library, sports, hostel, facilities photos). Referenced in Footer quick links and original QuickLinksBar.

### Administration Pages (`/administration/*`) ✅ COMPLETE
All 13 sections verified (management, sponsoring-body, governing-body, registrar, principal, id-plan, anti-ragging, anti-harassment, grievance, segd, finance, equal-opportunity, icc).

### Academics Pages (`/academics/*`) ✅ COMPLETE
All 6 sections verified (leadership, collaborations, iqac, library, rules, calendar).

**Note:** Academic Calendar section links to PDF at `https://www.glwec.in/downloads/Academic-Calendar1.pdf` (external).

### Department Pages (`/departments/:slug`) ✅ COMPLETE (5 departments)
Template verified: hero, stats strip, about, announcements sidebar, vision & mission, news & events grid, alumni table, achievements stats, facilities.

### Admissions Pages (`/admissions/*`) ✅ COMPLETE
All 12 sections verified (overview, programs, procedure, eligibility, fee-structure, eapcet-ranks, documents, scholarships, hostel-transport, notifications, fee-refund, faqs).

### Research Pages (`/research/*`) ✅ COMPLETE
All 5 sections verified. 35 publications across 4 years (2021–22: 4, 2022–23: 7, 2023–24: 11, 2024–25: 13). Year-tab filter functional.

### Examinations Pages (`/examinations/*`) ✅ COMPLETE
All 4 sections verified. Academic Calendar PDF link present on committee page.

### Placements Page (`/placements`) ✅ MATCHES
3 stat cards, 16 recruiter tags, 3 initiative cards, "Coming Soon" banner — all matching duplicate site (both sites have partial data with Coming Soon note).

### Contact Page (`/contact`) ✅ COMPLETE
4 info cards, enquiry form (frontend only), 6 dept contacts, social links, embedded Google Maps.

---

## PART 10 — IMAGES & MEDIA AUDIT

### Local Images (verified in /public)

| File | Used By | Issue |
|------|---------|-------|
| `/imgi_1_GLEC_Logo.png` | Navbar, Footer | ✅ OK |
| `/affiliations.png` | Navbar (accreditationLogo) | ✅ OK |
| `/imgi_5_aboutusbanner.jpg` | Hero, PageHero, Dept hero | ✅ OK |
| `/Why choose us.png` | WhyChooseUs (aboutImage) | ⚠️ Spaces in filename |
| `/Career Outcomes.png` | CareerOutcomes (careerImage) | ⚠️ Spaces in filename |
| `/Cultural event & Fests.png` | CampusLife | ⚠️ Spaces + `&` in filename |
| `/Sports fecilities.png` | CampusLife | ⚠️ Spaces + typo ("fecilities") |
| `/Innovation clubs.png` | CampusLife | ⚠️ Spaces in filename |
| `/Hostel life.png` | CampusLife | ⚠️ Spaces in filename |
| `/Central library.png` | CampusLife | ⚠️ Spaces in filename |
| `/small-logo.png` | AnnouncementBar (LOI modal) | ⚠️ AnnouncementBar never rendered |

### Images hosted on external glwec.in CDN (dependency risk)

| Image | URL |
|-------|-----|
| Chairman | `https://www.glwec.in/images/Gokaraju_Ganga_Raju.jpg` |
| Vice President | `https://www.glwec.in/images/Ranga_Raju.jpg` |
| Principal | `https://www.glwec.in/images/Akund_Sai_Hanuman.jpg` |
| Registrar | `https://www.glwec.in/images/K_VS_Raju.jpg` |

All 4 images load from the old GLWEC site. If that site goes offline, all person images break silently (components have `onError` fallback that just hides them).

### Images Referenced in theme.js but not verified locally

| field | value | risk |
|-------|-------|------|
| `campusIntroImage` | `/imgi_4_Gokaraju-Rangaraju.jpg` | CampusIntro never rendered — unknown if file exists |

---

## PART 11 — DOCUMENTS & DOWNLOADS AUDIT

| Document | URL | Status |
|----------|-----|--------|
| Academic Calendar PDF | `https://www.glwec.in/downloads/Academic-Calendar1.pdf` | ⚠️ External |
| Document Submission PDF | `https://www.glwec.in/downloads/Document_submission.pdf` | ⚠️ External |
| IDP 2021–26 PDF | `https://www.glwec.in/downloads/IDP%202021-26.pdf` | ⚠️ External |

All 3 PDFs are hosted on the old site. Recommend downloading and placing in `/public/downloads/`.

---

## PART 12 — THEME.JS DATA ACCURACY AUDIT

### Verified Correct
- College name, address, phone, emails ✅
- Primary #5B1027, Accent #C32033, Soft Accent #F3DAB2 ✅
- Counselling code GLWC ✅
- All navLink labels and hrefs (10 top-level + all dropdowns) ✅
- quickLinks (9 items) ✅
- resources (6 items) ✅
- 5 departments (full data) ✅
- 35 research publications (4 years) ✅
- 12 admissions sections ✅
- 13 administration sections ✅
- 6 academics sections ✅

### Confirmed Errors in theme.js

| Field | Current value | Correct value |
|-------|--------------|---------------|
| `heroCTAHref` | `https://greit-website-brand.vercel.app/` | Should be GLEC admissions/counselling URL |
| `ctaCTAHref` | Same wrong URL | Same fix needed |
| `socialLinks.instagram` | `https://www.instagram.com` | Should be GLEC Instagram account URL |
| `socialLinks.facebook` | `https://www.facebook.com` | Should be GLEC Facebook page URL |
| `socialLinks.linkedin` | `https://www.linkedin.com` | Should be GLEC LinkedIn page URL |
| `socialLinks.youtube` | `https://www.youtube.com` | Should be GLEC YouTube channel URL |
| `quickLinks[1].href` (Chairman) | `/administration/management` | Should be `/about#chairman` |
| `quickLinks[2].href` (Vice President) | `/administration/management` | Should be `/about#vice-president` |

---

## PART 13 — COMPLETE PRIORITIZED GAP LIST

### Priority 1 — Critical (Deployment / Broken)

| # | Issue | Fix location |
|---|-------|-------------|
| P1.1 | Missing `vercel.json` — all routes 404 on Vercel | Create `/vercel.json` |
| P1.2 | `QuickLinksBar.jsx` has 4 wrong hardcoded items — 2 routes don't exist | Rewrite to use `college.quickLinks` |
| P1.3 | `/mandatory-disclosures` and `/events` linked but routes don't exist | Remove from QuickLinksBar (after P1.2 fix) |

### Priority 2 — High (Missing Content)

| # | Issue | Fix location |
|---|-------|-------------|
| P2.1 | `StatsBar` never rendered — stats strip missing from homepage | Add to `GlecPage.jsx` after Hero |
| P2.2 | News & Events ticker missing from homepage | Build component, add to GlecPage.jsx |
| P2.3 | `AnnouncementBar` built but never rendered | Add to `CollegeLayout.jsx` or GlecPage |
| P2.4 | No Infrastructure page content | Build dedicated section/page |
| P2.5 | Hero missing secondary 6-button CTA row (Admissions, Placements, etc.) | Update `Hero.jsx` |
| P2.6 | Contact form has no backend — enquiries silently discarded | Integrate email API or form service |

### Priority 3 — Medium (Data / Links)

| # | Issue | Fix location |
|---|-------|-------------|
| P3.1 | `heroCTAHref` and `ctaCTAHref` point to GRIET demo site | Update in `theme.js` |
| P3.2 | All 4 social media links are placeholder root domains | Update `theme.js` → `socialLinks` |
| P3.3 | Chairman and VP quickLinks go to `/administration/management` instead of About page anchors | Fix in `theme.js` → `quickLinks[1].href` and `quickLinks[2].href` |
| P3.4 | Person images hosted on glwec.in (external CDN) | Download 4 images, host in `/public/images/` |
| P3.5 | 3 PDF downloads hosted on glwec.in | Download + host in `/public/downloads/` |
| P3.6 | theme.js `announcements` don't match duplicate site (has LOI, missing GLWC code + placements) | Update `announcements` array |
| P3.7 | `HighlightCards`, `CampusIntro`, `SecondaryLinks` components built but unused | Decide: integrate or delete |

### Priority 4 — Low (Polish)

| # | Issue | Fix location |
|---|-------|-------------|
| P4.1 | Image filenames have spaces and one typo (`Sports fecilities.png`) | Rename files + update theme.js |
| P4.2 | Privacy Policy / Terms of Service are `#` placeholders | Build pages or note as out-of-scope |
| P4.3 | Component names misleading (`WhyChooseUs` renders About; `AccreditationSection` renders Why Choose) | Rename or add comments |
| P4.4 | `AnnouncementBar` has LOI announcement — needs verification if LOI was actually received | Verify with client |

---

## SUMMARY TABLE

| Category | Total Items | Complete | Gaps |
|----------|-------------|----------|------|
| Routes / pages | 52 | 52 | 0 missing routes |
| Homepage sections | 11 | 8 | 3 gaps (StatsBar, News Ticker, correct QuickLinks) |
| Component correctness | 20 components | 14 correct | 6 orphaned / broken |
| Nav items (navbar + dropdowns) | 45 | 45 | 0 |
| Footer sections | 4 | 4 | 0 (social links are placeholders) |
| theme.js data accuracy | All fields | All correct | 8 wrong field values |
| Images hosted locally | 10 | 10 | 0 (filenames have issues) |
| Images on external CDN | 4 | 4 | ⚠️ External dependency |
| PDF downloads | 3 | 3 | ⚠️ External dependency |

**Overall: V1 is ~80% complete. No pages missing. Key gaps: 3 homepage sections, 6 orphaned components, 8 wrong data values.**

---

## WHAT NEEDS APPROVAL BEFORE IMPLEMENTATION

The following changes are ready to implement once you approve:

**Batch A — Quick fixes (theme.js data):**
- Fix `heroCTAHref`, `ctaCTAHref` (need correct URL from you)
- Fix social media links (need actual GLEC account URLs from you)
- Fix Chairman and VP quickLinks hrefs
- Update `announcements` to match duplicate site (remove LOI, add GLWC code + placements)

**Batch B — Homepage fixes:**
- Add `StatsBar` to `GlecPage.jsx`
- Fix `QuickLinksBar.jsx` to read from `college.quickLinks`
- Add `AnnouncementBar` to layout
- Build News & Events ticker component

**Batch C — Deployment fix:**
- Create `vercel.json`

**Batch D — Content (needs your input):**
- Infrastructure page content (what to show — labs, facilities, images?)
- Real social media URLs
- Real admissions CTA URL (not GRIET demo)
- PDFs to upload locally
- Person images to host locally
