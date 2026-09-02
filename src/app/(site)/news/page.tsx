import type { Metadata } from 'next';
import PageHeader from '@/components/PageHeader';

export const metadata: Metadata = {
  title: 'News and results | Sussex Inlet Golf Club',
  description: 'Competition results and notices from around Sussex Inlet Golf Club: members, ladies and veterans.',
};

const sections = [
  { id: 'members', title: 'Members', description: 'Club competition results, member announcements and general club news.' },
  { id: 'ladies', title: 'Ladies', description: "Wednesday competition results, ladies' events and upcoming fixtures." },
  { id: 'vets', title: 'Veterans', description: 'Tuesday veterans competition results and upcoming events.' },
];

export default function NewsPage() {
  return (
    <>
      <PageHeader title="News and results" intro="Competition results and notices from around the club." />

      <section className="bg-white py-16 sm:py-24">
        <div className="mx-auto max-w-3xl px-6">
          <div className="border-t border-navy-950/15">
            {sections.map((section) => (
              <div key={section.id} id={section.id} className="border-b border-navy-950/10 py-8 scroll-mt-20">
                <h2 className="font-display text-3xl font-semibold tracking-tight text-navy-950 [text-wrap:balance] sm:text-4xl">
                  {section.title}
                </h2>
                <p className="mt-3 max-w-[62ch] leading-relaxed text-navy-900/75">{section.description}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 border border-navy-950/15 bg-sand-50 px-6 py-12 text-center">
            <p className="font-display text-2xl font-semibold text-navy-950">Nothing posted yet</p>
            <p className="mx-auto mt-3 max-w-[62ch] leading-relaxed text-navy-900/75">
              Follow the club on Facebook for day-to-day updates.
            </p>
            <a
              href="https://www.facebook.com/SussexInletGolfClub"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex min-h-11 cursor-pointer items-center gap-1.5 text-sm font-medium text-navy-900 underline decoration-gold-500 decoration-1 underline-offset-[6px] transition-colors hover:text-navy-950 hover:decoration-2 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-navy-700"
            >
              Sussex Inlet Golf Club on Facebook
              <span className="sr-only"> (opens in a new tab)</span>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
