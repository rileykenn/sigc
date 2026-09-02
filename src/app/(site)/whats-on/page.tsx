import type { Metadata } from 'next';
import Link from 'next/link';
import PageHeader from '@/components/PageHeader';
import EventsCalendar from '@/components/EventsCalendar';
import { getEvents, todayIso } from '@/lib/events';

// Events are managed in /admin (Supabase); refresh the static page every 5 minutes.
export const revalidate = 300;

export const metadata: Metadata = {
  title: "What's on | Sussex Inlet Golf Club",
  description:
    'The main competition day at Sussex Inlet Golf Club is Sunday, with member groups playing through the week.',
};

const tertiary =
  'inline-flex min-h-11 cursor-pointer items-center gap-1.5 text-sm font-medium text-navy-900 underline decoration-gold-500 decoration-1 underline-offset-[6px] transition-colors hover:text-navy-950 hover:decoration-2 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-navy-700';

// Weekly competition days, as listed on /competitions.
const competitionDays = [
  { id: 'mens', title: "Men's competition", day: 'Every Sunday' },
  { id: 'ladies', title: 'Ladies competition', day: 'Every Wednesday' },
  { id: 'vets', title: 'Veterans competition', day: 'Every Tuesday' },
];

export default async function WhatsOnPage() {
  const events = await getEvents();

  return (
    <>
      <PageHeader
        title="What's on"
        intro="The main competition day is Sunday, with member groups playing through the week. Saturdays are left for social play and visitors."
      />

      <EventsCalendar events={events} today={todayIso()} />

      <section className="bg-sand-50 py-16 sm:py-24">
        <div className="mx-auto max-w-4xl px-6">
          <div className="grid gap-8 border-t border-navy-950/15 pt-8 sm:grid-cols-3">
            {competitionDays.map((comp) => (
              <div key={comp.id}>
                <h2 className="font-display text-xl font-semibold text-navy-950">{comp.title}</h2>
                <p className="mt-1 text-sm text-navy-900/70">{comp.day}</p>
                <div className="mt-3">
                  <Link href={`/competitions#${comp.id}`} className={tertiary}>
                    About this competition
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 flex flex-wrap items-center gap-x-4 gap-y-1">
            <p className="leading-relaxed text-navy-900/75">Please call ahead to play on competition days.</p>
            <a href="tel:+61244412259" className={`${tertiary} tabular-nums`}>
              (02) 4441 2259
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
