'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

const navItems = [
  { label: 'Vấn đề', href: '#problems' },
  { label: 'Tính năng', href: '#features' },
  { label: 'Về dự án', href: '#about' },
  { label: 'Mẹo chăm cây', href: '#tips' },
  { label: 'Hỗ trợ', href: '#support' },
];

export function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const updateNavSurface = () => {
      setScrolled((previous) => {
        const next = window.scrollY > 12;
        return previous === next ? previous : next;
      });
    };

    const updateProgress = () => {
      if (typeof window === 'undefined') return;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const value = docHeight > 0 ? (window.scrollY / docHeight) * 100 : 0;
      setProgress(Math.min(100, Math.max(0, value)));
    };

    updateNavSurface();
    updateProgress();
    window.addEventListener('scroll', () => {
      updateNavSurface();
      updateProgress();
    }, { passive: true });

    return () => window.removeEventListener('scroll', () => {});
  }, []);

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed left-0 right-0 top-0 z-50 border-b transition-[background-color,border-color,box-shadow,backdrop-filter] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
        scrolled
          ? 'border-emerald-950/8 bg-[#f8fbf7]/42 shadow-[0_12px_40px_rgba(20,83,45,0.06)] backdrop-blur-xl'
          : 'border-white/15 bg-white/10 shadow-none backdrop-blur-md'
      }`}
    >
      <div className="relative mx-auto w-full max-w-screen-2xl px-6 md:px-10 lg:px-14 xl:px-16">
        <div className="flex h-16 items-center justify-between">
          <a href="#" className="flex items-center gap-3 group">
            <div className="h-7 w-7 rounded-full bg-linear-to-br from-sky-400 to-green-400 shadow-[0_10px_24px_rgba(20,184,166,0.18)] transition-transform duration-300 group-hover:scale-110" />
            <span className="font-heading text-lg font-bold text-foreground">PlantCare Hub</span>
          </a>

          <div className="hidden gap-8 lg:flex xl:gap-10">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-xs font-medium text-foreground/58 transition duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-px hover:text-foreground"
              >
                {item.label}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-3 sm:gap-4">
            <button className="hidden rounded-full border border-emerald-900/8 bg-white/30 px-5 py-2 text-xs font-semibold text-foreground shadow-[inset_0_1px_0_rgba(255,255,255,0.42)] backdrop-blur-lg transition duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-0.5 hover:bg-white/45 active:translate-y-0 active:scale-[0.98] sm:inline-flex">
              Xem demo
            </button>

            <button className="inline-flex rounded-full bg-primary px-5 py-2 text-xs font-bold text-white shadow-[0_14px_36px_rgba(20,83,45,0.16)] transition duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-0.5 hover:bg-primary/90 active:translate-y-0 active:scale-[0.98]">
              Tải ứng dụng
            </button>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-emerald-900/5">
          <motion.div
            className="h-full bg-linear-to-r from-emerald-600 via-green-500 to-emerald-600"
            style={{ scaleX: progress / 100 }}
            transition={{ type: 'tween', ease: 'easeOut', duration: 0.1 }}
          />
        </div>
      </div>
    </motion.nav>
  );
}
