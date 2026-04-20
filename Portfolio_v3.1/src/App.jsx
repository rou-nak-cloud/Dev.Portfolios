import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";

import { useEffect } from "react";
import gsap from "gsap";
import Lenis from "@studio-freight/lenis";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Cursor from "./utilities/Cursor";

gsap.registerPlugin(ScrollTrigger);

export default function App() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.4,
      smooth: true,
      lerp: 0.08,
    });

    //  ADD THIS LINE
    window.lenis = lenis;

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
      {/* {loading && <Loader onComplete={() => setLoading(false)} />} */}

      <Cursor />
      <Navbar className="nav" />

      <main>
        <Outlet />
      </main>
    </>
  );
}
