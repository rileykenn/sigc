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
      <section className="relative pt-32 pb-20 bg-navy-950 overflow-hidden">
        <div className="absolute inset-0">
          <Image src="/images/sponsership.webp" alt="Sponsorship at Sussex Inlet Golf Club" fill className="object-cover opacity-20" />
        </div>
        <div className="relative mx-auto max-w-4xl px-6 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-5xl sm:text-6xl font-extrabold text-white tracking-tight mb-6"
          >
            Sponsorship Opportunities
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-xl text-navy-200 max-w-2xl mx-auto"
          >
            Support your local community golf club and get your brand in front of our members and visitors
          </motion.p>
        </div>
      </section>

      {/* Why Sponsor */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-block rounded-full bg-navy-100 px-4 py-1.5 text-sm font-semibold text-navy-700 mb-4">Why Sponsor</span>
              <h2 className="text-4xl font-bold text-navy-900 tracking-tight mb-6">Make a Real Impact</h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                Sussex Inlet Golf Club is a community-focused, volunteer-run club that serves members and visitors throughout the Shoalhaven region. Your sponsorship directly supports the maintenance and improvement of our beautiful bushland course.
              </p>
              <div className="space-y-4">
                {[
                  { icon: Users, text: 'Reach hundreds of members and visitors weekly' },
                  { icon: Heart, text: 'Support a volunteer-run community club' },
                  { icon: Megaphone, text: 'Prominent signage and recognition on course' },
                ].map((item) => {
                  const Icon = item.icon;
                  return (
                    <div key={item.text} className="flex items-center gap-3">
                      <div className="rounded-lg bg-navy-50 p-2 text-navy-600"><Icon size={18} /></div>
                      <span className="text-gray-700 font-medium">{item.text}</span>
                    </div>
                  );
                })}
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="relative rounded-2xl overflow-hidden shadow-2xl aspect-[4/3]"
            >
              <Image src="/images/sponsershipsigns2.webp" alt="Sponsor signs on the course" fill className="object-cover" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Current Sponsors */}
      <section className="py-20 bg-navy-50">
        <div className="mx-auto max-w-7xl px-6 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <span className="inline-block rounded-full bg-gold-400/20 px-4 py-1.5 text-sm font-semibold text-gold-600 mb-4">Our Sponsors</span>
            <h2 className="text-4xl font-bold text-navy-900 tracking-tight mb-4">Thank You to Our Sponsors</h2>
            <p className="text-gray-500 max-w-2xl mx-auto mb-12">We are grateful for the generous support of our sponsors who help keep the club running</p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="relative rounded-2xl overflow-hidden shadow-lg aspect-[16/10]">
              <Image src="/images/sponsership.webp" alt="Sponsor signage" fill className="object-cover" />
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="relative rounded-2xl overflow-hidden shadow-lg aspect-[16/10]">
              <Image src="/images/sponsershipsigns2.webp" alt="Course sponsor boards" fill className="object-cover" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Get Involved */}
      <section className="py-20 bg-navy-900">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="text-4xl font-bold text-white tracking-tight mb-4">Become a Sponsor</h2>
            <p className="text-navy-200 text-lg mb-8">Interested in sponsoring Sussex Inlet Golf Club? We would love to hear from you. Contact us to discuss sponsorship packages and opportunities.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="tel:+61244412259" className="inline-flex items-center justify-center gap-2 rounded-full bg-gold-400 px-7 py-3.5 font-semibold text-navy-950 hover:bg-gold-300 transition-all shadow-lg">
                <Phone size={18} /> (02) 4441 2259
              </a>
              <a href="mailto:sussexgolf@shoalhaven.net.au" className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-navy-600 px-7 py-3.5 font-semibold text-white hover:bg-navy-800 transition-all">
                <Mail size={18} /> Email Us
              </a>
            </div>
          </motion.div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
