import { projects as PROJECTS } from "../constants";
import { LuArrowUpRight, LuGithub, LuGlobe } from "react-icons/lu";

export default function ProjectCard() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-3 px-1 md:px-5">
      {PROJECTS.map((project, idx) => (
        <a
          key={idx}
          href={project.href}
          target="_blank"
          rel="noopener noreferrer"
          className="group rounded-xl border border-zinc-400/30  overflow-hidden hover:shadow-xl hover:shadow-amber-500/10 transition-all duration-300 flex flex-col cursor-pointer"
        >
          {/* Project Image */}
          <div className="relative h-48 w-full overflow-hidden bg-zinc-800">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />

            {/* Floating Badges */}
            <div className="absolute top-3 right-3 flex gap-2">
              {project.links.map((link, i) => (
                <a
                  key={i}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 bg-zinc-900/80 backdrop-blur border border-zinc-600 text-[10px] font-semibold text-white px-3 -py-1 rounded-xl hover:border-amber-400 hover:text-amber-500 transition-all duration-300"
                >
                  {link.type === "Website" ? (
                    <LuGlobe size={12} />
                  ) : (
                    <LuGithub size={12} />
                  )}
                  {link.type}
                </a>
              ))}
            </div>
          </div>

          {/* Content */}
          <div className="p-5 flex flex-col flex-1">
            <div className="flex justify-between items-center mb-1">
              <h3 className="text-xl leading-tight text-left font-cabinet font-bold text-slate-800 group-hover:text-amber-600 transition-colors">
                {project.title}
              </h3>
              <LuArrowUpRight className="text-slate-400 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </div>

            <p className="text-xs text-left text-zinc-500 font-medium mb-3">
              {project.dates}
            </p>

            <p className="text-sm text-left text-zinc-700 leading-tight mb-6 flex-1">
              {project.description}
            </p>

            {/* Tech Tags */}
            <div className="flex flex-wrap gap-1">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-[.7rem] font-cabinet font-semibold text-zinc-800 px-3 rounded-xl border border-zinc-400/60"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </a>
      ))}
    </div>
  );
}
