'use client';

import { motion } from 'framer-motion';
import { reviews } from '@/data/reviews';

export default function GoogleReviews() {
  const top = reviews.slice(0, 3);

  return (
    <section className="py-28 bg-cream">
      <div className="mx-auto max-w-4xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="text-gold-500 uppercase tracking-[0.25em] text-xs font-medium mb-5">What Golfers Say</p>
          <h2 className="font-serif italic text-4xl sm:text-5xl text-green-900">
            Reviews
          </h2>
        </motion.div>

        {/* Featured quote */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1, duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="font-serif italic text-2xl sm:text-3xl text-green-900 leading-snug max-w-2xl mx-auto">
            &ldquo;{top[0].text}&rdquo;
          </p>
          <div className="editorial-divider mx-auto mt-8 mb-4" />
          <p className="text-sm font-semibold text-green-800 uppercase tracking-wider">{top[0].name}</p>
          <p className="text-xs text-gray-400 mt-1">Google Review</p>
        </motion.div>

        {/* Two more */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {top.slice(1).map((r, i) => (
            <motion.div
              key={r.name}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 + i * 0.1, duration: 0.6 }}
              className="text-center"
            >
              <div className="flex justify-center gap-0.5 text-gold-500 text-sm mb-4">
                {[...Array(r.rating)].map((_, j) => <span key={j}>★</span>)}
              </div>
              <p className="font-serif italic text-lg text-green-900 leading-relaxed mb-4">
                &ldquo;{r.text}&rdquo;
              </p>
              <p className="text-xs font-semibold text-green-800 uppercase tracking-wider">{r.name}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
