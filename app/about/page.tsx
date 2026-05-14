// app/about/page.tsx
"use client";
import { useState, useEffect, useRef } from "react";
import Navbar from "@/components/Navbar";
import { FooterSection } from "@/components/Footer";
import LightningCursor from "@/components/Lightningcursor";

/* ────────────────────────────────────────────
   DATA
   ──────────────────────────────────────────── */

const timelineData = [
    { year: "2015", title: "The Spark", desc: "NY Book Publishers was founded in the heart of Manhattan with a simple belief: every author deserves a world-class publishing experience — not just the elite few." },
    { year: "2017", title: "First Bestseller", desc: "Our debut published title hit #1 on Kindle in its category within 8 weeks, proving that our author-first model produces real, measurable results." },
    { year: "2019", title: "Full-Service Suite", desc: "We expanded beyond ghostwriting into editing, cover design, illustration, marketing, and full distribution — becoming a true one-stop publishing house." },
    { year: "2021", title: "500+ Authors Served", desc: "We crossed the 500-author milestone, with books spanning fiction, memoirs, children's literature, self-help, and academic publishing." },
    { year: "2023", title: "Times Square Feature", desc: "NYBP lit up Times Square, showcasing our authors' stories on the world's biggest stage — a moment that defined our commitment to making authors visible." },
    { year: "2025", title: "Global Reach", desc: "Today our books reach readers in 40+ countries through Amazon, Barnes & Noble, Ingram, and 50+ retail platforms worldwide." },
];

const valuesData = [
    { icon: "🎯", title: "Author-First Philosophy", desc: "Every decision we make starts with one question: what's best for the author? Your vision, your voice, your royalties — always." },
    { icon: "🛡️", title: "Uncompromising Quality", desc: "From developmental editing to cover design, we hold every detail to the highest standard. No shortcuts, no compromises." },
    { icon: "🤝", title: "Full Transparency", desc: "No hidden fees, no vague timelines, no surprises. You'll always know exactly where your book stands and what comes next." },
    { icon: "🚀", title: "Relentless Innovation", desc: "We stay ahead of industry trends — from AI-assisted editing to advanced marketing analytics — so your book competes with the best." },
    { icon: "💡", title: "Creative Partnership", desc: "We don't just publish your book — we collaborate with you. Every step is a conversation, every choice a shared decision." },
    { icon: "🌍", title: "Global Mindset", desc: "Your book deserves the world. We ensure distribution across 50+ platforms in 40+ countries, because great stories have no borders." },
];

const statsData = [
    { number: 500, suffix: "+", label: "Authors Published" },
    { number: 12, suffix: "M+", label: "Books Sold" },
    { number: 40, suffix: "+", label: "Countries Reached" },
    { number: 100, suffix: "%", label: "Royalties Kept" },
    { number: 50, suffix: "+", label: "Retail Platforms" },
    { number: 98, suffix: "%", label: "Client Satisfaction" },
];

const teamData = [
    { name: "Jonathan Reed", role: "Founder & CEO", img: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&q=80", desc: "A former literary agent with 18 years in publishing, Jonathan built NYBP to give every author the red-carpet treatment." },
    { name: "Maria Santos", role: "Chief Editor", img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&q=80", desc: "Maria has edited 200+ titles across all genres. Her sharp eye and empathetic approach make every manuscript shine." },
    { name: "David Kim", role: "Creative Director", img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&q=80", desc: "David leads our design team, crafting covers and layouts that stop readers mid-scroll and demand a second look." },
    { name: "Elena Vasquez", role: "Marketing Head", img: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&q=80", desc: "Elena's data-driven campaigns have launched 30+ books to bestseller status. She makes sure the world finds your story." },
];

const apartData = [
    { icon: "💰", title: "100% Royalties, Always", desc: "Unlike traditional publishers who take 80–90% of your earnings, every cent your book makes goes directly to you. No cuts, no fine print." },
    { icon: "🖌️", title: "Unlimited Creative Control", desc: "Your book, your rules. From the cover to the final edit, you approve every decision. We guide — you decide." },
    { icon: "⏱️", title: "Lightning-Fast Turnaround", desc: "Traditional publishing takes 12–18 months. We get your book to market in 6–10 weeks without sacrificing quality." },
    { icon: "📊", title: "Real-Time Sales Dashboard", desc: "Track your book's performance across every platform, anytime. Full transparency into sales, royalties, and marketing results." },
];

const aboutFaqs = [
    { q: "Is NY Book Publishers a traditional or self-publishing company?", a: "We're a hybrid publisher. We combine the professional quality and full-service support of traditional publishing with the creative control, speed, and 100% royalties of self-publishing. You get the best of both worlds." },
    { q: "Do I need a finished manuscript to work with you?", a: "Not at all! Whether you have a finished manuscript, a rough draft, or just an idea — we meet you where you are. Our ghostwriting team can help bring your concept to life from scratch." },
    { q: "How long does the full publishing process take?", a: "Typically 6–10 weeks from manuscript submission to published book, depending on the services you need. Traditional publishers take 12–18 months — we work 6x faster without cutting corners." },
    { q: "What genres do you publish?", a: "All of them. Fiction, non-fiction, memoirs, children's books, poetry, academic, self-help, business, fantasy, mystery, romance — if it's a book, we can publish it." },
    { q: "Will my book be available in bookstores?", a: "Yes. Your book will be listed on Amazon, Barnes & Noble, Ingram (which supplies 40,000+ bookstores), Kobo, Apple Books, Google Play, and 50+ additional retail platforms worldwide." },
];

/* ────────────────────────────────────────────
   ABOUT HERO
   ──────────────────────────────────────────── */

function AboutHero() {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext("2d")!;
        let w = canvas.offsetWidth, h = canvas.offsetHeight;
        canvas.width = w; canvas.height = h;

        const particles = Array.from({ length: 70 }, () => ({
            x: Math.random() * w, y: Math.random() * h,
            r: Math.random() * 2 + 0.5, speed: Math.random() * 0.25 + 0.08,
            opacity: Math.random(), delta: (Math.random() - 0.5) * 0.015,
        }));

        let raf: number;
        const draw = () => {
            ctx.clearRect(0, 0, w, h);
            particles.forEach(p => {
                p.opacity += p.delta;
                if (p.opacity <= 0.1 || p.opacity >= 0.9) p.delta *= -1;
                p.y -= p.speed; p.x += Math.sin(p.y * 0.01) * 0.3;
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
        <section style={{ background: "var(--gradient-dark)", minHeight: 580, position: "relative", overflow: "hidden", fontFamily: "var(--font)" }}>
            <canvas ref={canvasRef} style={{ position: "absolute", inset: 0, width: "100%", height: "100%", pointerEvents: "none", zIndex: 0 }} />

            {/* decorative rings */}
            <div style={{ position: "absolute", top: -200, right: -100, width: 600, height: 600, borderRadius: "50%", border: "1px solid rgba(240,165,0,0.08)", pointerEvents: "none" }} />
            <div style={{ position: "absolute", bottom: -180, left: -120, width: 500, height: 500, borderRadius: "50%", border: "1px solid rgba(240,165,0,0.06)", pointerEvents: "none" }} />

            {/* diagonal accent stripe */}
            <div style={{ position: "absolute", top: 0, right: "18%", width: 2, height: "120%", background: "linear-gradient(180deg,transparent,rgba(240,165,0,0.12),transparent)", transform: "rotate(25deg)", transformOrigin: "top center", pointerEvents: "none" }} />

            <div style={{ position: "relative", zIndex: 1, maxWidth: 1320, margin: "0 auto", padding: "100px 40px 80px", display: "flex", alignItems: "center", gap: 60, flexWrap: "wrap" }}>
                {/* Left text */}
                <div style={{ flex: 1, minWidth: 320 }}>
                    <div style={{ display: "inline-flex", alignItems: "center", gap: 10, background: "rgba(240,165,0,0.1)", border: "1px solid rgba(240,165,0,0.3)", borderRadius: 40, padding: "8px 20px", marginBottom: 24 }}>
                        <span style={{ width: 8, height: 8, borderRadius: "50%", background: "var(--accent)", animation: "pulse 2s infinite" }} />
                        <span style={{ fontSize: 12, fontWeight: 700, color: "var(--accent)", textTransform: "uppercase", letterSpacing: 2 }}>About NY Book Publishers</span>
                    </div>

                    <h1 style={{ fontFamily: "var(--font2)", fontSize: "clamp(48px,7vw,86px)", fontWeight: 900, color: "var(--white)", lineHeight: 0.95, margin: "0 0 20px", letterSpacing: -2 }}>
                        Our Story<span style={{ color: "var(--accent)" }}>.</span><br />Your Voice<span style={{ color: "var(--accent)" }}>.</span>
                    </h1>

                    <p style={{ fontSize: 16, color: "var(--text-muted)", lineHeight: 1.9, maxWidth: 520, marginBottom: 36 }}>
                        We're not just another publishing company. We're a team of passionate readers, editors, designers, and marketers who believe every story deserves to be told — and told beautifully. From Manhattan to the world, we've helped 500+ authors turn their words into legacies.
                    </p>

                    <div style={{ display: "flex", gap: 14, flexWrap: "wrap" }}>
                        <a href="#our-story" className="btn-accent">Discover Our Journey</a>
                        <a href="#contact" className="btn-outline-white">Start Yours</a>
                    </div>
                </div>

                {/* Right — floating book stack with frames */}
                <div style={{ flexShrink: 0, width: 420, position: "relative" }}>
                    {/* glow */}
                    <div style={{ position: "absolute", inset: -40, background: "radial-gradient(ellipse at center, rgba(240,165,0,0.1) 0%, transparent 70%)", borderRadius: 24, pointerEvents: "none" }} />

                    {/* corner accents */}
                    {[
                        { top: -8, left: -8, borderTop: "3px solid var(--accent)", borderLeft: "3px solid var(--accent)", borderRadius: "4px 0 0 0" },
                        { top: -8, right: -8, borderTop: "3px solid var(--accent)", borderRight: "3px solid var(--accent)", borderRadius: "0 4px 0 0" },
                        { bottom: -8, left: -8, borderBottom: "3px solid var(--accent)", borderLeft: "3px solid var(--accent)", borderRadius: "0 0 0 4px" },
                        { bottom: -8, right: -8, borderBottom: "3px solid var(--accent)", borderRight: "3px solid var(--accent)", borderRadius: "0 0 4px 0" },
                    ].map((s, i) => (
                        <div key={i} style={{ position: "absolute", width: 36, height: 36, ...s as any, animation: `cornerTL 2.5s ${i * 0.3}s ease-in-out infinite` }} />
                    ))}

                    <div style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(240,165,0,0.15)", borderRadius: 20, padding: 28, backdropFilter: "blur(8px)" }}>
                        <img src="/images/book-3.png" alt="Published Books" style={{ width: "100%", height: 380, objectFit: "contain", filter: "drop-shadow(0 20px 50px rgba(0,0,0,0.4))" }} />
                    </div>

                    {/* floating stat badges */}
                    <div style={{ position: "absolute", top: 20, right: -30, background: "var(--white)", borderRadius: 14, padding: "14px 18px", boxShadow: "0 12px 40px rgba(0,0,0,0.3)", animation: "floatForm 4s ease-in-out infinite" }}>
                        <div style={{ fontSize: 24, fontWeight: 900, color: "var(--accent)", fontFamily: "var(--font2)", lineHeight: 1 }}>500+</div>
                        <div style={{ fontSize: 10, fontWeight: 700, color: "var(--navy)", textTransform: "uppercase", letterSpacing: 1 }}>Authors</div>
                    </div>
                    <div style={{ position: "absolute", bottom: 30, left: -25, background: "var(--white)", borderRadius: 14, padding: "14px 18px", boxShadow: "0 12px 40px rgba(0,0,0,0.3)", animation: "floatForm 4s 1.5s ease-in-out infinite" }}>
                        <div style={{ fontSize: 24, fontWeight: 900, color: "var(--navy)", fontFamily: "var(--font2)", lineHeight: 1 }}>100%</div>
                        <div style={{ fontSize: 10, fontWeight: 700, color: "var(--accent)", textTransform: "uppercase", letterSpacing: 1 }}>Royalties</div>
                    </div>
                </div>
            </div>
        </section>
    );
}

/* ────────────────────────────────────────────
   OUR STORY SECTION
   ──────────────────────────────────────────── */

function OurStorySection() {
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
        <section id="our-story" ref={ref} style={{ background: "var(--white)", fontFamily: "var(--font)" }}>
            {/* accent bar */}
            <div style={{ height: 4, background: "linear-gradient(90deg,transparent,var(--accent),transparent)" }} />

            <div style={{ maxWidth: 1200, margin: "0 auto", padding: "80px 40px", display: "flex", alignItems: "center", gap: 60, flexWrap: "wrap" }}>
                {/* Left image */}
                <div className="reveal-left" style={{ flex: "0 0 440px", position: "relative" }}>
                    <div style={{ borderRadius: 20, overflow: "hidden", boxShadow: "0 24px 80px rgba(0,0,0,0.12)", border: "3px solid rgba(240,165,0,0.15)" }}>
                        <img src="/images/WCU-Left.webp" alt="Our Story" style={{ width: "100%", height: 520, objectFit: "cover", display: "block" }} />
                    </div>
                    {/* year badge */}
                    <div style={{
                        position: "absolute", bottom: -20, right: -20,
                        width: 110, height: 110, borderRadius: "50%",
                        background: "linear-gradient(135deg,var(--accent),var(--accent2))",
                        display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center",
                        boxShadow: "0 8px 30px rgba(240,165,0,0.4)",
                        border: "4px solid var(--white)",
                    }}>
                        <span style={{ fontSize: 28, fontWeight: 900, color: "var(--navy)", fontFamily: "var(--font2)", lineHeight: 1 }}>2015</span>
                        <span style={{ fontSize: 9, fontWeight: 700, color: "var(--navy)", textTransform: "uppercase", letterSpacing: 1 }}>Est.</span>
                    </div>
                    {/* decorative dots */}
                    <div style={{ position: "absolute", top: -16, left: -16, display: "grid", gridTemplateColumns: "repeat(4,8px)", gap: 8 }}>
                        {Array.from({ length: 16 }).map((_, i) => (
                            <div key={i} style={{ width: 8, height: 8, borderRadius: "50%", background: i % 3 === 0 ? "var(--accent)" : "rgba(240,165,0,0.2)" }} />
                        ))}
                    </div>
                </div>

                {/* Right text */}
                <div className="reveal-right" style={{ flex: 1, minWidth: 300 }}>
                    <p className="section-eyebrow">Who We Are</p>
                    <h2 style={{ fontFamily: "var(--font2)", fontSize: "clamp(28px,3.5vw,42px)", fontWeight: 900, color: "var(--navy)", lineHeight: 1.2, marginBottom: 24 }}>
                        Born In New York.<br />Built For <span style={{ color: "var(--accent)" }}>Every Author</span>.
                    </h2>

                    <div style={{ width: 60, height: 3, background: "var(--accent)", borderRadius: 2, marginBottom: 24 }} />

                    <p style={{ fontSize: 15, color: "#555", lineHeight: 1.9, marginBottom: 20 }}>
                        NY Book Publishers was founded with a rebellious idea: that publishing shouldn't be a privilege reserved for the few. Every writer who has poured their soul into a manuscript deserves a team that treats their work with the same respect and investment as a bestseller.
                    </p>
                    <p style={{ fontSize: 15, color: "#555", lineHeight: 1.9, marginBottom: 20 }}>
                        From our headquarters at 42 Broadway in the heart of Manhattan's Financial District, we've built a full-service publishing house that covers every step of the journey — ghostwriting, editing, cover design, illustration, formatting, marketing, and global distribution.
                    </p>
                    <p style={{ fontSize: 15, color: "#555", lineHeight: 1.9, marginBottom: 32 }}>
                        What truly sets us apart is our author-first model. We don't own your rights. We don't take your royalties. We partner with you to create something extraordinary, and then we make sure the world gets to read it.
                    </p>

                    {/* mini stats */}
                    <div style={{ display: "flex", gap: 28, flexWrap: "wrap", marginBottom: 32 }}>
                        {[["500+", "Authors Published"], ["40+", "Countries"], ["50+", "Retail Platforms"]].map(([n, l]) => (
                            <div key={l} style={{ textAlign: "center" }}>
                                <div style={{ fontSize: 28, fontWeight: 900, color: "var(--accent)", fontFamily: "var(--font2)", lineHeight: 1 }}>{n}</div>
                                <div style={{ fontSize: 11, fontWeight: 700, color: "#999", textTransform: "uppercase", letterSpacing: 1.5, marginTop: 4 }}>{l}</div>
                            </div>
                        ))}
                    </div>

                    <div style={{ display: "flex", gap: 14, flexWrap: "wrap" }}>
                        <a href="#timeline" className="btn-accent">Our Journey</a>
                        <a href="#contact" className="btn-navy">Get In Touch</a>
                    </div>
                </div>
            </div>
        </section>
    );
}

/* ────────────────────────────────────────────
   MISSION & VISION
   ──────────────────────────────────────────── */

function MissionVisionSection() {
    const ref = useRef<HTMLElement>(null);
    useEffect(() => {
        const el = ref.current; if (!el) return;
        const obs = new IntersectionObserver(([e]) => {
            if (e.isIntersecting) el.querySelectorAll(".reveal,.reveal-scale").forEach(c => c.classList.add("revealed"));
        }, { threshold: 0.1 });
        obs.observe(el);
        return () => obs.disconnect();
    }, []);

    return (
        <section ref={ref} style={{ background: "var(--gradient-dark)", padding: "80px 40px", fontFamily: "var(--font)", position: "relative", overflow: "hidden" }}>
            {/* glow */}
            <div style={{ position: "absolute", top: "20%", left: "50%", transform: "translateX(-50%)", width: 700, height: 350, background: "radial-gradient(ellipse,rgba(240,165,0,0.06),transparent)", pointerEvents: "none" }} />

            <div className="reveal" style={{ textAlign: "center", marginBottom: 52, position: "relative", zIndex: 1 }}>
                <p className="section-eyebrow">Our Purpose</p>
                <h2 className="section-title-accent" style={{ fontFamily: "var(--font2)" }}>Mission & Vision</h2>
            </div>

            <div style={{ maxWidth: 1100, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 32, position: "relative", zIndex: 1 }}>
                {/* Mission */}
                <div className="reveal" style={{
                    background: "rgba(255,255,255,0.04)", border: "1px solid rgba(240,165,0,0.2)", borderRadius: 20,
                    padding: "44px 36px", position: "relative", overflow: "hidden",
                    transition: "transform 0.3s, border-color 0.3s",
                }}
                    onMouseEnter={e => { (e.currentTarget as HTMLElement).style.transform = "translateY(-6px)"; (e.currentTarget as HTMLElement).style.borderColor = "rgba(240,165,0,0.5)"; }}
                    onMouseLeave={e => { (e.currentTarget as HTMLElement).style.transform = "translateY(0)"; (e.currentTarget as HTMLElement).style.borderColor = "rgba(240,165,0,0.2)"; }}>
                    {/* top accent */}
                    <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 4, background: "linear-gradient(90deg,var(--accent),var(--accent2))" }} />
                    {/* icon */}
                    <div style={{ width: 64, height: 64, borderRadius: 16, background: "linear-gradient(135deg,var(--accent),var(--accent2))", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 28, marginBottom: 24, boxShadow: "0 8px 24px rgba(240,165,0,0.3)" }}>
                        🎯
                    </div>
                    <h3 style={{ fontSize: 22, fontWeight: 800, color: "var(--accent)", fontFamily: "var(--font2)", marginBottom: 16 }}>Our Mission</h3>
                    <p style={{ fontSize: 14.5, color: "var(--text-muted)", lineHeight: 1.9, marginBottom: 20 }}>
                        To democratize publishing by providing every author — regardless of experience, genre, or background — with the tools, team, and platform to publish professionally, retain full ownership, and reach readers worldwide.
                    </p>
                    <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
                        {["Full Ownership", "Pro Quality", "Global Reach"].map(tag => (
                            <span key={tag} style={{ fontSize: 11, fontWeight: 700, color: "var(--accent)", background: "rgba(240,165,0,0.1)", border: "1px solid rgba(240,165,0,0.25)", borderRadius: 20, padding: "6px 14px" }}>{tag}</span>
                        ))}
                    </div>
                </div>

                {/* Vision */}
                <div className="reveal" style={{
                    background: "rgba(255,255,255,0.04)", border: "1px solid rgba(240,165,0,0.2)", borderRadius: 20,
                    padding: "44px 36px", position: "relative", overflow: "hidden",
                    transition: "transform 0.3s, border-color 0.3s",
                }}
                    onMouseEnter={e => { (e.currentTarget as HTMLElement).style.transform = "translateY(-6px)"; (e.currentTarget as HTMLElement).style.borderColor = "rgba(240,165,0,0.5)"; }}
                    onMouseLeave={e => { (e.currentTarget as HTMLElement).style.transform = "translateY(0)"; (e.currentTarget as HTMLElement).style.borderColor = "rgba(240,165,0,0.2)"; }}>
                    <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 4, background: "linear-gradient(90deg,var(--navy),var(--navy2))" }} />
                    <div style={{ width: 64, height: 64, borderRadius: 16, background: "linear-gradient(135deg,var(--navy),var(--navy2))", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 28, marginBottom: 24, boxShadow: "0 8px 24px rgba(13,18,64,0.4)", border: "2px solid rgba(240,165,0,0.3)" }}>
                        🔭
                    </div>
                    <h3 style={{ fontSize: 22, fontWeight: 800, color: "var(--white)", fontFamily: "var(--font2)", marginBottom: 16 }}>Our Vision</h3>
                    <p style={{ fontSize: 14.5, color: "var(--text-muted)", lineHeight: 1.9, marginBottom: 20 }}>
                        A world where no great story goes untold. We envision a publishing landscape where authors are empowered, not exploited — where creative control and financial reward belong to the people who write the books, not the companies that print them.
                    </p>
                    <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
                        {["Author Empowerment", "Creative Freedom", "No Gatekeepers"].map(tag => (
                            <span key={tag} style={{ fontSize: 11, fontWeight: 700, color: "var(--white)", background: "rgba(13,18,64,0.5)", border: "1px solid rgba(255,255,255,0.15)", borderRadius: 20, padding: "6px 14px" }}>{tag}</span>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

/* ────────────────────────────────────────────
   STATS COUNTER (animated)
   ──────────────────────────────────────────── */

function StatsCounter({ number, suffix, label }: { number: number; suffix: string; label: string }) {
    const [count, setCount] = useState(0);
    const ref = useRef<HTMLDivElement>(null);
    const counted = useRef(false);

    useEffect(() => {
        const el = ref.current; if (!el) return;
        const obs = new IntersectionObserver(([e]) => {
            if (e.isIntersecting && !counted.current) {
                counted.current = true;
                const duration = 2000;
                const start = performance.now();
                const animate = (now: number) => {
                    const progress = Math.min((now - start) / duration, 1);
                    const eased = 1 - Math.pow(1 - progress, 3); // ease-out cubic
                    setCount(Math.floor(eased * number));
                    if (progress < 1) requestAnimationFrame(animate);
                };
                requestAnimationFrame(animate);
            }
        }, { threshold: 0.3 });
        obs.observe(el);
        return () => obs.disconnect();
    }, [number]);

    return (
        <div ref={ref} style={{ textAlign: "center", padding: "24px 16px" }}>
            <div style={{ fontSize: "clamp(32px,4vw,48px)", fontWeight: 900, color: "var(--accent)", fontFamily: "var(--font2)", lineHeight: 1 }}>
                {count}{suffix}
            </div>
            <div style={{ fontSize: 12, fontWeight: 700, color: "rgba(255,255,255,0.6)", textTransform: "uppercase", letterSpacing: 2, marginTop: 8 }}>{label}</div>
        </div>
    );
}

function StatsSection() {
    return (
        <section style={{ background: "linear-gradient(135deg,var(--navy) 0%,var(--navy2) 100%)", padding: "56px 40px", fontFamily: "var(--font)", position: "relative", overflow: "hidden" }}>
            {/* subtle pattern */}
            <div style={{ position: "absolute", inset: 0, opacity: 0.03, backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")", pointerEvents: "none" }} />

            <div style={{ maxWidth: 1200, margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(6,1fr)", gap: 16, position: "relative", zIndex: 1 }}>
                {statsData.map(s => <StatsCounter key={s.label} {...s} />)}
            </div>
        </section>
    );
}

/* ────────────────────────────────────────────
   TIMELINE / JOURNEY
   ──────────────────────────────────────────── */

function TimelineSection() {
    const ref = useRef<HTMLElement>(null);
    useEffect(() => {
        const el = ref.current; if (!el) return;
        const obs = new IntersectionObserver(([e]) => {
            if (e.isIntersecting) el.querySelectorAll(".reveal,.reveal-left,.reveal-right").forEach(c => c.classList.add("revealed"));
        }, { threshold: 0.05 });
        obs.observe(el);
        return () => obs.disconnect();
    }, []);

    return (
        <section id="timeline" ref={ref} style={{ background: "#fafaf8", padding: "80px 40px", fontFamily: "var(--font)" }}>
            <div className="reveal" style={{ textAlign: "center", marginBottom: 60 }}>
                <p className="section-eyebrow" style={{ color: "var(--navy2)" }}>Our Journey</p>
                <h2 className="section-title">From A Spark To A Movement</h2>
                <p style={{ fontSize: 15, color: "#888", maxWidth: 580, margin: "12px auto 0", lineHeight: 1.8 }}>
                    Every great story has chapters. Here are ours — the moments that shaped NY Book Publishers into what we are today.
                </p>
            </div>

            <div style={{ maxWidth: 900, margin: "0 auto", position: "relative" }}>
                {/* vertical line */}
                <div style={{ position: "absolute", left: "50%", top: 0, bottom: 0, width: 3, background: "linear-gradient(180deg,var(--accent),rgba(240,165,0,0.15))", transform: "translateX(-50%)", borderRadius: 2 }} />

                {timelineData.map((item, i) => {
                    const isLeft = i % 2 === 0;
                    return (
                        <div key={item.year} className={isLeft ? "reveal-left" : "reveal-right"} style={{
                            display: "flex", alignItems: "center",
                            flexDirection: isLeft ? "row" : "row-reverse",
                            marginBottom: i < timelineData.length - 1 ? 48 : 0,
                            position: "relative",
                        }}>
                            {/* Content */}
                            <div style={{ flex: 1, padding: isLeft ? "0 48px 0 0" : "0 0 0 48px" }}>
                                <div style={{
                                    background: "var(--white)", borderRadius: 16, padding: "28px 28px",
                                    boxShadow: "0 8px 32px rgba(0,0,0,0.06)",
                                    border: "1px solid rgba(240,165,0,0.12)",
                                    borderTop: "3px solid var(--accent)",
                                    transition: "transform 0.3s, box-shadow 0.3s",
                                }}
                                    onMouseEnter={e => { (e.currentTarget as HTMLElement).style.transform = "translateY(-4px)"; (e.currentTarget as HTMLElement).style.boxShadow = "0 16px 48px rgba(240,165,0,0.12)"; }}
                                    onMouseLeave={e => { (e.currentTarget as HTMLElement).style.transform = "translateY(0)"; (e.currentTarget as HTMLElement).style.boxShadow = "0 8px 32px rgba(0,0,0,0.06)"; }}>
                                    <span style={{ fontSize: 12, fontWeight: 800, color: "var(--accent)", letterSpacing: 2, textTransform: "uppercase", display: "block", marginBottom: 6 }}>{item.year}</span>
                                    <h3 style={{ fontSize: 18, fontWeight: 800, color: "var(--navy)", fontFamily: "var(--font2)", marginBottom: 10 }}>{item.title}</h3>
                                    <p style={{ fontSize: 13.5, color: "#666", lineHeight: 1.85, margin: 0 }}>{item.desc}</p>
                                </div>
                            </div>

                            {/* Center dot */}
                            <div style={{
                                width: 48, height: 48, borderRadius: "50%", flexShrink: 0,
                                background: "linear-gradient(135deg,var(--accent),var(--accent2))",
                                display: "flex", alignItems: "center", justifyContent: "center",
                                boxShadow: "0 4px 20px rgba(240,165,0,0.3)",
                                border: "4px solid #fafaf8",
                                position: "relative", zIndex: 2,
                                fontSize: 14, fontWeight: 900, color: "var(--navy)", fontFamily: "var(--font2)",
                            }}>
                                {item.year.slice(-2)}
                            </div>

                            {/* Spacer */}
                            <div style={{ flex: 1 }} />
                        </div>
                    );
                })}
            </div>
        </section>
    );
}

/* ────────────────────────────────────────────
   OUR VALUES
   ──────────────────────────────────────────── */

function ValuesSection() {
    const ref = useRef<HTMLElement>(null);
    useEffect(() => {
        const el = ref.current; if (!el) return;
        const obs = new IntersectionObserver(([e]) => {
            if (e.isIntersecting) {
                el.querySelectorAll(".reveal").forEach((c, i) => setTimeout(() => c.classList.add("revealed"), i * 80));
            }
        }, { threshold: 0.08 });
        obs.observe(el);
        return () => obs.disconnect();
    }, []);

    return (
        <section ref={ref} style={{ background: "var(--white)", padding: "80px 40px", fontFamily: "var(--font)" }}>
            <div className="reveal" style={{ textAlign: "center", maxWidth: 700, margin: "0 auto 56px" }}>
                <p className="section-eyebrow">Core Values</p>
                <h2 className="section-title">The Principles That Guide Us</h2>
                <p style={{ fontSize: 15, color: "#888", lineHeight: 1.85 }}>
                    Six values form the backbone of everything we do — from how we treat authors to how we approach every project.
                </p>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", maxWidth: 1100, margin: "0 auto", gap: 24 }}>
                {valuesData.map((v, i) => (
                    <div key={i} className="reveal" style={{
                        padding: "36px 28px", borderRadius: 18,
                        background: i % 2 === 0 ? "#fff" : "rgba(240,165,0,0.03)",
                        border: "1px solid rgba(240,165,0,0.1)",
                        position: "relative", overflow: "hidden",
                        transition: "transform 0.3s, box-shadow 0.3s",
                    }}
                        onMouseEnter={e => { (e.currentTarget as HTMLElement).style.transform = "translateY(-6px)"; (e.currentTarget as HTMLElement).style.boxShadow = "0 16px 48px rgba(240,165,0,0.1)"; }}
                        onMouseLeave={e => { (e.currentTarget as HTMLElement).style.transform = "translateY(0)"; (e.currentTarget as HTMLElement).style.boxShadow = "none"; }}>
                        {/* top accent */}
                        <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 3, background: "linear-gradient(90deg,var(--accent),transparent)", opacity: 0, transition: "opacity 0.3s" }}
                            onMouseEnter={e => ((e.currentTarget as HTMLElement).style.opacity = "1")}
                            onMouseLeave={e => ((e.currentTarget as HTMLElement).style.opacity = "0")} />
                        {/* icon */}
                        <div style={{
                            width: 56, height: 56, borderRadius: 14,
                            background: "linear-gradient(135deg,var(--navy),var(--navy2))",
                            display: "flex", alignItems: "center", justifyContent: "center",
                            fontSize: 24, marginBottom: 20,
                            boxShadow: "0 6px 20px rgba(13,18,64,0.25)",
                            transition: "transform 0.3s",
                        }}
                            onMouseEnter={e => (e.currentTarget as HTMLElement).style.transform = "scale(1.1) rotate(-3deg)"}
                            onMouseLeave={e => (e.currentTarget as HTMLElement).style.transform = "scale(1) rotate(0)"}>
                            {v.icon}
                        </div>
                        <h3 style={{ fontSize: 17, fontWeight: 800, color: "var(--navy)", fontFamily: "var(--font2)", marginBottom: 12 }}>{v.title}</h3>
                        <p style={{ fontSize: 13.5, color: "#777", lineHeight: 1.85 }}>{v.desc}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}

/* ────────────────────────────────────────────
   WHAT SETS US APART
   ──────────────────────────────────────────── */

function ApartSection() {
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
        <section ref={ref} style={{ background: "var(--gradient-dark)", padding: "80px 40px", fontFamily: "var(--font)", position: "relative", overflow: "hidden" }}>
            <div style={{ position: "absolute", top: "25%", right: -100, width: 400, height: 400, borderRadius: "50%", border: "1px solid rgba(240,165,0,0.06)", pointerEvents: "none" }} />

            <div className="reveal" style={{ textAlign: "center", marginBottom: 56, position: "relative", zIndex: 1 }}>
                <p className="section-eyebrow">Our Difference</p>
                <h2 className="section-title-accent" style={{ fontFamily: "var(--font2)" }}>What Sets Us Apart</h2>
                <p style={{ fontSize: 15, color: "var(--text-muted)", maxWidth: 560, margin: "12px auto 0", lineHeight: 1.85 }}>
                    In an industry that often exploits authors, we've built a model that puts you first — always.
                </p>
            </div>

            <div style={{ maxWidth: 1100, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24, position: "relative", zIndex: 1 }}>
                {apartData.map((item, i) => (
                    <div key={i} className="reveal" style={{
                        display: "flex", gap: 20, padding: "32px 28px",
                        background: "rgba(255,255,255,0.04)", border: "1px solid rgba(240,165,0,0.15)",
                        borderRadius: 18, transition: "transform 0.3s, border-color 0.3s",
                    }}
                        onMouseEnter={e => { (e.currentTarget as HTMLElement).style.transform = "translateY(-4px)"; (e.currentTarget as HTMLElement).style.borderColor = "rgba(240,165,0,0.4)"; }}
                        onMouseLeave={e => { (e.currentTarget as HTMLElement).style.transform = "translateY(0)"; (e.currentTarget as HTMLElement).style.borderColor = "rgba(240,165,0,0.15)"; }}>
                        {/* icon */}
                        <div style={{
                            width: 52, height: 52, borderRadius: 14, flexShrink: 0,
                            background: "linear-gradient(135deg,var(--accent),var(--accent2))",
                            display: "flex", alignItems: "center", justifyContent: "center",
                            fontSize: 22, boxShadow: "0 6px 20px rgba(240,165,0,0.3)",
                        }}>
                            {item.icon}
                        </div>
                        <div>
                            <h3 style={{ fontSize: 16, fontWeight: 800, color: "var(--accent)", fontFamily: "var(--font2)", marginBottom: 8 }}>{item.title}</h3>
                            <p style={{ fontSize: 13.5, color: "var(--text-muted)", lineHeight: 1.85 }}>{item.desc}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}

/* ────────────────────────────────────────────
   TEAM SECTION
   ──────────────────────────────────────────── */

function TeamSection() {
    const ref = useRef<HTMLElement>(null);
    useEffect(() => {
        const el = ref.current; if (!el) return;
        const obs = new IntersectionObserver(([e]) => {
            if (e.isIntersecting) el.querySelectorAll(".reveal,.reveal-scale").forEach(c => c.classList.add("revealed"));
        }, { threshold: 0.1 });
        obs.observe(el);
        return () => obs.disconnect();
    }, []);

    return (
        <section ref={ref} style={{ background: "var(--white)", padding: "80px 40px", fontFamily: "var(--font)" }}>
            <div className="reveal" style={{ textAlign: "center", marginBottom: 56 }}>
                <p className="section-eyebrow" style={{ color: "var(--navy2)" }}>Our Team</p>
                <h2 className="section-title">The People Behind Your Success</h2>
                <p style={{ fontSize: 15, color: "#888", maxWidth: 520, margin: "12px auto 0", lineHeight: 1.85 }}>
                    Meet the publishing professionals who turn manuscripts into masterpieces.
                </p>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", maxWidth: 1100, margin: "0 auto", gap: 28 }}>
                {teamData.map((member, i) => (
                    <div key={i} className="reveal" style={{
                        borderRadius: 20, overflow: "hidden",
                        border: "2px solid rgba(240,165,0,0.12)",
                        background: "#fff",
                        transition: "transform 0.3s, box-shadow 0.3s",
                    }}
                        onMouseEnter={e => { (e.currentTarget as HTMLElement).style.transform = "translateY(-8px)"; (e.currentTarget as HTMLElement).style.boxShadow = "0 20px 60px rgba(240,165,0,0.12)"; }}
                        onMouseLeave={e => { (e.currentTarget as HTMLElement).style.transform = "translateY(0)"; (e.currentTarget as HTMLElement).style.boxShadow = "none"; }}>
                        {/* photo */}
                        <div style={{ position: "relative", overflow: "hidden" }}>
                            <img src={member.img} alt={member.name} style={{ width: "100%", height: 280, objectFit: "cover", display: "block", transition: "transform 0.4s" }}
                                onMouseEnter={e => (e.currentTarget as HTMLImageElement).style.transform = "scale(1.06)"}
                                onMouseLeave={e => (e.currentTarget as HTMLImageElement).style.transform = "scale(1)"} />
                            {/* overlay */}
                            <div style={{ position: "absolute", inset: 0, background: "linear-gradient(transparent 50%, rgba(13,18,64,0.8))", pointerEvents: "none" }} />
                            {/* name on image */}
                            <div style={{ position: "absolute", bottom: 12, left: 16, zIndex: 1 }}>
                                <div style={{ fontSize: 16, fontWeight: 800, color: "var(--white)", fontFamily: "var(--font2)" }}>{member.name}</div>
                                <div style={{ fontSize: 12, fontWeight: 700, color: "var(--accent)", textTransform: "uppercase", letterSpacing: 1.5 }}>{member.role}</div>
                            </div>
                        </div>
                        {/* bio */}
                        <div style={{ padding: "20px 18px" }}>
                            <p style={{ fontSize: 13, color: "#777", lineHeight: 1.8 }}>{member.desc}</p>
                        </div>
                        {/* social */}
                        <div style={{ display: "flex", gap: 8, padding: "0 18px 18px" }}>
                            {["in", "tw"].map((s, si) => (
                                <div key={si} style={{
                                    width: 32, height: 32, borderRadius: 8,
                                    background: "rgba(240,165,0,0.08)", display: "flex", alignItems: "center", justifyContent: "center",
                                    fontSize: 11, fontWeight: 800, color: "var(--accent)", transition: "background 0.2s, transform 0.2s",
                                }}
                                    onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = "var(--accent)"; (e.currentTarget as HTMLElement).style.color = "var(--navy)"; (e.currentTarget as HTMLElement).style.transform = "translateY(-2px)"; }}
                                    onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = "rgba(240,165,0,0.08)"; (e.currentTarget as HTMLElement).style.color = "var(--accent)"; (e.currentTarget as HTMLElement).style.transform = "translateY(0)"; }}>
                                    {s}
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
   ABOUT FAQ
   ──────────────────────────────────────────── */

function AboutFAQSection() {
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
            <div style={{ position: "absolute", top: "30%", left: "50%", transform: "translateX(-50%)", width: 600, height: 300, background: "radial-gradient(ellipse,rgba(240,165,0,0.06),transparent)", pointerEvents: "none" }} />

            <div className="reveal" style={{ textAlign: "center", marginBottom: 52 }}>
                <p className="section-eyebrow">Common Questions</p>
                <h2 className="section-title-accent" style={{ fontFamily: "var(--font2)" }}>Got Questions? We've Got Answers</h2>
            </div>

            <div style={{ maxWidth: 780, margin: "0 auto", display: "flex", flexDirection: "column", gap: 14 }}>
                {aboutFaqs.map((faq, i) => (
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
   CTA SECTION
   ──────────────────────────────────────────── */

function AboutCTASection() {
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
        <section id="contact" ref={ref} style={{ fontFamily: "var(--font)" }}>
            {/* CTA Band */}
            <div style={{
                background: "linear-gradient(135deg,var(--accent) 0%,var(--accent2) 100%)",
                padding: "72px 40px", position: "relative", overflow: "hidden",
            }}>
                <div style={{ position: "absolute", right: 0, top: 0, bottom: 0, width: "40%", background: "linear-gradient(135deg,transparent,rgba(255,255,255,0.12))", pointerEvents: "none" }} />

                <div className="reveal" style={{ maxWidth: 900, margin: "0 auto", textAlign: "center", position: "relative", zIndex: 1 }}>
                    <h2 style={{ fontFamily: "var(--font2)", fontSize: "clamp(28px,4vw,44px)", fontWeight: 900, color: "var(--navy)", lineHeight: 1.2, marginBottom: 20 }}>
                        Ready To Write<br />Your Next Chapter?
                    </h2>
                    <p style={{ fontSize: 16, color: "rgba(13,18,64,0.75)", lineHeight: 1.85, maxWidth: 560, margin: "0 auto 32px" }}>
                        Your story deserves to be published with care, precision, and the full weight of a professional team behind it. Let's make it happen — together.
                    </p>
                    <div style={{ display: "flex", gap: 14, justifyContent: "center", flexWrap: "wrap" }}>
                        <a href="#" className="btn-navy" style={{ fontSize: 15, padding: "16px 36px" }}>Book Free Consultation</a>
                        <a href="tel:8553847020" className="btn-navy" style={{ fontSize: 15, padding: "16px 36px", background: "rgba(13,18,64,0.15)" }}>📞 (855) 384-7020</a>
                    </div>
                </div>
            </div>

            {/* Contact Form Band */}
            <div style={{ background: "var(--white)", padding: "68px 40px 80px" }}>
                <div style={{ maxWidth: 1100, margin: "0 auto", display: "flex", gap: 44, alignItems: "flex-start", flexWrap: "wrap" }}>
                    <div className="reveal-left" style={{ flex: "0 0 300px", paddingTop: 40 }}>
                        <img src="/images/yes-book.png" alt="Books" style={{ width: "100%", objectFit: "contain", filter: "drop-shadow(0 12px 32px rgba(0,0,0,0.12))" }} />
                    </div>
                    <div className="reveal-right" style={{ flex: 1 }}>
                        <h3 className="section-title" style={{ marginBottom: 8 }}>Let's Talk About Your Book</h3>
                        <p style={{ fontSize: 14, color: "#888", marginBottom: 28, lineHeight: 1.8 }}>Fill out the form below and our team will reach out within 24 hours.</p>
                        <ContactForm />
                    </div>
                </div>
            </div>
        </section>
    );
}

function ContactForm() {
    const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });
    const [checked, setChecked] = useState(false);
    const handle = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
        setForm({ ...form, [e.target.name]: e.target.value });

    return (
        <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
            <input className="nybp-input" name="name" placeholder="Enter Your Name" value={form.name} onChange={handle} />
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14 }}>
                <input className="nybp-input" name="email" type="email" placeholder="Enter Your Email" value={form.email} onChange={handle} />
                <input className="nybp-input" name="phone" type="tel" placeholder="Enter Phone Number" value={form.phone} onChange={handle} />
            </div>
            <textarea className="nybp-input" name="message" placeholder="Tell us about your book..." value={form.message} onChange={handle} style={{ minHeight: 130 }} />
            {/* captcha */}
            <div style={{ display: "flex", alignItems: "center", gap: 12, border: "1.5px solid #d0d0d0", borderRadius: 10, padding: "14px 18px", background: "#f8fafc" }}>
                <div onClick={() => setChecked(!checked)} style={{
                    width: 22, height: 22, border: `2px solid ${checked ? "#4caf50" : "#aaa"}`, borderRadius: 5,
                    background: checked ? "#4caf50" : "#fff", display: "flex", alignItems: "center", justifyContent: "center",
                    color: "#fff", fontSize: 13, transition: "all 0.2s", cursor: "pointer",
                }}>
                    {checked ? "✓" : ""}
                </div>
                <span style={{ fontSize: 13, color: "#555", flex: 1 }}>I'm not a robot</span>
                <span style={{ fontSize: 9, color: "#aaa", textAlign: "center", lineHeight: 1.5 }}>🔒<br />reCAPTCHA</span>
            </div>
            <a href="#" className="btn-navy" style={{ alignSelf: "flex-start", borderRadius: "var(--radius-pill)", padding: "14px 48px", fontSize: 14 }}>Get Started</a>
        </div>
    );
}

export default function AboutPage() {
    return (
        <>
            <LightningCursor />
            <Navbar />

            <main>
                <AboutHero />
                <OurStorySection />
                <MissionVisionSection />
                <StatsSection />
                <TimelineSection />
                <ValuesSection />
                <ApartSection />
                <TeamSection />
                <AboutFAQSection />
                <AboutCTASection />
            </main>

            <FooterSection />
        </>
    );
}