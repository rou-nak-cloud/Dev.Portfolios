// components/Loader.jsx
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

export default function Loader({ onComplete }) {
  useGSAP(() => {
    const page = document.querySelector(".page1");
    const nav = document.querySelector(".nav");

    if (!page || !nav) return;

    const tl = gsap.timeline({
      onComplete: () => {
        onComplete(); // remove loader after animation
      },
    });

    // initial state
    tl.set(page, {
      y: "100vh",
      scale: 0.6,
    });

    tl.set(nav, {
      y: "-100%",
      opacity: 0,
    });

    // page comes in
    tl.to(page, {
      y: "10vh",
      duration: 1,
      ease: "power2.out",
      delay: 0.5,
    });

    // page settles
    tl.to(page, {
      y: "0vh",
      scale: 1,
      rotation: -360,
      duration: 1,
      ease: "power1.inOut",
    });

    // nav appears
    tl.to(
      nav,
      {
        y: "0%",
        opacity: 1,
        duration: 0.6,
        ease: "power2.out",
      },
      "-=0.4",
    );
  }, []);

  return (
    <div className="fixed inset-0 z-9999 bg-white flex items-center justify-center">
      <h1 className="text-2xl font-bold text-orange-500">Loading...</h1>
    </div>
  );
}
