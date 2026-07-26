"use client";

import React from "react";
import { motion, HTMLMotionProps } from "framer-motion";
import { cn } from "@/lib/utils";

export const Radar = ({
  className,
  children,
  icons = [],
}: {
  className?: string;
  children?: React.ReactNode;
  icons?: Array<{ icon: React.ElementType; radius: number; angle: number; delay?: number; label?: string }>;
}) => {
  return (
    <div
      className={cn(
        "relative flex w-full items-start justify-center overflow-hidden bg-[#0d1117] shadow-xl rounded-2xl",
        className
      )}
    >
      {/* Background container for radar graphic - centered at the bottom edge */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[120%] sm:w-[90%] md:w-[75%] aspect-square flex items-center justify-center translate-y-1/2 pointer-events-none z-0">
        
        {/* Radar concentric rings */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="h-full w-full rounded-full border border-white/5 absolute" />
          <div className="h-[75%] w-[75%] rounded-full border border-white/10 absolute" />
          <div className="h-[50%] w-[50%] rounded-full border border-white/10 absolute" />
          <div className="h-[25%] w-[25%] rounded-full border border-white/20 absolute" />
        </div>
        
        {/* Radar crosshairs */}
        <div className="absolute h-full w-[1px] bg-white/5 pointer-events-none" />
        <div className="absolute h-[1px] w-full bg-white/10 pointer-events-none" />
        <div className="absolute h-2 w-2 rounded-full bg-red-500 shadow-[0_0_15px_rgba(239,68,68,0.8)] pointer-events-none" />

        {/* Radar sweep */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
           <div className="h-full w-full rounded-full overflow-hidden absolute">
              <div 
                  className="h-full w-full animate-radar-spin origin-center absolute"
                  style={{
                      background: "conic-gradient(from 180deg, transparent 70%, rgba(239, 68, 68, 0.6) 100%)",
                  }}
              />
           </div>
        </div>

        {/* Placing icons directly on the rings */}
        <div className="absolute inset-0 z-30 pointer-events-none">
           {icons?.map((item, idx) => {
             const rad = item.angle * (Math.PI / 180);
             const x = 50 + Math.cos(rad) * (item.radius * 50);
             const y = 50 - Math.sin(rad) * (item.radius * 50);
             
             return (
               <div 
                 key={idx} 
                 className="absolute pointer-events-none" 
                 style={{ left: `${x}%`, top: `${y}%` }}
               >
                 <IconContainer delay={item.delay} icon={item.icon} className="absolute -translate-x-1/2 -translate-y-1/2" />
                 {item.label && (
                    <motion.div
                        initial={{ opacity: 0, y: 5 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: (item.delay || 0) + 0.4, duration: 0.5 }}
                        className="absolute left-1/2 top-4 sm:top-5 mt-1 -translate-x-1/2 whitespace-nowrap rounded-md border border-white/10 bg-[#0d1117]/80 px-2 py-0.5 text-[9px] sm:text-[10px] font-bold uppercase tracking-widest text-[#ba9c9c] shadow-[0_0_15px_rgba(239,68,68,0.2)] backdrop-blur-md"
                    >
                        {item.label}
                    </motion.div>
                 )}
               </div>
             );
           })}
        </div>
      </div>

      {/* Main Content Area */}
      <div className="relative z-10 w-full h-full flex flex-col justify-start">
        {children}
      </div>
    </div>
  );
};

export const IconContainer = ({
  icon: Icon,
  delay = 0,
  className,
  ...props
}: {
  icon: React.ElementType;
  delay?: number;
} & HTMLMotionProps<"div">) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 0.5,
        delay,
        ease: "easeOut",
      }}
      className={cn(
        "flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-full border border-white/10 bg-[#0d1117] shadow-[0_0_20px_rgba(239,68,68,0.3)] backdrop-blur-md z-20",
        className
      )}
      {...props}
    >
      <motion.div
        animate={{ y: [0, -5, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay }}
      >
        <Icon className="h-5 w-5 sm:h-6 sm:w-6 text-red-500 opacity-90" />
      </motion.div>
    </motion.div>
  );
};
