import { skills as SKILLS } from "../constants";

export default function Marquee() {
  const duplicated = [...SKILLS, ...SKILLS];

  return (
    <section className="max-w-2xl mx-auto px-2 py-3 mb-14 overflow-hidden space-y-5 select-none">
      {/* ROW 1 → LEFT */}
      <div className="relative overflow-hidden">
        {/* LEFT FADE */}
        <div className="pointer-events-none absolute left-0 top-0 h-full w-16 bg-linear-to-r from-white to-transparent z-10" />

        {/* RIGHT FADE */}
        <div className="pointer-events-none absolute right-0 top-0 h-full w-16 bg-linear-to-l from-white to-transparent z-10" />

        <div className="flex gap-5 w-max marquee-left marquee-left">
          {duplicated.map((skill, index) => (
            <SkillCard key={index} skill={skill} variant="default" />
          ))}
        </div>
      </div>

      {/* ROW 2 → RIGHT (ORANGE) */}
      <div className="relative overflow-hidden">
        {/* LEFT FADE */}
        <div className="pointer-events-none absolute left-0 top-0 h-full w-16 bg-linear-to-r from-white to-transparent z-10" />

        {/* RIGHT FADE */}
        <div className="pointer-events-none absolute right-0 top-0 h-full w-16 bg-linear-to-l from-white to-transparent z-10" />

        <div className="flex gap-3 w-max marquee-right marquee-wave-right">
          {duplicated.map((skill, index) => (
            <SkillCard key={index} skill={skill} variant="highlight" />
          ))}
        </div>
      </div>
    </section>
  );
}

/* 🔹 Card */
function SkillCard({ skill, variant }) {
  return (
    <div
      className={`flex items-center gap-2 px-3 py-1.5 rounded-full whitespace-nowrap transition-all duration-300
      ${
        variant === "highlight"
          ? "bg-orange-500/10 text-black border border-zinc-200"
          : "bg-white/80 text-zinc-800 border border-zinc-200"
      }`}
    >
      <img src={skill.icon} alt={skill.name} className="w-4 h-4" />
      <span className="text-sm font-medium">{skill.name}</span>
    </div>
  );
}
