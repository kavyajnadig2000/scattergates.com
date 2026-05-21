export function sanitizeText(input: unknown, max = 1200) {
  return String(input ?? "")
    .replace(/[<>]/g, "")
    .replace(/javascript:/gi, "")
    .trim()
    .slice(0, max);
}
