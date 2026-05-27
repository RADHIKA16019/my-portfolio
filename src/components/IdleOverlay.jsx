import { useEffect, useState } from "react";
import { personalInfo, socialLinks } from "../data/portfolio";

const IDLE_TIMEOUT = 30000;

function IdleOverlay() {
  const [isIdle, setIsIdle] = useState(false);

  useEffect(() => {
    let timer;

    const resetTimer = () => {
      setIsIdle(false);
      clearTimeout(timer);
      timer = setTimeout(() => setIsIdle(true), IDLE_TIMEOUT);
    };

    const events = ["mousemove", "keydown", "scroll", "click", "touchstart"];
    events.forEach((e) => window.addEventListener(e, resetTimer));
    resetTimer();

    return () => {
      clearTimeout(timer);
      events.forEach((e) => window.removeEventListener(e, resetTimer));
    };
  }, []);

  if (!isIdle) return null;

  return (
    <div
      onClick={() => setIsIdle(false)}
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 99997,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: "16px",
        background: "rgba(60,0,0,0.7)",
        backdropFilter: "blur(8px)",
        animation: "fadeIn 0.8s ease forwards",
        cursor: "pointer",
      }}
    >
      <p style={{
        fontFamily: "Syne, sans-serif",
        fontSize: "clamp(1.5rem, 3vw, 2.5rem)",
        fontWeight: "800",
        color: "#fff",
        textAlign: "center",
      }}>
        Still here? 👀
      </p>

      <p style={{
        fontFamily: "DM Sans, sans-serif",
        fontSize: "16px",
        color: "rgba(255,255,255,0.6)",
        marginBottom: "8px",
      }}>
        Here is my contact
      </p>

      <div style={{ display: "flex", alignItems: "center", gap: "16px", flexWrap: "wrap", justifyContent: "center" }}>
        <a
          href={"mailto:" + personalInfo.email}
          onClick={(e) => e.stopPropagation()}
          style={{
            fontFamily: "DM Sans, sans-serif",
            fontSize: "15px",
            color: "#00b4d8",
            background: "rgba(0,180,216,0.1)",
            border: "1px solid rgba(0,180,216,0.3)",
            padding: "10px 20px",
            borderRadius: "10px",
            textDecoration: "none",
            display: "inline-flex",
            alignItems: "center",
            gap: "8px",
          }}
        >
          <i className="fa-solid fa-envelope"></i>
          {personalInfo.email}
        </a>

        <a
          href={socialLinks.linkedin}
          target="_blank"
          rel="noreferrer"
          onClick={(e) => e.stopPropagation()}
          style={{
            fontFamily: "DM Sans, sans-serif",
            fontSize: "15px",
            color: "#fff",
            background: "rgba(255,255,255,0.08)",
            border: "1px solid rgba(255,255,255,0.15)",
            padding: "10px 20px",
            borderRadius: "10px",
            textDecoration: "none",
            display: "inline-flex",
            alignItems: "center",
            gap: "8px",
          }}
        >
          <i className="fa-brands fa-linkedin"></i>
          LinkedIn
        </a>
      </div>

      <p style={{
        fontFamily: "DM Sans, sans-serif",
        fontSize: "12px",
        color: "rgba(255,255,255,0.3)",
        marginTop: "16px",
      }}>
        Click anywhere to dismiss
      </p>
    </div>
  );
}

export default IdleOverlay;