"use client";

export default function WatchSection() {
  return (
    <section style={{ position: "relative", background: "var(--gradient-dark)", padding: "80px 60px", textAlign: "center", overflow: "hidden", fontFamily: "var(--font)", minHeight: 480 }}>
      <div style={{ position: "absolute", inset: 0, backgroundImage: "url('/images/discover-layer-2.png')", backgroundRepeat: "no-repeat", backgroundPosition: "center", backgroundSize: "cover", opacity: 1, pointerEvents: "none", zIndex: 0 }} />
      <div style={{ position: "relative", zIndex: 1, maxWidth: 980, margin: "0 auto" }}>
        <h2 style={{ fontSize: "clamp(20px, 3.5vw, 38px)", fontWeight: 700, color: "var(--accent)", lineHeight: 1.25, marginBottom: 28 }}>
          Watch How Easy Book Publishing Can Be With Us
        </h2>
        <p style={{ fontSize: 14, color: "var(--text-muted)", lineHeight: 1.85, marginBottom: 44, maxWidth: 900, margin: "0 auto 44px" }}>
          At NY Book Publishers, we do so much more than just publish your book. We help you write it, polish it through careful editing, design a stunning cover and interior layout, and take care of all the details like ISBN registration and getting your book listed on Amazon and other top platforms.
        </p>
        <a href="#" className="btn-accent">Book your consultation today!</a>
      </div>
    </section>
  );
}