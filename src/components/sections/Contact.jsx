import { useState } from "react";
import { contactInfo, personalInfo } from "../../data/portfolio";

// ── Social link config ─────────────────────────────────────────────────────
const socials = [
  {
    label: "LinkedIn",
    icon: "fab fa-linkedin-in",
    color: "#0A66C2",
    bg: "rgba(10,102,194,0.10)",
    border: "rgba(10,102,194,0.25)",
    href: (c) => c.linkedin,
  },
  {
    label: "GitHub",
    icon: "fab fa-github",
    color: "#a1a1aa",
    bg: "rgba(161,161,170,0.10)",
    border: "rgba(161,161,170,0.20)",
    href: (c) => c.github,
  },
  {
    label: "Twitter",
    icon: "fab fa-x-twitter",
    color: "#f4f4f5",
    bg: "rgba(244,244,245,0.06)",
    border: "rgba(244,244,245,0.12)",
    href: (c) => c.twitter,
  },
  {
    label: "Instagram",
    icon: "fab fa-instagram",
    color: "#E1306C",
    bg: "rgba(225,48,108,0.10)",
    border: "rgba(225,48,108,0.25)",
    href: (c) => c.instagram,
  },
];

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState(null); // null | "sending" | "sent" | "error"
  const [hoveredSocial, setHoveredSocial] = useState(null);

  function handleChange(e) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) return;
    setStatus("sending");

    // mailto fallback — replace with EmailJS/Formspree later
    const subject = encodeURIComponent(`Portfolio Contact from ${form.name}`);
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\n\nMessage:\n${form.message}`
    );
    window.open(
      `mailto:${contactInfo.email}?subject=${subject}&body=${body}`,
      "_blank"
    );

    setTimeout(() => {
      setStatus("sent");
      setForm({ name: "", email: "", message: "" });
    }, 800);
  }

  // ── Styles ─────────────────────────────────────────────────────────────────

  const sectionStyle = {
    padding: "80px 32px 120px",
    maxWidth: "900px",
    margin: "0 auto",
  };

  const labelStyle = {
    fontFamily: "Syne, sans-serif",
    fontSize: "13px",
    letterSpacing: "3px",
    textTransform: "uppercase",
    color: "#00b4d8",
    marginBottom: "12px",
  };

  const headingStyle = {
    fontFamily: "Syne, sans-serif",
    fontSize: "clamp(28px, 4vw, 40px)",
    fontWeight: "700",
    color: "#f4f4f5",
    marginBottom: "12px",
  };

  const subStyle = {
    fontFamily: "DM Sans, sans-serif",
    fontSize: "15px",
    color: "#71717a",
    marginBottom: "52px",
    lineHeight: "1.6",
    maxWidth: "480px",
  };

  // Two-column layout
  const gridStyle = {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: "32px",
    alignItems: "start",
  };

  // ── Left panel ─────────────────────────────────────────────────────────────

  const leftPanelStyle = {
    display: "flex",
    flexDirection: "column",
    gap: "28px",
  };

  const infoCardStyle = {
    padding: "22px 20px",
    borderRadius: "14px",
    border: "1px solid #27272a",
    background: "#111113",
    display: "flex",
    flexDirection: "column",
    gap: "18px",
  };

  const infoRowStyle = {
    display: "flex",
    alignItems: "center",
    gap: "14px",
  };

  const iconBoxStyle = (color, bg, border) => ({
    width: "38px",
    height: "38px",
    borderRadius: "9px",
    background: bg,
    border: `1px solid ${border}`,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexShrink: 0,
  });

  const infoLabelStyle = {
    fontFamily: "DM Sans, sans-serif",
    fontSize: "11px",
    color: "#52525b",
    letterSpacing: "0.8px",
    textTransform: "uppercase",
    marginBottom: "2px",
  };

  const infoValueStyle = {
    fontFamily: "DM Sans, sans-serif",
    fontSize: "13px",
    color: "#a1a1aa",
    textDecoration: "none",
    transition: "color 0.2s",
  };

  // Socials grid
  const socialsGridStyle = {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: "10px",
  };

  function socialBtnStyle(s, label) {
    const isHovered = hoveredSocial === label;
    return {
      display: "flex",
      alignItems: "center",
      gap: "10px",
      padding: "11px 14px",
      borderRadius: "10px",
      border: isHovered ? `1px solid ${s.border}` : "1px solid #27272a",
      background: isHovered ? s.bg : "transparent",
      textDecoration: "none",
      transition: "all 0.2s",
      cursor: "pointer",
    };
  }

  // Resume button
  const resumeBtnStyle = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "8px",
    padding: "12px",
    borderRadius: "10px",
    border: "1px solid rgba(0,180,216,0.30)",
    background: "rgba(0,180,216,0.08)",
    color: "#00b4d8",
    fontFamily: "DM Sans, sans-serif",
    fontSize: "13px",
    fontWeight: "600",
    textDecoration: "none",
    transition: "background 0.2s",
    cursor: "pointer",
  };

  // ── Right panel — Form ─────────────────────────────────────────────────────

  const formCardStyle = {
    padding: "28px 24px",
    borderRadius: "14px",
    border: "1px solid #27272a",
    background: "#111113",
    display: "flex",
    flexDirection: "column",
    gap: "18px",
  };

  const formLabelStyle = {
    fontFamily: "DM Sans, sans-serif",
    fontSize: "12px",
    color: "#71717a",
    marginBottom: "6px",
    display: "block",
    letterSpacing: "0.5px",
  };

  const inputStyle = {
    width: "100%",
    padding: "11px 14px",
    borderRadius: "9px",
    border: "1px solid #27272a",
    background: "#0e0e10",
    color: "#f4f4f5",
    fontFamily: "DM Sans, sans-serif",
    fontSize: "14px",
    outline: "none",
    transition: "border-color 0.2s",
    boxSizing: "border-box",
  };

  const textareaStyle = {
    ...inputStyle,
    resize: "vertical",
    minHeight: "110px",
    lineHeight: "1.6",
  };

  const submitBtnStyle = (sending) => ({
    width: "100%",
    padding: "12px",
    borderRadius: "10px",
    border: "none",
    background: sending
      ? "rgba(0,180,216,0.40)"
      : "linear-gradient(135deg, #00b4d8, #0077b6)",
    color: "#fff",
    fontFamily: "Syne, sans-serif",
    fontSize: "14px",
    fontWeight: "600",
    cursor: sending ? "not-allowed" : "pointer",
    letterSpacing: "0.5px",
    transition: "opacity 0.2s",
    opacity: sending ? 0.7 : 1,
  });

  const successStyle = {
    display: "flex",
    alignItems: "center",
    gap: "8px",
    padding: "12px 16px",
    borderRadius: "10px",
    background: "rgba(71,162,72,0.10)",
    border: "1px solid rgba(71,162,72,0.25)",
    color: "#47A248",
    fontFamily: "DM Sans, sans-serif",
    fontSize: "13px",
  };

  // ── Render ─────────────────────────────────────────────────────────────────

  return (
    <section id="contact" style={sectionStyle}>

      {/* Label */}
      <p style={labelStyle}>06 — Contact</p>

      {/* Heading */}
      <h2 style={headingStyle}>Let's connect</h2>
      <p style={subStyle}>
        I'm open to opportunities, collabs, and good conversations. Drop a message — I reply fast.
      </p>

      {/* Responsive two-column grid */}
      <div
        style={gridStyle}
        className="contact-grid"
      >

        {/* ── Left: info + socials + resume ── */}
        <div style={leftPanelStyle}>

          {/* Info card */}
          <div style={infoCardStyle}>

            {/* Email */}
            <div style={infoRowStyle}>
              <div style={iconBoxStyle("#00b4d8", "rgba(0,180,216,0.10)", "rgba(0,180,216,0.25)")}>
                <i className="fas fa-envelope" style={{ color: "#00b4d8", fontSize: "15px" }} />
              </div>
              <div>
                <p style={infoLabelStyle}>Email</p>
                <a
                  href={`mailto:${contactInfo.email}`}
                  style={infoValueStyle}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "#00b4d8")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "#a1a1aa")}
                >
                  {contactInfo.email}
                </a>
              </div>
            </div>

            {/* Divider */}
            <div style={{ borderTop: "1px solid #1c1c1f" }} />

            {/* Location */}
            <div style={infoRowStyle}>
              <div style={iconBoxStyle("#A78BFA", "rgba(167,139,250,0.10)", "rgba(167,139,250,0.25)")}>
                <i className="fas fa-location-dot" style={{ color: "#A78BFA", fontSize: "15px" }} />
              </div>
              <div>
                <p style={infoLabelStyle}>Location</p>
                <span style={infoValueStyle}>Faridabad, India</span>
              </div>
            </div>

            {/* Divider */}
            <div style={{ borderTop: "1px solid #1c1c1f" }} />

            {/* Status */}
            <div style={infoRowStyle}>
              <div style={iconBoxStyle("#47A248", "rgba(71,162,72,0.10)", "rgba(71,162,72,0.25)")}>
                <i className="fas fa-circle-check" style={{ color: "#47A248", fontSize: "15px" }} />
              </div>
              <div>
                <p style={infoLabelStyle}>Status</p>
                <span style={{ ...infoValueStyle, color: "#47A248" }}>
                  Open to work
                </span>
              </div>
            </div>

          </div>

          {/* Social links grid */}
          <div style={socialsGridStyle}>
            {socials.map((s) => {
              const url = s.href(contactInfo);
              if (!url) return null;
              return (
                <a
                  key={s.label}
                  href={url}
                  target="_blank"
                  rel="noreferrer"
                  style={socialBtnStyle(s, s.label)}
                  onMouseEnter={() => setHoveredSocial(s.label)}
                  onMouseLeave={() => setHoveredSocial(null)}
                >
                  <i
                    className={s.icon}
                    style={{
                      color: hoveredSocial === s.label ? s.color : "#52525b",
                      fontSize: "16px",
                      transition: "color 0.2s",
                    }}
                  />
                  <span style={{
                    fontFamily: "DM Sans, sans-serif",
                    fontSize: "13px",
                    color: hoveredSocial === s.label ? s.color : "#71717a",
                    transition: "color 0.2s",
                  }}>
                    {s.label}
                  </span>
                </a>
              );
            })}
          </div>

          {/* Resume button */}
          {contactInfo.resume && (
            <a
              href={contactInfo.resume}
              target="_blank"
              rel="noreferrer"
              style={resumeBtnStyle}
              onMouseEnter={(e) => (e.currentTarget.style.background = "rgba(0,180,216,0.16)")}
              onMouseLeave={(e) => (e.currentTarget.style.background = "rgba(0,180,216,0.08)")}
            >
              <i className="fas fa-file-arrow-down" style={{ fontSize: "14px" }} />
              Download Resume
            </a>
          )}

        </div>

        {/* ── Right: contact form ── */}
        <div style={formCardStyle}>

          <h3 style={{
            fontFamily: "Syne, sans-serif",
            fontSize: "16px",
            fontWeight: "700",
            color: "#f4f4f5",
            margin: "0",
          }}>
            Send a message
          </h3>

          {/* Name */}
          <div>
            <label style={formLabelStyle}>Your Name</label>
            <input
              type="text"
              name="name"
              placeholder="Priya Sharma"
              value={form.name}
              onChange={handleChange}
              style={inputStyle}
              onFocus={(e) => (e.currentTarget.style.borderColor = "#00b4d8")}
              onBlur={(e) => (e.currentTarget.style.borderColor = "#27272a")}
            />
          </div>

          {/* Email */}
          <div>
            <label style={formLabelStyle}>Email Address</label>
            <input
              type="email"
              name="email"
              placeholder="priya@example.com"
              value={form.email}
              onChange={handleChange}
              style={inputStyle}
              onFocus={(e) => (e.currentTarget.style.borderColor = "#00b4d8")}
              onBlur={(e) => (e.currentTarget.style.borderColor = "#27272a")}
            />
          </div>

          {/* Message */}
          <div>
            <label style={formLabelStyle}>Message</label>
            <textarea
              name="message"
              placeholder="Hey Radhika, I wanted to talk about..."
              value={form.message}
              onChange={handleChange}
              style={textareaStyle}
              onFocus={(e) => (e.currentTarget.style.borderColor = "#00b4d8")}
              onBlur={(e) => (e.currentTarget.style.borderColor = "#27272a")}
            />
          </div>

          {/* Success message */}
          {status === "sent" && (
            <div style={successStyle}>
              <i className="fas fa-circle-check" />
              Message sent! I'll get back to you soon.
            </div>
          )}

          {/* Submit */}
          <button
            style={submitBtnStyle(status === "sending")}
            onClick={handleSubmit}
            disabled={status === "sending"}
          >
            {status === "sending" ? (
              <>
                <i className="fas fa-circle-notch fa-spin" style={{ marginRight: "8px" }} />
                Sending...
              </>
            ) : (
              <>
                Send Message
                <i className="fas fa-paper-plane" style={{ marginLeft: "8px" }} />
              </>
            )}
          </button>

        </div>
      </div>

      {/* Footer line */}
      <div style={{
        marginTop: "72px",
        paddingTop: "28px",
        borderTop: "1px solid #1c1c1f",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}>
        <p style={{
          fontFamily: "DM Sans, sans-serif",
          fontSize: "13px",
          color: "#3f3f46",
          margin: 0,
          textAlign: "center",
        }}>
          Designed &amp; built by Radhika · 2024-2028
        </p>
      </div>

    </section>
  );
}