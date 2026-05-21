"use client";

import { Box, Cable, Gift, PenTool, Shirt, Zap } from "lucide-react";
import { categories } from "@/data/products";

const icons = [Gift, Shirt, PenTool, Box, Zap, Cable];

export function ProductCategories() {
  return (
    <section id="categories" className="px-4 py-16 sm:px-5 sm:py-20 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div data-reveal>
          <p className="text-sm uppercase tracking-[.34em] text-champagne">Catalog inspired range</p>
          <h2 className="mt-4 max-w-3xl font-display text-[clamp(2.7rem,8vw,4.5rem)] leading-tight">Everything a premium corporate drop needs.</h2>
        </div>
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {categories.map((category, index) => {
            const Icon = icons[index % icons.length];
            return (
              <div
                className="glass magnetic rounded-lg p-5"
                data-reveal
                key={category}
              >
                <Icon className="text-champagne" />
                <h3 className="mt-8 text-2xl font-semibold">{category}</h3>
                <p className="mt-3 text-sm leading-6 text-white/58">Custom colors, logo placement, packaging, and bulk inquiry support.</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
