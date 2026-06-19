'use client';

import { motion } from 'framer-motion';

const footerLinks = {
  Product: ['Features', 'Pricing', 'Security', 'Roadmap'],
  Company: ['About', 'Blog', 'Press', 'Careers'],
  Resources: ['Documentation', 'API', 'Community', 'Support'],
  Legal: ['Privacy', 'Terms', 'Cookie Policy', 'Contact'],
};

export function Footer() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-5">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-2 mb-4">
              <div className="h-8 w-8 rounded-full bg-gradient-to-br from-accent to-secondary" />
              <span className="font-heading text-xl font-semibold text-foreground">PlantCare</span>
            </div>
            <p className="text-sm text-muted-foreground max-w-xs">
              Intelligent plant monitoring and care for every gardener. Grow thriving plants with AI-powered guidance.
            </p>
          </motion.div>

          {Object.entries(footerLinks).map((section, idx) => (
            <motion.div
              key={section[0]}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: (idx + 1) * 0.1 }}
            >
              <h4 className="font-heading font-semibold text-foreground mb-4">{section[0]}</h4>
              <ul className="space-y-3">
                {section[1].map((link) => (
                  <li key={link}>
                    <a href="#" className="text-sm text-muted-foreground transition hover:text-foreground">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-12 border-t border-border pt-8"
        >
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-sm text-muted-foreground">&copy; 2024 PlantCare. All rights reserved.</p>
            <div className="flex gap-6">
              <a href="#" className="text-sm text-muted-foreground transition hover:text-foreground">
                Twitter
              </a>
              <a href="#" className="text-sm text-muted-foreground transition hover:text-foreground">
                GitHub
              </a>
              <a href="#" className="text-sm text-muted-foreground transition hover:text-foreground">
                LinkedIn
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
