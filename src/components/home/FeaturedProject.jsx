import ProjectShowcaseCard from "./ProjectShowcaseCard";
import socialMockup1 from "../../assets/images/home/social-mockup-1.png";
import socialMockup2 from "../../assets/images/home/social-mockup-2.png";
import socialMockup3 from "../../assets/images/home/social-mockup-3.png";
import socialMockup4 from "../../assets/images/home/social-mockup-4.png";
import tradeMockup1 from "../../assets/images/home/trade-mockup-1.png";
import tradeMockup2 from "../../assets/images/home/trade-mockup-2.png";
import tradeMockup3 from "../../assets/images/home/trade-mockup-3.png";
import tradeMockup4 from "../../assets/images/home/trade-mockup-4.png";
import groceryMockup1 from "../../assets/images/home/grocery-mockup-1.png";
import groceryMockup2 from "../../assets/images/home/grocery-mockup-2.png";
import groceryMockup3 from "../../assets/images/home/grocery-mockup-3.png";
import groceryMockup4 from "../../assets/images/home/grocery-mockup-4.png";

const cards = [
  {
    heading: "From cluttered news feed to a personalized social platform people stay on",
    ctaTo: "/case-studies/indiefact",
    tags: "62% more engagement • Full design system • Personalized content engine • Decluttered core flows",
    autoScroll: true,
    largeImages: true,
    images: [
      { src: socialMockup1, alt: "Leaderboard screen in the social app" },
      { src: socialMockup2, alt: "User profile screen in the social app" },
      { src: socialMockup3, alt: "Groups list screen in the social app" },
      { src: socialMockup4, alt: "Person holding a phone showing the social app's trending posts" },
    ],
  },
  {
    heading: "Turning item-swapping into a fast, fair, trustworthy trade platform",
    ctaTo: "/case-studies/bartazar",
    tags: "Item grading system • Reputation scoring • 3-step trades • Automated matching",
    autoScroll: true,
    largeImages: true,
    naturalWidth: true,
    images: [
      { src: tradeMockup1, alt: "Trade platform homepage on desktop" },
      { src: tradeMockup2, alt: "Trade platform swap and chat screens" },
      { src: tradeMockup3, alt: "Person holding a phone showing the trade platform dashboard" },
      { src: tradeMockup4, alt: "Trade platform wishlist screen" },
    ],
  },
  {
    heading: "Fixing the app people downloaded during lockdown but didn't stick with",
    ctaTo: "/case-studies/fth-daily",
    tags: "Clearer navigation • Redundant features cut • Subscription calendar • Delivery tracking",
    autoScroll: true,
    largeImages: true,
    images: [
      { src: groceryMockup1, alt: "Fresh grocery app homepage mockup" },
      { src: groceryMockup2, alt: "Fresh grocery app product grid mockup" },
      { src: groceryMockup3, alt: "Fresh grocery app product detail mockup on desk" },
      { src: groceryMockup4, alt: "Fresh grocery app subscriptions screen" },
    ],
  },
];

export default function FeaturedProject() {
  return (
    <section className="px-6 pb-12 sm:px-10 sm:pb-22 lg:px-16 lg:pb-20 xl:pb-32">
      <div className="flex flex-col">
        {cards.map((card, i) => (
          <div
            key={i}
            className="sticky pb-8 lg:pb-10"
            style={{ top: `${24 + i * 32}px`, zIndex: i + 1 }}
          >
            <ProjectShowcaseCard {...card} />
          </div>
        ))}
      </div>
    </section>
  );
}
