"use client";
import { useEffect, useState, useRef } from "react";

const CHARACTERS = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@#$%&*";

interface EncryptedTextProps {
  text: string;
  className?: string;
  duration?: number; // total scramble duration in ms
  interval?: number; // scramble tick in ms
}

export function EncryptedText({
  text,
  className = "",
  duration = 1200,
  interval = 30,
}: EncryptedTextProps) {
  const [displayed, setDisplayed] = useState(text);
  const hasAnimated = useRef(false);

  const scramble = () => {
    let iteration = 0;
    const totalIterations = duration / interval;

    const tick = setInterval(() => {
      setDisplayed(
        text
          .split("")
          .map((char, i) => {
            if (char === " ") return " ";
            if (i < (iteration / totalIterations) * text.length) return char;
            return CHARACTERS[Math.floor(Math.random() * CHARACTERS.length)];
          })
          .join("")
      );

      iteration++;
      if (iteration > totalIterations) {
        setDisplayed(text);
        clearInterval(tick);
      }
    }, interval);
  };

  useEffect(() => {
    if (!hasAnimated.current) {
      hasAnimated.current = true;
      const timeout = setTimeout(scramble, 800); // delay before starting
      return () => clearTimeout(timeout);
    }
  }, []);

  return (
    <span
      className={className}
      onMouseEnter={scramble}
      style={{ fontFamily: "'Courier New', monospace", cursor: "default" }}
    >
      {displayed}
    </span>
  );
}
