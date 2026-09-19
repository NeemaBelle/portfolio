import { Link } from "react-router-dom";
import { capture } from "../lib/posthog";
import CaretRight from "./icons/CaretRight";

export function PillLink({ to, children, className = "", onClick }) {
  return (
    <Link
      to={to}
      onClick={onClick}
      className={`bg-dark-green inline-flex items-center gap-2 rounded-full px-5 py-3 font-display font-medium text-white text-[14px] leading-none tracking-[-0.24px] sm:text-[18px] sm:tracking-[-0.36px] whitespace-nowrap hover:opacity-90 transition-opacity ${className}`}
    >
      {children}
    </Link>
  );
}

export function CaseStudyLink({ to, label = "View case study", className = "" }) {
  return (
    <PillLink
      to={to}
      className={className}
      onClick={() => capture("case_study_opened", { destination: to, link_label: label })}
    >
      {label}
      <CaretRight />
    </PillLink>
  );
}
