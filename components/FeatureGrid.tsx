'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useEffect, useState } from 'react';

const features = [
  {
    number: '01',
    label: 'AI',
    title: 'AI diagnoses plant problems.',
    bullets: ['Photo-based disease detection', 'Confidence score & severity'],
    description: 'Scan leaves, yellowing, spots, or pests and instantly receive diagnosis results with treatment suggestions.',
    gradient: 'from-[#1a4d3e] to-[#0d261f]',
    rotation: -1,
  },
  {
    number: '02',
    label: 'CAL',
    title: 'Care schedules stay simple.',
    bullets: ['Watering, fertilizing, pruning', 'Smart reminders'],
    description: 'Turn plant care into a clear schedule with reminders, daily tasks, and easy tracking.',
    gradient: 'from-[#2D5A4F] to-[#1a4d3e]',
    rotation: 1,
  },
  {
    number: '03',
    label: 'DIA',
    title: 'Track progress over time.',
    bullets: ['Growth diary', 'Milestones & notes'],
    description: 'Save plant photos, notes, and growth updates to understand how every plant changes over time.',
    gradient: 'from-[#4A8B78] to-[#2D5A4F]',
    rotation: -0.5,
  },
  {
    number: '04',
    label: 'GRD',
    title: 'Garden Mode scales with you.',
    bullets: ['Batch & task management', 'Inventory support'],
    description: 'For nursery owners, manage plant batches, work tasks, and supplies in one organized workflow.',
    gradient: 'from-[#6BA899] to-[#4A8B78]',
    rotation: 0.75,
  },
];

function FeatureCard({ feature, index }: { feature: typeof features[0]; index: number }) {
  const { ref, inView } = useInView({
    threshold: 0.3,
    triggerOnce: false,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 100 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 100 }}
      transition={{ duration: 0.8, delay: 0.1 }}
      style={{ rotate: feature.rotation }}
      className="relative flex-shrink-0 rounded-3xl overflow-hidden"
    >
      <div className={`min-h-[85vh] bg-gradient-to-br ${feature.gradient} p-12 lg:p-16 flex flex-col justify-between`}>
        {/* Top section */}
        <div>
          <div className="flex items-start justify-between mb-16">
            <span className="text-sm tracking-widest text-foreground/70 font-semibold">({feature.label})</span>
            <span className="text-7xl lg:text-8xl font-bold text-foreground/30">{feature.number}</span>
          </div>

          {/* Title and divider */}
          <h3 className="font-heading text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-8">
            {feature.title}
          </h3>

          {/* Thin divider */}
          <div className="h-px bg-foreground/20 mb-8 max-w-md" />

          {/* Feature bullets in horizontal row */}
          <div className="flex flex-col sm:flex-row gap-6 sm:gap-12 mb-12">
            {feature.bullets.map((bullet, idx) => (
              <div key={idx} className="flex items-start gap-3">
                <div className="w-1 h-1 bg-foreground rounded-full mt-2 flex-shrink-0" />
                <p className="text-foreground/80 font-medium">{bullet}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom section with description and visual placeholder */}
        <div className="flex flex-col lg:flex-row items-start lg:items-end justify-between gap-8">
          <div className="flex-1">
            <p className="text-lg text-foreground/90 leading-relaxed max-w-lg">{feature.description}</p>
          </div>

          {/* Visual placeholder - abstract gradient circle */}
          <div className="hidden lg:block flex-shrink-0">
            <div className="w-48 h-48 rounded-full bg-gradient-to-br from-foreground/10 to-foreground/5 border border-foreground/10" />
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export function FeatureGrid() {
  const [mounted, setMounted] = useState(false);
  const { ref: sectionRef, inView: sectionInView } = useInView({
    threshold: 0.1,
    triggerOnce: false,
  });

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <section id="features" className="bg-background px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        {/* Section header */}
        <motion.div
          ref={sectionRef}
          initial={{ opacity: 0, y: 20 }}
          animate={sectionInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-32"
        >
          <h2 className="font-heading text-5xl lg:text-6xl font-bold text-foreground mb-4">Powerful Features</h2>
          <p className="text-xl text-foreground/70">Everything you need to care for plants smarter</p>
        </motion.div>

        {/* Feature cards - vertical scroll sequence */}
        <div className="space-y-20 lg:space-y-32">
          {features.map((feature, idx) => (
            <FeatureCard key={idx} feature={feature} index={idx} />
          ))}
        </div>
      </div>
    </section>
  );
}
