import { Link } from "react-router";
import { aboutItems } from "../constants";
import Button from "./Button";

export default function Hero() {
  // image avatar
  const avatarUrl = "https://img.clerk.com/";
  return (
    <section
      id="home"
      className="relative w-full overflow-hidden bg-white pt-14 md:pt-16 pb-12 md:pb-15"
    >
      {/* DOT PATTERN LAYER 
          - backgroundSize: 6px creates that "tight" minimal look
          - radial-gradient: #000 (Black) at 0.8px creates the sharp dot
      */}
      <div
        className="absolute inset-0 z-0 h-50 w-full dots-animated"
        style={{
          backgroundImage: `radial-gradient(#000000 .8px, transparent 1px)`,
          backgroundSize: "6px 6px",
          // This mask makes the dots visible at the top and disappear smoothly
          maskImage: "linear-gradient(to bottom, black 10%, transparent 90%)",
          WebkitMaskImage:
            "linear-gradient(to bottom, black 10%, transparent 90%)",
          opacity: 0.6, // Low opacity keeps it "subtle" and not distracting
        }}
      />

      {/* CONTENT LAYER */}
      <div className="container relative z-10 md:mx-auto max-w-3xl px-6">
        <div className="flex md:items-center justify-between gap-8 flex-col-reverse md:flex-row items-start pb-10 md:pb-11">
          {/* Text Area */}
          <div className="flex flex-col space-y-2 md:text-left">
            <h1 className="text-5xl font-melodrama font-semibold tracking-tight md:tracking-[-.1rem] text-black max-sm:text-4xl md:text-[3.2rem]">
              Hi, I'm Rounak
            </h1>
            <p className="max-w-125 font-cabinet font-medium text-md md:text-lg leading-tight text-zinc-600/80">
              Electronics Engineer, now a{" "}
              <span className="underline decoration-amber-200 decoration-2 underline-offset-4">
                Frontend Developer
              </span>{" "}
              dedicated to building{" "}
              <span className=" decoration-amber-200 decoration-2 underline-offset-4">
                modern, engaging web experiences
              </span>
              . I love{" "}
              <span className="underline decoration-amber-200 decoration-2 underline-offset-4">
                Calisthenics
              </span>
              . Very active on{" "}
              <span className=" decoration-amber-200 decoration-2 underline-offset-4">
                YouTube
              </span>
              .
            </p>
            {/* buttons */}
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 md:gap-6 pt-2 md:pt-2">
              <div className="work">
                <span className="relative w-2 h-2 px-5 py-1 text-sm md:text-md font-cabinet md:font-medium text-amber-950 rounded-full bg-emerald-500 backdrop-blur-md">
                  <span>Available for Work</span>
                  <span className="w-1 h-1 bg-emerald-300 rounded-full absolute left-0 top-2 ml-2 mt-0.5 animate-ping"></span>
                </span>
              </div>
              <Button />
            </div>
          </div>

          {/* Profile Image */}
          <div className="relative">
            <div className="h-26 w-26 overflow-hidden rounded-full border border-zinc-300 shadow-lg md:h-36 md:w-36 -mt-5 md:-mt-10">
              <img
                src={avatarUrl}
                alt="Profile"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>

        {/* About section */}
        <div>
          <h2 className="text-2xl font-cabinet font-bold text-slate-900 mb-3">
            About{" "}
            <span className="font-melodrama font-bold text-3xl md:text-[3.2xl] pl-2 tracking-wider highlight-marker">
              ME
            </span>
          </h2>
          {/* Body Content */}
          <p className="max-w-3xl font-cabinet text-md md:text-lg leading-tighter tracking-normal text-zinc-700/90">
            Hi, I'm{" "}
            <span className="custom-underline font-melodrama font-bold tracking-wider text-xl text-slate-900">
              Rounak Bakshi
            </span>
            , an Electronics Engineering graduate (2025) with a passion for
            crafting{" "}
            <span className="custom-underline font-cabinet font-medium text-slate-900">
              modern, aesthetic, and minimal web experiences
            </span>
            . I enjoy building interfaces that are both{" "}
            <span className="custom-underline font-cabinet font-medium text-slate-950">
              visually striking and highly interactive
            </span>
            , inspired by the design and motion of award-winning websites.
            <br />
            Through consistent coding practice, I’ve built several{" "}
            <span className="custom-underline font-cabinet font-medium text-slate-950">
              eye-catching projects
            </span>{" "}
            focused on smooth animations, clean layouts, and engaging user
            experiences. When I’m not coding, I’m dedicated to{" "}
            <span className="custom-underline font-cabinet font-medium text-slate-950">
              calisthenics training
            </span>
            — capable of doing{" "}
            <span className="custom-underline font-cabinet font-medium text-slate-950">
              200 push-ups and a 90° hold
            </span>
            , which reflects the same discipline and consistency I bring to my
            work as a developer.
          </p>
          <div>
            {aboutItems.map((item, index) => {
              const Icon = item.icon;

              return (
                <div
                  key={index}
                  className="flex gap-1 items-center justify-end"
                >
                  <span>{item.number}+</span>

                  <div className="flex items-center justify-start gap-1">
                    {item.label.includes("github") ? (
                      <a
                        href="https://github.com/rou-nak-cloud"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-amber-800 transition-all duration-300"
                      >
                        <p
                          className="custom-underline highlight-marker font-melodrama font-semibold text-md md:text-lg"
                          style={{ animationDelay: `${index * 1}s` }}
                        >
                          {item.label}
                        </p>
                      </a>
                    ) : (
                      <Link
                        to="/blogs"
                        className="hover:text-amber-800 transition-all duration-300"
                      >
                        <p
                          className="custom-underline highlight-marker font-melodrama font-semibold text-md md:text-lg"
                          style={{ animationDelay: `${index * 1}s` }}
                        >
                          {item.label}
                        </p>
                      </Link>
                    )}

                    <span>{Icon && <Icon />}</span>
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
