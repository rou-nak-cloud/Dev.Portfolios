import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";

import { useEffect, useState } from "react";
import gsap from "gsap";
import Lenis from "@studio-freight/lenis";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Cursor from "./utilities/Cursor";
import Loader from "./utilities/Loader";
import ScrollToTop from "./utilities/ScrollToTop";

gsap.registerPlugin(ScrollTrigger);

export default function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // 1. Force body to have a clean slate
    // document.body.style.backgroundColor = "#f8f8f8";

    const lenis = new Lenis({
      duration: 1.4,
      smoothWheel: true,
      wheelMultiplier: 1,
      lerp: 0.1,
    });

    window.lenis = lenis;
    lenis.stop();

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    lenis.on("scroll", ScrollTrigger.update);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <>
      {/* LOADER */}
      {loading && (
        <Loader
          onComplete={() => {
            setLoading(false);

            // START Lenis after loader
            if (window.lenis) window.lenis.start();
            requestAnimationFrame(() => {
              ScrollTrigger.refresh();
            });
          }}
        />
      )}

      {/* MAIN CONTENT */}
      {!loading && (
        <div id="main-wrapper">
          <ScrollToTop />
          <Cursor />
          <Navbar className="nav" />
          <main>
            <Outlet />
          </main>
        </div>
      )}
    </>
  );
}
