'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import SocialLinks from '@/components/SocialLinks';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative bg-fairway-950 text-fairway-300 overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-fairway-700 to-transparent" />
      <div className="absolute inset-0 grass-texture opacity-10" />

      <div className="relative mx-auto max-w-7xl px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 items-start">
          {/* Logo & Tagline */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="md:col-span-1"
          >
            <Image
              src="/media/SIGC-logo.jpg"
              alt="Sussex Inlet Golf Club"
              width={160}
              height={40}
              className="object-contain brightness-0 invert mb-4"
            />
            <p className="text-sm text-fairway-400 leading-relaxed max-w-xs mb-4">
              Where nature meets the fairway. 9 holes of pure Australian bushland golf in Sussex Inlet.
            </p>
            <SocialLinks variant="light" size={18} />
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
              Explore
            </h4>
            <div className="flex flex-col gap-2.5">
              {[
                { name: 'Course Overview', href: '/course' },
                { name: 'Green Fees', href: '/#pricing' },
                { name: 'Events Calendar', href: '/#calendar' },
                { name: 'Gallery', href: '/#gallery' },
              ].map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-sm text-fairway-400 hover:text-white transition-colors duration-300 w-fit"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </motion.div>

          {/* Club */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
          >
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
              Club
            </h4>
            <div className="flex flex-col gap-2.5">
              {[
                { name: 'Membership', href: '/membership' },
                { name: 'Competitions', href: '/#calendar' },
                { name: 'Reviews', href: '/#reviews' },
                { name: 'Contact Us', href: '/#contact' },
              ].map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-sm text-fairway-400 hover:text-white transition-colors duration-300 w-fit"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
              Contact
            </h4>
            <div className="flex flex-col gap-2.5 text-sm text-fairway-400">
              <a href="tel:+61244412259" className="hover:text-white transition-colors">(02) 4441 2259</a>
              <a href="mailto:sussexgolf@shoalhaven.net.au" className="hover:text-white transition-colors">sussexgolf@shoalhaven.net.au</a>
              <p>7 Golfcourse Way</p>
              <p>Sussex Inlet NSW 2540</p>
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-14 pt-6 border-t border-fairway-800/50 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-fairway-500">
            © {year} Sussex Inlet Golf Club Ltd. All rights reserved.
          </p>
          <p className="text-xs text-fairway-600">
            Designed by{' '}
            <a
              href="https://rileytechstudio.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-fairway-400 hover:text-white transition-colors underline decoration-fairway-700 underline-offset-4 hover:decoration-white"
            >
              Riley Tech Studio
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
