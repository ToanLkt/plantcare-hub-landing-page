'use client';

import { motion } from 'framer-motion';

const personalFeatures = [
  {
    number: '01',
    mode: 'Personal Mode',
    title: 'Chẩn đoán bệnh bằng AI',
    description: 'Chụp ảnh cây và nhận kết quả cùng hướng dẫn xử lý.',
  },
  {
    number: '02',
    mode: 'Personal Mode',
    title: 'Lịch chăm sóc thông minh',
    description: 'Tự động nhắc tưới nước và bón phân theo từng loại cây.',
  },
  {
    number: '03',
    mode: 'Personal Mode',
    title: 'Nhật ký phát triển',
    description: 'Theo dõi sự thay đổi của cây qua hình ảnh theo thời gian.',
  },
  {
    number: '04',
    mode: 'Personal Mode',
    title: 'Thư viện cây cá nhân',
    description: 'Quản lý toàn bộ cây đang trồng trong một nơi duy nhất.',
  },
];

const gardenFeatures = [
  {
    number: '05',
    mode: 'Garden Mode',
    title: 'Quản lý theo lô và khu vực',
    description: 'Dễ dàng quản lý số lượng lớn cây trồng.',
  },
  {
    number: '06',
    mode: 'Garden Mode',
    title: 'Quản lý vật tư',
    description: 'Theo dõi đất trồng, phân bón và vật tư sử dụng.',
  },
  {
    number: '07',
    mode: 'Garden Mode',
    title: 'Dashboard tổng quan',
    description: 'Theo dõi tình trạng toàn vườn và các công việc cần thực hiện.',
  },
];

const modeFeatures = [...personalFeatures, ...gardenFeatures];

function VerticalMarqueeTrack() {
  const duplicatedSteps = [...modeFeatures, ...modeFeatures];

  return (
    <div className="relative overflow-hidden h-full">
      <div className="flex flex-col gap-0 animate-vertical-marquee motion-reduce:animate-none">
        {duplicatedSteps.map((step, idx) => (
          <div
            key={idx}
            className="flex-shrink-0 h-40 lg:h-48 flex items-center justify-between gap-8 px-6 lg:px-8 py-8 lg:py-10 border-t border-emerald-900/10 hover:bg-white/50 transition-colors"
          >
            <div className="flex min-w-0 flex-1 items-start gap-5">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-white text-sm font-bold text-emerald-950 shadow-[0_10px_30px_rgba(20,83,45,0.08)] ring-1 ring-emerald-900/10">
                {step.number}
              </div>
              <div className="min-w-0">
                <p className="mb-2 text-[10px] font-bold uppercase tracking-[0.2em] text-emerald-900/45">{step.mode}</p>
                <h3 className="font-heading text-3xl lg:text-4xl font-bold text-foreground mb-2 leading-[1.08] tracking-[-0.025em]">
                {step.title}
              </h3>
                <p className="text-sm lg:text-base text-foreground/60 leading-relaxed">
                {step.description}
              </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Gradient overlays for fade effect */}
      <div className="absolute top-0 left-0 right-0 h-12 lg:h-16 bg-linear-to-b from-background to-transparent pointer-events-none z-10" />
      <div className="absolute bottom-0 left-0 right-0 h-12 lg:h-16 bg-linear-to-t from-background to-transparent pointer-events-none z-10" />
    </div>
  );
}

export function HowItWorks() {
  return (
    <section id="features" className="w-full overflow-hidden bg-background px-6 py-20 md:px-10 lg:px-14 lg:py-28 xl:px-16">
      <div className="mx-auto w-full max-w-screen-2xl">
        <div className="hidden lg:grid lg:grid-cols-[0.85fr_1.15fr] lg:gap-16 xl:gap-20 lg:min-h-[740px] items-start">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, margin: '-100px' }}
            className="flex flex-col justify-start pt-8"
          >
            <p className="text-xs font-bold uppercase tracking-[0.24em] text-emerald-900/45 mb-4">Tính năng</p>
            <h2 className="text-balance font-heading text-5xl lg:text-6xl font-extrabold text-foreground mb-6 leading-[1.05] tracking-[-0.035em]">
              Tính năng nổi bật
            </h2>
            <p className="text-lg text-foreground/70 mb-6">
              Dù bạn có vài chậu cây trong phòng hay đang quản lý cả một vườn ươm, PlantCare Hub đều có chế độ phù hợp.
            </p>

            <div className="mt-8 grid gap-4">
              <div className="rounded-[30px] border border-emerald-900/10 bg-white/75 p-6 shadow-[0_18px_60px_rgba(20,83,45,0.08)]">
                <span className="rounded-full bg-emerald-50 px-3 py-1 text-xs font-bold text-emerald-950/70">Personal Mode</span>
                <p className="mt-4 text-sm leading-relaxed text-foreground/60">
                  Dành cho người chăm cây tại nhà, muốn theo dõi từng chậu cây và nhận nhắc lịch riêng.
                </p>
              </div>
              <div className="rounded-[30px] border border-emerald-900/10 bg-[#eef8ee] p-6 shadow-[0_18px_60px_rgba(20,83,45,0.08)]">
                <span className="rounded-full bg-white px-3 py-1 text-xs font-bold text-emerald-950/70">Garden Mode</span>
                <p className="mt-4 text-sm leading-relaxed text-foreground/60">
                  Dành cho vườn ươm hoặc người trồng nhiều cây, cần quản lý theo khu vực và vật tư.
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, margin: '-100px' }}
            className="h-[740px] rounded-[34px] overflow-hidden bg-linear-to-b from-[#f8fbf7] to-white border border-emerald-900/10 shadow-[0_24px_90px_rgba(20,83,45,0.08)]"
          >
            <VerticalMarqueeTrack />
          </motion.div>
        </div>

        <div className="lg:hidden">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, margin: '-50px' }}
            className="mb-12"
          >
            <p className="text-xs font-bold uppercase tracking-[0.24em] text-emerald-900/45 mb-4">Tính năng</p>
            <h2 className="text-balance font-heading text-4xl font-extrabold text-foreground mb-4 leading-[1.05] tracking-[-0.035em]">
              Một ứng dụng, hai cách chăm cây
            </h2>
            <p className="text-base text-foreground/70 mb-4">
              Dù bạn có vài chậu cây trong phòng hay đang quản lý cả một vườn ươm, PlantCare Hub đều có chế độ phù hợp.
            </p>
          </motion.div>

          <div className="grid gap-4">
            {modeFeatures.map((step) => (
              <div key={`${step.mode}-${step.title}`} className="rounded-3xl border border-emerald-900/10 bg-white/80 p-5 shadow-[0_14px_45px_rgba(20,83,45,0.07)]">
                <div className="mb-3 flex items-center gap-3">
                  <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-emerald-950 text-xs font-bold text-white">{step.number}</span>
                  <span className="rounded-full bg-emerald-50 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.18em] text-emerald-950/60">{step.mode}</span>
                </div>
                <h3 className="font-heading text-xl font-bold text-foreground">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-foreground/60">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
