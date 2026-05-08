import Image from "next/image";
import Link from "next/link";

const defaultLogos = [
  {
    src: "/white-logo.png",
    alt: "The Modernest Collection logo",
    href: "/",
  },
  {
    src: "/CA-south-logo.png",
    alt: "CA South logo",
    href: "https://www.casouthdevelopment.com/",
  },
  {
    src: "/HCWhiteLogo.png",
    alt: "Haycreek Hotels logo",
    href: "/residences/location-two",
  },
];

const defaultLinks = [
  { label: "Stay", href: "/rooms" },

  { label: "Gallery", href: "/gallery" },

  { label: "Contact", href: "/contact-us" },
];

export default function Footer({
  logos = defaultLogos,
  links = defaultLinks,
  newsletterTitle = "Stay connected",
  newsletterText = "Receive updates, seasonal offers, and curated Nashville recommendations from The Modernest Collection.",
}) {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-renew px-6 py-16 text-white md:py-20">
      <div className="mx-auto max-w-7xl">
        <div className="border-b border-white/15 pb-12">
          <p className="mb-8 text-center font-montserrat text-xs uppercase tracking-[0.35em] text-white/60">
            The Modernest Gultch View
          </p>

          <div className="flex flex-col items-center justify-center gap-8 md:flex-row md:gap-14">
            {logos.map((logo, index) => (
              <Link
                key={`${logo.alt}-${index}`}
                href={logo.href}
                className="group opacity-80 transition-opacity duration-300 hover:opacity-100"
              >
                <div className="relative h-14 w-44 grayscale transition duration-300 group-hover:grayscale-0">
                  <Image
                    src={logo.src}
                    alt={logo.alt}
                    fill
                    className="object-contain"
                    sizes="176px"
                  />
                </div>
              </Link>
            ))}
          </div>
        </div>

        <div className="grid gap-12 border-b border-white/15 py-12 lg:grid-cols-[1fr_1.2fr] lg:items-start">
          <div>
            <p className="mb-4 font-montserrat text-xs uppercase tracking-[0.35em] text-renew">
              Newsletter
            </p>

            <h2 className="font-prata text-4xl uppercase leading-tight md:text-5xl">
              {newsletterTitle}
            </h2>

            <p className="mt-5 max-w-xl font-montserrat text-sm leading-7 text-white/65 md:text-base">
              {newsletterText}
            </p>
          </div>

          <form className="flex flex-col gap-4 md:flex-row lg:justify-end">
            <label htmlFor="footer-email" className="sr-only">
              Email address
            </label>

            <input
              id="footer-email"
              type="email"
              name="email"
              placeholder="Email address"
              className="min-h-14 w-full border border-white/20 bg-white/5 px-5 font-montserrat text-sm text-white outline-none transition-colors duration-300 placeholder:text-white/45 focus:border-renew md:max-w-md"
            />

            <button
              type="submit"
              className="min-h-14 bg-renew px-8 font-montserrat text-sm uppercase tracking-wide text-white transition-colors duration-300 hover:bg-rest"
            >
              Subscribe
            </button>
          </form>
        </div>

        <div className="flex flex-col gap-8 pt-10 md:flex-row md:items-center md:justify-between">
          <nav aria-label="Footer navigation">
            <ul className="flex flex-wrap gap-x-8 gap-y-4">
              {links.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="font-montserrat text-sm uppercase tracking-wide text-white/60 transition-colors duration-300 hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <p className="font-montserrat text-sm text-white/45">
            © {currentYear} The Modernest Collection. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
