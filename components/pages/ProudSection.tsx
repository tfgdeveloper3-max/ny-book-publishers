"use client";

export default function ProudSection() {
  return (
    <section style={{ background: "var(--white)", fontFamily: "var(--font)", display: "flex", alignItems: "stretch", minHeight: 520, overflow: "hidden" }}>
      <div style={{ flex: "0 0 45%", display: "flex", alignItems: "flex-end", justifyContent: "center", padding: "0 0 0 40px" }}>
        <img src="/images/book-3.png" alt="Published Books Stack" style={{ width: 480, height: 743, maxWidth: "100%", objectFit: "contain", display: "block", position: "relative", zIndex: 1 }} />
      </div>
      <div style={{ flex: 1, display: "flex", flexDirection: "column", justifyContent: "center", padding: "60px 60px 60px 0" }}>
        <div className="nybp-badge" style={{ marginBottom: 24, alignSelf: "flex-start" }}>NYBP IS PROUD</div>
        <h2 style={{ fontSize: "clamp(22px, 2.8vw, 34px)", fontWeight: 700, color: "var(--navy)", lineHeight: 1.3, marginBottom: 20 }}>
          To Help More Than 500+<br />Authors Publish Their<br />Books
        </h2>
        <p style={{ fontSize: 14, color: "var(--text-mid)", lineHeight: 1.85, marginBottom: 32, maxWidth: 480 }}>
          From first-time writers to experienced voices, so many have trusted our expert book publishing services to turn their stories into beautiful books. Whether they needed help with editing, cover design, or navigating self publishing platforms, we've been there at every step.
        </p>
        <a href="#" className="btn-accent" style={{ alignSelf: "flex-start" }}>Get a free quote for your book projects</a>
      </div>
    </section>
  );
}