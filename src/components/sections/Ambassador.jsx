import { useState } from "react";

const clubs = [
  { name: "NSS", fullName: "National Service Scheme", icon: "fa-solid fa-hands-holding-child", color: "#10b981" },
  { name: "GDG", fullName: "Google Developer Group", icon: "fa-brands fa-google", color: "#cb5012" },
  { name: "UCC & DA", fullName: "University Computer Center & Digital Affairs", icon: "fa-solid fa-users", color: "#0e9eeb" },
  { name: "Vasundhara Eco Club", fullName: "Vasundhara Eco Club", icon: "fa-brands fa-pagelines", color: "#0eeb24" },
];

const activities = [
  {
    icon: "fa-solid fa-mug-saucer",
    color: "#ef8b00b0",
    bg: "rgba(242, 222, 1, 0.08)",
    border: "rgba(216, 94, 18, 0.3)",
    title: "ChaiCode Ambassador",
    desc: "Representing ChaiCode at college — organizing events, spreading dev culture, and building community.",
    tag: "Ambassador",
  },
  // {
  //   icon: "fa-solid fa-calendar-check",
  //   color: "#0fb4d5",
  //   bg: "rgba(139,92,246,0.08)",
  //   border: "rgba(77, 10, 232, 0.2)",
  //   title: "Events Conducted",
  //   count: "1+",
  //   desc: "Organized technical workshops and college events. More in the pipeline.",
  //   tag: "Events",
  // },
  {
    icon: "fa-solid fa-pen-nib",
    color: "#0bf5c2",
    bg: "rgba(11, 245, 120, 0.08)",
    border: "rgba(11, 239, 117, 0.3)",
    title: "Blogs Written",
    // count: "50+",
    desc: "Technical blogs on web development — original thoughts and learnings. Published on Hashnode.",
    tag: "Blogs",
    link: "https://hashnode.com/dashboards",
  },
  {
    icon: "fa-brands fa-youtube",
    color: "#ef4444",
    bg: "rgba(239,68,68,0.08)",
    border: "rgba(239,68,68,0.2)",
    title: "YouTube",
    // count: "1",
    desc: "Published a Node.js Architecture tutorial. More content coming soon.",
    tag: "YouTube",
    link: "https://youtu.be/nVql7HieIYo?si=ELlFq9EaATP-zrAC",
  },
];

function ActivityCard({ item, isDark }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        padding: "24px",
        borderRadius: "18px",
        background: hovered ? item.bg : isDark ? "rgba(255,255,255,0.02)" : "rgba(0,0,0,0.02)",
        border: "1px solid " + (hovered ? item.border : isDark ? "rgba(255,255,255,0.07)" : "rgba(0,0,0,0.07)"),
        transition: "all 0.25s ease",
        transform: hovered ? "translateY(-4px)" : "translateY(0)",
        cursor: "default",
      }}
    >
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "16px" }}>
        <div style={{
          width: "44px",
          height: "44px",
          borderRadius: "12px",
          background: item.bg,
          border: "1px solid " + item.border,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}>
          <i className={item.icon} style={{ fontSize: "18px", color: item.color }}></i>
        </div>
        <span style={{
          fontFamily: "DM Sans, sans-serif",
          fontSize: "10px",
          color: item.color,
          background: item.bg,
          border: "1px solid " + item.border,
          borderRadius: "999px",
          padding: "3px 10px",
        }}>
          {item.tag}
        </span>
      </div>

      {item.count && (
        <p style={{
          fontFamily: "Syne, sans-serif",
          fontSize: "32px",
          fontWeight: "800",
          color: item.color,
          lineHeight: "1",
          marginBottom: "6px",
        }}>
          {item.count}
        </p>
      )}

      <p style={{
        fontFamily: "Syne, sans-serif",
        fontSize: "15px",
        fontWeight: "700",
        color: isDark ? "#e4e4e7" : "#18181b",
        marginBottom: "8px",
      }}>
        {item.title}
      </p>

      <p style={{
        fontFamily: "DM Sans, sans-serif",
        fontSize: "13px",
        color: isDark ? "#71717a" : "#71717a",
        lineHeight: "1.7",
        marginBottom: item.link ? "12px" : "0",
      }}>
        {item.desc}
      </p>

      {item.link && (
        <a href={item.link} target="_blank" rel="noreferrer" style={{
          fontFamily: "DM Sans, sans-serif",
          fontSize: "12px",
          color: item.color,
          textDecoration: "none",
          display: "inline-flex",
          alignItems: "center",
          gap: "5px",
        }}>
          View
          <i className="fa-solid fa-arrow-right" style={{ fontSize: "10px" }}></i>
        </a>
      )}
    </div>
  );
}

function ClubCard({ club, isDark }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        display: "flex",
        alignItems: "center",
        gap: "16px",
        padding: "20px 24px",
        borderRadius: "14px",

        background: hovered
          ? `${club.color}10`
          : isDark
          ? "rgba(255,255,255,0.02)"
          : "rgba(0,0,0,0.02)",

        border:
          "1px solid " +
          (hovered
            ? `${club.color}55`
            : isDark
            ? "rgba(255,255,255,0.07)"
            : "rgba(0,0,0,0.07)"),

        transform: hovered ? "translateY(-4px)" : "translateY(0)",
        transition: "all .25s ease",
      }}
    >
      <div
        style={{
          width: "44px",
          height: "44px",
          borderRadius: "12px",
          background: hovered
            ? `${club.color}18`
            : "rgba(0,180,216,0.08)",

          border: `1px solid ${
            hovered ? club.color : "rgba(0,180,216,0.15)"
          }`,

          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <i
          className={club.icon}
          style={{
            color: club.color,
            fontSize: "18px",
          }}
        />
      </div>

      <div>
        <p
          style={{
            fontFamily: "Syne, sans-serif",
            fontSize: "15px",
            fontWeight: "700",
            color: hovered
              ? club.color
              : isDark
              ? "#e4e4e7"
              : "#18181b",
          }}
        >
          {club.name}
        </p>

        <p
          style={{
            fontFamily: "DM Sans, sans-serif",
            fontSize: "13px",
            color: hovered ? club.color : "#71717a",
          }}
        >
          {club.fullName}
        </p>
      </div>
    </div>
  );
}

function Ambassador({ isDark }) {
  const headingColor = isDark ? "#ffffff" : "#09090b";
  const mutedColor = isDark ? "#71717a" : "#52525b";
  const clubCardBg = isDark ? "rgba(255,255,255,0.02)" : "rgba(0,0,0,0.02)";
  const clubCardBorder = isDark ? "rgba(255,255,255,0.07)" : "rgba(0,0,0,0.07)";

  return (
    <section id="ambassador" style={{
      minHeight: "100vh",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      padding: "80px 5rem",
      position: "relative",
    }}>
      <p style={{
        fontFamily: "DM Sans, sans-serif",
        fontSize: "12px",
        letterSpacing: "0.2em",
        textTransform: "uppercase",
        color: "#00b4d8",
        marginBottom: "12px",
      }}>
        04 — Campus Life
      </p>

      <div style={{ width: "40px", height: "3px", background: "#00b4d8", borderRadius: "200px", marginBottom: "20px" }} />

      <h2 style={{
        fontFamily: "Syne, sans-serif",
        fontSize: "clamp(2rem, 4vw, 3rem)",
        fontWeight: "800",
        color: headingColor,
        marginBottom: "48px",
        lineHeight: "1.1",
      }}>
        Beyond <span style={{ color: "#00b4d8" }}>Code</span>
      </h2>

      <div className="responsive-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "48px", maxWidth: "960px" }}>

        {/* Left — Activities */}
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
            Activities
          </p>
          <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
            {activities.map((item, i) => (
              <ActivityCard key={i} item={item} isDark={isDark} />
            ))}
          </div>
        </div>

        {/* Right — Clubs */}
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
            Clubs and Communities
          </p>

          <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>

            {clubs.map((club, i) => (
  <ClubCard
    key={i}
    club={club}
    isDark={isDark}
  />
))}

            {/* Add more clubs note */}
            {/* <p style={{
              fontFamily: "DM Sans, sans-serif",
              fontSize: "12px",
              color: isDark ? "#3f3f46" : "#d4d4d8",
              marginTop: "8px",
              fontStyle: "italic",
            }}>
              Replace clubs array in Ambassador.jsx with your actual clubs.
            </p> */}
          </div>
        </div>

      </div>
    </section>
  );
}

export default Ambassador;