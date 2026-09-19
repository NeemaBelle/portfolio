import { useEffect, useRef } from "react";
import { Eyebrow } from "./Section";

// `stackedSrc` is shown below the `sm` breakpoint, where ImagePair stacks its images, so a pair
// can swap to crops that share one height when they sit on top of each other.
export function MediaPanel({ src, stackedSrc, alt, className = "rounded-xl", bg = "bg-surface-muted" }) {
  const img = <img src={stackedSrc ?? src} alt={alt} loading="lazy" className="block h-auto w-full" />;
  return (
    <div className={`overflow-hidden ${bg} ${className}`}>
      {stackedSrc ? (
        <picture>
          <source media="(min-width: 640px)" srcSet={src} />
          {img}
        </picture>
      ) : (
        img
      )}
    </div>
  );
}

// A muted, looping screen recording inset in the grey frame (the recordings are exported on the
// same grey, so the laptop sits directly on the card). It only loads and plays while on
// screen, so several multi-MB recordings on one page don't all download up front.
// Laptop recordings keep the default inset; phone recordings already have wide side margins, so
// pass className="rounded-xl py-[6%]" to pad only top and bottom.
export function VideoPanel({ src, label, className = "rounded-xl p-[6%]", bg = "bg-surface-muted" }) {
  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !reduceMotion) video.play().catch(() => {});
        else video.pause();
      },
      { threshold: 0.25 },
    );
    observer.observe(video);
    return () => observer.disconnect();
  }, []);

  return (
    <div className={`overflow-hidden ${bg} ${className}`}>
      <video
        ref={videoRef}
        src={src}
        aria-label={label}
        muted
        loop
        playsInline
        preload="none"
        className="block aspect-[8/5] h-auto w-full bg-surface-muted"
      />
    </div>
  );
}

// Three phone mockups with a caption under each. On phones they become a swipeable row
// instead of stacking three ~600px-tall panels. `versioned` labels them V1, V2, V3 under each image.
export function FigureRow({ figures, versioned = false }) {
  return (
    <div className="scrollbar-hide -mx-6 flex snap-x snap-mandatory scroll-px-6 gap-4 overflow-x-auto px-6 sm:mx-0 sm:grid sm:grid-cols-3 sm:gap-5 sm:overflow-visible sm:px-0">
      {figures.map((figure, index) => (
        <figure key={figure.alt} className="flex w-[75%] shrink-0 snap-start flex-col gap-4 sm:w-auto lg:gap-5">
          <div className="flex flex-col gap-1.5">
            <MediaPanel src={figure.src} alt={figure.alt} />
            {versioned && (
              <Eyebrow color="text-text-body" className="text-center">
                V{index + 1}
              </Eyebrow>
            )}
          </div>
          <figcaption className="font-sans font-light text-sm leading-[1.3] text-text-body">
            {figure.caption}
          </figcaption>
        </figure>
      ))}
    </div>
  );
}

// `columns` sizes the two cells; pass fr values matching the images' widths (e.g. sm:grid-cols-[1650fr_1182fr])
// so a same-height but differently wide pair lines up top and bottom.
export function ImagePair({ images, className = "rounded-[32px]", bg, columns = "sm:grid-cols-2" }) {
  return (
    <div className={`grid grid-cols-1 gap-4 lg:gap-6 ${columns}`}>
      {images.map((image) => (
        <MediaPanel
          key={image.alt}
          src={image.src}
          stackedSrc={image.stackedSrc}
          alt={image.alt}
          className={className}
          bg={bg}
        />
      ))}
    </div>
  );
}

// Image-only case study body. Each row is one image, or an array of two shown side by side.
// The exports carry their own panel colour and rounded corners, so the panels add none.
export function Gallery({ rows }) {
  const bare = { bg: "bg-transparent", className: "" };
  return (
    <div className="flex flex-col gap-4 sm:gap-6 lg:gap-10">
      {rows.map((row) =>
        Array.isArray(row) ? (
          <ImagePair key={row[0].alt} images={row} {...bare} />
        ) : (
          <MediaPanel key={row.alt} src={row.src} alt={row.alt} {...bare} />
        ),
      )}
    </div>
  );
}
