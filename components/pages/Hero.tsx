"use client";
import { useEffect, useRef } from "react";

export default function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d")!;
    let w = canvas.offsetWidth, h = canvas.offsetHeight;
    canvas.width = w; canvas.height = h;

    const stars = Array.from({ length: 90 }, () => ({
      x: Math.random() * w, y: Math.random() * h,
      r: Math.random() * 1.8 + 0.4,
      speed: Math.random() * 0.3 + 0.1,
      opacity: Math.random(),
      delta: (Math.random() - 0.5) * 0.02,
    }));

    let raf: number;
    const draw = () => {
      ctx.clearRect(0, 0, w, h);
      stars.forEach(s => {
        s.opacity += s.delta;
        if (s.opacity <= 0 || s.opacity >= 1) s.delta *= -1;
        s.y -= s.speed;
        if (s.y < 0) { s.y = h; s.x = Math.random() * w; }
        ctx.beginPath();
        ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(240,165,0,${s.opacity.toFixed(2)})`;
        ctx.fill();
      });
      raf = requestAnimationFrame(draw);
    };
    draw();

    const resize = () => {
      w = canvas.offsetWidth; h = canvas.offsetHeight;
      canvas.width = w; canvas.height = h;
    };
    window.addEventListener("resize", resize);
    return () => { cancelAnimationFrame(raf); window.removeEventListener("resize", resize); };
  }, []);

  return (
    <>
      <style>{`
        @keyframes glowPulse {
          0%, 100% { box-shadow: 0 0 0 0 rgba(240,165,0,0), 0 32px 80px rgba(0,0,0,0.35); }
          50%       { box-shadow: 0 0 0 6px rgba(240,165,0,0.12), 0 32px 80px rgba(0,0,0,0.35); }
        }
        @keyframes cornerTL {
          0%,100% { width: 28px; height: 28px; opacity: 0.7; }
          50%      { width: 38px; height: 38px; opacity: 1; }
        }
        @keyframes cornerBR {
          0%,100% { width: 28px; height: 28px; opacity: 0.7; }
          50%      { width: 38px; height: 38px; opacity: 1; }
        }
        @keyframes shimmerLine {
          0%   { transform: translateX(-100%); }
          100% { transform: translateX(400%); }
        }
        @keyframes floatForm {
          0%, 100% { transform: translateY(0px); }
          50%       { transform: translateY(-6px); }
        }
      `}</style>

      <section style={{
        background: "var(--gradient-dark)",
        height: "80vh", position: "relative", overflow: "hidden",
        fontFamily: "var(--font)",
      }}>
        {/* star canvas */}
        <canvas ref={canvasRef} style={{ position: "absolute", inset: 0, width: "100%", height: "100%", pointerEvents: "none", zIndex: 0 }} />

        {/* book silhouette bg */}
        <div style={{
          position: "absolute", inset: 0,
          backgroundImage: "url('/images/home-books.png')",
          backgroundRepeat: "no-repeat", backgroundPosition: "bottom center", backgroundSize: "contain",
          opacity: 0.05, pointerEvents: "none", zIndex: 0,
        }} />

        {/* decorative rings */}
        <div style={{ position: "absolute", top: -140, right: -140, width: 500, height: 500, borderRadius: "50%", border: "1px solid rgba(240,165,0,0.1)", pointerEvents: "none", zIndex: 0, animation: "pulse-ring 4s ease-out infinite" }} />
        <div style={{ position: "absolute", top: -80, right: -80, width: 360, height: 360, borderRadius: "50%", border: "1px solid rgba(240,165,0,0.15)", pointerEvents: "none", zIndex: 0, animation: "pulse-ring 4s 1s ease-out infinite" }} />

        {/* main content */}
        <div style={{
          position: "relative", zIndex: 1, maxWidth: 1320, margin: "0 auto",
          padding: "30px 40px 80px",
          display: "flex", alignItems: "center", justifyContent: "space-between",
          gap: 48, flexWrap: "wrap",
        }}>

          {/* ── Left ── */}
          <div style={{ flex: 1, minWidth: 300 }}>
            <p style={{ fontSize: 13, fontWeight: 700, color: "rgba(255,255,255,0.6)", textTransform: "uppercase", letterSpacing: "2px", marginBottom: 6, animation: "fadeUp 0.6s ease both" }}>
              Make Your Book A
            </p>
            <h1 style={{
              fontFamily: "var(--font2)",
              fontSize: "clamp(62px,8.5vw,76px)", fontWeight: 900,
              color: "var(--accent)", lineHeight: 0.88, textTransform: "uppercase",
              margin: 0, letterSpacing: -2,
              animation: "fadeUp 0.7s 0.1s ease both",
              textShadow: "0 0 60px rgba(240,165,0,0.3)",
            }}>
              BEST<br />SELLER
            </h1>
            <p style={{ fontSize: "clamp(13px,1.7vw,18px)", fontWeight: 700, color: "var(--white)", textTransform: "uppercase", margin: "16px 0 20px", letterSpacing: 0.5, animation: "fadeUp 0.7s 0.2s ease both" }}>
              With Our Expert Book Publishing Services
            </p>
            <p style={{ fontSize: 14, color: "var(--text-muted)", lineHeight: 1.85, marginBottom: 32, maxWidth: 500, animation: "fadeUp 0.7s 0.3s ease both" }}>
              Don't hide your story when the world is waiting to hear it. Your creativity stays in your hands — we never change your voice or vision. Writing, editing, marketing, designing, publishing — everything you need is right here.
            </p>

            {/* badges */}
            <div style={{ display: "flex", gap: 16, marginBottom: 32, flexWrap: "wrap", animation: "fadeUp 0.7s 0.4s ease both" }}>
              {["Google Reviews", "Trustpilot"].map(b => (
                <div key={b} style={{
                  background: "rgba(255,255,255,0.06)", border: "1px solid rgba(240,165,0,0.3)",
                  borderRadius: 10, padding: "10px 18px",
                  display: "flex", flexDirection: "column", alignItems: "center", gap: 4,
                }}>
                  <span style={{ color: "var(--accent)", fontSize: 14, letterSpacing: 3 }}>★★★★★</span>
                  <span style={{ fontSize: 11, fontWeight: 700, color: "rgba(255,255,255,0.75)", textTransform: "uppercase", letterSpacing: 1.5 }}>{b}</span>
                </div>
              ))}
            </div>

            <div style={{ display: "flex", gap: 14, flexWrap: "wrap", animation: "fadeUp 0.7s 0.5s ease both" }}>
              <a href="#" className="btn-outline-white">💬 Chat with us</a>
              <a href="#" className="btn-accent">Book Free Consultation</a>
            </div>
          </div>

          {/* ── Right — Form ── */}
          <div style={{
            flexShrink: 0, width: 440,
            animation: "fadeLeft 0.9s 0.2s ease both",
            position: "relative",
          }}>

            {/* ── Decorative corner brackets ── */}
            {/* Top-left corner */}
            <div style={{
              position: "absolute", top: -10, left: -10,
              width: 32, height: 32,
              borderTop: "3px solid var(--accent)",
              borderLeft: "3px solid var(--accent)",
              borderRadius: "4px 0 0 0",
              animation: "cornerTL 2.5s ease-in-out infinite",
              zIndex: 2,
            }} />
            {/* Top-right corner */}
            <div style={{
              position: "absolute", top: -10, right: -10,
              width: 32, height: 32,
              borderTop: "3px solid var(--accent)",
              borderRight: "3px solid var(--accent)",
              borderRadius: "0 4px 0 0",
              animation: "cornerTL 2.5s 0.4s ease-in-out infinite",
              zIndex: 2,
            }} />
            {/* Bottom-left corner */}
            <div style={{
              position: "absolute", bottom: -10, left: -10,
              width: 32, height: 32,
              borderBottom: "3px solid var(--accent)",
              borderLeft: "3px solid var(--accent)",
              borderRadius: "0 0 0 4px",
              animation: "cornerBR 2.5s 0.8s ease-in-out infinite",
              zIndex: 2,
            }} />
            {/* Bottom-right corner */}
            <div style={{
              position: "absolute", bottom: -10, right: -10,
              width: 32, height: 32,
              borderBottom: "3px solid var(--accent)",
              borderRight: "3px solid var(--accent)",
              borderRadius: "0 0 4px 0",
              animation: "cornerBR 2.5s 1.2s ease-in-out infinite",
              zIndex: 2,
            }} />

            {/* ── Soft glow behind form ── */}
            <div style={{
              position: "absolute", inset: -20,
              background: "radial-gradient(ellipse at center, rgba(240,165,0,0.13) 0%, transparent 70%)",
              borderRadius: 24,
              pointerEvents: "none", zIndex: 0,
            }} />

            {/* ── Form card ── */}
            <div style={{
              background: "var(--white)", borderRadius: 16,
              padding: "36px 32px 32px",
              borderTop: "5px solid var(--accent)",
              position: "relative", zIndex: 1,
              animation: "glowPulse 3s ease-in-out infinite, floatForm 5s ease-in-out infinite",
            }}>

              {/* shimmer line on top border */}
              <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 5, borderRadius: "16px 16px 0 0", overflow: "hidden" }}>
                <div style={{
                  position: "absolute", top: 0, left: 0, width: "25%", height: "100%",
                  background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.7), transparent)",
                  animation: "shimmerLine 2.5s ease-in-out infinite",
                }} />
              </div>

              <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 4 }}>
                <div style={{ width: 36, height: 36, background: "var(--gradient-dark)", borderRadius: 8, display: "flex", alignItems: "center", justifyContent: "center", border: "1.5px solid var(--accent)" }}>
                  <span style={{ fontSize: 13, fontWeight: 900, color: "var(--accent)", fontFamily: "var(--font2)" }}>NY</span>
                </div>
                <span style={{ fontSize: 22, fontWeight: 900, color: "var(--accent)", fontFamily: "var(--font2)", letterSpacing: 2 }}>PUBLISHERS</span>
              </div>
              <p style={{ fontSize: 12, fontWeight: 700, color: "var(--navy)", textTransform: "uppercase", letterSpacing: 2, marginBottom: 22 }}>Become A Published Author</p>

              {[
                { type: "text", ph: "Enter Your Name" },
                { type: "email", ph: "Enter Your Email" },
                { type: "tel", ph: "+1 (555) 000-0000" },
              ].map(({ type, ph }) => (
                <input key={ph} className="nybp-input" type={type} placeholder={ph} style={{ marginBottom: 12 }} />
              ))}
              <textarea className="nybp-input" placeholder="Type Your Message..." style={{ marginBottom: 12 }} />

              <div style={{ display: "flex", alignItems: "center", gap: 10, border: "1.5px solid #dde1e7", borderRadius: 10, padding: "12px 16px", marginBottom: 14, background: "#f8fafc" }}>
                <input type="checkbox" id="robot" style={{ width: 18, height: 18, accentColor: "var(--accent)" }} />
                <label htmlFor="robot" style={{ fontSize: 13, color: "#555", flex: 1 }}>I'm not a robot</label>
                <span style={{ fontSize: 9, color: "#aaa", textAlign: "center", lineHeight: 1.5 }}>🔒<br />reCAPTCHA</span>
              </div>

              <button className="btn-accent" style={{ width: "100%", justifyContent: "center", borderRadius: 10, padding: 15, fontSize: 15, letterSpacing: 1, textTransform: "uppercase", border: "none" }}>
                Contact Us
              </button>
            </div>
          </div>

        </div>
      </section>
    </>
  );
}