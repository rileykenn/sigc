'use client';

import { motion } from 'framer-motion';
import { Star } from 'lucide-react';
import { reviews, averageRating, totalReviews } from '@/data/reviews';

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5">
      {[1, 2, 3, 4, 5].map((s) => (
        <Star
          key={s}
          size={14}
          className={s <= rating ? 'fill-gold-400 text-gold-400' : 'text-gray-200'}
        />
      ))}
    </div>
  );
}

export default function GoogleReviews() {
  return (
    <section id="reviews" className="relative py-24 sm:py-32 bg-sand-50 overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-fairway-200 to-transparent" />

      <div className="mx-auto max-w-7xl px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="inline-block rounded-full bg-gold-400/20 px-4 py-1.5 text-sm font-semibold text-gold-600 mb-4">
            Reviews
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold text-fairway-900 tracking-tight">
            What Golfers Say
          </h2>

          {/* Average Rating */}
          <div className="mt-6 inline-flex items-center gap-3 rounded-full bg-white px-6 py-3 shadow-sm ring-1 ring-gray-100">
            <div className="flex gap-0.5">
              {[1, 2, 3, 4, 5].map((s) => (
                <Star
                  key={s}
                  size={18}
                  className={s <= Math.round(averageRating) ? 'fill-gold-400 text-gold-400' : 'text-gray-200'}
                />
              ))}
            </div>
            <span className="text-lg font-bold text-fairway-900">{averageRating}</span>
            <span className="text-sm text-gray-400">·</span>
            <span className="text-sm text-gray-500">{totalReviews} reviews on</span>
            <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none">
              <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 01-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" fill="#4285F4" />
              <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
              <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
              <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
            </svg>
          </div>
        </motion.div>

        {/* Review Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {reviews.map((review, i) => (
            <motion.div
              key={review.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-30px' }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-gray-100 transition-all hover:shadow-lg hover:ring-fairway-200"
            >
              {/* Avatar + Name */}
              <div className="flex items-center gap-3 mb-3">
                <div className="flex items-center justify-center w-10 h-10 rounded-full bg-fairway-100 text-fairway-700 font-bold text-sm">
                  {review.avatar}
                </div>
                <div>
                  <div className="text-sm font-semibold text-gray-900">{review.name}</div>
                  <div className="text-xs text-gray-400">{review.date}</div>
                </div>
              </div>

              {/* Stars */}
              <div className="mb-3">
                <StarRating rating={review.rating} />
              </div>

              {/* Text */}
              <p className="text-sm text-gray-600 leading-relaxed">
                {review.text}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
