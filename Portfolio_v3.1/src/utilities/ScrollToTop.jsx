import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import gsap from "gsap";

export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    //  Reset Lenis immediately if it exists
    if (window.lenis) {
      window.lenis.scrollTo(0, { immediate: true });
    }

    // Reset standard window scroll (fallback)
    window.scrollTo(0, 0);

    // Tell GSAP ScrollTrigger to recalculate everything for the new page
    requestAnimationFrame(() => {
      // Small delay to ensure DOM is rendered
      gsap.to(window, { duration: 0, scrollTo: 0 });
      import("gsap/ScrollTrigger").then(({ ScrollTrigger }) => {
        ScrollTrigger.refresh();
      });
    });
  }, [pathname]); // Fires every time the URL changes

  return null;
}
