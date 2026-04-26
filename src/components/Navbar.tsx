'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import SocialLinks from '@/components/SocialLinks';

const navLinks = [
  { name: 'Course', href: '/course' },
  { name: 'Rates', href: '/#pricing' },
  { name: 'Calendar', href: '/#calendar' },
  { name: 'Membership', href: '/membership' },
  { name: 'Contact', href: '/#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className={`fixed inset-x-0 top-0 z-50 bg-white transition-all duration-500 ${
          scrolled
            ? 'py-3 shadow-lg shadow-fairway-900/5 border-b border-fairway-100'
            : 'py-5'
        }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <Image
              src="/media/SIGC-logo.jpg"
              alt="Sussex Inlet Golf Club"
              width={160}
              height={40}
              className={`transition-all duration-500 object-contain ${scrolled ? 'scale-[0.85]' : 'scale-100'}`}
              priority
            />
          </Link>

          {/* Desktop Links */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link, i) => {
              const isPage = link.href.startsWith('/') && !link.href.includes('#');
              const Tag = isPage ? Link : 'a';
              return (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + i * 0.08 }}
                >
                  <Tag
                    href={link.href}
                    className="relative px-3.5 py-2 text-sm font-medium rounded-full transition-all duration-300 text-fairway-800 hover:bg-fairway-50 hover:text-fairway-600"
                  >
                    {link.name}
                  </Tag>
                </motion.div>
              );
            })}
            <SocialLinks variant="dark" size={16} className="ml-1" />
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.6 }}
            >
              <Link
                href="/membership"
                className="ml-2 btn-shimmer rounded-full bg-fairway-600 px-5 py-2 text-sm font-semibold text-white shadow-lg shadow-fairway-600/25 transition-all hover:bg-fairway-700 hover:shadow-xl hover:shadow-fairway-600/30"
              >
                Join the Club
              </Link>
            </motion.div>
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden p-2 rounded-xl transition-colors text-fairway-800 hover:bg-fairway-50"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-40 bg-black/20 backdrop-blur-sm lg:hidden"
              onClick={() => setMobileOpen(false)}
            />
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 30, stiffness: 300 }}
              className="fixed right-0 top-0 bottom-0 z-50 w-[280px] bg-white shadow-2xl lg:hidden"
            >
              <div className="flex items-center justify-between p-6 border-b border-fairway-100">
                <Image
                  src="/media/SIGC-logo.jpg"
                  alt="Sussex Inlet Golf Club"
                  width={120}
                  height={30}
                  className="object-contain"
                />
                <button
                  onClick={() => setMobileOpen(false)}
                  className="p-2 rounded-xl text-fairway-800 hover:bg-fairway-50"
                >
                  <X size={20} />
                </button>
              </div>
              <div className="flex flex-col p-6 gap-2">
                {navLinks.map((link, i) => {
                  const isPage = link.href.startsWith('/') && !link.href.includes('#');
                  const Tag = isPage ? Link : 'a';
                  return (
                    <motion.div
                      key={link.name}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.08 }}
                    >
                      <Tag
                        href={link.href}
                        onClick={() => setMobileOpen(false)}
                        className="block px-4 py-3 text-fairway-800 font-medium rounded-xl hover:bg-fairway-50 transition-colors"
                      >
                        {link.name}
                      </Tag>
                    </motion.div>
                  );
                })}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                >
                  <Link
                    href="/membership"
                    onClick={() => setMobileOpen(false)}
                    className="block mt-4 btn-shimmer rounded-xl bg-fairway-600 px-5 py-3 text-center font-semibold text-white shadow-lg transition-all hover:bg-fairway-700"
                  >
                    Join the Club
                  </Link>
                </motion.div>
                <div className="mt-4 pt-4 border-t border-fairway-100">
                  <SocialLinks variant="dark" size={18} />
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
