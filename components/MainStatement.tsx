'use client';

import { motion } from 'framer-motion';

export function MainStatement() {
  return (
    <section className="bg-white px-6 sm:px-8 lg:px-12 py-24 sm:py-32 lg:py-40">
      <div className="mx-auto max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          {/* Main headline - Fourmula H2 style: 100px, 400 weight */}
          <h2 className="font-heading text-5xl sm:text-6xl lg:text-7xl font-400 leading-tight tracking-tight text-foreground">
            On-plant insights. Made by AI.
          </h2>

          {/* Supporting body - calm, spacious layout */}
          <p className="text-base sm:text-lg text-foreground/70 leading-relaxed max-w-2xl">
            Capture a photo of your plant. Our AI analyzes it in seconds. Get a complete diagnosis with treatment recommendations and a personalized care calendar that adapts to your specific conditions.
          </p>

          {/* Stats grid - minimal, elegant layout */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="pt-8"
          >
            <div className="grid gap-8 sm:gap-12 sm:grid-cols-3">
              <div className="space-y-2">
                <div className="text-4xl sm:text-5xl font-heading font-500 text-primary">98%</div>
                <p className="text-sm font-500 text-foreground/60">Plant Survival Rate</p>
              </div>
              <div className="space-y-2">
                <div className="text-4xl sm:text-5xl font-heading font-500 text-primary">50K+</div>
                <p className="text-sm font-500 text-foreground/60">Gardeners Trusted</p>
              </div>
              <div className="space-y-2">
                <div className="text-4xl sm:text-5xl font-heading font-500 text-primary">24/7</div>
                <p className="text-sm font-500 text-foreground/60">AI Monitoring</p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
