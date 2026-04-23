// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { useRef } from "react";
import { skills, skillWords } from "../../JsFiles/Skills";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function SkillSection() {
  const containerRef = useRef(null);
  const skillSectionRef = useRef(null);
  const skillTextRef = useRef(null);
  const bucketRef = useRef(null); // Added ref for the bucket

  // --- REVEAL ANIMATION ---
  useGSAP(
    () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: skillSectionRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      });

      // 1. Reveal the "Skills." text first
      tl.from(skillTextRef.current, {
        y: 50,
        opacity: 0,
        rotateX: -20,
        duration: 1.2,
        ease: "expo.out",
      })
        // 2. Reveal the bucket background
        .from(
          bucketRef.current,
          {
            scaleY: 0.9,
            opacity: 0,
            y: 30,
            duration: 1.5,
            ease: "expo.out",
          },
          "-=0.8",
        ) // Start slightly before text finishes
        // 3. Pop the icons and words in with a "floating" effect
        .from(
          ".skill-item",
          {
            opacity: 0,
            scale: 0.5,
            y: 20,
            stagger: {
              amount: 0.6,
              from: "random",
            },
            duration: 1,
            ease: "back.out(1.7)",
          },
          "-=1",
        );
    },
    { scope: skillSectionRef },
  );

  // Sd effect
  const mouseMoving = (e) => {
    const el = skillTextRef.current;
    if (!el) return;

    const rect = el.getBoundingClientRect();

    // Center position of the text
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    // Distance of mouse from center
    const x = e.clientX - centerX;
    const y = e.clientY - centerY;

    // Calculate rotation (Sensitivity of 20)
    const rotateX = (-y / rect.height) * 40;
    const rotateY = (x / rect.width) * 40;

    // Clamp values for subtle movement
    const clamp = (val, min, max) => Math.max(min, Math.min(max, val));
    const finalX = clamp(rotateX, -22, 22);
    const finalY = clamp(rotateY, -22, 22);

    gsap.to(el, {
      rotateX: finalX,
      rotateY: finalY,
      // scale: 1.01,
      duration: 0.6,
      ease: "power2.out",
      overwrite: "auto",
    });
  };

  const handleLeave = () => {
    const el = skillTextRef.current;
    if (!el) return;

    gsap.to(el, {
      rotateX: 0,
      rotateY: 0,
      scale: 1,
      duration: 6,
      ease: "elastic.out(1, 0.5)", // Smooth bounce back
    });
  };

  return (
    <div
      ref={skillSectionRef}
      onMouseMove={mouseMoving}
      // onTouchMove={(e) => mouseMoving(e.touches[0])}
      onMouseLeave={handleLeave}
      className="relative w-full overflow-hidden bg-white pt-14 md:pt-10 pb-12 md:pb-15 select-none"
      style={{ perspective: "1000px" }} // Required for 3D depth
    >
      {/* DOT PATTERN LAYER */}
      <div
        className="absolute inset-0 z-0 h-50 w-full dots-animated pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(#fbbf24 2px, transparent 1px)`,
          backgroundSize: "6px 6px",
          maskImage: "linear-gradient(to bottom, black 10%, transparent 90%)",
          WebkitMaskImage:
            "linear-gradient(to bottom, black 10%, transparent 90%)",
          opacity: 0.6,
        }}
      />

      <div className="container relative z-10 md:mx-auto max-w-3xl px-4 sm:px-6">
        {/* HEADING */}
        <h1
          ref={skillTextRef}
          className="flex items-center justify-center text-4xl sm:text-5xl md:text-7xl tracking-wider text-zinc-900 font-melodrama will-change-transform"
          style={{ transformStyle: "preserve-3d" }}
        >
          Skills
          <span className="text-[#fbbf24]">.</span>
        </h1>

        {/* DRAG AREA */}
        <motion.div
          ref={containerRef}
          className="relative w-full h-65 sm:h-80 md:h-80 mb-12 mt-12"
        >
          {/* Bucket */}
          <div
            ref={bucketRef}
            className="absolute inset-0 rounded-2xl border border-amber-200/50 bg-linear-to-b from-amber-100/60 via-amber-50/40 to-white/30 backdrop-blur-md shadow-inner overflow-hidden"
          >
            {/* Top highlight */}
            <div className="absolute inset-x-0 top-0 h-12 bg-linear-to-b from-white/60 to-transparent pointer-events-none" />

            {/* Bottom shadow */}
            <div className="absolute bottom-0 left-0 w-full h-12 bg-linear-to-t from-emerald-100/70 via-emerald-50/50 to-transparent pointer-events-none blur-[0.3px]" />

            {/* Center Hint */}
            <div className="absolute inset-0 flex items-end justify-center">
              {/* <motion.div
                drag
                dragConstraints={containerRef}
                dragElastic={0.4}
                dragMomentum={0.8}
                whileDrag={{ scale: 0.9 }}
                whileTap={{ scale: 1.1 }}
                className="cursor-grab active:cursor-grabbing pointer-events-auto pb-3"
              >
                <span className="text-emerald-500/60 font-melodrama text-[8vw] sm:text-[6vw] md:text-[6.5vw] leading-none tracking-wider opacity-60">
                  DRAG ME
                </span>
              </motion.div> */}
              <span className="text-emerald-500/60 font-melodrama text-[8vw] sm:text-[6vw] md:text-[6.5vw] leading-none tracking-wider opacity-60">
                DRAG ME
              </span>
            </div>

            {/* CONTENT */}
            <div className="relative w-full h-full overflow-hidden">
              {/* ICONS */}
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
                  bg-white/80 backdrop-blur-md shadow-md rounded-xl 
                  p-2 sm:p-2.5 md:p-3 border border-white/40 touch-none"
                  style={{
                    top: `${8 + ((i * 13) % 50)}%`,
                    left: `${5 + ((i * 17) % 80)}%`,
                  }}
                >
                  <img
                    src={skill.icon}
                    alt={skill.name}
                    className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 object-contain"
                    draggable={false}
                  />
                </motion.div>
              ))}

              {/* TEXT TAGS */}
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
                  text-[10px] sm:text-xs md:text-sm font-cabinet font-medium 
                  text-emerald-600 bg-white/70 backdrop-blur-sm 
                  px-2 sm:px-2.5 md:px-3 py-0.5 sm:py-1 rounded-full 
                  shadow-sm border border-white/40 touch-none"
                  style={{
                    top: `${10 + ((i * 15) % 75)}%`,
                    left: `${10 + ((i * 19) % 75)}%`,
                  }}
                >
                  {word}
                </motion.div>
              ))}
            </div>
          </div>

          {/* Outer Glow */}
          <div className="absolute inset-0 rounded-2xl pointer-events-none shadow-[0_10px_40px_rgba(16,185,129,0.15)]" />
        </motion.div>
      </div>
    </div>
  );
}
