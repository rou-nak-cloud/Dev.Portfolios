import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SplitText from "gsap/SplitText";

gsap.registerPlugin(ScrollTrigger, SplitText);

export default function SoftCTA() {
  const textRef = useRef(null);

  useEffect(() => {
    const el = textRef.current;
    if (!el) return;

    // 1. Split text into characters
    const split = new SplitText(el, {
      type: "chars,words",
    });

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: el,
          start: "top 89%",
          toggleActions: "play none none none",
        },
      });

      // 2. The Existing Entrance Effect (Blur & Rise)
      tl.fromTo(
        split.chars,
        {
          y: 40,
          opacity: 0,
          filter: "blur(6px)",
        },
        {
          y: 0,
          opacity: 1,
          filter: "blur(0px)",
          stagger: 0.02,
          duration: 0.8,
          ease: "power3.out",
        },
      );

      // 3. The New Continuous Floating Effect (Subtle Life)
      // This starts after the entrance animation completes
      tl.to(
        split.words,
        {
          y: -8, // Gentle lift
          duration: 2,
          repeat: -1,
          yoyo: true, // Back and forth
          ease: "sine.inOut",
          stagger: {
            each: 0.2,
            from: "random",
          },
        },
        "-=0.2",
      ); // Start slightly before the entrance ends for smoothness
    }, el);

    return () => {
      ctx.revert();
      split.revert();
    };
  }, []);

  return (
    <section className="max-w-3xl mx-auto px-6 mt-14 md:mt-24 text-center">
      <p
        ref={textRef}
        className="text-md md:text-lg text-zinc-600 font-cabinet leading-relaxed tracking-widest max-w-xl mx-auto"
      >
        Open to collaborations and meaningful projects —{" "}
        <span className="text-emerald-500 font-medium">
          feel free to reach out
        </span>{" "}
        through the contact button.
      </p>
    </section>
  );
}
