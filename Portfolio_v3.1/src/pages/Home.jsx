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

export default function Home() {
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
      <ParaMarquee />
      <Interest />
      <Stats />
      <Contact />
      <Footer />

      <div className="h-8"></div>
    </section>
  );
}
