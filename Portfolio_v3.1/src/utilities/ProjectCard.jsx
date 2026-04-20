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
          x: isLeft ? -100 : 100, // alternate direction
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
      className="grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-3 px-1 md:px-5"
    >
      {PROJECTS.map((project, idx) => (
        <a
          key={idx}
          href={project.href}
          target="_blank"
          rel="noopener noreferrer"
          className="project-card group rounded-xl border border-zinc-400/40 overflow-hidden hover:shadow-xl hover:shadow-amber-500/10 transition-all duration-300 flex flex-col cursor-pointer"
        >
          {/* Image */}
          <div className="relative h-54 w-full overflow-hidden bg-zinc-800">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />

            {/* Floating Badges */}
            <div className="absolute top-3 right-3 flex gap-2">
              {project.links.map((link, i) => (
                <a
                  key={i}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 bg-zinc-900/80 backdrop-blur border border-zinc-600 text-[10px] font-semibold text-white px-3 py-1 rounded-xl hover:border-amber-400 hover:text-amber-500 transition-all duration-300"
                >
                  {link.type === "Website" ? (
                    <LuGlobe size={12} />
                  ) : (
                    <LuGithub size={12} />
                  )}
                  {link.type}
                </a>
              ))}
            </div>
          </div>

          {/* Content */}
          <div className="p-5 flex flex-col flex-1">
            <div className="flex justify-between items-center mb-1">
              <h3 className="text-xl leading-tight text-left font-cabinet font-bold text-slate-800 group-hover:text-amber-600 transition-colors">
                {project.title}
              </h3>

              <LuArrowUpRight
                className="text-slate-400 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"
                size={23}
              />
            </div>

            <p className="text-xs text-left text-zinc-500 font-medium mb-3">
              {project.dates}
            </p>

            <p className="text-md leading-4 text-left text-zinc-800/80 mb-6 flex-1">
              {project.description}
            </p>

            {/* Tags */}
            <div className="flex flex-wrap gap-1.5">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-[.7rem] font-cabinet font-semibold text-zinc-800 px-3 rounded-xl border border-orange-950/30 hover:-translate-y-0.5 hover:text-orange-600 transition-all duration-300"
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
