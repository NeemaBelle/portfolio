import AboutHero from "../components/about/AboutHero";
import AboutIntro from "../components/about/AboutIntro";
import AboutSection from "../components/about/AboutSection";

const sections = [
  {
    heading: "In my work",
    paragraphs: [
      "I care about the whole arc, from the research that tells you what to build to the interaction details that decide whether people stay. I've redesigned products that shipped without a designer, cut features nobody used, and built the design systems that let small teams move fast without falling apart. I'm most interested in the products people assume are \"just functional.\" I think those deserve the same clarity and polish as anything consumer-facing.",
    ],
  },
  {
    heading: "On the side",
    paragraphs: [
      "I run a small game studio, Apiary Games, where I design and build my own games. Launched Duotrace, a browser based puzzle game on Playgama. Being the designer, the developer, and the person who has to ship it teaches you things no brief ever will, mostly about scope, constraints, and what actually matters.",
      "I also create content where I share updates about my life.",
    ],
  },
  {
    heading: "My process",
    paragraphs: [
      "Usually starts with asking a lot of questions before touching a screen. I like mapping how things connect, finding where a flow breaks, and fixing the weak spots before users ever hit them.",
      "Building my own products has made me ruthless about this: when you're the one shipping, you learn fast which decisions matter and which are just polish.",
    ],
  },
  {
    heading: "When I'm not designing",
    paragraphs: [
      "You'll probably find me building a game, learning French (slowly), sharing about my life on socials, beating my time on expert sudoku or falling down a rabbit hole on some new puzzle.",
    ],
  },
];

export default function About() {
  return (
    <section className="mx-auto flex max-w-[740px] flex-col gap-14 px-6 py-16 sm:px-10 sm:py-20 lg:gap-20 lg:px-0 lg:py-[120px]">
      <AboutHero />
      <AboutIntro />
      {sections.map((section) => (
        <AboutSection key={section.heading} heading={section.heading} paragraphs={section.paragraphs} />
      ))}
    </section>
  );
}
