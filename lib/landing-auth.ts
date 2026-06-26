'use client';

export type CurrentUser = {
  userId?: number;
  id?: number | string;
  email: string;
  role?: string;
  status?: string;
  phone?: string;
  fullName?: string;
  address?: string;
  profileImage?: string;
  createdAt?: string;
  hasPassword?: boolean;
};

export type LandingSession = {
  accessToken: string;
  refreshToken?: string;
  user: CurrentUser;
};

type ApiResponse<T> = {
  success?: boolean;
  message?: string | null;
  data?: T;
  errors?: unknown;
  user?: CurrentUser;
};

const ACCESS_TOKEN_KEY = 'accessToken';
const REFRESH_TOKEN_KEY = 'refreshToken';
const USER_KEY = 'authUser';
const CURRENT_MODE_KEY = 'currentMode';
const SESSION_EVENT = 'plantcare-auth-session';

export const apiBaseUrl =
  process.env.NEXT_PUBLIC_API_BASE_URL?.replace(/\/$/, '') || 'https://api.plantcarehub.id.vn';

function isUser(value: unknown): value is CurrentUser {
  return Boolean(value && typeof value === 'object' && 'email' in value && typeof (value as CurrentUser).email === 'string');
}

function extractAccessToken(data: Record<string, unknown>) {
  return [data.accessToken, data.token, data.jwt, data.access_token].find((value) => typeof value === 'string' && value.length > 0) as string | undefined;
}

function extractRefreshToken(data: Record<string, unknown>) {
  return [data.refreshToken, data.refresh_token].find((value) => typeof value === 'string' && value.length > 0) as string | undefined;
}

export function getStoredSession(): LandingSession | null {
  if (typeof window === 'undefined') return null;
  const accessToken = localStorage.getItem(ACCESS_TOKEN_KEY);
  const userRaw = localStorage.getItem(USER_KEY);
  if (!accessToken || !userRaw) return null;

  try {
    const user = JSON.parse(userRaw);
    if (!isUser(user)) return null;
    return {
      accessToken,
      refreshToken: localStorage.getItem(REFRESH_TOKEN_KEY) || undefined,
      user,
    };
  } catch {
    return null;
  }
}

export function storeSession(session: LandingSession) {
  localStorage.setItem(ACCESS_TOKEN_KEY, session.accessToken);
  if (session.refreshToken) localStorage.setItem(REFRESH_TOKEN_KEY, session.refreshToken);
  else localStorage.removeItem(REFRESH_TOKEN_KEY);
  localStorage.setItem(USER_KEY, JSON.stringify(session.user));
  window.dispatchEvent(new Event(SESSION_EVENT));
}

export function clearSession() {
  localStorage.removeItem(ACCESS_TOKEN_KEY);
  localStorage.removeItem(REFRESH_TOKEN_KEY);
  localStorage.removeItem(USER_KEY);
  localStorage.removeItem(CURRENT_MODE_KEY);
  document.cookie = `${ACCESS_TOKEN_KEY}=; Max-Age=0; path=/`;
  document.cookie = `${REFRESH_TOKEN_KEY}=; Max-Age=0; path=/`;
  window.dispatchEvent(new Event(SESSION_EVENT));
}

export function onSessionChange(callback: () => void) {
  window.addEventListener(SESSION_EVENT, callback);
  window.addEventListener('storage', callback);
  return () => {
    window.removeEventListener(SESSION_EVENT, callback);
    window.removeEventListener('storage', callback);
  };
}

async function parseApiResponse<T>(response: Response): Promise<ApiResponse<T>> {
  const text = await response.text();
  if (!text) return {};
  try {
    return JSON.parse(text) as ApiResponse<T>;
  } catch {
    return { message: text };
  }
}

function getErrorMessage(payload: ApiResponse<unknown>, fallback: string) {
  if (typeof payload.message === 'string' && payload.message.trim()) return payload.message;
  if (typeof payload.errors === 'string' && payload.errors.trim()) return payload.errors;
  if (Array.isArray(payload.errors) && payload.errors.length > 0) return payload.errors.join(', ');
  return fallback;
}

export async function fetchCurrentUser(accessToken: string) {
  const response = await fetch(`${apiBaseUrl}/api/users/me`, {
    headers: { Authorization: `Bearer ${accessToken}` },
  });
  const payload = await parseApiResponse<CurrentUser>(response);
  const user = payload.data || payload.user;
  if (!response.ok || !isUser(user)) {
    throw new Error(getErrorMessage(payload, 'Không thể tải thông tin tài khoản.'));
  }
  return user;
}

export async function loginWithEmail(email: string, password: string) {
  const response = await fetch(`${apiBaseUrl}/api/auth/login`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email, password }),
  });
  const payload = await parseApiResponse<Record<string, unknown> & { user?: CurrentUser }>(response);
  const data = (payload.data || {}) as Record<string, unknown> & { user?: CurrentUser };
  const accessToken = extractAccessToken(data);

  if (!response.ok || !accessToken) {
    throw new Error(getErrorMessage(payload, 'Đăng nhập không thành công.'));
  }

  const responseUser = isUser(data.user) ? data.user : isUser(payload.user) ? payload.user : null;
  const user = responseUser || (await fetchCurrentUser(accessToken));
  const session = {
    accessToken,
    refreshToken: extractRefreshToken(data),
    user,
  };
  storeSession(session);
  return session;
}

export async function deleteCurrentAccount(session: LandingSession, email: string, password: string, confirmDeletion = true) {
  const response = await fetch(`${apiBaseUrl}/api/auth/me/delete`, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${session.accessToken}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ email, password, confirmDeletion }),
  });
  const payload = await parseApiResponse<unknown>(response);
  if (!response.ok) {
    const error = new Error(getErrorMessage(payload, 'Không thể xóa tài khoản.'));
    (error as Error & { status?: number }).status = response.status;
    throw error;
  }
  return payload;
}
