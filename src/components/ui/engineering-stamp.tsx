"use client";

import React from "react";
import { motion } from "framer-motion";
import { ShieldCheck } from "lucide-react";
import { cn } from "@/lib/utils";

export const EngineeringStamp = ({ className }: { className?: string }) => {
  return (
    <div className={cn("relative w-full h-full flex items-center justify-center p-4", className)}>
      <motion.div
        initial={{ rotate: -15, scale: 0.9, opacity: 0 }}
        whileInView={{ rotate: -10, scale: 1, opacity: 1 }}
        whileHover={{ rotate: 0, scale: 1.05 }}
        transition={{ 
          type: "spring", 
          stiffness: 260, 
          damping: 20,
          opacity: { duration: 0.5 }
        }}
        className="relative w-48 h-48 sm:w-64 sm:h-64 flex items-center justify-center group cursor-pointer"
      >
        {/* Outer Glowing Ring - Brighter */}
        <div className="absolute inset-0 rounded-full border border-emerald-500/30 shadow-[0_0_60px_rgba(16,185,129,0.15)] bg-emerald-500/10 backdrop-blur-[4px]" />
        
        {/* Rotating Text Ring - Brighter */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute inset-0"
        >
          <svg viewBox="0 0 200 200" className="w-full h-full">
            <path
              id="circlePath"
              d="M 100, 100 m -85, 0 a 85,85 0 1,1 170,0 a 85,85 0 1,1 -170,0"
              fill="transparent"
            />
            <text className="fill-emerald-400/60 font-mono text-[11px] uppercase tracking-[0.25em] font-bold">
              <textPath xlinkHref="#circlePath">
                AUTHENTIC_CRAFT // BEYOND_CONVENTIONS // SINCERE_ENGINEERING // 
              </textPath>
            </text>
          </svg>
        </motion.div>

        {/* Inner Seal - Brighter */}
        <div className="relative w-36 h-36 rounded-full border-2 border-emerald-500/40 flex flex-col items-center justify-center space-y-1 bg-black/60 shadow-[0_0_30px_rgba(16,185,129,0.1)]">
          <ShieldCheck className="w-14 h-14 text-emerald-400 group-hover:text-emerald-300 group-hover:scale-110 transition-all duration-500 filter drop-shadow-[0_0_10px_rgba(16,185,129,0.5)]" />
          <div className="flex flex-col items-center">
            <span className="text-[12px] font-mono text-emerald-400 font-bold uppercase tracking-widest">Verified</span>
            <span className="text-[9px] font-mono text-emerald-600/60 uppercase tracking-tighter">Origin: 2024</span>
          </div>
        </div>

        {/* Technical Deco - Brighter */}
        <div className="absolute top-2 right-2 w-2.5 h-2.5 rounded-full bg-emerald-400 shadow-[0_0_10px_rgba(16,185,129,1)] animate-ping duration-[2000ms]" />
        <div className="absolute bottom-2 left-2 w-2.5 h-2.5 rounded-full bg-emerald-400 shadow-[0_0_10px_rgba(16,185,129,1)] animate-ping duration-[2000ms] delay-1000" />
      </motion.div>
    </div>
  );
};
