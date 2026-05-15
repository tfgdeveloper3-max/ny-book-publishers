"use client";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import { FooterSection } from "@/components/Footer";
import LightningCursor from "@/components/Lightningcursor";

/* ────────────────────────────────────────────
   DATA
   ──────────────────────────────────────────── */

const editingTypes = [
    { emoji: "🧱", title: "Developmental Editing", desc: "The big-picture edit. We analyze structure, plot, pacing, character arcs, and theme. We reshape the foundation of your book so the story stands unshakable.", badge: "Structure" },
    { emoji: "✍️", title: "Line Editing", desc: "The art of the sentence. We refine voice, rhythm, tone, and flow—tightening prose, eliminating awkward phrasing, and elevating every paragraph to its best version.", badge: "Style" },
    { emoji: "🔍", title: "Copy Editing", desc: "The precision pass. We correct grammar, syntax, punctuation, and internal consistency. Every error, contradiction, and awkward construction is caught and fixed.", badge: "Accuracy" },
    { emoji: "🐛", title: "Proofreading", desc: "The final sweep. We hunt down typos, missing punctuation, formatting errors, and lingering mistakes before your book goes to print or goes live.", badge: "Polish" },
    { emoji: "📋", title: "Manuscript Critique", desc: "A comprehensive written evaluation of your manuscript's strengths and weaknesses. We provide honest, actionable feedback to guide your revisions before a full edit.", badge: "Feedback" },
    { emoji: "📬", title: "Query Letter & Synopsis Editing", desc: "Your pitch needs to be perfect. We edit query letters, synopses, and book proposals to hook agents and publishers from the first sentence.", badge: "Publishing" },
];

const features = [
    { icon: "📝", title: "Track Changes Delivery", desc: "Every edit is delivered in Track Changes format so you see exactly what was changed, why, and can accept or reject each modification. Full transparency, full control." },
    { icon: "🔄", title: "Two-Round Revision System", desc: "Most editing packages include two rounds of editing. We don't just mark up your manuscript and disappear—we work with you until it's right." },
    { icon: "📚", title: "Genre-Matched Editors", desc: "Your romance editor understands tropes. Your thriller editor knows pacing. We match your manuscript to an editor who specializes in your genre." },
    { icon: "📐", title: "Style Guide Adherence", desc: "Chicago Manual of Style, AP, APA, or house style—we follow the appropriate style guide meticulously and maintain a custom style sheet for your manuscript." },
    { icon: "🛡️", title: "Voice Preservation", desc: "A great editor makes your writing sound more like you, not less. We preserve and enhance your unique voice while eliminating the rough edges." },
    { icon: "🖨️", title: "Publish-Ready Formatting", desc: "We don't just edit text—we ensure your manuscript is formatted to industry standards for traditional submission or self-publishing platforms.", badge: "" },
];

const processSteps = [
    { step: "01", title: "Manuscript Evaluation & Editor Matching", desc: "Submit your manuscript. We evaluate its needs, determine the right level of editing, and match you with a genre-specialist editor who understands your vision." },
    { step: "02", title: "The First Edit Pass", desc: "Your editor performs the primary edit—developmental, line, or copy—marking changes, leaving comments, and shaping the manuscript using Track Changes." },
    { step: "03", title: "Author Review & Revision", desc: "You review every edit, accept or reject changes, and revise accordingly. This collaborative back-and-forth ensures the final manuscript reflects your vision." },
    { step: "04", title: "Final Polish & Delivery", desc: "A second editorial pass catches anything missed and refines your revisions. You receive a clean, publish-ready manuscript along with an editorial summary letter." },
];

const stats = [
    { number: "10,000+", label: "Manuscripts Edited" },
    { number: "300+", label: "Traditional Publishing Deals" },
    { number: "98%", label: "Author Satisfaction Rate" },
    { number: "40+", label: "Genres Covered" },
];

const faqs = [
    { q: "What's the difference between developmental editing and copy editing?", a: "Developmental editing focuses on the big picture—plot, structure, character arcs, pacing, and theme. Copy editing focuses on the sentence level—grammar, syntax, punctuation, and consistency. Most manuscripts need both, typically starting with developmental." },
    { q: "How do I know which type of editing my book needs?", a: "Submit your manuscript for a free evaluation. We'll assess its current state and recommend the appropriate level of editing. Most first-drafts benefit from developmental editing first, followed by line editing and then copy editing." },
    { q: "Will the editor change my voice or style?", a: "Never. A professional editor enhances your voice—they don't replace it. We eliminate weaknesses while preserving the stylistic choices that make your writing uniquely yours. Every change is a suggestion you can accept or reject." },
    { q: "How long does book editing take?", a: "Developmental editing typically takes 4–6 weeks. Line editing takes 3–5 weeks. Copy editing takes 2–4 weeks. Proofreading takes 1–2 weeks. Full editing packages (developmental through proofreading) take 10–16 weeks depending on manuscript length and condition." },
    { q: "Do you edit both fiction and non-fiction?", a: "Yes. We edit novels, short story collections, memoirs, biographies, self-help books, business books, academic texts, and more. Each is assigned to an editor with expertise in that specific category." },
    { q: "What style guide do you follow?", a: "We default to the Chicago Manual of Style for books (industry standard), but can follow AP, APA, MLA, or any house style guide you specify. We also create a custom style sheet for your manuscript to ensure internal consistency." },
    { q: "Can I talk to my editor during the process?", a: "Absolutely. We encourage communication. You'll have direct access to your editor for questions, clarifications, and discussions throughout the editing process." },
    { q: "Who owns the rights to my edited manuscript?", a: "You do. 100%. All intellectual property, copyrights, and creative rights remain entirely yours. Our editors never claim authorship or ownership of any part of your work." },
];

/* ────────────────────────────────────────────
   HERO SECTION
   ──────────────────────────────────────────── */

function EditingHero() {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext("2d")!;
        let w = canvas.offsetWidth, h = canvas.offsetHeight;
        canvas.width = w; canvas.height = h;

        const particles = Array.from({ length: 55 }, () => ({
            x: Math.random() * w, y: Math.random() * h,
            r: Math.random() * 1.3 + 0.4, speed: Math.random() * 0.18 + 0.05,
            opacity: Math.random(), delta: (Math.random() - 0.5) * 0.01,
        }));

        let raf: number;
        const draw = () => {
            ctx.clearRect(0, 0, w, h);
            particles.forEach(p => {
                p.opacity += p.delta;
                if (p.opacity <= 0.1 || p.opacity >= 0.7) p.delta *= -1;
                p.y -= p.speed; p.x += Math.sin(p.y * 0.004) * 0.3;
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
        <section style={{ background: "var(--gradient-dark)", minHeight: 520, position: "relative", overflow: "hidden", fontFamily: "var(--font)" }}>
            <canvas ref={canvasRef} style={{ position: "absolute", inset: 0, width: "100%", height: "100%", pointerEvents: "none", zIndex: 0 }} />
            <div style={{ position: "absolute", top: -180, right: -120, width: 480, height: 480, borderRadius: "50%", border: "1px solid rgba(240,165,0,0.05)", pointerEvents: "none" }} />

            <div style={{ position: "relative", zIndex: 1, maxWidth: 1320, margin: "0 auto", padding: "120px 40px 100px", textAlign: "center" }}>
                <div style={{ display: "inline-flex", alignItems: "center", gap: 10, background: "rgba(240,165,0,0.1)", border: "1px solid rgba(240,165,0,0.3)", borderRadius: 40, padding: "8px 20px", marginBottom: 28 }}>
                    <span style={{ width: 8, height: 8, borderRadius: "50%", background: "var(--accent)", animation: "pulse 2s infinite" }} />
                    <span style={{ fontSize: 12, fontWeight: 700, color: "var(--accent)", textTransform: "uppercase", letterSpacing: 2 }}>Editing Services</span>
                </div>

                <h1 style={{ fontFamily: "var(--font2)", fontSize: "clamp(40px,7vw,78px)", fontWeight: 900, color: "var(--white)", lineHeight: 0.9, margin: "0 0 24px", letterSpacing: -2 }}>
                    Professional<br /><span style={{ color: "var(--accent)" }}>Book Editing</span><br />Services
                </h1>

                <p style={{ fontSize: "clamp(15px,1.8vw,19px)", color: "var(--text-muted)", lineHeight: 1.9, maxWidth: 660, margin: "0 auto 36px" }}>
                    Every great book is edited. From developmental structure to the final proofread, our professional editors transform rough drafts into polished, publish-ready masterpieces.
                </p>

                <div style={{ display: "flex", gap: 14, justifyContent: "center", flexWrap: "wrap" }}>
                    <Link href="/contact" className="btn-accent" style={{ fontSize: 15, padding: "16px 36px", textDecoration: "none" }}>Get Free Evaluation</Link>
                    <a href="tel:8553847020" className="btn-outline-white" style={{ fontSize: 15, padding: "16px 36px", textDecoration: "none" }}>📞 (855) 384-7020</a>
                </div>
            </div>
        </section>
    );
}

/* ────────────────────────────────────────────
   OVERVIEW SECTION
   ──────────────────────────────────────────── */

function OverviewSection() {
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
        <section ref={ref} style={{ background: "var(--white)", padding: "80px 40px", fontFamily: "var(--font)" }}>
            <div style={{ maxWidth: 1200, margin: "0 auto", display: "flex", gap: 60, alignItems: "center", flexWrap: "wrap" }}>

                <div className="reveal-left" style={{ flex: "0 0 420px", position: "relative" }}>
                    <div style={{ borderRadius: 20, overflow: "hidden", boxShadow: "0 24px 80px rgba(0,0,0,0.12)", border: "3px solid rgba(240,165,0,0.15)" }}>
                        <img src="/images/WCU-Left.webp" alt="Book Editing" style={{ width: "100%", height: 520, objectFit: "cover", display: "block" }} />
                    </div>
                    <div style={{ position: "absolute", bottom: -20, right: -20, background: "linear-gradient(135deg,var(--accent),var(--accent2))", borderRadius: 14, padding: "16px 24px", boxShadow: "0 8px 30px rgba(240,165,0,0.4)", border: "3px solid var(--white)" }}>
                        <div style={{ fontSize: 24, fontWeight: 900, color: "var(--navy)", fontFamily: "var(--font2)", lineHeight: 1 }}>✅</div>
                        <div style={{ fontSize: 10, fontWeight: 700, color: "var(--navy)", textTransform: "uppercase", letterSpacing: 1 }}>Publish-Ready</div>
                    </div>
                </div>

                <div className="reveal-right" style={{ flex: 1, minWidth: 300 }}>
                    <p className="section-eyebrow">Beyond Spell Check</p>
                    <h2 style={{ fontFamily: "var(--font2)", fontSize: "clamp(28px,3.5vw,42px)", fontWeight: 900, color: "var(--navy)", lineHeight: 1.2, marginBottom: 24 }}>
                        Your Story Deserves<br /><span style={{ color: "var(--accent)" }}>Expert Polishing</span>.
                    </h2>
                    <div style={{ width: 60, height: 3, background: "var(--accent)", borderRadius: 2, marginBottom: 24 }} />

                    <p style={{ fontSize: 15, color: "#555", lineHeight: 1.9, marginBottom: 20 }}>
                        Writing a book is an act of creation. Editing is an act of transformation. The raw manuscript you've poured your heart into contains a great book—but that book needs to be uncovered, refined, and polished before it's ready for readers.
                    </p>
                    <p style={{ fontSize: 15, color: "#555", lineHeight: 1.9, marginBottom: 20 }}>
                        Most first-time authors don't realize that unedited manuscripts get rejected not because the story is bad, but because the pacing drags, the dialogue feels unnatural, the structure sags in the middle, or the prose isn't tight enough. These are fixable problems—with the right editor.
                    </p>
                    <p style={{ fontSize: 15, color: "#555", lineHeight: 1.9, marginBottom: 32 }}>
                        Our professional book editors don't just fix commas. They understand narrative architecture, character psychology, genre conventions, and reader expectations. They see what you can't—because you're too close to your own work. And they make your book the best version of itself.
                    </p>

                    <div style={{ display: "flex", gap: 14, flexWrap: "wrap" }}>
                        <Link href="/contact" className="btn-accent" style={{ textDecoration: "none" }}>Get Free Evaluation</Link>
                        <a href="#editing-types" className="btn-navy" style={{ textDecoration: "none" }}>Browse Editing Types</a>
                    </div>
                </div>
            </div>
        </section>
    );
}

/* ────────────────────────────────────────────
   STATS BAR
   ──────────────────────────────────────────── */

function StatsBar() {
    const ref = useRef<HTMLElement>(null);
    useEffect(() => {
        const el = ref.current; if (!el) return;
        const obs = new IntersectionObserver(([e]) => {
            if (e.isIntersecting) el.querySelectorAll(".reveal").forEach(c => c.classList.add("revealed"));
        }, { threshold: 0.2 });
        obs.observe(el);
        return () => obs.disconnect();
    }, []);

    return (
        <section ref={ref} style={{ background: "linear-gradient(135deg, #0d1240 0%, #1a1f5e 100%)", padding: "60px 40px", fontFamily: "var(--font)" }}>
            <div className="reveal" style={{ maxWidth: 1200, margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 32, textAlign: "center" }}>
                {stats.map((s, i) => (
                    <div key={i}>
                        <div style={{ fontSize: "clamp(32px,4vw,48px)", fontWeight: 900, color: "var(--accent)", fontFamily: "var(--font2)", lineHeight: 1, marginBottom: 8 }}>{s.number}</div>
                        <div style={{ fontSize: 13, color: "rgba(255,255,255,0.6)", fontWeight: 500, lineHeight: 1.5, textTransform: "uppercase", letterSpacing: 1 }}>{s.label}</div>
                    </div>
                ))}
            </div>
        </section>
    );
}

/* ────────────────────────────────────────────
   EDITING TYPES
   ──────────────────────────────────────────── */

function EditingTypesSection() {
    const ref = useRef<HTMLElement>(null);
    useEffect(() => {
        const el = ref.current; if (!el) return;
        const obs = new IntersectionObserver(([e]) => {
            if (e.isIntersecting) el.querySelectorAll(".reveal").forEach(c => c.classList.add("revealed"));
        }, { threshold: 0.05 });
        obs.observe(el);
        return () => obs.disconnect();
    }, []);

    return (
        <section id="editing-types" ref={ref} style={{ background: "#fafaf8", padding: "80px 40px", fontFamily: "var(--font)" }}>
            <style>{`
        .edit-card {
          background: #fff;
          border: 2px solid rgba(13,18,64,0.2);
          border-radius: 20px;
          padding: 32px 28px;
          transition: all 0.35s cubic-bezier(0.16,1,0.3,1);
          position: relative;
          overflow: hidden;
        }
        .edit-card::before {
          content: '';
          position: absolute;
          top: 0; left: 0; right: 0;
          height: 4px;
          background: linear-gradient(90deg, var(--accent), var(--accent2));
          transform: scaleX(0);
          transform-origin: left;
          transition: transform 0.35s ease;
          z-index: 2;
        }
        .edit-card:hover::before { transform: scaleX(1); }
        .edit-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 20px 48px rgba(0,0,0,0.12);
          border-color: rgba(240,165,0,0.4);
          background: linear-gradient(160deg, #0d1240 0%, #1a1f5e 100%);
        }
        .edit-card:hover .s-emoji { transform: scale(1.1); background: rgba(240,165,0,0.15); }
        .edit-card:hover .s-title { color: var(--accent) !important; }
        .edit-card:hover .s-desc { color: rgba(255,255,255,0.7) !important; }
        .edit-card:hover .s-badge { border-color: rgba(240,165,0,0.3) !important; color: var(--accent) !important; background: rgba(240,165,0,0.1) !important; }
      `}</style>

            <div style={{ maxWidth: 1200, margin: "0 auto" }}>
                <div className="reveal" style={{ textAlign: "center", marginBottom: 56 }}>
                    <p className="section-eyebrow" style={{ color: "var(--navy2)" }}>Editing Levels</p>
                    <h2 className="section-title">Types of Book Editing We Offer</h2>
                    <p style={{ fontSize: 15, color: "#888", maxWidth: 580, margin: "12px auto 0", lineHeight: 1.8 }}>
                        From big-picture structural overhauls to the final typo sweep, we offer every level of editing your manuscript needs.
                    </p>
                </div>

                <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 24 }}>
                    {editingTypes.map((g, i) => (
                        <div key={i} className="edit-card reveal">
                            <div style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: 16 }}>
                                <div className="s-emoji" style={{ width: 56, height: 56, borderRadius: 14, background: "rgba(240,165,0,0.08)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 26, flexShrink: 0, transition: "all 0.3s" }}>
                                    {g.emoji}
                                </div>
                                <div style={{ flex: 1 }}>
                                    <h3 className="s-title" style={{ fontSize: 18, fontWeight: 900, color: "var(--navy)", fontFamily: "var(--font2)", lineHeight: 1.2, margin: 0, transition: "color 0.3s" }}>{g.title}</h3>
                                </div>
                                <span className="s-badge" style={{ display: "inline-block", fontSize: 10, fontWeight: 700, color: "var(--navy)", background: "rgba(240,165,0,0.08)", border: "1px solid rgba(240,165,0,0.2)", padding: "3px 12px", borderRadius: 20, transition: "all 0.3s" }}>{g.badge}</span>
                            </div>
                            <p className="s-desc" style={{ fontSize: 14, color: "#666", lineHeight: 1.85, margin: 0, transition: "color 0.3s" }}>{g.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

/* ────────────────────────────────────────────
   WHY PROFESSIONAL EDITING MATTERS
   ──────────────────────────────────────────── */

function WhySection() {
    const ref = useRef<HTMLElement>(null);
    useEffect(() => {
        const el = ref.current; if (!el) return;
        const obs = new IntersectionObserver(([e]) => {
            if (e.isIntersecting) el.querySelectorAll(".reveal,.reveal-left,.reveal-right").forEach(c => c.classList.add("revealed"));
        }, { threshold: 0.1 });
        obs.observe(el);
        return () => obs.disconnect();
    }, []);

    const reasons = [
        { num: "01", title: "You're Too Close To Your Own Work", desc: "After months or years of writing, you see what you meant to write—not what's actually on the page. A professional editor provides the objective eye you need." },
        { num: "02", title: "Readers Notice Mistakes", desc: "A single typo breaks immersion. A plot hole destroys credibility. Inconsistent characters lose empathy. Readers may not know editing terminology, but they feel every unedited flaw." },
        { num: "03", title: "Agents & Publishers Demand Quality", desc: "Traditional publishers reject manuscripts with editing problems in the first chapter. Self-published readers leave 1-star reviews for poor editing. Professional editing isn't optional—it's essential." },
        { num: "04", title: "Great Editing Elevates Good Writing", desc: "The difference between a good book and a great one often comes down to editing. Tighter prose, stronger structure, and clearer pacing transform a readable book into an unforgettable one." },
    ];

    return (
        <section ref={ref} style={{ background: "var(--white)", padding: "80px 40px", fontFamily: "var(--font)" }}>
            <div style={{ maxWidth: 1200, margin: "0 auto", display: "flex", gap: 60, alignItems: "flex-start", flexWrap: "wrap" }}>

                <div className="reveal-left" style={{ flex: "0 0 400px" }}>
                    <p className="section-eyebrow" style={{ color: "var(--navy2)" }}>Why It Matters</p>
                    <h2 style={{ fontFamily: "var(--font2)", fontSize: "clamp(28px,3.5vw,42px)", fontWeight: 900, color: "var(--navy)", lineHeight: 1.2, marginBottom: 20 }}>
                        Why Professional Editing<br />Is <span style={{ color: "var(--accent)" }}>Non-Negotiable</span>.
                    </h2>
                    <div style={{ width: 60, height: 3, background: "var(--accent)", borderRadius: 2, marginBottom: 20 }} />
                    <p style={{ fontSize: 15, color: "#666", lineHeight: 1.9, marginBottom: 28 }}>
                        Even the greatest authors work with editors. Stephen King, J.K. Rowling, Toni Morrison—all relied on professional editors to shape their manuscripts into masterpieces.
                    </p>
                    <div style={{ background: "linear-gradient(135deg,var(--accent),var(--accent2))", borderRadius: 16, padding: "28px", position: "relative", overflow: "hidden" }}>
                        <div style={{ position: "absolute", top: -20, right: -20, width: 100, height: 100, borderRadius: "50%", background: "rgba(255,255,255,0.1)" }} />
                        <div style={{ fontSize: "clamp(36px,5vw,52px)", fontWeight: 900, color: "var(--navy)", fontFamily: "var(--font2)", lineHeight: 1, marginBottom: 4 }}>80%</div>
                        <div style={{ fontSize: 13, color: "rgba(13,18,64,0.7)", fontWeight: 600 }}>of traditionally published books go through 3+ rounds of editing</div>
                    </div>
                </div>

                <div className="reveal-right" style={{ flex: 1, minWidth: 300, display: "flex", flexDirection: "column", gap: 20 }}>
                    {reasons.map((r, i) => (
                        <div key={i} style={{ background: "#fafaf8", borderRadius: 16, padding: "28px", border: "1px solid rgba(13,18,64,0.08)", borderLeft: "4px solid var(--accent)", transition: "all 0.3s" }}>
                            <div style={{ display: "flex", alignItems: "flex-start", gap: 18 }}>
                                <div style={{ width: 44, height: 44, borderRadius: 12, background: "rgba(240,165,0,0.1)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, fontSize: 16, fontWeight: 900, color: "var(--accent)", fontFamily: "var(--font2)" }}>
                                    {r.num}
                                </div>
                                <div>
                                    <h3 style={{ fontSize: 17, fontWeight: 800, color: "var(--navy)", fontFamily: "var(--font2)", marginBottom: 8, lineHeight: 1.3 }}>{r.title}</h3>
                                    <p style={{ fontSize: 13.5, color: "#666", lineHeight: 1.85, margin: 0 }}>{r.desc}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

/* ────────────────────────────────────────────
   FEATURES (What's Included)
   ──────────────────────────────────────────── */

function FeaturesSection() {
    const ref = useRef<HTMLElement>(null);
    useEffect(() => {
        const el = ref.current; if (!el) return;
        const obs = new IntersectionObserver(([e]) => {
            if (e.isIntersecting) el.querySelectorAll(".reveal").forEach(c => c.classList.add("revealed"));
        }, { threshold: 0.05 });
        obs.observe(el);
        return () => obs.disconnect();
    }, []);

    return (
        <section ref={ref} style={{ background: "#fafaf8", padding: "80px 40px", fontFamily: "var(--font)" }}>
            <style>{`
        .feat-card {
          background: #fff;
          border: 2px solid rgba(13,18,64,0.2);
          border-radius: 16px;
          padding: 28px 24px;
          transition: all 0.35s cubic-bezier(0.16,1,0.3,1);
          position: relative;
          overflow: hidden;
        }
        .feat-card::before {
          content: '';
          position: absolute;
          top: 0; left: 0; right: 0;
          height: 4px;
          background: linear-gradient(90deg, var(--accent), var(--accent2));
          transform: scaleX(0);
          transform-origin: left;
          transition: transform 0.35s ease;
          z-index: 2;
        }
        .feat-card:hover::before { transform: scaleX(1); }
        .feat-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 20px 48px rgba(0,0,0,0.1);
          border-color: rgba(240,165,0,0.4);
          background: linear-gradient(160deg, #0d1240 0%, #1a1f5e 100%);
        }
        .feat-card:hover .feat-icon { background: rgba(240,165,0,0.15); transform: scale(1.05); }
        .feat-card:hover .feat-title { color: var(--accent) !important; }
        .feat-card:hover .feat-desc { color: rgba(255,255,255,0.7) !important; }
      `}</style>

            <div style={{ maxWidth: 1200, margin: "0 auto" }}>
                <div className="reveal" style={{ textAlign: "center", marginBottom: 56 }}>
                    <p className="section-eyebrow" style={{ color: "var(--navy2)" }}>What's Included</p>
                    <h2 className="section-title">What You Get With Our Book Editing</h2>
                    <p style={{ fontSize: 15, color: "#888", maxWidth: 580, margin: "12px auto 0", lineHeight: 1.8 }}>
                        Professional editing is more than red ink on a page. Here's what comes standard with every editing package.
                    </p>
                </div>

                <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 24 }}>
                    {features.map((f, i) => (
                        <div key={i} className="feat-card reveal">
                            <div className="feat-icon" style={{ width: 52, height: 52, borderRadius: 14, background: "rgba(240,165,0,0.08)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 24, marginBottom: 18, transition: "all 0.3s" }}>
                                {f.icon}
                            </div>
                            <h3 className="feat-title" style={{ fontSize: 18, fontWeight: 800, color: "var(--navy)", fontFamily: "var(--font2)", marginBottom: 10, transition: "color 0.3s" }}>{f.title}</h3>
                            <p className="feat-desc" style={{ fontSize: 13.5, color: "#666", lineHeight: 1.85, margin: 0, transition: "color 0.3s" }}>{f.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

/* ────────────────────────────────────────────
   PROCESS TIMELINE
   ──────────────────────────────────────────── */

function ProcessSection() {
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
        <section ref={ref} style={{ background: "var(--white)", padding: "80px 40px", fontFamily: "var(--font)" }}>
            <div style={{ maxWidth: 900, margin: "0 auto" }}>
                <div className="reveal" style={{ textAlign: "center", marginBottom: 56 }}>
                    <p className="section-eyebrow" style={{ color: "var(--navy2)" }}>How It Works</p>
                    <h2 className="section-title">Our Book Editing Process</h2>
                    <p style={{ fontSize: 15, color: "#888", maxWidth: 520, margin: "12px auto 0", lineHeight: 1.8 }}>
                        A structured, collaborative process designed to give your manuscript the care and attention it deserves.
                    </p>
                </div>

                <div style={{ position: "relative" }}>
                    <div style={{ position: "absolute", left: "50%", top: 0, bottom: 0, width: 3, background: "linear-gradient(180deg,var(--accent),rgba(240,165,0,0.1))", transform: "translateX(-50%)", borderRadius: 2 }} />

                    {processSteps.map((s, i) => {
                        const isLeft = i % 2 === 0;
                        return (
                            <div key={i} className="reveal" style={{ display: "flex", alignItems: "center", flexDirection: isLeft ? "row" : "row-reverse", marginBottom: i < processSteps.length - 1 ? 48 : 0, position: "relative" }}>
                                <div style={{ flex: 1, padding: isLeft ? "0 48px 0 0" : "0 0 0 48px" }}>
                                    <div style={{ background: "#fafaf8", borderRadius: 16, padding: "28px", boxShadow: "0 8px 32px rgba(0,0,0,0.04)", border: "1px solid rgba(240,165,0,0.1)", borderTop: "3px solid var(--accent)" }}>
                                        <span style={{ fontSize: 12, fontWeight: 800, color: "var(--accent)", letterSpacing: 2, textTransform: "uppercase", display: "block", marginBottom: 6 }}>{s.step}</span>
                                        <h3 style={{ fontSize: 18, fontWeight: 800, color: "var(--navy)", fontFamily: "var(--font2)", marginBottom: 10 }}>{s.title}</h3>
                                        <p style={{ fontSize: 13.5, color: "#666", lineHeight: 1.85, margin: 0 }}>{s.desc}</p>
                                    </div>
                                </div>
                                <div style={{ width: 48, height: 48, borderRadius: "50%", flexShrink: 0, background: "linear-gradient(135deg,var(--accent),var(--accent2))", display: "flex", alignItems: "center", justifyContent: "center", boxShadow: "0 4px 20px rgba(240,165,0,0.3)", border: "4px solid var(--white)", position: "relative", zIndex: 2, fontSize: 14, fontWeight: 900, color: "var(--navy)", fontFamily: "var(--font2)" }}>
                                    {s.step}
                                </div>
                                <div style={{ flex: 1 }} />
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}

/* ────────────────────────────────────────────
   GENRES SECTION
   ──────────────────────────────────────────── */

function GenresSection() {
    const ref = useRef<HTMLElement>(null);
    useEffect(() => {
        const el = ref.current; if (!el) return;
        const obs = new IntersectionObserver(([e]) => {
            if (e.isIntersecting) el.querySelectorAll(".reveal").forEach(c => c.classList.add("revealed"));
        }, { threshold: 0.1 });
        obs.observe(el);
        return () => obs.disconnect();
    }, []);

    const genres = [
        "Literary Fiction", "Science Fiction", "Fantasy", "Romance",
        "Mystery & Thriller", "Horror", "Historical Fiction", "Memoir & Autobiography",
        "Self-Help", "Business & Leadership", "True Crime", "Young Adult",
        "Middle Grade", "Children's Books", "Poetry", "Short Story Collections",
        "Essay Collections", "Narrative Non-Fiction", "Religion & Spirituality", "Health & Wellness",
    ];

    return (
        <section ref={ref} style={{ background: "linear-gradient(135deg, #0d1240 0%, #1a1f5e 100%)", padding: "80px 40px", fontFamily: "var(--font)" }}>
            <div style={{ maxWidth: 1100, margin: "0 auto" }}>
                <div className="reveal" style={{ textAlign: "center", marginBottom: 48 }}>
                    <p className="section-eyebrow">Genres</p>
                    <h2 className="section-title-accent" style={{ fontFamily: "var(--font2)" }}>We Edit Every Genre</h2>
                    <p style={{ fontSize: 15, color: "var(--text-muted)", maxWidth: 520, margin: "12px auto 0", lineHeight: 1.8 }}>
                        Genre-specialist editors who understand the conventions, expectations, and reader psychology of your category.
                    </p>
                </div>

                <div className="reveal" style={{ display: "flex", flexWrap: "wrap", gap: 12, justifyContent: "center" }}>
                    {genres.map((g, i) => (
                        <div key={i} style={{ background: "rgba(240,165,0,0.08)", border: "1px solid rgba(240,165,0,0.2)", borderRadius: 30, padding: "10px 22px", fontSize: 13, fontWeight: 600, color: "rgba(255,255,255,0.8)", transition: "all 0.3s", cursor: "default" }}
                            onMouseEnter={e => { e.currentTarget.style.background = "rgba(240,165,0,0.2)"; e.currentTarget.style.borderColor = "rgba(240,165,0,0.5)"; e.currentTarget.style.color = "var(--accent)"; e.currentTarget.style.transform = "translateY(-2px)"; }}
                            onMouseLeave={e => { e.currentTarget.style.background = "rgba(240,165,0,0.08)"; e.currentTarget.style.borderColor = "rgba(240,165,0,0.2)"; e.currentTarget.style.color = "rgba(255,255,255,0.8)"; e.currentTarget.style.transform = "translateY(0)"; }}>
                            {g}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

/* ────────────────────────────────────────────
   FAQ SECTION
   ──────────────────────────────────────────── */

function FAQSection() {
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
            <div style={{ position: "absolute", top: "30%", left: "50%", transform: "translateX(-50%)", width: 600, height: 300, background: "radial-gradient(ellipse,rgba(240,165,0,0.05),transparent)", pointerEvents: "none" }} />

            <div style={{ maxWidth: 780, margin: "0 auto", position: "relative", zIndex: 1 }}>
                <div className="reveal" style={{ textAlign: "center", marginBottom: 48 }}>
                    <p className="section-eyebrow">Common Questions</p>
                    <h2 className="section-title-accent" style={{ fontFamily: "var(--font2)" }}>Book Editing FAQ</h2>
                </div>

                <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
                    {faqs.map((faq, i) => (
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
            </div>
        </section>
    );
}

/* ────────────────────────────────────────────
   CTA SECTION
   ──────────────────────────────────────────── */

function EditingCTA() {
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
        <section ref={ref} style={{ fontFamily: "var(--font)" }}>
            <div style={{ background: "linear-gradient(135deg,var(--accent) 0%,var(--accent2) 100%)", padding: "80px 40px", position: "relative", overflow: "hidden" }}>
                <div style={{ position: "absolute", right: 0, top: 0, bottom: 0, width: "40%", background: "linear-gradient(135deg,transparent,rgba(255,255,255,0.1))", pointerEvents: "none" }} />
                <div style={{ position: "absolute", left: -40, bottom: -40, width: 200, height: 200, borderRadius: "50%", background: "rgba(255,255,255,0.06)", pointerEvents: "none" }} />

                <div style={{ maxWidth: 1100, margin: "0 auto", display: "flex", alignItems: "center", gap: 48, flexWrap: "wrap", position: "relative", zIndex: 1 }}>
                    <div className="reveal-left" style={{ flex: "0 0 280px" }}>
                        <img src="/images/book-3.png" alt="Book Editing" style={{ width: "100%", objectFit: "contain", filter: "drop-shadow(0 24px 60px rgba(0,0,0,0.25))", animation: "floatForm 4s ease-in-out infinite" }} />
                    </div>

                    <div className="reveal-right" style={{ flex: 1 }}>
                        <h2 style={{ fontFamily: "var(--font2)", fontSize: "clamp(28px,4vw,42px)", fontWeight: 900, color: "var(--navy)", lineHeight: 1.2, marginBottom: 20 }}>
                            Ready To Publish A<br /><span style={{ textDecoration: "underline", textDecorationColor: "rgba(13,18,64,0.2)", textUnderlineOffset: 6 }}>Flawless Book</span>?
                        </h2>
                        <p style={{ fontSize: 15, color: "rgba(13,18,64,0.75)", lineHeight: 1.9, marginBottom: 32, maxWidth: 520 }}>
                            Don't let typos, plot holes, or weak prose undermine your story. Get a free manuscript evaluation and let our editors show you what your book can become.
                        </p>
                        <div style={{ display: "flex", gap: 14, flexWrap: "wrap" }}>
                            <Link href="/contact" className="btn-navy" style={{ fontSize: 15, padding: "16px 36px", textDecoration: "none" }}>Get Free Evaluation</Link>
                            <a href="tel:8553847020" className="btn-navy" style={{ fontSize: 15, padding: "16px 36px", textDecoration: "none", background: "rgba(13,18,64,0.15)" }}>📞 (855) 384-7020</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

/* ────────────────────────────────────────────
   MAIN PAGE
   ──────────────────────────────────────────── */

export default function BookEditingPage() {
    return (
        <>
            <LightningCursor />
            <Navbar />

            <main>
                <EditingHero />
                <OverviewSection />
                <StatsBar />
                <EditingTypesSection />
                <WhySection />
                <FeaturesSection />
                <ProcessSection />
                <GenresSection />
                <FAQSection />
                <EditingCTA />
            </main>

            <FooterSection />
        </>
    );
}