"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

interface TerminalBadgeProps {
  sessionLabel: string;
  prompt: string; // e.g. "santhosh@dev:~"
  command: string;
  output: string;
  delay?: number; // initial delay before typing starts (ms)
  className?: string;
}

export function TerminalBadge({
  sessionLabel,
  prompt,
  command,
  output,
  delay = 0,
  className = "",
}: TerminalBadgeProps) {
  const [displayedCmd, setDisplayedCmd] = useState("");
  const [displayedOutput, setDisplayedOutput] = useState("");
  const [phase, setPhase] = useState<"idle" | "typing" | "output" | "done">("idle");

  const startSequence = () => {
    setDisplayedCmd("");
    setDisplayedOutput("");
    setPhase("idle");

    const startTimeout = setTimeout(() => {
      setPhase("typing");
    }, delay);

    return startTimeout;
  };

  useEffect(() => {
    const t = startSequence();
    return () => clearTimeout(t);
  }, []);

  // Type the command
  useEffect(() => {
    if (phase !== "typing") return;
    if (displayedCmd.length < command.length) {
      const t = setTimeout(() => {
        setDisplayedCmd(command.slice(0, displayedCmd.length + 1));
      }, 60 + Math.random() * 40);
      return () => clearTimeout(t);
    } else {
      // Done typing command → show output after a short pause
      const t = setTimeout(() => setPhase("output"), 400);
      return () => clearTimeout(t);
    }
  }, [phase, displayedCmd, command]);

  // Type the output
  useEffect(() => {
    if (phase !== "output") return;
    if (displayedOutput.length < output.length) {
      const t = setTimeout(() => {
        setDisplayedOutput(output.slice(0, displayedOutput.length + 1));
      }, 40 + Math.random() * 30);
      return () => clearTimeout(t);
    } else {
      // Done → loop after pause
      const t = setTimeout(() => {
        startSequence();
      }, 3500);
      return () => clearTimeout(t);
    }
  }, [phase, displayedOutput, output]);

  // Parse the prompt into colored parts: "user@host:path"
  const atIdx = prompt.indexOf("@");
  const colonIdx = prompt.indexOf(":");
  const user = prompt.slice(0, atIdx + 1);     // "santhosh@"... wait, let's do user@host and path
  const userHost = prompt.slice(0, colonIdx);   // "santhosh@dev"
  const path = prompt.slice(colonIdx + 1);      // "~" or "~/projects"

  return (
    <motion.div
      className={`w-52 md:w-60 rounded-xl overflow-hidden border border-neutral-700 ${className}`}
      style={{ filter: "drop-shadow(0 0 10px rgba(74,222,128,0.2))" }}
    >
      {/* Title bar */}
      <div className="flex items-center gap-1.5 bg-neutral-800 px-3 py-1.5 border-b border-neutral-700">
        <span className="w-2.5 h-2.5 rounded-full bg-red-500" />
        <span className="w-2.5 h-2.5 rounded-full bg-yellow-500" />
        <span className="w-2.5 h-2.5 rounded-full bg-green-500" />
        <span className="ml-2 text-neutral-400 text-[10px] font-mono">{sessionLabel}</span>
      </div>

      {/* Body */}
      <div className="bg-neutral-950 px-3 py-2 font-mono text-xs md:text-[13px] min-h-[52px]">
        {/* Prompt line */}
        <div>
          <span className="text-green-400">{userHost}</span>
          <span className="text-neutral-500">:</span>
          <span className="text-blue-400">{path}</span>
          <span className="text-neutral-400"> $ </span>
          <span className="text-white">{displayedCmd}</span>
          {phase === "typing" && (
            <span className="animate-pulse text-green-400">▌</span>
          )}
        </div>

        {/* Output line */}
        {displayedOutput.length > 0 && (
          <div className="mt-0.5">
            <span className="text-green-300">{displayedOutput}</span>
            {phase === "output" && displayedOutput.length < output.length && (
              <span className="animate-pulse text-green-400">▌</span>
            )}
            {phase === "done" && (
              <span className="animate-pulse text-green-400">▌</span>
            )}
          </div>
        )}

        {/* Idle blinking cursor when done */}
        {phase === "idle" && (
          <span className="animate-pulse text-green-400">▌</span>
        )}
      </div>
    </motion.div>
  );
}
