import { useEffect, useRef, useState } from "react";
import { stats } from "../../data/portfolio";

function useCountUp(target, duration, isVisible) {
  const [count, setCount] = useState(0);
  const started = useRef(false);

  useEffect(() => {
    if (!isVisible || started.current) return;
    started.current = true;

    const startTime = performance.now();
    const step = (currentTime) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * target));
      if (progress < 1) requestAnimationFrame(step);
      else setCount(target);
    };
    requestAnimationFrame(step);
  }, [isVisible, target, duration]);

  return count;
}

function StatCard({ stat, isDark, isVisible }) {
  const count = useCountUp(stat.value, 1500, isVisible);

  return (
    <div style={{
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      padding: "40px 24px",
      borderRadius: "20px",
      background: isDark ? "rgba(255,255,255,0.02)" : "rgba(0,0,0,0.02)",
      border: "1px solid " + (isDark ? "rgba(255,255,255,0.07)" : "rgba(0,0,0,0.07)"),
      textAlign: "center",
      position: "relative",
      overflow: "hidden",
    }}>
      {/* Glow behind number */}
      <div style={{
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        width: "100px",
        height: "100px",
        borderRadius: "50%",
        background: "radial-gradient(circle, rgba(0,180,216,0.1) 0%, transparent 70%)",
        pointerEvents: "none",
      }} />

      <p style={{
        fontFamily: "Syne, sans-serif",
        fontSize: "clamp(2.5rem, 4vw, 3.5rem)",
        fontWeight: "800",
        color: "#00b4d8",
        lineHeight: "1",
        marginBottom: "8px",
      }}>
        {count}{stat.suffix}
      </p>

      <p style={{
        fontFamily: "DM Sans, sans-serif",
        fontSize: "14px",
        color: isDark ? "#71717a" : "#71717a",
        letterSpacing: "0.05em",
      }}>
        {stat.label}
      </p>
    </div>
  );
}

function Stats({ isDark }) {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);
  const headingColor = isDark ? "#ffffff" : "#09090b";
  const mutedColor = isDark ? "#71717a" : "#52525b";

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setIsVisible(true); },
      { threshold: 0.3 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="stats"
      ref={sectionRef}
      style={{
        padding: "80px 5rem",
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
        05 — By the number
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
        color: headingColor,
        marginBottom: "56px",
        lineHeight: "1.1",
      }}>
        Progress <span style={{ color: "#00b4d8" }}>so far</span>
      </h2>

      <div className="responsive-grid" style={{
        display: "grid",
        gridTemplateColumns: "repeat(4, 1fr)",
        gap: "20px",
        maxWidth: "860px",
      }}>
        {stats.map((stat, i) => (
          <StatCard key={i} stat={stat} isDark={isDark} isVisible={isVisible} />
        ))}
      </div>
    </section>
  );
}

export default Stats;