'use client';

import { motion } from 'framer-motion';
import { Star } from 'lucide-react';
import { reviews, averageRating, totalReviews } from '@/data/reviews';

// Quotes trimmed for length. Full review text lives in src/data/reviews.ts.
const trimmedQuotes: Record<string, string> = {
  'David M.': 'Had kangaroos watching us putt on the 5th. Greens are in great condition.',
  'Sandra K.': 'Perfect for a casual round with mates. The green fees are very reasonable.',
  'Michael B.': 'Played here while on holiday at the inlet. Great little course with a few tricky holes.',
  'Helen R.': 'We joined the Chook Run competition as visitors and had the best time. Beautiful natural setting.',
};

export default function GoogleReviews() {
  const featured = reviews.filter((review) => review.name in trimmedQuotes);
  const [lead, ...rest] = featured;

  return (
    <section id="reviews" className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-semibold text-navy-950 tracking-tight [text-wrap:balance]">
            Word gets around
          </h2>
          <div className="mt-5 flex items-center gap-3">
            <div className="flex gap-0.5" aria-hidden="true">
              {[1, 2, 3, 4, 5].map((s) => (
                <Star
                  key={s}
                  size={16}
                  strokeWidth={1.5}
                  className={
                    s <= Math.round(averageRating) ? 'fill-gold-400 text-gold-400' : 'text-navy-200'
                  }
                />
              ))}
            </div>
            <p className="text-sm text-navy-900/70">
              <span className="font-medium text-navy-900 tabular-nums">{averageRating}</span> from{' '}
              <span className="tabular-nums">{totalReviews}</span> Google reviews
            </p>
          </div>
        </motion.div>

        <div className="mt-14 grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
          {/* Lead quote */}
          {lead && (
            <motion.figure
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
              className="lg:col-span-7"
            >
              <div className="h-px w-12 bg-gold-500" />
              <blockquote className="mt-8 font-display text-2xl sm:text-3xl leading-snug text-navy-950 [text-wrap:balance]">
                &ldquo;{trimmedQuotes[lead.name]}&rdquo;
              </blockquote>
              <figcaption className="mt-6 text-sm">
                <span className="font-medium text-navy-900">{lead.name}</span>
                <span className="text-navy-900/60">, Google review</span>
              </figcaption>
            </motion.figure>
          )}

          {/* Quote stack */}
          <div className="lg:col-span-5">
            {rest.map((review, i) => (
              <motion.figure
                key={review.name}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.5, delay: i * 0.1, ease: 'easeOut' }}
                className={`py-6 ${i > 0 ? 'border-t border-navy-900/10' : 'lg:pt-0'}`}
              >
                <blockquote className="text-navy-900/70 leading-relaxed">
                  &ldquo;{trimmedQuotes[review.name]}&rdquo;
                </blockquote>
                <figcaption className="mt-3 text-sm">
                  <span className="font-medium text-navy-900">{review.name}</span>
                  <span className="text-navy-900/60">, Google review</span>
                </figcaption>
              </motion.figure>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
