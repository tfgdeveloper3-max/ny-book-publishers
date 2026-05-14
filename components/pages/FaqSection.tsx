// ══════════════════════════════════════
// FAQSection.tsx
// ══════════════════════════════════════
"use client";
import { useState, useEffect, useRef } from "react";

const FAQS = [
  { q: "What genres of books do NY Book Publishers typically accept?", a: "We work with all genres — fiction, non-fiction, memoirs, children's books, self-help, business, academic, and more. If you've written it, we can publish it." },
  { q: "How do I submit my manuscript to NY Book Publishers?", a: "Simply reach out via our contact form or email us at info@nybookpublishers.com. We'll get back to you within 2–3 business days with next steps." },
  { q: "Will NY Book Publishers handle the marketing and promotion of my book?", a: "Yes! We offer comprehensive marketing services including social media campaigns, press releases, book launches, and Amazon optimization." },
  { q: "Can I choose my own cover design for my book?", a: "Absolutely. You can provide your own design or collaborate with our professional designers. We offer unlimited revisions until you're fully satisfied." },
  { q: "How do royalties work with NY Book Publishers?", a: "You retain 100% of your royalties. We help you publish through Amazon KDP, Barnes & Noble Press, and others, where royalties are paid directly to you." },
];

export function FAQSection() {
  const [open, setOpen] = useState<number | null>(null);
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current; if (!el) return;
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) el.querySelectorAll(".reveal").forEach(c => c.classList.add("revealed"));
    }, { threshold: 0.1 });
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <div ref={ref} style={{ fontFamily: "var(--font)", background: "var(--gradient-dark)", padding: "72px 40px 108px", position: "relative", overflow: "visible" }}>
      {/* glow */}
      <div style={{ position: "absolute", top: "30%", left: "50%", transform: "translateX(-50%)", width: 600, height: 300, background: "radial-gradient(ellipse,rgba(240,165,0,0.08),transparent)", pointerEvents: "none" }} />

      <div className="reveal" style={{ textAlign: "center", marginBottom: 52 }}>
        <p className="section-eyebrow">FAQ</p>
        <h2 style={{ fontFamily: "var(--font2)", fontSize: "clamp(22px,2.9vw,34px)", fontWeight: 800, color: "var(--white)", lineHeight: 1.25 }}>
          Want to know more about NY Book Publishers?
        </h2>
      </div>

      <div style={{ maxWidth: 780, margin: "0 auto", display: "flex", flexDirection: "column", gap: 14 }}>
        {FAQS.map((faq, i) => (
          <div key={i} className="nybp-faq-item reveal" style={{ borderRadius: open === i ? 16 : 40 }}>
            <button className="nybp-faq-question" onClick={() => setOpen(open === i ? null : i)}
              style={{ width: "100%", background: "transparent", border: "none", display: "flex", alignItems: "center", justifyContent: "space-between", padding: "18px 26px", gap: 16, textAlign: "left", fontFamily: "var(--font)", fontSize: 14, fontWeight: 600, color: open === i ? "var(--accent)" : "var(--white)" }}>
              <span>{faq.q}</span>
              <span className="nybp-faq-icon" style={{ transform: open === i ? "rotate(45deg)" : "none", background: open === i ? "var(--accent)" : "transparent", color: open === i ? "var(--navy)" : "var(--accent)" }}>+</span>
            </button>
            <div style={{ maxHeight: open === i ? 280 : 0, overflow: "hidden", transition: "max-height 0.38s ease, padding 0.25s" }}>
              <p style={{ fontSize: 13.5, color: "var(--text-muted)", lineHeight: 1.9, padding: "0 26px 20px" }}>{faq.a}</p>
            </div>
          </div>
        ))}
      </div>

      {/* decorative book */}
      <img src="/images/read-book.webp" alt="" style={{ position: "absolute", bottom: -40, left: 24, width: 110, opacity: 0.85, pointerEvents: "none", zIndex: 1 }} />
    </div>
  );
}

