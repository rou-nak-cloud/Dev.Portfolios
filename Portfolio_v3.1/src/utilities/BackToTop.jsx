import { useState, useEffect } from "react";
import { FaArrowUp } from "react-icons/fa";

export default function BackToTop() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const checkScroll = () => {
      if (window.scrollY > 1000) setShow(true);
      else setShow(false);
    };

    window.addEventListener("scroll", checkScroll);

    return () => window.removeEventListener("scroll", checkScroll);
  }, []);

  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  if (!show) return null;

  return (
    <button
      onClick={scrollTop}
      className="fixed bottom-4 right-22 z-50
      w-10 h-10 rounded-full
      bg-amber-400 text-white
      flex items-center justify-center
      shadow-lg shadow-amber-300/40
      hover:-translate-y-1 hover:bg-amber-500
      active:scale-95
      transition-all duration-300 cursor-pointer"
    >
      <FaArrowUp size={14} />
    </button>
  );
}
