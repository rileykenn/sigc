'use client';

import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';

const links = [
  { label: 'The Course', href: '/course' },
  { label: 'Membership', href: '/membership' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  // Only homepage has a dark hero — all other pages need solid navbar immediately
  const isHome = pathname === '/';
  const isCourse = pathname === '/course';
  const hasDarkHero = isHome || isCourse;
  const solid = !hasDarkHero || scrolled;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          solid ? 'bg-white shadow-sm' : 'bg-transparent'
        }`}
      >
        <div className="mx-auto max-w-7xl px-6 flex items-center justify-between h-20">
          {/* Wordmark */}
          <Link href="/" className="font-serif text-lg tracking-wide">
            <span className={solid ? 'text-green-900' : 'text-white'}>Sussex Inlet</span>
          </Link>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-10">
            {links.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className={`text-sm uppercase tracking-[0.15em] font-medium transition-colors ${
                  solid ? 'text-green-800 hover:text-gold-500' : 'text-white/90 hover:text-white'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Book Now CTA */}
          <div className="hidden md:block">
            <a
              href="tel:0244412259"
              className={`px-6 py-2.5 text-xs font-semibold uppercase tracking-[0.15em] border transition-colors ${
                solid
                  ? 'border-green-800 text-green-800 hover:bg-green-800 hover:text-white'
                  : 'border-white text-white hover:bg-white hover:text-green-900'
              }`}
            >
              Book Now
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            {open ? (
              <X size={24} className={solid ? 'text-green-900' : 'text-white'} />
            ) : (
              <Menu size={24} className={solid ? 'text-green-900' : 'text-white'} />
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="fixed inset-0 z-[60] bg-green-900"
          >
            <div className="flex items-center justify-between px-6 h-20">
              <Link href="/" onClick={() => setOpen(false)} className="font-serif text-lg text-white">
                Sussex Inlet
              </Link>
              <button onClick={() => setOpen(false)} aria-label="Close menu">
                <X size={24} className="text-white" />
              </button>
            </div>

            <div className="flex flex-col items-center justify-center gap-8 pt-20">
              {links.map((link, i) => (
                <motion.div
                  key={link.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + i * 0.1 }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="text-2xl text-white font-serif italic tracking-wide hover:text-gold-400 transition-colors"
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                <a
                  href="tel:0244412259"
                  className="mt-4 px-8 py-3 border border-gold-400 text-gold-400 text-sm uppercase tracking-[0.15em] font-semibold hover:bg-gold-400 hover:text-green-900 transition-colors"
                >
                  Book Now
                </a>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
