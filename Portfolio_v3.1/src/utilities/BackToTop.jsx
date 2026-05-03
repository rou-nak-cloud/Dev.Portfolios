// import { useState, useEffect } from "react";
// import { FaArrowUp } from "react-icons/fa";

// export default function BackToTop() {
//   const [show, setShow] = useState(false);

//   useEffect(() => {
//     const checkScroll = () => {
//       if (window.scrollY > 1000) setShow(true);
//       else setShow(false);
//     };

//     window.addEventListener("scroll", checkScroll);

//     return () => window.removeEventListener("scroll", checkScroll);
//   }, []);

//   const scrollTop = () => {
//     window.scrollTo({ top: 0, behavior: "smooth" });
//   };

//   if (!show) return null;

//   return (
//     <div className="hidden md:flex fixed bottom-5 right-73 z-50 border border-amber-300/90 w-12 h-12 rounded-full">
//       <button
//         onClick={scrollTop}
//         className="hidden md:flex fixed bottom-6 right-74 z-50
//   w-10 h-10  rounded-full
//   bg-amber-400 text-white
//   items-center justify-center
//   shadow-lg shadow-amber-300/40
//   hover:-translate-y-1 hover:bg-amber-500
//   active:scale-95
//   transition-all duration-300 cursor-pointer"
//       >
//         <FaArrowUp size={14} />
//       </button>
//     </div>
//   );
// }

// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import { FaArrowUp } from "react-icons/fa";
import gsap from "gsap";

export default function BackToTop() {
  const [isVisible, setIsVisible] = useState(false);
  const buttonRef = useRef(null);

  useEffect(() => {
    const checkScroll = () => {
      if (window.scrollY > 40) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", checkScroll);
    return () => window.removeEventListener("scroll", checkScroll);
  }, []);

  // GSAP Pop Animation
  useEffect(() => {
    if (isVisible) {
      // Pop In
      gsap.to(buttonRef.current, {
        scale: 1,
        opacity: 1,
        duration: 0.5,
        ease: "back.out(1.7)", // This gives it that "bounce" pop
        display: "flex",
      });
    } else {
      // Pop Out
      gsap.to(buttonRef.current, {
        scale: 0,
        opacity: 0,
        duration: 0.4,
        ease: "power3.in",
        onComplete: () => {
          gsap.set(buttonRef.current, { display: "none" });
        },
      });
    }
  }, [isVisible]);

  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    // <div className="hidden md:flex fixed bottom-5 right-73 z-50 border border-amber-300/90 w-12 h-12 rounded-full">
    <button
      ref={buttonRef}
      onClick={scrollTop}
      style={{ display: "none", opacity: 0, transform: "scale(0)" }}
      className="hidden md:flex fixed bottom-5 md:bottom-6 right-74 z-50
        w-10 h-10 rounded-full bg-amber-300
        md:bg-amber-600/40 text-white
        items-center justify-center
        shadow-xl shadow-amber-300/40
        hover:bg-amber-500
        active:scale-90 
        transition-colors duration-300 cursor-pointer border-2 border-white"
    >
      <motion.div
        whileHover={{ y: -3 }}
        transition={{ repeat: Infinity, duration: 0.5, repeatType: "mirror" }}
      >
        <FaArrowUp size={18} />
      </motion.div>
    </button>
    // </div>
  );
}
