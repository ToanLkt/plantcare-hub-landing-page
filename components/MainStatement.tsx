'use client';

import { motion } from 'framer-motion';

export function MainStatement() {
  return (
    <section id="about" className="w-full overflow-hidden bg-white px-6 py-24 md:px-10 sm:py-32 lg:px-14 lg:py-36 xl:px-16">
      <div className="mx-auto w-full max-w-[1500px]">
        <div className="grid gap-12 lg:grid-cols-[1fr_0.9fr] lg:items-end lg:gap-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8 }}
            className="max-w-5xl space-y-8"
          >
            <p className="text-xs font-bold uppercase tracking-[0.24em] text-emerald-900/45">Về dự án</p>
            <h2 className="text-balance font-heading text-5xl sm:text-6xl lg:text-7xl font-extrabold leading-[1.05] tracking-[-0.035em] text-foreground">
              Về PlantCare Hub
            </h2>

            <p className="max-w-3xl text-base sm:text-lg text-foreground/70 leading-relaxed">
              Nhiều người yêu cây nhưng vẫn gặp khó khăn khi cây vàng lá, úa héo hoặc xuất hiện dấu hiệu bệnh mà không biết nguyên nhân. PlantCare Hub được tạo ra để giúp việc chăm sóc cây trở nên đơn giản, khoa học và dễ tiếp cận hơn.
            </p>

            <div className="flex flex-wrap gap-3 pt-2">
              {['Mobile-first', 'AI-assisted diagnosis', 'Smart reminder', 'Garden management'].map((item) => (
                <span key={item} className="rounded-full border border-emerald-900/10 bg-emerald-50/70 px-4 py-2 text-xs font-semibold text-emerald-950/70">
                  {item}
                </span>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="pt-8"
            >
              <div className="grid gap-8 sm:gap-12 sm:grid-cols-3 lg:max-w-4xl">
                <div className="space-y-2">
                  <div className="text-4xl sm:text-5xl font-heading font-extrabold text-primary">2</div>
                  <p className="text-sm font-medium text-foreground/60">chế độ chăm cây</p>
                </div>
                <div className="space-y-2">
                  <div className="text-4xl sm:text-5xl font-heading font-extrabold text-primary">AI</div>
                  <p className="text-sm font-medium text-foreground/60">hỗ trợ chẩn đoán</p>
                </div>
                <div className="space-y-2">
                  <div className="text-4xl sm:text-5xl font-heading font-extrabold text-primary">24/7</div>
                  <p className="text-sm font-medium text-foreground/60">nhắc lịch tự động</p>
                </div>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="rounded-[34px] border border-emerald-900/10 bg-[#f8fbf7] p-8 shadow-[0_24px_90px_rgba(20,83,45,0.09)] sm:p-10"
          >
            <p className="mb-4 text-xs font-bold uppercase tracking-[0.24em] text-emerald-900/45">Sứ mệnh</p>
            <h3 className="mb-5 font-heading text-3xl font-bold leading-[1.08] tracking-[-0.025em] text-foreground">
              Thu hẹp khoảng cách giữa kinh nghiệm chăm cây và công nghệ hiện đại.
            </h3>
            <p className="leading-relaxed text-foreground/65">
              PlantCare Hub giúp mọi người chăm cây tự tin hơn mỗi ngày, từ vài chậu cây trong phòng đến những khu vườn cần quản lý có hệ thống.
            </p>
            <div className="mt-8 rounded-3xl border border-emerald-900/10 bg-white/70 p-5">
              <p className="text-sm font-semibold text-foreground">Công nghệ</p>
              <p className="mt-2 text-sm leading-relaxed text-foreground/60">
                Flutter · Firebase · Mô hình AI nhận diện bệnh cây
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
