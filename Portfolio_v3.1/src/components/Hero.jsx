import { Link } from "react-router-dom";
import { aboutItems } from "../constants";
import Button from "./Button";
import { useRef } from "react";
import gsap from "gsap";
// import { useGsap } from "@gsap/react";

export default function Hero() {
  // image avatar
  const avatarUrl = "../../public/profilePic.jpeg";

  const ContainerHomeRef = useRef(null);

  const HeadTextContainerRef = useRef(null);
  const HeadTextRef = useRef(null);
  const ParaTextRef = useRef(null);

  // GSAP settings
  // gsap.registerPlugin(useGsap);

  // Head Text Gsap
  const mouseMoving = (e) => {
    const el = HeadTextRef.current;
    if (!el) return;

    const rect = el.getBoundingClientRect();

    // center position
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    // distance from center
    const x = e.clientX - centerX;
    const y = e.clientY - centerY;

    // normalize (so movement is smooth)
    const rotateX = (-y / rect.height) * 20;
    const rotateY = (x / rect.width) * 20;

    // clamp values
    const clamp = (val, min, max) => Math.max(min, Math.min(max, val));

    const finalX = clamp(rotateX, -22, 22);
    const finalY = clamp(rotateY, -22, 22);

    // el.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    gsap.to(el, {
      rotateX: finalX,
      rotateY: finalY,
      scale: 1.02,
      duration: 1,
      ease: "power2.out",
      overwrite: "auto", // prevents stacking animations
    });
  };
  const handleLeave = () => {
    const el = HeadTextRef.current;
    if (!el) return;

    gsap.to(el, {
      rotateX: 0,
      rotateY: 0,
      duration: 5,
      ease: "power3.out",
    });
  };

  // Para Text gsap

  return (
    <section
      id="home"
      onMouseMove={(e) => {
        mouseMoving(e);
      }}
      onMouseLeave={handleLeave}
      ref={ContainerHomeRef}
      className="relative w-full overflow-hidden bg-white pt-14 md:pt-16 pb-12 md:pb-15"
    >
      {/* DOT PATTERN LAYER 
          - backgroundSize: 6px creates that "tight" minimal look
          - radial-gradient: #000 (Black) at 0.8px creates the sharp dot
      */}
      <div
        className="absolute inset-0 z-0 h-50 w-full dots-animated"
        style={{
          backgroundImage: `radial-gradient(#000000 1px, transparent 1px)`,
          backgroundSize: "6px 6px",
          // This mask makes the dots visible at the top and disappear smoothly
          maskImage: "linear-gradient(to bottom, black 10%, transparent 90%)",
          WebkitMaskImage:
            "linear-gradient(to bottom, black 10%, transparent 90%)",
          opacity: 0.6, // Low opacity keeps it "subtle" and not distracting
        }}
      />

      {/* CONTENT LAYER */}
      <div className="container relative z-10 md:mx-auto max-w-3xl px-6 perspective-[2000px]">
        <div className="flex md:items-center justify-between gap-8 flex-col-reverse md:flex-row items-start pb-10 md:pb-11">
          {/* Text Area */}
          <div
            ref={HeadTextContainerRef}
            className=" flex flex-col space-y-2 md:text-left transform-3d"
          >
            <h1
              ref={HeadTextRef}
              className="text-5xl font-melodrama font-semibold tracking-tight md:tracking-[-.1rem] text-black max-sm:text-4xl md:text-[3.2rem] "
            >
              Hi, I'm Rounak
            </h1>
            <p
              ref={ParaTextRef}
              className="max-w-125 font-cabinet font-medium text-md md:text-lg leading-tight text-zinc-600/80"
            >
              Electronics Engineer, now a{" "}
              <span className="underline decoration-amber-200 decoration-2 underline-offset-4">
                self-taught Frontend Developer
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
            <div className="h-30 w-30 overflow-hidden rounded-full border border-zinc-400 shadow-2xl shadow-orange-500/50 md:h-42 md:w-42 -mt-5 md:-mt-10">
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
                  <span className="font-cabinet font-medium text-lg md:text-xl pt-1">
                    {item.number}+
                  </span>

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
