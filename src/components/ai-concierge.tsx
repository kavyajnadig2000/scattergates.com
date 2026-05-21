"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { ArrowRight, BrainCircuit, Building2, CalendarDays, Gift, Sparkles } from "lucide-react";
import { products, type Product } from "@/data/products";

const prompts = [
  "Executive gifts under premium budget",
  "Sports event merchandise for employees",
  "Onboarding kit for new joiners",
  "Tech gifts for sales team"
];

function scoreProduct(product: Product, query: string) {
  const haystack = `${product.name} ${product.category} ${product.tagline} ${product.story} ${product.colors.join(" ")}`.toLowerCase();
  const terms = query.toLowerCase().split(/\s+/).filter(Boolean);
  let score = 0;
  for (const term of terms) if (haystack.includes(term)) score += 2;
  if (/executive|premium|leadership|cxo/.test(query.toLowerCase()) && /Pen|Notebook|Bottle|Power/.test(product.category + product.name)) score += 5;
  if (/event|sports|team|rcb|match/.test(query.toLowerCase()) && /T-Shirts|Caps|Bottles|Event Props|Hoodies|Jackets/.test(product.category)) score += 5;
  if (/onboard|welcome|joining/.test(query.toLowerCase()) && /Backpacks|Stationery|Bottles|Sleeves/.test(product.category)) score += 5;
  if (/tech|sales|travel|power/.test(query.toLowerCase()) && /Power Banks|Charging Cables|Backpacks/.test(product.category)) score += 5;
  return score;
}

export function AiConcierge() {
  const [query, setQuery] = useState("Sports event merchandise for employees");
  const [memory, setMemory] = useState<string[]>([]);

  const recommendations = useMemo(() => {
    return [...products]
      .map((product) => ({ product, score: scoreProduct(product, `${query} ${memory.join(" ")}`) }))
      .sort((a, b) => b.score - a.score)
      .slice(0, 4)
      .map((item) => item.product);
  }, [query, memory]);

  function choosePrompt(value: string) {
    setQuery(value);
    setMemory((items) => [value, ...items.filter((item) => item !== value)].slice(0, 4));
  }

  return (
    <section id="assistant" className="px-4 py-16 sm:px-5 sm:py-20 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-8 lg:grid-cols-[.95fr_1.05fr]">
          <div data-reveal>
            <div className="inline-flex items-center gap-2 rounded-full border border-champagne/25 bg-champagne/10 px-3 py-2 text-xs uppercase tracking-[.26em] text-champagne">
              <BrainCircuit size={15} /> gifting concierge
            </div>
            <h2 className="mt-5 font-display text-[clamp(2.7rem,8vw,4.5rem)] leading-tight">Ask for a kit. Get a product mix instantly.</h2>
            <p className="mt-5 max-w-xl text-white/64">
              This concierge matches event type, audience, budget intent, and product categories to recommend a premium Scattergates gifting set.
            </p>
            <div className="mt-7 grid gap-3 sm:grid-cols-2">
              {prompts.map((prompt) => (
                <button
                  type="button"
                  key={prompt}
                  onClick={() => choosePrompt(prompt)}
                  className="magnetic min-h-12 rounded-md border border-white/10 bg-white/[.04] px-4 py-3 text-left text-sm text-white/72 transition hover:border-champagne/40 hover:text-white"
                >
                  {prompt}
                </button>
              ))}
            </div>
            <div className="mt-6 rounded-lg border border-white/10 bg-black/25 p-3">
              <textarea
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                rows={4}
                className="w-full resize-none rounded-md border border-white/10 bg-black/30 px-4 py-3 text-white outline-none focus:border-champagne"
                placeholder="Example: 300 employee cricket event kit with red and gold branding"
              />
            </div>
          </div>

          <div className="glass rounded-lg p-4 sm:p-5" data-reveal>
            <div className="grid gap-3 sm:grid-cols-3">
              {[
                [Building2, "Audience", "Teams, CXOs, events"],
                [CalendarDays, "Timeline", "Quote-ready brief"],
                [Gift, "Kit logic", "Mix by use case"]
              ].map(([Icon, title, text]) => (
                <div className="rounded-md border border-white/10 bg-black/24 p-4" key={String(title)}>
                  <Icon className="text-champagne" size={18} />
                  <p className="mt-3 text-sm font-semibold">{String(title)}</p>
                  <p className="mt-1 text-xs text-white/48">{String(text)}</p>
                </div>
              ))}
            </div>
            <div className="mt-5 grid gap-3">
              {recommendations.map((product) => (
                <Link
                  href={`/products/${product.slug}`}
                  prefetch
                  key={product.slug}
                  className="group flex items-center justify-between gap-4 rounded-md border border-white/10 bg-white/[.04] p-4 transition hover:border-champagne/40 hover:bg-white/[.07]"
                >
                  <div>
                    <p className="text-xs uppercase tracking-[.22em] text-champagne">{product.category}</p>
                    <h3 className="mt-2 text-lg font-semibold sm:text-xl">{product.name}</h3>
                    <p className="mt-1 text-sm text-white/56">{product.tagline}</p>
                  </div>
                  <ArrowRight className="shrink-0 text-white/36 transition group-hover:translate-x-1 group-hover:text-champagne" size={20} />
                </Link>
              ))}
            </div>
            <div className="mt-5 flex items-center gap-2 text-sm text-white/56">
              <Sparkles size={16} className="text-champagne" /> Remembers recent choices during this session.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
