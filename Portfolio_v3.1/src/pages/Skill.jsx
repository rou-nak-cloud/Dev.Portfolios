import Footer from "../components/Footer";
import CurrentFocus from "../components/SkillPage/CurrentFocus";
import SkillInfo from "../components/SkillPage/SkillInfo";
import SkillSection from "../components/SkillPage/SkillSection";
import SkillGroups from "../components/SkillPage/SkillsGroups";
import AestheticClock from "../utilities/AstheticClock";
import TimeFormat from "../utilities/TimeFormat";

export default function Skill() {
  return (
    <section>
      <SkillSection />
      <AestheticClock />
      <CurrentFocus />
      <SkillInfo />
      <SkillGroups />
      <Footer />
    </section>
  );
}
