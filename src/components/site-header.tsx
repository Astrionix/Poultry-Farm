"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const navItems = [
  { href: "#home", label: "Home" },
  { href: "#story", label: "Our Story" },
  { href: "#farms", label: "Our Farms" },
  { href: "#quality", label: "Quality & Process" },
  { href: "#infrastructure", label: "Infrastructure" },
  { href: "#reach", label: "Our Reach" },
  { href: "#contact", label: "Contact" },
];

export function SiteHeader() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 24);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-shadow",
        isScrolled
          ? "border-b border-white/10 bg-white/80 backdrop-blur-md shadow-sm"
          : "bg-transparent",
      )}
    >
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-2 text-lg font-semibold">
          <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-amber-200 text-amber-800">
            🥚
          </span>
          <span className="hidden sm:inline">Mahalakshmi Poultry Complex</span>
          <span className="sm:hidden">Mahalakshmi</span>
        </Link>

        <nav className="hidden items-center gap-6 text-sm font-medium md:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              className="text-slate-600 transition-colors hover:text-slate-900"
              href={item.href}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <button
          className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-slate-200 md:hidden"
          onClick={() => setIsMenuOpen((prev) => !prev)}
          aria-label="Toggle navigation"
        >
          {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {isMenuOpen ? (
        <div className="border-t border-slate-200 bg-white px-4 py-4 md:hidden">
          <nav className="grid gap-3 text-sm font-semibold">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="rounded-lg px-3 py-2 text-slate-700 hover:bg-amber-50"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
          </nav>
        </div>
      ) : null}
    </header>
  );
}
