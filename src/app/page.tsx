"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { TracingBeam } from "@/components/ui/tracing-beam";
import { HoverEffect } from "@/components/ui/card-hover-effect";
import { Cover } from "@/components/ui/cover";
import { SpaceBackground } from "@/components/ui/space-background";
import { MaskContainer } from "@/components/ui/svg-mask-effect";
import { EncryptedText } from "@/components/ui/encrypted-text";
import { TerminalBadge } from "@/components/ui/terminal-badge";
import { FloatingDock } from "@/components/ui/floating-dock";
import { PixelatedCanvas } from "@/components/ui/pixelated-canvas";
import Image from "next/image";

const FloatingInterests = () => {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  const interests = [
    "Backend",
    "Cloud",
    "Cinematography",
    "Art",
    "Paintings",
    "Cricket",
    "Music",
    "Guitar",
  ];

  return (
    <div className="absolute inset-0 w-full h-full pointer-events-none flex items-center justify-center overflow-hidden">
      {interests.map((interest, i) => {
        const randomXStart = Math.floor(Math.random() * 80) - 40;
        const randomYStart = Math.floor(Math.random() * 20) - 10;
        const randomXEnd = Math.floor(Math.random() * 80) - 40;
        const randomYEnd = Math.floor(Math.random() * 20) - 10;
        return (
          <motion.span
            key={i}
            className="absolute text-2xl md:text-5xl font-bold text-black opacity-80 whitespace-nowrap"
            animate={{
              x: [`${randomXStart}%`, `${randomXEnd}%`, `${randomXStart}%`],
              y: [`${randomYStart}rem`, `${randomYEnd}rem`, `${randomYStart}rem`],
            }}
            transition={{
              duration: 20 + Math.random() * 10,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            {interest}
          </motion.span>
        );
      })}
    </div>
  );
};

export default function Home() {
  const projects = [
    {
      title: "Stripe",
      description:
        "A technology company that builds economic infrastructure for the internet.",
      link: "https://stripe.com",
    },
    {
      title: "Netflix",
      description:
        "A streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices.",
      link: "https://netflix.com",
    },
    {
      title: "Google",
      description:
        "A multinational technology company that specializes in Internet-related services and products.",
      link: "https://google.com",
    },
    {
      title: "Meta",
      description:
        "A technology company that focuses on building products that advance Facebook's mission of bringing the world closer together.",
      link: "https://meta.com",
    },
    {
      title: "Amazon",
      description:
        "A multinational technology company focusing on e-commerce, cloud computing, online advertising, digital streaming, and artificial intelligence.",
      link: "https://amazon.com",
    },
    {
      title: "Microsoft",
      description:
        "A multinational technology corporation which produces computer software, consumer electronics, personal computers, and related services.",
      link: "https://microsoft.com",
    },
  ];

  return (
    <main className="bg-black min-h-screen text-white w-full overflow-hidden">

      {/* Floating Navigation Dock – top left */}
      <div className="fixed top-4 left-6 md:top-12 md:left-12 z-50">
        <FloatingDock
          items={[
            {
              title: "Home",
              href: "#",
              icon: (
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                  <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                  <polyline points="9 22 9 12 15 12 15 22" />
                </svg>
              ),
            },
            {
              title: "About",
              href: "#about",
              icon: (
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                  <circle cx="12" cy="8" r="4" />
                  <path d="M20 21a8 8 0 1 0-16 0" />
                </svg>
              ),
            },
            {
              title: "Projects",
              href: "#projects",
              icon: (
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                  <rect width="8" height="8" x="2" y="2" rx="1" />
                  <rect width="8" height="8" x="14" y="2" rx="1" />
                  <rect width="8" height="8" x="2" y="14" rx="1" />
                  <rect width="8" height="8" x="14" y="14" rx="1" />
                </svg>
              ),
            },
            {
              title: "Contact",
              href: "#contact",
              icon: (
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                  <rect width="20" height="16" x="2" y="4" rx="2" />
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                </svg>
              ),
            },
            {
              title: "GitHub",
              href: "https://github.com/Santhosh-dev-lab",
              icon: (
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                  <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.02 10.02 0 0 0 22 12.017C22 6.484 17.522 2 12 2Z" />
                </svg>
              ),
            },
            {
              title: "X (Twitter)",
              href: "https://x.com/Kunamsanthosh",
              icon: (
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              ),
            },
            {
              title: "LinkedIn",
              href: "https://linkedin.com/in/santhoshkunam",
              icon: (
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              ),
            },
          ]}
        />
      </div>
      {/* Hero Section – fully responsive (mobile → desktop) */}
      <SpaceBackground className="relative flex flex-col md:flex-row items-center justify-between h-[100dvh] md:min-h-screen w-full antialiased overflow-hidden">

        {/* Left Side – Name */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3, duration: 0.8, ease: "easeInOut" }}
          className="relative flex flex-col items-start justify-start md:justify-center px-5 md:px-12 z-10 w-full md:w-1/2 pt-[90px] md:pt-0 md:py-0 md:h-screen md:-mt-16 flex-shrink-0"
        >
          <MaskContainer
            revealText={
              <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-semibold max-w-7xl text-left relative z-20 py-2 md:py-4 leading-tight pointer-events-none">
                <span className="pointer-events-auto inline-block hover-target transition-opacity duration-300 hover:opacity-0 bg-clip-text text-transparent bg-gradient-to-b from-neutral-800 via-neutral-700 to-neutral-700 dark:from-neutral-800 dark:via-white dark:to-white cursor-default">
                  Santhosh
                </span> <br />
                <span className="pointer-events-auto inline-block bg-clip-text text-transparent bg-gradient-to-b from-neutral-800 via-neutral-700 to-neutral-700 dark:from-neutral-800 dark:via-white dark:to-white">
                  <Cover>Kunam</Cover>
                </span>
              </h1>
            }
            className="h-auto w-full items-start justify-start !mx-0"
          >
            <FloatingInterests />
          </MaskContainer>

          {/* Encrypted description below name */}
          <div className="mt-1 md:mt-3 max-w-sm md:max-w-lg z-10">
            <EncryptedText
              text="Still learning. Still building. Still curious. That's pretty much the whole story."
              className="text-xs md:text-lg text-white font-semibold leading-snug md:leading-relaxed block tracking-wide"
              duration={1600}
            />
          </div>

        </motion.div>

        {/* Right Side – Image & floating badges */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5, duration: 0.8, ease: "easeInOut" }}
          className="relative flex items-end justify-center w-full md:w-1/2 flex-1 md:flex-none md:h-screen z-10 md:mt-0"
        >
          {/* Portrait Image with silhouette fade */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              maskImage: "linear-gradient(to right, transparent 0%, black 55%), linear-gradient(to top, transparent 0%, black 18%)",
              WebkitMaskImage: "linear-gradient(to right, transparent 0%, black 55%), linear-gradient(to top, transparent 0%, black 18%)",
              maskComposite: "intersect",
              WebkitMaskComposite: "source-in",
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/10 to-transparent z-20" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-transparent to-transparent z-20" />
            <Image
              src="/portfolio_image-Photoroom.png"
              alt="Santhosh Kunam"
              fill
              className="object-contain object-[center_75%] md:object-bottom drop-shadow-2xl z-10 scale-110 origin-bottom -translate-x-8 md:-translate-x-12"
              priority
            />
          </div>

          {/* Terminal Badge 1 – whoami */}
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
            className="absolute top-[5%] left-0 md:top-[18%] md:left-[-5%] z-30 scale-[0.58] origin-top-left md:scale-100">
            <TerminalBadge
              sessionLabel="bash — 80×24"
              prompt="santhosh@dev:~"
              command="whoami"
              output="Software Engineer"
              delay={500}
            />
          </motion.div>

          {/* Terminal Badge 2 – RAG */}
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", delay: 1 }}
            className="absolute bottom-[20%] right-0 md:bottom-[32%] md:right-4 z-30 scale-[0.58] origin-bottom-right md:scale-100">
            <TerminalBadge
              sessionLabel="zsh — 80×24"
              prompt="santhosh@dev:~/projects"
              command="rag-pipeline --run"
              output="RAG system ready"
              delay={1200}
            />
          </motion.div>

          {/* Terminal Badge 3 – AWS */}
          <motion.div
            animate={{ y: [0, -12, 0] }}
            transition={{ repeat: Infinity, duration: 4.5, ease: "easeInOut", delay: 2 }}
            className="absolute top-[30%] right-0 md:top-[8%] md:right-10 z-30 scale-[0.58] origin-top-right md:scale-100">
            <TerminalBadge
              sessionLabel="ssh — cloud"
              prompt="santhosh@aws:~"
              command="aws iam get-user"
              output="✓ AWS Cloud Practitioner"
              delay={2000}
            />
          </motion.div>
        </motion.div>
      </SpaceBackground>

      {/* About Me – Semi-Transparent Scrapbook Layout */}
      <section id="about" className="min-h-screen relative w-full overflow-hidden flex items-center justify-center bg-transparent py-12">
        
        {/* The Paper Content Container - Floating on the space background */}
        <div className="w-full max-w-6xl mx-auto px-6 md:px-12 relative z-10 flex flex-col md:flex-row gap-8 md:gap-12 items-center md:items-center bg-[#0a0a0a]/70 backdrop-blur-xl rounded-[2.5rem] border border-white/10 shadow-[0_0_50px_rgba(0,0,0,0.5)] overflow-hidden py-8 md:py-12"
             style={{ backgroundImage: "url('https://www.transparenttextures.com/patterns/black-paper.png')" }}>
          
          {/* Decorative Tape Elements for Scrapbook Effect */}
          <div className="absolute top-4 left-1/4 w-24 h-8 bg-white/10 rotate-[-15deg] backdrop-blur-sm border border-white/5 z-20 opacity-40" style={{ clipPath: "polygon(0% 10%, 100% 0%, 95% 90%, 5% 100%)" }} />
          <div className="absolute bottom-8 right-1/4 w-28 h-10 bg-white/10 rotate-[10deg] backdrop-blur-sm border border-white/5 z-20 opacity-30" style={{ clipPath: "polygon(5% 0%, 95% 15%, 100% 90%, 0% 85%)" }} />

          {/* Binding edge - more 'scrapped' and aligned */}
          <div className="absolute top-0 bottom-0 left-0 w-4 md:w-10 bg-[#050505] border-r border-white/10 z-0" />
          {/* Torn paper edge effect */}
          <div className="absolute top-0 bottom-0 left-4 md:left-10 w-4 bg-white/10 z-0" style={{ clipPath: "polygon(0% 0%, 100% 0%, 85% 3%, 100% 6%, 80% 9%, 100% 12%, 85% 15%, 100% 18%, 80% 21%, 100% 24%, 85% 27%, 100% 30%, 80% 33%, 100% 36%, 85% 39%, 100% 42%, 80% 45%, 100% 48%, 85% 51%, 100% 54%, 80% 57%, 100% 60%, 85% 63%, 100% 66%, 80% 69%, 100% 72%, 85% 75%, 100% 78%, 80% 81%, 100% 84%, 85% 87%, 100% 90%, 80% 93%, 100% 96%, 85% 99%, 100% 100%, 0% 100%)" }} />

        <div className="w-full relative z-10 flex flex-col md:flex-row gap-8 md:gap-12 items-center md:items-start pl-8 md:pl-20 pr-6 md:pr-12">

          {/* Left Column – Compact ID Card */}
          <div className="relative flex-shrink-0 w-full md:w-[280px]">
            {/* Paperclip - perfectly aligned */}
            <div className="absolute -top-10 left-1/2 -translate-x-1/2 z-40 drop-shadow-lg">
              <svg width="40" height="80" viewBox="0 0 40 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="opacity-90">
                <path d="M12,85 C6.5,85 2,80.5 2,75 L2,20 C2,10.6 9.6,3 19,3 C22.9,3 26,6.1 26,10 L26,65 C26,68.9 22.9,72 19,72 L12,72 C9.2,72 7,69.8 7,67 L7,25" stroke="#666" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>

            {/* ID Card Body - Shorter Height */}
            <div className="bg-[#0f0f0f] p-4 pt-8 rounded-xl border border-neutral-800 shadow-2xl relative overflow-hidden">
              <div className="text-center mb-4">
                <h3 className="text-white font-mono text-xl tracking-[0.2em] mb-1">ID: SK-P-01</h3>
                <p className="text-emerald-500 font-mono text-[9px] tracking-widest uppercase opacity-80">Authorized Personnel Only</p>
              </div>

              {/* Pixelated Photo Area - Shorter aspect ratio */}
              <div className="group relative w-full aspect-[1/1.1] overflow-hidden bg-black flex items-center justify-center border-2 border-neutral-800 rounded-lg mb-4 cursor-crosshair">
                
                {/* Multi-colored Pixelated Canvas (Matched to Reference) */}
                <PixelatedCanvas
                  src="/portfolio_image-Photoroom.png"
                  width={280}
                  height={350}
                  cellSize={5}
                  dotScale={0.92}
                  shape="square"
                  backgroundColor="#000000"
                  dropoutStrength={0.03} 
                  interactive
                  distortionStrength={5}
                  distortionRadius={80}
                  distortionMode="swirl"
                  followSpeed={0.2}
                  jitterStrength={2}
                  jitterSpeed={2}
                  sampleAverage
                  tintColor="#FFFFFF" 
                  tintStrength={0.25} // Low tint to allow original colors
                  className="absolute inset-0 w-full h-full object-cover object-top opacity-100 z-10"
                />

               {/* Reticle / scanner effect */}
               <div className="absolute inset-0 border border-emerald-500/10 m-2 pointer-events-none z-20" />
               <div className="absolute top-1 left-1 w-2 h-2 border-t border-l border-emerald-500/40 pointer-events-none z-20" />
               <div className="absolute bottom-1 right-1 w-2 h-2 border-b border-r border-emerald-500/40 pointer-events-none z-20" />
               
               {/* Scan line effect overlay */}
               <div className="absolute inset-0 bg-gradient-to-b from-transparent via-emerald-500/5 to-transparent h-1/3 w-full top-0 animate-[scan_4s_linear_infinite] z-20 pointer-events-none" />
              </div>
              
              {/* Details List - More compact */}
              <div className="space-y-1.5 font-mono text-[10px] mb-4">
                <div className="flex justify-between border-b border-neutral-800/50 pb-1">
                  <span className="text-neutral-500 uppercase">Clearance</span>
                  <span className="text-emerald-500">LEVEL 05</span>
                </div>
                <div className="flex justify-between border-b border-neutral-800/50 pb-1">
                  <span className="text-neutral-500 uppercase">Role</span>
                  <span className="text-white font-bold">Cloud / AI Eng</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-neutral-500 uppercase">Status</span>
                  <span className="text-emerald-500 animate-pulse">ACTIVE - TERMINAL</span>
                </div>
              </div>

              {/* Barcode - Smaller */}
              <div className="flex flex-col items-center">
                <div className="w-full h-8 bg-white/90 rounded-[1px] flex items-end justify-around px-2 pt-1.5 overflow-hidden">
                  {[...Array(40)].map((_, i) => (
                    <div key={i} className={`bg-black ${Math.random() > 0.5 ? 'w-[1px]' : 'w-[2px]'} self-stretch`} style={{ height: `${Math.random() * 60 + 40}%` }} />
                  ))}
                </div>
                <span className="text-[7px] text-neutral-500 mt-1 tracking-[0.4em] font-mono">2024//USER//AUTH_SK</span>
              </div>
            </div>
          </div>

          {/* Right Column – Text & Swatches */}
          <div className="flex-1 pt-6 md:pt-10">
            {/* Title */}
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-2 rotate-[-1deg]" style={{ fontFamily: "'Caveat', cursive" }}>
              About me
            </h2>
            {/* Scribble line */}
            <svg className="w-56 h-4 mb-8 rotate-[-1deg] opacity-70" viewBox="0 0 200 10" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M2.5 5C50 2 150 8 197.5 5" stroke="#4ade80" strokeWidth="2" strokeLinecap="round" style={{ filter: "url(#roughness)" }}/>
              <defs>
                <filter id="roughness">
                  <feTurbulence type="fractalNoise" baseFrequency="0.5" numOctaves="3" result="noise" />
                  <feDisplacementMap in="SourceGraphic" in2="noise" scale="2" xChannelSelector="R" yChannelSelector="G" />
                </filter>
              </defs>
            </svg>

            {/* Handwritten intro block - slightly more compact for single view */}
            <div className="text-neutral-300 leading-[1.8] md:leading-[2] pr-4 max-w-xl" style={{ fontFamily: "'Caveat', cursive", fontSize: "1.3rem", fontWeight: 600 }}>
              <p className="mb-4 indent-8">
                I'm a software engineer passionate about modern web technologies and cloud architecture. I enjoy bridging the gap between design and engineering, creating experiences that look beautiful and perform perfectly.
              </p>
              <p className="mb-4">
                Currently, I'm building generative AI tools, diving deep into RAG systems, and exploring Next.js ecosystems. When I'm away from the keyboard, you'll find me exploring new coffee shops and plotting my next big project.
              </p>
            </div>

            {/* Enhanced Security Stamp */}
            <div className="relative flex mt-8 items-center justify-center md:justify-start">
              
              {/* Interesting Security Badge / Stamp */}
              <div className="relative group/stamp cursor-default">
                <div className="absolute inset-0 bg-emerald-500/20 rounded-full blur-xl group-hover/stamp:bg-emerald-500/30 transition-all duration-500" />
                <div className="relative w-32 h-32 border-[4px] border-emerald-500/40 rounded-full flex items-center justify-center rotate-[-12deg] pointer-events-none mix-blend-screen overflow-hidden"
                     style={{ maskImage: "url('https://www.transparenttextures.com/patterns/grunge-wall.png')", WebkitMaskImage: "url('https://www.transparenttextures.com/patterns/grunge-wall.png')" }}>
                  
                  <div className="w-[85%] h-[85%] border-2 border-emerald-500/40 rounded-full flex flex-col items-center justify-center">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-emerald-500/60 mb-1">
                      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                      <circle cx="12" cy="11" r="3" />
                      <line x1="12" y1="11" x2="12" y2="11.01" />
                    </svg>
                    <div className="uppercase text-emerald-500/70 font-bold tracking-tighter text-[10px]">Security Verified</div>
                    <div className="text-emerald-500/80 font-black text-xl tracking-widest mt-0.5 border-y-2 border-emerald-500/50 py-0.5 w-full text-center">CORE_SYS</div>
                    <div className="text-[8px] text-emerald-500/50 font-mono mt-1">SN: 882-P-X09</div>
                  </div>
                </div>
                {/* Secondary 'Approved' text stamp offset */}
                <div className="absolute -bottom-2 -left-6 border-2 border-amber-500/30 px-2 py-0.5 rounded rotate-[15deg] text-[10px] uppercase font-bold text-amber-500/40 tracking-widest mix-blend-screen"
                     style={{ WebkitMaskImage: "url('https://www.transparenttextures.com/patterns/grunge-wall.png')" }}>
                  System Approved
                </div>
              </div>

            </div>
          </div>
        </div>
      </div> {/* Closing the floating paper container */}
        
        {/* Load Caveat handwriting font */}
        <style>{`@import url('https://fonts.googleapis.com/css2?family=Caveat:wght@400;600;700&display=swap');`}</style>
      </section>


      {/* Projects Showcase */}
      <section id="projects" className="py-20 bg-black border-t border-neutral-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-8 text-center">
            Selected Work
          </h2>
          <p className="text-neutral-400 text-center max-w-2xl mx-auto text-lg mb-12">
            A collection of projects showcasing my ability to build dynamic, responsive, and beautiful applications.
          </p>
          <HoverEffect items={projects} />
        </div>
      </section>

      {/* Footer / Contact */}
      <footer className="py-12 bg-neutral-950 border-t border-neutral-800 text-center">
        <div className="max-w-7xl mx-auto px-4">
          <h3 className="text-3xl font-bold text-white mb-4">Let's work together</h3>
          <p className="text-neutral-400 mb-8 text-lg">
            I'm currently available for freelance opportunities or full-time roles.
          </p>
          <a
            href="mailto:contact@example.com"
            className="inline-block bg-white text-black font-semibold px-8 py-4 rounded-full hover:bg-neutral-200 transition-colors"
          >
            Say Hello
          </a>
          <p className="text-neutral-600 mt-16 text-sm">
            © {new Date().getFullYear()} Fantastic Portfolio. Built with Next.js & Aceternity UI.
          </p>
        </div>
      </footer>
    </main>
  );
}
