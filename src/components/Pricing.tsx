'use client';

import { motion } from 'framer-motion';

type Rate = { label: string; price: string };

const nineHoles: Rate[] = [
  { label: 'Members', price: '$10' },
  { label: 'Visitors', price: '$29' },
  { label: 'Junior members', price: '$5' },
  { label: 'Junior visitors', price: '$15' },
];

const eighteenHoles: Rate[] = [
  { label: 'Members', price: '$10' },
  { label: 'Visitors', price: '$40' },
  { label: 'Junior members', price: '$5' },
  { label: 'Junior visitors', price: '$15' },
];

const cartHire: { title: string; rates: Rate[] }[] = [
  {
    title: '9 holes',
    rates: [
      { label: 'Members', price: '$15' },
      { label: 'Visitors', price: '$35' },
    ],
  },
  {
    title: '18 holes',
    rates: [
      { label: 'Members', price: '$24' },
      { label: 'Visitors', price: '$45' },
    ],
  },
];

function RateList({ title, rates, delay = 0 }: { title: string; rates: Rate[]; delay?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.6, delay, ease: 'easeOut' }}
    >
      <h3 className="font-display text-2xl font-semibold text-navy-950">{title}</h3>
      <ul className="mt-4 border-t border-navy-200/70">
        {rates.map((rate) => (
          <li
            key={rate.label}
            className="flex items-baseline justify-between gap-4 border-b border-navy-200/70 py-4"
          >
            <span className="text-navy-900/70">{rate.label}</span>
            <span className="font-display text-3xl font-semibold tabular-nums text-navy-950">
              {rate.price}
            </span>
          </li>
        ))}
      </ul>
    </motion.div>
  );
}

export default function Pricing() {
  return (
    <section id="pricing" className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-4xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          <h2 className="font-display text-4xl font-semibold tracking-tight text-navy-950 [text-wrap:balance] sm:text-5xl lg:text-6xl">
            Green fees
          </h2>
          <p className="mt-4 max-w-[62ch] leading-relaxed text-navy-900/70">
            Pay at the pro shop on your way to the first tee.
          </p>
        </motion.div>

        <div className="mt-12 grid gap-x-16 gap-y-10 sm:mt-16 sm:grid-cols-2">
          <RateList title="9 holes" rates={nineHoles} />
          <RateList title="18 holes" rates={eighteenHoles} delay={0.1} />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="mt-16 sm:mt-20"
        >
          <h3 className="font-display text-2xl font-semibold text-navy-950">Cart hire</h3>
          <div className="mt-6 grid gap-x-16 gap-y-8 sm:grid-cols-2">
            {cartHire.map((group) => (
              <div key={group.title}>
                <h4 className="text-sm font-medium text-navy-700">{group.title}</h4>
                <ul className="mt-2 border-t border-navy-200/70">
                  {group.rates.map((rate) => (
                    <li
                      key={rate.label}
                      className="flex items-baseline justify-between gap-4 border-b border-navy-200/70 py-3"
                    >
                      <span className="text-sm text-navy-900/70">{rate.label}</span>
                      <span className="font-display text-2xl font-semibold tabular-nums text-navy-950">
                        {rate.price}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
