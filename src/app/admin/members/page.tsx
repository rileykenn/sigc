'use client';

import { useEffect, useState } from 'react';
import { toast } from 'sonner';
import { ChevronDown, Trash2, Loader2, Inbox, Mail, Phone } from 'lucide-react';
import { createClient } from '@/lib/supabase/client';
import type { ApplicationStatus, MembershipApplicationRow } from '@/lib/types';

const membershipLabels: Record<string, string> = {
  full: 'Full member',
  veteran: 'Veteran',
  womens: "Women's",
  junior: 'Junior',
  social: 'Social',
};

const statusStyles: Record<ApplicationStatus, string> = {
  new: 'bg-blue-50 text-blue-700 ring-blue-200',
  contacted: 'bg-amber-50 text-amber-700 ring-amber-200',
  approved: 'bg-green-50 text-green-700 ring-green-200',
  declined: 'bg-gray-100 text-gray-600 ring-gray-200',
};

const STATUSES: ApplicationStatus[] = ['new', 'contacted', 'approved', 'declined'];

export default function MembersManager() {
  const [applications, setApplications] = useState<MembershipApplicationRow[]>([]);
  const [loading, setLoading] = useState(true);
  const [expanded, setExpanded] = useState<string | null>(null);
  const [statusFilter, setStatusFilter] = useState('all');

  useEffect(() => {
    const load = async () => {
      const { data, error } = await createClient()
        .from('membership_applications')
        .select('*')
        .order('created_at', { ascending: false });
      if (error) {
        toast.error('Could not load applications', { description: error.message });
      } else {
        setApplications((data ?? []) as MembershipApplicationRow[]);
      }
      setLoading(false);
    };
    load();
  }, []);

  const setStatus = async (app: MembershipApplicationRow, status: ApplicationStatus) => {
    const { error } = await createClient()
      .from('membership_applications')
      .update({ status })
      .eq('id', app.id);
    if (error) {
      toast.error('Could not update status', { description: error.message });
      return;
    }
    setApplications((rows) => rows.map((r) => (r.id === app.id ? { ...r, status } : r)));
    toast.success(`Marked as ${status}`);
  };

  const handleDelete = async (app: MembershipApplicationRow) => {
    if (!window.confirm(`Delete the application from ${app.first_name} ${app.last_name}? This can't be undone.`)) return;
    const { error } = await createClient().from('membership_applications').delete().eq('id', app.id);
    if (error) {
      toast.error('Could not delete application', { description: error.message });
      return;
    }
    setApplications((rows) => rows.filter((r) => r.id !== app.id));
    toast.success('Application deleted');
  };

  const filtered = statusFilter === 'all' ? applications : applications.filter((a) => a.status === statusFilter);

  return (
    <div className="max-w-5xl mx-auto space-y-8 pb-12">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 tracking-tight">Member Applications</h1>
          <p className="mt-2 text-gray-500">Membership sign-ups submitted through the website.</p>
        </div>
        <select
          value={statusFilter}
          onChange={(e) => setStatusFilter(e.target.value)}
          className="bg-white border border-gray-200 rounded-xl px-4 py-2.5 text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-fairway-500 shadow-sm"
        >
          <option value="all">All statuses</option>
          {STATUSES.map((s) => (
            <option key={s} value={s}>{s[0].toUpperCase() + s.slice(1)}</option>
          ))}
        </select>
      </div>

      <div className="bg-white rounded-2xl shadow-sm ring-1 ring-gray-100 overflow-hidden">
        {loading ? (
          <div className="flex items-center justify-center gap-2 py-16 text-gray-400">
            <Loader2 size={20} className="animate-spin" /> Loading applications…
          </div>
        ) : filtered.length === 0 ? (
          <div className="flex flex-col items-center justify-center gap-2 py-16 text-gray-400">
            <Inbox size={28} />
            <p className="text-sm">
              {applications.length === 0
                ? 'No applications yet. New sign-ups from the website will appear here.'
                : 'No applications match this filter.'}
            </p>
          </div>
        ) : (
          <div className="divide-y divide-gray-50">
            {filtered.map((app) => {
              const isOpen = expanded === app.id;
              return (
                <div key={app.id}>
                  <button
                    onClick={() => setExpanded(isOpen ? null : app.id)}
                    className="w-full flex items-center gap-4 px-6 py-4 text-left hover:bg-gray-50/80 transition-colors cursor-pointer"
                  >
                    <div className="h-10 w-10 shrink-0 rounded-full bg-fairway-100 flex items-center justify-center text-fairway-700 font-bold">
                      {(app.first_name[0] ?? '?').toUpperCase()}
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-semibold text-gray-900 truncate">
                        {app.first_name} {app.last_name}
                      </p>
                      <p className="text-xs text-gray-500 mt-0.5 truncate">
                        {membershipLabels[app.membership_type] ?? app.membership_type} · applied{' '}
                        {new Date(app.created_at).toLocaleDateString('en-AU', { day: 'numeric', month: 'short', year: 'numeric' })}
                      </p>
                    </div>
                    <span className={`hidden sm:inline-flex items-center px-2.5 py-1 rounded-md text-xs font-medium ring-1 ${statusStyles[app.status]}`}>
                      {app.status[0].toUpperCase() + app.status.slice(1)}
                    </span>
                    <ChevronDown size={18} className={`text-gray-400 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
                  </button>

                  {isOpen && (
                    <div className="px-6 pb-6 pt-1 bg-gray-50/50">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-3 text-sm">
                        <div className="flex items-center gap-2 text-gray-700">
                          <Mail size={15} className="text-gray-400" />
                          <a href={`mailto:${app.email}`} className="text-fairway-700 hover:underline">{app.email}</a>
                        </div>
                        <div className="flex items-center gap-2 text-gray-700">
                          <Phone size={15} className="text-gray-400" />
                          <a href={`tel:${app.phone}`} className="text-fairway-700 hover:underline">{app.phone || '—'}</a>
                        </div>
                        <Detail label="Date of birth" value={app.dob ? new Date(app.dob).toLocaleDateString('en-AU') : '—'} />
                        <Detail label="Address" value={[app.address, app.suburb, app.postcode].filter(Boolean).join(', ') || '—'} />
                        <Detail label="Emergency contact" value={app.emergency_name ? `${app.emergency_name} · ${app.emergency_phone}` : '—'} />
                        <Detail label="Handicap" value={app.handicap || '—'} />
                        <Detail label="Previous club" value={app.previous_club || '—'} />
                        <Detail label="GolfLink no." value={app.golflink_no || '—'} />
                      </div>

                      <div className="mt-5 flex flex-wrap items-center gap-3">
                        <label className="text-xs font-semibold text-gray-500 uppercase tracking-wider">Status</label>
                        <select
                          value={app.status}
                          onChange={(e) => setStatus(app, e.target.value as ApplicationStatus)}
                          className="bg-white border border-gray-200 rounded-lg px-3 py-1.5 text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-fairway-500"
                        >
                          {STATUSES.map((s) => (
                            <option key={s} value={s}>{s[0].toUpperCase() + s.slice(1)}</option>
                          ))}
                        </select>
                        <button
                          onClick={() => handleDelete(app)}
                          className="ml-auto flex items-center gap-1.5 text-sm text-red-600 hover:text-red-700 hover:bg-red-50 px-3 py-1.5 rounded-lg transition-colors cursor-pointer"
                        >
                          <Trash2 size={15} />
                          Delete
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}

function Detail({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <span className="text-xs font-semibold text-gray-400 uppercase tracking-wider">{label}</span>
      <p className="text-gray-800 mt-0.5">{value}</p>
    </div>
  );
}
