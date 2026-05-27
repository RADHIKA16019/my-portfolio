import { useState } from "react";
import { skills } from "../../data/portfolio";

const categoryConfig = {
  "Languages": { color: "#f59e0b", bg: "rgba(245,158,11,0.08)", border: "rgba(245,158,11,0.2)" },
  "Frontend":  { color: "#8b5cf6", bg: "rgba(139,92,246,0.08)", border: "rgba(139,92,246,0.2)" },
  "Backend":   { color: "#10b981", bg: "rgba(16,185,129,0.08)", border: "rgba(16,185,129,0.2)" },
  "Tools":     { color: "#00b4d8", bg: "rgba(0,180,216,0.08)",  border: "rgba(0,180,216,0.2)"  },
};

function SkillChip({ skill, hoverBg, hoverBorder, hoverColor, isDark }) {
  const [hovered, setHovered] = useState(false);
  const isLearning = skill.level === "learning";

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: "8px",
        padding: "8px 14px",
        borderRadius: "10px",
        background: hovered ? hoverBg : isDark ? "rgba(255,255,255,0.03)" : "rgba(0,0,0,0.03)",
        border: "1px solid " + (hovered ? hoverBorder : isDark ? "rgba(255,255,255,0.07)" : "rgba(0,0,0,0.08)"),
        cursor: "default",
        transition: "all 0.2s ease",
        transform: hovered ? "translateY(-2px)" : "translateY(0)",
      }}
    >
      <i className={skill.icon} style={{ fontSize: "20px" }}></i>
      <span style={{
        fontFamily: "DM Sans, sans-serif",
        fontSize: "13px",
        fontWeight: "500",
        color: hovered ? hoverColor : isDark ? "#d4d4d8" : "#3f3f46",
        transition: "color 0.2s ease",
      }}>
        {skill.name}
      </span>
      {isLearning && (
        <span style={{
          fontFamily: "DM Sans, sans-serif",
          fontSize: "9px",
          color: "#f43f5e",
          background: "rgba(244,63,94,0.1)",
          border: "1px solid rgba(244,63,94,0.2)",
          borderRadius: "999px",
          padding: "2px 6px",
        }}>
          learning
        </span>
      )}
    </div>
  );
}

function Skills({ isDark }) {
  const filteredSkills = skills.filter((g) => g.category !== "Learning Next");
  const headingColor = isDark ? "#ffffff" : "#09090b";
  const mutedColor = isDark ? "#71717a" : "#52525b";
  const dividerColor = isDark ? "rgba(255,255,255,0.05)" : "rgba(0,0,0,0.06)";

  return (
    <section
      id="skills"
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        padding: "80px 5rem",
      }}
    >
      <p style={{
        fontFamily: "DM Sans, sans-serif",
        fontSize: "12px",
        letterSpacing: "0.2em",
        textTransform: "uppercase",
        color: "#00b4d8",
        marginBottom: "12px",
      }}>
        02 — Skills
      </p>

      <div style={{ width: "40px", height: "3px", background: "#00b4d8", borderRadius: "2px", marginBottom: "20px" }} />

      <h2 style={{
        fontFamily: "Syne, sans-serif",
        fontSize: "clamp(2rem, 4vw, 3rem)",
        fontWeight: "800",
        color: headingColor,
        marginBottom: "12px",
        lineHeight: "1.1",
      }}>
        What I work <span style={{ color: "#00b4d8" }}>with</span>
      </h2>

      <p style={{
        fontFamily: "DM Sans, sans-serif",
        fontSize: "15px",
        color: mutedColor,
        marginBottom: "56px",
        maxWidth: "480px",
        lineHeight: "1.7",
      }}>
        Honest skills — what I know and what I use daily.
      </p>

      <div style={{ display: "flex", flexDirection: "column", gap: "40px", maxWidth: "860px" }}>
        {filteredSkills.map((group) => {
          const cfg = categoryConfig[group.category] || {
            color: "#00b4d8",
            bg: "rgba(0,180,216,0.08)",
            border: "rgba(0,180,216,0.2)",
          };

          return (
            <div key={group.category}>
              <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "16px" }}>
                <div style={{
                  width: "8px",
                  height: "8px",
                  borderRadius: "50%",
                  background: cfg.color,
                  boxShadow: "0 0 8px " + cfg.color,
                  flexShrink: 0,
                }} />
                <span style={{
                  fontFamily: "Syne, sans-serif",
                  fontSize: "12px",
                  fontWeight: "700",
                  color: cfg.color,
                  letterSpacing: "0.15em",
                  textTransform: "uppercase",
                }}>
                  {group.category}
                </span>
                <div style={{ flex: 1, height: "1px", background: dividerColor }} />
              </div>

              <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
                {group.items.map((skill) => (
                  <SkillChip
                    key={skill.name}
                    skill={skill}
                    hoverBg={cfg.bg}
                    hoverBorder={cfg.border}
                    hoverColor={cfg.color}
                    isDark={isDark}
                  />
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default Skills;