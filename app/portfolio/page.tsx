"use client";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import { FooterSection } from "@/components/Footer";
import LightningCursor from "@/components/Lightningcursor";

/* ────────────────────────────────────────────
   DATA
   ──────────────────────────────────────────── */

const slugify = (s: string) =>
    s.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");

const portfolioBooks = [
    { id: 1, title: "The New Dark", category: "Fiction", img: "/images/Portfolio/01.jpg" },
    { id: 2, title: "Engraved", category: "Mystery", img: "/images/Portfolio/02.jpg" },
    { id: 3, title: "Money Lies and The Housewives", category: "Non-Fiction", img: "/images/Portfolio/03.jpg" },
    { id: 4, title: "The Face of a Killer", category: "Mystery", img: "/images/Portfolio/04.jpg" },
    { id: 5, title: "Boundless", category: "Fiction", img: "/images/Portfolio/05.jpg" },
    { id: 6, title: "DNAlien", category: "Sci-Fi", img: "/images/Portfolio/06.jpg" },
    { id: 7, title: "DNAlien II", category: "Sci-Fi", img: "/images/Portfolio/07.jpg" },
    { id: 8, title: "DNAlien III", category: "Sci-Fi", img: "/images/Portfolio/08.jpg" },
    { id: 9, title: "The First Book of the Heart", category: "Romance", img: "/images/Portfolio/09.jpg" },
    { id: 10, title: "The Seed of Adam", category: "Fiction", img: "/images/Portfolio/10.jpg" },
    { id: 11, title: "Saboteur", category: "Mystery", img: "/images/Portfolio/11.jpg" },
    { id: 12, title: "Becoming Quitproof", category: "Non-Fiction", img: "/images/Portfolio/12.jpg" },
];

const filters = ["All", "Fiction", "Non-Fiction", "Mystery", "Sci-Fi", "Romance"];

const portfolioStats = [
    { number: 500, suffix: "+", label: "Books Published" },
    { number: 12, suffix: "M+", label: "Copies Sold" },
    { number: 40, suffix: "+", label: "Genres Covered" },
    { number: 98, suffix: "%", label: "Client Satisfaction" },
];

/* ────────────────────────────────────────────
   PORTFOLIO HERO
   ──────────────────────────────────────────── */

function PortfolioHero() {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext("2d")!;
        let w = canvas.offsetWidth, h = canvas.offsetHeight;
        canvas.width = w; canvas.height = h;

        const particles = Array.from({ length: 60 }, () => ({
            x: Math.random() * w, y: Math.random() * h,
            r: Math.random() * 1.8 + 0.4, speed: Math.random() * 0.25 + 0.08,
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
        <section style={{ background: "var(--gradient-dark)", minHeight: 480, position: "relative", overflow: "hidden", fontFamily: "var(--font)" }}>
            <canvas ref={canvasRef} style={{ position: "absolute", inset: 0, width: "100%", height: "100%", pointerEvents: "none", zIndex: 0 }} />
            <div style={{ position: "absolute", top: -120, right: -80, width: 500, height: 500, borderRadius: "50%", border: "1px solid rgba(240,165,0,0.06)", pointerEvents: "none" }} />

            <div style={{ position: "relative", zIndex: 1, maxWidth: 1320, margin: "0 auto", padding: "110px 40px 80px", textAlign: "center" }}>
                <div style={{ display: "inline-flex", alignItems: "center", gap: 10, background: "rgba(240,165,0,0.1)", border: "1px solid rgba(240,165,0,0.3)", borderRadius: 40, padding: "8px 20px", marginBottom: 24 }}>
                    <span style={{ width: 8, height: 8, borderRadius: "50%", background: "var(--accent)", animation: "pulse 2s infinite" }} />
                    <span style={{ fontSize: 12, fontWeight: 700, color: "var(--accent)", textTransform: "uppercase", letterSpacing: 2 }}>Our Portfolio</span>
                </div>

                <h1 style={{ fontFamily: "var(--font2)", fontSize: "clamp(42px,6.5vw,78px)", fontWeight: 900, color: "var(--white)", lineHeight: 0.92, margin: "0 0 24px", letterSpacing: -2 }}>
                    Books That<br /><span style={{ color: "var(--accent)" }}>Define Success</span>
                </h1>

                <p style={{ fontSize: 16, color: "var(--text-muted)", lineHeight: 1.9, maxWidth: 600, margin: "0 auto" }}>
                    From spine-tingling mysteries to life-changing self-help — explore the masterpieces we've brought to life for authors worldwide.
                </p>
            </div>
        </section>
    );
}

/* ────────────────────────────────────────────
   STATS BAR
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
                    const eased = 1 - Math.pow(1 - progress, 3);
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
        <div ref={ref} style={{ textAlign: "center", padding: "20px 16px" }}>
            <div style={{ fontSize: "clamp(28px,3.5vw,42px)", fontWeight: 900, color: "var(--accent)", fontFamily: "var(--font2)", lineHeight: 1 }}>
                {count}{suffix}
            </div>
            <div style={{ fontSize: 12, fontWeight: 700, color: "rgba(13,18,64,0.6)", textTransform: "uppercase", letterSpacing: 2, marginTop: 6 }}>{label}</div>
        </div>
    );
}

function StatsBar() {
    return (
        <div style={{ background: "#fef8ec", borderBottom: "3px solid var(--accent)", padding: "24px 40px" }}>
            <div style={{ maxWidth: 1100, margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 16 }}>
                {portfolioStats.map(s => <StatsCounter key={s.label} {...s} />)}
            </div>
        </div>
    );
}

/* ────────────────────────────────────────────
   3D CAROUSEL SHOWCASE
   ──────────────────────────────────────────── */

function CarouselShowcase() {
    const swiperRef = useRef<HTMLDivElement>(null);
    const instanceRef = useRef<any>(null);
    const ref = useRef<HTMLElement>(null);

    useEffect(() => {
        const el = ref.current; if (!el) return;
        const obs = new IntersectionObserver(([e]) => {
            if (e.isIntersecting) el.querySelectorAll(".reveal").forEach(c => c.classList.add("revealed"));
        }, { threshold: 0.1 });
        obs.observe(el);
        return () => obs.disconnect();
    }, []);

    useEffect(() => {
        const load = async () => {
            if (!document.getElementById("swiper-css")) {
                const link = document.createElement("link");
                link.id = "swiper-css"; link.rel = "stylesheet";
                link.href = "https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.css";
                document.head.appendChild(link);
            }
            if (!(window as any).Swiper) {
                await new Promise<void>(r => {
                    const s = document.createElement("script");
                    s.src = "https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.js";
                    s.onload = () => r(); document.body.appendChild(s);
                });
            }
            if (swiperRef.current && !(swiperRef.current as any)._inst) {
                const inst = new (window as any).Swiper(swiperRef.current, {
                    effect: "coverflow", grabCursor: true, centeredSlides: true, slidesPerView: "auto", loop: true,
                    autoplay: { delay: 3000, disableOnInteraction: false },
                    coverflowEffect: { rotate: 30, stretch: 0, depth: 150, modifier: 1, slideShadows: true },
                    pagination: { el: ".port-pag-2", clickable: true },
                    navigation: { nextEl: ".port-next-2", prevEl: ".port-prev-2" },
                });
                (swiperRef.current as any)._inst = inst;
                instanceRef.current = inst;
            }
        };
        load();
        return () => { instanceRef.current?.destroy?.(true, true); };
    }, []);

    return (
        <section ref={ref} style={{ background: "var(--white)", padding: "80px 0 60px", fontFamily: "var(--font)" }}>
            <div className="reveal" style={{ textAlign: "center", padding: "0 20px", marginBottom: 40 }}>
                <p className="section-eyebrow" style={{ color: "var(--navy2)" }}>Showcase</p>
                <h2 className="section-title">Featured Publications</h2>
            </div>

            <>
                <style>{`
          .port-swiper-2 .swiper-slide { width:300px !important; display:flex; align-items:center; justify-content:center; }
          .port-swiper-2 .swiper-slide img { width:300px; height:455px; object-fit:cover; border-radius:12px; box-shadow:0 16px 48px rgba(0,0,0,0.3); border:3px solid rgba(240,165,0,0.15); transition:transform .3s,box-shadow .3s; }
          .port-swiper-2 .swiper-slide img:hover { transform:translateY(-8px) scale(1.02); box-shadow:0 24px 64px rgba(240,165,0,0.25); }
          .port-swiper-2 .swiper-button-prev, .port-swiper-2 .swiper-button-next { color:var(--accent) !important; background:rgba(13,18,64,0.8); border-radius:50%; width:48px !important; height:48px !important; }
          .port-swiper-2 .swiper-button-prev::after, .port-swiper-2 .swiper-button-next::after { font-size:18px !important; }
          .port-swiper-2 .swiper-pagination-bullet { background:rgba(240,165,0,0.3) !important; width:10px !important; height:10px !important; }
          .port-swiper-2 .swiper-pagination-bullet-active { background:var(--accent) !important; transform:scale(1.35) !important; }
        `}</style>
                <div ref={swiperRef} className="swiper port-swiper-2" style={{ width: "100%", paddingTop: 40, paddingBottom: 60 }}>
                    <div className="swiper-wrapper">
                        {portfolioBooks.map((b) => (
                            <div className="swiper-slide" key={b.id}>
                                <Link href={`/portfolio/${slugify(b.title)}`} style={{ textDecoration: "none" }}>
                                    <img src={b.img} alt={b.title} />
                                </Link>
                            </div>
                        ))}
                    </div>
                    <div className="swiper-button-prev port-prev-2" />
                    <div className="swiper-button-next port-next-2" />
                    <div className="swiper-pagination port-pag-2" />
                </div>
            </>
        </section>
    );
}

/* ────────────────────────────────────────────
   FILTER PORTFOLIO GRID
   ──────────────────────────────────────────── */

function PortfolioGrid() {
    const [active, setActive] = useState("All");
    const ref = useRef<HTMLElement>(null);

    useEffect(() => {
        const el = ref.current; if (!el) return;
        const obs = new IntersectionObserver(([e]) => {
            if (e.isIntersecting) el.querySelectorAll(".reveal").forEach(c => c.classList.add("revealed"));
        }, { threshold: 0.05 });
        obs.observe(el);
        return () => obs.disconnect();
    }, []);

    const filtered = active === "All" ? portfolioBooks : portfolioBooks.filter(b => b.category === active);

    return (
        <section ref={ref} style={{ background: "#fafaf8", padding: "80px 40px", fontFamily: "var(--font)" }}>
            <div style={{ maxWidth: 1200, margin: "0 auto" }}>

                <div className="reveal" style={{ textAlign: "center", marginBottom: 48 }}>
                    <p className="section-eyebrow" style={{ color: "var(--navy2)" }}>Browse By Genre</p>
                    <h2 className="section-title">Our Published Collection</h2>
                </div>

                {/* Filter Tabs */}
                <div className="reveal" style={{ display: "flex", gap: 10, justifyContent: "center", flexWrap: "wrap", marginBottom: 48 }}>
                    {filters.map(f => (
                        <button key={f} onClick={() => setActive(f)} style={{
                            padding: "10px 24px", borderRadius: 40, border: "none",
                            background: active === f ? "var(--accent)" : "rgba(13,18,64,0.06)",
                            color: active === f ? "var(--navy)" : "var(--navy)",
                            fontSize: 13, fontWeight: 700, fontFamily: "var(--font)",
                            cursor: "pointer", transition: "all 0.25s",
                            boxShadow: active === f ? "0 6px 20px rgba(240,165,0,0.35)" : "none",
                            transform: active === f ? "translateY(-2px)" : "none",
                        }}>
                            {f}
                        </button>
                    ))}
                </div>

                {/* Grid */}
                <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 24 }}>
                    {filtered.map((book, i) => (
                        <div key={book.id} className="reveal" style={{
                            borderRadius: 16, overflow: "hidden", position: "relative",
                            background: "#fff", border: "2px solid rgba(240,165,0,0.08)",
                            transition: "transform 0.35s, box-shadow 0.35s, border-color 0.35s",
                            animationDelay: `${i * 60}ms`,
                        }}
                            onMouseEnter={e => { (e.currentTarget as HTMLElement).style.transform = "translateY(-8px)"; (e.currentTarget as HTMLElement).style.boxShadow = "0 20px 60px rgba(240,165,0,0.15)"; (e.currentTarget as HTMLElement).style.borderColor = "rgba(240,165,0,0.3)"; }}
                            onMouseLeave={e => { (e.currentTarget as HTMLElement).style.transform = "translateY(0)"; (e.currentTarget as HTMLElement).style.boxShadow = "none"; (e.currentTarget as HTMLElement).style.borderColor = "rgba(240,165,0,0.08)"; }}>

                            {/* Image Container */}
                            <div style={{ position: "relative", overflow: "hidden", aspectRatio: "2/3" }}>
                                <img src={book.img} alt={book.title} style={{ width: "100%", height: "100%", objectFit: "cover", display: "block", transition: "transform 0.5s" }}
                                    onMouseEnter={e => (e.currentTarget.style.transform = "scale(1.08)")}
                                    onMouseLeave={e => (e.currentTarget.style.transform = "scale(1)")} />

                                {/* Hover Overlay */}
                                <div style={{
                                    position: "absolute", inset: 0,
                                    background: "linear-gradient(0deg, rgba(23, 25, 48, 0.92) 0%, rgba(13,18,64,0.4) 40%, transparent 100%)",
                                    opacity: 0, transition: "opacity 0.35s",
                                    display: "flex", flexDirection: "column", justifyContent: "flex-end", padding: 24,
                                }}
                                    onMouseEnter={e => (e.currentTarget.style.opacity = "1")}
                                    onMouseLeave={e => (e.currentTarget.style.opacity = "0")}>

                                    <span style={{ fontSize: 10, fontWeight: 700, color: "var(--accent)", background: "rgba(240,165,0,0.2)", padding: "4px 10px", borderRadius: 20, alignSelf: "flex-start", marginBottom: 8, textTransform: "uppercase", letterSpacing: 1 }}>{book.category}</span>
                                    <h3 style={{ fontSize: 18, fontWeight: 800, color: "var(--white)", fontFamily: "var(--font2)", lineHeight: 1.3, marginBottom: 12 }}>{book.title}</h3>
                                    <Link href={`/portfolio/${slugify(book.title)}`} className="btn-accent" style={{ fontSize: 12, padding: "8px 18px", alignSelf: "flex-start", textDecoration: "none" }}>View Details</Link>
                                </div>
                            </div>

                            {/* Title Bar (always visible) */}
                            <div style={{ padding: "16px 16px" }}>
                                <h4 style={{ fontSize: 14, fontWeight: 700, color: "var(--navy)", fontFamily: "var(--font2)", margin: 0, whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>{book.title}</h4>
                                <span style={{ fontSize: 11, color: "#999", fontWeight: 600, textTransform: "uppercase", letterSpacing: 1 }}>{book.category}</span>
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

function PortfolioCTA() {
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
                background: "var(--gradient-dark)", padding: "80px 40px", position: "relative", overflow: "hidden",
            }}>
                <div style={{ position: "absolute", inset: 0, backgroundImage: "url('/images/discover-layer-2.png')", backgroundSize: "cover", backgroundPosition: "center", opacity: 0.5, pointerEvents: "none" }} />

                <div style={{ maxWidth: 1100, margin: "0 auto", display: "flex", alignItems: "center", gap: 48, flexWrap: "wrap", position: "relative", zIndex: 1 }}>

                    <div className="reveal-left" style={{ flex: "0 0 280px" }}>
                        <img src="/images/book-3.png" alt="Your Book Here" style={{ width: "100%", objectFit: "contain", filter: "drop-shadow(0 24px 60px rgba(240,165,0,0.25))", animation: "floatForm 4s ease-in-out infinite" }} />
                    </div>

                    <div className="reveal-right" style={{ flex: 1 }}>
                        <p className="section-eyebrow" style={{ color: "rgba(240,165,0,0.6)" }}>Your Book Could Be Next</p>
                        <h2 style={{ fontFamily: "var(--font2)", fontSize: "clamp(28px,4vw,42px)", fontWeight: 900, color: "var(--white)", lineHeight: 1.2, marginBottom: 20 }}>
                            Ready To See Your Name<br />On A <span style={{ color: "var(--accent)" }}>Bestseller</span>?
                        </h2>
                        <p style={{ fontSize: 15, color: "var(--text-muted)", lineHeight: 1.9, marginBottom: 32, maxWidth: 520 }}>
                            Every book in this portfolio started as an idea — just like yours. With NY Book Publishers, your story gets the professional treatment it deserves, from first draft to bookshelf.
                        </p>
                        <div style={{ display: "flex", gap: 14, flexWrap: "wrap" }}>
                            <a href="/contact" className="btn-accent" style={{ fontSize: 15, padding: "16px 36px", textDecoration: "none" }}>Start Your Book Today</a>
                            <a href="tel:8553847020" className="btn-outline-white" style={{ fontSize: 15, padding: "16px 36px", textDecoration: "none" }}>📞 Call Us</a>
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

export default function PortfolioPage() {
    return (
        <>
            <LightningCursor />
            <Navbar />

            <main>
                <PortfolioHero />
                <StatsBar />
                <CarouselShowcase />
                <PortfolioGrid />
                <PortfolioCTA />
            </main>

            <FooterSection />
        </>
    );
}