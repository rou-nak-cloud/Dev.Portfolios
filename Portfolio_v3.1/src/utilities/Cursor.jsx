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

    // Smooth follow logic
    const animate = () => {
      x += (mouseX - x) * 0.15;
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

    // Hover scaling & color logic
    const hoverables = document.querySelectorAll("a, button, [data-hover]");
    const handlers = [];

    hoverables.forEach((el) => {
      const enter = () => {
        gsap.to(cursorRef.current, {
          scale: 0.2,
          // Orange-400: High visibility on both light/dark
          backgroundColor: "#fb923c",
          duration: 0.4,
          ease: "power3.out",
        });

        gsap.to(followerRef.current, {
          scale: 2.5,
          opacity: 0.3,
          duration: 0.5,
          ease: "power3.out",
        });
      };

      const leave = () => {
        gsap.to(cursorRef.current, {
          scale: 1,
          // Orange-500: Standard branding
          backgroundColor: "#f97316",
          duration: 0.4,
          ease: "power3.out",
        });

        gsap.to(followerRef.current, {
          scale: 0.8,
          opacity: 0.5,
          duration: 0.4,
          ease: "power3.out",
        });
      };

      el.addEventListener("mouseenter", enter);
      el.addEventListener("mouseleave", leave);
      handlers.push({ el, enter, leave });
    });

    // Cleanup listeners
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
      {/* CURSOR */}
      <div
        ref={cursorRef}
        className="fixed top-0 left-0 w-4 h-4 rounded-full 
        bg-orange-600 pointer-events-none z-999
        -translate-x-1/2 -translate-y-1/2 mix-blend-multiply"
      />

      {/* FOLLOWER */}
      <div
        ref={followerRef}
        className="fixed top-0 left-0 w-12 h-12 rounded-full 
         bg-orange-500/80 pointer-events-none z-998
        -translate-x-1/2 -translate-y-1/2
        blur-xl"
        style={{ opacity: 0.5 }}
      />
    </>
  );
}
