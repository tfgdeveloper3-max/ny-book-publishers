"use client";
import { useState } from "react";

export default function GetInTouchSection() {
  const [checked, setChecked] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });
  const handle = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => setForm({ ...form, [e.target.name]: e.target.value });

  return (
    <div style={{ fontFamily: "var(--font)", background: "var(--white)" }}>
      {/* Top band */}
      <div style={{ textAlign: "center", padding: "64px 24px 48px", borderBottom: "1px solid #f0f0f0" }}>
        <h2 style={{ fontSize: "clamp(28px, 4vw, 48px)", fontWeight: 800, color: "var(--navy)", margin: "0 0 10px" }}>Get In Touch</h2>
        <h3 style={{ fontSize: "clamp(16px, 2.2vw, 22px)", fontWeight: 700, color: "var(--accent)", margin: "0 0 16px", lineHeight: 1.4 }}>
          Contact NY Book Publishers For Professional Book Publishing Services
        </h3>
        <p style={{ fontSize: 14, color: "#666", lineHeight: 1.8, maxWidth: 500, margin: "0 auto 28px" }}>
          Reach out to our team and start your author journey with confidence.
        </p>
        <div style={{ display: "flex", gap: 14, justifyContent: "center", flexWrap: "wrap" }}>
          <a href="#" className="btn-accent">Chat With Experts</a>
          <a href="tel:8553847020" className="btn-navy">📞 (855) 384-7020</a>
        </div>
      </div>

      {/* Form band */}
      <div style={{ padding: "64px 40px 72px", display: "flex", gap: 40, alignItems: "flex-start", maxWidth: 1100, margin: "0 auto" }}>
        <div style={{ flex: "0 0 340px", paddingTop: 80 }}>
          <img src="/images/yes-book.png" alt="Books" style={{ width: "100%", objectFit: "contain", filter: "drop-shadow(0 8px 24px rgba(0,0,0,0.12))" }} />
        </div>
        <div style={{ flex: 1 }}>
          <h3 style={{ fontSize: "clamp(22px, 3vw, 32px)", fontWeight: 800, color: "var(--navy)", margin: "0 0 28px" }}>Ready To Discuss Your Story?</h3>
          <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
            <input className="nybp-input" name="name" placeholder="Enter Your Name" value={form.name} onChange={handle} />
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14 }}>
              <input className="nybp-input" name="email" type="email" placeholder="Enter Your Email" value={form.email} onChange={handle} />
              <input className="nybp-input" name="phone" type="tel" placeholder="Enter Phone Number" value={form.phone} onChange={handle} />
            </div>
            <textarea className="nybp-input" name="message" placeholder="Enter Message" value={form.message} onChange={handle} style={{ minHeight: 130, resize: "vertical" }} />
            <div style={{ display: "flex", alignItems: "center", gap: 12, border: "1.5px solid #d0d0d0", borderRadius: 6, padding: "14px 16px", background: "#f9f9f9" }}>
              <div onClick={() => setChecked(!checked)} style={{ width: 20, height: 20, border: `2px solid ${checked ? "#4caf50" : "#aaa"}`, borderRadius: 3, cursor: "pointer", background: checked ? "#4caf50" : "#fff", display: "flex", alignItems: "center", justifyContent: "center", color: "#fff", fontSize: 12 }}>{checked ? "✓" : ""}</div>
              <span style={{ fontSize: 13, color: "#555", flex: 1 }}>I'm not a robot</span>
              <span style={{ fontSize: 9, color: "#aaa", textAlign: "center", lineHeight: 1.5 }}>🔒<br />reCAPTCHA</span>
            </div>
            <button className="btn-navy" style={{ alignSelf: "flex-start", borderRadius: "var(--radius-pill)", padding: "14px 44px", fontSize: 14 }}>Get Started</button>
          </div>
        </div>
      </div>
    </div>
  );
}