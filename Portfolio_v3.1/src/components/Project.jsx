import ProjectCard from "../utilities/ProjectCard";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import AnimatedLine from "../utilities/AnimatedLine";

gsap.registerPlugin(ScrollTrigger);

export default function Project() {
  const containerRef = useRef(null);

  useGSAP(() => {
    const ctx = gsap.context(() => {
      const elements = gsap.utils.toArray(".project-reveal");

      gsap.from(elements, {
        y: 30,
        opacity: 0,
        duration: 0.8,
        ease: "power2.out",
        stagger: 0.15,
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      className="md:max-w-4xl max-w-3xl mx-auto px-2 md:px-6 py-12 text-center"
    >
      {/*  Badge + SVG Line */}
      <div className="project-reveal relative flex items-center justify-center mb-8">
        <div className="pointer-events-none absolute left-40 top-0 h-full w-16 bg-linear-to-r from-white to-transparent z-10" />

        {/* RIGHT FADE */}
        <div className="pointer-events-none absolute right-40 top-0 h-full w-16 bg-linear-to-l from-white to-transparent z-10" />

        {/* SVG LINE (behind) */}
        <div className="absolute max-w-xl mx-auto flex items-center">
          <AnimatedLine />
        </div>

        {/* BADGE */}
        <span className="relative z-10 text-sm md:text-md font-cabinet font-semibold tracking-wider text-amber-100 border border-amber-900 bg-black px-4 py-1 rounded-full">
          My Projects
        </span>
      </div>

      {/* Heading */}
      <div className="heading pb-8">
        <h2 className="project-reveal text-2xl md:text-3xl lg:text-4xl font-cabinet font-bold text-slate-800 mb-4 tracking-tight leading-tight">
          Check out my latest wor
          <span className="font-melodrama font-bold text-amber-500 text-3xl md:text-4xl pl-0.5">
            k.
          </span>
        </h2>

        {/* Subtext */}
        <p className="project-reveal text-sm md:text-base lg:text-lg font-cabinet text-zinc-800 leading-tight max-w-xl mx-auto">
          I enjoy crafting modern, minimal, and visually engaging intuitive web
          experiences. These projects reflect my focus on clean UI, smooth
          interactions, and thoughtful frontend architecture.
        </p>
      </div>

      {/* Cards */}
      <ProjectCard />
    </section>
  );
}
