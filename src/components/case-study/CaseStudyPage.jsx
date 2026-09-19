import ProjectGrid from "../home/ProjectGrid";
import OtherProjectCard from "./OtherProjectCard";
import ProjectMeta from "./ProjectMeta";
import { Eyebrow, SectionBody } from "./Section";

// Intro paragraph followed by the timeline / platform / team / skills tags.
export function CaseStudyIntro({ children, meta }) {
  return (
    <div className="flex flex-col gap-10 lg:gap-16">
      <div className="flex flex-col gap-2.5">
        <Eyebrow>Intro</Eyebrow>
        <SectionBody lead>{children}</SectionBody>
      </div>
      <ProjectMeta groups={meta} />
    </div>
  );
}

// Shared shell for every case study: centered project label and title, the page's own
// sections, then the "Other Projects" cards.
export default function CaseStudyPage({ eyebrow, title, otherProjects, children }) {
  return (
    <div>
      <article className="px-6 pt-6 pb-16 sm:px-10 sm:pt-10 lg:px-16 lg:pt-14 lg:pb-20">
        <div className="mx-auto flex max-w-[960px] flex-col gap-12 lg:gap-16">
          <header className="flex flex-col items-center gap-4 text-center">
            <p className="font-sans font-normal text-base leading-[1.3] text-burnt-orange uppercase lg:text-lg">
              {eyebrow}
            </p>
            <h1 className="font-serif text-[32px] leading-[1.1] tracking-[-0.02em] text-text-heading sm:text-[40px] lg:text-[48px] lg:leading-none">
              {title}
            </h1>
          </header>
          {children}
        </div>
      </article>

      <div className="mx-auto max-w-[1088px]">
        <ProjectGrid
          projects={otherProjects}
          Card={OtherProjectCard}
          gridClassName="gap-4 lg:gap-6"
          className="pt-16 pb-20 lg:pt-20 lg:pb-[120px]"
        />
      </div>
    </div>
  );
}
