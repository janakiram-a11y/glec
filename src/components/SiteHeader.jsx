import AnnouncementBar from './AnnouncementBar';
import InfoBar from './InfoBar';
import Navbar from './Navbar';
import NavStrip from './NavStrip';

/**
 * SiteHeader — master header used on every page.
 * Matches the Home page header exactly:
 *   AnnouncementBar → InfoBar → Navbar (sticky, shrinks on scroll) → NavStrip (sticky below Navbar)
 */
export default function SiteHeader({ college }) {
  return (
    <>
      <AnnouncementBar college={college} />
      <InfoBar college={college} />
      <Navbar college={college} />
      <NavStrip college={college} />
    </>
  );
}
