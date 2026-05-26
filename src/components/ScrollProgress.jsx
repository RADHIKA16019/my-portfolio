import { useEffect } from "react";

/**
 * ScrollProgress — 3px bar at top of page
 * Fills left to right as user scrolls down
 */
function ScrollProgress() {
  useEffect(() => {
    const bar = document.getElementById("scroll-progress");

    const onScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const percent = (scrollTop / docHeight) * 100;
      if (bar) bar.style.width = `${percent}%`;
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // The actual bar div is in index.html via #scroll-progress
  // This component just adds the scroll listener
  return null;
}

export default ScrollProgress;