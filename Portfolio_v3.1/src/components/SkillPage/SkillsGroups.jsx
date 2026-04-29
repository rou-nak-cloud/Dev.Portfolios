import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function SkillSplit() {
  const sectionRef = useRef(null);
  const skillHeadRef = useRef(null);

  useGSAP(() => {
    const ctx = gsap.context(() => {
      gsap.from(".split-item-1, .split-item-2, .skill-head", {
        y: 70,
        opacity: 0,
        duration: 1.2,
        stagger: 0.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
          toggleActions: "play none none reverse",
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="max-w-5xl mx-auto px-6 py-12 md:pb-1 overflow-hidden"
    >
      <div ref={skillHeadRef} className="mb-14 text-center">
        <h1 className="skill-head text-3xl sm:text-4xl md:text-5xl font-melodrama tracking-wide text-zinc-900">
          Skills
          <span className="text-emerald-500"> & Groups</span>
        </h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-7 items-stretch">
        {/* LEFT CARD — SKILL GROUPS */}
        <div className="split-item-1 flex flex-col gap-6 p-8 md:p-10 rounded-3xl bg-orange-50/50 border border-zinc-200/60 shadow-sm hover:shadow-md transition-shadow duration-500">
          <h3 className="text-xs font-bold font-cabinet uppercase tracking-widest text-emerald-600 mb-2">
            Technical Stack
          </h3>

          <div className="flex flex-col gap-2 tracking-wide text-zinc-700 text-sm md:text-base font-cabinet">
            <p>
              <span className="text-zinc-900 font-bold block mb-0">
                Frontend
              </span>
              React, Tailwind, GSAP, Framer Motion
            </p>

            <p>
              <span className="text-zinc-900 font-bold block mb-0">
                Backend
              </span>
              Node.js, MongoDB
            </p>

            <p>
              <span className="text-zinc-900 font-bold block mb-0">Tools</span>
              Git, GitHub, Postman, Vite, Vercel
            </p>
          </div>
        </div>

        {/* RIGHT CARD — PHILOSOPHY */}
        <div className="split-item-2 flex flex-col justify-center p-8 md:p-10 rounded-3xl bg-emerald-50/30 border border-emerald-100/50 shadow-sm hover:shadow-md transition-shadow duration-500">
          <h3 className="text-xs font-bold font-cabinet uppercase tracking-widest text-emerald-600 mb-6">
            Core Philosophy
          </h3>

          <p className="text-lg md:text-xl text-zinc-800 leading-snug font-cabinet">
            Interfaces should feel{" "}
            <span className="text-emerald-600 italic">effortless</span> — not
            just visually appealing, but responsive, intuitive, and alive.
          </p>

          <p className="mt-4 text-sm md:text-base text-zinc-500 leading-snug">
            I focus on crafting experiences where motion, performance, and
            usability come together naturally to tell a story.
          </p>
        </div>
      </div>
    </section>
  );
}
