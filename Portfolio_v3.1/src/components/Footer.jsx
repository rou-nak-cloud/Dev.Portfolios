import React from "react";

const Footer = () => {
  return (
    <footer className="relative max-w-3xl mx-auto overflow-hidden rounded-3xl  py-16 md:py-24">
      {/* DOT PATTERN AREA (TOP ONLY) */}
      <div className="absolute left-1/2 -translate-x-1/2 top-27 w-full max-w-3xl h-40 pointer-events-none rounded-2xl overflow-hidden">
        <div
          className="w-full h-full dots-animated"
          style={{
            backgroundImage: `radial-gradient(#fb923c 1.6px, transparent 1px)`,
            backgroundSize: "6px 6px",
            maskImage: "linear-gradient(to bottom, black 0%, transparent 80%)",
            WebkitMaskImage:
              "linear-gradient(to bottom, black 0%, transparent 80%)",
            opacity: 1,
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-2xl mx-auto px-6 text-center">
        <div className="inline-block bg-black text-amber-100 font-cabinet text-[12px] font-bold uppercase tracking-widest px-4 py-0.5 rounded-full mb-6">
          Creator{" "}
          <span className="text-xs text-orange-400/90 font-cabinet">2026</span>
        </div>

        <h2 className="text-4xl md:text-5xl font-melodrama font-bold text-slate-900 tracking-tight mb-4">
          Rounak Bakshi
        </h2>

        <p className="text-slate-500 font-cabinet text-sm max-w-sm mx-auto leading-tight">
          Building digital experiences with purpose. Designed and developed with
          ❤️ in West Bengal.
        </p>
        <blockquote className="text-xl  text-amber-800/80 mt-3 font-cabinet">
          "Curiosity drives the idea, discipline builds the product."
        </blockquote>
      </div>
    </footer>
  );
};

export default Footer;
