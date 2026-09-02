import type { Metadata } from 'next';
import { Phone } from 'lucide-react';
import PageHeader from '@/components/PageHeader';

export const metadata: Metadata = {
  title: 'The blue tree | Sussex Inlet Golf Club',
  description:
    'On the third hole of Sussex Inlet Golf Club stands a vibrant blue tree, a reminder that hope is always within reach and that no one should face mental health challenges alone.',
};

const h2 =
  'font-display text-3xl font-semibold tracking-tight text-navy-950 [text-wrap:balance] sm:text-4xl';
const body = 'mt-6 max-w-[62ch] leading-relaxed text-navy-900/75';
const supportLink =
  'inline-flex min-h-11 cursor-pointer items-center gap-1.5 text-sm font-medium text-navy-900 underline decoration-gold-500 decoration-1 underline-offset-[6px] transition-colors hover:text-navy-950 hover:decoration-2 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-navy-700';
const phoneLink =
  'mt-2 inline-flex min-h-11 cursor-pointer items-center gap-2 font-display text-2xl font-semibold tabular-nums text-navy-950 transition-colors hover:text-navy-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-navy-700';

export default function HistoricBlueTreePage() {
  return (
    <>
      <PageHeader
        title="The blue tree"
        intro="On the third hole of Sussex Inlet Golf Club stands a vibrant blue tree. It is a simple, powerful reminder that hope is always within reach, and that no one should face mental health challenges alone."
      />

      <section className="bg-sand-50 py-16 sm:py-24">
        <div className="mx-auto max-w-3xl space-y-16 px-6 sm:space-y-20">
          <div>
            <h2 className={h2}>The Blue Tree Project</h2>
            <p className={body}>
              The Blue Tree Project is a community initiative that raises
              awareness of mental health and suicide prevention by encouraging
              open conversations and breaking down stigma. Across Australia,
              blue trees have become recognised symbols of hope, resilience and
              support: a prompt to check in with one another, and to seek help
              when it is needed.
            </p>
          </div>

          <div>
            <h2 className={h2}>Our tree</h2>
            <p className={body}>
              Sussex Inlet Golf Club joined the movement in mid-2020, when our
              tree was painted by a dedicated group of club volunteers who gave
              their time to help spread the message of hope for those living
              with mental illness.
            </p>
            <p className="mt-5 max-w-[62ch] leading-relaxed text-navy-900/75">
              The project was made possible through the generosity of the late
              Laurie Vincent, a respected former director and stalwart of the
              club, who donated the paint and helped bring the project to life.
              Inspirations Paint Nowra also kindly supported the work.
            </p>
          </div>

          <div>
            <h2 className={h2}>What it means</h2>
            <p className={body}>
              Golfers see the tree as they play the third, but its purpose
              extends far beyond the game. It is a reminder that conversations
              can save lives, that asking &ldquo;are you okay?&rdquo; can make
              a real difference, and that support is available for anyone who
              may be struggling. It stands as a lasting tribute to those we
              have lost, to those continuing their mental health journey, and
              to the volunteers and supporters who made it possible.
            </p>
          </div>

          {/* Closing line, set apart */}
          <div className="border-t border-navy-950/15 pt-12 text-center">
            <p className="font-display text-2xl font-medium leading-snug text-navy-950 [text-wrap:balance] sm:text-3xl">
              If our blue tree encourages even one person to reach out, to
              start a conversation, or to seek help, then it has fulfilled its
              purpose.
            </p>
          </div>

          {/* Support box */}
          <div className="border border-navy-950/15 bg-white p-8 sm:p-10">
            <h2 className={h2}>
              If you or someone you know needs support
            </h2>
            <p className="mt-4 max-w-[62ch] leading-relaxed text-navy-900/75">
              Free, confidential help is available at any hour.
            </p>
            <div className="mt-8 grid grid-cols-1 gap-8 sm:grid-cols-2">
              <div>
                <p className="text-sm font-medium text-navy-900/70">Lifeline</p>
                <a href="tel:131114" className={phoneLink}>
                  <Phone size={18} strokeWidth={1.5} aria-hidden="true" />
                  13 11 14
                </a>
                <p className="mt-1">
                  <a
                    href="https://www.lifeline.org.au"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={supportLink}
                  >
                    lifeline.org.au
                    <span className="sr-only"> (opens in a new tab)</span>
                  </a>
                </p>
              </div>
              <div>
                <p className="text-sm font-medium text-navy-900/70">Beyond Blue</p>
                <a href="tel:1300224636" className={phoneLink}>
                  <Phone size={18} strokeWidth={1.5} aria-hidden="true" />
                  1300 22 4636
                </a>
                <p className="mt-1">
                  <a
                    href="https://www.beyondblue.org.au"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={supportLink}
                  >
                    beyondblue.org.au
                    <span className="sr-only"> (opens in a new tab)</span>
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
