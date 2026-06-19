'use client';

import { motion } from 'framer-motion';
import { useEffect, useState, useRef } from 'react';
import { useInView } from 'react-intersection-observer';

const steps = [
  {
    number: '01',
    title: 'Add your plant',
    description: 'Create a plant profile with name, type, planting date, and a photo.',
    bullets: ['Fast setup', 'Photo upload'],
    rotation: -3,
  },
  {
    number: '02',
    title: 'Scan symptoms',
    description: 'Upload or capture a leaf photo when your plant shows unusual signs.',
    bullets: ['Camera or gallery', 'Choose the related plant'],
    rotation: 2,
  },
  {
    number: '03',
    title: 'Get AI diagnosis',
    description: 'PlantCare Hub analyzes the image and returns possible disease, confidence, severity, and treatment suggestions.',
    bullets: ['Clear diagnosis', 'Smart recommendations'],
    rotation: -2,
  },
  {
    number: '04',
    title: 'Follow the care plan',
    description: 'Save the result and turn suggestions into reminders, diary updates, and care actions.',
    bullets: ['Reminders', 'Track progress'],
    rotation: 3,
  },
];

function StepCard({ step, isActive }: { step: typeof steps[0]; isActive: boolean }) {
  return (
    <motion.div
      animate={{
        opacity: isActive ? 1 : 0.35,
        scale: isActive ? 1 : 0.92,
        y: isActive ? 0 : 40,
        zIndex: isActive ? 10 : 5,
      }}
      transition={{ duration: 0.5, ease: 'easeInOut' }}
      style={{ rotate: step.rotation }}
      className="absolute inset-0 rounded-2xl overflow-hidden"
    >
      <div className="min-h-[500px] lg:min-h-[600px] bg-gradient-to-br from-[#1A3530] via-[#0F1E19] to-[#06120C] p-8 lg:p-12 flex flex-col justify-between border border-border">
        {/* Top section */}
        <div>
          <p className="text-6xl lg:text-7xl font-bold text-foreground/20 mb-8">{step.number}</p>
          <h3 className="font-heading text-4xl lg:text-5xl font-bold text-foreground mb-4 leading-tight">
            {step.title}
          </h3>
          <div className="h-px bg-foreground/20 mb-6 max-w-20" />
        </div>

        {/* Bullets */}
        <div className="flex flex-col gap-4 mb-8">
          {step.bullets.map((bullet, idx) => (
            <div key={idx} className="flex items-center gap-3">
              <div className="w-1.5 h-1.5 bg-secondary rounded-full" />
              <p className="text-foreground/80">{bullet}</p>
            </div>
          ))}
        </div>

        {/* Description and visual placeholder */}
        <div className="flex flex-col lg:flex-row items-start lg:items-end justify-between gap-6">
          <p className="text-lg text-foreground/90 leading-relaxed max-w-xs flex-1">{step.description}</p>
          <div className="hidden lg:block w-24 h-24 rounded-lg bg-gradient-to-br from-secondary/10 to-secondary/5 border border-secondary/10" />
        </div>
      </div>
    </motion.div>
  );
}

export function HowItWorks() {
  const [mounted, setMounted] = useState(false);
  const [activeStep, setActiveStep] = useState(0);
  const { ref: sectionRef, inView: sectionInView } = useInView({
    threshold: 0.3,
    triggerOnce: false,
  });
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!containerRef.current) return;

    const container = containerRef.current;
    const handleScroll = () => {
      if (!sectionInView) return;

      const rect = container.getBoundingClientRect();
      const scrollProgress = Math.max(0, Math.min(1, (window.innerHeight - rect.top) / window.innerHeight));
      const stepIndex = Math.floor(scrollProgress * steps.length);
      setActiveStep(Math.min(stepIndex, steps.length - 1));
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [sectionInView]);

  if (!mounted) return null;

  return (
    <section
      ref={sectionRef}
      className="bg-background px-4 py-24 sm:px-6 lg:px-8 lg:py-32"
      style={{ minHeight: 'fit-content' }}
    >
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start min-h-screen lg:min-h-[120vh]">
          {/* Left column - sticky */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={sectionInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.6 }}
            className="lg:sticky lg:top-32 lg:h-fit"
          >
            <p className="text-sm tracking-widest text-foreground/60 font-semibold mb-4">PROCESS</p>
            <h2 className="font-heading text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
              How it works
            </h2>
            <p className="text-xl text-foreground/70 mb-8 max-w-md">
              From photo to care plan in four simple steps.
            </p>
            <p className="text-foreground/60 max-w-md leading-relaxed">
              A calm, guided workflow for plant lovers and nursery owners.
            </p>

            {/* Step indicators - optional visual aid */}
            <div className="mt-12 flex flex-col gap-3 hidden lg:flex">
              {steps.map((_, idx) => (
                <motion.div
                  key={idx}
                  animate={{
                    opacity: activeStep === idx ? 1 : 0.3,
                    x: activeStep === idx ? 8 : 0,
                  }}
                  className="h-1 bg-secondary rounded-full"
                  style={{ width: activeStep === idx ? '40px' : '24px' }}
                />
              ))}
            </div>
          </motion.div>

          {/* Right column - animated rotating cards */}
          <motion.div
            ref={containerRef}
            className="relative h-[500px] lg:h-[600px]"
          >
            {steps.map((step, idx) => (
              <StepCard key={idx} step={step} isActive={activeStep === idx} />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
