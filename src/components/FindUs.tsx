import Link from 'next/link';
import { Wine } from 'lucide-react';

const tertiary =
  'inline-flex min-h-11 cursor-pointer items-center gap-1.5 text-sm font-medium text-navy-900 underline decoration-gold-500 decoration-1 underline-offset-[6px] transition-colors hover:text-navy-950 hover:decoration-2 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-navy-700';

// Same tertiary link at text-lg for the phone and email lines (text-sm swapped, not stacked).
const tertiaryLarge = tertiary.replace('text-sm', 'text-lg');

// Short address block. Full details and the map are on /contact.
export default function FindUs() {
  return (
    <section id="contact" className="bg-sand-100 py-16 sm:py-20">
      <div className="mx-auto max-w-2xl px-6 text-center">
        <h2 className="font-display text-3xl font-semibold tracking-tight text-navy-950 sm:text-4xl">
          Find us
        </h2>
        <address className="mt-8 font-display text-2xl not-italic leading-snug text-navy-950">
          7 Golfcourse Way
          <br />
          Sussex Inlet NSW 2540
        </address>
        <div className="mt-6 flex flex-col items-center gap-2 text-lg">
          <a href="tel:+61244412259" className={`${tertiaryLarge} tabular-nums`}>
            (02) 4441 2259
          </a>
          <a href="mailto:sussexgolf@shoalhaven.net.au" className={tertiaryLarge}>
            sussexgolf@shoalhaven.net.au
          </a>
        </div>
        <p className="mx-auto mt-6 max-w-[52ch] leading-relaxed text-navy-900/75">
          Course and clubhouse open seven days. Sunday is competition day, with member groups
          midweek, so call ahead to check course availability.
        </p>
        <p className="mx-auto mt-6 flex max-w-[52ch] items-start justify-center gap-2 text-sm leading-relaxed text-navy-900/70">
          <Wine size={16} strokeWidth={1.5} aria-hidden="true" className="mt-1 shrink-0" />
          <span>
            Licensed premises. All alcohol consumed on the course must be purchased from the pro
            shop, and no alcohol may be taken off the premises.
          </span>
        </p>
        <div className="mt-8">
          <Link href="/contact" className={tertiary}>
            Directions and map
          </Link>
        </div>
      </div>
    </section>
  );
}
