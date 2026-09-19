import Section, { Divider, Eyebrow, Strong } from "../components/case-study/Section";
import { CardGrid, InfoCard, StatCard } from "../components/case-study/Cards";
import { FigureRow, ImagePair, MediaPanel } from "../components/case-study/Media";
import CaseStudyPage, { CaseStudyIntro } from "../components/case-study/CaseStudyPage";
import { groceryApp, tradePlatform } from "../data/otherProjects";
import socialMockup1 from "../assets/images/home/social-mockup-1.png";
import socialMockup2 from "../assets/images/home/social-mockup-2.png";
import socialMockup3 from "../assets/images/home/social-mockup-3.png";
import socialMockup4 from "../assets/images/home/social-mockup-4.png";
import problemScreens from "../assets/images/indiefact/problem-screens.webp";
import iconGoal1 from "../assets/images/indiefact/icon-goal-1.svg";
import iconGoal2 from "../assets/images/indiefact/icon-goal-2.svg";
import iconGoal3 from "../assets/images/indiefact/icon-goal-3.svg";
import affinityMapping from "../assets/images/indiefact/affinity-mapping.png";
import informationArchitecture from "../assets/images/indiefact/information-architecture.webp";
import communitiesV1 from "../assets/images/indiefact/communities-v1.webp";
import communitiesV2 from "../assets/images/indiefact/communities-v2.png";
import communitiesV3 from "../assets/images/indiefact/communities-v3.png";
import createPostV1 from "../assets/images/indiefact/create-post-v1.png";
import createPostV2 from "../assets/images/indiefact/create-post-v2.png";
import createPostV3 from "../assets/images/indiefact/create-post-v3.png";
import iconTesting from "../assets/images/indiefact/icon-testing.svg";
import userTestingPhoto from "../assets/images/indiefact/user-testing-photo.webp";
import styleGuide from "../assets/images/indiefact/style-guide.webp";
import homepageBeforeAfter from "../assets/images/indiefact/homepage-before-after.webp";
import searchBeforeAfter from "../assets/images/indiefact/search-before-after.webp";
import communitiesBeforeAfter from "../assets/images/indiefact/communities-before-after.webp";
import createPostBeforeAfter from "../assets/images/indiefact/create-post-before-after.webp";
import onboarding from "../assets/images/indiefact/onboarding.webp";

const meta = [
  { label: "Timeline", items: ["3 months"] },
  { label: "Platform", items: ["iOS", "Android"] },
  { label: "Team", items: ["1 lead designer (Me)", "2 designer", "3 devs", "1 PM"] },
  { label: "Skills", items: ["Figma", "Design System", "Usability Testing"] },
];

const accomplishments = [
  {
    title: "1. Design",
    body: "Owned the redesign of the app's highest-traffic features and built the design system the product never had.",
  },
  {
    title: "2. Research",
    body: "Led moderated usability testing with 15+ participants and used the findings to cut, merge, and reprioritize features.",
  },
  {
    title: "3. Impact",
    body: "Drove measurable gains in engagement and retention within months of launch (56% more time in-app, 62% more post engagement).",
  },
];

const goals = [
  {
    icon: iconGoal1,
    title: "Sharpen the features that matter.",
    body: "Redesign the screens users spend the most time on to drive retention, and cut the features with poor adoption instead of maintaining dead weight.",
  },
  {
    icon: iconGoal2,
    title: "Make it feel personal for the users.",
    body: "Raise engagement by tailoring the experience to each user, surfacing content based on past behavior and interests rather than a one-size-fits-all feed.",
  },
  {
    icon: iconGoal3,
    title: "Build a consistent reusable foundation",
    body: "Create a design system so the experience holds together and stays maintainable after launch.",
  },
];

const stats = [
  { value: "56%", label: "more time spent in the app" },
  { value: "62%", label: "increase in engagement with posts" },
  { value: "+44", label: "communities created" },
  { value: "+19", label: "content creators onboarded" },
];

const personas = [
  {
    title: "Active user",
    body: "Stays on top of the news, visits multiple news sites a day, shares information within their social circles. Easily onboarded. Wants accurate information on the go and a way to verify whether something is true.",
    setback: "The app felt like a news site, not a place to have a conversation.",
  },
  {
    title: "Passive user",
    body: "Doesn't seek information out but will consume and engage with it if it crosses their path. Wants relevant content without much effort.",
    setback: "The feed wasn't tailored to their interests, so it rarely gave them a reason to stay.",
  },
];

const communityIterations = [
  {
    src: communitiesV1,
    alt: "Communities screen, first iteration with large cover images",
    caption:
      "Large cover images pushed most communities below the fold. Users could only see two at a time and had to scroll hard to browse.",
  },
  {
    src: communitiesV2,
    alt: "Communities screen, second iteration with a compact list",
    caption:
      "Switching to a compact list put more communities on screen at once, but the “+ Create Community” bar didn’t stand out and got overlooked.",
  },
  {
    src: communitiesV3,
    alt: "Communities screen, final iteration with a create-community card",
    caption:
      "Kept the density of the list and turned the ignored “create” button into a card, so browsing stayed fast and creating a community became an obvious next step.",
  },
];

const createPostIterations = [
  {
    src: createPostV1,
    alt: "Create post screen, first iteration with tags in a horizontal scroll",
    caption:
      "Tags sat in a horizontal scroll. Users saw a few options at a time and assumed that was the full set, so most posts got under-tagged.",
  },
  {
    src: createPostV2,
    alt: "Create post screen, second iteration with a brand-colored selected tag",
    caption:
      "The selected-tag state used the primary brand color, the same color as the Post button. Two things fought for “this is the main action,” and the actual primary action lost.",
  },
  {
    src: createPostV3,
    alt: "Create post screen, final iteration with every tag visible",
    caption:
      "All categories visible on open, and a selected state that no longer competes with Post. Tagging got more complete and the primary action stayed unambiguous.",
  },
];

const finalScreens = [
  {
    title: "Style Guide",
    body: "I built the design system the app never had, in light and dark mode. It covers typography, color, components, icons, and the recurring elements used across the app. Beyond consistency, it let me ship screens faster and gave the team something maintainable to build on after I left.",
    src: styleGuide,
    alt: "Indiefact style guide in light and dark mode",
  },
  {
    title: "Improved Homepage",
    body: "I reprioritized the feed around the information itself, not the imagery. The leaderboard now stands out instead of blending in. I reorganized the post card around what matters most, prioritizing the date and the text, since the text is the actual information being shared, over large images. The feed is personalized to each user's interests, and the reaction icons are clearer and more interactive.",
    src: homepageBeforeAfter,
    alt: "Homepage before and after the redesign, with annotations",
  },
  {
    title: "Combining Search and Trending",
    body: "I merged Search and Trending so an idle screen earned its place. The search page did nothing but search. Folding trending content into it gave users a reason to open the tab even when they weren't looking for something specific.",
    src: searchBeforeAfter,
    alt: "Search screen before and after merging in trending posts",
  },
  {
    title: "Making Communities More Discoverable",
    body: "I made communities easier to find and faster to browse. I changed “create a community” from a plain button into a card, making it far more likely people would notice and tap it. I also shrank the community cards so users could scan more communities, faster.",
    src: communitiesBeforeAfter,
    alt: "Communities screen before and after the redesign",
  },
  {
    title: "Improved Create Post Flow",
    body: "I surfaced all tags at once to kill a confusing horizontal scroll. Tags used to sit in a horizontal scroll that users mistook for an endless list. Showing every option up front made the flow faster and clearer.",
    src: createPostBeforeAfter,
    alt: "Create post flow before and after the redesign",
  },
  {
    title: "Improved Onboarding",
    body: "I redesigned onboarding to land users before asking for commitment. The new flow walks people through the app's value clearly enough that they understand why to stay before being asked to create an account.",
    src: onboarding,
    alt: "Four redesigned onboarding screens",
  },
];

const learnings = [
  {
    title: "Aligning design decisions with business priorities",
    body: "Every cut and redesign traced back to retention, not preference. Framing the work that way is what got buy-in.",
  },
  {
    title: "Designing with developers, not just handing off to them",
    body: "Understanding each teammate's strengths and the real timeline is what let this ship in three months.",
  },
  {
    title: "Treating user feedback as a design input, not a formality.",
    body: "The testing sessions changed real decisions, and the product was better for it.",
  },
];

const problemBody = (
  <>
    Three issues stood out: <Strong>a cluttered interface</Strong>, <Strong>low engagement</Strong>, and{" "}
    <Strong>design patterns</Strong> that changed from screen to screen. The real risk underneath them was
    retention. A fact-sharing platform lives on people coming back, and nothing about the app gave them a
    reason to.
  </>
);

export default function Indiefact() {
  return (
    <CaseStudyPage
      eyebrow="Indiefact"
      title="From cluttered news feed to a personalized social platform people stay on"
      otherProjects={[tradePlatform, groceryApp]}
    >
      <ImagePair
        images={[
          { src: socialMockup1, alt: "Leaderboard screen in the Indiefact app" },
          { src: socialMockup2, alt: "Profile card and spirit animal progress in the Indiefact app" },
        ]}
      />

      <CaseStudyIntro meta={meta}>
        Indiefact is a microblogging platform built to give people valuable, verifiable information. It had
        shipped without a designer, so I was brought in to rethink the experience end to end and rebuild the
        interface around what the company was trying to become and what users actually needed.
      </CaseStudyIntro>

      <Divider />

      <div className="flex flex-col gap-3">
        <Eyebrow>What I did accomplish</Eyebrow>
        <CardGrid>
          {accomplishments.map((item) => (
            <InfoCard key={item.title} title={item.title}>
              {item.body}
            </InfoCard>
          ))}
        </CardGrid>
      </div>

      <ImagePair
        images={[
          { src: socialMockup3, alt: "Communities list in the Indiefact app" },
          { src: socialMockup4, alt: "Person holding a phone showing the Indiefact feed" },
        ]}
      />

      <Divider />

      <div className="flex flex-col gap-16 lg:gap-20">
        <Section
          eyebrow="Problem"
          title="Building without a designer left the app cluttered, inconsistent, and hard to stay on"
          body={problemBody}
          lead
        >
          <figure className="flex flex-col gap-1.5">
            <MediaPanel
              src={problemScreens}
              alt="The original Indiefact home, post and profile screens"
              className="rounded-[32px]"
            />
            <figcaption>
              <Eyebrow color="text-text-body" className="text-center">
                Old design
              </Eyebrow>
            </figcaption>
          </figure>
        </Section>

        <Section eyebrow="Goals" title="I set three goals, each tied to keeping users around">
          <CardGrid>
            {goals.map((goal) => (
              <InfoCard key={goal.title} title={goal.title} icon={goal.icon}>
                {goal.body}
              </InfoCard>
            ))}
          </CardGrid>
        </Section>

        <Section
          eyebrow="Impact"
          title="The redesign moved the metrics that mattered"
          body="Measured with Google analytics and Mixpanel months after launch to capture real behavior change, not a launch-week spike:"
          lead
        >
          <CardGrid className="grid-cols-2 lg:grid-cols-4">
            {stats.map((stat) => (
              <StatCard key={stat.value} {...stat} />
            ))}
          </CardGrid>
        </Section>

        <Section
          eyebrow="Speaking to users"
          title="I narrowed a broad audience into two users whose needs pulled in opposite directions. That tension shaped what I prioritized."
        >
          <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
            <div className="flex flex-col gap-3">
              {personas.map((persona) => (
                <InfoCard key={persona.title} title={persona.title}>
                  {persona.body}
                  <br />
                  <br />
                  <span className="font-medium">Setback:</span> {persona.setback}
                </InfoCard>
              ))}
            </div>
            {/* The persona cards can run taller than the square image; the panel matches the
                image's own blue so the extra height reads as part of it. */}
            <MediaPanel
              src={affinityMapping}
              alt="Affinity map grouping user research notes"
              bg="bg-sky-tint"
              className="flex items-center rounded-xl"
            />
          </div>
        </Section>

        <Section
          eyebrow="Information architecture"
          title="I mapped the full IA to decide what to keep, merge, or cut before touching a screen"
          body="Most user flows stayed intact; only a few changed. Rather than reinvent the navigation, I diagrammed every feature and how they depended on one another. That holistic view is what let me make deliberate cuts instead of redesigning blind."
        >
          <MediaPanel src={informationArchitecture} alt="Indiefact information architecture diagram" />
        </Section>

        <Section
          eyebrow="Early designs"
          title="Communities"
          body={'I traded image-heavy cards for a scannable list, then made "create community" impossible to miss'}
        >
          <FigureRow figures={communityIterations} versioned />
        </Section>

        <Section
          title="Create Post"
          body="I surfaced every tag at once and fixed a selected state that was competing with the primary action"
        >
          <FigureRow figures={createPostIterations} versioned />
        </Section>

        <Section
          eyebrow="User testing"
          title="Moderated testing with 15+ users caught problems I'd otherwise have shipped"
          body="I ran the sessions remotely over Zoom. Users worked through set tasks while thinking aloud, which showed me where the designs held up and where they broke down. I iterated on those findings before finalizing."
        >
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:gap-5">
            <div className="flex flex-col justify-between gap-10 rounded-xl bg-surface-muted p-6 lg:p-10">
              <img src={iconTesting} alt="" className="size-[60px] rounded-full" />
              <p className="font-sans font-light text-lg leading-[1.3] text-black lg:text-2xl">
                In testing, users consistently under-tagged their posts, assuming the few visible tags in the
                horizontal scroll were the complete set. That drove the change to surface every category at
                once.
              </p>
            </div>
            <MediaPanel src={userTestingPhoto} alt="A participant waving during a remote testing session" />
          </div>
        </Section>

        <Section
          eyebrow="Final designs"
          title="After a final round informed by testing, the designs were locked. The finalized screens are below."
        />

        {finalScreens.map((screen) => (
          <Section key={screen.title} title={screen.title} body={screen.body}>
            <MediaPanel src={screen.src} alt={screen.alt} />
          </Section>
        ))}

        <Section
          eyebrow="Learnings"
          title="This project sharpened how I balance user needs, business goals, and real constraints"
        >
          <CardGrid>
            {learnings.map((item) => (
              <InfoCard key={item.title} title={item.title}>
                {item.body}
              </InfoCard>
            ))}
          </CardGrid>
        </Section>
      </div>
    </CaseStudyPage>
  );
}
