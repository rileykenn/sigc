'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import Image from 'next/image';
import { MapPin, TreePine } from 'lucide-react';
import WeatherWidget from '@/components/WeatherWidget';

export default function Hero() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end start'],
  });

  const imageY = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const image2Y = useTransform(scrollYProgress, [0, 1], [0, 80]);
  const floatY = useTransform(scrollYProgress, [0, 1], [0, -60]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  return (
    <section
      ref={sectionRef}
      id="hero"
      className="relative min-h-[100dvh] bg-white overflow-hidden pt-28 sm:pt-32 lg:pt-0 lg:flex lg:items-center"
    >
      {/* ===== ANIMATED BACKGROUND ELEMENTS ===== */}
      {/* Large gradient orb - top right */}
      <motion.div
        animate={{
          scale: [1, 1.15, 1],
          x: [0, 20, 0],
          y: [0, -15, 0],
        }}
        transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute -top-32 -right-32 w-[600px] h-[600px] rounded-full bg-gradient-to-br from-navy-100/60 via-navy-200/30 to-transparent blur-3xl"
      />
      {/* Medium orb - bottom left */}
      <motion.div
        animate={{
          scale: [1, 1.1, 1],
          x: [0, -10, 0],
          y: [0, 20, 0],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
        className="absolute -bottom-20 -left-20 w-[400px] h-[400px] rounded-full bg-gradient-to-tr from-gold-300/20 via-gold-400/10 to-transparent blur-3xl"
      />
      {/* Small accent orb */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut', delay: 4 }}
        className="absolute top-1/3 left-1/4 w-[200px] h-[200px] rounded-full bg-navy-300/10 blur-3xl hidden lg:block"
      />

      {/* ===== TOPOGRAPHIC LINE PATTERN ===== */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 50 Q25 30 50 50 Q75 70 100 50' fill='none' stroke='%231e3a5f' stroke-width='1'/%3E%3Cpath d='M0 30 Q25 10 50 30 Q75 50 100 30' fill='none' stroke='%231e3a5f' stroke-width='0.5'/%3E%3Cpath d='M0 70 Q25 50 50 70 Q75 90 100 70' fill='none' stroke='%231e3a5f' stroke-width='0.5'/%3E%3C/svg%3E")`,
        backgroundSize: '200px 200px',
      }} />

      {/* ===== MAIN CONTENT GRID ===== */}
      <motion.div
        style={{ opacity: contentOpacity }}
        className="relative z-10 mx-auto max-w-7xl px-6 w-full lg:grid lg:grid-cols-12 lg:gap-8 lg:items-center lg:min-h-[100dvh]"
      >
        {/* ===== LEFT: TEXT CONTENT ===== */}
        <div className="lg:col-span-6 xl:col-span-5">
          {/* Location Badge */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="inline-flex items-center gap-2 rounded-full bg-navy-50 border border-navy-200 px-4 py-2 mb-6"
          >
            <MapPin size={14} className="text-navy-600" />
            <span className="text-xs font-semibold text-navy-700 uppercase tracking-wider">
              Sussex Inlet, NSW
            </span>
          </motion.div>

          {/* Headline */}
          <div className="overflow-hidden">
            <motion.h1
              initial={{ y: '100%' }}
              animate={{ y: 0 }}
              transition={{ delay: 0.3, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="text-[3.2rem] sm:text-6xl lg:text-7xl xl:text-[5.5rem] font-extrabold text-navy-950 tracking-[-0.03em] leading-[0.9]"
            >
              Where
            </motion.h1>
          </div>
          <div className="overflow-hidden">
            <motion.h1
              initial={{ y: '100%' }}
              animate={{ y: 0 }}
              transition={{ delay: 0.4, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="text-[3.2rem] sm:text-6xl lg:text-7xl xl:text-[5.5rem] font-extrabold tracking-[-0.03em] leading-[0.9]"
            >
              <span className="text-navy-600">Nature</span>
            </motion.h1>
          </div>
          <div className="overflow-hidden">
            <motion.h1
              initial={{ y: '100%' }}
              animate={{ y: 0 }}
              transition={{ delay: 0.5, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="text-[3.2rem] sm:text-6xl lg:text-7xl xl:text-[5.5rem] font-extrabold text-navy-950 tracking-[-0.03em] leading-[0.9]"
            >
              Meets the
            </motion.h1>
          </div>
          <div className="overflow-hidden mb-6">
            <motion.h1
              initial={{ y: '100%' }}
              animate={{ y: 0 }}
              transition={{ delay: 0.6, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="text-[3.2rem] sm:text-6xl lg:text-7xl xl:text-[5.5rem] font-extrabold tracking-[-0.03em] leading-[0.9]"
            >
              <span className="text-navy-800">
                Fairway.
              </span>
            </motion.h1>
          </div>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="text-lg sm:text-xl text-gray-500 font-light max-w-md leading-relaxed mb-8"
          >
            9 holes of pure Australian bushland golf.
            <br className="hidden sm:block" />
            Friendly club. Visitors always welcome.
          </motion.p>

          {/* CTA Row */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.6 }}
            className="flex flex-col sm:flex-row gap-3 mb-10 lg:mb-0"
          >
            <a
              href="#contact"
              className="btn-shimmer group inline-flex items-center justify-center gap-2 rounded-full bg-navy-600 px-7 py-3.5 text-base font-semibold text-white shadow-xl shadow-navy-600/20 transition-all hover:bg-navy-700 hover:shadow-2xl hover:shadow-navy-600/30 hover:scale-[1.02] active:scale-[0.98]"
            >
              Book a Round
              <span className="inline-block transition-transform group-hover:translate-x-1">→</span>
            </a>
            <a
              href="#features"
              className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-navy-200 px-7 py-3.5 text-base font-semibold text-navy-800 transition-all hover:border-navy-400 hover:bg-navy-50"
            >
              Explore the Course
            </a>
          </motion.div>
        </div>

        {/* ===== RIGHT: EDITORIAL IMAGE COMPOSITION ===== */}
        <div className="lg:col-span-6 xl:col-span-7 relative mt-10 lg:mt-0">
          <div className="relative h-[420px] sm:h-[500px] lg:h-[600px] xl:h-[650px]">

            {/* Primary Image — large, offset */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, x: 40 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              transition={{ delay: 0.5, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              style={{ y: imageY }}
              className="absolute top-0 right-0 w-[85%] sm:w-[80%] h-[75%] rounded-3xl overflow-hidden shadow-2xl shadow-navy-900/15 ring-1 ring-black/5"
            >
              <Image
                src="/images/drone/DJI_0120.webp"
                alt="Aerial view of Sussex Inlet Golf Club course"
                fill
                sizes="(max-width: 768px) 85vw, 45vw"
                className="object-cover"
                priority
              />
              {/* Gradient overlay on image */}
              <div className="absolute inset-0 bg-gradient-to-t from-navy-950/20 to-transparent" />
            </motion.div>

            {/* Secondary Image — smaller, overlapping bottom-left */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 40 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              style={{ y: image2Y }}
              className="absolute bottom-0 left-0 w-[55%] sm:w-[50%] h-[50%] rounded-2xl overflow-hidden shadow-2xl shadow-navy-900/20 ring-1 ring-black/5 z-10"
            >
              <Image
                src="/images/golfplaying.webp"
                alt="People playing golf at Sussex Inlet"
                fill
                sizes="(max-width: 768px) 55vw, 30vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-950/20 to-transparent" />
            </motion.div>

            {/* ===== FLOATING STAT CARDS ===== */}

            {/* Wildlife Card — floats bottom-right */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.3, duration: 0.5, type: 'spring', stiffness: 200 }}
              className="absolute bottom-[15%] right-[-2%] sm:right-[2%] z-20 glass-badge rounded-2xl px-5 py-4 shadow-xl"
            >
              <div className="flex items-center gap-3">
                <div className="rounded-xl bg-navy-100 p-2.5">
                  <TreePine size={20} className="text-navy-600" />
                </div>
                <div>
                  <div className="text-sm font-bold text-navy-900">Native Bushland</div>
                  <div className="text-[11px] font-medium text-gray-400 uppercase tracking-wider">Wildlife on Course</div>
                </div>
              </div>
            </motion.div>

            {/* Weather Widget — bottom center */}
            <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 z-20 hidden lg:block">
              <WeatherWidget />
            </div>

            {/* Decorative accent — navy dot grid */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.5, duration: 0.8 }}
              className="absolute -bottom-12 right-[35%] w-24 h-24 hidden lg:block"
              style={{
                backgroundImage: 'radial-gradient(circle, #1e3a5f 1.5px, transparent 1.5px)',
                backgroundSize: '12px 12px',
                opacity: 0.2,
              }}
            />

            {/* Decorative accent — gold ring */}
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 0.15, scale: 1 }}
              transition={{ delay: 1.6, duration: 1, ease: 'easeOut' }}
              className="absolute -top-6 right-[15%] w-32 h-32 rounded-full border-[3px] border-gold-400 hidden lg:block"
            />
          </div>
        </div>
      </motion.div>

      {/* ===== BOTTOM ACCENT LINE ===== */}
      <div className="absolute bottom-0 left-0 right-0 z-10 h-px bg-gradient-to-r from-transparent via-navy-200 to-transparent" />
    </section>
  );
}
