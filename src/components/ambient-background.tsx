export function AmbientBackground() {
  return (
    <div aria-hidden="true" className="pointer-events-none fixed inset-0 -z-20 overflow-hidden">
      <div className="ambient-mesh absolute inset-0" />
      <div className="neural-grid absolute inset-0 opacity-[.16]" />
      <div className="noise-layer absolute inset-0 opacity-[.055]" />
      <div className="light-orb orb-a absolute rounded-full" />
      <div className="light-orb orb-b absolute rounded-full" />
    </div>
  );
}
