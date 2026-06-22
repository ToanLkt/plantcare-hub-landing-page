'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';

const plantTips = [
  {
    name: 'Trầu bà',
    note: ['Sáng gián tiếp', 'Tưới 1-2 lần/tuần', 'Tránh úng rễ vào mùa mưa'],
  },
  {
    name: 'Lưỡi hổ',
    note: ['Chịu được thiếu sáng', 'Tưới 10-14 ngày/lần', 'Dễ chết vì tưới quá nhiều'],
  },
  {
    name: 'Monstera',
    note: ['Ưa sáng gián tiếp', 'Tưới khoảng 1 lần/tuần', 'Cần đất thoát nước tốt'],
  },
  {
    name: 'Kim Tiền',
    note: ['Phù hợp trong nhà', 'Tưới khoảng 1 lần/tuần', 'Tránh mưa trực tiếp kéo dài'],
  },
  {
    name: 'Sen đá & Xương rồng',
    note: ['Cần nhiều ánh sáng', 'Tưới ít', 'Độ ẩm cao dễ gây thối rễ'],
  },
];

export function PlantTips() {
  const [activeIndex, setActiveIndex] = useState(0);
  const activePlant = plantTips[activeIndex];

  return (
    <section id="tips" className="w-full overflow-hidden bg-background px-6 py-24 md:px-10 md:py-28 lg:px-14 xl:px-16">
      <div className="mx-auto w-full max-w-[1500px]">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-4xl text-center"
        >
          <p className="mb-4 text-xs font-bold uppercase tracking-[0.24em] text-emerald-900/45">Mẹo chăm cây</p>
          <h2 className="text-balance font-heading text-4xl font-extrabold leading-[1.05] tracking-[-0.035em] text-foreground sm:text-5xl">
            Mẹo chăm cây nhanh theo khí hậu Việt Nam
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-muted-foreground">
            Một vài gợi ý nhanh để cây của bạn luôn xanh tốt, và nếu muốn nhắc nhở tự động, hãy để PlantCare Hub làm điều đó cho bạn.
          </p>
        </motion.div>

        <div className="mt-14 grid gap-6 lg:grid-cols-[0.8fr_1.2fr] lg:gap-10">
          <div className="grid gap-3">
            {plantTips.map((plant, idx) => (
              <button
                key={plant.name}
                type="button"
                onClick={() => setActiveIndex(idx)}
                className={`rounded-2xl border px-5 py-4 text-left transition duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                  activeIndex === idx
                    ? 'border-emerald-900/15 bg-emerald-950 text-white shadow-[0_18px_55px_rgba(20,83,45,0.16)]'
                    : 'border-emerald-900/10 bg-white/80 text-foreground hover:-translate-y-0.5 hover:bg-[#f8fbf7]'
                }`}
              >
                <span className="flex items-center gap-3 text-sm font-semibold">
                  <span className={`h-2 w-2 rounded-full ${activeIndex === idx ? 'bg-white/80' : 'bg-emerald-900/30'}`} />
                  {plant.name}
                </span>
              </button>
            ))}
          </div>

          <motion.div
            key={activePlant.name}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35 }}
            className="rounded-[34px] border border-emerald-900/10 bg-gradient-to-br from-[#f8fbf7] to-white p-8 shadow-[0_24px_90px_rgba(20,83,45,0.09)] sm:p-10"
          >
            <div className="mb-8 flex items-start justify-between gap-6">
              <div>
                <p className="mb-3 text-xs font-bold uppercase tracking-[0.24em] text-emerald-900/45">Gợi ý nhanh</p>
                <h3 className="font-heading text-3xl font-bold text-foreground sm:text-4xl">{activePlant.name}</h3>
              </div>
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-white text-sm font-bold text-emerald-950 shadow-[0_12px_36px_rgba(20,83,45,0.1)] ring-1 ring-emerald-900/10">
                {String(activeIndex + 1).padStart(2, '0')}
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-3">
              {activePlant.note.map((tip) => (
                <div key={tip} className="rounded-2xl border border-emerald-900/10 bg-white/70 p-5">
                  <p className="text-sm font-semibold leading-relaxed text-foreground/75">{tip}</p>
                </div>
              ))}
            </div>

            <a
              href="#"
              className="mt-8 inline-flex rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition hover:opacity-90 active:scale-[0.98]"
            >
              Muốn được nhắc lịch tự động? Tải PlantCare Hub
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
