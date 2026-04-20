import { interests } from "../constants";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function Interest() {
  const containerRef = useRef(null);
  const headerRef = useRef(null);

  gsap.registerPlugin(ScrollTrigger, useGSAP);

  useGSAP(
    () => {
      gsap.from(headerRef.current, {
        y: 80,
        opacity: 0,
        duration: 0.8,
        ease: "power2.out",
        stagger: 0.5,
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 75%",
          end: "bottom 80%",
          toggleActions: "play none none reverse",
        },
      });

      const cards = gsap.utils.toArray(".interest-row");
      gsap.from(cards, {
        y: 60,
        opacity: 0,
        duration: 0.3,
        ease: "expo.out",
        stagger: 0.15,
        clearProps: "all", // Clears GSAP styles after animation completes
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 95%",
          end: "top -80%",
          scrub: true,
          // toggleActions: "play none none reverse",
        },
      });
    },
    { scope: containerRef },
  );

  return (
    <section
      ref={containerRef}
      className="max-w-2xl mx-auto px-4 sm:px-6 py-16 md:py-20 font-cabinet"
    >
      {/* BADGE STYLE */}
      <div
        ref={headerRef}
        className="flex items-center justify-center gap-2 mb-5"
      >
        <div className="h-px flex-1 bg-linear-to-l from-gray-400/60 via-zinc-400/40 to-transparent"></div>
        <span className="text-xs font-semibold tracking-wider text-amber-100 border border-amber-900 bg-black px-3 py-1 rounded-full">
          Interests
        </span>
        <div className="h-px flex-1 bg-linear-to-r from-gray-400/60 via-zinc-400/40 to-transparent"></div>
      </div>

      {/* Heading */}
      <div ref={headerRef} className="text-center mb-10">
        <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 tracking-tight">
          <span className="text-amber-500 font-melodrama">B</span>eyond the cod
          <span className="text-amber-500 font-melodrama">e.</span>
        </h2>
      </div>

      <div className="space-y-1">
        {interests.map((item, index) => (
          <div
            key={index}
            className="interest-row relative border border-zinc-200/50 py-8 px-6 -mx-4 mb-4 rounded-2xl 
                     bg-white/40 backdrop-blur-lg shadow-sm transition-all duration-500 
                     hover:bg-orange-100/60 hover:border-amber-200/50 hover:shadow-xl hover:shadow-amber-500/5 
                     group overflow-hidden"
          >
            {/* TOP DECORATION: Subtle Amber Gradient Glow */}
            <div className="absolute top-0 left-0 w-full h-1 bg-linear-to-r from-transparent via-amber-400/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            {/* Top Metadata Style */}
            <div className="flex items-center justify-between mb-6">
              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-amber-600">
                Topic // 0{index + 1}
              </span>
              <span className="text-[10px] text-zinc-400 uppercase tracking-widest font-medium">
                {item.date || "2026"}
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
              {/* Title */}
              <div className="md:col-span-5">
                <h3 className="text-2xl md:text-4xl font-bold text-zinc-800 group-hover:text-amber-600 transition-colors duration-300">
                  {item.title}
                </h3>
              </div>

              {/* Description */}
              <div className="md:col-span-7">
                <p className="text-zinc-600 text-sm md:text-base leading-tight font-medium">
                  {item.desc}
                </p>
              </div>
            </div>

            {/* The "Step" indicator - Bottom Left */}
            <div className="mt-10 flex items-center gap-3">
              <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-zinc-400 group-hover:text-zinc-900 transition-colors">
                Step 0{index + 1}
              </span>
              <div className="h-px w-8 bg-zinc-200 group-hover:w-15 group-hover:bg-amber-400 transition-all duration-500"></div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
