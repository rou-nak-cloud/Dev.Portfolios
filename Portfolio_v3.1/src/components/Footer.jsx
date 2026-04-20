import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const Footer = () => {
  const footerRef = useRef(null);
  const footerTextRef = useRef(null);

  // 3D MOUSE PERSPECTIVE LOGIC
  const mouseMoving = (e) => {
    const el = footerTextRef.current;
    if (!el) return;

    const rect = el.getBoundingClientRect();

    // Center position of the text
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    // Distance of mouse from center
    const x = e.clientX - centerX;
    const y = e.clientY - centerY;

    // Calculate rotation (Sensitivity of 20)
    const rotateX = (-y / rect.height) * 50;
    const rotateY = (x / rect.width) * 50;

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
    const el = footerTextRef.current;
    if (!el) return;

    gsap.to(el, {
      rotateX: 0,
      rotateY: 0,
      scale: 1,
      duration: 6,
      ease: "elastic.out(1, 0.5)", // Smooth bounce back
    });
  };

  // ENTRANCE ANIMATION
  useGSAP(
    () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: footerRef.current,
          start: "top 90%",
          toggleActions: "play none none reverse",
        },
      });

      tl.from(
        ".footer-bg",
        {
          opacity: 0,
          duration: 1.5,
          ease: "power2.out",
        },
        0,
      );

      tl.from(
        ".footer-reveal",
        {
          y: 30,
          opacity: 0,
          duration: 1,
          ease: "expo.out",
          stagger: 0.15,
          // We don't clearProps "all" here to keep the 3D transforms available for mouse moving
          clearProps: "opacity, y",
        },
        0.2,
      );
    },
    { scope: footerRef },
  );

  return (
    <footer
      ref={footerRef}
      onMouseMove={mouseMoving}
      onMouseLeave={handleLeave}
      className="relative max-w-3xl mx-auto overflow-hidden rounded-3xl py-16 md:py-24 cursor-default"
      style={{ perspective: "2000px" }} // Required for 3D depth
    >
      {/* DOT PATTERN BACKGROUND */}
      <div className="footer-bg absolute left-1/2 -translate-x-1/2 top-27 w-full max-w-3xl h-40 pointer-events-none rounded-2xl overflow-hidden">
        <div
          className="w-full h-full dots-animated"
          style={{
            backgroundImage: `radial-gradient(#fb923c 1.6px, transparent 1px)`,
            backgroundSize: "6px 6px",
            maskImage: "linear-gradient(to bottom, black 0%, transparent 80%)",
            WebkitMaskImage:
              "linear-gradient(to bottom, black 0%, transparent 80%)",
            opacity: 1,
          }}
        />
      </div>

      <div className="relative z-10 max-w-2xl mx-auto px-6 text-center">
        <div className="footer-reveal inline-block bg-black text-amber-100 font-cabinet text-[12px] font-bold uppercase tracking-widest px-4 py-0.5 rounded-full mb-6">
          Creator{" "}
          <span className="text-xs text-orange-400/90 font-cabinet">2026</span>
        </div>

        {/* PERSPECTIVE TEXT */}
        <h2
          ref={footerTextRef}
          className="footer-reveal text-4xl md:text-5xl font-melodrama font-bold text-slate-900 tracking-tight mb-4 select-none"
          style={{ transformStyle: "preserve-3d" }}
        >
          Rounak Bakshi
        </h2>

        <p className="footer-reveal text-slate-500 font-cabinet text-sm max-w-sm mx-auto leading-tight">
          Building digital experiences with purpose. Designed and developed with
          ❤️ in West Bengal.
        </p>

        <blockquote className="footer-reveal text-xl text-amber-800/80 mt-3 font-cabinet italic">
          "Curiosity drives the idea, discipline builds the product."
        </blockquote>
      </div>
    </footer>
  );
};

export default Footer;
