// import React, { useState, useRef, useEffect, useLayoutEffect } from "react";
// import { MdMusicNote, MdMusicOff } from "react-icons/md";
// import gsap from "gsap";

// export default function AudioPlayer({ src, isVisible }) {
//   const [isPlaying, setIsPlaying] = useState(false);
//   const [hasInteracted, setHasInteracted] = useState(false);
//   const audioRef = useRef(null);
//   const playerRef = useRef(null); // Ref for GSAP animation
//   const visualizerRef = useRef(null); // Ref for the bar container

//   // GSAP Entrance Animation
//   useLayoutEffect(() => {
//     if (isVisible) {
//       const ctx = gsap.context(() => {
//         gsap.fromTo(
//           playerRef.current,
//           { y: 100, opacity: 0 },
//           {
//             y: 0,
//             opacity: 1,
//             duration: 1.2,
//             delay: 1.5, // High delay to wait for hero section
//             ease: "expo.out",
//           },
//         );
//       });
//       return () => ctx.revert();
//     }
//   }, [isVisible]);

//   // Smooth Visualizer Reveal
//   useEffect(() => {
//     if (isPlaying) {
//       gsap.fromTo(
//         visualizerRef.current,
//         { width: 0, opacity: 0, marginLeft: 0 },
//         {
//           width: "auto",
//           opacity: 1,
//           marginLeft: 8,
//           duration: 0.5,
//           ease: "power2.out",
//         },
//       );
//     }
//   }, [isPlaying]);

//   const togglePlay = async () => {
//     if (!audioRef.current) return;
//     setHasInteracted(true);

//     try {
//       if (isPlaying) {
//         audioRef.current.pause();
//         setIsPlaying(false);
//       } else {
//         await audioRef.current.play();
//         setIsPlaying(true);
//       }
//     } catch (err) {
//       console.error("Playback blocked:", err);
//     }
//   };

//   useEffect(() => {
//     if (audioRef.current) audioRef.current.volume = 0.3;
//   }, []);

//   if (!isVisible) return null;

//   return (
//     <div
//       ref={playerRef}
//       className="hidden md:flex fixed top-26 right-4 md:top-8 md:right-8 z-100 items-center group opacity-0"
//     >
//       {/* Aesthetic Glass Pill */}
//       <div className="flex items-center gap-3 px-2 py-1 md:px-3 md:py-2 bg-white/30 backdrop-blur-xl border border-zinc-200/50 rounded-full shadow-sm transition-all duration-500 hover:border-orange-500/30 hover:bg-white/60">
//         {/* Play/Pause Button */}
//         <button
//           onClick={togglePlay}
//           className="relative flex h-7 w-7 md:h-8 md:w-8 items-center justify-center rounded-full bg-amber-600/40 text-white transition-transform active:scale-95 cursor-pointer"
//         >
//           {/* Subtle Outer Pulse */}
//           {!isPlaying && !hasInteracted && (
//             <span className="absolute inset-0 rounded-full bg-orange-400 animate-ping opacity-20" />
//           )}

//           {isPlaying ? (
//             <MdMusicNote className="text-sm" />
//           ) : (
//             <MdMusicOff className="text-sm" />
//           )}
//         </button>

//         {/* Dynamic Text Label */}
//         <div className="flex flex-col overflow-hidden">
//           <span className="text-[10px] font-cabinet font-bold uppercase tracking-[0.2em] text-zinc-900 leading-tight">
//             {isPlaying ? "Now Playing" : "Studio Vibe"}
//           </span>
//           <p
//             className="text-[9px] font-medium text-zinc-500 whitespace-nowrap transition-all duration-700"
//             style={{ opacity: isPlaying ? 1 : 0.6 }}
//           >
//             {isPlaying ? "Lofi tramp — Ambient" : "Click to set the mood"}
//           </p>
//         </div>

//         {/* Minimal Animated Visualizer */}
//         {isPlaying && (
//           <div
//             ref={visualizerRef}
//             className="flex items-end gap-1 h-3 ml-2 pr-1"
//           >
//             {[0.1, 0.3, 0.2, 0.4].map((delay, i) => (
//               <div
//                 key={i}
//                 className="w-0.5 bg-orange-500 rounded-full animate-music-bar"
//                 style={{ animationDelay: `${delay}s` }}
//               />
//             ))}
//           </div>
//         )}
//       </div>

//       <audio ref={audioRef} src={src} loop preload="auto" />
//     </div>
//   );
// }

import React, { useState, useRef, useEffect, useLayoutEffect } from "react";
import { MdMusicNote, MdMusicOff } from "react-icons/md";
import gsap from "gsap";

export default function AudioPlayer({ src, isVisible }) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [hasInteracted, setHasInteracted] = useState(false);
  const audioRef = useRef(null);
  const playerRef = useRef(null);
  const visualizerRef = useRef(null);

  // Entrance Logic (Kept as requested)
  useLayoutEffect(() => {
    if (isVisible) {
      const ctx = gsap.context(() => {
        gsap.fromTo(
          playerRef.current,
          { y: 100, opacity: 0 },
          { y: 0, opacity: 1, duration: 1.2, delay: 1.5, ease: "expo.out" },
        );
      });
      return () => ctx.revert();
    }
  }, [isVisible]);

  useEffect(() => {
    if (isPlaying) {
      gsap.fromTo(
        visualizerRef.current,
        { width: 0, opacity: 0, marginLeft: 0 },
        {
          width: "auto",
          opacity: 1,
          marginLeft: 8,
          duration: 0.5,
          ease: "power2.out",
        },
      );
    }
  }, [isPlaying]);

  const togglePlay = async () => {
    if (!audioRef.current) return;
    setHasInteracted(true);
    try {
      if (isPlaying) {
        audioRef.current.pause();
        setIsPlaying(false);
      } else {
        await audioRef.current.play();
        setIsPlaying(true);
      }
    } catch (err) {
      console.error("Playback blocked:", err);
    }
  };

  useEffect(() => {
    if (audioRef.current) audioRef.current.volume = 0.3;
  }, []);

  if (!isVisible) return null;

  return (
    <div
      ref={playerRef}
      className="hidden md:flex fixed top-26 right-4 md:top-8 md:right-8 z-100 items-center group opacity-0 select-none"
    >
      <div className="flex items-center gap-3 px-3 py-2 bg-zinc-50/10 backdrop-blur-2xl border border-zinc-200/40 rounded-xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] transition-all duration-500 hover:border-orange-500/20">
        {/* Tactile Toggle Button */}
        <button
          onClick={togglePlay}
          className={`relative flex h-8 w-8 items-center justify-center rounded-lg transition-all duration-300 active:scale-90 cursor-pointer ${
            isPlaying
              ? "bg-orange-300 text-white"
              : "bg-white text-zinc-400 border border-zinc-200 shadow-sm"
          }`}
        >
          {/* Replaced Ping with a Soft, Steady Amber Glow - Only shows if not playing */}
          {!isPlaying && !hasInteracted && (
            <div className="absolute -top-1 -right-1 w-2 h-2 bg-orange-500 rounded-full border-2 border-white shadow-[0_0_10px_rgba(249,115,22,0.5)]" />
          )}

          {isPlaying ? <MdMusicNote size={14} /> : <MdMusicOff size={14} />}
        </button>

        {/* Human-Centered Labeling */}
        <div className="flex flex-col pr-1 -mt-3">
          <div className="flex items-center gap-1">
            <span className="text-[10px] font-cabinet font-bold uppercase leading-6 tracking-widest text-zinc-900">
              {isPlaying ? "On Air" : "Acoustics"}
            </span>
            {/* Minimalist Tag */}
            {!isPlaying && (
              <span className="text-[7px] rounded-full  text-orange-500 font-medium">
                R
              </span>
            )}
          </div>
          <p className="text-[9px] font-medium text-zinc-400 font-cabinet leading-0 tracking-tight italic">
            {isPlaying ? "Atmosphere" : "Studio Vibe"}
          </p>
        </div>

        {/* Visualizer with Organic Spacing */}
        {isPlaying && (
          <div ref={visualizerRef} className="flex items-end gap-1 h-2.5 pr-1">
            {[0.1, 0.3, 0.2, 0.4].map((delay, i) => (
              <div
                key={i}
                className="w-0.5 bg-orange-500 rounded-full animate-music-bar opacity-80"
                style={{ animationDelay: `${delay}s` }}
              />
            ))}
          </div>
        )}
      </div>

      <audio ref={audioRef} src={src} loop preload="auto" />
    </div>
  );
}
