import Image from "next/image"
import Link from "next/link"
import { Phone, Mail, MapPin } from "lucide-react"

function FacebookIcon({ size = 14 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  )
}

const CURRENT_YEAR = new Date().getFullYear()

export default function Footer() {
  return (
    <footer className="bg-card border-t border-border py-12 px-6" role="contentinfo">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-10">
          {/* Brand */}
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <Image
                src="/logo.png"
                alt="On The Spot Repair Services & Tires logo"
                width={52}
                height={52}
                className="rounded-full"
              />
              <div>
                <p className="font-sans font-black uppercase text-sm text-foreground leading-tight">
                  On The Spot
                </p>
                <p className="font-sans font-black uppercase text-sm text-primary leading-tight">
                  Repair Service & Tires
                </p>
              </div>
            </div>
            <p className="font-sans text-muted-foreground text-sm leading-relaxed">
              Full-service mechanic and tire shop serving Unadilla, GA and surrounding areas. Available 24/7 for
              emergency mobile roadside assistance.
            </p>
          </div>

          {/* Quick nav */}
          <nav aria-label="Footer navigation">
            <h3 className="font-sans font-bold uppercase text-xs tracking-widest text-muted-foreground mb-4">
              Quick Links
            </h3>
            <ul className="flex flex-col gap-2" role="list">
              {[
                { label: "Services", href: "#services" },
                { label: "About Us", href: "#about" },
                { label: "Hours", href: "#hours" },
                { label: "Contact", href: "#contact" },
              ].map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="font-sans font-semibold uppercase text-sm tracking-wide text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Service Area */}
          <nav aria-label="Service area navigation">
            <h3 className="font-sans font-bold uppercase text-xs tracking-widest text-muted-foreground mb-4">
              Service Area
            </h3>
            <ul className="flex flex-col gap-2" role="list">
              {[
                { label: "Unadilla, GA", href: "/unadilla" },
                { label: "Perry, GA", href: "/perry" },
                { label: "Vienna, GA", href: "/vienna" },
                { label: "Hawkinsville, GA", href: "/hawkinsville" },
                { label: "Cordele, GA", href: "/cordele" },
                { label: "Elko, GA", href: "/elko" },
                { label: "Byromville, GA", href: "/byromville" },
                { label: "Montezuma, GA", href: "/montezuma" },
              ].map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="font-sans text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Contact */}
          <div>
            <h3 className="font-sans font-bold uppercase text-xs tracking-widest text-muted-foreground mb-4">
              Contact
            </h3>
            <ul className="flex flex-col gap-3" role="list">
              <li>
                <a
                  href="tel:4782447008"
                  className="flex items-center gap-2 font-sans text-sm text-muted-foreground hover:text-primary transition-colors"
                  aria-label="Call 478-244-7008"
                >
                  <Phone size={14} className="text-primary flex-shrink-0" aria-hidden="true" />
                  478-244-7008
                </a>
              </li>
              <li>
                <a
                  href="mailto:onthespotrepair23@gmail.com"
                  className="flex items-start gap-2 font-sans text-sm text-muted-foreground hover:text-primary transition-colors"
                  aria-label="Email onthespotrepair23@gmail.com"
                >
                  <Mail size={14} className="text-primary flex-shrink-0 mt-0.5" aria-hidden="true" />
                  onthespotrepair23@gmail.com
                </a>
              </li>
              <li>
                <a
                  href="https://maps.google.com/?q=990+2nd+Street+Unadilla+GA+31091"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-2 font-sans text-sm text-muted-foreground hover:text-primary transition-colors"
                  aria-label="Get directions to 990 2nd Street Unadilla GA"
                >
                  <MapPin size={14} className="text-primary flex-shrink-0 mt-0.5" aria-hidden="true" />
                  990 2nd Street, Unadilla, GA 31091
                </a>
              </li>
              <li>
                <a
                  href="https://www.facebook.com/OntheSpotRepairServices/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 font-sans text-sm text-muted-foreground hover:text-primary transition-colors"
                  aria-label="On The Spot Repair on Facebook"
                >
                  <FacebookIcon size={14} />
                  Facebook
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="font-sans text-muted-foreground text-xs">
            &copy; {CURRENT_YEAR} On The Spot Repair Services & Tires, Inc. All rights reserved.
          </p>
          <p className="font-sans text-muted-foreground text-xs">
            Unadilla, GA 31091
          </p>
        </div>
      </div>
    </footer>
  )
}
