"use client";

import { PointerEvent, useRef, useState } from "react";
import Image from "next/image";
import { BadgeCheck, Grab, Maximize2, Move } from "lucide-react";
import type { Product } from "@/data/products";

type Placement = {
  id: string;
  label: string;
  x: number;
  y: number;
  width: number;
  rotate?: number;
};

const placementsByShape: Record<Product["shape"], Placement[]> = {
  bottle: [
    { id: "front", label: "Front body", x: 50, y: 52, width: 24 },
    { id: "upper", label: "Upper badge", x: 50, y: 40, width: 18 },
    { id: "wrap", label: "Wrap band", x: 50, y: 62, width: 34 }
  ],
  shirt: [
    { id: "chest", label: "Left chest", x: 43, y: 42, width: 16 },
    { id: "center", label: "Center front", x: 50, y: 50, width: 28 },
    { id: "sponsor", label: "Sponsor band", x: 50, y: 58, width: 36 }
  ],
  pen: [
    { id: "barrel", label: "Barrel print", x: 52, y: 50, width: 26, rotate: -8 },
    { id: "clip", label: "Clip mark", x: 62, y: 38, width: 14, rotate: -8 }
  ],
  bag: [
    { id: "front", label: "Front panel", x: 50, y: 53, width: 28 },
    { id: "patch", label: "Patch badge", x: 50, y: 42, width: 18 },
    { id: "pocket", label: "Lower pocket", x: 50, y: 66, width: 30 }
  ],
  bank: [
    { id: "center", label: "Center face", x: 50, y: 50, width: 28 },
    { id: "bottom", label: "Bottom mark", x: 50, y: 66, width: 24 }
  ],
  cap: [
    { id: "front", label: "Front crown", x: 50, y: 47, width: 22 },
    { id: "side", label: "Side mark", x: 62, y: 50, width: 14 }
  ],
  book: [
    { id: "cover", label: "Cover center", x: 50, y: 50, width: 30 },
    { id: "bottom", label: "Lower cover", x: 50, y: 67, width: 24 }
  ]
};

export function LogoMockup({ product }: { product: Product }) {
  const placements = placementsByShape[product.shape];
  const [logo, setLogo] = useState("RCB");
  const [placement, setPlacement] = useState<Placement>(placements[0]);
  const [scale, setScale] = useState(100);
  const [dragging, setDragging] = useState(false);
  const previewRef = useRef<HTMLDivElement>(null);
  const previewWidth = placement.width * (scale / 100);

  function moveLogo(event: PointerEvent<HTMLDivElement>) {
    const rect = previewRef.current?.getBoundingClientRect();
    if (!rect) return;
    const x = ((event.clientX - rect.left) / rect.width) * 100;
    const y = ((event.clientY - rect.top) / rect.height) * 100;
    setPlacement((current) => ({
      ...current,
      id: current.id === "custom" ? "custom" : `${current.id}-custom`,
      label: "Custom placement",
      x: Math.min(92, Math.max(8, x)),
      y: Math.min(92, Math.max(8, y))
    }));
  }

  function startDrag(event: PointerEvent<HTMLDivElement>) {
    setDragging(true);
    event.currentTarget.setPointerCapture(event.pointerId);
    moveLogo(event);
  }

  function dragLogo(event: PointerEvent<HTMLDivElement>) {
    if (dragging) moveLogo(event);
  }

  function stopDrag(event: PointerEvent<HTMLDivElement>) {
    setDragging(false);
    if (event.currentTarget.hasPointerCapture(event.pointerId)) {
      event.currentTarget.releasePointerCapture(event.pointerId);
    }
  }

  return (
    <section className="mx-auto max-w-7xl px-4 pb-16 sm:px-5 sm:pb-24 lg:px-8">
      <div className="glass grid gap-8 rounded-lg p-4 sm:p-6 lg:grid-cols-[.9fr_1.1fr] lg:p-10">
        <div>
          <p className="text-sm uppercase tracking-[.34em] text-champagne">Live logo mockup</p>
          <h2 className="mt-4 font-display text-[clamp(2.5rem,8vw,3.5rem)] leading-tight">Place your logo on the product.</h2>
          <p className="mt-5 max-w-xl text-white/62">
            Choose a recommended branding zone for {product.name}. The preview shows where the logo will sit on the actual product image.
          </p>

          <label className="mt-8 block text-sm font-medium text-white/70">Logo text</label>
          <input
            value={logo}
            onChange={(event) => setLogo(event.target.value.slice(0, 24))}
            className="mt-3 min-h-12 w-full rounded-md border border-white/10 bg-black/30 px-4 py-4 text-white outline-none focus:border-champagne"
          />

          <div className="mt-6">
            <div className="mb-3 flex items-center gap-2 text-sm font-medium text-white/70">
              <Move size={16} /> Branding location
            </div>
            <div className="flex flex-wrap gap-2">
              {placements.map((item) => (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => setPlacement(item)}
                  className={`rounded-md border px-4 py-3 text-sm transition ${placement.id === item.id ? "border-champagne bg-champagne/15 text-champagne" : "border-white/10 bg-white/5 text-white/68 hover:border-white/25"}`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>

          <label className="mt-6 flex items-center gap-2 text-sm font-medium text-white/70">
            <Maximize2 size={16} /> Logo size
          </label>
          <input
            type="range"
            min="70"
            max="135"
            value={scale}
            onChange={(event) => setScale(Number(event.target.value))}
            className="mt-3 w-full accent-champagne"
          />

          <div className="mt-6 flex items-start gap-3 rounded-lg border border-white/10 bg-white/5 p-4 text-sm text-white/62">
            <Grab className="mt-0.5 shrink-0 text-champagne" size={18} />
            <p>Click anywhere on the product image, then drag the logo with your mouse or finger to place it exactly where you want.</p>
          </div>

          <div className="mt-3 flex items-start gap-3 rounded-lg border border-white/10 bg-white/5 p-4 text-sm text-white/62">
            <BadgeCheck className="mt-0.5 shrink-0 text-champagne" size={18} />
            <p>Final production artwork can use embroidery, UV print, laser, foil, or patch placement depending on the item.</p>
          </div>
        </div>

        <div className="rounded-lg border border-white/10 bg-black/30 p-3">
          <div
            ref={previewRef}
            onPointerDown={startDrag}
            onPointerMove={dragLogo}
            onPointerUp={stopDrag}
            onPointerCancel={stopDrag}
            className={`relative min-h-[clamp(360px,64svh,520px)] touch-none overflow-hidden rounded-lg bg-carbon ${dragging ? "cursor-grabbing" : "cursor-crosshair"}`}
          >
            <Image
              src={product.image}
              alt={product.imageAlt}
              fill
              unoptimized
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="pointer-events-none object-cover"
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/10" />
            <div
              className="pointer-events-none absolute grid min-h-12 -translate-x-1/2 -translate-y-1/2 select-none place-items-center rounded-sm border border-dashed border-champagne/70 bg-black/32 px-3 py-2 text-center shadow-[0_0_30px_rgba(231,201,135,.24)] backdrop-blur-[2px]"
              style={{
                left: `${placement.x}%`,
                top: `${placement.y}%`,
                width: `${previewWidth}%`,
                transform: `translate(-50%, -50%) rotate(${placement.rotate ?? 0}deg)`
              }}
            >
              <span className="max-w-full break-words text-[clamp(13px,2.1vw,30px)] font-black uppercase tracking-[.18em] text-white drop-shadow-[0_2px_12px_rgba(0,0,0,.75)]">
                {logo || "LOGO"}
              </span>
            </div>
            <div className="pointer-events-none absolute left-5 top-5 rounded-md border border-white/10 bg-black/50 px-3 py-2 text-xs uppercase tracking-[.2em] text-champagne backdrop-blur-md">
              {placement.label}
            </div>
            <div className="pointer-events-none absolute bottom-5 left-5 rounded-md border border-white/10 bg-black/50 px-3 py-2 text-xs text-white/70 backdrop-blur-md">
              X {Math.round(placement.x)}% / Y {Math.round(placement.y)}%
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
