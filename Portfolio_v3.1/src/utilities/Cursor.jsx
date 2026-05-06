import { useRef, useEffect } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useLocation } from "react-router-dom";

export default function Cursor() {
  const cursorRef = useRef(null);
  const followerRef = useRef(null);
  const location = useLocation(); // Listen for route changes

  // 1. Reset cursor on route change (Emergency Reset)
  useEffect(() => {
    gsap.to(cursorRef.current, {
      scale: 1,
      backgroundColor: "#f97316",
      duration: 0.3,
    });
    gsap.to(followerRef.current, {
      scale: 0.8,
      opacity: 0.5,
      duration: 0.3,
    });
  }, [location]);

  useGSAP(() => {
    let x = 0;
    let y = 0;
    let mouseX = 0;
    let mouseY = 0;

    const animate = () => {
      x += (mouseX - x) * 0.15;
      y += (mouseY - y) * 0.15;

      gsap.set(cursorRef.current, { x: mouseX, y: mouseY });
      gsap.set(followerRef.current, { x, y });

      requestAnimationFrame(animate);
    };

    animate();

    const handleMouseMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;

      // 2. Event Delegation Logic
      // Check if the element under the mouse is a link, button, or has data-hover
      const target = e.target.closest("a, button, [data-hover]");

      if (target) {
        // Hover State
        gsap.to(cursorRef.current, {
          scale: 0.2,
          backgroundColor: "#fb923c",
          duration: 0.4,
          ease: "power3.out",
          overwrite: "auto",
        });
        gsap.to(followerRef.current, {
          scale: 2.5,
          opacity: 0.3,
          duration: 0.5,
          ease: "power3.out",
          overwrite: "auto",
        });
      } else {
        // Default State
        gsap.to(cursorRef.current, {
          scale: 1,
          backgroundColor: "#f97316",
          duration: 0.4,
          ease: "power3.out",
          overwrite: "auto",
        });
        gsap.to(followerRef.current, {
          scale: 0.8,
          opacity: 0.5,
          duration: 0.4,
          ease: "power3.out",
          overwrite: "auto",
        });
      }
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <>
      <div
        ref={cursorRef}
        className="fixed top-0 left-0 w-4 h-4 rounded-full bg-orange-600 pointer-events-none z-9999 -translate-x-1/2 -translate-y-1/2 mix-blend-multiply"
      />
      <div
        ref={followerRef}
        className="fixed top-0 left-0 w-12 h-12 rounded-full bg-orange-500/80 pointer-events-none z-9998 -translate-x-1/2 -translate-y-1/2 blur-xl"
        style={{ opacity: 0.5 }}
      />
    </>
  );
}
