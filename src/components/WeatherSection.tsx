'use client';

import { motion } from 'framer-motion';
import { Cloud, Sun, Wind, Droplets, Thermometer, Eye, Compass } from 'lucide-react';

// Dummy weather data for Sussex Inlet
const weather = {
  temp: 22,
  feelsLike: 20,
  condition: 'Partly Cloudy',
  wind: '12 km/h',
  windDir: 'SW',
  humidity: 65,
  visibility: '10 km',
  uvIndex: 4,
};

const forecast = [
  { day: 'Tue', high: 24, low: 14, icon: 'sun' },
  { day: 'Wed', high: 21, low: 13, icon: 'cloud' },
  { day: 'Thu', high: 19, low: 11, icon: 'cloud' },
  { day: 'Fri', high: 23, low: 14, icon: 'sun' },
  { day: 'Sat', high: 25, low: 15, icon: 'sun' },
];

function ForecastIcon({ type, className }: { type: string; className?: string }) {
  if (type === 'sun') return <Sun className={className} />;
  return (
    <div className="relative">
      <Sun className={className} />
      <Cloud className={`${className} absolute -bottom-0.5 -right-0.5 scale-75`} />
    </div>
  );
}

export default function WeatherSection() {
  return (
    <section className="relative py-12 bg-gradient-to-r from-navy-800 via-navy-900 to-navy-800 overflow-hidden">
      {/* Texture */}
      <div className="absolute inset-0 grass-texture opacity-10" />
      <div className="absolute inset-0 bg-gradient-to-r from-navy-900/80 via-transparent to-navy-900/80" />

      <div className="relative mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center"
        >
          {/* Current Weather */}
          <div className="md:col-span-4 flex items-center gap-5">
            <div className="relative">
              <Sun size={48} className="text-gold-400" />
              <Cloud size={32} className="text-navy-300 absolute -bottom-1 -right-2" />
            </div>
            <div>
              <div className="flex items-baseline gap-1">
                <span className="text-5xl font-extrabold text-white tracking-tight">{weather.temp}°</span>
                <span className="text-lg text-navy-300">C</span>
              </div>
              <div className="text-sm text-navy-300 font-medium">{weather.condition}</div>
              <div className="text-xs text-navy-400 mt-0.5">Sussex Inlet, NSW</div>
            </div>
          </div>

          {/* Weather Details */}
          <div className="md:col-span-3 grid grid-cols-2 gap-3">
            {[
              { icon: Thermometer, label: 'Feels Like', value: `${weather.feelsLike}°C` },
              { icon: Wind, label: 'Wind', value: `${weather.wind} ${weather.windDir}` },
              { icon: Droplets, label: 'Humidity', value: `${weather.humidity}%` },
              { icon: Eye, label: 'Visibility', value: weather.visibility },
            ].map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.label} className="flex items-center gap-2">
                  <Icon size={14} className="text-navy-400 shrink-0" />
                  <div>
                    <div className="text-[10px] text-navy-500 uppercase tracking-wider">{item.label}</div>
                    <div className="text-xs font-semibold text-white">{item.value}</div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Divider */}
          <div className="hidden md:block md:col-span-1 flex justify-center">
            <div className="w-px h-16 bg-navy-700 mx-auto" />
          </div>

          {/* 5-Day Forecast */}
          <div className="md:col-span-4">
            <div className="text-[10px] text-navy-500 uppercase tracking-wider font-semibold mb-3">5-Day Forecast</div>
            <div className="flex justify-between gap-2">
              {forecast.map((day) => (
                <div key={day.day} className="flex flex-col items-center gap-1.5">
                  <span className="text-xs font-medium text-navy-300">{day.day}</span>
                  <ForecastIcon type={day.icon} className="text-gold-400 w-5 h-5" />
                  <div className="flex items-center gap-1 text-[11px]">
                    <span className="font-semibold text-white">{day.high}°</span>
                    <span className="text-navy-500">{day.low}°</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Attribution */}
        <div className="mt-4 text-center">
          <span className="text-[10px] text-navy-600">
            Weather data for display purposes · <Compass size={8} className="inline" /> Perfect conditions for golf
          </span>
        </div>
      </div>
    </section>
  );
}
