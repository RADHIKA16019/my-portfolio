import { useState, useEffect } from "react";

/**
 * Sidebar — left vertical icon navigation
 * - Desktop: fixed left side, icons only
 * - Mobile: fixed bottom bar
 * - Active section highlight
 * - Theme toggle at bottom
 */

const navItems = [
  { id: "hero", icon: "fa-solid fa-house", label: "Home" },
  { id: "about", icon: "fa-solid fa-user", label: "About" },
  { id: "skills", icon: "fa-solid fa-code", label: "Skills" },
  { id: "projects", icon: "fa-solid fa-folder", label: "Projects" },
  { id: "certificates", icon: "fa-solid fa-certificate", label: "Certificates" },
  { id: "education", icon: "fa-solid fa-graduation-cap", label: "Education" },
  { id: "contact", icon: "fa-solid fa-envelope", label: "Contact" },
];

function Sidebar({ isDark, toggleTheme }) {
  const [active, setActive] = useState("hero");
  const [tooltip, setTooltip] = useState(null);

  // Track which section is in view
  useEffect(() => {
    const observers = [];

    navItems.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (!el) return;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActive(id);
        },
        { threshold: 0.4 }
      );

      observer.observe(el);
      observers.push(observer);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  // Smooth scroll to section
  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      {/* ── DESKTOP SIDEBAR — left vertical ── */}
      <nav
        className="hidden md:flex fixed left-0 top-0 h-full w-16 flex-col items-center justify-between py-8 z-[9999]"
        style={{
          background: "rgba(9, 9, 11, 0.6)",
          backdropFilter: "blur(12px)",
          borderRight: "1px solid rgba(255,255,255,0.06)",
        }}
      >
        {/* Top dot */}
        <div
          className="w-2 h-2 rounded-full bg-accent"
          style={{ boxShadow: "0 0 8px #00b4d8" }}
        />

        {/* Nav icons */}
        <div className="flex flex-col items-center gap-2">
          {navItems.map(({ id, icon, label }) => (
            <div key={id} className="relative">
              <button
                onClick={() => scrollTo(id)}
                onMouseEnter={() => setTooltip(id)}
                onMouseLeave={() => setTooltip(null)}
                className={`w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-200
                  ${active === id
                    ? "bg-accent text-white shadow-lg"
                    : "text-zinc-500 hover:text-accent hover:bg-zinc-800"
                  }`}
                style={
                  active === id
                    ? { boxShadow: "0 0 12px #00b4d880" }
                    : {}
                }
              >
                <i className={`${icon} text-sm`}></i>
              </button>

              {/* Tooltip */}
              {tooltip === id && (
                <div
                  className="absolute left-14 top-1/2 -translate-y-1/2 px-3 py-1 rounded-lg text-xs font-dm whitespace-nowrap z-50"
                  style={{
                    background: "rgba(9,9,11,0.9)",
                    border: "1px solid rgba(255,255,255,0.1)",
                    color: "#fff",
                  }}
                >
                  {label}
                  {/* Arrow */}
                  <div
                    className="absolute right-full top-1/2 -translate-y-1/2 border-4 border-transparent"
                    style={{ borderRightColor: "rgba(9,9,11,0.9)" }}
                  />
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Theme toggle at bottom */}
        <button
          onClick={toggleTheme}
          className="w-10 h-10 rounded-xl flex items-center justify-center text-zinc-500 hover:text-accent hover:bg-zinc-800 transition-all duration-200"
          title={isDark ? "Light Mode" : "Dark Mode"}
        >
          <i className={`fa-solid ${isDark ? "fa-sun" : "fa-moon"} text-sm`}></i>
        </button>
      </nav>

      {/* ── MOBILE BOTTOM BAR ── */}
      <nav
        className="flex md:hidden fixed bottom-0 left-0 right-0 z-[9999] items-center justify-around px-2 py-3"
        style={{
          background: "rgba(9, 9, 11, 0.85)",
          backdropFilter: "blur(12px)",
          borderTop: "1px solid rgba(255,255,255,0.06)",
        }}
      >
        {navItems.map(({ id, icon, label }) => (
          <button
            key={id}
            onClick={() => scrollTo(id)}
            className={`flex flex-col items-center gap-1 px-2 transition-all duration-200
              ${active === id ? "text-accent" : "text-zinc-500"}`}
          >
            <i className={`${icon} text-base`}></i>
            <span className="text-[9px] font-dm">{label}</span>
          </button>
        ))}

        {/* Theme toggle in mobile bar */}
        <button
          onClick={toggleTheme}
          className={`flex flex-col items-center gap-1 px-2 text-zinc-500 transition-all duration-200`}
        >
          <i className={`fa-solid ${isDark ? "fa-sun" : "fa-moon"} text-base`}></i>
          <span className="text-[9px] font-dm">Theme</span>
        </button>
      </nav>
    </>
  );
}

export default Sidebar;