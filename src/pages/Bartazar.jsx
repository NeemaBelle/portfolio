import Section, { Divider, Eyebrow, SectionBody, Strong } from "../components/case-study/Section";
import { CardGrid, InfoCard } from "../components/case-study/Cards";
import { ImagePair, MediaPanel, VideoPanel } from "../components/case-study/Media";
import ProjectMeta from "../components/case-study/ProjectMeta";
import ProjectGrid from "../components/home/ProjectGrid";
import OtherProjectCard from "../components/case-study/OtherProjectCard";
import { indiefact, groceryApp } from "../data/otherProjects";
import heroDesktop from "../assets/images/bartazar/hero-desktop.webp";
import heroDesktopStacked from "../assets/images/bartazar/hero-desktop-stacked.webp";
import heroPhone from "../assets/images/bartazar/hero-phone.webp";
import heroPhoneStacked from "../assets/images/bartazar/hero-phone-stacked.webp";
import swapChatScreens from "../assets/images/bartazar/swap-chat-screens.webp";
import swapChatScreensStacked from "../assets/images/bartazar/swap-chat-screens-stacked.webp";
import wishlist from "../assets/images/bartazar/wishlist.webp";
import wishlistStacked from "../assets/images/bartazar/wishlist-stacked.webp";
import userFlow from "../assets/images/bartazar/user-flow.webp";
import informationArchitecture from "../assets/images/bartazar/information-architecture.webp";
import wireframes from "../assets/images/bartazar/wireframes.webp";
import selectPlatform from "../assets/images/bartazar/select-platform.webp";
import requestItem from "../assets/images/bartazar/request-item.webp";
import cancelTrade from "../assets/images/bartazar/cancel-trade.webp";
import personalizedHomepage from "../assets/images/bartazar/personalized-homepage.webp";
import messaging from "../assets/images/bartazar/messaging.webp";
import onboardingVideo from "../assets/videos/bartazar/onboarding.mp4";
import initiateTradeVideo from "../assets/videos/bartazar/initiate-trade.mp4";
import acceptingTradeVideo from "../assets/videos/bartazar/accepting-trade.mp4";
import addingItemsVideo from "../assets/videos/bartazar/adding-items.mp4";
import iconGoalListing from "../assets/images/bartazar/icon-goal-listing.svg";
import iconGoalPersonalize from "../assets/images/bartazar/icon-goal-personalize.svg";
import iconGoalValue from "../assets/images/bartazar/icon-goal-value.svg";

const meta = [
  { label: "Timeline", items: ["3 months"] },
  { label: "Platform", items: ["Web"] },
  { label: "Team", items: ["1 lead designer (Me)", "2 designer", "3 devs", "1 PM"] },
  { label: "Skills", items: ["Figma", "User Flows", "Design System", "Usability Testing"] },
];

const accomplishments = [
  {
    title: "1. Design",
    body: "Owned the end-to-end design, from onboarding through a completed trade, across every core flow.",
  },
  {
    title: "2. Research",
    body: "Ran competitive analysis and moderated usability testing, and turned the findings into concrete flow changes.",
  },
  {
    title: "3. Systems thinking",
    body: "Designed the user flows and information architecture that defined the MVP and kept the team aligned on what to build.",
  },
];

const goals = [
  {
    icon: iconGoalListing,
    title: "Make listing fast.",
    body: "Streamline the listing flow so putting an item up takes as little effort as possible, directly attacking the automation gap.",
  },
  {
    icon: iconGoalPersonalize,
    title: "Personalize the experience.",
    body: "Add a wishlist so users list what they want, and build the homepage around both their wishlist and their tradable items, so what they see is relevant from the start.",
  },
  {
    icon: iconGoalValue,
    title: "Make value legible.",
    body: "Introduce a grading system that scores items on factors like critic and audience ratings, price, age, location, and market demand, so users can judge whether a trade is fair before they make it.",
  },
];

const testingFindings = [
  {
    title: "Multiple platforms for one game.",
    body: "My original flow assumed one platform per item. Testing showed people wanted to list a single game across multiple platforms (Xbox and PS4, for example), so I added multi-platform selection to the add-item flow.",
    src: selectPlatform,
    alt: "Select platform modal on the add-item screen",
  },
  {
    title: "Requesting items not yet on the app.",
    body: "To speed up listing, the app offered a library of pre-existing items to pick from. But users wanted to list things that weren't in it, so I added a way to request items the app didn't have yet, without sacrificing the speed the library gave everyone else.",
    src: requestItem,
    alt: "Request item form",
  },
  {
    title: "Canceling an accepted trade.",
    body: "Users worried about being locked in if an item didn't match its listing during the exchange. I added the ability to cancel a trade after an intital acceptance, which was as much a trust fix as a functional one.",
    src: cancelTrade,
    alt: "Accepted trade screen with a cancel trade action",
  },
];

const finalScreens = [
  {
    title: "Swift onboarding.",
    body: "The goal for a first-time user is simple: list an item and immediately see what they could swap it for. To hold their attention, I stripped every link out of the nav bar and left sign-up as the only possible action. One path, no distractions.",
    video: onboardingVideo,
    alt: "Screen recording of the onboarding flow",
  },
  {
    title: "Personalized homepage.",
    body: "Once logged in, users land on a mini dashboard of alerts and recommended trades. Alerts keep them on top of active trades; recommendations are driven by their own data, so the homepage earns its place instead of showing generic content.",
    src: personalizedHomepage,
    alt: "Personalized homepage with alerts and recommended trades",
  },
  {
    title: "Initiating a trade.",
    body: "This is the most common thing anyone will do on the platform, so I held it to three steps. The more frequent the action, the less friction it can afford.",
    video: initiateTradeVideo,
    alt: "Screen recording of the three-step trade flow",
  },
  {
    title: "Accepting a trade request.",
    body: "Trades are one of the most-used features, so I designed the accept/reject view to surface every relevant detail without clutter. A user should be able to decide at a glance.",
    video: acceptingTradeVideo,
    alt: "Screen recording of accepting a trade request",
  },
  {
    title: "Adding to tradable items/wishlist.",
    body: "What users can trade depends on what's in these lists, so the task had to be quick. I iterated several times specifically to cut the time it takes.",
    video: addingItemsVideo,
    alt: "Screen recording of adding an item to tradable items and the wishlist",
  },
  {
    title: "Messaging feature",
    body: "Trades get finalized in conversation, so after two users accept, they land in a chat to coordinate before the swap. It closes the loop between “matched” and “done.”",
    src: messaging,
    alt: "Chat between two traders",
  },
];

const learnings = [
  {
    title: "Interrogate an unfamiliar problem before designing for it.",
    body: "When a product doesn't fit a pattern you know, the fastest way through is asking the right questions, researching hard, and pressure-testing ideas with other people. Assumptions are the expensive part.",
  },
  {
    title: "Anchor every decision to why the product exists.",
    body: "Understanding the actual problem Bartazar solves, trust and fairness in swapping, is what kept my design ideas targeted at real user needs instead of surface polish.",
  },
];

const otherProjects = [indiefact, groceryApp];

const problemBody = (
  <>
    I researched competing swap platforms to find where users got frustrated and where there was room to do
    better. Three problems came up repeatedly: <Strong>listing was manual and slow</Strong>,{" "}
    <Strong>users couldn't tell if a trade was fair</Strong>, and{" "}
    <Strong>there was no reason to trust the person on the other end</Strong>. The last one is the real killer. A
    trading platform with no trust has no trades.
  </>
);

export default function Bartazar() {
  return (
    <div>
      <article className="px-6 pt-6 pb-16 sm:px-10 sm:pt-10 lg:px-16 lg:pt-14 lg:pb-20">
        <div className="mx-auto flex max-w-[960px] flex-col gap-12 lg:gap-16">
          <header className="flex flex-col items-center gap-4 text-center">
            <p className="font-sans font-normal text-base leading-[1.3] text-burnt-orange uppercase lg:text-lg">
              Bartazar
            </p>
            <h1 className="font-serif text-[32px] leading-[1.1] tracking-[-0.02em] text-text-heading sm:text-[40px] lg:text-[48px] lg:leading-none">
              Turning item-swapping into a fast, fair, trustworthy trade platform
            </h1>
          </header>

          <ImagePair
            columns="sm:grid-cols-[1650fr_1182fr]"
            images={[
              { src: heroDesktop, stackedSrc: heroDesktopStacked, alt: "Bartazar homepage on desktop" },
              { src: heroPhone, stackedSrc: heroPhoneStacked, alt: "Person holding a phone showing the Bartazar dashboard" },
            ]}
          />

          <div className="flex flex-col gap-10 lg:gap-16">
            <div className="flex flex-col gap-2.5">
              <Eyebrow>Intro</Eyebrow>
              <SectionBody lead>
                Bartazar lets people trade items, digital or physical, at a fair market price. Users list what
                they own and what they want, then trade against another user's cart when there's a match. I led
                the design of a swap experience built to make trading feel easy and, more importantly,
                trustworthy.
              </SectionBody>
            </div>
            <ProjectMeta groups={meta} />
          </div>

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
            columns="sm:grid-cols-[1650fr_1158fr]"
            images={[
              { src: swapChatScreens, stackedSrc: swapChatScreensStacked, alt: "Bartazar swap and chat screens" },
              { src: wishlist, stackedSrc: wishlistStacked, alt: "Bartazar wishlist screen" },
            ]}
          />

          <Divider />

          <div className="flex flex-col gap-16 lg:gap-20">
            <Section
              eyebrow="Problem"
              title="I started with competitors and found three reasons swapping platforms fail"
              body={problemBody}
              lead
            />

            <Section eyebrow="Goals" title="Three goals, each aimed at one of those failure points">
              <CardGrid>
                {goals.map((goal) => (
                  <InfoCard key={goal.title} title={goal.title} icon={goal.icon}>
                    {goal.body}
                  </InfoCard>
                ))}
              </CardGrid>
            </Section>

            <Section
              eyebrow="User flow"
              title="I mapped the full journey from sign-up to completed trade to define the MVP"
              body="Coming out of design sprints, I designed the user flows for each core feature, built from what a successful trip through the app actually looks like. Mapping the whole path, from a user registering to a trade closing, is what let the team agree on what belonged in the MVP and what didn't."
            >
              <MediaPanel src={userFlow} alt="User flow from registering to completing a trade" />
            </Section>

            <Section
              eyebrow="Information architecture"
              title="I diagrammed the IA to see how screens connect and where to spend design effort"
              body="I built an information architecture diagram to structure the content and sharpen navigation. It did two jobs: it broke down every screen and how they interconnect, and it showed the team which features needed the most design resource."
            >
              <MediaPanel src={informationArchitecture} alt="Bartazar information architecture diagram" />
            </Section>

            <Section
              eyebrow="Wireframes"
              title="I went straight to hi-fi wireframes to get better stakeholder and testing feedback"
              body="I designed high-fidelity wireframes that closely resembled the finished product. Working at high fidelity made them easier to present to stakeholders and got me sharper, more specific feedback in user testing than rough wireframes would have."
            >
              <MediaPanel src={wireframes} alt="High-fidelity wireframes of the homepage, catalog, chat and wishlist" />
            </Section>

            <Section
              eyebrow="User testing"
              title="Moderated testing exposed three gaps I'd missed, and I redesigned around each"
              body="I ran moderated remote usability testing with task-based, think-aloud sessions. Three findings drove real changes:"
            />

            {testingFindings.map((finding) => (
              <Section key={finding.title} title={finding.title} body={finding.body}>
                <MediaPanel src={finding.src} alt={finding.alt} />
              </Section>
            ))}

            <Section eyebrow="Final designs" title="The finished flows, each shaped by a specific decision" />

            {finalScreens.map((screen) => (
              <Section key={screen.title} title={screen.title} body={screen.body}>
                {screen.video ? (
                  <VideoPanel src={screen.video} label={screen.alt} />
                ) : (
                  <MediaPanel src={screen.src} alt={screen.alt} />
                )}
              </Section>
            ))}

            <Section
              eyebrow="Learnings"
              title="Designing an unfamiliar product taught me to lead with questions and purpose"
            >
              <CardGrid className="md:grid-cols-2">
                {learnings.map((item) => (
                  <InfoCard key={item.title} title={item.title}>
                    {item.body}
                  </InfoCard>
                ))}
              </CardGrid>
            </Section>
          </div>
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
