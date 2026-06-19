'use client';

import { motion } from 'framer-motion';

export function Navigation() {
  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="sticky top-0 z-50 border-b border-border/60 bg-white/80 backdrop-blur-md"
    >
      <div className="mx-auto max-w-6xl px-6 sm:px-8 lg:px-12">
        <div className="flex items-center justify-between h-16">
          {/* Logo - minimal, elegant */}
          <div className="flex items-center gap-3">
            <div className="w-7 h-7 rounded-full bg-gradient-to-br from-sky-400 to-green-400" />
            <span className="font-heading text-lg font-500 text-foreground">PlantCare</span>
          </div>

          {/* Center Navigation - hidden on mobile, inspired by Fourmula 12px weight 400 */}
          <div className="hidden gap-12 md:flex">
            <a href="#features" className="text-xs font-400 text-foreground/60 transition hover:text-foreground">
              AI Diagnosis
            </a>
            <a href="#calendar" className="text-xs font-400 text-foreground/60 transition hover:text-foreground">
              Care Calendar
            </a>
            <a href="#pricing" className="text-xs font-400 text-foreground/60 transition hover:text-foreground">
              Pricing
            </a>
            <a href="#faq" className="text-xs font-400 text-foreground/60 transition hover:text-foreground">
              FAQ
            </a>
          </div>

          {/* Right CTAs */}
          <div className="flex items-center gap-3 sm:gap-4">
            {/* Secondary button - light gray background */}
            <button className="hidden sm:inline-flex text-xs font-500 text-foreground bg-muted rounded-full px-5 py-2 transition hover:bg-border">
              Sign in
            </button>

            {/* Primary button - deep black, pill-shaped */}
            <button className="inline-flex text-xs font-500 text-white bg-primary rounded-full px-5 py-2 transition hover:opacity-90 active:opacity-80">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </motion.nav>
  );
}
