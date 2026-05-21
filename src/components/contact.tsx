"use client";

import { useState } from "react";
import { Send } from "lucide-react";
import { site } from "@/lib/site";

export function Contact() {
  const [status, setStatus] = useState("");

  async function submit(formData: FormData) {
    setStatus("Sending...");
    const response = await fetch("/api/contact", { method: "POST", body: JSON.stringify(Object.fromEntries(formData)), headers: { "Content-Type": "application/json" } });
    setStatus(response.ok ? "Inquiry received. Scattergates will follow up shortly." : "Could not send right now. Please use email or WhatsApp.");
  }

  return (
    <section id="contact" className="px-4 py-16 sm:px-5 sm:py-24 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[.9fr_1.1fr]">
        <div data-reveal>
          <p className="text-sm uppercase tracking-[.34em] text-champagne">Contact</p>
          <h2 className="mt-4 font-display text-[clamp(2.7rem,8vw,4.5rem)] leading-tight">Build your next premium gifting drop.</h2>
          <p className="mt-6 text-white/65">{site.email} / {site.phone}</p>
        </div>
        <form action={submit} data-reveal className="glass grid gap-4 rounded-lg p-5 md:p-7">
          {["name", "company", "email", "phone"].map((field) => (
            <input key={field} required={field !== "phone"} name={field} placeholder={field[0].toUpperCase() + field.slice(1)} className="min-h-12 rounded-md border border-white/10 bg-black/30 px-4 py-4 text-white outline-none focus:border-champagne" />
          ))}
          <textarea name="message" rows={5} placeholder="Tell us quantity, event, budget, city, and products you like." className="min-h-32 rounded-md border border-white/10 bg-black/30 px-4 py-4 text-white outline-none focus:border-champagne" />
          <button className="magnetic inline-flex w-full items-center justify-center gap-2 rounded-md bg-white px-5 py-4 font-semibold text-carbon sm:w-fit"><Send size={18} /> Send inquiry</button>
          {status && <p className="text-sm text-champagne">{status}</p>}
        </form>
      </div>
    </section>
  );
}
