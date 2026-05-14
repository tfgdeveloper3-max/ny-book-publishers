"use client";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import { FooterSection } from "@/components/Footer";
import LightningCursor from "@/components/Lightningcursor";

/* ────────────────────────────────────────────
   DETAILED DATA (Emojis Added)
   ──────────────────────────────────────────── */

const slugify = (s: string) =>
    s.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");

const serviceCategories = [
    {
        id: "writing",
        label: "Writing Services",
        emoji: "✍️",
        tagline: "From blank page to brilliant manuscript.",
        description: "Don't have the time or expertise to write your book? Our professional writers will capture your voice, structure your ideas, and deliver a manuscript that's ready for the world.",
        services: [
            { title: "Ghostwriting Services", emoji: "👻", desc: "Our ghostwriters become your voice. We write the book, you get the credit. 100% confidentiality guaranteed from first draft to final publication.", features: ["Voice Matching", "100% Confidentiality", "Unlimited Revisions"] },
            { title: "Children's Book Writing", emoji: "🧸", desc: "Crafting stories that spark imagination in young minds. From picture books to middle-grade novels, we understand what captivates young readers at every age.", features: ["Age-Appropriate", "Illustration Notes", "Series Planning"] },
            { title: "Memoir Writing", emoji: "📖", desc: "Your life story deserves to be told with nuance and impact. We help you shape memories into a compelling narrative that moves readers deeply.", features: ["Interview-Based", "Emotional Arc", "Legacy Preservation"] },
            { title: "Fiction Writing", emoji: "🗡️", desc: "Build immersive worlds and unforgettable characters. Whether it's literary fiction or a page-turning thriller, we craft stories that keep readers hooked.", features: ["Plot Development", "Character Arcs", "World Building"] },
            { title: "Non-Fiction Writing", emoji: "💡", desc: "Turn your expertise into an authoritative book. We structure your knowledge into clear, engaging prose that educates and inspires your target audience.", features: ["Research-Based", "Clear Structure", "Thought Leadership"] },
            { title: "Script Writing", emoji: "🎬", desc: "From screenplays to stage plays, we write scripts designed for production. Proper formatting, sharp dialogue, and visual storytelling are our specialties.", features: ["Industry Format", "Dialogue Polish", "Pitch Deck"] },
            { title: "Horror Writing", emoji: "🧟", desc: "Master the art of fear. We craft atmospheric, suspenseful horror that gets under the reader's skin and stays there long after the last page.", features: ["Atmosphere & Tension", "Pacing Control", "Psychological Depth"] },
            { title: "Fantasy Writing", emoji: "🐉", desc: "Create epic worlds with complex magic systems and legendary quests. We build universes that readers never want to leave.", features: ["Magic Systems", "Map Creation", "Lore & History"] },
            { title: "Mystery Writing", emoji: "🔍", desc: "Plant clues, build suspense, and deliver a twist they never saw coming. We construct airtight plots that keep readers guessing until the very end.", features: ["Clue Mapping", "Red Herrings", "Twist Engineering"] },
            { title: "Historical Writing", emoji: "🏛️", desc: "Bring the past to life with meticulous research and vivid storytelling. We ensure historical accuracy while keeping the narrative gripping and accessible.", features: ["Era Accuracy", "Primary Research", "Vivid Setting"] },
            { title: "Sci-Fi Writing", emoji: "🚀", desc: "Explore the future with hard science fiction or space opera. We blend scientific plausibility with epic storytelling that pushes boundaries.", features: ["Tech Plausibility", "Future Worldbuilding", "Societal Impact"] },
            { title: "SEO Content Writing", emoji: "📈", desc: "Content that ranks and converts. We create search-optimized articles, blogs, and web copy that drives organic traffic and establishes digital authority.", features: ["Keyword Strategy", "Engaging Hooks", "Conversion Focus"] },
        ],
    },
    {
        id: "editing",
        label: "Editing & Publishing",
        emoji: "📝",
        tagline: "Polished to perfection, published with precision.",
        description: "A great book isn't just written — it's refined. Our editors and publishing specialists ensure your manuscript is flawless and reaches readers on every major platform worldwide.",
        services: [
            { title: "Book Editing Services", emoji: "✂️", desc: "From developmental structural changes to line-by-line refinement, our editors elevate your manuscript while preserving your unique voice and vision.", features: ["Developmental Editing", "Line Editing", "Voice Preservation"] },
            { title: "Book Proofreading", emoji: "🔎", desc: "The final shield against typos and grammatical errors. We catch what spell-check misses, ensuring your book is impeccably professional.", features: ["Error-Free Guarantee", "Consistency Check", "Style Guide Compliance"] },
            { title: "Book Formatting", emoji: "📐", desc: "Beautiful interiors for print and digital. We format your book to professional industry standards for Kindle, Kobo, Ingram, and print-on-demand.", features: ["ePub & Mobi", "Print PDF", "Device Testing"] },
            { title: "Ebook Publishing Services", emoji: "📱", desc: "Full-service digital publishing. We handle conversion, metadata, distribution, and upload to Amazon KDP, Apple Books, Barnes & Noble, and 50+ platforms.", features: ["Global Distribution", "Metadata Optimization", "KDP Setup"] },
            { title: "Audiobook Narration", emoji: "🎧", desc: "Bring your story to life with professional voice talent. We handle casting, recording, editing, and distribution to Audible and major audio platforms.", features: ["Professional Voice Actors", "Studio Quality", "ACX/Audible Setup"] },
            { title: "Book Coaching Services", emoji: "🧭", desc: "Stuck or overwhelmed? A personal book coach provides accountability, feedback, and strategic guidance to keep your writing on track and moving forward.", features: ["1-on-1 Sessions", "Accountability", "Manuscript Feedback"] },
            { title: "Beta Reader Services", emoji: "👥", desc: "Get honest reader feedback before you publish. Our curated beta readers provide insights on plot holes, pacing, and emotional impact from a reader's perspective.", features: ["Diverse Reader Pool", "Detailed Feedback", "Actionable Insights"] },
        ],
    },
    {
        id: "design",
        label: "Design & Marketing",
        emoji: "🎨",
        tagline: "Stunning visuals. Strategic reach. Maximum sales.",
        description: "Don't judge a book by its cover? Readers absolutely do. Our design and marketing teams ensure your book looks irresistible and reaches the readers who will love it.",
        services: [
            { title: "Book Cover Design Services", emoji: "🖼️", desc: "A cover that stops the scroll. Our designers create visually striking, genre-appropriate covers that demand attention and drive clicks on Amazon and bookstores.", features: ["Genre Research", "Unlimited Concepts", "3D Mockups Included"] },
            { title: "Illustration Design Services", emoji: "🎨", desc: "Breathtaking artwork for children's books, graphic novels, and more. Our illustrators bring your words to life with styles ranging from whimsical to hyper-realistic.", features: ["Custom Artwork", "Multiple Styles", "Print-Ready Files"] },
            { title: "Author Website Design", emoji: "💻", desc: "Your digital headquarters. We build stunning, SEO-optimized author websites with book storefronts, mailing lists, and event calendars to grow your readership.", features: ["Mobile Responsive", "SEO Optimized", "Book Storefront"] },
            { title: "Book Marketing Services", emoji: "📣", desc: "Launch with momentum. Our data-driven marketing campaigns include Amazon ads, social media strategy, email funnels, and PR to get your book discovered.", features: ["Amazon Ads", "Social Media Strategy", "Launch Campaign"] },
            { title: "Book Printing", emoji: "🖨️", desc: "Premium print-on-demand and bulk printing. We deliver bookstore-quality paperbacks and hardcovers with premium paper stock and professional binding.", features: ["Print-On-Demand", "Bulk Discounts", "Premium Paper Stock"] },
        ],
    },
];

const processSteps = [
    { step: "01", title: "Share Your Vision", desc: "Tell us about your book idea, goals, and budget. We listen first, then recommend the perfect service combination." },
    { step: "02", title: "Get Matched With Experts", desc: "We assign a dedicated team—writer, editor, designer, or marketer—specialized in your specific genre and needs." },
    { step: "03", title: "Collaborate & Create", desc: "Work closely with your team through every draft, revision, and design iteration. Full transparency, zero surprises." },
    { step: "04", title: "Publish & Launch", desc: "Your polished book goes live on 50+ platforms worldwide. We handle the technicalities, you enjoy becoming a published author." },
];

const guarantees = [
    { icon: "💰", title: "100% Royalties Kept", desc: "You wrote it, you earn from it. We take zero cut of your book sales. Every cent goes directly to you." },
    { icon: "🖌️", title: "Unlimited Creative Control", desc: "Your book, your rules. From cover design to final edit, nothing gets published without your explicit approval." },
    { icon: "🛡️", title: "Strict NDA Protection", desc: "Ghostwriting clients get ironclad confidentiality. Your privacy and intellectual property are always protected." },
    { icon: "🔄", title: "Unlimited Revisions", desc: "We don't stop refining until you're 100% satisfied. No hidden fees, no revision caps on core deliverables." },
];

/* ────────────────────────────────────────────
   SERVICES HERO
   ──────────────────────────────────────────── */

function ServicesHero() {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext("2d")!;
        let w = canvas.offsetWidth, h = canvas.offsetHeight;
        canvas.width = w; canvas.height = h;

        const particles = Array.from({ length: 65 }, () => ({
            x: Math.random() * w, y: Math.random() * h,
            r: Math.random() * 1.8 + 0.5, speed: Math.random() * 0.25 + 0.08,
            opacity: Math.random(), delta: (Math.random() - 0.5) * 0.015,
        }));

        let raf: number;
        const draw = () => {
            ctx.clearRect(0, 0, w, h);
            particles.forEach(p => {
                p.opacity += p.delta;
                if (p.opacity <= 0.1 || p.opacity >= 0.85) p.delta *= -1;
                p.y -= p.speed; p.x += Math.sin(p.y * 0.008) * 0.3;
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

            <div style={{ position: "relative", zIndex: 1, maxWidth: 1320, margin: "0 auto", padding: "120px 40px 100px", textAlign: "center" }}>
                <div style={{ display: "inline-flex", alignItems: "center", gap: 10, background: "rgba(240,165,0,0.1)", border: "1px solid rgba(240,165,0,0.3)", borderRadius: 40, padding: "8px 20px", marginBottom: 28 }}>
                    <span style={{ width: 8, height: 8, borderRadius: "50%", background: "var(--accent)", animation: "pulse 2s infinite" }} />
                    <span style={{ fontSize: 12, fontWeight: 700, color: "var(--accent)", textTransform: "uppercase", letterSpacing: 2 }}>Professional Publishing Solutions</span>
                </div>

                <h1 style={{ fontFamily: "var(--font2)", fontSize: "clamp(42px,7vw,84px)", fontWeight: 900, color: "var(--white)", lineHeight: 0.9, margin: "0 0 24px", letterSpacing: -2 }}>
                    Every Service<br />Your Book <span style={{ color: "var(--accent)" }}>Needs</span>
                </h1>

                <p style={{ fontSize: "clamp(15px,1.8vw,19px)", color: "var(--text-muted)", lineHeight: 1.9, maxWidth: 650, margin: "0 auto 36px" }}>
                    From the first spark of an idea to a globally distributed bestseller — we provide end-to-end book publishing services tailored to your vision.
                </p>

                <div style={{ display: "flex", gap: 14, justifyContent: "center", flexWrap: "wrap" }}>
                    <a href="#services-grid" className="btn-accent" style={{ fontSize: 15, padding: "16px 36px", textDecoration: "none" }}>Explore Services</a>
                    <Link href="/contact" className="btn-outline-white" style={{ fontSize: 15, padding: "16px 36px", textDecoration: "none" }}>Get Free Quote</Link>
                </div>
            </div>
        </section>
    );
}

/* ────────────────────────────────────────────
   ALL SERVICES GRID (Bolder Borders Added)
   ──────────────────────────────────────────── */

function ServicesGridSection() {
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
        <section id="services-grid" ref={ref} style={{ background: "var(--white)", padding: "80px 40px", fontFamily: "var(--font)" }}>
            <style>{`
        .service-card {
          background: #fff;
          border: 2px solid rgba(13, 18, 64, 0.25); /* Dark Navy Bold Border */
          border-radius: 16px;
          padding: 0;
          transition: all 0.4s cubic-bezier(0.16,1,0.3,1);
          display: flex;
          flex-direction: column;
          position: relative;
          overflow: hidden;
          box-shadow: 0 4px 16px rgba(0,0,0,0.06); /* Subtle default shadow */
        }
        .service-card::before {
          content: '';
          position: absolute;
          top: 0; left: 0; right: 0;
          height: 4px;
          background: linear-gradient(90deg, var(--accent), var(--accent2));
          transform: scaleX(0);
          transform-origin: left;
          transition: transform 0.4s cubic-bezier(0.16,1,0.3,1);
          z-index: 2;
        }
        .service-card:hover::before {
          transform: scaleX(1);
        }
        .service-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 24px 64px rgba(0,0,0,0.15), 0 0 0 1px rgba(240,165,0,0.15);
          background: linear-gradient(160deg, #0d1240 0%, #1a1f5e 100%);
          border-color: rgba(240,165,0,0.5); /* Gold Border on Hover */
        }
        .service-card:hover .svc-emoji {
          transform: scale(1.15) rotate(-5deg);
          background: rgba(240,165,0,0.15);
        }
        .service-card:hover .svc-title {
          color: var(--accent) !important;
        }
        .service-card:hover .svc-desc {
          color: rgba(255,255,255,0.7) !important;
        }
        .service-card:hover .svc-tag {
          border-color: rgba(240,165,0,0.3) !important;
          color: var(--accent) !important;
          background: rgba(240,165,0,0.08) !important;
        }
        .service-card:hover .svc-btn {
          background: var(--accent) !important;
          color: var(--navy) !important;
          border-color: var(--accent) !important;
        }
      `}</style>

            <div style={{ maxWidth: 1200, margin: "0 auto" }}>

                <div className="reveal" style={{ textAlign: "center", marginBottom: 64 }}>
                    <p className="section-eyebrow" style={{ color: "var(--navy2)" }}>What We Do</p>
                    <h2 className="section-title">Comprehensive Publishing Solutions</h2>
                </div>

                {/* Map over ALL Categories */}
                {serviceCategories.map((category) => (
                    <div key={category.id} style={{ marginBottom: 64 }}>

                        {/* Category Header */}
                        <div className="reveal" style={{
                            background: "linear-gradient(135deg,var(--navy),var(--navy2))", borderRadius: 20,
                            padding: "36px 44px", marginBottom: 32, position: "relative", overflow: "hidden",
                        }}>
                            <div style={{ position: "absolute", top: 0, right: 0, width: "40%", height: "100%", background: "linear-gradient(135deg,transparent,rgba(240,165,0,0.05))", pointerEvents: "none" }} />
                            <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 10, position: "relative", zIndex: 1 }}>
                                <span style={{ fontSize: 32 }}>{category.emoji}</span>
                                <h3 style={{ fontFamily: "var(--font2)", fontSize: 26, fontWeight: 900, color: "var(--white)", margin: 0 }}>{category.label}</h3>
                            </div>
                            <p style={{ fontSize: 15, color: "rgba(255,255,255,0.75)", lineHeight: 1.85, maxWidth: 800, margin: 0, position: "relative", zIndex: 1 }}>
                                <span style={{ color: "var(--accent)", fontWeight: 700 }}>{category.tagline}</span> — {category.description}
                            </p>
                        </div>

                        {/* Services Grid */}
                        <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 24 }}>
                            {category.services.map((service) => (
                                <div key={service.title} className="service-card reveal">
                                    <div style={{ padding: "28px 24px 16px" }}>
                                        {/* Emoji Icon */}
                                        <div className="svc-emoji" style={{
                                            width: 52, height: 52, borderRadius: 14, marginBottom: 16,
                                            background: "rgba(240,165,0,0.08)",
                                            display: "flex", alignItems: "center", justifyContent: "center",
                                            fontSize: 24, transition: "all 0.3s ease",
                                        }}>
                                            {service.emoji}
                                        </div>

                                        <h3 className="svc-title" style={{ fontSize: 18, fontWeight: 800, color: "var(--navy)", fontFamily: "var(--font2)", lineHeight: 1.3, marginBottom: 12, transition: "color 0.3s" }}>{service.title}</h3>
                                        <p className="svc-desc" style={{ fontSize: 13.5, color: "#666", lineHeight: 1.85, marginBottom: 16, transition: "color 0.3s" }}>{service.desc}</p>

                                        {/* Features Tags */}
                                        <div style={{ display: "flex", gap: 6, flexWrap: "wrap" }}>
                                            {service.features.map(f => (
                                                <span key={f} className="svc-tag" style={{ fontSize: 10, fontWeight: 700, color: "var(--accent)", background: "rgba(240,165,0,0.06)", border: "1px solid rgba(240,165,0,0.12)", padding: "4px 10px", borderRadius: 20, textTransform: "uppercase", letterSpacing: 0.5, transition: "all 0.3s" }}>{f}</span>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Bottom CTA */}
                                    <div style={{ marginTop: "auto", padding: "16px 24px 24px" }}>
                                        <Link href={`/services/${slugify(service.title)}`} className="svc-btn" style={{ display: "block", textAlign: "center", fontSize: 13, fontWeight: 700, padding: "10px", borderRadius: 8, border: "1.5px solid rgba(13,18,64,0.2)", color: "var(--navy)", textDecoration: "none", transition: "all 0.3s" }}>
                                            Explore Service →
                                        </Link>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}

/* ────────────────────────────────────────────
   PROCESS SECTION
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
        <section ref={ref} style={{ background: "#fafaf8", padding: "80px 40px", fontFamily: "var(--font)" }}>
            <div style={{ maxWidth: 1100, margin: "0 auto" }}>

                <div className="reveal" style={{ textAlign: "center", marginBottom: 56 }}>
                    <p className="section-eyebrow" style={{ color: "var(--navy2)" }}>Our Process</p>
                    <h2 className="section-title">How We Bring Your Book To Life</h2>
                </div>

                <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 24, position: "relative" }}>
                    <div style={{ position: "absolute", top: 40, left: "12.5%", right: "12.5%", height: 3, background: "linear-gradient(90deg,var(--accent),rgba(240,165,0,0.15))", borderRadius: 2, zIndex: 0 }} />

                    {processSteps.map((s, i) => (
                        <div key={i} className="reveal" style={{ textAlign: "center", position: "relative", zIndex: 1 }}>
                            <div style={{
                                width: 80, height: 80, borderRadius: "50%", margin: "0 auto 24px",
                                background: i === 0 ? "linear-gradient(135deg,var(--accent),var(--accent2))" : "#fff",
                                border: i === 0 ? "none" : "3px solid rgba(240,165,0,0.15)",
                                display: "flex", alignItems: "center", justifyContent: "center",
                                fontSize: 24, fontWeight: 900, color: i === 0 ? "var(--navy)" : "var(--accent)", fontFamily: "var(--font2)",
                                boxShadow: i === 0 ? "0 8px 24px rgba(240,165,0,0.3)" : "0 4px 16px rgba(0,0,0,0.04)",
                                transition: "transform 0.3s, box-shadow 0.3s",
                            }}
                                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.transform = "scale(1.1)"; (e.currentTarget as HTMLElement).style.boxShadow = "0 12px 32px rgba(240,165,0,0.25)"; }}
                                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.transform = "scale(1)"; (e.currentTarget as HTMLElement).style.boxShadow = i === 0 ? "0 8px 24px rgba(240,165,0,0.3)" : "0 4px 16px rgba(0,0,0,0.04)"; }}>
                                {s.step}
                            </div>
                            <h3 style={{ fontSize: 17, fontWeight: 800, color: "var(--navy)", fontFamily: "var(--font2)", marginBottom: 10 }}>{s.title}</h3>
                            <p style={{ fontSize: 13.5, color: "#777", lineHeight: 1.8 }}>{s.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

/* ────────────────────────────────────────────
   GUARANTEE SECTION
   ──────────────────────────────────────────── */

function GuaranteeSection() {
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
            <div style={{ position: "absolute", top: "20%", left: "50%", transform: "translateX(-50%)", width: 600, height: 300, background: "radial-gradient(ellipse,rgba(240,165,0,0.06),transparent)", pointerEvents: "none" }} />

            <div className="reveal" style={{ textAlign: "center", marginBottom: 52, position: "relative", zIndex: 1 }}>
                <p className="section-eyebrow">Our Promise</p>
                <h2 className="section-title-accent" style={{ fontFamily: "var(--font2)" }}>The NYBP Guarantee</h2>
            </div>

            <div style={{ maxWidth: 1100, margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 24, position: "relative", zIndex: 1 }}>
                {guarantees.map((g, i) => (
                    <div key={i} className="reveal" style={{
                        background: "rgba(255,255,255,0.04)", border: "1px solid rgba(240,165,0,0.12)",
                        borderRadius: 18, padding: "32px 24px", textAlign: "center",
                        transition: "transform 0.3s, border-color 0.3s",
                    }}
                        onMouseEnter={e => { (e.currentTarget as HTMLElement).style.transform = "translateY(-6px)"; (e.currentTarget as HTMLElement).style.borderColor = "rgba(240,165,0,0.4)"; }}
                        onMouseLeave={e => { (e.currentTarget as HTMLElement).style.transform = "translateY(0)"; (e.currentTarget as HTMLElement).style.borderColor = "rgba(240,165,0,0.12)"; }}>
                        <div style={{ fontSize: 36, marginBottom: 16 }}>{g.icon}</div>
                        <h3 style={{ fontSize: 16, fontWeight: 800, color: "var(--accent)", fontFamily: "var(--font2)", marginBottom: 10 }}>{g.title}</h3>
                        <p style={{ fontSize: 13.5, color: "var(--text-muted)", lineHeight: 1.8 }}>{g.desc}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}

/* ────────────────────────────────────────────
   SERVICES CTA
   ──────────────────────────────────────────── */

function ServicesCTA() {
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
            <div style={{
                background: "linear-gradient(135deg,var(--accent) 0%,var(--accent2) 100%)",
                padding: "80px 40px", position: "relative", overflow: "hidden",
            }}>
                <div style={{ position: "absolute", right: 0, top: 0, bottom: 0, width: "40%", background: "linear-gradient(135deg,transparent,rgba(255,255,255,0.1))", pointerEvents: "none" }} />

                <div style={{ maxWidth: 1100, margin: "0 auto", display: "flex", alignItems: "center", gap: 48, flexWrap: "wrap", position: "relative", zIndex: 1 }}>
                    <div className="reveal-left" style={{ flex: "0 0 260px" }}>
                        <img src="/images/yes-book.png" alt="Your Book" style={{ width: "100%", objectFit: "contain", filter: "drop-shadow(0 24px 60px rgba(0,0,0,0.25))", animation: "floatForm 4s ease-in-out infinite" }} />
                    </div>

                    <div className="reveal-right" style={{ flex: 1 }}>
                        <h2 style={{ fontFamily: "var(--font2)", fontSize: "clamp(28px,4vw,42px)", fontWeight: 900, color: "var(--navy)", lineHeight: 1.2, marginBottom: 20 }}>
                            Ready To Bring Your<br />Story To <span style={{ textDecoration: "underline", textDecorationColor: "rgba(13,18,64,0.2)", textUnderlineOffset: 6 }}>Life</span>?
                        </h2>
                        <p style={{ fontSize: 15, color: "rgba(13,18,64,0.75)", lineHeight: 1.9, marginBottom: 32, maxWidth: 520 }}>
                            Whether you need a ghostwriter, an editor, a cover designer, or a full publishing team — we're ready. Get a free consultation and custom quote today.
                        </p>
                        <div style={{ display: "flex", gap: 14, flexWrap: "wrap" }}>
                            <Link href="/contact" className="btn-navy" style={{ fontSize: 15, padding: "16px 36px", textDecoration: "none" }}>Get Free Consultation</Link>
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

export default function ServicesPage() {
    return (
        <>
            <LightningCursor />
            <Navbar />

            <main>
                <ServicesHero />
                <ServicesGridSection />
                <ProcessSection />
                <GuaranteeSection />
                <ServicesCTA />
            </main>

            <FooterSection />
        </>
    );
}