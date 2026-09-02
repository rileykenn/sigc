import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, Calendar, Users } from 'lucide-react';
import PageHeader from '@/components/PageHeader';

export const metadata: Metadata = {
  title: 'Competition days | Sussex Inlet Golf Club',
  description:
    'Weekly competition days at Sussex Inlet Golf Club: men on Sundays, ladies on Wednesdays and veterans on Tuesdays. Saturdays stay open for social rounds and visitors.',
};

const competitions = [
  {
    id: 'mens',
    title: "Men's competition",
    day: 'Every Sunday',
    type: 'AGU competition',
    description:
      'The main weekly club competition is open to all financial members. Formats change through the year: stroke, stableford and special events.',
  },
  {
    id: 'ladies',
    title: "Ladies' competition",
    day: 'Every Wednesday',
    type: 'Ladies golf',
    description:
      'The ladies play every Wednesday. It is a welcoming group for women golfers of all abilities, with social and competitive formats.',
  },
  {
    id: 'vets',
    title: 'Veterans competition',
    day: 'Every Tuesday',
    type: 'Veterans',
    description:
      'The veterans play every Tuesday, open to all veteran members. It is a good social morning of golf, with competitive and social formats.',
  },
];

export default function CompetitionsPage() {
  return (
    <>
      <PageHeader
        title="Competition days"
        intro="Sunday is competition day at Sussex Inlet. Ladies play Wednesdays and veterans Tuesdays, and Saturdays stay open for social rounds and visitors."
      />

      <section className="bg-white py-16 sm:py-24">
        <div className="mx-auto max-w-6xl px-6">
          {competitions.map((comp) => (
            <div
              key={comp.id}
              id={comp.id}
              className="grid gap-4 border-t border-navy-950/15 py-10 scroll-mt-20 md:grid-cols-[minmax(0,2fr)_minmax(0,3fr)] md:gap-10"
            >
              <div>
                <h2 className="font-display text-3xl font-semibold tracking-tight text-navy-950 [text-wrap:balance] sm:text-4xl">
                  {comp.title}
                </h2>
                <div className="mt-3 flex flex-wrap items-center gap-x-5 gap-y-1.5 text-sm text-navy-900/70">
                  <span className="flex items-center gap-1.5">
                    <Calendar size={16} strokeWidth={1.5} aria-hidden="true" /> {comp.day}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Users size={16} strokeWidth={1.5} aria-hidden="true" /> {comp.type}
                  </span>
                </div>
              </div>
              <p className="max-w-[62ch] leading-relaxed text-navy-900/75 md:pt-1">{comp.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-sand-50 py-16 sm:py-24">
        <div className="mx-auto max-w-6xl px-6">
          <p className="max-w-[62ch] leading-relaxed text-navy-900/75">Please call ahead to play on competition days.</p>
          <div className="mt-6 flex flex-wrap items-center gap-x-8 gap-y-4">
            <a
              href="tel:+61244412259"
              className="inline-flex h-11 shrink-0 cursor-pointer items-center justify-center gap-2 whitespace-nowrap px-6 text-sm font-semibold transition-colors duration-200 active:translate-y-px focus-visible:outline-2 focus-visible:outline-offset-2 bg-navy-950 text-sand-50 hover:bg-navy-800 focus-visible:outline-navy-700"
            >
              Book a round
            </a>
            <Link
              href="/whats-on"
              className="inline-flex min-h-11 cursor-pointer items-center gap-1.5 text-sm font-medium text-navy-900 underline decoration-gold-500 decoration-1 underline-offset-[6px] transition-colors hover:text-navy-950 hover:decoration-2 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-navy-700"
            >
              Full calendar
              <ArrowRight size={16} strokeWidth={1.5} aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
