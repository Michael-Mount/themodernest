"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

export default function TextTwoImageSection({
  eyebrow = "The Modernest Collection",
  title = "Refined apartment living in Nashville",
  description = "Experience a more elevated stay with modern interiors, thoughtful amenities, and apartment-style comfort designed for both short visits and extended escapes.",
  buttonLabel = "Explore More",
  buttonHref = "/",
  imageOne,
  imageTwo,
  imageOneAlt = "Luxury apartment interior",
  imageTwoAlt = "Modern apartment detail",
  reverse = false,
}) {
  const sectionRef = useRef(null);
  const imageGroupRef = useRef(null);

  useGSAP(
    () => {
      const textItems = gsap.utils.toArray(".text-animate");
      const imageItems = gsap.utils.toArray(".image-animate");

      gsap.from(textItems, {
        opacity: 0,
        y: 28,
        duration: 1,
        ease: "power2.out",
        stagger: 0.25,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 25%",
          toggleActions: "play none none none",
        },
      });

      gsap.from(imageItems, {
        opacity: 0,
        y: 36,
        duration: 1,
        ease: "power2.out",
        stagger: 0.16,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 72%",
          toggleActions: "play none none none",
        },
      });

      gsap.to(imageGroupRef.current, {
        y: -80,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: 1,
        },
      });
    },
    { scope: sectionRef },
  );

  return (
    <section
      ref={sectionRef}
      className="w-full overflow-hidden bg-renew text-white px-6 py-20 md:py-28"
    >
      <div
        className={`mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[2fr_1fr] ${
          reverse ? "lg:grid-flow-dense" : ""
        }`}
      >
        <div className={reverse ? "lg:col-start-2" : ""}>
          <p className="text-animate mb-4 font-montserrat text-sm uppercase tracking-[0.3em] text-white">
            {eyebrow}
          </p>

          <h4 className="text-animate max-w-3xl font-prata text-4xl uppercase leading-tight md:text-5xl lg:text-6xl">
            {title}
          </h4>

          <p className="text-animate mt-6 max-w-2xl font-montserrat text-base leading-8 text-white md:text-lg">
            {description}
          </p>

          {buttonLabel && buttonHref && (
            <div className="text-animate mt-10">
              <Link
                href={buttonHref}
                className="inline-block rounded bg-white px-10 py-4 font-montserrat text-sm uppercase tracking-wide text-renew transition-colors duration-300 hover:bg-rest md:text-base"
              >
                {buttonLabel}
              </Link>
            </div>
          )}
        </div>

        <div
          ref={imageGroupRef}
          className={`flex items-end gap-4 md:gap-6 ${
            reverse ? "lg:col-start-1 lg:row-start-1" : ""
          }`}
        >
          <div className="image-animate relative h-[420px] flex-1 overflow-hidden rounded-t-full md:h-[540px]">
            <Image
              src={imageOne}
              alt={imageOneAlt}
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 50vw, 20vw"
            />
          </div>

          <div className="image-animate relative h-[360px] flex-1 overflow-hidden rounded-t-full md:h-[460px]">
            <Image
              src={imageTwo}
              alt={imageTwoAlt}
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 50vw, 16vw"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
