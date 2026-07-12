'use client';

import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Phone } from 'lucide-react';

const reveal = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-80px' },
  transition: { duration: 0.6, ease: 'easeOut' as const },
};

export default function HistoricBlueTreePage() {
  return (
    <main className="bg-sand-50">
      <Navbar />

      {/* Hero band */}
      <section className="bg-navy-950 pt-36 pb-24 sm:pt-44 sm:pb-32">
        <div className="mx-auto max-w-3xl px-6">
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            className="font-display text-5xl sm:text-6xl font-semibold text-sand-50 tracking-tight [text-wrap:balance]"
          >
            A symbol of hope
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut', delay: 0.15 }}
            className="mt-8 text-lg text-sand-50/80 leading-relaxed max-w-[62ch]"
          >
            On the third hole of Sussex Inlet Golf Club stands a vibrant blue
            tree. It is a simple, powerful reminder that hope is always within
            reach, and that no one should face mental health challenges alone.
          </motion.p>
        </div>
      </section>

      {/* Story */}
      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-3xl px-6 space-y-16 sm:space-y-20">
          <motion.div {...reveal}>
            <h2 className="font-display text-3xl sm:text-4xl font-semibold text-navy-950 tracking-tight">
              The Blue Tree Project
            </h2>
            <p className="mt-6 text-navy-900/70 leading-relaxed max-w-[62ch]">
              The Blue Tree Project is a community initiative that raises
              awareness of mental health and suicide prevention by encouraging
              open conversations and breaking down stigma. Across Australia,
              blue trees have become recognised symbols of hope, resilience and
              support: a prompt to check in with one another, and to seek help
              when it is needed.
            </p>
          </motion.div>

          <motion.div {...reveal}>
            <h2 className="font-display text-3xl sm:text-4xl font-semibold text-navy-950 tracking-tight">
              Our tree
            </h2>
            <p className="mt-6 text-navy-900/70 leading-relaxed max-w-[62ch]">
              Sussex Inlet Golf Club joined the movement in mid 2020, when our
              tree was painted by a dedicated group of club volunteers who gave
              their time to help spread the message of hope for those living
              with mental illness.
            </p>
            <p className="mt-5 text-navy-900/70 leading-relaxed max-w-[62ch]">
              The project was made possible through the generosity of the late
              Laurie Vincent, a respected former director and stalwart of the
              club, who donated the paint and helped bring the project to life.
              Inspirations Paint Nowra also kindly supported the work.
            </p>
          </motion.div>

          <motion.div {...reveal}>
            <h2 className="font-display text-3xl sm:text-4xl font-semibold text-navy-950 tracking-tight">
              What it means
            </h2>
            <p className="mt-6 text-navy-900/70 leading-relaxed max-w-[62ch]">
              Golfers see the tree as they play the third, but its purpose
              extends far beyond the game. It is a reminder that conversations
              can save lives, that asking &ldquo;are you okay?&rdquo; can make
              a real difference, and that support is available for anyone who
              may be struggling. It stands as a lasting tribute to those we
              have lost, to those continuing their mental health journey, and
              to the volunteers and supporters who made it possible.
            </p>
          </motion.div>

          {/* Closing line, set apart */}
          <motion.div {...reveal} className="pt-4 text-center">
            <div className="mx-auto w-16 border-t border-navy-200" aria-hidden="true" />
            <p className="mt-10 font-display italic text-2xl sm:text-3xl text-navy-900 leading-snug [text-wrap:balance]">
              If our blue tree encourages even one person to reach out, to
              start a conversation, or to seek help, then it has fulfilled its
              purpose.
            </p>
          </motion.div>

          {/* Support box */}
          <motion.div
            {...reveal}
            className="rounded-2xl border border-navy-200 bg-white p-8 sm:p-10"
          >
            <h2 className="font-display text-2xl sm:text-3xl font-semibold text-navy-950 tracking-tight">
              If you or someone you know needs support
            </h2>
            <p className="mt-4 text-navy-900/70 leading-relaxed max-w-[62ch]">
              Free, confidential help is available at any hour.
            </p>
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-8">
              <div>
                <p className="text-sm font-medium text-navy-700">Lifeline</p>
                <a
                  href="tel:131114"
                  className="mt-2 inline-flex min-h-[44px] items-center gap-2 text-xl font-semibold text-navy-950 tabular-nums cursor-pointer hover:text-navy-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-navy-700"
                >
                  <Phone size={18} strokeWidth={1.5} aria-hidden="true" />
                  13 11 14
                </a>
                <p className="mt-1">
                  <a
                    href="https://www.lifeline.org.au"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex min-h-[44px] items-center font-medium text-navy-800 underline underline-offset-4 decoration-navy-300 hover:decoration-navy-600 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-navy-700"
                  >
                    lifeline.org.au
                  </a>
                </p>
              </div>
              <div>
                <p className="text-sm font-medium text-navy-700">Beyond Blue</p>
                <a
                  href="tel:1300224636"
                  className="mt-2 inline-flex min-h-[44px] items-center gap-2 text-xl font-semibold text-navy-950 tabular-nums cursor-pointer hover:text-navy-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-navy-700"
                >
                  <Phone size={18} strokeWidth={1.5} aria-hidden="true" />
                  1300 22 4636
                </a>
                <p className="mt-1">
                  <a
                    href="https://www.beyondblue.org.au"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex min-h-[44px] items-center font-medium text-navy-800 underline underline-offset-4 decoration-navy-300 hover:decoration-navy-600 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-navy-700"
                  >
                    beyondblue.org.au
                  </a>
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
