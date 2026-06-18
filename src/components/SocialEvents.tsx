'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import {
  PartyPopper,
  Users,
  Briefcase,
  Trophy,
  Phone,
  ArrowRight,
  Sparkles,
  Star,
} from 'lucide-react';

const eventTypes = [
  {
    icon: Trophy,
    title: '9 Hole Social Golf',
    description:
      'Bring your mates for a relaxed 9 holes through stunning native bushland. No experience needed — just good vibes and great scenery.',
    highlight: 'Most Popular',
  },
  {
    icon: PartyPopper,
    title: 'Birthday Parties',
    description:
      "Celebrate your special day with a round of golf followed by drinks in the clubhouse. A birthday they won't forget.",
  },
  {
    icon: Briefcase,
    title: 'Corporate Events',
    description:
      'Team building with a twist. Treat your staff or clients to a unique day out on the course with catering options available.',
  },
  {
    icon: Users,
    title: 'Group Functions',
    description:
      'From family reunions to social club outings — our course and clubhouse are the perfect backdrop for any group gathering.',
  },
];

const photos = [
  {
    src: '/images/venuehire.webp',
    alt: 'Sussex Inlet Golf Club venue and function space',
    label: 'Function Space',
  },
  {
    src: '/images/peopleplayinggolf.webp',
    alt: 'Social golf at Sussex Inlet',
    label: 'Social Golf',
  },
  {
    src: '/images/goodcarthire.webp',
    alt: 'Golf cart hire available',
    label: 'Cart Hire',
  },
];

export default function SocialEvents() {
  return (
    <section id="venue-hire" className="relative overflow-hidden bg-navy-950">
      {/* Layered background effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(37,99,160,0.15),transparent_60%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,rgba(37,99,160,0.1),transparent_60%)]" />
      </div>

      {/* Top gold accent */}
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-gold-400 to-transparent" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:py-40">
        {/* ── Section Header ── */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16 lg:mb-20"
        >
          <span className="inline-flex items-center gap-2 rounded-full bg-gold-400/10 border border-gold-400/20 px-5 py-2 text-sm font-semibold text-gold-400 mb-6">
            <Sparkles size={16} />
            Events &amp; Functions
          </span>
          <h2 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-white tracking-tight leading-[1.1]">
            Your Next Event
            <span className="block bg-gradient-to-r from-gold-300 via-gold-400 to-gold-500 bg-clip-text text-transparent">
              Starts Here
            </span>
          </h2>
          <p className="mt-6 text-lg sm:text-xl text-navy-200 max-w-3xl mx-auto leading-relaxed">
            Nestled in a unique bushland setting on the beautiful South Coast, Sussex Inlet Golf Club
            is the perfect venue for social golf, birthday celebrations, corporate days, and private functions.
          </p>
        </motion.div>

        {/* ── Photo Mosaic Grid ── */}
        <div className="mb-20 lg:mb-24">
          {/* Main mosaic - asymmetric grid */}
          <div className="grid grid-cols-2 lg:grid-cols-12 gap-3 sm:gap-4 auto-rows-[140px] sm:auto-rows-[180px] lg:auto-rows-[200px]">
            {/* Large featured image - spans left side */}
            <motion.div
              initial={{ opacity: 0, scale: 0.92 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.7 }}
              className="col-span-2 lg:col-span-7 row-span-2 relative rounded-2xl lg:rounded-3xl overflow-hidden group cursor-pointer"
            >
              <Image
                src={photos[0].src}
                alt={photos[0].alt}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 1024px) 100vw, 58vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-950/80 via-navy-950/20 to-transparent" />
              <div className="absolute inset-0 bg-navy-950/0 group-hover:bg-navy-950/10 transition-colors duration-500" />
              {/* Label */}
              <div className="absolute bottom-4 left-4 sm:bottom-6 sm:left-6">
                <span className="inline-flex items-center gap-1.5 rounded-full bg-white/15 backdrop-blur-md border border-white/20 px-3 py-1.5 sm:px-4 sm:py-2 text-xs sm:text-sm font-medium text-white">
                  <Star size={12} className="text-gold-400 fill-gold-400" />
                  {photos[0].label}
                </span>
              </div>
            </motion.div>

            {/* Top right image */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="col-span-1 lg:col-span-5 row-span-1 relative rounded-2xl lg:rounded-3xl overflow-hidden group cursor-pointer"
            >
              <Image
                src={photos[1].src}
                alt={photos[1].alt}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 1024px) 50vw, 42vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-950/70 via-transparent to-transparent" />
              <div className="absolute inset-0 bg-navy-950/0 group-hover:bg-navy-950/10 transition-colors duration-500" />
              <div className="absolute bottom-3 left-3 sm:bottom-4 sm:left-4">
                <span className="inline-flex items-center gap-1.5 rounded-full bg-white/15 backdrop-blur-md border border-white/20 px-3 py-1.5 text-xs sm:text-sm font-medium text-white">
                  {photos[1].label}
                </span>
              </div>
            </motion.div>

            {/* Bottom right image */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="col-span-1 lg:col-span-5 row-span-1 relative rounded-2xl lg:rounded-3xl overflow-hidden group cursor-pointer"
            >
              <Image
                src={photos[2].src}
                alt={photos[2].alt}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 1024px) 50vw, 42vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-950/70 via-transparent to-transparent" />
              <div className="absolute inset-0 bg-navy-950/0 group-hover:bg-navy-950/10 transition-colors duration-500" />
              <div className="absolute bottom-3 left-3 sm:bottom-4 sm:left-4">
                <span className="inline-flex items-center gap-1.5 rounded-full bg-white/15 backdrop-blur-md border border-white/20 px-3 py-1.5 text-xs sm:text-sm font-medium text-white">
                  {photos[2].label}
                </span>
              </div>
            </motion.div>
          </div>
        </div>

        {/* ── Event Type Cards ── */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.5 }}
          className="mb-20 lg:mb-24"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-5">
            {eventTypes.map((event, i) => {
              const Icon = event.icon;
              return (
                <motion.div
                  key={event.title}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-40px' }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  whileHover={{ y: -6, transition: { duration: 0.25 } }}
                  className="group relative rounded-2xl bg-gradient-to-b from-navy-800/70 to-navy-900/70 backdrop-blur-sm border border-navy-700/50 p-7 transition-all duration-300 hover:border-gold-400/40 hover:shadow-2xl hover:shadow-gold-400/5"
                >
                  {/* Top gold bar on hover */}
                  <div className="absolute top-0 left-5 right-5 h-[3px] rounded-b-full bg-gradient-to-r from-gold-400 to-gold-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  {/* Popular badge */}
                  {event.highlight && (
                    <span className="absolute -top-3 right-5 inline-flex items-center gap-1 rounded-full bg-gold-400 px-3 py-1 text-[11px] font-bold text-navy-950 uppercase tracking-wider shadow-lg shadow-gold-400/30">
                      <Star size={10} className="fill-navy-950" />
                      {event.highlight}
                    </span>
                  )}

                  {/* Icon */}
                  <div className="inline-flex rounded-xl bg-gold-400/10 border border-gold-400/10 p-3.5 mb-5 transition-all duration-300 group-hover:bg-gold-400/20 group-hover:scale-110">
                    <Icon size={26} strokeWidth={1.5} className="text-gold-400" />
                  </div>

                  {/* Text */}
                  <h3 className="text-lg font-bold text-white mb-2 tracking-tight">
                    {event.title}
                  </h3>
                  <p className="text-sm text-navy-300 leading-relaxed">
                    {event.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* ── CTA Section ── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative"
        >
          {/* CTA card with glassmorphism */}
          <div className="relative rounded-3xl bg-gradient-to-br from-navy-800/60 to-navy-900/60 backdrop-blur-sm border border-navy-700/40 p-10 sm:p-14 text-center overflow-hidden">
            {/* Decorative glow */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-80 h-40 bg-gold-400/10 rounded-full blur-3xl" />

            <div className="relative">
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white tracking-tight mb-4">
                Ready to book your event?
              </h3>
              <p className="text-navy-200 text-lg max-w-xl mx-auto mb-8">
                Get in touch with our friendly team to discuss your next social golf day, birthday party, corporate event, or private function.
              </p>

              <div className="inline-flex flex-col sm:flex-row items-center gap-4 sm:gap-5">
                <a
                  href="#contact"
                  className="group relative inline-flex items-center gap-3 rounded-full bg-gold-400 px-8 py-4 text-lg font-bold text-navy-950 shadow-lg shadow-gold-400/25 transition-all duration-300 hover:bg-gold-300 hover:shadow-xl hover:shadow-gold-400/35 btn-shimmer"
                >
                  Enquire Now
                  <ArrowRight
                    size={20}
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  />
                </a>

                <a
                  href="tel:0244412259"
                  className="inline-flex items-center gap-3 rounded-full border-2 border-navy-500/60 px-7 py-3.5 text-lg font-semibold text-white transition-all duration-300 hover:border-gold-400 hover:text-gold-400"
                >
                  <Phone size={20} />
                  (02) 4441 2259
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Bottom gold accent */}
      <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-gold-400 to-transparent" />
    </section>
  );
}
