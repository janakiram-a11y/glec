import SiteHeader from './components/SiteHeader';
import Footer from './components/Footer';

export default function CollegeLayout({ college, children }) {
  return (
    <div className="bg-[#FFFDFC] font-dm-sans">
      <SiteHeader college={college} />
      {children}
      <Footer college={college} />
    </div>
  );
}
