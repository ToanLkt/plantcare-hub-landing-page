'use client';

import { FormEvent, useState } from 'react';
import { loginWithEmail } from '@/lib/landing-auth';

type LoginModalProps = {
  open: boolean;
  onClose: () => void;
  onSuccess?: () => void;
};

export function LoginModal({ open, onClose, onSuccess }: LoginModalProps) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);

  if (!open) return null;

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setMessage('');

    if (!email.trim() || !password) {
      setMessage('Vui lòng nhập email và mật khẩu.');
      return;
    }

    try {
      setLoading(true);
      await loginWithEmail(email.trim(), password);
      setPassword('');
      onSuccess?.();
      onClose();
    } catch (error) {
      setMessage(error instanceof Error ? error.message : 'Đăng nhập không thành công.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-emerald-950/35 px-4 py-6 backdrop-blur-sm">
      <div className="w-full max-w-md rounded-[8px] border border-emerald-900/10 bg-[#f8fbf7] p-6 shadow-[0_24px_70px_rgba(15,43,30,0.18)]">
        <div className="mb-6 flex items-start justify-between gap-4">
          <div className="space-y-1">
            <h2 className="font-heading text-2xl font-bold text-foreground">Đăng nhập</h2>
            <p className="text-sm leading-relaxed text-muted-foreground">
              Sử dụng tài khoản PlantCare Hub của bạn để tiếp tục.
            </p>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="rounded-full px-3 py-1 text-xl leading-none text-foreground/55 transition hover:bg-emerald-900/5 hover:text-foreground"
            aria-label="Đóng"
          >
            ×
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <label className="block space-y-2 text-sm font-semibold text-foreground">
            <span>Email</span>
            <input
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              type="email"
              autoComplete="email"
              className="w-full rounded-[8px] border border-emerald-900/10 bg-white px-4 py-3 text-sm font-medium text-foreground outline-none transition focus:border-emerald-600 focus:ring-4 focus:ring-emerald-500/10"
            />
          </label>

          <label className="block space-y-2 text-sm font-semibold text-foreground">
            <span>Mật khẩu</span>
            <input
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              type="password"
              autoComplete="current-password"
              className="w-full rounded-[8px] border border-emerald-900/10 bg-white px-4 py-3 text-sm font-medium text-foreground outline-none transition focus:border-emerald-600 focus:ring-4 focus:ring-emerald-500/10"
            />
          </label>

          {message ? <p className="rounded-[8px] bg-red-50 px-4 py-3 text-sm font-medium text-red-700">{message}</p> : null}

          <button
            type="submit"
            disabled={loading}
            className="inline-flex min-h-11 w-full items-center justify-center rounded-full bg-[#1a1a1a] px-6 py-3 text-sm font-bold text-white shadow-[0_14px_36px_rgba(0,0,0,0.18)] transition hover:-translate-y-0.5 hover:bg-black disabled:cursor-not-allowed disabled:opacity-60 disabled:hover:translate-y-0"
          >
            {loading ? 'Đang đăng nhập...' : 'Đăng nhập'}
          </button>
        </form>
      </div>
    </div>
  );
}
