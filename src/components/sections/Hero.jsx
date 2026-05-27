import { useEffect, useRef, useState } from "react";
import Typed from "typed.js";
import { personalInfo, socialLinks, typingStrings } from "../../data/portfolio";
import profile from "/images/profile.png";

function getGreeting() {
  return "Hlo🙏🏻, "
}

function Hero({ isDark }) {
  const typedRef = useRef(null);
  const [greeting, setGreeting] = useState(getGreeting());
  const [clock, setClock] = useState("");

  useEffect(() => {
    const updateClock = () => {
      const now = new Date();
      const hh = String(now.getHours()).padStart(2, "0");
      const mm = String(now.getMinutes()).padStart(2, "0");
      const ss = String(now.getSeconds()).padStart(2, "0");
      setClock(hh + ":" + mm + ":" + ss);
      setGreeting(getGreeting());
    };
    updateClock();
    const interval = setInterval(updateClock, 1000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const typed = new Typed(typedRef.current, {
      strings: typingStrings,
      typeSpeed: 60,
      backSpeed: 40,
      backDelay: 1800,
      loop: true,
      showCursor: true,
      cursorChar: "|",
    });
    return () => typed.destroy();
  }, []);

  const mutedColor = isDark ? "#71717a" : "#52525b";
  const nameColor = isDark ? "#ffffff" : "#09090b";
  const subColor = isDark ? "#a1a1aa" : "#3f3f46";

  return (
    <section id="hero" style={{
      minHeight: "100vh",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      padding: "0 5rem",
      position: "relative",
      overflow: "hidden",
    }}>

      {/* Background glow */}
      <div style={{
        position: "absolute",
        top: "25%",
        left: "33%",
        width: "24rem",
        height: "24rem",
        borderRadius: "50%",
        background: "radial-gradient(circle, rgba(0,180,216,0.08) 0%, transparent 70%)",
        filter: "blur(40px)",
        pointerEvents: "none",
      }} />

      {/* Top left brand */}
      <div style={{
        position: "absolute",
        top: "32px",
        left: "5rem",
        display: "flex",
        alignItems: "center",
        gap: "8px",
      }}>
        <div style={{
          width: "8px",
          height: "8px",
          borderRadius: "50%",
          background: "#00b4d8",
          boxShadow: "0 0 8px #00b4d8",
        }} />
        <span style={{
          fontFamily: "Syne, sans-serif",
          fontSize: "14px",
          fontWeight: "700",
          color: isDark ? "#e4e4e7" : "#18181b",
          letterSpacing: "0.05em",
        }}>
          Radhika
          <span style={{ color: "#00b4d8" }}> | </span>
          Portfolio
        </span>
      </div>

      <div
style={{
position:"relative",
zIndex:10,
display:"flex",
alignItems:"center",
justifyContent:"space-between",
gap:"80px",
width:"100%",
}}
>

{/* LEFT CONTENT */}
<div style={{
flex:1,
maxWidth:"48rem",
}}>

{/* Clock */}
<div style={{
display:"inline-flex",
alignItems:"center",
gap:"8px",
marginBottom:"24px",
padding:"8px 16px",
borderRadius:"999px",
background:"rgba(0,180,216,0.08)",
border:"1px solid rgba(0,180,216,0.2)",
color:"#00b4d8",
fontFamily:"DM Sans, sans-serif",
fontSize:"14px",
}}>
<i className="fa-solid fa-clock"/>
<span style={{
fontFamily:"monospace",
letterSpacing:"0.1em",
}}>
{clock}
</span>
</div>

<p style={{
fontFamily:"DM Sans, sans-serif",
color: mutedColor,
fontSize:"18px",
marginBottom:"8px",
}}>
{greeting}
</p>

<h1 style={{
fontFamily:"Syne, sans-serif",
fontSize:"clamp(2.5rem,6vw,4.5rem)",
fontWeight:"800",
lineHeight:"1.1",
marginBottom:"16px",
color:nameColor,
}}>
  <p id="portfolio-logo">{personalInfo.name}</p>
</h1>

<div
style={{
display:"flex",
alignItems:"center",
gap:"8px",
marginBottom:"16px",
}}
>
<span
style={{
width:"10px",
height:"10px",
borderRadius:"50%",
background:"#4ade80",
boxShadow:"0 0 8px #4ade80",
}}
/>

<span
style={{
fontFamily:"DM Sans",
fontSize:"14px",
color:"#4ade80",
}}
>
Open to Opportunities
</span>
</div>

<div
style={{
display:"flex",
alignItems:"center",
gap:"12px",
marginBottom:"32px",
}}
>
<span style={{
fontFamily:"DM Sans",
color:mutedColor,
fontSize:"20px",
}}>
I am a
</span>

<span
style={{
fontFamily:"Syne",
fontSize:"1.5rem",
fontWeight:"700",
color:"#00b4d8",
}}
>
<span ref={typedRef}/>
</span>
</div>

<div
style={{
display:"flex",
gap:"8px",
marginBottom:"40px",
color:mutedColor,
}}
>
<i className="fa-solid fa-location-dot" style={{
color:"#00b4d8",
marginTop:"4px",
}}/>

<div>
<div>{personalInfo.college}</div>

<div>
{"B.Tech CSE · "}
{personalInfo.batch}
{" · "}
{personalInfo.location}
</div>

</div>
</div>

<div
style={{
display:"flex",
gap:"16px",
}}
>

<button
onClick={() => {
  document
    .getElementById("projects")
    ?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
}} 
style={{
padding:"12px 24px",
borderRadius:"12px",
background:
"linear-gradient(135deg,#00b4d8,#0096c7)",
border:"none",
color:"#fff",
cursor:"pointer",
}}
>
View Projects
</button>

<a
href={personalInfo.resumeLink}
download
style={{
padding:"12px 24px",
borderRadius:"12px",
border:"1px solid rgba(0,180,216,.3)",
color:"#00b4d8",
textDecoration:"none",
}}
>
Download Resume
</a>

</div>

</div>

{/* RIGHT PHOTO */}
<div
style={{
position:"relative",
flexShrink:0,
}}
>

<div
style={{
position:"absolute",
inset:"-30px",
borderRadius:"40px",
background:
"radial-gradient(circle, rgba(0,180,216,.22), transparent)",
filter:"blur(40px)",
}}
/>

<img
src="/images/profile.png"
alt="Profile"
style={{
width:"360px",
height:"450px",
objectFit:"cover",
borderRadius:"28px",
border:"1px solid rgba(0,180,216,.18)",
boxShadow:"0 24px 70px rgba(0,0,0,.35)",
position:"relative",
zIndex:1,
}}
/>

</div>

</div>

      {/* Scroll indicator */}
      <div style={{
        position: "absolute",
        bottom: "32px",
        left: "50%",
        transform: "translateX(-50%)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "8px",
        color: "#52525b",
      }}>
        <span style={{ fontFamily: "DM Sans, sans-serif", fontSize: "11px", letterSpacing: "0.15em", textTransform: "uppercase" }}>
          Scroll
        </span>
        <div style={{ width: "1px", height: "48px", background: "linear-gradient(to bottom, #00b4d8, transparent)" }} />
      </div>

    </section>
  );
}

export default Hero;