export default function Project() {
  return (
    <section className="max-w-2xl mx-auto px-6 py-12 text-center">
      {/* Badge with lines */}
      <div className="flex items-center justify-center gap-4 mb-6">
        <div className="h-[.8px] flex-1 bg-linear-to-l from-gray-300/60 via-zinc-400/40 to-transparent"></div>

        <span className="text-sm md:text-md font-cabinet font-semibold tracking-wider text-amber-600 border border-amber-900 bg-black px-4 py-1 rounded-full">
          My Projects
        </span>

        <div className="h-[.8px] flex-1 bg-linear-to-r from-gray-300/60 via-zinc-400/40 to-transparent"></div>
      </div>

      {/* Heading */}
      <h2 className="text-2xl md:text-3xl lg:text-4xl font-cabinet font-bold text-slate-800 mb-4 tracking-tight leading-tight">
        <span className="font-melodrama font-bold text-amber-500 text-3xl md:text-4xl pr-0.5">
          {/* C */}
        </span>
        Check out my latest wor
        <span className="font-melodrama font-bold text-amber-500 text-3xl md:text-4xl pl-0.5">
          k.
        </span>
      </h2>

      {/* Subtext */}
      <p className="text-sm md:text-base lg:text-lg font-cabinet text-zinc-800 leading-tight max-w-xl mx-auto">
        I've built a range of projects from elegant landing pages to full-stack
        web applications. Here are some selected works showcasing my focus on
        modern UI, performance, and interactive experiences.
      </p>
    </section>
  );
}
