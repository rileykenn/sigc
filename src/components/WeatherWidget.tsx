'use client';

import { motion } from 'framer-motion';
import { Cloud, Sun, Wind, Droplets, Thermometer } from 'lucide-react';

// Dummy weather data for Sussex Inlet
// TODO: replace with a real weather API (e.g. BOM or Open-Meteo) before launch
const weather = {
  temp: 22,
  condition: 'Partly cloudy',
  wind: '12 km/h SW',
  humidity: 65,
  feelsLike: 20,
};

export default function WeatherWidget() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className="rounded-2xl border border-navy-100 bg-white px-5 py-4 shadow-sm shadow-navy-900/5"
    >
      <div className="flex items-center gap-3 mb-2">
        <div className="relative">
          <Sun size={22} strokeWidth={1.5} className="text-gold-500" />
          <Cloud size={16} strokeWidth={1.5} className="text-navy-300 absolute -bottom-1 -right-1" />
        </div>
        <div>
          <div className="text-2xl font-semibold text-navy-950 tabular-nums">{weather.temp}°C</div>
          <div className="text-[11px] font-medium text-navy-900/60">{weather.condition}</div>
        </div>
      </div>
      <div className="flex items-center gap-3 text-[10px] text-navy-900/60">
        <span className="flex items-center gap-1">
          <Wind size={10} strokeWidth={1.5} /> {weather.wind}
        </span>
        <span className="flex items-center gap-1">
          <Droplets size={10} strokeWidth={1.5} /> {weather.humidity}%
        </span>
        <span className="flex items-center gap-1">
          <Thermometer size={10} strokeWidth={1.5} /> Feels {weather.feelsLike}°
        </span>
      </div>
    </motion.div>
  );
}
