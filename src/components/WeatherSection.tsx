'use client';

import { motion } from 'framer-motion';

const forecast = [
  { day: 'Tue', high: 24, low: 14 },
  { day: 'Wed', high: 21, low: 13 },
  { day: 'Thu', high: 19, low: 11 },
  { day: 'Fri', high: 23, low: 14 },
  { day: 'Sat', high: 25, low: 15 },
];

export default function WeatherSection() {
  return (
    <section className="py-16 bg-white border-y border-sand-200">
      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col md:flex-row items-center justify-between gap-8"
        >
          {/* Current */}
          <div className="flex items-center gap-5">
            <div>
              <p className="text-gold-500 uppercase tracking-[0.2em] text-xs font-semibold mb-1">Current Conditions</p>
              <div className="flex items-baseline gap-1">
                <span className="text-5xl font-serif text-green-900">22°</span>
                <span className="text-lg text-gray-400">C</span>
              </div>
              <p className="text-sm text-gray-400 mt-1">Partly Cloudy · Sussex Inlet</p>
            </div>
          </div>

          {/* Details */}
          <div className="flex items-center gap-8 text-sm text-gray-500">
            <div>
              <p className="text-xs text-gray-400 uppercase tracking-wider">Wind</p>
              <p className="text-green-900 font-medium">12 km/h SW</p>
            </div>
            <div className="w-px h-8 bg-sand-200" />
            <div>
              <p className="text-xs text-gray-400 uppercase tracking-wider">Humidity</p>
              <p className="text-green-900 font-medium">65%</p>
            </div>
            <div className="w-px h-8 bg-sand-200" />
            <div>
              <p className="text-xs text-gray-400 uppercase tracking-wider">Feels Like</p>
              <p className="text-green-900 font-medium">20°C</p>
            </div>
          </div>

          {/* Forecast */}
          <div className="flex items-center gap-5">
            {forecast.map((d) => (
              <div key={d.day} className="text-center">
                <p className="text-xs text-gray-400 mb-1">{d.day}</p>
                <p className="text-sm font-medium text-green-900">{d.high}°</p>
                <p className="text-xs text-gray-400">{d.low}°</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
