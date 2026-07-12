'use client';

import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Calendar, Phone, Users } from 'lucide-react';

const competitions = [
  {
    id: 'mens',
    title: "Men's competition",
    day: 'Every Sunday',
    type: 'AGU competition',
    description: 'The main weekly club competition, open to all financial members. Formats change through the year: stroke, stableford and special events.',
  },
  {
    id: 'ladies',
    title: 'Ladies competition',
    day: 'Every Wednesday',
    type: "Women's golf",
    description: 'Weekly ladies competition day. A welcoming group for women golfers of all abilities, with social and competitive formats.',
  },
  {
    id: 'vets',
    title: 'Veterans competition',
    day: 'Every Tuesday',
    type: 'Veterans',
    description: 'Weekly veterans competition, open to all veteran members. A good social morning of golf, with competitive and social formats.',
  },
];

export default function CompetitionsPage() {
  return (
    <main>
      <Navbar />
      <section className="bg-navy-950 pt-32 pb-16 sm:pt-36 sm:pb-20">
        <div className="mx-auto max-w-5xl px-6">
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="font-display text-4xl font-semibold tracking-tight text-sand-50 sm:text-5xl lg:text-6xl [text-wrap:balance]"
          >
            Competition days
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 0.6, ease: 'easeOut' }}
            className="mt-5 max-w-[62ch] leading-relaxed text-sand-50/80"
          >
            Sunday is competition day at Sussex Inlet. Ladies play Wednesdays and veterans Tuesdays, and Saturdays stay open for social rounds and visitors.
          </motion.p>
        </div>
      </section>

      <section className="bg-white py-20 sm:py-24">
        <div className="mx-auto max-w-5xl px-6">
          {competitions.map((comp, i) => (
            <motion.div
              key={comp.id}
              id={comp.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.6, ease: 'easeOut' }}
              className="grid gap-4 border-t border-sand-200 py-10 scroll-mt-28 first:border-t-0 first:pt-0 last:pb-0 md:grid-cols-[minmax(0,2fr)_minmax(0,3fr)] md:gap-10"
            >
              <div>
                <h2 className="font-display text-2xl font-semibold tracking-tight text-navy-950 sm:text-3xl">{comp.title}</h2>
                <div className="mt-3 flex flex-wrap items-center gap-x-5 gap-y-1.5 text-sm font-medium text-navy-700">
                  <span className="flex items-center gap-1.5"><Calendar size={16} strokeWidth={1.5} /> {comp.day}</span>
                  <span className="flex items-center gap-1.5"><Users size={16} strokeWidth={1.5} /> {comp.type}</span>
                </div>
              </div>
              <p className="max-w-[62ch] leading-relaxed text-navy-900/70 md:pt-1">{comp.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="bg-sand-100 py-12">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <p className="font-medium text-navy-950">Please call ahead to play on competition days.</p>
          <a
            href="tel:+61244412259"
            className="mt-3 inline-flex min-h-11 cursor-pointer items-center gap-2 font-medium text-navy-800 underline decoration-gold-500/60 underline-offset-4 transition hover:decoration-gold-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-navy-700"
          >
            <Phone size={16} strokeWidth={1.5} /> (02) 4441 2259
          </a>
        </div>
      </section>
      <Footer />
    </main>
  );
}
