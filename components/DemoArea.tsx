'use client';

import { motion } from 'framer-motion';

export function DemoArea() {
  return (
    <section className="bg-background px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="rounded-2xl border border-border bg-muted p-8 sm:p-12 lg:p-16"
        >
          <div className="grid gap-8 lg:grid-cols-3">
            {[
              {
                number: '1',
                title: 'Connect Your Sensor',
                description: 'Place our smart sensor in your plant pot. It syncs instantly via WiFi.',
              },
              {
                number: '2',
                title: 'Monitor in Real-time',
                description: 'Get live data on soil moisture, light levels, temperature, and humidity.',
              },
              {
                number: '3',
                title: 'Receive AI Guidance',
                description: 'Get personalized recommendations for optimal plant health.',
              },
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
              >
                <div className="mb-4 text-4xl font-bold text-secondary">{item.number}</div>
                <h3 className="font-heading mb-3 text-xl font-semibold text-foreground">{item.title}</h3>
                <p className="text-muted-foreground">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
