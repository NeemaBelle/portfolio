import { Link } from "react-router-dom";
import { capture } from "../../lib/posthog";
import wasteOps from "../../assets/images/home/project-waste-ops.png";
import ecommerce from "../../assets/images/home/project-ecommerce.png";
import fashion from "../../assets/images/home/project-fashion.png";
import webDesign from "../../assets/images/home/project-web-design.png";

const homeProjects = [
  {
    title: "Turning scattered waste operations into one software solution",
    to: "/case-studies/dalo",
    image: wasteOps,
    alt: "Waste operations management software dashboard on a laptop",
  },
  {
    title: "Designing an e-commerce app that makes a huge catalog feel personal",
    to: "/case-studies/kara",
    image: ecommerce,
    alt: "E-commerce app homepage on a phone",
  },
  {
    title: "Blending social feed and storefront into one fashion marketplace",
    to: "/case-studies/modefash",
    image: fashion,
    alt: "Fashion marketplace social feed on a tablet",
  },
  {
    title: "Web designs that balance brand, usability, and business goals",
    to: "/web-projects",
    image: webDesign,
    alt: "Marketing website homepage mockups",
    contain: true,
  },
];

export const projectTitleClass =
  "font-sans font-light text-[20px] leading-[100%] text-text-heading sm:text-[18px] lg:text-[22px] xl:text-[24px]";

// Tiles with a `to` link to that project's case study. `contain` scales the image down to fit the
// fixed-height image area instead of cropping its top, keeping it flush with the card's bottom.
function ProjectTile({ project, index }) {
  const Wrapper = project.to ? Link : "div";
  return (
    <Wrapper
      to={project.to}
      onClick={project.to ? () => capture("project_opened", {
        destination: project.to,
        project_title: project.title,
      }) : undefined}
      className="flex flex-col gap-6 overflow-hidden rounded-3xl bg-[#f7f3e2] pt-10 sm:gap-8 xl:gap-[48px]"
    >
      <h3 className={`px-10 ${projectTitleClass}`}>{project.title}</h3>
      <div
        className={`flex justify-center overflow-hidden xl:h-[401px] ${index === 0 ? "items-center" : "items-end"}`}
      >
        <img
          src={project.image}
          alt={project.alt}
          className={`h-auto w-full ${project.contain ? "xl:h-full xl:w-auto xl:max-w-full xl:object-contain xl:object-bottom" : "object-cover"}`}
        />
      </div>
    </Wrapper>
  );
}

// Other pages can pass their own project list and a `Card` component to render each entry;
// the homepage uses the defaults.
export default function ProjectGrid({
  projects = homeProjects,
  Card = ProjectTile,
  className = "pb-20 sm:pb-30 xl:pb-32",
  gridClassName = "gap-6 lg:gap-8",
}) {
  return (
    <section className={`px-6 sm:px-10 lg:px-16 ${className}`}>
      <h2 className="mb-6 text-center font-serif font-normal text-[32px] text-text-heading sm:mb-10 sm:text-[34px] lg:text-[42px] lg:tracking-[-0.8px] xl:mb-16 xl:text-[56px] xl:tracking-[-1.12px]">
        Other Projects
      </h2>
      <div className={`grid grid-cols-1 sm:grid-cols-2 ${gridClassName}`}>
        {projects.map((project, index) => (
          <Card key={project.title} project={project} index={index} />
        ))}
      </div>
    </section>
  );
}
