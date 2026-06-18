'use client';

import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Newspaper, Users, Heart } from 'lucide-react';

const sections = [
  { id: 'members', title: 'Members News & Results', icon: Users, description: 'Club competition results, member announcements, and general club news.' },
  { id: 'ladies', title: 'Ladies News & Results', icon: Heart, description: 'Wednesday competition results, ladies events, and upcoming fixtures.' },
  { id: 'vets', title: 'Veterans News & Results', icon: Newspaper, description: 'Tuesday veterans competition results and upcoming events.' },
];

export default function NewsPage() {
  return (
    <main>
      <Navbar />
      <section className="pt-32 pb-16 bg-navy-950">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="text-5xl sm:text-6xl font-extrabold text-white tracking-tight mb-4">
            News & Results
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="text-xl text-navy-200">
            Stay up to date with the latest from Sussex Inlet Golf Club
          </motion.p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="mx-auto max-w-5xl px-6 space-y-16">
          {sections.map((section, i) => {
            const Icon = section.icon;
            return (
              <motion.div
                key={section.id}
                id={section.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="scroll-mt-28"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="rounded-xl bg-navy-100 p-3 text-navy-600"><Icon size={24} /></div>
                  <h2 className="text-3xl font-bold text-navy-900">{section.title}</h2>
                </div>
                <p className="text-gray-500 mb-6">{section.description}</p>
                <div className="rounded-2xl bg-navy-50 p-8 text-center">
                  <p className="text-navy-600 font-medium">Check back soon for the latest results and updates.</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>
      <Footer />
    </main>
  );
}
