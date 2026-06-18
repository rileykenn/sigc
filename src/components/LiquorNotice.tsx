'use client';

import { motion } from 'framer-motion';
import { Wine } from 'lucide-react';

export default function LiquorNotice() {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5 }}
      id="liquor-notice"
      className="relative bg-navy-950 border-y-2 border-gold-400/30"
    >
      {/* Gold accent line at top */}
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-gold-400 to-transparent" />

      <div className="mx-auto max-w-5xl px-6 py-5 sm:py-6">
        <div className="flex items-center gap-4 sm:gap-5">
          {/* Icon */}
          <div className="flex-shrink-0 inline-flex rounded-lg bg-gold-400/10 border border-gold-400/20 p-2.5">
            <Wine size={22} strokeWidth={1.5} className="text-gold-400" />
          </div>

          {/* Notice Text */}
          <div>
            <p className="text-sm font-bold text-gold-400 tracking-wide uppercase mb-0.5">
              Licensed Premises
            </p>
            <p className="text-sm text-navy-200 leading-relaxed">
              Sussex Inlet Golf Club holds a liquor license. All alcohol to be consumed on the course
              must be purchased from our Golf Shop. No alcohol is to be taken off the premises.
            </p>
          </div>
        </div>
      </div>

      {/* Gold accent line at bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-gold-400 to-transparent" />
    </motion.section>
  );
}
