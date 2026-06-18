'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import {
  PartyPopper,
  Briefcase,
  Users,
  Presentation,
  Phone,
  Mail,
} from 'lucide-react';

const venueHighlights = [
  { icon: PartyPopper, label: 'Birthday Parties' },
  { icon: Briefcase, label: 'Corporate Events' },
  { icon: Users, label: 'Social Functions' },
  { icon: Presentation, label: 'Meetings & Gatherings' },
];

const listVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 15 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: 'easeOut' as const },
  },
};

export default function VenueHire() {
  return (
    <section id="venue-hire" className="relative bg-white py-24 sm:py-32 overflow-hidden">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image — Left */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-navy-900/15">
              <div className="relative aspect-[3/4] sm:aspect-[4/3]">
                <Image
                  src="/images/venuehire.webp"
                  alt="Sussex Inlet Golf Club venue hire"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </div>

            {/* Decorative gold accent */}
            <div className="absolute -top-3 -left-3 w-16 h-16 border-t-4 border-l-4 border-gold-400 rounded-tl-2xl" />
          </motion.div>

          {/* Text — Right */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7, delay: 0.15 }}
          >
            <span className="inline-block rounded-full bg-navy-100 px-4 py-1.5 text-sm font-semibold text-navy-700 mb-4">
              Venue Hire
            </span>
            <h2 className="text-4xl sm:text-5xl font-bold text-navy-900 tracking-tight mb-6">
              Hire Our <span className="text-gold-500">Venue</span>
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              Looking for a unique venue on the South Coast? Our clubhouse and grounds are available
              for hire — perfect for private events, celebrations, and group activities surrounded by
              beautiful native bushland.
            </p>

            {/* Highlights Grid */}
            <motion.div
              variants={listVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-50px' }}
              className="grid grid-cols-2 gap-4 mb-8"
            >
              {venueHighlights.map((item) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={item.label}
                    variants={itemVariants}
                    className="flex items-center gap-3 rounded-xl bg-navy-50 p-3.5 transition-colors duration-300 hover:bg-navy-100"
                  >
                    <Icon size={20} strokeWidth={1.5} className="text-navy-600 flex-shrink-0" />
                    <span className="text-sm font-medium text-navy-800">{item.label}</span>
                  </motion.div>
                );
              })}
            </motion.div>

            {/* Contact Info */}
            <div className="rounded-xl bg-navy-900 p-5">
              <p className="text-sm font-semibold text-gold-400 mb-3">Enquire About Venue Hire</p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="tel:0244412259"
                  className="inline-flex items-center gap-2 text-sm text-navy-100 hover:text-gold-400 transition-colors"
                >
                  <Phone size={16} />
                  (02) 4441 2259
                </a>
                <a
                  href="mailto:sussexgolf@shoalhaven.net.au"
                  className="inline-flex items-center gap-2 text-sm text-navy-100 hover:text-gold-400 transition-colors"
                >
                  <Mail size={16} />
                  sussexgolf@shoalhaven.net.au
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
