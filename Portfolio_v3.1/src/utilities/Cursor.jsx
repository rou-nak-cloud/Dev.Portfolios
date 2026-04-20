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

    // Smooth follow (no lag jitter)
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

    //  Hover scaling (your existing)
    const hoverables = document.querySelectorAll("a, button");
    const handlers = [];

    hoverables.forEach((el) => {
      const enter = () => {
        gsap.to(cursorRef.current, {
          scale: 0.2,
          backgroundColor: "#ea580c",
          duration: 0.4,
          ease: "power3.out",
        });

        gsap.to(followerRef.current, {
          scale: 2,
          opacity: 0.5,
          duration: 0.5,
          ease: "power3.out",
        });
      };

      const leave = () => {
        gsap.to(cursorRef.current, {
          scale: 1,
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

    // //  MAGNETIC EFFECT (SMOOTH VERSION)
    // const magnetItems = document.querySelectorAll("[data-magnetic]");

    // magnetItems.forEach((el) => {
    //   //  quick setters (no lag)
    //   // Reuses same animation Updates value smoothly No stacking
    //   const xTo = gsap.quickTo(el, "x", {
    //     duration: 0.3,
    //     ease: "power2.out",
    //   });

    //   const yTo = gsap.quickTo(el, "y", {
    //     duration: 0.3,
    //     ease: "power2.out",
    //   });

    //   const scaleTo = gsap.quickTo(el, "scale", {
    //     duration: 0.3,
    //     ease: "power2.out",
    //   });

    //   const move = (e) => {
    //     const rect = el.getBoundingClientRect();

    //     const relX = e.clientX - (rect.left + rect.width / 2);
    //     const relY = e.clientY - (rect.top + rect.height / 2);

    //     //  smooth updates (no jitter)
    //     xTo(relX / 10);
    //     yTo(relY / 10);
    //     scaleTo(1.05);
    //   };

    //   const leave = () => {
    //     //  elastic only when leaving (safe)
    //     gsap.to(el, {
    //       x: 0,
    //       y: 0,
    //       scale: 1,
    //       duration: 0.6,
    //       ease: "elastic.out(1, 0.4)",
    //     });
    //   };

    //   el.addEventListener("mousemove", move);
    //   el.addEventListener("mouseleave", leave);

    //   handlers.push({ el, move, leave });
    // });

    // CLEANUP
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);

      handlers.forEach(({ el, enter, leave }) => {
        el.removeEventListener("mouseenter", enter);
        el.removeEventListener("mouseleave", leave);
        // el.removeEventListener("mousemove", enter);
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
        style={{ opacity: 0.5 }}
      />
    </>
  );
}
