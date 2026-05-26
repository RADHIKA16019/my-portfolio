import { useEffect, useState } from "react";

/**
 * Preloader — shows for 2.5 seconds on first load
 * Then fades out and reveals main site
 */
function Preloader({ onComplete }) {
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    // After 2.5s start fade out
    const timer1 = setTimeout(() => {
      setFadeOut(true);
    }, 2500);

    // After fade (0.6s more) tell App it's done
    const timer2 = setTimeout(() => {
      onComplete();
    }, 3100);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, []);

  return (
    <div
      className={`fixed inset-0 z-[999999] flex flex-col items-center justify-center
        bg-zinc-950 transition-opacity duration-700
        ${fadeOut ? "opacity-0 pointer-events-none" : "opacity-100"}`}
    >
      {/* Animated logo/name */}
      <div className="flex flex-col items-center gap-6">

        {/* Glowing accent dot */}
        <div
          className="w-3 h-3 rounded-full bg-accent animate-pulse"
          style={{ boxShadow: "0 0 20px #00b4d8, 0 0 40px #00b4d880" }}
        />

        {/* Name */}
        <h1 className="font-syne text-3xl font-bold text-white tracking-widest uppercase">
          [YOUR_NAME]
        </h1>

        {/* Loading bar */}
        <div className="w-48 h-[2px] bg-zinc-800 rounded-full overflow-hidden">
          <div
            className="h-full bg-accent rounded-full"
            style={{
              animation: "loadBar 2.5s ease forwards",
            }}
          />
        </div>

        {/* Subtle text */}
        <p className="font-dm text-zinc-500 text-sm tracking-widest">
          loading portfolio...
        </p>
      </div>

      {/* Inline keyframe for loading bar */}
      <style>{`
        @keyframes loadBar {
          from { width: 0%; }
          to { width: 100%; }
        }
      `}</style>
    </div>
  );
}

export default Preloader;