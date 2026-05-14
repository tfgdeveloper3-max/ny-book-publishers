"use client";
import Link from "next/link";

const slugify = (s: string) =>
  s.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");

// Exactly same as Navbar
const footerServices = [
  {
    title: "Writing Services",
    links: [
      "Ghostwriting Services",
      "Children's Book Writing",
      "Memoir Writing",
      "Fiction Writing",
      "Non-Fiction Writing",
      "Script Writing",
      "Horror Writing",
      "Fantasy Writing",
      "Mystery Writing",
      "Historical Writing",
      "Sci-Fi Writing",
      "SEO Content Writing",
    ],
  },
  {
    title: "Editing & Publishing",
    links: [
      "Book Editing Services",
      "Book Proofreading",
      "Book Formatting",
      "Ebook Publishing Services",
      "Audiobook Narration",
      "Book Coaching Services",
      "Beta Reader Services",
    ],
  },
  {
    title: "Design & Marketing",
    links: [
      "Book Cover Design Services",
      "Illustration Design Services",
      "Author Website Design",
      "Book Marketing Services",
      "Book Printing",
    ],
  },
];

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Reviews", href: "/reviews" },
  { label: "Blogs", href: "/blogs" },
  { label: "Contact Us", href: "/contact" },
];

const helpLinks = [
  { label: "Terms And Conditions", href: "/terms-and-conditions" },
  { label: "Privacy Policy", href: "/privacy-policy" },
];

export function FooterSection() {
  return (
    <footer style={{ fontFamily: "var(--font)" }}>
      {/* ── Top Nav Section ── */}
      <div style={{ background: "var(--gradient-dark)", padding: "60px 60px 64px" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1.2fr 1.2fr 1fr 1fr", gap: 32 }}>

          {/* Column 1: Quick Links */}
          <div>
            <h4 style={{ fontSize: 16, fontWeight: 700, color: "var(--accent)", marginBottom: 22, fontFamily: "var(--font2)" }}>Quick Links</h4>
            <ul style={{ listStyle: "none", padding: 0, display: "flex", flexDirection: "column", gap: 13 }}>
              {quickLinks.map(l => (
                <li key={l.label}>
                  <Link href={l.href} style={{ fontSize: 14, color: "rgba(255,255,255,0.75)", transition: "color 0.2s, paddingLeft 0.2s", textDecoration: "none" }}
                    onMouseEnter={e => { e.currentTarget.style.color = "var(--accent)"; e.currentTarget.style.paddingLeft = "6px"; }}
                    onMouseLeave={e => { e.currentTarget.style.color = "rgba(255,255,255,0.75)"; e.currentTarget.style.paddingLeft = "0"; }}>
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 2, 3, 4: Exact Navbar Services */}
          {footerServices.map(col => (
            <div key={col.title}>
              <h4 style={{ fontSize: 16, fontWeight: 700, color: "var(--accent)", marginBottom: 22, fontFamily: "var(--font2)" }}>{col.title}</h4>
              <ul style={{ listStyle: "none", padding: 0, display: "flex", flexDirection: "column", gap: 13 }}>
                {col.links.map(l => (
                  <li key={l}>
                    <Link href={`/services/${slugify(l)}`} style={{ fontSize: 14, color: "rgba(255,255,255,0.75)", transition: "color 0.2s, paddingLeft 0.2s", textDecoration: "none" }}
                      onMouseEnter={e => { e.currentTarget.style.color = "var(--accent)"; e.currentTarget.style.paddingLeft = "6px"; }}
                      onMouseLeave={e => { e.currentTarget.style.color = "rgba(255,255,255,0.75)"; e.currentTarget.style.paddingLeft = "0"; }}>
                      {l}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Column 5: Help & Badges */}
          <div>
            <h4 style={{ fontSize: 16, fontWeight: 700, color: "var(--accent)", marginBottom: 22, fontFamily: "var(--font2)" }}>Help</h4>
            <ul style={{ listStyle: "none", padding: 0, display: "flex", flexDirection: "column", gap: 13, marginBottom: 24 }}>
              {helpLinks.map(l => (
                <li key={l.label}>
                  <Link href={l.href} style={{ fontSize: 14, color: "rgba(255,255,255,0.75)", transition: "color 0.2s, paddingLeft 0.2s", textDecoration: "none" }}
                    onMouseEnter={e => { e.currentTarget.style.color = "var(--accent)"; e.currentTarget.style.paddingLeft = "6px"; }}
                    onMouseLeave={e => { e.currentTarget.style.color = "rgba(255,255,255,0.75)"; e.currentTarget.style.paddingLeft = "0"; }}>
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>

            {/* Badges */}
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
      </div>

      {/* ── Mid Section ── */}
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
            <a href="mailto:info@nybookpublishers.com" style={{ display: "block", fontSize: 14, fontWeight: 700, color: "var(--navy)", lineHeight: 1.8, transition: "color 0.2s", textDecoration: "none" }}
              onMouseEnter={e => (e.currentTarget.style.color = "var(--accent)")}
              onMouseLeave={e => (e.currentTarget.style.color = "var(--navy)")}>
              info@nybookpublishers.com
            </a>
            <a href="tel:8553847020" style={{ display: "block", fontSize: 14, fontWeight: 700, color: "var(--navy)", lineHeight: 1.8, transition: "color 0.2s", textDecoration: "none" }}
              onMouseEnter={e => (e.currentTarget.style.color = "var(--accent)")}
              onMouseLeave={e => (e.currentTarget.style.color = "var(--navy)")}>
              (855) 384-7020
            </a>
          </div>
          {/* social */}
          <div style={{ display: "flex", gap: 14, marginLeft: "auto" }}>
            {["f", "in", "tw"].map((label, i) => (
              <a key={i} href="#" style={{
                width: 42, height: 42, borderRadius: "50%",
                background: "var(--accent)", display: "flex", alignItems: "center", justifyContent: "center",
                fontSize: 14, fontWeight: 900, color: "var(--navy)",
                transition: "transform 0.2s, background 0.2s", textDecoration: "none"
              }}
                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.transform = "translateY(-3px)"; (e.currentTarget as HTMLElement).style.background = "var(--accent-hover)"; }}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.transform = "translateY(0)"; (e.currentTarget as HTMLElement).style.background = "var(--accent)"; }}>
                {label}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* ── Bottom Section ── */}
      <div style={{ background: "#07091e", padding: "18px 24px", textAlign: "center", position: "relative" }}>
        <p style={{ fontSize: 13, color: "rgba(255,255,255,0.5)" }}>Copyright © 2026 Book Publishing Group LLC All Rights Reserved.</p>
        <Link href="/contact" className="btn-accent" style={{ position: "absolute", right: 24, top: "50%", transform: "translateY(-50%)", padding: "8px 22px", fontSize: 13, borderRadius: "var(--radius-pill)", border: "none", textDecoration: "none" }}>
          ? Help
        </Link>
      </div>
    </footer>
  );
}