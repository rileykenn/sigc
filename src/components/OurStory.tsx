'use client';

import { motion } from 'framer-motion';

const moments = [
  { year: '1950', caption: 'A tent on the 8th' },
  { year: '1953', caption: 'Eight founding members' },
  { year: '1956', caption: 'Nine holes grassed' },
  { year: 'Today', caption: 'Community owned' },
];

export default function OurStory() {
  return (
    <section id="our-story" className="bg-navy-950 py-28 sm:py-36">
      <div className="mx-auto max-w-3xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="text-center"
        >
          <h2 className="font-display text-4xl font-semibold tracking-tight text-sand-50 [text-wrap:balance] leading-[1.1] pb-1 sm:text-5xl lg:text-6xl">
            Playing here since <em className="italic text-gold-300">1953</em>
          </h2>
          <div className="mt-8 space-y-6 text-left sm:text-center">
            <p className="leading-relaxed text-sand-50/80">
              Jack and Clive Curtis bought this land in 1950 and lived in a tent
              on what is now the 8th fairway while they cleared the first three
              holes. The club formed in 1953 with eight members. By 1956 all
              nine holes were grassed, the first grassed course south of
              Wollongong.
            </p>
            <p className="leading-relaxed text-sand-50/80">
              Seventy years on, the club still runs the way it started: not for
              profit, managed by a volunteer board and five local staff.
            </p>
          </div>
        </motion.div>

        {/* Timeline strip */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, ease: 'easeOut', delay: 0.15 }}
          className="mt-16 grid grid-cols-2 gap-x-6 gap-y-10 border-t border-sand-50/20 pt-10 sm:grid-cols-4"
        >
          {moments.map((moment) => (
            <div key={moment.year}>
              <div className="font-display text-3xl font-semibold tabular-nums text-gold-300 sm:text-4xl">
                {moment.year}
              </div>
              <div className="mt-2 text-sm text-sand-50/70">{moment.caption}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
