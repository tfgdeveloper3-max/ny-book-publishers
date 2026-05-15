"use client";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import { FooterSection } from "@/components/Footer";
import LightningCursor from "@/components/Lightningcursor";

/* ────────────────────────────────────────────
   DATA
   ──────────────────────────────────────────── */

const designTypes = [
    { emoji: "🌐", title: "Author Brand & Portfolio", desc: "A stunning professional hub showcasing your books, biography, media kit, and reviews. We design sites that establish your authority and make a lasting impression on readers and industry professionals.", badge: "Branding" },
    { emoji: "🚀", title: "Book Launch Pages", desc: "High-converting, single-page launch sites built to maximize pre-orders, day-one sales, and reader excitement. Optimized for traffic, engagement, and immediate action.", badge: "Launch" },
    { emoji: "🛒", title: "E-Commerce & Direct Sales", desc: "Sell books, signed copies, and merchandise directly to readers. We integrate WooCommerce or Shopify so you keep more royalties and own the customer relationship.", badge: "Sales" },
    { emoji: "📧", title: "Mailing List Funnels", desc: "Turn casual visitors into loyal fans. We design lead magnets, pop-ups, and signup funnels that integrate with Mailchimp, ConvertKit, and BookFunnel to grow your list fast.", badge: "Growth" },
    { emoji: "📝", title: "Blog & Content Hub", desc: "SEO-optimized blogging platforms that drive organic traffic from Google. We structure your content to attract new readers and keep existing fans engaged between releases.", badge: "Traffic" },
    { emoji: "🎤", title: "Speaking & Events", desc: "Showcase your speaking reel, tour dates, and media appearances. We build professional pages that event organizers and media outlets use to book you.", badge: "Media" },
];

const features = [
    { icon: "🎨", title: "100% Custom Design", desc: "No templates. No cookie-cutter layouts. Every pixel is designed from scratch to match your genre, brand, and personality—making your site as unique as your books." },
    { icon: "📱", title: "Mobile-First Responsive", desc: "Over 60% of web traffic is mobile. We design for phones first, ensuring your site looks flawless and loads fast on every screen size and device." },
    { icon: "🔍", title: "SEO Optimization", desc: "Built to rank. We implement proper heading structures, metadata, fast load speeds, and schema markup so readers find you when they search for your name or genre." },
    { icon: "🔌", title: "Seamless Integrations", desc: "We connect your site to Mailchimp, ConvertKit, BookFunnel, Shopify, WooCommerce, Google Analytics, and every tool in your author tech stack." },
    { icon: "⚡", title: "Speed & Security", desc: "Slow sites lose readers. We optimize for sub-3-second load times, enforce SSL security, and implement spam protection to keep your site fast and safe." },
    { icon: "🛠️", title: "Easy Author Dashboard", desc: "Update your blog, add new books, and change tour dates without touching code. We build on user-friendly platforms with full training included." },
];

const processSteps = [
    { step: "01", title: "Discovery & Brand Strategy", desc: "We study your books, genre, target reader, and brand identity. We define the site architecture, key features, and visual direction that will best serve your author career." },
    { step: "02", title: "Design & Prototyping", desc: "Our designers create custom mockups of your homepage and key pages. You review, provide feedback, and approve the design before any code is written." },
    { step: "03", title: "Development & Integration", desc: "We build your site with clean code, mobile responsiveness, SEO optimization, and all your integrations—email capture, e-commerce, book embeds, and analytics." },
    { step: "04", title: "Launch & Author Training", desc: "After final QA and your approval, we launch your site live. We then train you on the dashboard so you can manage updates, blog posts, and new book launches independently." },
];

const stats = [
    { number: "5,000+", label: "Author Websites Built" },
    { number: "60%+", label: "Avg Mobile Traffic" },
    { number: "100%", label: "Custom Design" },
    { number: "24/7", label: "Site Support" },
];

const faqs = [
    { q: "Why do I need an author website if I have an Amazon page?", a: "Your Amazon page is rented land—you don't control it, can't capture emails, and can't sell direct. Your website is your digital home that you own completely. It's where readers go to learn about you, join your list, and buy your books directly." },
    { q: "Can I sell my books directly from my website?", a: "Absolutely. We integrate e-commerce platforms like WooCommerce or Shopify that allow you to sell signed copies, bundles, and merchandise directly to readers—keeping significantly higher royalties than Amazon." },
    { q: "What platform do you build on?", a: "We build primarily on WordPress (for maximum flexibility, SEO, and ownership) and Shopify (for authors focused heavily on direct sales). We can also work with Squarespace or Wix if those better fit your technical comfort level." },
    { q: "Will my website work well on mobile phones?", a: "Yes. We design mobile-first, meaning your site is optimized for phones and tablets before desktop. Over 60% of author website traffic comes from mobile devices—your site will look and perform perfectly on every screen size." },
    { q: "Can I update the website myself after launch?", a: "Yes. We build on user-friendly content management systems and provide full video training. You'll be able to add blog posts, update your books, change tour dates, and manage your store without any coding knowledge." },
    { q: "Do you write the website copy too?", a: "Yes. We offer professional copywriting as part of our design packages. Our writers craft compelling author bios, book descriptions, and landing page copy that converts visitors into readers." },
    { q: "How long does it take to build an author website?", a: "A standard author website takes 4–6 weeks from strategy to launch. More complex sites with e-commerce, membership areas, or extensive content may take 6–8 weeks. Rush timelines are available." },
    { q: "Do you offer hosting and maintenance?", a: "Yes. We offer managed hosting and ongoing maintenance packages that include security updates, backups, speed optimization, and content updates—so you can focus on writing while we keep your site running flawlessly." },
];

/* ────────────────────────────────────────────
   HERO SECTION
   ──────────────────────────────────────────── */

function DesignHero() {
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
            <div style={{ position: "absolute", top: -140, left: -80, width: 420, height: 420, borderRadius: "50%", border: "1px solid rgba(240,165,0,0.05)", pointerEvents: "none" }} />

            <div style={{ position: "relative", zIndex: 1, maxWidth: 1320, margin: "0 auto", padding: "120px 40px 100px", textAlign: "center" }}>
                <div style={{ display: "inline-flex", alignItems: "center", gap: 10, background: "rgba(240,165,0,0.1)", border: "1px solid rgba(240,165,0,0.3)", borderRadius: 40, padding: "8px 20px", marginBottom: 28 }}>
                    <span style={{ width: 8, height: 8, borderRadius: "50%", background: "var(--accent)", animation: "pulse 2s infinite" }} />
                    <span style={{ fontSize: 12, fontWeight: 700, color: "var(--accent)", textTransform: "uppercase", letterSpacing: 2 }}>Web Design</span>
                </div>

                <h1 style={{ fontFamily: "var(--font2)", fontSize: "clamp(40px,7vw,78px)", fontWeight: 900, color: "var(--white)", lineHeight: 0.9, margin: "0 0 24px", letterSpacing: -2 }}>
                    Professional<br /><span style={{ color: "var(--accent)" }}>Author Website</span><br />Design
                </h1>

                <p style={{ fontSize: "clamp(15px,1.8vw,19px)", color: "var(--text-muted)", lineHeight: 1.9, maxWidth: 660, margin: "0 auto 36px" }}>
                    Build your brand, capture readers, and sell more books with a stunning, professional website designed exclusively for authors. Your digital home, built to convert.
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
                        <img src="/images/WCU-Left.webp" alt="Author Website Design" style={{ width: "100%", height: 520, objectFit: "cover", display: "block" }} />
                    </div>
                    <div style={{ position: "absolute", bottom: -20, right: -20, background: "linear-gradient(135deg,var(--accent),var(--accent2))", borderRadius: 14, padding: "16px 24px", boxShadow: "0 8px 30px rgba(240,165,0,0.4)", border: "3px solid var(--white)" }}>
                        <div style={{ fontSize: 24, fontWeight: 900, color: "var(--navy)", fontFamily: "var(--font2)", lineHeight: 1 }}>🌐</div>
                        <div style={{ fontSize: 10, fontWeight: 700, color: "var(--navy)", textTransform: "uppercase", letterSpacing: 1 }}>Digital Hub</div>
                    </div>
                </div>

                <div className="reveal-right" style={{ flex: 1, minWidth: 300 }}>
                    <p className="section-eyebrow">Your Digital Home</p>
                    <h2 style={{ fontFamily: "var(--font2)", fontSize: "clamp(28px,3.5vw,42px)", fontWeight: 900, color: "var(--navy)", lineHeight: 1.2, marginBottom: 24 }}>
                        Social Media Is <span style={{ color: "var(--accent)" }}>Rented Land</span>.<br />Own Your Platform.
                    </h2>
                    <div style={{ width: 60, height: 3, background: "var(--accent)", borderRadius: 2, marginBottom: 24 }} />

                    <p style={{ fontSize: 15, color: "#555", lineHeight: 1.9, marginBottom: 20 }}>
                        An Amazon author page isn't enough. Social media followers disappear when algorithms change. But your website? That's yours forever. It's the one place where you control the experience, own the data, and capture the relationship.
                    </p>
                    <p style={{ fontSize: 15, color: "#555", lineHeight: 1.9, marginBottom: 20 }}>
                        Without a website, you're sending readers to platforms where your competitors are one click away. You can't capture email addresses on Amazon. You can't sell direct on Instagram. You can't build a lasting business on someone else's land.
                    </p>
                    <p style={{ fontSize: 15, color: "#555", lineHeight: 1.9, marginBottom: 32 }}>
                        Our author websites are built for one purpose: converting casual visitors into lifelong readers. We design stunning, fast, mobile-optimized sites that capture emails, sell books, and establish your brand as a professional author.
                    </p>

                    <div style={{ display: "flex", gap: 14, flexWrap: "wrap" }}>
                        <Link href="/contact" className="btn-accent" style={{ textDecoration: "none" }}>Get Free Consultation</Link>
                        <a href="#design-types" className="btn-navy" style={{ textDecoration: "none" }}>Browse Site Types</a>
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
   DESIGN TYPES
   ──────────────────────────────────────────── */

function DesignTypesSection() {
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
        <section id="design-types" ref={ref} style={{ background: "#fafaf8", padding: "80px 40px", fontFamily: "var(--font)" }}>
            <style>{`
        .web-card {
          background: #fff;
          border: 2px solid rgba(13,18,64,0.2);
          border-radius: 20px;
          padding: 32px 28px;
          transition: all 0.35s cubic-bezier(0.16,1,0.3,1);
          position: relative;
          overflow: hidden;
        }
        .web-card::before {
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
        .web-card:hover::before { transform: scaleX(1); }
        .web-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 20px 48px rgba(0,0,0,0.12);
          border-color: rgba(240,165,0,0.4);
          background: linear-gradient(160deg, #0d1240 0%, #1a1f5e 100%);
        }
        .web-card:hover .s-emoji { transform: scale(1.1); background: rgba(240,165,0,0.15); }
        .web-card:hover .s-title { color: var(--accent) !important; }
        .web-card:hover .s-desc { color: rgba(255,255,255,0.7) !important; }
        .web-card:hover .s-badge { border-color: rgba(240,165,0,0.3) !important; color: var(--accent) !important; background: rgba(240,165,0,0.1) !important; }
      `}</style>

            <div style={{ maxWidth: 1200, margin: "0 auto" }}>
                <div className="reveal" style={{ textAlign: "center", marginBottom: 56 }}>
                    <p className="section-eyebrow" style={{ color: "var(--navy2)" }}>Site Types</p>
                    <h2 className="section-title">Types of Author Websites We Build</h2>
                    <p style={{ fontSize: 15, color: "#888", maxWidth: 580, margin: "12px auto 0", lineHeight: 1.8 }}>
                        From simple author portfolios to full e-commerce bookstores, we build websites tailored to your career stage and goals.
                    </p>
                </div>

                <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 24 }}>
                    {designTypes.map((g, i) => (
                        <div key={i} className="web-card reveal">
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
   WHY PROFESSIONAL WEB DESIGN MATTERS
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
        { num: "01", title: "Social Media Is Rented Land", desc: "Instagram can shadowban you. Facebook can change algorithms. Twitter can limit reach. Your website is the only platform you fully own and control—where no intermediary decides who sees your content." },
        { num: "02", title: "Email Lists Are Your Most Valuable Asset", desc: "Your email list is the only marketing channel with a 40x higher ROI than social media. Your website is the engine that captures and grows that list through signups and lead magnets." },
        { num: "03", title: "Direct Sales Mean Higher Royalties", desc: "Amazon takes 30–65% of your royalties. Selling directly from your site keeps 95%+ of the revenue. Plus you own the customer data and can market to them directly." },
        { num: "04", title: "Professionalism Sells Books", desc: "Readers, agents, and media professionals expect a professional web presence. A polished website builds instant credibility—while a DIY site or no site at all undermines it." },
    ];

    return (
        <section ref={ref} style={{ background: "var(--white)", padding: "80px 40px", fontFamily: "var(--font)" }}>
            <div style={{ maxWidth: 1200, margin: "0 auto", display: "flex", gap: 60, alignItems: "flex-start", flexWrap: "wrap" }}>

                <div className="reveal-left" style={{ flex: "0 0 400px" }}>
                    <p className="section-eyebrow" style={{ color: "var(--navy2)" }}>Why It Matters</p>
                    <h2 style={{ fontFamily: "var(--font2)", fontSize: "clamp(28px,3.5vw,42px)", fontWeight: 900, color: "var(--navy)", lineHeight: 1.2, marginBottom: 20 }}>
                        Why Every Author<br /><span style={{ color: "var(--accent)" }}>Needs a Website</span>.
                    </h2>
                    <div style={{ width: 60, height: 3, background: "var(--accent)", borderRadius: 2, marginBottom: 20 }} />
                    <p style={{ fontSize: 15, color: "#666", lineHeight: 1.9, marginBottom: 28 }}>
                        Your website is the foundation of your entire author business. Without it, you're building on sand.
                    </p>
                    <div style={{ background: "linear-gradient(135deg,var(--accent),var(--accent2))", borderRadius: 16, padding: "28px", position: "relative", overflow: "hidden" }}>
                        <div style={{ position: "absolute", top: -20, right: -20, width: 100, height: 100, borderRadius: "50%", background: "rgba(255,255,255,0.1)" }} />
                        <div style={{ fontSize: "clamp(36px,5vw,52px)", fontWeight: 900, color: "var(--navy)", fontFamily: "var(--font2)", lineHeight: 1, marginBottom: 4 }}>95%</div>
                        <div style={{ fontSize: 13, color: "rgba(13,18,64,0.7)", fontWeight: 600 }}>of full-time authors have a professional website</div>
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
                    <h2 className="section-title">What You Get With Our Author Websites</h2>
                    <p style={{ fontSize: 15, color: "#888", maxWidth: 580, margin: "12px auto 0", lineHeight: 1.8 }}>
                        A complete, professional web presence built to attract readers and grow your author career.
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
                    <h2 className="section-title">Our Author Website Design Process</h2>
                    <p style={{ fontSize: 15, color: "#888", maxWidth: 520, margin: "12px auto 0", lineHeight: 1.8 }}>
                        A collaborative, milestone-driven process that delivers a professional website you can manage yourself.
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
   INTEGRATIONS SECTION
   ──────────────────────────────────────────── */

function IntegrationsSection() {
    const ref = useRef<HTMLElement>(null);
    useEffect(() => {
        const el = ref.current; if (!el) return;
        const obs = new IntersectionObserver(([e]) => {
            if (e.isIntersecting) el.querySelectorAll(".reveal").forEach(c => c.classList.add("revealed"));
        }, { threshold: 0.1 });
        obs.observe(el);
        return () => obs.disconnect();
    }, []);

    const integrations = [
        "WordPress", "Shopify", "WooCommerce", "Mailchimp",
        "ConvertKit", "BookFunnel", "Stripe", "PayPal",
        "Google Analytics", "Amazon Associates", "Squarespace", "Wix",
        "Zapier", "Instagram Feed", "Goodreads", "Disqus Comments",
    ];

    return (
        <section ref={ref} style={{ background: "linear-gradient(135deg, #0d1240 0%, #1a1f5e 100%)", padding: "80px 40px", fontFamily: "var(--font)" }}>
            <div style={{ maxWidth: 1100, margin: "0 auto" }}>
                <div className="reveal" style={{ textAlign: "center", marginBottom: 48 }}>
                    <p className="section-eyebrow">Integrations</p>
                    <h2 className="section-title-accent" style={{ fontFamily: "var(--font2)" }}>We Integrate With Every Tool You Use</h2>
                    <p style={{ fontSize: 15, color: "var(--text-muted)", maxWidth: 520, margin: "12px auto 0", lineHeight: 1.8 }}>
                        Your website connects seamlessly with your entire author tech stack—from email marketing to e-commerce.
                    </p>
                </div>

                <div className="reveal" style={{ display: "flex", flexWrap: "wrap", gap: 12, justifyContent: "center" }}>
                    {integrations.map((t, i) => (
                        <div key={i} style={{ background: "rgba(240,165,0,0.08)", border: "1px solid rgba(240,165,0,0.2)", borderRadius: 30, padding: "10px 22px", fontSize: 13, fontWeight: 600, color: "rgba(255,255,255,0.8)", transition: "all 0.3s", cursor: "default" }}
                            onMouseEnter={e => { e.currentTarget.style.background = "rgba(240,165,0,0.2)"; e.currentTarget.style.borderColor = "rgba(240,165,0,0.5)"; e.currentTarget.style.color = "var(--accent)"; e.currentTarget.style.transform = "translateY(-2px)"; }}
                            onMouseLeave={e => { e.currentTarget.style.background = "rgba(240,165,0,0.08)"; e.currentTarget.style.borderColor = "rgba(240,165,0,0.2)"; e.currentTarget.style.color = "rgba(255,255,255,0.8)"; e.currentTarget.style.transform = "translateY(0)"; }}>
                            {t}
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
                    <h2 className="section-title-accent" style={{ fontFamily: "var(--font2)" }}>Author Website Design FAQ</h2>
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

function DesignCTA() {
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
                        <img src="/images/book-3.png" alt="Author Website" style={{ width: "100%", objectFit: "contain", filter: "drop-shadow(0 24px 60px rgba(0,0,0,0.25))", animation: "floatForm 4s ease-in-out infinite" }} />
                    </div>

                    <div className="reveal-right" style={{ flex: 1 }}>
                        <h2 style={{ fontFamily: "var(--font2)", fontSize: "clamp(28px,4vw,42px)", fontWeight: 900, color: "var(--navy)", lineHeight: 1.2, marginBottom: 20 }}>
                            Ready To Build Your<br /><span style={{ textDecoration: "underline", textDecorationColor: "rgba(13,18,64,0.2)", textUnderlineOffset: 6 }}>Digital Home</span>?
                        </h2>
                        <p style={{ fontSize: 15, color: "rgba(13,18,64,0.75)", lineHeight: 1.9, marginBottom: 32, maxWidth: 520 }}>
                            Stop renting your audience from social media platforms. Get a free consultation and discover how a professional author website can transform your career.
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

export default function AuthorWebsiteDesignPage() {
    return (
        <>
            <LightningCursor />
            <Navbar />

            <main>
                <DesignHero />
                <OverviewSection />
                <StatsBar />
                <DesignTypesSection />
                <WhySection />
                <FeaturesSection />
                <ProcessSection />
                <IntegrationsSection />
                <FAQSection />
                <DesignCTA />
            </main>

            <FooterSection />
        </>
    );
}