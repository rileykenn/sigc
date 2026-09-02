import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import PageHeader from '@/components/PageHeader';
import Pricing from '@/components/Pricing';
import { getRates } from '@/lib/rates';
import { membershipTypes } from '@/data/membership';

// Rates and events are managed in /admin (Supabase); refresh the static page every 5 minutes.
export const revalidate = 300;

export const metadata: Metadata = {
  title: 'Green fees | Sussex Inlet Golf Club',
  description:
    'Green fees for members, visitors and juniors at Sussex Inlet Golf Club, plus cart hire. Pay at the pro shop on your way to the first tee.',
};

const primaryOnLight =
  'inline-flex h-11 shrink-0 cursor-pointer items-center justify-center gap-2 whitespace-nowrap px-6 text-sm font-semibold transition-colors duration-200 active:translate-y-px focus-visible:outline-2 focus-visible:outline-offset-2 bg-navy-950 text-sand-50 hover:bg-navy-800 focus-visible:outline-navy-700';

const tertiaryOnLight =
  'inline-flex min-h-11 cursor-pointer items-center gap-1.5 text-sm font-medium text-navy-900 underline decoration-gold-500 decoration-1 underline-offset-[6px] transition-colors hover:text-navy-950 hover:decoration-2 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-navy-700';

// "$50/yr" reads as "$50 a year" in prose.
function yearly(price: string): string {
  return `${price.replace(/\s*\/\s*yr$/i, '')} a year`;
}

export default async function GreenFeesPage() {
  const { greenFees, cartHire } = await getRates();

  const nine = greenFees.find((r) => /^9\b/.test(r.type.trim()));
  const eighteen = greenFees.find((r) => /^18\b/.test(r.type.trim()));
  const social = membershipTypes.find((m) => m.id === 'social');
  const full = membershipTypes.find((m) => m.id === 'full');
  const showMembershipNote = Boolean(nine?.members && eighteen?.members && social && full);

  return (
    <>
      <PageHeader
        title="Green fees"
        intro="Pay at the pro shop on your way to the first tee. Clubs and carts are available for hire."
      />

      <section className="bg-white py-16 sm:py-24">
        <div className="mx-auto grid max-w-6xl gap-12 px-6 lg:grid-cols-12">
          <div className="lg:col-span-8">
            <Pricing greenFees={greenFees} cartHire={cartHire} />

            <div className="mt-12 flex flex-wrap items-center gap-x-8 gap-y-4 border-t border-navy-950/15 pt-8">
              <a href="tel:+61244412259" className={primaryOnLight}>
                Book a round
              </a>
              <Link href="/membership" className={tertiaryOnLight}>
                Membership
                <ArrowRight size={16} strokeWidth={1.5} aria-hidden="true" />
              </Link>
            </div>
          </div>

          <aside className="lg:col-span-4 lg:border-l lg:border-navy-950/15 lg:pl-10">
            <h2 className="font-display text-2xl font-semibold text-navy-950">Good to know</h2>
            <ul className="mt-4 space-y-4 text-sm leading-relaxed text-navy-900/75">
              <li>
                Carts, buggies and club sets are for hire from the pro shop, so there is no need to
                bring your own.
              </li>
              <li>
                Sunday is competition day, with member groups midweek. Call ahead to check course
                availability.
              </li>
              <li>
                Sussex Inlet Golf Club holds a liquor licence. All alcohol consumed on the course
                must be purchased from the pro shop, and no alcohol may be taken off the premises.
              </li>
              {showMembershipNote && nine && eighteen && social && full && (
                <li>
                  Members pay {nine.members} for nine holes and {eighteen.members} for eighteen.
                  Membership starts at {yearly(social.price)} for social members and{' '}
                  {yearly(full.price)} for full playing rights.
                </li>
              )}
            </ul>
          </aside>
        </div>
      </section>
    </>
  );
}
