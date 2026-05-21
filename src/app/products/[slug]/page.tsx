import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, BadgeCheck, Gem, Layers, Wand2 } from "lucide-react";
import { products } from "@/data/products";
import { LogoMockup } from "@/components/logo-mockup";
import { ProductImage } from "@/components/product-image";

export function generateStaticParams() {
  return products.map((product) => ({ slug: product.slug }));
}

type ProductPageProps = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: ProductPageProps) {
  const { slug } = await params;
  const product = products.find((item) => item.slug === slug);
  return {
    title: product ? product.name : "Product",
    description: product?.story ?? "Premium branded corporate merchandise."
  };
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { slug } = await params;
  const product = products.find((item) => item.slug === slug);
  if (!product) notFound();

  return (
    <main className="min-h-[100svh] overflow-hidden pt-24 sm:pt-28">
      <section className="mx-auto grid max-w-7xl gap-8 px-4 pb-16 sm:px-5 sm:pb-20 lg:grid-cols-[1.08fr_.92fr] lg:gap-10 lg:px-8">
        <div className="group relative min-h-[360px] overflow-hidden rounded-lg border border-white/10 bg-black/30 p-2 sm:p-3 md:min-h-[540px]">
          <ProductImage product={product} priority className="h-[clamp(360px,62svh,540px)]" />
          <div className="pointer-events-none absolute bottom-5 left-5 right-5 rounded-md border border-white/10 bg-black/45 px-4 py-3 backdrop-blur-md sm:bottom-8 sm:left-8 sm:right-auto">
            <p className="text-sm text-white/65">Logo and finish preview available below</p>
          </div>
        </div>
        <div className="flex flex-col justify-center">
          <Link href="/#products" className="mb-8 inline-flex w-fit items-center gap-2 text-sm text-white/65 hover:text-white">
            <ArrowLeft size={16} /> Back to products
          </Link>
          <div className="mb-4 inline-flex w-fit items-center gap-2 rounded-full border border-champagne/30 bg-champagne/10 px-3 py-1 text-xs uppercase tracking-[.24em] text-champagne">
            <Gem size={14} /> premium product lab
          </div>
          <h1 className="font-display text-[clamp(2.9rem,9vw,4.5rem)] leading-[1.02] text-white">{product.name}</h1>
          <p className="mt-5 max-w-xl text-base leading-7 text-white/70 sm:mt-6 sm:text-lg sm:leading-8">{product.story}</p>
          <div className="mt-8 grid gap-3 sm:grid-cols-3">
            {product.specs.map((spec) => (
              <div className="glass rounded-lg p-4" key={spec.label}>
                <p className="text-xs uppercase tracking-[.2em] text-white/40">{spec.label}</p>
                <p className="mt-2 text-sm font-semibold text-white">{spec.value}</p>
              </div>
            ))}
          </div>
          <div className="mt-8 flex flex-wrap gap-3">
            {product.colors.map((color) => (
              <span key={color} className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/75">{color}</span>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-4 px-4 pb-16 sm:px-5 sm:pb-24 lg:grid-cols-3 lg:gap-6 lg:px-8">
        <div className="glass rounded-lg p-6">
          <BadgeCheck className="text-champagne" />
          <h2 className="mt-5 text-2xl font-semibold">Premium finish</h2>
          <p className="mt-3 text-white/62">Built for leadership kits, event launches, employee rewards, and sports-inspired merchandise drops.</p>
        </div>
        <div className="glass rounded-lg p-6">
          <Layers className="text-ember" />
          <h2 className="mt-5 text-2xl font-semibold">Layered branding</h2>
          <p className="mt-3 text-white/62">Mock up logo positions, finish directions, packaging tiers, and campaign-specific variants.</p>
        </div>
        <div className="glass rounded-lg p-6">
          <Wand2 className="text-sky-300" />
          <h2 className="mt-5 text-2xl font-semibold">AI assisted</h2>
          <p className="mt-3 text-white/62">Ask for gifting suggestions by budget, quantity, audience, event theme, or delivery timeline.</p>
        </div>
      </section>

      <LogoMockup product={product} />
    </main>
  );
}
