import { BadgeCheck, Palette, ScanSearch, Zap } from "lucide-react";
import { products } from "@/data/products";
import { ProductCard } from "./product-card";

export function Showcase() {
  return (
    <section id="products" className="relative px-4 py-16 sm:px-5 sm:py-24 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">
          <div>
            <p className="text-sm uppercase tracking-[.34em] text-champagne">Product showcase</p>
            <h2 className="mt-4 max-w-3xl font-display text-[clamp(2.7rem,8vw,4.5rem)] leading-tight">Browse, customize, and launch.</h2>
          </div>
          <div className="grid grid-cols-2 gap-3 text-sm text-white/62 sm:grid-cols-4">
            {[BadgeCheck, Palette, Zap, ScanSearch].map((Icon, i) => <div className="glass rounded-lg p-3" key={i}><Icon className="mb-3 text-champagne" size={18} />Fast preview</div>)}
          </div>
        </div>
        <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {products.map((product) => (
            <ProductCard product={product} key={product.slug} />
          ))}
        </div>
      </div>
    </section>
  );
}
