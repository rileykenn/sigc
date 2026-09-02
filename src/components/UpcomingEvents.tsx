import Link from 'next/link';
import { clubLabels, type CalendarEvent } from '@/data/events';
import { formatEventDate, upcomingEvents } from '@/lib/events';

const tertiary =
  'inline-flex min-h-11 cursor-pointer items-center gap-1.5 text-sm font-medium text-navy-900 underline decoration-gold-500 decoration-1 underline-offset-[6px] transition-colors hover:text-navy-950 hover:decoration-2 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-navy-700';

// The next five dated events from today. The full month grid is on /whats-on.
export default function UpcomingEvents({ events }: { events: CalendarEvent[] }) {
  const upcoming = upcomingEvents(events, 5);

  return (
    <section id="calendar" className="bg-white py-16 sm:py-20">
      <div className="mx-auto grid max-w-6xl gap-10 px-6 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-4">
          <h2 className="font-display text-3xl font-semibold tracking-tight text-navy-950 sm:text-4xl">
            What&apos;s on
          </h2>
          <p className="mt-3 leading-relaxed text-navy-900/75">
            The main competition day is Sunday, with member groups playing through the week.
            Saturdays are left for social play and visitors.
          </p>
          <div className="mt-6">
            <Link href="/whats-on" className={tertiary}>
              Full calendar
            </Link>
          </div>
        </div>
        <ol className="border-t border-navy-950/15 lg:col-span-8">
          {upcoming.length === 0 ? (
            <li className="py-4 text-navy-900/75">
              Nothing scheduled in the next few weeks. Call the club on{' '}
              <a href="tel:+61244412259" className={`${tertiary} tabular-nums`}>
                (02) 4441 2259
              </a>{' '}
              for this week&apos;s play.
            </li>
          ) : (
            upcoming.map((e) => (
              <li
                key={e.date + e.title}
                className="grid grid-cols-[6.5rem_1fr] gap-x-4 gap-y-1 border-b border-navy-950/10 py-4 sm:grid-cols-[8rem_1fr_7rem]"
              >
                <time
                  dateTime={e.date}
                  className="font-display text-xl font-semibold tabular-nums text-navy-950"
                >
                  {formatEventDate(e.date)}
                </time>
                <span className="text-navy-950">{e.title}</span>
                <span className="col-start-2 text-sm text-navy-900/70 sm:col-start-3 sm:text-right">
                  {(clubLabels[e.club] ?? e.club).toLowerCase() === e.title.trim().toLowerCase() ? '' : (clubLabels[e.club] ?? e.club)}
                </span>
              </li>
            ))
          )}
        </ol>
      </div>
    </section>
  );
}
