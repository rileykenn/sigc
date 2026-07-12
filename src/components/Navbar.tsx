'use client';

import { useState, useEffect, useRef } from 'react';
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from 'framer-motion';
import { Menu, X, ChevronDown } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
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
  { name: 'Course', href: '/course' },
  {
    name: 'News and results',
    href: '/news',
    children: [
      { name: 'Members', href: '/news#members' },
      { name: 'Ladies', href: '/news#ladies' },
      { name: 'Vets', href: '/news#vets' },
    ],
  },
  { name: 'Sponsorship', href: '/sponsorship' },
  {
    name: 'Competition days',
    href: '/competitions',
    children: [
      { name: 'Ladies info', href: '/competitions#ladies' },
      { name: "Men's info", href: '/competitions#mens' },
    ],
  },
  { name: 'Venue hire', href: '/#venue-hire' },
  { name: 'The blue tree', href: '/historic-blue-tree' },
];

function isItemActive(pathname: string, href: string): boolean {
  if (href.includes('#')) return false;
  if (href === '/') return pathname === '/';
  return pathname === href || pathname.startsWith(`${href}/`);
}

const desktopLinkBase =
  'relative inline-flex min-h-11 items-center rounded-full px-4 text-sm font-medium cursor-pointer transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-navy-700';

const activeUnderline =
  'after:absolute after:inset-x-4 after:bottom-1.5 after:h-px after:bg-gold-500';

/* ── Desktop Dropdown Item ── */
function DesktopNavItem({
  item,
  index,
  active,
}: {
  item: NavItem;
  index: number;
  active: boolean;
}) {
  const [open, setOpen] = useState(false);
  const timeout = useRef<ReturnType<typeof setTimeout> | null>(null);

  const enter = () => {
    if (timeout.current) clearTimeout(timeout.current);
    setOpen(true);
  };

  const leave = () => {
    timeout.current = setTimeout(() => setOpen(false), 150);
  };

  const linkClasses = `${desktopLinkBase} ${
    active
      ? `text-navy-950 ${activeUnderline}`
      : 'text-navy-800/80 hover:text-navy-950 hover:bg-navy-50'
  }`;

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
          aria-current={active ? 'page' : undefined}
          className={linkClasses}
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
      <button className={`${linkClasses} gap-1`} aria-expanded={open}>
        {item.name}
        <ChevronDown
          size={14}
          strokeWidth={1.5}
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
        <div className="min-w-45 rounded-2xl bg-white shadow-lg shadow-navy-900/5 border border-navy-100 py-2 overflow-hidden">
          {item.children.map((child) => {
            const childIsHash = child.href.includes('#');
            const ChildTag = childIsHash ? 'a' : Link;
            return (
              <ChildTag
                key={child.name}
                href={child.href}
                className="flex min-h-11 items-center px-5 text-sm font-medium text-navy-800/80 hover:bg-navy-50 hover:text-navy-950 cursor-pointer transition-colors duration-150 focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-navy-700"
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
  active,
  onNavigate,
}: {
  item: NavItem;
  index: number;
  active: boolean;
  onNavigate: () => void;
}) {
  const [expanded, setExpanded] = useState(false);
  const isHash = item.href.includes('#');
  const LinkTag = isHash ? 'a' : Link;

  const itemClasses = `flex min-h-11 w-full items-center rounded-full px-4 text-sm font-medium cursor-pointer transition-colors focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-navy-700 ${
    active
      ? 'bg-navy-50 text-navy-950'
      : 'text-navy-800 hover:bg-navy-50 hover:text-navy-950'
  }`;

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
          aria-current={active ? 'page' : undefined}
          className={itemClasses}
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
        aria-expanded={expanded}
        className={`${itemClasses} justify-between`}
      >
        {item.name}
        <ChevronDown
          size={16}
          strokeWidth={1.5}
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
                    className="flex min-h-11 items-center rounded-full px-4 text-sm text-navy-800/70 hover:bg-navy-50 hover:text-navy-950 cursor-pointer transition-colors focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-navy-700"
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
  const pathname = usePathname();

  const { scrollY } = useScroll();
  useMotionValueEvent(scrollY, 'change', (latest) => {
    setScrolled(latest > 20);
  });

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
          scrolled ? 'shadow-lg shadow-navy-900/5 border-b border-navy-100' : ''
        }`}
      >
        <div
          className={`mx-auto flex max-w-7xl items-center justify-between px-6 transition-all duration-500 ${
            scrolled ? 'h-16' : 'h-[72px]'
          }`}
        >
          {/* Logo */}
          <Link
            href="/"
            className="flex shrink-0 items-center rounded-full focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-navy-700"
          >
            <Image
              src="/images/SIGC-logo.webp"
              alt="Sussex Inlet Golf Club"
              width={150}
              height={38}
              className={`object-contain transition-all duration-500 ${
                scrolled ? 'scale-[0.88]' : 'scale-100'
              }`}
              priority
            />
          </Link>

          {/* Desktop Links */}
          <div className="hidden lg:flex items-center gap-0.5">
            {navItems.map((item, i) => (
              <DesktopNavItem
                key={item.name}
                item={item}
                index={i}
                active={isItemActive(pathname, item.href)}
              />
            ))}
            <div className="ml-2 pl-2 border-l border-navy-100">
              <SocialLinks variant="dark" size={16} />
            </div>
            <a
              href="tel:+61244412259"
              className="ml-2 hidden xl:inline-flex items-center gap-2 rounded-full bg-gold-400 px-5 py-2.5 text-sm font-semibold text-navy-950 cursor-pointer transition hover:bg-gold-300 active:scale-[0.98] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-navy-700"
            >
              Book a round
            </a>
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden flex h-11 w-11 items-center justify-center rounded-full text-navy-800 cursor-pointer transition-colors hover:bg-navy-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-navy-700"
            aria-label="Toggle menu"
          >
            {mobileOpen ? (
              <X size={24} strokeWidth={1.5} />
            ) : (
              <Menu size={24} strokeWidth={1.5} />
            )}
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
              className="fixed inset-0 z-40 bg-navy-950/30 lg:hidden"
              onClick={() => setMobileOpen(false)}
            />
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 30, stiffness: 300 }}
              className="fixed right-0 top-0 bottom-0 z-50 w-[300px] bg-white shadow-2xl shadow-navy-900/10 lg:hidden overflow-y-auto"
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
                  aria-label="Close menu"
                  className="flex h-11 w-11 items-center justify-center rounded-full text-navy-800 cursor-pointer hover:bg-navy-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-navy-700"
                >
                  <X size={20} strokeWidth={1.5} />
                </button>
              </div>
              <div className="flex flex-col p-6 gap-1">
                {navItems.map((item, i) => (
                  <MobileNavItem
                    key={item.name}
                    item={item}
                    index={i}
                    active={isItemActive(pathname, item.href)}
                    onNavigate={() => setMobileOpen(false)}
                  />
                ))}
                <a
                  href="tel:+61244412259"
                  onClick={() => setMobileOpen(false)}
                  className="mt-4 inline-flex items-center justify-center gap-2 rounded-full bg-gold-400 px-7 py-3.5 text-sm font-semibold text-navy-950 cursor-pointer transition hover:bg-gold-300 active:scale-[0.98] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-navy-700"
                >
                  Book a round
                </a>
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
