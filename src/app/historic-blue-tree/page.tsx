'use client';

import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { TreePine } from 'lucide-react';

export default function HistoricBlueTreePage() {
  return (
    <main>
      <Navbar />
      <section className="min-h-[70vh] flex items-center justify-center bg-gradient-to-b from-navy-950 via-navy-900 to-navy-950">
        <div className="mx-auto max-w-2xl px-6 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, type: 'spring' }}
            className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-navy-800 mb-8"
          >
            <TreePine size={40} className="text-gold-400" />
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-5xl sm:text-6xl font-extrabold text-white tracking-tight mb-4"
          >
            The Historic Blue Tree
          </motion.h1>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
          >
            <span className="inline-block rounded-full bg-gold-400/20 px-6 py-2 text-lg font-semibold text-gold-400 mb-6">Coming Soon</span>
            <p className="text-navy-200 text-lg leading-relaxed">
              We are currently gathering the history and media for this special feature of Sussex Inlet Golf Club. Check back soon to learn about this iconic landmark on our course.
            </p>
          </motion.div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
