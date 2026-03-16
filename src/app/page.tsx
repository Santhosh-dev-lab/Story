"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { TracingBeam } from "@/components/ui/tracing-beam";
import { HoverEffect } from "@/components/ui/card-hover-effect";
import { Cover } from "@/components/ui/cover";

import { MaskContainer } from "@/components/ui/svg-mask-effect";
import { EncryptedText } from "@/components/ui/encrypted-text";
import { Spotlight } from "@/components/ui/spotlight";
import { EvervaultCard } from "@/components/ui/evervault-card";
import { DraggableSkills } from "@/components/ui/draggable-skills";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import { Meteors } from "@/components/ui/meteors";
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import { TerminalBadge } from "@/components/ui/terminal-badge";
import { FloatingDock } from "@/components/ui/floating-dock";

import Image from "next/image";
import {
  Brain,
  Cpu,
  Coffee,
  Sparkles,
  Globe,
  Rocket,
  ShieldCheck,
  Mail,
  Github,
  Linkedin,
  ExternalLink,
  Camera,
  Laptop,
  Terminal as TerminalIcon
} from "lucide-react";
import { EngineeringStamp } from "@/components/ui/engineering-stamp";

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
      <div className="relative flex flex-col md:flex-row items-center justify-between h-[100dvh] md:min-h-screen w-full antialiased overflow-hidden bg-black">


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
      </div>

      {/* About Me – Semi-Transparent Scrapbook Layout */}
      <section id="about" className="py-20 md:py-32 bg-black relative overflow-hidden">
        <Spotlight
          className="-top-40 left-0 md:left-60 md:-top-20"
          fill="white"
        />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">About Me</h2>
            <div className="h-1 w-20 bg-neutral-800 rounded-full" />
          </motion.div>

          <BentoGrid className="max-w-7xl mx-auto md:auto-rows-[30rem]">
            {/* Main Bio Card */}
            <BentoGridItem
              title="The Narrative"
              description={
                <div className="space-y-6">
                  <TextGenerateEffect 
                    words="I'm a software engineer dedicated to building the next generation of web intelligence. By bridging the gap between rigorous engineering and intuitive design, I create performance-first applications that feel like magic. My work is driven by a deep curiosity for how things work and a relentless pursuit of pixel-perfect execution." 
                    className="text-sm font-normal text-neutral-300 leading-relaxed"
                  />
                  <div className="grid grid-cols-2 gap-4">
                    <div className="p-3 rounded-lg bg-neutral-900/50 border border-neutral-800/50">
                      <p className="text-[10px] text-emerald-500 font-mono mb-1 uppercase tracking-tighter">// EXPLORING</p>
                      <p className="text-[11px] text-neutral-400">LLM Orchestration, RAG Architectures, Vector Databases</p>
                    </div>
                    <div className="p-3 rounded-lg bg-neutral-900/50 border border-neutral-800/50">
                      <p className="text-[10px] text-amber-500 font-mono mb-1 uppercase tracking-tighter">// INTERESTS</p>
                      <p className="text-[11px] text-neutral-400">Cinematography, Mechanical Keyboards, Specialty Coffee</p>
                    </div>
                  </div>
                </div>
              }
              header={<div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl border border-neutral-800 items-center justify-center relative overflow-hidden group/narrative">
                <Image 
                  src="/images/bento_narrative_bg.png"
                  alt="Narrative Background"
                  fill
                  className="object-cover opacity-30 group-hover/narrative:scale-110 transition-transform duration-1000"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent z-[1]" />
                <div className="relative z-10 p-8 flex flex-col items-center">
                  <Brain className="h-16 w-16 text-white/40 mb-4 filter drop-shadow-[0_0_15px_rgba(16,185,129,0.2)]" />
                  <div className="px-4 py-1 rounded-full border border-neutral-700 bg-neutral-800/50 backdrop-blur-sm text-[10px] font-mono text-neutral-400">
                    SINCERE_ENGINEERING_V4.2
                  </div>
                </div>
              </div>}
              className="md:col-span-2"
              icon={<Sparkles className="h-4 w-4 text-emerald-500" />}
            />

            {/* Tech Arsenal Card */}
            <BentoGridItem
              title="Tech Stack Sandbox"
              description="An interactive visualization of my core competencies. Go ahead, toss them around — I promise they won't break the build."
              header={<div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl border border-neutral-800 relative overflow-hidden group/tech bg-black">
                <DraggableSkills />
              </div>}
              icon={<Cpu className="h-4 w-4 text-emerald-500" />}
            />

            {/* Status / Security Card */}
            <BentoGridItem
              title="Operational Status"
              description="Continuous integration, continuous deployment, and continuous excellence. Monitoring core vitals across all production systems."
              header={<div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl border border-neutral-800 flex-col items-center justify-center group/status relative overflow-hidden bg-black">
                <Image 
                  src="/images/bento_status_bg.png"
                  alt="Status Background"
                  fill
                  className="object-cover opacity-20"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-black z-[1]" />
                <Meteors number={30} />
                <div className="relative z-10 flex flex-col items-center">
                  <div className="p-4 rounded-2xl bg-emerald-500/5 border border-emerald-500/20 backdrop-blur-sm mb-4 group-hover/status:border-emerald-500/50 transition-all duration-700">
                    <ShieldCheck className="w-16 h-16 text-emerald-500/40 group-hover/status:text-emerald-500 transition-all duration-700 group-hover/status:scale-110" />
                  </div>
                  <div className="flex flex-col items-center space-y-2">
                    <div className="px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-[10px] font-mono text-emerald-400 tracking-widest font-bold">
                      SYSTEM_LOAD: OPTIMAL // 0.04ms
                    </div>
                    <div className="text-[9px] uppercase font-mono text-neutral-600 tracking-[0.2em]">
                      LATENCY: 12ms // UPTIME: 99.9%
                    </div>
                  </div>
                </div>
              </div>}
              className="md:col-span-2"
              icon={<Rocket className="h-4 w-4 text-emerald-500" />}
            />

            {/* Engineering Stamp - Standalone */}
            <div className="flex items-center justify-center p-4 relative overflow-hidden">
              <EngineeringStamp />
            </div>
          </BentoGrid>
        </div>
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
