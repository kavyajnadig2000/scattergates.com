import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import { aiKnowledge } from "@/data/ai-knowledge";
import { rateLimit } from "@/lib/rate-limit";
import { sanitizeText } from "@/lib/sanitize";

const schema = z.object({
  messages: z.array(z.object({ role: z.enum(["user", "assistant"]), content: z.string() })).max(12)
});

export async function POST(request: NextRequest) {
  const ip = request.headers.get("x-forwarded-for") ?? "local";
  if (!rateLimit(`ai:${ip}`, 10).ok) return NextResponse.json({ error: "Rate limited" }, { status: 429 });

  const parsed = schema.safeParse(await request.json());
  if (!parsed.success) return NextResponse.json({ error: "Invalid request" }, { status: 400 });

  const messages = parsed.data.messages.map((m) => ({ ...m, content: sanitizeText(m.content, 900) }));
  const last = messages[messages.length - 1]?.content ?? "";
  const key = process.env.GEMINI_API_KEY;

  if (!key) {
    return NextResponse.json({
      reply: fallbackReply(last)
    });
  }

  const gemini = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key=${key}`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      contents: [
        {
          role: "user",
          parts: [{ text: `You are Scattergates AI. Use this knowledge:\n${aiKnowledge}\nConversation:\n${messages.map((m) => `${m.role}: ${m.content}`).join("\n")}\nReply concisely with useful product recommendations.` }]
        }
      ],
      generationConfig: { temperature: 0.7, maxOutputTokens: 420 }
    })
  });

  if (!gemini.ok) return NextResponse.json({ reply: fallbackReply(last) });
  const data = await gemini.json();
  return NextResponse.json({ reply: data?.candidates?.[0]?.content?.parts?.[0]?.text ?? fallbackReply(last) });
}

function fallbackReply(input: string) {
  const lower = input.toLowerCase();
  if (lower.includes("executive") || lower.includes("premium")) return "For an executive premium kit, I would combine the Championship Bottle, Executive Signature Pen, Founders Notebook, and rigid gift packaging with champagne foil branding. Share quantity, city, and budget for a sharper quote path.";
  if (lower.includes("event") || lower.includes("sports")) return "For a sports-style event kit, pair Victory Performance Tees, Crest Caps, Championship Bottles, and event props. Keep one bold accent color and reserve the logo for chest, cap crown, and bottle front.";
  return "A strong all-round corporate gifting kit would include a bottle, tee or cap, notebook, and a tech item like the Power Play Bank. What is your quantity, budget per person, and event date?";
}
