'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useLandingSession } from '@/lib/use-landing-session';
import { showDownloadToast } from '@/lib/download-toast';

export function Hero() {
  const router = useRouter();
  const { session, ready } = useLandingSession();
  const isAuthenticated = ready && Boolean(session?.user && session.accessToken);

  const handleDeleteClick = () => {
    router.push('/xoa-tai-khoan');
  };

  return (
    <>
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
            <button
              type="button"
              onClick={showDownloadToast}
              className="inline-flex min-h-12 items-center justify-center gap-3 rounded-full bg-[#1a1a1a] px-8 py-3 text-sm font-bold text-white shadow-[0_0_40px_rgba(0,0,0,0.25),0_18px_45px_rgba(0,0,0,0.3)] transition duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-0.5 hover:bg-black active:scale-[0.98]"
            >
              <Image src="/google-play-icon.svg" alt="Google Play" width={24} height={24} className="h-6 w-6" />
              Tải xuống trên Google Play
            </button>
            {isAuthenticated ? (
              <button
                type="button"
                onClick={handleDeleteClick}
                className="inline-flex min-h-12 items-center justify-center rounded-full border border-emerald-900/12 bg-white/45 px-8 py-3 text-sm font-bold text-foreground shadow-[inset_0_1px_0_rgba(255,255,255,0.5)] backdrop-blur-lg transition duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-0.5 hover:bg-white/65 active:scale-[0.98]"
              >
                Xóa tài khoản
              </button>
            ) : null}
          </div>

          {/* Feature highlights */}
          <p className="border-t border-emerald-900/10 pt-6 text-xs text-muted-foreground/70">
            Hiện đang trong giai đoạn thử nghiệm - phiên bản chính thức sẽ ra mắt sớm.
          </p>
        </motion.div>
      </div>
      </section>
    </>
  );
}
