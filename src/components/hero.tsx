import Link from "next/link";
import { ArrowRight, Gem } from "lucide-react";
import { products } from "@/data/products";
import { ProductImage } from "./product-image";

export function Hero() {
  const featured = products[0];

  return (
    <section className="relative min-h-[100svh] overflow-hidden px-4 pb-12 pt-28 sm:px-5 sm:pt-32 lg:px-8">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_72%_24%,rgba(255,61,31,.24),transparent_32rem),linear-gradient(180deg,rgba(5,6,8,.7),#050608_92%)]" />
      <div className="hero-spotlight pointer-events-none absolute right-[8%] top-24 -z-10 h-72 w-72 rounded-full" />
      <div className="mx-auto grid min-h-[calc(100svh-7rem)] max-w-7xl items-center gap-8 lg:grid-cols-[.92fr_1.08fr]">
        <div data-reveal>
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-2 text-xs uppercase tracking-[.28em] text-champagne">
            <Gem size={14} /> premium corporate gifting
          </div>
          <h1 className="text-balance font-display text-[clamp(3.35rem,11vw,8rem)] leading-[.95] text-white xl:text-9xl">
            Merchandise with championship energy.
          </h1>
          <p className="mt-6 max-w-xl text-base leading-7 text-white/68 sm:mt-7 sm:text-lg sm:leading-8">
            Build luxury employee kits, event drops, and sports-inspired branded products with real product visuals and AI-guided recommendations.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:mt-9 sm:flex-row sm:flex-wrap sm:gap-4">
            <Link href="#products" className="magnetic inline-flex items-center justify-center gap-2 rounded-md bg-white px-5 py-4 font-semibold text-carbon">
              Explore products <ArrowRight size={18} />
            </Link>
            <Link href="#assistant" className="magnetic inline-flex items-center justify-center gap-2 rounded-md border border-white/15 bg-white/5 px-5 py-4 font-semibold text-white">
              Ask AI assistant
            </Link>
          </div>
        </div>
        <div data-reveal className="cinematic-frame group relative min-h-[44vh] overflow-hidden rounded-lg border border-white/10 bg-black/30 p-3 shadow-gold">
          <ProductImage product={featured} priority className="h-[clamp(340px,52svh,520px)] min-h-[340px]" />
          <div className="pointer-events-none absolute bottom-5 left-5 right-5 sm:bottom-7 sm:left-7 sm:right-7">
            <p className="text-xs uppercase tracking-[.26em] text-champagne">{featured.category}</p>
            <h2 className="mt-2 text-2xl font-semibold sm:text-3xl">{featured.name}</h2>
          </div>
        </div>
      </div>
    </section>
  );
}
