"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { MouseEvent, useCallback, useRef } from "react";
import { ArrowUpRight } from "lucide-react";
import type { Product } from "@/data/products";
import { ProductImage } from "./product-image";

export function ProductCard({ product }: { product: Product }) {
  const router = useRouter();
  const href = `/products/${product.slug}`;
  const warmed = useRef(false);
  const cardRef = useRef<HTMLAnchorElement>(null);

  const warmRoute = useCallback(() => {
    if (warmed.current) return;
    warmed.current = true;
    router.prefetch(href);
    const image = new window.Image();
    image.src = product.image;
  }, [href, product.image, router]);

  const moveLight = useCallback((event: MouseEvent<HTMLAnchorElement>) => {
    const card = cardRef.current;
    if (!card || !window.matchMedia("(hover: hover) and (pointer: fine)").matches || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const rect = card.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    const rx = ((y / rect.height) - 0.5) * -5;
    const ry = ((x / rect.width) - 0.5) * 6;
    card.style.setProperty("--mx", `${x}px`);
    card.style.setProperty("--my", `${y}px`);
    card.style.setProperty("--rx", `${rx}deg`);
    card.style.setProperty("--ry", `${ry}deg`);
  }, []);

  const resetLight = useCallback(() => {
    const card = cardRef.current;
    if (!card) return;
    card.style.setProperty("--rx", "0deg");
    card.style.setProperty("--ry", "0deg");
  }, []);

  return (
    <Link
      ref={cardRef}
      href={href}
      prefetch
      onMouseEnter={warmRoute}
      onMouseMove={moveLight}
      onMouseLeave={resetLight}
      onFocus={warmRoute}
      onTouchStart={warmRoute}
      data-reveal
      className="product-card group relative transform-gpu overflow-hidden rounded-lg border border-white/10 bg-white/[.035] p-3 transition-colors duration-200 hover:border-champagne/50 active:scale-[.995] sm:p-4"
    >
      <ProductImage product={product} className="h-[clamp(230px,48vw,288px)]" />
      <div className="relative">
        <p className="text-xs uppercase tracking-[.24em] text-white/45">{product.category}</p>
        <div className="mt-3 flex items-start justify-between gap-4">
          <h3 className="text-xl font-semibold sm:text-2xl">{product.name}</h3>
          <ArrowUpRight className="text-white/35 transition group-hover:text-champagne" />
        </div>
        <p className="mt-3 text-sm leading-6 text-white/60">{product.tagline}</p>
      </div>
    </Link>
  );
}
