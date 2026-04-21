import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";

import { useEffect, useState } from "react";
import gsap from "gsap";
import Lenis from "@studio-freight/lenis";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Cursor from "./utilities/Cursor";
import Loader from "./utilities/Loader";

gsap.registerPlugin(ScrollTrigger);

export default function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.4,
      smooth: true,
      lerp: 0.08,
    });

    //  ADD THIS LINE
    window.lenis = lenis;
    // stop during loader
    lenis.stop();

    gsap.ticker.add((time) => {
      lenis.raf(time * 1000);
    });
    lenis.on("scroll", ScrollTrigger.update);

    gsap.ticker.lagSmoothing(0);

    return () => {
      gsap.ticker.remove((time) => {
        lenis.raf(time * 1000);
      });
      lenis.destroy();
    };
  }, []);

  return (
    <>
      <Cursor />

      {/* ✅ LOADER */}
      {loading && (
        <Loader
          onComplete={() => {
            setLoading(false);

            // ✅ START Lenis after loader
            if (window.lenis) window.lenis.start();
          }}
        />
      )}

      {/* ✅ MAIN CONTENT */}
      {!loading && (
        <>
          <Navbar className="nav" />
          <main>
            <Outlet />
          </main>
        </>
      )}
    </>
  );
}
