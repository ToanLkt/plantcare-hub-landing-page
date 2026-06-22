'use client';

import { motion } from 'framer-motion';

const quickLinks = [
  { label: 'Vấn đề', href: '#problems' },
  { label: 'Tính năng', href: '#features' },
  { label: 'Về dự án', href: '#about' },
  { label: 'Mẹo chăm cây', href: '#tips' },
];

const legalNotes = [
  'Hình ảnh cây do người dùng tải lên, dùng cho chẩn đoán AI và nhật ký phát triển.',
  'Thông tin vị trí, nếu được cấp quyền, để gợi ý lịch chăm sóc theo khí hậu khu vực.',
  'Thông tin tài khoản cơ bản như email và tên hiển thị.',
];

export function Footer() {
  return (
    <footer id="support" className="border-t border-emerald-900/10 bg-[#f8fbf7]">
      <div className="mx-auto w-full max-w-[1500px] px-6 py-16 md:px-10 lg:px-14 xl:px-16">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr_1.2fr_0.8fr] lg:gap-14">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-2 mb-4">
              <div className="h-8 w-8 rounded-full bg-gradient-to-br from-accent to-secondary" />
              <span className="font-heading text-xl font-bold text-foreground">PlantCare Hub</span>
            </div>
            <p className="max-w-xs text-sm leading-relaxed text-muted-foreground">
              Ứng dụng chăm cây thông minh giúp bạn chẩn đoán bệnh cây, nhắc lịch chăm sóc và quản lý vườn dễ dàng hơn.
            </p>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}>
            <h4 className="font-heading font-bold text-foreground mb-4">Liên hệ & Hỗ trợ</h4>
            <p className="mb-4 text-sm leading-relaxed text-muted-foreground">
              Có câu hỏi, góp ý, hoặc muốn hợp tác cùng PlantCare Hub? Hãy liên hệ với chúng tôi qua email hoặc fanpage bên dưới.
            </p>
            <div className="space-y-3 text-sm">
              <a href="mailto:support@plantcarehub.vn" className="block text-muted-foreground transition hover:text-foreground">support@plantcarehub.vn</a>
              <a href="#" className="block text-muted-foreground transition hover:text-foreground">[điền link Facebook/Fanpage nhóm]</a>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }}>
            <h4 className="font-heading font-bold text-foreground mb-4">Điều khoản & Quyền riêng tư</h4>
            <p className="mb-4 text-sm leading-relaxed text-muted-foreground">
              PlantCare Hub thu thập một số thông tin sau để cung cấp dịch vụ:
            </p>
            <ul className="space-y-2">
              {legalNotes.map((note) => (
                <li key={note} className="text-sm leading-relaxed text-muted-foreground">{note}</li>
              ))}
            </ul>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              Chúng tôi không chia sẻ dữ liệu cá nhân của bạn cho bên thứ ba ngoài mục đích vận hành ứng dụng.
            </p>
            <div className="mt-5 flex flex-col gap-2">
              <a href="#" className="text-sm font-semibold text-foreground transition hover:text-primary">Xem Chính sách Quyền riêng tư đầy đủ</a>
              <a href="#" className="text-sm font-semibold text-foreground transition hover:text-primary">Xem Điều khoản Sử dụng đầy đủ</a>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.3 }}>
            <h4 className="font-heading font-bold text-foreground mb-4">Liên kết nhanh</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="text-sm text-muted-foreground transition hover:text-foreground">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-12 border-t border-border pt-8"
        >
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-sm text-muted-foreground">&copy; 2026 PlantCare Hub. Đang trong giai đoạn thử nghiệm.</p>
            <div className="flex gap-6">
              <a href="#" className="text-sm text-muted-foreground transition hover:text-foreground">
                Chính sách
              </a>
              <a href="#" className="text-sm text-muted-foreground transition hover:text-foreground">
                Điều khoản
              </a>
              <a href="#" className="text-sm text-muted-foreground transition hover:text-foreground">
                Fanpage
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
