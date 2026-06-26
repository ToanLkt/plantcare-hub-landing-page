'use client';

import Link from 'next/link';
import { FormEvent, useState } from 'react';
import { LoginModal } from '@/components/LoginModal';
import { clearSession, deleteCurrentAccount } from '@/lib/landing-auth';
import { useLandingSession } from '@/lib/use-landing-session';

type PendingDelete = {
  email: string;
  password: string;
};

export function AccountDeletionForm() {
  const { session, ready } = useLandingSession();
  const [loginOpen, setLoginOpen] = useState(false);
  const [password, setPassword] = useState('');
  const [confirmed, setConfirmed] = useState(false);
  const [message, setMessage] = useState('');
  const [modalMessage, setModalMessage] = useState('');
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);
  const [pendingDelete, setPendingDelete] = useState<PendingDelete | null>(null);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const email = String(formData.get('email') || '').trim();
    setMessage('');
    setModalMessage('');

    if (!session) {
      setMessage('Bạn cần đăng nhập trước khi xóa tài khoản.');
      return;
    }
    if (!email) {
      setMessage('Vui lòng nhập email.');
      return;
    }
    if (!password) {
      setMessage('Vui lòng nhập mật khẩu hiện tại.');
      return;
    }
    if (!confirmed) {
      setMessage('Vui lòng xác nhận rằng bạn hiểu tài khoản sẽ bị xóa/tạm khóa.');
      return;
    }

    setPendingDelete({ email, password });
  };

  const confirmDelete = async () => {
    if (!session || !pendingDelete) return;
    setMessage('');
    setModalMessage('');

    try {
      setLoading(true);
      await deleteCurrentAccount(session, pendingDelete.email, pendingDelete.password);
      setPendingDelete(null);
      setPassword('');
      clearSession();
      setSuccess(true);
      setMessage('Tài khoản đã được chuyển sang trạng thái Deleted. Phiên đăng nhập đã được xóa. Bạn sẽ được đưa về trang chủ.');
      window.setTimeout(() => {
        window.location.href = '/';
      }, 1800);
    } catch (error) {
      setPassword('');
      setPendingDelete(null);
      const status = error instanceof Error ? (error as Error & { status?: number }).status : undefined;
      if (status === 401 || status === 403) {
        clearSession();
        setMessage('Phiên đăng nhập không hợp lệ hoặc đã hết hạn. Vui lòng đăng nhập lại.');
        return;
      }
      if (status === 404) {
        setMessage('Chức năng xóa tài khoản chưa khả dụng trên máy chủ. Vui lòng thử lại sau hoặc liên hệ PlantCare Hub.');
        return;
      }
      const errorMessage = error instanceof Error ? error.message : 'Không thể xóa tài khoản.';
      setModalMessage(errorMessage);
      setMessage(errorMessage);
    } finally {
      setLoading(false);
    }
  };

  if (!ready) {
    return <main className="min-h-screen bg-[#f8fbf7]" />;
  }

  return (
    <main className="min-h-screen overflow-hidden bg-[#f8fbf7]">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-72 bg-[radial-gradient(circle_at_30%_0%,rgba(92,224,180,0.22),transparent_34%),radial-gradient(circle_at_78%_8%,rgba(165,243,216,0.2),transparent_30%)]" />
      <div className="relative mx-auto max-w-screen-2xl px-6 py-12 md:px-10 md:py-16 lg:px-14 xl:px-16">
        <div className="mx-auto max-w-6xl space-y-8">
          <header className="rounded-[8px] border border-emerald-900/10 bg-white/65 p-6 shadow-[0_22px_70px_rgba(15,43,30,0.08)] backdrop-blur-xl md:p-8">
            <Link href="/" className="mb-7 inline-flex text-sm font-semibold text-emerald-800 underline underline-offset-4 transition hover:text-foreground">
              Quay lại trang chủ
            </Link>
            <div className="space-y-4">
              <span className="inline-flex rounded-[6px] border border-emerald-900/10 bg-emerald-50 px-3 py-1 text-xs font-bold text-emerald-900">
                Tài khoản
              </span>
              <div className="max-w-3xl space-y-3">
                <h1 className="text-balance font-heading text-3xl font-bold leading-tight text-foreground md:text-5xl">
                  Xóa tài khoản PlantCare Hub
                </h1>
                <p className="max-w-2xl text-sm leading-relaxed text-muted-foreground md:text-base">
                  Hành động này sẽ chuyển tài khoản của bạn sang trạng thái Deleted và không thể đăng nhập lại. Vui lòng kiểm tra kỹ email, mật khẩu và xác nhận trước khi tiếp tục.
                </p>
              </div>
            </div>
          </header>

          <div className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
            <section className="space-y-6">
              

              <div className="rounded-[8px] border border-red-200/80 bg-red-50/70 p-6 shadow-[0_18px_50px_rgba(127,29,29,0.07)]">
                <h2 className="font-heading text-lg font-bold text-red-900">Điều gì sẽ xảy ra?</h2>
                <ul className="mt-4 list-disc space-y-2 pl-5 text-sm leading-relaxed text-red-900/78">
                  <li>Hệ thống kiểm tra đăng nhập còn hợp lệ.</li>
                  <li>Email phải đúng với user đang đăng nhập.</li>
                  <li>Mật khẩu phải đúng.</li>
                  <li>Nếu tài khoản Google chưa có mật khẩu, bạn sẽ phải quay lại app để đặt mật khẩu.</li>
                  <li>Yêu cầu xóa chỉ được gửi khi bạn đang đăng nhập và cung cấp đúng thông tin tài khoản hiện tại.</li>
                  <li>Sau khi backend xác nhận, phiên đăng nhập trên web sẽ được xóa khỏi thiết bị này</li>
                </ul>
              </div>
            </section>

            <section className="rounded-[8px] border border-emerald-900/10 bg-white/75 p-6 shadow-[0_24px_70px_rgba(15,43,30,0.1)] backdrop-blur-xl">
              {!session ? (
                <div>
                  <h2 className="font-heading text-xl font-bold text-foreground">Cần đăng nhập</h2>
                  <p className="mt-3 text-sm font-medium leading-relaxed text-muted-foreground">
                    Bạn cần đăng nhập trước khi xóa tài khoản.
                  </p>
                  <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                    <button
                      type="button"
                      onClick={() => setLoginOpen(true)}
                      className="inline-flex min-h-11 items-center justify-center rounded-full bg-[#1a1a1a] px-6 py-3 text-sm font-bold text-white transition hover:-translate-y-0.5 hover:bg-black active:scale-[0.98]"
                    >
                      Đăng nhập
                    </button>
                    <Link
                      href="/"
                      className="inline-flex min-h-11 items-center justify-center rounded-full border border-emerald-900/12 bg-white px-6 py-3 text-sm font-bold text-foreground transition hover:-translate-y-0.5 hover:bg-emerald-50 active:scale-[0.98]"
                    >
                      Quay lại trang chủ
                    </Link>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <h2 className="font-heading text-xl font-bold text-foreground">Xác nhận thông tin</h2>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                      Nhập email và mật khẩu hiện tại để gửi yêu cầu xóa tài khoản.
                    </p>
                  </div>

                  <label className="block space-y-2 text-sm font-semibold text-foreground">
                    <span>Email</span>
                    <input
                      name="email"
                      defaultValue={session.user.email}
                      type="email"
                      autoComplete="email"
                      className="w-full rounded-[8px] border border-emerald-900/10 bg-white px-4 py-3 text-sm font-medium text-foreground outline-none transition focus:border-emerald-600 focus:ring-4 focus:ring-emerald-500/10"
                    />
                  </label>

                  <label className="block space-y-2 text-sm font-semibold text-foreground">
                    <span>Mật khẩu hiện tại</span>
                    <input
                      value={password}
                      onChange={(event) => setPassword(event.target.value)}
                      type="password"
                      autoComplete="current-password"
                      className="w-full rounded-[8px] border border-emerald-900/10 bg-white px-4 py-3 text-sm font-medium text-foreground outline-none transition focus:border-emerald-600 focus:ring-4 focus:ring-emerald-500/10"
                    />
                  </label>

                  <label className="flex items-start gap-3 rounded-[8px] border border-emerald-900/10 bg-emerald-50/45 p-4 text-sm font-medium leading-relaxed text-muted-foreground">
                    <input
                      checked={confirmed}
                      onChange={(event) => {
                        setConfirmed(event.target.checked);
                        if (event.target.checked && message.startsWith('Vui lòng xác nhận')) setMessage('');
                      }}
                      type="checkbox"
                      className="mt-1 h-4 w-4 rounded border-emerald-900/20 text-emerald-700"
                    />
                    <span>Tôi hiểu rằng tài khoản sẽ bị xóa/tạm khóa và không thể đăng nhập lại.</span>
                  </label>

                  {message ? (
                    <p className={`rounded-[8px] px-4 py-3 text-sm font-medium ${success ? 'bg-emerald-50 text-emerald-800' : 'bg-red-50 text-red-700'}`}>
                      {message}
                    </p>
                  ) : null}

                  <div className="flex flex-col gap-3 pt-1 sm:flex-row">
                    <button
                      type="submit"
                      disabled={loading || success}
                      className="inline-flex min-h-11 items-center justify-center rounded-full border border-red-700 bg-red-700 px-6 py-3 text-sm font-bold text-white shadow-[0_14px_32px_rgba(185,28,28,0.22)] transition hover:-translate-y-0.5 hover:bg-red-800 active:scale-[0.98] disabled:cursor-not-allowed disabled:opacity-60 disabled:hover:translate-y-0"
                    >
                      {loading ? 'Đang xử lý...' : 'Xác nhận xóa tài khoản'}
                    </button>
                    <Link
                      href="/"
                      className="inline-flex min-h-11 items-center justify-center rounded-full border border-emerald-900/12 bg-white px-6 py-3 text-sm font-bold text-foreground transition hover:-translate-y-0.5 hover:bg-emerald-50 active:scale-[0.98]"
                    >
                      Quay lại trang chủ
                    </Link>
                  </div>
                </form>
              )}
            </section>
          </div>
        </div>
      </div>

      {pendingDelete ? (
        <div className="fixed inset-0 z-[110] flex items-center justify-center bg-emerald-950/40 px-4 py-6 backdrop-blur-sm">
          <div className="w-full max-w-lg rounded-[8px] border border-red-200 bg-[#fffaf9] p-6 shadow-[0_28px_80px_rgba(127,29,29,0.18)]">
            <div className="space-y-3">
              <span className="inline-flex rounded-[6px] border border-red-200 bg-red-50 px-3 py-1 text-xs font-bold text-red-800">
                Hành động nhạy cảm
              </span>
              <h2 className="font-heading text-2xl font-bold text-foreground">Xác nhận xóa tài khoản</h2>
              <p className="text-sm leading-relaxed text-muted-foreground">
                Bạn có chắc chắn muốn xóa tài khoản PlantCare Hub này không? Sau khi xác nhận, tài khoản sẽ không thể đăng nhập lại.
              </p>
              {modalMessage ? <p className="rounded-[8px] bg-red-50 px-4 py-3 text-sm font-medium text-red-700">{modalMessage}</p> : null}
            </div>
            <div className="mt-6 flex flex-col-reverse gap-3 sm:flex-row sm:justify-end">
              <button
                type="button"
                onClick={() => {
                  setPendingDelete(null);
                  setModalMessage('');
                }}
                disabled={loading}
                className="inline-flex min-h-11 items-center justify-center rounded-full border border-emerald-900/12 bg-white px-6 py-3 text-sm font-bold text-foreground transition hover:-translate-y-0.5 hover:bg-emerald-50 active:scale-[0.98] disabled:cursor-not-allowed disabled:opacity-60"
              >
                Hủy
              </button>
              <button
                type="button"
                onClick={confirmDelete}
                disabled={loading}
                className="inline-flex min-h-11 items-center justify-center rounded-full border border-red-700 bg-red-700 px-6 py-3 text-sm font-bold text-white shadow-[0_14px_32px_rgba(185,28,28,0.22)] transition hover:-translate-y-0.5 hover:bg-red-800 active:scale-[0.98] disabled:cursor-not-allowed disabled:opacity-60 disabled:hover:translate-y-0"
              >
                {loading ? 'Đang xóa...' : 'Xóa tài khoản'}
              </button>
            </div>
          </div>
        </div>
      ) : null}

      <LoginModal open={loginOpen} onClose={() => setLoginOpen(false)} />
    </main>
  );
}
