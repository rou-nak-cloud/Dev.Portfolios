import React from "react";

export default function ParaMarquee() {
  const lines = ["Crafting modern experiences.", "Smooth interactions matter."];

  const repeated = [...lines, ...lines]; // duplicate for loop

  return (
    <section className="md:max-w-4xl max-w-2xl overflow-hidden py-5 m-auto">
      <div className="relative overflow-hidden">
        {/* LEFT FADE */}
        <div className="pointer-events-none absolute left-0 top-0 h-full w-16 bg-linear-to-r from-white to-transparent z-10" />
        {/* RIGHT FADE */}
        <div className="pointer-events-none absolute right-0 top-0 h-full w-16 bg-linear-to-l from-white to-transparent z-10" />

        {/*  Marquee */}
        <div className="flex w-max gap-1 uppercase marquee-reverse-text">
          {repeated.map((line, i) => (
            <div key={i} className="flex items-center justify-center gap-6">
              <h2 className="text-3xl md:text-5xl text-orange-300/80 font-bold whitespace-nowrap">
                {line}
              </h2>

              {/*  DOT */}
              <span className="marquee-stroke text-orange-800/30 text-[3vw] md:text-[8vw] leading-0">
                •
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
