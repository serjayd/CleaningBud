import Container from "@/components/shared/Container";
import Logo from "@/components/shared/Logo";
import Link from "next/link";

const FOOTER_LINKS = [
  {
    title: "Services",
    links: [
      { label: "Regular Cleaning", href: "/services/regular-cleaning" },
      { label: "Deep Cleaning", href: "/services/deep-cleaning" },
      { label: "End of Tenancy", href: "/services/end-of-tenancy" },
      { label: "Window Cleaning", href: "/services/window-cleaning" },
      { label: "Home + Windows", href: "/services/home-windows" },
    ],
  },
  {
    title: "Areas We Cover",
    links: [
      { label: "Erith", href: "/areas/erith" },
      { label: "Bexley", href: "/areas/bexley" },
      { label: "Bexleyheath", href: "/areas/bexleyheath" },
      { label: "Dartford", href: "/areas/dartford" },
      { label: "Sidcup", href: "/areas/sidcup" },
      { label: "Welling", href: "/areas/welling" },
      { label: "Bromley", href: "/areas/bromley" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About Us", href: "/about" },
      { label: "Reviews", href: "/reviews" },
      { label: "Pricing", href: "/pricing" },
      { label: "FAQ", href: "/faq" },
      { label: "Contact", href: "/contact" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="relative z-10 border-t border-border bg-background">
      <Container>
        {/* Main Footer */}
        <div className="grid gap-10 py-12 lg:grid-cols-[1.5fr_1fr_1fr_1fr] lg:gap-8">
          {/* Brand */}
          <div className="max-w-sm">
            <Logo />

            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              Cleaner homes. Brighter days.
            </p>

            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              Professional home and window cleaning services across South East
              London and North Kent.
            </p>

            {/* Contact */}
            <div className="mt-7 space-y-2">
              <a
                href="tel:02034567890"
                className="block text-sm font-medium text-foreground transition-colors hover:text-primary"
              >
                020 3456 7890
              </a>

              <a
                href="mailto:hello@cleaningbud.co.uk"
                className="block text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                hello@cleaningbud.co.uk
              </a>
            </div>
          </div>

          {/* Links */}
          {FOOTER_LINKS.map((section) => (
            <div key={section.title}>
              <p className="mb-4 text-xs font-semibold uppercase tracking-wider text-foreground">
                {section.title}
              </p>

              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom */}
        <div className="flex flex-col gap-4 border-t border-border py-6 md:flex-row md:items-center md:justify-between">
          <span className="text-xs text-muted-foreground">
            © 2026 CleaningBud Ltd. All rights reserved.
          </span>

          <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-xs text-muted-foreground">
            <Link
              href="/privacy"
              className="transition-colors hover:text-foreground"
            >
              Privacy Policy
            </Link>

            <Link
              href="/terms"
              className="transition-colors hover:text-foreground"
            >
              Terms of Service
            </Link>

            <Link
              href="/cookies"
              className="transition-colors hover:text-foreground"
            >
              Cookie Policy
            </Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}
