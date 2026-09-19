import CaseStudyPage, { CaseStudyIntro } from "../components/case-study/CaseStudyPage";
import { Gallery, MediaPanel } from "../components/case-study/Media";
import { Divider } from "../components/case-study/Section";
import { indiefact, tradePlatform } from "../data/otherProjects";
import hero from "../assets/images/dalo/hero.webp";
import facilityList from "../assets/images/dalo/facility-list.webp";
import customerLookup from "../assets/images/dalo/customer-lookup.webp";
import facilityDesktop from "../assets/images/dalo/facility-desktop.webp";
import dropOffMobile from "../assets/images/dalo/drop-off-mobile.webp";
import registerWasteDesktop from "../assets/images/dalo/register-waste-desktop.webp";

const meta = [
  { label: "Timeline", items: ["1 year"] },
  { label: "Platform", items: ["Web", "Android"] },
  { label: "Team", items: ["1 lead designer (Me)", "3 designers", "4 devs", "2 PMs"] },
  { label: "Skills", items: ["Figma", "User Flows", "Design System", "Usability Testing"] },
];

const gallery = [
  [
    { src: facilityList, alt: "Facility List screen on mobile" },
    { src: customerLookup, alt: "Customer Look-up search form on mobile" },
  ],
  { src: facilityDesktop, alt: "Facility list and customer action screens on desktop" },
  { src: dropOffMobile, alt: "Drop-off, Register Waste and Vehicle Drop-off Details screens on mobile" },
  { src: registerWasteDesktop, alt: "Drop-off form and Register Waste screens on desktop" },
];

export default function Dalo() {
  return (
    <CaseStudyPage
      eyebrow="DalO Systems"
      title="Turning scattered waste operations into one software solution"
      otherProjects={[indiefact, tradePlatform]}
    >
      <MediaPanel src={hero} alt="DalO customer detail screen on a desktop browser" bg="bg-transparent" className="" />

      <CaseStudyIntro meta={meta}>
        DalO System specializes in offering software solutions tailored for waste micro, small, and medium
        enterprises (MSMEs). The objective was to provide a comprehensive solution for efficient waste
        management, scheduling, and daily operations.
      </CaseStudyIntro>

      <Divider />

      <Gallery rows={gallery} />
    </CaseStudyPage>
  );
}
