'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Flag, Ruler, Info, BookOpen, ChevronDown, ChevronUp, MapPin } from 'lucide-react';
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
      className="rounded-2xl bg-white shadow-sm ring-1 ring-gray-100 overflow-hidden transition-all hover:shadow-lg hover:ring-fairway-200"
    >
      <button onClick={() => setOpen(!open)} className="w-full flex items-center justify-between p-5 text-left">
        <div className="flex items-center gap-4">
          <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-fairway-100 text-fairway-700 font-bold text-lg">{hole.number}</div>
          <div>
            <div className="flex items-center gap-2">
              <span className="text-base font-bold text-fairway-900">Hole {hole.number}</span>
              <span className="rounded-full bg-fairway-50 px-2.5 py-0.5 text-xs font-semibold text-fairway-600">Par {hole.par}</span>
              <span className="rounded-full bg-gold-400/15 px-2.5 py-0.5 text-xs font-semibold text-gold-600">SI {hole.strokeIndex}</span>
            </div>
            <div className="flex items-center gap-3 mt-1 text-xs text-gray-400">
              <span>{hole.metresMen}m (Men)</span><span>·</span><span>{hole.metresWomen}m (Women)</span>
            </div>
          </div>
        </div>
        <div className="text-gray-400">{open ? <ChevronUp size={18} /> : <ChevronDown size={18} />}</div>
      </button>
      {open && (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="border-t border-gray-50 px-5 pb-5">
          <p className="text-sm text-gray-600 leading-relaxed mt-4 mb-3">{hole.description}</p>
          <div className="rounded-xl bg-fairway-50 p-3 flex items-start gap-2">
            <Info size={14} className="text-fairway-600 mt-0.5 shrink-0" />
            <p className="text-xs text-fairway-700 font-medium">{hole.tip}</p>
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
      {/* Hero */}
      <section className="relative pt-28 pb-16 sm:pt-36 sm:pb-24 bg-white overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-fairway-50/50 to-white" />
        <div className="relative mx-auto max-w-7xl px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }}>
              <span className="inline-flex items-center gap-2 rounded-full bg-fairway-100 px-4 py-2 text-sm font-semibold text-fairway-700 mb-6">
                <MapPin size={14} /> 9 Hole Championship Course
              </span>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-fairway-950 tracking-tight leading-[0.95] mb-4">
                Course<br /><span className="text-fairway-600">Overview</span>
              </h1>
              <p className="text-lg text-gray-500 max-w-md leading-relaxed">
                Explore every hole of our scenic bushland course. From tight tree-lined fairways to wide-open par 5s.
              </p>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6, delay: 0.2 }} className="relative rounded-2xl overflow-hidden shadow-2xl shadow-fairway-900/10 aspect-[16/10]">
              <Image src="/images/drone/DJI_0120.webp" alt="Sussex Inlet Golf Course" fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover" priority />
              <div className="absolute inset-0 bg-gradient-to-t from-fairway-950/30 to-transparent" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="bg-fairway-900 py-8">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6">
            {[
              { label: 'Holes', value: String(courseInfo.holes) },
              { label: 'Total Par', value: String(courseInfo.totalPar) },
              { label: 'Course Rating', value: String(courseInfo.rating) },
              { label: 'Slope Rating', value: String(courseInfo.slopeRating) },
              { label: 'Metres (Men)', value: courseInfo.totalMetresMen.toLocaleString() },
              { label: 'Metres (Women)', value: courseInfo.totalMetresWomen.toLocaleString() },
            ].map((s) => (
              <div key={s.label} className="text-center">
                <div className="text-2xl sm:text-3xl font-bold text-gold-400">{s.value}</div>
                <div className="text-xs text-fairway-300/70 mt-1">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Scorecard */}
      <section className="py-16 sm:py-24 bg-sand-50">
        <div className="mx-auto max-w-5xl px-6">
          <div className="flex items-center gap-2 mb-6">
            <Ruler size={20} className="text-fairway-600" />
            <h2 className="text-2xl font-bold text-fairway-900">Scorecard</h2>
          </div>
          <div className="rounded-2xl bg-white shadow-lg shadow-fairway-900/5 ring-1 ring-gray-100 overflow-x-auto">
            <table className="w-full min-w-[600px]">
              <thead>
                <tr className="bg-fairway-700 text-white">
                  <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wider">Hole</th>
                  {holes.map((h) => (<th key={h.number} className="px-3 py-3 text-center text-xs font-semibold">{h.number}</th>))}
                  <th className="px-4 py-3 text-center text-xs font-bold bg-fairway-800">Total</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-100">
                  <td className="px-4 py-3 text-xs font-semibold text-gray-500 uppercase">Par</td>
                  {holes.map((h) => (<td key={h.number} className="px-3 py-3 text-center text-sm font-bold text-fairway-900">{h.par}</td>))}
                  <td className="px-4 py-3 text-center text-sm font-bold text-fairway-700 bg-fairway-50">{courseInfo.totalPar}</td>
                </tr>
                <tr className="border-b border-gray-100">
                  <td className="px-4 py-3 text-xs font-semibold text-gray-500 uppercase">SI</td>
                  {holes.map((h) => (<td key={h.number} className="px-3 py-3 text-center text-sm text-gray-600">{h.strokeIndex}</td>))}
                  <td className="px-4 py-3 text-center text-sm text-gray-400 bg-fairway-50">—</td>
                </tr>
                <tr className="border-b border-gray-100 bg-blue-50/30">
                  <td className="px-4 py-3 text-xs font-semibold text-blue-600 uppercase">Men (m)</td>
                  {holes.map((h) => (<td key={h.number} className="px-3 py-3 text-center text-sm text-gray-700">{h.metresMen}</td>))}
                  <td className="px-4 py-3 text-center text-sm font-bold text-blue-700 bg-blue-50">{courseInfo.totalMetresMen}</td>
                </tr>
                <tr className="bg-pink-50/30">
                  <td className="px-4 py-3 text-xs font-semibold text-pink-600 uppercase">Women (m)</td>
                  {holes.map((h) => (<td key={h.number} className="px-3 py-3 text-center text-sm text-gray-700">{h.metresWomen}</td>))}
                  <td className="px-4 py-3 text-center text-sm font-bold text-pink-700 bg-pink-50">{courseInfo.totalMetresWomen}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Hole by Hole */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="mx-auto max-w-3xl px-6">
          <div className="flex items-center gap-2 mb-8">
            <Flag size={20} className="text-fairway-600" />
            <h2 className="text-2xl font-bold text-fairway-900">Hole by Hole Guide</h2>
          </div>
          <div className="space-y-3">
            {holes.map((hole, i) => (<HoleCard key={hole.number} hole={hole} index={i} />))}
          </div>
        </div>
      </section>

      {/* Etiquette */}
      <section className="py-16 sm:py-24 bg-sand-50">
        <div className="mx-auto max-w-3xl px-6">
          <div className="flex items-center gap-2 mb-6">
            <BookOpen size={20} className="text-fairway-600" />
            <h2 className="text-2xl font-bold text-fairway-900">Course Etiquette</h2>
          </div>
          <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-gray-100">
            <ul className="space-y-3">
              {courseRules.map((rule, i) => (
                <li key={i} className="flex items-start gap-3 text-sm text-gray-600">
                  <span className="flex items-center justify-center w-5 h-5 rounded-full bg-fairway-100 text-fairway-600 text-[10px] font-bold shrink-0 mt-0.5">{i + 1}</span>
                  {rule}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
