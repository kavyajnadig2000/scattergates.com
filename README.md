# Scattergates Premium Ecommerce

Production-ready Next.js 15 ecommerce experience for premium corporate gifting and branded merchandise.

## Run Locally

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Included

- Next.js 15 App Router, React 19, TypeScript, Tailwind CSS
- Fast real-image product showcase with premium hover previews
- Framer Motion, GSAP-ready architecture, Lenis smooth scrolling
- Product catalog, product detail pages, premium product images, logo mockup preview
- Floating AI assistant with voice input and Gemini API integration
- Contact and inquiry API with rate limiting, sanitization, and Supabase-ready persistence
- Admin dashboard foundation for products, leads, AI training, media uploads, and analytics
- SEO metadata, OpenGraph, sitemap, robots, security headers, Vercel config

## Environment

Copy `.env.example` to `.env.local` and fill only the services you want to activate.

```bash
GEMINI_API_KEY=
NEXT_PUBLIC_SUPABASE_URL=
SUPABASE_SERVICE_ROLE_KEY=
CLOUDINARY_CLOUD_NAME=
CLOUDINARY_API_KEY=
CLOUDINARY_API_SECRET=
```

The app runs without keys. Gemini responses fall back to local product recommendations, and contact inquiries are logged server-side unless Supabase is configured.

## Supabase Free Tier

Create a `leads` table:

```sql
create table leads (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  company text,
  email text not null,
  phone text,
  message text,
  source text default 'website',
  created_at timestamptz default now()
);
```

Add `NEXT_PUBLIC_SUPABASE_URL` and `SUPABASE_SERVICE_ROLE_KEY` to Vercel environment variables.

## Cloudinary Free Tier

Use Cloudinary for production product photography, posters, and campaign images. Add Cloudinary env variables and replace the remote demo images in `src/data/products.ts` with your own optimized Cloudinary URLs.

## Gemini Free Tier

Create a Gemini API key and add `GEMINI_API_KEY`. The API route at `src/app/api/ai/route.ts` keeps the key server-side and injects product knowledge from `src/data/ai-knowledge.ts`.

## Deploy on Vercel

1. Push this repository to GitHub.
2. Import the project in Vercel.
3. Add the environment variables from `.env.example`.
4. Deploy.

The project includes `vercel.json`, SEO routes, security headers, and App Router metadata.
