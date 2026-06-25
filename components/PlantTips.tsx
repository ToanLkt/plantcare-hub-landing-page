'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import Image from 'next/image';

const plants = [
  { name: 'Trầu bà', hasTips: true, tips: ['Sáng gián tiếp', 'Tưới 1-2 lần/tuần', 'Tránh úng rễ vào mùa mưa'] },
  { name: 'Lưỡi hổ', hasTips: true, tips: ['Chịu được thiếu sáng', 'Tưới 10-14 ngày/lần', 'Dễ chết vì tưới quá nhiều'] },
  { name: 'Kim tiền', hasTips: true, tips: ['Phù hợp trong nhà', 'Tưới khoảng 1 lần/tuần', 'Tránh mưa trực tiếp kéo dài'] },
  { name: 'Monstera', hasTips: true, tips: ['Ưa sáng gián tiếp', 'Tưới khoảng 1 lần/tuần', 'Cần đất thoát nước tốt'] },
  { name: 'Phát tài', hasTips: true, tips: ['Ánh sáng nhẹ đến vừa', 'Tưới khi đất khô bề mặt', 'Cắt lá vàng định kỳ'] },
  { name: 'Xương rồng', hasTips: false },
  { name: 'Sen đá', hasTips: false },
  { name: 'Hoa mười giờ', hasTips: false },
  { name: 'Hoa giấy', hasTips: false },
];

const featuredPlants = plants.filter(p => p.hasTips).slice(0, 3);

export function PlantTips() {
  const [selectedPlant, setSelectedPlant] = useState(featuredPlants[0]);
  const [showAllModal, setShowAllModal] = useState(false);

  return (
    <section id="tips" className="relative w-full overflow-hidden bg-background px-6 py-24 md:px-10 md:py-28 lg:px-14 xl:px-16">
      <div className="mx-auto w-full max-w-screen-2xl">
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

        <div className="mt-14 grid gap-6 lg:grid-cols-[280px_1fr] lg:gap-10">
          {/* Left Tabs */}
          <div className="flex flex-col gap-2">
            {featuredPlants.map((plant) => {
              const isActive = plant.name === selectedPlant.name;
              return (
                <button
                  key={plant.name}
                  type="button"
                  onClick={() => setSelectedPlant(plant)}
                  className={`rounded-2xl border px-5 py-3.5 text-left text-sm font-semibold transition-all duration-300 ${
                    isActive
                      ? 'border-emerald-900/15 bg-emerald-950 text-white shadow-[0_8px_24px_rgba(20,83,45,0.16)]'
                      : 'border-emerald-900/10 bg-white/80 text-foreground hover:-translate-y-0.5 hover:bg-[#f8fbf7] hover:shadow-[0_8px_20px_rgba(20,83,45,0.08)]'
                  }`}
                >
                  {plant.name}
                </button>
              );
            })}

            <button
              type="button"
              onClick={() => setShowAllModal(true)}
              className="group flex items-center justify-between rounded-2xl border border-emerald-900/10 bg-white/80 px-5 py-3.5 text-left text-sm font-semibold text-foreground transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#f8fbf7] hover:shadow-[0_8px_20px_rgba(20,83,45,0.08)]"
            >
              <span>Xem tất cả</span>
              <svg
                className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </button>
          </div>

          {/* Right Detail Card */}
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedPlant.name}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              className="relative overflow-hidden rounded-[28px] border border-emerald-900/10 bg-white p-8 shadow-[0_24px_90px_rgba(20,83,45,0.09)] sm:p-10 lg:p-12"
            >
              <div className="mb-8">
                <p className="mb-3 text-xs font-bold uppercase tracking-[0.24em] text-emerald-900/45">Gợi ý nhanh</p>
                <h3 className="font-heading text-4xl font-bold tracking-[-0.02em] text-foreground sm:text-5xl">
                  {selectedPlant.name}
                </h3>
              </div>

              <div className="flex flex-wrap gap-3">
                {selectedPlant.tips.map((tip, i) => (
                  <span
                    key={i}
                    className="inline-flex items-center rounded-full border border-emerald-900/10 bg-[#f8fbf7] px-5 py-2.5 text-sm font-medium text-foreground/80"
                  >
                    {tip}
                  </span>
                ))}
              </div>

              <div className="mt-10">
                <a
                  href="#"
                  className="inline-flex rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition hover:opacity-90 active:scale-[0.98]"
                >
                  Muốn được nhắc lịch tự động? Tải PlantCare Hub
                </a>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* All Plants Modal */}
      <AnimatePresence>
        {showAllModal && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 z-50 bg-black/40 backdrop-blur-sm"
              onClick={() => setShowAllModal(false)}
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
              className="fixed left-1/2 top-1/2 z-50 w-full max-w-md -translate-x-1/2 -translate-y-1/2 overflow-hidden rounded-3xl border border-emerald-900/10 bg-white shadow-[0_40px_120px_rgba(20,83,45,0.2)]"
            >
              <div className="flex items-center justify-between border-b border-emerald-900/10 p-6">
                <div>
                  <h3 className="font-heading text-xl font-bold text-foreground">Cây được hỗ trợ</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{plants.length} loại cây phổ biến tại Việt Nam</p>
                </div>
                <button
                  type="button"
                  onClick={() => setShowAllModal(false)}
                  className="flex h-10 w-10 items-center justify-center rounded-xl border border-emerald-900/10 text-muted-foreground transition hover:bg-[#f8fbf7] hover:text-foreground"
                  aria-label="Đóng"
                >
                  <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M18 6L6 18M6 6l12 12" />
                  </svg>
                </button>
              </div>

              <div className="max-h-[400px] overflow-y-auto p-6">
                <div className="grid gap-2">
                  {plants.map((plant) => (
                    <div
                      key={plant.name}
                      className="flex items-center justify-between rounded-xl border border-emerald-900/10 bg-white/80 px-4 py-3"
                    >
                      <span className="text-sm font-semibold text-foreground">{plant.name}</span>
                    </div>
                  ))}
                </div>

                <p className="mt-6 rounded-xl border border-dashed border-emerald-900/15 bg-[#f8fbf7]/50 p-4 text-center text-sm text-muted-foreground">
                  Tải PlantCare Hub để xem chi tiết mẹo chăm sóc cho từng loại cây.
                </p>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </section>
  );
}
