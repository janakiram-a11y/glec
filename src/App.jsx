import { BrowserRouter, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { useEffect } from 'react';

function HashScroller() {
  const { pathname, hash } = useLocation();
  useEffect(() => {
    if (!hash) { window.scrollTo(0, 0); return; }
    const id = hash.slice(1);
    const tryScroll = (attempts = 0) => {
      const el = document.getElementById(id);
      if (el) {
        const offset = 140;
        const top = el.getBoundingClientRect().top + window.scrollY - offset;
        window.scrollTo({ top, behavior: 'smooth' });
      } else if (attempts < 10) {
        setTimeout(() => tryScroll(attempts + 1), 80);
      }
    };
    tryScroll();
  }, [pathname, hash]);
  return null;
}
import GlecPage from './pages/GlecPage';
import AboutPage from './pages/AboutPage';
import InfrastructurePage from './pages/InfrastructurePage';
import AdministrationPage from './pages/AdministrationPage';
import AdmissionsPage from './pages/AdmissionsPage';
import AcademicsPage from './pages/AcademicsPage';
import ResearchPage from './pages/ResearchPage';
import ExaminationsPage from './pages/ExaminationsPage';
import ContactPage from './pages/ContactPage';
import DepartmentPage from './pages/DepartmentPage';
import PlacementsPage from './pages/PlacementsPage';
import AlumniPage from './pages/AlumniPage';
import MandatoryDisclosuresPage from './pages/MandatoryDisclosuresPage';
import EventsPage from './pages/EventsPage';

export default function App() {
  return (
    <BrowserRouter>
      <HashScroller />
      <Routes>
        {/* Homepage */}
        <Route path="/" element={<GlecPage />} />

        {/* About */}
        <Route path="/about" element={<AboutPage />} />
        <Route path="/about/vision-mission" element={<AboutPage />} />
        <Route path="/about/infrastructure" element={<InfrastructurePage />} />

        {/* Administration — each section has its own route */}
        <Route path="/administration" element={<AdministrationPage />} />
        <Route path="/administration/:section" element={<AdministrationPage />} />

        {/* Academics — each section has its own route */}
        <Route path="/academics" element={<AcademicsPage />} />
        <Route path="/academics/:section" element={<AcademicsPage />} />

        {/* Departments */}
        <Route path="/departments/:slug" element={<DepartmentPage />} />

        {/* Examinations — each section has its own route */}
        <Route path="/examinations" element={<ExaminationsPage />} />
        <Route path="/examinations/:section" element={<ExaminationsPage />} />

        {/* Admissions — each section has its own route */}
        <Route path="/admissions" element={<AdmissionsPage />} />
        <Route path="/admissions/:section" element={<AdmissionsPage />} />

        {/* Research — each section has its own route */}
        <Route path="/research" element={<ResearchPage />} />
        <Route path="/research/:section" element={<ResearchPage />} />

        <Route path="/placements" element={<PlacementsPage />} />
        <Route path="/alumni" element={<AlumniPage />} />
        <Route path="/mandatory-disclosures" element={<MandatoryDisclosuresPage />} />
        <Route path="/events" element={<EventsPage />} />
        <Route path="/contact" element={<ContactPage />} />

        {/* Fallback — redirect unknown routes to homepage */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}
