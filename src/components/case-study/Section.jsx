export function Eyebrow({ children, color = "text-burnt-orange", className = "" }) {
  return (
    <p
      className={`font-sans font-medium text-sm leading-[1.3] uppercase lg:text-base ${color} ${className}`}
    >
      {children}
    </p>
  );
}

export function SectionTitle({ children }) {
  return (
    <h2 className="font-sans font-normal text-[22px] leading-[1.15] tracking-[-0.02em] text-text-heading lg:text-[26px] lg:leading-none">
      {children}
    </h2>
  );
}

// `lead` is the larger 18px intro copy; everything else in the case study sits at 16px.
export function SectionBody({ children, lead = false }) {
  return (
    <p
      className={`font-sans font-light leading-[1.3] text-text-body ${
        lead ? "text-base lg:text-lg" : "text-sm sm:text-base"
      }`}
    >
      {children}
    </p>
  );
}

export function Strong({ children }) {
  return <span className="font-medium">{children}</span>;
}

export function Divider() {
  return <hr className="border-0 border-t border-divider" />;
}

export default function Section({ eyebrow, title, body, lead = false, children }) {
  return (
    <section className="flex flex-col gap-6 lg:gap-10">
      <div className="flex flex-col gap-3 lg:gap-4">
        {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
        <div className="flex flex-col gap-3 lg:gap-4">
          {title && <SectionTitle>{title}</SectionTitle>}
          {body && <SectionBody lead={lead}>{body}</SectionBody>}
        </div>
      </div>
      {children}
    </section>
  );
}
