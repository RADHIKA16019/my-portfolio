import { useState } from "react";
import { useTheme } from "./hooks/useTheme";

import Preloader from "./components/Preloader";
import Cursor from "./components/Cursor";
import ScrollProgress from "./components/ScrollProgress";
import BatteryBanner from "./components/BatteryBanner";

function App() {
  const { isDark, toggleTheme } = useTheme();
  const [loading, setLoading] = useState(true);

  return (
    <>
      {/* Custom cursor */}
      <Cursor />

      {/* Scroll progress bar */}
      <ScrollProgress />

      {/* Battery warning banner */}
      <BatteryBanner />

      {/* Preloader — shows first, then reveals site */}
      {loading && <Preloader onComplete={() => setLoading(false)} />}

      {/* Main site — hidden until preloader done */}
      <div
        className={`min-h-screen bg-white dark:bg-zinc-950 text-zinc-800 
          dark:text-zinc-100 transition-opacity duration-700
          ${loading ? "opacity-0" : "opacity-100"}`}
      >
        {/* Temporary test content */}
        <div className="p-12">
          <h1 className="font-syne text-5xl font-bold text-accent mb-4">
            Portfolio 🚀
          </h1>
          <p className="font-dm text-zinc-400 mb-6">
            Preloader ✅ Cursor ✅ Scroll Progress ✅
          </p>
          <button
            onClick={toggleTheme}
            className="bg-accent text-white px-6 py-2 rounded-full font-dm text-sm"
          >
            {isDark ? "☀️ Light Mode" : "🌙 Dark Mode"}
          </button>

          {/* Long content to test scroll progress */}
          {Array.from({ length: 20 }).map((_, i) => (
            <p key={i} className="font-dm text-zinc-500 mt-4">
              Scroll karo to test progress bar — line {i + 1}
            </p>
          ))}
        </div>
      </div>
    </>
  );
}

export default App;