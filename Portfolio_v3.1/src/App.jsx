import Education from "./components/Education";
import Hero from "./components/Hero";
import LearningJourney from "./components/LearningPath";
import Navbar from "./components/Navbar";
import Skills from "./components/Skills";
import BackToTop from "./utilities/BackToTop";
import Marquee from "./utilities/Marquee";

export default function App() {
  return (
    <>
      <Navbar />
      <section>
        <Hero />
        <Marquee />
        <LearningJourney />
        <Education />
        <Skills />
        <BackToTop />

        <div className="h-48 "></div>
      </section>
    </>
  );
}
