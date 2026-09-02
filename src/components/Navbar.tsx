'use client';

import { useCallback, useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ChevronDown, Menu, X } from 'lucide-react';
import SocialLinks from '@/components/SocialLinks';

/*
 * Club letterhead masthead. Mounted once in src/app/(site)/layout.tsx.
 * Desktop: 1px rule + 80px crest block + 44px link row + 2px gold rule = 127px.
 * The link row and gold rule (46px) stay pinned after 81px of scroll via
 * lg:-top-[81px]. Change the heights, the offset and the hero's
 * lg:min-h-[calc(100dvh-127px)] together.
 */

interface NavLink {
  name: string;
  href: string;
}

interface NavGroup {
  id: string;
  name: string;
  children: NavLink[];
}

type NavItem = NavLink | NavGroup;

const PHONE_HREF = 'tel:+61244412259';
const PHONE_LABEL = '(02) 4441 2259';

const golfGroup: NavGroup = {
  id: 'golf',
  name: 'Golf',
  children: [
    { name: 'Green fees', href: '/green-fees' },
    { name: "What's on", href: '/whats-on' },
    { name: 'Competition days', href: '/competitions' },
    { name: 'Group bookings', href: '/group-bookings' },
  ],
};

const clubGroup: NavGroup = {
  id: 'club',
  name: 'Club',
  children: [
    { name: 'About the club', href: '/about' },
    { name: 'Gallery', href: '/gallery' },
    { name: 'The blue tree', href: '/historic-blue-tree' },
    { name: 'Sponsorship', href: '/sponsorship' },
  ],
};

const navItems: NavItem[] = [
  { name: 'Home', href: '/' },
  { name: 'Course', href: '/course' },
  golfGroup,
  clubGroup,
  { name: 'Membership', href: '/membership' },
  { name: 'News', href: '/news' },
  { name: 'Contact', href: '/contact' },
];

function isGroup(item: NavItem): item is NavGroup {
  return 'children' in item;
}

function isItemActive(pathname: string, href: string): boolean {
  if (href === '/') return pathname === '/';
  return pathname === href || pathname.startsWith(`${href}/`);
}

function isGroupActive(pathname: string, group: NavGroup): boolean {
  return group.children.some((child) => isItemActive(pathname, child.href));
}

const linkBase =
  'relative inline-flex h-full cursor-pointer items-center gap-1 px-4 text-[15px] font-medium text-navy-900/80 transition-colors duration-200 hover:text-navy-950 focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-navy-700';

const activeClasses =
  ' text-navy-950 after:absolute after:inset-x-4 after:bottom-0 after:h-0.5 after:bg-gold-500';

const panelItemBase =
  'flex min-h-11 items-center px-4 text-[15px] text-navy-900/80 transition-colors hover:bg-sand-100 hover:text-navy-950 focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-navy-700';

const sheetTopBase =
  'flex min-h-12 w-full items-center border-b border-navy-950/15 font-display text-2xl font-semibold text-navy-950';

const sheetChildBase =
  'flex min-h-11 items-center border-b border-navy-950/10 pl-6 text-[17px] text-navy-900/85 hover:text-navy-950';

const FOCUSABLE =
  'a[href], button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])';

type OpenedBy = 'click' | 'hover' | 'keyboard';

interface OpenMenu {
  id: string;
  by: OpenedBy;
}

/* Desktop dropdown (Golf, Club) */
function DesktopDropdown({
  group,
  active,
  openMenu,
  setOpenMenu,
}: {
  group: NavGroup;
  active: boolean;
  openMenu: OpenMenu | null;
  setOpenMenu: React.Dispatch<React.SetStateAction<OpenMenu | null>>;
}) {
  const pathname = usePathname();
  const open = openMenu?.id === group.id;
  const openedBy = open ? openMenu?.by : undefined;
  const itemRef = useRef<HTMLLIElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const panelRef = useRef<HTMLUListElement>(null);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const menuId = `menu-${group.id}`;

  const clearCloseTimer = useCallback(() => {
    if (closeTimer.current) {
      clearTimeout(closeTimer.current);
      closeTimer.current = null;
    }
  }, []);

  useEffect(() => clearCloseTimer, [clearCloseTimer]);

  const close = () => {
    clearCloseTimer();
    setOpenMenu(null);
  };

  const toggle = () => {
    clearCloseTimer();
    if (!open) {
      setOpenMenu({ id: group.id, by: 'click' });
    } else if (openedBy === 'hover') {
      // A tap on a hover-capable touch device fires mouseenter first, then
      // click. Promote the hover-open to a click-open instead of closing.
      setOpenMenu({ id: group.id, by: 'click' });
    } else {
      setOpenMenu(null);
    }
  };

  const hoverOpen = () => {
    clearCloseTimer();
    if (!open) setOpenMenu({ id: group.id, by: 'hover' });
  };

  const hoverClose = () => {
    clearCloseTimer();
    if (open && openedBy === 'hover') {
      closeTimer.current = setTimeout(() => {
        closeTimer.current = null;
        // Only close our own hover-opened panel. The pointer may already have
        // opened a neighbouring group, and that one must stay open.
        setOpenMenu((prev) =>
          prev && prev.id === group.id && prev.by === 'hover' ? null : prev,
        );
      }, 150);
    }
  };

  const panelLinks = (): HTMLAnchorElement[] =>
    panelRef.current
      ? Array.from(panelRef.current.querySelectorAll<HTMLAnchorElement>('a[href]'))
      : [];

  const focusItem = (index: number) => {
    const links = panelLinks();
    if (links.length === 0) return;
    const i = ((index % links.length) + links.length) % links.length;
    links[i].focus();
  };

  const onTriggerKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>) => {
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      clearCloseTimer();
      if (!open) setOpenMenu({ id: group.id, by: 'keyboard' });
      // The panel is already in the DOM (visibility toggled), so it can take
      // focus on the next frame once the class change has applied.
      requestAnimationFrame(() => focusItem(0));
    } else if (e.key === 'ArrowUp' && open) {
      e.preventDefault();
      focusItem(-1);
    } else if (e.key === 'Escape' && open) {
      e.preventDefault();
      close();
    }
  };

  const onPanelKeyDown = (e: React.KeyboardEvent<HTMLUListElement>) => {
    const links = panelLinks();
    const current = links.indexOf(document.activeElement as HTMLAnchorElement);
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      focusItem(current + 1);
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      focusItem(current - 1);
    } else if (e.key === 'Escape') {
      e.preventDefault();
      close();
      triggerRef.current?.focus();
    }
  };

  const onFocusOut = (e: React.FocusEvent<HTMLLIElement>) => {
    // Close when focus moves to something outside this item. A null
    // relatedTarget is ignored: Safari fires blur with no target when the
    // mouse presses a link, and closing there would swallow the click.
    // Outside clicks and route changes are handled by the parent.
    const next = e.relatedTarget as Node | null;
    if (open && next && !itemRef.current?.contains(next)) {
      close();
    }
  };

  return (
    <li
      ref={itemRef}
      className="relative flex"
      onMouseEnter={hoverOpen}
      onMouseLeave={hoverClose}
      onBlur={onFocusOut}
    >
      <button
        ref={triggerRef}
        type="button"
        aria-haspopup="true"
        aria-expanded={open}
        aria-controls={menuId}
        onClick={toggle}
        onKeyDown={onTriggerKeyDown}
        className={linkBase + (active ? activeClasses : '')}
      >
        {group.name}
        <ChevronDown
          size={14}
          strokeWidth={1.5}
          aria-hidden="true"
          className={
            open
              ? 'rotate-180 transition-transform duration-200 motion-reduce:transition-none'
              : 'transition-transform duration-200 motion-reduce:transition-none'
          }
        />
      </button>
      <ul
        ref={panelRef}
        id={menuId}
        role="list"
        onKeyDown={onPanelKeyDown}
        className={`absolute left-1/2 top-[calc(100%+2px)] z-50 w-60 -translate-x-1/2 border border-navy-950 bg-sand-50 py-1 transition-[opacity,visibility] duration-150 motion-reduce:transition-none ${
          open ? 'visible opacity-100' : 'invisible opacity-0'
        }`}
      >
        {group.children.map((child) => {
          const childActive = isItemActive(pathname, child.href);
          return (
            <li key={child.href}>
              <Link
                href={child.href}
                aria-current={childActive ? 'page' : undefined}
                className={panelItemBase + (childActive ? ' font-medium text-navy-950' : '')}
              >
                {child.name}
              </Link>
            </li>
          );
        })}
      </ul>
    </li>
  );
}

/* Main navbar */
export default function Navbar() {
  const pathname = usePathname();
  const [openMenu, setOpenMenu] = useState<OpenMenu | null>(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const menuOpenRef = useRef(false);
  menuOpenRef.current = menuOpen;
  const desktopNavRef = useRef<HTMLElement>(null);
  const sheetRef = useRef<HTMLDivElement>(null);
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);

  const openSheet = () => setMenuOpen(true);

  const closeSheet = useCallback(() => {
    setMenuOpen(false);
    menuButtonRef.current?.focus();
  }, []);

  // Route change closes everything. The sheet closes through closeSheet so
  // focus returns to the Menu button rather than being lost with the dialog.
  useEffect(() => {
    setOpenMenu(null);
    if (menuOpenRef.current) closeSheet();
  }, [pathname, closeSheet]);

  // Outside click closes an open dropdown. Only the desktop link row counts as
  // inside, so a click on the letterhead strip or crest closes the panel too.
  useEffect(() => {
    if (!openMenu) return;
    const onPointerDown = (e: PointerEvent) => {
      if (desktopNavRef.current && !desktopNavRef.current.contains(e.target as Node)) {
        setOpenMenu(null);
      }
    };
    document.addEventListener('pointerdown', onPointerDown);
    return () => document.removeEventListener('pointerdown', onPointerDown);
  }, [openMenu]);

  // Mobile sheet: body scroll lock, initial focus, Escape, Tab trap.
  useEffect(() => {
    if (!menuOpen) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    closeRef.current?.focus();

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        e.preventDefault();
        closeSheet();
        return;
      }
      if (e.key !== 'Tab' || !sheetRef.current) return;
      const focusable = Array.from(
        sheetRef.current.querySelectorAll<HTMLElement>(FOCUSABLE),
      );
      if (focusable.length === 0) return;
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      const activeEl = document.activeElement;
      if (e.shiftKey && (activeEl === first || !sheetRef.current.contains(activeEl))) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && (activeEl === last || !sheetRef.current.contains(activeEl))) {
        e.preventDefault();
        first.focus();
      }
    };
    document.addEventListener('keydown', onKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener('keydown', onKeyDown);
    };
  }, [menuOpen, closeSheet]);

  const sheetRow = (item: NavLink) => {
    const active = isItemActive(pathname, item.href);
    return (
      <Link
        key={item.href}
        href={item.href}
        aria-current={active ? 'page' : undefined}
        className={sheetTopBase + (active ? ' text-navy-950 border-b-gold-500' : '')}
      >
        {item.name}
      </Link>
    );
  };

  const sheetGroup = (group: NavGroup) => (
    <div key={group.id}>
      <p className={sheetTopBase}>{group.name}</p>
      {group.children.map((child) => {
        const active = isItemActive(pathname, child.href);
        return (
          <Link
            key={child.href}
            href={child.href}
            aria-current={active ? 'page' : undefined}
            className={
              sheetChildBase + (active ? ' font-medium text-navy-950 border-b-gold-500' : '')
            }
          >
            {child.name}
          </Link>
        );
      })}
    </div>
  );

  return (
    <header
      className="sticky top-0 z-40 border-t border-navy-950 border-b-2 border-b-gold-500 bg-white lg:-top-[81px]"
    >

      {/* Crest block (desktop) */}
      <div className="hidden h-20 lg:block">
        <Link
          href="/"
          aria-label="Sussex Inlet Golf Club, home"
          className="mx-auto flex h-full w-fit flex-col items-center justify-center gap-1 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-navy-700"
        >
          <Image
            src="/images/SIGC-crest.webp"
            alt=""
            width={48}
            height={44}
            loading="eager"
            className="h-11 w-auto object-contain"
          />
          <span className="font-display text-2xl font-semibold leading-none tracking-tight text-navy-950">
            Sussex Inlet Golf Club
          </span>
        </Link>
      </div>

      {/* Link row (desktop) */}
      <nav
        ref={desktopNavRef}
        aria-label="Main"
        className="hidden h-11 border-t border-navy-950/15 bg-sand-100 lg:block"
      >
        <ul className="mx-auto flex h-full max-w-6xl items-stretch justify-center divide-x divide-navy-950/15 px-6">
          {navItems.map((item) => {
            if (isGroup(item)) {
              return (
                <DesktopDropdown
                  key={item.id}
                  group={item}
                  active={isGroupActive(pathname, item)}
                  openMenu={openMenu}
                  setOpenMenu={setOpenMenu}
                />
              );
            }
            const active = isItemActive(pathname, item.href);
            return (
              <li key={item.href} className="relative flex">
                <Link
                  href={item.href}
                  aria-current={active ? 'page' : undefined}
                  className={linkBase + (active ? activeClasses : '')}
                >
                  {item.name}
                </Link>
              </li>
            );
          })}
          <li className="relative flex">
            <a
              href={PHONE_HREF}
              className="inline-flex h-full cursor-pointer items-center gap-2 px-4 text-[15px] font-semibold text-gold-600 transition-colors duration-200 hover:text-navy-950 focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-navy-700"
            >
              Book a round
            </a>
          </li>
        </ul>
      </nav>

      {/* Mobile bar */}
      <div className="flex h-[61px] items-center justify-between px-4 lg:hidden">
        <Link
          href="/"
          aria-label="Sussex Inlet Golf Club, home"
          className="flex min-h-11 items-center gap-3 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-navy-700"
        >
          <Image
            src="/images/SIGC-crest.webp"
            alt=""
            width={40}
            height={37}
            loading="eager"
            className="h-10 w-auto object-contain"
          />
          <span className="font-display text-base font-semibold leading-[1.05] text-navy-950">
            Sussex Inlet
            <br />
            Golf Club
          </span>
        </Link>
        <button
          ref={menuButtonRef}
          type="button"
          aria-expanded={menuOpen}
          aria-controls="site-menu"
          onClick={openSheet}
          className="inline-flex h-11 cursor-pointer items-center gap-2 px-2 text-sm font-medium text-navy-950 transition-colors hover:bg-sand-100 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-navy-700"
        >
          Menu <Menu size={22} strokeWidth={1.5} aria-hidden="true" />
        </button>
      </div>

      {/* Mobile sheet */}
      <div
        ref={sheetRef}
        id="site-menu"
        role="dialog"
        aria-modal="true"
        aria-label="Site menu"
        hidden={!menuOpen}
        className="fixed inset-0 z-50 overflow-y-auto bg-sand-50 px-6 pb-10 lg:hidden motion-safe:animate-[fade-in_200ms_ease-out]"
      >
        <div className="flex h-16 items-center justify-between border-b border-navy-950">
          <div className="flex items-center gap-3">
            <Image
              src="/images/SIGC-crest.webp"
              alt=""
              width={48}
              height={44}
              className="h-12 w-auto object-contain"
            />
            <span className="font-display leading-none text-navy-950">
              <span className="block text-xl font-semibold">Sussex Inlet Golf Club</span>
              <span className="mt-1 block text-sm italic text-navy-900/75">Est. 1953</span>
            </span>
          </div>
          <button
            ref={closeRef}
            type="button"
            aria-label="Close menu"
            onClick={closeSheet}
            className="flex h-11 w-11 cursor-pointer items-center justify-center text-navy-950 transition-colors hover:bg-sand-100 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-navy-700"
          >
            <X size={22} strokeWidth={1.5} aria-hidden="true" />
          </button>
        </div>

        <nav aria-label="Main" className="mt-2">
          {navItems.map((item) => (isGroup(item) ? sheetGroup(item) : sheetRow(item)))}

          <a
            href={PHONE_HREF}
            className="mt-6 flex h-12 w-full items-center justify-center bg-navy-950 text-sm font-semibold text-sand-50 transition-colors hover:bg-navy-800 active:translate-y-px focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-navy-700"
          >
            Book a round
          </a>
        </nav>

        <div className="mt-8 border-t border-navy-950/15 pt-6 text-sm leading-relaxed text-navy-900/75">
          <p>
            7 Golfcourse Way
            <br />
            Sussex Inlet NSW 2540
          </p>
          <p>
            <a
              href={PHONE_HREF}
              className="inline-flex min-h-11 items-center tabular-nums text-navy-950 underline decoration-gold-500 underline-offset-[6px]"
            >
              {PHONE_LABEL}
            </a>
          </p>
          <p>Course and clubhouse open seven days</p>
        </div>

        <div className="mt-6">
          <SocialLinks variant="dark" />
        </div>
      </div>
    </header>
  );
}
