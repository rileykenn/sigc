'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import Image from 'next/image';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { holes, courseInfo, courseRules, type HoleData } from '@/data/courseData';

function HoleRow({ hole, index }: { hole: HoleData; index: number }) {
  const [open, setOpen] = useState(false);
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-30px' }}
      transition={{ duration: 0.5, delay: Math.min(index * 0.05, 0.25), ease: 'easeOut' }}
      className="border-b border-navy-900/10"
    >
      <button
        onClick={() => setOpen(!open)}
        aria-expanded={open}
        className="flex w-full cursor-pointer items-center gap-4 py-5 text-left focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-navy-700 sm:gap-5"
      >
        <span className="w-10 shrink-0 font-display text-3xl font-semibold tabular-nums text-navy-950">
          {hole.number}
        </span>
        <span className="flex flex-1 flex-wrap items-center gap-x-4 gap-y-1.5">
          <span className="rounded-lg bg-fairway-50 px-2.5 py-1 text-xs font-medium tabular-nums text-fairway-800">
            Par {hole.par}
          </span>
          <span className="text-sm tabular-nums text-navy-900/60">SI {hole.strokeIndex}</span>
          <span className="text-sm tabular-nums text-navy-900/60">
            {hole.metresMen}m men, {hole.metresWomen}m women
          </span>
        </span>
        <ChevronDown
          size={18}
          strokeWidth={1.5}
          className={`shrink-0 text-navy-900/50 transition-transform duration-300 ${open ? 'rotate-180' : ''}`}
        />
      </button>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
          className="pb-6 sm:pl-[3.75rem]"
        >
          <p className="max-w-[62ch] text-sm leading-relaxed text-navy-900/70">{hole.description}</p>
          <div className="mt-4 border-l-2 border-gold-400 pl-4">
            <p className="text-sm font-medium text-navy-700">Local tip</p>
            <p className="mt-1 max-w-[62ch] text-sm leading-relaxed text-navy-900/70">{hole.tip}</p>
          </div>
        </motion.div>
      )}
    </motion.div>
  );
}

export default function CoursePage() {
  const stats = [
    { label: 'Holes', value: String(courseInfo.holes) },
    { label: 'Par', value: String(courseInfo.totalPar) },
    { label: 'Rating', value: String(courseInfo.rating) },
    { label: 'Slope', value: String(courseInfo.slopeRating) },
    { label: 'Metres (men)', value: courseInfo.totalMetresMen.toLocaleString() },
    { label: 'Metres (women)', value: courseInfo.totalMetresWomen.toLocaleString() },
  ];

  return (
    <main>
      <Navbar />

      {/* Hero */}
      <section className="bg-sand-50 pt-28 pb-16 sm:pt-36 sm:pb-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
              className="lg:col-span-5"
            >
              <h1 className="font-display text-5xl font-semibold tracking-tight text-navy-950 [text-wrap:balance] sm:text-6xl lg:text-7xl">
                The course
              </h1>
              <p className="mt-5 max-w-[62ch] leading-relaxed text-navy-900/70">
                Nine holes through native bushland on the NSW South Coast. Here is the scorecard, a
                hole-by-hole guide and the local knowledge that saves a shot or two.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15, ease: 'easeOut' }}
              className="relative aspect-[16/10] overflow-hidden rounded-2xl shadow-lg shadow-navy-900/5 lg:col-span-7"
            >
              <Image
                src="/images/drone/DJI_0120.webp"
                alt="Aerial view of Sussex Inlet Golf Club fairways winding through bushland"
                fill
                sizes="(max-width: 1024px) 100vw, 58vw"
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-950/30 to-transparent" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats row */}
      <section className="border-y border-navy-900/10 bg-white py-10">
        <div className="mx-auto max-w-7xl px-6">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            className="grid grid-cols-2 gap-x-6 gap-y-8 sm:grid-cols-3 lg:grid-cols-6"
          >
            {stats.map((s) => (
              <div key={s.label} className="border-l border-navy-900/15 pl-4">
                <div className="font-display text-3xl font-semibold tabular-nums text-navy-950 sm:text-4xl">
                  {s.value}
                </div>
                <div className="mt-1 text-sm text-navy-900/60">{s.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Scorecard */}
      <section className="bg-sand-50 py-16 sm:py-24">
        <div className="mx-auto max-w-5xl px-6">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
          >
            <h2 className="font-display text-4xl font-semibold tracking-tight text-navy-950 [text-wrap:balance] sm:text-5xl">
              Scorecard
            </h2>
            <p className="mt-3 text-navy-900/70">White tees, measured in metres.</p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1, ease: 'easeOut' }}
            className="mt-8 overflow-x-auto rounded-2xl border border-navy-900/10 bg-white shadow-sm shadow-navy-900/5"
          >
            <table className="w-full min-w-[640px] text-sm tabular-nums">
              <thead>
                <tr className="border-b-2 border-navy-950/80">
                  <th className="px-4 py-3.5 text-left font-medium text-navy-900/60">Hole</th>
                  {holes.map((h) => (
                    <th key={h.number} className="px-3 py-3.5 text-center font-semibold text-navy-950">
                      {h.number}
                    </th>
                  ))}
                  <th className="px-4 py-3.5 text-center font-semibold text-navy-950">Total</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-navy-900/10">
                  <td className="px-4 py-3 text-navy-900/60">Par</td>
                  {holes.map((h) => (
                    <td key={h.number} className="px-3 py-3 text-center font-semibold text-navy-950">
                      {h.par}
                    </td>
                  ))}
                  <td className="bg-sand-100 px-4 py-3 text-center font-semibold text-navy-950">
                    {courseInfo.totalPar}
                  </td>
                </tr>
                <tr className="border-b border-navy-900/10">
                  <td className="px-4 py-3 text-navy-900/60">SI</td>
                  {holes.map((h) => (
                    <td key={h.number} className="px-3 py-3 text-center text-navy-900/70">
                      {h.strokeIndex}
                    </td>
                  ))}
                  <td className="bg-sand-100 px-4 py-3" />
                </tr>
                <tr className="border-b border-navy-900/10">
                  <td className="px-4 py-3 text-navy-900/60">Men (m)</td>
                  {holes.map((h) => (
                    <td key={h.number} className="px-3 py-3 text-center text-navy-900/70">
                      {h.metresMen}
                    </td>
                  ))}
                  <td className="bg-sand-100 px-4 py-3 text-center font-semibold text-navy-950">
                    {courseInfo.totalMetresMen.toLocaleString()}
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-3 text-navy-900/60">Women (m)</td>
                  {holes.map((h) => (
                    <td key={h.number} className="px-3 py-3 text-center text-navy-900/70">
                      {h.metresWomen}
                    </td>
                  ))}
                  <td className="bg-sand-100 px-4 py-3 text-center font-semibold text-navy-950">
                    {courseInfo.totalMetresWomen.toLocaleString()}
                  </td>
                </tr>
              </tbody>
            </table>
          </motion.div>
        </div>
      </section>

      {/* Hole by hole */}
      <section className="bg-white py-16 sm:py-24">
        <div className="mx-auto max-w-3xl px-6">
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            className="font-display text-4xl font-semibold tracking-tight text-navy-950 [text-wrap:balance] sm:text-5xl"
          >
            Hole by hole
          </motion.h2>
          <div className="mt-10 border-t border-navy-900/10">
            {holes.map((hole, i) => (
              <HoleRow key={hole.number} hole={hole} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* Etiquette */}
      <section className="bg-sand-50 py-16 sm:py-24">
        <div className="mx-auto max-w-3xl px-6">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
          >
            <h2 className="font-display text-4xl font-semibold tracking-tight text-navy-950 [text-wrap:balance] sm:text-5xl">
              Course etiquette
            </h2>
            <p className="mt-3 max-w-[62ch] leading-relaxed text-navy-900/70">
              A few local rules that keep the course in good shape and the neighbours on side.
            </p>
          </motion.div>
          <motion.ul
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1, ease: 'easeOut' }}
            className="mt-8 border-t border-navy-900/10"
          >
            {courseRules.map((rule, i) => (
              <li
                key={i}
                className="flex items-start gap-4 border-b border-navy-900/10 py-3.5 text-sm leading-relaxed text-navy-900/70"
              >
                <span className="w-6 shrink-0 pt-px text-right tabular-nums text-navy-900/40">
                  {i + 1}
                </span>
                {rule}
              </li>
            ))}
          </motion.ul>
        </div>
      </section>

      <Footer />
    </main>
  );
}
