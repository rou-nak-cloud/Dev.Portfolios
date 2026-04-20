import { useRef, useState } from "react";
import { learningItems } from "../constants";
import { FaArrowRight } from "react-icons/fa";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP, ScrollTrigger);

export default function LearningJourney() {
  const [openIndex, setOpenIndex] = useState(null);

  const containerRef = useRef(null);

  const toggleItem = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  // Context use where the items re-render like here as i am using an array for animation
  //  ctx for GSAP + ScrollTrigger in React
  useGSAP(() => {
    const ctx = gsap.context(() => {
      const items = gsap.utils.toArray(".learning-item");

      if (!items.length) return;

      gsap.fromTo(
        items,
        {
          y: 50,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 0.4,
          stagger: 0.2,
          ease: "power2.out",
          // clearProps: "all",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 80%",
            end: "top -20%",
            toggleActions: "play none none reverse",
            // markers: true,
          },
        },
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={containerRef}
      className="learning-container space-y-3 max-w-3xl mx-auto px-4 sm:px-6 mt-5"
    >
      <h2 className="text-2xl md:text-3xl font-cabinet font-semibold mb-6 text-zinc-900">
        Learning Journe
        <span className="text-amber-400 font-melodrama text-3xl md:text-4xl">
          y.
        </span>
      </h2>

      {learningItems.map((item, index) => {
        const Icon = item.icon;
        const isOpen = openIndex === index;

        return (
          <div
            key={index}
            className="learning-item border-b border-zinc-300/50 pb-2 font-cabinet rounded-xl transition-all duration-300"
          >
            {/* HEADER */}
            <div
              onClick={() => toggleItem(index)}
              className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 cursor-pointer group p-2 md:p-3 hover:bg-zinc-100/60 rounded-xl transition"
            >
              {/* LEFT */}
              <div className="flex items-start sm:items-center gap-4">
                <div className="w-9 h-9 rounded-full border flex items-center justify-center text-amber-500">
                  <Icon />
                </div>

                <div>
                  <h3 className="text-base sm:text-lg font-semibold flex items-center gap-2">
                    {item.title}

                    <span
                      className={`transition-transform duration-300 
                      ${isOpen ? "rotate-90" : ""}`}
                    >
                      <FaArrowRight
                        size={10}
                        className="text-zinc-400 group-hover:translate-x-1 transition"
                      />
                    </span>
                  </h3>

                  <p className="text-xs sm:text-sm text-zinc-500">
                    {item.subtitle}
                  </p>
                </div>
              </div>

              {/* DATE */}
              <span className="text-xs sm:text-sm text-zinc-400">
                {item.date}
              </span>
            </div>

            {/* DROPDOWN */}
            <div
              className={`transition-all duration-500 overflow-hidden
              ${isOpen ? "max-h-125 opacity-100 mt-4" : "max-h-0 opacity-0"}`}
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pl-0 sm:pl-16 font-cabinet text-sm text-zinc-700">
                {/* LEFT SIDE */}
                <div>
                  <h4 className="text-xs tracking-widest text-orange-600 mb-2">
                    {item.content.leftTitle}
                  </h4>
                  <p className="leading-relaxed">{item.content.leftText}</p>
                </div>

                {/* RIGHT SIDE */}
                <div>
                  <h4 className="text-xs tracking-wider text-orange-600 mb-2">
                    {item.content.rightTitle}
                  </h4>
                  <ul className="space-y-2">
                    {item.content.points.map((point, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="text-zinc-400 text-xs mt-1">★</span>
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
