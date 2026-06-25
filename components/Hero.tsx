'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export function Hero() {
  return (
    <section className="relative isolate min-h-[calc(100vh-80px)] w-full overflow-hidden bg-[#f8fbf7]">
      <div className="absolute inset-0 z-0 h-full w-full overflow-hidden bg-[#f8fbf7]">
        <Image
          src="/Background.webp"
          alt=""
          fill
          priority
          sizes="100vw"
          quality={90}
          className="h-full w-full scale-[1.4] object-cover object-[70%_center] md:object-[70%_center]"
        />
      </div>

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-10 h-full w-full bg-[#f8fbf7]/10"
      />

      <div
        aria-hidden="true"
        className="hero-image-overlay pointer-events-none absolute inset-0 z-20 h-full w-full"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-40 -right-40 z-10 h-[600px] w-[600px] rounded-full bg-linear-to-br from-green-200/25 via-emerald-200/15 to-transparent blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-0 left-0 z-10 h-[400px] w-[400px] rounded-full bg-linear-to-tr from-sky-200/20 via-green-100/10 to-transparent blur-3xl"
      />

      <div className="pointer-events-none relative z-30 mx-auto flex min-h-[calc(100vh-80px)] w-full max-w-screen-2xl items-center px-6 pb-16 pt-32 md:px-10 md:pb-20 md:pt-36 lg:px-14 xl:px-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="pointer-events-auto max-w-2xl space-y-10"
        >
          <div className="space-y-8">
            <h1 className="text-balance font-heading text-4xl font-bold leading-[1.1] tracking-[-0.04em] text-foreground sm:text-5xl lg:text-6xl xl:text-7xl">
              Sẵn sàng chăm cây ngay hôm nay?
            </h1>

            <p className="max-w-xl text-sm font-medium leading-relaxed text-muted-foreground sm:text-base">
              Mọi thứ bạn cần để chăm cây tốt hơn — trong một ứng dụng.
            </p>
          </div>

          <div className="flex flex-col gap-4 pt-1 sm:flex-row sm:items-center">
            <button className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-[#173f29] px-8 py-3 text-sm font-bold text-primary-foreground shadow-[0_18px_45px_rgba(20,83,45,0.20)] transition duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-0.5 hover:bg-[#12351f] active:scale-[0.98]">
              <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M3.609 1.814L13.792 12 3.61 22.186a.996.996 0 0 1-.61-.92V2.734a1 1 0 0 1 .609-.92zm10.89 10.893l2.302 2.302-10.937 6.333 8.635-8.635zm3.199-3.198l2.807 1.626a1 1 0 0 1 0 1.73l-2.808 1.626L15.206 12l2.492-2.491zM5.864 2.658L16.8 9.99l-2.302 2.302-8.634-8.634z" />
              </svg>
              Tải xuống trên Google Play
            </button>

            <button className="inline-flex min-h-10 items-center justify-center rounded-full border border-emerald-900/10 bg-white/55 px-8 py-3 text-sm font-semibold text-foreground backdrop-blur-md transition duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-0.5 hover:bg-white/80 active:translate-y-0 active:scale-[0.98]">
              Xem demo ứng dụng
            </button>
          </div>

          {/* Feature highlights */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="flex flex-wrap items-center gap-x-6 gap-y-3 border-t border-emerald-900/10 pt-8"
          >
            {[
              'Chẩn đoán bệnh bằng AI',
              'Nhắc lịch tưới & bón phân',
              'Theo dõi sức khỏe cây',
              'Quản lý vườn ươm',
            ].map((item, idx) => (
              <span key={item} className="flex items-center gap-2 text-xs font-medium text-muted-foreground">
                <span className="flex h-4 w-4 items-center justify-center rounded-full bg-emerald-100 text-emerald-700">
                  <svg className="h-2.5 w-2.5" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M2.5 6l2.5 2.5 5-5" />
                  </svg>
                </span>
                {item}
              </span>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
