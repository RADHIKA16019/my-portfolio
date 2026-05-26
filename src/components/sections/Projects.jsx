import { useState } from "react";
import { projects } from "../../data/portfolio";

const techColors = {
  "HTML":         { color: "#E34F26", bg: "rgba(227,79,38,0.10)",   border: "rgba(227,79,38,0.25)" },
  "CSS":          { color: "#1572B6", bg: "rgba(21,114,182,0.10)",  border: "rgba(21,114,182,0.25)" },
  "JavaScript":   { color: "#F7DF1E", bg: "rgba(247,223,30,0.10)",  border: "rgba(247,223,30,0.25)" },
  "React":        { color: "#61DAFB", bg: "rgba(97,218,251,0.10)",  border: "rgba(97,218,251,0.25)" },
  "Vite":         { color: "#646CFF", bg: "rgba(100,108,255,0.10)", border: "rgba(100,108,255,0.25)" },
  "Tailwind CSS": { color: "#06B6D4", bg: "rgba(6,182,212,0.10)",   border: "rgba(6,182,212,0.25)" },
  "Node.js":      { color: "#68A063", bg: "rgba(104,160,99,0.10)",  border: "rgba(104,160,99,0.25)" },
  "MongoDB":      { color: "#47A248", bg: "rgba(71,162,72,0.10)",   border: "rgba(71,162,72,0.25)" },
  "AI":           { color: "#A78BFA", bg: "rgba(167,139,250,0.10)", border: "rgba(167,139,250,0.25)" },
  "SQL":          { color: "#F59E0B", bg: "rgba(245,158,11,0.10)",  border: "rgba(245,158,11,0.25)" },
  "Express":      { color: "#a1a1aa", bg: "rgba(161,161,170,0.08)", border: "rgba(161,161,170,0.18)" },
  "dbdiagram.io": { color: "#a1a1aa", bg: "rgba(161,161,170,0.08)", border: "rgba(161,161,170,0.18)" },
};

const defaultTechColor = {
  color: "#a1a1aa",
  bg: "rgba(161,161,170,0.08)",
  border: "rgba(161,161,170,0.18)",
};

const categoryColors = {
  HTML:       "#E34F26",
  JavaScript: "#F7DF1E",
  React:      "#61DAFB",
  Fullstack:  "#A78BFA",
  Other:      "#a1a1aa",
};

const FILTERS = ["All", "HTML", "JavaScript", "React", "Fullstack", "Other"];

// Alternating backgrounds
const cardBgs = ["#111113", "rgba(0,180,216,0.04)"];

export default function Projects() {
  const [active, setActive] = useState("All");
  const [hoveredId, setHoveredId] = useState(null);

  const filtered =
    active === "All" ? projects : projects.filter((p) => p.category === active);

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

  const headingRowStyle = {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    flexWrap: "wrap",
    gap: "12px",
    marginBottom: "32px",
  };

  const headingStyle = {
    fontFamily: "Syne, sans-serif",
    fontSize: "clamp(28px, 4vw, 42px)",
    fontWeight: "700",
    color: "#f4f4f5",
    margin: "0",
  };

  const githubAllStyle = {
    display: "flex",
    alignItems: "center",
    gap: "6px",
    fontFamily: "DM Sans, sans-serif",
    fontSize: "13px",
    color: "#52525b",
    textDecoration: "none",
    transition: "color 0.2s",
  };

  const filtersStyle = {
    display: "flex",
    flexWrap: "wrap",
    gap: "8px",
    marginBottom: "32px",
  };

  function filterBtnStyle(label) {
    const isActive = active === label;
    return {
      fontFamily: "DM Sans, sans-serif",
      fontSize: "13px",
      padding: "6px 18px",
      borderRadius: "99px",
      border: isActive ? "1px solid #00b4d8" : "1px solid #27272a",
      background: isActive ? "rgba(0,180,216,0.10)" : "transparent",
      color: isActive ? "#00b4d8" : "#71717a",
      cursor: "pointer",
      transition: "all 0.2s",
    };
  }

  // Single column list of cards
  const listStyle = {
    display: "flex",
    flexDirection: "column",
    gap: "0px",
  };

  function cardStyle(id, index) {
    const isHovered = hoveredId === id;
    const bg = cardBgs[index % 2];
    return {
      padding: "24px 28px",
      border: "1px solid #27272a",
      borderRadius: "14px",
      marginBottom: "12px",
      background: isHovered ? (index % 2 === 0 ? "#161618" : "rgba(0,180,216,0.07)") : bg,
      transition: "background 0.2s, border-color 0.2s, transform 0.2s, box-shadow 0.2s",
      borderColor: isHovered ? "#00b4d8" : "#27272a",
      transform: isHovered ? "translateY(-2px)" : "translateY(0)",
      boxShadow: isHovered ? "0 6px 28px rgba(0,180,216,0.08)" : "none",
      cursor: "default",
    };
  }

  const cardTopStyle = {
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "space-between",
    marginBottom: "10px",
  };

  const titleRowStyle = {
    display: "flex",
    alignItems: "center",
    gap: "10px",
  };

  const dotStyle = {
    width: "8px",
    height: "8px",
    borderRadius: "50%",
    background: "#00b4d8",
    flexShrink: 0,
    boxShadow: "0 0 6px rgba(0,180,216,0.7)",
  };

  const titleStyle = {
    fontFamily: "Syne, sans-serif",
    fontSize: "17px",
    fontWeight: "700",
    color: "#f4f4f5",
    margin: 0,
  };

  const iconLinkStyle = {
    display: "flex",
    alignItems: "center",
    gap: "14px",
    flexShrink: 0,
  };

  const iconStyle = {
    color: "#3f3f46",
    fontSize: "17px",
    textDecoration: "none",
    transition: "color 0.2s",
  };

  const descStyle = {
    fontFamily: "DM Sans, sans-serif",
    fontSize: "14px",
    color: "#71717a",
    margin: "0 0 14px 0",
    lineHeight: "1.65",
    paddingLeft: "18px",
  };

  const cardFooterStyle = {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    flexWrap: "wrap",
    gap: "8px",
    paddingLeft: "18px",
  };

  const tagsRowStyle = {
    display: "flex",
    flexWrap: "wrap",
    gap: "6px",
  };

  const catBadgeStyle = (cat) => {
    const c = categoryColors[cat] || "#a1a1aa";
    return {
      fontFamily: "DM Sans, sans-serif",
      fontSize: "10px",
      padding: "3px 10px",
      borderRadius: "99px",
      background: `${c}18`,
      color: c,
      border: `1px solid ${c}30`,
      letterSpacing: "0.5px",
    };
  };

  return (
    <section id="projects" style={sectionStyle}>

      <p style={labelStyle}>03 — Projects</p>

      <div style={headingRowStyle}>
        <h2 style={headingStyle}>Things I've built</h2>
        <a
          href="https://github.com/radhika"
          target="_blank"
          rel="noreferrer"
          style={githubAllStyle}
          onMouseEnter={(e) => (e.currentTarget.style.color = "#00b4d8")}
          onMouseLeave={(e) => (e.currentTarget.style.color = "#52525b")}
        >
          <i className="fab fa-github" style={{ fontSize: "15px" }} />
          View all on GitHub
          <i className="fas fa-arrow-up-right-from-square" style={{ fontSize: "11px" }} />
        </a>
      </div>

      {/* Filter tabs */}
      <div style={filtersStyle}>
        {FILTERS.map((f) => (
          <button key={f} style={filterBtnStyle(f)} onClick={() => setActive(f)}>
            {f}
          </button>
        ))}
      </div>

      {/* Cards list */}
      <div style={listStyle}>
        {filtered.map((project, index) => (
          <div
            key={project.id}
            style={cardStyle(project.id, index)}
            onMouseEnter={() => setHoveredId(project.id)}
            onMouseLeave={() => setHoveredId(null)}
          >
            {/* Top: title + icons */}
            <div style={cardTopStyle}>
              <div style={titleRowStyle}>
                <span style={dotStyle} />
                <h3 style={titleStyle}>{project.title}</h3>
              </div>
              <div style={iconLinkStyle}>
                {project.live && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noreferrer"
                    style={iconStyle}
                    title="Live demo"
                    onMouseEnter={(e) => (e.currentTarget.style.color = "#00b4d8")}
                    onMouseLeave={(e) => (e.currentTarget.style.color = "#3f3f46")}
                  >
                    <i className="fas fa-arrow-up-right-from-square" />
                  </a>
                )}
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    style={iconStyle}
                    title="GitHub"
                    onMouseEnter={(e) => (e.currentTarget.style.color = "#f4f4f5")}
                    onMouseLeave={(e) => (e.currentTarget.style.color = "#3f3f46")}
                  >
                    <i className="fab fa-github" />
                  </a>
                )}
              </div>
            </div>

            {/* Description */}
            <p style={descStyle}>{project.description}</p>

            {/* Footer: tech tags + category badge */}
            <div style={cardFooterStyle}>
              <div style={tagsRowStyle}>
                {project.tech.map((t) => {
                  const tc = techColors[t] || defaultTechColor;
                  return (
                    <span key={t} style={{
                      fontFamily: "DM Sans, sans-serif",
                      fontSize: "11px",
                      padding: "3px 10px",
                      borderRadius: "6px",
                      background: tc.bg,
                      color: tc.color,
                      border: `1px solid ${tc.border}`,
                    }}>
                      {t}
                    </span>
                  );
                })}
              </div>
              <span style={catBadgeStyle(project.category)}>
                {project.category}
              </span>
            </div>
          </div>
        ))}
      </div>

    </section>
  );
}