'use client';

import { motion } from 'framer-motion';

const problemItems = [
  'Lá vàng nhưng không biết nguyên nhân',
  'Tưới nước đều nhưng cây vẫn héo',
  'Quên lịch bón phân',
  'Trồng nhiều cây và không nhớ cây nào cần chăm sóc trước',
];

const careSteps = [
  { number: '01', title: 'Chụp ảnh cây', description: 'Ghi lại dấu hiệu trên lá, thân hoặc bề mặt đất.' },
  { number: '02', title: 'AI phân tích tình trạng', description: 'Nhận diện dấu hiệu bệnh và mức độ cần xử lý.' },
  { number: '03', title: 'Nhận hướng dẫn chăm sóc', description: 'Làm theo gợi ý phù hợp với từng loại cây.' },
];

export function DemoArea() {
  return (
    <section id="problems" className="w-full overflow-hidden bg-background px-6 py-24 md:px-10 md:py-28 lg:px-14 xl:px-16">
      <div className="mx-auto w-full max-w-[1500px]">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid gap-10 rounded-[36px] border border-emerald-900/10 bg-gradient-to-br from-[#f8fbf7] to-white p-8 shadow-[0_24px_90px_rgba(20,83,45,0.08)] sm:p-12 lg:grid-cols-[0.9fr_1.1fr] lg:p-16 xl:p-20"
        >
          <div className="space-y-8">
            <div className="space-y-5">
              <p className="text-xs font-bold uppercase tracking-[0.24em] text-emerald-900/45">Vấn đề thường gặp</p>
              <h2 className="max-w-2xl text-balance font-heading text-4xl font-extrabold leading-[1.05] tracking-[-0.035em] text-foreground sm:text-5xl lg:text-6xl">
                Bạn đã từng gặp tình huống này?
              </h2>
              <p className="max-w-xl text-base leading-relaxed text-foreground/65">
                PlantCare Hub giúp giải quyết tất cả những vấn đề đó bằng một quy trình chăm cây rõ ràng, dễ dùng và có AI hỗ trợ.
              </p>
            </div>

            <div className="grid gap-3 sm:grid-cols-2">
              {problemItems.map((item, idx) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.06 }}
                  className="rounded-2xl border border-emerald-900/10 bg-white/70 p-4 text-sm font-medium leading-relaxed text-foreground/75 shadow-[0_12px_40px_rgba(20,83,45,0.06)] transition duration-300 hover:-translate-y-1 hover:bg-white"
                >
                  {item}
                </motion.div>
              ))}
            </div>
          </div>

          <div className="grid gap-4">
            {careSteps.map((item, idx) => (
              <motion.div
                key={item.number}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.08 }}
                className="group rounded-[28px] border border-emerald-900/10 bg-white/80 p-6 shadow-[0_18px_55px_rgba(20,83,45,0.08)] backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:shadow-[0_24px_70px_rgba(20,83,45,0.12)]"
              >
                <div className="mb-5 flex items-center justify-between">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-950 text-sm font-bold text-white shadow-[0_12px_32px_rgba(20,83,45,0.16)]">
                    {item.number}
                  </div>
                  <span className="font-heading text-4xl font-extrabold text-emerald-950/10">{item.number}</span>
                </div>
                <h3 className="font-heading mb-2 text-xl font-bold text-foreground">{item.title}</h3>
                <p className="text-sm leading-relaxed text-foreground/60">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
