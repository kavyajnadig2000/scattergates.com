export default function ProductLoading() {
  return (
    <main className="min-h-[100svh] px-4 pt-24 sm:px-5 sm:pt-28 lg:px-8">
      <section className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[1.08fr_.92fr] lg:gap-10">
        <div className="h-[clamp(360px,62svh,540px)] animate-pulse rounded-lg border border-white/10 bg-white/5" />
        <div className="space-y-5 pt-10">
          <div className="h-5 w-36 animate-pulse rounded bg-white/10" />
          <div className="h-16 w-4/5 animate-pulse rounded bg-white/10" />
          <div className="h-28 w-full animate-pulse rounded bg-white/10" />
          <div className="grid gap-3 sm:grid-cols-3">
            <div className="h-24 animate-pulse rounded bg-white/10" />
            <div className="h-24 animate-pulse rounded bg-white/10" />
            <div className="h-24 animate-pulse rounded bg-white/10" />
          </div>
        </div>
      </section>
    </main>
  );
}
