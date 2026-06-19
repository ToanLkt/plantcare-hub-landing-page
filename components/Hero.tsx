'use client';

import { motion } from 'framer-motion';
import { OrbitalGallery } from './OrbitalGallery';

export function Hero() {
  return (
    <section className="relative bg-background pt-32 pb-20 sm:pt-40 sm:pb-24 lg:pt-48 lg:pb-32">
      {/* Subtle gradient background inspired by garden atmosphere */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-br from-secondary/10 to-transparent rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-gradient-to-tl from-accent/10 to-transparent rounded-full blur-3xl" />
      </div>

      <div className="mx-auto max-w-6xl px-6 sm:px-8 lg:px-12">
        <div className="grid gap-16 lg:grid-cols-2 lg:gap-20 lg:items-center">
          {/* Left column - text content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-12"
          >
            {/* Main headline - inspired by Fourmula's display H2: 100px, 400 weight */}
            <h1 className="font-heading text-6xl sm:text-7xl lg:text-8xl font-400 leading-tight tracking-tight text-foreground">
              Your plants, instantly understood.
            </h1>

            {/* Subheading - 14px body/label weight for soft intro */}
            <p className="text-sm sm:text-base font-500 text-muted-foreground max-w-md">
              AI-powered diagnosis. Smart care plans. Growth tracking. Everything your plants need to thrive.
            </p>

            {/* CTA Buttons - Fourmula style with pill shape and generous padding */}
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center pt-4">
              {/* Primary CTA - Deep black background, pill-shaped (1317px radius) */}
              <button className="inline-flex items-center justify-center bg-primary text-primary-foreground rounded-full px-8 py-3 font-500 text-sm transition hover:opacity-90 active:opacity-80 min-h-10">
                Start Free Trial
              </button>

              {/* Secondary CTA - Light background with border */}
              <button className="inline-flex items-center justify-center border-2 border-muted bg-transparent text-foreground rounded-full px-8 py-3 font-500 text-sm transition hover:bg-muted active:bg-muted min-h-10">
                Watch Demo
              </button>
            </div>

            {/* Scroll indicator - minimal, elegant */}
            <div className="pt-8">
              <p className="text-xs text-muted-foreground uppercase tracking-widest">Scroll to explore</p>
            </div>
          </motion.div>

          {/* Right column - orbital gallery visual */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative aspect-square lg:aspect-auto lg:h-96 xl:h-full"
          >
            <OrbitalGallery />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
