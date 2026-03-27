"use client";

import { useState, useEffect } from "react";

const navLinks = [
  { label: "Thesis", href: "#thesis" },
  { label: "Team", href: "#team" },
  { label: "Contact", href: "#contact" },
] as const;

export default function Navigation() {
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const ids = ["hero", ...navLinks.map((l) => l.href.slice(1))];
    const sections = ids
      .map((id) => document.getElementById(id))
      .filter(Boolean) as HTMLElement[];

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id === "hero" ? "" : entry.target.id);
          }
        }
      },
      { rootMargin: "-50% 0px -50% 0px" }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return (
    <header
      role="banner"
      className="sticky top-0 z-50 border-b border-earth-200 bg-cream py-6"
    >
      <nav
        aria-label="Main navigation"
        className="mx-auto flex max-w-6xl items-center justify-between px-6"
      >
        <a
          href="#"
          className="font-heading text-xl text-moss-950 transition-opacity hover:opacity-80"
          aria-label="Lapwing Common — back to top"
        >
          Lapwing Common
        </a>

        <ul className="hidden items-center gap-8 md:flex" role="list">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className={`text-sm uppercase tracking-[0.2em] transition-colors hover:text-moss-500 ${
                  activeSection === link.href.slice(1)
                    ? "font-medium text-moss-950"
                    : "text-moss-700"
                }`}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}