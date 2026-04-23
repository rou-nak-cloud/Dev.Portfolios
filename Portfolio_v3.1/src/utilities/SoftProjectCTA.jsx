import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SplitText from "gsap/SplitText";

gsap.registerPlugin(ScrollTrigger, SplitText);

export default function SoftProjectCTA() {
  const textRef = useRef(null);

  useEffect(() => {
    const el = textRef.current;
    if (!el) return;

    // Split into characters
    const split = new SplitText(el, {
      type: "chars,words",
    });

    // Animation
    gsap.fromTo(
      split.chars,
      {
        y: 40,
        opacity: 0,
        filter: "blur(8px)",
      },
      {
        y: 0,
        opacity: 1,
        filter: "blur(0px)",
        stagger: 0.02,
        duration: 0.4,
        ease: "power3.out",
        scrollTrigger: {
          trigger: el,
          start: "top 85%",
          toggleActions: "play none none none",
        },
      },
    );

    // Cleanup (VERY important)
    return () => {
      split.revert();
    };
  }, []);

  return (
    <section className="max-w-3xl mx-auto px-6 mt-14 md:mt-15 mb-5 text-center">
      <p
        ref={textRef}
        className="project-reveal text-sm md:text-base font-cabinet text-zinc-500 tracking-wide"
      >
        Want to explore more projects?{" "}
        <span className="text-amber-500 font-medium">
          Check the Projects page
        </span>{" "}
        from the navigation.
      </p>
    </section>
  );
}
