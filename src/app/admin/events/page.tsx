'use client';

import { useEffect, useMemo, useState } from 'react';
import { toast } from 'sonner';
import { Search, Plus, Edit2, Trash2, X, Loader2, CalendarX } from 'lucide-react';
import { createClient } from '@/lib/supabase/client';
import { clubColors } from '@/data/events';
import { CLUBS, type Club, type EventRow } from '@/lib/types';

type EventDraft = {
  id: string | null;
  date: string;
  title: string;
  club: Club;
  description: string;
};

const emptyDraft: EventDraft = { id: null, date: '', title: '', club: 'General', description: '' };

export default function EventsManager() {
  const [events, setEvents] = useState<EventRow[]>([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState('');
  const [clubFilter, setClubFilter] = useState('All');
  const [scope, setScope] = useState<'upcoming' | 'past' | 'all'>('upcoming');
  const [draft, setDraft] = useState<EventDraft | null>(null);
  const [saving, setSaving] = useState(false);

  const loadEvents = async () => {
    const { data, error } = await createClient()
      .from('events')
      .select('id, date, title, club, description')
      .order('date', { ascending: true });
    if (error) {
      toast.error('Could not load events', { description: error.message });
    } else {
      setEvents((data ?? []) as EventRow[]);
    }
    setLoading(false);
  };

  useEffect(() => {
    loadEvents();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const today = new Date().toISOString().slice(0, 10);

  const filtered = useMemo(() => {
    return events.filter((e) => {
      if (scope === 'upcoming' && e.date < today) return false;
      if (scope === 'past' && e.date >= today) return false;
      if (clubFilter !== 'All' && e.club !== clubFilter) return false;
      if (search && !`${e.title} ${e.club}`.toLowerCase().includes(search.toLowerCase())) return false;
      return true;
    });
  }, [events, search, clubFilter, scope, today]);

  const handleDelete = async (event: EventRow) => {
    if (!window.confirm(`Delete "${event.title}" on ${event.date}? This can't be undone.`)) return;
    const { error } = await createClient().from('events').delete().eq('id', event.id);
    if (error) {
      toast.error('Could not delete event', { description: error.message });
      return;
    }
    setEvents((prev) => prev.filter((e) => e.id !== event.id));
    toast.success('Event deleted', { description: 'The event has been removed from the calendar.' });
  };

  const handleSave = async () => {
    if (!draft) return;
    if (!draft.date || !draft.title.trim()) {
      toast.error('Date and title are required');
      return;
    }
    setSaving(true);
    const supabase = createClient();
    const payload = {
      date: draft.date,
      title: draft.title.trim(),
      club: draft.club,
      description: draft.description.trim() || null,
    };

    if (draft.id) {
      const { error } = await supabase.from('events').update(payload).eq('id', draft.id);
      if (error) {
        toast.error('Could not update event', { description: error.message });
      } else {
        toast.success('Event updated');
        setDraft(null);
        await loadEvents();
      }
    } else {
      const { error } = await supabase.from('events').insert(payload);
      if (error) {
        toast.error('Could not create event', { description: error.message });
      } else {
        toast.success('Event created', { description: 'It is now live on the website calendar.' });
        setDraft(null);
        await loadEvents();
      }
    }
    setSaving(false);
  };

  return (
    <div className="max-w-5xl mx-auto space-y-8 pb-12">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 tracking-tight">Events Calendar</h1>
          <p className="mt-2 text-gray-500">Manage all club competitions, social events, and program schedules.</p>
        </div>
        <button
          onClick={() => setDraft({ ...emptyDraft })}
          className="flex items-center gap-2 bg-fairway-700 hover:bg-fairway-800 text-white px-5 py-2.5 rounded-xl font-medium transition-colors shadow-sm cursor-pointer"
        >
          <Plus size={18} />
          Create Event
        </button>
      </div>

      {/* Toolbar */}
      <div className="flex flex-col sm:flex-row gap-4 justify-between">
        <div className="relative max-w-md w-full">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
          <input
            type="text"
            placeholder="Search events by title or club..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full pl-10 pr-4 py-2.5 bg-white border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-fairway-500 focus:border-fairway-500 shadow-sm"
          />
        </div>

        <div className="flex gap-2">
          <select
            value={clubFilter}
            onChange={(e) => setClubFilter(e.target.value)}
            className="bg-white border border-gray-200 rounded-xl px-4 py-2.5 text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-fairway-500 shadow-sm"
          >
            <option value="All">All Clubs</option>
            {CLUBS.map((c) => (
              <option key={c} value={c}>{c}</option>
            ))}
          </select>
          <select
            value={scope}
            onChange={(e) => setScope(e.target.value as typeof scope)}
            className="bg-white border border-gray-200 rounded-xl px-4 py-2.5 text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-fairway-500 shadow-sm"
          >
            <option value="upcoming">Upcoming</option>
            <option value="past">Past</option>
            <option value="all">All Time</option>
          </select>
        </div>
      </div>

      {/* Events List */}
      <div className="bg-white rounded-2xl shadow-sm ring-1 ring-gray-100 overflow-hidden">
        {loading ? (
          <div className="flex items-center justify-center gap-2 py-16 text-gray-400">
            <Loader2 size={20} className="animate-spin" /> Loading events…
          </div>
        ) : filtered.length === 0 ? (
          <div className="flex flex-col items-center justify-center gap-2 py-16 text-gray-400">
            <CalendarX size={28} />
            <p className="text-sm">No events match your filters.</p>
          </div>
        ) : (
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-gray-100 bg-gray-50/50">
                <th className="px-6 py-4 text-xs font-semibold text-gray-500 uppercase tracking-wider">Date</th>
                <th className="px-6 py-4 text-xs font-semibold text-gray-500 uppercase tracking-wider">Event Details</th>
                <th className="px-6 py-4 text-xs font-semibold text-gray-500 uppercase tracking-wider">Club</th>
                <th className="px-6 py-4 w-20"></th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-50">
              {filtered.map((event) => {
                const colors = clubColors[event.club] || clubColors['General'];

                return (
                  <tr key={event.id} className="hover:bg-gray-50/80 transition-colors group">
                    <td className="px-6 py-4 whitespace-nowrap">
                      <p className="text-sm font-semibold text-gray-900">
                        {new Date(event.date).toLocaleDateString('en-AU', { day: 'numeric', month: 'short' })}
                      </p>
                      <p className="text-xs text-gray-500 mt-0.5">
                        {new Date(event.date).toLocaleDateString('en-AU', { year: 'numeric' })}
                      </p>
                    </td>
                    <td className="px-6 py-4">
                      <p className="text-sm font-semibold text-gray-900">{event.title}</p>
                      {event.description && (
                        <p className="text-xs text-gray-500 mt-1 line-clamp-1">{event.description}</p>
                      )}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`inline-flex items-center px-2.5 py-1 rounded-md text-xs font-medium ${colors.bg} ${colors.text}`}>
                        {event.club}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-right">
                      <div className="flex items-center justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                        <button
                          onClick={() =>
                            setDraft({
                              id: event.id,
                              date: event.date,
                              title: event.title,
                              club: event.club,
                              description: event.description ?? '',
                            })
                          }
                          aria-label={`Edit ${event.title}`}
                          className="p-1.5 text-gray-400 hover:text-blue-600 hover:bg-blue-50 rounded-md transition-colors cursor-pointer"
                        >
                          <Edit2 size={16} />
                        </button>
                        <button
                          onClick={() => handleDelete(event)}
                          aria-label={`Delete ${event.title}`}
                          className="p-1.5 text-gray-400 hover:text-red-600 hover:bg-red-50 rounded-md transition-colors cursor-pointer"
                        >
                          <Trash2 size={16} />
                        </button>
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        )}

        {!loading && filtered.length > 0 && (
          <div className="px-6 py-4 border-t border-gray-100 text-sm text-gray-500">
            Showing {filtered.length} of {events.length} events
          </div>
        )}
      </div>

      {/* Create / Edit modal */}
      {draft && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-gray-900/60 backdrop-blur-sm" onClick={() => !saving && setDraft(null)} />
          <div className="relative w-full max-w-lg bg-white rounded-2xl shadow-xl p-6 space-y-5">
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-bold text-gray-900">{draft.id ? 'Edit Event' : 'Create Event'}</h2>
              <button
                onClick={() => setDraft(null)}
                disabled={saving}
                aria-label="Close"
                className="p-2 rounded-lg text-gray-400 hover:bg-gray-100 cursor-pointer"
              >
                <X size={18} />
              </button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Date</label>
                <input
                  type="date"
                  value={draft.date}
                  onChange={(e) => setDraft({ ...draft, date: e.target.value })}
                  className="w-full bg-white border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-fairway-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Club</label>
                <select
                  value={draft.club}
                  onChange={(e) => setDraft({ ...draft, club: e.target.value as Club })}
                  className="w-full bg-white border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-fairway-500"
                >
                  {CLUBS.map((c) => (
                    <option key={c} value={c}>{c}</option>
                  ))}
                </select>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Title</label>
              <input
                type="text"
                value={draft.title}
                onChange={(e) => setDraft({ ...draft, title: e.target.value })}
                placeholder="e.g. Medal and Stableford"
                className="w-full bg-white border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-fairway-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Description (optional)</label>
              <textarea
                value={draft.description}
                onChange={(e) => setDraft({ ...draft, description: e.target.value })}
                rows={3}
                placeholder="Shown when a visitor taps the event on the calendar"
                className="w-full bg-white border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-fairway-500 resize-none"
              />
            </div>

            <div className="flex justify-end gap-3 pt-2">
              <button
                onClick={() => setDraft(null)}
                disabled={saving}
                className="px-5 py-2.5 rounded-xl text-sm font-medium text-gray-600 hover:bg-gray-100 transition-colors cursor-pointer"
              >
                Cancel
              </button>
              <button
                onClick={handleSave}
                disabled={saving}
                className="flex items-center gap-2 bg-fairway-700 hover:bg-fairway-800 text-white px-5 py-2.5 rounded-xl text-sm font-medium transition-colors shadow-sm cursor-pointer disabled:opacity-70"
              >
                {saving && <Loader2 size={16} className="animate-spin" />}
                {draft.id ? 'Save Changes' : 'Create Event'}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
