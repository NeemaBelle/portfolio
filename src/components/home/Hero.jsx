export default function Hero() {
  return (
    <section className="flex flex-col items-stretch justify-center px-6 py-16 text-left sm:items-center sm:px-10 sm:py-20 sm:text-center lg:px-16 lg:py-[120px]">
      <div className="flex flex-col items-stretch gap-6 sm:items-center lg:max-w-[864px] lg:gap-8">
        <h1 className="font-serif text-[44px] leading-[1.15] tracking-[-0.72px] text-text-heading sm:text-[44px] sm:tracking-[-0.88px] lg:text-[64px] lg:leading-none lg:tracking-[-1.28px]">
          Product designer building <span className="text-burnt-orange">b2b saas</span> and{" "}
          <span className="text-burnt-orange">consumer products</span>, end to end.
        </h1>
        <div
          className="font-sans font-light text-base text-text-body sm:text-lg lg:w-[800px] lg:text-xl"
          style={{ fontVariationSettings: '"opsz" 14' }}
        >
          <p className="leading-[1.3]">
            Five years taking products 0→1, from research and strategy to shipped products.
          </p>
          <p className="leading-[1.3]">
            I work closely with PM and engineering on design that moves real metrics.
          </p>
        </div>
      </div>
    </section>
  );
}
