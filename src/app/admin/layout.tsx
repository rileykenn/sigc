'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { 
  LayoutDashboard, 
  Calendar, 
  CircleDollarSign, 
  Settings, 
  LogOut,
  Menu,
  X,
  Map
} from 'lucide-react';
import Image from 'next/image';
import { Toaster } from 'sonner';

const navigation = [
  { name: 'Dashboard', href: '/admin', icon: LayoutDashboard },
  { name: 'Pricing & Rates', href: '/admin/pricing', icon: CircleDollarSign },
  { name: 'Events Calendar', href: '/admin/events', icon: Calendar },
  { name: 'Course Guide', href: '/admin/course', icon: Map },
  { name: 'Site Settings', href: '/admin/settings', icon: Settings },
];

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Mobile sidebar overlay */}
      {sidebarOpen && (
        <div 
          className="fixed inset-0 z-40 bg-gray-900/80 backdrop-blur-sm md:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <div className={`
        fixed inset-y-0 left-0 z-50 w-72 bg-white shadow-xl transition-transform duration-300 ease-in-out md:translate-x-0 md:static md:flex-shrink-0
        ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'}
      `}>
        <div className="h-full flex flex-col">
          {/* Sidebar Header */}
          <div className="h-20 flex items-center justify-between px-6 border-b border-gray-100">
            <Link href="/" className="flex items-center gap-3">
              <Image src="/media/SIGC-logo.jpg" alt="SIGC" width={100} height={30} className="object-contain" />
              <span className="text-xs font-bold text-gray-500 uppercase tracking-widest mt-1">CMS</span>
            </Link>
            <button 
              className="md:hidden p-2 rounded-lg text-gray-400 hover:bg-gray-100"
              onClick={() => setSidebarOpen(false)}
            >
              <X size={20} />
            </button>
          </div>

          {/* Navigation */}
          <div className="flex-1 overflow-y-auto py-6 px-4 space-y-1">
            {navigation.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`
                    flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-all duration-200
                    ${isActive 
                      ? 'bg-fairway-50 text-fairway-700 shadow-sm ring-1 ring-fairway-100' 
                      : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'}
                  `}
                >
                  <item.icon size={20} className={isActive ? 'text-fairway-600' : 'text-gray-400'} />
                  {item.name}
                </Link>
              );
            })}
          </div>

          {/* User & Logout */}
          <div className="p-4 border-t border-gray-100">
            <div className="flex items-center gap-3 px-4 py-3 mb-2">
              <div className="h-10 w-10 rounded-full bg-fairway-100 flex items-center justify-center text-fairway-700 font-bold">
                A
              </div>
              <div className="flex-1 overflow-hidden">
                <p className="text-sm font-medium text-gray-900 truncate">Admin User</p>
                <p className="text-xs text-gray-500 truncate">admin@sigolfclub.com.au</p>
              </div>
            </div>
            <Link
              href="/"
              className="flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium text-red-600 hover:bg-red-50 transition-colors w-full"
            >
              <LogOut size={20} className="text-red-500" />
              Sign out
            </Link>
          </div>
        </div>
      </div>

      {/* Main content */}
      <div className="flex-1 flex flex-col min-w-0 overflow-hidden">
        {/* Top Header (Mobile) */}
        <div className="md:hidden h-20 flex items-center px-6 bg-white border-b border-gray-100">
          <button 
            className="p-2 -ml-2 rounded-lg text-gray-500 hover:bg-gray-100"
            onClick={() => setSidebarOpen(true)}
          >
            <Menu size={24} />
          </button>
          <span className="ml-4 font-bold text-gray-900">SIGC CMS</span>
        </div>

        {/* Content Area */}
        <main className="flex-1 overflow-y-auto p-6 md:p-10">
          {children}
        </main>
      </div>
      <Toaster position="top-right" richColors />
    </div>
  );
}
