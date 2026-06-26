'use client';

export const DOWNLOAD_TOAST_MESSAGE = 'Phiên bản chính thức sẽ ra mắt sớm.';
export const DOWNLOAD_TOAST_EVENT = 'plantcare-download-toast';

export function showDownloadToast() {
  window.dispatchEvent(new CustomEvent(DOWNLOAD_TOAST_EVENT, { detail: DOWNLOAD_TOAST_MESSAGE }));
}
