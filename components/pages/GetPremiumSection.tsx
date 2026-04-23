"use client";

export default function GetPremiumSection() {
  return (
    <div style={{ fontFamily: "var(--font)", background: "var(--white)", overflow: "hidden" }}>
      <div style={{ display: "flex", justifyContent: "flex-end" }}>
        <div style={{ background: "var(--accent)", width: "50%", minHeight: 90, display: "flex", alignItems: "flex-end", padding: "0 40px" }}>
          <span style={{ fontSize: "clamp(52px, 8vw, 96px)", fontWeight: 900, color: "var(--white)", lineHeight: 1, padding: "18px 0", letterSpacing: -1 }}>GET</span>
        </div>
      </div>
      <div style={{ display: "flex", alignItems: "flex-start", padding: "0 40px 60px", flexWrap: "wrap" }}>
        <div style={{ flex: "0 0 44%", marginTop: -60, zIndex: 2, position: "relative" }}>
          <img src="/images/book-2.png" alt="Book mockup" style={{ width: "100%", maxWidth: 520, height: 550, objectFit: "contain", filter: "drop-shadow(0 20px 40px rgba(0,0,0,0.18))" }} />
        </div>
        <div style={{ flex: 1, padding: "36px 0 0 32px" }}>
          <h2 style={{ fontSize: "clamp(22px, 2.8vw, 34px)", fontWeight: 800, color: "var(--navy)", lineHeight: 1.25, margin: "0 0 16px" }}>
            Premium <span style={{ color: "var(--accent)" }}>Book<br />Publishing</span> Services!
          </h2>
          <p style={{ fontSize: 14, color: "var(--text-mid)", lineHeight: 1.85, margin: "0 0 28px", maxWidth: 460 }}>
            From editing to design and full distribution, we handle everything so you can proudly hold your book and share it with the world.
          </p>
          <div style={{ display: "flex", gap: 32, marginBottom: 28, flexWrap: "wrap" }}>
            {[{ img: "phone.webp", label: "Call Us", val: "(855) 384-7020" }, { img: "envp.webp", label: "Discuss your ideas", val: "info@nybookpublishers.com" }].map(({ img, label, val }) => (
              <div key={img} style={{ display: "flex", alignItems: "center", gap: 12 }}>
                <img src={`/images/${img}`} alt={label} style={{ width: 42, height: 42 }} />
                <div>
                  <span style={{ fontSize: 13, fontWeight: 700, color: "var(--accent)", display: "block", marginBottom: 2 }}>{label}</span>
                  <span style={{ fontSize: 13, color: "var(--navy)", fontWeight: 500, display: "block" }}>{val}</span>
                </div>
              </div>
            ))}
          </div>
          <div style={{ display: "flex", gap: 14, flexWrap: "wrap" }}>
            <a href="#" className="btn-accent">Get a free quote for your book projects</a>
            <a href="#" className="btn-navy">Live Chat</a>
          </div>
        </div>
      </div>
    </div>
  );
}