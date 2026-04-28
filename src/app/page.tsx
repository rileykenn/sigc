import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import Pricing from '@/components/Pricing';
import Gallery from '@/components/Gallery';
import GoogleReviews from '@/components/GoogleReviews';
import NewsletterSignup from '@/components/NewsletterSignup';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Features />
      <Gallery />
      <Pricing />
      <GoogleReviews />
      <Contact />
      <NewsletterSignup />
      <Footer />
    </main>
  );
}
