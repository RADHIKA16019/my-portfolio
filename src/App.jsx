import { useState } from "react";
import { useTheme } from "./hooks/useTheme";

import Preloader from "./components/Preloader";
import Cursor from "./components/Cursor";
import ScrollProgress from "./components/ScrollProgress";
import BatteryBanner from "./components/BatteryBanner";
import Sidebar from "./components/Sidebar";
import Hero from "./components/sections/Hero";

import About from "./components/sections/About";
function App() {
  const { isDark, toggleTheme } = useTheme();
  const [loading, setLoading] = useState(true);

  return (
    <>
      <Cursor />
      <ScrollProgress />
      <BatteryBanner />

      {loading && <Preloader onComplete={() => setLoading(false)} />}

      <div
        className={`min-h-screen bg-white dark:bg-zinc-950 text-zinc-800 dark:text-zinc-100 transition-opacity duration-700 ${loading ? "opacity-0" : "opacity-100"}`}
      >
        <Sidebar isDark={isDark} toggleTheme={toggleTheme} />

        <main className="md:pl-16">

          {/* Hero — real component */}
          <Hero />

          {/* Placeholder sections — will be replaced one by one */}
          <About />

          <section id="skills" className="min-h-screen flex items-center justify-center">
            <h1 className="font-syne text-5xl font-bold text-accent">Skills Section</h1>
          </section>

          <section id="projects" className="min-h-screen flex items-center justify-center">
            <h1 className="font-syne text-5xl font-bold text-accent">Projects Section</h1>
          </section>

          <section id="certificates" className="min-h-screen flex items-center justify-center">
            <h1 className="font-syne text-5xl font-bold text-accent">Certificates Section</h1>
          </section>

          <section id="education" className="min-h-screen flex items-center justify-center">
            <h1 className="font-syne text-5xl font-bold text-accent">Education Section</h1>
          </section>

          <section id="contact" className="min-h-screen flex items-center justify-center">
            <h1 className="font-syne text-5xl font-bold text-accent">Contact Section</h1>
          </section>

        </main>
      </div>
    </>
  );
}

export default App;