'use client';

import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Calendar, Clock, Phone, Users } from 'lucide-react';

const competitions = [
  {
    id: 'mens',
    title: 'Mens Competition',
    day: 'Every Sunday',
    type: 'AGU Competition',
    description: 'The main weekly club competition. Open to all financial members. Various formats throughout the year including Stroke, Stableford, and special events.',
    color: 'bg-navy-600',
  },
  {
    id: 'ladies',
    title: 'Ladies Competition',
    day: 'Every Wednesday',
    type: "Women's Golf",
    description: 'Weekly ladies competition day. A welcoming group for women golfers of all abilities. Social and competitive formats available.',
    color: 'bg-violet-500',
  },
  {
    id: 'vets',
    title: 'Veterans Competition',
    day: 'Every Tuesday',
    type: 'Veterans',
    description: 'Weekly veterans competition. Open to all veteran members. A great social morning of golf with competitive and social formats.',
    color: 'bg-blue-500',
  },
];

export default function CompetitionsPage() {
  return (
    <main>
      <Navbar />
      <section className="pt-32 pb-16 bg-navy-950">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="text-5xl sm:text-6xl font-extrabold text-white tracking-tight mb-4">
            Competition Days
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="text-xl text-navy-200">
            Something for everyone — social and competitive golf throughout the week
          </motion.p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="mx-auto max-w-5xl px-6 space-y-12">
          {competitions.map((comp, i) => (
            <motion.div
              key={comp.id}
              id={comp.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="rounded-2xl bg-white p-8 shadow-lg ring-1 ring-gray-100 scroll-mt-28"
            >
              <div className="flex items-start gap-4 mb-4">
                <span className={`h-3 w-3 rounded-full mt-2 ${comp.color}`} />
                <div>
                  <h2 className="text-2xl font-bold text-navy-900">{comp.title}</h2>
                  <div className="flex items-center gap-4 mt-1 text-sm text-gray-500">
                    <span className="flex items-center gap-1"><Calendar size={14} /> {comp.day}</span>
                    <span className="flex items-center gap-1"><Users size={14} /> {comp.type}</span>
                  </div>
                </div>
              </div>
              <p className="text-gray-600 leading-relaxed">{comp.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="py-12 bg-navy-50">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <div className="flex items-center justify-center gap-2 text-navy-700 mb-2">
            <Clock size={18} />
            <span className="font-semibold">Please call ahead to play on competition days</span>
          </div>
          <a href="tel:+61244412259" className="inline-flex items-center gap-2 text-navy-600 hover:text-navy-800 font-medium">
            <Phone size={16} /> (02) 4441 2259
          </a>
        </div>
      </section>
      <Footer />
    </main>
  );
}
