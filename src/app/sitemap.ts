import type { MetadataRoute } from "next";
import { products } from "@/data/products";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";
  return [
    { url: base, lastModified: new Date() },
    ...products.map((product) => ({ url: `${base}/products/${product.slug}`, lastModified: new Date() }))
  ];
}
