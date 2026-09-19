import { capture } from "../../lib/posthog";
import ExternalLink from "../icons/ExternalLink";

export default function ProjectCard({ name, href, image }) {
  return (
    <div className="rounded-[28px] bg-[#f7f3e2] p-[26px] sm:p-7 sm:px-6 xl:px-7">
      {/* The screenshots carry their own browser chrome, cropped tight to the window edge;
          the radius clips the window's rounded corners so no stray shadow shows. */}
      <img
        src={image}
        alt={`${name} website`}
        loading="lazy"
        className="block w-full rounded-[6px]"
      />

      <div className="mt-5 flex items-center justify-between gap-3">
        <span className="font-sans font-normal text-[20px] leading-none tracking-normal text-text-heading">
          {name}
        </span>
        <a
          href={href}
          target="_blank"
          rel="noreferrer"
          onClick={() => capture("external_project_opened", { project_name: name })}
          className="inline-flex shrink-0 items-center gap-2 font-sans text-base font-light leading-none text-text-heading transition-colors hover:text-burnt-orange lg:text-[18px]"
        >
          Visit website
          <ExternalLink className="size-4" />
        </a>
      </div>
    </div>
  );
}
