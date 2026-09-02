import { createClient } from '@supabase/supabase-js';
import { calendarEvents, type CalendarEvent } from '@/data/events';
import type { EventRow } from '@/lib/types';

function publicClient() {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const key = process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY;
  if (!url || !key) return null;
  return createClient(url, key, { auth: { persistSession: false } });
}

// Events from Supabase (managed at /admin/events), falling back to the
// seeded programme in src/data/events.ts when the table is empty or unreachable.
export async function getEvents(): Promise<CalendarEvent[]> {
  const supabase = publicClient();
  if (!supabase) return calendarEvents;
  try {
    const { data, error } = await supabase.from('events').select('*').order('date');
    if (error || !data || data.length === 0) return calendarEvents;
    return (data as EventRow[]).map((row) => ({
      date: row.date,
      title: row.title,
      club: row.club,
      description: row.description ?? undefined,
    }));
  } catch {
    return calendarEvents;
  }
}

// The club's local calendar date (Australia/Sydney) as YYYY-MM-DD, for string
// comparison against event dates, regardless of the server's timezone.
export function todayIso(): string {
  return new Intl.DateTimeFormat('en-CA', {
    timeZone: 'Australia/Sydney',
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
  }).format(new Date());
}

export function upcomingEvents(events: CalendarEvent[], limit = 5): CalendarEvent[] {
  const today = todayIso();
  return events
    .filter((e) => e.date >= today)
    .sort((a, b) => a.date.localeCompare(b.date))
    .slice(0, limit);
}

const WEEKDAYS = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
const MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

// "Sun 6 Sep", built from fixed arrays so server and client render the same string.
export function formatEventDate(iso: string): string {
  const [y, m, d] = iso.split('-').map(Number);
  const weekday = WEEKDAYS[new Date(Date.UTC(y, m - 1, d)).getUTCDay()];
  return `${weekday} ${d} ${MONTHS[m - 1]}`;
}
