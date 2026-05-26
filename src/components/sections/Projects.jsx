import { useState } from "react";
import { projects } from "../../data/portfolio";

// ── Tech tag colors (matches screenshot vibe) ──────────────────────────────
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
  "dbdiagram.io": { color: "#a1a1aa", bg: "rgba(161,161,170,0.10)", border: "rgba(161,161,170,0.20)" },
};

const defaultTechColor = {
  color: "#a1a1aa",
  bg: "rgba(161,161,170,0.10)",
  border: "rgba(161,161,170,0.20)",
};

const FILTERS = ["All", "HTML", "JavaScript", "React", "Fullstack", "Other"];

export default function Projects() {
  const [active, setActive] = useState("All");
  const [hoveredId, setHoveredId] = useState(null);

  const filtered =
    active === "All" ? projects : projects.filter((p) => p.category === active);

  // ── Styles ─────────────────────────────────────────────────────────────────

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
    fontSize: "clamp(28px, 4vw, 40px)",
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
    color: "#a1a1aa",
    textDecoration: "none",
    transition: "color 0.2s",
  };

  const filtersStyle = {
    display: "flex",
    flexWrap: "wrap",
    gap: "8px",
    marginBottom: "36px",
  };

  const gridStyle = {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
    gap: "16px",
  };

  // ── Card ───────────────────────────────────────────────────────────────────

  function filterBtnStyle(label) {
    const isActive = active === label;
    return {
      fontFamily: "DM Sans, sans-serif",
      fontSize: "13px",
      padding: "6px 16px",
      borderRadius: "99px",
      border: isActive ? "1px solid #00b4d8" : "1px solid #27272a",
      background: isActive ? "rgba(0,180,216,0.10)" : "transparent",
      color: isActive ? "#00b4d8" : "#71717a",
      cursor: "pointer",
      transition: "all 0.2s",
    };
  }

  function cardStyle(id, featured) {
    const isHovered = hoveredId === id;
    return {
      position: "relative",
      padding: "22px 20px",
      borderRadius: "14px",
      border: isHovered
        ? "1px solid #00b4d8"
        : featured
        ? "1px solid rgba(0,180,216,0.30)"
        : "1px solid #27272a",
      background: featured ? "rgba(0,180,216,0.04)" : "#111113",
      transition: "border-color 0.2s, transform 0.2s, box-shadow 0.2s",
      transform: isHovered ? "translateY(-3px)" : "translateY(0)",
      boxShadow: isHovered
        ? "0 8px 32px rgba(0,180,216,0.10)"
        : "none",
      display: "flex",
      flexDirection: "column",
      gap: "10px",
    };
  }

  const cardTitleStyle = {
    fontFamily: "Syne, sans-serif",
    fontSize: "16px",
    fontWeight: "700",
    color: "#f4f4f5",
    margin: "0",
    display: "flex",
    alignItems: "center",
    gap: "8px",
  };

  const descStyle = {
    fontFamily: "DM Sans, sans-serif",
    fontSize: "13px",
    color: "#71717a",
    margin: "0",
    lineHeight: "1.6",
  };

  const tagsRowStyle = {
    display: "flex",
    flexWrap: "wrap",
    gap: "6px",
    marginTop: "4px",
  };

  const cardFooterStyle = {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: "auto",
    paddingTop: "12px",
    borderTop: "1px solid #1c1c1f",
  };

  const categoryBadgeStyle = (cat) => {
    const map = {
      HTML:       "#E34F26",
      JavaScript: "#F7DF1E",
      React:      "#61DAFB",
      Fullstack:  "#A78BFA",
      Other:      "#a1a1aa",
    };
    const c = map[cat] || "#a1a1aa";
    return {
      fontFamily: "DM Sans, sans-serif",
      fontSize: "10px",
      padding: "2px 10px",
      borderRadius: "99px",
      background: `${c}18`,
      color: c,
      border: `1px solid ${c}35`,
      letterSpacing: "0.5px",
    };
  };

  const iconLinkStyle = {
    display: "flex",
    alignItems: "center",
    gap: "12px",
  };

  const iconStyle = {
    color: "#52525b",
    fontSize: "16px",
    transition: "color 0.2s",
    textDecoration: "none",
  };

  const featuredDotStyle = {
    width: "7px",
    height: "7px",
    borderRadius: "50%",
    background: "#00b4d8",
    display: "inline-block",
    boxShadow: "0 0 6px #00b4d8",
    flexShrink: "0",
  };

  // ── Render ─────────────────────────────────────────────────────────────────

  return (
    <section id="projects" style={sectionStyle}>

      {/* Label */}
      {/* <p style={labelStyle}>03 — Projects</p> */}
      <p style={{
        fontFamily: "DM Sans, sans-serif",
        fontSize: "12px",
        letterSpacing: "0.2em",
        textTransform: "uppercase",
        color: "#00b4d8",
        marginBottom: "12px",
      }}>
        03 — Projects
      </p>

      <div style={{
        width: "40px",
        height: "3px",
        background: "#00b4d8",
        borderRadius: "2px",
        marginBottom: "20px",
      }} />

      {/* Heading + GitHub link */}
      <div style={headingRowStyle}>
        <h2 style={headingStyle}>Things I've built</h2>
        <a
          href="https://github.com/radhika"
          target="_blank"
          rel="noreferrer"
          style={githubAllStyle}
          onMouseEnter={(e) => (e.currentTarget.style.color = "#00b4d8")}
          onMouseLeave={(e) => (e.currentTarget.style.color = "#a1a1aa")}
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

      {/* Cards grid */}
      <div style={gridStyle}>
        {filtered.map((project) => (
          <div
            key={project.id}
            style={cardStyle(project.id, project.featured)}
            onMouseEnter={() => setHoveredId(project.id)}
            onMouseLeave={() => setHoveredId(null)}
          >
            {/* Title row */}
            <h3 style={cardTitleStyle}>
              {project.featured && <span style={featuredDotStyle} />}
              {project.title}
            </h3>

            {/* Description */}
            <p style={descStyle}>{project.description}</p>

            {/* Tech tags */}
            <div style={tagsRowStyle}>
              {project.tech.map((t) => {
                const tc = techColors[t] || defaultTechColor;
                return (
                  <span
                    key={t}
                    style={{
                      fontFamily: "DM Sans, sans-serif",
                      fontSize: "11px",
                      padding: "3px 10px",
                      borderRadius: "6px",
                      background: tc.bg,
                      color: tc.color,
                      border: `1px solid ${tc.border}`,
                    }}
                  >
                    {t}
                  </span>
                );
              })}
            </div>

            {/* Footer: category badge + links */}
            <div style={cardFooterStyle}>
              <span style={categoryBadgeStyle(project.category)}>
                {project.category}
              </span>
              <div style={iconLinkStyle}>
                {project.live && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noreferrer"
                    style={iconStyle}
                    title="Live demo"
                    onMouseEnter={(e) => (e.currentTarget.style.color = "#00b4d8")}
                    onMouseLeave={(e) => (e.currentTarget.style.color = "#52525b")}
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
                    title="GitHub repo"
                    onMouseEnter={(e) => (e.currentTarget.style.color = "#00b4d8")}
                    onMouseLeave={(e) => (e.currentTarget.style.color = "#52525b")}
                  >
                    <i className="fab fa-github" style={{ fontSize: "17px" }} />
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

    </section>
  );
}