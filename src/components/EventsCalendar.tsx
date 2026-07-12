'use client';

import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';
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
  const now = new Date();
  const [currentMonth, setCurrentMonth] = useState(now.getMonth());
  const [currentYear, setCurrentYear] = useState(now.getFullYear());
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
    <section id="calendar" className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-4xl px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          <h2 className="font-display text-4xl font-semibold tracking-tight text-navy-950 [text-wrap:balance] sm:text-5xl lg:text-6xl">
            What&apos;s on
          </h2>
          <p className="mt-4 max-w-[62ch] leading-relaxed text-navy-900/70">
            The main competition day is Sunday, with member groups playing through the week.
            Saturdays are left for social play and visitors.
          </p>
        </motion.div>

        {/* Legend */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="mt-10 flex flex-wrap gap-x-4 gap-y-2"
        >
          {Object.entries(clubColors).map(([club, colors]) => (
            <div key={club} className="flex items-center gap-1.5 text-xs font-medium text-navy-700">
              <span className={`h-2 w-2 rounded-full ${colors.dot}`} />
              {club}
            </div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="mt-8"
        >
          {/* Month nav */}
          <div className="mb-6 flex items-center justify-between">
            <button
              onClick={prevMonth}
              aria-label="Previous month"
              className="flex h-11 w-11 cursor-pointer items-center justify-center rounded-full text-navy-700 transition-colors hover:bg-navy-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-navy-700"
            >
              <ChevronLeft size={20} strokeWidth={1.5} />
            </button>
            <h3 className="font-display text-2xl font-semibold tabular-nums text-navy-950">
              {MONTHS[currentMonth]} {currentYear}
            </h3>
            <button
              onClick={nextMonth}
              aria-label="Next month"
              className="flex h-11 w-11 cursor-pointer items-center justify-center rounded-full text-navy-700 transition-colors hover:bg-navy-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-navy-700"
            >
              <ChevronRight size={20} strokeWidth={1.5} />
            </button>
          </div>

          {/* Calendar grid */}
          <div className="overflow-hidden rounded-2xl bg-white shadow-sm shadow-navy-900/5 ring-1 ring-navy-100">
            {/* Day headers */}
            <div className="grid grid-cols-7 border-b border-navy-100">
              {DAYS.map((d) => (
                <div key={d} className="py-3 text-center text-xs font-medium text-navy-700">
                  {d}
                </div>
              ))}
            </div>

            {/* Day cells */}
            <div className="grid grid-cols-7">
              {/* Empty leading cells */}
              {Array.from({ length: firstDay }).map((_, i) => (
                <div
                  key={`empty-${i}`}
                  className="min-h-[80px] border-b border-r border-navy-50 bg-sand-50/60 sm:min-h-[100px]"
                />
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
                    className={`relative min-h-[80px] border-b border-r border-navy-50 p-1.5 text-left transition-colors focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-navy-700 sm:min-h-[100px] sm:p-2 ${
                      hasEvents ? 'cursor-pointer hover:bg-navy-50/60' : 'cursor-default'
                    } ${isToday(day) ? 'bg-navy-50/80' : ''}`}
                  >
                    <span
                      className={`text-xs tabular-nums sm:text-sm ${
                        isToday(day) ? 'font-semibold text-navy-900' : 'font-medium text-navy-900/70'
                      }`}
                    >
                      {day}
                    </span>
                    {/* Event chips */}
                    <div className="mt-1 flex flex-col gap-0.5">
                      {events.slice(0, 2).map((ev, idx) => {
                        const colors = clubColors[ev.club];
                        return (
                          <div
                            key={idx}
                            className={`truncate rounded-lg px-1.5 py-0.5 text-[9px] font-medium sm:text-[10px] ${colors.bg} ${colors.text}`}
                          >
                            <span className="hidden sm:inline">{ev.title}</span>
                            <span className="sm:hidden">{ev.club}</span>
                          </div>
                        );
                      })}
                      {events.length > 2 && (
                        <span className="text-[9px] font-medium tabular-nums text-navy-900/50">
                          +{events.length - 2} more
                        </span>
                      )}
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Selected event detail */}
          <AnimatePresence>
            {selectedEvent && (
              <motion.div
                initial={{ opacity: 0, y: -10, height: 0 }}
                animate={{ opacity: 1, y: 0, height: 'auto' }}
                exit={{ opacity: 0, y: -10, height: 0 }}
                className="mt-4 overflow-hidden"
              >
                <div className={`rounded-2xl p-5 ${clubColors[selectedEvent.club].bg} ring-1 ring-navy-950/5`}>
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <span className={`text-xs font-semibold ${clubColors[selectedEvent.club].text}`}>
                        {selectedEvent.club}
                      </span>
                      <h4 className="mt-1 text-lg font-semibold text-navy-950">{selectedEvent.title}</h4>
                      {selectedEvent.description && (
                        <p className="mt-1 text-sm leading-relaxed text-navy-900/70">
                          {selectedEvent.description}
                        </p>
                      )}
                      <p className="mt-2 text-xs text-navy-900/60">
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
                      aria-label="Close event details"
                      className="-mr-2 -mt-2 flex h-11 w-11 shrink-0 cursor-pointer items-center justify-center rounded-full text-navy-900/60 transition-colors hover:text-navy-900 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-navy-700"
                    >
                      <X size={18} strokeWidth={1.5} />
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
