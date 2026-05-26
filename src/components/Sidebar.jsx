import { useState, useEffect } from "react";

const navItems = [
  { id: "hero", icon: "fa-solid fa-house", label: "Home" },
  { id: "about", icon: "fa-solid fa-user", label: "About" },
  { id: "skills", icon: "fa-solid fa-code", label: "Skills" },
  { id: "projects", icon: "fa-solid fa-folder-open", label: "Projects" },
  { id: "certificates", icon: "fa-solid fa-award", label: "Certificates" },
  { id: "education", icon: "fa-solid fa-graduation-cap", label: "Education" },
  { id: "contact", icon: "fa-solid fa-envelope", label: "Contact" },
];

function Sidebar({ isDark, toggleTheme }) {
  const [active, setActive] = useState("hero");
  const [tooltip, setTooltip] = useState(null);

  useEffect(() => {
    const observers = [];
    navItems.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (!el) return;
      const observer = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActive(id); },
        { threshold: 0.4 }
      );
      observer.observe(el);
      observers.push(observer);
    });
    return () => observers.forEach((o) => o.disconnect());
  }, []);

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav
      style={{
        position: "fixed",
        left: 0,
        top: 0,
        height: "100vh",
        width: "60px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        zIndex: 9999,
        background: "rgba(9, 9, 11, 0.75)",
        backdropFilter: "blur(16px)",
        borderRight: "1px solid rgba(255,255,255,0.06)",
        gap: "0",
      }}
    >
      {/* Nav icons — center of sidebar */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "6px",
          flex: 1,
          justifyContent: "center",
        }}
      >
        {navItems.map(({ id, icon, label }) => (
          <div key={id} style={{ position: "relative" }}>
            <button
              onClick={() => scrollTo(id)}
              onMouseEnter={() => setTooltip(id)}
              onMouseLeave={() => setTooltip(null)}
              style={{
                width: "42px",
                height: "42px",
                borderRadius: "10px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                border: "none",
                cursor: "pointer",
                fontSize: "15px",
                transition: "all 0.2s ease",
                background: active === id ? "#00b4d8" : "transparent",
                color: active === id ? "#fff" : "#52525b",
                boxShadow: active === id ? "0 0 16px rgba(0,180,216,0.4)" : "none",
              }}
            >
              <i className={icon}></i>
            </button>

            {/* Tooltip */}
            {tooltip === id && (
              <div
                style={{
                  position: "absolute",
                  left: "52px",
                  top: "50%",
                  transform: "translateY(-50%)",
                  padding: "5px 12px",
                  borderRadius: "8px",
                  fontSize: "12px",
                  fontFamily: "DM Sans, sans-serif",
                  whiteSpace: "nowrap",
                  background: "rgba(9,9,11,0.95)",
                  border: "1px solid rgba(255,255,255,0.1)",
                  color: "#fff",
                  pointerEvents: "none",
                  zIndex: 99999,
                }}
              >
                {label}
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Theme toggle — pinned to bottom */}
      <div style={{ paddingBottom: "24px" }}>
        <button
          onClick={toggleTheme}
          onMouseEnter={(e) => {
            e.currentTarget.style.color = "#00b4d8";
            e.currentTarget.style.background = "rgba(0,180,216,0.1)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.color = "#52525b";
            e.currentTarget.style.background = "transparent";
          }}
          title={isDark ? "Switch to Light" : "Switch to Dark"}
          style={{
            width: "42px",
            height: "42px",
            borderRadius: "10px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            border: "none",
            cursor: "pointer",
            fontSize: "15px",
            background: "transparent",
            color: "#52525b",
            transition: "all 0.2s ease",
          }}
        >
          <i className={isDark ? "fa-solid fa-sun" : "fa-solid fa-moon"}></i>
        </button>
      </div>
    </nav>
  );
}

export default Sidebar;