const cardBase = "rounded-xl bg-surface-muted p-6 lg:p-7";

export function InfoCard({ title, children, icon }) {
  return (
    <div className={`flex flex-col gap-6 lg:gap-8 ${cardBase}`}>
      {icon && <img src={icon} alt="" className="size-12 shrink-0 rounded-full" />}
      <div className="flex flex-col gap-3 lg:gap-[18px]">
        <h3 className="font-sans font-normal text-lg leading-none tracking-[-0.02em] text-text-heading lg:text-xl">
          {title}
        </h3>
        <p className="font-sans font-light text-sm leading-[1.3] text-text-body sm:text-base">
          {children}
        </p>
      </div>
    </div>
  );
}

// Same card as InfoCard, with a bulleted list instead of a paragraph.
export function ListCard({ title, items }) {
  return (
    <div className={`flex flex-col gap-3 lg:gap-[18px] ${cardBase}`}>
      <h3 className="font-sans font-normal text-lg leading-none tracking-[-0.02em] text-text-heading lg:text-xl">
        {title}
      </h3>
      <ul className="list-disc pl-5 font-sans font-light text-sm leading-[1.3] text-text-body sm:text-base">
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export function StatCard({ value, label }) {
  return (
    <div className={`flex flex-col gap-4 lg:gap-5 ${cardBase}`}>
      <span className="font-sans font-normal text-[44px] leading-none text-black lg:text-[60px]">
        {value}
      </span>
      <p className="font-sans font-light text-sm leading-[1.3] text-text-body sm:text-base">{label}</p>
    </div>
  );
}

export function CardGrid({ children, className = "md:grid-cols-3" }) {
  return <div className={`grid grid-cols-1 gap-3 ${className}`}>{children}</div>;
}
