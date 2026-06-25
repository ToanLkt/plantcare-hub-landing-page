'use client';

import { motion } from 'framer-motion';

const quickLinks = [
  { label: 'Vấn đề', href: '#problems' },
  { label: 'Tính năng', href: '#features' },
  { label: 'Về dự án', href: '#about' },
  { label: 'Mẹo chăm cây', href: '#tips' },
];

export function Footer() {
  return (
    <footer id="support" className="border-t border-emerald-900/10 bg-gradient-to-b from-[#f0f7f0] to-[#f8fbf7]">
      <div className="mx-auto w-full max-w-screen-2xl px-6 py-16 md:px-10 lg:px-14 xl:px-16">

        {/* CTA Bar */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 rounded-3xl border border-emerald-900/10 bg-white/80 p-6 sm:p-8 shadow-[0_16px_60px_rgba(20,83,45,0.07)]"
        >
          <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
            <div className="space-y-1">
              <h3 className="font-heading text-2xl font-bold text-foreground">Tải PlantCare Hub ngay</h3>
              <p className="text-sm text-muted-foreground">Chăm cây thông minh hơn mỗi ngày.</p>
            </div>
            <div className="flex items-center gap-3">
              <div className="rounded-2xl border border-emerald-900/10 bg-emerald-950 px-5 py-3 text-sm font-semibold text-white shadow-[0_8px_24px_rgba(20,83,45,0.2)] transition duration-200 hover:-translate-y-0.5 hover:shadow-[0_12px_32px_rgba(20,83,45,0.25)]">
                <div className="flex items-center gap-2">
                  <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path d="M3.609 1.814L13.792 12 3.61 22.186a.996.996 0 0 1-.61-.92V2.734a1 1 0 0 1 .609-.92zm10.89 10.893l2.302 2.302-10.937 6.333 8.635-8.635zm3.199-3.198l2.807 1.626a1 1 0 0 1 0 1.73l-2.808 1.626L15.206 12l2.492-2.491zM5.864 2.658L16.8 8.99l-2.302 2.302-8.634-8.634z" />
                  </svg>
                  Google Play
                </div>
              </div>
              <span className="text-xs text-muted-foreground">Sắp ra mắt trên App Store</span>
            </div>
          </div>
        </motion.div>

        {/* Main Grid */}
        <div className="grid gap-10 lg:grid-cols-4 lg:gap-12">

          {/* Column 1: Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-5"
          >
            <div className="flex items-center gap-2.5">
              <div className="h-9 w-9 rounded-xl bg-linear-to-br from-accent to-secondary shadow-[0_8px_20px_rgba(20,83,45,0.12)]" />
              <span className="font-heading text-xl font-bold text-foreground">PlantCare Hub</span>
            </div>
            <p className="text-sm leading-relaxed text-muted-foreground">
              Mỗi cây đều có câu chuyện riêng. Chúng tôi giúp bạn lắng nghe cây mình tốt hơn.
            </p>
            <div className="flex items-center gap-2">
              <a
                href="https://www.facebook.com/share/1bS4WtWhRb/?mibextid=wwXIfr"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-9 w-9 items-center justify-center rounded-xl border border-emerald-900/10 bg-white/80 text-muted-foreground shadow-[0_4px_12px_rgba(20,83,45,0.06)] transition-all duration-200 hover:-translate-y-0.5 hover:border-emerald-900/20 hover:text-foreground hover:shadow-[0_8px_20px_rgba(20,83,45,0.1)]"
                aria-label="Facebook"
              >
                <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                </svg>
              </a>
              <a
                href="mailto:support@plantcarehub.vn"
                className="flex h-9 w-9 items-center justify-center rounded-xl border border-emerald-900/10 bg-white/80 text-muted-foreground shadow-[0_4px_12px_rgba(20,83,45,0.06)] transition-all duration-200 hover:-translate-y-0.5 hover:border-emerald-900/20 hover:text-foreground hover:shadow-[0_8px_20px_rgba(20,83,45,0.1)]"
                aria-label="Email"
              >
                <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <rect x="2" y="4" width="20" height="16" rx="2" />
                  <path d="m22 7-10 6L2 7" />
                </svg>
              </a>
            </div>
          </motion.div>

          {/* Column 2: Contact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="space-y-4"
          >
            <h4 className="font-heading text-sm font-bold tracking-[0.02em] text-foreground">Liên hệ & Hỗ trợ</h4>
            <p className="text-sm leading-relaxed text-muted-foreground">
              Có câu hỏi hoặc muốn hợp tác? Liên hệ chúng tôi qua:
            </p>
            <div className="space-y-2">
              <a
                href="mailto:support@plantcarehub.vn"
                className="flex items-center gap-2 text-sm text-muted-foreground transition hover:text-foreground"
              >
                <svg className="h-4 w-4 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <rect x="2" y="4" width="20" height="16" rx="2" />
                  <path d="m22 7-10 6L2 7" />
                </svg>
                support@plantcarehub.vn
              </a>
              <a
                href="https://www.facebook.com/share/1bS4WtWhRb/?mibextid=wwXIfr"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-muted-foreground transition hover:text-foreground"
              >
                <svg className="h-4 w-4 shrink-0" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                </svg>
                Fanpage PlantCare Hub
              </a>
            </div>
          </motion.div>

          {/* Column 3: Legal */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="space-y-4"
          >
            <h4 className="font-heading text-sm font-bold tracking-[0.02em] text-foreground">Điều khoản & Quyền riêng tư</h4>
            <p className="text-sm leading-relaxed text-muted-foreground">
              Chúng tôi tôn trọng quyền riêng tư và cam kết bảo vệ dữ liệu của bạn.
            </p>
            <div className="flex flex-wrap gap-2 pt-1">
              <a
                href="/chinh-sach-quyen-rieng-tu"
                className="rounded-full border border-emerald-900/10 bg-white/80 px-4 py-1.5 text-xs font-semibold text-foreground shadow-[0_4px_12px_rgba(20,83,45,0.06)] transition-all duration-200 hover:-translate-y-0.5 hover:border-emerald-900/20 hover:shadow-[0_8px_20px_rgba(20,83,45,0.1)]"
              >
                Chính sách Quyền riêng tư
              </a>
              <a
                href="#"
                className="rounded-full border border-emerald-900/10 bg-white/80 px-4 py-1.5 text-xs font-semibold text-foreground shadow-[0_4px_12px_rgba(20,83,45,0.06)] transition-all duration-200 hover:-translate-y-0.5 hover:border-emerald-900/20 hover:shadow-[0_8px_20px_rgba(20,83,45,0.1)]"
              >
                Điều khoản Sử dụng
              </a>
            </div>
          </motion.div>

          {/* Column 4: Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="space-y-4"
          >
            <h4 className="font-heading text-sm font-bold tracking-[0.02em] text-foreground">Liên kết nhanh</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="group inline-flex items-center gap-1 text-sm text-muted-foreground transition hover:text-foreground"
                  >
                    {link.label}
                    <svg
                      className="h-3 w-3 opacity-0 -translate-x-1 transition-all duration-200 group-hover:translate-x-0 group-hover:opacity-100"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden="true"
                    >
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-12 flex flex-col gap-4 border-t border-emerald-900/10 pt-8 sm:flex-row sm:items-center sm:justify-between"
        >
          <p className="text-sm text-muted-foreground">
            &copy; 2026 PlantCare Hub. Đang trong giai đoạn thử nghiệm.
          </p>
          <div className="flex items-center gap-5">
            <a href="#" className="text-sm text-muted-foreground transition hover:text-foreground">
              Chính sách
            </a>
            <span className="h-3 w-px bg-emerald-900/15" />
            <a href="#" className="text-sm text-muted-foreground transition hover:text-foreground">
              Điều khoản
            </a>
            <span className="h-3 w-px bg-emerald-900/15" />
            <a
              href="https://www.facebook.com/share/1bS4WtWhRb/?mibextid=wwXIfr"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-muted-foreground transition hover:text-foreground"
            >
              Fanpage
            </a>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
