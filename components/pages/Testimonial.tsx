"use client";
import { useEffect, useRef } from "react";

const testimonials = [
  { id: 1, name: "Carmen Alvina", review: "Don Rhodes is a treat to work with. They strengthened the substance and structure of my manuscript and elevated the quality of my book. Their white glove services are exceptional." },
  { id: 2, name: "Scott L. Miller", review: "In three months since Boundless was published, NYBP has turned it into a #1 bestseller on Kindle. They have been extremely helpful and receptive to my questions and needs." },
  { id: 3, name: "Stacy Kaye", review: "They are professionals in book publishing and possess a strong grip on the publishing process at various platforms. They are even pros at content development and designing illustrations and covers." },
  { id: 4, name: "Donald Hobson", review: "They religiously guided us through the intricacies of the publishing world. Collaborating with them was a life-changing experience that will remain forever in our memories." },
  { id: 5, name: "K. Scott Wells", review: "Very professional and excellent illustration, editing, and publication. There is a pleasant helpful, and professional relationship, communication, and interaction right away." },
  { id: 6, name: "Queen", review: "Lisa Smith has been exceptional to work with. Their cover teams are excellent, and I've had the perfect amount of input. Bottom line is I'm very happy with my experience with NYBP." },
];

export function TestimonialsSection() {
  const secRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = secRef.current; if (!el) return;
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) el.querySelectorAll(".reveal,.reveal-scale").forEach(c => c.classList.add("revealed"));
    }, { threshold: 0.1 });
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  useEffect(() => {
    const init = () => new (window as any).Swiper(".t-swiper-inner", {
      slidesPerView: 3, centeredSlides: true, spaceBetween: 28, loop: true, speed: 700,
      autoplay: { delay: 3500, disableOnInteraction: false },
      navigation: { nextEl: ".t-next", prevEl: ".t-prev" },
    });
    if (!(window as any).Swiper) {
      const s = document.createElement("script");
      s.src = "https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.js";
      s.onload = init; document.body.appendChild(s);
    } else { init(); }
  }, []);

  return (
    <>
      <style>{`
        .t-swiper-inner .swiper-slide-active .t-card { transform:scale(1.08); box-shadow:0 28px 72px rgba(0,0,0,0.45); z-index:2; }
        .t-swiper-inner .swiper-slide:not(.swiper-slide-active) .t-card { transform:scale(0.88); opacity:0.75; }
        .t-swiper-inner { overflow:visible !important; padding:44px 0 54px !important; }
      `}</style>
      <section ref={secRef} style={{
        fontFamily: "var(--font)",
        background: "var(--gradient-dark)",
        backgroundImage: "url('/images/testimonial-bg.png')",
        backgroundSize: "cover", backgroundPosition: "center",
        padding: "80px 0 90px", position: "relative", overflow: "hidden",
      }}>
        <div style={{ position: "absolute", inset: 0, background: "rgba(7,9,30,0.72)", zIndex: 0 }} />

        <div className="reveal" style={{ textAlign: "center", marginBottom: 52, position: "relative", zIndex: 1, padding: "0 20px" }}>
          <p className="section-eyebrow">Client Reviews</p>
          <h2 className="section-title-accent" style={{ fontFamily: "var(--font2)" }}>WHAT OUR CLIENTS SAY</h2>
          <p style={{ fontSize: 14, color: "var(--text-muted)", maxWidth: 520, margin: "12px auto 0", lineHeight: 1.8 }}>
            We have a track record of delivering excellence. Here's what our clients say about our work.
          </p>
        </div>

        <div style={{ position: "relative", zIndex: 1, display: "flex", alignItems: "center", maxWidth: 1300, margin: "0 auto", padding: "0 10px" }}>
          <button className="t-prev" style={{
            background: "var(--accent)", border: "none", borderRadius: "50%",
            width: 52, height: 52, flexShrink: 0, fontSize: 20, color: "var(--navy)", fontWeight: 900,
            boxShadow: "0 6px 20px rgba(240,165,0,0.35)", transition: "all 0.2s", zIndex: 10, margin: "0 10px",
          }}
            onMouseEnter={e => (e.currentTarget.style.background = "var(--accent-hover)")}
            onMouseLeave={e => (e.currentTarget.style.background = "var(--accent)")}>←</button>

          <div className="swiper t-swiper-inner" style={{ flex: 1, minWidth: 0 }}>
            <div className="swiper-wrapper">
              {testimonials.map(t => (
                <div className="swiper-slide" key={t.id}>
                  <div className="t-card" style={{
                    background: "var(--white)", borderRadius: 18,
                    padding: "54px 26px 30px", position: "relative",
                    display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center",
                    minHeight: 340, transition: "transform 0.4s ease, box-shadow 0.4s ease, opacity 0.4s ease",
                    borderTop: "4px solid var(--accent)",
                  }}>
                    {/* quote icon */}
                    <div style={{
                      position: "absolute", top: -26, left: "50%", transform: "translateX(-50%)",
                      width: 52, height: 52, borderRadius: 12,
                      background: "var(--navy)", border: "2px solid var(--accent)",
                      display: "flex", alignItems: "center", justifyContent: "center",
                      boxShadow: "0 6px 20px rgba(0,0,0,0.25)",
                    }}>
                      <svg viewBox="0 0 24 24" width="24" height="24" fill="var(--accent)">
                        <path d="M6 17h3l2-4V7H5v6h3zm8 0h3l2-4V7h-6v6h3z" />
                      </svg>
                    </div>
                    <div style={{ position: "absolute", left: 0, top: "18%", bottom: "18%", width: 3, background: "var(--accent)", borderRadius: "0 2px 2px 0" }} />
                    <p style={{
                      fontSize: 13.5, color: "#444", lineHeight: 1.8, marginBottom: 20, flex: 1,
                      display: "-webkit-box", WebkitLineClamp: 7, WebkitBoxOrient: "vertical", overflow: "hidden"
                    } as React.CSSProperties}>
                      {t.review}
                    </p>
                    <div style={{ color: "var(--accent)", fontSize: 18, letterSpacing: 4, marginBottom: 8 }}>★★★★★</div>
                    <div style={{ fontSize: 16, fontWeight: 800, color: "var(--navy)" }}>{t.name}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <button className="t-next" style={{
            background: "var(--accent)", border: "none", borderRadius: "50%",
            width: 52, height: 52, flexShrink: 0, fontSize: 20, color: "var(--navy)", fontWeight: 900,
            boxShadow: "0 6px 20px rgba(240,165,0,0.35)", transition: "all 0.2s", zIndex: 10, margin: "0 10px",
          }}
            onMouseEnter={e => (e.currentTarget.style.background = "var(--accent-hover)")}
            onMouseLeave={e => (e.currentTarget.style.background = "var(--accent)")}>→</button>
        </div>
      </section>
    </>
  );
}