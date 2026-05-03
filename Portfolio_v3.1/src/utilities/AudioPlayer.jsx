import React, { useState, useRef, useEffect } from "react";
import { MdMusicNote, MdMusicOff } from "react-icons/md";

export default function AudioPlayer({ src, isVisible }) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [hasInteracted, setHasInteracted] = useState(false);
  const audioRef = useRef(null);

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
    <div className="fixed top-8 right-8 z-100 flex items-center group">
      {/* Aesthetic Glass Pill */}
      <div className="flex items-center gap-3 px-3 py-2 bg-white/30 backdrop-blur-xl border border-zinc-200/50 rounded-full shadow-sm transition-all duration-500 hover:border-orange-500/30 hover:bg-white/60">
        {/* Play/Pause Button */}
        <button
          onClick={togglePlay}
          className="relative flex h-8 w-8 items-center justify-center rounded-full bg-amber-900/30 text-white transition-transform active:scale-95 cursor-pointer"
        >
          {/* Subtle Outer Pulse (matches your Amber theme) */}
          {!isPlaying && !hasInteracted && (
            <span className="absolute inset-0 rounded-full bg-orange-400 animate-ping opacity-10" />
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
          <div className="flex items-end gap-1 h-3 ml-2 pr-1">
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
