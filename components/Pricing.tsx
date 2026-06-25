'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const pricingPlans = [
  {
    name: 'Starter',
    price: 'Free',
    description: 'Perfect for testing',
    features: ['Up to 3 plants', 'Basic monitoring', 'Mobile app', 'Email support'],
    cta: 'Get Started',
    highlighted: false,
  },
  {
    name: 'Pro',
    price: '$9.99',
    period: '/month',
    description: 'Most popular',
    features: ['Unlimited plants', 'Advanced AI insights', 'Priority support', 'Custom schedules', 'Growth analytics', 'Community access'],
    cta: 'Start Free Trial',
    highlighted: true,
  },
  {
    name: 'Pro+',
    price: '$19.99',
    period: '/month',
    description: 'For serious gardeners',
    features: ['Everything in Pro', 'Automated watering', 'Professional analytics', 'Integration APIs', 'White-label options', '24/7 phone support'],
    cta: 'Contact Sales',
    highlighted: false,
  },
];

export function Pricing() {
  return (
    <section className="relative w-full overflow-hidden bg-background px-6 py-20 md:px-10 md:py-28 lg:px-14 xl:px-16">
      <div className="mx-auto w-full max-w-[1400px]">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2 className="font-heading text-4xl font-bold text-foreground">Flexible Pricing</h2>
          <p className="mt-4 text-lg text-muted-foreground">Choose the plan that grows with your garden</p>
        </motion.div>

        <div className="mt-16 grid gap-8 lg:grid-cols-3 lg:gap-10">
          {pricingPlans.map((plan, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className={`rounded-3xl border transition ${
                plan.highlighted ? 'border-secondary bg-muted/50 scale-105 shadow-lg' : 'border-border bg-muted'
              }`}
            >
              <div className="p-8 lg:p-10">
                {plan.highlighted && <div className="mb-4 inline-block rounded-full bg-secondary/20 px-3 py-1 text-xs font-semibold text-secondary">RECOMMENDED</div>}
                <h3 className="font-heading text-2xl font-bold text-foreground">{plan.name}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{plan.description}</p>

                <div className="mt-6">
                  <span className="text-4xl font-bold text-secondary">{plan.price}</span>
                  {plan.period && <span className="text-muted-foreground">{plan.period}</span>}
                </div>

                <button
                  className={`mt-8 w-full rounded-lg px-6 py-3 font-semibold transition ${
                    plan.highlighted
                      ? 'bg-secondary text-foreground hover:bg-accent hover:text-accent-foreground'
                      : 'border border-border text-foreground hover:bg-muted/75'
                  }`}
                >
                  {plan.cta}
                </button>

                <div className="mt-8 space-y-4">
                  {plan.features.map((feature, fidx) => (
                    <motion.div
                      key={fidx}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: fidx * 0.05 }}
                      className="flex items-center gap-3"
                    >
                      <div className="h-2 w-2 rounded-full bg-secondary" />
                      <span className="text-sm text-foreground">{feature}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
