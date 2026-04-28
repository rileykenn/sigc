'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, ChevronUp } from 'lucide-react';
import Image from 'next/image';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { holes, courseInfo, courseRules, type HoleData } from '@/data/courseData';

function HoleCard({ hole, index }: { hole: HoleData; index: number }) {
  const [open, setOpen] = useState(false);
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-30px' }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      className="border-b border-sand-200 last:border-b-0"
    >
      <button onClick={() => setOpen(!open)} className="w-full flex items-center justify-between py-6 text-left group">
        <div className="flex items-center gap-5">
          <span className="font-serif text-3xl text-green-900">{hole.number}</span>
          <div>
            <div className="flex items-center gap-3">
              <span className="text-sm font-semibold text-green-900">Hole {hole.number}</span>
              <span className="text-xs text-gold-500 font-medium">Par {hole.par}</span>
              <span className="text-xs text-gray-400">SI {hole.strokeIndex}</span>
            </div>
            <div className="flex items-center gap-3 mt-0.5 text-xs text-gray-400">
              <span>{hole.metresMen}m Men</span>
              <span>·</span>
              <span>{hole.metresWomen}m Women</span>
            </div>
          </div>
        </div>
        <div className="text-gray-300 group-hover:text-green-700 transition-colors">
          {open ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
        </div>
      </button>
      {open && (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="pb-6">
          <p className="text-sm text-gray-500 leading-relaxed mb-3">{hole.description}</p>
          <div className="bg-green-50 rounded-lg p-4">
            <p className="text-xs text-green-700 font-medium italic">&ldquo;{hole.tip}&rdquo;</p>
          </div>
        </motion.div>
      )}
    </motion.div>
  );
}

export default function CoursePage() {
  return (
    <main>
      <Navbar />

      {/* Hero — Full bleed like Teven */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
        <Image
          src="/media/putting.webp"
          alt="Sussex Inlet Golf Course"
          fill
          className="object-cover"
          sizes="100vw"
          priority
        />
        <div className="absolute inset-0 bg-black/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />

        <div className="relative z-10 text-center px-6">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-gold-400 uppercase tracking-[0.25em] text-sm font-medium mb-4"
          >
            The Experience
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="font-serif italic text-5xl sm:text-6xl md:text-7xl text-white"
          >
            The Course
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.6 }}
            className="text-white/70 mt-4 max-w-lg mx-auto"
          >
            A scenic 9 hole layout winding through native Australian bushland.
            Wildlife on every fairway.
          </motion.p>
        </div>
      </section>

      {/* Course Info Cards */}
      <section className="py-12 bg-cream">
        <div className="mx-auto max-w-5xl px-6">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {[
              { label: 'Holes', value: String(courseInfo.holes) },
              { label: 'Total Par', value: String(courseInfo.totalPar) },
              { label: 'Course Rating', value: String(courseInfo.rating) },
              { label: 'Slope Rating', value: String(courseInfo.slopeRating) },
              { label: 'Metres (Men)', value: courseInfo.totalMetresMen.toLocaleString() },
              { label: 'Metres (Women)', value: courseInfo.totalMetresWomen.toLocaleString() },
            ].map((s) => (
              <div key={s.label} className="bg-white rounded-xl p-5 text-center">
                <p className="text-xs text-gold-500 uppercase tracking-wider font-semibold mb-1">{s.label}</p>
                <p className="text-xl font-serif text-green-900">{s.value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Scorecard */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-5xl px-6">
          <div className="mb-8">
            <p className="text-gold-500 uppercase tracking-[0.2em] text-sm font-medium mb-3">Details</p>
            <h2 className="font-serif italic text-3xl text-green-900">Scorecard</h2>
          </div>
          <div className="rounded-xl overflow-x-auto bg-cream">
            <table className="w-full min-w-[600px]">
              <thead>
                <tr className="bg-green-800 text-white">
                  <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wider">Hole</th>
                  {holes.map((h) => (<th key={h.number} className="px-3 py-3 text-center text-xs font-semibold">{h.number}</th>))}
                  <th className="px-4 py-3 text-center text-xs font-bold bg-green-900">Total</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-sand-200">
                  <td className="px-4 py-3 text-xs font-semibold text-gray-500 uppercase">Par</td>
                  {holes.map((h) => (<td key={h.number} className="px-3 py-3 text-center text-sm font-bold text-green-900">{h.par}</td>))}
                  <td className="px-4 py-3 text-center text-sm font-bold text-green-800 bg-green-50">{courseInfo.totalPar}</td>
                </tr>
                <tr className="border-b border-sand-200">
                  <td className="px-4 py-3 text-xs font-semibold text-gray-500 uppercase">SI</td>
                  {holes.map((h) => (<td key={h.number} className="px-3 py-3 text-center text-sm text-gray-600">{h.strokeIndex}</td>))}
                  <td className="px-4 py-3 text-center text-sm text-gray-400 bg-green-50">—</td>
                </tr>
                <tr className="border-b border-sand-200">
                  <td className="px-4 py-3 text-xs font-semibold text-gray-500 uppercase">Men (m)</td>
                  {holes.map((h) => (<td key={h.number} className="px-3 py-3 text-center text-sm text-gray-700">{h.metresMen}</td>))}
                  <td className="px-4 py-3 text-center text-sm font-bold text-green-800 bg-green-50">{courseInfo.totalMetresMen}</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 text-xs font-semibold text-gray-500 uppercase">Women (m)</td>
                  {holes.map((h) => (<td key={h.number} className="px-3 py-3 text-center text-sm text-gray-700">{h.metresWomen}</td>))}
                  <td className="px-4 py-3 text-center text-sm font-bold text-green-800 bg-green-50">{courseInfo.totalMetresWomen}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Hole by Hole */}
      <section className="py-20 bg-cream">
        <div className="mx-auto max-w-3xl px-6">
          <div className="mb-8">
            <p className="text-gold-500 uppercase tracking-[0.2em] text-sm font-medium mb-3">Discovery</p>
            <h2 className="font-serif italic text-3xl text-green-900">Hole by Hole</h2>
          </div>
          <div>
            {holes.map((hole, i) => (<HoleCard key={hole.number} hole={hole} index={i} />))}
          </div>
        </div>
      </section>

      {/* Etiquette */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-3xl px-6">
          <div className="mb-8">
            <p className="text-gold-500 uppercase tracking-[0.2em] text-sm font-medium mb-3">On the Course</p>
            <h2 className="font-serif italic text-3xl text-green-900">Course Etiquette</h2>
          </div>
          <div className="space-y-4">
            {courseRules.map((rule, i) => (
              <div key={i} className="flex items-start gap-4 text-sm text-gray-500">
                <span className="flex items-center justify-center w-6 h-6 rounded-full bg-green-50 text-green-700 text-xs font-bold shrink-0 mt-0.5">{i + 1}</span>
                {rule}
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
