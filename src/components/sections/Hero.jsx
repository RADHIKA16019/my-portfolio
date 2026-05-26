import { useEffect, useRef, useState } from "react";
import Typed from "typed.js";
import { personalInfo, socialLinks, typingStrings } from "../../data/portfolio";

function getGreeting() {
  const hour = new Date().getHours();
  return "Hlo 🙏🏻,";
}

function Hero() {
  const typedRef = useRef(null);
  const [greeting, setGreeting] = useState(getGreeting());
  const [clock, setClock] = useState("");

  useEffect(() => {
    const updateClock = () => {
      const now = new Date();
      const hh = String(now.getHours()).padStart(2, "0");
      const mm = String(now.getMinutes()).padStart(2, "0");
      const ss = String(now.getSeconds()).padStart(2, "0");
      setClock(hh + ":" + mm + ":" + ss);
      setGreeting(getGreeting());
    };
    updateClock();
    const interval = setInterval(updateClock, 1000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const typed = new Typed(typedRef.current, {
      strings: typingStrings,
      typeSpeed: 60,
      backSpeed: 40,
      backDelay: 1800,
      loop: true,
      showCursor: true,
      cursorChar: "|",
    });
    return () => typed.destroy();
  }, []);

  const glowStyle = {
    position: "absolute",
    top: "25%",
    left: "33%",
    width: "24rem",
    height: "24rem",
    borderRadius: "50%",
    background: "radial-gradient(circle, rgba(0,180,216,0.08) 0%, transparent 70%)",
    filter: "blur(40px)",
    pointerEvents: "none",
  };

  const clockBadgeStyle = {
    display: "inline-flex",
    alignItems: "center",
    gap: "8px",
    marginBottom: "24px",
    padding: "8px 16px",
    borderRadius: "999px",
    background: "rgba(0,180,216,0.08)",
    border: "1px solid rgba(0,180,216,0.2)",
    color: "#00b4d8",
    fontFamily: "DM Sans, sans-serif",
    fontSize: "14px",
  };

  const greetingStyle = {
    fontFamily: "DM Sans, sans-serif",
    color: "#71717a",
    fontSize: "18px",
    marginBottom: "8px",
    letterSpacing: "0.05em",
  };

  const nameStyle = {
    fontFamily: "Syne, sans-serif",
    fontSize: "clamp(2.5rem, 6vw, 4.5rem)",
    fontWeight: "800",
    lineHeight: "1.1",
    marginBottom: "16px",
    color: "#ffffff",
  };

  const badgeRowStyle = {
    display: "flex",
    alignItems: "center",
    gap: "8px",
    marginBottom: "16px",
  };

  const greenDotStyle = {
    width: "10px",
    height: "10px",
    borderRadius: "50%",
    background: "#4ade80",
    boxShadow: "0 0 8px #4ade80",
    display: "inline-block",
    animation: "blink 1.2s step-end infinite",
  };

  const openTextStyle = {
    fontFamily: "DM Sans, sans-serif",
    fontSize: "14px",
    color: "#4ade80",
    letterSpacing: "0.05em",
  };

  const typingRowStyle = {
    display: "flex",
    alignItems: "center",
    gap: "12px",
    marginBottom: "32px",
  };

  const collegeRowStyle = {
    display: "flex",
    alignItems: "flex-start",
    gap: "8px",
    marginBottom: "40px",
    fontFamily: "DM Sans, sans-serif",
    color: "#71717a",
    fontSize: "14px",
  };

  const ctaRowStyle = {
    display: "flex",
    flexWrap: "wrap",
    gap: "16px",
    marginBottom: "48px",
  };

  const btnPrimaryStyle = {
    fontFamily: "DM Sans, sans-serif",
    padding: "12px 24px",
    borderRadius: "12px",
    fontWeight: "500",
    color: "#fff",
    background: "linear-gradient(135deg, #00b4d8, #0096c7)",
    boxShadow: "0 4px 20px rgba(0,180,216,0.3)",
    border: "none",
    cursor: "pointer",
    fontSize: "15px",
  };

  const btnSecondaryStyle = {
    fontFamily: "DM Sans, sans-serif",
    padding: "12px 24px",
    borderRadius: "12px",
    fontWeight: "500",
    color: "#00b4d8",
    background: "rgba(0,180,216,0.05)",
    border: "1px solid rgba(0,180,216,0.4)",
    cursor: "pointer",
    fontSize: "15px",
    textDecoration: "none",
    display: "inline-flex",
    alignItems: "center",
    gap: "8px",
  };

  const scrollIndicatorStyle = {
    position: "absolute",
    bottom: "32px",
    left: "50%",
    transform: "translateX(-50%)",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "8px",
    color: "#52525b",
  };

  return (
    <section
      id="hero"
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        padding: "0 4rem",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div style={glowStyle} />

      <div style={{ position: "relative", zIndex: 10, maxWidth: "48rem" }}>

        <div style={clockBadgeStyle}>
          <i className="fa-solid fa-clock" style={{ fontSize: "12px" }}></i>
          <span style={{ fontFamily: "monospace", letterSpacing: "0.1em" }}>{clock}</span>
        </div>

        <p style={greetingStyle}>{greeting}</p>

        <h1 style={nameStyle}>{personalInfo.name}</h1>

        <div style={badgeRowStyle}>
          <span style={greenDotStyle} />
          <span style={openTextStyle}>Open to Opportunities</span>
        </div>

        <div style={typingRowStyle}>
          <span style={{ fontFamily: "DM Sans, sans-serif", color: "#71717a", fontSize: "20px" }}>
            I am a
          </span>
          <span style={{ fontFamily: "Syne, sans-serif", fontSize: "clamp(1.2rem, 2.5vw, 1.5rem)", fontWeight: "700", color: "#00b4d8" }}>
            <span ref={typedRef} />
          </span>
        </div>

        <div style={collegeRowStyle}>
          <i
            className="fa-solid fa-location-dot"
            style={{ color: "#00b4d8", fontSize: "13px", marginTop: "3px", flexShrink: 0 }}
          ></i>
          <div style={{ display: "flex", flexDirection: "column", gap: "2px" }}>
            <span>{personalInfo.college}</span>
            <span>{"B.Tech CSE" + " \u00B7 " + personalInfo.batch + " \u00B7 " + personalInfo.location}</span>
          </div>
        </div>

        <div style={ctaRowStyle}>
          <button
            style={btnPrimaryStyle}
            onClick={() => document.getElementById("projects").scrollIntoView({ behavior: "smooth" })}
          >
            <i className="fa-solid fa-folder-open" style={{ marginRight: "8px" }}></i>
            View Projects
          </button>

          <a href={personalInfo.resumeLink} download style={btnSecondaryStyle}>
            <i className="fa-solid fa-download" style={{ fontSize: "13px" }}></i>
            Download Resume
          </a>
        </div>

      </div>

      <div style={scrollIndicatorStyle}>
        <span style={{ fontFamily: "DM Sans, sans-serif", fontSize: "11px", letterSpacing: "0.15em", textTransform: "uppercase" }}>
          Scroll
        </span>
        <div style={{ width: "1px", height: "48px", background: "linear-gradient(to bottom, #00b4d8, transparent)" }} />
      </div>

    </section>
  );
}

export default Hero;