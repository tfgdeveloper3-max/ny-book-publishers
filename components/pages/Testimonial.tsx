"use client";
import { useEffect } from "react";

const testimonials = [
  { id: 1, name: "Carmen Alvina", review: "Don Rhodes is a treat to work with. They strengthened the substance and structure of my manuscript and elevated the quality of my book. Their white glove services are exceptional." },
  { id: 2, name: "Scott L. Miller", review: "In three months since Boundless was published, NYBP has turned it into a #1 bestseller on Kindle. They have been extremely helpful and receptive to my questions and needs." },
  { id: 3, name: "Stacy Kaye", review: "They are professionals in book publishing and possess a strong grip on the publishing process at various platforms. They are even pros at content development and designing illustrations and covers." },
  { id: 4, name: "Donald Hobson", review: "They religiously guided us through the intricacies of the publishing world. Collaborating with them was a life-changing experience that will remain forever in our memories." },
  { id: 5, name: "K. Scott Wells", review: "Very professional and excellent illustration, editing, and publication. There is a pleasant helpful, and professional relationship, communication, and interaction right away." },
  { id: 6, name: "Queen", review: "Lisa Smith has been exceptional to work with. Their cover teams are excellent, and I've had the perfect amount of input. Bottom line is I'm very happy with my experience with NYBP." },
];

export default function TestimonialsSection() {
  useEffect(() => {
    if (!document.querySelector("#swiper-css")) {
      const link = document.createElement("link");
      link.id = "swiper-css"; link.rel = "stylesheet";
      link.href = "https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.css";
      document.head.appendChild(link);
    }
    const init = () => new (window as any).Swiper(".t-swiper-inner", { slidesPerView: 3, centeredSlides: true, spaceBetween: 30, loop: true, speed: 600, navigation: { nextEl: ".t-next", prevEl: ".t-prev" } });
    if (!(window as any).Swiper) {
      const s = document.createElement("script");
      s.src = "https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.js";
      s.onload = init;
      document.body.appendChild(s);
    } else { init(); }
  }, []);

  return (
    <>
      <style>{`
        .t-swiper-inner .swiper-slide-active .t-card { transform: scale(1.1); box-shadow: 0 24px 60px rgba(0,0,0,0.4); z-index: 2; }
        .t-swiper-inner .swiper-slide:not(.swiper-slide-active) .t-card { transform: scale(0.88); opacity: 0.8; }
        .t-swiper-inner { overflow: visible !important; padding: 40px 0 50px !important; }
      `}</style>
      <section style={{ fontFamily: "var(--font)", background: "var(--gradient-dark)", backgroundImage: "url('/images/testimonial-bg.png')", backgroundSize: "cover", backgroundPosition: "center", padding: "70px 0 80px", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0, background: "rgba(13,18,64,0.65)", zIndex: 0 }} />
        <div style={{ textAlign: "center", marginBottom: 50, position: "relative", zIndex: 1, padding: "0 20px" }}>
          <h2 style={{ fontSize: 36, fontWeight: 900, color: "var(--accent)", letterSpacing: "1.5px", marginBottom: 14 }}>WHAT OUR CLIENTS SAY</h2>
          <p style={{ fontSize: 14, color: "var(--text-muted)", maxWidth: 560, margin: "0 auto", lineHeight: 1.7 }}>We have a track record of delivering excellence. Here's what our clients say about our work.</p>
        </div>
        <div style={{ position: "relative", zIndex: 1, display: "flex", alignItems: "center", maxWidth: 1300, margin: "0 auto", padding: "0 10px" }}>
          <button className="t-prev" style={{ background: "var(--accent)", border: "none", borderRadius: "50%", width: 50, height: 50, flexShrink: 0, cursor: "pointer", fontSize: 20, color: "var(--navy)", fontWeight: 900, boxShadow: "var(--shadow-sm)", transition: "background .2s", zIndex: 10, margin: "0 10px" }}
            onMouseEnter={e => (e.currentTarget.style.background = "var(--accent-hover)")}
            onMouseLeave={e => (e.currentTarget.style.background = "var(--accent)")}>←</button>
          <div className="swiper t-swiper-inner" style={{ flex: 1, minWidth: 0 }}>
            <div className="swiper-wrapper">
              {testimonials.map(t => (
                <div className="swiper-slide" key={t.id}>
                  <div className="t-card" style={{ background: "var(--white)", borderRadius: 16, padding: "50px 24px 28px", position: "relative", display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center", minHeight: 340, transition: "transform .4s ease, box-shadow .4s ease, opacity .4s ease", borderTop: "3px solid var(--accent)" }}>
                    <div style={{ position: "absolute", left: 0, top: "20%", bottom: "20%", width: 3, background: "var(--accent)", borderRadius: "0 2px 2px 0" }} />
                    <div style={{ background: "var(--navy)", borderRadius: 10, width: 62, height: 62, display: "flex", alignItems: "center", justifyContent: "center", position: "absolute", top: -31, left: "50%", transform: "translateX(-50%)", boxShadow: "var(--shadow-sm)" }}>
                      <svg viewBox="0 0 24 24" width="28" height="28" fill="var(--accent)"><path d="M6 17h3l2-4V7H5v6h3zm8 0h3l2-4V7h-6v6h3z" /></svg>
                    </div>
                    <p style={{ fontSize: 13.5, color: "#333", lineHeight: 1.75, marginBottom: 18, flex: 1, display: "-webkit-box", WebkitLineClamp: 7, WebkitBoxOrient: "vertical", overflow: "hidden" } as React.CSSProperties}>{t.review}</p>
                    <div style={{ color: "var(--accent)", fontSize: 18, letterSpacing: 3, marginBottom: 8 }}>★★★★★</div>
                    <div style={{ fontSize: 16, fontWeight: 800, color: "var(--navy)" }}>{t.name}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <button className="t-next" style={{ background: "var(--accent)", border: "none", borderRadius: "50%", width: 50, height: 50, flexShrink: 0, cursor: "pointer", fontSize: 20, color: "var(--navy)", fontWeight: 900, boxShadow: "var(--shadow-sm)", transition: "background .2s", zIndex: 10, margin: "0 10px" }}
            onMouseEnter={e => (e.currentTarget.style.background = "var(--accent-hover)")}
            onMouseLeave={e => (e.currentTarget.style.background = "var(--accent)")}>→</button>
        </div>
      </section>
    </>
  );
}