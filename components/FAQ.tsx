'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import Image from 'next/image';

const faqs = [
  {
    question: 'How accurate is the AI monitoring?',
    answer: 'Our sensors are 99.2% accurate in detecting plant health metrics. Combined with machine learning trained on millions of data points, our recommendations are highly personalized.',
  },
  {
    question: 'Can I use PlantCare for outdoor plants?',
    answer: 'Yes! Our waterproof sensors work in both indoor and outdoor environments. You can monitor your garden from anywhere.',
  },
  {
    question: 'What if I travel for extended periods?',
    answer: 'PlantCare can be connected to automated watering systems for complete hands-free plant care. You&apos;ll receive daily updates on your phone.',
  },
  {
    question: 'Is there a mobile app?',
    answer: 'Yes! Our mobile app is available for iOS and Android, giving you full control and monitoring capabilities on the go.',
  },
  {
    question: 'How long do the sensors last?',
    answer: 'Our sensors have a 2-year battery life under normal use. Battery replacement is simple and doesn&apos;t require any technical knowledge.',
  },
  {
    question: 'Can I cancel anytime?',
    answer: 'Absolutely! There&apos;s no commitment required. You can cancel your Pro subscription at any time, no questions asked.',
  },
];

export function FAQ() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section id="faq" className="relative w-full overflow-hidden bg-background px-6 py-20 md:px-10 md:py-28 lg:px-14 xl:px-16">
      <div className="mx-auto w-full max-w-screen-2xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-3xl text-center"
        >
          <h2 className="font-heading text-4xl font-bold text-foreground">Frequently Asked Questions</h2>
          <p className="mt-4 text-lg text-muted-foreground">Everything you need to know about PlantCare</p>
        </motion.div>

        <div className="mx-auto mt-12 max-w-4xl space-y-4">
          {faqs.map((faq, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
              className="rounded-xl border border-border bg-muted overflow-hidden"
            >
              <button
                onClick={() => setOpen(open === idx ? null : idx)}
                className="w-full px-6 py-4 text-left transition hover:bg-muted/75"
              >
                <div className="flex items-center justify-between">
                  <h3 className="font-heading font-semibold text-foreground">{faq.question}</h3>
                  <motion.div
                    animate={{ rotate: open === idx ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="text-secondary"
                  >
                    ↓
                  </motion.div>
                </div>
              </button>
              <motion.div
                initial={false}
                animate={{ height: open === idx ? 'auto' : 0 }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <p className="px-6 pb-4 text-muted-foreground">{faq.answer}</p>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
