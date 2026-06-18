import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import SocialEvents from '@/components/SocialEvents';
import Clubhouse from '@/components/Clubhouse';
import GolfShop from '@/components/GolfShop';
import PracticeNets from '@/components/PracticeNets';
import Gallery from '@/components/Gallery';
import Pricing from '@/components/Pricing';
import EventsCalendar from '@/components/EventsCalendar';
import SponsorshipPreview from '@/components/SponsorshipPreview';
import LiquorNotice from '@/components/LiquorNotice';
import GoogleReviews from '@/components/GoogleReviews';
import WeatherSection from '@/components/WeatherSection';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Features />
      <SocialEvents />
      <Clubhouse />
      <GolfShop />
      <PracticeNets />
      <Gallery />
      <Pricing />
      <EventsCalendar />
      <SponsorshipPreview />
      <LiquorNotice />
      <GoogleReviews />
      <WeatherSection />
      <Contact />
      <Footer />
    </main>
  );
}
