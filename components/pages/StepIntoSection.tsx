"use client";
import { useEffect, useRef } from "react";

export function StepIntoSection() {
  const ref = useRef<HTMLElement>(null);
  useEffect(() => {
    const el = ref.current; if (!el) return;
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) el.querySelectorAll(".reveal,.reveal-right").forEach(c => c.classList.add("revealed"));
    }, { threshold: 0.12 });
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <section ref={ref} style={{
      background: "linear-gradient(135deg,var(--accent) 0%,var(--accent2) 100%)",
      position: "relative", overflow: "hidden", padding: "68px 80px",
      fontFamily: "var(--font)", display: "flex", alignItems: "center",
      justifyContent: "space-between", gap: 40, minHeight: 320,
    }}>
      {/* decorative overlay */}
      <div style={{ position: "absolute", right: 0, top: 0, bottom: 0, width: "45%", background: "linear-gradient(135deg,transparent,rgba(255,255,255,0.12))", pointerEvents: "none" }} />
      <img src="/images/ready-leaf.png" alt="" style={{ position: "absolute", right: 0, bottom: 0, height: "100%", objectFit: "contain", objectPosition: "bottom right", opacity: 0.9, pointerEvents: "none", zIndex: 0 }} />

      {/* text */}
      <div className="reveal" style={{ flex: 1, maxWidth: 600, position: "relative", zIndex: 1 }}>
        <h2 style={{ fontFamily: "var(--font2)", fontSize: "clamp(24px,2.9vw,36px)", fontWeight: 900, color: "var(--navy)", lineHeight: 1.28, marginBottom: 18 }}>
          Step Into The World Of Authors…<br />Your Time Is Now! Get Book Publishing Services!
        </h2>
        <p style={{ fontSize: 14.5, color: "rgba(13,18,64,0.78)", lineHeight: 1.8, marginBottom: 32, maxWidth: 520 }}>
          Don't wait any longer to make your book a reality. From start to finish, publishing your story has never been this simple, exciting, and within your reach.
        </p>
        <div style={{ display: "flex", gap: 14, flexWrap: "wrap" }}>
          <a href="#" className="btn-navy">Book Now</a>
          <a href="#" className="btn-navy">Chat with Experts</a>
          <a href="tel:8553847020" className="btn-navy">Call now</a>
        </div>
      </div>

      {/* book image */}
      <div className="reveal-right" style={{ flexShrink: 0, position: "relative", zIndex: 1, marginRight: 60 }}>
        <img src="/images/yes-book.png" alt="Stack of Books" style={{ width: 280, height: 340, objectFit: "contain", filter: "drop-shadow(0 16px 40px rgba(0,0,0,0.25))", animation: "scaleIn 0.8s 0.3s ease both" }} />
      </div>
    </section>
  );
}