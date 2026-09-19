import neemaPhoto from "../../assets/images/about/neema-photo.png";

export default function AboutHero() {
  return (
    <div className="flex flex-col items-start gap-8 lg:flex-row lg:items-center lg:gap-10">
      <img
        src={neemaPhoto}
        alt="Portrait of Neema"
        className="h-[180px] w-[180px] rounded-3xl object-cover sm:h-[220px] sm:w-[220px] lg:h-[250px] lg:w-[250px]"
      />
      <div className="flex flex-col gap-3 lg:gap-4">
        <h1 className="font-serif text-[36px] leading-none tracking-[-0.72px] text-text-heading sm:text-[44px] sm:tracking-[-0.88px] lg:text-[56px] lg:tracking-[-1.12px]">
          Hi, I&rsquo;m Neema
        </h1>
        <p className="font-sans text-base font-light leading-[1.3] text-text-body lg:text-xl">
          I design products for a living and build my own for fun.
        </p>
      </div>
    </div>
  );
}
