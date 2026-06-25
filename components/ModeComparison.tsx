'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import Image from 'next/image';

export function ModeComparison() {
  const [mode, setMode] = useState<'basic' | 'pro'>('basic');

  const plans = {
    basic: {
      name: 'Basic',
      price: 'Free',
      features: ['Up to 3 plants', 'Basic monitoring', 'Mobile app access', 'Email support'],
    },
    pro: {
      name: 'Pro',
      price: '$9.99/mo',
      features: ['Unlimited plants', 'Advanced AI insights', 'Priority support', 'Custom schedules', 'Growth analytics'],
    },
  };

  return (
    <section id="pricing" className="relative bg-background px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2 className="font-heading text-4xl font-bold text-foreground">Simple Pricing</h2>
          <p className="mt-4 text-lg text-muted-foreground">Choose the plan that works for you</p>
        </motion.div>

        <div className="mt-12 flex justify-center gap-4">
          {(['basic', 'pro'] as const).map((m) => (
            <button
              key={m}
              onClick={() => setMode(m)}
              className={`rounded-lg px-6 py-2 font-semibold transition ${
                mode === m ? 'bg-secondary text-foreground' : 'bg-muted text-muted-foreground hover:text-foreground'
              }`}
            >
              {m === 'basic' ? 'Basic' : 'Pro'}
            </button>
          ))}
        </div>

        <motion.div
          key={mode}
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3 }}
          className="mt-12 rounded-2xl border border-border bg-muted p-8 sm:p-12"
        >
          <div className="text-center">
            <h3 className="font-heading text-3xl font-bold text-foreground">{plans[mode].name}</h3>
            <p className="mt-2 text-4xl font-bold text-secondary">{plans[mode].price}</p>
          </div>

          <div className="mt-8 space-y-4">
            {plans[mode].features.map((feature, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: idx * 0.1 }}
                className="flex items-center gap-3"
              >
                <div className="h-2 w-2 rounded-full bg-secondary" />
                <span className="text-foreground">{feature}</span>
              </motion.div>
            ))}
          </div>

          <button className="mt-8 w-full rounded-lg bg-secondary px-6 py-3 font-semibold text-foreground transition hover:bg-accent hover:text-accent-foreground">
            {mode === 'basic' ? 'Get Started Free' : 'Start Pro Trial'}
          </button>
        </motion.div>
      </div>
    </section>
  );
}
