import { interest } from "../constants";

export default function Interest() {
  return (
    <section className="max-w-2xl mx-auto px-4 sm:px-6 py-10 md:py-12">
      {/* Badge */}
      <div className="flex items-center justify-center gap-2 mb-6">
        <div className="h-px flex-1 bg-linear-to-l from-gray-300/60 via-zinc-400/40 to-transparent"></div>

        <span className="text-xs sm:text-sm md:text-md font-cabinet font-semibold tracking-wider text-amber-100 border border-amber-900 bg-black px-3 py-1 rounded-full">
          Interests
        </span>

        <div className="h-px flex-1 bg-linear-to-r from-gray-300/60 via-zinc-400/40 to-transparent"></div>
      </div>

      {/* Heading */}
      <div className="pb-10 md:pb-14 text-center">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-cabinet font-bold text-slate-800 mb-3 md:mb-4 tracking-tight">
          <span className="font-melodrama text-amber-500">B</span>
          eyond the code
          <span className="font-melodrama text-amber-500">.</span>
        </h2>

        <p className="text-sm sm:text-base md:text-lg font-cabinet text-zinc-600 leading-tight max-w-xl mx-auto">
          A glimpse into the things that keep me inspired outside of
          development. These interests help me stay curious, creative, and
          balanced in life.
        </p>
      </div>

      {/* Timeline */}
      <div className="relative">
        {/* Vertical Line */}
        <div className="absolute left-2 sm:left-3 top-0 h-full w-0.5 bg-linear-to-b from-transparent via-zinc-300 to-transparent"></div>

        {interest.map((item, index) => (
          <div
            key={index}
            className="relative pl-8 sm:pl-16 mb-6 sm:mb-8 group"
          >
            {/* Timeline Dot */}
            <span className="absolute left-0 sm:left-1 top-2 w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-white border border-zinc-300 flex items-center justify-center shadow-sm">
              <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-amber-500"></span>
            </span>

            {/* Gradient Border Wrapper */}
            <div className="relative group">
              {/* Animated Gradient Border */}
              <div
                className="absolute inset-0 rounded-xl p-px
                bg-linear-to-r from-amber-400/20 via-orange-300/60 to-amber-400/20
                opacity-0 group-hover:opacity-100
                transition-opacity duration-500"
              ></div>

              {/* Card */}
              <div
                className="relative bg-transparent border border-zinc-200/20 rounded-xl
                p-4 sm:p-5
                shadow-sm
                group-hover:scale-[1.01]
                group-hover:shadow-md
                transition-all duration-300"
              >
                <h3 className="text-xl sm:text-2xl md:text-2xl text-center font-bold text-slate-800 font-melodrama mb-2">
                  {item.title}
                </h3>

                <p className="text-sm sm:text-base font-cabinet text-left md:text-center text-zinc-700 leading-tight">
                  {item.desc}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
