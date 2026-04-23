"use client";

export default function VideoTrailerSection() {
  return (
    <section style={{ position: "relative", overflow: "hidden", padding: "80px 40px", fontFamily: "var(--font)", textAlign: "center", background: "var(--gradient-dark)" }}>
      <div style={{ position: "absolute", inset: 0, backgroundImage: "url('/images/trailer-bg.webp')", backgroundRepeat: "no-repeat", backgroundPosition: "center", backgroundSize: "cover", opacity: 0.08, pointerEvents: "none", zIndex: 0 }} />
      <div style={{ position: "absolute", inset: 0, background: "rgba(13,18,64,0.75)", zIndex: 1, pointerEvents: "none" }} />
      <div style={{ position: "relative", zIndex: 2, maxWidth: 780, margin: "0 auto" }}>
        <h2 style={{ fontSize: "clamp(26px, 3.5vw, 44px)", fontWeight: 800, color: "var(--accent)", lineHeight: 1.2, marginBottom: 20 }}>
          NYBP Lights Up Times Square<br />Watch Our Exclusive Video Trailer!
        </h2>
        <p style={{ fontSize: 14.5, color: "var(--text-muted)", lineHeight: 1.85, marginBottom: 36, maxWidth: 680, margin: "0 auto 36px" }}>
          Your book, featured in the heart of New York City! NY Book Publishers has taken the spotlight in Times Square, showcasing incredible stories on the world's biggest stage.
        </p>
        <div style={{ width: "100%", maxWidth: 520, margin: "0 auto 44px", borderRadius: 8, overflow: "hidden", boxShadow: "0 16px 50px rgba(0,0,0,0.5)", aspectRatio: "16/9", background: "#000", border: "2px solid rgba(240,165,0,0.3)" }} />
        <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 16, flexWrap: "wrap" }}>
          <a href="#" className="btn-outline-white">💬 Let's Discuss</a>
          <a href="#" className="btn-accent">📞 Create Your Book's Future</a>
        </div>
      </div>
    </section>
  );
}