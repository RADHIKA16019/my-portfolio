import { useEffect, useState } from "react";
import { personalInfo, socialLinks } from "../data/portfolio";

function BatteryBanner() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (!navigator.getBattery) return;
    navigator.getBattery().then((battery) => {
      const check = () => {
        if (battery.level < 0.2 && !battery.charging) {
          setShow(true);
        } else {
          setShow(false);
        }
      };
      check();
      battery.addEventListener("levelchange", check);
    });
  }, []);

  if (!show) return null;

  const bannerStyle = {
    position: "fixed",
    top: "0",
    left: "0",
    right: "0",
    zIndex: "99998",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "8px 16px",
    background: "rgba(251, 191, 36, 0.12)",
    backdropFilter: "blur(8px)",
    borderBottom: "1px solid rgba(251, 191, 36, 0.25)",
    color: "#fbbf24",
    fontFamily: "DM Sans, sans-serif",
    fontSize: "14px",
  };

  const linkStyle = {
    textDecoration: "underline",
    color: "#fbbf24",
  };

  const btnStyle = {
    marginLeft: "16px",
    color: "#fbbf24",
    background: "none",
    border: "none",
    fontSize: "16px",
    cursor: "pointer",
  };

  return (
    <div style={bannerStyle}>
      <span>
        ⚡ Low battery detected! Save time —{" "}
        <a href={"mailto:" + personalInfo.email} style={linkStyle}>
          {personalInfo.email}
        </a>
        {" · "}
        <a href={socialLinks.linkedin} target="_blank" rel="noreferrer" style={linkStyle}>
          LinkedIn
        </a>
      </span>
      <button onClick={() => setShow(false)} style={btnStyle}>
        X
      </button>
    </div>
  );
}

export default BatteryBanner;