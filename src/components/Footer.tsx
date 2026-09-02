import Image from 'next/image';
import Link from 'next/link';
import SocialLinks from '@/components/SocialLinks';

const golfLinks = [
  { name: 'Course', href: '/course' },
  { name: 'Green fees', href: '/green-fees' },
  { name: "What's on", href: '/whats-on' },
  { name: 'Competition days', href: '/competitions' },
  { name: 'Group bookings', href: '/group-bookings' },
];

const clubLinks = [
  { name: 'About the club', href: '/about' },
  { name: 'Gallery', href: '/gallery' },
  { name: 'The blue tree', href: '/historic-blue-tree' },
  { name: 'Sponsorship', href: '/sponsorship' },
  { name: 'Membership', href: '/membership' },
  { name: 'News', href: '/news' },
];

const footerLink =
  'inline-flex min-h-11 items-center text-sm text-sand-50/75 transition-colors hover:text-sand-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold-300';

const bottomLink =
  'inline-flex min-h-11 items-center transition-colors hover:text-sand-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold-300';

const columnHeading = 'text-sm font-medium text-sand-50';

export default function Footer() {
  return (
    <footer className="bg-navy-950 text-sand-50">
      <div className="mx-auto max-w-6xl px-6 py-14 sm:py-16">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {/* Club identity */}
          <div>
            <Image
              src="/images/SIGC-crest.webp"
              alt="Sussex Inlet Golf Club crest"
              width={72}
              height={66}
              className="object-contain"
            />
            <p className="mt-4 font-display text-xl font-semibold leading-tight text-sand-50">
              Sussex Inlet Golf Club
            </p>
            <p className="mt-2 text-sm text-sand-50/75">Community owned since 1953</p>
            <SocialLinks variant="light" size={18} className="mt-4 -ml-3" />
          </div>

          {/* Golf */}
          <nav aria-labelledby="footer-golf">
            <h2 id="footer-golf" className={columnHeading}>
              Golf
            </h2>
            <div className="mt-3 flex flex-col gap-0">
              {golfLinks.map((link) => (
                <Link key={link.href} href={link.href} className={footerLink}>
                  {link.name}
                </Link>
              ))}
            </div>
          </nav>

          {/* Club */}
          <nav aria-labelledby="footer-club">
            <h2 id="footer-club" className={columnHeading}>
              Club
            </h2>
            <div className="mt-3 flex flex-col gap-0">
              {clubLinks.map((link) => (
                <Link key={link.href} href={link.href} className={footerLink}>
                  {link.name}
                </Link>
              ))}
            </div>
          </nav>

          {/* Contact */}
          <div>
            <h2 className={columnHeading}>Contact</h2>
            <div className="mt-3 flex flex-col gap-0">
              <a href="tel:+61244412259" className={footerLink}>
                (02) 4441 2259
              </a>
              <a href="mailto:sussexgolf@shoalhaven.net.au" className={footerLink}>
                sussexgolf@shoalhaven.net.au
              </a>
              <address className="mt-2 text-sm not-italic leading-relaxed text-sand-50/75">
                7 Golfcourse Way
                <br />
                Sussex Inlet NSW 2540
              </address>
              <p className="mt-2 text-sm text-sand-50/75">
                Course and clubhouse open seven days
              </p>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-sand-50/20 pt-6 text-xs text-sand-50/60 md:flex-row">
          <p>© 2026 Sussex Inlet Golf Club.</p>
          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
            <a
              href="https://rileytechstudio.com"
              target="_blank"
              rel="noopener noreferrer"
              className={`${bottomLink} underline decoration-sand-50/40 underline-offset-4 hover:decoration-sand-50`}
            >
              Designed by Riley Tech Studio
            </a>
            <Link href="/login" className={bottomLink}>
              Admin login
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
