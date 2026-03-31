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
        <div className="pb-10 text-center">
          <h2 className="text-3xl md:text-4xl font-cabinet font-bold text-slate-800 mb-4 tracking-tight">
            <span className="font-melodrama text-amber-500">B</span>
            eyond the code
            <span className="font-melodrama text-amber-500">.</span>
          </h2>

          <p className="text-lg md:text-xl font-cabinet font-semibold text-zinc-700 leading-tight max-w-xl mx-auto">
            <blockquote>
              "The best way to predict the future is to create it."
            </blockquote>
          </p>
        </div>

        {/* Testimonial or Stat carousel */}
        <div className="max-w-3xl mx-auto">
          <div className="relative">
            {/* main testimonial */}
            <div className="px-6 rounded-2xl md:px-12 max-w-2xl mx-auto bg-amber-200/20 border border-zinc-200/20 py-2 md:py-4 shadow-sm">
              {/* Quote */}
              <div className="absolute -top-4 left-2 w-10 h-10 rounded-full bg-amber-400/40 flex items-center justify-center">
                <FaQuoteLeft className="w-4 h-4" />
              </div>
              <blockquote className="text-lg md:text-xl font-cabinet leading-tight">
                <h2>"{stats[0].desc}"</h2>
              </blockquote>
              <div className="flex items-center gap-4">
                <h4>{stats[0].label}</h4>
                <span>{stats[0].number}</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
