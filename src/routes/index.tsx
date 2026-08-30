import { createFileRoute } from "@tanstack/react-router";
import {
  ClipboardList,
  Briefcase,
  GraduationCap,
  Images,
  MapPin,
  Phone,
  Mail,
  Globe,
  Facebook,
  Instagram,
  ArrowUpRight,
} from "lucide-react";
import crest from "../assets/tcs-crest.png";

/*
 * TCS Link Hub — quick links configuration.
 * Replace each href with the live URL when available.
 */
const LINKS = [
  {
    label: "Inquiry Form",
    description: "Questions? Send us a message",
    href: "https://forms.google.com/your-inquiry-form", // TODO: insert Google Form link
    icon: ClipboardList,
    variant: "primary" as const,
  },
  {
    label: "Admissions Portal",
    description: "Begin your child's journey",
    href: "https://www.tcsch.edu.gh/admissions", // TODO: insert admissions portal link
    icon: GraduationCap,
    variant: "primary" as const,
  },
  {
    label: "Careers & Job Openings",
    description: "Join our team of educators",
    href: "https://www.tcsch.edu.gh/careers", // TODO: insert career portal URL
    icon: Briefcase,
    variant: "secondary" as const,
  },
  {
    label: "School Gallery",
    description: "See life at TCS",
    href: "https://www.instagram.com/tcsch", // TODO: insert gallery/Instagram link
    icon: Images,
    variant: "primary" as const,
  },
  {
    label: "Visit Us",
    description: "Find us in Ho, Volta Region",
    href: "https://maps.google.com/?q=Treasures+Christian+School+Ho+Volta+Region+Ghana", // TODO: confirm exact Maps link
    icon: MapPin,
    variant: "secondary" as const,
  },
];

const CONTACT = {
  phone: "+233 XX XXX XXXX", // TODO: insert phone number
  phoneHref: "tel:+233XXXXXXXXX", // TODO: insert dialable number
  email: "info@tcsch.edu.gh",
  website: "www.tcsch.edu.gh",
  websiteHref: "https://www.tcsch.edu.gh",
};

const SOCIALS = [
  { label: "Facebook", href: "https://www.facebook.com/tcsch", icon: Facebook }, // TODO: confirm URL
  { label: "Instagram", href: "https://www.instagram.com/tcsch", icon: Instagram }, // TODO: confirm URL
];

export const Route = createFileRoute("/")({
  component: LinkHub,
  head: () => ({
    meta: [
      { title: "Treasures Christian School — Links & Contact" },
      {
        name: "description",
        content:
          "Treasures Christian School, Ho — quick links to admissions, inquiries, careers, gallery and directions. Every child is a treasure.",
      },
      { property: "og:title", content: "Treasures Christian School — Links & Contact" },
      {
        property: "og:description",
        content:
          "Quick links to admissions, inquiries, careers, gallery and directions. Every child is a treasure.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary" },
      { name: "twitter:title", content: "Treasures Christian School — Links & Contact" },
      {
        name: "twitter:description",
        content: "Every child is a treasure. Quick links to admissions, inquiries, careers and more.",
      },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
});

function LinkHub() {
  return (
    <div className="relative min-h-screen bg-grid-pattern">
      <main className="mx-auto flex min-h-screen w-full max-w-xl flex-col items-center px-5 py-10 sm:px-8 sm:py-14">
        {/* Header */}
        <header className="flex flex-col items-center text-center">
          <img
            src={crest}
            alt="Treasures Christian School crest — treasure chest with flame and laurel wreath"
            width={112}
            height={112}
            className="h-24 w-24 drop-shadow-[0_6px_24px_oklch(0_0_0/30%)] sm:h-28 sm:w-28"
          />
          <h1 className="mt-5 text-3xl font-bold text-foreground sm:text-4xl">
            Treasures Christian School
          </h1>
          <p className="mt-2 font-heading text-base font-semibold tracking-wide text-lime sm:text-lg">
            Every Child Is a Treasure
          </p>
          <p className="mt-1 text-sm text-muted-foreground sm:text-base">
            Nurturing Minds, Building Futures
          </p>
          <p className="mt-3 inline-flex items-center gap-1.5 rounded-full border border-border bg-card/60 px-3.5 py-1.5 text-xs font-medium text-muted-foreground">
            <MapPin className="h-3.5 w-3.5 text-mint" aria-hidden="true" />
            Ho, Volta Region, Ghana
          </p>
        </header>

        {/* Quick Links */}
        <nav aria-label="Quick links" className="mt-9 w-full">
          <ul className="flex w-full flex-col gap-3.5">
            {LINKS.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={
                    link.variant === "primary"
                      ? "group flex min-h-11 w-full items-center gap-4 rounded-2xl bg-gradient-to-r from-jungle-deep to-ocean px-5 py-4 shadow-lift ring-1 ring-border transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lift-lg active:translate-y-0 active:shadow-lift"
                      : "group flex min-h-11 w-full items-center gap-4 rounded-2xl bg-secondary px-5 py-4 text-secondary-foreground shadow-lift transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lift-lg active:translate-y-0 active:shadow-lift"
                  }
                >
                  <span
                    className={
                      link.variant === "primary"
                        ? "flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-lime/15 text-lime"
                        : "flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white/15"
                    }
                  >
                    <link.icon className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <span className="flex-1 text-left">
                    <span
                      className={
                        link.variant === "primary"
                          ? "block text-base font-bold text-foreground sm:text-lg"
                          : "block text-base font-bold sm:text-lg"
                      }
                    >
                      {link.label}
                    </span>
                    <span
                      className={
                        link.variant === "primary"
                          ? "block text-xs text-muted-foreground sm:text-sm"
                          : "block text-xs opacity-85 sm:text-sm"
                      }
                    >
                      {link.description}
                    </span>
                  </span>
                  <ArrowUpRight
                    className={
                      link.variant === "primary"
                        ? "h-5 w-5 shrink-0 text-lime transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                        : "h-5 w-5 shrink-0 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    }
                    aria-hidden="true"
                  />
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Contact */}
        <section
          aria-labelledby="contact-heading"
          className="mt-9 w-full rounded-2xl bg-lime-mist p-6 text-jungle-deep shadow-lift sm:p-7"
        >
          <h2 id="contact-heading" className="text-xl font-bold">
            Get in Touch
          </h2>
          <ul className="mt-4 flex flex-col gap-3 text-sm sm:text-base">
            <li>
              <a
                href={CONTACT.phoneHref}
                className="flex items-center gap-3 rounded-lg py-1 font-medium transition-colors hover:text-jungle"
              >
                <Phone className="h-4.5 w-4.5 shrink-0 text-mint" aria-hidden="true" />
                {CONTACT.phone}
              </a>
            </li>
            <li>
              <a
                href={`mailto:${CONTACT.email}`}
                className="flex items-center gap-3 rounded-lg py-1 font-medium transition-colors hover:text-jungle"
              >
                <Mail className="h-4.5 w-4.5 shrink-0 text-mint" aria-hidden="true" />
                {CONTACT.email}
              </a>
            </li>
            <li>
              <a
                href={CONTACT.websiteHref}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 rounded-lg py-1 font-medium transition-colors hover:text-jungle"
              >
                <Globe className="h-4.5 w-4.5 shrink-0 text-mint" aria-hidden="true" />
                {CONTACT.website}
              </a>
            </li>
            <li className="flex items-center gap-3 py-1 font-medium">
              <MapPin className="h-4.5 w-4.5 shrink-0 text-mint" aria-hidden="true" />
              Ho, Volta Region, Ghana
            </li>
          </ul>

          <div className="mt-5 flex items-center gap-3 border-t border-jungle/10 pt-5">
            {SOCIALS.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`TCS on ${social.label}`}
                className="flex h-11 w-11 items-center justify-center rounded-xl bg-jungle text-lime transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lift"
              >
                <social.icon className="h-5 w-5" aria-hidden="true" />
              </a>
            ))}
          </div>
        </section>

        {/* Footer */}
        <footer className="mt-10 flex flex-col items-center gap-2 text-center">
          <img
            src={crest}
            alt=""
            aria-hidden="true"
            width={24}
            height={24}
            className="h-6 w-6 opacity-80"
          />
          <p className="text-xs text-muted-foreground">
            © 2026 Treasures Christian School. All rights reserved.
          </p>
          <p className="text-xs font-medium text-lime/80">Every child is a treasure.</p>
        </footer>
      </main>
    </div>
  );
}
