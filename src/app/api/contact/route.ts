import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import { getSupabaseAdmin } from "@/lib/supabase";
import { rateLimit } from "@/lib/rate-limit";
import { sanitizeText } from "@/lib/sanitize";

const schema = z.object({
  name: z.string().min(2).max(100),
  company: z.string().max(120).optional(),
  email: z.string().email(),
  phone: z.string().max(40).optional(),
  message: z.string().max(1600).optional()
});

export async function POST(request: NextRequest) {
  const ip = request.headers.get("x-forwarded-for") ?? "local";
  if (!rateLimit(`contact:${ip}`, 6).ok) return NextResponse.json({ error: "Rate limited" }, { status: 429 });
  const parsed = schema.safeParse(await request.json());
  if (!parsed.success) return NextResponse.json({ error: "Invalid request" }, { status: 400 });
  const lead = Object.fromEntries(Object.entries(parsed.data).map(([key, value]) => [key, sanitizeText(value, 1600)]));
  const supabase = getSupabaseAdmin();
  if (supabase) await supabase.from("leads").insert({ ...lead, source: "website" });
  return NextResponse.json({ ok: true });
}
