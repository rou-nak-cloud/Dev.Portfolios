import Footer from "../components/Footer";
import CurrentFocus from "../components/SkillPage/CurrentFocus";
import Playground from "../components/SkillPage/PlayGround";
import ProcessSection from "../components/SkillPage/ProcessSection";
import SkillInfo from "../components/SkillPage/SkillInfo";
import SkillSection from "../components/SkillPage/SkillSection";
import SkillGroups from "../components/SkillPage/SkillsGroups";
import AestheticClock from "../utilities/AstheticClock";
import BackToTop from "../utilities/BackToTop";
import GlobeStatus from "../utilities/GlobeStatus";
import SoftCTA from "../utilities/SoftCTA";
import TextMarquee from "../utilities/TextMarquee";
// import ThemeToggle from "../utilities/ThemeToggle";
// import TimeFormat from "../utilities/TimeFormat";

export default function Skill() {
  return (
    <section>
      <SkillSection />
      <GlobeStatus />
      {/* <ThemeToggle /> */}
      <BackToTop />
      <AestheticClock />
      <CurrentFocus />
      <SkillInfo />
      <TextMarquee />
      <SkillGroups />
      <ProcessSection />
      <Playground />
      <SoftCTA />
      <Footer />
    </section>
  );
}
