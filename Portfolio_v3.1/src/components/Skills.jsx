import { skills as SKILLS } from "../constants";
export default function Skills() {
  return (
    <section id="skills" className="max-w-2xl mx-auto px-6 py-6">
      <h2 className="text-2xl font-cabinet font-bold text-black mb-6">
        Skill
        <span className="font-melodrama font-bold text-amber-400 text-3xl md:text-4xl">
          s.
        </span>
        {/* draggable hint */}
        <span className="text-xs md:text-sm pl-2 font-melodrama font-semibold tracking-widest text-zinc-700 italic">
          (explore )
        </span>
      </h2>

      <div className="flex flex-wrap gap-3">
        {SKILLS.map((skill) => (
          <div
            key={skill.name}
            className="flex items-center gap-2 px-4 py-1.5 border border-slate-300/80 rounded-full bg-white shadow-sm hover:bg-amber-100/40 transition-colors cursor-grabbing"
          >
            <img
              src={skill.icon}
              alt={skill.name}
              className="w-4 h-4 object-contain"
            />
            <span className="text-sm font-cabinet font-medium text-slate-900">
              {skill.name}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
