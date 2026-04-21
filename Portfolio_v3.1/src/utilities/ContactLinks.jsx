import { digitalSpaces, contactInfo } from "../constants";
import TimeFormat from "./TimeFormat";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import SplitText from "gsap/SplitText";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(SplitText, ScrollTrigger, useGSAP);

const ContactLinks = () => {
  const textRef = useRef(null);
  const mainTextRef = useRef(null);

  useGSAP(() => {
    const ctx = gsap.context(() => {
      if (!textRef.current) return;

      const split = new SplitText([textRef.current, mainTextRef.current], {
        type: "lines, words",
      });

      //  LINE ANIMATION (scroll)
      gsap.from(split.lines, {
        y: 40,
        opacity: 0,
        duration: 0.8,
        stagger: 0.18,
        ease: "power3.out",
        scrollTrigger: {
          trigger: textRef.current,
          start: "top 85%",
        },
      });

      //  WORD HOVER EFFECT
      split.words.forEach((word) => {
        //  skip words inside .no-hover
        if (word.closest(".no-split")) return;
        word.style.display = "inline-block"; // for moving the words it is required

        word.addEventListener("mouseenter", () => {
          gsap.to(word, {
            y: -6,
            duration: 0.4,
            ease: "power2.out",
          });
        });

        word.addEventListener("mouseleave", () => {
          gsap.to(word, {
            y: 0,
            duration: 0.5,
            ease: "power2.out",
          });
        });
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <div className="max-w-2xl mx-auto mt-10 px-4">
      {/* Responsive Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 text-center md:text-left">
        {/* Contact Details */}
        <div className="space-y-1">
          <h3 className="font-cabinet font-bold text-xl text-slate-900">
            Contact Details
          </h3>

          {contactInfo.slice(0, 2).map((item, idx) => (
            <a
              key={idx}
              href={item.href}
              className="group flex items-center justify-center md:justify-start gap-1 text-lg text-slate-900 hover:text-amber-700 transition-colors"
            >
              <item.icon className="w-4 h-4" />
              <span className="relative font-cabinet">
                {item.label}
                <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-amber-500 transition-all duration-300 group-hover:w-full"></span>
              </span>
            </a>
          ))}
        </div>

        {/* Digital Spaces */}
        <div className="space-y-2">
          <h3 className="font-cabinet font-bold text-xl text-slate-900 md:text-right">
            My Spaces
          </h3>

          {digitalSpaces.map((space, idx) => (
            <a
              key={idx}
              href={space.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-center md:justify-end gap-2 text-slate-600 hover:text-amber-700 transition-colors cursor-alias"
            >
              <space.icon className="w-4 h-4" />
              <span className="relative font-cabinet cursor-pointer">
                {space.label}
                <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-amber-500 transition-all duration-300 group-hover:w-full"></span>
              </span>
            </a>
          ))}
        </div>

        {/* Location */}
        <div className="space-y-1 md:col-span-2 lg:col-span-1">
          <h3 className="font-cabinet font-bold text-xl text-slate-900">
            Location
          </h3>

          <div className="flex items-center justify-center md:justify-start gap-2 text-slate-600">
            {(() => {
              const LocationIcon = contactInfo[2].icon;
              return <LocationIcon className="w-4 h-4" />;
            })()}
            <span className="font-cabinet">{contactInfo[2].label}</span>
          </div>

          {/* Time */}
          <div className="flex items-end justify-center md:justify-start gap-1">
            <TimeFormat />
            <span className="text-sm font-cabinet text-slate-600 mb-1">PM</span>
          </div>
        </div>
      </div>

      {/* Availability Card */}
      <div className="relative group mt-10">
        <div className="absolute -top-px left-1/2 -translate-x-1/2 w-[80%] h-0.5 bg-linear-to-r from-transparent via-amber-500/50 to-transparent blur-[1px]"></div>

        <div className="glass rounded-3xl p-6 border border-slate-200/50 bg-white/50 backdrop-blur-sm transition-all duration-500 hover:border-amber-500/30 hover:shadow-lg hover:shadow-amber-500/5">
          <div className="flex items-center justify-center font-cabinet gap-3 mb-3">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
            </span>

            <span
              ref={mainTextRef}
              className="font-cabinet text-xl font-bold text-slate-500"
            >
              Currently Available
            </span>
          </div>

          <p
            ref={textRef}
            className="text-slate-700 text-md sm:text-lg px-3 md:px-4 font-cabinet leading-tight text-center"
          >
            I'm currently open to new opportunities and exciting projects.
            Whether you need a frontend developer or a freelance consultant,
            <a
              href="#contact"
              className="no-split text-amber-700 font-medium italic ml-1 underline underline-offset-4"
            >
              Let's Talk!
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ContactLinks;
