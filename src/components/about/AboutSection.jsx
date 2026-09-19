export default function AboutSection({ heading, paragraphs }) {
  return (
    <div className="flex flex-col gap-3">
      <h2 className="font-sans text-sm font-light tracking-[0.08em] text-text-heading uppercase">
        {heading}
      </h2>
      <div className="flex flex-col gap-4 font-sans text-base font-light leading-[1.6] text-text-body lg:text-lg">
        {paragraphs.map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}
      </div>
    </div>
  );
}
