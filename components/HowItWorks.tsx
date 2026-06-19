'use client';

import { motion } from 'framer-motion';

const steps = [
  {
    title: 'Install Sensor',
    description: 'Place our compact sensor in your plant pot. Setup takes just 2 minutes.',
  },
  {
    title: 'Connect App',
    description: 'Download our app and connect your sensor via WiFi. Instant synchronization.',
  },
  {
    title: 'Get Insights',
    description: 'Our AI analyzes your plant data and sends personalized care recommendations.',
  },
  {
    title: 'Watch Growth',
    description: 'Monitor your plant thrive with real-time updates and detailed analytics.',
  },
];

export function HowItWorks() {
  return (
    <section className="bg-background px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2 className="font-heading text-4xl font-bold text-foreground">How It Works</h2>
          <p className="mt-4 text-lg text-muted-foreground">Four simple steps to plant perfection</p>
        </motion.div>

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:gap-12">
          {steps.map((step, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="relative"
            >
              {idx !== steps.length - 1 && (
                <div className="absolute -right-6 top-12 hidden h-0.5 w-12 bg-gradient-to-r from-secondary to-transparent lg:block" />
              )}
              <div className="relative z-10 rounded-xl border border-border bg-muted p-6">
                <div className="mb-4 flex items-center gap-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-secondary text-foreground font-semibold">
                    {idx + 1}
                  </div>
                  <h3 className="font-heading text-xl font-semibold text-foreground">{step.title}</h3>
                </div>
                <p className="text-muted-foreground">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
