"use client";

export default function Hero() {
  return (
    <section style={{ background: "var(--gradient-dark)", minHeight: 600, position: "relative", overflow: "hidden", fontFamily: "var(--font)" }}>
      <div style={{ position: "absolute", inset: 0, backgroundImage: "url('/images/home-books.png')", backgroundRepeat: "no-repeat", backgroundPosition: "bottom center", backgroundSize: "contain", opacity: 0.07, pointerEvents: "none", zIndex: 0 }} />
      <img src="/images/laptop.webp" alt="" style={{ position: "absolute", top: 24, left: "45%", transform: "translateX(-110px)", width: 230, pointerEvents: "none", zIndex: 0 }} />

      <div style={{ position: "relative", zIndex: 1, maxWidth: 1320, margin: "0 auto", padding: "60px 30px 70px", display: "flex", alignItems: "center", justifyContent: "space-between", gap: 40, flexWrap: "wrap" }}>
        {/* Left */}
        <div style={{ flex: 1, maxWidth: 580 }}>
          <p style={{ fontSize: 16, fontWeight: 600, color: "rgba(255,255,255,0.7)", textTransform: "uppercase", letterSpacing: "0.5px", marginBottom: 2 }}>Make Your Book A</p>
          <h1 style={{ fontSize: "clamp(72px, 9vw, 108px)", fontWeight: 900, color: "var(--accent)", lineHeight: 0.88, textTransform: "uppercase", margin: 0, letterSpacing: -1 }}>BEST<br />SELLER</h1>
          <p style={{ fontSize: "clamp(15px, 1.8vw, 20px)", fontWeight: 700, color: "var(--white)", textTransform: "uppercase", margin: "14px 0 20px", lineHeight: 1.35 }}>With Our Expert Book Publishing Services</p>
          <p style={{ fontSize: 14, color: "var(--text-muted)", lineHeight: 1.78, marginBottom: 28, maxWidth: 500 }}>
            Don't hide your story when the world is waiting to hear it. Your creativity stays in your hands — we never change your voice or vision. Writing, editing, marketing, designing, publishing — everything you need is right here.
          </p>
          <div style={{ display: "flex", gap: 20, marginBottom: 30, flexWrap: "wrap" }}>
            <img src="/images/google3.png" alt="Google Reviews" style={{ height: 70, objectFit: "contain" }} />
            <img src="/images/footer-icon1.webp" alt="Trustpilot" style={{ height: 70, objectFit: "contain" }} />
          </div>
          <div style={{ display: "flex", gap: 14, flexWrap: "wrap" }}>
            <a href="#" className="btn-outline-white">Chat with us</a>
            <a href="#" className="btn-accent">Book Free Consultation</a>
          </div>
        </div>

        {/* Right: Form */}
        <div style={{ flexShrink: 0, width: 450, position: "relative", paddingRight: 80 }}>
          <div style={{ background: "var(--white)", borderRadius: 14, padding: "34px 30px 30px", boxShadow: "var(--shadow-lg)", borderTop: "4px solid var(--accent)" }}>
            <img src="/images/new-logo.png" alt="NY Book Publishers" style={{ height: 56, objectFit: "contain", marginBottom: 14 }} />
            <p style={{ fontSize: 13, fontWeight: 700, color: "var(--navy)", textTransform: "uppercase", letterSpacing: "1.5px", marginBottom: 20 }}>Become A Published Author</p>
            {["text:Enter Your Name", "email:Enter Your Email", "tel:+123 456 7890"].map(f => {
              const [type, ph] = f.split(":");
              return <input key={ph} className="nybp-input" type={type} placeholder={ph} style={{ marginBottom: 12 }} />;
            })}
            <textarea className="nybp-input" placeholder="Type Your Message..." style={{ height: 100, resize: "vertical", marginBottom: 12 }} />
            <div style={{ display: "flex", alignItems: "center", gap: 10, border: "1.5px solid #dde1e7", borderRadius: 8, padding: "12px 16px", marginBottom: 14 }}>
              <input type="checkbox" id="robot" style={{ width: 18, height: 18, accentColor: "var(--accent)", cursor: "pointer" }} />
              <label htmlFor="robot" style={{ fontSize: 13.5, color: "#555" }}>I'm not a robot</label>
              <span style={{ marginLeft: "auto", fontSize: 10, color: "#999", textAlign: "center", lineHeight: 1.5 }}>🔒<br />reCAPTCHA</span>
            </div>
            <button className="btn-accent" style={{ width: "100%", borderRadius: 8, padding: 15, fontSize: 15, letterSpacing: 1, textTransform: "uppercase", textAlign: "center" }}>Contact Us</button>
          </div>
          <img src="/images/tablet.webp" alt="" style={{ position: "absolute", right: -70, top: "55%", transform: "translateY(-50%)", width: 140, pointerEvents: "none", zIndex: 3 }} />
        </div>
      </div>
    </section>
  );
}