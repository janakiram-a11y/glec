import college from '../theme';
import CollegeLayout from '../CollegeLayout';
import Hero from '../components/Hero';
import StatsBar from '../components/StatsBar';
import QuickLinksBar from '../components/QuickLinksBar';
import WhyChooseUs from '../components/WhyChooseUs';
import NewsEvents from '../components/NewsEvents';
import AccreditationSection from '../components/AccreditationSection';
import AcademicPrograms from '../components/AcademicPrograms';
import CareerOutcomes from '../components/CareerOutcomes';
import ResearchSection from '../components/ResearchSection';
import CampusLife from '../components/CampusLife';
import AdmissionsCTA from '../components/AdmissionsCTA';

export default function GlecPage() {
  return (
    <CollegeLayout college={college}>
      <Hero college={college} />
      <QuickLinksBar college={college} />

      <WhyChooseUs college={college} />
      <StatsBar college={college} />
      <NewsEvents college={college} />
      <AccreditationSection college={college} />
      <AcademicPrograms college={college} />
      <CareerOutcomes college={college} />
      <ResearchSection college={college} />
      <CampusLife college={college} />
      <AdmissionsCTA college={college} />
    </CollegeLayout>
  );
}
