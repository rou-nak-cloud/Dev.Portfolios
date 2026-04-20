import { skills as SKILLS } from "../constants";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Skills() {
  const containerRef = useRef(null);

  useGSAP(() => {
    const ctx = gsap.context(() => {
      const badges = gsap.utils.toArray(".skill-badge");

      // element behave differently so foreach loop here. if structured way means one after another  not foreach
      badges.forEach((badge) => {
        gsap.fromTo(
          badge,
          {
            y: gsap.utils.random(30, 80),
            opacity: 0,
            scale: 0.85,
          },
          {
            y: 0,
            opacity: 1,
            scale: 1,
            duration: gsap.utils.random(0.5, 0.9),
            delay: gsap.utils.random(0, 0.6),
            ease: "back.out(1.7)", //  premium pop feel
            scrollTrigger: {
              trigger: containerRef.current,
              start: "top 75%",
              toggleActions: "play none none reverse",
            },
          },
        );
        //  HOVER EFFECT
        badge.addEventListener("mouseenter", () => {
          gsap.to(badge, {
            y: -8,
            scale: 1.05,
            duration: 0.3,
            ease: "power2.out",
          });
        });

        badge.addEventListener("mouseleave", () => {
          gsap.to(badge, {
            y: 0,
            scale: 1,
            duration: 0.4,
            ease: "power3.out",
          });
        });
      });
      return () => {
        badges.forEach((badge) => {
          badge.replaceWith(badge.cloneNode(true));
        });
      };
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="skills"
      ref={containerRef}
      className="max-w-2xl mx-auto px-6 py-6 select-none"
    >
      <h2 className="text-2xl font-cabinet font-bold text-black mb-6">
        Skill
        <span className="font-melodrama font-bold text-amber-400 text-3xl md:text-4xl">
          s.
        </span>
        <span className="text-xs md:text-sm pl-2 font-melodrama font-semibold tracking-widest text-zinc-700 italic">
          (explore)
        </span>
      </h2>

      <div className="flex flex-wrap gap-3">
        {SKILLS.map((skill) => (
          <div
            key={skill.name}
            className="skill-badge flex items-center gap-2 px-4 py-1.5 border border-slate-300/80 rounded-full bg-white shadow-sm hover:bg-amber-100/40 transition-colors cursor-vertical-text"
          >
            <img
              src={skill.icon}
              alt={skill.name}
              className="w-4 h-4 object-contain"
            />
            <span className="text-sm font-cabinet font-medium text-slate-900">
              {skill.name}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
