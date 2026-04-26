'use client';

import { motion } from 'framer-motion';

const greenFees = {
  title: 'Green Fees',
  subtitle: 'Play the course',
  headers: ['', 'Members', 'Visitors', 'Jr. Member', 'Jr. Visitor'],
  rows: [
    { label: '9 Holes', values: ['$10', '$29', '$5', '$15'] },
    { label: '18 Holes', values: ['$10', '$40', '$5', '$15'] },
  ],
};

const cartHire = {
  title: 'Cart Hire',
  subtitle: 'Motorised carts available',
  headers: ['', 'Members', 'Visitors'],
  rows: [
    { label: '9 Holes', values: ['$15', '$35'] },
    { label: '18 Holes', values: ['$24', '$45'] },
  ],
};

function PricingCard({
  data,
  delay,
}: {
  data: typeof greenFees;
  delay: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.6, delay }}
      className="relative rounded-2xl bg-white p-1 shadow-xl shadow-fairway-900/5 ring-1 ring-fairway-100 overflow-hidden"
    >
      {/* Header */}
      <div className="rounded-xl bg-gradient-to-br from-fairway-600 to-fairway-800 p-6 text-white">
        <h3 className="text-2xl font-bold">{data.title}</h3>
        <p className="mt-1 text-fairway-200 text-sm">{data.subtitle}</p>
      </div>

      {/* Table */}
      <div className="p-5">
        <table className="w-full">
          <thead>
            <tr>
              {data.headers.map((header, i) => (
                <th
                  key={i}
                  className={`pb-3 text-xs font-semibold uppercase tracking-wider ${
                    i === 0 ? 'text-left text-gray-400' : 'text-center text-fairway-700'
                  }`}
                >
                  {header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {data.rows.map((row, rowIndex) => (
              <motion.tr
                key={row.label}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: delay + 0.2 + rowIndex * 0.1 }}
                className={`border-t border-fairway-50 ${
                  rowIndex === data.rows.length - 1
                    ? 'bg-gradient-to-r from-gold-400/5 to-gold-400/10'
                    : ''
                }`}
              >
                <td className="py-4 text-sm font-semibold text-fairway-900">
                  {row.label}
                  {rowIndex === data.rows.length - 1 && (
                    <span className="ml-2 inline-flex items-center rounded-full bg-gold-400/20 px-2 py-0.5 text-[10px] font-bold uppercase text-gold-600">
                      Best Value
                    </span>
                  )}
                </td>
                {row.values.map((value, i) => (
                  <td
                    key={i}
                    className="py-4 text-center text-sm font-medium text-gray-700"
                  >
                    {value}
                  </td>
                ))}
              </motion.tr>
            ))}
          </tbody>
        </table>
      </div>
    </motion.div>
  );
}

export default function Pricing() {
  return (
    <section id="pricing" className="relative py-24 sm:py-32 bg-sand-50">
      {/* Subtle Divider */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-fairway-200 to-transparent" />

      <div className="mx-auto max-w-7xl px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block rounded-full bg-gold-400/20 px-4 py-1.5 text-sm font-semibold text-gold-600 mb-4">
            Rates
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold text-fairway-900 tracking-tight">
            Affordable for Everyone
          </h2>
          <p className="mt-4 text-lg text-gray-500 max-w-2xl mx-auto">
            Members and visitors welcome — great value golf in a stunning setting
          </p>
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <PricingCard data={greenFees} delay={0} />
          <PricingCard data={cartHire} delay={0.15} />
        </div>

        {/* Call-to-book note */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-10 text-center text-sm text-gray-400"
        >
          Please ring the Club on{' '}
          <a href="tel:+61244412259" className="text-fairway-600 font-medium hover:underline underline-offset-4">
            (02) 4441 2259
          </a>{' '}
          to make a booking and check course availability.
        </motion.p>
      </div>
    </section>
  );
}
