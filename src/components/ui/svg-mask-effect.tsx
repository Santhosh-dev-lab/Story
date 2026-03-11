"use client";
import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export const MaskContainer = ({
  children,
  revealText,
  size = 10,
  revealSize = 600,
  className,
}: {
  children?: string | React.ReactNode;
  revealText?: string | React.ReactNode;
  size?: number;
  revealSize?: number;
  className?: string;
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const [mousePosition, setMousePosition] = useState<any>({ x: null, y: null });
  const containerRef = useRef<any>(null);

  useEffect(() => {
    const updateMousePosition = (e: any) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      setMousePosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
      
      const isOverTarget = e.target.closest('.hover-target') !== null;
      setIsHovered(isOverTarget);
    };

    containerRef.current.addEventListener("mousemove", updateMousePosition);
    return () => {
      if (containerRef.current) {
        containerRef.current.removeEventListener("mousemove", updateMousePosition);
      }
    };
  }, []);

  let maskSize = isHovered ? revealSize : size;

  return (
    <motion.div
      ref={containerRef}
      className={cn("relative w-full h-[30vh] md:h-[50vh] flex items-center justify-start", className)}
    >
      <motion.div
        className="absolute inset-0 z-30 flex items-center justify-start text-6xl pointer-events-none bg-white font-sans"
        style={{
          WebkitMaskImage: "url('/mask.svg')",
          maskImage: "url('/mask.svg')",
          WebkitMaskRepeat: "no-repeat",
          maskRepeat: "no-repeat",
        }}
        animate={{
          WebkitMaskPosition: `${mousePosition.x - maskSize / 2}px ${
            mousePosition.y - maskSize / 2
          }px`,
          maskPosition: `${mousePosition.x - maskSize / 2}px ${
            mousePosition.y - maskSize / 2
          }px`,
          WebkitMaskSize: `${maskSize}px`,
          maskSize: `${maskSize}px`,
        } as any}
        transition={{
          WebkitMaskSize: { duration: 0.3, ease: "easeInOut" },
          maskSize: { duration: 0.3, ease: "easeInOut" },
          WebkitMaskPosition: { duration: 0.15, ease: "linear" },
          maskPosition: { duration: 0.15, ease: "linear" },
        } as any}
      >
        <div className="absolute inset-0 z-20 w-full h-full flex items-center justify-start text-left text-4xl pointer-events-none">
          {children}
        </div>
      </motion.div>

      <div className="relative z-20 flex w-full h-full items-center justify-start pointer-events-none">
        <div className="pointer-events-auto">
          {revealText}
        </div>
      </div>
    </motion.div>
  );
};
