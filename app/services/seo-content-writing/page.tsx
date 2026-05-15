"use client";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import { FooterSection } from "@/components/Footer";
import LightningCursor from "@/components/Lightningcursor";

/* ────────────────────────────────────────────
   DATA
   ──────────────────────────────────────────── */

const contentTypes = [
    { emoji: "📝", title: "SEO Blog Posts & Articles", desc: "Keyword-optimized, reader-first content that ranks on Google and keeps visitors engaged. We write long-form and short-form posts engineered for both algorithms and humans.", badge: "Rankings" },
    { emoji: "🌐", title: "Website Copy & Landing Pages", desc: "Conversion-focused copy for homepages, service pages, and landing pages. Every headline, subhead, and CTA is strategically placed to turn visitors into customers.", badge: "Conversion" },
    { emoji: "🏷️", title: "Product Descriptions", desc: "Persuasive, SEO-rich product copy that highlights benefits, overcomes objections, and drives purchases. Tailored for Shopify, Amazon, and direct-to-consumer stores.", badge: "E-Commerce" },
    { emoji: "📰", title: "Press Releases & Media Kits", desc: "Professionally formatted press releases that get picked up by media outlets. We write newsworthy, AP-style content that builds credibility and earns backlinks.", badge: "PR" },
    { emoji: "📧", title: "Email Marketing Content", desc: "High-open-rate subject lines, engaging email sequences, and conversion-optimized newsletters. From welcome flows to re-engagement campaigns.", badge: "Retention" },
    { emoji: "📱", title: "Social Media Content", desc: "Platform-specific copy for LinkedIn, Instagram, Twitter/X, and Facebook. We write captions, threads, carousels, and ad copy that stops the scroll.", badge: "Social" },
    { emoji: "📄", title: "White Papers & E-Books", desc: "In-depth, authority-building content that positions your brand as a thought leader. We research, structure, and write gated assets that generate qualified leads.", badge: "Authority" },
    { emoji: "📊", title: "Case Studies", desc: "Compelling before-and-after narratives that showcase your results. We interview, analyze data, and write case studies that close deals and build trust.", badge: "Proof" },
    { emoji: "🔍", title: "SEO Meta & Schema Content", desc: "Title tags, meta descriptions, schema markup copy, and snippet-optimized content. We write the invisible text that makes your pages visible in search.", badge: "Technical" },
];

const features = [
    { icon: "🎯", title: "Keyword Research & Integration", desc: "We don't stuff keywords—we weave them. Every piece of content starts with deep keyword research to identify high-intent terms your audience is actually searching for." },
    { icon: "📈", title: "Search-Optimized Structure", desc: "H1s, H2s, H3s, internal linking, and content architecture designed for how Google crawls and ranks. Structure that serves both readers and robots." },
    { icon: "💰", title: "Conversion-Focused Copy", desc: "Traffic without conversion is noise. Every piece we write is engineered with clear CTAs, persuasive psychology, and funnel-aware positioning." },
    { icon: "🗣️", title: "Brand Voice Consistency", desc: "Whether playful, authoritative, or technical—we learn your brand voice and maintain it across every page, post, and platform. Your audience never hears a disconnect." },
    { icon: "📊", title: "Data-Driven Strategy", desc: "We analyze competitor content, search intent, and SERP features before writing a single word. Content strategies built on data, not guesswork." },
    { icon: "✅", title: "100% Original & Plagiarism-Free", desc: "Every piece is written from scratch, passes Copyscape and AI detection tools, and is backed by our originality guarantee. Your content, your intellectual property." },
];

const processSteps = [
    { step: "01", title: "Discovery & Research", desc: "We deep-dive into your brand, audience, competitors, and keyword landscape. We identify content gaps, search intent, and strategic opportunities before writing a word." },
    { step: "02", title: "Keyword Mapping & Outline", desc: "We map target keywords to specific pages, create SEO-optimized outlines with proper heading hierarchy, and define the content structure for maximum ranking potential." },
    { step: "03", title: "Writing & On-Page Optimization", desc: "Our writers craft compelling, keyword-integrated content with proper meta tags, internal linking suggestions, and schema-ready formatting. You review every draft." },
    { step: "04", title: "Revision, Polish & Delivery", desc: "We refine based on your feedback, run final SEO and readability checks, and deliver publication-ready content with all metadata and implementation notes included." },
];

const faqs = [
    { q: "What's the difference between SEO content and regular content?", a: "Regular content informs or entertains. SEO content does both—while also being strategically structured to rank in search engines. We optimize headings, keyword placement, internal links, meta tags, and content length to maximize visibility without sacrificing readability." },
    { q: "Do you use AI to write content?", a: "Our writers use AI as a research and ideation tool, never as a replacement. Every piece is human-written, fact-checked, and edited to ensure originality, accuracy, and brand alignment. We pass AI detection and plagiarism checks consistently." },
    { q: "How do you determine which keywords to target?", a: "We conduct comprehensive keyword research using premium tools to find terms with strong search volume, manageable competition, and high commercial intent. We also analyze SERP features, competitor rankings, and content gaps to identify the highest-opportunity keywords for your business." },
    { q: "Can you write for my specific industry?", a: "Yes. We've written SEO content across 50+ industries including SaaS, healthcare, finance, legal, e-commerce, real estate, technology, and more. Our research process ensures we understand your industry's terminology, regulations, and audience expectations." },
    { q: "How long does SEO content take to rank?", a: "Most SEO content begins showing ranking improvements within 8–12 weeks, with significant results typically appearing between 3–6 months. We focus on both quick wins (low-competition keywords) and long-term authority building (high-value competitive terms)." },
    { q: "Do you include meta tags and technical SEO elements?", a: "Absolutely. Every piece of content comes with optimized title tags, meta descriptions, header tag recommendations, image alt text suggestions, internal linking strategy, and schema markup guidance where applicable." },
    { q: "Who owns the content you write?", a: "You do. 100%. All content, copyrights, and intellectual property transfer to you upon payment. We never reuse, resell, or claim ownership of any content we create for you." },
    { q: "How much does SEO content writing cost?", a: "Pricing depends on content type, length, research depth, and volume. Blog posts start at $0.10–$0.15/word, website copy at $0.15–$0.25/word, and white papers/case studies at $0.20–$0.30/word. Contact us for a custom quote based on your needs." },
];

/* ────────────────────────────────────────────
   HERO SECTION
   ──────────────────────────────────────────── */

function SEOHero() {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext("2d")!;
        let w = canvas.offsetWidth, h = canvas.offsetHeight;
        canvas.width = w; canvas.height = h;

        const particles = Array.from({ length: 60 }, () => ({
            x: Math.random() * w, y: Math.random() * h,
            r: Math.random() * 1.2 + 0.4, speed: Math.random() * 0.2 + 0.06,
            opacity: Math.random(), delta: (Math.random() - 0.5) * 0.012,
        }));

        let raf: number;
        const draw = () => {
            ctx.clearRect(0, 0, w, h);
            particles.forEach(p => {
                p.opacity += p.delta;
                if (p.opacity <= 0.1 || p.opacity >= 0.75) p.delta *= -1;
                p.y -= p.speed; p.x += Math.sin(p.y * 0.005) * 0.35;
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

            <div style={{ position: "absolute", top: -160, right: -100, width: 450, height: 450, borderRadius: "50%", border: "1px solid rgba(240,165,0,0.05)", pointerEvents: "none" }} />
            <div style={{ position: "absolute", bottom: -100, left: -80, width: 350, height: 350, borderRadius: "50%", border: "1px solid rgba(240,165,0,0.04)", pointerEvents: "none" }} />

            <div style={{ position: "relative", zIndex: 1, maxWidth: 1320, margin: "0 auto", padding: "120px 40px 100px", textAlign: "center" }}>
                <div style={{ display: "inline-flex", alignItems: "center", gap: 10, background: "rgba(240,165,0,0.1)", border: "1px solid rgba(240,165,0,0.3)", borderRadius: 40, padding: "8px 20px", marginBottom: 28 }}>
                    <span style={{ width: 8, height: 8, borderRadius: "50%", background: "var(--accent)", animation: "pulse 2s infinite" }} />
                    <span style={{ fontSize: 12, fontWeight: 700, color: "var(--accent)", textTransform: "uppercase", letterSpacing: 2 }}>Writing Services</span>
                </div>

                <h1 style={{ fontFamily: "var(--font2)", fontSize: "clamp(40px,7vw,78px)", fontWeight: 900, color: "var(--white)", lineHeight: 0.9, margin: "0 0 24px", letterSpacing: -2 }}>
                    Professional<br /><span style={{ color: "var(--accent)" }}>SEO Content</span> Writing<br />Services
                </h1>

                <p style={{ fontSize: "clamp(15px,1.8vw,19px)", color: "var(--text-muted)", lineHeight: 1.9, maxWidth: 660, margin: "0 auto 36px" }}>
                    Content that ranks. Copy that converts. We craft search-optimized, reader-first content that drives organic traffic, builds authority, and turns visitors into customers.
                </p>

                <div style={{ display: "flex", gap: 14, justifyContent: "center", flexWrap: "wrap" }}>
                    <Link href="/contact" className="btn-accent" style={{ fontSize: 15, padding: "16px 36px", textDecoration: "none" }}>Get Free Consultation</Link>
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
                        <img src="/images/WCU-Left.webp" alt="SEO Content Writing" style={{ width: "100%", height: 520, objectFit: "cover", display: "block" }} />
                    </div>
                    <div style={{ position: "absolute", bottom: -20, right: -20, background: "linear-gradient(135deg,var(--accent),var(--accent2))", borderRadius: 14, padding: "16px 24px", boxShadow: "0 8px 30px rgba(240,165,0,0.4)", border: "3px solid var(--white)" }}>
                        <div style={{ fontSize: 24, fontWeight: 900, color: "var(--navy)", fontFamily: "var(--font2)", lineHeight: 1 }}>📊</div>
                        <div style={{ fontSize: 10, fontWeight: 700, color: "var(--navy)", textTransform: "uppercase", letterSpacing: 1 }}>Rank #1</div>
                    </div>
                </div>

                <div className="reveal-right" style={{ flex: 1, minWidth: 300 }}>
                    <p className="section-eyebrow">Beyond Keywords</p>
                    <h2 style={{ fontFamily: "var(--font2)", fontSize: "clamp(28px,3.5vw,42px)", fontWeight: 900, color: "var(--navy)", lineHeight: 1.2, marginBottom: 24 }}>
                        SEO Content That<br /><span style={{ color: "var(--accent)" }}>Actually Ranks & Converts</span>.
                    </h2>
                    <div style={{ width: 60, height: 3, background: "var(--accent)", borderRadius: 2, marginBottom: 24 }} />

                    <p style={{ fontSize: 15, color: "#555", lineHeight: 1.9, marginBottom: 20 }}>
                        Most SEO content reads like it was written for a robot. Stiff sentences, awkward keyword placement, and paragraphs that scream "I'm trying to rank." Your readers deserve better—and so does Google.
                    </p>
                    <p style={{ fontSize: 15, color: "#555", lineHeight: 1.9, marginBottom: 20 }}>
                        The truth is, Google's algorithms have evolved. They reward content that demonstrates expertise, satisfies search intent, and keeps readers engaged. Keyword stuffing doesn't work anymore. Thin content gets buried. And AI-generated fluff gets detected and devalued.
                    </p>
                    <p style={{ fontSize: 15, color: "#555", lineHeight: 1.9, marginBottom: 32 }}>
                        Our SEO content writers understand the balance. We craft content that's strategically optimized for search engines but written for real humans. Every piece is backed by keyword research, structured for crawlers, and polished for readers. The result? Content that climbs the rankings and keeps visitors on the page.
                    </p>

                    <div style={{ display: "flex", gap: 14, flexWrap: "wrap" }}>
                        <Link href="/contact" className="btn-accent" style={{ textDecoration: "none" }}>Get Free Consultation</Link>
                        <a href="#content-types" className="btn-navy" style={{ textDecoration: "none" }}>Browse Content Types</a>
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

    const stats = [
        { number: "10M+", label: "Words of SEO Content Written" },
        { number: "500+", label: "Websites Ranked on Page 1" },
        { number: "93%", label: "Client Retention Rate" },
        { number: "50+", label: "Industries Served" },
    ];

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
   CONTENT TYPES (Subgenre-Style Cards)
   ──────────────────────────────────────────── */

function ContentTypesSection() {
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
        <section id="content-types" ref={ref} style={{ background: "#fafaf8", padding: "80px 40px", fontFamily: "var(--font)" }}>
            <style>{`
        .seo-card {
          background: #fff;
          border: 2px solid rgba(13,18,64,0.2);
          border-radius: 20px;
          padding: 32px 28px;
          transition: all 0.35s cubic-bezier(0.16,1,0.3,1);
          position: relative;
          overflow: hidden;
        }
        .seo-card::before {
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
        .seo-card:hover::before { transform: scaleX(1); }
        .seo-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 20px 48px rgba(0,0,0,0.12);
          border-color: rgba(240,165,0,0.4);
          background: linear-gradient(160deg, #0d1240 0%, #1a1f5e 100%);
        }
        .seo-card:hover .s-emoji { transform: scale(1.1); background: rgba(240,165,0,0.15); }
        .seo-card:hover .s-title { color: var(--accent) !important; }
        .seo-card:hover .s-desc { color: rgba(255,255,255,0.7) !important; }
        .seo-card:hover .s-badge { border-color: rgba(240,165,0,0.3) !important; color: var(--accent) !important; background: rgba(240,165,0,0.1) !important; }
      `}</style>

            <div style={{ maxWidth: 1200, margin: "0 auto" }}>
                <div className="reveal" style={{ textAlign: "center", marginBottom: 56 }}>
                    <p className="section-eyebrow" style={{ color: "var(--navy2)" }}>Content Types</p>
                    <h2 className="section-title">Types of SEO Content We Write</h2>
                    <p style={{ fontSize: 15, color: "#888", maxWidth: 580, margin: "12px auto 0", lineHeight: 1.8 }}>
                        From blog posts to white papers, we create every type of search-optimized content your business needs to attract, engage, and convert.
                    </p>
                </div>

                <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 24 }}>
                    {contentTypes.map((g, i) => (
                        <div key={i} className="seo-card reveal">
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
   WHY SEO CONTENT MATTERS (Why Section)
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
        { num: "01", title: "Organic Traffic Is Your Best ROI", desc: "Paid ads stop when you stop paying. SEO content keeps driving traffic months and years after publication—one of the highest-ROI marketing investments you can make." },
        { num: "02", title: "Your Competitors Are Already Ranking", desc: "Every day you delay creating SEO content, your competitors capture more search visibility, more traffic, and more customers. The best time to start was yesterday." },
        { num: "03", title: "Google Rewards Expertise", desc: "E-E-A-T (Experience, Expertise, Authoritativeness, Trustworthiness) is Google's quality framework. Well-researched, expertly written content earns higher rankings and featured snippets." },
        { num: "04", title: "Content Fuels Every Channel", desc: "Blog posts become social content. Case studies become sales collateral. White papers become lead magnets. One investment in great content powers your entire marketing ecosystem." },
    ];

    return (
        <section ref={ref} style={{ background: "var(--white)", padding: "80px 40px", fontFamily: "var(--font)" }}>
            <div style={{ maxWidth: 1200, margin: "0 auto", display: "flex", gap: 60, alignItems: "flex-start", flexWrap: "wrap" }}>

                <div className="reveal-left" style={{ flex: "0 0 400px" }}>
                    <p className="section-eyebrow" style={{ color: "var(--navy2)" }}>Why It Matters</p>
                    <h2 style={{ fontFamily: "var(--font2)", fontSize: "clamp(28px,3.5vw,42px)", fontWeight: 900, color: "var(--navy)", lineHeight: 1.2, marginBottom: 20 }}>
                        Why SEO Content<br />Is <span style={{ color: "var(--accent)" }}>Non-Negotiable</span>.
                    </h2>
                    <div style={{ width: 60, height: 3, background: "var(--accent)", borderRadius: 2, marginBottom: 20 }} />
                    <p style={{ fontSize: 15, color: "#666", lineHeight: 1.9, marginBottom: 28 }}>
                        68% of online experiences begin with a search engine. If your business isn't showing up in search results, you're invisible to the majority of potential customers.
                    </p>
                    <div style={{ background: "linear-gradient(135deg,var(--accent),var(--accent2))", borderRadius: 16, padding: "28px", position: "relative", overflow: "hidden" }}>
                        <div style={{ position: "absolute", top: -20, right: -20, width: 100, height: 100, borderRadius: "50%", background: "rgba(255,255,255,0.1)" }} />
                        <div style={{ fontSize: "clamp(36px,5vw,52px)", fontWeight: 900, color: "var(--navy)", fontFamily: "var(--font2)", lineHeight: 1, marginBottom: 4 }}>68%</div>
                        <div style={{ fontSize: 13, color: "rgba(13,18,64,0.7)", fontWeight: 600 }}>of online experiences start with a search engine</div>
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
                    <h2 className="section-title">What You Get With Our SEO Content Writing</h2>
                    <p style={{ fontSize: 15, color: "#888", maxWidth: 580, margin: "12px auto 0", lineHeight: 1.8 }}>
                        Every piece of content comes fully optimized, researched, and ready to publish. No extra charge for the SEO work—it's built in.
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
                    <h2 className="section-title">Our SEO Content Writing Process</h2>
                    <p style={{ fontSize: 15, color: "#888", maxWidth: 520, margin: "12px auto 0", lineHeight: 1.8 }}>
                        A proven, research-first process that ensures every piece of content is optimized before a single word is written.
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
   INDUSTRIES SECTION
   ──────────────────────────────────────────── */

function IndustriesSection() {
    const ref = useRef<HTMLElement>(null);
    useEffect(() => {
        const el = ref.current; if (!el) return;
        const obs = new IntersectionObserver(([e]) => {
            if (e.isIntersecting) el.querySelectorAll(".reveal").forEach(c => c.classList.add("revealed"));
        }, { threshold: 0.1 });
        obs.observe(el);
        return () => obs.disconnect();
    }, []);

    const industries = [
        "SaaS & Technology", "Healthcare & Medical", "Finance & Fintech", "Legal & Law Firms",
        "E-Commerce & Retail", "Real Estate", "Education & EdTech", "Travel & Hospitality",
        "Manufacturing & Industrial", "Non-Profit & Government", "Food & Beverage", "Fitness & Wellness",
        "Automotive", "Construction", "Insurance", "Marketing Agencies",
    ];

    return (
        <section ref={ref} style={{ background: "linear-gradient(135deg, #0d1240 0%, #1a1f5e 100%)", padding: "80px 40px", fontFamily: "var(--font)" }}>
            <div style={{ maxWidth: 1100, margin: "0 auto" }}>
                <div className="reveal" style={{ textAlign: "center", marginBottom: 48 }}>
                    <p className="section-eyebrow">Industries</p>
                    <h2 className="section-title-accent" style={{ fontFamily: "var(--font2)" }}>SEO Content For Every Industry</h2>
                    <p style={{ fontSize: 15, color: "var(--text-muted)", maxWidth: 520, margin: "12px auto 0", lineHeight: 1.8 }}>
                        We understand the unique terminology, regulations, and audience expectations across dozens of industries.
                    </p>
                </div>

                <div className="reveal" style={{ display: "flex", flexWrap: "wrap", gap: 12, justifyContent: "center" }}>
                    {industries.map((ind, i) => (
                        <div key={i} style={{ background: "rgba(240,165,0,0.08)", border: "1px solid rgba(240,165,0,0.2)", borderRadius: 30, padding: "10px 22px", fontSize: 13, fontWeight: 600, color: "rgba(255,255,255,0.8)", transition: "all 0.3s", cursor: "default" }}
                            onMouseEnter={e => { e.currentTarget.style.background = "rgba(240,165,0,0.2)"; e.currentTarget.style.borderColor = "rgba(240,165,0,0.5)"; e.currentTarget.style.color = "var(--accent)"; e.currentTarget.style.transform = "translateY(-2px)"; }}
                            onMouseLeave={e => { e.currentTarget.style.background = "rgba(240,165,0,0.08)"; e.currentTarget.style.borderColor = "rgba(240,165,0,0.2)"; e.currentTarget.style.color = "rgba(255,255,255,0.8)"; e.currentTarget.style.transform = "translateY(0)"; }}>
                            {ind}
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
                    <h2 className="section-title-accent" style={{ fontFamily: "var(--font2)" }}>SEO Content Writing FAQ</h2>
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

function SEOCTA() {
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
                        <img src="/images/book-3.png" alt="SEO Content" style={{ width: "100%", objectFit: "contain", filter: "drop-shadow(0 24px 60px rgba(0,0,0,0.25))", animation: "floatForm 4s ease-in-out infinite" }} />
                    </div>

                    <div className="reveal-right" style={{ flex: 1 }}>
                        <h2 style={{ fontFamily: "var(--font2)", fontSize: "clamp(28px,4vw,42px)", fontWeight: 900, color: "var(--navy)", lineHeight: 1.2, marginBottom: 20 }}>
                            Ready To Rank<br />On <span style={{ textDecoration: "underline", textDecorationColor: "rgba(13,18,64,0.2)", textUnderlineOffset: 6 }}>Page One</span>?
                        </h2>
                        <p style={{ fontSize: 15, color: "rgba(13,18,64,0.75)", lineHeight: 1.9, marginBottom: 32, maxWidth: 520 }}>
                            Stop losing traffic to competitors with inferior content. Let our SEO writers create content that climbs rankings and converts visitors into customers. Get your free consultation today.
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


export default function SEOContentWritingPage() {
    return (
        <>
            <LightningCursor />
            <Navbar />

            <main>
                <SEOHero />
                <OverviewSection />
                <StatsBar />
                <ContentTypesSection />
                <WhySection />
                <FeaturesSection />
                <ProcessSection />
                <IndustriesSection />
                <FAQSection />
                <SEOCTA />
            </main>

            <FooterSection />
        </>
    );
}