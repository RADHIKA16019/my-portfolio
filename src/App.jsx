import { useTheme } from "./hooks/useTheme";

function App() {
  const { isDark, toggleTheme } = useTheme();

  return (
    <div className="min-h-screen bg-white dark:bg-zinc-950 text-zinc-800 dark:text-zinc-100">
      
      {/* Scroll Progress Bar */}
      <div id="scroll-progress"></div>

      {/* Temporary theme toggle button — just for testing */}
      <button
        onClick={toggleTheme}
        className="fixed top-4 right-4 z-50 bg-accent text-white px-4 py-2 rounded-full font-dm text-sm"
      >
        {isDark ? "☀️ Light" : "🌙 Dark"}
      </button>

      {/* Test content to check theme working */}
      <div className="p-12">
        <h1 className="font-syne text-5xl font-bold text-accent mb-4">
          Portfolio 🚀
        </h1>
        <p className="font-dm text-zinc-400 dark:text-zinc-400">
          Theme is: {isDark ? "🌙 Dark" : "☀️ Light"}
        </p>
      </div>

    </div>
  );
}

export default App;