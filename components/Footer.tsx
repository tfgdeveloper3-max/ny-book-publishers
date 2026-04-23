"use client";

export default function FooterSection() {
  const navCols = [
    { title: "Quick Links", links: ["Home", "About Us", "Portfolio", "Reviews", "Blogs"] },
    { title: "Services", links: ["Ghostwriting Services", "Book Editing Services", "Book Cover Design Services", "Ebook Publishing Services"] },
    { title: "Books", links: ["Book Marketing Services", "Illustration Design Services", "Beta Reader Services", "Book Coaching Services"] },
    { title: "Help", links: ["Contact Us", "Terms And conditions", "Privacy Policy"] },
  ];

  return (
    <footer style={{ fontFamily: "var(--font)" }}>
      {/* Top navy band */}
      <div style={{ background: "var(--gradient-dark)", padding: "56px 60px 60px" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr 1fr 1fr 1.2fr", gap: 32 }}>
          {navCols.map(col => (
            <div key={col.title}>
              <h4 style={{ fontSize: 17, fontWeight: 700, color: "var(--accent)", margin: "0 0 22px" }}>{col.title}</h4>
              <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 14 }}>
                {col.links.map(l => (
                  <li key={l}>
                    <a href="#" style={{ fontSize: 14, color: "rgba(255,255,255,0.8)", textDecoration: "none", transition: "color var(--transition)" }}
                      onMouseEnter={e => (e.currentTarget.style.color = "var(--accent)")}
                      onMouseLeave={e => (e.currentTarget.style.color = "rgba(255,255,255,0.8)")}>{l}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
          {/* Badges */}
          <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            <img src="/images/footer-icon1.webp" alt="Trustpilot" style={{ maxWidth: 170, objectFit: "contain" }} />
            <img src="/images/google3.png" alt="Google Reviews" style={{ maxWidth: 170, objectFit: "contain" }} />
          </div>
        </div>
      </div>

      {/* Middle light teal band — original was peach, keeping light */}
      <div style={{ background: "#fef8ec", padding: "32px 60px", borderTop: "3px solid var(--accent)" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", display: "flex", alignItems: "center", gap: 40, flexWrap: "wrap" }}>
          <img src="/images/new-logo.png" alt="NY Book Publishers" style={{ height: 72, objectFit: "contain" }} />
          <div style={{ flex: 1 }}>
            <p style={{ fontSize: 15, fontWeight: 700, color: "var(--navy)", margin: 0, lineHeight: 1.7 }}>Mailing Address:<br />42 Broadway 12th floor, New York, NY 10004</p>
          </div>
          <div style={{ flex: 1 }}>
            {["info@nybookpublishers.com", "(855) 384-7020"].map(c => (
              <a key={c} href="#" style={{ display: "block", fontSize: 15, fontWeight: 700, color: "var(--navy)", textDecoration: "none", lineHeight: 1.7, transition: "color var(--transition)" }}
                onMouseEnter={e => (e.currentTarget.style.color = "var(--accent)")}
                onMouseLeave={e => (e.currentTarget.style.color = "var(--navy)")}>{c}</a>
            ))}
          </div>
          <div style={{ display: "flex", gap: 20, marginLeft: "auto" }}>
            {[
              "M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z",
              "M2 2h20v20H2z M8 12m-3 0a3 3 0 106 0 3 3 0 00-6 0",
              "M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z M4 4m-2 0a2 2 0 104 0 2 2 0 00-4 0"
            ].map((d, i) => (
              <a key={i} href="#" style={{ display: "flex", alignItems: "center", justifyContent: "center", transition: "transform var(--transition)" }}
                onMouseEnter={e => (e.currentTarget.style.transform = "translateY(-3px)")}
                onMouseLeave={e => (e.currentTarget.style.transform = "translateY(0)")}>
                <svg width="22" height="22" viewBox="0 0 24 24" fill="var(--accent)"><path d={d} /></svg>
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom copyright */}
      <div style={{ background: "var(--navy-deeper)", padding: "18px 24px", textAlign: "center", position: "relative" }}>
        <p style={{ fontSize: 13, color: "rgba(255,255,255,0.6)", margin: 0 }}>Copyright © 2026 Book Publishing Group LLC All Rights Reserved.</p>
        <button className="btn-accent" style={{ position: "absolute", right: 24, top: "50%", transform: "translateY(-50%)", padding: "8px 20px", fontSize: 13, borderRadius: "var(--radius-pill)" }}>? Help</button>
      </div>
    </footer>
  );
}