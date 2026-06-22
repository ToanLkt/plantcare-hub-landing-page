'use client';

import { motion } from 'framer-motion';

const features = [
  'Chẩn đoán bệnh cây bằng AI',
  'Lịch chăm sóc tự động',
  'Nhắc tưới nước',
  'Nhắc bón phân',
  'Nhật ký phát triển',
  'Quản lý thư viện cây',
  'Quản lý vườn ươm',
  'Quản lý lô và khu vực',
  'Quản lý vật tư',
  'Dashboard tổng quan',
  'Theo dõi tình trạng cây',
  'Gợi ý chăm sóc theo khí hậu',
];

export function Marquee() {
  return (
    <section className="border-y border-emerald-900/10 bg-[#edf7ed] py-6">
      <div className="overflow-hidden">
        <motion.div
          animate={{ x: ['0%', '-50%'] }}
          transition={{ duration: 36, repeat: Infinity, ease: 'linear' }}
          className="flex w-max gap-8 whitespace-nowrap"
        >
          {[...features, ...features, ...features, ...features].map((feature, idx) => (
            <div key={idx} className="flex items-center gap-8">
              <span className="text-sm font-semibold text-foreground sm:text-base">{feature}</span>
              <div className="h-1.5 w-1.5 rounded-full bg-emerald-900/20" />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
