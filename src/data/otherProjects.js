import tradePlatformImage from "../assets/images/other-projects/trade-platform.webp";
import groceryAppImage from "../assets/images/other-projects/grocery-app.webp";
import indiefactAppImage from "../assets/images/other-projects/indiefact-app.png";

// Cards for the "Other Projects" section at the end of each case study. `layout` is either
// "bleed" (the card's height hugs the full image) or "centered" (follows its neighbour's height).
// `to` is the project's case study route.
export const indiefact = {
  title: "From cluttered news feed to a personalized social platform people stay on",
  to: "/case-studies/indiefact",
  image: indiefactAppImage,
  alt: "Indiefact app home screen on a phone",
  bg: "bg-honey",
  layout: "bleed",
};

export const tradePlatform = {
  title: "Turning item-swapping into a fast, fair, trustworthy trade platform",
  to: "/case-studies/bartazar",
  image: tradePlatformImage,
  alt: "Trade platform homepage on desktop",
  bg: "bg-sky-tint",
  layout: "centered",
};

export const groceryApp = {
  title: "Fixing the app people downloaded during lockdown but didn't stick with",
  to: "/case-studies/fth-daily",
  image: groceryAppImage,
  alt: "Fresh grocery app homepage on a phone",
  bg: "bg-butter",
  layout: "bleed",
};
