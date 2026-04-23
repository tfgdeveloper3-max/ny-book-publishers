"use client";
import { useState } from "react";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const serviceItems = ["Ghostwriting Services", "Book Editing Services", "Book Cover Design Services", "Ebook Publishing Services", "Beta Reader Services", "Book Coaching Services", "Illustration Design Services", "Book Marketing Services"];

  return (
    <>
      {/* Topbar */}
      <div style={{ background: "var(--gradient-dark)", padding: "7px 0", borderBottom: "1px solid rgba(240,165,0,0.2)", fontFamily: "var(--font)" }}>
        <div style={{ maxWidth: 1320, margin: "0 auto", padding: "0 30px", display: "flex", justifyContent: "flex-end", alignItems: "center", gap: 28 }}>
          {[
            { href: "mailto:info@nybookpublishers.com", label: "info@nybookpublishers.com", icon: "M2 4a2 2 0 012-2h12a2 2 0 012 2v12a2 2 0 01-2 2H4a2 2 0 01-2-2V4zm2 0l6 5 6-5H4zm0 2v8h12V6l-6 5-6-5z" },
            { href: "tel:8553847020", label: "(855) 384-7020", icon: "M2 3a1 1 0 011-1h3.5a1 1 0 011 .88l.5 3a1 1 0 01-.29.89L6.5 8a11.1 11.1 0 005.5 5.5l1.22-1.22a1 1 0 01.9-.29l3 .5A1 1 0 0118 13.5V17a1 1 0 01-1 1C8.16 18 2 11.84 2 4V3z" }
          ].map(({ href, label, icon }) => (
            <a key={href} href={href} style={{ color: "var(--white)", textDecoration: "none", fontSize: 14, fontWeight: 600, display: "flex", alignItems: "center", gap: 6, transition: "color var(--transition)" }}
              onMouseEnter={e => (e.currentTarget.style.color = "var(--accent)")}
              onMouseLeave={e => (e.currentTarget.style.color = "var(--white)")}>
              <svg width="14" height="14" viewBox="0 0 20 20" fill="var(--accent)"><path d={icon} /></svg>
              {label}
            </a>
          ))}
        </div>
      </div>

      {/* Navbar */}
      <nav style={{ background: "var(--white)", boxShadow: "0 2px 16px rgba(0,0,0,0.08)", position: "sticky", top: 0, zIndex: 999, fontFamily: "var(--font)", borderBottom: "2px solid var(--accent)" }}>
        <div style={{ maxWidth: 1320, margin: "0 auto", padding: "0 30px", display: "flex", alignItems: "center", justifyContent: "space-between", height: 80 }}>
          <a href="/" style={{ textDecoration: "none" }}><span style={{ fontSize: 28, fontWeight: 800, color: "#F0A500", letterSpacing: 2, fontFamily: "var(--font)" }}>BRAND</span></a>

          {/* Desktop nav */}
          <ul style={{ display: "flex", alignItems: "center", listStyle: "none", gap: 2, margin: 0, padding: 0 }} className="hide-mobile">
            {["Home", "About Us", "Blogs", "Portfolio", "Reviews", "Contact"].map((item) => (
              <li key={item}>
                <a href="#" style={{ fontSize: 15, fontWeight: 500, color: "#222", textDecoration: "none", padding: "10px 14px", display: "block", transition: "color var(--transition)" }}
                  onMouseEnter={e => (e.currentTarget.style.color = "var(--accent)")}
                  onMouseLeave={e => (e.currentTarget.style.color = "#222")}>
                  {item}
                </a>
              </li>
            ))}
            {/* Services dropdown */}
            <li style={{ position: "relative" }}
              onMouseEnter={e => { const d = e.currentTarget.querySelector(".nybp-dd") as HTMLElement; if (d) d.style.display = "block"; }}
              onMouseLeave={e => { const d = e.currentTarget.querySelector(".nybp-dd") as HTMLElement; if (d) d.style.display = "none"; }}>
              <a href="#" style={{ fontSize: 15, fontWeight: 500, color: "#222", textDecoration: "none", padding: "10px 14px", display: "flex", alignItems: "center", gap: 4, transition: "color var(--transition)" }}
                onMouseEnter={e => (e.currentTarget.style.color = "var(--accent)")}
                onMouseLeave={e => (e.currentTarget.style.color = "#222")}>
                Services <span style={{ borderLeft: "4px solid transparent", borderRight: "4px solid transparent", borderTop: "5px solid currentColor", marginTop: 2 }} />
              </a>
              <div className="nybp-dd" style={{ display: "none", position: "absolute", top: "calc(100% + 2px)", left: 0, background: "var(--white)", border: "1px solid rgba(240,165,0,0.2)", borderRadius: 10, boxShadow: "0 10px 40px rgba(0,0,0,0.12)", padding: "10px 0", minWidth: 230, zIndex: 200 }}>
                {serviceItems.map(s => (
                  <a key={s} href="#" style={{ display: "block", padding: "9px 20px", fontSize: 13.5, fontWeight: 500, color: "#333", textDecoration: "none", transition: "background var(--transition), color var(--transition)" }}
                    onMouseEnter={e => { e.currentTarget.style.background = "rgba(240,165,0,0.08)"; e.currentTarget.style.color = "var(--accent)"; }}
                    onMouseLeave={e => { e.currentTarget.style.background = "transparent"; e.currentTarget.style.color = "#333"; }}>
                    {s}
                  </a>
                ))}
              </div>
            </li>
          </ul>

          {/* CTAs */}
          <div style={{ display: "flex", gap: 12, alignItems: "center" }} className="hide-mobile">
            <a href="tel:8553847020" className="btn-accent" style={{ fontSize: 13, padding: "10px 20px" }}>📞 (855) 384-7020</a>
            <a href="#" className="btn-navy" style={{ fontSize: 13, padding: "10px 20px" }}>Free Consultation</a>
          </div>

          {/* Hamburger */}
          <button onClick={() => setMobileOpen(!mobileOpen)} style={{ display: "none", flexDirection: "column", gap: 5, background: "none", border: "none", cursor: "pointer", padding: 6 }} aria-label="Menu" className="show-mobile">
            {[0, 1, 2].map(i => <span key={i} style={{ display: "block", width: 24, height: 2, background: "var(--navy)", borderRadius: 2 }} />)}
          </button>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <div style={{ background: "var(--white)", borderTop: "1px solid rgba(240,165,0,0.2)", padding: "12px 24px 20px", display: "flex", flexDirection: "column" }}>
            {["Home", "About Us", "Services", "Blogs", "Portfolio", "Reviews", "Contact"].map(item => (
              <a key={item} href="#" style={{ fontSize: 14, fontWeight: 500, color: "#222", textDecoration: "none", padding: "11px 0", borderBottom: "1px solid #f2f2f2" }}>{item}</a>
            ))}
            <a href="tel:8553847020" style={{ color: "var(--accent)", fontWeight: 700, padding: "11px 0", textDecoration: "none" }}>📞 (855) 384-7020</a>
          </div>
        )}
      </nav>
    </>
  );
}