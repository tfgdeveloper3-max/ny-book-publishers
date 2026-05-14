"use client";
import { useEffect, useRef } from "react";

export function VideoTrailerSection() {
  const ref = useRef<HTMLElement>(null);
  useEffect(() => {
    const el = ref.current; if (!el) return;
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) el.querySelectorAll(".reveal,.reveal-scale").forEach(c => c.classList.add("revealed"));
    }, { threshold: 0.12 });
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <section ref={ref} style={{
      position: "relative", overflow: "hidden", padding: "88px 40px",
      fontFamily: "var(--font)", textAlign: "center",
      background: "var(--gradient-dark)",
    }}>
      <div style={{ position: "absolute", inset: 0, backgroundImage: "url('/images/trailer-bg.webp')", backgroundSize: "cover", backgroundPosition: "center", opacity: 0.07, pointerEvents: "none" }} />
      <div style={{ position: "absolute", inset: 0, background: "rgba(7,9,30,0.78)", pointerEvents: "none" }} />

      {/* animated rings */}
      <div style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%,-50%)", width: 600, height: 600, borderRadius: "50%", border: "1px solid rgba(240,165,0,0.06)", pointerEvents: "none", animation: "pulse-ring 5s ease-out infinite" }} />
      <div style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%,-50%)", width: 400, height: 400, borderRadius: "50%", border: "1px solid rgba(240,165,0,0.09)", pointerEvents: "none", animation: "pulse-ring 5s 1.5s ease-out infinite" }} />

      <div style={{ position: "relative", zIndex: 2, maxWidth: 800, margin: "0 auto" }}>
        <p className="section-eyebrow reveal">Times Square Feature</p>
        <h2 className="section-title-accent reveal delay-1" style={{ fontFamily: "var(--font2)", marginBottom: 20 }}>
          NYBP Lights Up Times Square<br />Watch Our Exclusive Video Trailer!
        </h2>
        <p className="reveal delay-2" style={{ fontSize: 15, color: "var(--text-muted)", lineHeight: 1.88, marginBottom: 40, maxWidth: 680, margin: "0 auto 40px" }}>
          Your book, featured in the heart of New York City! NY Book Publishers has taken the spotlight in Times Square, showcasing incredible stories on the world's biggest stage.
        </p>

        {/* video frame */}
        <div className="reveal-scale delay-3" style={{
          width: "100%", maxWidth: 540, margin: "0 auto 44px",
          borderRadius: 14, overflow: "hidden",
          boxShadow: "0 24px 80px rgba(0,0,0,0.6)",
          aspectRatio: "16/9", background: "#000",
          border: "2px solid rgba(240,165,0,0.3)",
        }}>
          {/* swap this div for an actual <video> or <iframe> */}
        </div>

        <div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}>
          <a href="#" className="btn-outline-white reveal delay-4">💬 Let's Discuss</a>
          <a href="#" className="btn-accent reveal delay-5">📞 Create Your Book's Future</a>
        </div>
      </div>
    </section>
  );
}