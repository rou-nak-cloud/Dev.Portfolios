import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const Footer = () => {
  const footerRef = useRef(null);

  useGSAP(
    () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: footerRef.current,
          start: "top 75%", // Triggers slightly later for a footer
          toggleActions: "play none none reverse",
        },
      });

      // 1. Fade in the background dots subtly
      tl.from(
        ".footer-bg",
        {
          opacity: 0,
          duration: 1.5,
          ease: "power2.out",
        },
        0,
      );

      // 2. Stagger the text content upwards
      tl.from(
        ".footer-reveal",
        {
          y: 30,
          opacity: 0,
          duration: 1,
          ease: "expo.out",
          stagger: 0.15,
          clearProps: "all",
        },
        0.2,
      ); // Start text animation shortly after the background begins fading
    },
    { scope: footerRef },
  );

  return (
    <footer
      ref={footerRef}
      className="relative max-w-3xl mx-auto overflow-hidden rounded-3xl py-16 md:py-24"
    >
      {/* DOT PATTERN AREA - Animated with 'footer-bg' */}
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

      {/* Content */}
      <div className="relative z-10 max-w-2xl mx-auto px-6 text-center">
        {/* Creator Badge (footer-reveal) */}
        <div className="footer-reveal inline-block bg-black text-amber-100 font-cabinet text-[12px] font-bold uppercase tracking-widest px-4 py-0.5 rounded-full mb-6">
          Creator{" "}
          <span className="text-xs text-orange-400/90 font-cabinet">2026</span>
        </div>

        {/* Name (footer-reveal) */}
        <h2 className="footer-reveal text-4xl md:text-5xl font-melodrama font-bold text-slate-900 tracking-tight mb-4">
          Rounak Bakshi
        </h2>

        {/* Tagline (footer-reveal) */}
        <p className="footer-reveal text-slate-500 font-cabinet text-sm max-w-sm mx-auto leading-tight">
          Building digital experiences with purpose. Designed and developed with
          ❤️ in West Bengal.
        </p>

        {/* Quote (footer-reveal) */}
        <blockquote className="footer-reveal text-xl text-amber-800/80 mt-3 font-cabinet">
          "Curiosity drives the idea, discipline builds the product."
        </blockquote>
      </div>
    </footer>
  );
};

export default Footer;
