import { useState } from "react";
import { contactInfo } from "../../data/portfolio";

const socials = [
  {
    label: "LinkedIn",
    icon: "fab fa-linkedin-in",
    key: "linkedin",
    color: "#0A66C2",
    bg: "rgba(10,102,194,0.10)",
    border: "rgba(10,102,194,0.25)",
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
    color: "#E1306C",
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
    marginTop: "90px",
    paddingTop: "26px",
    borderTop: "1px solid rgba(255,255,255,0.08)",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    flexWrap: "wrap",
    gap: "12px",
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
    <section id="contact" style={sectionStyle}>

      <p style={labelStyle}>06 — Contact</p>

      <h2 style={headingStyle}>
        Let's Connect
      </h2>

      <div style={iconsWrapperStyle}>
        {socials.map((s) => {
          const url = s.isEmail
            ? `mailto:${contactInfo.email}`
            : contactInfo[s.key];

          if (!url) return null;

          return (
            <a
              key={s.label}
              href={url}
              target={s.isEmail ? "_self" : "_blank"}
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

        <p style={madeWithStyle}>
          Built with
          <i
            className="fas fa-heart"
            style={{
              color: "#E1306C",
              fontSize: "11px",
            }}
          />
          by Radhika
        </p>
      </div>

    </section>
  );
}