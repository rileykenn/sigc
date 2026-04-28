'use client';

import Link from 'next/link';
import SocialLinks from './SocialLinks';

export default function Footer() {
  return (
    <footer className="bg-green-900 text-white">
      <div className="mx-auto max-w-5xl px-6 py-14">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="text-center md:text-left">
            <p className="font-serif text-lg">Sussex Inlet Golf Club</p>
            <p className="text-green-300/40 text-xs mt-1">221 Sussex Inlet Road, NSW 2540</p>
          </div>

          <div className="flex items-center gap-8 text-sm text-green-300/50">
            <Link href="/course" className="hover:text-white transition-colors">Course</Link>
            <Link href="/membership" className="hover:text-white transition-colors">Membership</Link>
            <a href="#contact" className="hover:text-white transition-colors">Contact</a>
          </div>

          <SocialLinks />
        </div>

        <div className="mt-10 pt-6 border-t border-white/10 text-center">
          <p className="text-[10px] text-green-300/20 uppercase tracking-wider">
            © {new Date().getFullYear()} Sussex Inlet Golf Club
          </p>
        </div>
      </div>
    </footer>
  );
}
