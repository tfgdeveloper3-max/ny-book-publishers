"use client";
import { useEffect, useRef } from "react";

export function WatchSection() {
  const ref = useRef<HTMLElement>(null);
  useEffect(() => {
    const el = ref.current; if (!el) return;
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) el.querySelectorAll(".reveal").forEach(c => c.classList.add("revealed"));
    }, { threshold: 0.15 });
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <section ref={ref} style={{
      background: "var(--gradient-dark)", padding: "80px 60px",
      textAlign: "center", overflow: "hidden", fontFamily: "var(--font)", minHeight: 420,
      position: "relative",
    }}>
      <div style={{ position: "absolute", inset: 0, backgroundImage: "url('/images/discover-layer-2.png')", backgroundSize: "cover", backgroundPosition: "center", opacity: 0.9, pointerEvents: "none" }} />
      <div style={{ position: "relative", zIndex: 1, maxWidth: 1000, margin: "0 auto" }}>
        <p className="section-eyebrow reveal">Easy Process</p>
        <h2 className="reveal delay-1" style={{ fontFamily: "var(--font2)", fontSize: "clamp(22px,3.5vw,40px)", fontWeight: 800, color: "var(--accent)", lineHeight: 1.25, marginBottom: 24 }}>
          Watch How Easy Book Publishing Can Be With Us
        </h2>
        <p className="reveal delay-2" style={{ fontSize: 15, color: "var(--text-muted)", lineHeight: 1.88, maxWidth: 900, margin: "0 auto 44px" }}>
          At NY Book Publishers, we do so much more than just publish your book. We help you write it, polish it through careful editing, design a stunning cover and interior layout, and take care of all the details like ISBN registration and getting your book listed on Amazon and other top platforms.
        </p>
        <a href="#" className="btn-accent reveal delay-3">Book your consultation today!</a>
      </div>
    </section>
  );
}

