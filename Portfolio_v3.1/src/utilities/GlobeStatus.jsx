import { useState, useEffect, useRef } from "react";
import { FiGlobe } from "react-icons/fi";
import gsap from "gsap";

export default function GlobeStatus() {
  const [showLocation, setShowLocation] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  const buttonRef = useRef(null);
  const iconRef = useRef(null);
  const popoutRef = useRef(null);

  // 1. Monitor Scroll Position for visibility (Matched your 40px threshold)
  useEffect(() => {
    const checkScroll = () => {
      setIsVisible(window.scrollY > 40);
    };
    window.addEventListener("scroll", checkScroll);
    return () => window.removeEventListener("scroll", checkScroll);
  }, []);

  // 2. GSAP Animation for Button Entry/Exit
  useEffect(() => {
    if (isVisible) {
      gsap.to(buttonRef.current, {
        scale: 1,
        opacity: 1,
        duration: 0.5,
        ease: "back.out(1.7)",
        display: "flex",
        overwrite: "auto",
      });
    } else {
      gsap.to(buttonRef.current, {
        scale: 0,
        opacity: 0,
        y: 20,
        duration: 0.6,
        ease: "power2.inOut",
        overwrite: "auto",
        onComplete: () => {
          gsap.set(buttonRef.current, { display: "none" });
          setShowLocation(false); // Hide popout if button disappears
        },
      });
    }
  }, [isVisible]);

  // 3. Infinite Rotation for the Globe
  useEffect(() => {
    gsap.to(iconRef.current, {
      rotate: 360,
      duration: 10,
      repeat: -1,
      ease: "none",
    });
  }, []);

  // 4. Handle Click with Pop-up Animation
  const handleClick = () => {
    if (!showLocation) {
      setShowLocation(true);
      // Auto-hide after 3 seconds
      setTimeout(() => setShowLocation(false), 3000);
    }
  };

  return (
    <div className="fixed bottom-4 md:bottom-10 left-74 md:left-74 z-100 flex flex-col items-center">
      {/* POP-OUT NOTIFICATION (Positions to UP) */}
      {showLocation && (
        <div
          ref={popoutRef}
          className="absolute bottom-12 mb-2 px-4 py-2 bg-orange-400/60 text-black text-xs md:text-sm font-medium rounded-xl shadow-xl shadow-amber-300/20 whitespace-nowrap animate-in fade-in slide-in-from-bottom-2 duration-300"
        >
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 bg-white rounded-full animate-pulse" />
            Lived in Kolkata, West Bengal
          </div>
          {/* Arrow Pointer */}
          <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-amber-500 rotate-45" />
        </div>
      )}

      {/* THE GLOBE BUTTON */}
      <button
        ref={buttonRef}
        onClick={handleClick}
        style={{ display: "none", opacity: 0, transform: "scale(0)" }}
        className="w-10 h-10 rounded-full flex items-center justify-center 
          shadow-xl transition-all duration-500 cursor-pointer border border-zinc-200/50
          bg-orange-300/90 text-zinc-100 shadow-amber-400/40 hover:bg-orange-400"
      >
        <div ref={iconRef} className="flex items-center justify-center">
          <FiGlobe size={20} />
        </div>
      </button>
    </div>
  );
}
