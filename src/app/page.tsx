import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import Pricing from '@/components/Pricing';
import EventsCalendar from '@/components/EventsCalendar';
import Gallery from '@/components/Gallery';
import WeatherSection from '@/components/WeatherSection';
import GoogleReviews from '@/components/GoogleReviews';
import FacebookFeed from '@/components/FacebookFeed';
import NewsletterSignup from '@/components/NewsletterSignup';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Features />
      <Pricing />
      <EventsCalendar />
      <Gallery />
      <WeatherSection />
      <GoogleReviews />
      <FacebookFeed />
      <NewsletterSignup />
      <Contact />
      <Footer />
    </main>
  );
}
