/** Fixed decorative layers behind page content (no interaction). */
export function SiteAmbient() {
  return (
    <>
      <div className="site-ambient-glow" aria-hidden />
      <div className="site-ambient-grain" aria-hidden />
      <div className="site-ambient-vignette" aria-hidden />
    </>
  );
}
