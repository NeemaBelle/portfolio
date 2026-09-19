import { Link } from "react-router-dom";
import { capture } from "../../lib/posthog";
import { projectTitleClass } from "../home/ProjectGrid";

// `--pad` is the heading's padding and the gap between heading and image. The image area itself
// has no padding: images run edge to edge and sit flush with the bottom of the card.

// Sets the card height: heading plus the full image.
function Bleed({ project }) {
  return <img src={project.image} alt={project.alt} className="mt-[var(--pad)] block h-auto w-full" />;
}

// On one column it sits in flow like `Bleed`; side by side it is taken out of flow so the
// neighbouring card sets the height, and it centers in the space under the heading.
function Centered({ project }) {
  return (
    <div className="mt-[var(--pad)] sm:relative sm:flex-1">
      <img
        src={project.image}
        alt={project.alt}
        className="block h-auto w-full sm:absolute sm:top-1/2 sm:left-0 sm:-translate-y-1/2"
      />
    </div>
  );
}

const layouts = { bleed: Bleed, centered: Centered };

export default function OtherProjectCard({ project }) {
  const Media = layouts[project.layout];
  const Wrapper = project.to ? Link : "div";
  return (
    <Wrapper
      to={project.to}
      onClick={project.to ? () => capture("related_project_opened", {
        destination: project.to,
        project_title: project.title,
      }) : undefined}
      className={`flex flex-col overflow-hidden rounded-[32px] pt-[var(--pad)] [--pad:1.5rem] sm:[--pad:2rem] lg:[--pad:2.5rem] ${project.bg}`}
    >
      <h3 className={`px-[var(--pad)] ${projectTitleClass}`}>{project.title}</h3>
      <Media project={project} />
    </Wrapper>
  );
}
