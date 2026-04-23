import Hero from "../components/Hero";

import LearningPath from "../components/LearningPath";
import Education from "../components/Education";
import Skills from "../components/Skills";

import Marquee from "../utilities/Marquee";
import BackToTop from "../utilities/BackToTop";
import Project from "../components/Project";
import Interest from "../components/Interest";
import Stats from "../components/Stats";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import TextMarquee from "../utilities/TextMarquee";
import ParaMarquee from "../utilities/ParaMarquee";

import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function Home() {
  const location = useLocation();
  useEffect(() => {
    if (location.hash === "#contact") {
      const el = document.querySelector("#contact");

      if (el && window.lenis) {
        setTimeout(() => {
          window.lenis.scrollTo(el, {
            duration: 1.6,
            easing: (t) => 1 - Math.pow(1 - t, 6),
          });
        }, 100); // small delay = DOM ready
      }
    }
  }, [location]);

  return (
    <section>
      <Hero />
      <Marquee />
      <LearningPath />
      <Education />
      <Skills />
      <TextMarquee />
      <BackToTop />
      <Project />
      <ParaMarquee
        lines={["Building scalable interfaces.", "Design meets performance."]}
      />
      <ParaMarquee speedClass="marquee-text" />
      <Interest />
      <Stats />
      <Contact />
      <Footer />

      <div className="h-8"></div>
    </section>
  );
}
