'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

export default function BlueTreeBand() {
  return (
    <section id="blue-tree" className="bg-sand-50 py-24 sm:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-16">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            className="lg:col-span-5"
          >
            <h2 className="font-display text-3xl font-semibold tracking-tight text-navy-950 [text-wrap:balance] sm:text-4xl lg:text-5xl">
              The blue tree on the third
            </h2>
            <p className="mt-6 max-w-[62ch] leading-relaxed text-navy-900/70">
              One tree on our course is painted a vivid, unmissable blue. It is
              part of the Blue Tree Project, a national movement encouraging
              honest conversations about mental health. Painted by club
              volunteers in 2020, it stands in memory of those we have lost and
              as a reminder to ask the people around you if they are okay.
            </p>
            <div className="mt-8">
              <Link
                href="/historic-blue-tree"
                className="inline-flex min-h-11 cursor-pointer items-center font-medium text-navy-800 underline decoration-navy-800/40 underline-offset-4 transition hover:decoration-navy-800 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-navy-700"
              >
                Read its story
              </Link>
            </div>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.7, ease: 'easeOut', delay: 0.1 }}
            className="lg:col-span-7"
          >
            <div className="relative aspect-[16/10] overflow-hidden rounded-2xl">
              <Image
                src="/images/maybe-hero.webp"
                alt="A quiet green at Sussex Inlet Golf Club in early morning light"
                fill
                sizes="(max-width: 1024px) 100vw, 55vw"
                className="object-cover"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
