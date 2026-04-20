import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

export default function Cursor() {
  const cursorRef = useRef(null);
  const followerRef = useRef(null);

  useGSAP(() => {
    let x = 0;
    let y = 0;

    let mouseX = 0;
    let mouseY = 0;

    //  slower + heavier lag
    const animate = () => {
      x += (mouseX - x) * 0.15; // slower (was 0.15)
      y += (mouseY - y) * 0.15;

      gsap.set(cursorRef.current, {
        x: mouseX,
        y: mouseY,
      });

      gsap.set(followerRef.current, {
        x,
        y,
      });

      requestAnimationFrame(animate);
    };

    animate();

    const handleMouseMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    window.addEventListener("mousemove", handleMouseMove);

    const hoverables = document.querySelectorAll("a, button");

    const handlers = [];

    hoverables.forEach((el) => {
      const enter = () => {
        //  elastic feel
        gsap.to(cursorRef.current, {
          scale: 0.2,
          backgroundColor: "#ea580c",
          duration: 0.5,
          ease: "elastic.out(1, 0.5)",
        });

        gsap.to(followerRef.current, {
          scale: 2,
          opacity: 0.5, //  never too low
          duration: 0.6,
          ease: "elastic.out(1, 0.4)",
        });
      };

      const leave = () => {
        //  bounce back feel
        gsap.to(cursorRef.current, {
          scale: 1,
          backgroundColor: "#f97316",
          duration: 0.5,
          ease: "bounce.out",
        });

        gsap.to(followerRef.current, {
          scale: 0.8,
          opacity: 0.5, //  restore properly
          duration: 0.5,
          ease: "bounce.out",
        });
      };

      el.addEventListener("mouseenter", enter);
      el.addEventListener("mouseleave", leave);

      handlers.push({ el, enter, leave });
    });

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);

      handlers.forEach(({ el, enter, leave }) => {
        el.removeEventListener("mouseenter", enter);
        el.removeEventListener("mouseleave", leave);
      });
    };
  }, []);

  return (
    <>
      {/*  MAIN DOT */}
      <div
        ref={cursorRef}
        className="fixed top-0 left-0 w-4 h-4 rounded-full 
        bg-orange-500 pointer-events-none z-999
        -translate-x-1/2 -translate-y-1/2 mix-blend-multiply"
      />

      {/*  FOLLOWER */}
      <div
        ref={followerRef}
        className="fixed top-0 left-0 w-12 h-12 rounded-full 
        bg-orange-700/70 pointer-events-none z-998
        -translate-x-1/2 -translate-y-1/2
        blur-xl"
        style={{ opacity: 0.5 }} //  fallback safety
      />
    </>
  );
}
