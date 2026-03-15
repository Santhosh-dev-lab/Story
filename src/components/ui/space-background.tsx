"use client";
import React, { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

interface EquationParticle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  text: string;
  opacity: number;
  size: number;
  opacityDir: number;
  opacitySpeed: number;
}

const EQUATIONS = [
  // Machine Learning
  "ŷ = σ(Wx + b)",
  "L = −Σ yᵢ log(ŷᵢ)",
  "∂L/∂W = Xᵀ(ŷ − y)",
  "θ := θ − α∇L(θ)",
  "P(y|x) = softmax(Wx)",
  // Neural Networks
  "f(x) = max(0, x)  // ReLU",
  "σ(x) = 1/(1+e⁻ˣ)",
  "BatchNorm(x) = (x−μ)/σ",
  "Dropout(x) = x·Bernoulli(p)",
  // Transformers
  "Attention(Q,K,V) = softmax(QKᵀ/√dₖ)V",
  "MultiHead = Concat(head₁...headₙ)Wᴼ",
  "FFN(x) = max(0, xW₁+b₁)W₂+b₂",
  "PE(pos,2i) = sin(pos/10000²ⁱ/d)",
  // RAG Systems
  "s(q,d) = cos(q̂·d̂)",
  "RAG: p(y|x) = Σ p(z|x)p(y|x,z)",
  "Embed(t) → ℝ⁷⁶⁸",
  "TopK(sim(q,docs), k)",
  // Generative AI
  "ELBO = Eₓ[log p(x|z)] − KL(q||p)",
  "pθ(x) = ∫ pθ(x|z)p(z)dz",
  "L_diffusion = ‖ε − εθ(xₜ,t)‖²",
  "KL(P‖Q) = Σ P log(P/Q)",
  // AI Agents
  "π*(s) = argmax_a Q*(s,a)",
  "Q(s,a) ← r + γ maxₐ'Q(s',a')",
  "V(s) = Σₐ π(a|s)Q(s,a)",
  // System Design
  "P ∩ C — CAP Theorem",
  "Throughput = Requests/Time",
  "p99 latency ≤ SLO",
  "Cache hit ratio = hits/total",
  "f = min(s, 1/(1−p)) // Amdahl's Law",
];

export const SpaceBackground = ({
  children,
  className,
}: {
  children?: React.ReactNode;
  className?: string;
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;

    const stars: { x: number; y: number; size: number; opacity: number; dir: number; speed: number }[] = [];
    const equations: EquationParticle[] = [];

    const init = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;

      stars.length = 0;
      for (let i = 0; i < 220; i++) {
        stars.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          size: Math.random() * 1.5 + 0.2,
          opacity: Math.random() * 0.5 + 0.15,
          dir: Math.random() > 0.5 ? 1 : -1,
          speed: Math.random() * 0.005 + 0.002,
        });
      }

      equations.length = 0;
      // Spread equations across the full screen in a grid-ish pattern so they don't cluster
      for (let i = 0; i < EQUATIONS.length; i++) {
        equations.push({
          x: (Math.random() * 0.9 + 0.02) * canvas.width, // full screen
          y: (Math.random() * 0.95 + 0.02) * canvas.height,
          vx: (Math.random() - 0.5) * 0.35,
          vy: (Math.random() - 0.5) * 0.35,
          text: EQUATIONS[i],
          opacity: Math.random() * 0.10 + 0.12,
          size: Math.floor(Math.random() * 4) + 13,
          opacityDir: Math.random() > 0.5 ? 1 : -1,
          opacitySpeed: Math.random() * 0.002 + 0.001,
        });
      }
    };

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = "#000000";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Stars
      stars.forEach((s) => {
        ctx.beginPath();
        ctx.arc(s.x, s.y, s.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255,255,255,${s.opacity})`;
        ctx.fill();
        s.opacity += s.speed * s.dir;
        if (s.opacity > 0.75) s.dir = -1;
        if (s.opacity < 0.1) s.dir = 1;
      });

      // Floating Space Equations
      equations.forEach((eq) => {
        ctx.save();
        ctx.font = `${eq.size}px 'Courier New', monospace`;
        // Soft white-blue glow pass
        ctx.shadowColor = "rgba(150,200,255,0.6)";
        ctx.shadowBlur = 8;
        ctx.fillStyle = `rgba(180,215,255,${eq.opacity})`;
        ctx.fillText(eq.text, eq.x, eq.y);
        ctx.restore();

        eq.x += eq.vx;
        eq.y += eq.vy;

        // Breathe opacity
        eq.opacity += eq.opacitySpeed * eq.opacityDir;
        if (eq.opacity > 0.22) eq.opacityDir = -1;
        if (eq.opacity < 0.07) eq.opacityDir = 1;

        // Wrap around screen
        const pad = 200;
        if (eq.x < -pad) eq.x = canvas.width + pad;
        if (eq.x > canvas.width + pad) eq.x = -pad;
        if (eq.y < -pad) eq.y = canvas.height + pad;
        if (eq.y > canvas.height + pad) eq.y = -pad;
      });

      animationFrameId = requestAnimationFrame(draw);
    };

    init();
    draw();

    const handleResize = () => init();
    window.addEventListener("resize", handleResize);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="relative w-full min-h-screen bg-black">
      <canvas ref={canvasRef} className="fixed inset-0 pointer-events-none z-0" />
      <div className={cn("relative z-10", className)}>
        {children}
      </div>
    </div>
  );
};
