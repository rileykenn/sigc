'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import Image from 'next/image';

const galleryImages = [
  {
    src: '/images/drone/DJI_0112.webp',
    alt: 'Aerial view of Sussex Inlet Golf Club course',
    label: 'Aerial View',
  },
  {
    src: '/images/drone/DJI_0127.webp',
    alt: 'Aerial view of Sussex Inlet Golf Club bushland setting',
    label: 'Bushland Setting',
  },
  {
    src: '/images/morewildlife.webp',
    alt: 'Native wildlife on the golf course',
    label: 'Wildlife on Course',
  },
  {
    src: '/images/peopleplayinggolf.webp',
    alt: 'People playing golf at Sussex Inlet Golf Club',
    label: 'Social Golf',
  },
];

export default function Gallery() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [60, -60]);
  const y2 = useTransform(scrollYProgress, [0, 1], [-40, 40]);

  return (
    <section ref={sectionRef} className="relative py-24 sm:py-32 bg-navy-900 overflow-hidden">
      {/* Background Texture */}
      <div className="absolute inset-0 grass-texture opacity-20" />
      <div className="absolute inset-0 bg-gradient-to-b from-navy-900 via-navy-900/95 to-navy-950" />

      <div className="relative mx-auto max-w-7xl px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block rounded-full bg-navy-800 px-4 py-1.5 text-sm font-semibold text-navy-300 mb-4">
            The Course
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold text-white tracking-tight">
            A Natural Playground
          </h2>
          <p className="mt-4 text-lg text-navy-300/80 max-w-2xl mx-auto">
            Surrounded by native bushland where wallabies and kangaroos keep a close eye on the golfers
          </p>
        </motion.div>

        {/* Gallery Grid — 4 images */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {galleryImages.map((img, i) => (
            <motion.div
              key={img.label}
              style={{ y: i % 2 === 0 ? y1 : y2 }}
              className="relative rounded-2xl overflow-hidden shadow-2xl shadow-black/30 aspect-[16/10]"
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover transition-transform duration-700 hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
              <div className="absolute bottom-4 left-4 right-4">
                <span className="inline-block rounded-full bg-white/15 backdrop-blur-md px-3 py-1.5 text-xs font-medium text-white border border-white/10">
                  {img.label}
                </span>
              </div>
            </motion.div>
          ))}
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
            { value: 'Par 64', label: 'Course Par' },
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
              <div className="mt-1 text-sm text-navy-300/70">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
