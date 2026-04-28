import Footer from "../components/Footer";
import CurrentFocus from "../components/SkillPage/CurrentFocus";
import SkillInfo from "../components/SkillPage/SkillInfo";
import SkillSection from "../components/SkillPage/SkillSection";
import SkillGroups from "../components/SkillPage/SkillsGroups";
import AestheticClock from "../utilities/AstheticClock";
import SoftCTA from "../utilities/SoftCTA";
import TextMarquee from "../utilities/TextMarquee";
import TimeFormat from "../utilities/TimeFormat";

export default function Skill() {
  return (
    <section>
      <SkillSection />
      <AestheticClock />
      <CurrentFocus />
      <SkillInfo />
      <TextMarquee />
      <SkillGroups />
      <SoftCTA />
      <Footer />
    </section>
  );
}
