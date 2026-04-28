'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <Image
        src="/media/tee.webp"
        alt="Sussex Inlet Golf Club course"
        fill
        sizes="100vw"
        className="object-cover"
        priority
      />
      <div className="absolute inset-0 bg-black/35" />

      {/* Content */}
      <div className="relative z-10 text-center px-6">
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 1 }}
          className="text-gold-400 uppercase tracking-[0.3em] text-xs font-medium mb-6"
        >
          9 Hole Bushland Course
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 1 }}
        >
          <span className="font-serif italic text-white text-3xl sm:text-4xl md:text-5xl block mb-2">
            Welcome To
          </span>
          <span className="text-white text-5xl sm:text-7xl md:text-[6rem] font-bold tracking-tight block uppercase">
            Sussex Inlet
          </span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="flex items-center justify-center gap-4 mt-12"
        >
          <a
            href="tel:0244412259"
            className="bg-gold-400 text-green-900 px-7 py-3 text-xs font-semibold uppercase tracking-[0.15em] hover:bg-gold-300 transition-colors"
          >
            Book a Tee Time
          </a>
          <Link
            href="/course"
            className="border border-white/50 text-white px-7 py-3 text-xs font-semibold uppercase tracking-[0.15em] hover:bg-white/10 transition-colors"
          >
            Explore Course
          </Link>
        </motion.div>
      </div>

      {/* Scroll */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 text-white/30 text-[10px] uppercase tracking-[0.3em]"
      >
        Scroll
      </motion.p>
    </section>
  );
}
