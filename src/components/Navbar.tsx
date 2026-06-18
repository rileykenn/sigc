'use client';

import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronDown } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import SocialLinks from '@/components/SocialLinks';

interface NavChild {
  name: string;
  href: string;
}

interface NavItem {
  name: string;
  href: string;
  children?: NavChild[];
}

const navItems: NavItem[] = [
  { name: 'Home', href: '/' },
  {
    name: 'News / Results',
    href: '/news',
    children: [
      { name: 'Members', href: '/news#members' },
      { name: 'Ladies', href: '/news#ladies' },
      { name: 'Vets', href: '/news#vets' },
    ],
  },
  { name: 'Sponsorship', href: '/sponsorship' },
  {
    name: 'Competition Days',
    href: '/competitions',
    children: [
      { name: 'Ladies Info', href: '/competitions#ladies' },
      { name: 'Mens Info', href: '/competitions#mens' },
    ],
  },
  { name: 'Venue Hire', href: '/#venue-hire' },
  { name: 'Historic Blue Tree', href: '/historic-blue-tree' },
];

/* ── Desktop Dropdown Item ── */
function DesktopNavItem({ item, index }: { item: NavItem; index: number }) {
  const [open, setOpen] = useState(false);
  const timeout = useRef<ReturnType<typeof setTimeout> | null>(null);

  const enter = () => {
    if (timeout.current) clearTimeout(timeout.current);
    setOpen(true);
  };

  const leave = () => {
    timeout.current = setTimeout(() => setOpen(false), 150);
  };

  const isHash = item.href.includes('#');
  const LinkTag = isHash ? 'a' : Link;

  if (!item.children) {
    return (
      <motion.div
        initial={{ opacity: 0, y: -8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.08 + index * 0.06 }}
      >
        <LinkTag
          href={item.href}
          className="px-4 py-2 text-[13px] font-medium tracking-wide text-navy-800 rounded-lg transition-all duration-200 hover:bg-navy-50 hover:text-navy-600"
        >
          {item.name}
        </LinkTag>
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: -8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.08 + index * 0.06 }}
      className="relative"
      onMouseEnter={enter}
      onMouseLeave={leave}
    >
      <button
        className="flex items-center gap-1 px-4 py-2 text-[13px] font-medium tracking-wide text-navy-800 rounded-lg transition-all duration-200 hover:bg-navy-50 hover:text-navy-600"
      >
        {item.name}
        <ChevronDown
          size={14}
          className={`transition-transform duration-200 ${open ? 'rotate-180' : ''}`}
        />
      </button>

      {/* Dropdown */}
      <div
        className={`absolute left-1/2 -translate-x-1/2 top-full pt-2 transition-all duration-200 ${
          open
            ? 'opacity-100 translate-y-0 pointer-events-auto'
            : 'opacity-0 -translate-y-1 pointer-events-none'
        }`}
      >
        <div className="min-w-[180px] rounded-xl bg-white shadow-lg shadow-navy-900/8 border border-navy-100 py-1.5 overflow-hidden">
          {item.children.map((child) => {
            const childIsHash = child.href.includes('#');
            const ChildTag = childIsHash ? 'a' : Link;
            return (
              <ChildTag
                key={child.name}
                href={child.href}
                className="block px-4 py-2.5 text-[13px] font-medium text-navy-700 hover:bg-navy-50 hover:text-navy-900 transition-colors duration-150"
              >
                {child.name}
              </ChildTag>
            );
          })}
        </div>
      </div>
    </motion.div>
  );
}

/* ── Mobile Accordion Item ── */
function MobileNavItem({
  item,
  index,
  onNavigate,
}: {
  item: NavItem;
  index: number;
  onNavigate: () => void;
}) {
  const [expanded, setExpanded] = useState(false);
  const isHash = item.href.includes('#');
  const LinkTag = isHash ? 'a' : Link;

  if (!item.children) {
    return (
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: index * 0.06 }}
      >
        <LinkTag
          href={item.href}
          onClick={onNavigate}
          className="block px-4 py-3 text-navy-800 font-medium rounded-xl hover:bg-navy-50 transition-colors"
        >
          {item.name}
        </LinkTag>
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: index * 0.06 }}
    >
      <button
        onClick={() => setExpanded(!expanded)}
        className="flex w-full items-center justify-between px-4 py-3 text-navy-800 font-medium rounded-xl hover:bg-navy-50 transition-colors"
      >
        {item.name}
        <ChevronDown
          size={16}
          className={`transition-transform duration-200 ${expanded ? 'rotate-180' : ''}`}
        />
      </button>

      <AnimatePresence>
        {expanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="overflow-hidden"
          >
            <div className="pl-4 pb-1">
              {item.children.map((child) => {
                const childIsHash = child.href.includes('#');
                const ChildTag = childIsHash ? 'a' : Link;
                return (
                  <ChildTag
                    key={child.name}
                    href={child.href}
                    onClick={onNavigate}
                    className="block px-4 py-2.5 text-sm text-navy-600 rounded-lg hover:bg-navy-50 hover:text-navy-800 transition-colors"
                  >
                    {child.name}
                  </ChildTag>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

/* ── Main Navbar ── */
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
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileOpen]);

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className={`fixed inset-x-0 top-0 z-50 bg-white transition-all duration-500 ${
          scrolled
            ? 'py-2.5 shadow-lg shadow-navy-900/5 border-b border-navy-100'
            : 'py-4'
        }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <Image
              src="/images/SIGC-logo.webp"
              alt="Sussex Inlet Golf Club"
              width={160}
              height={40}
              className={`transition-all duration-500 object-contain ${
                scrolled ? 'scale-[0.85]' : 'scale-100'
              }`}
              priority
            />
          </Link>

          {/* Desktop Links */}
          <div className="hidden lg:flex items-center gap-0.5">
            {navItems.map((item, i) => (
              <DesktopNavItem key={item.name} item={item} index={i} />
            ))}
            <div className="ml-3 pl-3 border-l border-navy-100">
              <SocialLinks variant="dark" size={16} />
            </div>
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden p-2 rounded-xl transition-colors text-navy-800 hover:bg-navy-50"
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
              className="fixed right-0 top-0 bottom-0 z-50 w-[300px] bg-white shadow-2xl lg:hidden"
            >
              <div className="flex items-center justify-between p-6 border-b border-navy-100">
                <Image
                  src="/images/SIGC-logo.webp"
                  alt="Sussex Inlet Golf Club"
                  width={120}
                  height={30}
                  className="object-contain"
                />
                <button
                  onClick={() => setMobileOpen(false)}
                  className="p-2 rounded-xl text-navy-800 hover:bg-navy-50"
                >
                  <X size={20} />
                </button>
              </div>
              <div className="flex flex-col p-6 gap-1">
                {navItems.map((item, i) => (
                  <MobileNavItem
                    key={item.name}
                    item={item}
                    index={i}
                    onNavigate={() => setMobileOpen(false)}
                  />
                ))}
                <div className="mt-4 pt-4 border-t border-navy-100">
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
