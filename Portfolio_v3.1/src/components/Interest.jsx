import { interest } from "../constants";

export default function Interest() {
  return (
    <section className="max-w-2xl mx-auto px-4 md:px-6 py-15">
      {/* Badge */}
      <div className="flex items-center justify-center gap-2 mb-6">
        <div className="h-px flex-1 bg-linear-to-l from-gray-300/60 via-zinc-400/40 to-transparent"></div>

        <span className="text-sm md:text-md font-cabinet font-semibold tracking-wider text-amber-100 border border-amber-900 bg-black px-4 py-1 rounded-full">
          Interests
        </span>

        <div className="h-px flex-1 bg-linear-to-r from-gray-300/60 via-zinc-400/40 to-transparent"></div>
      </div>

      {/* Heading */}
      <div className="pb-14 text-center">
        <h2 className="text-3xl md:text-4xl font-cabinet font-bold text-slate-800 mb-4 tracking-tight">
          <span className="font-melodrama text-amber-500">B</span>
          eyond the code
          <span className="font-melodrama text-amber-500">.</span>
        </h2>

        <p className="text-lg md:text-base font-cabinet text-zinc-600 leading-tight max-w-xl mx-auto">
          A glimpse into the things that keep me inspired outside of
          development. These interests help me stay curious, creative, and
          balanced in life.
        </p>
      </div>

      {/* Timeline */}
      <div className="relative">
        {/* Vertical Line */}
        <div className="absolute left-2 top-0 h-full w-0.5 bg-linear-to-b from-transparent via-zinc-300 to-transparent"></div>

        {interest.map((item, index) => (
          <div key={index} className="relative pl-12 mb-6 group">
            {/* Timeline Dot */}
            <span className="absolute left-0 top-2 w-5 h-5 rounded-full bg-white border border-zinc-300 flex items-center justify-center shadow-sm">
              <span className="w-2 h-2 rounded-full bg-amber-500"></span>
            </span>

            {/* Card */}
            <div className="bg-white border border-zinc-200 rounded-xl p-4 shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-2xl text-center font-bold text-slate-800 font-melodrama mb-2">
                {item.title}
              </h3>

              <p className="text-md font-cabinet text-center text-zinc-600 leading-tight">
                {item.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
