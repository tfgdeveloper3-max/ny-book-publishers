"use client";

export default function StepIntoSection() {
  return (
    <section style={{ background: "var(--accent)", position: "relative", overflow: "hidden", padding: "60px 80px 60px 80px", fontFamily: "var(--font)", display: "flex", alignItems: "center", justifyContent: "space-between", gap: 40, minHeight: 320 }}>
      <img src="/images/ready-leaf.png" alt="" style={{ position: "absolute", right: 0, bottom: 0, height: "100%", width: "auto", objectFit: "contain", objectPosition: "bottom right", opacity: 1, pointerEvents: "none", zIndex: 0 }} />
      <div style={{ flex: 1, maxWidth: 600, position: "relative", zIndex: 1 }}>
        <h2 style={{ fontSize: "clamp(22px, 2.8vw, 34px)", fontWeight: 700, color: "var(--navy)", lineHeight: 1.3, marginBottom: 16 }}>
          Step Into The World Of Authors…<br />Your Time Is Now! Get Book<br />Publishing Services!
        </h2>
        <p style={{ fontSize: 14, color: "rgba(26,31,94,0.8)", lineHeight: 1.75, marginBottom: 30, maxWidth: 520 }}>
          Don't wait any longer to make your book a reality. From start to finish, publishing your story has never been this simple, exciting, and within your reach.
        </p>
        <div style={{ display: "flex", gap: 14, flexWrap: "wrap" }}>
          <a href="#" className="btn-outline-accent" style={{ borderColor: "var(--navy)", color: "var(--navy)" }}
            onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = "var(--navy)"; (e.currentTarget as HTMLElement).style.color = "var(--white)"; }}
            onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = "transparent"; (e.currentTarget as HTMLElement).style.color = "var(--navy)"; }}>
            Book Now
          </a>
          <a href="#" className="btn-navy">Chat with Experts</a>
          <a href="tel:8553847020" className="btn-navy">Call now</a>
        </div>
      </div>
      <div style={{ flexShrink: 0, position: "relative", zIndex: 1, marginRight: 80 }}>
        <img src="/images/yes-book.png" alt="Stack of Books" style={{ width: 320, height: 380, objectFit: "contain", filter: "drop-shadow(0 10px 30px rgba(0,0,0,0.2))" }} />
      </div>
    </section>
  );
}