"use client";
import { useState } from "react";

const TESTIMONIALS = [
  { id: 1, thumb: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=400&q=80", author: null, book: null, label: "writing, editing, and" },
  { id: 2, thumb: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=400&q=80", author: "Diana Cristy", book: "The Face Of A Killer" },
  { id: 3, thumb: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=400&q=80", author: "Davia R. K.", book: null },
  { id: 4, thumb: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&q=80", author: "Sarah M.", book: "Beyond The Horizon" },
  { id: 5, thumb: "https://images.unsplash.com/photo-1552058544-f2b08422138a?w=400&q=80", author: "James T.", book: "The Last Chapter" },
];
const VISIBLE = 3;

export default function AuthorTestimonials() {
  const [index, setIndex] = useState(0);
  const maxIndex = TESTIMONIALS.length - VISIBLE;
  const visible = TESTIMONIALS.slice(index, index + VISIBLE);

  return (
    <div style={{ fontFamily: "var(--font)" }}>
      {/* White CTA band */}
      <div style={{ background: "var(--white)", textAlign: "center", padding: "48px 24px 52px" }}>
        <h2 style={{ fontSize: "clamp(22px, 3.2vw, 36px)", fontWeight: 800, color: "var(--navy)", margin: "0 0 10px" }}>Say Yes To Seeing Your Name In Print!</h2>
        <p style={{ fontSize: "clamp(16px, 2vw, 22px)", fontWeight: 400, color: "var(--navy)", margin: "0 0 16px" }}>Try Our Book Publishing Services Now!</p>
        <a href="#" className="nybp-link-accent" style={{ fontSize: "clamp(16px, 2vw, 22px)" }}>NYBP Is Waiting For You!</a>
      </div>

      {/* Accent carousel band */}
      <div style={{ background: "var(--accent)", padding: "56px 24px 64px" }}>
        <h3 style={{ fontSize: "clamp(22px, 3vw, 34px)", fontWeight: 800, color: "var(--navy)", textAlign: "center", margin: "0 0 44px" }}>
          Author Testimonials: Their Words, Our Work
        </h3>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "center", maxWidth: 1200, margin: "0 auto" }}>
          {/* Arrow left */}
          <button onClick={() => setIndex(i => Math.max(0, i - 1))} disabled={index === 0}
            style={{ background: "transparent", border: "2.5px solid var(--navy)", borderRadius: "50%", width: 48, height: 48, display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer", flexShrink: 0, margin: "0 18px", opacity: index === 0 ? 0.4 : 1, transition: "background .2s" }}
            onMouseEnter={e => (e.currentTarget.style.background = "rgba(26,31,94,0.1)")}
            onMouseLeave={e => (e.currentTarget.style.background = "transparent")}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--navy)" strokeWidth="2.5"><polyline points="15 18 9 12 15 6" /></svg>
          </button>

          {/* Cards */}
          <div style={{ display: "flex", gap: 24, overflow: "hidden", flex: 1, maxWidth: 960 }}>
            {visible.map(t => (
              <div key={t.id} className="nybp-card-hover" style={{ flex: "0 0 calc(33.333% - 16px)", borderRadius: 6, overflow: "hidden", border: "3px solid var(--navy)", position: "relative", aspectRatio: "9/16", maxHeight: 300, cursor: "pointer" }}>
                <img src={t.thumb} alt={t.author ?? "Author"} style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
                <div style={{ position: "absolute", inset: 0, background: "rgba(0,0,0,0.2)" }} />
                <div style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%,-50%)", width: 52, height: 52, borderRadius: "50%", background: "rgba(255,255,255,0.88)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="var(--navy)" style={{ marginLeft: 3 }}><polygon points="5,3 19,12 5,21" /></svg>
                </div>
                {(t.author || t.label) && (
                  <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, background: "linear-gradient(transparent, rgba(0,0,0,0.75))", padding: "28px 12px 12px" }}>
                    {t.author && <span style={{ fontSize: 13, fontWeight: 700, textTransform: "uppercase", color: "var(--navy)", background: "var(--accent)", padding: "2px 8px", display: "inline-block", marginBottom: 4 }}>{t.author}</span>}
                    {t.label && <span style={{ fontSize: 11, color: "#fff", fontWeight: 600, display: "block" }}>{t.label}</span>}
                    {t.book && <span style={{ fontSize: 11, color: "rgba(255,255,255,0.85)", display: "block" }}>{t.book}</span>}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Arrow right */}
          <button onClick={() => setIndex(i => Math.min(maxIndex, i + 1))} disabled={index >= maxIndex}
            style={{ background: "transparent", border: "2.5px solid var(--navy)", borderRadius: "50%", width: 48, height: 48, display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer", flexShrink: 0, margin: "0 18px", opacity: index >= maxIndex ? 0.4 : 1, transition: "background .2s" }}
            onMouseEnter={e => (e.currentTarget.style.background = "rgba(26,31,94,0.1)")}
            onMouseLeave={e => (e.currentTarget.style.background = "transparent")}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--navy)" strokeWidth="2.5"><polyline points="9 18 15 12 9 6" /></svg>
          </button>
        </div>
        {/* Dots */}
        <div style={{ display: "flex", justifyContent: "center", gap: 8, marginTop: 28 }}>
          {Array.from({ length: maxIndex + 1 }).map((_, i) => (
            <button key={i} onClick={() => setIndex(i)} style={{ width: 9, height: 9, borderRadius: "50%", background: i === index ? "var(--navy)" : "rgba(26,31,94,0.35)", border: "none", cursor: "pointer", transform: i === index ? "scale(1.25)" : "scale(1)", transition: "all .2s" }} />
          ))}
        </div>
      </div>
    </div>
  );
}