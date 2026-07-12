'use client';

import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const sections = [
  { id: 'members', title: 'Members', description: 'Club competition results, member announcements and general club news.' },
  { id: 'ladies', title: 'Ladies', description: 'Wednesday competition results, ladies events and upcoming fixtures.' },
  { id: 'vets', title: 'Veterans', description: 'Tuesday veterans competition results and upcoming events.' },
];

export default function NewsPage() {
  return (
    <main>
      <Navbar />
      <section className="bg-navy-950 pt-32 pb-16 sm:pt-36 sm:pb-20">
        <div className="mx-auto max-w-3xl px-6">
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="font-display text-4xl font-semibold tracking-tight text-sand-50 sm:text-5xl lg:text-6xl [text-wrap:balance]"
          >
            News and results
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 0.6, ease: 'easeOut' }}
            className="mt-5 max-w-[62ch] leading-relaxed text-sand-50/80"
          >
            Competition results and notices from around the club.
          </motion.p>
        </div>
      </section>

      <section className="bg-white py-20 sm:py-24">
        <div className="mx-auto max-w-3xl px-6">
          {sections.map((section, i) => (
            <motion.div
              key={section.id}
              id={section.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.6, ease: 'easeOut' }}
              className="border-t border-sand-200 py-8 scroll-mt-28 first:border-t-0 first:pt-0"
            >
              <h2 className="font-display text-2xl font-semibold tracking-tight text-navy-950 sm:text-3xl">{section.title}</h2>
              <p className="mt-2 max-w-[62ch] leading-relaxed text-navy-900/70">{section.description}</p>
            </motion.div>
          ))}

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="mt-12 rounded-2xl border border-sand-200 bg-sand-50 px-6 py-12 text-center"
          >
            <p className="font-display text-2xl font-semibold tracking-tight text-navy-950">Nothing posted yet</p>
            <p className="mx-auto mt-3 max-w-[62ch] leading-relaxed text-navy-900/70">Follow the club on Facebook for day-to-day updates.</p>
            <a
              href="https://www.facebook.com/SussexInletGolfClub"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex min-h-11 cursor-pointer items-center font-medium text-navy-800 underline decoration-gold-500/60 underline-offset-4 transition hover:decoration-gold-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-navy-700"
            >
              Sussex Inlet Golf Club on Facebook
            </a>
          </motion.div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
