'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import {
  Tv,
  Armchair,
  Coffee,
  Flame,
  Wind,
  Smile,
} from 'lucide-react';

const highlights = [
  { icon: Wind, label: 'Air Conditioning & TV' },
  { icon: Armchair, label: 'Outdoor Sitting Area' },
  { icon: Coffee, label: 'Cold Beverages & Snacks' },
  { icon: Coffee, label: 'Tea / Coffee Available' },
  { icon: Flame, label: 'BBQ Area' },
  { icon: Smile, label: 'Friendly Atmosphere' },
];

const listVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.08 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.4, ease: 'easeOut' as const },
  },
};

export default function Clubhouse() {
  return (
    <section id="clubhouse" className="relative bg-white py-24 sm:py-32 overflow-hidden">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Text Content — Left */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7 }}
          >
            <span className="inline-block rounded-full bg-navy-100 px-4 py-1.5 text-sm font-semibold text-navy-700 mb-4">
              Our Facilities
            </span>
            <h2 className="text-4xl sm:text-5xl font-bold text-navy-900 tracking-tight mb-6">
              The Clubhouse
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed mb-8">
              After your round, relax and unwind in our welcoming clubhouse. Whether you&apos;re catching up
              with friends over a cold drink, grabbing a snack, or settling in front of the TV — you&apos;ll
              feel right at home.
            </p>

            {/* Highlights List */}
            <motion.ul
              variants={listVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-50px' }}
              className="grid grid-cols-1 sm:grid-cols-2 gap-4"
            >
              {highlights.map((item) => {
                const Icon = item.icon;
                return (
                  <motion.li
                    key={item.label}
                    variants={itemVariants}
                    className="flex items-center gap-3"
                  >
                    <div className="flex-shrink-0 inline-flex rounded-lg bg-navy-50 p-2.5">
                      <Icon size={20} strokeWidth={1.5} className="text-navy-600" />
                    </div>
                    <span className="text-sm font-medium text-navy-800">{item.label}</span>
                  </motion.li>
                );
              })}
            </motion.ul>

            {/* Gold accent divider */}
            <div className="mt-8 h-[3px] w-20 rounded-full bg-gradient-to-r from-gold-400 to-gold-500" />
          </motion.div>

          {/* Images — Right */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="relative"
          >
            {/* Main Image */}
            <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-navy-900/15">
              <div className="relative aspect-[4/3]">
                <Image
                  src="/images/clubhouse.webp"
                  alt="Sussex Inlet Golf Club clubhouse interior"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </div>

            {/* Overlapping Secondary Image */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="absolute -bottom-6 -left-6 w-48 sm:w-56 rounded-xl overflow-hidden shadow-xl border-4 border-white"
            >
              <div className="relative aspect-[4/3]">
                <Image
                  src="/images/clubhouse2.webp"
                  alt="Sussex Inlet Golf Club outdoor area"
                  fill
                  className="object-cover"
                  sizes="224px"
                />
              </div>
            </motion.div>

            {/* Gold corner accent */}
            <div className="absolute -top-3 -right-3 w-16 h-16 border-t-4 border-r-4 border-gold-400 rounded-tr-2xl" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
