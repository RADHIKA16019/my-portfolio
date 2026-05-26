import { useState } from "react";
import { skills } from "../../data/portfolio";

const categoryConfig = {
  "Languages": { color: "#f59e0b", bg: "rgba(245,158,11,0.08)", border: "rgba(245,158,11,0.2)" },
  "Frontend":  { color: "#8b5cf6", bg: "rgba(139,92,246,0.08)", border: "rgba(139,92,246,0.2)" },
  "Backend":   { color: "#10b981", bg: "rgba(16,185,129,0.08)", border: "rgba(16,185,129,0.2)" },
  "Tools":     { color: "#00b4d8", bg: "rgba(0,180,216,0.08)",  border: "rgba(0,180,216,0.2)"  },
};

function SkillChip({ skill, isLearning, hoverBg, hoverBorder, hoverColor }) {
  const [hovered, setHovered] = useState(false);

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
        background: hovered ? hoverBg : "rgba(255,255,255,0.03)",
        border: "1px solid " + (hovered ? hoverBorder : "rgba(255,255,255,0.06)"),
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
        color: hovered ? hoverColor : "#d4d4d8",
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
          letterSpacing: "0.05em",
        }}>
          learning
        </span>
      )}
    </div>
  );
}

function Skills() {
  const filteredSkills = skills.filter((g) => g.category !== "Learning Next");

  return (
    <section
      id="skills"
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        padding: "80px 4rem",
        position: "relative",
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
        color: "#fff",
        marginBottom: "12px",
        lineHeight: "1.1",
      }}>
        What I work <span style={{ color: "#00b4d8" }}>with</span>
      </h2>

      <p style={{
        fontFamily: "DM Sans, sans-serif",
        fontSize: "15px",
        color: "#71717a",
        marginBottom: "56px",
        maxWidth: "480px",
        lineHeight: "1.7",
      }}>
        Honest skills — what I know and what I use daily.
      </p>

      <div style={{
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gap: "32px",
        maxWidth: "860px",
      }}>
        {filteredSkills.map((group) => {
          const cfg = categoryConfig[group.category] || {
            color: "#00b4d8",
            bg: "rgba(0,180,216,0.08)",
            border: "rgba(0,180,216,0.2)",
          };

          return (
            <div
              key={group.category}
              style={{
                background: "rgba(255,255,255,0.02)",
                border: "1px solid rgba(255,255,255,0.06)",
                borderRadius: "20px",
                padding: "28px",
              }}
            >
              <div style={{
                display: "flex",
                alignItems: "center",
                gap: "10px",
                marginBottom: "24px",
              }}>
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
                  fontSize: "13px",
                  fontWeight: "700",
                  color: cfg.color,
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                }}>
                  {group.category}
                </span>
              </div>

              <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
                {group.items.map((skill) => (
                  <SkillChip
                    key={skill.name}
                    skill={skill}
                    isLearning={skill.level === "learning"}
                    hoverBg={cfg.bg}
                    hoverBorder={cfg.border}
                    hoverColor={cfg.color}
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