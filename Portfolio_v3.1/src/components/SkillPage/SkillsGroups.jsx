import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function SkillSplit() {
  const sectionRef = useRef(null);

  useGSAP(() => {
    const ctx = gsap.context(() => {
      gsap.from(".split-item", {
        y: 40,
        opacity: 0,
        duration: 0.8,
        stagger: 0.15,
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
      className="max-w-5xl mx-auto px-6 py-6 md:pb-20 overflow-hidden"
    >
      <div className="mb-10 text-center">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-melodrama tracking-wide text-zinc-900">
          Skills
          <span className="text-emerald-500"> & Groups</span>
        </h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-start">
        {/* LEFT — SKILL GROUPS */}
        <div className="flex flex-col gap-5 text-zinc-700 text-sm md:text-base font-cabinet">
          <p className="split-item">
            <span className="text-emerald-500 font-semibold">Frontend — </span>
            React, Tailwind, GSAP, Framer Motion
          </p>

          <p className="split-item">
            <span className="text-emerald-500 font-semibold">Backend — </span>
            Node.js, MongoDB
          </p>

          <p className="split-item">
            <span className="text-emerald-500 font-semibold">Tools — </span>
            Git, GitHub, Postman
          </p>
        </div>

        {/* RIGHT — PHILOSOPHY */}
        <div className="flex flex-col justify-center md:items-start text-left md:text-left">
          <p className="split-item text-lg md:text-xl text-zinc-800 leading-relaxed font-cabinet">
            Interfaces should feel effortless — not just visually appealing, but
            responsive, intuitive, and alive.
          </p>

          <p className="split-item mt-4 text-sm md:text-base text-zinc-500 leading-relaxed">
            I focus on crafting experiences where motion, performance, and
            usability come together naturally.
          </p>
        </div>
      </div>
    </section>
  );
}
