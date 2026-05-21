"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Menu, ShoppingBag, X } from "lucide-react";
import { site } from "@/lib/site";

const links = [
  ["Home", "/"],
  ["Products", "/#products"],
  ["Categories", "/#categories"],
  ["About", "/#about"],
  ["AI Assistant", "/#assistant"],
  ["Contact", "/#contact"],
  ["Terms", "/terms"],
  ["Privacy", "/privacy"]
];

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="pointer-events-none fixed inset-x-0 top-0 z-50 px-3 py-3 pt-[max(.75rem,env(safe-area-inset-top))] sm:px-4 sm:py-4">
      <nav
        className={`glass pointer-events-auto mx-auto flex max-w-7xl items-center justify-between rounded-lg px-3 transition-[height,background,border-color] duration-200 sm:px-4 ${scrolled ? "h-14 bg-carbon/82 sm:h-16" : "h-16 sm:h-[76px]"}`}
      >
        <Link href="/" prefetch className="flex items-center gap-3 rounded-md outline-none transition hover:text-champagne focus-visible:ring-2 focus-visible:ring-champagne">
          <span className="grid size-9 shrink-0 place-items-center rounded-md bg-gradient-to-br from-ember to-champagne text-carbon shadow-glow sm:size-10">
            <ShoppingBag size={18} />
          </span>
          <span className="font-display text-lg font-semibold tracking-wide sm:text-xl">{site.name}</span>
        </Link>
        <div className="hidden items-center gap-6 lg:flex">
          {links.slice(0, 6).map(([label, href]) => (
            <Link prefetch={href.startsWith("/")} className="nav-link rounded-sm py-2 text-sm text-white/65 transition hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-champagne" href={href} key={label}>{label}</Link>
          ))}
        </div>
        <button aria-label="Open menu" aria-expanded={open} className="grid size-11 place-items-center rounded-md border border-white/10 bg-white/5 lg:hidden" onClick={() => setOpen(true)}>
          <Menu size={19} />
        </button>
      </nav>
      {open && (
        <div className="pointer-events-auto fixed inset-0 z-50 bg-black/76 backdrop-blur-xl lg:hidden">
          <div className="mobile-menu ml-auto flex h-[100dvh] w-full max-w-sm flex-col overflow-y-auto border-l border-white/10 bg-carbon p-5 pt-[max(1.25rem,env(safe-area-inset-top))]">
            <button aria-label="Close menu" className="ml-auto grid size-11 place-items-center rounded-md border border-white/10" onClick={() => setOpen(false)}>
              <X size={18} />
            </button>
            <div className="mt-12 grid gap-5">
              {links.map(([label, href]) => (
                <Link onClick={() => setOpen(false)} className="rounded-md py-2 text-2xl font-semibold text-white/85 transition hover:text-champagne focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-champagne" href={href} key={label}>{label}</Link>
              ))}
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
