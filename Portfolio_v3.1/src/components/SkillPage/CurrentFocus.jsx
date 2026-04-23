import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP, ScrollTrigger);

export default function CurrentFocus() {
  const sectionRef = useRef(null);
  const cardContainerRef = useRef(null);
  const cardsRef = useRef([]);

  useGSAP(
    () => {
      // We target the children of the container directly
      const cards = cardContainerRef.current.children;

      gsap.fromTo(
        cards,
        {
          y: 100,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          stagger: 0.15,
          duration: 0.4,
          ease: "expo.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%", // Animation starts when top of section hits 80% of viewport
            // markers: true,
            toggleActions: "play none none reverse",
          },
        },
      );
    },
    { scope: sectionRef },
  );

  const focuses = [
    { label: "Learning", text: "Three.js & WebGL", color: "bg-emerald-400" },
    {
      label: "Exploring",
      text: "GSAP & Framer Motion",
      color: "bg-purple-300",
    },
    {
      label: "Building",
      text: "Interactive Portfolios & Websites",
      color: "bg-amber-400",
    },
  ];

  return (
    <section ref={sectionRef} className="py-5 pb-16 bg-white overflow-hidden">
      <div className="max-w-5xl mx-auto px-6">
        <div
          ref={cardContainerRef}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {focuses.map((item, idx) => (
            <div
              key={idx}
              ref={(el) => (cardsRef.current[idx] = el)}
              className="group relative p-8 rounded-2xl border border-zinc-100 bg-zinc-50/50 hover:bg-white hover:shadow-xl hover:shadow-zinc-200/50 transition-all duration-500"
            >
              {/* Top accent line */}
              <div
                className={`absolute top-0 left-8 right-8 h-1 ${item.color} rounded-b-full transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500`}
              />

              <span className="text-xs font-bold font-cabinet uppercase tracking-[0.2em] text-zinc-400">
                {item.label}
              </span>

              <h3 className="mt-3 text-xl md:text-2xl font-melodrama font-semibold text-zinc-800">
                {item.text}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
