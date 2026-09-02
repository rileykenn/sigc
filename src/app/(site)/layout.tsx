import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

// The public site's shared chrome. Mounted once here so the header persists
// across client-side navigation instead of remounting on every page.
export default function SiteLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  );
}
