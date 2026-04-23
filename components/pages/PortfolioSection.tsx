"use client";
import { useEffect, useRef } from "react";

const books = [
    { src: "/images/Portfolio/01.jpg", alt: "The New Dark" }, { src: "/images/Portfolio/02.jpg", alt: "Engraved" },
    { src: "/images/Portfolio/03.jpg", alt: "Money Lies and The Housewives" }, { src: "/images/Portfolio/04.jpg", alt: "The Face of a Killer" },
    { src: "/images/Portfolio/05.jpg", alt: "Boundless" }, { src: "/images/Portfolio/06.jpg", alt: "DNAlien" },
    { src: "/images/Portfolio/07.jpg", alt: "DNAlien II" }, { src: "/images/Portfolio/08.jpg", alt: "DNAlien III" },
    { src: "/images/Portfolio/09.jpg", alt: "The First Book of the Heart" }, { src: "/images/Portfolio/10.jpg", alt: "The Seed of Adam" },
    { src: "/images/Portfolio/11.jpg", alt: "Saboteur" }, { src: "/images/Portfolio/12.jpg", alt: "Becoming Quitproof" },
];

export default function PortfolioSection() {
    const swiperRef = useRef<HTMLDivElement>(null);
    const instanceRef = useRef<any>(null);

    useEffect(() => {
        const load = async () => {
            if (!document.getElementById("swiper-css")) {
                const link = document.createElement("link");
                link.id = "swiper-css"; link.rel = "stylesheet";
                link.href = "https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.css";
                document.head.appendChild(link);
            }
            if (!(window as any).Swiper) {
                await new Promise<void>(r => { const s = document.createElement("script"); s.src = "https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.js"; s.onload = () => r(); document.body.appendChild(s); });
            }
            if (swiperRef.current && !(swiperRef.current as any)._inst) {
                const inst = new (window as any).Swiper(swiperRef.current, {
                    effect: "coverflow", grabCursor: true, centeredSlides: true, slidesPerView: "auto", loop: true,
                    autoplay: { delay: 3000, disableOnInteraction: false },
                    coverflowEffect: { rotate: 50, stretch: 0, depth: 150, modifier: 1, slideShadows: true },
                    pagination: { el: ".port-pag", clickable: true },
                    navigation: { nextEl: ".port-next", prevEl: ".port-prev" },
                });
                (swiperRef.current as any)._inst = inst;
                instanceRef.current = inst;
            }
        };
        load();
        return () => { instanceRef.current?.destroy?.(true, true); };
    }, []);

    return (
        <>
            <style>{`
        .port-swiper .swiper-slide { width: 320px !important; display:flex; align-items:center; justify-content:center; }
        .port-swiper .swiper-slide img { width:320px; height:485px; object-fit:cover; border-radius:6px; box-shadow:0 8px 28px rgba(0,0,0,0.3); border:2px solid rgba(240,165,0,0.2); transition:transform .2s,box-shadow .2s; }
        .port-swiper .swiper-slide img:hover { transform:translateY(-4px); box-shadow:0 16px 40px rgba(0,0,0,0.4); }
        .port-swiper .swiper-button-prev,.port-swiper .swiper-button-next { color: var(--accent) !important; }
        .port-swiper .swiper-pagination-bullet { background: rgba(240,165,0,0.3) !important; width:10px !important; height:10px !important; }
        .port-swiper .swiper-pagination-bullet-active { background: var(--accent) !important; transform:scale(1.25) !important; }
      `}</style>
            <section style={{ background: "#ebebeb", padding: "60px 0 70px", fontFamily: "var(--font)" }}>
                <h2 style={{ textAlign: "center", fontSize: "clamp(24px, 3vw, 38px)", fontWeight: 700, color: "var(--navy)", marginBottom: 0, padding: "0 20px" }}>
                    Proudly Published By NY Book Publishers
                </h2>
                <div ref={swiperRef} className="swiper port-swiper" style={{ width: "100%", paddingTop: 50, paddingBottom: 60 }}>
                    <div className="swiper-wrapper">
                        {books.map((b, i) => <div className="swiper-slide" key={i}><img src={b.src} alt={b.alt} /></div>)}
                    </div>
                    <div className="swiper-button-prev port-prev" />
                    <div className="swiper-button-next port-next" />
                    <div className="swiper-pagination port-pag" />
                </div>
            </section>
        </>
    );
}