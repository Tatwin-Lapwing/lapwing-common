"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const navLinks = [
  { label: "Thesis", href: "#thesis" },
  { label: "Team", href: "#team" },
  { label: "Contact", href: "#contact" },
] as const;

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

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
    <motion.header
      role="banner"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, delay: 0.8 }}
      className={`fixed top-0 right-0 left-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-moss-950/95 py-4 backdrop-blur-md"
          : "bg-transparent py-6"
      }`}
    >
      <nav
        aria-label="Main navigation"
        className="mx-auto flex max-w-7xl items-center justify-between px-6"
      >
        <a
          href="#"
          className="font-heading text-xl text-cream transition-opacity hover:opacity-80"
          aria-label="Lapwing Common — back to top"
        >
          Lapwing Common
        </a>

        <ul className="hidden items-center gap-8 md:flex" role="list">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className={`text-sm uppercase tracking-[0.2em] transition-colors hover:text-cream ${
                  activeSection === link.href.slice(1)
                    ? "text-cream"
                    : "text-earth-200/80"
                }`}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </motion.header>
  );
}
