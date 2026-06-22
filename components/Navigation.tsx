'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

export function Navigation() {
  const [scrolled, setScrolled] = useState(false);

  const navItems = [
    { label: 'Vấn đề', href: '#problems' },
    { label: 'Tính năng', href: '#features' },
    { label: 'Về dự án', href: '#about' },
    { label: 'Mẹo chăm cây', href: '#tips' },
    { label: 'Hỗ trợ', href: '#support' },
  ];

  useEffect(() => {
    const updateNavSurface = () => {
      setScrolled(window.scrollY > 12);
    };

    updateNavSurface();
    window.addEventListener('scroll', updateNavSurface, { passive: true });

    return () => window.removeEventListener('scroll', updateNavSurface);
  }, []);

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed left-0 right-0 top-0 z-50 border-b transition-[background-color,border-color,box-shadow,backdrop-filter] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
        scrolled
          ? 'border-emerald-950/8 bg-[#f8fbf7]/42 shadow-[0_12px_40px_rgba(20,83,45,0.06)] backdrop-blur-xl'
          : 'border-white/15 bg-white/[0.08] shadow-none backdrop-blur-md'
      }`}
    >
      <div className="mx-auto w-full max-w-[1600px] px-6 md:px-10 lg:px-14 xl:px-16">
        <div className="flex h-16 items-center justify-between">
          {/* Logo - minimal, elegant */}
          <div className="flex items-center gap-3">
            <div className="h-7 w-7 rounded-full bg-gradient-to-br from-sky-400 to-green-400 shadow-[0_10px_24px_rgba(20,184,166,0.18)]" />
            <span className="font-heading text-lg font-bold text-foreground">
              PlantCare Hub
            </span>
          </div>

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
            <button className="hidden rounded-full border border-emerald-900/8 bg-white/[0.28] px-5 py-2 text-xs font-semibold text-foreground shadow-[inset_0_1px_0_rgba(255,255,255,0.42)] backdrop-blur-lg transition duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-0.5 hover:bg-white/45 active:translate-y-0 active:scale-[0.98] sm:inline-flex">
              Xem demo
            </button>

            <button className="inline-flex rounded-full bg-primary px-5 py-2 text-xs font-bold text-white shadow-[0_14px_36px_rgba(20,83,45,0.16)] transition duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-0.5 hover:bg-primary/90 active:translate-y-0 active:scale-[0.98]">
              Tải ứng dụng
            </button>
          </div>
        </div>
      </div>
    </motion.nav>
  );
}