"use client";
import { useState, useEffect, useRef } from "react";

export function GetInTouchSection() {
  const [checked, setChecked] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });
  const handle = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm({ ...form, [e.target.name]: e.target.value });
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current; if (!el) return;
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) el.querySelectorAll(".reveal,.reveal-left,.reveal-right").forEach(c => c.classList.add("revealed"));
    }, { threshold: 0.1 });
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <div ref={ref} style={{ fontFamily: "var(--font)", background: "var(--white)" }}>
      {/* top CTA */}
      <div className="reveal" style={{ textAlign: "center", padding: "68px 24px 52px", borderBottom: "1px solid #f0f0f0" }}>
        <p className="section-eyebrow">Contact Us</p>
        <h2 className="section-title">Get In Touch</h2>
        <h3 style={{ fontSize: "clamp(15px,2vw,22px)", fontWeight: 700, color: "var(--accent)", marginBottom: 16, lineHeight: 1.4 }}>
          Contact NY Book Publishers For Professional Book Publishing Services
        </h3>
        <p style={{ fontSize: 14, color: "#666", lineHeight: 1.85, maxWidth: 500, margin: "0 auto 32px" }}>
          Reach out to our team and start your author journey with confidence.
        </p>
        <div style={{ display: "flex", gap: 14, justifyContent: "center", flexWrap: "wrap" }}>
          <a href="#" className="btn-accent">Chat With Experts</a>
          <a href="tel:8553847020" className="btn-navy">📞 (855) 384-7020</a>
        </div>
      </div>

      {/* form */}
      <div style={{ padding: "68px 48px 80px", display: "flex", gap: 44, alignItems: "flex-start", maxWidth: 1100, margin: "0 auto", flexWrap: "wrap" }}>
        <div className="reveal-left" style={{ flex: "0 0 300px", paddingTop: 72 }}>
          <img src="/images/yes-book.png" alt="Books" style={{ width: "100%", objectFit: "contain", filter: "drop-shadow(0 12px 32px rgba(0,0,0,0.12))" }} />
        </div>
        <div className="reveal-right" style={{ flex: 1 }}>
          <h3 className="section-title" style={{ marginBottom: 28 }}>Ready To Discuss Your Story?</h3>
          <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
            <input className="nybp-input" name="name" placeholder="Enter Your Name" value={form.name} onChange={handle} />
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14 }}>
              <input className="nybp-input" name="email" type="email" placeholder="Enter Your Email" value={form.email} onChange={handle} />
              <input className="nybp-input" name="phone" type="tel" placeholder="Enter Phone Number" value={form.phone} onChange={handle} />
            </div>
            <textarea className="nybp-input" name="message" placeholder="Enter Message" value={form.message} onChange={handle} style={{ minHeight: 130 }} />

            {/* captcha */}
            <div style={{ display: "flex", alignItems: "center", gap: 12, border: "1.5px solid #d0d0d0", borderRadius: 10, padding: "14px 18px", background: "#f8fafc" }}>
              <div onClick={() => setChecked(!checked)} style={{
                width: 22, height: 22, border: `2px solid ${checked ? "#4caf50" : "#aaa"}`, borderRadius: 5,
                background: checked ? "#4caf50" : "#fff", display: "flex", alignItems: "center", justifyContent: "center",
                color: "#fff", fontSize: 13, transition: "all 0.2s",
              }}>
                {checked ? "✓" : ""}
              </div>
              <span style={{ fontSize: 13, color: "#555", flex: 1 }}>I'm not a robot</span>
              <span style={{ fontSize: 9, color: "#aaa", textAlign: "center", lineHeight: 1.5 }}>🔒<br />reCAPTCHA</span>
            </div>

            <a href="#" className="btn-navy" style={{ alignSelf: "flex-start", borderRadius: "var(--radius-pill)", padding: "14px 48px", fontSize: 14 }}>
              Get Started
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
