import Image from "next/image";
import type { Product } from "@/data/products";

type ProductImageProps = {
  product: Product;
  className?: string;
  priority?: boolean;
};

export function ProductImage({ product, className = "", priority = false }: ProductImageProps) {
  return (
    <div className={`product-photo relative min-w-0 overflow-hidden rounded-lg ${className}`}>
      <Image
        src={product.image}
        alt={product.imageAlt}
        fill
        priority={priority}
        unoptimized
        sizes="(min-width: 1280px) 42vw, (min-width: 768px) 50vw, 100vw"
        className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.025]"
      />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-carbon via-carbon/20 to-transparent" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-28" style={{ background: `linear-gradient(0deg, ${product.accent}33, transparent)` }} />
    </div>
  );
}
