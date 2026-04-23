"use client";
import { useState } from "react";

const FAQS = [
  { q: "What genres of books do NY Book Publishers typically accept?", a: "We work with all genres — fiction, non-fiction, memoirs, children's books, self-help, business, academic, and more." },
  { q: "How do I submit my manuscript to NY Book Publishers?", a: "Simply reach out via our contact form or email us at info@nybookpublishers.com. We'll get back to you within 2–3 business days." },
  { q: "Will the NY Book Publishers handle the marketing and promotion of my book?", a: "Yes! We offer comprehensive marketing services including social media campaigns, press releases, book launches, and Amazon optimization." },
  { q: "Can I choose my own cover design for my book?", a: "Absolutely. You can provide your own design or collaborate with our professional designers. We offer unlimited revisions until you're fully satisfied." },
  { q: "How do royalties work with NY Book Publishers?", a: "You retain 100% of your royalties. We help you publish through Amazon KDP, Barnes & Noble Press, and others, where royalties are paid directly to you." },
];

export default function FAQSection() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <div style={{ fontFamily: "var(--font)", background: "var(--gradient-dark)", padding: "64px 40px 100px", position: "relative", overflow: "visible" }}>
      <h2 style={{ fontSize: "clamp(20px, 2.8vw, 30px)", fontWeight: 700, color: "var(--accent)", textAlign: "center", margin: "0 0 44px" }}>
        Want to know more about NY Book Publishers?
      </h2>
      <div style={{ maxWidth: 760, margin: "0 auto", display: "flex", flexDirection: "column", gap: 14 }}>
        {FAQS.map((faq, i) => (
          <div key={i} className="nybp-faq-item" style={{ borderRadius: open === i ? 16 : 40 }}>
            <button className="nybp-faq-question" onClick={() => setOpen(open === i ? null : i)} style={{ width: "100%", background: "transparent", border: "none", display: "flex", alignItems: "center", justifyContent: "space-between", padding: "16px 24px", cursor: "pointer", fontFamily: "var(--font)", fontSize: 14, fontWeight: 500, color: open === i ? "var(--accent)" : "var(--white)", textAlign: "left", gap: 16 }}>
              <span>{faq.q}</span>
              <span className="nybp-faq-icon" style={{ transform: open === i ? "rotate(45deg)" : "none", background: open === i ? "var(--accent)" : "transparent", color: open === i ? "var(--navy)" : "var(--accent)" }}>+</span>
            </button>
            <div style={{ maxHeight: open === i ? 300 : 0, overflow: "hidden", transition: "max-height 0.35s ease, padding 0.25s ease", padding: open === i ? "0 24px 18px" : "0 24px" }}>
              <p style={{ fontSize: 13, color: "var(--text-muted)", lineHeight: 1.85, margin: 0 }}>{faq.a}</p>
            </div>
          </div>
        ))}
      </div>
      <img src="/images/read-book.webp" alt="" style={{ position: "absolute", bottom: -40, left: 24, width: 110, opacity: 0.9, pointerEvents: "none", zIndex: 1 }} />
    </div>
  );
}