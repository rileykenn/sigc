'use client';

import { motion } from 'framer-motion';
import { Cloud, Sun, Wind, Droplets, Thermometer } from 'lucide-react';

// Dummy weather data for Sussex Inlet
const weather = {
  temp: 22,
  condition: 'Partly Cloudy',
  wind: '12 km/h SW',
  humidity: 65,
  feelsLike: 20,
};

export default function WeatherWidget() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 1.5, duration: 0.5, type: 'spring', stiffness: 200 }}
      className="glass-badge rounded-2xl px-5 py-4 shadow-xl"
    >
      <div className="flex items-center gap-3 mb-2">
        <div className="relative">
          <Sun size={22} className="text-gold-500" />
          <Cloud size={16} className="text-gray-400 absolute -bottom-1 -right-1" />
        </div>
        <div>
          <div className="text-2xl font-bold text-fairway-900">{weather.temp}°C</div>
          <div className="text-[11px] font-medium text-gray-400">{weather.condition}</div>
        </div>
      </div>
      <div className="flex items-center gap-3 text-[10px] text-gray-400">
        <span className="flex items-center gap-1">
          <Wind size={10} /> {weather.wind}
        </span>
        <span className="flex items-center gap-1">
          <Droplets size={10} /> {weather.humidity}%
        </span>
        <span className="flex items-center gap-1">
          <Thermometer size={10} /> Feels {weather.feelsLike}°
        </span>
      </div>
    </motion.div>
  );
}
