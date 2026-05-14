"use client";
import { useEffect, useRef } from "react";

export function GlobalSection() {
  const ref = useRef<HTMLElement>(null);
  useEffect(() => {
    const el = ref.current; if (!el) return;
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) el.querySelectorAll(".reveal,.reveal-left,.reveal-right").forEach(c => c.classList.add("revealed"));
    }, { threshold: 0.1 });
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <section ref={ref} style={{ fontFamily: "var(--font)", background: "var(--white)", marginTop: 48 }}>
      {/* banner */}
      <div className="reveal" style={{ background: "linear-gradient(90deg,#0d1240 0%,#1a1f5e 72%,#fff 100%)", padding: "32px 80px" }}>
        <h2 style={{ color: "var(--white)", fontFamily: "var(--font2)", fontSize: "clamp(20px,2.8vw,34px)", fontWeight: 800, lineHeight: 1.4 }}>
          NY Book Publisher – Global Leaders In<br />Professional Book Publishing Services
        </h2>
      </div>

      {/* content */}
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "56px 80px", gap: 48, flexWrap: "wrap" }}>
        <div className="reveal-left" style={{ flex: 1, maxWidth: 580 }}>
          {[
            "At NY Book Publishers, we're proud to be global leaders in professional book publishing services. As one of the top book publishing companies New York offers, we support authors from the very first idea to seeing their book on shelves.",
            "We offer complete solutions including editing, book writing help, cover design, formatting, ISBN registration, and listings on Amazon and other major retailers.",
            "Whether you're looking for expert book publish services, affordable options, or specialized support like pro publishing or poetry, we have you covered.",
            "Your story deserves to be read — and with NY Book Publishers, you'll finally get to see it out in the world exactly as you imagined.",
          ].map((p, i) => <p key={i} style={{ fontSize: 14.5, color: "#555", lineHeight: 1.9, marginBottom: 16 }}>{p}</p>)}
          <div style={{ display: "flex", gap: 16, marginTop: 32, flexWrap: "wrap" }}>
            <a href="tel:8553847020" className="btn-navy">Call now</a>
            <a href="#" className="btn-accent">Get Free Consultation</a>
          </div>
        </div>
        <div className="reveal-right" style={{ flexShrink: 0 }}>
          <img src="/images/book-mock-1.png" alt="Book Mockup" style={{ width: 380, maxWidth: "100%", objectFit: "contain" }} />
        </div>
      </div>

      {/* tagline + brands */}
      <div className="reveal" style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "26px 80px", background: "#fefefe", borderTop: "1px solid #eee", flexWrap: "wrap", gap: 24 }}>
        <div style={{ flex: "0 0 auto", maxWidth: 540, paddingRight: 32, borderRight: "2px solid #ddd" }}>
          <p style={{ fontSize: 18, fontWeight: 700, color: "var(--accent)", lineHeight: 1.65 }}>
            Elevate Your Words, Create Lasting Impressions:<br />Rely On Our Passionate Book Publishing Services
          </p>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: 40, flexWrap: "wrap", paddingLeft: 40, marginLeft: "auto" }}>
          {["brand1.webp", "brand2.webp", "brand4.webp", "brand5.webp"].map(b => (
            <img key={b} src={`/images/${b}`} alt="" style={{ height: 28, width: "auto", objectFit: "contain", opacity: 0.75, transition: "opacity 0.2s, transform 0.2s" }}
              onMouseEnter={e => { (e.target as HTMLImageElement).style.opacity = "1"; (e.target as HTMLImageElement).style.transform = "scale(1.08)"; }}
              onMouseLeave={e => { (e.target as HTMLImageElement).style.opacity = "0.75"; (e.target as HTMLImageElement).style.transform = "scale(1)"; }} />
          ))}
        </div>
      </div>
    </section>
  );
}

