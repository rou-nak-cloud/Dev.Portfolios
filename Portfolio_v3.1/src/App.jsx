import Education from "./components/Education";
import Hero from "./components/Hero";
import LearningJourney from "./components/LearningPath";
import Navbar from "./components/Navbar";
import Skills from "./components/Skills";
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

        <div className="h-48 "></div>
      </section>
    </>
  );
}
