import CaseStudyPage, { CaseStudyIntro } from "../components/case-study/CaseStudyPage";
import { Gallery, MediaPanel } from "../components/case-study/Media";
import { Divider } from "../components/case-study/Section";
import { indiefact, tradePlatform } from "../data/otherProjects";
import hero from "../assets/images/modefash/hero.webp";
import feed from "../assets/images/modefash/feed.webp";
import discover from "../assets/images/modefash/discover.webp";
import onboarding from "../assets/images/modefash/onboarding.webp";
import hashtagDesktop from "../assets/images/modefash/hashtag-desktop.webp";
import createPostDesktop from "../assets/images/modefash/create-post-desktop.webp";
import messages from "../assets/images/modefash/messages.webp";
import trending from "../assets/images/modefash/trending.webp";
import searchListings from "../assets/images/modefash/search-listings.webp";
import profileStoreSetup from "../assets/images/modefash/profile-store-setup.webp";
import savedPosts from "../assets/images/modefash/saved-posts.webp";

const meta = [
  { label: "Timeline", items: ["5 months"] },
  { label: "Platform", items: ["Web", "iOS", "Android"] },
  { label: "Team", items: ["1 lead designer (Me)", "2 devs"] },
  { label: "Skills", items: ["Figma", "User Flows", "Design System", "Usability Testing"] },
];

const gallery = [
  [
    { src: feed, alt: "Feed screen showing a post from @saloma" },
    { src: discover, alt: "Discover screen with category chips and top listings" },
  ],
  { src: onboarding, alt: "Onboarding: choosing a role, then picking interests" },
  { src: hashtagDesktop, alt: "#FlexiGown trending hashtag page on desktop" },
  { src: createPostDesktop, alt: "Create Post on desktop, empty and with a photo added" },
  { src: messages, alt: "Messages inbox with an open conversation" },
  [
    { src: trending, alt: "Trending hashtags screen" },
    { src: searchListings, alt: "Search results for jacket listings" },
  ],
  { src: profileStoreSetup, alt: "Profile, Create Post and Store Setup screens" },
  { src: savedPosts, alt: "Saved Posts page in a desktop browser" },
];

export default function Modefash() {
  return (
    <CaseStudyPage
      eyebrow="Modefash"
      title="Blending social feed and storefront into one fashion marketplace"
      otherProjects={[indiefact, tradePlatform]}
    >
      <MediaPanel src={hero} alt="Modefash home feed on a tablet" bg="bg-transparent" className="" />

      <CaseStudyIntro meta={meta}>
        Modefash is a social eCommerce platform that connects fashion retailers with shoppers. As a product
        designer on this project, the task was to facilitate smooth interactions between retailers and shoppers.
      </CaseStudyIntro>

      <Divider />

      <Gallery rows={gallery} />
    </CaseStudyPage>
  );
}
