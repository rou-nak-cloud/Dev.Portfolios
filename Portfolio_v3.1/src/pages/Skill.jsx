import CurrentFocus from "../components/SkillPage/CurrentFocus";
import SkillInfo from "../components/SkillPage/SkillInfo";
import SkillSection from "../components/SkillPage/SkillSection";

export default function Skill() {
  return (
    <section>
      <SkillSection />
      <CurrentFocus />
      <SkillInfo />
    </section>
  );
}
