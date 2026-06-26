# PlantCare Hub Landing Auth Handoff

Scope: this is based only on the current mobile app source. No app code was modified or run. If a detail is not visible in source, it is marked as unknown.

## 1. API base URL

- Config file: `src/constants/config.ts`
- App env var: `EXPO_PUBLIC_API_BASE_URL`
- Current production base URL:
  - default in code: `https://api.plantcarehub.id.vn`
  - current `.env`: `EXPO_PUBLIC_API_BASE_URL=https://api.plantcarehub.id.vn`
- Behavior:
  - base URL is normalized
  - trailing slash is removed
  - if protocol is missing, code prepends `http://`

## 2. Login API

- Endpoint: `POST /api/auth/login`
- Source: `src/services/authApi.ts`
- Request body shape:

```json
{
  "email": "string",
  "password": "string"
}
```

- Response wrapper shape from `src/types/api.ts`:

```ts
type ApiResponse<T> = {
  success: boolean;
  message?: string | null;
  data: T;
  pagination?: PaginationMeta;
  errors?: string | unknown;
};
```

- Login response data shape from `src/types/auth.ts`:

```ts
type LoginData = {
  accessToken?: string;
  token?: string;
  jwt?: string;
  access_token?: string;
  refreshToken?: string;
  refresh_token?: string;
  expiresAt?: string;
  user?: CurrentUser;
};
```

- Possible access token field names:
  - `accessToken`
  - `token`
  - `jwt`
  - `access_token`
- Possible refresh token field names:
  - `refreshToken`
  - `refresh_token`
- Possible user field:
  - `data.user` or top-level `user` is accepted by the app login parsing logic in `src/hooks/useAuth.ts`
  - if login response has no usable user, app calls `GET /api/users/me`

## 3. Current user API

- Endpoint: `GET /api/users/me`
- Source: `src/services/userApi.ts`
- Method: `GET`
- Response shape:

```ts
ApiResponse<CurrentUser>
```

- `CurrentUser` shape from `src/types/user.ts`:

```ts
type CurrentUser = {
  userId?: number;
  id?: number | string;
  email: string;
  role?: string;
  status?: string;
  phone?: string;
  fullName?: string;
  address?: string;
  profileImage?: string;
  fcmToken?: string;
  devicePlatform?: string;
  createdAt?: string;
  hasPassword?: boolean;
};
```

## 4. Auth token behavior

- Local storage in mobile app:
  - `accessToken` -> Expo SecureStore key `accessToken`
  - `refreshToken` -> Expo SecureStore key `refreshToken`
  - `user` -> Expo SecureStore key `authUser`
  - `currentMode` -> Expo SecureStore key `currentMode`
- Source: `src/stores/authStore.ts`, `src/components/auth/AuthSessionBootstrap.tsx`
- Header attachment:
  - source: `src/services/apiClient.ts`
  - attached on non-auth endpoints only
  - exact format:

```http
Authorization: Bearer <accessToken>
```

- Auth endpoints excluded from bearer injection:
  - `/api/auth/login`
  - `/api/auth/register`
  - `/api/auth/google`
  - `/api/auth/reset-password`
- Visible 401/403 behavior:
  - during session restore, if `GET /api/users/me` returns `401` or `403`, app clears stored auth and mode, then treats user as logged out
  - source: `src/components/auth/AuthSessionBootstrap.tsx`
  - generic response interceptor does not auto-refresh tokens and does not globally auto-logout
  - no refresh-token exchange flow is visible in source

## 5. User fields and login success

- Visible current-user fields:
  - `userId`
  - `id`
  - `email`
  - `role`
  - `status`
  - `phone`
  - `fullName`
  - `address`
  - `profileImage`
  - `fcmToken`
  - `devicePlatform`
  - `createdAt`
  - `hasPassword`
- Additional older/general user type fields exist in `src/types/user.ts` `User`, including:
  - `name`
  - `avatar`
  - `avatarUrl`
  - `bio`
  - `mode`
  - `settings`
- How login success is determined in `src/hooks/useAuth.ts`:
  - login is treated as usable only if a token is found in one of:
    - `accessToken`
    - `token`
    - `jwt`
    - `access_token`
  - then app needs a usable user object with a non-empty `email`
  - if login response has no usable user, app tries `GET /api/users/me`
  - if no token or no user can be resolved, login flow throws an error
- User status handling:
  - `status` field is visible on `CurrentUser`
  - the login flow itself does not visibly branch on `status`
  - admin UI has label helpers for `Active`, `Inactive`, `Locked`
  - whether backend blocks non-`Active` login is not implemented in visible mobile login code and should be treated as backend behavior, not FE logic

## 6. Logout behavior

- Source: `src/hooks/useAuth.ts`, `src/stores/authStore.ts`
- Logout clears:
  - SecureStore `accessToken`
  - SecureStore `refreshToken`
  - SecureStore `authUser`
  - SecureStore `currentMode`
  - Zustand auth state
  - subscription store
  - mode store
  - React Query auth/currentUser/profile/subscription caches
- Backend logout endpoint:
  - unknown
  - no `/api/auth/logout` call is visible in current app source

## 7. Google login note

- Supported in app
- Endpoint: `POST /api/auth/google`
- Request body:

```json
{
  "idToken": "google-id-token"
}
```

- Source: `src/services/authApi.ts`, `src/hooks/useAuth.ts`, `src/screens/auth/LoginScreen.tsx`
- Flow:
  - mobile app gets Google `idToken`
  - app posts `{ idToken }` to `/api/auth/google`
  - response is handled through the same token/user extraction flow as normal login
- Recommendation for landing page:
  - can skip Google login for now
  - mobile flow depends on Google SDK setup and is more complex than basic email/password login

## 8. Files to inspect/reference

- API base URL:
  - `src/constants/config.ts`
  - `.env`
- API client:
  - `src/services/apiClient.ts`
- Auth API:
  - `src/services/authApi.ts`
- User API:
  - `src/services/userApi.ts`
- Auth store/session persistence:
  - `src/stores/authStore.ts`
  - `src/components/auth/AuthSessionBootstrap.tsx`
- Auth hooks:
  - `src/hooks/useAuth.ts`
  - `src/hooks/useCurrentUser.ts`
- Login screen:
  - `src/screens/auth/LoginScreen.tsx`
- Types:
  - `src/types/auth.ts`
  - `src/types/user.ts`
  - `src/types/api.ts`
- Role/status helpers:
  - `src/utils/admin.ts`
  - `src/utils/apiError.ts`

## 9. Landing page implementation recommendation

- Keep current landing page sections unchanged
- Add a login modal or dedicated login page using `POST /api/auth/login`
- For MVP, store `accessToken`, optional `refreshToken`, and current user in `localStorage`
- Build a small API client with:
  - base URL from a web env var
  - `Authorization: Bearer <accessToken>` on protected requests
- After login:
  - extract token from `accessToken`, `token`, `jwt`, or `access_token`
  - extract refresh token from `refreshToken` or `refresh_token` if present
  - use login `user` if present
  - otherwise call `GET /api/users/me`
- Logged-out UI:
  - show `Đăng nhập`
- Logged-in UI:
  - replace with user `fullName`, else `email`
  - clicking opens dropdown:
    - `Xóa tài khoản đăng nhập`
    - `Logout`
- Logout:
  - clear local token/user state
  - return to logged-out state
- On `401` or `403` from protected endpoints:
  - clear local session
  - ask user to log in again

## 10. Planned web-only account deletion endpoint

This is a new landing-page-only feature. It is not implemented in current mobile app source and was not inspected there.

- Endpoint: `POST /api/auth/me/delete`
- Required header:

```http
Authorization: Bearer <accessToken>
```

- Request body:

```json
{
  "email": "user@example.com",
  "password": "current-password",
  "confirmDeletion": true
}
```

- Expected backend behavior:
  - user must be logged in
  - backend checks token, user exists, and `Status == "Active"`
  - backend checks email matches current account email
  - backend requires account to have a password
  - if Google-only account has no password, user must set password first
  - backend verifies password
  - backend changes `Status` to `Deleted`
  - backend clears `FcmToken` and `DevicePlatform`
  - backend invalidates unused reset-password token
  - normal login and Google login already block non-Active users

- Landing page UI recommendation:
  - show `Xóa tài khoản đăng nhập` only when logged in
  - open a confirmation modal/form with:
    - `email`
    - `current password`
    - confirmation checkbox
  - submit to `POST /api/auth/me/delete` with bearer token
  - on success:
    - clear local session
    - show success message
  - on `401` or `403`:
    - clear local session
    - ask user to log in again
  - if backend returns validation error:
    - show backend message
  - do not hardcode token
  - do not store password after submit

## Unknowns

- Exact backend login response example payload
- Exact backend current-user response example payload
- Whether backend ever returns `user` at top level, in `data.user`, or both in production
- Whether backend supports token refresh/rotation
- Whether backend exposes a logout endpoint
- Whether backend blocks non-`Active` users on every auth path is not visible in current app code
