'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const features = [
  {
    title: '9 Hole Course',
    image: '/images/golfcourse.webp',
    description: 'Par 64 course through stunning native Australian bushland',
  },
  {
    title: 'Native Wildlife',
    image: '/images/wildlife.webp',
    description: 'Kangaroos and native wildlife roam freely across the course',
  },
  {
    title: 'Clubhouse & Lounge',
    image: '/images/clubhouse.webp',
    description: 'Relax with air conditioning, TV, and outdoor seating',
  },
  {
    title: 'Pro Shop',
    image: '/images/golfshop.webp',
    description: 'Fully stocked shop with friendly staff to help you out',
  },
  {
    title: 'Cart & Club Hire',
    image: '/images/goodcarthire.webp',
    description: 'Buggies, carts and club hire available for all visitors',
  },
  {
    title: 'Practice Nets',
    image: '/images/practice-nets.webp',
    description: 'Warm up before your round at our practice facilities',
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
          <span className="inline-block rounded-full bg-navy-100 px-4 py-1.5 text-sm font-semibold text-navy-700 mb-4">
            Our Course
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold text-navy-900 tracking-tight">
            More Than Just Golf
          </h2>
          <p className="mt-4 text-lg text-gray-500 max-w-2xl mx-auto">
            A friendly small club atmosphere where visitors are always welcome
          </p>
        </motion.div>

        {/* Image Card Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          {features.map((feature) => (
            <motion.div
              key={feature.title}
              variants={cardVariants}
              whileHover={{ y: -6, transition: { duration: 0.25 } }}
              className="group relative rounded-2xl bg-white overflow-hidden shadow-sm ring-1 ring-gray-100 transition-all duration-300 hover:shadow-xl hover:shadow-navy-900/5 hover:ring-navy-200 cursor-default"
            >
              {/* Image */}
              <div className="relative aspect-[16/10]">
                <Image
                  src={feature.image}
                  alt={feature.title}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              {/* Text */}
              <div className="p-5">
                <h3 className="text-lg font-semibold text-navy-900 mb-1.5">
                  {feature.title}
                </h3>
                <p className="text-sm text-gray-500 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
