"use client";

const navCols = [
  { title: "Quick Links", links: ["Home", "About Us", "Portfolio", "Reviews", "Blogs"] },
  { title: "Services", links: ["Ghostwriting Services", "Book Editing Services", "Book Cover Design Services", "Ebook Publishing Services"] },
  { title: "Books", links: ["Book Marketing Services", "Illustration Design Services", "Beta Reader Services", "Book Coaching Services"] },
  { title: "Help", links: ["Contact Us", "Terms And Conditions", "Privacy Policy"] },
];

export function FooterSection() {
  return (
    <footer style={{ fontFamily: "var(--font)" }}>
      {/* nav */}
      <div style={{ background: "var(--gradient-dark)", padding: "60px 60px 64px" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr 1fr 1fr 1.3fr", gap: 32 }}>
          {navCols.map(col => (
            <div key={col.title}>
              <h4 style={{ fontSize: 16, fontWeight: 700, color: "var(--accent)", marginBottom: 22, fontFamily: "var(--font2)" }}>{col.title}</h4>
              <ul style={{ listStyle: "none", padding: 0, display: "flex", flexDirection: "column", gap: 13 }}>
                {col.links.map(l => (
                  <li key={l}>
                    <a href="#" style={{ fontSize: 14, color: "rgba(255,255,255,0.75)", transition: "color 0.2s, paddingLeft 0.2s" }}
                      onMouseEnter={e => { e.currentTarget.style.color = "var(--accent)"; e.currentTarget.style.paddingLeft = "6px"; }}
                      onMouseLeave={e => { e.currentTarget.style.color = "rgba(255,255,255,0.75)"; e.currentTarget.style.paddingLeft = "0"; }}>
                      {l}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
          {/* badges */}
          <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
            {["Google Reviews", "Trustpilot"].map(b => (
              <div key={b} style={{ background: "rgba(255,255,255,0.06)", border: "1px solid rgba(240,165,0,0.25)", borderRadius: 12, padding: "14px 18px", textAlign: "center" }}>
                <div style={{ color: "var(--accent)", fontSize: 14, letterSpacing: 3, marginBottom: 4 }}>★★★★★</div>
                <div style={{ fontSize: 11, fontWeight: 700, color: "rgba(255,255,255,0.7)", textTransform: "uppercase", letterSpacing: 1.5 }}>{b}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* mid */}
      <div style={{ background: "#fef8ec", padding: "34px 60px", borderTop: "3px solid var(--accent)" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", display: "flex", alignItems: "center", gap: 40, flexWrap: "wrap" }}>
          <div>
            <div style={{ fontFamily: "var(--font2)", fontSize: 44, fontWeight: 900, color: "var(--accent)", letterSpacing: 2, lineHeight: 1 }}>NYBP</div>
            <div style={{ fontSize: 10, fontWeight: 700, color: "var(--navy)", letterSpacing: 3, textTransform: "uppercase" }}>New York Book Publishers</div>
          </div>
          <div style={{ flex: 1 }}>
            <p style={{ fontSize: 14, fontWeight: 700, color: "var(--navy)", lineHeight: 1.75 }}>Mailing Address:<br />42 Broadway 12th floor, New York, NY 10004</p>
          </div>
          <div style={{ flex: 1 }}>
            {["info@nybookpublishers.com", "(855) 384-7020"].map(c => (
              <a key={c} href="#" style={{ display: "block", fontSize: 14, fontWeight: 700, color: "var(--navy)", lineHeight: 1.8, transition: "color 0.2s" }}
                onMouseEnter={e => (e.currentTarget.style.color = "var(--accent)")}
                onMouseLeave={e => (e.currentTarget.style.color = "var(--navy)")}>
                {c}
              </a>
            ))}
          </div>
          {/* social */}
          <div style={{ display: "flex", gap: 14, marginLeft: "auto" }}>
            {["f", "in", "tw"].map((label, i) => (
              <a key={i} href="#" style={{
                width: 42, height: 42, borderRadius: "50%",
                background: "var(--accent)", display: "flex", alignItems: "center", justifyContent: "center",
                fontSize: 14, fontWeight: 900, color: "var(--navy)",
                transition: "transform 0.2s, background 0.2s",
              }}
                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.transform = "translateY(-3px)"; (e.currentTarget as HTMLElement).style.background = "var(--accent-hover)"; }}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.transform = "translateY(0)"; (e.currentTarget as HTMLElement).style.background = "var(--accent)"; }}>
                {label}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* bottom */}
      <div style={{ background: "#07091e", padding: "18px 24px", textAlign: "center", position: "relative" }}>
        <p style={{ fontSize: 13, color: "rgba(255,255,255,0.5)" }}>Copyright © 2026 Book Publishing Group LLC All Rights Reserved.</p>
        <button className="btn-accent" style={{ position: "absolute", right: 24, top: "50%", transform: "translateY(-50%)", padding: "8px 22px", fontSize: 13, borderRadius: "var(--radius-pill)", border: "none" }}>
          ? Help
        </button>
      </div>
    </footer>
  );
}