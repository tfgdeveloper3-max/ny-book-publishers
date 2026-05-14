// ══════════════════════════════════════
// ProudSection.tsx
// ══════════════════════════════════════
"use client";
import { useEffect, useRef } from "react";

export function ProudSection() {
  const ref = useRef<HTMLElement>(null);
  useEffect(() => {
    const el = ref.current; if (!el) return;
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) { el.querySelectorAll(".reveal,.reveal-left,.reveal-right,.reveal-scale").forEach(c => c.classList.add("revealed")); } }, { threshold: 0.15 });
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <section ref={ref} style={{ background: "#fff", fontFamily: "var(--font)", display: "flex", alignItems: "stretch", minHeight: 520, overflow: "hidden" }}>
      {/* Left — book image */}
      <div className="reveal-left" style={{ flex: "0 0 44%", display: "flex", alignItems: "flex-end", justifyContent: "center", padding: "0 0 0 60px", background: "linear-gradient(180deg,#fff 0%,#fef8ec 100%)", position: "relative" }}>
        {/* decorative gold arc */}
        <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: 4, background: "linear-gradient(90deg,transparent,var(--accent),transparent)" }} />
        <img
          src="/images/book-3.png" alt="Published Books Stack"
          style={{ width: 380, maxWidth: "100%", objectFit: "contain", filter: "drop-shadow(0 20px 50px rgba(0,0,0,0.15))", position: "relative", zIndex: 1 }}
        />
      </div>

      {/* Right */}
      <div className="reveal-right" style={{ flex: 1, display: "flex", flexDirection: "column", justifyContent: "center", padding: "60px 64px 60px 48px" }}>
        <div className="nybp-badge reveal delay-1">NYBP IS PROUD</div>
        <h2 className="section-title reveal delay-2" style={{ marginTop: 20 }}>
          To Help More Than 500+<br />Authors Publish Their Books
        </h2>
        <p className="reveal delay-3" style={{ fontSize: 14.5, color: "#666", lineHeight: 1.9, marginBottom: 16, maxWidth: 480 }}>
          From first-time writers to experienced voices, so many have trusted our expert book publishing services to turn their stories into beautiful books.
        </p>
        <p className="reveal delay-4" style={{ fontSize: 14.5, color: "#666", lineHeight: 1.9, marginBottom: 36, maxWidth: 480 }}>
          Whether they needed help with editing, cover design, or navigating self-publishing platforms, we've been there at every step.
        </p>

        {/* Stats row */}
        <div className="reveal delay-5" style={{ display: "flex", gap: 32, marginBottom: 36, flexWrap: "wrap" }}>
          {[["500+", "Authors Served"], ["#1", "Bestsellers Made"], ["100%", "Royalties Kept"]].map(([n, l]) => (
            <div key={l}>
              <div style={{ fontSize: 28, fontWeight: 900, color: "var(--accent)", fontFamily: "var(--font2)", lineHeight: 1 }}>{n}</div>
              <div style={{ fontSize: 12, fontWeight: 700, color: "#999", textTransform: "uppercase", letterSpacing: 1.5, marginTop: 4 }}>{l}</div>
            </div>
          ))}
        </div>

        <a href="#" className="btn-accent reveal delay-6" style={{ alignSelf: "flex-start" }}>
          Get a free quote for your book projects
        </a>
      </div>
    </section>
  );
}