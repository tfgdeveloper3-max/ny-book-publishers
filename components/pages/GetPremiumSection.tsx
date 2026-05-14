"use client";
import { useEffect, useRef } from "react";

export function GetPremiumSection() {
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
    <section ref={ref} style={{ background: "var(--white)", overflow: "hidden", fontFamily: "var(--font)" }}>
      {/* GET bar */}
      <div style={{ display: "flex", justifyContent: "flex-end" }}>
        <div style={{
          background: "linear-gradient(135deg,var(--accent),var(--accent2))",
          width: "52%", minHeight: 96, display: "flex", alignItems: "flex-end", padding: "0 44px",
        }}>
          <span style={{ fontSize: "clamp(56px,8.5vw,104px)", fontWeight: 900, color: "rgba(13,18,64,0.15)", lineHeight: 1, padding: "18px 0", letterSpacing: -2, fontFamily: "var(--font2)", userSelect: "none" }}>
            GET
          </span>
        </div>
      </div>

      {/* body */}
      <div style={{ display: "flex", alignItems: "flex-start", padding: "0 44px 68px", flexWrap: "wrap", gap: 0 }}>
        {/* book mockup */}
        <div className="reveal-left" style={{ flex: "0 0 44%", marginTop: -64, zIndex: 2, position: "relative" }}>
          <img src="/images/book-2.png" alt="Book mockup" style={{ width: "100%", maxWidth: 520, height: 540, objectFit: "contain", filter: "drop-shadow(0 24px 48px rgba(0,0,0,0.2))" }} />
        </div>

        {/* text */}
        <div className="reveal-right" style={{ flex: 1, padding: "40px 0 0 36px" }}>
          <p className="section-eyebrow" style={{ marginBottom: 10 }}>Premium Services</p>
          <h2 style={{ fontFamily: "var(--font2)", fontSize: "clamp(24px,3vw,38px)", fontWeight: 900, color: "var(--navy)", lineHeight: 1.2, marginBottom: 18 }}>
            Premium <span style={{ color: "var(--accent)" }}>Book<br />Publishing</span> Services!
          </h2>
          <p style={{ fontSize: 14.5, color: "#666", lineHeight: 1.9, marginBottom: 30, maxWidth: 460 }}>
            From editing to design and full distribution, we handle everything so you can proudly hold your book and share it with the world.
          </p>

          {/* contact items */}
          <div style={{ display: "flex", gap: 28, marginBottom: 30, flexWrap: "wrap" }}>
            {[
              { img: "phone.webp", label: "Call Us", val: "(855) 384-7020" },
              { img: "envp.webp", label: "Discuss your ideas", val: "info@nybookpublishers.com" },
            ].map(({ img, label, val }) => (
              <div key={img} style={{ display: "flex", alignItems: "center", gap: 14 }}>
                <div style={{ width: 46, height: 46, background: "linear-gradient(135deg,var(--accent),var(--accent2))", borderRadius: 12, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 20 }}>
                  {img.includes("phone") ? "📞" : "✉️"}
                </div>
                <div>
                  <span style={{ fontSize: 12, fontWeight: 700, color: "var(--accent)", display: "block", marginBottom: 2, textTransform: "uppercase", letterSpacing: 1 }}>{label}</span>
                  <span style={{ fontSize: 13, color: "var(--navy)", fontWeight: 600, display: "block" }}>{val}</span>
                </div>
              </div>
            ))}
          </div>

          <div style={{ display: "flex", gap: 14, flexWrap: "wrap" }}>
            <a href="#" className="btn-accent">Get a free quote for your book projects</a>
            <a href="#" className="btn-navy">Live Chat</a>
          </div>
        </div>
      </div>
    </section>
  );
}

