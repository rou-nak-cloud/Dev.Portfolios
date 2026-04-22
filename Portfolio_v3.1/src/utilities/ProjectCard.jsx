import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { projects as PROJECTS } from "../constants";
import { LuArrowUpRight, LuGithub, LuGlobe } from "react-icons/lu";

gsap.registerPlugin(ScrollTrigger);

export default function ProjectCard() {
  const containerRef = useRef(null);

  useGSAP(() => {
    const ctx = gsap.context(() => {
      const cards = gsap.utils.toArray(".project-card");

      cards.forEach((card, i) => {
        const isLeft = i % 2 === 0;

        gsap.from(card, {
          xPercent: isLeft ? -30 : 30, // alternate direction
          y: 10, // subtle upward feel
          rotate: isLeft ? -4 : 4, //  subtle tilt
          opacity: 0,
          duration: 0.6,
          filter: "blur(2px)",
          scale: 0.96,
          ease: "expo.out",
          transformOrigin: isLeft ? "left center" : "right center", //  natural motion
          scrollTrigger: {
            trigger: card,
            start: "top 90%",
            toggleActions: "play none none none",
          },
        });
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={containerRef}
      className="max-sm:overflow-x-hidden grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-3 md:gap-4 px-2 sm:px-3 md:px-5 "
    >
      {PROJECTS.map((project, idx) => (
        <a
          key={idx}
          href={project.href}
          target="_blank"
          rel="noopener noreferrer"
          className="project-card group rounded-xl border border-zinc-400/40 overflow-hidden hover:shadow-xl hover:shadow-amber-500/10 transition-all duration-300 flex flex-col cursor-pointer will-change-transform"
        >
          {/* Image */}
          <div className="relative h-44 sm:h-48 md:h-52 lg:h-56 w-full overflow-hidden bg-zinc-800">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />

            {/* Floating Badges */}
            <div className="absolute top-2 right-2 sm:top-3 sm:right-3 flex gap-1.5 sm:gap-2">
              {project.links.map((link, i) => (
                <a
                  key={i}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 bg-zinc-900/80 backdrop-blur border border-zinc-600 text-[9px] sm:text-[10px] font-semibold text-white px-2 py-0.5 sm:px-3 sm:py-1 rounded-xl hover:border-amber-400 hover:text-amber-500 transition-all duration-300"
                >
                  {link.type === "Website" ? (
                    <LuGlobe size={10} />
                  ) : (
                    <LuGithub size={10} />
                  )}
                  {link.type}
                </a>
              ))}
            </div>
          </div>

          {/* Content */}
          <div className="p-4 sm:p-5 flex flex-col flex-1">
            <div className="flex justify-between items-start mb-1 gap-2">
              <h3 className="text-base sm:text-lg md:text-xl leading-tight text-left font-cabinet font-bold text-slate-800 group-hover:text-amber-600 transition-colors">
                {project.title}
              </h3>

              <LuArrowUpRight
                className="text-slate-400 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform shrink-0"
                size={20}
              />
            </div>

            <p className="text-[10px] sm:text-xs text-left text-orange-500 font-medium mb-2 sm:mb-3">
              {project.dates}
            </p>

            <p className="text-sm sm:text-[1.1rem] leading-5 tracking-normal font-cabinet text-left text-zinc-800/90 mb-4 sm:mb-6 flex-1">
              {project.description}
            </p>

            {/* Tags */}
            <div className="flex flex-wrap gap-1.5">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-[10px] sm:text-[.7rem] font-cabinet font-semibold text-zinc-800 px-2 sm:px-3 py-0.5 rounded-xl border border-orange-950/30 hover:-translate-y-0.5 hover:text-orange-600 transition-all duration-300"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </a>
      ))}
    </div>
  );
}
