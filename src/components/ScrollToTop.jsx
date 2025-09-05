// src/components/ScrollToTop.jsx
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop({ selector = "#scroll-area" }) {
  const { pathname } = useLocation();

  useEffect(() => {
    const el = document.querySelector(selector);
    if (el) {
      el.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      // Fallback if no container found
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [pathname, selector]);

  return null;
}
