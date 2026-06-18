'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { Heart, ArrowRight } from 'lucide-react';

export default function SponsorshipPreview() {
  return (
    <section id="sponsorship-preview" className="relative bg-navy-900 py-24 sm:py-32 overflow-hidden">
      {/* Subtle pattern overlay */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              'radial-gradient(circle at 2px 2px, rgba(255,255,255,0.3) 1px, transparent 0)',
            backgroundSize: '32px 32px',
          }}
        />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image — Left */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-black/30">
              <div className="relative aspect-[4/3]">
                <Image
                  src="/images/sponsership.webp"
                  alt="Sponsorship signage at Sussex Inlet Golf Club"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </div>

            {/* Gold corner accent */}
            <div className="absolute -bottom-3 -right-3 w-16 h-16 border-b-4 border-r-4 border-gold-400 rounded-br-2xl" />
          </motion.div>

          {/* Text — Right */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7, delay: 0.15 }}
          >
            <span className="inline-flex items-center gap-2 rounded-full bg-gold-400/10 border border-gold-400/20 px-4 py-1.5 text-sm font-semibold text-gold-400 mb-5">
              <Heart size={16} />
              Community Club
            </span>
            <h2 className="text-4xl sm:text-5xl font-bold text-white tracking-tight mb-6">
              Support Your
              <span className="block text-gold-400">Local Club</span>
            </h2>
            <p className="text-lg text-navy-200 leading-relaxed mb-4">
              Sussex Inlet Golf Club is proudly volunteer-run and community-focused. Our sponsors
              play a vital role in keeping the course beautiful and our green fees affordable.
            </p>
            <p className="text-navy-300 leading-relaxed mb-8">
              From tee signage to clubhouse naming rights, there are sponsorship packages to suit
              every budget. Join the local businesses already backing our club and reach our growing
              community of members and visitors.
            </p>

            <Link
              href="/sponsorship"
              className="group inline-flex items-center gap-3 rounded-full bg-gold-400 px-7 py-3.5 text-base font-bold text-navy-950 shadow-lg shadow-gold-400/20 transition-all duration-300 hover:bg-gold-300 hover:shadow-xl hover:shadow-gold-400/30 btn-shimmer"
            >
              Learn More About Sponsorship
              <ArrowRight
                size={18}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
