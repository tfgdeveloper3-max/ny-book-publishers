"use client";
import { useEffect, useRef } from "react";

const services = [
  { icon: "/images/icon1.webp", emoji: "✍️", title: "Ghostwriting Services", desc: "Let our ghostwriters turn your vision into a reality. They'll craft your story with precision, capturing your voice and ideas as if it were their own." },
  { icon: "/images/icon2.webp", emoji: "📝", title: "Book Editing Services", desc: "A great story needs a sharp editor. Our skilled editors fine-tune your manuscript, honing the plot, strengthening characters, and smoothing the flow." },
  { icon: "/images/icon3.webp", emoji: "🎨", title: "Book Cover Design Services", desc: "First impressions matter. Our expert designers create a cover that not only stands out but also reflects the heart of your story." },
  { icon: "/images/icon4.webp", emoji: "📱", title: "Ebook Publishing Services", desc: "From formatting to distribution, we manage the entire process to ensure your book lands in the right places and reaches the right audience." },
  { icon: "/images/icon8.webp", emoji: "🏆", title: "Book Coaching Services", desc: "Our experienced book coaches offer guidance, motivation, and constructive feedback at every step of your writing journey." },
  { icon: "/images/icon6.webp", emoji: "📣", title: "Book Marketing Services", desc: "Our strategic marketing services create buzz around your book, reaching your target audience through personalized, data-driven campaigns." },
  { icon: "/images/icon7.webp", emoji: "🖼️", title: "Illustration Design Services", desc: "Our talented illustrators bring your words to life with stunning artwork that enhances your narrative and appeals to readers of all ages." },
  { icon: "/images/icon8.webp", emoji: "👥", title: "Beta Reader Services", desc: "Our beta reader testing service taps into diverse groups of readers to provide honest insights and suggestions before you publish." },
];

export function WhyAuthorsSection() {
  const ref = useRef<HTMLElement>(null);
  useEffect(() => {
    const el = ref.current; if (!el) return;
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) {
        el.querySelectorAll(".reveal,.reveal-left,.reveal-right,.reveal-scale").forEach((c, i) => {
          setTimeout(() => c.classList.add("revealed"), i * 60);
        });
      }
    }, { threshold: 0.08 });
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <section ref={ref} style={{ background: "#fafaf8", padding: "80px 60px 90px", fontFamily: "var(--font)" }}>
      {/* heading */}
      <div className="reveal" style={{ textAlign: "center", maxWidth: 860, margin: "0 auto 60px" }}>
        <p className="section-eyebrow">Our Services</p>
        <h2 className="section-title">Why Authors Choose NY Book Publishers</h2>
        <p style={{ fontSize: 15, color: "#777", lineHeight: 1.85 }}>
          NY Book Publishers – global leaders in professional book publishing services.<br />Trusted by both new and experienced authors worldwide.
        </p>
      </div>

      {/* grid */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", maxWidth: 1200, margin: "0 auto", gap: 0, border: "1px solid rgba(240,165,0,0.15)", borderRadius: 16, overflow: "hidden" }}>
        {services.map((s, i) => {
          const row = Math.floor(i / 4), col = i % 4;
          const isLight = (row + col) % 2 === 0;
          return (
            <div key={i} className="nybp-card-hover reveal" style={{
              padding: "40px 24px 32px",
              display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center",
              background: isLight ? "#fff" : "rgba(240,165,0,0.04)",
              borderRight: col < 3 ? "1px solid rgba(240,165,0,0.12)" : "none",
              borderBottom: row < 1 ? "1px solid rgba(240,165,0,0.12)" : "none",
              position: "relative", overflow: "hidden",
            }}>
              {/* corner accent */}
              <div style={{ position: "absolute", top: 0, left: 0, width: 3, height: "100%", background: "var(--accent)", opacity: 0, transition: "opacity 0.3s" }}
                className="card-accent-bar" />

              {/* icon circle */}
              <div style={{
                width: 76, height: 76,
                background: "linear-gradient(135deg,var(--navy),var(--navy2))",
                borderRadius: 18, display: "flex", alignItems: "center", justifyContent: "center",
                marginBottom: 18, fontSize: 30,
                boxShadow: "0 8px 24px rgba(13,18,64,0.25)",
                transition: "transform 0.3s",
              }}
                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.transform = "scale(1.1) rotate(-5deg)"; }}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.transform = "scale(1) rotate(0deg)"; }}>
                {s.emoji}
              </div>

              <h3 style={{ fontSize: 14.5, fontWeight: 800, color: "var(--accent)", marginBottom: 12, lineHeight: 1.3 }}>{s.title}</h3>
              <p style={{
                fontSize: 13, color: "#777", lineHeight: 1.8, marginBottom: 22, flex: 1,
                display: "-webkit-box", WebkitLineClamp: 5, WebkitBoxOrient: "vertical", overflow: "hidden"
              } as React.CSSProperties}>
                {s.desc}
              </p>
              <a href="#" className="btn-accent" style={{ fontSize: 12, padding: "9px 22px" }}>Explore Now</a>
            </div>
          );
        })}
      </div>
    </section>
  );
}