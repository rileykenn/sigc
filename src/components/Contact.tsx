'use client';

import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';
import { toast } from 'sonner';
import WeatherWidget from '@/components/WeatherWidget';

export default function Contact() {
  const handleCopyEmail = () => {
    navigator.clipboard.writeText('sussexgolf@shoalhaven.net.au');
    toast.success('Email copied');
  };

  return (
    <section id="contact" className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
          {/* Details */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="lg:col-span-5"
          >
            <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-semibold text-navy-950 tracking-tight [text-wrap:balance]">
              Find us
            </h2>

            <div className="mt-10 border-t border-navy-900/10">
              {/* Phone */}
              <a
                href="tel:+61244412259"
                className="group flex items-start gap-4 border-b border-navy-900/10 py-5 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-navy-700"
              >
                <Phone size={20} strokeWidth={1.5} className="mt-1 shrink-0 text-navy-700" />
                <div>
                  <p className="text-sm font-medium text-navy-700">Phone</p>
                  <p className="text-lg text-navy-950 tabular-nums underline-offset-4 decoration-gold-500/60 group-hover:underline">
                    (02) 4441 2259
                  </p>
                </div>
              </a>

              {/* Email */}
              <button
                type="button"
                onClick={handleCopyEmail}
                className="group flex w-full items-start gap-4 border-b border-navy-900/10 py-5 text-left cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-navy-700"
              >
                <Mail size={20} strokeWidth={1.5} className="mt-1 shrink-0 text-navy-700" />
                <div>
                  <p className="text-sm font-medium text-navy-700">Email</p>
                  <p className="text-lg text-navy-950 underline-offset-4 decoration-gold-500/60 group-hover:underline">
                    sussexgolf@shoalhaven.net.au
                  </p>
                  <p className="mt-0.5 text-xs text-navy-900/50">Click to copy</p>
                </div>
              </button>

              {/* Address */}
              <a
                href="https://www.google.com/maps/search/?api=1&query=Sussex+Inlet+Golf+Club"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-start gap-4 border-b border-navy-900/10 py-5 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-navy-700"
              >
                <MapPin size={20} strokeWidth={1.5} className="mt-1 shrink-0 text-navy-700" />
                <div>
                  <p className="text-sm font-medium text-navy-700">Address</p>
                  <p className="text-lg text-navy-950 underline-offset-4 decoration-gold-500/60 group-hover:underline">
                    7 Golfcourse Way, Sussex Inlet NSW 2540
                  </p>
                  <p className="mt-0.5 text-xs text-navy-900/50">Opens in Google Maps</p>
                </div>
              </a>

              {/* Competition days */}
              <div className="flex items-start gap-4 border-b border-navy-900/10 py-5">
                <Clock size={20} strokeWidth={1.5} className="mt-1 shrink-0 text-navy-700" />
                <div>
                  <p className="text-sm font-medium text-navy-700">Competition days</p>
                  <p className="text-lg text-navy-950">Sundays, plus member groups midweek</p>
                  <p className="mt-0.5 text-xs text-navy-900/50">Call ahead to check course availability</p>
                </div>
              </div>
            </div>

            <a
              href="tel:+61244412259"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-gold-400 px-7 py-3.5 text-sm font-semibold text-navy-950 transition hover:bg-gold-300 active:scale-[0.98] cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-navy-700"
            >
              Book a round
            </a>

            {/* Conditions today */}
            <div className="mt-10">
              <p className="text-sm font-medium text-navy-700">Conditions today</p>
              <div className="mt-3 inline-block">
                <WeatherWidget />
              </div>
            </div>
          </motion.div>

          {/* Map */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6, delay: 0.15, ease: 'easeOut' }}
            className="lg:col-span-7"
          >
            <div className="h-full min-h-[400px] overflow-hidden rounded-2xl border border-navy-100 shadow-lg shadow-navy-900/5">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3248.3!2d150.5776!3d-35.1761!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b1383e09dddb44b%3A0xd4ab937f08ed52d0!2sSussex%20Inlet%20Golf%20Club!5e0!3m2!1sen!2sau!4v1700000000000"
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: '400px' }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Sussex Inlet Golf Club location"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
