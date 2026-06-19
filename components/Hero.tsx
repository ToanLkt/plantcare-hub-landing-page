'use client';

import { motion } from 'framer-motion';
import { OrbitalGallery } from './OrbitalGallery';

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-background py-20 sm:py-32 lg:py-40">
      <div className="absolute inset-0 opacity-30">
        <div className="absolute -left-40 -top-40 h-80 w-80 rounded-full bg-gradient-to-r from-primary/30 to-transparent blur-3xl" />
        <div className="absolute -right-40 -bottom-40 h-80 w-80 rounded-full bg-gradient-to-l from-secondary/30 to-transparent blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-8 lg:items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="font-heading text-5xl font-bold tracking-tight text-foreground sm:text-6xl lg:text-7xl text-balance">
              Your plants deserve{' '}
              <span className="bg-gradient-to-r from-secondary to-accent bg-clip-text text-transparent">
                intelligent care
              </span>
            </h1>
            <p className="mt-6 text-lg text-muted-foreground text-balance">
              PlantCare uses advanced AI to monitor your plants' health in real-time, providing personalized watering schedules,
              nutrient recommendations, and growth insights.
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <button className="inline-flex items-center justify-center rounded-lg bg-secondary px-8 py-3 font-semibold text-foreground transition hover:bg-accent hover:text-accent-foreground">
                Start Free Trial
              </button>
              <button className="inline-flex items-center justify-center rounded-lg border border-border px-8 py-3 font-semibold text-foreground transition hover:bg-muted">
                Watch Demo
              </button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative aspect-square"
          >
            <OrbitalGallery />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
