import { useState } from "react";
import { useTheme } from "./hooks/useTheme";
import Preloader from "./components/Preloader";
import Cursor from "./components/Cursor";
import ScrollProgress from "./components/ScrollProgress";
import BatteryBanner from "./components/BatteryBanner";
import Sidebar from "./components/Sidebar";
import Hero from "./components/sections/Hero";
import About from "./components/sections/About";
import Skills from "./components/sections/Skills";
import Projects from "./components/sections/Projects";
import Certificates from "./components/sections/Certificates";
import Education from "./components/sections/Education";
import Contact from "./components/sections/Contact";

function App() {
  const { isDark, toggleTheme } = useTheme();
  const [loading, setLoading] = useState(true);

  return (
    <>
      <Cursor />
      <ScrollProgress />
      <BatteryBanner />
      {loading && <Preloader onComplete={() => setLoading(false)} />}

      <div className="fixed top-5 left-24 z-50 hidden md:block">
  <button
    onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
    className="text-white/90 text-lg font-semibold tracking-wide hover:text-cyan-400 transition-all duration-300"
  >
    <span className="text-cyan-400">Radhika</span> | Portfolio
  </button>
</div> 
  
      <div
        style={{
          minHeight: "100vh",
          background: isDark ? "#09090b" : "#ffffff",
          color: isDark ? "#e4e4e7" : "#18181b",
          transition: "background 0.3s ease, color 0.3s ease",
          opacity: loading ? 0 : 1,
        }}
      >
        <Sidebar isDark={isDark} toggleTheme={toggleTheme} />
        <main style={{ paddingLeft: "60px" }}>
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Certificates />    
          <Education />
          <Contact />
        </main>
      </div>
    </>
  );
}

export default App;