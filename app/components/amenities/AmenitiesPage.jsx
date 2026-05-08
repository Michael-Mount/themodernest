"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const defaultAmenities = [
  {
    title: "Private Apartment-Style Living",
    description:
      "Enjoy the comfort of a fully private residence with the polished feel of a boutique hospitality experience.",
  },
  {
    title: "Designer Furnishings",
    description:
      "Curated interiors, refined finishes, and warm modern details create a calm and elevated atmosphere.",
  },
  {
    title: "Fully Equipped Kitchen",
    description:
      "Prepare meals, host casually, or settle in for an extended stay with a kitchen designed for real daily living.",
  },
  {
    title: "High-Speed Wi-Fi",
    description:
      "Reliable connectivity for working remotely, streaming, or planning your next Nashville outing.",
  },
  {
    title: "In-Unit Laundry",
    description:
      "A practical luxury that makes longer stays, weekend trips, and travel routines feel effortless.",
  },
  {
    title: "Premium Linens",
    description:
      "Soft bedding, comfortable textures, and thoughtful essentials designed for restorative rest.",
  },
];

const featureImages = [
  {
    src: "https://images.unsplash.com/photo-1741764014072-68953e93cd48?q=80&w=1819&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "Modern luxury living room at The Modernest Glutch View",
  },
  {
    src: "https://images.unsplash.com/photo-1611095210561-67f0832b1ca3?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "Fully equipped luxury kitchen at The Modernest Glutch View",
  },
  {
    src: "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?q=80&w=1160&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "Elegant bedroom at The Modernest Glutch View",
  },
];

export default function AmenitiesPage({
  propertyName = "The Modernest Glutch View",
  eyebrow = "Amenities",
  title = "Elevated essentials for modern Nashville living",
  intro = "Designed for comfort, privacy, and effortless stays, The Modernest Glutch View brings together apartment-style convenience with a refined hospitality experience.",
  amenities = defaultAmenities,
  images = featureImages,
}) {
  const pageRef = useRef(null);
  const heroImageRef = useRef(null);
  const sideImageRef = useRef(null);
  const bottomImageRef = useRef(null);

  useGSAP(
    () => {
      gsap.from(".amenities-hero-text", {
        opacity: 0,
        y: 28,
        duration: 0.9,
        ease: "power2.out",
        stagger: 0.12,
      });

      gsap.from(".amenity-card", {
        opacity: 0,
        y: 36,
        duration: 0.85,
        ease: "power2.out",
        stagger: 0.1,
        scrollTrigger: {
          trigger: ".amenities-grid",
          start: "top 75%",
          toggleActions: "play none none none",
        },
      });

      gsap.from(".feature-text", {
        opacity: 0,
        y: 28,
        duration: 0.85,
        ease: "power2.out",
        stagger: 0.12,
        scrollTrigger: {
          trigger: ".feature-section",
          start: "top 75%",
          toggleActions: "play none none none",
        },
      });

      gsap.from(".detail-card", {
        opacity: 0,
        y: 28,
        duration: 0.8,
        ease: "power2.out",
        stagger: 0.12,
        scrollTrigger: {
          trigger: ".details-section",
          start: "top 75%",
          toggleActions: "play none none none",
        },
      });

      gsap.to(heroImageRef.current, {
        y: -90,
        ease: "none",
        scrollTrigger: {
          trigger: ".hero-image-wrap",
          start: "top bottom",
          end: "bottom top",
          scrub: 1,
        },
      });

      gsap.to(sideImageRef.current, {
        y: -70,
        ease: "none",
        scrollTrigger: {
          trigger: ".feature-section",
          start: "top bottom",
          end: "bottom top",
          scrub: 1,
        },
      });

      gsap.to(bottomImageRef.current, {
        y: -60,
        ease: "none",
        scrollTrigger: {
          trigger: ".bottom-image-section",
          start: "top bottom",
          end: "bottom top",
          scrub: 1,
        },
      });
    },
    { scope: pageRef },
  );

  return (
    <main
      ref={pageRef}
      className="overflow-hidden bg-stone-50 text-neutral-900"
    >
      <section className="px-6 py-20 md:py-28">
        <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-[1fr_1.1fr]">
          <div>
            <p className="amenities-hero-text mb-5 font-montserrat text-sm uppercase tracking-[0.35em] text-renew">
              {eyebrow}
            </p>

            <h1 className="amenities-hero-text font-prata text-5xl text-rest uppercase leading-tight md:text-6xl lg:text-7xl">
              {propertyName}
            </h1>

            <p className="amenities-hero-text mt-8 max-w-2xl font-montserrat text-base leading-8 text-neutral-700 md:text-lg">
              {intro}
            </p>

            <div className="amenities-hero-text mt-10">
              <Link
                href="/booking"
                className="inline-block bg-renew px-10 py-4 font-montserrat text-sm uppercase tracking-wide text-white transition-colors duration-300 hover:bg-rest"
              >
                Book Your Stay
              </Link>
            </div>
          </div>

          <div className="hero-image-wrap relative h-[520px] overflow-hidden rounded-t-full md:h-[680px]">
            <div
              ref={heroImageRef}
              className="absolute inset-0 h-[115%] w-full"
            >
              <Image
                src={images[0]?.src}
                alt={images[0]?.alt || "Luxury apartment amenity image"}
                fill
                priority
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 py-16 md:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mb-14 max-w-3xl">
            <p className="mb-4 font-montserrat text-sm uppercase tracking-[0.35em] text-renew">
              Offered Amenities
            </p>

            <h2 className="font-prata text-4xl text-rest uppercase leading-tight md:text-5xl">
              Thoughtfully designed for ease, comfort, and privacy
            </h2>
          </div>

          <div className="amenities-grid grid gap-px bg-neutral-200 md:grid-cols-2 lg:grid-cols-3">
            {amenities.map((amenity, index) => (
              <article
                key={amenity.title}
                className="amenity-card bg-white p-8 md:p-10"
              >
                <span className="mb-8 block font-prata text-4xl text-renew/70">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <h3 className="font-prata text-rest text-2xl uppercase leading-tight md:text-3xl">
                  {amenity.title}
                </h3>

                <p className="mt-5 font-montserrat text-sm leading-7 text-neutral-600 md:text-base">
                  {amenity.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="feature-section px-6 py-20 md:py-28">
        <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-[0.9fr_1fr]">
          <div className="relative h-[480px] overflow-hidden md:h-[620px]">
            <div
              ref={sideImageRef}
              className="absolute inset-0 h-[115%] w-full"
            >
              <Image
                src={images[1]?.src}
                alt={images[1]?.alt || "Luxury kitchen amenity image"}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 45vw"
              />
            </div>
          </div>

          <div>
            <p className="feature-text mb-5 font-montserrat text-sm uppercase tracking-[0.35em] text-renew">
              Apartment Comfort
            </p>

            <h2 className="feature-text font-prata text-4xl uppercase leading-tight md:text-5xl lg:text-6xl">
              Stay longer, settle deeper, live easier
            </h2>

            <p className="feature-text mt-7 max-w-2xl font-montserrat text-base leading-8 text-neutral-700 md:text-lg">
              Every detail is selected to make the residence feel polished,
              practical, and personal. From morning coffee in the kitchen to
              quiet evenings in the living space, the amenities support the way
              guests actually move through their stay.
            </p>

            <div className="feature-text mt-10 grid gap-5 sm:grid-cols-2">
              <div className="border-l border-renew pl-5">
                <h3 className="font-prata text-2xl uppercase">
                  Flexible Stays
                </h3>
                <p className="mt-3 font-montserrat text-sm leading-7 text-neutral-600">
                  Built for weekend trips, work travel, and extended visits.
                </p>
              </div>

              <div className="border-l border-renew pl-5">
                <h3 className="font-prata text-2xl uppercase">
                  Refined Details
                </h3>
                <p className="mt-3 font-montserrat text-sm leading-7 text-neutral-600">
                  Elevated finishes, modern furniture, and calm textures.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="details-section bg-renew px-6 py-20 text-white md:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="mb-14 grid gap-8 md:grid-cols-[1fr_1.2fr] md:items-end">
            <div>
              <p className="mb-4 font-montserrat text-sm uppercase tracking-[0.35em] text-white">
                Guest Experience
              </p>

              <h2 className="font-prata text-4xl uppercase leading-tight md:text-5xl">
                A quieter kind of luxury
              </h2>
            </div>

            <p className="max-w-2xl font-montserrat text-base leading-8 text-white/65 md:text-lg">
              The experience is intentionally simple: beautiful spaces, useful
              amenities, and a stay that feels private from arrival to
              departure.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            <article className="detail-card border border-white/15 p-8">
              <h3 className="font-prata text-2xl uppercase">Privacy</h3>
              <p className="mt-4 font-montserrat text-sm leading-7 text-white/60">
                A residence-style stay with more independence than a traditional
                hotel room.
              </p>
            </article>

            <article className="detail-card border border-white/15 p-8">
              <h3 className="font-prata text-2xl uppercase">Location</h3>
              <p className="mt-4 font-montserrat text-sm leading-7 text-white/60">
                Positioned for access to Nashville dining, nightlife,
                entertainment, and local favorites.
              </p>
            </article>

            <article className="detail-card border border-white/15 p-8">
              <h3 className="font-prata text-2xl uppercase">Ease</h3>
              <p className="mt-4 font-montserrat text-sm leading-7 text-white/60">
                Practical amenities that support effortless travel from check-in
                through checkout.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="bottom-image-section px-6 py-20 md:py-28">
        <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[1fr_0.85fr]">
          <div>
            <p className="mb-5 font-montserrat text-sm uppercase tracking-[0.35em] text-renew">
              Modern Nashville
            </p>

            <h2 className="max-w-3xl font-prata text-renew text-4xl uppercase leading-tight md:text-5xl">
              An elevated base for your stay in the city
            </h2>

            <p className="mt-7 max-w-2xl font-montserrat text-base leading-8 text-neutral-700 md:text-lg">
              Whether your plans are centered around dining, live music, work,
              or slow mornings in, The Modernest Glutch View offers a polished
              place to return to.
            </p>
          </div>

          <div className="relative h-[420px] overflow-hidden rounded-t-full md:h-[560px]">
            <div
              ref={bottomImageRef}
              className="absolute inset-0 h-[115%] w-full"
            >
              <Image
                src={images[2]?.src}
                alt={images[2]?.alt || "Luxury bedroom amenity image"}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 40vw"
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
