import { useEffect, useRef } from "react";
import { CaseStudyLink } from "../Button";

const LOOP_DURATION_MS = 60000;

function wrap(offset, halfWidth) {
  if (halfWidth <= 0) return offset;
  let wrapped = offset % halfWidth;
  if (wrapped > 0) wrapped -= halfWidth;
  return wrapped;
}

export default function ProjectShowcaseCard({
  heading,
  tags,
  images,
  ctaTo = "#",
  autoScroll = false,
  largeImages = false,
  naturalWidth = false,
}) {
  const trackImages = autoScroll ? [...images, ...images] : images;
  const imageClassName = naturalWidth
    ? "h-[220px] w-auto shrink-0 rounded-2xl object-cover sm:h-[240px] md:h-[260px] lg:h-[320px] xl:h-[427px]"
    : largeImages
      ? "h-[220px] w-[210px] shrink-0 rounded-2xl object-cover sm:h-[240px] sm:w-[232px] md:h-[260px] md:w-[252px] lg:h-[320px] lg:w-[310px] xl:h-[427px] xl:w-[415px]"
      : "h-[220px] w-[210px] shrink-0 rounded-2xl object-cover sm:h-[240px] sm:w-[232px] md:h-[260px] md:w-[252px] lg:h-[280px] lg:w-[272px] xl:h-[340px] xl:w-[330px]";

  const trackRef = useRef(null);
  const offsetRef = useRef(0);
  const draggingRef = useRef(false);
  const lastXRef = useRef(0);

  useEffect(() => {
    if (!autoScroll) return undefined;
    const track = trackRef.current;
    if (!track) return undefined;

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    let frameId;
    let lastTime = performance.now();

    const step = (time) => {
      const dt = time - lastTime;
      lastTime = time;
      const halfWidth = track.scrollWidth / 2;

      if (!draggingRef.current && !prefersReducedMotion) {
        offsetRef.current -= (halfWidth / LOOP_DURATION_MS) * dt;
      }
      offsetRef.current = wrap(offsetRef.current, halfWidth);

      track.style.transform = `translateX(${offsetRef.current}px)`;
      frameId = requestAnimationFrame(step);
    };

    frameId = requestAnimationFrame(step);
    return () => cancelAnimationFrame(frameId);
  }, [autoScroll]);

  const handlePointerDown = (e) => {
    if (!autoScroll) return;
    draggingRef.current = true;
    lastXRef.current = e.clientX;
    e.currentTarget.setPointerCapture(e.pointerId);
  };

  const handlePointerMove = (e) => {
    if (!autoScroll || !draggingRef.current) return;
    const dx = e.clientX - lastXRef.current;
    lastXRef.current = e.clientX;
    offsetRef.current += dx;
  };

  const endDrag = () => {
    if (!autoScroll) return;
    draggingRef.current = false;
  };

  return (
    <div className="relative">
      <div className="relative flex flex-col gap-8 rounded-[32px] bg-white p-6 shadow-[0_-4px_40px_6px_rgba(0,0,0,0.05)] sm:p-8 lg:gap-12 lg:p-12">
        <div className="flex flex-col gap-3 lg:flex-row lg:items-start lg:gap-16">
          <div className="flex flex-col gap-3 lg:flex-1">
            <h2 className="font-sans font-light text-[26px] leading-[1.2] text-text-heading sm:text-[24px] lg:text-[24px] xl:text-[32px]">
              {heading}
            </h2>
            <p className="font-sans font-light text-sm text-text-body sm:text-base">
              {tags}
            </p>
          </div>
          <CaseStudyLink to={ctaTo} className="self-start lg:mt-1 lg:shrink-0" />
        </div>

        <div
          className={
            autoScroll
              ? "-mx-6 overflow-hidden sm:-mx-8 lg:-mx-12"
              : "scrollbar-hide -mx-6 overflow-x-auto sm:-mx-8 lg:-mx-12"
          }
        >
          <div
            ref={trackRef}
            className={`flex gap-3 px-6 sm:gap-4 sm:px-8 lg:gap-6 lg:px-12 ${autoScroll ? "w-max touch-pan-y cursor-grab select-none active:cursor-grabbing" : ""}`}
            onPointerDown={handlePointerDown}
            onPointerMove={handlePointerMove}
            onPointerUp={endDrag}
            onPointerLeave={endDrag}
            onPointerCancel={endDrag}
          >
            {trackImages.map((image, i) => (
              <img
                key={autoScroll ? `${image.src}-${i}` : image.src}
                src={image.src}
                alt={image.alt}
                aria-hidden={autoScroll && i >= images.length ? true : undefined}
                draggable={false}
                className={imageClassName}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
