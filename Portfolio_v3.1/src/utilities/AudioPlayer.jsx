import React, { useState, useRef, useEffect, useLayoutEffect } from "react";
import { MdMusicNote, MdMusicOff } from "react-icons/md";
import gsap from "gsap";

export default function AudioPlayer({ src, isVisible }) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [hasInteracted, setHasInteracted] = useState(false);
  const audioRef = useRef(null);
  const playerRef = useRef(null); // Ref for GSAP animation
  const visualizerRef = useRef(null); // Ref for the bar container

  // GSAP Entrance Animation
  useLayoutEffect(() => {
    if (isVisible) {
      const ctx = gsap.context(() => {
        gsap.fromTo(
          playerRef.current,
          { y: 100, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 1.2,
            delay: 1.5, // High delay to wait for hero section
            ease: "expo.out",
          },
        );
      });
      return () => ctx.revert();
    }
  }, [isVisible]);

  // Smooth Visualizer Reveal
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
      className="fixed top-8 right-8 z-100 flex items-center group opacity-0"
    >
      {/* Aesthetic Glass Pill */}
      <div className="flex items-center gap-3 px-3 py-2 bg-white/30 backdrop-blur-xl border border-zinc-200/50 rounded-full shadow-sm transition-all duration-500 hover:border-orange-500/30 hover:bg-white/60">
        {/* Play/Pause Button */}
        <button
          onClick={togglePlay}
          className="relative flex h-8 w-8 items-center justify-center rounded-full bg-amber-600/40 text-white transition-transform active:scale-95 cursor-pointer"
        >
          {/* Subtle Outer Pulse */}
          {!isPlaying && !hasInteracted && (
            <span className="absolute inset-0 rounded-full bg-orange-400 animate-ping opacity-20" />
          )}

          {isPlaying ? (
            <MdMusicNote className="text-sm" />
          ) : (
            <MdMusicOff className="text-sm" />
          )}
        </button>

        {/* Dynamic Text Label */}
        <div className="flex flex-col overflow-hidden">
          <span className="text-[10px] font-cabinet font-bold uppercase tracking-[0.2em] text-zinc-900 leading-tight">
            {isPlaying ? "Now Playing" : "Studio Vibe"}
          </span>
          <p
            className="text-[9px] font-medium text-zinc-500 whitespace-nowrap transition-all duration-700"
            style={{ opacity: isPlaying ? 1 : 0.6 }}
          >
            {isPlaying ? "Lofi tramp — Ambient" : "Click to set the mood"}
          </p>
        </div>

        {/* Minimal Animated Visualizer */}
        {isPlaying && (
          <div
            ref={visualizerRef}
            className="flex items-end gap-1 h-3 ml-2 pr-1"
          >
            {[0.1, 0.3, 0.2, 0.4].map((delay, i) => (
              <div
                key={i}
                className="w-0.5 bg-orange-500 rounded-full animate-music-bar"
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
