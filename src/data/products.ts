export type Product = {
  slug: string;
  name: string;
  category: string;
  tagline: string;
  story: string;
  image: string;
  imageAlt: string;
  shape: "bottle" | "shirt" | "pen" | "bag" | "bank" | "cap" | "book";
  accent: string;
  colors: string[];
  specs: { label: string; value: string }[];
  hotspots: { label: string; text: string; position: [number, number, number] }[];
};

export const products: Product[] = [
  {
    slug: "championship-bottle",
    name: "Championship Bottle",
    category: "Bottles",
    tagline: "Stadium-grade hydration with executive finish.",
    story: "A luxury metal bottle inspired by elite match-day merchandise, built for leadership kits, fan drops, and high-retention corporate gifting.",
    image: "https://images.unsplash.com/photo-1602143407151-7111542de6e8?auto=format&fit=crop&w=1200&q=82",
    imageAlt: "Premium stainless steel water bottle on a dark studio background",
    shape: "bottle",
    accent: "#ff3d1f",
    colors: ["Onyx", "Crimson", "Champagne", "Ice Silver"],
    specs: [{ label: "Finish", value: "Powder coat" }, { label: "Branding", value: "Laser / UV" }, { label: "MOQ", value: "100 pcs" }],
    hotspots: [
      { label: "Cap", text: "Leak-resistant premium screw cap.", position: [0, 1.25, 0] },
      { label: "Logo", text: "Front crest area for team or company mark.", position: [0, .2, .62] }
    ]
  },
  {
    slug: "victory-performance-tee",
    name: "Victory Performance Tee",
    category: "T-Shirts",
    tagline: "Breathable apparel for brand squads.",
    story: "A lightweight sports-inspired tee for offsites, brand activations, tournaments, and annual day merchandise.",
    image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=1200&q=82",
    imageAlt: "Premium branded t-shirt product photography",
    shape: "shirt",
    accent: "#e7c987",
    colors: ["Black", "Red", "White", "Navy"],
    specs: [{ label: "Fabric", value: "Dry-fit blend" }, { label: "Branding", value: "Print / Embroidery" }, { label: "Sizes", value: "XS-4XL" }],
    hotspots: [{ label: "Crest", text: "Premium left chest badge placement.", position: [-.55, .4, .55] }]
  },
  {
    slug: "executive-signature-pen",
    name: "Executive Signature Pen",
    category: "Pens",
    tagline: "A daily-use object with boardroom weight.",
    story: "A refined metal pen for onboarding kits, deal rooms, conferences, and executive gifting moments.",
    image: "https://images.unsplash.com/photo-1585336261022-680e295ce3fe?auto=format&fit=crop&w=1200&q=82",
    imageAlt: "Executive metal pen product photography",
    shape: "pen",
    accent: "#42d8ff",
    colors: ["Gunmetal", "Champagne", "Matte Black"],
    specs: [{ label: "Body", value: "Metal" }, { label: "Branding", value: "Laser etch" }, { label: "Packaging", value: "Gift sleeve" }],
    hotspots: [{ label: "Clip", text: "Subtle logo etch on the clip.", position: [.9, .05, .2] }]
  },
  {
    slug: "away-day-backpack",
    name: "Away Day Backpack",
    category: "Backpacks",
    tagline: "Travel-ready utility with premium brand panels.",
    story: "A structured backpack for employees, event crews, sports clubs, and premium welcome kits.",
    image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=1200&q=82",
    imageAlt: "Black premium backpack product photography",
    shape: "bag",
    accent: "#ff3d1f",
    colors: ["Carbon", "Graphite", "Crimson Trim"],
    specs: [{ label: "Capacity", value: "24L" }, { label: "Laptop", value: "Up to 16 in" }, { label: "Branding", value: "Patch / Print" }],
    hotspots: [{ label: "Panel", text: "Large front panel for crest or sponsor artwork.", position: [0, .2, .7] }]
  },
  {
    slug: "power-play-bank",
    name: "Power Play Bank",
    category: "Power Banks",
    tagline: "Portable power for teams always in motion.",
    story: "A polished tech gift for sales teams, travel cohorts, launch events, and CXO hampers.",
    image: "https://images.unsplash.com/photo-1609091839311-d5365f9ff1c5?auto=format&fit=crop&w=1200&q=82",
    imageAlt: "Portable power bank and charging accessories",
    shape: "bank",
    accent: "#e7c987",
    colors: ["Black", "Silver", "Red Accent"],
    specs: [{ label: "Capacity", value: "10000 mAh" }, { label: "Ports", value: "USB-C / USB-A" }, { label: "Branding", value: "UV print" }],
    hotspots: [{ label: "Logo zone", text: "High-contrast centered logo field.", position: [0, .12, .72] }]
  },
  {
    slug: "crest-cap",
    name: "Crest Cap",
    category: "Caps",
    tagline: "Match-day energy for corporate events.",
    story: "A curved-peak cap designed for sports tournaments, campaign merchandise, and high-visibility brand moments.",
    image: "https://images.unsplash.com/photo-1521369909029-2afed882baee?auto=format&fit=crop&w=1200&q=82",
    imageAlt: "Premium baseball cap product photography",
    shape: "cap",
    accent: "#ff3d1f",
    colors: ["Black", "Red", "White"],
    specs: [{ label: "Fit", value: "Adjustable" }, { label: "Branding", value: "Embroidery" }, { label: "Use", value: "Events" }],
    hotspots: [{ label: "Crest", text: "Raised embroidery on front crown.", position: [0, .3, .72] }]
  },
  {
    slug: "founders-notebook",
    name: "Founders Notebook",
    category: "Stationery",
    tagline: "Premium stationery for ideas worth keeping.",
    story: "A textured notebook for onboarding, conferences, training programs, and leadership retreats.",
    image: "https://images.unsplash.com/photo-1517842645767-c639042777db?auto=format&fit=crop&w=1200&q=82",
    imageAlt: "Premium notebook stationery product photography",
    shape: "book",
    accent: "#42d8ff",
    colors: ["Onyx", "Tan", "Navy"],
    specs: [{ label: "Paper", value: "100 GSM" }, { label: "Cover", value: "Hardbound" }, { label: "Branding", value: "Foil / Deboss" }],
    hotspots: [{ label: "Foil", text: "Champagne foil logo on cover.", position: [0, .1, .65] }]
  },
  {
    slug: "rapid-charge-cable",
    name: "Rapid Charge Cable",
    category: "Charging Cables",
    tagline: "Compact tech utility for everyday brand recall.",
    story: "A practical branded charging cable for onboarding kits, conference bags, tech teams, and travel-focused employee gifts.",
    image: "https://images.unsplash.com/photo-1615526675159-e248c3021d3f?auto=format&fit=crop&w=1200&q=82",
    imageAlt: "Premium charging cable on a clean product background",
    shape: "pen",
    accent: "#e7c987",
    colors: ["Black", "White", "Red Accent"],
    specs: [{ label: "Type", value: "USB-C / multi" }, { label: "Branding", value: "Tag / Case print" }, { label: "Use", value: "Tech kits" }],
    hotspots: [{ label: "Cable tag", text: "Small logo tag or case branding.", position: [0, .1, .65] }]
  },
  {
    slug: "arena-event-props",
    name: "Arena Event Props",
    category: "Event Props",
    tagline: "High-visibility branded moments for launch floors.",
    story: "Custom props for sports days, brand activations, annual events, and photo-friendly corporate celebrations.",
    image: "https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=1200&q=82",
    imageAlt: "Corporate event stage with branded lighting and props",
    shape: "book",
    accent: "#ff3d1f",
    colors: ["Custom brand colors", "Black", "Gold"],
    specs: [{ label: "Format", value: "Custom props" }, { label: "Branding", value: "Print / Cutouts" }, { label: "Use", value: "Events" }],
    hotspots: [{ label: "Logo zone", text: "Large print-ready artwork placement.", position: [0, .1, .65] }]
  },
  {
    slug: "laptop-protective-sleeve",
    name: "Laptop Protective Sleeve",
    category: "Sleeves",
    tagline: "Minimal protection with a premium corporate mark.",
    story: "A sleek sleeve for onboarding, work-from-anywhere teams, tech cohorts, and executive desk kits.",
    image: "https://images.unsplash.com/photo-1541807084-5c52b6b3adef?auto=format&fit=crop&w=1200&q=82",
    imageAlt: "Laptop sleeve and workspace product photography",
    shape: "bank",
    accent: "#42d8ff",
    colors: ["Graphite", "Navy", "Tan"],
    specs: [{ label: "Fit", value: "13-16 in" }, { label: "Branding", value: "Patch / Deboss" }, { label: "Use", value: "Onboarding" }],
    hotspots: [{ label: "Patch", text: "Front patch or deboss logo placement.", position: [0, .1, .65] }]
  },
  {
    slug: "team-shell-jacket",
    name: "Team Shell Jacket",
    category: "Jackets",
    tagline: "Premium outerwear for leadership and event teams.",
    story: "A smart branded jacket for tournaments, field teams, retreats, and elevated employee merchandise.",
    image: "https://images.unsplash.com/photo-1548883354-7622d03aca27?auto=format&fit=crop&w=1200&q=82",
    imageAlt: "Premium jacket apparel product photography",
    shape: "shirt",
    accent: "#e7c987",
    colors: ["Black", "Charcoal", "Navy"],
    specs: [{ label: "Style", value: "Shell jacket" }, { label: "Branding", value: "Embroidery" }, { label: "Sizes", value: "XS-4XL" }],
    hotspots: [{ label: "Chest", text: "Logo embroidery on chest or sleeve.", position: [0, .1, .65] }]
  },
  {
    slug: "captain-hoodie",
    name: "Captain Hoodie",
    category: "Hoodies",
    tagline: "Soft teamwear for premium employee drops.",
    story: "A comfortable hoodie for winter kits, sports-inspired internal campaigns, and high-usage employee gifts.",
    image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?auto=format&fit=crop&w=1200&q=82",
    imageAlt: "Premium hoodie apparel product photography",
    shape: "shirt",
    accent: "#ff3d1f",
    colors: ["Black", "Maroon", "Grey"],
    specs: [{ label: "Fabric", value: "Cotton fleece" }, { label: "Branding", value: "Print / Embroidery" }, { label: "Fit", value: "Unisex" }],
    hotspots: [{ label: "Center", text: "Large front artwork or chest badge.", position: [0, .1, .65] }]
  }
];

export const categories = [
  "Bottles", "T-Shirts", "Pens", "Backpacks", "Power Banks", "Charging Cables", "Stationery", "Caps", "Event Props", "Sleeves", "Jackets", "Hoodies"
];
