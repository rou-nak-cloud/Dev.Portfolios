import Education from "./components/Education";
import Hero from "./components/Hero";
import LearningJourney from "./components/LearningPath";
import Navbar from "./components/Navbar";

export default function App() {
  return (
    <>
      <Navbar />
      <section>
        <Hero />
        <LearningJourney />
        <Education />
      </section>
    </>
  );
}
