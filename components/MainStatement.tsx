'use client';

import { motion } from 'framer-motion';

export function MainStatement() {
  return (
    <section className="bg-background px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h2 className="font-heading text-5xl font-bold tracking-tight text-foreground sm:text-6xl text-balance">
            Transform your home garden into a{' '}
            <span className="bg-gradient-to-r from-secondary to-accent bg-clip-text text-transparent">thriving ecosystem</span>
          </h2>
          <p className="mt-8 text-xl text-muted-foreground text-balance">
            With PlantCare&apos;s advanced AI and real-time monitoring, you&apos;ll never kill a plant again. Every plant gets the exact care
            it needs, exactly when it needs it.
          </p>
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-12 rounded-xl border border-border bg-muted p-6 sm:p-8"
          >
            <div className="grid gap-4 sm:grid-cols-3">
              <div>
                <div className="text-3xl font-bold text-secondary">98%</div>
                <p className="text-sm text-muted-foreground">Plant Survival Rate</p>
              </div>
              <div>
                <div className="text-3xl font-bold text-secondary">50K+</div>
                <p className="text-sm text-muted-foreground">Happy Gardeners</p>
              </div>
              <div>
                <div className="text-3xl font-bold text-secondary">24/7</div>
                <p className="text-sm text-muted-foreground">Expert Support</p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
