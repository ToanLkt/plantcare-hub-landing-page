'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import { DOWNLOAD_TOAST_EVENT, DOWNLOAD_TOAST_MESSAGE } from '@/lib/download-toast';

export function DownloadToast() {
  const [visible, setVisible] = useState(false);
  const [message, setMessage] = useState(DOWNLOAD_TOAST_MESSAGE);
  const timeoutRef = useRef<number | null>(null);

  useEffect(() => {
    const showToast = (event: Event) => {
      const detail = event instanceof CustomEvent && typeof event.detail === 'string' ? event.detail : DOWNLOAD_TOAST_MESSAGE;
      setMessage(detail);
      setVisible(true);

      if (timeoutRef.current) window.clearTimeout(timeoutRef.current);
      timeoutRef.current = window.setTimeout(() => setVisible(false), 3000);
    };

    window.addEventListener(DOWNLOAD_TOAST_EVENT, showToast);
    return () => {
      window.removeEventListener(DOWNLOAD_TOAST_EVENT, showToast);
      if (timeoutRef.current) window.clearTimeout(timeoutRef.current);
    };
  }, []);

  return (
    <AnimatePresence>
      {visible ? (
        <motion.div
          initial={{ opacity: 0, y: 18, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 12, scale: 0.98 }}
          transition={{ duration: 0.24, ease: [0.22, 1, 0.36, 1] }}
          role="status"
          aria-live="polite"
          className="fixed bottom-6 left-1/2 z-[120] w-[calc(100%-2rem)] max-w-sm -translate-x-1/2 rounded-[8px] border border-emerald-900/10 bg-[#f8fbf7]/95 px-5 py-4 text-center text-sm font-semibold text-foreground shadow-[0_18px_50px_rgba(15,43,30,0.16)] backdrop-blur-xl sm:bottom-8"
        >
          {message}
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
