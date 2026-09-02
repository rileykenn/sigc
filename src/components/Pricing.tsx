import type { GreenFeeRow, CartHireRow } from '@/lib/types';
import { sentenceCase } from '@/lib/rates';

type Rate = { label: string; price: string };

function greenFeeRates(row: GreenFeeRow): Rate[] {
  return [
    { label: 'Members', price: row.members },
    { label: 'Visitors', price: row.visitors },
    { label: 'Junior members', price: row.jr_member },
    { label: 'Junior visitors', price: row.jr_visitor },
  ].filter((r) => r.price);
}

function cartHireRates(row: CartHireRow): Rate[] {
  return [
    { label: 'Members', price: row.members },
    { label: 'Visitors', price: row.visitors },
  ].filter((r) => r.price);
}

// One ruled ledger: a heading, then label and price rows under a hairline.
function RateList({
  title,
  rates,
  headingLevel,
  priceSize,
}: {
  title: string;
  rates: Rate[];
  headingLevel: 'h2' | 'h3';
  priceSize: 'text-3xl' | 'text-2xl';
}) {
  const Heading = headingLevel;
  return (
    <div>
      <Heading className="font-display text-2xl font-semibold text-navy-950">{title}</Heading>
      <ul className="mt-4 border-t border-navy-950/15">
        {rates.map((rate) => (
          <li
            key={rate.label}
            className="flex items-baseline justify-between gap-4 border-b border-navy-950/10 py-4"
          >
            <span className="text-navy-900/80">{rate.label}</span>
            <span className={`font-display ${priceSize} font-semibold tabular-nums text-navy-950`}>
              {rate.price}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

// Server component. The page fetches rates and passes them in.
export default function Pricing({
  greenFees,
  cartHire,
}: {
  greenFees: GreenFeeRow[];
  cartHire: CartHireRow[];
}) {
  return (
    <div>
      {greenFees.length > 0 ? (
        <div className="grid gap-x-12 gap-y-10 sm:grid-cols-2">
          {greenFees.map((row) => (
            <RateList
              key={row.id}
              title={sentenceCase(row.type)}
              rates={greenFeeRates(row)}
              headingLevel="h2"
              priceSize="text-3xl"
            />
          ))}
        </div>
      ) : (
        <p className="max-w-[62ch] leading-relaxed text-navy-900/75">
          Green fees are not listed at the moment. Ask at the pro shop for current rates.
        </p>
      )}

      {cartHire.length > 0 && (
        <div className="mt-16">
          <h2 className="font-display text-2xl font-semibold text-navy-950">Cart hire</h2>
          <div className="mt-6 grid gap-x-12 gap-y-10 sm:grid-cols-2">
            {cartHire.map((row) => (
              <RateList
                key={row.id}
                title={sentenceCase(row.type)}
                rates={cartHireRates(row)}
                headingLevel="h3"
                priceSize="text-2xl"
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
