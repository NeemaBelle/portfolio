import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import logoMark from "../assets/icons/logo-mark.svg";
import mailIcon from "../assets/icons/mail.svg";
import checkIcon from "../assets/icons/check-circle.svg";
import useCopyEmail, { EMAIL } from "../hooks/useCopyEmail";

const routeLinks = [
  { to: "/web-projects", label: "Web projects" },
  { to: "/about", label: "About" },
];

const linkClass = ({ isActive }) =>
  `transition-colors hover:text-burnt-orange ${isActive ? "text-burnt-orange" : "text-black"}`;

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const { copied, copyEmail } = useCopyEmail();

  const emailContent = (
    <>
      <img src={copied ? checkIcon : mailIcon} alt="" className="size-6" />
      <span aria-live="polite">{copied ? "Email copied!" : "Email me"}</span>
    </>
  );

  return (
    <header className="relative flex items-center justify-between px-6 pt-6 pb-6 sm:px-10 lg:px-16 lg:pt-6 lg:pb-10">
      <Link
        to="/"
        className="shrink-0"
        onClick={() => {
          setOpen(false);
          window.scrollTo(0, 0);
        }}
      >
        <img src={logoMark} alt="Neema Dania" className="h-12 w-auto lg:h-[69px]" />
      </Link>

      <nav className="hidden lg:flex items-center gap-[26px] rounded-full border border-border-subtle px-10 py-5 font-sans font-light text-[18px] leading-none tracking-[-0.36px] absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
        <a href="/#case-studies" className="text-black transition-colors hover:text-burnt-orange">
          Case studies
        </a>
        {routeLinks.map((link) => (
          <NavLink key={link.to} to={link.to} className={linkClass}>
            {link.label}
          </NavLink>
        ))}
      </nav>

      <button
        type="button"
        onClick={copyEmail}
        title={`Copy ${EMAIL}`}
        className="hidden lg:inline-flex bg-dark-green items-center gap-[10px] rounded-full px-6 py-4 font-display font-medium text-white text-[18px] leading-none tracking-[-0.36px] hover:opacity-90 transition-opacity cursor-pointer"
      >
        {emailContent}
      </button>

      <button
        type="button"
        aria-label="Toggle menu"
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
        className="lg:hidden flex flex-col justify-center gap-1.5 p-2"
      >
        <span className={`block h-0.5 w-6 bg-text-heading transition-transform ${open ? "translate-y-2 rotate-45" : ""}`} />
        <span className={`block h-0.5 w-6 bg-text-heading transition-opacity ${open ? "opacity-0" : ""}`} />
        <span className={`block h-0.5 w-6 bg-text-heading transition-transform ${open ? "-translate-y-2 -rotate-45" : ""}`} />
      </button>

      {open && (
        <div className="lg:hidden absolute top-full left-0 right-0 z-50 mx-6 mt-2 flex flex-col gap-6 rounded-3xl border border-border-subtle bg-cream p-8 shadow-lg font-sans font-light text-[18px]">
          <a href="/#case-studies" className="text-black transition-colors hover:text-burnt-orange" onClick={() => setOpen(false)}>
            Case studies
          </a>
          {routeLinks.map((link) => (
            <NavLink key={link.to} to={link.to} className={linkClass} onClick={() => setOpen(false)}>
              {link.label}
            </NavLink>
          ))}
          <button
            type="button"
            onClick={copyEmail}
            title={`Copy ${EMAIL}`}
            className="bg-dark-green inline-flex items-center justify-center gap-[10px] rounded-full px-6 py-4 font-display font-medium text-white cursor-pointer"
          >
            {emailContent}
          </button>
        </div>
      )}
    </header>
  );
}
