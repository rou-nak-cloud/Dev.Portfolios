import { useState, useEffect, useRef } from "react";
import { FiSun, FiMoon } from "react-icons/fi";
import gsap from "gsap";

export default function ThemeToggle() {
  // 1. Initialize Theme State from LocalStorage or System Preference
  const [isDark, setIsDark] = useState(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) return savedTheme === "dark";
    return window.matchMedia("(prefers-color-scheme: dark)").matches;
  });

  const [isVisible, setIsVisible] = useState(false);
  const buttonRef = useRef(null);
  const iconRef = useRef(null);

  // 2. Synchronize HTML class with isDark state
  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [isDark]);

  // 3. Monitor Scroll Position for visibility
  useEffect(() => {
    const checkScroll = () => {
      // Toggle visibility based on 40px scroll threshold
      setIsVisible(window.scrollY > 40);
    };
    window.addEventListener("scroll", checkScroll);
    return () => window.removeEventListener("scroll", checkScroll);
  }, []);

  // 4. GSAP Animation for Button Entry/Exit (Uses 'isVisible')
  useEffect(() => {
    if (isVisible) {
      gsap.to(buttonRef.current, {
        scale: 1,
        opacity: 1,
        duration: 0.5,
        ease: "back.out(1.7)",
        display: "flex",
      });
    } else {
      gsap.to(buttonRef.current, {
        scale: 0,
        opacity: 0,
        duration: 0.6,
        ease: "power4.in",
        onComplete: () => {
          gsap.set(buttonRef.current, { display: "none" });
        },
      });
    }
  }, [isVisible]);

  // 5. Handle Toggle Click with Icon Animation
  const handleToggle = () => {
    const tl = gsap.timeline();

    tl.to(iconRef.current, {
      y: -20,
      opacity: 0,
      duration: 0.6,
      ease: "power2.in",
      onComplete: () => setIsDark(!isDark),
    }).fromTo(
      iconRef.current,
      { y: 20, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, ease: "back.out(1.7)" },
    );
  };

  return (
    <button
      ref={buttonRef}
      onClick={handleToggle}
      // Start hidden to allow GSAP to animate the first entry
      style={{ display: "none", opacity: 0, transform: "scale(0)" }}
      className={`fixed bottom-4 md:bottom-5 left-104 md:left-104 z-100
        w-10 h-10 rounded-full flex items-center justify-center
        shadow-xl transition-all duration-500 cursor-pointer border border-zinc-200/50 dark:border-zinc-700/50
        ${
          isDark
            ? "bg-zinc-800 border-amber-100 text-orange-400 shadow-black/40"
            : "bg-orange-300/90 text-zinc-900 shadow-orange-300/40"
        }`}
    >
      <div ref={iconRef} className="flex items-center justify-center">
        {isDark ? <FiSun size={18} /> : <FiMoon size={18} />}
      </div>
    </button>
  );
}
