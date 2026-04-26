'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Check, ArrowRight } from 'lucide-react';
import { toast } from 'sonner';

export default function NewsletterSignup() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes('@')) {
      toast.error('Please enter a valid email address');
      return;
    }
    setSubmitted(true);
    toast.success('Welcome to the club!', {
      description: "You'll receive our latest news and events.",
    });
    setEmail('');
    setTimeout(() => setSubmitted(false), 4000);
  };

  return (
    <section className="relative py-20 sm:py-24 bg-gradient-to-br from-fairway-700 via-fairway-800 to-fairway-900 overflow-hidden">
      {/* Texture */}
      <div className="absolute inset-0 grass-texture opacity-10" />
      <div className="absolute inset-0 bg-gradient-to-r from-fairway-800/50 to-transparent" />

      {/* Decorative orbs */}
      <div className="absolute -top-20 -right-20 w-80 h-80 bg-fairway-500/10 rounded-full blur-3xl" />
      <div className="absolute -bottom-20 -left-20 w-60 h-60 bg-gold-400/10 rounded-full blur-3xl" />

      <div className="relative mx-auto max-w-3xl px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-white/10 backdrop-blur-sm mb-6">
            <Mail size={28} className="text-fairway-200" />
          </div>

          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight mb-3">
            Stay on the Fairway
          </h2>
          <p className="text-fairway-200/80 text-base sm:text-lg mb-8 max-w-md mx-auto">
            Get competition results, event updates, and club news delivered to your inbox
          </p>

          {/* Form */}
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <div className="relative flex-1">
              <Mail size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="your@email.com"
                className="w-full rounded-full bg-white pl-11 pr-4 py-3.5 text-sm text-gray-900 placeholder:text-gray-400 ring-1 ring-white/20 focus:ring-2 focus:ring-gold-400 focus:outline-none transition-all"
              />
            </div>
            <button
              type="submit"
              disabled={submitted}
              className={`btn-shimmer inline-flex items-center justify-center gap-2 rounded-full px-6 py-3.5 text-sm font-semibold transition-all ${
                submitted
                  ? 'bg-fairway-500 text-white cursor-default'
                  : 'bg-gold-400 text-fairway-900 hover:bg-gold-300 shadow-lg shadow-gold-400/20 hover:shadow-xl'
              }`}
            >
              {submitted ? (
                <>
                  <Check size={16} />
                  Subscribed!
                </>
              ) : (
                <>
                  Subscribe
                  <ArrowRight size={14} />
                </>
              )}
            </button>
          </form>

          <p className="mt-4 text-xs text-fairway-300/50">
            No spam, unsubscribe anytime. We respect your privacy.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
