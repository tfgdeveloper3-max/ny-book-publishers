"use client";
import { useState } from "react";

const styles = `
  @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800&display=swap');

  .nybp-topbar { background-color: #1a1f5e; padding: 7px 0; border-bottom: 1px solid rgba(0,188,212,0.2); font-family: 'Poppins', sans-serif; }
  .nybp-topbar-inner { max-width: 1320px; margin: 0 auto; padding: 0 30px; display: flex; justify-content: flex-end; align-items: center; gap: 28px; }
  .nybp-topbar a { color: #ffffff; text-decoration: none; font-size: 15px; font-weight: 600; display: flex; align-items: center; gap: 6px; transition: color 0.2s; }
  .nybp-topbar a:hover { color: #00BCD4; }
  .nybp-topbar svg { width: 14px; height: 14px; fill: #00BCD4; flex-shrink: 0; }

  .nybp-navbar { background: #f0fbfc; box-shadow: 0 2px 10px rgba(0,0,0,0.07); position: sticky; top: 0; z-index: 999; font-family: 'Poppins', sans-serif; }
  .nybp-navbar-inner { max-width: 1320px; margin: 0 auto; padding: 0 30px; display: flex; align-items: center; justify-content: space-between; height: 80px; }
  .nybp-logo img { height: 58px; width: auto; object-fit: contain; display: block; }

  .nybp-nav-links { display: flex; align-items: center; list-style: none; margin: 0; padding: 0; gap: 2px; }
  .nybp-nav-links > li { position: relative; }
  .nybp-nav-links > li > a { font-size: 15px; font-weight: 500; color: #222222; text-decoration: none; padding: 10px 15px; display: flex; align-items: center; gap: 5px; transition: color 0.2s; white-space: nowrap; }
  .nybp-nav-links > li > a.nybp-active { color: #00BCD4; font-weight: 600; }
  .nybp-nav-links > li > a:hover { color: #00BCD4; }

  .nybp-chevron { display: inline-block; width: 0; height: 0; border-left: 4px solid transparent; border-right: 4px solid transparent; border-top: 5px solid currentColor; margin-top: 1px; }

  .nybp-dropdown { display: none; position: absolute; top: calc(100% + 4px); left: 0; background: #ffffff; border: 1px solid #e0f7fa; border-radius: 10px; box-shadow: 0 10px 40px rgba(0,188,212,0.12); padding: 10px 0; min-width: 230px; z-index: 200; }
  .nybp-has-dropdown:hover .nybp-dropdown { display: block; }
  .nybp-dropdown a { display: block; padding: 9px 20px; font-size: 13.5px; font-weight: 500; color: #333; text-decoration: none; transition: background 0.15s, color 0.15s; }
  .nybp-dropdown a:hover { background: #e0f7fa; color: #00BCD4; }

  .nybp-ctas { display: flex; align-items: center; gap: 12px; flex-shrink: 0; }
  .nybp-btn-phone { background: #00BCD4; color: #ffffff; text-decoration: none; padding: 11px 22px; border-radius: 50px; font-family: 'Poppins', sans-serif; font-size: 14px; font-weight: 600; display: flex; align-items: center; gap: 8px; transition: background 0.2s, transform 0.15s; white-space: nowrap; }
  .nybp-btn-phone:hover { background: #0097A7; transform: translateY(-1px); }
  .nybp-btn-phone svg { width: 15px; height: 15px; fill: #fff; flex-shrink: 0; }

  .nybp-btn-consult { background: #1a1f5e; color: #ffffff; text-decoration: none; padding: 11px 22px; border-radius: 50px; font-family: 'Poppins', sans-serif; font-size: 14px; font-weight: 600; display: block; white-space: nowrap; transition: background 0.2s, transform 0.15s; }
  .nybp-btn-consult:hover { background: #0f1340; transform: translateY(-1px); }

  .nybp-hamburger { display: none; flex-direction: column; gap: 5px; background: none; border: none; cursor: pointer; padding: 6px; }
  .nybp-hamburger span { display: block; width: 24px; height: 2px; background: #1a1f5e; border-radius: 2px; transition: 0.3s; }

  .nybp-mobile-menu { display: none; flex-direction: column; background: #fff; border-top: 1px solid #e0f7fa; padding: 12px 24px 20px; }
  .nybp-mobile-menu.nybp-open { display: flex; }
  .nybp-mobile-menu a { font-family: 'Poppins', sans-serif; font-size: 14px; font-weight: 500; color: #222; text-decoration: none; padding: 11px 0; border-bottom: 1px solid #f2f2f2; display: block; }
  .nybp-mobile-menu a:hover { color: #00BCD4; }

  @media (max-width: 1024px) { .nybp-nav-links, .nybp-ctas { display: none; } .nybp-hamburger { display: flex; } }
`;

const serviceItems = ["Ghostwriting Services", "Book Editing Services", "Book Cover Design Services", "Ebook Publishing Services", "Beta Reader Services", "Book Coaching Services", "Illustration Design Services", "Book Marketing Services"];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: styles }} />
      <div className="nybp-topbar">
        <div className="nybp-topbar-inner">
          <a href="mailto:info@nybookpublishers.com">
            <svg viewBox="0 0 20 20"><path d="M2 4a2 2 0 012-2h12a2 2 0 012 2v12a2 2 0 01-2 2H4a2 2 0 01-2-2V4zm2 0l6 5 6-5H4zm0 2v8h12V6l-6 5-6-5z" /></svg>
            info@nybookpublishers.com
          </a>
          <a href="tel:8553847020">
            <svg viewBox="0 0 20 20"><path d="M2 3a1 1 0 011-1h3.5a1 1 0 011 .88l.5 3a1 1 0 01-.29.89L6.5 8a11.1 11.1 0 005.5 5.5l1.22-1.22a1 1 0 01.9-.29l3 .5A1 1 0 0118 13.5V17a1 1 0 01-1 1C8.16 18 2 11.84 2 4V3z" /></svg>
            (855) 384-7020
          </a>
        </div>
      </div>
      <nav className="nybp-navbar">
        <div className="nybp-navbar-inner">
          <a href="/" className="nybp-logo"><img src="/images/new-logo.png" alt="NY Book Publishers" /></a>
          <ul className="nybp-nav-links">
            <li><a href="/" className="nybp-active">Home</a></li>
            <li><a href="/about-us">About Us</a></li>
            <li className="nybp-has-dropdown">
              <a href="#">Services <span className="nybp-chevron" /></a>
              <div className="nybp-dropdown">{serviceItems.map((s) => <a key={s} href="#">{s}</a>)}</div>
            </li>
            <li><a href="/blogs">Blogs</a></li>
            <li><a href="/portfolio">Portfolio</a></li>
            <li><a href="/reviews">Reviews</a></li>
            <li><a href="/contact-us">Contact</a></li>
          </ul>
          <div className="nybp-ctas">
            <a href="tel:8553847020" className="nybp-btn-phone">
              <svg viewBox="0 0 20 20"><path d="M2 3a1 1 0 011-1h3.5a1 1 0 011 .88l.5 3a1 1 0 01-.29.89L6.5 8a11.1 11.1 0 005.5 5.5l1.22-1.22a1 1 0 01.9-.29l3 .5A1 1 0 0118 13.5V17a1 1 0 01-1 1C8.16 18 2 11.84 2 4V3z" /></svg>
              (855) 384-7020
            </a>
            <a href="#" className="nybp-btn-consult">Schedule A Free Consultation</a>
          </div>
          <button className="nybp-hamburger" onClick={() => setMobileOpen(!mobileOpen)} aria-label="Toggle menu">
            <span /><span /><span />
          </button>
        </div>
        <div className={`nybp-mobile-menu ${mobileOpen ? "nybp-open" : ""}`}>
          <a href="/">Home</a><a href="/about-us">About Us</a><a href="#">Services</a>
          <a href="/blogs">Blogs</a><a href="/portfolio">Portfolio</a>
          <a href="/reviews">Reviews</a><a href="/contact-us">Contact</a>
          <a href="tel:8553847020" style={{ color: "#00BCD4", fontWeight: 600 }}>📞 (855) 384-7020</a>
        </div>
      </nav>
    </>
  );
}