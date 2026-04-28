// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { useEffect, useRef } from "react";
import { FaCode, FaICursor, FaMagic } from "react-icons/fa";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Playground() {
  const sectionRef = useRef(null);
  const cardsRef = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // 1. Scroll-Linked Entrance (The "Pull" Effect)
      gsap.from(cardsRef.current, {
        y: 100,
        opacity: 0,
        rotationX: -15, // Slight 3D tilt
        stagger: 0.06,
        ease: "power2.out",
        clearProps: "all",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 90%",
          end: "top 60%",
          scrub: 1,
          toggleActions: "play none none reverse",
        },
      });

      // 2. Floating Icons (Keep this as is for subtle life)
      gsap.to(".playground-icon", {
        y: -8,
        duration: 1.5,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        stagger: { each: 0.3, from: "random" },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const experiments = [
    { title: "Glass UI", tool: "Framer Motion", icon: <FaMagic /> },
    { title: "Micro-Interactions", tool: "React Icons", icon: <FaCode /> },
    { title: "Custom Cursors", tool: "GSAP", icon: <FaICursor /> },
  ];

  return (
    <section
      ref={sectionRef}
      className="py-20 bg-white pt-32 overflow-hidden perspective-1000"
    >
      <div className="max-w-4xl mx-auto px-6">
        <div className="flex items-center justify-between mb-12">
          <div>
            <h2 className="text-[10px] font-cabinet font-bold uppercase tracking-[0.3em] text-orange-400 mb-2">
              The Lab
            </h2>
            <h3 className="text-4xl font-melodrama text-zinc-900 flex flex-wrap items-baseline gap-3">
              Playground
              <span className="text-[14px] font-cabinet uppercase tracking-widest text-emerald-500/50 animate-pulse">
                [ Under Construction ]
              </span>
            </h3>
          </div>
          <p className="hidden md:block max-w-50 text-right text-[11px] font-cabinet text-zinc-400 uppercase leading-relaxed">
            A collection of small experiments & digital sketches.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          {experiments.map((item, i) => (
            <motion.div
              key={i}
              ref={(el) => (cardsRef.current[i] = el)}
              whileHover={{ scale: 0.97, y: -5 }}
              className="group relative aspect-square bg-zinc-50 border border-zinc-100 rounded-[2.5rem] p-10 flex flex-col justify-between hover:bg-white hover:shadow-2xl hover:shadow-emerald-100/50 transition-all duration-500 overflow-hidden"
            >
              <div className="absolute -bottom-12 -right-12 w-40 h-40 bg-emerald-50 rounded-full blur-3xl group-hover:bg-emerald-100 transition-colors" />

              <div className="playground-icon text-emerald-500 text-2xl opacity-30 group-hover:opacity-100 transition-opacity">
                {item.icon}
              </div>

              <div className="relative z-10">
                <span className="block text-[9px] font-cabinet font-bold uppercase tracking-[0.2em] text-zinc-300 mb-1 group-hover:text-emerald-400 transition-colors">
                  {item.tool}
                </span>
                <h4 className="text-base font-cabinet font-bold text-zinc-800">
                  {item.title}
                </h4>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
