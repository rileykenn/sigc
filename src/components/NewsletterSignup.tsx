'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

export default function NewsletterSignup() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubmitted(true);
      setEmail('');
      setTimeout(() => setSubmitted(false), 4000);
    }
  };

  return (
    <section className="py-20 bg-green-900">
      <div className="mx-auto max-w-xl px-6 text-center">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="font-serif italic text-2xl sm:text-3xl text-white mb-3">
            Stay in the Loop
          </h2>
          <p className="text-green-300/50 text-sm mb-8">
            Comp results, events, and club news straight to your inbox.
          </p>

          {submitted ? (
            <p className="text-gold-400 font-medium">Thanks for subscribing!</p>
          ) : (
            <form onSubmit={handleSubmit} className="flex gap-3">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email"
                required
                className="flex-1 px-4 py-3 bg-white/10 border border-white/15 text-white placeholder-white/30 text-sm focus:outline-none focus:border-gold-400 transition-colors"
              />
              <button
                type="submit"
                className="px-6 py-3 bg-gold-400 text-green-900 text-xs font-semibold uppercase tracking-wider hover:bg-gold-300 transition-colors"
              >
                Subscribe
              </button>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  );
}
