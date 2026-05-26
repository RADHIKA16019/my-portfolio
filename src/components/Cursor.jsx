import { useEffect, useRef } from "react";

/**
 * Cursor — replaces default cursor with a glowing dot
 * - Small glowing dot that follows mouse
 * - Grows on hover over clickable elements
 * - Disabled on touch devices
 */
function Cursor() {
  const dotRef = useRef(null);
  const ringRef = useRef(null);

  useEffect(() => {
    // Don't show on touch devices
    if (window.matchMedia("(pointer: coarse)").matches) return;

    const dot = dotRef.current;
    const ring = ringRef.current;

    let mouseX = 0;
    let mouseY = 0;
    let ringX = 0;
    let ringY = 0;

    // Move dot instantly with mouse
    const onMouseMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      dot.style.left = `${mouseX}px`;
      dot.style.top = `${mouseY}px`;
    };

    // Ring follows with slight delay (smooth lag effect)
    const animateRing = () => {
      ringX += (mouseX - ringX) * 0.12;
      ringY += (mouseY - ringY) * 0.12;
      ring.style.left = `${ringX}px`;
      ring.style.top = `${ringY}px`;
      requestAnimationFrame(animateRing);
    };
    animateRing();

    // Grow on hover over clickable elements
    const onMouseEnter = () => {
      dot.style.transform = "translate(-50%, -50%) scale(2.5)";
      ring.style.transform = "translate(-50%, -50%) scale(1.8)";
      ring.style.borderColor = "#00b4d8";
      ring.style.opacity = "0.6";
    };

    const onMouseLeave = () => {
      dot.style.transform = "translate(-50%, -50%) scale(1)";
      ring.style.transform = "translate(-50%, -50%) scale(1)";
      ring.style.borderColor = "#00b4d880";
      ring.style.opacity = "0.4";
    };

    // Apply hover effect to all clickable elements
    const clickables = document.querySelectorAll(
      "a, button, [role='button'], input, textarea, select, label"
    );
    clickables.forEach((el) => {
      el.addEventListener("mouseenter", onMouseEnter);
      el.addEventListener("mouseleave", onMouseLeave);
    });

    window.addEventListener("mousemove", onMouseMove);

    // Cleanup
    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      clickables.forEach((el) => {
        el.removeEventListener("mouseenter", onMouseEnter);
        el.removeEventListener("mouseleave", onMouseLeave);
      });
    };
  }, []);

  return (
    <>
      {/* Small solid dot */}
      <div
        ref={dotRef}
        className="fixed z-[99999] pointer-events-none"
        style={{
          width: "8px",
          height: "8px",
          borderRadius: "50%",
          background: "#00b4d8",
          transform: "translate(-50%, -50%)",
          transition: "transform 0.15s ease",
          boxShadow: "0 0 10px #00b4d8, 0 0 20px #00b4d880",
          top: 0,
          left: 0,
        }}
      />

      {/* Outer ring — follows with lag */}
      <div
        ref={ringRef}
        className="fixed z-[99998] pointer-events-none"
        style={{
          width: "32px",
          height: "32px",
          borderRadius: "50%",
          border: "1.5px solid #00b4d880",
          transform: "translate(-50%, -50%)",
          transition: "transform 0.2s ease, border-color 0.2s ease, opacity 0.2s ease",
          opacity: "0.4",
          top: 0,
          left: 0,
        }}
      />
    </>
  );
}

export default Cursor;