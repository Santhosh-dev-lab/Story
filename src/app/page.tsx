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

      {/* About Me – Scrapbook Layout */}
      <section id="about" className="py-24 relative w-full overflow-hidden flex bg-[#eeede8]"
               style={{ backgroundImage: "url('https://www.transparenttextures.com/patterns/seamless-paper-texture.png')" }}>
        
        {/* Dark green side strip simulating the notebook spine */}
        <div className="absolute top-0 bottom-0 left-0 w-8 md:w-16 bg-[#274533] border-r-4 border-[#1e3627] z-0 shadow-[inset_-5px_0_10px_rgba(0,0,0,0.4)]" />
        {/* Torn paper edge effect near the spine */}
        <div className="absolute top-0 bottom-0 left-6 md:left-14 w-4 bg-white/40 z-0" style={{ clipPath: "polygon(0% 0%, 100% 0%, 80% 5%, 100% 10%, 70% 15%, 100% 20%, 80% 25%, 100% 30%, 70% 35%, 100% 40%, 80% 45%, 100% 50%, 70% 55%, 100% 60%, 80% 65%, 100% 70%, 70% 75%, 100% 80%, 80% 85%, 100% 90%, 70% 95%, 100% 100%, 0% 100%)" }} />

        <div className="w-full max-w-5xl mx-auto px-10 md:px-24 relative z-10 flex flex-col md:flex-row gap-8 md:gap-16 items-start">

          {/* Left Column – Polaroid & Notepad */}
          <div className="relative flex-shrink-0 w-full md:w-[280px]">

            {/* Polaroid frame with Canvas Reveal */}
            <div className="group relative rotate-[-3deg] bg-[#fbfbfb] p-3 pb-12 shadow-2xl shadow-black/30 w-[240px] mx-auto md:mx-0 border border-neutral-200 cursor-pointer">
              
              {/* Realistic Paperclip */}
              <div className="absolute -top-12 left-1/2 -translate-x-1/2 w-6 h-24 z-30">
                <svg viewBox="0 0 24 96" fill="none" stroke="#777" strokeWidth="2.5" className="w-full h-full drop-shadow-[2px_4px_3px_rgba(0,0,0,0.3)]">
                  <path d="M12,85 C6.5,85 2,80.5 2,75 L2,20 C2,10.6 9.6,3 19,3 C22.9,3 26,6.1 26,10 L26,65 C26,68.9 22.9,72 19,72 L12,72 C9.2,72 7,69.8 7,67 L7,25" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              
              {/* Interactive Photo Area */}
              <div className="relative w-full aspect-[4/5] overflow-hidden bg-[#274533] flex items-center justify-center">
                {/* Default state: Image */}
                <div className="absolute inset-0 z-10 transition-opacity duration-500 group-hover:opacity-0 mix-blend-luminosity">
                   <Image src="/portfolio_image-Photoroom.png" alt="Santhosh Kunam" fill className="object-cover object-top opacity-90 sepia-[.3]" />
                </div>
                
                {/* Hover state: Canvas Reveal Effect */}
                <div className="absolute inset-0 z-0">
                  <CanvasRevealEffect
                    animationSpeed={3}
                    containerClassName="bg-[#274533]"
                    colors={[
                      [110, 231, 183], // emerald-300
                      [52, 211, 153],  // emerald-400
                    ]}
                    dotSize={2}
                  />
                </div>
              </div>
              <p className="text-center text-neutral-400 text-xs mt-3 font-mono tracking-widest uppercase relative z-20">Santhosh Kunam</p>
            </div>

            {/* Torn Notepad Card */}
            <div className="relative mt-2 ml-4 rotate-[2deg] bg-[#fdfaf1] border border-neutral-300 shadow-xl p-5 w-[250px] mx-auto md:mx-0 font-mono text-neutral-800"
                 style={{ clipPath: "polygon(0 0, 100% 0, 100% 100%, 5% 100%, 0 95%, 5% 90%, 0 85%, 5% 80%, 0 75%, 5% 70%, 0 65%, 5% 60%, 0 55%, 5% 50%, 0 45%, 5% 40%, 0 35%, 5% 30%, 0 25%, 5% 20%, 0 15%, 5% 10%, 0 5%)" }}>
              <div className="absolute inset-0 pointer-events-none" style={{ backgroundImage: "repeating-linear-gradient(transparent, transparent 31px, rgba(0,0,0,0.06) 31px, rgba(0,0,0,0.06) 32px)", backgroundPositionY: "35px" }} />
              
              {/* Handwritten name on notepad */}
              <h3 className="text-2xl font-bold mb-1" style={{ fontFamily: "'Caveat', cursive", letterSpacing: "2px" }}>Santhosh</h3>
              <p className="text-sm font-semibold mb-5" style={{ fontFamily: "'Caveat', cursive", opacity: 0.8 }}>01 / 01 / 2024</p>
              
              <ul className="space-y-4 text-sm relative z-10 font-bold" style={{ fontFamily: "'Caveat', cursive", fontSize: "1.2rem", color: "#333" }}>
                <li>Role <span className="font-normal opacity-70 ml-2">, Software Engineer</span></li>
                <li>Focus <span className="font-normal opacity-70 ml-2">, Cloud & AI</span></li>
                <li>Location <span className="font-normal opacity-70 ml-2">, India</span></li>
              </ul>
            </div>
          </div>

          {/* Right Column – Text & Swatches */}
          <div className="flex-1 pt-6 md:pt-10">
            {/* Title */}
            <h2 className="text-4xl md:text-6xl font-bold text-neutral-800 mb-2 rotate-[-2deg]" style={{ fontFamily: "'Caveat', cursive" }}>
              About me
            </h2>
            {/* Scribble line */}
            <svg className="w-56 h-4 mb-8 rotate-[-1deg] opacity-70" viewBox="0 0 200 10" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M2.5 5C50 2 150 8 197.5 5" stroke="#111" strokeWidth="2" strokeLinecap="round" style={{ filter: "url(#roughness)" }}/>
              <defs>
                <filter id="roughness">
                  <feTurbulence type="fractalNoise" baseFrequency="0.5" numOctaves="3" result="noise" />
                  <feDisplacementMap in="SourceGraphic" in2="noise" scale="2" xChannelSelector="R" yChannelSelector="G" />
                </filter>
              </defs>
            </svg>

            {/* Handwritten intro block */}
            <div className="text-neutral-700 leading-[2.2] md:leading-[2.5] pr-4 max-w-xl" style={{ fontFamily: "'Caveat', cursive", fontSize: "1.35rem", fontWeight: 600 }}>
              <p className="mb-6 indent-8">
                I'm a software engineer passionate about modern web technologies and cloud architecture. I enjoy bridging the gap between design and engineering, creating experiences that look beautiful and perform perfectly.
              </p>
              <p className="mb-8">
                Currently, I'm building generative AI tools, diving deep into RAG systems, and exploring Next.js ecosystems. When I'm away from the keyboard, you'll find me exploring new coffee shops and plotting my next big project.
              </p>
            </div>

            {/* Color Swatches (Pantone style) & Stamp */}
            <div className="relative flex gap-1 md:gap-4 mt-12 items-end justify-end md:justify-start">
              
              {/* Tape for swatches */}
              <div className="absolute -top-3 left-10 md:left-20 w-32 h-8 bg-[#e8e6df] rotate-[-5deg] z-30 shadow-sm border border-neutral-300 opacity-90" style={{ clipPath: "polygon(5% 0%, 95% 5%, 100% 90%, 0% 100%)" }} />

              {/* Yellow Mustard Swatch */}
              <div className="relative rotate-[-3deg] w-32 bg-[#ffbf47] shadow-xl p-2 pb-12 rounded-sm border border-neutral-200 ml-4 z-10 transition-transform hover:-translate-y-2">
                <div className="absolute bottom-2 left-2 flex flex-col">
                  <span className="text-white text-xl font-bold" style={{ fontFamily: "'Caveat', cursive" }}>Yellow</span>
                  <span className="text-white text-xl font-bold -mt-2" style={{ fontFamily: "'Caveat', cursive" }}>Mustard</span>
                </div>
                {/* White bottom border area (like pantone card) */}
                <div className="absolute bottom-0 left-0 right-0 h-16 bg-[#fbfbfb] -z-10" />
              </div>

              {/* Greenery Swatch */}
              <div className="relative rotate-[4deg] w-36 bg-[#274533] shadow-2xl p-2 pb-14 rounded-sm border border-neutral-200 -ml-4 z-20 transition-transform hover:-translate-y-2">
                <div className="absolute bottom-3 left-3">
                  <span className="text-white text-2xl font-bold" style={{ fontFamily: "'Caveat', cursive" }}>Greenery</span>
                </div>
                {/* White bottom border area */}
                <div className="absolute bottom-0 left-0 right-0 h-16 bg-[#fbfbfb] -z-10" />
              </div>

              {/* Classified Red Stamp */}
              <div className="absolute -bottom-8 -right-4 md:right-10 w-40 h-40 border-[6px] border-red-600/60 rounded-full flex items-center justify-center rotate-[-15deg] pointer-events-none mix-blend-multiply opacity-70 z-30"
                   style={{ maskImage: "url('https://www.transparenttextures.com/patterns/grunge-wall.png')", WebkitMaskImage: "url('https://www.transparenttextures.com/patterns/grunge-wall.png')" }}>
                <div className="w-[88%] h-[88%] border-2 border-red-600 rounded-full flex flex-col items-center justify-center pt-2">
                  <div className="uppercase text-red-600 font-bold tracking-widest text-sm absolute top-2 pb-2" style={{ transform: "rotate(-10deg) arc", clipPath: "ellipse(100% 100% at 50% 100%)"}}>CLASSIFIED</div>
                  <span className="text-red-600 font-bold text-3xl tracking-widest mt-2 border-y-2 border-red-600 py-1 w-full text-center">TOP SECRET</span>
                </div>
              </div>

            </div>
          </div>
        </div>
        
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
