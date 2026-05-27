import { useState } from "react";
import { education } from "../../data/portfolio";

export default function Education() {
  const [hoveredId, setHoveredId] = useState(null);

  const sectionStyle = {
    padding: "96px 40px",
    maxWidth: "960px",
    margin: "0 auto",
  };

  const labelStyle = {
    fontFamily: "Syne, sans-serif",
    fontSize: "12px",
    letterSpacing: "3px",
    textTransform: "uppercase",
    color: "#00b4d8",
    marginBottom: "10px",
  };

  const headingStyle = {
    fontFamily: "Syne, sans-serif",
    fontSize: "clamp(28px, 4vw, 42px)",
    fontWeight: "700",
    color: "#f4f4f5",
    marginBottom: "48px",
  };

  const listStyle = {
    display: "flex",
    flexDirection: "column",
    gap: "16px",
    marginTop:"8px",
  };

  function cardStyle(id) {
    const isHovered = hoveredId === id;
    return {
      padding: "28px 28px",
      borderRadius: "16px",
      border: isHovered ? "1px solid #00b4d8" : "1px solid #27272a",
      background: "#111113",
      transition: "border-color 0.2s, transform 0.2s, box-shadow 0.2s",
      transform: isHovered ? "translateY(-2px)" : "translateY(0)",
      boxShadow: isHovered ? "0 8px 32px rgba(0,180,216,0.08)" : "none",
    };
  }

  // Top row: year badge on right, degree on left
  const cardTopStyle = {
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "space-between",
    gap: "16px",
    marginBottom: "6px",
  };

  const degreeStyle = {
    fontFamily: "Syne, sans-serif",
    fontSize: "16px",
    fontWeight: "700",
    color: "#f4f4f5",
    margin: 0,
    lineHeight: "1.35",
    flex: 1,
  };

  const yearBadgeStyle = {
    fontFamily: "DM Sans, sans-serif",
    fontSize: "11px",
    padding: "4px 12px",
    borderRadius: "99px",
    background: "#18181b",
    border: "1px solid #27272a",
    color: "#71717a",
    whiteSpace: "nowrap",
    flexShrink: 0,
  };

  const institutionStyle = {
    fontFamily: "DM Sans, sans-serif",
    fontSize: "14px",
    color: "#00b4d8",
    margin: "0 0 14px 0",
  };

  const metaRowStyle = {
    display: "flex",
    flexWrap: "wrap",
    gap: "16px",
    marginBottom: "16px",
  };

  const metaItemStyle = {
    display: "flex",
    alignItems: "center",
    gap: "5px",
    fontFamily: "DM Sans, sans-serif",
    fontSize: "12px",
    color: "#52525b",
  };

  const descStyle = {
    fontFamily: "DM Sans, sans-serif",
    fontSize: "13px",
    color: "#71717a",
    margin: "0 0 16px 0",
    lineHeight: "1.65",
  };

  const tagsRowStyle = {
    display: "flex",
    flexWrap: "wrap",
    gap: "7px",
    marginBottom: "16px",
  };

  const tagStyle = {
    fontFamily: "DM Sans, sans-serif",
    fontSize: "11px",
    padding: "3px 10px",
    borderRadius: "6px",
    background: "rgba(0,180,216,0.07)",
    color: "#00b4d8",
    border: "1px solid rgba(0,180,216,0.18)",
  };

  const footerRowStyle = {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    paddingTop: "14px",
    borderTop: "1px solid #1c1c1f",
    flexWrap: "wrap",
    gap: "8px",
  };

  function statusBadge(status) {
    const isPursuing = status === "Pursuing";
    return {
      display: "inline-flex",
      alignItems: "center",
      gap: "5px",
      fontFamily: "DM Sans, sans-serif",
      fontSize: "11px",
      padding: "4px 12px",
      borderRadius: "99px",
      background: isPursuing ? "rgba(0,180,216,0.10)" : "rgba(71,162,72,0.10)",
      color: isPursuing ? "#e2db13" : "#47A248",
      border: isPursuing
        ? "1px solid rgba(0,180,216,0.25)"
        : "1px solid rgba(71,162,72,0.25)",
    };
  }

  const gradeStyle = {
    display: "inline-flex",
    alignItems: "center",
    gap: "5px",
    fontFamily: "DM Sans, sans-serif",
    fontSize: "12px",
    color: "#F59E0B",
  };

  return (
    <section id="education" style={{
      // minHeight: "100vh",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      padding: "80px 5rem 60px",
      position: "relative",
    }}>

      {/* <p style={labelStyle}>04 — Education</p> */}
      <p style={{
        fontFamily: "DM Sans, sans-serif",
        fontSize: "12px",
        letterSpacing: "0.2em",
        textTransform: "uppercase",
        color: "#00b4d8",
        marginBottom: "12px",
      }}>
        07 — Education
      </p>

      <div style={{
        width: "40px",
        height: "3px",
        background: "#00b4d8",
        borderRadius: "2px",
        marginBottom: "20px",
      }} />
      
      <h2 style={{
        fontFamily: "Syne, sans-serif",
        fontSize: "clamp(2rem, 4vw, 3rem)",
        fontWeight: "800",
        color: "#ffffff" | "#09090b",
        marginBottom: "36px",
        lineHeight: "1.1",
      }}>
        My academic <span style={{ color: "#00b4d8" }}>journey</span>
      </h2>

      <div style={listStyle}>
        {education.map((edu) => {
          const isPursuing = edu.status === "Pursuing";
          return (
            <div
              key={edu.id}
              style={cardStyle(edu.id)}
              onMouseEnter={() => setHoveredId(edu.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              {/* Degree + year badge */}
              <div style={cardTopStyle}>
                <h3 style={degreeStyle}>{edu.degree}</h3>
                <span style={yearBadgeStyle}>{edu.duration}</span>
              </div>

              {/* Institution */}
              <p style={institutionStyle}>{edu.institution}</p>

              {/* Location + status */}
              <div style={metaRowStyle}>
                <span style={metaItemStyle}>
                  <i className="fas fa-location-dot" style={{ fontSize: "11px" }} />
                  {edu.location}
                </span>
              </div>

              {/* Description */}
              {edu.description && (
                <p style={descStyle}>{edu.description}</p>
              )}

              {/* Subject tags */}
              {edu.highlights && edu.highlights.length > 0 && (
                <div style={tagsRowStyle}>
                  {edu.highlights.map((h) => (
                    <span key={h} style={tagStyle}>{h}</span>
                  ))}
                </div>
              )}

              {/* Footer: status badge + grade */}
              <div style={footerRowStyle}>
                <span style={statusBadge(edu.status)}>
                  <span style={{
                    width: "5px", height: "5px", borderRadius: "50%",
                    background: isPursuing ? "#e2db13" : "#47A248",
                    boxShadow: isPursuing ? "0 0 5px #00b4d8" : "none",
                  }} />
                  {edu.status}
                </span>
                {edu.grade && (
                  <span style={gradeStyle}>
                    <i className="fas fa-star" style={{ fontSize: "11px" }} />
                    {edu.grade}
                  </span>
                )}
              </div>

            </div>
          );
        })}
      </div>

    </section>
  );
}