'use client';

import { motion } from 'framer-motion';

const steps = [
  {
    number: '01',
    title: 'Add your plant',
    description: 'Create a profile with name, type, date, and photo.',
  },
  {
    number: '02',
    title: 'Scan symptoms',
    description: 'Capture or upload a leaf photo when something looks wrong.',
  },
  {
    number: '03',
    title: 'Get AI diagnosis',
    description: 'Receive disease, confidence, severity, and treatment suggestions.',
  },
  {
    number: '04',
    title: 'Follow the care plan',
    description: 'Turn results into reminders, diary notes, and care actions.',
  },
];

function VerticalMarqueeTrack() {
  // Duplicate steps for seamless looping
  const duplicatedSteps = [...steps, ...steps];

  return (
    <div className="relative overflow-hidden h-full">
      {/* Main animated track */}
      <motion.div
        animate={{
          y: [0, -50],
        }}
        transition={{
          duration: 20,
          ease: 'linear',
          repeat: Infinity,
        }}
        onHoverStart={() => {
          // Pause animation on hover - handled via CSS class
        }}
        className="flex flex-col gap-0 pause-on-hover"
      >
        {duplicatedSteps.map((step, idx) => (
          <div
            key={idx}
            className="flex-shrink-0 h-40 lg:h-48 flex items-center justify-between gap-8 px-6 lg:px-8 py-8 lg:py-10 border-t border-border/30 hover:bg-foreground/5 transition-colors"
          >
            {/* Content */}
            <div className="flex-1 min-w-0">
              <h3 className="font-heading text-4xl lg:text-5xl font-bold text-foreground mb-2 leading-tight">
                {step.title}
              </h3>
              <p className="text-sm lg:text-base text-foreground/60 leading-relaxed">
                {step.description}
              </p>
            </div>

            {/* Step number on the right */}
            <div className="flex-shrink-0 text-5xl lg:text-6xl font-bold text-foreground/15">
              {step.number}
            </div>
          </div>
        ))}
      </motion.div>

      {/* Gradient overlays for fade effect */}
      <div className="absolute top-0 left-0 right-0 h-12 lg:h-16 bg-gradient-to-b from-background to-transparent pointer-events-none z-10" />
      <div className="absolute bottom-0 left-0 right-0 h-12 lg:h-16 bg-gradient-to-t from-background to-transparent pointer-events-none z-10" />
    </div>
  );
}

export function HowItWorks() {
  return (
    <section className="bg-background px-4 py-12 sm:px-6 lg:px-8 lg:py-24">
      <div className="mx-auto max-w-7xl">
        {/* Desktop: Two-column layout */}
        <div className="hidden lg:grid lg:grid-cols-2 lg:gap-16 lg:min-h-[700px] items-start">
          {/* Left column - static */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, margin: '-100px' }}
            className="flex flex-col justify-start pt-8"
          >
            <p className="text-sm tracking-widest text-foreground/50 font-semibold mb-4">PROCESS</p>
            <h2 className="font-heading text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
              How it works
            </h2>
            <p className="text-lg text-foreground/70 mb-6">
              From photo to care plan in four simple steps.
            </p>
            <p className="text-foreground/60 leading-relaxed mb-10 max-w-md">
              A calm, guided workflow for plant lovers and nursery owners.
            </p>
            
            {/* CTA Button */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              className="w-fit px-8 py-3 rounded-lg bg-secondary text-background font-semibold hover:bg-secondary/90 transition-colors"
            >
              Get started
            </motion.button>
          </motion.div>

          {/* Right column - auto-looping vertical marquee */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, margin: '-100px' }}
            className="h-[700px] rounded-xl overflow-hidden bg-gradient-to-b from-card/50 to-background border border-border/30"
          >
            <VerticalMarqueeTrack />
          </motion.div>
        </div>

        {/* Mobile: Stacked layout */}
        <div className="lg:hidden">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, margin: '-50px' }}
            className="mb-12"
          >
            <p className="text-sm tracking-widest text-foreground/50 font-semibold mb-4">PROCESS</p>
            <h2 className="font-heading text-4xl font-bold text-foreground mb-4 leading-tight">
              How it works
            </h2>
            <p className="text-base text-foreground/70 mb-4">
              From photo to care plan in four simple steps.
            </p>
            <p className="text-foreground/60 leading-relaxed mb-6">
              A calm, guided workflow for plant lovers and nursery owners.
            </p>
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              className="w-full px-6 py-3 rounded-lg bg-secondary text-background font-semibold hover:bg-secondary/90 transition-colors"
            >
              Get started
            </motion.button>
          </motion.div>

          {/* Mobile marquee */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, margin: '-50px' }}
            className="h-96 rounded-lg overflow-hidden bg-gradient-to-b from-card/50 to-background border border-border/30"
          >
            <motion.div
              animate={{
                y: [0, -50],
              }}
              transition={{
                duration: 20,
                ease: 'linear',
                repeat: Infinity,
              }}
              className="flex flex-col gap-0 pause-on-hover"
            >
              {[...steps, ...steps].map((step, idx) => (
                <div
                  key={idx}
                  className="flex-shrink-0 h-28 flex items-center justify-between gap-4 px-4 py-6 border-t border-border/30 hover:bg-foreground/5 transition-colors"
                >
                  <div className="flex-1 min-w-0">
                    <h3 className="font-heading text-2xl font-bold text-foreground mb-1">
                      {step.title}
                    </h3>
                    <p className="text-xs text-foreground/60 line-clamp-2">
                      {step.description}
                    </p>
                  </div>
                  <div className="flex-shrink-0 text-3xl font-bold text-foreground/15">
                    {step.number}
                  </div>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
