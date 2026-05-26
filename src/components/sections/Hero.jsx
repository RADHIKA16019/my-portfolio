import { useEffect, useRef, useState } from "react";
import Typed from "typed.js";
import { personalInfo, socialLinks, typingStrings } from "../../data/portfolio";

function getGreeting() {
  const hour = new Date().getHours();
  if (hour >= 5 && hour < 12) return "Good Morning";
  if (hour >= 12 && hour < 17) return "Good Afternoon";
  if (hour >= 17 && hour < 21) return "Good Evening";
  return "Good Night";
}

const styles = {
  section: {
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    padding: "0 4rem",
    position: "relative",
    overflow: "hidden",
  },
  glow: {
    position: "absolute",
    top: "25%",
    left: "33%",
    width: "24rem",
    height: "24rem",
    borderRadius: "50%",
    background: "radial-gradient(circle, rgba(0,180,216,0.08) 0%, transparent 70%)",
    filter: "blur(40px)",
    pointerEvents: "none",
  },
  clockBadge: {
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
  },
  greeting: {
    fontFamily: "DM Sans, sans-serif",
    color: "#71717a",
    fontSize: "18px",
    marginBottom: "8px",
    letterSpacing: "0.05em",
  },
  name: {
    fontFamily: "Syne, sans-serif",
    fontSize: "clamp(2.5rem, 6vw, 4.5rem)",
    fontWeight: "800",
    lineHeight: "1.1",
    marginBottom: "16px",
  },
  openBadge: {
    display: "flex",
    alignItems: "center",
    gap: "8px",
    marginBottom: "16px",
  },
  greenDot: {
    width: "10px",
    height: "10px",
    borderRadius: "50%",
    background: "#4ade80",
    boxShadow: "0 0 8px #4ade80",
    animation: "blink 1.2s step-end infinite",
    display: "inline-block",
  },
  openText: {
    fontFamily: "DM Sans, sans-serif",
    fontSize: "14px",
    color: "#4ade80",
    letterSpacing: "0.05em",
  },
  typingRow: {
    display: "flex",
    alignItems: "center",
    gap: "12px",
    marginBottom: "32px",
  },
  iAmA: {
    fontFamily: "DM Sans, sans-serif",
    color: "#71717a",
    fontSize: "20px",
  },
  typingText: {
    fontFamily: "Syne, sans-serif",
    fontSize: "clamp(1.2rem, 2.5vw, 1.5rem)",
    fontWeight: "700",
    color: "#00b4d8",
  },
  collegeInfo: {
  fontFamily: "DM Sans, sans-serif",
  color: "#71717a",
  fontSize: "14px",
  marginBottom: "40px",
  display: "flex",
  flexDirection: "row",
  alignItems: "flex-start",
  gap: "8px",
},
  ctaRow: {
    display: "flex",
    flexWrap: "wrap",
    gap: "16px",
    marginBottom: "48px",
  },
  btnPrimary: {
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
    transition: "transform 0.2s ease",
  },
  btnSecondary: {
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
    display: "flex",
    alignItems: "center",
    gap: "8px",
    transition: "transform 0.2s ease",
  },
  socialRow: {
    display: "flex",
    alignItems: "center",
    gap: "16px",
  },
  socialLabel: {
    fontFamily: "DM Sans, sans-serif",
    color: "#52525b",
    fontSize: "12px",
    letterSpacing: "0.1em",
    textTransform: "uppercase",
  },
  divider: {
    width: "32px",
    height: "1px",
    background: "#3f3f46",
  },
  socialIcons: {
    display: "flex",
    alignItems: "center",
    gap: "12px",
  },
  socialIcon: {
    width: "36px",
    height: "36px",
    borderRadius: "8px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    border: "1px solid rgba(255,255,255,0.08)",
    color: "#71717a",
    textDecoration: "none",
    fontSize: "15px",
    transition: "color 0.2s ease",
    position: "relative",
  },
  scrollIndicator: {
    position: "absolute",
    bottom: "32px",
    left: "50%",
    transform: "translateX(-50%)",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "8px",
    color: "#52525b",
  },
  scrollText: {
    fontFamily: "DM Sans, sans-serif",
    fontSize: "11px",
    letterSpacing: "0.15em",
    textTransform: "uppercase",
  },
  scrollLine: {
    width: "1px",
    height: "48px",
    background: "linear-gradient(to bottom, #00b4d8, transparent)",
  },
};

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
      setClock(`${hh}:${mm}:${ss}`);
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

  return (
    <section id="hero" style={styles.section}>

      <div style={styles.glow} />

      <div style={{ position: "relative", zIndex: 10, maxWidth: "48rem" }}>

        {/* Live Clock */}
        <div style={styles.clockBadge}>
          <i className="fa-solid fa-clock" style={{ fontSize: "12px" }}></i>
          <span style={{ fontFamily: "monospace", letterSpacing: "0.1em" }}>{clock}</span>
        </div>

        {/* Greeting */}
        <p style={styles.greeting}>{greeting} 👋</p>

        {/* Name */}
        <h1 style={{ ...styles.name, color: "var(--name-color, #fff)" }}>
          {personalInfo.name}
        </h1>

        {/* Open to work badge */}
        <div style={styles.openBadge}>
          <span style={styles.greenDot} />
          <span style={styles.openText}>Open to Opportunities</span>
        </div>

        {/* Typing animation */}
        <div style={styles.typingRow}>
          <span style={styles.iAmA}>I am a</span>
          <span style={styles.typingText}>
            <span ref={typedRef} />
          </span>
        </div>

        {/* College info */}
        <p style={styles.collegeInfo}>
          <i className="fa-solid fa-location-dot" style={{ color: "#00b4d8", fontSize: "12px" }}></i>
          {/* {personalInfo.college} · B.Tech CSE · {personalInfo.batch} · {personalInfo.location} */}
        <span style={{ display: "flex", flexDirection: "column", gap: "2px" }}>
  <span>{personalInfo.college}</span>
  <span>B.Tech CSE · {personalInfo.batch} · {personalInfo.location}</span>
</span>    
        
        </p>

        {/* CTA Buttons */}
        <div style={styles.ctaRow}>
          <button
            style={styles.btnPrimary}
            onClick={() => document.getElementById("projects").scrollIntoView({ behavior: "smooth" })}
          >
            <i className="fa-solid fa-folder-open" style={{ marginRight: "8px" }}></i>
            View Projects
          </button>

          <a href={personalInfo.resumeLink} download style={styles.btnSecondary}>
            <i className="fa-solid fa-download" style={{ fontSize: "13px" }}></i>
            Download Resume
          </a>
        </div>

        {/* Social Links */}
        <div style={styles.socialIcons}>

        <a href={socialLinks.github} target="_blank" rel="noreferrer" style={styles.socialIcon} title="15+ repos · Web Dev projects">
            <i className="fa-brands fa-github"></i>
        </a>

        <a href={socialLinks.linkedin} target="_blank" rel="noreferrer" style={styles.socialIcon} title="LinkedIn">
            <i className="fa-brands fa-linkedin"></i>
        </a>

        <a href={socialLinks.twitter} target="_blank" rel="noreferrer" style={styles.socialIcon} title="Twitter / X">
            <i className="fa-brands fa-x-twitter"></i>
        </a>

        <a href={socialLinks.youtube} target="_blank" rel="noreferrer" style={styles.socialIcon} title="Node.js tutorial">
            <i className="fa-brands fa-youtube"></i>
        </a>

        <a href={socialLinks.instagram} target="_blank" rel="noreferrer" style={styles.socialIcon} title="Instagram">
            <i className="fa-brands fa-instagram"></i>
        </a>

        </div>        

      </div>

      {/* Scroll indicator */}
      <div style={styles.scrollIndicator}>
        <span style={styles.scrollText}>Scroll</span>
        <div style={styles.scrollLine} />
      </div>

    </section>
  );
}

export default Hero;