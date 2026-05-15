"use client";
import { useState, useEffect, useRef } from "react";
import Link from "next/link"; // Next.js Link component import kiya

const servicesMenu = [
  {
    label: "Writing Services",
    links: [
      "Book Writing",
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
    label: "Editing & Publishing",
    links: [
      "Book Proofreading",
      "Book Editing",
      "Ebook Creation",
      "Audiobook Narration",
      "Book Formatting",
      "Children's Book Editing",
      "Book Publishing",
    ],
  },
  {
    label: "Design, Printing & Marketing",
    links: [
      "Book Cover Design",
      "Author Website Design",
      "Book Printing",
      "Book Marketing",
    ],
  },
];

const slugify = (s: string) =>
  s.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");

// Nav links ka data with proper routes
const navLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Blogs", href: "/blogs" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [megaOpen, setMegaOpen] = useState(false);
  const [activeTab, setActiveTab] = useState(servicesMenu[0].label);
  const [mobileServOpen, setMobileServOpen] = useState(false);
  const [mobileSub, setMobileSub] = useState<string | null>(null);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const openMega = () => { if (closeTimer.current) clearTimeout(closeTimer.current); setMegaOpen(true); };
  const closeMega = () => { closeTimer.current = setTimeout(() => setMegaOpen(false), 130); };

  const activeLinks = servicesMenu.find(s => s.label === activeTab)?.links ?? [];

  return (
    <>
      <style>{`
        .nybp-mega {
          position: absolute;
          top: calc(100% + 6px);
          left: 50%;
          transform: translateX(-50%) translateY(-8px);
          width: 680px;
          background: #fff;
          border: 1px solid rgba(240,165,0,0.22);
          border-radius: 14px;
          box-shadow: 0 20px 60px rgba(0,0,0,0.13), 0 0 0 1px rgba(240,165,0,0.06);
          display: flex;
          overflow: hidden;
          opacity: 0;
          visibility: hidden;
          pointer-events: none;
          transition: opacity 0.22s ease, visibility 0.22s ease, transform 0.22s ease;
          z-index: 500;
        }
        .nybp-mega.open {
          opacity: 1;
          visibility: visible;
          pointer-events: all;
          transform: translateX(-50%) translateY(0);
        }
        .nybp-mega::before {
          content: '';
          position: absolute;
          top: -10px; left: 0; right: 0;
          height: 10px;
        }
        .mega-left {
          width: 210px;
          flex-shrink: 0;
          background: #fafaf8;
          border-right: 1px solid rgba(240,165,0,0.15);
          padding: 14px 0;
          display: flex;
          flex-direction: column;
        }
        .mega-left-label {
          font-size: 9px;
          font-weight: 800;
          letter-spacing: 2.5px;
          color: rgba(240,165,0,0.5);
          text-transform: uppercase;
          padding: 0 16px 10px;
          margin: 0;
          font-family: var(--font);
        }
        .mega-tab-btn {
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 11px 16px;
          background: transparent;
          border: none;
          border-left: 2.5px solid transparent;
          color: #555;
          font-size: 13px;
          font-weight: 600;
          font-family: var(--font);
          cursor: none;
          text-align: left;
          transition: background 0.15s, color 0.15s, border-color 0.15s;
        }
        .mega-tab-btn:hover,
        .mega-tab-btn.active {
          background: rgba(240,165,0,0.07);
          color: var(--accent);
          border-left-color: var(--accent);
        }
        .mega-tab-arrow {
          font-size: 16px;
          color: rgba(240,165,0,0.4);
          flex-shrink: 0;
          line-height: 1;
        }
        .mega-left-cta {
          margin: auto 12px 0;
          padding: 14px;
          background: linear-gradient(135deg, var(--navy), var(--navy2));
          border-radius: 10px;
        }
        .mega-left-cta p {
          font-size: 11px;
          color: rgba(255,255,255,0.7);
          line-height: 1.55;
          margin: 0 0 10px;
          font-family: var(--font);
        }
        .mega-left-cta a {
          display: block !important;
          background: var(--accent) !important;
          color: var(--navy) !important;
          font-size: 11px !important;
          font-weight: 800 !important;
          text-align: center !important;
          padding: 8px 12px !important;
          border-radius: 6px !important;
          transition: background 0.2s !important;
          font-family: var(--font) !important;
          text-decoration: none !important;
        }
        .mega-left-cta a:hover { background: var(--accent-hover) !important; }
        .mega-right {
          flex: 1;
          padding: 16px 18px 0;
          display: flex;
          flex-direction: column;
        }
        .mega-right-heading {
          font-size: 10px;
          font-weight: 800;
          letter-spacing: 2px;
          color: var(--accent);
          text-transform: uppercase;
          margin: 0 0 10px;
          font-family: var(--font);
        }
        .mega-links-grid {
          list-style: none;
          margin: 0; padding: 0;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1px 8px;
          flex: 1;
        }
        .mega-links-grid li a {
          display: flex !important;
          align-items: center !important;
          gap: 6px !important;
          padding: 7px 8px !important;
          font-size: 13px !important;
          font-weight: 500 !important;
          color: #444 !important;
          border-radius: 6px !important;
          text-decoration: none !important;
          font-family: var(--font) !important;
          transition: background 0.15s, color 0.15s, padding-left 0.15s !important;
          white-space: nowrap;
          background: transparent !important;
        }
        .mega-links-grid li a:hover {
          background: rgba(240,165,0,0.08) !important;
          color: var(--accent) !important;
          padding-left: 13px !important;
        }
        .mega-link-dot {
          color: rgba(240,165,0,0.4);
          font-size: 15px;
          line-height: 1;
          flex-shrink: 0;
        }
        .mega-footer {
          display: flex;
          gap: 18px;
          padding: 10px 8px;
          margin-top: 10px;
          border-top: 1px solid rgba(240,165,0,0.12);
          font-size: 11px;
          color: #999;
          font-family: var(--font);
        }

        /* mobile services accordion */
        .mob-serv-toggle {
          display: flex;
          align-items: center;
          justify-content: space-between;
          border-bottom: 1px solid #f2f2f2;
        }
        .mob-serv-toggle a {
          font-size: 14px;
          font-weight: 600;
          color: #222;
          padding: 12px 0 12px 28px;
          flex: 1;
          transition: color 0.2s;
          text-decoration: none;
        }
        .mob-serv-toggle a:hover { color: var(--accent); }
        .mob-serv-toggle button {
          background: none;
          border: none;
          font-size: 22px;
          color: #bbb;
          line-height: 1;
          padding: 4px 16px;
          transition: color 0.2s, transform 0.3s;
          cursor: none;
        }
        .mob-serv-toggle button.rotated { transform: rotate(45deg); color: var(--accent); }
        .mob-sub-wrap {
          overflow: hidden;
          max-height: 0;
          transition: max-height 0.4s cubic-bezier(0.16,1,0.3,1);
        }
        .mob-sub-wrap.open { max-height: 900px; }
        .mob-cat-btn {
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 10px 28px;
          background: #fafaf8;
          border: none;
          border-bottom: 1px solid #f0f0f0;
          font-size: 13px;
          font-weight: 700;
          color: #444;
          font-family: var(--font);
          cursor: none;
          text-align: left;
          transition: color 0.2s, background 0.2s;
        }
        .mob-cat-btn:hover { color: var(--accent); background: rgba(240,165,0,0.05); }
        .mob-cat-btn .mob-arrow { font-size: 14px; color: #bbb; transition: transform 0.3s, color 0.2s; display: inline-block; }
        .mob-cat-btn.open .mob-arrow { transform: rotate(90deg); color: var(--accent); }
        .mob-links-wrap {
          overflow: hidden;
          max-height: 0;
          transition: max-height 0.3s ease;
          background: #fff;
        }
        .mob-links-wrap.open { max-height: 600px; }
        .mob-links-wrap a {
          display: block !important;
          padding: 9px 28px 9px 44px !important;
          font-size: 13px !important;
          color: #666 !important;
          border-bottom: 1px solid #f8f8f8;
          transition: color 0.2s, padding-left 0.2s !important;
          text-decoration: none !important;
          font-family: var(--font) !important;
        }
        .mob-links-wrap a:hover { color: var(--accent) !important; padding-left: 52px !important; }
      `}</style>

      {/* ── Topbar ── */}
      <div style={{ background: "var(--gradient-dark)", padding: "8px 0", borderBottom: "1px solid rgba(240,165,0,0.18)", fontFamily: "var(--font)" }}>
        <div style={{ maxWidth: 1320, margin: "0 auto", padding: "0 40px", display: "flex", justifyContent: "flex-end", alignItems: "center", gap: 28 }}>
          {[
            { href: "mailto:info@nybookpublishers.com", label: "info@nybookpublishers.com", icon: "M2 4a2 2 0 012-2h12a2 2 0 012 2v12a2 2 0 01-2 2H4a2 2 0 01-2-2V4zm2 0l6 5 6-5H4zm0 2v8h12V6l-6 5-6-5z" },
            { href: "tel:8553847020", label: "(855) 384-7020", icon: "M2 3a1 1 0 011-1h3.5a1 1 0 011 .88l.5 3a1 1 0 01-.29.89L6.5 8a11.1 11.1 0 005.5 5.5l1.22-1.22a1 1 0 01.9-.29l3 .5A1 1 0 0118 13.5V17a1 1 0 01-1 1C8.16 18 2 11.84 2 4V3z" },
          ].map(({ href, label, icon }) => (
            <a key={href} href={href} style={{ color: "rgba(255,255,255,0.85)", fontSize: 13, fontWeight: 600, display: "flex", alignItems: "center", gap: 7, transition: "color 0.2s", textDecoration: "none" }}
              onMouseEnter={e => (e.currentTarget.style.color = "var(--accent)")}
              onMouseLeave={e => (e.currentTarget.style.color = "rgba(255,255,255,0.85)")}>
              <svg width="14" height="14" viewBox="0 0 20 20" fill="var(--accent)"><path d={icon} /></svg>
              {label}
            </a>
          ))}
        </div>
      </div>

      {/* ── Main Nav ── */}
      <nav style={{
        background: "#fff", position: "sticky", top: 0, zIndex: 999,
        borderBottom: "2.5px solid var(--accent)", fontFamily: "var(--font)",
        transition: "box-shadow 0.3s",
        boxShadow: scrolled ? "0 4px 32px rgba(0,0,0,0.13)" : "0 2px 10px rgba(0,0,0,0.06)",
      }}>
        <div style={{ maxWidth: 1320, margin: "0 auto", padding: "0 40px", display: "flex", alignItems: "center", justifyContent: "space-between", height: 80 }}>

          {/* Logo */}
          <Link href="/" style={{ textDecoration: "none", display: "flex", alignItems: "center", gap: 10 }}>
            <div style={{ width: 42, height: 42, background: "var(--gradient-dark)", borderRadius: 10, display: "flex", alignItems: "center", justifyContent: "center", border: "2px solid var(--accent)" }}>
              <span style={{ fontSize: 16, fontWeight: 900, color: "var(--accent)", fontFamily: "var(--font2)" }}>NY</span>
            </div>
            <div>
              <span style={{ fontSize: 20, fontWeight: 900, color: "var(--navy)", fontFamily: "var(--font2)", letterSpacing: 1, display: "block", lineHeight: 1.1 }}>PUBLISHERS</span>
              <span style={{ fontSize: 9, fontWeight: 700, color: "var(--accent)", letterSpacing: 3, textTransform: "uppercase" }}>New York</span>
            </div>
          </Link>

          {/* Desktop links */}
          <ul className="hide-mobile" style={{ display: "flex", alignItems: "center", listStyle: "none", gap: 2, margin: 0, padding: 0 }}>

            {/* Map over navLinks array */}
            {navLinks.map(item => (
              <li key={item.label}>
                <Link href={item.href} style={{ fontSize: 14, fontWeight: 600, color: "#222", padding: "10px 13px", display: "block", borderRadius: 8, transition: "color 0.2s, background 0.2s", textDecoration: "none" }}
                  onMouseEnter={e => { e.currentTarget.style.color = "var(--accent)"; e.currentTarget.style.background = "rgba(240,165,0,0.06)"; }}
                  onMouseLeave={e => { e.currentTarget.style.color = "#222"; e.currentTarget.style.background = "transparent"; }}>
                  {item.label}
                </Link>
              </li>
            ))}

            {/* Services mega dropdown */}
            <li style={{ position: "relative" }} onMouseEnter={openMega} onMouseLeave={closeMega}>
              <Link href="/services" style={{ fontSize: 14, fontWeight: 600, color: "#222", padding: "10px 13px", display: "flex", alignItems: "center", gap: 5, borderRadius: 8, transition: "color 0.2s, background 0.2s", textDecoration: "none" }}
                onMouseEnter={e => { e.currentTarget.style.color = "var(--accent)"; e.currentTarget.style.background = "rgba(240,165,0,0.06)"; }}
                onMouseLeave={e => { e.currentTarget.style.color = "#222"; e.currentTarget.style.background = "transparent"; }}>
                Services
                <svg width="10" height="10" viewBox="0 0 10 10" fill="currentColor" style={{ marginTop: 1, transition: "transform 0.3s", transform: megaOpen ? "rotate(180deg)" : "rotate(0deg)" }}>
                  <path d="M1 3l4 4 4-4" />
                </svg>
              </Link>

              {/* Mega menu panel */}
              <div className={`nybp-mega${megaOpen ? " open" : ""}`} onMouseEnter={openMega} onMouseLeave={closeMega}>

                {/* Left — tabs */}
                <div className="mega-left">
                  <p className="mega-left-label">Our Services</p>
                  {servicesMenu.map(srv => (
                    <button key={srv.label} className={`mega-tab-btn${activeTab === srv.label ? " active" : ""}`} onMouseEnter={() => setActiveTab(srv.label)}>
                      {srv.label}
                      <span className="mega-tab-arrow">›</span>
                    </button>
                  ))}
                  <div className="mega-left-cta">
                    <p>Ready to publish<br />your story?</p>
                    <Link href="/contact" onClick={() => setMegaOpen(false)}>Free Consultation</Link>
                  </div>
                </div>

                {/* Right — links */}
                <div className="mega-right">
                  <p className="mega-right-heading">{activeTab}</p>
                  <ul className="mega-links-grid">
                    {activeLinks.map(link => (
                      <li key={link}>
                        <Link href={`/services/${slugify(link)}`} onClick={() => setMegaOpen(false)}>
                          <span className="mega-link-dot">›</span>
                          {link}
                        </Link>
                      </li>
                    ))}
                  </ul>
                  <div className="mega-footer">
                    <span>📞 (855) 384-7020</span>
                    <span>✉️ info@nybookpublishers.com</span>
                  </div>
                </div>

              </div>
            </li>
          </ul>

          {/* CTA Buttons */}
          <div className="hide-mobile" style={{ display: "flex", gap: 10, alignItems: "center" }}>
            <a href="tel:8553847020" className="btn-accent" style={{ fontSize: 13, padding: "10px 20px", textDecoration: "none" }}>📞 (855) 384-7020</a>
            <Link href="/contact" className="btn-navy" style={{ fontSize: 13, padding: "10px 20px", textDecoration: "none" }}>Free Consultation</Link>
          </div>

          {/* Hamburger */}
          <button className="show-mobile" onClick={() => setMobileOpen(!mobileOpen)}
            style={{ flexDirection: "column", gap: 5, background: "none", border: "none", padding: 6 }} aria-label="Menu">
            {[0, 1, 2].map(i => (
              <span key={i} style={{
                display: "block", width: 24, height: 2.5, background: "var(--navy)", borderRadius: 2,
                transition: "transform 0.3s, opacity 0.3s",
                transform: mobileOpen ? i === 0 ? "translateY(7.5px) rotate(45deg)" : i === 1 ? "scaleX(0)" : "translateY(-7.5px) rotate(-45deg)" : "none",
                opacity: mobileOpen && i === 1 ? 0 : 1,
              }} />
            ))}
          </button>
        </div>

        {/* Mobile Menu */}
        <div style={{ maxHeight: mobileOpen ? 1000 : 0, overflow: "hidden", transition: "max-height 0.4s cubic-bezier(0.16,1,0.3,1)", background: "#fff", borderTop: mobileOpen ? "1px solid rgba(240,165,0,0.15)" : "none" }}>
          <div style={{ padding: "8px 0 16px", display: "flex", flexDirection: "column" }}>

            {/* Mobile nav links */}
            {navLinks.map(item => (
              <Link key={item.label} href={item.href} style={{ fontSize: 14, fontWeight: 600, color: "#222", padding: "12px 28px", borderBottom: "1px solid #f2f2f2", transition: "color 0.2s", textDecoration: "none" }}
                onMouseEnter={e => (e.currentTarget.style.color = "var(--accent)")}
                onMouseLeave={e => (e.currentTarget.style.color = "#222")}>
                {item.label}
              </Link>
            ))}

            {/* Mobile Services */}
            <div className="mob-serv-toggle">
              <Link href="/services" style={{ fontSize: 14, fontWeight: 600, color: "#222", padding: "12px 0 12px 28px", flex: 1, transition: "color 0.2s", textDecoration: "none" }}
                onMouseEnter={e => (e.currentTarget.style.color = "var(--accent)")}
                onMouseLeave={e => (e.currentTarget.style.color = "#222")}>
                Services
              </Link>
              <button className={mobileServOpen ? "rotated" : ""} onClick={() => setMobileServOpen(!mobileServOpen)}>+</button>
            </div>

            <div className={`mob-sub-wrap${mobileServOpen ? " open" : ""}`}>
              {servicesMenu.map(srv => (
                <div key={srv.label}>
                  <button className={`mob-cat-btn${mobileSub === srv.label ? " open" : ""}`} onClick={() => setMobileSub(mobileSub === srv.label ? null : srv.label)}>
                    {srv.label}
                    <span className="mob-arrow">›</span>
                  </button>
                  <div className={`mob-links-wrap${mobileSub === srv.label ? " open" : ""}`}>
                    {srv.links.map(link => (
                      <Link key={link} href={`/services/${slugify(link)}`}>{link}</Link>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <a href="tel:8553847020" style={{ color: "var(--accent)", fontWeight: 800, padding: "12px 28px", fontSize: 14, textDecoration: "none" }}>📞 (855) 384-7020</a>
          </div>
        </div>
      </nav>
    </>
  );
}