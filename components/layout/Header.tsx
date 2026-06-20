"use client";

import Link from "next/link";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/Button";
import type { SiteConfig } from "@/types/content";

type HeaderProps = {
  siteConfig: SiteConfig | null;
};

const DEFAULT_NAV = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Blog", href: "/blog" },
  { label: "Careers", href: "/careers" },
  { label: "Contact", href: "/contact" },
];

export function Header({ siteConfig }: HeaderProps) {
  const [open, setOpen] = useState(false);

  const companyName = siteConfig?.name ?? "Cactus IT Solution";
  const navItems =
    Array.isArray(siteConfig?.nav) && siteConfig.nav.length > 0
      ? siteConfig.nav
      : DEFAULT_NAV;

  return (
    <header className="fixed inset-x-0 top-4 z-[70]">
      <div className="container-pad">
        <div className="flex items-center justify-between rounded-full border border-white/10 bg-night/75 px-4 py-3 shadow-soft backdrop-blur-xl md:px-5">
          <Link href="/" className="flex items-center gap-3">
            <span className="grid h-10 w-10 place-items-center rounded-full bg-cactus-500 text-lg font-black text-night shadow-glow">
              C
            </span>
            <span className="text-sm font-bold tracking-wide text-white md:text-base">
              {companyName}
            </span>
          </Link>

          <nav className="hidden items-center gap-6 lg:flex">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm text-white/66 transition hover:text-white"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="hidden lg:block">
            <Button href="/contact">Start a Project</Button>
          </div>

          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((value) => !value)}
            className="grid h-10 w-10 place-items-center rounded-full border border-white/10 bg-white/5 text-white lg:hidden"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open ? (
          <motion.div
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            className="container-pad mt-3 lg:hidden"
          >
            <div className="rounded-3xl border border-white/10 bg-night/95 p-5 shadow-soft backdrop-blur-xl">
              <div className="grid gap-3">
                {navItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="rounded-2xl px-4 py-3 text-white/76 transition hover:bg-white/5 hover:text-white"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>

              <div className="mt-4">
                <Button href="/contact">Start a Project</Button>
              </div>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}