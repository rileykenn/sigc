'use client';

import { motion } from 'framer-motion';
import {
  Trophy,
  Calendar,
  Users,
  Star,
  Zap,
  Clock,
} from 'lucide-react';

const competitions = [
  {
    icon: Trophy,
    title: 'Sussex Open',
    date: 'June 1',
    description: '18-hole open championship event',
    tag: 'Major',
    tagColor: 'bg-gold-400/20 text-gold-600',
  },
  {
    icon: Star,
    title: 'Mens Championships',
    date: 'September',
    description: '3 rounds of stroke play over 3 weekends',
    tag: 'Championship',
    tagColor: 'bg-navy-100 text-navy-700',
  },
  {
    icon: Calendar,
    title: 'Shoalhaven Week of Golf',
    date: 'February 9–13',
    description: 'Week-long regional golf festival',
    tag: 'Festival',
    tagColor: 'bg-blue-50 text-blue-600',
  },
  {
    icon: Users,
    title: 'One Hit Wonders',
    date: '1st & 3rd Monday',
    description: 'Social fun — no handicap needed, just a desire for a good time',
    tag: 'Social',
    tagColor: 'bg-orange-50 text-orange-600',
  },
  {
    icon: Zap,
    title: 'Chook Run',
    date: 'Weekly',
    description: 'Saturday to Friday — open to all members and visitors',
    tag: 'Weekly',
    tagColor: 'bg-purple-50 text-purple-600',
  },
  {
    icon: Clock,
    title: 'Thursday Gents Club',
    date: 'Every Thursday 8am',
    description: 'Regular gents social morning round',
    tag: 'Social',
    tagColor: 'bg-orange-50 text-orange-600',
  },
];

const regularDays = [
  { day: 'Sunday', type: 'AGU Competition', color: 'bg-navy-500' },
  { day: 'Tuesday', type: 'Veterans', color: 'bg-blue-500' },
  { day: 'Wednesday', type: "Women's Golf", color: 'bg-violet-500' },
];

export default function Competitions() {
  return (
    <section id="competitions" className="relative py-24 sm:py-32 bg-white overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-bl from-navy-50/80 to-transparent rounded-full -translate-y-1/2 translate-x-1/3" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-gradient-to-tr from-gold-400/5 to-transparent rounded-full translate-y-1/2 -translate-x-1/3" />

      <div className="relative mx-auto max-w-7xl px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block rounded-full bg-navy-100 px-4 py-1.5 text-sm font-semibold text-navy-700 mb-4">
            2026 Programme
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold text-navy-900 tracking-tight">
            Competitions & Events
          </h2>
          <p className="mt-4 text-lg text-gray-500 max-w-2xl mx-auto">
            Something for everyone, from social knockabouts to serious championships
          </p>
        </motion.div>

        {/* Regular Competition Days */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-14 flex flex-wrap justify-center gap-3"
        >
          {regularDays.map((day) => (
            <div
              key={day.day}
              className="flex items-center gap-2.5 rounded-full bg-white px-5 py-2.5 shadow-sm ring-1 ring-gray-100"
            >
              <span className={`h-2.5 w-2.5 rounded-full ${day.color}`} />
              <span className="text-sm font-semibold text-gray-800">{day.day}</span>
              <span className="text-sm text-gray-400">·</span>
              <span className="text-sm text-gray-500">{day.type}</span>
            </div>
          ))}
        </motion.div>

        {/* Competition Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {competitions.map((comp, i) => {
            const Icon = comp.icon;
            return (
              <motion.div
                key={comp.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-30px' }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
                className="group relative rounded-2xl bg-white p-6 shadow-sm ring-1 ring-gray-100 transition-all hover:shadow-lg hover:shadow-navy-900/5 hover:ring-navy-200"
              >
                {/* Top Row */}
                <div className="flex items-start justify-between mb-4">
                  <div className="rounded-xl bg-navy-50 p-2.5 text-navy-600 transition-transform group-hover:scale-110 duration-300">
                    <Icon size={20} strokeWidth={1.5} />
                  </div>
                  <span className={`rounded-full px-2.5 py-1 text-[11px] font-bold uppercase tracking-wider ${comp.tagColor}`}>
                    {comp.tag}
                  </span>
                </div>

                {/* Content */}
                <h3 className="text-base font-bold text-navy-900 mb-1">
                  {comp.title}
                </h3>
                <p className="text-sm text-gray-500 leading-relaxed mb-3">
                  {comp.description}
                </p>

                {/* Date */}
                <div className="flex items-center gap-1.5 text-xs font-medium text-navy-600">
                  <Calendar size={12} />
                  {comp.date}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
