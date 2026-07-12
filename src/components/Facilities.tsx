'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

type ImageCell = {
  kind: 'image';
  title: string;
  line: string;
  src: string;
  alt: string;
  className: string;
  sizes: string;
};

type PlainCell = {
  kind: 'plain';
  title: string;
  line: string;
  className: string;
};

type Cell = ImageCell | PlainCell;

const cells: Cell[] = [
  {
    kind: 'image',
    title: 'Clubhouse',
    line: 'Cold drinks, air conditioning and a spot to settle in after the round.',
    src: '/images/clubhouse.webp',
    alt: 'Inside the Sussex Inlet Golf Club clubhouse',
    className: 'sm:col-span-2 lg:col-span-4 lg:row-span-2 min-h-[340px] lg:min-h-0',
    sizes: '(max-width: 1024px) 100vw, 66vw',
  },
  {
    kind: 'image',
    title: 'Pro shop',
    line: 'Snacks, drinks, and a good range of clothing and merchandise worth taking home.',
    src: '/images/goodshopphoto.webp',
    alt: 'Merchandise and equipment in the pro shop',
    className: 'lg:col-span-2 min-h-[260px] lg:min-h-0',
    sizes: '(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw',
  },
  {
    kind: 'image',
    title: 'Practice nets',
    line: 'Loosen up before the first tee.',
    src: '/images/practice-nets.webp',
    alt: 'Practice nets beside the course',
    className: 'lg:col-span-2 min-h-[260px] lg:min-h-0',
    sizes: '(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw',
  },
  {
    kind: 'plain',
    title: 'BBQ and outdoor seating',
    line: 'Tables under the trees, with room for groups.',
    className: 'lg:col-span-3',
  },
  {
    kind: 'image',
    title: 'Cart and club hire',
    line: 'Buggies, carts and clubs, no need to bring your own.',
    src: '/images/goodcarthire.webp',
    alt: 'Hire carts lined up at Sussex Inlet Golf Club',
    className: 'lg:col-span-3 min-h-[260px] lg:min-h-0',
    sizes: '(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 50vw',
  },
];

const cellVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.08, ease: 'easeOut' as const },
  }),
};

export default function Facilities() {
  return (
    <section id="facilities" className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="mb-12"
        >
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-semibold text-navy-950 tracking-tight [text-wrap:balance]">
            Around the club
          </h2>
          <p className="mt-4 text-navy-900/70 leading-relaxed max-w-[62ch]">
            Fully licensed, seven days a week.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 lg:auto-rows-[220px] gap-4">
          {cells.map((cell, i) =>
            cell.kind === 'image' ? (
              <motion.div
                key={cell.title}
                custom={i}
                variants={cellVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-60px' }}
                className={`group relative overflow-hidden rounded-2xl ${cell.className}`}
              >
                <Image
                  src={cell.src}
                  alt={cell.alt}
                  fill
                  sizes={cell.sizes}
                  className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-950/70 via-navy-950/20 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-6">
                  <h3 className="font-display text-2xl font-semibold text-white">
                    {cell.title}
                  </h3>
                  <p className="mt-1 text-sm text-sand-50/85 leading-relaxed max-w-md">
                    {cell.line}
                  </p>
                </div>
              </motion.div>
            ) : (
              <motion.div
                key={cell.title}
                custom={i}
                variants={cellVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-60px' }}
                className={`flex flex-col justify-end rounded-2xl bg-sand-100 p-6 min-h-[200px] lg:min-h-0 ${cell.className}`}
              >
                <h3 className="font-display text-2xl font-semibold text-navy-950">
                  {cell.title}
                </h3>
                <p className="mt-1 text-sm text-navy-900/70 leading-relaxed">
                  {cell.line}
                </p>
              </motion.div>
            )
          )}
        </div>
      </div>
    </section>
  );
}
