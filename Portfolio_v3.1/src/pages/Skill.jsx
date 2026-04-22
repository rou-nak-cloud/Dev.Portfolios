// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { useRef } from "react";
import { skills, skillWords } from "../JsFiles/Skills.js";

export default function Skill() {
  const containerRef = useRef(null);

  return (
    <div className="relative w-full overflow-hidden bg-white pt-14 md:pt-10 pb-12 md:pb-15">
      {/* DOT PATTERN LAYER */}
      <div
        className="absolute inset-0 z-0 h-50 w-full dots-animated"
        style={{
          backgroundImage: `radial-gradient(#34d399 2px, transparent 1px)`,
          backgroundSize: "6px 6px",
          maskImage: "linear-gradient(to bottom, black 10%, transparent 90%)",
          WebkitMaskImage:
            "linear-gradient(to bottom, black 10%, transparent 90%)",
          opacity: 0.6,
        }}
      />

      <div className="container relative z-10 md:mx-auto max-w-3xl px-6">
        {/* YOUR ORIGINAL HEADING (UNCHANGED STYLE, JUST TEXT UPDATED) */}
        <h1 className="flex items-center justify-center text-5xl md:text-7xl tracking-wider text-zinc-900 font-melodrama">
          Skills
          <span className="text-emerald-500">.</span>
        </h1>
        {/*  DRAG AREA */}
        <motion.div
          ref={containerRef}
          className="relative w-full h-64 md:h-80 mb-12"
        >
          {/* Bucket Outer Shell */}
          <div className="absolute inset-0 rounded-2xl border border-amber-200/50 bg-linear-to-b from-amber-100/60 via-amber-50/40 to-white/30 backdrop-blur-md shadow-inner overflow-hidden">
            {/* Top Inner Highlight (gives depth) */}
            <div className="absolute inset-x-0 top-0 h-12 bg-linear-to-b from-white/60 to-transparent pointer-events-none" />

            {/* Bottom Shadow (bucket depth illusion) */}
            <div className="absolute bottom-0 left-0 w-full h-12 bg-linear-to-t from-emerald-100/70 via-emerald-50/50 to-transparent pointer-events-none blur-[0.3px]" />

            <div className="absolute inset-0 flex items-end justify-center pointer-events-none">
              <span className="text-emerald-500 font-melodrama text-[3vw] md:text-[6.5vw] leading-22 tracking-wider opacity-60">
                DRAG ME
              </span>
            </div>

            {/* Inner Content Area */}
            <div className="relative w-full h-full">
              {skills.map((skill, i) => (
                <motion.div
                  key={skill.name}
                  drag
                  dragConstraints={containerRef}
                  dragElastic={0.4}
                  dragMomentum={0.8}
                  whileDrag={{ scale: 0.9 }}
                  whileTap={{ scale: 1.1 }}
                  animate={{ y: [0, -6, 0] }}
                  transition={{
                    repeat: Infinity,
                    duration: 4,
                    ease: "easeInOut",
                  }}
                  className="absolute cursor-grab active:cursor-grabbing 
                 bg-white/80 backdrop-blur-md shadow-md rounded-xl p-3 border border-white/40 touch-none"
                  style={{
                    top: `${10 + ((i * 7) % 47)}%`,
                    left: `${10 + ((i * 9) % 90)}%`,
                  }}
                >
                  <img
                    src={skill.icon}
                    alt={skill.name}
                    className="w-6 h-6 md:w-8 md:h-8 object-contain"
                    draggable={false}
                  />
                </motion.div>
              ))}
              {/* Draggable Texts */}
              {skillWords.map((word, i) => (
                <motion.div
                  key={word}
                  drag
                  dragConstraints={containerRef}
                  dragElastic={0.4}
                  dragMomentum={0.8}
                  whileDrag={{ scale: 0.9 }}
                  whileTap={{ scale: 1.05 }}
                  className="absolute cursor-grab active:cursor-grabbing 
    text-xs md:text-sm font-cabinet font-medium 
    text-emerald-600 bg-white/70 backdrop-blur-sm 
    px-3 py-1 rounded-full shadow-sm border border-white/40 touch-none"
                  style={{
                    top: `${15 + ((i * 9) % 65)}%`,
                    left: `${20 + ((i * 11) % 56)}%`,
                  }}
                >
                  {word}
                </motion.div>
              ))}
            </div>
          </div>

          {/* Optional Outer Glow */}
          <div className="absolute inset-0 rounded-2xl pointer-events-none shadow-[0_10px_40px_rgba(16,185,129,0.15)]" />
        </motion.div>
      </div>
    </div>
  );
}
