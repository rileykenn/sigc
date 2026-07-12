'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

const stats = [
  { value: '9', label: 'holes' },
  { value: '64', label: 'par' },
  { value: '67', label: 'rating' },
  { value: '1953', label: 'est.' },
];

export default function Features() {
  return (
    <section id="features" className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 items-center gap-14 lg:grid-cols-12 lg:gap-16">
          {/* Image stack */}
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            className="relative lg:col-span-7"
          >
            <div className="relative aspect-[3/4] w-4/5 overflow-hidden rounded-2xl">
              <Image
                src="/images/golfcourse.webp"
                alt="A fairway at Sussex Inlet Golf Club winding through native gum trees"
                fill
                sizes="(max-width: 1024px) 80vw, 45vw"
                className="object-cover"
              />
            </div>
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.7, ease: 'easeOut', delay: 0.15 }}
              className="relative -mt-24 ml-auto aspect-[4/5] w-1/2 overflow-hidden rounded-2xl shadow-lg shadow-navy-900/5 ring-4 ring-white sm:-mt-32"
            >
              <Image
                src="/images/wildlife.webp"
                alt="Kangaroos grazing beside the course"
                fill
                sizes="(max-width: 1024px) 50vw, 28vw"
                className="object-cover"
              />
            </motion.div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            className="lg:col-span-5"
          >
            <h2 className="font-display text-4xl font-semibold tracking-tight text-navy-950 [text-wrap:balance] leading-[1.1] pb-1 sm:text-5xl lg:text-6xl">
              Nine holes among the <em className="italic text-gold-500">gums</em>
            </h2>
            <p className="mt-6 max-w-[62ch] leading-relaxed text-navy-900/70">
              Par 64, rated 67. Short enough to walk, honest enough to keep you
              thinking. The fairways cut through native bushland where kangaroos
              graze the rough and king parrots watch from the trees. Open seven
              days, with clubs and carts for hire if you&apos;re travelling light.
            </p>

            {/* Stats row */}
            <div className="mt-10 grid grid-cols-2 gap-y-8 sm:grid-cols-4">
              {stats.map((stat) => (
                <div key={stat.label} className="border-l border-navy-950/10 pl-4">
                  <div className="font-display text-4xl font-semibold tabular-nums text-navy-950 sm:text-5xl">
                    {stat.value}
                  </div>
                  <div className="mt-1 text-sm font-medium text-navy-700">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-10">
              <Link
                href="/course"
                className="inline-flex cursor-pointer items-center gap-2 rounded-full border border-navy-200 bg-transparent px-7 py-3.5 text-sm font-semibold text-navy-900 transition hover:border-navy-400 active:scale-[0.98] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-navy-700"
              >
                Explore the course
                <ArrowRight size={16} strokeWidth={1.5} aria-hidden="true" />
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
