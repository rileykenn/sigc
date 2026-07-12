'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Briefcase, PartyPopper, Trophy, Users } from 'lucide-react';

const eventTypes = [
  {
    icon: Trophy,
    title: 'Social golf',
    description: 'A relaxed nine with your mates, no experience needed.',
  },
  {
    icon: PartyPopper,
    title: 'Birthday parties',
    description: 'A round of golf, then drinks in the clubhouse.',
  },
  {
    icon: Briefcase,
    title: 'Corporate days',
    description: 'A day out for your team or clients, with catering available.',
  },
  {
    icon: Users,
    title: 'Group functions',
    description: 'Family reunions, social club trips, or a crowd down for the weekend.',
  },
];

export default function SocialEvents() {
  return (
    <section id="venue-hire" className="bg-sand-50 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid items-start gap-14 lg:grid-cols-12 lg:gap-16">
          {/* Content */}
          <div className="lg:col-span-5 lg:order-2">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
            >
              <h2 className="font-display text-4xl font-semibold tracking-tight text-navy-950 [text-wrap:balance] sm:text-5xl lg:text-6xl">
                Golf days, birthdays and everything between
              </h2>
              <p className="mt-5 max-w-[62ch] leading-relaxed text-navy-900/70">
                The course and clubhouse are both available for group days. Tell us a date and
                rough numbers, and we will help with the rest.
              </p>
            </motion.div>

            <motion.ul
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.6, delay: 0.1, ease: 'easeOut' }}
              className="mt-10 border-t border-navy-200/70"
            >
              {eventTypes.map((event) => {
                const Icon = event.icon;
                return (
                  <li key={event.title} className="flex gap-4 border-b border-navy-200/70 py-5">
                    <Icon
                      size={20}
                      strokeWidth={1.5}
                      className="mt-0.5 shrink-0 text-navy-700"
                      aria-hidden="true"
                    />
                    <div>
                      <h3 className="font-medium text-navy-950">{event.title}</h3>
                      <p className="mt-1 text-sm leading-relaxed text-navy-900/70">
                        {event.description}
                      </p>
                    </div>
                  </li>
                );
              })}
            </motion.ul>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2, ease: 'easeOut' }}
              className="mt-6"
            >
              <a
                href="#contact"
                className="inline-flex min-h-11 cursor-pointer items-center font-medium text-navy-800 underline decoration-gold-500/60 underline-offset-4 hover:decoration-gold-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-navy-700"
              >
                Enquire about a function
              </a>
            </motion.p>
          </div>

          {/* Images */}
          <div className="lg:col-span-7 lg:order-1">
            <div className="grid grid-cols-2 items-start gap-4 sm:gap-6">
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.6, ease: 'easeOut' }}
                className="relative aspect-[3/4] overflow-hidden rounded-2xl"
              >
                <Image
                  src="/images/venuehire.webp"
                  alt="Tables set for a function at the Sussex Inlet Golf Club clubhouse"
                  fill
                  sizes="(max-width: 1024px) 50vw, 30vw"
                  className="object-cover"
                />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.6, delay: 0.15, ease: 'easeOut' }}
                className="relative mt-10 aspect-[3/4] overflow-hidden rounded-2xl sm:mt-16"
              >
                <Image
                  src="/images/freindlystaffinteraction.webp"
                  alt="Club staff chatting with visitors across the clubhouse counter"
                  fill
                  sizes="(max-width: 1024px) 50vw, 30vw"
                  className="object-cover"
                />
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
