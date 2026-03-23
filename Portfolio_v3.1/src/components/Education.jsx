import { educations } from "../constants";

export default function Education() {
  return (
    <section className="py-16 px-6 font-cabinet ">
      <div className="max-w-2xl mx-auto mb-12 md:mb-14">
        {/* Section Title */}
        <h2 className="text-3xl font-cabinet font-semibold text-slate-900 mb-6">
          Educatio
          <span className="font-melodrama font-bold text-amber-400 text-3xl md:text-4xl">
            n.
          </span>
        </h2>

        <div className="relative">
          {/* Vertical Timeline Line */}
          <div className="absolute left-4.5 top-0 h-full w-0.5 bg-slate-300/50"></div>

          <div className="space-y-6">
            {educations.map((item, index) => {
              const Icon = item.icon;
              return (
                <div key={index} className="flex gap-3 items-start relative">
                  {/* Circle */}
                  <div className="relative z-10 w-9 h-9 rounded-full border-2 border-amber-300/80 bg-white flex items-center justify-center shadow-sm">
                    <div className="w-1 h-1 bg-amber-600 rounded-full"></div>
                  </div>

                  {/* Card */}
                  <div className="flex-1 bg-white border border-zinc-200 rounded-lg p-3 transition-all duration-300 hover:translate-x-1 hover:shadow-md">
                    {/* Date */}
                    <p className="text-xl font-melodrama font-bold text-amber-600 mb-1 highlight-marker">
                      ({item.date})
                    </p>

                    {/* Title */}
                    <h3 className="font-semibold text-lg md:text-xl leading-tight text-slate-900">
                      {item.title}
                    </h3>

                    {/* Institution */}
                    <div className="flex items-center justify-end gap-1 group  ">
                      <p className="text-md text-right font-semibold text-zinc-500 hover:text-amber-800 mt-1 mb-5 custom-underline cursor-pointer transition-all duration-300">
                        {item.institution}
                      </p>

                      <span>
                        <Icon className="text-amber-400 -mt-3 arrow-hover" />
                      </span>
                    </div>

                    {/* Content */}
                    <ul className="list-disc pl-4 text-md text-zinc-700 space-y-1 max-w-xl mx-auto">
                      {item.contents.map((content, i) => (
                        <li key={i}>{content}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
