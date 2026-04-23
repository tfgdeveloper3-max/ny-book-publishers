"use client";

const logos = [
  { src: "/images/hero-logo4.png", alt: "Apple Books" },
  { src: "/images/amazon.png", alt: "Amazon Kindle" },
  { src: "/images/hero-logo2.png", alt: "IngramSpark" },
  { src: "/images/hero-logo1.png", alt: "Goodreads" },
];
const allLogos = [...logos, ...logos, ...logos, ...logos, ...logos, ...logos];

export default function LogoBar() {
  return (
    <>
      <style>{`
        @keyframes nybpSlide { 0%{transform:translateX(0)} 100%{transform:translateX(-50%)} }
        .nybp-logobar-track { animation: nybpSlide 24s linear infinite; }
        .nybp-logobar-track:hover { animation-play-state: paused; }
        .nybp-logo-item img { opacity:0.7; filter:brightness(0) invert(1); transition:opacity .3s,transform .3s; }
        .nybp-logo-item img:hover { opacity:1; transform:scale(1.08); }
      `}</style>
      <div style={{ background: "var(--gradient-dark)", overflow: "hidden", height: 100, display: "flex", alignItems: "center", borderTop: "1px solid rgba(240,165,0,0.15)", borderBottom: "1px solid rgba(240,165,0,0.15)" }}>
        <div className="nybp-logobar-track" style={{ display: "flex", alignItems: "center", width: "max-content" }}>
          {allLogos.map((logo, i) => (
            <div key={i} className="nybp-logo-item" style={{ padding: "0 48px", flexShrink: 0 }}>
              <img src={logo.src} alt={logo.alt} style={{ height: 36, width: "auto", objectFit: "contain", display: "block" }} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}