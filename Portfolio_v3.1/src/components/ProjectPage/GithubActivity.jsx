import React, { useLayoutEffect, useRef } from "react";
import { GitHubCalendar } from "react-github-calendar";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function GithubActivity() {
  const sectionRef = useRef(null);
  const containerRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // Subtle move up animation
      gsap.from(containerRef.current, {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 85%",
          toggleActions: "play none none reverse",
        },
        y: 40,
        opacity: 0,
        duration: 1.2,
        ease: "power3.out",
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="max-w-4xl mx-auto mb-4 px-6 overflow-hidden"
    >
      {/* 1. Added Suitable Heading */}
      <div className="mb-10">
        <h2 className="text-sm font-cabinet uppercase tracking-[0.3em] text-orange-600/80 mb-2">
          Commitment
        </h2>
        <p className="text-3xl md:text-4xl font-melodrama text-zinc-900">
          Consistent growth, documented.
        </p>
      </div>

      {/* 2. Animated Container */}
      <div
        ref={containerRef}
        className="w-full p-6 md:p-12 bg-zinc-50 rounded-3xl border border-zinc-100 overflow-hidden shadow-sm"
      >
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-10">
          <div>
            <h3 className="font-cabinet text-xs uppercase tracking-[0.2em] text-zinc-900 font-bold">
              GitHub — @rou-nak-cloud
            </h3>
            <p className="text-xs text-zinc-400 mt-1">
              Live activity feed from my official repository.
            </p>
          </div>
          <div className="h-px flex-1 bg-zinc-200 hidden md:block mx-8" />
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest">
              Real-time
            </span>
          </div>
        </div>

        {/* 3. Calendar with Amber/White Theme */}
        <div className="flex justify-center scrollbar-hide overflow-x-auto pb-4">
          <div className="min-w-187.5">
            <GitHubCalendar
              username="rou-nak-cloud"
              blockSize={12}
              blockMargin={4}
              fontSize={12}
              colorScheme="light"
              theme={{
                light: [
                  "#ffffff", // Level 0
                  "#fef3c7", // Level 1
                  "#fcd34d", // Level 2
                  "#f59e0b", // Level 3
                  "#b45309", // Level 4
                ],
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
