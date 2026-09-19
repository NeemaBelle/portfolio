import CaseStudyPage, { CaseStudyIntro } from "../components/case-study/CaseStudyPage";
import { Gallery, MediaPanel } from "../components/case-study/Media";
import { Divider } from "../components/case-study/Section";
import { indiefact, tradePlatform } from "../data/otherProjects";
import hero from "../assets/images/kara/hero.webp";
import dealsOfTheDay from "../assets/images/kara/deals-of-the-day.webp";
import samsungSeries from "../assets/images/kara/samsung-series.webp";
import productDetailBag from "../assets/images/kara/product-detail-bag.webp";
import categoryFlow from "../assets/images/kara/category-flow.webp";
import checkoutReview from "../assets/images/kara/checkout-review.webp";
import profileOrders from "../assets/images/kara/profile-orders.webp";
import bestDeals from "../assets/images/kara/best-deals.webp";
import popularProducts from "../assets/images/kara/popular-products.webp";
import deliveryPayment from "../assets/images/kara/delivery-payment.webp";
import sortFilter from "../assets/images/kara/sort-filter.webp";

const meta = [
  { label: "Timeline", items: ["5 months"] },
  { label: "Platform", items: ["iOS", "Android"] },
  { label: "Team", items: ["1 lead designer (Me)", "3 devs"] },
  { label: "Skills", items: ["Figma", "User Flows", "Design System", "Usability Testing"] },
];

const gallery = [
  [
    { src: dealsOfTheDay, alt: "Deals of the Day screen with a countdown banner" },
    { src: samsungSeries, alt: "Samsung A Series product grid" },
  ],
  { src: productDetailBag, alt: "Product detail and shopping bag screens" },
  { src: categoryFlow, alt: "Category, Phones and Tablets, and Samsung A Series screens" },
  { src: checkoutReview, alt: "Checkout and order review screens" },
  { src: profileOrders, alt: "Profile, My Orders and Order Details screens" },
  [
    { src: bestDeals, alt: "Best Deals screen with an up-to-50%-off banner" },
    { src: popularProducts, alt: "Popular Products screen with top sellers this week" },
  ],
  { src: deliveryPayment, alt: "Delivery address, contact information and payment method screens" },
  { src: sortFilter, alt: "Sort and filter screens" },
];

export default function Kara() {
  return (
    <CaseStudyPage
      eyebrow="Kara"
      title="Designing an e-commerce app that makes a huge catalog feel personal"
      otherProjects={[indiefact, tradePlatform]}
    >
      <MediaPanel src={hero} alt="Kara home screen with Best Deals banner on a phone" bg="bg-transparent" className="" />

      <CaseStudyIntro meta={meta}>
        Kara is an e-commerce application designed to offer users an extensive selection of products spanning
        various categories. Its intuitive interface empowers customers to effortlessly explore a wide-ranging
        catalog, ensuring there&apos;s something for everyone. Moreover, Kara employs advanced algorithms to
        deliver personalised recommendations, tailoring the shopping experience to individual preferences.
      </CaseStudyIntro>

      <Divider />

      <Gallery rows={gallery} />
    </CaseStudyPage>
  );
}
