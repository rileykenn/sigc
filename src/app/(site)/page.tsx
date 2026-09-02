import Hero from '@/components/Hero';
import Welcome from '@/components/Welcome';
import GreenFeesTable from '@/components/GreenFeesTable';
import UpcomingEvents from '@/components/UpcomingEvents';
import FindUs from '@/components/FindUs';
import { getRates } from '@/lib/rates';
import { getEvents } from '@/lib/events';

// Rates and events are managed in /admin (Supabase); refresh the static page every 5 minutes.
export const revalidate = 300;

// Home: hero plus four short sections. The (site) layout supplies the header and footer.
export default async function Home() {
  const [{ greenFees }, events] = await Promise.all([getRates(), getEvents()]);

  return (
    <>
      <Hero />
      <Welcome />
      <GreenFeesTable greenFees={greenFees} />
      <UpcomingEvents events={events} />
      <FindUs />
    </>
  );
}
