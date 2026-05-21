import { About } from "@/components/about";
import { AiConcierge } from "@/components/ai-concierge";
import { Contact } from "@/components/contact";
import { Hero } from "@/components/hero";
import { ProductCategories } from "@/components/product-categories";
import { Showcase } from "@/components/showcase";

export default function Home() {
  return (
    <>
      <Hero />
      <Showcase />
      <ProductCategories />
      <About />
      <AiConcierge />
      <Contact />
    </>
  );
}
