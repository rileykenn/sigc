'use client';

import { motion } from 'framer-motion';

export default function Welcome() {
  return (
    <section className="bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-3xl px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          <h2 className="font-display text-4xl font-semibold tracking-tight text-navy-950 [text-wrap:balance] sm:text-5xl">
            Welcome to Sussex Inlet Golf Club
          </h2>
          <p className="mx-auto mt-5 max-w-[62ch] leading-relaxed text-navy-900/70">
            Sussex Inlet Golf Club is the place to go where members, locals and visitors enjoy a
            relaxed, fun golfing experience with friendly hospitality on a beautiful but
            challenging course.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
