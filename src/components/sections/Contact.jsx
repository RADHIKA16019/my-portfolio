import { useState } from "react";
import { contactInfo } from "../../data/portfolio";

const socials = [
  {
    label: "LinkedIn",
    icon: "fab fa-linkedin-in",
    key: "linkedin",
    color: "#0A66C2",
    bg: "rgba(10,102,194,0.10)",
    border: "rgba(10, 102, 194, 0.56)",
  },
  {
    label: "GitHub",
    icon: "fab fa-github",
    key: "github",
    color: "#f4f4f5",
    bg: "rgba(244,244,245,0.08)",
    border: "rgba(244,244,245,0.15)",
  },
  {
    label: "X",
    icon: "fab fa-x-twitter",
    key: "twitter",
    color: "#f4f4f5",
    bg: "rgba(244,244,245,0.06)",
    border: "rgba(244,244,245,0.12)",
  },
  {
    label: "Instagram",
    icon: "fab fa-instagram",
    key: "instagram",
    color: "#cc0c33",
    bg: "rgba(225,48,108,0.10)",
    border: "rgba(225,48,108,0.25)",
  },
  {
    label: "YouTube",
    icon: "fab fa-youtube",
    key: "youtube",
    color: "#FF0000",
    bg: "rgba(255,0,0,0.10)",
    border: "rgba(255,0,0,0.25)",
  },
  {
    label: "Hashnode",
    icon: "fab fa-hashnode",
    key: "hashnode",
    color: "#2962FF",
    bg: "rgba(41,98,255,0.10)",
    border: "rgba(41,98,255,0.25)",
  },
  {
    label: "Mail",
    icon: "fas fa-envelope",
    key: "email",
    color: "#00b4d8",
    bg: "rgba(0,180,216,0.10)",
    border: "rgba(0,180,216,0.25)",
    isEmail: true,
  },
];

export default function Contact() {
  const [hoveredSocial, setHoveredSocial] = useState(null);

  const sectionStyle = {
    padding: "120px 40px 80px",
    maxWidth: "1100px",
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
    fontSize: "clamp(32px, 5vw, 56px)",
    fontWeight: "800",
    color: "#f4f4f5",
    marginBottom: "50px",
    lineHeight: "1.1",
  };

  const iconsWrapperStyle = {
    display: "flex",
    alignItems: "center",
    gap: "18px",
    flexWrap: "wrap",
  };

  function socialBtnStyle(s) {
    const isHovered = hoveredSocial === s.label;

    return {
      width: "62px",
      height: "62px",
      borderRadius: "18px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      textDecoration: "none",
      background: isHovered
        ? s.bg
        : "rgba(255,255,255,0.03)",
      border: isHovered
        ? `1px solid ${s.border}`
        : "1px solid rgba(255,255,255,0.08)",
      backdropFilter: "blur(12px)",
      transition: "all 0.25s ease",
      transform: isHovered
        ? "translateY(-5px)"
        : "translateY(0)",
      boxShadow: isHovered
        ? `0 10px 30px ${s.bg}`
        : "none",
    };
  }

  const footerStyle = {
    marginTop: "40px",
    paddingTop: "18px",
    borderTop: "1px solid rgba(255,255,255,0.08)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    // flexWrap: "wrap",
    // gap: "12px",
  };

  const copyrightStyle = {
    fontFamily: "DM Sans, sans-serif",
    fontSize: "13px",
    color: "#52525b",
    margin: 0,
  };

  const madeWithStyle = {
    fontFamily: "DM Sans, sans-serif",
    fontSize: "13px",
    color: "#52525b",
    margin: 0,
    display: "flex",
    alignItems: "center",
    gap: "6px",
  };

  return (
    <section id="contact" style={{
      // minHeight: "100vh",
      display: "flex",
      flexDirection: "column",
      // justifyContent: "center",
      padding: "80px 5rem",
      position: "relative",}}>

      <p style={{
        fontFamily: "DM Sans, sans-serif",
        fontSize: "12px",
        letterSpacing: "0.2em",
        textTransform: "uppercase",
        color: "#00b4d8",
        marginBottom: "12px",
      }}>
        08 — Contact
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
        marginBottom: "12px",
        lineHeight: "1.1",
      }}>
        Let's <span style={{ color: "#00b4d8" }}>connect</span>
      </h2>

      <div style={iconsWrapperStyle}>
        {socials.map((s) => {
          const url = s.isEmail
            ? `https://mail.google.com/mail/?view=cm&fs=1&to=${contactInfo.email}&su=Hello%20Radhika`
            : contactInfo[s.key];

          if (!url) return null;

          return (
            <a
              key={s.label}
              href={url}
              target="_blank"
              rel="noreferrer"
              style={socialBtnStyle(s)}
              onMouseEnter={() => setHoveredSocial(s.label)}
              onMouseLeave={() => setHoveredSocial(null)}
            >
              <i
                className={s.icon}
                style={{
                  color:
                    hoveredSocial === s.label
                      ? s.color
                      : "#71717a",
                  fontSize: "21px",
                  transition: "all 0.25s ease",
                }}
              />
            </a>
          );
        })}
      </div>

      <div style={footerStyle}>
        <p style={copyrightStyle}>
          © {new Date().getFullYear()} Radhika. All rights reserved.
        </p>

        
      </div>

    </section>
  );
}