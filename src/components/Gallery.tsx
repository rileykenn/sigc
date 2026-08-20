'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const galleryImages = [
  {
    src: '/images/drone/DJI_0112.webp',
    alt: 'Aerial view of the fairways winding through bushland',
    aspect: 'aspect-[4/5]',
  },
  {
    src: '/images/golfplaying.webp',
    alt: 'A golfer mid swing on the course',
    aspect: 'aspect-[4/3]',
  },
  {
    src: '/images/morewildlife.webp',
    alt: 'Kangaroos grazing beside the fairway',
    aspect: 'aspect-square',
  },
  {
    src: '/images/peopleplayinggolf.webp',
    alt: 'A group of players walking the course together',
    aspect: 'aspect-[3/4]',
  },
  {
    src: '/images/drone/DJI_0127.webp',
    alt: 'The course and surrounding bushland from above',
    aspect: 'aspect-[16/10]',
  },
];

export default function Gallery() {
  return (
    <section id="gallery" className="bg-sand-50 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="font-display text-4xl sm:text-5xl lg:text-6xl font-semibold text-navy-950 tracking-tight [text-wrap:balance] text-center mb-14"
        >
          Out on the course
        </motion.h2>

        <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 [&>*]:mb-4">
          {galleryImages.map((img, i) => (
            <motion.div
              key={img.src}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.6, delay: (i % 3) * 0.1, ease: 'easeOut' }}
              className={`relative break-inside-avoid overflow-hidden rounded-2xl shadow-lg shadow-navy-900/5 ${img.aspect}`}
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="object-cover transition-transform duration-700 hover:scale-[1.03]"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
