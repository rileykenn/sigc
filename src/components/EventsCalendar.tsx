'use client';

import { useMemo, useRef, useState } from 'react';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';
import { clubColors, clubLabels, type CalendarEvent } from '@/data/events';

const DAYS = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
const MONTHS = [
  'January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December',
];

const iconButton =
  'flex h-11 w-11 cursor-pointer items-center justify-center text-navy-950 transition-colors hover:bg-sand-100 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-navy-700';

function daysInMonth(year: number, month: number) {
  return new Date(year, month + 1, 0).getDate();
}

// Monday = 0 ... Sunday = 6
function firstWeekdayOfMonth(year: number, month: number) {
  const day = new Date(year, month, 1).getDay();
  return day === 0 ? 6 : day - 1;
}

// Event dates are YYYY-MM-DD strings. Parse them as local calendar dates so a
// Sunday competition never shifts to Saturday in a different timezone.
function parseIso(iso: string) {
  const [y, m, d] = iso.split('-').map(Number);
  return { year: y, month: m - 1, day: d };
}

// Today's calendar date, from the page's Australia/Sydney date when provided
// so the server-rendered markup and the client agree.
function resolveToday(today?: string) {
  if (today) return parseIso(today);
  const now = new Date();
  return { year: now.getFullYear(), month: now.getMonth(), day: now.getDate() };
}

function longDate(year: number, month: number, day: number) {
  return new Date(year, month, day).toLocaleDateString('en-AU', {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });
}

function clubLabel(club: string) {
  return clubLabels[club] ?? club;
}

type Cell = { key: string; day: number | null; index: number };

export default function EventsCalendar({ events, today }: { events: CalendarEvent[]; today?: string }) {
  const todayDate = resolveToday(today);
  const [month, setMonth] = useState(todayDate.month);
  const [year, setYear] = useState(todayDate.year);
  const [selectedDay, setSelectedDay] = useState<number | null>(null);
  const cellRefs = useRef<Record<number, HTMLButtonElement | null>>({});

  const eventsByDay = useMemo(() => {
    const map: Record<number, CalendarEvent[]> = {};
    for (const e of events) {
      const d = parseIso(e.date);
      if (d.year === year && d.month === month) {
        (map[d.day] ??= []).push(e);
      }
    }
    return map;
  }, [events, month, year]);

  const monthHasEvents = Object.keys(eventsByDay).length > 0;

  // One flat list of cells padded to whole weeks so the grid is a full rectangle.
  const cells = useMemo<Cell[]>(() => {
    const lead = firstWeekdayOfMonth(year, month);
    const count = daysInMonth(year, month);
    const total = Math.ceil((lead + count) / 7) * 7;
    return Array.from({ length: total }, (_, i) => {
      const day = i - lead + 1;
      const inMonth = day >= 1 && day <= count;
      return { key: inMonth ? `d${day}` : `pad${i}`, day: inMonth ? day : null, index: i };
    });
  }, [year, month]);

  const goToMonth = (delta: number) => {
    const next = new Date(year, month + delta, 1);
    setMonth(next.getMonth());
    setYear(next.getFullYear());
    setSelectedDay(null);
  };

  const closePanel = () => {
    const day = selectedDay;
    setSelectedDay(null);
    if (day !== null) cellRefs.current[day]?.focus();
  };

  const isToday = (day: number) =>
    todayDate.day === day && todayDate.month === month && todayDate.year === year;

  const selectedEvents = selectedDay !== null ? eventsByDay[selectedDay] ?? [] : [];
  const lastRowStart = cells.length - 7;

  return (
    <section className="bg-white py-16 sm:py-24">
      <div className="mx-auto max-w-4xl px-6">
        {/* Legend */}
        <ul className="flex flex-wrap gap-x-5 gap-y-2 text-sm text-navy-900/70">
          {Object.entries(clubColors).map(([club, colors]) => (
            <li key={club} className="flex items-center gap-2">
              <span aria-hidden="true" className={`inline-block h-2 w-2 ${colors.dot}`} />
              {clubLabel(club)}
            </li>
          ))}
        </ul>

        {/* Month navigation */}
        <div className="mt-8 flex items-center justify-between">
          <button type="button" onClick={() => goToMonth(-1)} aria-label="Previous month" className={iconButton}>
            <ChevronLeft size={20} strokeWidth={1.5} aria-hidden="true" />
          </button>
          <h2 aria-live="polite" className="font-display text-2xl font-semibold tabular-nums text-navy-950">
            {MONTHS[month]} {year}
          </h2>
          <button type="button" onClick={() => goToMonth(1)} aria-label="Next month" className={iconButton}>
            <ChevronRight size={20} strokeWidth={1.5} aria-hidden="true" />
          </button>
        </div>

        {/* Calendar grid */}
        <div className="mt-4 border border-navy-950/15">
          <div className="grid grid-cols-7">
            {DAYS.map((d) => (
              <div key={d} className="border-b border-navy-950/15 py-2 text-center text-sm font-medium text-navy-900/70">
                {d}
              </div>
            ))}
          </div>

          <div className="grid grid-cols-7">
            {cells.map((cell) => {
              const edge =
                (cell.index % 7 === 6 ? ' border-r-0' : '') +
                (cell.index >= lastRowStart ? ' border-b-0' : '');
              const base = 'min-h-20 border-b border-r border-navy-950/10 p-1.5 align-top sm:min-h-24' + edge;

              if (cell.day === null) {
                return <div key={cell.key} aria-hidden="true" className={`${base} bg-sand-50`} />;
              }

              const day = cell.day;
              const dayEvents = eventsByDay[day] ?? [];
              const hasEvents = dayEvents.length > 0;
              const todayCell = isToday(day);
              const selected = selectedDay === day;
              const dayNumber = (
                <span className={`text-sm tabular-nums ${todayCell ? 'font-semibold text-navy-950' : 'font-medium text-navy-900/70'}`}>
                  {day}
                  {todayCell && <span className="sr-only"> (today)</span>}
                </span>
              );

              if (!hasEvents) {
                return (
                  <div key={cell.key} className={`${base}${todayCell ? ' bg-sand-100' : ''}`}>
                    {dayNumber}
                  </div>
                );
              }

              const label = `${longDate(year, month, day)}${todayCell ? ', today' : ''}: ${dayEvents
                .map((e) => e.title)
                .join(', ')}`;

              return (
                <button
                  key={cell.key}
                  type="button"
                  ref={(el) => {
                    cellRefs.current[day] = el;
                  }}
                  onClick={() => setSelectedDay(selected ? null : day)}
                  aria-pressed={selected}
                  aria-label={label}
                  className={`${base} relative w-full cursor-pointer text-left transition-colors hover:bg-sand-100 focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-navy-700${
                    todayCell || selected ? ' bg-sand-100' : ''
                  }`}
                >
                  {dayNumber}
                  <span className="mt-1 flex flex-col gap-0.5">
                    {dayEvents.slice(0, 2).map((ev, i) => {
                      const colors = clubColors[ev.club] ?? clubColors.General;
                      return (
                        <span
                          key={`${ev.date}-${i}`}
                          className={`truncate border border-current/30 px-1.5 py-0.5 text-[11px] font-medium ${colors.bg} ${colors.text}`}
                        >
                          <span className="hidden sm:inline">{ev.title}</span>
                          <span className="sm:hidden">{clubLabel(ev.club)}</span>
                        </span>
                      );
                    })}
                    {dayEvents.length > 2 && (
                      <span className="text-[11px] font-medium tabular-nums text-navy-900/70">
                        +{dayEvents.length - 2} more
                      </span>
                    )}
                  </span>
                  {selected && <span aria-hidden="true" className="absolute inset-x-0 bottom-0 h-0.5 bg-gold-500" />}
                </button>
              );
            })}
          </div>
        </div>

        {!monthHasEvents && (
          <p className="mt-4 text-sm text-navy-900/70">
            Nothing on the calendar for {MONTHS[month]} {year} yet.
          </p>
        )}

        {/* Selected day detail, rendered only while a day is chosen */}
        {selectedDay !== null && selectedEvents.length > 0 && (
          <div className="mt-4 border border-navy-950/15 bg-white p-5">
            <div className="flex items-start justify-between gap-4">
              <h3 className="font-display text-xl font-semibold text-navy-950">
                {longDate(year, month, selectedDay)}
              </h3>
              <button type="button" onClick={closePanel} aria-label="Close event details" className={`${iconButton} -mr-2 -mt-2 shrink-0`}>
                <X size={18} strokeWidth={1.5} aria-hidden="true" />
              </button>
            </div>
            <ul className="mt-2 divide-y divide-navy-950/10">
              {selectedEvents.map((ev, i) => (
                <li key={`${ev.date}-${i}`} className="py-3">
                  <p className="font-medium text-navy-950">{ev.title}</p>
                  <p className="mt-0.5 text-sm text-navy-900/70">{clubLabel(ev.club)}</p>
                  {ev.description && (
                    <p className="mt-1 max-w-[62ch] text-sm leading-relaxed text-navy-900/75">{ev.description}</p>
                  )}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </section>
  );
}
