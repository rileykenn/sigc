'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

export default function SponsorshipPreview() {
  return (
    <section id="sponsorship-preview" className="bg-sand-50 py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="flex flex-col gap-8 sm:flex-row sm:items-center sm:gap-12"
        >
          <div className="relative h-36 w-full shrink-0 overflow-hidden rounded-2xl sm:w-64">
            <Image
              src="/images/sponsershipsigns2.webp"
              alt="Sponsor signs from local businesses beside a fairway at Sussex Inlet Golf Club"
              fill
              className="object-cover"
              sizes="(max-width: 640px) 100vw, 256px"
            />
          </div>
          <div>
            <h2 className="font-display text-2xl sm:text-3xl font-semibold text-navy-950 tracking-tight">
              Backed by local business
            </h2>
            <p className="mt-3 max-w-[62ch] text-navy-900/70 leading-relaxed">
              Tee signage and clubhouse sponsorships help keep the course maintained and green
              fees affordable.
            </p>
            <Link
              href="/sponsorship"
              className="mt-4 inline-block py-2 font-medium text-navy-800 underline underline-offset-4 decoration-gold-500/60 hover:decoration-gold-500 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-navy-700"
            >
              Become a sponsor
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
