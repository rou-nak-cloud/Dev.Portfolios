import Hero from "../components/Hero";

import LearningPath from "../components/LearningPath";
import Education from "../components/Education";
import Skills from "../components/Skills";

import Marquee from "../utilities/Marquee";
import BackToTop from "../utilities/BackToTop";

export default function Home() {
  return (
    <section>
      <Hero />
      <Marquee />
      <LearningPath />
      <Education />
      <Skills />
      <BackToTop />

      <div className="h-48"></div>
    </section>
  );
}
