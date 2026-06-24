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

      <div className="pointer-events-none relative z-30 mx-auto flex min-h-[calc(100vh-80px)] w-full max-w-screen-2xl items-center px-6 pb-16 pt-28 md:px-10 md:pb-20 md:pt-32 lg:px-14 xl:px-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="pointer-events-auto max-w-2xl space-y-12"
        >
          <h1 className="text-balance font-heading text-5xl font-bold leading-[1.02] tracking-[-0.045em] text-foreground sm:text-6xl lg:text-7xl xl:text-8xl">
            Sẵn sàng chăm cây ngay hôm nay?
          </h1>

          <p className="max-w-xl text-sm font-medium leading-relaxed text-muted-foreground sm:text-base">
            Tải PlantCare Hub để chẩn đoán bệnh cây bằng AI, nhận nhắc lịch chăm sóc tự động và quản lý toàn bộ cây trồng của bạn trong một ứng dụng duy nhất.
          </p>

          <div className="flex flex-col gap-4 pt-4 sm:flex-row sm:items-center">
            <button className="inline-flex min-h-12 items-center justify-center rounded-full bg-[#173f29] px-8 py-3 text-sm font-bold text-primary-foreground shadow-[0_18px_45px_rgba(20,83,45,0.20)] transition duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-0.5 hover:bg-[#12351f] active:scale-[0.98]">
              Tải xuống trên Google Play
            </button>

            <button className="inline-flex min-h-10 items-center justify-center rounded-full border border-emerald-900/10 bg-white/55 px-8 py-3 text-sm font-semibold text-foreground backdrop-blur-md transition duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-0.5 hover:bg-white/80 active:translate-y-0 active:scale-[0.98]">
              Xem demo ứng dụng
            </button>
          </div>

          <div className="pt-2">
            <p className="max-w-md text-xs font-medium leading-relaxed text-foreground/45">
              Hiện đang trong giai đoạn thử nghiệm - phiên bản chính thức sẽ ra mắt sớm.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
