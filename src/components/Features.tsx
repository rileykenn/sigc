'use client';

import { motion } from 'framer-motion';

const features = [
  { label: 'Course', title: '9 Hole Bushland Course', desc: 'Winding through native Australian bush with wildlife on every fairway.' },
  { label: 'Facilities', title: 'Clubhouse & Pro Shop', desc: 'Fully stocked pro shop, BBQ area, and outdoor seating overlooking the course.' },
  { label: 'Hire', title: 'Equipment Hire', desc: 'Buggies, pull carts, and club sets all available at the pro shop.' },
];

export default function Features() {
  return (
    <section className="py-28 bg-cream">
      <div className="mx-auto max-w-5xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <p className="text-gold-500 uppercase tracking-[0.25em] text-xs font-medium mb-5">The Experience</p>
          <h2 className="font-serif italic text-4xl sm:text-5xl text-green-900">
            What Awaits You
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.6 }}
              className="text-center"
            >
              <p className="text-gold-500 uppercase tracking-[0.2em] text-[10px] font-semibold mb-3">{f.label}</p>
              <h3 className="font-serif text-xl text-green-900 mb-3">{f.title}</h3>
              <p className="text-sm text-gray-400 leading-relaxed max-w-xs mx-auto">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
