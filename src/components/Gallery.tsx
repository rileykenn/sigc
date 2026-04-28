'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function Gallery() {
  return (
    <section className="py-0">
      <div className="grid grid-cols-1 md:grid-cols-2">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative aspect-[4/3] md:aspect-auto md:min-h-[500px]"
        >
          <Image src="/media/tee.webp" alt="Teeing off" fill className="object-cover" sizes="(max-width: 768px) 100vw, 50vw" />
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1, duration: 0.8 }}
          className="relative aspect-[4/3] md:aspect-auto md:min-h-[500px]"
        >
          <Image src="/media/putting.webp" alt="Putting green" fill className="object-cover" sizes="(max-width: 768px) 100vw, 50vw" />
        </motion.div>
      </div>
    </section>
  );
}
