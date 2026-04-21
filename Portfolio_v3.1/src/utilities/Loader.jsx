import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

export default function Loader({ onComplete }) {
  const [counter, setCounter] = useState(0);
  const barRef = useRef(null);

  // ✅ LOCK SCROLL DURING LOADER
  useEffect(() => {
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  // ✅ REVEAL ANIMATION
  const reveal = () => {
    const tl = gsap.timeline({
      onComplete: onComplete,
    });

    tl.to(barRef.current, {
      scaleX: 1,
      duration: 1,
      ease: "expo.inOut",
    })
      .to(".loader-text", {
        opacity: 0,
        duration: 0.3,
      })
      .to(".loader-text", {
        display: "none",
      })
      // ✅ FIXED (no width overflow)
      .to(".loader-content", {
        scaleX: 1,
        duration: 0.8,
        ease: "expo.inOut",
      })
      .to(".reveal-line", {
        opacity: 1,
        y: 0,
        stagger: 0.15,
        duration: 0.6,
        ease: "power3.out",
      });
  };

  // ✅ COUNTER
  useEffect(() => {
    const interval = setInterval(() => {
      setCounter((prev) => {
        if (prev < 100) return prev + 1;

        clearInterval(interval);
        reveal();
        return 100;
      });
    }, 20);

    return () => clearInterval(interval);
  });

  // ✅ SYNC BAR WITH COUNTER
  useEffect(() => {
    gsap.to(barRef.current, {
      scaleX: counter / 100,
      ease: "none",
      duration: 0.1,
    });
  }, [counter]);

  return (
    <div className="fixed inset-0 z-9999 bg-black flex items-center justify-center overflow-hidden">
      {/* STATIC LINE */}
      <div className="absolute w-full h-px bg-white/20 top-1/2 left-0 -translate-y-1/2" />

      {/* PROGRESS LINE */}
      <div
        ref={barRef}
        className="absolute left-0 top-1/2 h-0.5 bg-orange-500 origin-left scale-x-0 w-full"
      />

      {/* COUNTER */}
      <h1 className="loader-text absolute text-white text-6xl md:text-8xl font-bold">
        {counter}%
      </h1>

      {/* REVEAL CONTENT */}
      <div className="loader-content absolute inset-0 bg-black flex flex-col items-center justify-center text-white scale-x-0 origin-left">
        <p className="reveal-line opacity-0 translate-y-6 text-4xl md:text-6xl font-semibold text-white text-center">
          Crafting modern experiences.
        </p>

        <p className="reveal-line opacity-0 translate-y-6 text-4xl md:text-6xl font-semibold text-orange-400 text-center mt-2">
          Smooth interactions matter.
        </p>
      </div>
    </div>
  );
}
