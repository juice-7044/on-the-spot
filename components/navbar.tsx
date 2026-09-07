"use client"

import { useState, useEffect, useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import { Phone, Menu, X, ChevronDown } from "lucide-react"

type NavLink = {
  label: string
  href: string
  external?: boolean
  children?: { label: string; href: string }[]
}

const NAV_LINKS: NavLink[] = [
  { label: "Home", href: "#" },
  { label: "Services", href: "#services" },
  {
    label: "About",
    href: "#about",
    children: [
      { label: "Gallery", href: "#gallery" },
      { label: "FAQ", href: "#faq" },
    ],
  },
  { label: "24/7 Roadside", href: "#roadside" },
  { label: "Service Area", href: "#service-area" },
  { label: "Hours", href: "#hours" },
  { label: "Contact", href: "#contact" },
  { label: "Careers", href: "/careers" },
  { label: "Reviews", href: "https://g.page/r/CRevmpAtetKCEBM/review", external: true },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [openDropdown, setOpenDropdown] = useState<string | null>(null)
  const dropdownRef = useRef<HTMLLIElement>(null)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  useEffect(() => {
    const onClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setOpenDropdown(null)
      }
    }
    document.addEventListener("mousedown", onClickOutside)
    return () => document.removeEventListener("mousedown", onClickOutside)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/95 backdrop-blur-md border-b border-border shadow-lg"
          : "bg-transparent"
      }`}
    >
      <nav
        className="max-w-7xl mx-auto flex items-center justify-between px-6 py-3"
        aria-label="Main navigation"
      >
        {/* Logo */}
        <Link href="#" className="flex items-center gap-3 group" aria-label="On The Spot Repair Services & Tires home">
          <Image
            src="/logo.png"
            alt="On The Spot Repair Services & Tires logo"
            width={56}
            height={56}
            className="rounded-full transition-transform duration-300 group-hover:scale-105"
          />
          <span className="hidden sm:block font-sans font-extrabold text-foreground text-sm leading-tight uppercase tracking-wide">
            On The Spot
            <span className="block text-primary text-xs font-semibold">Repair Service & Tires</span>
          </span>
        </Link>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-6" role="list">
          {NAV_LINKS.map((link) =>
            link.children ? (
              <li
                key={link.label}
                ref={dropdownRef}
                className="relative"
                onMouseEnter={() => setOpenDropdown(link.label)}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                <button
                  type="button"
                  onClick={() => setOpenDropdown(openDropdown === link.label ? null : link.label)}
                  className="flex items-center gap-1 font-sans font-semibold uppercase text-sm tracking-widest text-muted-foreground hover:text-primary transition-colors duration-200"
                  aria-expanded={openDropdown === link.label}
                  aria-haspopup="true"
                >
                  {link.label}
                  <ChevronDown
                    size={14}
                    className={`transition-transform duration-200 ${openDropdown === link.label ? "rotate-180" : ""}`}
                    aria-hidden="true"
                  />
                </button>
                {openDropdown === link.label && (
                  <ul
                    className="absolute left-0 top-full pt-2 min-w-[160px]"
                    role="list"
                  >
                    <div className="bg-card border border-border rounded-lg shadow-lg py-2 flex flex-col">
                      <li>
                        <Link
                          href={link.href}
                          onClick={() => setOpenDropdown(null)}
                          className="block px-4 py-2 font-sans font-semibold uppercase text-sm tracking-wide text-muted-foreground hover:text-primary hover:bg-muted transition-colors"
                        >
                          {link.label}
                        </Link>
                      </li>
                      {link.children.map((child) => (
                        <li key={child.label}>
                          <Link
                            href={child.href}
                            onClick={() => setOpenDropdown(null)}
                            className="block px-4 py-2 font-sans font-semibold uppercase text-sm tracking-wide text-muted-foreground hover:text-primary hover:bg-muted transition-colors"
                          >
                            {child.label}
                          </Link>
                        </li>
                      ))}
                    </div>
                  </ul>
                )}
              </li>
            ) : (
              <li key={link.label}>
                <Link
                  href={link.href}
                  target={link.external ? "_blank" : undefined}
                  rel={link.external ? "noopener noreferrer" : undefined}
                  className="font-sans font-semibold uppercase text-sm tracking-widest text-muted-foreground hover:text-primary transition-colors duration-200"
                >
                  {link.label}
                </Link>
              </li>
            )
          )}
        </ul>

        {/* CTA */}
        <a
          href="tel:4782447008"
          className="hidden md:flex items-center gap-1.5 bg-primary hover:bg-primary/90 text-primary-foreground font-sans font-semibold tracking-tight text-xs px-4 py-2 rounded transition-all duration-200 hover:scale-105 ml-6 whitespace-nowrap"
          aria-label="Call us at 478-244-7008"
        >
          <Phone size={14} aria-hidden="true" />
          478-244-7008
        </a>

        {/* Mobile menu toggle */}
        <button
          className="md:hidden text-foreground p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-card border-t border-border px-6 py-4 flex flex-col gap-4">
          {NAV_LINKS.map((link) => (
            <div key={link.label} className="flex flex-col gap-3">
              <Link
                href={link.href}
                target={link.external ? "_blank" : undefined}
                rel={link.external ? "noopener noreferrer" : undefined}
                onClick={() => setMenuOpen(false)}
                className="font-sans font-semibold uppercase tracking-widest text-muted-foreground hover:text-primary transition-colors"
              >
                {link.label}
              </Link>
              {link.children && (
                <div className="flex flex-col gap-3 pl-4 border-l-2 border-border">
                  {link.children.map((child) => (
                    <Link
                      key={child.label}
                      href={child.href}
                      onClick={() => setMenuOpen(false)}
                      className="font-sans font-semibold uppercase text-sm tracking-wide text-muted-foreground hover:text-primary transition-colors"
                    >
                      {child.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
          <a
            href="tel:4782447008"
            className="flex items-center gap-2 bg-primary text-primary-foreground font-sans font-bold uppercase text-sm px-5 py-3 rounded justify-center mt-2"
          >
            <Phone size={16} aria-hidden="true" />
            478-244-7008
          </a>
        </div>
      )}
    </header>
  )
}
