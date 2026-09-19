import { useEffect, useRef, useState } from "react";
import Matter from "matter-js";

const MAX_TILT = (40 * Math.PI) / 180;
const PILL_CATEGORY = 0x0001;
const WALL_CATEGORY = 0x0002;

export default function SkillPills({ skills }) {
  const cardRef = useRef(null);
  const pillRefs = useRef([]);
  const [dropped, setDropped] = useState(false);
  const [size, setSize] = useState(null);

  useEffect(() => {
    const card = cardRef.current;
    if (!card) return undefined;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return undefined;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setDropped(true);
          observer.disconnect();
        }
      },
      { threshold: 0.6 },
    );
    observer.observe(card);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const card = cardRef.current;
    if (!card) return undefined;

    let timer;
    const observer = new ResizeObserver(([entry]) => {
      const { width, height } = entry.contentRect;
      // Debounced: a drag-resize fires every frame, and re-seeding restarts the drop.
      clearTimeout(timer);
      timer = setTimeout(() => {
        setSize((prev) =>
          prev && Math.abs(prev.w - width) < 1 && Math.abs(prev.h - height) < 1
            ? prev
            : { w: width, h: height },
        );
      }, 150);
    });
    observer.observe(card);
    return () => {
      clearTimeout(timer);
      observer.disconnect();
    };
  }, []);

  useEffect(() => {
    if (!dropped) return undefined;
    const card = cardRef.current;
    const pills = pillRefs.current.filter(Boolean);
    if (!card || !pills.length) return undefined;

    pills.forEach((el) => {
      el.style.position = "";
      el.style.left = "";
      el.style.top = "";
      el.style.width = "";
      el.style.height = "";
      el.style.transform = "";
    });

    const cardBox = card.getBoundingClientRect();
    const style = getComputedStyle(card);
    const padLeft = parseFloat(style.paddingLeft);
    const padRight = parseFloat(style.paddingRight);
    const padBottom = parseFloat(style.paddingBottom);

    // Physics bounds, in coordinates relative to the card's padding box.
    const floorY = card.clientHeight - padBottom;
    const leftX = padLeft;
    const rightX = card.clientWidth - padRight;

    // Freeze each pill where it currently sits before handing it to the engine.
    const starts = pills.map((el) => {
      const r = el.getBoundingClientRect();
      return {
        x: r.left - cardBox.left,
        y: r.top - cardBox.top,
        w: r.width,
        h: r.height,
      };
    });

    // No height pin here: the pills sit in an absolutely positioned wrapper, so the card
    // never derives its height from them and takes it from the grid row instead. Pinning
    // a pixel height would freeze that row at one viewport's value.

    pills.forEach((el, i) => {
      const s = starts[i];
      el.style.position = "absolute";
      el.style.left = "0";
      el.style.top = "0";
      el.style.width = `${s.w}px`;
      el.style.height = `${s.h}px`;
      el.style.transform = `translate(${s.x}px, ${s.y}px)`;
      el.style.willChange = "transform";
      el.style.cursor = "grab";
    });

    const engine = Matter.Engine.create();
    engine.gravity.y = 1.2;

    const wall = 400;
    // Own category so the mouse constraint can't pick a wall up instead of a pill.
    const wallOptions = { isStatic: true, collisionFilter: { category: WALL_CATEGORY } };
    const walls = [
      Matter.Bodies.rectangle(
        (leftX + rightX) / 2,
        floorY + wall / 2,
        (rightX - leftX) + wall * 2,
        wall,
        wallOptions,
      ),
      Matter.Bodies.rectangle(leftX - wall / 2, floorY / 2, wall, floorY * 4, wallOptions),
      Matter.Bodies.rectangle(rightX + wall / 2, floorY / 2, wall, floorY * 4, wallOptions),
    ];

    const bodies = starts.map((s) =>
      Matter.Bodies.rectangle(s.x + s.w / 2, s.y + s.h / 2, s.w, s.h, {
        chamfer: { radius: s.h / 2 },
        restitution: 0.35,
        friction: 0.35,
        frictionAir: 0.015,
      }),
    );

    // Enough energy that they tumble and prop against each other instead of stacking
    // flat like planks — the card is only ~480px of usable width, so without this they
    // settle into tidy layers.
    bodies.forEach((body) => {
      Matter.Body.setAngularVelocity(body, (Math.random() - 0.5) * 0.6);
      Matter.Body.setVelocity(body, { x: (Math.random() - 0.5) * 8, y: 0 });
    });

    Matter.Composite.add(engine.world, [...walls, ...bodies]);

    const mouse = Matter.Mouse.create(card);
    const mouseConstraint = Matter.MouseConstraint.create(engine, {
      mouse,
      collisionFilter: { mask: PILL_CATEGORY },
      constraint: { stiffness: 0.2, render: { visible: false } },
    });
    Matter.Composite.add(engine.world, mouseConstraint);

    // Matter binds wheel and touch handlers that swallow page scrolling over the card.
    mouse.element.removeEventListener("wheel", mouse.mousewheel);
    mouse.element.removeEventListener("mousewheel", mouse.mousewheel);
    mouse.element.removeEventListener("DOMMouseScroll", mouse.mousewheel);
    mouse.element.removeEventListener("touchstart", mouse.mousedown);
    mouse.element.removeEventListener("touchmove", mouse.mousemove);
    mouse.element.removeEventListener("touchend", mouse.mouseup);

    let frameId;
    let last = performance.now();
    const step = (now) => {
      const dt = Math.min(now - last, 16.667);
      last = now;
      Matter.Engine.update(engine, dt);

      // Hard cap on rotation so a pill can tilt but never ends up on its head with the
      // label unreadable — including while it is being dragged around.
      bodies.forEach((body) => {
        if (body.angle > MAX_TILT) {
          Matter.Body.setAngle(body, MAX_TILT);
          Matter.Body.setAngularVelocity(body, Math.min(0, body.angularVelocity));
        } else if (body.angle < -MAX_TILT) {
          Matter.Body.setAngle(body, -MAX_TILT);
          Matter.Body.setAngularVelocity(body, Math.max(0, body.angularVelocity));
        }
      });

      bodies.forEach((body, i) => {
        const s = starts[i];
        pills[i].style.transform = `translate(${body.position.x - s.w / 2}px, ${
          body.position.y - s.h / 2
        }px) rotate(${body.angle}rad)`;
      });
      frameId = requestAnimationFrame(step);
    };
    frameId = requestAnimationFrame(step);

    return () => {
      cancelAnimationFrame(frameId);
      Matter.Mouse.clearSourceEvents(mouse);
      Matter.Composite.clear(engine.world, false);
      Matter.Engine.clear(engine);
    };
  }, [dropped, size]);

  return (
    <div
      ref={cardRef}
      className="relative overflow-hidden rounded-3xl bg-[#606c38] p-8 sm:col-span-2 lg:col-span-2 lg:min-h-[380px] lg:p-10"
    >
      <div className="absolute inset-0 flex flex-wrap content-start items-start gap-3 p-8 lg:p-10">
        {skills.map(({ label, Icon }, i) => (
          <span
            key={label}
            ref={(el) => {
              pillRefs.current[i] = el;
            }}
            className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-4 py-2.5 font-sans text-[14px] font-light leading-[130%] whitespace-nowrap text-text-heading select-none sm:gap-[10px] sm:px-6 sm:py-4 sm:text-[20px]"
          >
            {label}
            <Icon className="size-4 shrink-0 text-dark-green sm:size-6" />
          </span>
        ))}
      </div>
    </div>
  );
}
