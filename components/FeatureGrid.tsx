'use client';

import { motion } from 'framer-motion';

const features = [
  {
    title: 'AI-Powered Insights',
    description: 'Machine learning algorithms analyze your plant data to predict issues before they happen.',
    icon: '🧠',
  },
  {
    title: 'Smart Watering',
    description: 'Automatic watering schedules based on soil moisture, weather, and plant type.',
    icon: '💧',
  },
  {
    title: 'Nutrient Management',
    description: 'Track and optimize soil nutrition with personalized fertilization recommendations.',
    icon: '🌱',
  },
  {
    title: 'Growth Tracking',
    description: 'Monitor plant growth over time with visual analytics and detailed progress reports.',
    icon: '📈',
  },
  {
    title: 'Mobile Control',
    description: 'Manage all your plants from your smartphone with our intuitive mobile app.',
    icon: '📱',
  },
  {
    title: 'Community Learning',
    description: 'Share experiences and learn from thousands of plant enthusiasts worldwide.',
    icon: '🌍',
  },
];

export function FeatureGrid() {
  return (
    <section id="features" className="bg-background px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2 className="font-heading text-4xl font-bold text-foreground">Powerful Features</h2>
          <p className="mt-4 text-lg text-muted-foreground">Everything you need to grow thriving plants</p>
        </motion.div>

        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.05 }}
              whileHover={{ y: -4 }}
              className="group rounded-xl border border-border bg-muted p-6 transition hover:border-secondary hover:bg-muted/50"
            >
              <div className="mb-4 text-4xl">{feature.icon}</div>
              <h3 className="font-heading mb-2 text-xl font-semibold text-foreground">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
