import React from "react";

export default function TextMarquee() {
  const words = ["REACT", "GSAP", "DESIGN", "ANIMATION", "UI/UX", "FRONTEND"];

  const repeated = [...words, ...words]; // duplicate for loop

  return (
    <section className="max-w-3xl overflow-hidden py-10 m-auto">
      <div className="relative overflow-hidden">
        {/* LEFT FADE */}
        <div className="pointer-events-none absolute left-0 top-0 h-full w-16 bg-linear-to-r from-white to-transparent z-10" />
        {/* RIGHT FADE */}
        <div className="pointer-events-none absolute right-0 top-0 h-full w-16 bg-linear-to-l from-white to-transparent z-10" />

        {/*  Marquee */}
        <div className="flex w-max gap-2 marquee-text">
          {repeated.map((word, i) => (
            <div key={i} className="flex items-center gap-10">
              <h2 className="marquee-stroke text-6xl md:text-8xl font-bold whitespace-nowrap">
                {word}
              </h2>

              {/*  DOT */}
              <span className="text-orange-600/30 text-[4vw] md:text-[10vw] leading-0">
                •
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
