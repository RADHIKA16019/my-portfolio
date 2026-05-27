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
    const isTouch = window.matchMedia("(pointer: coarse)").matches;

    const dot = dotRef.current;
    const ring = ringRef.current;

    let mouseX = 0;
    let mouseY = 0;
    let ringX = 0;
    let ringY = 0;

    // Move dot instantly with mouse or touch
    const onMouseMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      dot.style.left = `${mouseX}px`;
      dot.style.top = `${mouseY}px`;
    };

    const onTouchMove = (e) => {
      if (!e.touches || e.touches.length === 0) return;
      const t = e.touches[0];
      mouseX = t.clientX;
      mouseY = t.clientY;
      dot.style.left = `${mouseX}px`;
      dot.style.top = `${mouseY}px`;
      // also update ring target so it follows
      ring.style.left = `${mouseX}px`;
      ring.style.top = `${mouseY}px`;
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

    if (isTouch) {
      // start hidden on touch devices until interaction
      dot.style.display = "none";
      ring.style.display = "none";
      const onTouchStart = (e) => {
        dot.style.display = "block";
        ring.style.display = "block";
        onTouchMove(e);
        // small pop effect
        dot.style.transform = "translate(-50%, -50%) scale(1.6)";
        setTimeout(() => {
          dot.style.transform = "translate(-50%, -50%) scale(1)";
        }, 180);
      };
      const onTouchEnd = () => {
        // hide after short delay so finger lift doesn't show lingering dot
        setTimeout(() => {
          dot.style.display = "none";
          ring.style.display = "none";
        }, 120);
      };

      window.addEventListener("touchstart", onTouchStart, { passive: true });
      window.addEventListener("touchmove", onTouchMove, { passive: true });
      window.addEventListener("touchend", onTouchEnd, { passive: true });
    } else {
      window.addEventListener("mousemove", onMouseMove);
    }

    // Cleanup
    return () => {
      if (isTouch) {
        window.removeEventListener("touchstart", onTouchMove);
        window.removeEventListener("touchmove", onTouchMove);
        window.removeEventListener("touchend", () => {});
      } else {
        window.removeEventListener("mousemove", onMouseMove);
      }
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