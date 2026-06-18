'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Target } from 'lucide-react';

export default function PracticeNets() {
  return (
    <section id="practice-nets" className="relative overflow-hidden">
      {/* Full-width background image */}
      <div className="absolute inset-0">
        <Image
          src="/images/maybe-hero.webp"
          alt="Practice nets at Sussex Inlet Golf Club"
          fill
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-navy-950/85 via-navy-950/70 to-navy-950/50" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 py-28 sm:py-36 lg:py-44">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7 }}
          className="max-w-xl"
        >
          {/* Badge */}
          <span className="inline-flex items-center gap-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 px-4 py-1.5 text-sm font-semibold text-white mb-6">
            <Target size={16} className="text-gold-400" />
            Practice Facilities
          </span>

          {/* Headline */}
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-tight mb-6">
            Warm Up Before
            <span className="block text-gold-400">Your Round</span>
          </h2>

          {/* Description */}
          <p className="text-lg sm:text-xl text-navy-100 leading-relaxed mb-8">
            Fine-tune your swing at our practice nets before hitting the course. Available to all
            players, our nets are the perfect way to loosen up and find your rhythm.
          </p>

          {/* Note */}
          <div className="inline-flex items-center gap-3 rounded-xl bg-navy-900/60 backdrop-blur-sm border border-navy-700/40 px-5 py-3">
            <div className="flex-shrink-0 w-2 h-2 rounded-full bg-gold-400" />
            <span className="text-sm text-navy-100 font-medium">
              Practice facilities available to all players — no booking required
            </span>
          </div>
        </motion.div>
      </div>

      {/* Gold accent line at bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-gold-400 to-transparent" />
    </section>
  );
}
