import { categories, products } from "./products";
import { site } from "@/lib/site";

export const aiKnowledge = `
Brand: Scattergates. Website: ${site.url}. Email: ${site.email}. Phone/WhatsApp: ${site.phone}.
Scattergates creates premium corporate gifting and custom merchandise for employee kits, leadership gifts, event merchandise, sports-inspired drops, conferences, onboarding, and festive campaigns.
Core categories: ${categories.join(", ")}.
Featured products: ${products.map((p) => `${p.name} (${p.category}) - ${p.tagline}`).join("; ")}.
Recommendation rules: ask for quantity, audience, budget, event date, brand colors, and delivery city. For premium sports-inspired kits, combine bottle, tee/cap, backpack, and a tech item. For executive gifts, combine pen, notebook, bottle, and premium packaging. Always invite users to contact ${site.email} or WhatsApp ${site.phone} for quotes.
`;
