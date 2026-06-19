'use client';

import { motion } from 'framer-motion';

const features = [
  'Real-time Monitoring',
  'AI Insights',
  'Smart Watering',
  'Nutrient Tracking',
  'Growth Analytics',
  'Mobile Alerts',
  'Plant Database',
  'Community Tips',
];

export function Marquee() {
  return (
    <section className="border-y border-border bg-muted py-8">
      <div className="overflow-hidden">
        <motion.div
          animate={{ x: [0, -2000] }}
          transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
          className="flex gap-8 whitespace-nowrap"
        >
          {[...features, ...features].map((feature, idx) => (
            <div key={idx} className="flex items-center gap-8">
              <span className="text-xl font-semibold text-foreground">{feature}</span>
              <div className="h-1 w-1 rounded-full bg-secondary" />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
