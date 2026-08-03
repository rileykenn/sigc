import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Welcome from '@/components/Welcome';
import Features from '@/components/Features';
import OurStory from '@/components/OurStory';
import Facilities from '@/components/Facilities';
import Gallery from '@/components/Gallery';
import BlueTreeBand from '@/components/BlueTreeBand';
import Pricing from '@/components/Pricing';
import SocialEvents from '@/components/SocialEvents';
import EventsCalendar from '@/components/EventsCalendar';
import GoogleReviews from '@/components/GoogleReviews';
import SponsorshipPreview from '@/components/SponsorshipPreview';
import Contact from '@/components/Contact';
import LiquorNotice from '@/components/LiquorNotice';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Welcome />
      <Features />
      <OurStory />
      <Facilities />
      <Gallery />
      <BlueTreeBand />
      <Pricing />
      <SocialEvents />
      <EventsCalendar />
      <GoogleReviews />
      <SponsorshipPreview />
      <Contact />
      <LiquorNotice />
      <Footer />
    </main>
  );
}
