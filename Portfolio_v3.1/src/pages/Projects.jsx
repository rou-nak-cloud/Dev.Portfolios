// import DetailedProjects from "../components/ProjectPage/DetailedProjects";
import ProjectSection from "../components/ProjectPage/ProjectSection";
import ThemeToggle from "../utilities/ThemeToggle";
import BackToTop from "../utilities/BackToTop";
import { GithubActivity } from "../components/ProjectPage/GithubActivity";

export default function Projects() {
  return (
    <section>
      <ProjectSection />
      <ThemeToggle />
      <BackToTop />
      <GithubActivity />
    </section>
  );
}
