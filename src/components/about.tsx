import { Award, Gem, PackageCheck } from "lucide-react";
import { site } from "@/lib/site";

export function About() {
  return (
    <section id="about" className="relative px-4 py-16 sm:px-5 sm:py-24 lg:px-8">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-radial-lux opacity-50" />
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[.9fr_1.1fr]">
        <div data-reveal>
          <p className="text-sm uppercase tracking-[.34em] text-champagne">About Scattergates</p>
          <h2 className="mt-4 font-display text-[clamp(2.7rem,8vw,4.5rem)] leading-tight">Corporate gifting with the drama of a launch event.</h2>
        </div>
        <div className="grid gap-4" data-reveal>
          <p className="text-base leading-8 text-white/72 sm:text-xl sm:leading-9">
            Scattergates builds branded merchandise programs for teams that want gifts to feel like an experience. From bottles, apparel, caps, backpacks, stationery, tech accessories, sleeves, jackets, hoodies, and event props, each kit can be shaped around audience, budget, color system, and brand story.
          </p>
          <div className="grid gap-4 sm:grid-cols-3">
            {[["Premium", Gem], ["Bulk ready", PackageCheck], ["Sports energy", Award]].map(([label, Icon]) => (
              <div className="glass rounded-lg p-5" key={String(label)}>
                <Icon className="text-champagne" />
                <p className="mt-5 font-semibold">{String(label)}</p>
              </div>
            ))}
          </div>
          <a className="mt-2 text-champagne" href={`mailto:${site.email}`}>{site.email}</a>
        </div>
      </div>
    </section>
  );
}
