import CurrentFocus from "../components/SkillPage/CurrentFocus";
import SkillInfo from "../components/SkillPage/SkillInfo";
import SkillSection from "../components/SkillPage/SkillSection";
import SkillGroups from "../components/SkillPage/SkillsGroups";

export default function Skill() {
  return (
    <section>
      <SkillSection />
      <CurrentFocus />
      <SkillInfo />
      <SkillGroups />
    </section>
  );
}
