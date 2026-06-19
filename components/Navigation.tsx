'use client';

import { motion } from 'framer-motion';

export function Navigation() {
  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur-sm"
    >
      <div className="mx-auto max-w-7xl px-4 py-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-full bg-gradient-to-br from-accent to-secondary" />
            <span className="font-heading text-xl font-semibold text-foreground">PlantCare</span>
          </div>
          <div className="hidden gap-8 md:flex">
            <a href="#features" className="text-sm text-muted-foreground transition hover:text-foreground">
              Features
            </a>
            <a href="#pricing" className="text-sm text-muted-foreground transition hover:text-foreground">
              Pricing
            </a>
            <a href="#faq" className="text-sm text-muted-foreground transition hover:text-foreground">
              FAQ
            </a>
          </div>
          <button className="rounded-lg bg-secondary px-6 py-2 text-sm font-semibold text-foreground transition hover:bg-accent hover:text-accent-foreground">
            Get Started
          </button>
        </div>
      </div>
    </motion.nav>
  );
}
