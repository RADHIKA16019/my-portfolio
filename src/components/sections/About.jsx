import { funFacts } from "../../data/portfolio";

function About({ isDark }) {
  const mutedColor = isDark ? "#a1a1aa" : "#52525b";
  const headingColor = isDark ? "#ffffff" : "#09090b";
  const highlightColor = "#00b4d8";
  const cardBg = isDark ? "rgba(255,255,255,0.02)" : "rgba(0,0,0,0.02)";
  const cardBorder = isDark ? "rgba(255,255,255,0.06)" : "rgba(0,0,0,0.07)";

  return (
    <section id="about" style={{
      minHeight: "100vh",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      padding: "80px 5rem",
    }}>

      <p style={{
        fontFamily: "DM Sans, sans-serif",
        fontSize: "12px",
        letterSpacing: "0.2em",
        textTransform: "uppercase",
        color: "#00b4d8",
        marginBottom: "12px",
      }}>
        01 — About
      </p>

      <div style={{ width: "40px", height: "3px", background: "#00b4d8", borderRadius: "2px", marginBottom: "20px" }} />

      <h2 style={{
        fontFamily: "Syne, sans-serif",
        fontSize: "clamp(2rem, 4vw, 3rem)",
        fontWeight: "800",
        color: headingColor,
        marginBottom: "48px",
        lineHeight: "1.1",
      }}>
        A little about <span style={{ color: highlightColor }}>me</span>
      </h2>

      <div className="responsive-grid" style={{
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gap: "64px",
        alignItems: "start",
        maxWidth: "900px",
      }}>

        {/* Left — Bio */}
        <div>
          <p style={{ fontFamily: "DM Sans, sans-serif", fontSize: "16px", lineHeight: "1.9", color: mutedColor, marginBottom: "24px" }}>
            Hey! I am{" "}
            <span style={{ color: highlightColor, fontWeight: "500" }}>Radhika</span>
            , a first-year Computer Science student at{" "}
            <span style={{ color: highlightColor, fontWeight: "500" }}>
              J.C.Bose University of Science and Technology, YMCA
            </span>
            . I love building things for the web and sharing what I learn.
          </p>

          <p style={{ fontFamily: "DM Sans, sans-serif", fontSize: "16px", lineHeight: "1.9", color: mutedColor, marginBottom: "24px" }}>
            Currently focused on{" "}
            <span style={{ color: highlightColor, fontWeight: "500" }}>web development</span>
            {" "}and exploring{" "}
            <span style={{ color: highlightColor, fontWeight: "500" }}>DSA</span>
            . Still early in my journey — but moving fast and genuinely loving every part of it.
          </p>

          <p style={{ fontFamily: "DM Sans, sans-serif", fontSize: "16px", lineHeight: "1.9", color: mutedColor }}>
            Also a{" "}
            <span style={{ color: highlightColor, fontWeight: "500" }}>ChaiCode Campus Ambassador</span>
            {" "}— conducting events, writing blogs, and creating YouTube content on what I learn.
          </p>
        </div>

        {/* Right — Fun Facts */}
        <div>
          <p style={{
            fontFamily: "Syne, sans-serif",
            fontSize: "13px",
            fontWeight: "600",
            color: isDark ? "#52525b" : "#a1a1aa",
            letterSpacing: "0.1em",
            textTransform: "uppercase",
            marginBottom: "20px",
          }}>
            Fun Facts
          </p>

          <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
            {funFacts.map((fact, index) => (
              <div key={index} style={{
                display: "flex",
                alignItems: "flex-start",
                gap: "16px",
                padding: "16px 20px",
                borderRadius: "14px",
                background: cardBg,
                border: "1px solid " + cardBorder,
              }}>
                <div style={{
                  width: "40px",
                  height: "40px",
                  borderRadius: "10px",
                  background: "rgba(0,180,216,0.08)",
                  border: "1px solid rgba(0,180,216,0.15)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "18px",
                  flexShrink: 0,
                }}>
                  {fact.emoji}
                </div>
                <div>
                  <p style={{
                    fontFamily: "Syne, sans-serif",
                    fontSize: "14px",
                    fontWeight: "700",
                    color: isDark ? "#e4e4e7" : "#18181b",
                    marginBottom: "4px",
                  }}>
                    {fact.title}
                  </p>
                  <p style={{
                    fontFamily: "DM Sans, sans-serif",
                    fontSize: "13px",
                    color: isDark ? "#71717a" : "#71717a",
                    lineHeight: "1.6",
                  }}>
                    {fact.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}

export default About;