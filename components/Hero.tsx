'use client';

import { motion } from 'framer-motion';
import { useRef, useState } from 'react';
import SplineHero from './SplineHero';

const DEFAULT_ZOOM = 1.08;
const MIN_ZOOM = 1;
const MAX_ZOOM = 1.25;
const STEP = 0.05;

function ZoomControl({
  zoom,
  minZoom,
  maxZoom,
  onZoomIn,
  onZoomOut,
  onReset,
  onChange,
}: {
  zoom: number;
  minZoom: number;
  maxZoom: number;
  onZoomIn: () => void;
  onZoomOut: () => void;
  onReset: () => void;
  onChange: (value: number) => void;
}) {
  const trackRef = useRef<HTMLDivElement | null>(null);
  const [isDragging, setIsDragging] = useState(false);
  const progress = ((zoom - minZoom) / (maxZoom - minZoom)) * 100;

  const updateZoomFromPointer = (clientY: number) => {
    const track = trackRef.current;
    if (!track) return;

    const rect = track.getBoundingClientRect();
    const rawProgress = 1 - (clientY - rect.top) / rect.height;
    const clampedProgress = Math.min(1, Math.max(0, rawProgress));
    const nextZoom = minZoom + clampedProgress * (maxZoom - minZoom);

    onChange(Number(nextZoom.toFixed(2)));
  };

  return (
    <div className="pointer-events-auto absolute right-6 top-1/2 z-30 hidden -translate-y-1/2 flex-col items-center gap-3 md:flex xl:right-8">
      <div className="rounded-full border border-emerald-900/10 bg-white/72 px-3.5 py-2 text-[10px] font-semibold uppercase tracking-[0.24em] text-emerald-950/55 shadow-[0_10px_30px_rgba(20,83,45,0.08)] backdrop-blur-2xl transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]">
        Thu phóng 3D
      </div>

      <div className="flex flex-col items-center gap-3 rounded-[32px] border border-emerald-900/10 bg-white/78 px-3 py-4 shadow-[0_22px_70px_rgba(20,83,45,0.16)] backdrop-blur-2xl transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]">
        <button
          type="button"
          onClick={onZoomIn}
          aria-label="Phóng to mô hình 3D"
          className="flex h-11 w-11 items-center justify-center rounded-full bg-emerald-950 text-lg font-semibold leading-none text-white shadow-[0_12px_28px_rgba(6,78,59,0.18)] transition duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-0.5 hover:scale-[1.03] hover:bg-emerald-900 active:translate-y-0 active:scale-95"
        >
          +
        </button>

        <div className="relative flex h-44 w-16 items-center justify-center rounded-[28px] border border-emerald-900/5 bg-emerald-50/80 shadow-[inset_0_1px_0_rgba(255,255,255,0.78)]">
          <div
            ref={trackRef}
            role="slider"
            tabIndex={0}
            aria-label="Điều chỉnh độ phóng mô hình 3D"
            aria-valuemin={Math.round(minZoom * 100)}
            aria-valuemax={Math.round(maxZoom * 100)}
            aria-valuenow={Math.round(zoom * 100)}
            onPointerDown={(event) => {
              setIsDragging(true);
              event.currentTarget.setPointerCapture(event.pointerId);
              updateZoomFromPointer(event.clientY);
            }}
            onPointerMove={(event) => {
              if (!isDragging) return;
              updateZoomFromPointer(event.clientY);
            }}
            onPointerUp={(event) => {
              setIsDragging(false);
              event.currentTarget.releasePointerCapture(event.pointerId);
            }}
            onPointerCancel={() => setIsDragging(false)}
            onKeyDown={(event) => {
              if (event.key === 'ArrowUp' || event.key === 'ArrowRight') {
                event.preventDefault();
                onZoomIn();
              }
              if (event.key === 'ArrowDown' || event.key === 'ArrowLeft') {
                event.preventDefault();
                onZoomOut();
              }
              if (event.key === 'Home') {
                event.preventDefault();
                onChange(minZoom);
              }
              if (event.key === 'End') {
                event.preventDefault();
                onChange(maxZoom);
              }
            }}
            className="relative h-32 w-8 cursor-grab touch-none rounded-full outline-none focus-visible:ring-2 focus-visible:ring-emerald-900/25 active:cursor-grabbing"
          >
            <div className="absolute left-1/2 top-0 h-full w-1.5 -translate-x-1/2 rounded-full bg-emerald-900/10" />
            <div
              className="absolute bottom-0 left-1/2 w-1.5 -translate-x-1/2 rounded-full bg-emerald-900 transition-[height] duration-200 ease-[cubic-bezier(0.22,1,0.36,1)]"
              style={{ height: `${progress}%` }}
            />
            <div className="absolute left-1/2 top-0 h-full w-px -translate-x-1/2 bg-[repeating-linear-gradient(to_bottom,rgba(6,78,59,0.18)_0px,rgba(6,78,59,0.18)_1px,transparent_1px,transparent_12px)]" />
            <div
              className="absolute left-1/2 h-5 w-5 -translate-x-1/2 translate-y-1/2 rounded-full border border-emerald-900/10 bg-white shadow-[0_10px_24px_rgba(20,83,45,0.22)] transition-[bottom,transform,box-shadow] duration-200 ease-[cubic-bezier(0.22,1,0.36,1)]"
              style={{ bottom: `${progress}%` }}
            />
          </div>

          <div
            className="pointer-events-none absolute left-1/2 min-w-14 -translate-x-1/2 translate-y-1/2 rounded-full border border-emerald-900/10 bg-white/95 px-2.5 py-1.5 text-center shadow-[0_10px_28px_rgba(20,83,45,0.14)] transition-[bottom,transform,opacity] duration-200 ease-[cubic-bezier(0.22,1,0.36,1)]"
            style={{ bottom: `${progress}%` }}
          >
            <span className="block text-sm font-semibold leading-none tracking-[-0.04em] text-emerald-950">
            {Math.round(zoom * 100)}%
          </span>
          </div>
        </div>

        <button
          type="button"
          onClick={onZoomOut}
          aria-label="Thu nhỏ mô hình 3D"
          className="flex h-11 w-11 items-center justify-center rounded-full bg-white text-lg font-semibold leading-none text-emerald-950 shadow-sm ring-1 ring-emerald-900/10 transition duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-0.5 hover:scale-[1.03] hover:bg-emerald-50 active:translate-y-0 active:scale-95"
        >
          -
        </button>

        <button
          type="button"
          onClick={onReset}
          className="rounded-full px-3 py-1.5 text-xs font-semibold text-emerald-900/65 transition duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-px hover:bg-emerald-50 hover:text-emerald-950 active:translate-y-0 active:scale-95"
        >
          Đặt lại
        </button>
      </div>
    </div>
  );
}

export function Hero() {
  const [zoom, setZoom] = useState(DEFAULT_ZOOM);

  const zoomIn = () => {
    setZoom((value) => Math.min(MAX_ZOOM, Number((value + STEP).toFixed(2))));
  };

  const zoomOut = () => {
    setZoom((value) => Math.max(MIN_ZOOM, Number((value - STEP).toFixed(2))));
  };

  const resetZoom = () => {
    setZoom(DEFAULT_ZOOM);
  };

  const setZoomValue = (value: number) => {
    setZoom(Math.min(MAX_ZOOM, Math.max(MIN_ZOOM, value)));
  };

  return (
    <section className="relative isolate min-h-[calc(100vh-80px)] w-full overflow-hidden bg-[#f8fbf7]">
      {/* Subtle gradient background inspired by garden atmosphere */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-br from-secondary/10 to-transparent rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-gradient-to-tl from-accent/10 to-transparent rounded-full blur-3xl" />
      </div>

      <SplineHero zoom={zoom} />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-[1] h-full w-full bg-[#f8fbf7]/10"
      />

      <div
  aria-hidden="true"
  className="pointer-events-none absolute inset-0 z-[2] h-full w-full bg-[linear-gradient(90deg,rgba(248,251,247,0.59)_0%,rgba(248,251,247,0.58)_22%,rgba(248,251,247,0.50)_40%,rgba(248,251,247,0.35)_58%,rgba(248,251,247,0.18)_74%,rgba(248,251,247,0.06)_88%,rgba(248,251,247,0.01)_100%)]"
/>

<div
  aria-hidden="true"
  className="pointer-events-none absolute bottom-4 right-4 z-20 rounded-full border border-emerald-900/10 bg-white/80 px-4 py-2 text-xs font-semibold text-emerald-950/70 shadow-[0_10px_30px_rgba(20,83,45,0.08)] backdrop-blur-xl transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]"
>
  PlantCare 3D
</div>

      <div className="pointer-events-none relative z-10 mx-auto flex min-h-[calc(100vh-80px)] w-full max-w-[1600px] items-center px-6 pb-16 pt-28 md:px-10 md:pb-20 md:pt-32 lg:px-14 xl:px-16">
        {/* Left column - text content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="pointer-events-auto max-w-[680px] space-y-12"
        >
          <h1 className="text-balance font-heading text-5xl font-black leading-[1.02] tracking-[-0.045em] text-foreground sm:text-6xl lg:text-7xl xl:text-8xl">
            Sẵn sàng chăm cây thông minh hơn mỗi ngày?
          </h1>

          <p className="max-w-xl text-sm font-medium leading-relaxed text-muted-foreground sm:text-base">
            Tải PlantCare Hub để chẩn đoán bệnh cây bằng AI, nhận nhắc lịch chăm sóc tự động và quản lý toàn bộ cây trồng của bạn trong một ứng dụng duy nhất.
          </p>

          <div className="flex flex-col gap-4 sm:flex-row sm:items-center pt-4">
            <button className="inline-flex min-h-12 items-center justify-center rounded-full bg-[#173f29] px-8 py-3 text-sm font-bold text-primary-foreground shadow-[0_18px_45px_rgba(20,83,45,0.20)] transition duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-0.5 hover:bg-[#12351f] active:scale-[0.98]">
              Tải xuống trên Google Play
            </button>

            <button className="inline-flex min-h-10 items-center justify-center rounded-full border border-emerald-900/10 bg-white/55 px-8 py-3 text-sm font-semibold text-foreground backdrop-blur-xl transition duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-0.5 hover:bg-white/80 active:translate-y-0 active:scale-[0.98]">
              Xem demo ứng dụng
            </button>
          </div>

          <div className="pt-2">
            <p className="max-w-md text-xs font-medium leading-relaxed text-foreground/45">
              Hiện đang trong giai đoạn thử nghiệm - phiên bản chính thức sẽ ra mắt sớm.
            </p>
          </div>

          
        </motion.div>
      </div>

      <ZoomControl
        zoom={zoom}
        minZoom={MIN_ZOOM}
        maxZoom={MAX_ZOOM}
        onZoomIn={zoomIn}
        onZoomOut={zoomOut}
        onReset={resetZoom}
        onChange={setZoomValue}
      />
    </section>
  );
}
