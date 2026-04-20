import { useRef } from "react";
import { educations } from "../constants";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Education() {
  const containerRef = useRef(null);
  const lineRef = useRef(null);

  useGSAP(() => {
    const ctx = gsap.context(() => {
      const cards = gsap.utils.toArray(".edu-card");

      // Timeline line grow
      gsap.fromTo(
        lineRef.current,
        { height: "0%" },
        {
          height: "100%",
          ease: "none",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 80%",
            scrub: true,
          },
        },
      );

      //  Cards fade + up
      gsap.fromTo(
        cards,
        {
          y: 50,
          opacity: 0,
          scale: 0.98,
        },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 0.3,
          stagger: 0.2,
          ease: "expo.out",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 80%",
            end: "top -30%",
            scrub: true,
            toggleActions: "play none none reverse",
          },
        },
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="py-16 md:py-18 px-4 md:px-8 font-cabinet">
      <div className="max-w-2xl mx-auto mb-1 md:mb-3">
        {/* Title */}
        <h2 className="text-3xl font-cabinet font-semibold text-slate-900 mb-6">
          Educatio
          <span className="font-melodrama font-bold text-amber-400 text-3xl md:text-4xl">
            n.
          </span>
        </h2>

        {/* Timeline */}
        <div ref={containerRef} className="relative">
          {/*  Animated Line */}
          <div
            ref={lineRef}
            className="absolute left-4 md:left-5 top-0 w-0.5 bg-orange-200/70"
            style={{ height: "100%" }}
          ></div>

          <div className="space-y-6">
            {educations.map((item, index) => {
              const Icon = item.icon;

              return (
                <div
                  key={index}
                  className="flex gap-2 md:gap-3 items-start relative"
                >
                  {/* Circle */}
                  <div className="relative z-10 w-8 h-8 md:w-9 md:h-9 rounded-full border-2 border-amber-300/80 bg-white flex items-center justify-center shadow-sm">
                    <div className="w-1 h-1 md:w-1.5 md:h-1.5 bg-amber-600 rounded-full"></div>
                  </div>

                  {/*  Card */}
                  <div className="edu-card flex-1 bg-white border border-zinc-200 rounded-lg p-3 md:p-4 transition-all duration-300 hover:translate-x-1 hover:shadow-md">
                    {/* Date */}
                    <p className="text-lg font-melodrama font-bold text-amber-600 mb-1 highlight-marker">
                      ({item.date})
                    </p>

                    {/* Title */}
                    <h3 className="font-semibold text-base md:text-lg leading-tight text-slate-900">
                      {item.title}
                    </h3>

                    {/* Institution */}
                    <div className="flex items-center justify-end gap-1 group">
                      <a
                        href={item.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm md:text-md text-right font-semibold text-zinc-500 hover:text-amber-800 mt-1 mb-4 custom-underline transition-all duration-300"
                      >
                        {item.institution}
                      </a>

                      <span>
                        <Icon className="text-amber-400 -mt-2 group-hover:translate-x-1 transition" />
                      </span>
                    </div>

                    {/* Content */}
                    <ul className="list-disc pl-4 text-sm md:text-lg tracking-tight leading-5 md:leading-5.5 text-zinc-700 space-y-1">
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
