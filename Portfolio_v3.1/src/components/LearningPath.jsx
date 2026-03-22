import { useState } from "react";
import { learningItems } from "../constants";
import { FaArrowRight } from "react-icons/fa";

export default function LearningJourney() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleItem = (index) => {
    // IF the clicked item is already open -> close it else open it
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="space-y-3 max-w-3xl mx-auto px-4 sm:px-6 mt-3 md:mt-5">
      <h2 className="text-2xl md:text-3xl font-cabinet font-semibold mb-4 text-slate-900">
        Learning Journe{""}
        <span className="font-melodrama font-bold text-amber-400 text-3xl md:text-4xl">
          y
        </span>
      </h2>
      {learningItems.map((item, index) => {
        const Icon = item.icon;
        const isOpen = openIndex === index;

        return (
          <div
            key={index}
            className="border-b border-zinc-300/50 shadow-xs pb-1 hover:bg-zinc-100/70 p-1 md:p-3 rounded-xl transition-all duration-300"
          >
            {/* Row */}
            <div
              onClick={() => toggleItem(index)}
              className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 cursor-pointer group"
            >
              {/* Left */}
              <div className="flex items-start sm:items-center gap-3 sm:gap-4">
                {/* Icon */}
                <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full border flex items-center justify-center text-amber-500">
                  <Icon className="text-lg sm:text-xl" />
                </div>

                {/* Title */}
                <div className="font-cabinet font-bold">
                  <h3 className="text-base sm:text-lg tracking-normal flex items-center gap-2">
                    {item.title}

                    <span
                      className={`transition-transform duration-300 
                      group-hover:translate-x-1 
                      ${isOpen ? "rotate-90" : ""}`}
                    >
                      <FaArrowRight size={10} className="text-zinc-400" />
                    </span>
                  </h3>

                  <p className="text-xs sm:text-sm text-zinc-500">
                    {item.subtitle}
                  </p>
                </div>
              </div>

              {/* Date */}
              <span className="text-xs sm:text-sm text-zinc-400 text-right">
                {item.date}
              </span>
            </div>

            {/* Dropdown */}
            <div
              className={`transition-all duration-400 overflow-hidden
              ${isOpen ? "max-h-40 max-w-2xl mt-3 opacity-100" : "max-h-0 max-w-2xl opacity-0"}`}
            >
              <p className="text-zinc-800 font-cabinet text-sm leading-relaxed pl-0 sm:pl-16">
                {item.description}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
