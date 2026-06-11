'use client';

import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';
import { toast } from 'sonner';

export default function Contact() {
  const handleCopyEmail = () => {
    navigator.clipboard.writeText('sussexgolf@shoalhaven.net.au');
    toast.success('Email copied to clipboard!');
  };

  const handleCopyAddress = () => {
    navigator.clipboard.writeText('7 Golfcourse Way, Sussex Inlet NSW 2540');
    toast.success('Address copied!');
  };

  return (
    <section id="contact" className="relative py-24 sm:py-32 bg-sand-50">
      {/* Top Divider */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-fairway-200 to-transparent" />

      <div className="mx-auto max-w-7xl px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block rounded-full bg-fairway-100 px-4 py-1.5 text-sm font-semibold text-fairway-700 mb-4">
            Get in Touch
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold text-fairway-900 tracking-tight">
            Come Play With Us
          </h2>
          <p className="mt-4 text-lg text-gray-500 max-w-2xl mx-auto">
            Ring the club to book your round or drop in and say hello
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 max-w-6xl mx-auto">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            {/* Phone */}
            <a
              href="tel:+61244412259"
              className="group flex items-start gap-4 rounded-2xl bg-white p-5 shadow-sm ring-1 ring-gray-100 transition-all hover:shadow-lg hover:ring-fairway-200"
            >
              <div className="rounded-xl bg-fairway-50 p-3 text-fairway-600 transition-transform group-hover:scale-110 duration-300">
                <Phone size={22} strokeWidth={1.5} />
              </div>
              <div>
                <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-0.5">
                  Phone
                </h3>
                <p className="text-lg font-semibold text-fairway-900 group-hover:text-fairway-600 transition-colors">
                  (02) 4441 2259
                </p>
              </div>
            </a>

            {/* Email */}
            <button
              onClick={handleCopyEmail}
              className="group flex items-start gap-4 rounded-2xl bg-white p-5 shadow-sm ring-1 ring-gray-100 transition-all hover:shadow-lg hover:ring-fairway-200 w-full text-left"
            >
              <div className="rounded-xl bg-blue-50 p-3 text-blue-600 transition-transform group-hover:scale-110 duration-300">
                <Mail size={22} strokeWidth={1.5} />
              </div>
              <div>
                <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-0.5">
                  Email
                </h3>
                <p className="text-lg font-semibold text-fairway-900 group-hover:text-fairway-600 transition-colors">
                  sussexgolf@shoalhaven.net.au
                </p>
                <p className="text-xs text-gray-400 mt-0.5">Click to copy</p>
              </div>
            </button>

            {/* Address */}
            <button
              onClick={handleCopyAddress}
              className="group flex items-start gap-4 rounded-2xl bg-white p-5 shadow-sm ring-1 ring-gray-100 transition-all hover:shadow-lg hover:ring-fairway-200 w-full text-left"
            >
              <div className="rounded-xl bg-amber-50 p-3 text-amber-600 transition-transform group-hover:scale-110 duration-300">
                <MapPin size={22} strokeWidth={1.5} />
              </div>
              <div>
                <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-0.5">
                  Address
                </h3>
                <p className="text-lg font-semibold text-fairway-900 group-hover:text-fairway-600 transition-colors">
                  7 Golfcourse Way
                </p>
                <p className="text-sm text-gray-500">Sussex Inlet NSW 2540</p>
                <p className="text-xs text-gray-400 mt-0.5">Click to copy</p>
              </div>
            </button>

            {/* Competition Days */}
            <div className="flex items-start gap-4 rounded-2xl bg-white p-5 shadow-sm ring-1 ring-gray-100">
              <div className="rounded-xl bg-violet-50 p-3 text-violet-600">
                <Clock size={22} strokeWidth={1.5} />
              </div>
              <div>
                <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-0.5">
                  Competition Days
                </h3>
                <p className="text-sm text-gray-700 leading-relaxed">
                  Sunday, Tuesday & Wednesday
                </p>
                <p className="text-xs text-gray-400 mt-0.5">
                  Please call ahead to play on competition days
                </p>
              </div>
            </div>
          </motion.div>

          {/* Map */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="rounded-2xl overflow-hidden shadow-xl shadow-fairway-900/5 ring-1 ring-gray-100 min-h-[400px]"
          >
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
          </motion.div>
        </div>
      </div>
    </section>
  );
}
