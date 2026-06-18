'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { ShoppingBag } from 'lucide-react';

const shopImages = [
  { src: '/images/golfshop.webp', alt: 'Sussex Inlet Golf Shop interior' },
  { src: '/images/golfshop2.webp', alt: 'Golf equipment on display' },
  { src: '/images/goodshopphoto.webp', alt: 'Golf Shop merchandise' },
  { src: '/images/freindlystaffinteraction.webp', alt: 'Friendly staff helping a member' },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12 },
  },
};

const imageVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.6, ease: 'easeOut' as const },
  },
};

export default function GolfShop() {
  return (
    <section id="golf-shop" className="relative bg-navy-50 py-24 sm:py-32 overflow-hidden">
      <div className="mx-auto max-w-7xl px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="inline-flex items-center gap-2 rounded-full bg-navy-100 px-4 py-1.5 text-sm font-semibold text-navy-700 mb-4">
            <ShoppingBag size={16} />
            Shop &amp; Services
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold text-navy-900 tracking-tight">
            The Golf Shop
          </h2>
          <p className="mt-4 text-lg text-gray-500 max-w-2xl mx-auto">
            Everything you need for your round
          </p>
        </motion.div>

        {/* Image Gallery Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-14"
        >
          {shopImages.map((img, i) => (
            <motion.div
              key={img.src}
              variants={imageVariants}
              whileHover={{ scale: 1.03, transition: { duration: 0.25 } }}
              className={`relative rounded-2xl overflow-hidden shadow-lg shadow-navy-900/10 ${
                i === 0 ? 'col-span-2 lg:col-span-2 row-span-2' : ''
              }`}
            >
              <div className={`relative ${i === 0 ? 'aspect-square' : 'aspect-[4/3]'}`}>
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="object-cover transition-transform duration-500 hover:scale-105"
                  sizes={i === 0 ? '(max-width: 1024px) 100vw, 50vw' : '(max-width: 1024px) 50vw, 25vw'}
                />
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-3xl mx-auto text-center"
        >
          <p className="text-lg text-gray-600 leading-relaxed mb-4">
            Our friendly Golf Shop staff are here to help with bookings, equipment, and course
            information. Whether you need to hire clubs, grab a motorised cart, or pick up a cold
            drink before heading out — we&apos;ve got you covered.
          </p>
          <p className="text-gray-500">
            Refreshments, snacks, and everything you need for a great day on the course are all
            available at the shop.
          </p>

          {/* Gold accent divider */}
          <div className="mt-8 mx-auto h-[3px] w-20 rounded-full bg-gradient-to-r from-gold-400 to-gold-500" />
        </motion.div>
      </div>
    </section>
  );
}
