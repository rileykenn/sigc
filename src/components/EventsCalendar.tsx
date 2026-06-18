'use client';

import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { calendarEvents, clubColors, type CalendarEvent } from '@/data/events';

const DAYS = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
const MONTHS = [
  'January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December',
];

function getDaysInMonth(year: number, month: number) {
  return new Date(year, month + 1, 0).getDate();
}

function getFirstDayOfMonth(year: number, month: number) {
  const day = new Date(year, month, 1).getDay();
  return day === 0 ? 6 : day - 1; // Monday = 0
}

export default function EventsCalendar() {
  const [currentMonth, setCurrentMonth] = useState(4); // May (0-indexed)
  const [currentYear, setCurrentYear] = useState(2026);
  const [selectedEvent, setSelectedEvent] = useState<CalendarEvent | null>(null);

  const daysInMonth = getDaysInMonth(currentYear, currentMonth);
  const firstDay = getFirstDayOfMonth(currentYear, currentMonth);

  const eventsByDate = useMemo(() => {
    const map: Record<string, CalendarEvent[]> = {};
    calendarEvents.forEach((e) => {
      const d = new Date(e.date);
      if (d.getMonth() === currentMonth && d.getFullYear() === currentYear) {
        const key = d.getDate().toString();
        if (!map[key]) map[key] = [];
        map[key].push(e);
      }
    });
    return map;
  }, [currentMonth, currentYear]);

  const prevMonth = () => {
    if (currentMonth === 0) {
      setCurrentMonth(11);
      setCurrentYear(currentYear - 1);
    } else {
      setCurrentMonth(currentMonth - 1);
    }
    setSelectedEvent(null);
  };

  const nextMonth = () => {
    if (currentMonth === 11) {
      setCurrentMonth(0);
      setCurrentYear(currentYear + 1);
    } else {
      setCurrentMonth(currentMonth + 1);
    }
    setSelectedEvent(null);
  };

  const today = new Date();
  const isToday = (day: number) =>
    today.getDate() === day &&
    today.getMonth() === currentMonth &&
    today.getFullYear() === currentYear;

  return (
    <section id="calendar" className="relative py-24 sm:py-32 bg-white overflow-hidden">
      {/* Background */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-bl from-navy-50/80 to-transparent rounded-full -translate-y-1/2 translate-x-1/3" />

      <div className="relative mx-auto max-w-7xl px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="inline-block rounded-full bg-navy-100 px-4 py-1.5 text-sm font-semibold text-navy-700 mb-4">
            2026 Programme
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold text-navy-900 tracking-tight">
            Events Calendar
          </h2>
          <p className="mt-4 text-lg text-gray-500 max-w-2xl mx-auto">
            Browse upcoming competitions and social events
          </p>
        </motion.div>

        {/* Legend */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-8 flex flex-wrap justify-center gap-3"
        >
          {Object.entries(clubColors).map(([club, colors]) => (
            <div key={club} className="flex items-center gap-1.5 text-xs font-medium text-gray-500">
              <span className={`h-2 w-2 rounded-full ${colors.dot}`} />
              {club}
            </div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto"
        >
          {/* Month Nav */}
          <div className="flex items-center justify-between mb-6">
            <button
              onClick={prevMonth}
              className="p-2.5 rounded-xl hover:bg-navy-50 text-navy-700 transition-colors"
            >
              <ChevronLeft size={20} />
            </button>
            <h3 className="text-xl font-bold text-navy-900">
              {MONTHS[currentMonth]} {currentYear}
            </h3>
            <button
              onClick={nextMonth}
              className="p-2.5 rounded-xl hover:bg-navy-50 text-navy-700 transition-colors"
            >
              <ChevronRight size={20} />
            </button>
          </div>

          {/* Calendar Grid */}
          <div className="rounded-2xl bg-white shadow-lg shadow-navy-900/5 ring-1 ring-gray-100 overflow-hidden">
            {/* Day Headers */}
            <div className="grid grid-cols-7 border-b border-gray-100">
              {DAYS.map((d) => (
                <div key={d} className="py-3 text-center text-xs font-semibold text-gray-400 uppercase tracking-wider">
                  {d}
                </div>
              ))}
            </div>

            {/* Day Cells */}
            <div className="grid grid-cols-7">
              {/* Empty leading cells */}
              {Array.from({ length: firstDay }).map((_, i) => (
                <div key={`empty-${i}`} className="min-h-[80px] sm:min-h-[100px] border-b border-r border-gray-50 bg-gray-50/50" />
              ))}

              {/* Day cells */}
              {Array.from({ length: daysInMonth }).map((_, i) => {
                const day = i + 1;
                const events = eventsByDate[day.toString()] || [];
                const hasEvents = events.length > 0;

                return (
                  <button
                    key={day}
                    onClick={() => {
                      if (hasEvents) setSelectedEvent(selectedEvent?.date === events[0].date ? null : events[0]);
                    }}
                    className={`relative min-h-[80px] sm:min-h-[100px] border-b border-r border-gray-50 p-1.5 sm:p-2 text-left transition-colors ${
                      hasEvents ? 'hover:bg-navy-50/50 cursor-pointer' : 'cursor-default'
                    } ${isToday(day) ? 'bg-navy-50/80' : ''}`}
                  >
                    <span className={`text-xs sm:text-sm font-medium ${
                      isToday(day) ? 'text-navy-600 font-bold' : 'text-gray-700'
                    }`}>
                      {day}
                    </span>
                    {/* Event Dots */}
                    <div className="mt-1 flex flex-col gap-0.5">
                      {events.slice(0, 2).map((ev, idx) => {
                        const colors = clubColors[ev.club];
                        return (
                          <div key={idx} className={`rounded px-1 py-0.5 text-[9px] sm:text-[10px] font-medium truncate ${colors.bg} ${colors.text}`}>
                            <span className="hidden sm:inline">{ev.title}</span>
                            <span className="sm:hidden">{ev.club}</span>
                          </div>
                        );
                      })}
                      {events.length > 2 && (
                        <span className="text-[9px] text-gray-400 font-medium">+{events.length - 2} more</span>
                      )}
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Selected Event Detail */}
          <AnimatePresence>
            {selectedEvent && (
              <motion.div
                initial={{ opacity: 0, y: -10, height: 0 }}
                animate={{ opacity: 1, y: 0, height: 'auto' }}
                exit={{ opacity: 0, y: -10, height: 0 }}
                className="mt-4 overflow-hidden"
              >
                <div className={`rounded-xl p-5 ${clubColors[selectedEvent.club].bg} ring-1 ring-black/5`}>
                  <div className="flex items-start justify-between">
                    <div>
                      <span className={`text-xs font-bold uppercase tracking-wider ${clubColors[selectedEvent.club].text}`}>
                        {selectedEvent.club}
                      </span>
                      <h4 className="text-lg font-bold text-gray-900 mt-1">{selectedEvent.title}</h4>
                      {selectedEvent.description && (
                        <p className="text-sm text-gray-600 mt-1">{selectedEvent.description}</p>
                      )}
                      <p className="text-xs text-gray-400 mt-2">
                        {new Date(selectedEvent.date).toLocaleDateString('en-AU', {
                          weekday: 'long',
                          day: 'numeric',
                          month: 'long',
                          year: 'numeric',
                        })}
                      </p>
                    </div>
                    <button
                      onClick={() => setSelectedEvent(null)}
                      className="text-gray-400 hover:text-gray-600 text-sm"
                    >
                      ✕
                    </button>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
