import Rocket from "./icons/Rocket";
import Sprout from "./icons/Sprout";
import Quote from "./icons/Quote";
import SkillPills from "./SkillPills";
import {
  PrototypingIcon,
  ABTestingIcon,
  UserResearchIcon,
  VisualDesignIcon,
  DesignSystemsIcon,
  UsabilityTestingIcon,
  UserFlowsIcon,
  AIAutomationIcon,
} from "./icons/SkillIcons";

const skills = [
  { label: "Prototyping", Icon: PrototypingIcon },
  { label: "A/B testing", Icon: ABTestingIcon },
  { label: "User research", Icon: UserResearchIcon },
  { label: "Visual design", Icon: VisualDesignIcon },
  { label: "Design systems", Icon: DesignSystemsIcon },
  { label: "Usability testing", Icon: UsabilityTestingIcon },
  { label: "User flows", Icon: UserFlowsIcon },
  { label: "AI automation", Icon: AIAutomationIcon },
];

function StatTile({ value, label, Icon, className = "" }) {
  return (
    <div
      className={`flex min-h-0 flex-1 flex-row items-center justify-between gap-6 rounded-3xl p-8 text-white sm:flex-col sm:items-stretch sm:gap-10 lg:min-h-0 lg:flex-1 lg:flex-row lg:items-center lg:gap-10 lg:p-10 xl:min-h-[380px] xl:flex-col xl:items-stretch ${className}`}
    >
      <div>
        <div className="font-sans font-light text-[40px] leading-none sm:text-5xl lg:text-[60px]">{value}</div>
        <p className="mt-2 font-sans font-light text-sm leading-[130%] text-white sm:text-base lg:text-[20px]">{label}</p>
      </div>
      <Icon className="max-h-full w-auto max-w-[35%] shrink-0 sm:max-h-none sm:max-w-none lg:max-h-full xl:max-h-none" />
    </div>
  );
}

export default function Results() {
  return (
    <section className="px-6 pb-20 sm:px-10 lg:px-16 lg:pb-32">
      <h2 className="mb-6 text-center font-serif font-normal text-[32px] text-text-heading sm:mb-10 sm:text-[34px] lg:text-[42px] lg:tracking-[-0.8px] xl:mb-16 xl:text-[56px] xl:tracking-[-1.12px]">
        Results and testimonials
      </h2>

      <div className="grid auto-rows-fr grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
        {/* Quote 1 */}
        <div className="flex flex-col gap-6 rounded-3xl bg-[#f5f0cc] p-8 sm:col-span-2 lg:col-span-2 lg:p-10 xl:min-h-[380px]">
          <Quote className="size-[60px] text-dark-green" />
          <p className="font-sans font-light text-base leading-[130%] text-text-body sm:text-base lg:text-[20px]">
            Neema brought a unique combination of creativity and strategic thinking to the team
            which allowed her to design products that met the needs of the users and aligned with
            our business goals.
            <br />
            <br />
            She led the design of multiple products from research to launch and her attention to
            detail was an asset to our startup.{" "}
            <span className="font-medium text-text-heading">
              I recommend Neema as an asset product designer for your team.
            </span>
          </p>
          <p className="font-serif font-normal text-base text-text-body sm:text-sm lg:text-[22px] lg:leading-[1.3]">- Ebi Jombai, Project Manager</p>
        </div>

        {/* Stats */}
        <div className="relative block sm:contents lg:block lg:col-span-2 xl:contents">
          <div className="absolute inset-0 flex flex-col gap-6 sm:contents lg:flex lg:gap-8 xl:contents">
            <StatTile value="6" label="years shipping products" Icon={Rocket} className="bg-burnt-orange" />
            <StatTile
              value="12+"
              label="products & websites shipped 0→1"
              Icon={Sprout}
              className="bg-dark-green"
            />
          </div>
        </div>

        {/* Skill pills */}
        <SkillPills skills={skills} />

        {/* Quote 2 */}
        <div className="flex flex-col justify-between gap-6 rounded-3xl bg-[#f5f0cc] p-8 sm:col-span-2 lg:col-span-2 lg:min-h-[380px] lg:p-10">
          <Quote className="size-[60px] text-dark-green" />
          <p className="font-sans font-light text-base leading-[130%] text-text-body sm:text-base lg:text-[20px]">
            <span className="font-medium text-text-heading">
              Neema is a highly qualified and proficient product designer.
            </span>{" "}
            She makes wonderful considerations to our team by being mindful of the product being
            built and thinking about how the product will act in the customers hands.
          </p>
          <p className="font-serif font-normal text-base text-text-body sm:text-sm lg:text-[22px] lg:leading-[1.3]">- Cuthbert Ayo Onikute, Business Developer</p>
        </div>
      </div>
    </section>
  );
}
