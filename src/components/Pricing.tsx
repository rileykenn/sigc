'use client';

import { motion } from 'framer-motion';

const rates = [
  { category: 'Members — 9 Holes', price: '$10' },
  { category: 'Members — 18 Holes', price: '$10' },
  { category: 'Visitors — 9 Holes', price: '$29' },
  { category: 'Visitors — 18 Holes', price: '$40' },
  { category: 'Juniors', price: 'from $5' },
];

export default function Pricing() {
  return (
    <section className="py-28 bg-white">
      <div className="mx-auto max-w-lg px-6">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-14"
        >
          <p className="text-gold-500 uppercase tracking-[0.25em] text-xs font-medium mb-5">Green Fees</p>
          <h2 className="font-serif italic text-4xl text-green-900">
            Rates
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1, duration: 0.6 }}
        >
          {rates.map((r, i) => (
            <div
              key={r.category}
              className={`flex items-center justify-between py-5 ${
                i < rates.length - 1 ? 'border-b border-sand-200' : ''
              }`}
            >
              <span className="text-green-900 text-sm">{r.category}</span>
              <span className="text-green-900 font-serif text-lg">{r.price}</span>
            </div>
          ))}
        </motion.div>

        <p className="text-center text-xs text-gray-400 mt-8">
          Call <a href="tel:0244412259" className="text-gold-500">(02) 4441 2259</a> to book
        </p>
      </div>
    </section>
  );
}
