'use client';

import { useState } from 'react';

interface OrbitItem {
  id: number;
  angle: number;
  emoji: string;
  title: string;
  shape: string;
}

export function OrbitalGallery() {
  const [isHovered, setIsHovered] = useState(false);

  // Desktop: 8 items, Tablet: 6 items, Mobile: 4 items
  const desktopItems: OrbitItem[] = [
    { id: 1, angle: 0, emoji: '🍃', title: 'Leaf Health', shape: 'rounded-[45%_55%_50%_50%]' },
    { id: 2, angle: 45, emoji: '🌿', title: 'Monstera', shape: 'rounded-[50%_50%_45%_55%]' },
    { id: 3, angle: 90, emoji: '🌱', title: 'Growth', shape: 'rounded-[55%_45%_55%_45%]' },
    { id: 4, angle: 135, emoji: '💧', title: 'Watering', shape: 'rounded-[45%_55%_55%_45%]' },
    { id: 5, angle: 180, emoji: '📅', title: 'Schedule', shape: 'rounded-[50%_50%_50%_50%]' },
    { id: 6, angle: 225, emoji: '🌵', title: 'Succulent', shape: 'rounded-[55%_45%_45%_55%]' },
    { id: 7, angle: 270, emoji: '🪴', title: 'Potted Plant', shape: 'rounded-[45%_55%_45%_55%]' },
    { id: 8, angle: 315, emoji: '✨', title: 'Care Tips', shape: 'rounded-[50%_50%_55%_45%]' },
  ];

  const orbitRadius = 140; // pixels

  return (
    <div
      className="relative w-full aspect-square flex items-center justify-center overflow-hidden rounded-2xl border border-border bg-gradient-to-br from-muted via-background to-muted"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Fade gradients */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background opacity-20" />
      </div>

      {/* Center hub */}
      <div className="absolute z-10 flex flex-col items-center justify-center gap-2">
        <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-secondary to-accent flex items-center justify-center border border-border/50">
          <span className="text-base">📱</span>
        </div>
        <p className="text-xs font-medium text-muted-foreground text-center leading-tight max-w-16">Scan Plant</p>
      </div>

      {/* Orbit container with animation */}
      <div
        className={`absolute inset-0 ${isHovered ? '' : 'animate-vertical-marquee'} pause-on-hover`}
        style={{
          animation: isHovered ? 'none' : 'orbital-rotate 24s linear infinite',
        }}
      >
        {desktopItems.map((item) => {
          const radians = (item.angle * Math.PI) / 180;
          const x = Math.cos(radians) * orbitRadius;
          const y = Math.sin(radians) * orbitRadius;

          return (
            <div
              key={item.id}
              className="absolute w-20 h-20 transform -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2"
              style={{
                transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))`,
              }}
            >
              {/* Orbit mask/frame with organic shape */}
              <div
                className={`w-full h-full ${item.shape} bg-gradient-to-br from-primary/80 to-secondary/60 border border-border/40 overflow-hidden shadow-lg backdrop-blur-sm hover:from-secondary/90 hover:to-accent/70 transition-colors duration-300 flex items-center justify-center`}
              >
                {/* Counter-rotation to keep content upright */}
                <div
                  style={{
                    transform: `rotate(${-item.angle}deg)`,
                  }}
                  className="w-full h-full flex items-center justify-center"
                >
                  <div className="text-center">
                    <div className="text-2xl mb-1">{item.emoji}</div>
                    <p className="text-xs font-medium text-foreground/80 leading-tight">{item.title}</p>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Optional subtle animation indicator */}
      <style jsx>{`
        @keyframes orbital-rotate {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
      `}</style>
    </div>
  );
}
