import { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import DetailedProjects from "./DetailedProjects";

gsap.registerPlugin(ScrollTrigger, useGSAP);

export default function ProjectSection() {
  const projectSectionRef = useRef(null);
  const projectTextRef = useRef(null);

  useGSAP(() => {
    const el = projectTextRef.current;
    if (!el) return;

    gsap.from(el, {
      y: 60,
      opacity: 0,
      duration: 1,
      delay: 0.2,
      ease: "power3.out",
      scrollTrigger: {
        trigger: el,
        start: "top 85%",
        toggleActions: "play none none reverse",
      },
    });
  }, []);

  const mouseMoving = (e) => {
    const el = projectTextRef.current;
    if (!el) return;

    const rect = el.getBoundingClientRect();

    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    const x = e.clientX - centerX;
    const y = e.clientY - centerY;

    const rotateX = (-y / rect.height) * 40;
    const rotateY = (x / rect.width) * 40;

    const clamp = (val, min, max) => Math.max(min, Math.min(max, val));

    gsap.to(el, {
      rotateX: clamp(rotateX, -18, 18),
      rotateY: clamp(rotateY, -18, 18),
      duration: 0.5,
      ease: "power2.out",
      transformPerspective: 1000,
      transformOrigin: "center",
    });
  };

  const handleLeave = () => {
    const el = projectTextRef.current;
    if (!el) return;

    gsap.to(el, {
      rotateX: 0,
      rotateY: 0,
      duration: 1.2,
      ease: "elastic.out(1, 0.5)",
    });
  };

  return (
    <div
      ref={projectSectionRef}
      onMouseMove={mouseMoving}
      onMouseLeave={handleLeave}
      className="relative w-full overflow-hidden bg-white pt-14 md:pt-10 pb-12 md:pb-15 select-none"
      style={{ perspective: "1200px" }} // perspective stays on parent
    >
      {/* DOT PATTERN */}
      <div
        className="absolute inset-0 z-0 h-52 w-full dots-animated pointer-events-none"
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
        <h1
          ref={projectTextRef}
          className="flex items-center justify-center text-4xl sm:text-5xl md:text-7xl tracking-wider text-zinc-900 font-melodrama will-change-transform"
          style={{ transformStyle: "preserve-3d" }}
        >
          Projects
          <span className="text-[#fbbf24]">.</span>
        </h1>
      </div>
      <DetailedProjects sectionRef={projectSectionRef} />
    </div>
  );
}
