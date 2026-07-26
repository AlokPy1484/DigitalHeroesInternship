'use client';

import { cn } from "@/lib/utils";


// data/logos.ts
import {
  Code,
  Search,
  Sparkles,
  Megaphone,
  Layout,
  Zap,
  ChessKnight,
  Bot,
  UserPlus,
  Smartphone,
  ChartNoAxesCombined,
} from "lucide-react";



export const logos = [
  { label: "Brand Strategy", icon: ChessKnight },
  { label: "GEO", icon: Bot },
  { label: "Lead Generation", icon: UserPlus },
  { label: "Social Media", icon: Smartphone },
  { label: "Growth Marketing", icon: ChartNoAxesCombined },
  { label: "Optimization", icon: Sparkles },
];


export default function InfiniteLogoMarquee() {
  const marqueeStyle = {
    animation: 'scroll 25s linear infinite',
    display: 'flex',
    gap: '24px',
    whiteSpace: 'nowrap' as const,
    willChange: 'transform',
  };

  const logoItemStyle = {
    display: 'flex',
    alignItems: 'center',
    gap: '12px',
    backgroundColor: 'rgba(255, 255, 255, 0.05)',
    padding: '12px 24px',
    borderRadius: '9999px',
    color: 'rgba(255, 255, 255, 0.8)',
    backdropFilter: 'blur(8px)',
    flexShrink: 0,
    fontSize: '14px',
    fontWeight: 500,
  };

  return (
    <div className="relative w-full overflow-hidden bg-black py-8">
      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
      `}</style>

      {/* Fade edges */}
      <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-24 bg-gradient-to-r from-black to-transparent" />
      <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-24 bg-gradient-to-l from-black to-transparent" />

      <div style={marqueeStyle}>
        {[...logos, ...logos, ...logos].map((item, i) => {
          const Icon = item.icon;
          return (
            <div key={i} style={logoItemStyle}>
              <Icon size={18} />
              <span>{item.label}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
