"use client";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import { FooterSection } from "@/components/Footer";
import LightningCursor from "@/components/Lightningcursor";

/* ────────────────────────────────────────────
   DATA
   ──────────────────────────────────────────── */

const publishingTypes = [
    { emoji: "📕", title: "Print-On-Demand (POD)", desc: "No inventory. No upfront costs. We set up your paperback and hardcover on Amazon KDP and IngramSpark so books are printed and shipped automatically as orders come in.", badge: "Print" },
    { emoji: "📱", title: "eBook Global Distribution", desc: "Your eBook, everywhere. We publish to Amazon Kindle, Apple Books, Kobo, Nook, Google Play, and 40+ additional retailers through wide distribution networks.", badge: "Digital" },
    { emoji: "🌐", title: "IngramSpark Setup", desc: "Access the world's largest print distribution network. We configure your files for IngramSpark, making your book available to 40,000+ bookstores, libraries, and schools worldwide.", badge: "Global" },
    { emoji: "📜", title: "ISBN & Copyright Registration", desc: "Protect your intellectual property with official ISBNs and U.S. Copyright registration. We handle the paperwork, the filings, and the legal protection of your work.", badge: "Legal" },
    { emoji: "🔀", title: "Hybrid Publishing Guidance", desc: "Not sure whether to self-publish or pursue traditional deals? We analyze your book, genre, and goals to recommend the best path—and execute the strategy you choose.", badge: "Strategy" },
    { emoji: "🌍", title: "Foreign Rights & Translations", desc: "Expand into international markets. We help you prepare your book for translation, secure foreign rights, and distribute to non-English markets through global channels.", badge: "Expansion" },
];

const features = [
    { icon: "📤", title: "Complete Platform Upload", desc: "We handle every upload, from file submission and cover integration to pricing and territory selection. You never have to navigate a confusing publishing dashboard." },
    { icon: "🔑", title: "Metadata & Keyword Engineering", desc: "The right categories and keywords determine whether readers find your book. We research and optimize your metadata for maximum algorithmic visibility across every platform." },
    { icon: "💰", title: "100% Royalties To You", desc: "We are a publishing service, not a publishing house. You retain all rights, all copyrights, and all royalties. Platforms pay you directly—we never touch your money." },
    { icon: "📈", title: "Pricing & Royalty Strategy", desc: "Different platforms have different royalty structures. We price your book to maximize both sales volume and per-unit revenue across every retail channel." },
    { icon: "🛡️", title: "Error-Free First Submission", desc: "Platform rejections cost weeks. We verify every file meets exact specifications before submission, achieving a 99% first-upload approval rate across KDP and IngramSpark." },
    { icon: "🤝", title: "Post-Launch Support", desc: "Two weeks of dedicated support after your book goes live. We fix errors, adjust pricing, update metadata, and resolve any platform issues during your critical launch window." },
];

const processSteps = [
    { step: "01", title: "Manuscript & Strategy Review", desc: "We review your finished manuscript, assess your publishing goals, and develop a custom distribution strategy—print, eBook, wide distribution, and metadata planning." },
    { step: "02", title: "Asset Preparation & Metadata", desc: "We assign ISBNs, register copyright, craft your book description, engineer keywords, and prepare all files for flawless submission to every platform." },
    { step: "03", title: "Platform Upload & Configuration", desc: "We upload your print and eBook files to Amazon KDP, IngramSpark, and wide distribution channels—configuring pricing, territories, and distribution settings." },
    { step: "04", title: "Launch Verification & Handoff", desc: "We verify your books are live, test the sample reads, check the print preview, and deliver full access to all your publishing accounts and royalty dashboards." },
];

const stats = [
    { number: "12,000+", label: "Books Published" },
    { number: "100+", label: "Countries Reached" },
    { number: "99%", label: "First-Upload Approval" },
    { number: "100%", label: "Royalties To You" },
];

const faqs = [
    { q: "What's the difference between your service and a traditional publisher?", a: "Traditional publishers take ownership of your rights, pay you 10–15% royalties, and control the process. We are a publishing service—you keep 100% of your rights, 100% of your royalties, and maintain complete creative control. We handle the technical execution; you remain the publisher." },
    { q: "Do I keep all my royalties and rights?", a: "Yes, absolutely. You own all intellectual property, copyrights, and royalties. We set up the accounts in your name with your banking information. Amazon, IngramSpark, and all other platforms pay you directly on their regular schedules." },
    { q: "Which platforms do you publish to?", a: "We publish to all major platforms including Amazon KDP (Kindle and Print), IngramSpark (global print and eBook distribution), Apple Books, Google Play Books, Kobo, Barnes & Noble Press, and Draft2Digital (which distributes to 40+ additional retailers)." },
    { q: "Do I need both Amazon KDP and IngramSpark?", a: "We highly recommend it. Amazon KDP gives you direct access to the largest retail marketplace. IngramSpark gives you access to 40,000+ bookstores, libraries, and schools worldwide. Together, they provide complete global coverage. We set up both." },
    { q: "How long does the publishing process take?", a: "From final manuscript to live on all platforms typically takes 2–3 weeks. eBooks usually go live within 72 hours of upload. Print books on KDP take 3–5 days for review. IngramSpark can take 1–2 weeks for distribution to propagate to retailers." },
    { q: "Do I need an ISBN for my book?", a: "eBooks on Amazon don't require an ISBN (they provide an ASIN). However, print books and eBooks on all other platforms require ISBNs. We provide and assign ISBNs as part of your publishing package, registered in your name." },
    { q: "Can you publish both my eBook and print book?", a: "Yes. Our standard packages include both eBook and print-on-demand setup. We format your interior for both, create the appropriate cover files, and publish to all platforms simultaneously." },
    { q: "What if I already have a KDP account?", a: "No problem. We can publish directly through your existing account, or we can create a new one that you fully control. Some authors prefer we use their accounts, others prefer we set up new ones—we work with your preference." },
];

/* ────────────────────────────────────────────
   HERO SECTION
   ──────────────────────────────────────────── */

function PublishingHero() {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext("2d")!;
        let w = canvas.offsetWidth, h = canvas.offsetHeight;
        canvas.width = w; canvas.height = h;

        const particles = Array.from({ length: 50 }, () => ({
            x: Math.random() * w, y: Math.random() * h,
            r: Math.random() * 1.2 + 0.4, speed: Math.random() * 0.15 + 0.04,
            opacity: Math.random(), delta: (Math.random() - 0.5) * 0.008,
        }));

        let raf: number;
        const draw = () => {
            ctx.clearRect(0, 0, w, h);
            particles.forEach(p => {
                p.opacity += p.delta;
                if (p.opacity <= 0.1 || p.opacity >= 0.6) p.delta *= -1;
                p.y -= p.speed; p.x += Math.sin(p.y * 0.003) * 0.25;
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
            <div style={{ position: "absolute", top: -140, right: -80, width: 420, height: 420, borderRadius: "50%", border: "1px solid rgba(240,165,0,0.05)", pointerEvents: "none" }} />

            <div style={{ position: "relative", zIndex: 1, maxWidth: 1320, margin: "0 auto", padding: "120px 40px 100px", textAlign: "center" }}>
                <div style={{ display: "inline-flex", alignItems: "center", gap: 10, background: "rgba(240,165,0,0.1)", border: "1px solid rgba(240,165,0,0.3)", borderRadius: 40, padding: "8px 20px", marginBottom: 28 }}>
                    <span style={{ width: 8, height: 8, borderRadius: "50%", background: "var(--accent)", animation: "pulse 2s infinite" }} />
                    <span style={{ fontSize: 12, fontWeight: 700, color: "var(--accent)", textTransform: "uppercase", letterSpacing: 2 }}>Publishing Services</span>
                </div>

                <h1 style={{ fontFamily: "var(--font2)", fontSize: "clamp(40px,7vw,78px)", fontWeight: 900, color: "var(--white)", lineHeight: 0.9, margin: "0 0 24px", letterSpacing: -2 }}>
                    Professional<br /><span style={{ color: "var(--accent)" }}>Book Publishing</span><br />Services
                </h1>

                <p style={{ fontSize: "clamp(15px,1.8vw,19px)", color: "var(--text-muted)", lineHeight: 1.9, maxWidth: 660, margin: "0 auto 36px" }}>
                    Launch your print book and eBook on every major platform worldwide. We handle the entire process—from ISBNs and formatting to upload and distribution—while you keep 100% of your royalties.
                </p>

                <div style={{ display: "flex", gap: 14, justifyContent: "center", flexWrap: "wrap" }}>
                    <Link href="/contact" className="btn-accent" style={{ fontSize: 15, padding: "16px 36px", textDecoration: "none" }}>Publish My Book</Link>
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
                        <img src="/images/WCU-Left.webp" alt="Book Publishing" style={{ width: "100%", height: 520, objectFit: "cover", display: "block" }} />
                    </div>
                    <div style={{ position: "absolute", bottom: -20, right: -20, background: "linear-gradient(135deg,var(--accent),var(--accent2))", borderRadius: 14, padding: "16px 24px", boxShadow: "0 8px 30px rgba(240,165,0,0.4)", border: "3px solid var(--white)" }}>
                        <div style={{ fontSize: 24, fontWeight: 900, color: "var(--navy)", fontFamily: "var(--font2)", lineHeight: 1 }}>🌍</div>
                        <div style={{ fontSize: 10, fontWeight: 700, color: "var(--navy)", textTransform: "uppercase", letterSpacing: 1 }}>Worldwide</div>
                    </div>
                </div>

                <div className="reveal-right" style={{ flex: 1, minWidth: 300 }}>
                    <p className="section-eyebrow">Beyond The Upload Button</p>
                    <h2 style={{ fontFamily: "var(--font2)", fontSize: "clamp(28px,3.5vw,42px)", fontWeight: 900, color: "var(--navy)", lineHeight: 1.2, marginBottom: 24 }}>
                        Publishing Is More<br />Than <span style={{ color: "var(--accent)" }}>Clicking Publish</span>.
                    </h2>
                    <div style={{ width: 60, height: 3, background: "var(--accent)", borderRadius: 2, marginBottom: 24 }} />

                    <p style={{ fontSize: 15, color: "#555", lineHeight: 1.9, marginBottom: 20 }}>
                        Anyone can upload a file to Amazon. But uploading a manuscript and publishing a book that readers actually discover, buy, and read are two completely different things. The difference lies in metadata, keywords, categories, pricing, and distribution strategy.
                    </p>
                    <p style={{ fontSize: 15, color: "#555", lineHeight: 1.9, marginBottom: 20 }}>
                        Choose the wrong category and you're invisible. Select the wrong keywords and the algorithm buries you. Skip IngramSpark and your book can't be ordered by bookstores. Ignore wide distribution and you abandon readers on Apple, Kobo, and B&N.
                    </p>
                    <p style={{ fontSize: 15, color: "#555", lineHeight: 1.9, marginBottom: 32 }}>
                        Our publishing team has launched thousands of books across every genre and platform. We know which categories have the least competition, which keywords drive traffic, and which platforms deliver the best royalties for your specific book. We handle every technical detail—so you can focus on writing the next one.
                    </p>

                    <div style={{ display: "flex", gap: 14, flexWrap: "wrap" }}>
                        <Link href="/contact" className="btn-accent" style={{ textDecoration: "none" }}>Publish My Book</Link>
                        <a href="#publishing-types" className="btn-navy" style={{ textDecoration: "none" }}>Browse Services</a>
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
   PUBLISHING TYPES
   ──────────────────────────────────────────── */

function PublishingTypesSection() {
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
        <section id="publishing-types" ref={ref} style={{ background: "#fafaf8", padding: "80px 40px", fontFamily: "var(--font)" }}>
            <style>{`
        .pub-card {
          background: #fff;
          border: 2px solid rgba(13,18,64,0.2);
          border-radius: 20px;
          padding: 32px 28px;
          transition: all 0.35s cubic-bezier(0.16,1,0.3,1);
          position: relative;
          overflow: hidden;
        }
        .pub-card::before {
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
        .pub-card:hover::before { transform: scaleX(1); }
        .pub-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 20px 48px rgba(0,0,0,0.12);
          border-color: rgba(240,165,0,0.4);
          background: linear-gradient(160deg, #0d1240 0%, #1a1f5e 100%);
        }
        .pub-card:hover .s-emoji { transform: scale(1.1); background: rgba(240,165,0,0.15); }
        .pub-card:hover .s-title { color: var(--accent) !important; }
        .pub-card:hover .s-desc { color: rgba(255,255,255,0.7) !important; }
        .pub-card:hover .s-badge { border-color: rgba(240,165,0,0.3) !important; color: var(--accent) !important; background: rgba(240,165,0,0.1) !important; }
      `}</style>

            <div style={{ maxWidth: 1200, margin: "0 auto" }}>
                <div className="reveal" style={{ textAlign: "center", marginBottom: 56 }}>
                    <p className="section-eyebrow" style={{ color: "var(--navy2)" }}>Publishing Solutions</p>
                    <h2 className="section-title">Types of Book Publishing We Offer</h2>
                    <p style={{ fontSize: 15, color: "#888", maxWidth: 580, margin: "12px auto 0", lineHeight: 1.8 }}>
                        From print-on-demand to global distribution, we manage every aspect of getting your book onto shelves and devices worldwide.
                    </p>
                </div>

                <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 24 }}>
                    {publishingTypes.map((g, i) => (
                        <div key={i} className="pub-card reveal">
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
   WHY PROFESSIONAL PUBLISHING MATTERS
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
        { num: "01", title: "One Wrong Click Costs Sales", desc: "Selecting the wrong category or missing a keyword field means readers never find your book. Most authors don't discover metadata mistakes until months of lost sales have passed." },
        { num: "02", title: "Metadata Determines Visibility", desc: "A beautiful cover doesn't matter if no one sees it. Keywords, categories, and descriptions control whether the algorithm surfaces your book to potential buyers." },
        { num: "03", title: "Bookstores Need IngramSpark", desc: "Amazon KDP only sells on Amazon. If you want your book available in physical bookstores, libraries, and independent shops, IngramSpark distribution is essential." },
        { num: "04", title: "Fixing Mistakes Is Expensive", desc: "Changing categories, updating metadata, or fixing pricing errors after launch requires re-approval and can take days. Professional setup prevents costly post-launch fixes." },
    ];

    return (
        <section ref={ref} style={{ background: "var(--white)", padding: "80px 40px", fontFamily: "var(--font)" }}>
            <div style={{ maxWidth: 1200, margin: "0 auto", display: "flex", gap: 60, alignItems: "flex-start", flexWrap: "wrap" }}>

                <div className="reveal-left" style={{ flex: "0 0 400px" }}>
                    <p className="section-eyebrow" style={{ color: "var(--navy2)" }}>Why It Matters</p>
                    <h2 style={{ fontFamily: "var(--font2)", fontSize: "clamp(28px,3.5vw,42px)", fontWeight: 900, color: "var(--navy)", lineHeight: 1.2, marginBottom: 20 }}>
                        Why Professional Publishing<br />Is <span style={{ color: "var(--accent)" }}>Essential</span>.
                    </h2>
                    <div style={{ width: 60, height: 3, background: "var(--accent)", borderRadius: 2, marginBottom: 20 }} />
                    <p style={{ fontSize: 15, color: "#666", lineHeight: 1.9, marginBottom: 28 }}>
                        Self-publishing gives you freedom—but it also gives you all the responsibility. One metadata mistake can make your book virtually invisible.
                    </p>
                    <div style={{ background: "linear-gradient(135deg,var(--accent),var(--accent2))", borderRadius: 16, padding: "28px", position: "relative", overflow: "hidden" }}>
                        <div style={{ position: "absolute", top: -20, right: -20, width: 100, height: 100, borderRadius: "50%", background: "rgba(255,255,255,0.1)" }} />
                        <div style={{ fontSize: "clamp(36px,5vw,52px)", fontWeight: 900, color: "var(--navy)", fontFamily: "var(--font2)", lineHeight: 1, marginBottom: 4 }}>70%</div>
                        <div style={{ fontSize: 13, color: "rgba(13,18,64,0.7)", fontWeight: 600 }}>of readers discover books through online search—metadata is your #1 marketing tool</div>
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
                    <h2 className="section-title">What You Get With Our Book Publishing</h2>
                    <p style={{ fontSize: 15, color: "#888", maxWidth: 580, margin: "12px auto 0", lineHeight: 1.8 }}>
                        We don't just upload files—we engineer your book's launch for maximum visibility, discoverability, and revenue.
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
                    <h2 className="section-title">Our Book Publishing Process</h2>
                    <p style={{ fontSize: 15, color: "#888", maxWidth: 520, margin: "12px auto 0", lineHeight: 1.8 }}>
                        A strategic, step-by-step process designed to give your book the best possible launch on every platform.
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
   PLATFORMS SECTION
   ──────────────────────────────────────────── */

function PlatformsSection() {
    const ref = useRef<HTMLElement>(null);
    useEffect(() => {
        const el = ref.current; if (!el) return;
        const obs = new IntersectionObserver(([e]) => {
            if (e.isIntersecting) el.querySelectorAll(".reveal").forEach(c => c.classList.add("revealed"));
        }, { threshold: 0.1 });
        obs.observe(el);
        return () => obs.disconnect();
    }, []);

    const platforms = [
        "Amazon KDP Print", "Amazon Kindle (KDP)", "IngramSpark", "Apple Books",
        "Google Play Books", "Kobo", "Barnes & Noble Press", "Draft2Digital",
        "Smashwords", "StreetLib", "Tolino", "OverDrive",
        "BorrowBox", "Bibliotheca", "Scribd", "Libby",
    ];

    return (
        <section ref={ref} style={{ background: "linear-gradient(135deg, #0d1240 0%, #1a1f5e 100%)", padding: "80px 40px", fontFamily: "var(--font)" }}>
            <div style={{ maxWidth: 1100, margin: "0 auto" }}>
                <div className="reveal" style={{ textAlign: "center", marginBottom: 48 }}>
                    <p className="section-eyebrow">Distribution</p>
                    <h2 className="section-title-accent" style={{ fontFamily: "var(--font2)" }}>We Publish On Every Platform</h2>
                    <p style={{ fontSize: 15, color: "var(--text-muted)", maxWidth: 520, margin: "12px auto 0", lineHeight: 1.8 }}>
                        From the biggest online retailers to local bookstores and library systems, your book reaches readers everywhere.
                    </p>
                </div>

                <div className="reveal" style={{ display: "flex", flexWrap: "wrap", gap: 12, justifyContent: "center" }}>
                    {platforms.map((p, i) => (
                        <div key={i} style={{ background: "rgba(240,165,0,0.08)", border: "1px solid rgba(240,165,0,0.2)", borderRadius: 30, padding: "10px 22px", fontSize: 13, fontWeight: 600, color: "rgba(255,255,255,0.8)", transition: "all 0.3s", cursor: "default" }}
                            onMouseEnter={e => { e.currentTarget.style.background = "rgba(240,165,0,0.2)"; e.currentTarget.style.borderColor = "rgba(240,165,0,0.5)"; e.currentTarget.style.color = "var(--accent)"; e.currentTarget.style.transform = "translateY(-2px)"; }}
                            onMouseLeave={e => { e.currentTarget.style.background = "rgba(240,165,0,0.08)"; e.currentTarget.style.borderColor = "rgba(240,165,0,0.2)"; e.currentTarget.style.color = "rgba(255,255,255,0.8)"; e.currentTarget.style.transform = "translateY(0)"; }}>
                            {p}
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
                    <h2 className="section-title-accent" style={{ fontFamily: "var(--font2)" }}>Book Publishing FAQ</h2>
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

function PublishingCTA() {
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
                        <img src="/images/book-3.png" alt="Book Publishing" style={{ width: "100%", objectFit: "contain", filter: "drop-shadow(0 24px 60px rgba(0,0,0,0.25))", animation: "floatForm 4s ease-in-out infinite" }} />
                    </div>

                    <div className="reveal-right" style={{ flex: 1 }}>
                        <h2 style={{ fontFamily: "var(--font2)", fontSize: "clamp(28px,4vw,42px)", fontWeight: 900, color: "var(--navy)", lineHeight: 1.2, marginBottom: 20 }}>
                            Ready To Publish<br />Your Book <span style={{ textDecoration: "underline", textDecorationColor: "rgba(13,18,64,0.2)", textUnderlineOffset: 6 }}>Worldwide</span>?
                        </h2>
                        <p style={{ fontSize: 15, color: "rgba(13,18,64,0.75)", lineHeight: 1.9, marginBottom: 32, maxWidth: 520 }}>
                            Don't let technical hurdles and metadata mistakes delay your launch. Get your book published on every major platform—professionally, strategically, and profitably.
                        </p>
                        <div style={{ display: "flex", gap: 14, flexWrap: "wrap" }}>
                            <Link href="/contact" className="btn-navy" style={{ fontSize: 15, padding: "16px 36px", textDecoration: "none" }}>Publish My Book</Link>
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

export default function BookPublishingPage() {
    return (
        <>
            <LightningCursor />
            <Navbar />

            <main>
                <PublishingHero />
                <OverviewSection />
                <StatsBar />
                <PublishingTypesSection />
                <WhySection />
                <FeaturesSection />
                <ProcessSection />
                <PlatformsSection />
                <FAQSection />
                <PublishingCTA />
            </main>

            <FooterSection />
        </>
    );
}