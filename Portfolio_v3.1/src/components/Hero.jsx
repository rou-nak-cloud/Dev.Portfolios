export default function Hero() {
  // image avatar
  const avatarUrl = "https://img.clerk.com/";
  return (
    <section
      id="home"
      className="relative w-full overflow-hidden bg-white pt-17 pb-15"
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
      <div className="container relative z-10 md:mx-auto max-w-3xl px-6">
        <div className="flex md:items-center justify-between gap-8 flex-col-reverse md:flex-row items-start">
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
          </div>

          {/* Profile Image */}
          <div className="relative">
            <div className="h-26 w-26 overflow-hidden rounded-full border border-zinc-300 shadow-lg md:h-32 md:w-32">
              <img
                src={avatarUrl}
                alt="Profile"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
