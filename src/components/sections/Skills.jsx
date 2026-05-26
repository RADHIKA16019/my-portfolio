import { skills } from "../../data/portfolio";

const categories = [
  { key: "languages",  label: "Languages",    dot: "#F7DF1E" },
  { key: "frontend",   label: "Frontend",     dot: "#A78BFA" },
  { key: "backend",    label: "Backend",      dot: "#47A248" },
  { key: "tools",      label: "Tools",        dot: "#00b4d8" },
  { key: "learning",   label: "Learning Next",dot: "#F472B6" },
];

export default function Skills() {

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
    marginBottom: "8px",
  };

  const subStyle = {
    fontFamily: "DM Sans, sans-serif",
    fontSize: "15px",
    color: "#52525b",
    marginBottom: "52px",
  };

  const gridStyle = {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(340px, 1fr))",
    gap: "20px",
  };

  const boxStyle = {
    padding: "28px 24px",
    borderRadius: "16px",
    border: "1px solid #27272a",
    background: "#111113",
  };

  const boxHeaderStyle = {
    display: "flex",
    alignItems: "center",
    gap: "8px",
    marginBottom: "20px",
  };

  const boxLabelStyle = {
    fontFamily: "Syne, sans-serif",
    fontSize: "11px",
    letterSpacing: "2px",
    textTransform: "uppercase",
    fontWeight: "600",
  };

  const skillsRowStyle = {
    display: "flex",
    flexWrap: "wrap",
    gap: "10px",
  };

  const skillChipStyle = {
    display: "flex",
    alignItems: "center",
    gap: "8px",
    padding: "8px 14px",
    borderRadius: "10px",
    border: "1px solid #27272a",
    background: "#18181b",
    transition: "border-color 0.2s, transform 0.2s",
    cursor: "default",
  };

  const skillNameStyle = {
    fontFamily: "DM Sans, sans-serif",
    fontSize: "13px",
    color: "#a1a1aa",
    whiteSpace: "nowrap",
  };

  const badgeStyle = {
    fontFamily: "DM Sans, sans-serif",
    fontSize: "10px",
    padding: "2px 7px",
    borderRadius: "99px",
    background: "rgba(244,114,182,0.12)",
    color: "#F472B6",
    border: "1px solid rgba(244,114,182,0.25)",
  };

  return (
    <section id="skills" style={sectionStyle}>
      <p style={labelStyle}>02 — Skills</p>
      <h2 style={headingStyle}>What I work with</h2>
      <p style={subStyle}>Honest skills — what I know and what I use daily.</p>

      <div style={gridStyle}>
        {categories.map((cat) => {
          const list = skills[cat.key];
          if (!list || list.length === 0) return null;
          return (
            <div key={cat.key} style={boxStyle}>
              <div style={boxHeaderStyle}>
                <span style={{
                  width: "8px", height: "8px", borderRadius: "50%",
                  background: cat.dot, flexShrink: 0,
                  boxShadow: `0 0 6px ${cat.dot}`,
                }} />
                <span style={{ ...boxLabelStyle, color: cat.dot }}>{cat.label}</span>
              </div>
              <div style={skillsRowStyle}>
                {list.map((skill) => (
                  <div
                    key={skill.name}
                    style={skillChipStyle}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.borderColor = "#00b4d8";
                      e.currentTarget.style.transform = "translateY(-2px)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.borderColor = "#27272a";
                      e.currentTarget.style.transform = "translateY(0)";
                    }}
                  >
                    <i className={skill.icon} style={{ fontSize: "20px", color: skill.color || "#a1a1aa" }} />
                    <span style={skillNameStyle}>{skill.name}</span>
                    {skill.learning && <span style={badgeStyle}>learning</span>}
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}