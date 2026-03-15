"use client";
import React, { useRef } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

const SKILLS = [
  "Next.js", "React", "Node.js", "TypeScript", 
  "Python", "Generative AI", "RAG", "AWS", 
  "Tailwind", "Framer Motion", "PostgreSQL", "Docker"
];

export const DraggableSkills = ({ className }: { className?: string }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div 
      ref={containerRef}
      className={cn(
        "flex flex-wrap gap-2 p-8 items-center justify-center w-full h-full overflow-hidden relative",
        className
      )}
    >
      {/* Light Grid Background */}
      <div className="absolute inset-0 z-0 opacity-20 pointer-events-none" 
           style={{ 
             backgroundImage: `linear-gradient(rgba(16, 185, 129, 0.4) 1.5px, transparent 1.5px), linear-gradient(90deg, rgba(16, 185, 129, 0.4) 1.5px, transparent 1.5px)`,
             backgroundSize: '35px 35px' 
           }} 
      />

      {SKILLS.map((skill, index) => (
        <motion.div
          key={skill}
          drag
          dragConstraints={containerRef}
          whileDrag={{ scale: 1.1, zIndex: 50 }}
          whileHover={{ scale: 1.05 }}
          initial={{ 
            opacity: 0, 
            scale: 0.8,
            x: Math.random() * 40 - 20,
            y: Math.random() * 40 - 20
          }}
          animate={{ 
            opacity: 1, 
            scale: 1,
            y: [0, -10, 0], // Ambient floating
          }}
          transition={{ 
            delay: index * 0.05,
            y: {
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              ease: "easeInOut",
            },
            opacity: { duration: 0.5 },
            scale: { duration: 0.5 }
          }}
          className="cursor-grab active:cursor-grabbing px-3 py-1.5 bg-black/80 backdrop-blur-md border border-emerald-500/40 text-emerald-400 text-[10px] font-mono rounded-full hover:border-emerald-500/70 hover:text-emerald-300 transition-colors z-20 whitespace-nowrap select-none shadow-[0_0_20px_rgba(16,185,129,0.15)]"
        >
          {skill}
        </motion.div>
      ))}
    </div>
  );
};
