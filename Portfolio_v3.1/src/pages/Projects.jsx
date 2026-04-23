export default function Projects() {
  return (
    <div
      className="relative w-full overflow-hidden bg-white pt-14 md:pt-10 pb-12 md:pb-15 select-none"
      style={{ perspective: "1000px" }}
    >
      {/* DOT PATTERN LAYER */}
      <div
        className="absolute inset-0 z-0 h-52 w-full dots-animated pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(#fbbf24 2px, transparent 1px)`,
          backgroundSize: "6px 6px",
          maskImage: "linear-gradient(to bottom, black 10%, transparent 90%)",
          WebkitMaskImage:
            "linear-gradient(to bottom, black 10%, transparent 90%)",
          opacity: 0.6,
        }}
      />

      <div className="container relative z-10 md:mx-auto max-w-3xl px-4 sm:px-6">
        {/* HEADING */}
        <h1
          className="flex items-center justify-center text-4xl sm:text-5xl md:text-7xl tracking-wider text-zinc-900 font-melodrama will-change-transform"
          style={{ transformStyle: "preserve-3d" }}
        >
          Projects
          <span className="text-[#fbbf24]">.</span>
        </h1>
      </div>
    </div>
  );
}
