"use client";

import { useEffect } from "react";
import Lenis from "lenis";
import { usePathname } from "next/navigation";
import { AmbientBackground } from "./ambient-background";
import { Footer } from "./footer";
import { Header } from "./header";
import { ScrollReveal } from "./scroll-reveal";

export function SiteShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    if (!window.matchMedia("(min-width: 900px)").matches) return;
    const lenis = new Lenis({
      lerp: 0.16,
      wheelMultiplier: 0.78,
      touchMultiplier: 1,
      smoothWheel: true,
      syncTouch: false
    });
    let frame = 0;
    const raf = (time: number) => {
      lenis.raf(time);
      frame = requestAnimationFrame(raf);
    };
    frame = requestAnimationFrame(raf);
    return () => {
      cancelAnimationFrame(frame);
      lenis.destroy();
    };
  }, []);

  return (
    <>
      <AmbientBackground />
      <ScrollReveal />
      <Header />
      <div key={pathname} className="pointer-events-none fixed inset-x-0 top-0 z-[60] h-px origin-left animate-[routeFlash_.45s_ease-out] bg-champagne/70" />
      {children}
      <Footer />
    </>
  );
}
