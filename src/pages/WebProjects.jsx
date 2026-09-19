import ProjectCard from "../components/web-projects/ProjectCard";
import Results from "../components/Results";
import awardco from "../assets/images/web-projects/awardco.png";
import workstreet from "../assets/images/web-projects/workstreet.png";
import tavaHealth from "../assets/images/web-projects/tava-health.png";
import zenhub from "../assets/images/web-projects/zenhub.png";
import wisefi from "../assets/images/web-projects/wisefi.png";
import sixtySixDegrees from "../assets/images/web-projects/66-degrees.png";

const projects = [
  { name: "Awardco", href: "https://award.co", image: awardco },
  { name: "Workstreet", href: "https://www.workstreet.com", image: workstreet },
  { name: "Tava Health", href: "https://www.tavahealth.com", image: tavaHealth },
  { name: "Zenhub", href: "https://www.zenhub.com", image: zenhub },
  { name: "Wisefi", href: "https://www.wisefi.co", image: wisefi },
  { name: "66 Degrees", href: "https://66degrees.com", image: sixtySixDegrees },
];

export default function WebProjects() {
  return (
    <div>
      <section className="flex flex-col items-stretch px-6 pt-6 pb-16 text-left sm:items-center sm:px-10 sm:text-center lg:px-16 lg:pt-10 lg:pb-24">
        <div className="flex flex-col items-stretch gap-6 sm:items-center lg:max-w-[960px] lg:gap-8">
          <h1 className="font-serif text-[44px] leading-[1.15] tracking-[-0.72px] text-text-heading sm:text-[44px] sm:tracking-[-0.88px] lg:text-[64px] lg:leading-none lg:tracking-[-1.28px]">
            Web designs that balance <br className="hidden xl:inline" />
            <span className="text-burnt-orange">brand</span>,{" "}
            <span className="text-burnt-orange">usability</span>, and{" "}
            <span className="text-burnt-orange">business goals</span>
          </h1>
          <p
            className="font-sans font-light text-base leading-[1.3] text-text-body sm:text-lg lg:w-[800px] lg:text-xl"
            style={{ fontVariationSettings: '"opsz" 14' }}
          >
            A few selection of websites I've worked on over the years.
          </p>
        </div>
      </section>

      <section className="px-6 pb-20 sm:px-10 lg:px-16 lg:pb-28">
        <div className="mx-auto grid max-w-[1216px] grid-cols-1 gap-6 sm:grid-cols-2 lg:gap-8">
          {projects.map((project) => (
            <ProjectCard key={project.name} {...project} />
          ))}
        </div>
      </section>

      <Results />
    </div>
  );
}
