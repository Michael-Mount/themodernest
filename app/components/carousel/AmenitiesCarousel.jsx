"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

const defaultAmenities = [
  {
    title: "Private Residences",
    description:
      "Apartment-style layouts designed for comfort, privacy, and extended stays.",
  },
  {
    title: "Curated Interiors",
    description:
      "Refined finishes, warm textures, and modern details throughout each space.",
  },
  {
    title: "Prime Nashville Locations",
    description:
      "Stay close to dining, entertainment, nightlife, and neighborhood favorites.",
  },
  {
    title: "Fully Equipped Kitchens",
    description:
      "Modern kitchens with everything needed for relaxed mornings or longer visits.",
  },
  {
    title: "High-Speed Wi-Fi",
    description:
      "Fast, reliable connection for remote work, streaming, and everyday convenience.",
  },
  {
    title: "Luxury Linens",
    description:
      "Soft bedding and elevated essentials selected for a restful stay.",
  },
];

export default function AmenitiesCarousel({
  eyebrow = "Amenities",
  title = "Designed for effortless modern living",
  amenities = defaultAmenities,
}) {
  const sectionRef = useRef(null);
  const trackRef = useRef(null);
  const tweenRef = useRef(null);

  const repeatedAmenities = [...amenities, ...amenities];

  useGSAP(
    () => {
      const track = trackRef.current;
      if (!track) return;

      const distance = track.scrollWidth / 2;

      tweenRef.current = gsap.to(track, {
        x: -distance,
        duration: 45,
        ease: "none",
        repeat: -1,
        modifiers: {
          x: gsap.utils.unitize((x) => parseFloat(x) % -distance),
        },
      });

      gsap.from(".amenity-heading", {
        opacity: 0,
        y: 24,
        duration: 0.8,
        ease: "power2.out",
        stagger: 0.12,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
          toggleActions: "play none none none",
        },
      });

      gsap.from(".amenity-card", {
        opacity: 0,
        y: 32,
        duration: 0.9,
        ease: "power2.out",
        stagger: 0.08,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 65%",
          toggleActions: "play none none none",
        },
      });
    },
    { scope: sectionRef },
  );

  const pauseCarousel = () => {
    tweenRef.current?.pause();
  };

  const playCarousel = () => {
    tweenRef.current?.play();
  };

  return (
    <section
      ref={sectionRef}
      className="w-full overflow-hidden bg-stone-50 px-6 py-20 md:py-28"
    >
      <div className="mx-auto max-w-7xl">
        <div className="mb-14 max-w-3xl">
          <p className="amenity-heading mb-4 font-montserrat text-sm uppercase tracking-[0.35em] text-renew">
            {eyebrow}
          </p>

          <h4 className="amenity-heading font-prata text-4xl uppercase leading-tight text-renew md:text-5xl lg:text-6xl">
            {title}
          </h4>
        </div>

        <div
          className="relative"
          onMouseEnter={pauseCarousel}
          onMouseLeave={playCarousel}
        >
          <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-20 " />
          <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-20 " />

          <div
            ref={trackRef}
            className="flex w-max gap-6 will-change-transform"
          >
            {repeatedAmenities.map((amenity, index) => (
              <article
                key={`${amenity.title}-${index}`}
                className="amenity-card flex h-70 w-70 shrink-0 flex-col justify-between border border-neutral-200 bg-white p-8 shadow-sm md:h-[320px] md:w-[360px]"
              >
                <div>
                  <span className="mb-8 block h-px w-12 bg-renew" />

                  <h3 className="font-prata text-2xl uppercase leading-tight text-renew md:text-3xl">
                    {amenity.title}
                  </h3>
                </div>

                <p className="font-montserrat text-sm leading-7 text-neutral-600 md:text-base">
                  {amenity.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
