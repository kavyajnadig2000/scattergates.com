import Link from "next/link";
import { Mail, Phone, Send } from "lucide-react";
import { categories } from "@/data/products";
import { site } from "@/lib/site";

export function Footer() {
  return (
    <footer className="relative z-10 border-t border-white/10 bg-black/40 px-4 pb-[max(3rem,env(safe-area-inset-bottom))] pt-12 sm:px-5 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-[1.2fr_.8fr_.8fr]">
        <div>
          <h2 className="font-display text-3xl">Scattergates</h2>
          <p className="mt-4 max-w-md text-white/62">Premium corporate gifting, custom merchandise, sports-inspired launch kits, and brand experiences.</p>
          <div className="mt-6 flex flex-col gap-3 text-sm text-white/70 sm:flex-row sm:flex-wrap">
            <a href={`mailto:${site.email}`} className="flex min-w-0 items-center gap-2 rounded-sm py-1 transition hover:text-champagne"><Mail size={16} className="shrink-0" /> <span className="break-all">{site.email}</span></a>
            <a href={`tel:${site.phone}`} className="flex items-center gap-2 rounded-sm py-1 transition hover:text-champagne"><Phone size={16} className="shrink-0" /> {site.phone}</a>
          </div>
        </div>
        <div>
          <h3 className="font-semibold">Categories</h3>
          <div className="mt-4 grid grid-cols-2 gap-2 text-sm text-white/60">
            {categories.slice(0, 10).map((item) => <Link className="rounded-sm py-1 transition hover:text-champagne" href="/#categories" key={item}>{item}</Link>)}
          </div>
        </div>
        <div>
          <h3 className="font-semibold">Launch a kit</h3>
          <p className="mt-4 text-sm leading-6 text-white/60">Send a brief and get gifting suggestions, mockups, and a quote path.</p>
          <a href={`https://wa.me/${site.whatsapp}`} className="magnetic mt-5 inline-flex w-full items-center justify-center gap-2 rounded-md bg-white px-4 py-3 text-sm font-semibold text-carbon sm:w-fit">
            <Send size={16} /> WhatsApp Scattergates
          </a>
        </div>
      </div>
      <div className="mx-auto mt-10 flex max-w-7xl flex-wrap justify-between gap-4 border-t border-white/10 pt-6 text-xs text-white/45">
        <p>Copyright {new Date().getFullYear()} Scattergates. All rights reserved.</p>
        <div className="flex gap-4"><Link className="transition hover:text-champagne" href="/terms">Terms</Link><Link className="transition hover:text-champagne" href="/privacy">Privacy Policy</Link></div>
      </div>
    </footer>
  );
}
