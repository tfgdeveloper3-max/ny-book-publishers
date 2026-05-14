"use client";
import { useState, useEffect, useRef } from "react";

const TESTIMONIALS = [
  { id: 1, thumb: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=400&q=80", author: null, book: null, label: "writing, editing, and" },
  { id: 2, thumb: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=400&q=80", author: "Diana Cristy", book: "The Face Of A Killer", label: null },
  { id: 3, thumb: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=400&q=80", author: "Davia R. K.", book: null, label: null },
  { id: 4, thumb: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&q=80", author: "Sarah M.", book: "Beyond The Horizon", label: null },
  { id: 5, thumb: "https://images.unsplash.com/photo-1552058544-f2b08422138a?w=400&q=80", author: "James T.", book: "The Last Chapter", label: null },
];
const VISIBLE = 3;

export function AuthorTestimonials() {
  const [index, setIndex] = useState(0);
  const maxIndex = TESTIMONIALS.length - VISIBLE;
  const visible = TESTIMONIALS.slice(index, index + VISIBLE);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current; if (!el) return;
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) el.querySelectorAll(".reveal,.reveal-scale").forEach(c => c.classList.add("revealed"));
    }, { threshold: 0.1 });
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <div ref={ref} style={{ fontFamily: "var(--font)" }}>
      {/* CTA band */}
      <div style={{ background: "#fff", textAlign: "center", padding: "52px 24px 56px", borderBottom: "1px solid #f0f0f0" }}>
        <h2 className="reveal section-title" style={{ marginBottom: 10 }}>Say Yes To Seeing Your Name In Print!</h2>
        <p className="reveal delay-1" style={{ fontSize: "clamp(15px,1.9vw,21px)", fontWeight: 400, color: "var(--navy)", marginBottom: 16 }}>
          Try Our Book Publishing Services Now!
        </p>
        <a href="#" className="nybp-link-accent reveal delay-2" style={{ fontSize: "clamp(15px,1.9vw,21px)" }}>NYBP Is Waiting For You!</a>
      </div>

      {/* Carousel band */}
      <div style={{ background: "var(--accent)", padding: "60px 24px 68px" }}>
        <h3 className="reveal" style={{ fontFamily: "var(--font2)", fontSize: "clamp(22px,2.9vw,36px)", fontWeight: 900, color: "var(--navy)", textAlign: "center", marginBottom: 48 }}>
          Author Testimonials: Their Words, Our Work
        </h3>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "center", maxWidth: 1100, margin: "0 auto" }}>
          {/* Left arrow */}
          <button onClick={() => setIndex(i => Math.max(0, i - 1))} disabled={index === 0} style={{
            background: "rgba(13,18,64,0.1)", border: "2.5px solid var(--navy)", borderRadius: "50%",
            width: 50, height: 50, display: "flex", alignItems: "center", justifyContent: "center",
            flexShrink: 0, margin: "0 16px", opacity: index === 0 ? 0.35 : 1,
            transition: "background 0.2s, transform 0.2s",
          }}
            onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = "rgba(13,18,64,0.18)"; (e.currentTarget as HTMLElement).style.transform = "scale(1.05)"; }}
            onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = "rgba(13,18,64,0.1)"; (e.currentTarget as HTMLElement).style.transform = "scale(1)"; }}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--navy)" strokeWidth="2.5"><polyline points="15 18 9 12 15 6" /></svg>
          </button>

          {/* Cards */}
          <div style={{ display: "flex", gap: 20, overflow: "hidden", flex: 1, maxWidth: 920 }}>
            {visible.map(t => (
              <div key={t.id} className="nybp-card-hover" style={{
                flex: "0 0 calc(33.333% - 14px)", borderRadius: 10, overflow: "hidden",
                border: "3px solid var(--navy)", position: "relative",
                aspectRatio: "9/16", maxHeight: 300,
                transition: "transform 0.3s, box-shadow 0.3s",
              }}>
                <img src={t.thumb} alt={t.author ?? "Author"} style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
                <div style={{ position: "absolute", inset: 0, background: "rgba(0,0,0,0.22)" }} />
                {/* play button */}
                <div style={{
                  position: "absolute", top: "50%", left: "50%", transform: "translate(-50%,-50%)",
                  width: 54, height: 54, borderRadius: "50%",
                  background: "rgba(255,255,255,0.9)",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  boxShadow: "0 4px 20px rgba(0,0,0,0.2)",
                  transition: "transform 0.2s, box-shadow 0.2s",
                }}
                  onMouseEnter={e => { (e.currentTarget as HTMLElement).style.transform = "translate(-50%,-50%) scale(1.12)"; }}
                  onMouseLeave={e => { (e.currentTarget as HTMLElement).style.transform = "translate(-50%,-50%) scale(1)"; }}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="var(--navy)" style={{ marginLeft: 3 }}><polygon points="5,3 19,12 5,21" /></svg>
                </div>
                {(t.author || t.label) && (
                  <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, background: "linear-gradient(transparent,rgba(0,0,0,0.78))", padding: "28px 12px 12px" }}>
                    {t.author && <span style={{ fontSize: 12, fontWeight: 700, textTransform: "uppercase", color: "var(--navy)", background: "var(--accent)", padding: "2px 8px", display: "inline-block", marginBottom: 4 }}>{t.author}</span>}
                    {t.label && <span style={{ fontSize: 11, color: "#fff", fontWeight: 600, display: "block" }}>{t.label}</span>}
                    {t.book && <span style={{ fontSize: 11, color: "rgba(255,255,255,0.82)", display: "block" }}>{t.book}</span>}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Right arrow */}
          <button onClick={() => setIndex(i => Math.min(maxIndex, i + 1))} disabled={index >= maxIndex} style={{
            background: "rgba(13,18,64,0.1)", border: "2.5px solid var(--navy)", borderRadius: "50%",
            width: 50, height: 50, display: "flex", alignItems: "center", justifyContent: "center",
            flexShrink: 0, margin: "0 16px", opacity: index >= maxIndex ? 0.35 : 1,
            transition: "background 0.2s, transform 0.2s",
          }}
            onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = "rgba(13,18,64,0.18)"; (e.currentTarget as HTMLElement).style.transform = "scale(1.05)"; }}
            onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = "rgba(13,18,64,0.1)"; (e.currentTarget as HTMLElement).style.transform = "scale(1)"; }}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--navy)" strokeWidth="2.5"><polyline points="9 18 15 12 9 6" /></svg>
          </button>
        </div>

        {/* Dots */}
        <div style={{ display: "flex", justifyContent: "center", gap: 9, marginTop: 28 }}>
          {Array.from({ length: maxIndex + 1 }).map((_, i) => (
            <button key={i} onClick={() => setIndex(i)} style={{
              width: 10, height: 10, borderRadius: "50%", border: "none",
              background: i === index ? "var(--navy)" : "rgba(13,18,64,0.3)",
              transform: i === index ? "scale(1.3)" : "scale(1)",
              transition: "all 0.2s",
            }} />
          ))}
        </div>
      </div>
    </div>
  );
}



