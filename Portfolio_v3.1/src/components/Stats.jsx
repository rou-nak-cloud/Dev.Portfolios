import { FaChevronLeft, FaChevronRight, FaQuoteLeft } from "react-icons/fa";
import { stats } from "../constants";
import { useState } from "react";

export default function Stats() {
  const [activeIdx, setActiveIdx] = useState(0);
  const [direction, setDirection] = useState("next");

  const nextStat = () => {
    setDirection("next");
    setActiveIdx((prev) => (prev + 1) % stats.length);
  };

  const prevStat = () => {
    setDirection("prev");
    setActiveIdx((prev) => (prev - 1 + stats.length) % stats.length);
  };

  return (
    <div>
      <section className="max-w-2xl mx-auto px-4 md:px-6 py-6">
        {/* Badge */}
        <div className="flex items-center justify-center gap-2 mb-6">
          <div className="h-px flex-1 bg-linear-to-l from-gray-300/60 via-zinc-400/40 to-transparent"></div>

          <span className="text-sm md:text-md font-cabinet font-semibold tracking-wider text-amber-100 border border-amber-900 bg-black px-4 py-1 rounded-full">
            My Stats
          </span>

          <div className="h-px flex-1 bg-linear-to-r from-gray-300/60 via-zinc-400/40 to-transparent"></div>
        </div>

        {/* Heading */}
        <div className="pb-14 text-center">
          <h2 className="text-3xl md:text-4xl font-cabinet font-bold text-slate-800 mb-4 tracking-tight">
            <span className="font-melodrama text-amber-500">B</span>
            uilding with purpose
            <span className="font-melodrama text-amber-500">.</span>
          </h2>

          <p className="text-lg md:text-base font-cabinet text-zinc-600 leading-tight max-w-xl mx-auto">
            A snapshot of my development journey so far. These represent the
            projects I've built, the technologies I've explored, and the
            continuous effort I put into improving my craft as a developer.
          </p>
        </div>

        {/* Animated Card */}
        <div className="max-w-3xl mx-auto ">
          <div
            key={activeIdx}
            className="relative group transition-all duration-500 ease-in-out fade-slide"
            style={{
              transform:
                direction === "next" ? "translateX(0px)" : "translateX(0px)",
              // animation: "fade-slide",
            }}
          >
            {/* Gradient Border */}
            <div className="absolute inset-0 rounded-2xl p-2 bg-linear-to-r from-amber-400/40 via-orange-500/50 to-amber-300/40"></div>

            {/* Card */}
            <div className="relative px-6 md:px-10 py-6 rounded-2xl bg-white/80 backdrop-blur border border-zinc-200/40 shadow-sm hover:shadow-lg transition-all duration-300">
              {/* Quote Icon */}
              <div className="absolute -top-5 left-5 w-10 h-10 rounded-full bg-amber-400/40 text-black flex items-center justify-center shadow-md">
                <FaQuoteLeft className="w-4 h-4" />
              </div>

              {/* Quote */}
              <blockquote className="text-lg md:text-xl font-cabinet text-zinc-700 leading-tight pt-2">
                "{stats[activeIdx].desc}"
              </blockquote>

              {/* Footer */}
              <div className="flex items-center justify-between mt-6 border-t border-zinc-300/60 pt-4">
                <h4 className="text-md font-cabinet text-zinc-600 tracking-wide">
                  {stats[activeIdx].label}
                </h4>

                <span className="text-2xl font-bold font-melodrama text-amber-600">
                  {stats[activeIdx].number}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <div className="flex items-center justify-center gap-4 mt-6">
          <button
            onClick={prevStat}
            className="p-2 rounded-full hover:bg-amber-400/40 hover:text-amber-400 transition-all duration-300 cursor-pointer"
          >
            <FaChevronLeft />
          </button>

          <div className="flex gap-2">
            {stats.map((_, idx) => (
              <button
                onClick={() => setActiveIdx(idx)}
                key={idx}
                className={`w-2 h-2 rounded-full transition-all cursor-pointer duration-300 ${
                  idx === activeIdx
                    ? "w-8 bg-amber-500"
                    : "bg-zinc-300 w-1 hover:w-2 hover:bg-amber-400/40"
                }`}
              ></button>
            ))}
          </div>

          <button
            onClick={nextStat}
            className="p-2 rounded-full hover:bg-amber-400/40 hover:text-amber-400 transition-all duration-300 cursor-pointer"
          >
            <FaChevronRight />
          </button>
        </div>
      </section>
    </div>
  );
}
