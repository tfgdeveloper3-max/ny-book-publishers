"use client";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import { FooterSection } from "@/components/Footer";
import LightningCursor from "@/components/Lightningcursor";

/* ────────────────────────────────────────────
   DATA
   ──────────────────────────────────────────── */

const contactMethods = [
    { icon: "📞", title: "Call Us", line1: "(855) 384-7020", line2: "Mon-Fri 9AM - 6PM EST", href: "tel:8553847020" },
    { icon: "✉️", title: "Email Us", line1: "info@nybookpublishers.com", line2: "We reply within 24 hours", href: "mailto:info@nybookpublishers.com" },
    { icon: "📍", title: "Visit Us", line1: "42 Broadway 12th Floor", line2: "New York, NY 10004", href: "https://maps.google.com/?q=42+Broadway+New+York+NY+10004" },
    { icon: "💬", title: "Live Chat", line1: "Chat with our team", line2: "Available 24/7", href: "#" },
];

const servicesList = [
    "Ghostwriting Services",
    "Book Editing Services",
    "Book Cover Design",
    "Ebook Publishing",
    "Book Marketing",
    "Illustration Design",
    "Book Coaching",
    "Other",
];

const processSteps = [
    { step: "01", title: "Reach Out", desc: "Fill out the form or give us a call. Tell us about your book idea or where you are in the process." },
    { step: "02", title: "Free Consultation", desc: "A publishing expert will review your project and schedule a free 30-minute strategy call." },
    { step: "03", title: "Custom Blueprint", desc: "We'll craft a tailored publishing plan with clear timelines, costs, and deliverables." },
    { step: "04", title: "We Build Together", desc: "Our team gets to work while you stay in full creative control. Your book, your vision." },
];

/* ────────────────────────────────────────────
   CONTACT HERO
   ──────────────────────────────────────────── */

function ContactHero() {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext("2d")!;
        let w = canvas.offsetWidth, h = canvas.offsetHeight;
        canvas.width = w; canvas.height = h;

        const particles = Array.from({ length: 50 }, () => ({
            x: Math.random() * w, y: Math.random() * h,
            r: Math.random() * 1.5 + 0.5, speed: Math.random() * 0.2 + 0.06,
            opacity: Math.random(), delta: (Math.random() - 0.5) * 0.012,
        }));

        let raf: number;
        const draw = () => {
            ctx.clearRect(0, 0, w, h);
            particles.forEach(p => {
                p.opacity += p.delta;
                if (p.opacity <= 0.1 || p.opacity >= 0.8) p.delta *= -1;
                p.y -= p.speed; p.x += Math.sin(p.y * 0.008) * 0.2;
                if (p.y < -10) { p.y = h + 10; p.x = Math.random() * w; }
                ctx.beginPath();
                ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
                ctx.fillStyle = `rgba(240,165,0,${p.opacity.toFixed(2)})`;
                ctx.fill();
            });
            raf = requestAnimationFrame(draw);
        };
        draw();

        const resize = () => { w = canvas.offsetWidth; h = canvas.offsetHeight; canvas.width = w; canvas.height = h; };
        window.addEventListener("resize", resize);
        return () => { cancelAnimationFrame(raf); window.removeEventListener("resize", resize); };
    }, []);

    return (
        <section style={{ background: "var(--gradient-dark)", minHeight: 420, position: "relative", overflow: "hidden", fontFamily: "var(--font)" }}>
            <canvas ref={canvasRef} style={{ position: "absolute", inset: 0, width: "100%", height: "100%", pointerEvents: "none", zIndex: 0 }} />
            <div style={{ position: "absolute", top: -120, left: -80, width: 400, height: 400, borderRadius: "50%", border: "1px solid rgba(240,165,0,0.06)", pointerEvents: "none" }} />

            <div style={{ position: "relative", zIndex: 1, maxWidth: 1320, margin: "0 auto", padding: "100px 40px 80px", textAlign: "center" }}>
                <div style={{ display: "inline-flex", alignItems: "center", gap: 10, background: "rgba(240,165,0,0.1)", border: "1px solid rgba(240,165,0,0.3)", borderRadius: 40, padding: "8px 20px", marginBottom: 24 }}>
                    <span style={{ width: 8, height: 8, borderRadius: "50%", background: "var(--accent)", animation: "pulse 2s infinite" }} />
                    <span style={{ fontSize: 12, fontWeight: 700, color: "var(--accent)", textTransform: "uppercase", letterSpacing: 2 }}>Get In Touch</span>
                </div>

                <h1 style={{ fontFamily: "var(--font2)", fontSize: "clamp(42px,6vw,72px)", fontWeight: 900, color: "var(--white)", lineHeight: 0.95, margin: "0 0 20px", letterSpacing: -2 }}>
                    Let's Start Your<br /><span style={{ color: "var(--accent)" }}>Publishing Journey</span>
                </h1>

                <p style={{ fontSize: 16, color: "var(--text-muted)", lineHeight: 1.9, maxWidth: 600, margin: "0 auto" }}>
                    Have a story to tell? We're here to help. Reach out and let's discuss how we can turn your manuscript into a published masterpiece.
                </p>
            </div>
        </section>
    );
}

/* ────────────────────────────────────────────
   CONTACT METHOD CARDS
   ──────────────────────────────────────────── */

function ContactMethods() {
    const ref = useRef<HTMLElement>(null);
    useEffect(() => {
        const el = ref.current; if (!el) return;
        const obs = new IntersectionObserver(([e]) => {
            if (e.isIntersecting) el.querySelectorAll(".reveal").forEach(c => c.classList.add("revealed"));
        }, { threshold: 0.1 });
        obs.observe(el);
        return () => obs.disconnect();
    }, []);

    return (
        <section ref={ref} style={{ background: "var(--white)", padding: "0 40px 60px", marginTop: -50, position: "relative", zIndex: 2, fontFamily: "var(--font)" }}>
            <div style={{ maxWidth: 1100, margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 20 }}>
                {contactMethods.map((m, i) => (
                    <a key={i} href={m.href} target={m.icon === "📍" ? "_blank" : undefined} rel="noopener noreferrer" className="reveal" style={{
                        background: "#fff", borderRadius: 18, padding: "32px 24px", textAlign: "center",
                        border: "1px solid rgba(240,165,0,0.1)", textDecoration: "none",
                        transition: "transform 0.3s, box-shadow 0.3s, border-color 0.3s",
                        boxShadow: "0 8px 32px rgba(0,0,0,0.06)",
                    }}
                        onMouseEnter={e => { (e.currentTarget as HTMLElement).style.transform = "translateY(-8px)"; (e.currentTarget as HTMLElement).style.boxShadow = "0 20px 48px rgba(240,165,0,0.12)"; (e.currentTarget as HTMLElement).style.borderColor = "rgba(240,165,0,0.3)"; }}
                        onMouseLeave={e => { (e.currentTarget as HTMLElement).style.transform = "translateY(0)"; (e.currentTarget as HTMLElement).style.boxShadow = "0 8px 32px rgba(0,0,0,0.06)"; (e.currentTarget as HTMLElement).style.borderColor = "rgba(240,165,0,0.1)"; }}>
                        <div style={{
                            width: 60, height: 60, borderRadius: 16, margin: "0 auto 16px",
                            background: "linear-gradient(135deg,var(--navy),var(--navy2))",
                            display: "flex", alignItems: "center", justifyContent: "center",
                            fontSize: 24, boxShadow: "0 6px 20px rgba(13,18,64,0.25)",
                        }}>
                            {m.icon}
                        </div>
                        <h3 style={{ fontSize: 16, fontWeight: 800, color: "var(--navy)", fontFamily: "var(--font2)", marginBottom: 8 }}>{m.title}</h3>
                        <p style={{ fontSize: 14, fontWeight: 600, color: "var(--accent)", marginBottom: 4 }}>{m.line1}</p>
                        <p style={{ fontSize: 12, color: "#999" }}>{m.line2}</p>
                    </a>
                ))}
            </div>
        </section>
    );
}

/* ────────────────────────────────────────────
   CONTACT FORM + INFO
   ──────────────────────────────────────────── */

function ContactFormSection() {
    const [form, setForm] = useState({ name: "", email: "", phone: "", service: "", message: "" });
    const [checked, setChecked] = useState(false);
    const ref = useRef<HTMLElement>(null);

    useEffect(() => {
        const el = ref.current; if (!el) return;
        const obs = new IntersectionObserver(([e]) => {
            if (e.isIntersecting) el.querySelectorAll(".reveal,.reveal-left,.reveal-right").forEach(c => c.classList.add("revealed"));
        }, { threshold: 0.1 });
        obs.observe(el);
        return () => obs.disconnect();
    }, []);

    const handle = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
        setForm({ ...form, [e.target.name]: e.target.value });

    return (
        <section ref={ref} style={{ background: "var(--white)", padding: "60px 40px 80px", fontFamily: "var(--font)" }}>
            <div style={{ maxWidth: 1200, margin: "0 auto", display: "flex", gap: 48, flexWrap: "wrap" }}>

                {/* Left — Form */}
                <div className="reveal-left" style={{ flex: "0 0 calc(60% - 24px)" }}>
                    <div style={{ background: "#fafaf8", borderRadius: 20, padding: "44px 40px", border: "1px solid rgba(240,165,0,0.1)" }}>
                        <h2 style={{ fontFamily: "var(--font2)", fontSize: "clamp(24px,3vw,32px)", fontWeight: 900, color: "var(--navy)", marginBottom: 8 }}>Send Us A Message</h2>
                        <p style={{ fontSize: 14, color: "#888", lineHeight: 1.8, marginBottom: 28 }}>Fill out the form below and our publishing team will reach out within 24 hours.</p>

                        <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
                            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
                                <input className="nybp-input" name="name" placeholder="Full Name *" value={form.name} onChange={handle} style={{ background: "#fff" }} />
                                <input className="nybp-input" name="email" type="email" placeholder="Email Address *" value={form.email} onChange={handle} style={{ background: "#fff" }} />
                            </div>
                            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
                                <input className="nybp-input" name="phone" type="tel" placeholder="Phone Number" value={form.phone} onChange={handle} style={{ background: "#fff" }} />
                                <select className="nybp-input" name="service" value={form.service} onChange={handle} style={{ background: "#fff", color: form.service ? "#222" : "#999", cursor: "pointer" }}>
                                    <option value="" disabled>Select Service Interested In</option>
                                    {servicesList.map(s => <option key={s} value={s}>{s}</option>)}
                                </select>
                            </div>
                            <textarea className="nybp-input" name="message" placeholder="Tell us about your book or project..." value={form.message} onChange={handle} style={{ minHeight: 150, background: "#fff" }} />

                            {/* Captcha */}
                            <div style={{ display: "flex", alignItems: "center", gap: 12, border: "1.5px solid #ddd", borderRadius: 10, padding: "14px 18px", background: "#fff" }}>
                                <div onClick={() => setChecked(!checked)} style={{
                                    width: 22, height: 22, border: `2px solid ${checked ? "#4caf50" : "#aaa"}`, borderRadius: 5,
                                    background: checked ? "#4caf50" : "#fff", display: "flex", alignItems: "center", justifyContent: "center",
                                    color: "#fff", fontSize: 13, transition: "all 0.2s", cursor: "pointer", flexShrink: 0,
                                }}>
                                    {checked ? "✓" : ""}
                                </div>
                                <span style={{ fontSize: 13, color: "#555", flex: 1 }}>I'm not a robot</span>
                                <span style={{ fontSize: 9, color: "#aaa", textAlign: "center", lineHeight: 1.5, flexShrink: 0 }}>🔒<br />reCAPTCHA</span>
                            </div>

                            <button className="btn-accent" style={{ alignSelf: "flex-start", borderRadius: 10, padding: "16px 48px", fontSize: 15, fontWeight: 800, border: "none", cursor: "pointer", letterSpacing: 0.5 }}>
                                Submit Inquiry
                            </button>
                        </div>
                    </div>
                </div>

                {/* Right — Process Steps */}
                <div className="reveal-right" style={{ flex: 1 }}>
                    <h2 style={{ fontFamily: "var(--font2)", fontSize: "clamp(24px,3vw,32px)", fontWeight: 900, color: "var(--navy)", marginBottom: 8 }}>What Happens Next?</h2>
                    <p style={{ fontSize: 14, color: "#888", lineHeight: 1.8, marginBottom: 32 }}>We've made getting started as simple as possible. Here's how our process works:</p>

                    <div style={{ display: "flex", flexDirection: "column", gap: 24, position: "relative" }}>
                        {/* Vertical line */}
                        <div style={{ position: "absolute", left: 24, top: 20, bottom: 20, width: 2, background: "linear-gradient(180deg,var(--accent),rgba(240,165,0,0.1))", borderRadius: 2 }} />

                        {processSteps.map((s, i) => (
                            <div key={i} style={{ display: "flex", gap: 20, alignItems: "flex-start", position: "relative", zIndex: 1 }}>
                                <div style={{
                                    width: 50, height: 50, borderRadius: "50%", flexShrink: 0,
                                    background: i === 0 ? "linear-gradient(135deg,var(--accent),var(--accent2))" : "#fff",
                                    border: i === 0 ? "none" : "2px solid rgba(240,165,0,0.2)",
                                    display: "flex", alignItems: "center", justifyContent: "center",
                                    fontSize: 16, fontWeight: 900, color: i === 0 ? "var(--navy)" : "var(--accent)", fontFamily: "var(--font2)",
                                    boxShadow: i === 0 ? "0 6px 20px rgba(240,165,0,0.3)" : "none",
                                }}>
                                    {s.step}
                                </div>
                                <div style={{ paddingTop: 4 }}>
                                    <h3 style={{ fontSize: 17, fontWeight: 800, color: "var(--navy)", fontFamily: "var(--font2)", marginBottom: 6 }}>{s.title}</h3>
                                    <p style={{ fontSize: 13.5, color: "#777", lineHeight: 1.8 }}>{s.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Quick guarantee */}
                    <div style={{ marginTop: 36, background: "linear-gradient(135deg,var(--navy),var(--navy2))", borderRadius: 16, padding: "28px 24px", border: "1px solid rgba(240,165,0,0.15)" }}>
                        <h4 style={{ fontSize: 16, fontWeight: 800, color: "var(--accent)", fontFamily: "var(--font2)", marginBottom: 12 }}>Our Promise To You</h4>
                        {[
                            "100% Free Consultation — No obligations, no pressure.",
                            "Your Ideas Stay Protected — Strict NDA upon request.",
                            "Response Within 24 Hours — Guaranteed.",
                        ].map((item, i) => (
                            <div key={i} style={{ display: "flex", alignItems: "flex-start", gap: 10, marginBottom: i < 2 ? 10 : 0 }}>
                                <span style={{ color: "var(--accent)", fontSize: 16, lineHeight: 1.4 }}>✓</span>
                                <span style={{ fontSize: 13.5, color: "rgba(255,255,255,0.8)", lineHeight: 1.6 }}>{item}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

/* ────────────────────────────────────────────
   MAP / LOCATION SECTION
   ──────────────────────────────────────────── */

function LocationSection() {
    const ref = useRef<HTMLElement>(null);
    useEffect(() => {
        const el = ref.current; if (!el) return;
        const obs = new IntersectionObserver(([e]) => {
            if (e.isIntersecting) el.querySelectorAll(".reveal,.reveal-left,.reveal-right").forEach(c => c.classList.add("revealed"));
        }, { threshold: 0.1 });
        obs.observe(el);
        return () => obs.disconnect();
    }, []);

    return (
        <section ref={ref} style={{ background: "#fafaf8", padding: "80px 40px", fontFamily: "var(--font)" }}>
            <div style={{ maxWidth: 1200, margin: "0 auto" }}>

                <div className="reveal" style={{ textAlign: "center", marginBottom: 48 }}>
                    <p className="section-eyebrow" style={{ color: "var(--navy2)" }}>Our Office</p>
                    <h2 className="section-title">Visit Our Headquarters</h2>
                </div>

                <div style={{ display: "flex", gap: 32, alignItems: "stretch", flexWrap: "wrap" }}>

                    {/* Map Area */}
                    <div className="reveal-left" style={{ flex: "0 0 calc(65% - 16px)", minHeight: 420, borderRadius: 20, overflow: "hidden", position: "relative", border: "3px solid rgba(240,165,0,0.15)" }}>
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3024.2219901290355!2d-74.01204368459418!3d40.70699597933289!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25a22a809c555%3A0x3e0edcf0e0c1f8a6!2s42%20Broadway%2C%20New%20York%2C%20NY%2010004!5e0!3m2!1sen!2sus!4v1635959440000!5m2!1sen!2sus"
                            width="100%" height="100%" style={{ border: 0, display: "block", minHeight: 420, filter: "grayscale(30%) contrast(1.1)" }}
                            allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"
                        />
                    </div>

                    {/* Info Card */}
                    <div className="reveal-right" style={{ flex: 1, display: "flex", flexDirection: "column", gap: 20 }}>

                        <div style={{ background: "var(--white)", borderRadius: 18, padding: "32px 28px", border: "1px solid rgba(240,165,0,0.1)", flex: 1 }}>
                            <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 20 }}>
                                <div style={{ width: 48, height: 48, borderRadius: 12, background: "linear-gradient(135deg,var(--accent),var(--accent2))", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 20 }}>📍</div>
                                <div>
                                    <h3 style={{ fontSize: 18, fontWeight: 800, color: "var(--navy)", fontFamily: "var(--font2)" }}>New York Office</h3>
                                    <span style={{ fontSize: 12, fontWeight: 700, color: "var(--accent)", textTransform: "uppercase", letterSpacing: 1 }}>Headquarters</span>
                                </div>
                            </div>

                            <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
                                {[
                                    { icon: "🏢", label: "Address", value: "42 Broadway, 12th Floor\nNew York, NY 10004" },
                                    { icon: "📞", label: "Phone", value: "(855) 384-7020" },
                                    { icon: "✉️", label: "Email", value: "info@nybookpublishers.com" },
                                    { icon: "🕒", label: "Business Hours", value: "Mon - Fri: 9:00 AM - 6:00 PM EST\nSat: 10:00 AM - 2:00 PM EST" },
                                ].map((item, i) => (
                                    <div key={i} style={{ display: "flex", gap: 12, alignItems: "flex-start" }}>
                                        <span style={{ fontSize: 16 }}>{item.icon}</span>
                                        <div>
                                            <span style={{ fontSize: 11, fontWeight: 700, color: "var(--accent)", textTransform: "uppercase", letterSpacing: 1, display: "block", marginBottom: 2 }}>{item.label}</span>
                                            <span style={{ fontSize: 13.5, color: "#555", lineHeight: 1.6, whiteSpace: "pre-line" }}>{item.value}</span>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <a href="https://maps.google.com/?q=42+Broadway+New+York+NY+10004" target="_blank" rel="noopener noreferrer" className="btn-navy" style={{ textAlign: "center", padding: "14px 24px", textDecoration: "none", borderRadius: 12 }}>
                            Get Directions →
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}

/* ────────────────────────────────────────────
   FAQ MINI SECTION
   ──────────────────────────────────────────── */

const contactFaqs = [
    { q: "How quickly will I hear back after submitting the form?", a: "We respond to all inquiries within 24 hours, Monday through Saturday. For urgent matters, call us directly at (855) 384-7020 for an immediate response." },
    { q: "Is the consultation really free?", a: "Absolutely. Our initial 30-minute consultation is 100% free with no obligations. We'll discuss your project, answer your questions, and provide honest guidance — no strings attached." },
    { q: "Do I need a finished manuscript to contact you?", a: "Not at all. Whether you have a complete manuscript, a rough draft, or just an idea, we're here to help. Our ghostwriting team can assist you from the very first page." },
    { q: "Will my ideas be kept confidential?", a: "Yes. We take your intellectual property seriously. We're happy to sign an NDA before discussing your project to ensure your ideas remain fully protected." },
];

function ContactFAQ() {
    const [open, setOpen] = useState<number | null>(null);
    const ref = useRef<HTMLElement>(null);
    useEffect(() => {
        const el = ref.current; if (!el) return;
        const obs = new IntersectionObserver(([e]) => {
            if (e.isIntersecting) el.querySelectorAll(".reveal").forEach(c => c.classList.add("revealed"));
        }, { threshold: 0.1 });
        obs.observe(el);
        return () => obs.disconnect();
    }, []);

    return (
        <section ref={ref} style={{ background: "var(--gradient-dark)", padding: "80px 40px", fontFamily: "var(--font)", position: "relative", overflow: "hidden" }}>
            <div style={{ position: "absolute", top: "30%", left: "50%", transform: "translateX(-50%)", width: 500, height: 250, background: "radial-gradient(ellipse,rgba(240,165,0,0.05),transparent)", pointerEvents: "none" }} />

            <div className="reveal" style={{ textAlign: "center", marginBottom: 48 }}>
                <p className="section-eyebrow">Common Questions</p>
                <h2 className="section-title-accent" style={{ fontFamily: "var(--font2)" }}>Before You Reach Out</h2>
            </div>

            <div style={{ maxWidth: 780, margin: "0 auto", display: "flex", flexDirection: "column", gap: 14 }}>
                {contactFaqs.map((faq, i) => (
                    <div key={i} className="nybp-faq-item reveal" style={{ borderRadius: open === i ? 16 : 40 }}>
                        <button className="nybp-faq-question" onClick={() => setOpen(open === i ? null : i)}
                            style={{ width: "100%", background: "transparent", border: "none", display: "flex", alignItems: "center", justifyContent: "space-between", padding: "18px 26px", gap: 16, textAlign: "left", fontFamily: "var(--font)", fontSize: 14, fontWeight: 600, color: open === i ? "var(--accent)" : "var(--white)" }}>
                            <span>{faq.q}</span>
                            <span className="nybp-faq-icon" style={{ transform: open === i ? "rotate(45deg)" : "none", background: open === i ? "var(--accent)" : "transparent", color: open === i ? "var(--navy)" : "var(--accent)" }}>+</span>
                        </button>
                        <div style={{ maxHeight: open === i ? 280 : 0, overflow: "hidden", transition: "max-height 0.38s ease, padding 0.25s" }}>
                            <p style={{ fontSize: 13.5, color: "var(--text-muted)", lineHeight: 1.9, padding: "0 26px 20px" }}>{faq.a}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}

/* ────────────────────────────────────────────
   MAIN PAGE
   ──────────────────────────────────────────── */

export default function ContactPage() {
    return (
        <>
            <LightningCursor />
            <Navbar />

            <main>
                <ContactHero />
                <ContactMethods />
                <ContactFormSection />
                <LocationSection />
                <ContactFAQ />
            </main>

            <FooterSection />
        </>
    );
}