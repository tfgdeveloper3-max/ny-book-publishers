"use client";

const logos = [
  { label: "Apple Books" }, { label: "Amazon Kindle" },
  { label: "IngramSpark" }, { label: "Goodreads" },
  { label: "Barnes & Noble" }, { label: "Kobo" },
];
const all = [...logos, ...logos, ...logos, ...logos];

export function LogoBar() {
  return (
    <>
      <style>{`
        @keyframes nybpSlide { 0%{transform:translateX(0)} 100%{transform:translateX(-50%)} }
        .nybp-logobar-track { animation:nybpSlide 22s linear infinite; }
        .nybp-logobar-track:hover { animation-play-state:paused; }
        .nybp-logo-pill { transition:all 0.3s; }
        .nybp-logo-pill:hover { background:rgba(240,165,0,0.18) !important; color:var(--accent) !important; transform:scale(1.06); }
      `}</style>
      <div style={{ background: "var(--gradient-dark)", overflow: "hidden", height: 88, display: "flex", alignItems: "center", borderTop: "1px solid rgba(240,165,0,0.12)", borderBottom: "1px solid rgba(240,165,0,0.12)" }}>
        <div className="nybp-logobar-track" style={{ display: "flex", alignItems: "center", width: "max-content" }}>
          {all.map((l, i) => (
            <div key={i} style={{ padding: "0 40px", flexShrink: 0 }}>
              <div className="nybp-logo-pill" style={{
                background: "rgba(255,255,255,0.05)", border: "1px solid rgba(240,165,0,0.2)",
                borderRadius: 40, padding: "8px 22px",
                fontSize: 12, fontWeight: 800, color: "rgba(255,255,255,0.55)",
                letterSpacing: 2, textTransform: "uppercase", fontFamily: "var(--font)",
                whiteSpace: "nowrap",
              }}>
                {l.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

