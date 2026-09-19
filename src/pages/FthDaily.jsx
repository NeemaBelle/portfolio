import Section, { Divider, Eyebrow, SectionBody, Strong } from "../components/case-study/Section";
import { CardGrid, InfoCard, ListCard } from "../components/case-study/Cards";
import { ImagePair, MediaPanel, VideoPanel } from "../components/case-study/Media";
import ProjectMeta from "../components/case-study/ProjectMeta";
import ProjectGrid from "../components/home/ProjectGrid";
import OtherProjectCard from "../components/case-study/OtherProjectCard";
import heroHome from "../assets/images/fth-daily/hero-home.webp";
import heroVegetables from "../assets/images/fth-daily/hero-vegetables.png";
import productDetailShelf from "../assets/images/fth-daily/product-detail-shelf.webp";
import subscriptions from "../assets/images/fth-daily/subscriptions.png";
import wireframes from "../assets/images/fth-daily/wireframes.webp";
import iconGoalNavigation from "../assets/images/fth-daily/icon-goal-navigation.svg";
import iconGoalCut from "../assets/images/fth-daily/icon-goal-cut.svg";
import iconGoalConsistent from "../assets/images/fth-daily/icon-goal-consistent.svg";
import loginHomeVideo from "../assets/videos/fth-daily/login-home.mp4";
import categoriesVideo from "../assets/videos/fth-daily/categories.mp4";
import subscribeVideo from "../assets/videos/fth-daily/subscribe.mp4";
import walletVideo from "../assets/videos/fth-daily/wallet.mp4";
import { indiefact, tradePlatform } from "../data/otherProjects";

const meta = [
  { label: "Timeline", items: ["3 months"] },
  { label: "Platform", items: ["iOS", "Android"] },
  { label: "Team", items: ["1 lead designer (Me)", "2 devs", "1 PM"] },
  { label: "Skills", items: ["Figma", "User Flows", "Design System", "Usability Testing"] },
];

const accomplishments = [
  {
    title: "1. Diagnosis",
    body: "Evaluated the existing app against real user complaints to pinpoint why a spike in downloads wasn't converting to retention.",
  },
  {
    title: "2. Design",
    body: "Redesigned the core flows, navigation, categories, product and subscription management, around the tasks users actually repeat.",
  },
  {
    title: "3. Prioritization",
    body: "Cut redundant features and focused effort on the screens driving the most value, rather than redesigning everything equally.",
  },
];

const goals = [
  {
    icon: iconGoalNavigation,
    title: "Fix navigation.",
    body: "Rebuild the app's navigation so users can move through it and actually complete checkout, the moment that matters most for a subscription business.",
  },
  {
    icon: iconGoalCut,
    title: "Cut the dead weight.",
    body: "Remove features users never touched, making the app lighter and more intuitive for first-timers, who are exactly the people churning.",
  },
  {
    icon: iconGoalConsistent,
    title: "Make it consistent.",
    body: "Sharpen the features users spend the most time in and bring consistency across the app so the experience feels coherent.",
  },
];

const persona = [
  {
    title: "User goals",
    items: [
      "Move through the app and complete checkout without getting lost",
      "Start a subscription easily, without wading through features I don't need",
      "Find what I need fast, in a layout that feels the same across every screen",
    ],
  },
  {
    title: "User frustrations",
    items: [
      "“I can't search for what I need, I have to dig through lists.”",
      "“I can't track my order, I don't know if it's been delivered.”",
    ],
  },
];

const finalScreens = [
  {
    title: "Login and home",
    body: "Login supports email, Google, and Facebook to cut friction at the very first step. The home screen adds a bottom navigation bar, directly fixing the navigation complaint that was driving churn.",
    video: loginHomeVideo,
    alt: "Screen recording of logging in and the home screen",
  },
  {
    title: "Categories and subcategories.",
    body: "Products are now organized into categories, with a subcategory view and filtering, so users can find what they want instead of scrolling endless lists. This is the direct answer to “I can't search for what I need.”",
    video: categoriesVideo,
    alt: "Screen recording of browsing categories and subcategories",
  },
  {
    title: "Product detail and subscription management.",
    body: "The detail screen lets users set quantity and see key product info before subscribing. The subscription screen lets them customize orders, and the subscription list lets them edit, pause, or delete active subscriptions. A subscription calendar shows upcoming deliveries by day and each order's status, delivered or pending, answering the “I can't track my order” frustration head-on.",
    video: subscribeVideo,
    alt: "Screen recording of subscribing to a product",
  },
  {
    title: "Wallet and top-up.",
    body: "Users can top up an in-app wallet so delivery and payment stay seamless.",
    video: walletVideo,
    alt: "Screen recording of the wallet and top-up screen",
  },
];

const otherProjects = [indiefact, tradePlatform];

const problemBody = (
  <>
    After evaluating the app and its user feedback, I traced the retention problem to three issues:{" "}
    <Strong>
      navigation users couldn't follow, confusing interface elements, and inconsistent design across screens
    </Strong>
    . The context matters. A download surge is a one-time gift; if the experience can't hold people, that gift is
    wasted. Retention, not acquisition, was the real problem to solve.
  </>
);

export default function FthDaily() {
  return (
    <div>
      <article className="px-6 pt-6 pb-16 sm:px-10 sm:pt-10 lg:px-16 lg:pt-14 lg:pb-20">
        <div className="mx-auto flex max-w-[960px] flex-col gap-12 lg:gap-16">
          <header className="flex flex-col items-center gap-4 text-center">
            <p className="font-sans font-normal text-base leading-[1.3] text-burnt-orange uppercase lg:text-lg">
              FTH Daily
            </p>
            <h1 className="font-serif text-[32px] leading-[1.1] tracking-[-0.02em] text-text-heading sm:text-[40px] lg:text-[48px] lg:leading-none">
              Fixing the app people downloaded during lockdown but didn't stick with
            </h1>
          </header>

          <ImagePair
            images={[
              { src: heroHome, alt: "FTH Daily home screen on a tilted phone" },
              { src: heroVegetables, alt: "FTH Daily vegetables category screen" },
            ]}
          />

          <div className="flex flex-col gap-10 lg:gap-16">
            <div className="flex flex-col gap-2.5">
              <Eyebrow>Intro</Eyebrow>
              <SectionBody lead>
                FTH Daily is a subscription grocery app that delivers to people's homes on a recurring basis.
                During the COVID lockdown, downloads spiked, but retention was poor. People installed it out of
                necessity and left for competitors. I evaluated the app to find why, then redesigned the experience to give them a
                reason to stay.
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
            images={[
              { src: productDetailShelf, alt: "FTH Daily product detail screen on a phone resting on a shelf" },
              { src: subscriptions, alt: "FTH Daily subscriptions screen" },
            ]}
          />

          <Divider />

          <div className="flex flex-col gap-16 lg:gap-20">
            <Section
              eyebrow="The problem"
              title="Downloads spiked during lockdown, but a broken experience meant nobody stayed"
              body={problemBody}
              lead
            />

            <Section eyebrow="Goals" title="Three goals, all pointed at getting users through to a successful order">
              <CardGrid>
                {goals.map((goal) => (
                  <InfoCard key={goal.title} title={goal.title} icon={goal.icon}>
                    {goal.body}
                  </InfoCard>
                ))}
              </CardGrid>
            </Section>

            <Section
              eyebrow="Users"
              title="I built a persona from the complaints users were already voicing"
              body="Users told a consistent story: the app was hard to navigate, they couldn't tell where their orders stood, and support was unreachable with no way to raise a ticket. I got most of the complaints from the reviews on the Google Play Store. I turned those frustrations into a persona to anchor prioritization in real needs rather than assumptions."
            >
              <CardGrid className="md:grid-cols-2">
                {persona.map((card) => (
                  <ListCard key={card.title} {...card} />
                ))}
              </CardGrid>
            </Section>

            <Section
              eyebrow="Wireframes"
              title="I sketched, then moved to hi-fi wireframes to pressure-test ideas fast"
              body="I started with sketches and moved quickly into high-fidelity wireframes to make the ideas concrete and testable early, rather than polishing low-fidelity screens that hide real interaction problems."
            >
              <MediaPanel src={wireframes} alt="High-fidelity wireframes of the categories, subscription and calendar screens" />
            </Section>

            <Section eyebrow="Final designs" title="The redesigned flows, each solving a specific complaint" />

            {finalScreens.map((screen) => (
              <Section key={screen.title} title={screen.title} body={screen.body}>
                <VideoPanel src={screen.video} label={screen.alt} className="rounded-xl py-[6%]" />
              </Section>
            ))}

            <Section
              eyebrow="Reflection"
              title="What this project taught me, and what I'd do differently"
              body="This redesign is a strong first pass, not a finished, validated product. It pushed me deep into research and evaluation, and it clarified what I'd change in my own process: run user interviews and usability testing earlier and more often, so effort goes where the evidence points instead of where I assume it should."
            />
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
