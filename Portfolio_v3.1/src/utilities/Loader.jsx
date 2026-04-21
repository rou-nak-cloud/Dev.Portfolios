import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

export default function Loader({ onComplete }) {
  const [counter, setCounter] = useState(0);
  const barRef = useRef(null);

  //  LOCK SCROLL DURING LOADER
  useEffect(() => {
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  //  REVEAL ANIMATION
  const reveal = () => {
    const tl = gsap.timeline({
      onComplete: onComplete,
    });

    tl.to(barRef.current, {
      scaleX: 1,
      duration: 0.9,
      ease: "expo.inOut",
    })
      .to(".loader-text", {
        opacity: 0,
        duration: 0.7,
      })
      .to(".loader-text", {
        display: "none",
      })
      //  FIXED (no width overflow)
      .to(".loader-content", {
        scaleX: 1,
        duration: 0.8,
        ease: "expo.inOut",
      })
      .to(".reveal-line", {
        opacity: 1,
        y: 0,
        stagger: 0.25,
        duration: 1,
        ease: "power3.out",
      });
  };

  // COUNTER
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

  //  SYNC BAR WITH COUNTER
  useEffect(() => {
    gsap.to(barRef.current, {
      scaleX: counter / 100,
      ease: "none",
      duration: 0.1,
    });
  }, [counter]);

  return (
    <div className="fixed inset-0 z-9999 bg-[#f8f8f8] flex items-center justify-center overflow-hidden">
      {/* TOP NAME BAR */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 text-center">
        <p className="text-sm tracking-[0.2em] text-orange-500 font-cabinet">
          ROUNAK BAKSHI
        </p>
        <div className="w-20 h-px bg-orange-400/50 mx-auto mt-2"></div>
      </div>

      {/*  STATIC LINE */}
      <div className="absolute w-full h-px bg-orange-200 top-1/2 left-0 -translate-y-1/2" />

      {/* PROGRESS LINE */}
      <div
        ref={barRef}
        className="absolute left-0 top-1/2 h-0.5 bg-orange-500 origin-left scale-x-0 w-full"
      />

      {/*  COUNTER */}
      <h1 className="loader-text absolute text-orange-500 text-6xl md:text-8xl font-bold tracking-tight">
        {counter}%
      </h1>

      {/*  SMALL STATUS TEXT */}
      <p className="loader-text font-melodrama absolute top-[60%] text-lg text-orange-600/90 tracking-widest">
        Loading Portfolio...
      </p>
      <span className="text-[22px] font-cabinet absolute bottom-25 left-20 font-bold uppercase tracking-normal text-zinc-500/50">
        Step{" "}
        <span className="font-melodrama text-zinc-500 text-[20px] pl-1">
          {" "}
          00
        </span>
      </span>

      {/*  REVEAL CONTENT */}
      <div className="loader-content absolute inset-0 bg-[#f8f8f8] flex flex-col items-center justify-center scale-x-0 origin-left">
        {/* MAIN TEXT */}
        <p className="reveal-line opacity-0 translate-y-6 text-4xl md:text-6xl font-semibold text-zinc-900 text-center">
          Crafting modern experiences.
        </p>

        <p className="reveal-line opacity-0 translate-y-6 text-4xl md:text-6xl font-semibold text-orange-600/70 text-center mt-2">
          Smooth interactions matter.
        </p>

        {/*  SUB TEXT (NEW) */}
        <p className="reveal-line opacity-0 translate-y-6 text-sm md:text-base text-zinc-600 text-center mt-6 max-w-md leading-tight font-melodrama">
          Focused on clean UI, subtle motion, and thoughtful user experiences.
        </p>

        {/*  DECORATIVE LINE */}
        <div className="reveal-line opacity-0 translate-y-6 w-24 h-0.5 bg-orange-400 mt-6 rounded-full"></div>

        {/*  FOOT TEXT */}
        <p className="reveal-line opacity-0 font-cabinet translate-y-6 text-sm tracking-widest text-zinc-500 mt-3">
          FRONTEND DEVELOPER • UI ENTHUSIAST
        </p>
      </div>
    </div>
  );
}
