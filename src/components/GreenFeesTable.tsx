import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { sentenceCase } from '@/lib/rates';
import type { GreenFeeRow } from '@/lib/types';

const tertiary =
  'inline-flex min-h-11 cursor-pointer items-center gap-1.5 text-sm font-medium text-navy-900 underline decoration-gold-500 decoration-1 underline-offset-[6px] transition-colors hover:text-navy-950 hover:decoration-2 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-navy-700';

const price =
  'py-4 text-right font-display text-2xl font-semibold tabular-nums text-navy-950 sm:text-3xl';

// Members and visitors only; juniors and cart hire live on /green-fees.
export default function GreenFeesTable({ greenFees }: { greenFees: GreenFeeRow[] }) {
  return (
    <section id="pricing" className="bg-sand-50 py-16 sm:py-20">
      <div className="mx-auto max-w-3xl px-6">
        <h2 className="font-display text-3xl font-semibold tracking-tight text-navy-950 sm:text-4xl">
          Green fees
        </h2>
        <p className="mt-3 max-w-[62ch] leading-relaxed text-navy-900/75">
          Pay at the pro shop on your way to the first tee.
        </p>
        <table className="mt-8 w-full text-left">
          <thead>
            <tr className="border-b border-navy-950/60 text-sm font-medium text-navy-900/70">
              <th scope="col" className="py-3 font-medium">
                <span className="sr-only">Round</span>
              </th>
              <th scope="col" className="py-3 text-right font-medium">
                Members
              </th>
              <th scope="col" className="py-3 text-right font-medium">
                Visitors
              </th>
            </tr>
          </thead>
          <tbody>
            {greenFees.map((row) => (
              <tr key={row.id} className="border-b border-navy-950/10">
                <th scope="row" className="py-4 font-normal text-navy-900/80">
                  {sentenceCase(row.type)}
                </th>
                <td className={price}>{row.members}</td>
                <td className={price}>{row.visitors}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="mt-8">
          <Link href="/green-fees" className={tertiary}>
            All rates, juniors and cart hire
            <ArrowRight size={16} strokeWidth={1.5} aria-hidden="true" />
          </Link>
        </div>
      </div>
    </section>
  );
}
