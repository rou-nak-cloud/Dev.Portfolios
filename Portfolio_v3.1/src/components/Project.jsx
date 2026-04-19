import ProjectCard from "../utilities/ProjectCard";

export default function Project() {
  return (
    <section className="max-w-4xl mx-auto px-3 md:px-6 py-12 text-center">
      {/* Badge with lines */}
      <div className="flex items-center justify-center gap-4 mb-6">
        <div className="h-[.8px] flex-1 bg-linear-to-l from-gray-300/60 via-zinc-400/40 to-transparent"></div>

        <span className="text-sm md:text-md font-cabinet font-semibold tracking-wider text-amber-100 border border-amber-900 bg-black px-4 py-1 rounded-full">
          My Projects
        </span>

        <div className="h-[.8px] flex-1 bg-linear-to-r from-gray-300/60 via-zinc-400/40 to-transparent"></div>
      </div>

      {/* Heading */}
      <div className="heading pb-8">
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
          I enjoy crafting modern, minimal, and visually engaging intuitive web
          experiences. These projects reflect my focus on clean UI, smooth
          interactions, and thoughtful frontend architecture.
        </p>
      </div>

      {/* Project Cards */}
      <ProjectCard />
    </section>
  );
}
