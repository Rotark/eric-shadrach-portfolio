"use client";

import { cn } from "@/lib/utils";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/axon", label: "Axon VR" },
  { href: "/dissertation", label: "Research" },
  { href: "/methodology", label: "Methodology" },
  { href: "/lab", label: "Lab" },
  { href: "/about", label: "About" },
];

export function Navigation() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 50);
  });

  return (
    <>
      <motion.header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
          isScrolled ? "py-3" : "py-5"
        )}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="container mx-auto px-4">
          <nav
            className={cn(
              "flex items-center justify-between rounded-2xl px-6 py-3 transition-all duration-300",
              isScrolled
                ? "glass shadow-lg"
                : "bg-transparent"
            )}
          >
            {/* Logo */}
            <Link
              href="/"
              className="font-heading font-bold text-xl text-foreground hover:text-teal transition-colors"
            >
              <span className="text-teal">E</span>SM
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "px-4 py-2 rounded-lg font-medium text-sm transition-all duration-200",
                    pathname === link.href
                      ? "text-teal bg-teal/10"
                      : "text-foreground-muted hover:text-foreground hover:bg-gray-100"
                  )}
                >
                  {link.label}
                </Link>
              ))}
            </div>

            {/* CTA Button */}
            <div className="hidden md:block">
              <Link
                href="/about#contact"
                className="btn-primary px-5 py-2.5 rounded-xl text-sm font-medium"
              >
                Get in Touch
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 text-foreground"
              aria-label="Toggle menu"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {isMobileMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </nav>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <motion.div
        className={cn(
          "fixed inset-0 z-40 md:hidden",
          isMobileMenuOpen ? "pointer-events-auto" : "pointer-events-none"
        )}
        initial={false}
        animate={isMobileMenuOpen ? "open" : "closed"}
      >
        {/* Backdrop */}
        <motion.div
          className="absolute inset-0 bg-black/20 backdrop-blur-sm"
          variants={{
            open: { opacity: 1 },
            closed: { opacity: 0 },
          }}
          onClick={() => setIsMobileMenuOpen(false)}
        />

        {/* Menu Panel */}
        <motion.div
          className="absolute top-20 left-4 right-4 glass rounded-2xl p-6"
          variants={{
            open: { opacity: 1, y: 0, scale: 1 },
            closed: { opacity: 0, y: -20, scale: 0.95 },
          }}
          transition={{ duration: 0.2 }}
        >
          <div className="flex flex-col gap-2">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className={cn(
                  "px-4 py-3 rounded-xl font-medium transition-all duration-200",
                  pathname === link.href
                    ? "text-teal bg-teal/10"
                    : "text-foreground-muted hover:text-foreground hover:bg-gray-100"
                )}
              >
                {link.label}
              </Link>
            ))}
            <hr className="my-2 border-gray-200" />
            <Link
              href="/about#contact"
              onClick={() => setIsMobileMenuOpen(false)}
              className="btn-primary px-4 py-3 rounded-xl text-center font-medium"
            >
              Get in Touch
            </Link>
          </div>
        </motion.div>
      </motion.div>
    </>
  );
}
