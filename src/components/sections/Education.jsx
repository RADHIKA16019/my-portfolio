import { education } from "../../data/portfolio";

function EducationCard({ item, index }) {
  const isCollege = item.type === "college";

  return (
    <div
      style={{
        position: "relative",
        padding: "32px",
        borderRadius: "20px",
        background: "rgba(255,255,255,0.02)",
        border: "1px solid rgba(255,255,255,0.07)",
        overflow: "hidden",
      }}
    >
      {/* Accent line left */}
      <div style={{
        position: "absolute",
        left: 0,
        top: "20%",
        bottom: "20%",
        width: "3px",
        borderRadius: "999px",
        background: isCollege
          ? "linear-gradient(to bottom, #00b4d8, #0096c7)"
          : "linear-gradient(to bottom, #8b5cf6, #6d28d9)",
      }} />

      {/* Top row */}
      <div style={{
        display: "flex",
        alignItems: "flex-start",
        justifyContent: "space-between",
        marginBottom: "16px",
        gap: "16px",
      }}>
        {/* Icon + degree */}
        <div style={{ display: "flex", alignItems: "flex-start", gap: "16px" }}>
          <div style={{
            width: "48px",
            height: "48px",
            borderRadius: "12px",
            background: isCollege
              ? "rgba(0,180,216,0.1)"
              : "rgba(139,92,246,0.1)",
            border: isCollege
              ? "1px solid rgba(0,180,216,0.2)"
              : "1px solid rgba(139,92,246,0.2)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexShrink: 0,
          }}>
            <i
              className={isCollege ? "fa-solid fa-graduation-cap" : "fa-solid fa-school"}
              style={{
                fontSize: "20px",
                color: isCollege ? "#00b4d8" : "#8b5cf6",
              }}
            ></i>
          </div>

          <div>
            <p style={{
              fontFamily: "Syne, sans-serif",
              fontSize: "17px",
              fontWeight: "700",
              color: "#e4e4e7",
              marginBottom: "4px",
              lineHeight: "1.3",
            }}>
              {item.degree}
            </p>
            <p style={{
              fontFamily: "DM Sans, sans-serif",
              fontSize: "14px",
              color: isCollege ? "#00b4d8" : "#8b5cf6",
              fontWeight: "500",
            }}>
              {item.institution}
            </p>
          </div>
        </div>

        {/* Year badge */}
        <div style={{
          padding: "6px 14px",
          borderRadius: "999px",
          background: isCollege
            ? "rgba(0,180,216,0.08)"
            : "rgba(139,92,246,0.08)",
          border: isCollege
            ? "1px solid rgba(0,180,216,0.2)"
            : "1px solid rgba(139,92,246,0.2)",
          flexShrink: 0,
        }}>
          <span style={{
            fontFamily: "DM Sans, sans-serif",
            fontSize: "13px",
            color: isCollege ? "#00b4d8" : "#8b5cf6",
            fontWeight: "500",
          }}>
            {item.year}
          </span>
        </div>
      </div>

      {/* Grade row */}
      <div style={{
        display: "flex",
        alignItems: "center",
        gap: "8px",
        marginTop: "16px",
        paddingTop: "16px",
        borderTop: "1px solid rgba(255,255,255,0.05)",
      }}>
        <i
          className="fa-solid fa-star"
          style={{ fontSize: "11px", color: "#f59e0b" }}
        ></i>
        <span style={{
          fontFamily: "DM Sans, sans-serif",
          fontSize: "13px",
          color: "#71717a",
        }}>
          {item.grade === "Current" ? "Currently Pursuing" : "Grade: " + item.grade}
        </span>
      </div>
    </div>
  );
}

function Education() {
  return (
    <section
      id="education"
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
        05 — Education
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
        My <span style={{ color: "#00b4d8" }}>Education</span>
      </h2>

      <p style={{
        fontFamily: "DM Sans, sans-serif",
        fontSize: "15px",
        color: "#71717a",
        marginBottom: "56px",
        lineHeight: "1.7",
      }}>
        The academic journey so far.
      </p>

      <div style={{
        display: "flex",
        flexDirection: "column",
        gap: "20px",
        maxWidth: "720px",
      }}>
        {education.map((item, index) => (
          <EducationCard key={item.id} item={item} index={index} />
        ))}
      </div>

    </section>
  );
}

export default Education;