import { useState, useEffect } from "react";

const navItems = [
  { id: "hero",         icon: "fa-solid fa-house",          label: "Home" },
  { id: "about",        icon: "fa-solid fa-user",           label: "About" },
  { id: "skills",       icon: "fa-solid fa-code",           label: "Skills" },
  { id: "projects",     icon: "fa-solid fa-briefcase",      label: "Projects" },
  { id: "ambassador",   icon: "fa-solid fa-star",           label: "Campus" },
  { id: "stats",        icon: "fa-solid fa-chart-bar",      label: "Stats" },
  { id: "certificates", icon: "fa-solid fa-award",          label: "Certificates" },
  { id: "education",    icon: "fa-solid fa-graduation-cap", label: "Education" },
  { id: "contact",      icon: "fa-solid fa-envelope",       label: "Contact" },
];

function Sidebar({ isDark, toggleTheme }) {
  const [active, setActive] = useState("hero");
  const [tooltip, setTooltip] = useState(null);
  const [showSidebar, setShowSidebar] = useState(true);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const observers = [];
    navItems.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (!el) return;
      const observer = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActive(id); },
        { threshold: 0.3 }
      );
      observer.observe(el);
      observers.push(observer);
    });
    return () => observers.forEach((o) => o.disconnect());
  }, []);

  // Detect mobile (only in effect to avoid SSR issues)
  useEffect(() => {
    const mq = window.matchMedia('(max-width: 768px)');
    const onChange = (e) => setIsMobile(e.matches);
    setIsMobile(mq.matches);
    if (mq.addEventListener) mq.addEventListener('change', onChange);
    else mq.addListener(onChange);
    return () => {
      if (mq.removeEventListener) mq.removeEventListener('change', onChange);
      else mq.removeListener(onChange);
    };
  }, []);

  // Hide sidebar while scrolling on mobile, show again after a short pause
  useEffect(() => {
    if (!isMobile) {
      setShowSidebar(true);
      return;
    }

    let timer = null;
    const onScroll = () => {
      setShowSidebar(false);
      if (timer) clearTimeout(timer);
      timer = setTimeout(() => setShowSidebar(true), 700);
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', onScroll);
      if (timer) clearTimeout(timer);
    };
  }, [isMobile]);

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  const sidebarBg = isDark ? "rgba(9,9,11,0.75)" : "rgba(248,250,252,0.9)";
  const sidebarBorder = isDark ? "rgba(255,255,255,0.06)" : "rgba(0,0,0,0.08)";

  return (
    <nav style={{
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
      background: sidebarBg,
      backdropFilter: "blur(16px)",
      borderRight: "1px solid " + sidebarBorder,
      transform: isMobile && !showSidebar ? "translateX(-105%)" : "translateX(0)",
      transition: "transform 0.28s ease",
    }}>
      {/* Slide/hidden on mobile while scrolling */}

      <div style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "4px",
        flex: 1,
        justifyContent: "center",
      }}>
        {navItems.map(({ id, icon, label }) => (
          <div key={id} style={{ position: "relative" }}>
            <button
              onClick={() => scrollTo(id)}
              onMouseEnter={() => setTooltip(id)}
              onMouseLeave={() => setTooltip(null)}
              style={{
                width: "40px",
                height: "40px",
                borderRadius: "10px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                border: "none",
                cursor: "pointer",
                fontSize: "14px",
                transition: "all 0.2s ease",
                background: active === id ? "#00b4d8" : "transparent",
                color: active === id ? "#fff" : isDark ? "#52525b" : "#a1a1aa",
                boxShadow: active === id ? "0 0 16px rgba(0,180,216,0.4)" : "none",
              }}
            >
              <i className={icon}></i>
            </button>

            {tooltip === id && (
              <div style={{
                position: "absolute",
                left: "50px",
                top: "50%",
                transform: "translateY(-50%)",
                padding: "5px 12px",
                borderRadius: "8px",
                fontSize: "12px",
                fontFamily: "DM Sans, sans-serif",
                whiteSpace: "nowrap",
                background: isDark ? "rgba(9,9,11,0.95)" : "rgba(255,255,255,0.97)",
                border: "1px solid " + (isDark ? "rgba(255,255,255,0.1)" : "rgba(0,0,0,0.1)"),
                color: isDark ? "#fff" : "#18181b",
                pointerEvents: "none",
                zIndex: 99999,
                boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
              }}>
                {label}
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Theme toggle */}
      <div style={{ paddingBottom: "24px" }}>
        <button
          onClick={toggleTheme}
          onMouseEnter={(e) => {
            e.currentTarget.style.color = "#00b4d8";
            e.currentTarget.style.background = "rgba(0,180,216,0.1)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.color = isDark ? "#52525b" : "#a1a1aa";
            e.currentTarget.style.background = "transparent";
          }}
          title={isDark ? "Switch to Light" : "Switch to Dark"}
          style={{
            width: "40px",
            height: "40px",
            borderRadius: "10px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            border: "none",
            cursor: "pointer",
            fontSize: "14px",
            background: "transparent",
            color: isDark ? "#52525b" : "#a1a1aa",
            transition: "all 0.2s ease",
          }}
        >
          <i className={isDark ? "fa-solid fa-moon" : "fa-regular fa-moon"}></i>
        </button>
      </div>
    </nav>
  );
}

export default Sidebar;