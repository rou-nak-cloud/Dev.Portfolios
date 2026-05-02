import React from "react";

export default function ProjectMarquee({
  lines = [
    "Building with React & GSAP",
    "Tailwind CSS enthusiast",
    "Minimalism is intentional",
    "Archive 2024 — 2026",
    "Designing for the user",
  ],
  speedClass = "marquee-reverse-text",
}) {
  // Double the lines for a seamless loop
  const repeated = [...lines, ...lines, ...lines];

  return (
    <section className="max-w-4xl mx-auto overflow-hidden py-12 border-y border-zinc-100/30">
      <div className="relative overflow-hidden">
        {/* Soft Fades for a modern look */}
        <div className="pointer-events-none absolute left-0 top-0 h-full w-20 bg-linear-to-r from-white to-transparent z-10" />
        <div className="pointer-events-none absolute right-0 top-0 h-full w-20 bg-linear-to-l from-white to-transparent z-10" />

        <div className={`flex w-max gap-10 items-center ${speedClass}`}>
          {repeated.map((line, i) => (
            <div key={i} className="flex items-center gap-10">
              {/* Using Cabinet for that bold, modern portfolio look */}
              <h2 className="text-4xl md:text-6xl font-cabinet font-bold uppercase tracking-tighter text-zinc-900/10 hover:text-orange-500/30 transition-colors duration-500 cursor-default">
                {line}
              </h2>

              {/* Minimalist Separator: Amber dot + Zinc line */}
              <div className="flex items-center gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-orange-400" />
                <div className="w-10 h-px bg-zinc-200" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
