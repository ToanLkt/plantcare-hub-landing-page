'use client';

import { useEffect, useRef } from 'react';
import Spline from '@splinetool/react-spline';

interface SplineHeroProps {
  zoom: number;
}

export default function SplineHero({ zoom }: SplineHeroProps) {
  const wrapperRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const el = wrapperRef.current;
    if (!el) return;

    const stopWheelZoom = (event: WheelEvent) => {
      event.stopPropagation();
    };

    el.addEventListener('wheel', stopWheelZoom, {
      capture: true,
      passive: true,
    });

    return () => {
      el.removeEventListener('wheel', stopWheelZoom, true);
    };
  }, []);

  return (
    <div
      ref={wrapperRef}
      onWheelCapture={(event) => event.stopPropagation()}
      className="pointer-events-auto absolute inset-0 z-0 h-full w-full overflow-hidden bg-[#f8fbf7]"
    >
      <div
        className="absolute inset-y-0 left-[-48vw] h-full w-[190vw] max-w-none origin-center opacity-55 transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] will-change-transform [--spline-x:1%] md:opacity-70 md:[--spline-x:5%] lg:opacity-100 lg:[--spline-x:10%] xl:[--spline-x:14%]"
        style={{ transform: `translateX(var(--spline-x)) scale(${zoom})` }}
      >
        <Spline
          scene="https://prod.spline.design/wswXN3fLCit8SaaB/scene.splinecode"
          className="h-full w-full"
        />
      </div>
    </div>
  );
}
