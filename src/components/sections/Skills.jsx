import { skills } from "../../data/portfolio";

function Skills() {

  const categoryColors = {
    "Languages": "#f59e0b",
    "Frontend": "#8b5cf6",
    "Backend": "#10b981",
    "Tools": "#00b4d8",
    "Learning Next": "#f43f5e",
  };

  return (
    <section id="skills" style={{
      minHeight: "100vh",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      padding: "80px 4rem",
      position: "relative",
    }}>

      {/* Section label */}
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
        marginBottom: "16px",
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
        Honest skills — what I know, what I use, and what I am currently learning.
      </p>

      {/* Skills grid — category by category */}
      <div style={{
        display: "flex",
        flexDirection: "column",
        gap: "48px",
        maxWidth: "860px",
      }}>
        {skills.map((group) => {
          const color = categoryColors[group.category] || "#00b4d8";

          return (
            <div key={group.category}>

              {/* Category label */}
              <div style={{
                display: "flex",
                alignItems: "center",
                gap: "12px",
                marginBottom: "20px",
              }}>
                <div style={{
                  width: "8px",
                  height: "8px",
                  borderRadius: "50%",
                  background: color,
                  boxShadow: `0 0 8px ${color}`,
                  flexShrink: 0,
                }} />
                <span style={{
                  fontFamily: "Syne, sans-serif",
                  fontSize: "13px",
                  fontWeight: "600",
                  color: color,
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                }}>
                  {group.category}
                </span>
                <div style={{
                  flex: 1,
                  height: "1px",
                  background: "rgba(255,255,255,0.05)",
                }} />
              </div>

              {/* Skills row */}
              <div style={{
                display: "flex",
                flexWrap: "wrap",
                gap: "12px",
              }}>
                {group.items.map((skill) => {
                  const isLearning = skill.level === "learning";

                  return (
                    <div
                      key={skill.name}
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "10px",
                        padding: "10px 16px",
                        borderRadius: "12px",
                        background: isLearning
                          ? "rgba(244,63,94,0.05)"
                          : "rgba(255,255,255,0.03)",
                        border: isLearning
                          ? "1px solid rgba(244,63,94,0.2)"
                          : "1px solid rgba(255,255,255,0.07)",
                        position: "relative",
                      }}
                    >
                      {/* Devicon */}
                      <i
                        className={skill.icon}
                        style={{ fontSize: "22px" }}
                      ></i>

                      {/* Skill name */}
                      <span style={{
                        fontFamily: "DM Sans, sans-serif",
                        fontSize: "14px",
                        fontWeight: "500",
                        color: isLearning ? "#f43f5e" : "#d4d4d8",
                      }}>
                        {skill.name}
                      </span>

                      {/* Learning badge */}
                      {isLearning && (
                        <span style={{
                          fontFamily: "DM Sans, sans-serif",
                          fontSize: "10px",
                          color: "#f43f5e",
                          background: "rgba(244,63,94,0.1)",
                          border: "1px solid rgba(244,63,94,0.2)",
                          borderRadius: "999px",
                          padding: "2px 8px",
                          letterSpacing: "0.05em",
                        }}>
                          learning
                        </span>
                      )}
                    </div>
                  );
                })}
              </div>

            </div>
          );
        })}
      </div>

    </section>
  );
}

export default Skills;