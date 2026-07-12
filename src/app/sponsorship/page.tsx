'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Phone, Mail, Heart, Users, Megaphone } from 'lucide-react';

export default function SponsorshipPage() {
  return (
    <main>
      <Navbar />
      {/* Hero */}
      <section className="relative overflow-hidden bg-navy-950 pt-32 pb-20 sm:pt-36">
        <div className="absolute inset-0">
          <Image src="/images/sponsership.webp" alt="Sponsor boards beside a fairway at Sussex Inlet Golf Club" fill sizes="100vw" className="object-cover opacity-20" />
        </div>
        <div className="relative mx-auto max-w-4xl px-6 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="font-display text-4xl font-semibold tracking-tight text-sand-50 sm:text-5xl lg:text-6xl [text-wrap:balance]"
          >
            Sponsor the club
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 0.6, ease: 'easeOut' }}
            className="mx-auto mt-5 max-w-[62ch] leading-relaxed text-sand-50/80"
          >
            Support a community golf club and put your business in front of members and visitors every week of the year.
          </motion.p>
        </div>
      </section>

      {/* Why sponsor */}
      <section className="bg-white py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
            >
              <h2 className="font-display text-3xl font-semibold tracking-tight text-navy-950 sm:text-4xl [text-wrap:balance]">Where your support goes</h2>
              <p className="mt-5 mb-8 max-w-[62ch] leading-relaxed text-navy-900/70">
                Sussex Inlet Golf Club is a not-for-profit community club, run by a volunteer board for members and visitors across the Shoalhaven. Sponsorship goes straight into maintaining and improving the bushland course.
              </p>
              <ul className="space-y-4">
                {[
                  { icon: Users, text: 'Reach hundreds of members and visitors each week' },
                  { icon: Heart, text: 'Back a volunteer-run community club' },
                  { icon: Megaphone, text: 'Signage and recognition around the course' },
                ].map((item) => {
                  const Icon = item.icon;
                  return (
                    <li key={item.text} className="flex items-start gap-3">
                      <Icon size={20} strokeWidth={1.5} className="mt-0.5 shrink-0 text-navy-700" />
                      <span className="leading-relaxed text-navy-900/80">{item.text}</span>
                    </li>
                  );
                })}
              </ul>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.15, ease: 'easeOut' }}
              className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow-sm shadow-navy-900/5"
            >
              <Image src="/images/sponsershipsigns2.webp" alt="Sponsor signs lining the course" fill sizes="(min-width: 1024px) 50vw, 100vw" className="object-cover" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Current sponsors */}
      <section className="bg-sand-50 py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, ease: 'easeOut' }}>
            <h2 className="font-display text-3xl font-semibold tracking-tight text-navy-950 sm:text-4xl [text-wrap:balance]">Thanks to our sponsors</h2>
            <p className="mx-auto mt-4 mb-12 max-w-[62ch] leading-relaxed text-navy-900/70">Generous local businesses help keep the club running. Their boards line the course.</p>
          </motion.div>
          <div className="mx-auto grid max-w-4xl grid-cols-1 gap-8 md:grid-cols-2">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, ease: 'easeOut' }} className="relative aspect-[16/10] overflow-hidden rounded-2xl shadow-sm shadow-navy-900/5">
              <Image src="/images/sponsership.webp" alt="Sponsor signage at the club" fill sizes="(min-width: 768px) 50vw, 100vw" className="object-cover" />
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1, ease: 'easeOut' }} className="relative aspect-[16/10] overflow-hidden rounded-2xl shadow-sm shadow-navy-900/5">
              <Image src="/images/sponsershipsigns2.webp" alt="Course sponsor boards" fill sizes="(min-width: 768px) 50vw, 100vw" className="object-cover" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Become a sponsor */}
      <section className="bg-white py-20 sm:py-24">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, ease: 'easeOut' }}>
            <h2 className="font-display text-3xl font-semibold tracking-tight text-navy-950 sm:text-4xl [text-wrap:balance]">Become a sponsor</h2>
            <p className="mx-auto mt-4 mb-8 max-w-[62ch] leading-relaxed text-navy-900/70">Call or email the club to talk through sponsorship packages and what would suit your business.</p>
            <div className="flex flex-col justify-center gap-4 sm:flex-row">
              <a href="tel:+61244412259" className="inline-flex cursor-pointer items-center justify-center gap-2 rounded-full bg-gold-400 px-7 py-3.5 text-sm font-semibold text-navy-950 transition hover:bg-gold-300 active:scale-[0.98] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-navy-700">
                <Phone size={16} strokeWidth={1.5} /> (02) 4441 2259
              </a>
              <a href="mailto:sussexgolf@shoalhaven.net.au" className="inline-flex cursor-pointer items-center justify-center gap-2 rounded-full border border-navy-200 bg-transparent px-7 py-3.5 text-sm font-semibold text-navy-900 transition hover:border-navy-400 active:scale-[0.98] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-navy-700">
                <Mail size={16} strokeWidth={1.5} /> Email the club
              </a>
            </div>
          </motion.div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
