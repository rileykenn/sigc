'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import Image from 'next/image';

export default function Gallery() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [60, -60]);
  const y2 = useTransform(scrollYProgress, [0, 1], [-40, 40]);

  return (
    <section ref={sectionRef} className="relative py-24 sm:py-32 bg-fairway-900 overflow-hidden">
      {/* Background Texture */}
      <div className="absolute inset-0 grass-texture opacity-20" />
      <div className="absolute inset-0 bg-gradient-to-b from-fairway-900 via-fairway-900/95 to-fairway-950" />

      <div className="relative mx-auto max-w-7xl px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block rounded-full bg-fairway-800 px-4 py-1.5 text-sm font-semibold text-fairway-300 mb-4">
            The Course
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold text-white tracking-tight">
            A Natural Playground
          </h2>
          <p className="mt-4 text-lg text-fairway-300/80 max-w-2xl mx-auto">
            Surrounded by native bushland where wallabies and kangaroos keep a close eye on the golfers
          </p>
        </motion.div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {/* Image 1 — Tee Shot */}
          <motion.div
            style={{ y: y1 }}
            className="relative rounded-2xl overflow-hidden shadow-2xl shadow-black/30 aspect-[16/10]"
          >
            <Image
              src="/media/tee.webp"
              alt="Golfer teeing off at Sussex Inlet Golf Club with Australian flag in background"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover transition-transform duration-700 hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
            <div className="absolute bottom-4 left-4 right-4">
              <span className="inline-block rounded-full bg-white/15 backdrop-blur-md px-3 py-1.5 text-xs font-medium text-white border border-white/10">
                10th Tee · Par 4
              </span>
            </div>
          </motion.div>

          {/* Image 2 — Putting Green */}
          <motion.div
            style={{ y: y2 }}
            className="relative rounded-2xl overflow-hidden shadow-2xl shadow-black/30 aspect-[16/10]"
          >
            <Image
              src="/media/putting.webp"
              alt="Family putting on the green at Sussex Inlet Golf Club"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover transition-transform duration-700 hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
            <div className="absolute bottom-4 left-4 right-4">
              <span className="inline-block rounded-full bg-white/15 backdrop-blur-md px-3 py-1.5 text-xs font-medium text-white border border-white/10">
                Family Friendly · All Welcome
              </span>
            </div>
          </motion.div>
        </div>

        {/* Stats Row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto"
        >
          {[
            { value: '9', label: 'Holes' },
            { value: '67', label: 'Course Rating' },
            { value: '3', label: 'Comp Days/Week' },
            { value: '1', label: 'Unforgettable Setting' },
          ].map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 + i * 0.1 }}
              className="text-center"
            >
              <div className="text-3xl sm:text-4xl font-bold text-gold-400">
                {stat.value}
              </div>
              <div className="mt-1 text-sm text-fairway-300/70">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
