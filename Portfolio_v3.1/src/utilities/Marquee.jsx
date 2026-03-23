import { skills as SKILLS } from "../constants";

export default function Marquee() {
  return (
    <section className="max-w-2xl mx-auto px-1 py-2 mb-7 md:mb-14 overflow-hidden">
      {/* Marquee Container */}
      <div className="relative overflow-hidden">
        <div className="flex gap-4 marquee w-max">
          {/* Duplicate list for infinite effect */}
          {[...SKILLS, ...SKILLS].map((skill, index) => (
            <div
              key={index}
              className="flex items-center gap-2 px-4 py-2
              border border-zinc-200 rounded-full
              bg-white
              hover:bg-amber-50/70
              hover:border-amber-200
              hover:shadow-md hover:shadow-amber-200/40
              transition-all duration-300"
            >
              <img src={skill.icon} alt={skill.name} className="w-5 h-5" />

              <span className="font-cabinet text-sm font-medium">
                {skill.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
