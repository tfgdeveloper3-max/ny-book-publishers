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
    { emoji: "🖼️", title: "Picture Book Editing", desc: "Fewer words, higher stakes. We edit for page-turn pacing, visual storytelling potential, read-aloud rhythm, and the delicate balance between text and illustration space.", badge: "Ages 3–8" },
    { emoji: "📖", title: "Chapter Book Editing", desc: "Bridging the gap between picture books and novels. We refine vocabulary, sentence complexity, and chapter cliffhangers that keep newly independent readers turning pages.", badge: "Ages 6–9" },
    { emoji: "🧙", title: "Middle Grade Editing", desc: "Complex plots, deeper themes, and character arcs that resonate with young readers navigating their own coming-of-age. We edit for emotional authenticity and age-appropriate depth.", badge: "Ages 8–12" },
    { emoji: "🎭", title: "Young Adult Editing", desc: "Teenagers demand sophisticated storytelling. We edit for voice authenticity, thematic complexity, pacing that matches teen attention spans, and emotional resonance without condescension.", badge: "Ages 12+" },
    { emoji: "🎵", title: "Rhyme & Meter Editing", desc: "Rhyming picture books require surgical precision. We scan every line for meter consistency, rhyme integrity, read-aloud flow, and natural language that never feels forced.", badge: "Poetry" },
    { emoji: "🛡️", title: "Sensitivity & Appropriateness Review", desc: "We review your manuscript for age-appropriate content, cultural representation, bias, and themes that may require careful handling—ensuring your book is inclusive and responsible.", badge: "Inclusive" },
];

const features = [
    { icon: "📏", title: "Age-Level Readability Analysis", desc: "We assess vocabulary, sentence length, and conceptual complexity against established readability frameworks (Lexile, Fountas & Pinnell) to ensure your text matches your target age group." },
    { icon: "🔄", title: "Read-Aloud Rhythm Testing", desc: "Children's books are meant to be heard. We read your manuscript aloud at every stage, identifying awkward phrasing, tongue-twisters, and rhythms that stumble when spoken." },
    { icon: "🖼️", title: "Illustration Space Mapping", desc: "For picture books, we analyze whether your text leaves room for visual storytelling—identifying over-described scenes and suggesting where illustrations should carry the narrative." },
    { icon: "🎯", title: "Page-Turn Pacing", desc: "The page turn is the picture book's pause button. We structure your manuscript so each page turn reveals, surprises, or builds anticipation—creating an irresistible reading experience." },
    { icon: "🧒", title: "Child-Voice Authenticity", desc: "Children can spot a fake from page one. We ensure your child characters sound like real kids—not adults in small bodies—and that your narrative voice connects with young readers." },
    { icon: "📚", title: "Market & Category Positioning", desc: "We evaluate your book against current market standards and competition in your specific children's category, ensuring it meets publisher and reader expectations for its format." },
];

const processSteps = [
    { step: "01", title: "Age-Group Assessment & Goal Setting", desc: "We evaluate your manuscript's target age range, category, and current market positioning. We identify strengths, weaknesses, and establish clear editing goals for your book." },
    { step: "02", title: "Developmental Edit", desc: "The big-picture pass. We restructure for pacing, character arcs, plot logic, page-turn timing, and age-appropriate themes. You receive a detailed editorial letter and revised outline." },
    { step: "03", title: "Line Edit & Read-Aloud Review", desc: "We refine language, voice, rhythm, and readability. Every line is tested for read-aloud flow, vocabulary level, and emotional impact. Rhyming books undergo strict meter analysis." },
    { step: "04", title: "Proofread & Final Delivery", desc: "A meticulous final sweep catches errors, inconsistencies, and formatting issues. You receive a clean, market-ready manuscript with a comprehensive editorial summary." },
];

const stats = [
    { number: "8,000+", label: "Children's Books Edited" },
    { number: "150+", label: "Bestsellers Guided" },
    { number: "98%", label: "Author Satisfaction" },
    { number: "All", label: "Age Groups Covered" },
];

const faqs = [
    { q: "Why does a children's book need a specialized editor?", a: "Children's books operate under completely different rules than adult books. Word counts are tighter, vocabulary must match specific reading levels, page-turn pacing is critical, and read-aloud rhythm can make or break a picture book. A general editor won't catch these nuances—only a children's specialist understands them." },
    { q: "What's the difference between picture book editing and novel editing?", a: "Picture book editing focuses on page-turn structure, visual storytelling space, read-aloud rhythm, and extreme word-count discipline (typically under 500 words). Novel editing focuses on plot structure, character development, and prose style. The skillsets are completely different—which is why we use specialist editors for each." },
    { q: "My picture book is only 300 words. Does it really need editing?", a: "It needs editing more than a 300-page novel. With so few words, every single word carries enormous weight. A single awkward phrase disrupts the read-aloud flow. A misplaced page turn kills the surprise. One over-described sentence steals space from the illustration. Shorter books are harder to write well—and need specialist editing even more." },
    { q: "How do you determine the right age range for my book?", a: "We assess vocabulary complexity, sentence structure, thematic depth, conceptual abstraction, and emotional maturity required. We then map your manuscript against established readability frameworks and current market standards to identify the precise age range and category where your book will thrive." },
    { q: "Can you edit a rhyming picture book?", a: "Yes—and we strongly recommend it. Rhyming picture books are the hardest format to edit because meter must be perfect, rhymes must be natural, and the story must still make sense. Our specialists scan every line for metrical consistency and flag forced rhymes that would make read-aloud awkward." },
    { q: "Do you edit for diversity and sensitivity?", a: "Yes. We offer sensitivity and appropriateness reviews as part of our editing process. We check for cultural representation, bias, stereotypes, and age-appropriate handling of sensitive themes. We want your book to be inclusive, respectful, and responsible." },
    { q: "How long does children's book editing take?", a: "Picture books typically take 2–3 weeks. Chapter books and middle grade novels take 3–5 weeks. Young adult novels take 4–6 weeks. Full editing packages (developmental through proofreading) take 6–10 weeks depending on length and complexity." },
    { q: "Who owns the rights to my edited book?", a: "You do. 100%. All intellectual property, copyrights, and creative rights remain entirely yours. Our editors never claim authorship or ownership of any part of your work—ever." },
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

        const particles = Array.from({ length: 45 }, () => ({
            x: Math.random() * w, y: Math.random() * h,
            r: Math.random() * 1.1 + 0.3, speed: Math.random() * 0.13 + 0.04,
            opacity: Math.random(), delta: (Math.random() - 0.5) * 0.007,
        }));

        let raf: number;
        const draw = () => {
            ctx.clearRect(0, 0, w, h);
            particles.forEach(p => {
                p.opacity += p.delta;
                if (p.opacity <= 0.1 || p.opacity >= 0.55) p.delta *= -1;
                p.y -= p.speed; p.x += Math.sin(p.y * 0.003) * 0.22;
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
            <div style={{ position: "absolute", top: -140, left: -80, width: 420, height: 420, borderRadius: "50%", border: "1px solid rgba(240,165,0,0.05)", pointerEvents: "none" }} />

            <div style={{ position: "relative", zIndex: 1, maxWidth: 1320, margin: "0 auto", padding: "120px 40px 100px", textAlign: "center" }}>
                <div style={{ display: "inline-flex", alignItems: "center", gap: 10, background: "rgba(240,165,0,0.1)", border: "1px solid rgba(240,165,0,0.3)", borderRadius: 40, padding: "8px 20px", marginBottom: 28 }}>
                    <span style={{ width: 8, height: 8, borderRadius: "50%", background: "var(--accent)", animation: "pulse 2s infinite" }} />
                    <span style={{ fontSize: 12, fontWeight: 700, color: "var(--accent)", textTransform: "uppercase", letterSpacing: 2 }}>Editing Services</span>
                </div>

                <h1 style={{ fontFamily: "var(--font2)", fontSize: "clamp(40px,7vw,78px)", fontWeight: 900, color: "var(--white)", lineHeight: 0.9, margin: "0 0 24px", letterSpacing: -2 }}>
                    Professional<br /><span style={{ color: "var(--accent)" }}>Children's Book</span><br />Editing Services
                </h1>

                <p style={{ fontSize: "clamp(15px,1.8vw,19px)", color: "var(--text-muted)", lineHeight: 1.9, maxWidth: 660, margin: "0 auto 36px" }}>
                    Children's books aren't just shorter—they're a completely different craft. Our specialist editors understand page-turn pacing, read-aloud rhythm, age-level readability, and the unique demands of every children's category.
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
                        <img src="/images/WCU-Left.webp" alt="Children's Book Editing" style={{ width: "100%", height: 520, objectFit: "cover", display: "block" }} />
                    </div>
                    <div style={{ position: "absolute", bottom: -20, right: -20, background: "linear-gradient(135deg,var(--accent),var(--accent2))", borderRadius: 14, padding: "16px 24px", boxShadow: "0 8px 30px rgba(240,165,0,0.4)", border: "3px solid var(--white)" }}>
                        <div style={{ fontSize: 24, fontWeight: 900, color: "var(--navy)", fontFamily: "var(--font2)", lineHeight: 1 }}>🧒</div>
                        <div style={{ fontSize: 10, fontWeight: 700, color: "var(--navy)", textTransform: "uppercase", letterSpacing: 1 }}>Age-Perfect</div>
                    </div>
                </div>

                <div className="reveal-right" style={{ flex: 1, minWidth: 300 }}>
                    <p className="section-eyebrow">Not Just Shorter—Different</p>
                    <h2 style={{ fontFamily: "var(--font2)", fontSize: "clamp(28px,3.5vw,42px)", fontWeight: 900, color: "var(--navy)", lineHeight: 1.2, marginBottom: 24 }}>
                        Children's Books Require<br /><span style={{ color: "var(--accent)" }}>Specialist Editors</span>.
                    </h2>
                    <div style={{ width: 60, height: 3, background: "var(--accent)", borderRadius: 2, marginBottom: 24 }} />

                    <p style={{ fontSize: 15, color: "#555", lineHeight: 1.9, marginBottom: 20 }}>
                        Many authors assume that editing a children's book is easier because it's shorter. The opposite is true. With fewer words, every single word carries enormous weight. A misplaced page break ruins the surprise. An awkward phrase trips the tongue. A vocabulary mismatch loses the reader entirely.
                    </p>
                    <p style={{ fontSize: 15, color: "#555", lineHeight: 1.9, marginBottom: 20 }}>
                        Picture books must be read aloud hundreds of times without driving parents crazy. Chapter books must hook reluctant readers in the first sentence. Middle grade novels must balance complex themes with accessible language. Young adult fiction must respect teen intelligence without adult condescension.
                    </p>
                    <p style={{ fontSize: 15, color: "#555", lineHeight: 1.9, marginBottom: 32 }}>
                        Our children's book editors specialize exclusively in young readers. They understand the craft, the market, and the gatekeepers—parents, teachers, and librarians who decide which books make it into children's hands. They don't just edit your book; they help it earn the trust of the people who buy it.
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
        .child-card {
          background: #fff;
          border: 2px solid rgba(13,18,64,0.2);
          border-radius: 20px;
          padding: 32px 28px;
          transition: all 0.35s cubic-bezier(0.16,1,0.3,1);
          position: relative;
          overflow: hidden;
        }
        .child-card::before {
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
        .child-card:hover::before { transform: scaleX(1); }
        .child-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 20px 48px rgba(0,0,0,0.12);
          border-color: rgba(240,165,0,0.4);
          background: linear-gradient(160deg, #0d1240 0%, #1a1f5e 100%);
        }
        .child-card:hover .s-emoji { transform: scale(1.1); background: rgba(240,165,0,0.15); }
        .child-card:hover .s-title { color: var(--accent) !important; }
        .child-card:hover .s-desc { color: rgba(255,255,255,0.7) !important; }
        .child-card:hover .s-badge { border-color: rgba(240,165,0,0.3) !important; color: var(--accent) !important; background: rgba(240,165,0,0.1) !important; }
      `}</style>

            <div style={{ maxWidth: 1200, margin: "0 auto" }}>
                <div className="reveal" style={{ textAlign: "center", marginBottom: 56 }}>
                    <p className="section-eyebrow" style={{ color: "var(--navy2)" }}>Editing Categories</p>
                    <h2 className="section-title">Types of Children's Book Editing We Offer</h2>
                    <p style={{ fontSize: 15, color: "#888", maxWidth: 580, margin: "12px auto 0", lineHeight: 1.8 }}>
                        Every age group has different rules. Our specialist editors understand the unique demands of each children's category.
                    </p>
                </div>

                <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 24 }}>
                    {editingTypes.map((g, i) => (
                        <div key={i} className="child-card reveal">
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
   WHY SPECIALIST EDITING MATTERS
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
        { num: "01", title: "Children Are the Most Honest Critics", desc: "Adults will politely finish a boring book. Kids simply close it. If your story doesn't hook them by page two, you've lost them forever. Specialist editors know how to keep young readers engaged." },
        { num: "02", title: "Parents & Librarians Are Gatekeepers", desc: "Children don't buy books—adults do. Your book must satisfy the child's desire for entertainment AND the adult's standards for quality, appropriateness, and educational value simultaneously." },
        { num: "03", title: "Read-Aloud Quality Makes or Breaks Sales", desc: "Picture books that are painful to read aloud don't get re-read. And books that don't get re-read don't get recommended. Rhythm, pacing, and flow aren't optional—they're survival requirements." },
        { num: "04", title: "The Children's Market Is Extremely Competitive", desc: "Thousands of children's books are published every week. Only the best-edited, best-positioned books break through. A general editor can't give you the category-specific insights that make the difference." },
    ];

    return (
        <section ref={ref} style={{ background: "var(--white)", padding: "80px 40px", fontFamily: "var(--font)" }}>
            <div style={{ maxWidth: 1200, margin: "0 auto", display: "flex", gap: 60, alignItems: "flex-start", flexWrap: "wrap" }}>

                <div className="reveal-left" style={{ flex: "0 0 400px" }}>
                    <p className="section-eyebrow" style={{ color: "var(--navy2)" }}>Why It Matters</p>
                    <h2 style={{ fontFamily: "var(--font2)", fontSize: "clamp(28px,3.5vw,42px)", fontWeight: 900, color: "var(--navy)", lineHeight: 1.2, marginBottom: 20 }}>
                        Why Children's Books Need<br /><span style={{ color: "var(--accent)" }}>Specialist Editors</span>.
                    </h2>
                    <div style={{ width: 60, height: 3, background: "var(--accent)", borderRadius: 2, marginBottom: 20 }} />
                    <p style={{ fontSize: 15, color: "#666", lineHeight: 1.9, marginBottom: 28 }}>
                        Writing for children is a completely different discipline. The rules, the audience, and the market dynamics are unique—and so are the editing requirements.
                    </p>
                    <div style={{ background: "linear-gradient(135deg,var(--accent),var(--accent2))", borderRadius: 16, padding: "28px", position: "relative", overflow: "hidden" }}>
                        <div style={{ position: "absolute", top: -20, right: -20, width: 100, height: 100, borderRadius: "50%", background: "rgba(255,255,255,0.1)" }} />
                        <div style={{ fontSize: "clamp(36px,5vw,52px)", fontWeight: 900, color: "var(--navy)", fontFamily: "var(--font2)", lineHeight: 1, marginBottom: 4 }}>3×</div>
                        <div style={{ fontSize: 13, color: "rgba(13,18,64,0.7)", fontWeight: 600 }}>more competitive than adult fiction—specialist editing is essential</div>
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
                    <h2 className="section-title">What You Get With Our Children's Book Editing</h2>
                    <p style={{ fontSize: 15, color: "#888", maxWidth: 580, margin: "12px auto 0", lineHeight: 1.8 }}>
                        Specialist editing that goes beyond grammar—we shape your book for the unique demands of the children's market.
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
                    <h2 className="section-title">Our Children's Book Editing Process</h2>
                    <p style={{ fontSize: 15, color: "#888", maxWidth: 520, margin: "12px auto 0", lineHeight: 1.8 }}>
                        A specialized process designed for the unique demands of children's literature.
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
   AGE GROUPS SECTION
   ──────────────────────────────────────────── */

function AgeGroupsSection() {
    const ref = useRef<HTMLElement>(null);
    useEffect(() => {
        const el = ref.current; if (!el) return;
        const obs = new IntersectionObserver(([e]) => {
            if (e.isIntersecting) el.querySelectorAll(".reveal").forEach(c => c.classList.add("revealed"));
        }, { threshold: 0.1 });
        obs.observe(el);
        return () => obs.disconnect();
    }, []);

    const categories = [
        "Board Books (0–3)", "Picture Books (3–8)", "Early Readers (5–7)", "Chapter Books (6–9)",
        "Middle Grade (8–12)", "Young Adult (12+)", "Rhyming Picture Books", "Non-Fiction for Kids",
        "Leveled Readers", "Graphic Novels for Kids", "Activity Books", "Bedtime Stories",
        "Fairy Tales & Folklore", "Educational Books", "Holiday & Seasonal", "Series Fiction",
    ];

    return (
        <section ref={ref} style={{ background: "linear-gradient(135deg, #0d1240 0%, #1a1f5e 100%)", padding: "80px 40px", fontFamily: "var(--font)" }}>
            <div style={{ maxWidth: 1100, margin: "0 auto" }}>
                <div className="reveal" style={{ textAlign: "center", marginBottom: 48 }}>
                    <p className="section-eyebrow">Categories</p>
                    <h2 className="section-title-accent" style={{ fontFamily: "var(--font2)" }}>We Edit Every Children's Category</h2>
                    <p style={{ fontSize: 15, color: "var(--text-muted)", maxWidth: 520, margin: "12px auto 0", lineHeight: 1.8 }}>
                        From board books to young adult novels, our editors specialize in the unique requirements of every children's format.
                    </p>
                </div>

                <div className="reveal" style={{ display: "flex", flexWrap: "wrap", gap: 12, justifyContent: "center" }}>
                    {categories.map((c, i) => (
                        <div key={i} style={{ background: "rgba(240,165,0,0.08)", border: "1px solid rgba(240,165,0,0.2)", borderRadius: 30, padding: "10px 22px", fontSize: 13, fontWeight: 600, color: "rgba(255,255,255,0.8)", transition: "all 0.3s", cursor: "default" }}
                            onMouseEnter={e => { e.currentTarget.style.background = "rgba(240,165,0,0.2)"; e.currentTarget.style.borderColor = "rgba(240,165,0,0.5)"; e.currentTarget.style.color = "var(--accent)"; e.currentTarget.style.transform = "translateY(-2px)"; }}
                            onMouseLeave={e => { e.currentTarget.style.background = "rgba(240,165,0,0.08)"; e.currentTarget.style.borderColor = "rgba(240,165,0,0.2)"; e.currentTarget.style.color = "rgba(255,255,255,0.8)"; e.currentTarget.style.transform = "translateY(0)"; }}>
                            {c}
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
                    <h2 className="section-title-accent" style={{ fontFamily: "var(--font2)" }}>Children's Book Editing FAQ</h2>
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
                        <img src="/images/book-3.png" alt="Children's Book Editing" style={{ width: "100%", objectFit: "contain", filter: "drop-shadow(0 24px 60px rgba(0,0,0,0.25))", animation: "floatForm 4s ease-in-out infinite" }} />
                    </div>

                    <div className="reveal-right" style={{ flex: 1 }}>
                        <h2 style={{ fontFamily: "var(--font2)", fontSize: "clamp(28px,4vw,42px)", fontWeight: 900, color: "var(--navy)", lineHeight: 1.2, marginBottom: 20 }}>
                            Ready To Edit Your<br /><span style={{ textDecoration: "underline", textDecorationColor: "rgba(13,18,64,0.2)", textUnderlineOffset: 6 }}>Children's Book</span>?
                        </h2>
                        <p style={{ fontSize: 15, color: "rgba(13,18,64,0.75)", lineHeight: 1.9, marginBottom: 32, maxWidth: 520 }}>
                            Give your young readers the experience they deserve. Get a free manuscript evaluation and discover how specialist editing can transform your children's book.
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

export default function ChildrensBookEditingPage() {
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
                <AgeGroupsSection />
                <FAQSection />
                <EditingCTA />
            </main>

            <FooterSection />
        </>
    );
}