'use client';

import { useState } from 'react';
import { toast } from 'sonner';
import { Search, Plus, MoreVertical, Edit2, Trash2 } from 'lucide-react';
import { calendarEvents, clubColors } from '@/data/events'; // Borrowing the mock data to populate initial state

export default function EventsManager() {
  const [events, setEvents] = useState(calendarEvents.slice(0, 10)); // Just showing first 10 for the mockup
  const [search, setSearch] = useState('');

  const handleDelete = (index: number) => {
    toast.error('Event Deleted', { description: 'The event has been removed from the calendar.' });
  };

  return (
    <div className="max-w-5xl mx-auto space-y-8 pb-12">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 tracking-tight">Events Calendar</h1>
          <p className="mt-2 text-gray-500">Manage all club competitions, social events, and program schedules.</p>
        </div>
        <button 
          onClick={() => toast.info('New Event Draft', { description: 'Opening the new event creation modal.' })}
          className="flex items-center gap-2 bg-fairway-700 hover:bg-fairway-800 text-white px-5 py-2.5 rounded-xl font-medium transition-colors shadow-sm"
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
          <select className="bg-white border border-gray-200 rounded-xl px-4 py-2.5 text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-fairway-500 shadow-sm">
            <option>All Clubs</option>
            <option>AGU</option>
            <option>Vets</option>
            <option>WGA</option>
          </select>
          <select className="bg-white border border-gray-200 rounded-xl px-4 py-2.5 text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-fairway-500 shadow-sm">
            <option>Current Month</option>
            <option>Next Month</option>
            <option>All Time</option>
          </select>
        </div>
      </div>

      {/* Events List */}
      <div className="bg-white rounded-2xl shadow-sm ring-1 ring-gray-100 overflow-hidden">
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
            {events.map((event, i) => {
              const colors = clubColors[event.club] || clubColors['General'];
              
              return (
                <tr key={i} className="hover:bg-gray-50/80 transition-colors group">
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
                      <button className="p-1.5 text-gray-400 hover:text-blue-600 hover:bg-blue-50 rounded-md transition-colors">
                        <Edit2 size={16} />
                      </button>
                      <button 
                        onClick={() => handleDelete(i)}
                        className="p-1.5 text-gray-400 hover:text-red-600 hover:bg-red-50 rounded-md transition-colors"
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
        
        {/* Pagination mock */}
        <div className="px-6 py-4 border-t border-gray-100 flex items-center justify-between text-sm text-gray-500">
          <span>Showing 1 to 10 of {calendarEvents.length} events</span>
          <div className="flex gap-1">
            <button className="px-3 py-1 rounded border border-gray-200 hover:bg-gray-50 disabled:opacity-50" disabled>Previous</button>
            <button className="px-3 py-1 rounded border border-gray-200 hover:bg-gray-50">Next</button>
          </div>
        </div>
      </div>
    </div>
  );
}
