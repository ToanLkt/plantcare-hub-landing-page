'use client';

import { motion } from 'framer-motion';

const features = [
  {
    number: '01',
    title: 'AI Diagnosis',
    description: 'Upload a photo. Get instant disease detection with confidence scores and treatment recommendations.',
    icon: '🔍',
    color: 'from-sky-300 to-blue-200',
  },
  {
    number: '02',
    title: 'Smart Calendar',
    description: 'Automated care schedules with reminders for watering, fertilizing, and pruning adapted to your conditions.',
    icon: '📅',
    color: 'from-green-300 to-emerald-200',
  },
  {
    number: '03',
    title: 'Growth Diary',
    description: 'Track plant progress over time with photo comparisons, notes, and growth milestones in one place.',
    icon: '📈',
    color: 'from-teal-300 to-cyan-200',
  },
];

export function FeatureGrid() {
  return (
    <section id="features" className="w-full overflow-hidden bg-white px-6 py-24 md:px-10 sm:py-32 lg:px-14 lg:py-40 xl:px-16">
      <div className="mx-auto w-full max-w-screen-2xl">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8 }}
          className="mb-20 max-w-3xl space-y-6"
        >
          <p className="text-xs font-600 text-primary uppercase tracking-widest">Powerful Features</p>
          <h2 className="font-heading text-5xl sm:text-6xl font-400 leading-tight text-foreground">
            Everything your plants need
          </h2>
          <p className="text-base text-foreground/70">
            From diagnosis to daily care, PlantCare handles every aspect of plant wellness with AI precision.
          </p>
        </motion.div>

        {/* Feature cards grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 lg:gap-10">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="group relative rounded-2xl border border-border bg-linear-to-br from-white to-slate-50 p-8 transition-all duration-300 hover:border-accent/50 hover:shadow-md lg:p-10"
            >
              {/* Icon and number */}
              <div className="flex items-start justify-between mb-6">
                <div className={`flex h-14 w-14 items-center justify-center rounded-xl bg-linear-to-br ${feature.color} text-2xl shadow-sm`}>
                  {feature.icon}
                </div>
                <span className="text-4xl font-heading font-400 text-foreground/10">{feature.number}</span>
              </div>

              {/* Title and description */}
              <div className="space-y-3">
                <h3 className="font-heading text-xl font-500 text-foreground">
                  {feature.title}
                </h3>
                <p className="text-sm text-foreground/70 leading-relaxed">
                  {feature.description}
                </p>
              </div>

              {/* Subtle bottom accent */}
              <div className={`absolute bottom-0 left-0 right-0 h-1 rounded-b-2xl bg-linear-to-r ${feature.color} opacity-0 transition-opacity duration-300 group-hover:opacity-100`} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
