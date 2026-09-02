import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import PageHeader from '@/components/PageHeader';
import { courseInfo } from '@/data/courseData';

export const metadata: Metadata = {
  title: 'About the club | Sussex Inlet Golf Club',
  description:
    'A not-for-profit community club on the NSW South Coast, playing here since 1953.',
};

const h2 =
  'font-display text-3xl font-semibold tracking-tight text-navy-950 [text-wrap:balance] sm:text-4xl';

const body = 'max-w-[62ch] leading-relaxed text-navy-900/75';

// Tertiary on light, per spec section 2.2.
const tertiary =
  'inline-flex min-h-11 cursor-pointer items-center gap-1.5 text-sm font-medium text-navy-900 underline decoration-gold-500 decoration-1 underline-offset-[6px] transition-colors hover:text-navy-950 hover:decoration-2 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-navy-700';

const moments = [
  { year: '1950', caption: 'A tent on the 8th' },
  { year: '1953', caption: 'Eight founding members' },
  { year: '1956', caption: 'Nine holes grassed' },
  { year: 'Today', caption: 'Community owned' },
];

// Only holes and par come from courseData. The founding year on the public site is 1953.
const facts = [
  { figure: String(courseInfo.holes), label: 'holes' },
  { figure: String(courseInfo.totalPar), label: 'par' },
  { figure: '7', label: 'days a week' },
];

const facilities = [
  {
    title: 'Clubhouse',
    line: 'Cold drinks, air conditioning and a spot to settle in after the round.',
  },
  {
    title: 'Pro shop',
    line: 'Snacks and drinks, plus a good range of club clothing and merchandise.',
  },
  { title: 'Practice nets', line: 'Loosen up before the first tee.' },
  {
    title: 'BBQ and outdoor seating',
    line: 'Tables under the trees, with room for groups.',
  },
  {
    title: 'Cart and club hire',
    line: "Carts, buggies and club sets for hire, so there's no need to bring your own.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHeader
        title="About the club"
        intro="A not-for-profit community club on the NSW South Coast, playing here since 1953."
      />

      {/* 1 and 2: the story, then the timeline strip */}
      <section className="bg-white py-16 sm:py-24">
        <div className="mx-auto max-w-3xl px-6">
          <h2 className={h2}>Playing here since 1953</h2>
          <p className={`mt-6 ${body}`}>
            Jack and Clive Curtis bought this land in 1950 and lived in a tent on what is now the
            8th fairway while they cleared the first three holes. The club formed in 1953 with
            eight members. By 1956 all nine holes were grassed, the first grassed course south of
            Wollongong.
          </p>
          <p className={`mt-4 ${body}`}>
            Seventy years on, the club still runs the way it started: not for profit, managed by a
            volunteer board and five local staff.
          </p>

          <ol className="mt-12 grid grid-cols-2 gap-x-6 gap-y-8 border-t border-navy-950/15 pt-8 sm:grid-cols-4">
            {moments.map((moment) => (
              <li key={moment.year}>
                <div className="font-display text-3xl font-semibold tabular-nums text-navy-950">
                  {moment.year}
                </div>
                <div className="mt-1 text-sm text-navy-900/70">{moment.caption}</div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* 3: the course today */}
      <section className="bg-sand-50 py-16 sm:py-24">
        <div className="mx-auto max-w-3xl px-6">
          <h2 className={h2}>The course today</h2>
          <p className={`mt-6 ${body}`}>
            Short enough to walk, honest enough to keep you thinking. The fairways cut through
            native bushland where kangaroos graze the rough and king parrots watch from the trees.
            Open seven days, with clubs and carts for hire if you&apos;re travelling light.
          </p>

          <ul className="mt-10 grid grid-cols-3 gap-6">
            {facts.map((fact) => (
              <li key={fact.label} className="border-l border-navy-950/15 pl-4">
                <div className="font-display text-3xl font-semibold tabular-nums text-navy-950">
                  {fact.figure}
                </div>
                <div className="mt-1 text-sm text-navy-900/70">{fact.label}</div>
              </li>
            ))}
          </ul>

          <div className="mt-10">
            <Link href="/course" className={tertiary}>
              Course guide and scorecard
              <ArrowRight size={16} strokeWidth={1.5} aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>

      {/* 4: around the club. The column widens here so the list and photo sit side by side. */}
      <section className="bg-white py-16 sm:py-24">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className={h2}>Around the club</h2>
          <div className="mt-10 grid gap-10 lg:grid-cols-12">
            <dl className="border-t border-navy-950/15 lg:col-span-7">
              {facilities.map((facility) => (
                <div
                  key={facility.title}
                  className="grid grid-cols-1 gap-1 border-b border-navy-950/10 py-4 sm:grid-cols-[10rem_1fr] sm:gap-4"
                >
                  <dt className="font-medium text-navy-950">{facility.title}</dt>
                  <dd className="text-navy-900/75">{facility.line}</dd>
                </div>
              ))}
            </dl>
            <div className="relative aspect-[4/3] overflow-hidden border border-navy-950/10 lg:col-span-5">
              <Image
                src="/images/clubhouse.webp"
                alt="Inside the Sussex Inlet Golf Club clubhouse"
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 5: the blue tree */}
      <section className="bg-sand-50 py-16 sm:py-24">
        <div className="mx-auto max-w-3xl px-6">
          <h2 className={h2}>The blue tree on the third</h2>
          <p className={`mt-6 ${body}`}>
            One tree on our course is painted a vivid, unmissable blue. It is part of the Blue Tree
            Project, a national movement encouraging honest conversations about mental health.
            Painted by club volunteers in 2020, it stands in memory of those we have lost and as a
            reminder to ask the people around you if they are okay.
          </p>
          <div className="mt-8">
            <Link href="/historic-blue-tree" className={tertiary}>
              Read its story
              <ArrowRight size={16} strokeWidth={1.5} aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>

      {/* 6: sponsors */}
      <section className="bg-white py-16 sm:py-24">
        <div className="mx-auto max-w-3xl px-6">
          <h2 className={h2}>Backed by local business</h2>
          <p className={`mt-6 ${body}`}>
            Tee signage and clubhouse sponsorships help keep the course maintained and green fees
            affordable.
          </p>
          <div className="mt-8">
            <Link href="/sponsorship" className={tertiary}>
              Sponsorship
              <ArrowRight size={16} strokeWidth={1.5} aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>

      {/* 7: closing link */}
      <section className="border-t border-navy-950/15 bg-sand-50 py-12 sm:py-16">
        <div className="mx-auto max-w-3xl px-6">
          <Link href="/membership" className={tertiary}>
            Join the club
            <ArrowRight size={16} strokeWidth={1.5} aria-hidden="true" />
          </Link>
        </div>
      </section>
    </>
  );
}
