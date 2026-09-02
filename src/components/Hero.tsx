'use client';

import { useEffect, useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

const slides = [
  {
    src: '/images/drone/DJI_0120.webp',
    alt: 'A fairway at Sussex Inlet Golf Club from above, bordered by bushland and a pond',
  },
  {
    src: '/images/golfplaying.webp',
    alt: 'A player at the top of her backswing on the tee',
  },
  {
    src: '/images/wildlife.webp',
    alt: 'Kangaroos grazing beside the fairway in morning light',
  },
  {
    src: '/images/drone/DJI_0112.webp',
    alt: 'The clubhouse, carts and practice green from above at golden hour',
  },
];

const SLIDE_MS = 6500;

export default function Hero() {
  const reducedMotion = useReducedMotion();
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  // Only the first slide is server-rendered so it stays the sole LCP candidate;
  // the rest mount after hydration, well before the first advance.
  const [restMounted, setRestMounted] = useState(false);

  useEffect(() => {
    setRestMounted(true);
  }, []);

  const playing = !paused && !reducedMotion;

  useEffect(() => {
    if (!playing) return;
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % slides.length);
    }, SLIDE_MS);
    return () => clearInterval(id);
  }, [playing]);

  return (
    <section
      id="hero"
      className="relative flex min-h-[calc(100dvh-4rem)] items-center justify-center overflow-hidden bg-navy-950 lg:min-h-[calc(100dvh-127px)]"
    >
      {/* Slides */}
      <div
        role="group"
        aria-roledescription="carousel"
        aria-label="Photos of the club and course"
        className="absolute inset-0"
      >
        {slides.map((slide, i) => {
          const active = i === index;
          // Under reduced motion the slideshow never advances, so only the first slide is needed.
          if (i > 0 && (!restMounted || reducedMotion)) return null;
          return (
            <div
              key={slide.src}
              aria-hidden={!active}
              className={`absolute inset-0 transition-opacity duration-[1200ms] ease-out motion-reduce:transition-none ${
                active ? 'opacity-100' : 'opacity-0'
              }`}
            >
              <Image
                src={slide.src}
                alt={slide.alt}
                fill
                sizes="100vw"
                preload={i === 0 ? true : undefined}
                loading={i === 0 ? undefined : 'lazy'}
                className={`object-cover motion-safe:sm:transition-transform motion-safe:sm:duration-[6500ms] motion-safe:sm:ease-linear ${
                  active ? 'motion-safe:sm:scale-[1.04]' : 'motion-safe:sm:scale-100'
                }`}
              />
            </div>
          );
        })}
        <div className="absolute inset-0 bg-navy-950/45" />
        <div className="absolute inset-0 bg-gradient-to-b from-navy-950/20 via-transparent to-navy-950/50" />
      </div>

      {/* Required by WCAG 2.2.2 (pause moving content). Not dead code.
          The button is visually hidden until it receives keyboard focus, so
          sighted mouse users see no slideshow controls. Under reduced motion
          the slideshow does not autoplay, so there is nothing to pause. */}
      {reducedMotion ? null : (
        <button
          type="button"
          onClick={() => setPaused((p) => !p)}
          aria-pressed={paused}
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-20 focus:inline-flex focus:h-11 focus:items-center focus:bg-sand-50 focus:px-3 focus:text-sm focus:text-navy-950 focus:outline-2 focus:outline-offset-2 focus:outline-gold-300"
        >
          Pause slideshow
        </button>
      )}

      {/* Content */}
      <motion.div
        initial={reducedMotion ? false : { opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="relative z-10 mx-auto w-full max-w-3xl px-6 py-16 text-center sm:py-20 lg:py-24"
      >
        <h1 className="font-display text-4xl font-semibold leading-[1.1] tracking-tight text-sand-50 [text-wrap:balance] pb-1 sm:text-6xl lg:text-6xl xl:text-7xl">
          Where nature meets the <em className="italic text-gold-300">fairway</em>
        </h1>
        <div aria-hidden="true" className="mx-auto mt-6 h-px w-12 bg-gold-400" />
        <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-sand-50/90">
          Nine holes through native bushland at Sussex Inlet, on the NSW South Coast. Visitors
          always welcome.
        </p>
        <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <a
            href="tel:+61244412259"
            className="inline-flex h-12 w-full cursor-pointer items-center justify-center gap-2 whitespace-nowrap bg-gold-400 px-7 text-sm font-semibold text-navy-950 transition-colors duration-200 hover:bg-gold-300 active:translate-y-px focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold-300 sm:w-auto"
          >
            Book a round
          </a>
          <Link
            href="/map"
            className="inline-flex h-12 w-full cursor-pointer items-center justify-center gap-2 whitespace-nowrap border border-sand-50/70 px-7 text-sm font-semibold text-sand-50 transition-colors duration-200 hover:border-sand-50 hover:bg-sand-50 hover:text-navy-950 active:translate-y-px focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold-300 sm:w-auto"
          >
            3D course map
          </Link>
        </div>
      </motion.div>
    </section>
  );
}
