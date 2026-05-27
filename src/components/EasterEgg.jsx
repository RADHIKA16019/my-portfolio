import { useEffect, useState } from "react";
import confetti from "canvas-confetti";
import { personalInfo } from "../data/portfolio";

function EasterEgg() {
  const [show, setShow] = useState(false);
  const [typed, setTyped] = useState("");

  useEffect(() => {
    const handleKey = (e) => {
      const next = (typed + e.key).toLowerCase();
      const target = "hire me";

      if (target.startsWith(next)) {
        setTyped(next);
        if (next === target) {
          setShow(true);
          setTyped("");
          confetti({
            particleCount: 120,
            spread: 80,
            origin: { y: 0.6 },
            colors: ["#00b4d8", "#0096c7", "#ffffff", "#4ade80"],
          });
          setTimeout(() => setShow(false), 3500);
        }
      } else {
        setTyped("");
      }
    };

    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [typed]);

  if (!show) return null;

  return (
    <div style={{
      position: "fixed",
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)",
      zIndex: 999999,
      padding: "32px 48px",
      borderRadius: "24px",
      background: "rgba(9,9,11,0.95)",
      border: "1px solid rgba(0,180,216,0.3)",
      boxShadow: "0 20px 60px rgba(0,180,216,0.2)",
      textAlign: "center",
      animation: "fadeIn 0.3s ease",
      backdropFilter: "blur(16px)",
    }}>
      <p style={{
        fontFamily: "Syne, sans-serif",
        fontSize: "clamp(1.2rem, 2.5vw, 2rem)",
        fontWeight: "800",
        color: "#fff",
        marginBottom: "8px",
      }}>
        Great choice! 🎉
      </p>
      <p style={{
        fontFamily: "DM Sans, sans-serif",
        fontSize: "15px",
        color: "#71717a",
        marginBottom: "20px",
      }}>
        Reach out and let us build something great.
      </p>
      <a
        href={"mailto:" + personalInfo.email}
        style={{
          fontFamily: "DM Sans, sans-serif",
          fontSize: "14px",
          color: "#fff",
          background: "linear-gradient(135deg, #00b4d8, #0096c7)",
          padding: "10px 24px",
          borderRadius: "10px",
          textDecoration: "none",
          display: "inline-flex",
          alignItems: "center",
          gap: "8px",
          fontWeight: "500",
        }}
      >
        <i className="fa-solid fa-envelope"></i>
        {personalInfo.email}
      </a>
    </div>
  );
}

export default EasterEgg;