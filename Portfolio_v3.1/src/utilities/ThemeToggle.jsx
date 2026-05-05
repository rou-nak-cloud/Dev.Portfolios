import { useState, useEffect, useRef } from "react";
import { FiSun, FiMoon } from "react-icons/fi";
import gsap from "gsap";

export default function ThemeToggle() {
  const [isDark, setIsDark] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const buttonRef = useRef(null);
  const iconRef = useRef(null);

  useEffect(() => {
    const checkScroll = () => {
      // Triggering at 40px as you requested
      if (window.scrollY > 40) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", checkScroll);
    return () => window.removeEventListener("scroll", checkScroll);
  }, []);

  // Combined Pop + Rotation Animation
  useEffect(() => {
    if (isVisible) {
      // POP IN + SPIN
      gsap.to(buttonRef.current, {
        scale: 1,
        rotation: 0,
        opacity: 1,
        duration: 0.8,
        ease: "back.out(1.7)", // Premium bounce
        display: "flex",
      });
    } else {
      // POP OUT + SPIN (Reverse)
      gsap.to(buttonRef.current, {
        scale: 0,
        rotation: 180,
        opacity: 0,
        duration: 0.5,
        ease: "power3.in",
        onComplete: () => {
          gsap.set(buttonRef.current, { display: "none" });
        },
      });
    }
  }, [isVisible]);

  const handleToggle = () => {
    const tl = gsap.timeline();

    tl.to(iconRef.current, {
      y: -20,
      opacity: 0,
      duration: 0.2,
      ease: "power2.in",
      onComplete: () => setIsDark(!isDark),
    }).fromTo(
      iconRef.current,
      { y: 20, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.4, ease: "back.out(1.7)" },
    );
  };

  return (
    <button
      ref={buttonRef}
      onClick={handleToggle}
      // Start hidden so it can "pop" in properly
      style={{ display: "none", opacity: 0, transform: "scale(0)" }}
      className="fixed bottom-5 md:bottom-6 left-73 z-50 
        w-10 h-10 rounded-full bg-amber-200 ml-1
        md:bg-amber-600/40 text-white
        flex items-center justify-center
        shadow-xl shadow-amber-300/40
        active:scale-90 
        transition-colors duration-300 cursor-pointer border border-zinc-200/50"
    >
      <div ref={iconRef} className="flex items-center justify-center">
        {isDark ? (
          <FiSun size={18} className="text-white" />
        ) : (
          <FiMoon size={18} className="text-white" />
        )}
      </div>
    </button>
  );
}
