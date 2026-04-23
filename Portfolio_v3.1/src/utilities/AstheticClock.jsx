import { useEffect, useState } from "react";

export default function AestheticClock() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    // Update time every second
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  // Calculate rotations
  const seconds = time.getSeconds();
  const minutes = time.getMinutes();
  const hours = time.getHours();

  const secDeg = seconds * 6; // 360 / 60
  const minDeg = minutes * 6 + seconds * 0.1; // 360 / 60 + extra adjustment for smooth movement
  const hourDeg = (hours % 12) * 30 + minutes * 0.5; // 360 / 12 + extra adjustment

  // Shared hand styling with smooth rotation
  const handStyle = (deg, duration) => ({
    transform: `rotate(${deg}deg)`,
    transformOrigin: "bottom center",
    transition: `transform ${duration}s cubic-bezier(0.1, 0.7, 0.1, 1)`, // Premium ease
  });

  return (
    <section className="py-16 md:py-9 bg-white overflow-hidden">
      <div className="max-w-5xl mx-auto px-6 flex flex-col items-center">
        <p className="mt-12 text-md font-cabinet uppercase tracking-widest text-zinc-600 opacity-60 max-w-sm text-center mb-10">
          Timezone - Asia, Kolkata
        </p>
        {/* CLOCK CONTAINER */}
        <div className="relative group w-[70vw] h-[70vw] sm:w-80 sm:h-80 md:w-96 md:h-96 rounded-full border border-zinc-100 bg-zinc-50/40 backdrop-blur-sm shadow-inner p-4 md:p-6">
          {/* Subtle Outer Glow */}
          <div className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 shadow-[0_20px_60px_rgba(16,185,129,0.08)] transition-opacity duration-700 pointer-events-none" />

          {/* INNER CLOCK FACE */}
          <div className="relative w-full h-full rounded-full bg-white shadow-xl shadow-zinc-200/50 flex items-center justify-center overflow-hidden">
            {/* 1. Minute Markers */}
            <div className="absolute inset-4 rounded-full">
              {[...Array(12)].map((_, i) => (
                <div
                  key={i}
                  className={`absolute top-0 left-1/2 w-px h-full -translate-x-1/2 origin-center`}
                  style={{ transform: `rotate(${i * 30}deg)` }}
                >
                  <div
                    className={`w-0.5 ${i % 3 === 0 ? "h-4 bg-emerald-300" : "h-2.5 bg-zinc-100"} rounded-full`}
                  ></div>
                </div>
              ))}
            </div>

            {/* 2. Brand Accent (Melodrama font) */}
            <span className="absolute left-1/2 bottom-[15%] -translate-x-1/2 text-[10px] md:text-xs font-melodrama text-zinc-900 opacity-60 tracking-widest uppercase z-20">
              rounak STUDIO
            </span>

            {/* 3. Aesthetic Signature Numbers (Cabinet font) */}
            <div className="absolute top-8 left-1/2 -translate-x-1/2 text-5xl md:text-6xl font-cabinet font-light tracking-tighter text-zinc-200">
              12
            </div>
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-5xl md:text-6xl font-cabinet font-light tracking-tighter text-zinc-200">
              6
            </div>

            {/* 4. Center Dot (Pivot Point) */}
            <div className="relative w-2 h-2 rounded-full bg-zinc-800 z-30 shadow-md">
              <div className="absolute inset-0.5 rounded-full bg-zinc-100 shadow-inner"></div>
            </div>

            {/* 5. Clock Hands */}

            {/* Hour Hand (Emerald / Thick) */}
            <div
              className="absolute left-1/2 bottom-1/2 w-1.5 h-1/4 -translate-x-1/2 rounded-full bg-emerald-600 z-10"
              style={handStyle(hourDeg, 1)}
            />

            {/* Minute Hand (Emerald / Thin) */}
            <div
              className="absolute left-1/2 bottom-1/2 w-0.5 h-[40%] -translate-x-1/2 rounded-full bg-emerald-400 z-10"
              style={handStyle(minDeg, 1)}
            />

            {/* Second Hand (Orange / Pin-thin) */}
            <div
              className="absolute left-1/2 bottom-1/2 w-px h-[45%] -translate-x-1/2 rounded-full bg-orange-400/80 z-20"
              style={handStyle(secDeg, 0.3)} // Faster transition for seconds
            />
          </div>
        </div>

        {/* Optional Context Text */}
        <p className="mt-6 text-center text-sm font-cabinet uppercase tracking-widest text-zinc-500 opacity-80 max-w-md leading-3.5">
          "A moment in time. Time is the ultimate architect. I focus on crafting
          intuitive motion and precise interactions—ensuring every second
          contributes to a seamless user journey."
        </p>
      </div>
    </section>
  );
}
