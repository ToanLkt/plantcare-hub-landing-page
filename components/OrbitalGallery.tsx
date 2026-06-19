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

  const orbitItems: OrbitItem[] = [
    { id: 1, angle: 0, emoji: '🍃', title: 'Leaf Health', shape: 'rounded-[45%_55%_50%_50%]' },
    { id: 2, angle: 45, emoji: '🌿', title: 'Monstera', shape: 'rounded-[50%_50%_45%_55%]' },
    { id: 3, angle: 90, emoji: '🌱', title: 'Growth', shape: 'rounded-[55%_45%_55%_45%]' },
    { id: 4, angle: 135, emoji: '💧', title: 'Watering', shape: 'rounded-[45%_55%_55%_45%]' },
    { id: 5, angle: 180, emoji: '📅', title: 'Schedule', shape: 'rounded-[50%_50%_50%_50%]' },
    { id: 6, angle: 225, emoji: '🌵', title: 'Succulent', shape: 'rounded-[55%_45%_45%_55%]' },
    { id: 7, angle: 270, emoji: '🪴', title: 'Potted Plant', shape: 'rounded-[45%_55%_45%_55%]' },
    { id: 8, angle: 315, emoji: '✨', title: 'Care Tips', shape: 'rounded-[50%_50%_55%_45%]' },
  ];

  const orbitRadius = 105; // pixels from center

  // Calculate position for each item on the orbit
  const getItemPosition = (angle: number) => {
    const radians = (angle * Math.PI) / 180;
    const x = Math.cos(radians) * orbitRadius;
    const y = Math.sin(radians) * orbitRadius;
    return { x, y };
  };

  return (
    <div
      className="relative w-full h-full flex items-center justify-center bg-gradient-to-br from-muted via-background to-muted rounded-2xl border border-border"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Fade gradient overlay */}
      <div className="absolute inset-0 pointer-events-none rounded-2xl">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background opacity-20 rounded-2xl" />
      </div>

      {/* Rotating orbit container - rotates all items together */}
      <div
        className="absolute inset-0 flex items-center justify-center"
        style={{
          animation: isHovered ? 'none' : 'orbital-rotate 24s linear infinite',
        }}
      >
        {/* Orbit items positioned around the circle */}
        {orbitItems.map((item) => {
          const pos = getItemPosition(item.angle);

          return (
            <div
              key={item.id}
              className="absolute w-16 h-16"
              style={{
                left: '50%',
                top: '50%',
                transform: `translate(calc(-50% + ${pos.x}px), calc(-50% + ${pos.y}px)) rotate(${-item.angle}deg)`,
              }}
            >
              {/* Orbit item card - counter-rotates to stay upright */}
              <div
                className={`w-full h-full ${item.shape} bg-gradient-to-br from-primary/75 to-secondary/55 border border-border/40 shadow-lg flex items-center justify-center cursor-pointer hover:from-secondary/85 hover:to-accent/65 transition-all duration-300`}
              >
                {/* Content */}
                <div className="text-center pointer-events-none">
                  <div className="text-lg mb-0.5">{item.emoji}</div>
                  <p className="text-xs font-medium text-foreground/80 leading-tight">{item.title}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Center hub */}
      <div className="absolute z-30 flex flex-col items-center justify-center gap-2">
        <div className="w-14 h-14 rounded-lg bg-gradient-to-br from-secondary to-accent flex items-center justify-center border border-border/50 shadow-lg">
          <span className="text-xl">📱</span>
        </div>
        <p className="text-xs font-medium text-muted-foreground text-center leading-tight whitespace-nowrap">Scan Plant</p>
      </div>

      {/* CSS animation */}
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
