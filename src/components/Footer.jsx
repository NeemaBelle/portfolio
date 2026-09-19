import { Link } from "react-router-dom";
import logoMark from "../assets/icons/logo-mark.svg";
import envelopeIcon from "../assets/icons/envelope.svg";
import linkedinIcon from "../assets/icons/linkedin.svg";
import behanceIcon from "../assets/icons/behance.svg";
import dribbbleIcon from "../assets/icons/dribbble.svg";
import checkIcon from "../assets/icons/check-circle.svg";
import useCopyEmail, { EMAIL } from "../hooks/useCopyEmail";
import { capture } from "../lib/posthog";

// Entries without an `href` copy EMAIL to the clipboard instead of navigating.
const socials = [
  { label: "Email", icon: envelopeIcon },
  { label: "Linkedin", icon: linkedinIcon, href: "https://www.linkedin.com/in/neemadania/" },
  { label: "Behance", icon: behanceIcon, href: "https://www.behance.net/neemadania" },
  { label: "Dribbble", icon: dribbbleIcon, href: "https://dribbble.com/Neema_Dania" },
];

const socialClass =
  "flex flex-1 flex-col items-center justify-center gap-6 rounded-3xl border border-[#606c38] p-2.5 py-8 text-white lg:py-0";

export default function Footer() {
  const { copied, copyEmail } = useCopyEmail();

  return (
    <footer className="bg-dark-green flex flex-col gap-16 px-6 pt-20 pb-10 sm:px-10 lg:gap-16 lg:px-16 lg:pt-[120px] lg:pb-16">
      <div className="flex flex-col items-start gap-4 text-white max-w-[731px]">
        <h2 className="font-serif text-[40px] leading-none tracking-[-0.8px] lg:text-[56px] lg:tracking-[-1.12px]">
          Get in touch
        </h2>
        <p className="font-sans font-light text-base leading-[1.3] opacity-60 lg:text-xl">
          I excel in conducting thorough user research, crafting aesthetic interfaces, prototyping,
          and user testing to solve business needs. Get in touch today to find out.
        </p>
      </div>

      <div className="grid grid-cols-2 gap-4 lg:flex lg:h-40 lg:gap-6">
        {socials.map((social) =>
          social.href ? (
            <a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noreferrer"
              onClick={() => capture("social_profile_opened", { platform: social.label.toLowerCase() })}
              className={socialClass}
            >
              <img src={social.icon} alt="" className="size-8" />
              <span className="font-sans font-light text-xl">{social.label}</span>
            </a>
          ) : (
            <button
              key={social.label}
              type="button"
              onClick={copyEmail}
              title={`Copy ${EMAIL}`}
              className={`${socialClass} cursor-pointer`}
            >
              <img src={copied ? checkIcon : social.icon} alt="" className="size-8" />
              <span className="font-sans font-light text-xl" aria-live="polite">
                {copied ? "Email copied!" : social.label}
              </span>
            </button>
          )
        )}
      </div>

      <div className="flex flex-col gap-8 sm:gap-16">
        <div className="h-px w-full bg-white/20" />

        <div className="flex flex-col items-start gap-8 sm:items-center lg:flex-row lg:justify-between">
          {/* Scrolls up too, since clicking it on the homepage doesn't change the route. */}
          <Link to="/" onClick={() => window.scrollTo(0, 0)}>
            <img src={logoMark} alt="Neema Dania" className="h-[69px] w-auto brightness-0 invert" />
          </Link>
          <div className="flex flex-wrap items-center gap-8 font-sans font-light text-lg leading-none text-white sm:justify-center lg:gap-16">
            <a href="/#case-studies" className="hover:text-burnt-orange transition-colors">
              Case studies
            </a>
            <Link to="/web-projects" className="hover:text-burnt-orange transition-colors">
              Web projects
            </Link>
            <Link to="/about" className="hover:text-burnt-orange transition-colors">
              About
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
