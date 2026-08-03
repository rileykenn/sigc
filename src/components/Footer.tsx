'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import SocialLinks from '@/components/SocialLinks';

const pageLinks = [
  { name: 'Course', href: '/course' },
  { name: 'Green fees', href: '/#pricing' },
  { name: 'Membership', href: '/membership' },
  { name: 'Competitions', href: '/competitions' },
  { name: 'Sponsorship', href: '/sponsorship' },
  { name: 'News and results', href: '/news' },
];

const footerLink =
  'w-fit text-sm text-sand-50/70 transition-colors duration-300 hover:text-sand-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold-400';

export default function Footer() {
  return (
    <footer className="relative bg-navy-950 overflow-hidden">
      <div className="absolute inset-0 grass-texture opacity-5" />

      <div className="relative mx-auto max-w-7xl px-6 py-16 sm:py-20">
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-3">
          {/* Club */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            className="sm:col-span-2 lg:col-span-1"
          >
            <Image
              src="/images/SIGC-crest.webp"
              alt="Sussex Inlet Golf Club crest"
              width={94}
              height={88}
              className="object-contain mb-4"
            />
            <p className="mb-4 font-display text-xl font-semibold leading-tight text-sand-50">
              Sussex Inlet Golf Club
            </p>
            <p className="text-sm text-sand-50/80 leading-relaxed max-w-xs mb-3">
              Golf in the bush on the NSW South Coast.
            </p>
            <p className="text-sm text-sand-50/70 leading-relaxed">
              7 Golfcourse Way
              <br />
              Sussex Inlet NSW 2540
            </p>
          </motion.div>

          {/* Pages */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1, ease: 'easeOut' }}
          >
            <h4 className="text-sm font-medium text-sand-50 mb-4">Pages</h4>
            <div className="flex flex-col gap-2.5">
              {pageLinks.map((link) => (
                <Link key={link.name} href={link.href} className={footerLink}>
                  {link.name}
                </Link>
              ))}
            </div>
          </motion.div>

          {/* Contact and hours */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15, ease: 'easeOut' }}
          >
            <h4 className="text-sm font-medium text-sand-50 mb-4">
              Contact and hours
            </h4>
            <div className="flex flex-col gap-2.5">
              <a href="tel:+61244412259" className={footerLink}>
                (02) 4441 2259
              </a>
              <a
                href="mailto:sussexgolf@shoalhaven.net.au"
                className={footerLink}
              >
                sussexgolf@shoalhaven.net.au
              </a>
              <p className="text-sm text-sand-50/70">Course and clubhouse open daily</p>
            </div>
            <div className="mt-5">
              <SocialLinks variant="light" size={18} />
            </div>
          </motion.div>
        </div>

        {/* Bottom bar */}
        <div className="mt-14 pt-6 border-t border-sand-50/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-sand-50/50">
            © 2026 Sussex Inlet Golf Club. Community owned since 1953.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
            <a href="#" className="text-xs text-sand-50/50 hover:text-sand-50 transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold-400">
              Privacy
            </a>
            <p className="text-xs text-sand-50/50">
              Designed by{' '}
              <a
                href="https://rileytechstudio.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sand-50/70 underline underline-offset-4 decoration-sand-50/30 transition-colors hover:text-sand-50 hover:decoration-sand-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold-400"
              >
                Riley Tech Studio
              </a>
            </p>
            <Link
              href="/login"
              className="text-xs text-sand-50/50 hover:text-sand-50 transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold-400"
            >
              Admin login
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
