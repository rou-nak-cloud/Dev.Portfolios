import { FaQuoteLeft } from "react-icons/fa";
import { stats } from "../constants";

export default function Stats() {
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

        {/* Testimonial / Stat Card */}
        <div className="max-w-3xl mx-auto">
          <div className="relative group">
            {/* Gradient Border */}
            <div className="absolute inset-0 rounded-2xl p-px bg-linear-to-r from-amber-400/40 via-orange-500/50 to-amber-300/40"></div>

            {/* Card */}
            <div className="relative px-6 md:px-10 py-5 rounded-2xl bg-white/80 backdrop-blur border border-zinc-200/40 shadow-sm hover:shadow-lg transition-all duration-300">
              {/* Quote Icon */}
              <div className="absolute -top-5 left-5 w-10 h-10 rounded-full bg-amber-400/40 text-black flex items-center justify-center shadow-md">
                <FaQuoteLeft className="w-4 h-4" />
              </div>

              {/* Quote Text */}
              <blockquote className="text-lg md:text-xl font-cabinet text-zinc-700 leading-tight pt-2">
                "{stats[0].desc}"
              </blockquote>

              {/* Footer */}
              <div className="flex items-center justify-between mt-6 border-t border-zinc-300/60 pt-4">
                <h4 className="text-md font-cabinet text-zinc-600 tracking-wide">
                  {stats[0].label}
                </h4>

                <span className="text-2xl font-bold font-melodrama text-amber-600">
                  {stats[0].number}
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
