import { aboutInfo, socialLinks, funFacts } from "../../data/portfolio";

function About() {

  const sectionStyle = {
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    padding: "80px 4rem",
    position: "relative",
  };

  const labelStyle = {
    fontFamily: "DM Sans, sans-serif",
    fontSize: "12px",
    letterSpacing: "0.2em",
    textTransform: "uppercase",
    color: "#00b4d8",
    marginBottom: "12px",
  };

  const accentLineStyle = {
    width: "40px",
    height: "3px",
    background: "#00b4d8",
    borderRadius: "2px",
    marginBottom: "20px",
  };

  const headingStyle = {
    fontFamily: "Syne, sans-serif",
    fontSize: "clamp(2rem, 4vw, 3rem)",
    fontWeight: "800",
    color: "#fff",
    marginBottom: "48px",
    lineHeight: "1.1",
  };

  const gridStyle = {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: "64px",
    alignItems: "start",
    maxWidth: "900px",
  };

  const bioStyle = {
    fontFamily: "DM Sans, sans-serif",
    fontSize: "16px",
    lineHeight: "1.9",
    color: "#a1a1aa",
    marginBottom: "24px",
  };

  const highlightStyle = {
    color: "#00b4d8",
    fontWeight: "500",
  };

  const socialRowStyle = {
    display: "flex",
    alignItems: "center",
    gap: "12px",
    marginTop: "16px",
  };

  const socialIconStyle = {
    width: "38px",
    height: "38px",
    borderRadius: "8px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    border: "1px solid rgba(255,255,255,0.08)",
    color: "#71717a",
    textDecoration: "none",
    fontSize: "15px",
  };

  const factsGridStyle = {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: "12px",
  };

  const factCardStyle = {
    background: "rgba(255,255,255,0.03)",
    border: "1px solid rgba(255,255,255,0.07)",
    borderRadius: "12px",
    padding: "16px",
    transition: "border-color 0.2s ease",
  };

  const factEmojiStyle = {
    fontSize: "22px",
    marginBottom: "10px",
    display: "block",
  };

  const factTitleStyle = {
    fontFamily: "Syne, sans-serif",
    fontSize: "13px",
    fontWeight: "700",
    color: "#fff",
    marginBottom: "6px",
  };

  const factDescStyle = {
    fontFamily: "DM Sans, sans-serif",
    fontSize: "12px",
    color: "#71717a",
    lineHeight: "1.6",
  };

  const factsLabelStyle = {
    fontFamily: "Syne, sans-serif",
    fontSize: "13px",
    fontWeight: "600",
    color: "#52525b",
    letterSpacing: "0.1em",
    textTransform: "uppercase",
    marginBottom: "16px",
  };

  return (
    <section id="about" style={sectionStyle}>

      <p style={labelStyle}>01 — About</p>
      <div style={accentLineStyle} />
      <h2 style={headingStyle}>
        A little about{" "}
        <span style={highlightStyle}>me</span>
      </h2>

      <div style={gridStyle}>

        {/* Left — Bio */}
        <div>
          <p style={bioStyle}>
            Hey! I am{" "}
            <span style={highlightStyle}>Radhika</span>
            , a first-year Computer Science student at{" "}
            <span style={highlightStyle}>
              J.C.Bose University of Science and Technology, YMCA
            </span>
            . I love building things for the web and sharing what I learn.
          </p>

          <p style={bioStyle}>
            Currently focused on{" "}
            <span style={highlightStyle}>web development</span>
            {" "}and exploring{" "}
            <span style={highlightStyle}>Node.js</span>
            . Still early in my journey — but moving fast and genuinely loving every part of it.
          </p>

          <p style={bioStyle}>
            Also a{" "}
            <span style={highlightStyle}>ChaiCode Campus Ambassador</span>
            {" "}— conducting events, writing blogs, and creating YouTube content on what I learn.
          </p>

          {/* Social icons */}
          <div style={socialRowStyle}>
            <a href={socialLinks.github} target="_blank" rel="noreferrer" style={socialIconStyle}>
              <i className="fa-brands fa-github"></i>
            </a>
            <a href={socialLinks.linkedin} target="_blank" rel="noreferrer" style={socialIconStyle}>
              <i className="fa-brands fa-linkedin"></i>
            </a>
            <a href={socialLinks.twitter} target="_blank" rel="noreferrer" style={socialIconStyle}>
              <i className="fa-brands fa-x-twitter"></i>
            </a>
            <a href={socialLinks.youtube} target="_blank" rel="noreferrer" style={socialIconStyle}>
              <i className="fa-brands fa-youtube"></i>
            </a>
            <a href={socialLinks.instagram} target="_blank" rel="noreferrer" style={socialIconStyle}>
              <i className="fa-brands fa-instagram"></i>
            </a>
          </div>
        </div>

        {/* Right — Fun Facts */}
        <div>
          <p style={factsLabelStyle}>Fun Facts</p>
          <div style={factsGridStyle}>
            {funFacts.map((fact, index) => (
              <div key={index} style={factCardStyle}>
                <span style={factEmojiStyle}>{fact.emoji}</span>
                <p style={factTitleStyle}>{fact.title}</p>
                <p style={factDescStyle}>{fact.desc}</p>
              </div>
            ))}
          </div>
        </div>

      </div>

    </section>
  );
}

export default About;