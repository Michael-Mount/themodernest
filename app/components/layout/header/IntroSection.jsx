"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger, useGSAP);

export default function IntroSection() {
  const sectionRef = useRef(null);

  useGSAP(
    () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 78%",
          toggleActions: "play none none none",
        },
      });

      tl.from(".intro-eyebrow", {
        opacity: 0,
        y: 20,
        duration: 0.7,
        ease: "power2.out",
      })
        .from(
          ".intro-heading",
          {
            opacity: 0,
            y: 24,
            duration: 0.8,
            ease: "power2.out",
          },
          "-=0.35",
        )
        .from(
          ".intro-text",
          {
            opacity: 0,
            y: 24,
            duration: 0.8,
            ease: "power2.out",
          },
          "-=0.3",
        )
        .from(
          ".intro-button",
          {
            opacity: 0,
            y: 20,
            duration: 0.7,
            ease: "power2.out",
          },
          "-=0.25",
        );
    },
    { scope: sectionRef },
  );

  return (
    <section
      ref={sectionRef}
      className="mx-auto flex w-full max-w-6xl flex-col items-center justify-center px-6 py-20 text-center md:py-28"
    >
      <div className="flex max-w-5xl flex-col items-center">
        <p className="intro-eyebrow mb-4 text-sm uppercase tracking-[0.3em] text-renew">
          The Modernest Collection
        </p>

        <h1 className="intro-heading font-prata text-5xl uppercase leading-tight md:text-6xl lg:text-7xl">
          Modern Luxury
        </h1>

        <div className="intro-text mt-10 grid gap-8 text-left text-base leading-8 text-neutral-700 md:grid-cols-2 md:gap-12">
          <p>
            Discover a refined Nashville stay designed for travelers who want
            more than a place to sleep. The Modernest Collection brings together
            elevated interiors, thoughtful amenities, and a sense of calm within
            two distinct apartment-style destinations.
          </p>

          <p>
            Whether you are visiting for a weekend escape, an extended stay, or
            a special occasion, each residence blends modern comfort with a
            polished, design-forward atmosphere made to feel private, personal,
            and effortless.
          </p>
        </div>

        <div className="intro-button mt-12">
          <button className="rounded bg-renew px-12 py-4 font-montserrat text-lg uppercase tracking-wide text-white transition-colors duration-300 hover:bg-rest md:px-16 md:text-xl">
            Book Now
          </button>
        </div>
      </div>
    </section>
  );
}
