import { BarChart3, Boxes, BrainCircuit, CloudUpload, Inbox, LineChart } from "lucide-react";
import { products } from "@/data/products";

const cards = [
  { icon: Boxes, title: "Products", value: products.length, text: "Live catalog items across premium gifting categories." },
  { icon: Inbox, title: "Leads", value: "24", text: "Inquiry pipeline ready for Supabase persistence." },
  { icon: BrainCircuit, title: "AI training", value: "18", text: "Product facts, FAQs, brand rules, and gift playbooks." },
  { icon: CloudUpload, title: "Media assets", value: "CDN", text: "Cloudinary-ready product, campaign, and poster uploads." }
];

export default function AdminPage() {
  return (
    <main className="min-h-[100svh] px-4 pb-16 pt-24 sm:px-5 sm:pb-20 sm:pt-28 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <p className="text-sm uppercase tracking-[.34em] text-champagne">Admin command center</p>
        <h1 className="mt-4 max-w-3xl font-display text-[clamp(2.8rem,9vw,4.5rem)] leading-tight">Premium control room for merchandise launches.</h1>
        <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {cards.map(({ icon: Icon, title, value, text }) => (
            <div className="glass rounded-lg p-5" key={title}>
              <Icon className="text-champagne" />
              <p className="mt-7 text-4xl font-semibold">{value}</p>
              <h2 className="mt-2 text-xl font-semibold">{title}</h2>
              <p className="mt-3 text-sm leading-6 text-white/60">{text}</p>
            </div>
          ))}
        </div>
        <section className="mt-8 grid gap-5 lg:grid-cols-[1.2fr_.8fr]">
          <div className="glass rounded-lg p-6">
            <div className="flex items-center gap-3">
              <LineChart className="text-ember" />
              <h2 className="text-2xl font-semibold">Analytics</h2>
            </div>
            <div className="mt-8 flex h-72 items-end gap-3">
              {[42, 62, 38, 74, 88, 58, 96, 70, 82].map((height, index) => (
                <div className="flex-1 rounded-t bg-gradient-to-t from-ember to-champagne" style={{ height: `${height}%` }} key={index} />
              ))}
            </div>
          </div>
          <div className="glass rounded-lg p-6">
            <div className="flex items-center gap-3">
              <BarChart3 className="text-sky-300" />
              <h2 className="text-2xl font-semibold">Upload workflow</h2>
            </div>
            {["Create product", "Attach GLB model", "Add Cloudinary media", "Train AI answers", "Publish to Vercel"].map((step, index) => (
              <div className="mt-5 flex items-center gap-4" key={step}>
                <span className="grid size-9 place-items-center rounded-full border border-white/15 bg-white/5 text-sm">{index + 1}</span>
                <p className="text-white/75">{step}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
