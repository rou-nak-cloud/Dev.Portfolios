import { useState, useEffect, useRef } from "react";
import { FiSun, FiMoon } from "react-icons/fi"; // Using Fi for a cleaner minimal look
import gsap from "gsap";

export default function ThemeToggle() {
  const [isDark, setIsDark] = useState(false);
  const buttonRef = useRef(null);
  const iconRef = useRef(null);

  // Initial Entrance Animation
  useEffect(() => {
    gsap.fromTo(
      buttonRef.current,
      { scale: 0, rotation: -180, opacity: 0 },
      {
        scale: 1,
        rotation: 0,
        opacity: 1,
        duration: 1,
        ease: "elastic.out(1, 0.75)",
        delay: 0.5,
      },
    );
  }, []);

  // Icon Swap Animation
  const handleToggle = () => {
    const tl = gsap.timeline();

    tl.to(iconRef.current, {
      y: -20,
      opacity: 0,
      duration: 0.2,
      ease: "power2.in",
      onComplete: () => setIsDark(!isDark), // Switch state mid-animation
    }).fromTo(
      iconRef.current,
      { y: 20, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.4, ease: "back.out(1.7)" },
    );

    // Add logic here later to change document classes
    console.log("Theme switched to:", !isDark ? "dark" : "light");
  };

  return (
    <button
      ref={buttonRef}
      onClick={handleToggle}
      className="fixed bottom-6 left-74 z-50 
        w-11 h-11 rounded-full
        bg-zinc-900 dark:bg-white text-white dark:text-zinc-900
        flex items-center justify-center
        shadow-lg shadow-zinc-500/20
        hover:scale-110 active:scale-95
        transition-transform duration-300 cursor-pointer border border-zinc-200/50"
    >
      <div ref={iconRef} className="flex items-center justify-center">
        {isDark ? (
          <FiSun size={18} className="text-amber-400" />
        ) : (
          <FiMoon size={18} className="text-zinc-400" />
        )}
      </div>
    </button>
  );
}
