import { useState } from "react";

function FloatingCTA() {
  const [hovered, setHovered] = useState(false);

  const scrollToContact = () => {
    const el = document.getElementById("contact");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <button
      onClick={scrollToContact}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        position: "fixed",
        bottom: "32px",
        right: "32px",
        zIndex: 9998,
        display: "flex",
        alignItems: "center",
        gap: "8px",
        padding: hovered ? "12px 20px" : "14px",
        borderRadius: "999px",
        background: "linear-gradient(135deg, #00b4d8, #0096c7)",
        border: "none",
        cursor: "pointer",
        color: "#fff",
        fontFamily: "DM Sans, sans-serif",
        fontSize: "14px",
        fontWeight: "500",
        boxShadow: hovered
          ? "0 8px 32px rgba(0,180,216,0.5)"
          : "0 4px 20px rgba(0,180,216,0.35)",
        transition: "all 0.3s ease",
        animation: "pulseGlow 2s ease-in-out infinite",
        whiteSpace: "nowrap",
        overflow: "hidden",
        maxWidth: hovered ? "180px" : "48px",
      }}
    >
      <i className="fa-solid fa-comment-dots" style={{ fontSize: "16px", flexShrink: 0 }}></i>
      {hovered && (
        <span style={{ opacity: hovered ? 1 : 0, transition: "opacity 0.2s ease" }}>
          {"Let's Connect"}
        </span>
      )}
    </button>
  );
}

export default FloatingCTA;