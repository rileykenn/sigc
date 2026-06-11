'use client';

import { motion } from 'framer-motion';
import {
  Flag,
  Trees,
  Home,
  ShoppingBag,
  Flame,
  Car,
} from 'lucide-react';

const features = [
  {
    icon: Flag,
    title: '9 Hole Course',
    description: 'Championship rated par course through stunning bushland',
    accent: 'from-fairway-500 to-fairway-600',
    iconBg: 'bg-fairway-50 text-fairway-600',
  },
  {
    icon: Trees,
    title: 'Native Wildlife',
    description: 'Wallabies and kangaroos roam freely across the greens',
    accent: 'from-emerald-500 to-teal-600',
    iconBg: 'bg-emerald-50 text-emerald-600',
  },
  {
    icon: Home,
    title: 'Clubhouse & Lounge',
    description: 'Relax after your round with drinks and good company',
    accent: 'from-amber-500 to-yellow-600',
    iconBg: 'bg-amber-50 text-amber-600',
  },
  {
    icon: ShoppingBag,
    title: 'Pro Shop',
    description: 'Everything you need for your game, all under one roof',
    accent: 'from-blue-500 to-indigo-600',
    iconBg: 'bg-blue-50 text-blue-600',
  },
  {
    icon: Flame,
    title: 'BBQ & Outdoor Area',
    description: 'Fire up the grill and enjoy the scenic surroundings',
    accent: 'from-orange-500 to-red-500',
    iconBg: 'bg-orange-50 text-orange-600',
  },
  {
    icon: Car,
    title: 'Cart & Club Hire',
    description: 'Motorised carts and clubs available for all visitors',
    accent: 'from-violet-500 to-purple-600',
    iconBg: 'bg-violet-50 text-violet-600',
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.5, ease: 'easeOut' as const },
  },
};

export default function Features() {
  return (
    <section id="features" className="relative py-24 sm:py-32 bg-white grass-texture">
      <div className="mx-auto max-w-7xl px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block rounded-full bg-fairway-100 px-4 py-1.5 text-sm font-semibold text-fairway-700 mb-4">
            Our Course
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold text-fairway-900 tracking-tight">
            More Than Just Golf
          </h2>
          <p className="mt-4 text-lg text-gray-500 max-w-2xl mx-auto">
            A friendly small club atmosphere where visitors are always welcome
          </p>
        </motion.div>

        {/* Bento Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={feature.title}
                variants={cardVariants}
                whileHover={{ y: -6, transition: { duration: 0.25 } }}
                className="group relative rounded-2xl bg-white p-7 shadow-sm ring-1 ring-gray-100 transition-all duration-300 hover:shadow-xl hover:shadow-fairway-900/5 hover:ring-fairway-200 cursor-default"
              >
                {/* Gradient Accent Line */}
                <div className={`absolute top-0 left-6 right-6 h-[3px] rounded-b-full bg-gradient-to-r ${feature.accent} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />

                {/* Icon */}
                <div className={`inline-flex rounded-xl ${feature.iconBg} p-3 mb-4 transition-transform duration-300 group-hover:scale-110`}>
                  <Icon size={24} strokeWidth={1.5} />
                </div>

                {/* Text */}
                <h3 className="text-lg font-semibold text-fairway-900 mb-1.5">
                  {feature.title}
                </h3>
                <p className="text-sm text-gray-500 leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
