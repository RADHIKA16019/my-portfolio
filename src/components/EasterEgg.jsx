import { useEffect, useState } from "react";
import confetti from "canvas-confetti";
import { personalInfo } from "../data/portfolio";

function EasterEgg() {
  const [show, setShow] = useState(false);

  const triggerEgg = () => {
    setShow(true);

    confetti({
      particleCount: 140,
      spread: 90,
      origin: { y: 0.6 },
      colors: ["#00b4d8", "#0096c7", "#ffffff", "#4ade80"],
    });

    setTimeout(() => setShow(false), 3500);
  };

  useEffect(() => {
    const handleShortcut = (e) => {
      if (
        e.ctrlKey &&
        e.shiftKey &&
        e.key.toLowerCase() === "h"
      ) {
        triggerEgg();
      }
    };

    window.addEventListener("keydown", handleShortcut);

    return () => {
      window.removeEventListener("keydown", handleShortcut);
    };
  }, []);

  useEffect(() => {
    let clicks = 0;

    const logo = document.getElementById("portfolio-logo");

    if (!logo) return;

    const handleLogoClick = () => {
      clicks++;

      if (clicks >= 5) {
        triggerEgg();
        clicks = 0;
      }

      setTimeout(() => {
        clicks = 0;
      }, 2500);
    };

    logo.addEventListener("click", handleLogoClick);

    return () => {
      logo.removeEventListener("click", handleLogoClick);
    };
  }, []);

  if (!show) return null;

  return (
    <div
      style={{
        position: "fixed",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        zIndex: 999999,
        padding: "32px 48px",
        borderRadius: "24px",
        background: "rgba(9,9,11,0.95)",
        border: "1px solid rgba(0,180,216,0.3)",
        boxShadow: "0 20px 60px rgba(0,180,216,0.25)",
        textAlign: "center",
        backdropFilter: "blur(16px)",
      }}
    >
      <p
        style={{
          fontSize: "2rem",
          color: "#fff",
          fontWeight: "800",
        }}
      >
        🎉 Secret Unlocked
      </p>

      <p
        style={{
          color: "#a1a1aa",
          marginTop: "10px",
          marginBottom: "22px",
        }}
      >
        Nice catch. You found the hidden route.
      </p>

      <a
  href={`https://mail.google.com/mail/?view=cm&fs=1&to=${personalInfo.email}`}
  target="_blank"
  rel="noopener noreferrer"
  style={{
    background:
      "linear-gradient(135deg,#00b4d8,#0096c7)",
    color: "#fff",
    padding: "12px 22px",
    borderRadius: "12px",
    textDecoration: "none",
    display: "inline-flex",
    gap: "10px",
  }}
>
  ✉ Contact Me
</a>
    </div>
  );
}

export default EasterEgg;