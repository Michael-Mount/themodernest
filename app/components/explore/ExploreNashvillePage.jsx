"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const neighborhoods = [
  {
    title: "The Gulch",
    description:
      "Steps from The Mondernest Gulch View, The Gulch blends modern energy with some of Nashville’s best dining, shopping, and nightlife. It is one of the city’s most vibrant districts and a perfect extension of the living experience.",
    image:
      "https://res.cloudinary.com/dnhvjwqak/image/upload/v1778248823/modernest-extrior_qkwnbp.png",
    alt: "The Gulch neighborhood in Nashville",
  },
  {
    title: "Downtown Nashville",
    description:
      "From Broadway’s iconic music scene to unforgettable live performances, Downtown Nashville delivers the spirit of the city in full. Living in the heart of Nashville means being close to the culture, creativity, and excitement that define it.",
    image:
      "https://images.unsplash.com/photo-1715013550766-6dade517c856?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "Downtown Nashville city view",
  },
  {
    title: "12 South",
    description:
      "Known for its walkable charm, boutiques, coffee shops, and local favorites, 12 South offers a softer side of Nashville while still feeling lively and distinctly local.",
    image:
      "https://res.cloudinary.com/dnhvjwqak/image/upload/v1778249344/citynownext_1_vjqt0z.png",
    alt: "12 South neighborhood in Nashville",
  },
];

const highlights = [
  {
    title: "Live Music",
    text: "Nashville is one of the great music cities in the world. From legendary venues to intimate local stages, the city offers a soundtrack that is always evolving.",
  },
  {
    title: "Dining",
    text: "The food scene is a major part of Nashville’s appeal, with elevated dining, neighborhood gems, late-night favorites, and a style of hospitality that feels both warm and memorable.",
  },
  {
    title: "Culture",
    text: "Museums, art, sports, events, and a strong local identity give Nashville depth beyond its nightlife. It is a city with energy, but also character and creative soul.",
  },
  {
    title: "Walkable Energy",
    text: "Living at The Mondernest Gulch View places you near some of the city’s most sought-after experiences, making it easy to move from slow mornings to lively evenings.",
  },
];

export default function ExploreNashvillePage() {
  const pageRef = useRef(null);
  const heroImageRef = useRef(null);
  const featureImageRef = useRef(null);
  const bottomImageRef = useRef(null);

  useGSAP(
    () => {
      gsap.from(".hero-animate", {
        opacity: 0,
        y: 30,
        duration: 0.9,
        stagger: 0.12,
        ease: "power2.out",
      });

      gsap.from(".section-animate", {
        opacity: 0,
        y: 28,
        duration: 0.8,
        stagger: 0.12,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".intro-section",
          start: "top 78%",
          toggleActions: "play none none none",
        },
      });

      gsap.from(".card-animate", {
        opacity: 0,
        y: 36,
        duration: 0.85,
        stagger: 0.12,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".highlights-grid",
          start: "top 75%",
          toggleActions: "play none none none",
        },
      });

      gsap.from(".neighborhood-card", {
        opacity: 0,
        y: 40,
        duration: 0.9,
        stagger: 0.14,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".neighborhoods-section",
          start: "top 75%",
          toggleActions: "play none none none",
        },
      });

      gsap.from(".cta-animate", {
        opacity: 0,
        y: 28,
        duration: 0.8,
        stagger: 0.1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".cta-section",
          start: "top 80%",
          toggleActions: "play none none none",
        },
      });

      gsap.to(heroImageRef.current, {
        y: -80,
        ease: "none",
        scrollTrigger: {
          trigger: ".hero-image-wrap",
          start: "top bottom",
          end: "bottom top",
          scrub: 1,
        },
      });

      gsap.to(featureImageRef.current, {
        y: -70,
        ease: "none",
        scrollTrigger: {
          trigger: ".feature-image-wrap",
          start: "top bottom",
          end: "bottom top",
          scrub: 1,
        },
      });

      gsap.to(bottomImageRef.current, {
        y: -60,
        ease: "none",
        scrollTrigger: {
          trigger: ".bottom-image-wrap",
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
      {/* Hero */}
      <section className="px-6 py-20 md:py-28">
        <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-[1fr_1.05fr]">
          <div>
            <p className="hero-animate mb-4 font-montserrat text-sm uppercase tracking-[0.35em] text-renew">
              Explore Nashville
            </p>

            <h1 className="hero-animate font-prata text-5xl uppercase leading-tight md:text-6xl lg:text-7xl">
              Living in the heart of Nashville
            </h1>

            <p className="hero-animate mt-8 max-w-2xl font-montserrat text-base leading-8 text-neutral-700 md:text-lg">
              At The Mondernest Gulch View, living places you close to the best
              of Nashville. From celebrated music and vibrant nightlife to
              exceptional dining, walkable neighborhoods, and a creative spirit
              that runs through the entire city, Nashville offers an experience
              that feels alive, welcoming, and unforgettable.
            </p>

            <p className="hero-animate mt-6 max-w-2xl font-montserrat text-base leading-8 text-neutral-700 md:text-lg">
              This is a city with momentum and soul. Whether the day calls for
              coffee in The Gulch, an evening of live music downtown, or a slow
              afternoon exploring local shops and culture, The Mondernest keeps
              you connected to it all.
            </p>

            <div className="hero-animate mt-10 flex flex-wrap gap-4">
              <Link
                href="/rooms"
                className="inline-block bg-renew px-10 py-4 font-montserrat text-sm uppercase tracking-wide text-white transition-colors duration-300 hover:bg-rest"
              >
                Begin Living Here
              </Link>

              <Link
                href="/gallery"
                className="inline-block border border-neutral-900 px-10 py-4 font-montserrat text-sm uppercase tracking-wide text-neutral-900 transition-colors duration-300 hover:bg-neutral-900 hover:text-white"
              >
                View Gallery
              </Link>
            </div>
          </div>

          <div className="hero-image-wrap relative h-[520px] overflow-hidden rounded-t-full md:h-[680px]">
            <div
              ref={heroImageRef}
              className="absolute inset-0 h-[115%] w-full"
            >
              <Image
                src="https://images.unsplash.com/photo-1556033681-83abea291a96?q=80&w=1928&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Nashville skyline near The Mondernest Gulch View"
                fill
                priority
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Intro */}
      <section className="intro-section px-6 py-16 md:py-24">
        <div className="mx-auto max-w-5xl text-center">
          <p className="section-animate mb-4 font-montserrat text-sm uppercase tracking-[0.35em] text-renew">
            Why Nashville
          </p>

          <h2 className="section-animate font-prata text-4xl uppercase leading-tight md:text-5xl lg:text-6xl">
            A city that gives every day more character
          </h2>

          <p className="section-animate mx-auto mt-8 max-w-4xl font-montserrat text-base leading-8 text-neutral-700 md:text-lg">
            Nashville is more than a destination. It is a place of music,
            movement, creativity, and hospitality. There is a reason so many
            people are drawn to it. The city brings together iconic energy and
            neighborhood warmth, creating a lifestyle that feels exciting,
            expressive, and easy to enjoy.
          </p>
        </div>
      </section>

      {/* Highlights */}
      <section className="px-6 py-16 md:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mb-14 max-w-3xl">
            <p className="mb-4 font-montserrat text-sm uppercase tracking-[0.35em] text-renew">
              City Highlights
            </p>

            <h2 className="font-prata text-4xl uppercase leading-tight md:text-5xl">
              What makes Nashville so exceptional
            </h2>
          </div>

          <div className="highlights-grid grid gap-px bg-neutral-200 md:grid-cols-2">
            {highlights.map((item, index) => (
              <article
                key={item.title}
                className="card-animate bg-white p-8 md:p-10"
              >
                <span className="mb-8 block font-prata text-4xl text-renew/70">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <h3 className="font-prata text-2xl uppercase leading-tight md:text-3xl">
                  {item.title}
                </h3>

                <p className="mt-5 font-montserrat text-sm leading-7 text-neutral-600 md:text-base">
                  {item.text}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Feature split section */}
      <section className="px-6 py-20 md:py-28">
        <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-[0.95fr_1fr]">
          <div className="feature-image-wrap relative h-[480px] overflow-hidden md:h-[620px]">
            <div
              ref={featureImageRef}
              className="absolute inset-0 h-[115%] w-full"
            >
              <Image
                src="https://images.unsplash.com/photo-1715013648099-3cf616c3f264?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Broadway and live music scene in Nashville"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 45vw"
              />
            </div>
          </div>

          <div>
            <p className="section-animate mb-4 font-montserrat text-sm uppercase tracking-[0.35em] text-renew">
              In the center of it all
            </p>

            <h2 className="section-animate font-prata text-4xl uppercase leading-tight md:text-5xl lg:text-6xl">
              The Mondernest connects you to the best of city living
            </h2>

            <p className="section-animate mt-7 max-w-2xl font-montserrat text-base leading-8 text-neutral-700 md:text-lg">
              Living at The Mondernest Gulch View means waking up in one of the
              most desirable areas of Nashville and moving through the city with
              ease. The location places you near celebrated restaurants, local
              favorites, shopping, live music, sports, and the unmistakable
              spirit that makes Nashville one of the country’s most loved
              cities.
            </p>

            <p className="section-animate mt-6 max-w-2xl font-montserrat text-base leading-8 text-neutral-700 md:text-lg">
              It is a place where the experience extends far beyond the front
              door. Nashville becomes part of daily living — energetic when you
              want it, welcoming when you need it, and always full of
              personality.
            </p>
          </div>
        </div>
      </section>

      {/* Neighborhoods */}
      <section className="neighborhoods-section bg-white px-6 py-20 md:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="mb-14 max-w-3xl">
            <p className="mb-4 font-montserrat text-sm uppercase tracking-[0.35em] text-renew">
              Nearby Neighborhoods
            </p>

            <h2 className="font-prata text-4xl uppercase leading-tight md:text-5xl">
              Explore the places that shape Nashville
            </h2>
          </div>

          <div className="grid gap-10 lg:grid-cols-3">
            {neighborhoods.map((spot) => (
              <article key={spot.title} className="neighborhood-card">
                <div className="relative h-[360px] overflow-hidden">
                  <Image
                    src={spot.image}
                    alt={spot.alt}
                    fill
                    className="object-cover transition-transform duration-700 hover:scale-105"
                    sizes="(max-width: 1024px) 100vw, 33vw"
                  />
                </div>

                <div className="bg-stone-50 px-6 py-8">
                  <h3 className="font-prata text-2xl uppercase leading-tight md:text-3xl">
                    {spot.title}
                  </h3>

                  <p className="mt-4 font-montserrat text-sm leading-7 text-neutral-600 md:text-base">
                    {spot.description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom image section */}
      <section className="px-6 py-20 md:py-28">
        <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-[1fr_0.9fr]">
          <div>
            <p className="section-animate mb-4 font-montserrat text-sm uppercase tracking-[0.35em] text-renew">
              Nashville Living
            </p>

            <h2 className="section-animate max-w-3xl font-prata text-4xl uppercase leading-tight md:text-5xl lg:text-6xl">
              Rich in culture, full of movement, and impossible to forget
            </h2>

            <p className="section-animate mt-7 max-w-2xl font-montserrat text-base leading-8 text-neutral-700 md:text-lg">
              Nashville continues to grow because it offers something special:
              creativity, hospitality, and a way of living that feels both
              dynamic and personal. It is as well known for big moments as it is
              for neighborhood charm.
            </p>

            <p className="section-animate mt-6 max-w-2xl font-montserrat text-base leading-8 text-neutral-700 md:text-lg">
              At The Mondernest Gulch View, that energy is right outside your
              door. Living here means being part of a city that knows how to
              celebrate music, food, culture, and connection.
            </p>
          </div>

          <div className="bottom-image-wrap relative h-[440px] overflow-hidden rounded-t-full md:h-[580px]">
            <div
              ref={bottomImageRef}
              className="absolute inset-0 h-[115%] w-full"
            >
              <Image
                src="https://images.unsplash.com/photo-1545419913-775e3e82c7db?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Nashville at night near The Mondernest Gulch View"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 40vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-section bg-neutral-950 px-6 py-20 text-white md:py-28">
        <div className="mx-auto max-w-5xl text-center">
          <p className="cta-animate mb-4 font-montserrat text-sm uppercase tracking-[0.35em] text-renew">
            Discover The Mondernest
          </p>

          <h2 className="cta-animate font-prata text-4xl uppercase leading-tight md:text-5xl lg:text-6xl">
            Experience elevated living in the heart of Nashville
          </h2>

          <p className="cta-animate mx-auto mt-8 max-w-3xl font-montserrat text-base leading-8 text-white/70 md:text-lg">
            The Mondernest Gulch View offers a refined way to experience one of
            the country’s most exciting cities — with Nashville’s music, dining,
            culture, and energy always close at hand.
          </p>

          <div className="cta-animate mt-10 flex flex-wrap justify-center gap-4">
            <Link
              href="/rooms"
              className="inline-block bg-renew px-10 py-4 font-montserrat text-sm uppercase tracking-wide text-white transition-colors duration-300 hover:bg-rest"
            >
              Explore Living Options
            </Link>

            <Link
              href="/contact"
              className="inline-block border border-white/25 px-10 py-4 font-montserrat text-sm uppercase tracking-wide text-white transition-colors duration-300 hover:bg-white hover:text-neutral-900"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
