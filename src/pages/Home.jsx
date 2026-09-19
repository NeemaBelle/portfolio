import Hero from "../components/home/Hero";
import FeaturedProject from "../components/home/FeaturedProject";
import ProjectGrid from "../components/home/ProjectGrid";
import Results from "../components/Results";

export default function Home() {
  return (
    <div>
      <Hero />
      <div id="case-studies">
        <FeaturedProject />
        <ProjectGrid />
      </div>
      <Results />
    </div>
  );
}
