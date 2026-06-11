import { Calendar, Users, CircleDollarSign, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function AdminDashboard() {
  const stats = [
    { name: 'Upcoming Events', value: '14', icon: Calendar, color: 'bg-blue-50 text-blue-700 ring-blue-100' },
    { name: 'Pricing Categories', value: '8', icon: CircleDollarSign, color: 'bg-green-50 text-green-700 ring-green-100' },
    { name: 'Website Visitors (30d)', value: '2.4k', icon: Users, color: 'bg-purple-50 text-purple-700 ring-purple-100' },
  ];

  const quickLinks = [
    { name: 'Update Green Fees', href: '/admin/pricing', description: 'Modify 9 & 18 hole rates' },
    { name: 'Add Event', href: '/admin/events', description: 'Schedule a new competition' },
    { name: 'Edit Hero Text', href: '/admin/settings', description: 'Change homepage headlines' },
  ];

  return (
    <div className="max-w-6xl mx-auto space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-gray-900 tracking-tight">Dashboard Overview</h1>
        <p className="mt-2 text-gray-500">Welcome to the Sussex Inlet Golf Club Content Management System.</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
        {stats.map((stat) => (
          <div key={stat.name} className="bg-white rounded-2xl p-6 shadow-sm ring-1 ring-gray-100 flex items-center gap-4">
            <div className={`p-4 rounded-xl ring-1 ${stat.color}`}>
              <stat.icon size={24} />
            </div>
            <div>
              <p className="text-sm font-medium text-gray-500">{stat.name}</p>
              <p className="text-3xl font-bold text-gray-900 mt-1">{stat.value}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Quick Actions */}
        <div className="bg-white rounded-2xl shadow-sm ring-1 ring-gray-100 overflow-hidden">
          <div className="px-6 py-5 border-b border-gray-100">
            <h3 className="text-lg font-semibold text-gray-900">Quick Actions</h3>
          </div>
          <div className="divide-y divide-gray-50">
            {quickLinks.map((link) => (
              <Link 
                key={link.name} 
                href={link.href}
                className="flex items-center justify-between px-6 py-4 hover:bg-gray-50 transition-colors group"
              >
                <div>
                  <p className="text-sm font-medium text-gray-900 group-hover:text-fairway-700 transition-colors">{link.name}</p>
                  <p className="text-sm text-gray-500 mt-0.5">{link.description}</p>
                </div>
                <ArrowRight size={18} className="text-gray-400 group-hover:text-fairway-600 group-hover:translate-x-1 transition-all" />
              </Link>
            ))}
          </div>
        </div>

        {/* Info Panel */}
        <div className="bg-gradient-to-br from-fairway-800 to-fairway-950 rounded-2xl p-8 text-white shadow-xl">
          <h3 className="text-xl font-bold mb-4">Mockup Notice</h3>
          <p className="text-fairway-100 text-sm leading-relaxed mb-6">
            This is a functional mockup of the Content Management System. You can navigate through the pages and see how the editing interface will look and feel. 
            <br/><br/>
            Currently, changes made here are <strong>not saved to a database</strong> and will not affect the live website. Once approved, this interface will be connected to Supabase for real-time updates.
          </p>
          <div className="inline-block rounded-lg bg-white/10 backdrop-blur px-4 py-2 text-sm font-medium text-white border border-white/20">
            Demo Mode Active
          </div>
        </div>
      </div>
    </div>
  );
}
