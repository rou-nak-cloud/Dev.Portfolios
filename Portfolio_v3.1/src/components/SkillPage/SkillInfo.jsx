import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function SkillInfo() {
  const sectionRef = useRef(null);

  useGSAP(() => {
    const ctx = gsap.context(() => {
      gsap.from(".skill-info-item", {
        y: 40,
        opacity: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
          toggleActions: "play none none reverse",
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="max-w-3xl mx-auto px-6 py-5 pb-8 md:pb-20 text-center overflow-hidden"
    >
      {/* Main Text */}
      <p className="skill-info-item text-lg md:text-xl tracking-normal text-zinc-800 leading-snug font-cabinet">
        I build fast, responsive, and animation-rich web experiences with a
        focus on performance and user interaction.
      </p>

      {/* Points */}
      <div className="mt-6 flex flex-col gap-1 text-orange-900/90 text-xl md:text-2xl tracking-widest font-melodrama font-medium">
        <span className="skill-info-item">UI Engineering</span>
        <span className="skill-info-item">Motion & Interaction</span>
        <span className="skill-info-item">Clean Frontend Architecture</span>
      </div>

      {/* Small Accent Line */}
      <div className="skill-info-item mt-8 w-16 h-0.5 bg-emerald-400 mx-auto rounded-full animate-pulse" />
    </section>
  );
}
