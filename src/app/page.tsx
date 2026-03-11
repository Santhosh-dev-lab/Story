"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { TracingBeam } from "@/components/ui/tracing-beam";
import { HoverEffect } from "@/components/ui/card-hover-effect";
import { Cover } from "@/components/ui/cover";
import { BackgroundBeams } from "@/components/ui/background-beams";
import { MaskContainer } from "@/components/ui/svg-mask-effect";

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
            className="absolute text-2xl md:text-5xl font-bold text-white dark:text-black opacity-80"
            animate={{
              x: [`${randomXStart}vw`, `${randomXEnd}vw`, `${randomXStart}vw`],
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
      {/* Hero Section */}
      <div className="relative flex flex-col items-center justify-center min-h-screen px-4 antialiased overflow-hidden">
        <BackgroundBeams className="z-0" />
        <motion.div
          initial={{ opacity: 0.0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="relative flex flex-col gap-4 items-center justify-center px-4 z-10 w-full"
        >
          <MaskContainer
            revealText={
              <h1 className="text-4xl md:text-4xl lg:text-7xl font-semibold max-w-7xl mx-auto text-center relative z-20 py-6 bg-clip-text text-transparent bg-gradient-to-b from-neutral-800 via-neutral-700 to-neutral-700 dark:from-neutral-800 dark:via-white dark:to-white pointer-events-auto">
                Santhosh <Cover>Kunam</Cover>
              </h1>
            }
            className="h-[40rem] rounded-md w-full"
          >
            <FloatingInterests />
          </MaskContainer>
          <div className="font-extralight text-base md:text-4xl dark:text-neutral-200 py-4 -mt-20">
            And this, is my story.
          </div>
          <button className="bg-white rounded-full w-fit text-black px-4 py-2 hover:bg-neutral-200 transition-colors">
            Explore now
          </button>
        </motion.div>
      </div>

      {/* Storytelling About Section */}
      <section className="py-20 w-full bg-black">
        <TracingBeam className="px-6">
          <div className="max-w-2xl mx-auto antialiased pt-4 relative">
            <h2 className="text-3xl font-bold text-white mb-8">My Journey</h2>
            
            <div className="mb-10 content">
              <p className="text-neutral-300 text-lg mb-4">
                I started my journey as a developer with a passion for building things that live on the internet. What started as simple HTML and CSS websites grew into a multifaceted skillset encompassing modern web frameworks, complex animations, and full-stack development.
              </p>
              <p className="text-neutral-300 text-lg mb-4">
                Today, my focus is bridging the gap between design and engineering. I strive to create web experiences that are not only performant and perfectly structured but also highly engaging and breathtaking to look at.
              </p>
            </div>

            <h2 className="text-3xl font-bold text-white mb-8 mt-16">Skills & Tools</h2>
            <div className="mb-10 content">
              <p className="text-neutral-300 text-lg mb-4">
                My toolbelt is constantly evolving, but here are some of the technologies I frequently use to bring ideas to life:
              </p>
              <ul className="list-disc pl-5 text-neutral-300 text-lg space-y-2">
                <li><strong className="text-white">Frontend:</strong> React, Next.js, Framer Motion, Tailwind CSS</li>
                <li><strong className="text-white">Creative Coding:</strong> Aceternity UI, Three.js, WebGL</li>
                <li><strong className="text-white">Backend:</strong> Node.js, Express, PostgreSQL, MongoDB</li>
              </ul>
            </div>
          </div>
        </TracingBeam>
      </section>

      {/* Projects Showcase */}
      <section className="py-20 bg-black border-t border-neutral-800">
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
