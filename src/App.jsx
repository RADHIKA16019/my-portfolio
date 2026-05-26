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

          <section id="contact" style={{ minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <h1 style={{ fontFamily: "Syne, sans-serif", fontSize: "3rem", color: "#00b4d8" }}>Contact — Coming Soon</h1>
          </section>
        </main>
      </div>
    </>
  );
}

export default App;