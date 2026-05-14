"use client";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import { FooterSection } from "@/components/Footer";
import LightningCursor from "@/components/Lightningcursor";

/* ────────────────────────────────────────────
   DUMMY BLOG DATA
   ──────────────────────────────────────────── */

const blogCategories = [
    { name: "Writing Tips", count: 12 },
    { name: "Publishing Guide", count: 8 },
    { name: "Book Marketing", count: 6 },
    { name: "Author Stories", count: 10 },
    { name: "Cover Design", count: 4 },
];

const tags = ["Ghostwriting", "Self-Publishing", "KDP", "Editing", "Book Cover", "Marketing", "Audiobook", "ISBN"];

const recentPosts = [
    { title: "How To Write A Memoir That People Actually Read", date: "Dec 15, 2024", img: "https://images.unsplash.com/photo-1455390582262-044cdead277a?w=400&q=80" },
    { title: "10 Book Marketing Strategies For First-Time Authors", date: "Dec 10, 2024", img: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=400&q=80" },
    { title: "Traditional vs Self-Publishing: Which Is Right For You?", date: "Dec 05, 2024", img: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=400&q=80" },
];

const featuredPost = {
    title: "The Ultimate Guide To Publishing Your Book In 2025",
    excerpt: "Everything you need to know about the modern publishing landscape—from writing and editing to cover design, formatting, and getting your book onto Amazon and bookstore shelves worldwide.",
    category: "Publishing Guide",
    date: "December 18, 2024",
    author: "Jonathan Reed",
    readTime: "8 min read",
    img: "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?w=800&q=80",
};

const blogPosts = [
    { title: "How To Write A Memoir That People Actually Read", excerpt: "Writing a memoir isn't just about recounting events—it's about finding the universal truth in your personal story that resonates with readers.", category: "Writing Tips", date: "Dec 15, 2024", img: "https://images.unsplash.com/photo-1455390582262-044cdead277a?w=400&q=80" },
    { title: "10 Book Marketing Strategies For First-Time Authors", excerpt: "You've written the book—now how do you get people to read it? Here are proven marketing tactics that won't break the bank.", category: "Book Marketing", date: "Dec 10, 2024", img: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=400&q=80" },
    { title: "Traditional vs Self-Publishing: Which Is Right For You?", excerpt: "The age-old debate continues. Let's break down the pros, cons, and costs of each path so you can make an informed decision.", category: "Publishing Guide", date: "Dec 05, 2024", img: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=400&q=80" },
    { title: "5 Cover Design Mistakes That Kill Book Sales", excerpt: "Don't judge a book by its cover? Readers absolutely do. Avoid these common design pitfalls that send potential buyers scrolling past.", category: "Cover Design", date: "Nov 28, 2024", img: "https://images.unsplash.com/photo-1543002588-bfa74002ed7e?w=400&q=80" },
    { title: "From Rejection To Bestseller: Maria's Story", excerpt: "After 12 rejections from traditional publishers, Maria took the self-publishing route—and hit #1 on Kindle within a month.", category: "Author Stories", date: "Nov 20, 2024", img: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=400&q=80" },
    { title: "The Art Of Ghostwriting: Telling Someone Else's Story", excerpt: "Ghostwriting requires a unique blend of empathy, adaptability, and skill. Here's how our ghostwriters capture an author's authentic voice.", category: "Writing Tips", date: "Nov 15, 2024", img: "https://images.unsplash.com/photo-1516979187457-637abb4f9353?w=400&q=80" },
];

const slugify = (s: string) =>
    s.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");

/* ────────────────────────────────────────────
   BLOG HERO
   ──────────────────────────────────────────── */

function BlogHero() {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext("2d")!;
        let w = canvas.offsetWidth, h = canvas.offsetHeight;
        canvas.width = w; canvas.height = h;

        const particles = Array.from({ length: 50 }, () => ({
            x: Math.random() * w, y: Math.random() * h,
            r: Math.random() * 1.5 + 0.5, speed: Math.random() * 0.2 + 0.05,
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
            <div style={{ position: "absolute", top: -100, right: -100, width: 400, height: 400, borderRadius: "50%", border: "1px solid rgba(240,165,0,0.06)", pointerEvents: "none" }} />

            <div style={{ position: "relative", zIndex: 1, maxWidth: 1320, margin: "0 auto", padding: "100px 40px 80px", textAlign: "center" }}>
                <div style={{ display: "inline-flex", alignItems: "center", gap: 10, background: "rgba(240,165,0,0.1)", border: "1px solid rgba(240,165,0,0.3)", borderRadius: 40, padding: "8px 20px", marginBottom: 24 }}>
                    <span style={{ width: 8, height: 8, borderRadius: "50%", background: "var(--accent)", animation: "pulse 2s infinite" }} />
                    <span style={{ fontSize: 12, fontWeight: 700, color: "var(--accent)", textTransform: "uppercase", letterSpacing: 2 }}>Our Blog</span>
                </div>

                <h1 style={{ fontFamily: "var(--font2)", fontSize: "clamp(42px,6vw,72px)", fontWeight: 900, color: "var(--white)", lineHeight: 0.95, margin: "0 0 20px", letterSpacing: -2 }}>
                    Insights &<br /><span style={{ color: "var(--accent)" }}>Stories</span>
                </h1>

                <p style={{ fontSize: 16, color: "var(--text-muted)", lineHeight: 1.9, maxWidth: 600, margin: "0 auto" }}>
                    Expert advice, industry insights, and inspiring author stories to guide your publishing journey from blank page to bookshelf.
                </p>
            </div>
        </section>
    );
}

/* ────────────────────────────────────────────
   FEATURED POST
   ──────────────────────────────────────────── */

function FeaturedPostSection() {
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
        <section ref={ref} style={{ background: "var(--white)", padding: "60px 40px 40px", fontFamily: "var(--font)" }}>
            <div style={{ maxWidth: 1200, margin: "0 auto" }}>
                <div style={{ display: "flex", gap: 40, alignItems: "stretch", flexWrap: "wrap", background: "#fafaf8", borderRadius: 20, overflow: "hidden", border: "1px solid rgba(240,165,0,0.1)" }}>
                    {/* Image */}
                    <div className="reveal-left" style={{ flex: "0 0 48%", overflow: "hidden", minHeight: 400 }}>
                        <img src={featuredPost.img} alt={featuredPost.title} style={{ width: "100%", height: "100%", objectFit: "cover", display: "block", transition: "transform 0.5s" }}
                            onMouseEnter={e => (e.currentTarget.style.transform = "scale(1.05)")}
                            onMouseLeave={e => (e.currentTarget.style.transform = "scale(1)")} />
                    </div>
                    {/* Content */}
                    <div className="reveal-right" style={{ flex: 1, padding: "40px 40px 40px 0", display: "flex", flexDirection: "column", justifyContent: "center" }}>
                        <div style={{ display: "flex", gap: 12, alignItems: "center", marginBottom: 16 }}>
                            <span style={{ fontSize: 11, fontWeight: 700, color: "var(--navy)", background: "var(--accent)", padding: "4px 12px", borderRadius: 20, textTransform: "uppercase", letterSpacing: 1 }}>{featuredPost.category}</span>
                            <span style={{ fontSize: 12, color: "#999" }}>{featuredPost.date}</span>
                        </div>
                        <h2 style={{ fontFamily: "var(--font2)", fontSize: "clamp(24px,3vw,32px)", fontWeight: 900, color: "var(--navy)", lineHeight: 1.25, marginBottom: 16 }}>{featuredPost.title}</h2>
                        <p style={{ fontSize: 15, color: "#666", lineHeight: 1.85, marginBottom: 24 }}>{featuredPost.excerpt}</p>
                        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                            <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                                <div style={{ width: 36, height: 36, borderRadius: "50%", background: "var(--navy)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 14, color: "var(--accent)", fontWeight: 800 }}>JR</div>
                                <div>
                                    <div style={{ fontSize: 13, fontWeight: 700, color: "var(--navy)" }}>{featuredPost.author}</div>
                                    <div style={{ fontSize: 11, color: "#999" }}>{featuredPost.readTime}</div>
                                </div>
                            </div>
                            <Link href={`/blogs/${slugify(featuredPost.title)}`} className="btn-accent" style={{ fontSize: 13, padding: "10px 24px", textDecoration: "none" }}>Read Article →</Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

/* ────────────────────────────────────────────
   MAIN BLOG GRID + SIDEBAR
   ──────────────────────────────────────────── */

function BlogContentSection() {
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
        <section ref={ref} style={{ background: "var(--white)", padding: "40px 40px 80px", fontFamily: "var(--font)" }}>
            <div style={{ maxWidth: 1200, margin: "0 auto", display: "flex", gap: 40, flexWrap: "wrap" }}>

                {/* ── Left: Blog Grid ── */}
                <div style={{ flex: "0 0 calc(66.666% - 20px)" }}>
                    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 28 }}>
                        {blogPosts.map((post, i) => (
                            <div key={i} className="reveal" style={{
                                borderRadius: 16, overflow: "hidden", background: "#fff",
                                border: "1px solid rgba(240,165,0,0.1)",
                                transition: "transform 0.3s, box-shadow 0.3s",
                            }}
                                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.transform = "translateY(-6px)"; (e.currentTarget as HTMLElement).style.boxShadow = "0 16px 48px rgba(240,165,0,0.1)"; }}
                                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.transform = "translateY(0)"; (e.currentTarget as HTMLElement).style.boxShadow = "none"; }}>
                                {/* Image */}
                                <div style={{ overflow: "hidden", height: 220 }}>
                                    <img src={post.img} alt={post.title} style={{ width: "100%", height: "100%", objectFit: "cover", display: "block", transition: "transform 0.4s" }}
                                        onMouseEnter={e => (e.currentTarget.style.transform = "scale(1.08)")}
                                        onMouseLeave={e => (e.currentTarget.style.transform = "scale(1)")} />
                                </div>
                                {/* Content */}
                                <div style={{ padding: "24px 20px" }}>
                                    <div style={{ display: "flex", gap: 10, alignItems: "center", marginBottom: 12 }}>
                                        <span style={{ fontSize: 10, fontWeight: 700, color: "var(--navy)", background: "rgba(240,165,0,0.12)", padding: "3px 10px", borderRadius: 20, textTransform: "uppercase", letterSpacing: 1 }}>{post.category}</span>
                                        <span style={{ fontSize: 11, color: "#bbb" }}>{post.date}</span>
                                    </div>
                                    <h3 style={{ fontSize: 17, fontWeight: 800, color: "var(--navy)", lineHeight: 1.35, marginBottom: 12, fontFamily: "var(--font2)" }}>
                                        <Link href={`/blogs/${slugify(post.title)}`} style={{ color: "inherit", textDecoration: "none", transition: "color 0.2s" }}
                                            onMouseEnter={e => (e.currentTarget.style.color = "var(--accent)")}
                                            onMouseLeave={e => (e.currentTarget.style.color = "var(--navy)")}>
                                            {post.title}
                                        </Link>
                                    </h3>
                                    <p style={{ fontSize: 13.5, color: "#777", lineHeight: 1.8, marginBottom: 16, display: "-webkit-box", WebkitLineClamp: 3, WebkitBoxOrient: "vertical", overflow: "hidden" } as React.CSSProperties}>
                                        {post.excerpt}
                                    </p>
                                    <Link href={`/blogs/${slugify(post.title)}`} style={{ fontSize: 13, fontWeight: 700, color: "var(--accent)", textDecoration: "none", display: "inline-flex", alignItems: "center", gap: 6, transition: "gap 0.2s" }}
                                        onMouseEnter={e => (e.currentTarget.style.gap = "10px")}
                                        onMouseLeave={e => (e.currentTarget.style.gap = "6px")}>
                                        Read More <span>→</span>
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* ── Right: Sidebar ── */}
                <div style={{ flex: "1 1 300px" }}>
                    <div style={{ position: "sticky", top: 120, display: "flex", flexDirection: "column", gap: 28 }}>

                        {/* Search */}
                        <div style={{ background: "#fafaf8", borderRadius: 16, padding: 24, border: "1px solid rgba(240,165,0,0.1)" }}>
                            <h4 style={{ fontSize: 16, fontWeight: 800, color: "var(--navy)", marginBottom: 16, fontFamily: "var(--font2)" }}>Search Articles</h4>
                            <input className="nybp-input" placeholder="Search blog..." style={{ marginBottom: 0, background: "#fff" }} />
                        </div>

                        {/* Categories */}
                        <div style={{ background: "#fafaf8", borderRadius: 16, padding: 24, border: "1px solid rgba(240,165,0,0.1)" }}>
                            <h4 style={{ fontSize: 16, fontWeight: 800, color: "var(--navy)", marginBottom: 16, fontFamily: "var(--font2)" }}>Categories</h4>
                            <ul style={{ listStyle: "none", padding: 0, display: "flex", flexDirection: "column", gap: 0 }}>
                                {blogCategories.map(cat => (
                                    <li key={cat.name}>
                                        <a href="#" style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "10px 0", borderBottom: "1px solid rgba(240,165,0,0.08)", fontSize: 14, color: "#555", textDecoration: "none", transition: "color 0.2s, paddingLeft 0.2s" }}
                                            onMouseEnter={e => { e.currentTarget.style.color = "var(--accent)"; e.currentTarget.style.paddingLeft = "6px"; }}
                                            onMouseLeave={e => { e.currentTarget.style.color = "#555"; e.currentTarget.style.paddingLeft = "0"; }}>
                                            <span>{cat.name}</span>
                                            <span style={{ background: "rgba(240,165,0,0.1)", color: "var(--accent)", fontSize: 11, fontWeight: 700, padding: "2px 8px", borderRadius: 10 }}>{cat.count}</span>
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Recent Posts */}
                        <div style={{ background: "#fafaf8", borderRadius: 16, padding: 24, border: "1px solid rgba(240,165,0,0.1)" }}>
                            <h4 style={{ fontSize: 16, fontWeight: 800, color: "var(--navy)", marginBottom: 16, fontFamily: "var(--font2)" }}>Recent Posts</h4>
                            <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
                                {recentPosts.map((post, i) => (
                                    <Link key={i} href={`/blogs/${slugify(post.title)}`} style={{ display: "flex", gap: 14, textDecoration: "none", transition: "transform 0.2s" }}
                                        onMouseEnter={e => (e.currentTarget as HTMLElement).style.transform = "translateX(4px)"}
                                        onMouseLeave={e => (e.currentTarget as HTMLElement).style.transform = "translateX(0)"}>
                                        <div style={{ width: 70, height: 70, borderRadius: 10, overflow: "hidden", flexShrink: 0 }}>
                                            <img src={post.img} alt={post.title} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                                        </div>
                                        <div>
                                            <h5 style={{ fontSize: 13, fontWeight: 700, color: "var(--navy)", lineHeight: 1.4, margin: "0 0 4px" }}>{post.title}</h5>
                                            <span style={{ fontSize: 11, color: "#999" }}>{post.date}</span>
                                        </div>
                                    </Link>
                                ))}
                            </div>
                        </div>

                        {/* Tags */}
                        <div style={{ background: "#fafaf8", borderRadius: 16, padding: 24, border: "1px solid rgba(240,165,0,0.1)" }}>
                            <h4 style={{ fontSize: 16, fontWeight: 800, color: "var(--navy)", marginBottom: 16, fontFamily: "var(--font2)" }}>Popular Tags</h4>
                            <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
                                {tags.map(tag => (
                                    <a key={tag} href="#" style={{ fontSize: 12, fontWeight: 600, color: "var(--accent)", background: "rgba(240,165,0,0.08)", border: "1px solid rgba(240,165,0,0.2)", padding: "6px 14px", borderRadius: 20, textDecoration: "none", transition: "background 0.2s, color 0.2s" }}
                                        onMouseEnter={e => { e.currentTarget.style.background = "var(--accent)"; e.currentTarget.style.color = "var(--navy)"; }}
                                        onMouseLeave={e => { e.currentTarget.style.background = "rgba(240,165,0,0.08)"; e.currentTarget.style.color = "var(--accent)"; }}>
                                        {tag}
                                    </a>
                                ))}
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
}

/* ────────────────────────────────────────────
   NEWSLETTER CTA
   ──────────────────────────────────────────── */

function NewsletterSection() {
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
        <section ref={ref} style={{ background: "linear-gradient(135deg,var(--accent) 0%,var(--accent2) 100%)", padding: "72px 40px", fontFamily: "var(--font)", position: "relative", overflow: "hidden" }}>
            <div style={{ position: "absolute", right: 0, top: 0, bottom: 0, width: "40%", background: "linear-gradient(135deg,transparent,rgba(255,255,255,0.12))", pointerEvents: "none" }} />

            <div className="reveal" style={{ maxWidth: 700, margin: "0 auto", textAlign: "center", position: "relative", zIndex: 1 }}>
                <h2 style={{ fontFamily: "var(--font2)", fontSize: "clamp(28px,4vw,40px)", fontWeight: 900, color: "var(--navy)", marginBottom: 16 }}>Stay In The Loop</h2>
                <p style={{ fontSize: 15, color: "rgba(13,18,64,0.75)", lineHeight: 1.85, marginBottom: 32 }}>
                    Subscribe to our newsletter for the latest publishing tips, author spotlights, and exclusive offers delivered straight to your inbox.
                </p>
                <div style={{ display: "flex", gap: 12, maxWidth: 480, margin: "0 auto" }}>
                    <input className="nybp-input" placeholder="Enter your email address" style={{ flex: 1, marginBottom: 0, background: "rgba(255,255,255,0.9)", border: "2px solid transparent" }}
                        onFocus={e => { e.currentTarget.style.border = "2px solid var(--navy)"; e.currentTarget.style.background = "#fff"; }}
                        onBlur={e => { e.currentTarget.style.border = "2px solid transparent"; e.currentTarget.style.background = "rgba(255,255,255,0.9)"; }} />
                    <button className="btn-navy" style={{ flexShrink: 0, border: "none", cursor: "pointer" }}>Subscribe</button>
                </div>
            </div>
        </section>
    );
}

/* ────────────────────────────────────────────
   MAIN PAGE
   ──────────────────────────────────────────── */

export default function BlogsPage() {
    return (
        <>
            <LightningCursor />
            <Navbar />

            <main>
                <BlogHero />
                <FeaturedPostSection />
                <BlogContentSection />
                <NewsletterSection />
            </main>

            <FooterSection />
        </>
    );
}