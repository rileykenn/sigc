'use client';

import { motion } from 'framer-motion';
import { Phone, Mail, MapPin } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-28 bg-white">
      <div className="mx-auto max-w-5xl px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-gold-500 uppercase tracking-[0.25em] text-xs font-medium mb-5">Get in Touch</p>
            <h2 className="font-serif italic text-4xl text-green-900 mb-8">
              Contact
            </h2>

            <div className="space-y-6">
              <a href="tel:0244412259" className="flex items-center gap-4 group">
                <Phone size={16} className="text-gold-500" />
                <span className="text-green-900 text-sm">(02) 4441 2259</span>
              </a>
              <a href="mailto:sigolfclub@gmail.com" className="flex items-center gap-4 group">
                <Mail size={16} className="text-gold-500" />
                <span className="text-green-900 text-sm">sigolfclub@gmail.com</span>
              </a>
              <div className="flex items-center gap-4">
                <MapPin size={16} className="text-gold-500" />
                <span className="text-green-900 text-sm">221 Sussex Inlet Road, Sussex Inlet NSW 2540</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="rounded-xl overflow-hidden h-[350px]"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3227.8!2d150.5726!3d-35.1694!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b1557c0e5c0a5a7%3A0x3c6a1a1b6a3c4a0!2sSussex+Inlet+Golf+Club!5e0!3m2!1sen!2sau!4v1714000000000!5m2!1sen!2sau"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Sussex Inlet Golf Club Location"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
