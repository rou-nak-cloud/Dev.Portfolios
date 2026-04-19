import { skills as SKILLS } from "../constants";

export default function Marquee() {
  const duplicated = [...SKILLS, ...SKILLS];

  return (
    <section className="max-w-3xl mx-auto px-2 py-3 mb-14 overflow-hidden space-y-5">
      {/* ROW 1 → LEFT */}
      <div className="overflow-hidden">
        <div className="flex gap-5 w-max marquee-left marquee-left">
          {duplicated.map((skill, index) => (
            <SkillCard key={index} skill={skill} variant="default" />
          ))}
        </div>
      </div>

      {/* ROW 2 → RIGHT (ORANGE) */}
      <div className="overflow-hidden">
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
