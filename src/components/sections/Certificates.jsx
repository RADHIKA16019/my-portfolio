import { useState } from "react";
import { certificates } from "../../data/portfolio";

// ── Category badge colors ──────────────────────────────────────────────────
const categoryColors = {
  "Web Development": { color: "#61DAFB", bg: "rgba(97,218,251,0.10)",  border: "rgba(97,218,251,0.25)" },
  "Programming":     { color: "#F7DF1E", bg: "rgba(247,223,30,0.10)",  border: "rgba(247,223,30,0.25)" },
  "Community":       { color: "#A78BFA", bg: "rgba(167,139,250,0.10)", border: "rgba(167,139,250,0.25)" },
  "Design":          { color: "#F472B6", bg: "rgba(244,114,182,0.10)", border: "rgba(244,114,182,0.25)" },
  "Cloud":           { color: "#F59E0B", bg: "rgba(245,158,11,0.10)",  border: "rgba(245,158,11,0.25)" },
  "Database":        { color: "#47A248", bg: "rgba(71,162,72,0.10)",   border: "rgba(71,162,72,0.25)" },
};

const defaultCat = {
  color: "#a1a1aa",
  bg: "rgba(161,161,170,0.10)",
  border: "rgba(161,161,170,0.20)",
};

// ── Issuer icon fallback (Font Awesome) ────────────────────────────────────
function IssuerIcon({ issuer, logo }) {
  if (logo) {
    return (
      <img
        src={logo}
        alt={issuer}
        style={{
          width: "38px",
          height: "38px",
          borderRadius: "8px",
          objectFit: "contain",
          background: "#1c1c1f",
          padding: "6px",
          border: "1px solid #27272a",
          flexShrink: 0,
        }}
        onError={(e) => { e.currentTarget.style.display = "none"; }}
      />
    );
  }
  return (
    <div style={{
      width: "38px",
      height: "38px",
      borderRadius: "8px",
      background: "rgba(0,180,216,0.10)",
      border: "1px solid rgba(0,180,216,0.25)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      flexShrink: 0,
    }}>
      <i className="fas fa-certificate" style={{ color: "#00b4d8", fontSize: "16px" }} />
    </div>
  );
}

export default function Certificates() {
  const [selected, setSelected] = useState(null);

  // ── Section styles ─────────────────────────────────────────────────────────
  const sectionStyle = {
    padding: "80px 32px",
    maxWidth: "900px",
    margin: "0 auto",
  };

  const labelStyle = {
    fontFamily: "Syne, sans-serif",
    fontSize: "13px",
    letterSpacing: "3px",
    textTransform: "uppercase",
    color: "#00b4d8",
    marginBottom: "12px",
  };

  const headingStyle = {
    fontFamily: "Syne, sans-serif",
    fontSize: "clamp(28px, 4vw, 40px)",
    fontWeight: "700",
    color: "#f4f4f5",
    marginBottom: "36px",
  };

  const gridStyle = {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
    gap: "16px",
  };

  // ── Card styles ────────────────────────────────────────────────────────────
  function cardStyle(id) {
    const isHovered = hoveredId === id;
    return {
      padding: "20px",
      borderRadius: "14px",
      border: isHovered ? "1px solid #00b4d8" : "1px solid #27272a",
      background: "#111113",
      cursor: "pointer",
      transition: "border-color 0.2s, transform 0.2s, box-shadow 0.2s",
      transform: isHovered ? "translateY(-3px)" : "translateY(0)",
      boxShadow: isHovered ? "0 8px 32px rgba(0,180,216,0.10)" : "none",
      display: "flex",
      flexDirection: "column",
      gap: "14px",
    };
  }

  const [hoveredId, setHoveredId] = useState(null);

  // ── Modal styles ───────────────────────────────────────────────────────────
  const overlayStyle = {
    position: "fixed",
    inset: "0",
    background: "rgba(9,9,11,0.85)",
    backdropFilter: "blur(6px)",
    zIndex: "999",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "24px",
  };

  const modalStyle = {
    background: "#111113",
    border: "1px solid #27272a",
    borderRadius: "18px",
    padding: "32px",
    maxWidth: "520px",
    width: "100%",
    position: "relative",
    boxShadow: "0 24px 80px rgba(0,0,0,0.5)",
  };

  const closeBtnStyle = {
    position: "absolute",
    top: "16px",
    right: "16px",
    background: "transparent",
    border: "none",
    color: "#71717a",
    fontSize: "18px",
    cursor: "pointer",
    padding: "4px 8px",
    borderRadius: "6px",
    transition: "color 0.2s",
  };

  const dividerStyle = {
    border: "none",
    borderTop: "1px solid #1c1c1f",
    margin: "20px 0",
  };

  const rowStyle = {
    display: "flex",
    flexDirection: "column",
    gap: "4px",
    marginBottom: "14px",
  };

  const rowLabelStyle = {
    fontFamily: "DM Sans, sans-serif",
    fontSize: "11px",
    color: "#52525b",
    letterSpacing: "1px",
    textTransform: "uppercase",
  };

  const rowValueStyle = {
    fontFamily: "DM Sans, sans-serif",
    fontSize: "14px",
    color: "#a1a1aa",
  };

  const skillTagStyle = (skill) => ({
    fontFamily: "DM Sans, sans-serif",
    fontSize: "11px",
    padding: "3px 10px",
    borderRadius: "6px",
    background: "rgba(0,180,216,0.08)",
    color: "#00b4d8",
    border: "1px solid rgba(0,180,216,0.20)",
  });

  const verifyBtnStyle = {
    display: "inline-flex",
    alignItems: "center",
    gap: "8px",
    padding: "10px 20px",
    borderRadius: "10px",
    background: "rgba(0,180,216,0.10)",
    border: "1px solid rgba(0,180,216,0.30)",
    color: "#00b4d8",
    fontFamily: "DM Sans, sans-serif",
    fontSize: "13px",
    fontWeight: "600",
    textDecoration: "none",
    transition: "background 0.2s",
    cursor: "pointer",
    marginTop: "8px",
  };

  // ── Render ─────────────────────────────────────────────────────────────────
  return (
    <section id="certificates" style={{minHeight: "100vh",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      padding: "80px 5rem",
      position: "relative",}}>

      {/* Label */}
      <p style={{
        fontFamily: "DM Sans, sans-serif",
        fontSize: "12px",
        letterSpacing: "0.2em",
        textTransform: "uppercase",
        color: "#00b4d8",
        marginBottom: "12px",
      }}>
        06 — Licenses & Certifications
      </p>

      <div style={{
        width: "40px",
        height: "3px",
        background: "#00b4d8",
        borderRadius: "2px",
        marginBottom: "20px",
      }} />

      {/* Heading */}
      <h2 style={{
        fontFamily: "Syne, sans-serif",
        fontSize: "clamp(2rem, 4vw, 3rem)",
        fontWeight: "800",
        color: "#ffffff" | "#09090b",
        marginBottom: "12px",
        lineHeight: "1.1",
      }}>
        What I've <span style={{ color: "#00b4d8" }}>earned</span>
      </h2>

      {/* Cards grid */}
      <div style={gridStyle}>
        {certificates.map((cert) => {
          const cat = categoryColors[cert.category] || defaultCat;
          return (
            <div
              key={cert.id}
              style={cardStyle(cert.id)}
              onMouseEnter={() => setHoveredId(cert.id)}
              onMouseLeave={() => setHoveredId(null)}
              onClick={() => setSelected(cert)}
            >
              {/* Top row: issuer icon + category badge */}
              <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between" }}>
                <IssuerIcon issuer={cert.issuer} logo={cert.issuerLogo} />
                <span style={{
                  fontFamily: "DM Sans, sans-serif",
                  fontSize: "10px",
                  padding: "3px 10px",
                  borderRadius: "99px",
                  background: cat.bg,
                  color: cat.color,
                  border: `1px solid ${cat.border}`,
                }}>
                  {cert.category}
                </span>
              </div>

              {/* Title */}
              <div>
                <h3 style={{
                  fontFamily: "Syne, sans-serif",
                  fontSize: "15px",
                  fontWeight: "700",
                  color: "#f4f4f5",
                  margin: "0 0 4px 0",
                  lineHeight: "1.4",
                }}>
                  {cert.title}
                </h3>
                <p style={{
                  fontFamily: "DM Sans, sans-serif",
                  fontSize: "13px",
                  color: "#71717a",
                  margin: "0",
                }}>
                  {cert.issuer}
                </p>
              </div>

              {/* Dates */}
              <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                <i className="fas fa-calendar-alt" style={{ color: "#52525b", fontSize: "12px" }} />
                <span style={{
                  fontFamily: "DM Sans, sans-serif",
                  fontSize: "12px",
                  color: "#52525b",
                }}>
                  {cert.issueDate}
                  {cert.expiryDate ? ` · Expires ${cert.expiryDate}` : " · No Expiry"}
                </span>
              </div>

              {/* Footer: skills preview + "view" hint */}
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginTop: "auto" }}>
                <div style={{ display: "flex", gap: "6px", flexWrap: "wrap" }}>
                  {cert.skills.slice(0, 2).map((s) => (
                    <span key={s} style={skillTagStyle(s)}>{s}</span>
                  ))}
                  {cert.skills.length > 2 && (
                    <span style={skillTagStyle("more")}>+{cert.skills.length - 2}</span>
                  )}
                </div>
                <span style={{ fontFamily: "DM Sans, sans-serif", fontSize: "11px", color: "#3f3f46" }}>
                  tap to view
                </span>
              </div>
            </div>
          );
        })}
      </div>

      {/* ── Modal ── */}
      {selected && (
        <div style={overlayStyle} onClick={() => setSelected(null)}>
          <div style={modalStyle} onClick={(e) => e.stopPropagation()}>

            {/* Close button */}
            <button
              style={closeBtnStyle}
              onClick={() => setSelected(null)}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#f4f4f5")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "#71717a")}
            >
              <i className="fas fa-xmark" />
            </button>

            {/* Modal header */}
            <div style={{ display: "flex", alignItems: "flex-start", gap: "14px", marginBottom: "8px" }}>
              <IssuerIcon issuer={selected.issuer} logo={selected.issuerLogo} />
              <div>
                <h3 style={{
                  fontFamily: "Syne, sans-serif",
                  fontSize: "18px",
                  fontWeight: "700",
                  color: "#f4f4f5",
                  margin: "0 0 4px 0",
                  lineHeight: "1.3",
                  paddingRight: "32px",
                }}>
                  {selected.title}
                </h3>
                <p style={{
                  fontFamily: "DM Sans, sans-serif",
                  fontSize: "14px",
                  color: "#00b4d8",
                  margin: "0",
                }}>
                  {selected.issuer}
                </p>
              </div>
            </div>

            <hr style={dividerStyle} />

            {/* LinkedIn-style fields */}
            <div style={rowStyle}>
              <span style={rowLabelStyle}>Issued by</span>
              <span style={rowValueStyle}>{selected.issuer}</span>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0 24px" }}>
              <div style={rowStyle}>
                <span style={rowLabelStyle}>Issue Date</span>
                <span style={rowValueStyle}>{selected.issueDate}</span>
              </div>
              <div style={rowStyle}>
                <span style={rowLabelStyle}>Expiry Date</span>
                <span style={rowValueStyle}>{selected.expiryDate || "No Expiry"}</span>
              </div>
            </div>

            {selected.credentialId && (
              <div style={rowStyle}>
                <span style={rowLabelStyle}>Credential ID</span>
                <span style={{
                  fontFamily: "DM Sans, monospace",
                  fontSize: "13px",
                  color: "#71717a",
                  wordBreak: "break-all",
                }}>
                  {selected.credentialId}
                </span>
              </div>
            )}

            <div style={rowStyle}>
              <span style={rowLabelStyle}>Skills</span>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "6px", marginTop: "4px" }}>
                {selected.skills.map((s) => (
                  <span key={s} style={skillTagStyle(s)}>{s}</span>
                ))}
              </div>
            </div>

            <div style={rowStyle}>
              <span style={rowLabelStyle}>Category</span>
              <span style={rowValueStyle}>{selected.category}</span>
            </div>

            {/* Verify button */}
            {selected.credentialUrl && (
              <a
                href={selected.credentialUrl}
                target="_blank"
                rel="noreferrer"
                style={verifyBtnStyle}
                onMouseEnter={(e) => (e.currentTarget.style.background = "rgba(0,180,216,0.18)")}
                onMouseLeave={(e) => (e.currentTarget.style.background = "rgba(0,180,216,0.10)")}
              >
                <i className="fas fa-arrow-up-right-from-square" style={{ fontSize: "12px" }} />
                Verify Credential
              </a>
            )}
          </div>
        </div>
      )}

    </section>
  );
}