import { useState } from "react";
import { useTheme } from "./hooks/useTheme";
import Preloader from "./components/Preloader";
import Cursor from "./components/Cursor";
import ScrollProgress from "./components/ScrollProgress";
import BatteryBanner from "./components/BatteryBanner";
import Sidebar from "./components/Sidebar";
import FloatingCTA from "./components/FloatingCTA";
import IdleOverlay from "./components/IdleOverlay";
import EasterEgg from "./components/EasterEgg";
import Hero from "./components/sections/Hero";
import About from "./components/sections/About";
import Skills from "./components/sections/Skills";
import Ambassador from "./components/sections/Ambassador";
import Stats from "./components/sections/Stats";
import Certificates from "./components/sections/Certificates";
import Education from "./components/sections/Education";
import Contact from "./components/sections/Contact";

function App() {
  const { isDark, toggleTheme } = useTheme();
  const [loading, setLoading] = useState(true);

  const bgColor = isDark ? "#09090b" : "#f8fafc";
  const textColor = isDark ? "#e4e4e7" : "#18181b";

  return (
    <>
      <Cursor />
      <ScrollProgress />
      <BatteryBanner />
      <IdleOverlay />
      <EasterEgg />
      <FloatingCTA />

      {loading && <Preloader onComplete={() => setLoading(false)} />}

      <div style={{
        minHeight: "100vh",
        background: bgColor,
        color: textColor,
        transition: "background 0.3s ease, color 0.3s ease",
        opacity: loading ? 0 : 1,
      }}>
        <Sidebar isDark={isDark} toggleTheme={toggleTheme} />

        <main style={{ paddingLeft: "60px" }}>
          <Hero isDark={isDark} />
          <About isDark={isDark} />
          <Skills isDark={isDark} />
          <Ambassador isDark={isDark} />
          <Stats isDark={isDark} />
          <Certificates isDark={isDark} />
          <Education isDark={isDark} />
          <Contact isDark={isDark} />
        </main>
      </div>
    </>
  );
}

export default App;