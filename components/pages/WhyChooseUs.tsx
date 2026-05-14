"use client";
import Image from "next/image";
import { useEffect, useRef } from "react";

const firstItems = [
    { number: "01", ribbon: "/images/WCU-1.webp", title: "Expert Editing", description: "Our skilled editors carefully shape your manuscript, fixing errors and polishing your words so your story flows beautifully." },
    { number: "02", ribbon: "/images/WCU-2.webp", title: "Custom Design", description: "From stunning covers to clean interior layouts, we bring your vision to life with professional and inviting styles." },
    { number: "03", ribbon: "/images/WCU-3.webp", title: "Full Assistance", description: "We're with you at every stage. From writing help to final listings, our friendly team makes sure you're never left guessing." },
];
const secondItems = [
    { number: "04", ribbon: "/images/WCU-4.webp", title: "24/7 Support", description: "Our team is here day and night to answer questions, calm worries, and keep things moving so your publishing journey stays smooth." },
    { number: "05", ribbon: "/images/WCU-5.webp", title: "Exclusive Discounts", description: "We offer special deals and package savings so you can enjoy top-quality book publishing services without overpaying." },
    { number: "06", ribbon: "/images/WCU-6.webp", title: "Marketing Power", description: "Our marketing team helps spread the word, builds excitement, and gets more eyes on your book to grow your audience." },
];

export default function WhyChooseUs() {
    const sectionRef = useRef<HTMLElement>(null);

    useEffect(() => {
        const section = sectionRef.current;
        if (!section) return;

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        // Animate heading
                        const heading = section.querySelector(".wcu-heading") as HTMLElement;
                        if (heading) {
                            heading.style.opacity = "1";
                            heading.style.transform = "translateY(0)";
                        }

                        // Animate left photo row 1
                        const leftPhoto1 = section.querySelector(".wcu-photo-left-1") as HTMLElement;
                        if (leftPhoto1) {
                            setTimeout(() => {
                                leftPhoto1.style.opacity = "1";
                                leftPhoto1.style.transform = "translateX(0)";
                            }, 150);
                        }

                        // Animate right photo row 2
                        const rightPhoto2 = section.querySelector(".wcu-photo-right-2") as HTMLElement;
                        if (rightPhoto2) {
                            setTimeout(() => {
                                rightPhoto2.style.opacity = "1";
                                rightPhoto2.style.transform = "translateX(0)";
                            }, 150);
                        }

                        // Animate ribbon items with stagger
                        const ribbonItems = section.querySelectorAll(".wcu-ribbon-item");
                        ribbonItems.forEach((item, i) => {
                            setTimeout(() => {
                                (item as HTMLElement).style.opacity = "1";
                                (item as HTMLElement).style.transform = "translateX(0)";
                            }, 200 + i * 120);
                        });

                        observer.disconnect();
                    }
                });
            },
            { threshold: 0.1 }
        );

        observer.observe(section);
        return () => observer.disconnect();
    }, []);

    const photoStyle: React.CSSProperties = {
        width: "48%",
        flexShrink: 0,
        height: 800,
        borderRadius: 10,
        overflow: "hidden",
        position: "relative",
        opacity: 0,
        transition: "opacity 0.8s cubic-bezier(0.16,1,0.3,1), transform 0.8s cubic-bezier(0.16,1,0.3,1)",
    };

    const rowStyle: React.CSSProperties = {
        display: "flex",
        alignItems: "stretch",
        gap: 20,
        marginBottom: 50,
    };

    const colStyle: React.CSSProperties = {
        flex: 1,
        display: "flex",
        flexDirection: "column",
        gap: 6,
    };

    return (
        <>
            <style>{`
        @keyframes wcuShimmer {
          0%   { background-position: -200% center; }
          100% { background-position: 200% center; }
        }
        .wcu-ribbon-item {
          position: relative;
          min-height: 120px;
          display: flex;
          align-items: center;
          opacity: 0;
          transform: translateX(40px);
          transition: opacity 0.7s cubic-bezier(0.16,1,0.3,1), transform 0.7s cubic-bezier(0.16,1,0.3,1);
        }
        .wcu-ribbon-item-left {
          transform: translateX(-40px) !important;
        }
        .wcu-ribbon-item:hover .wcu-ribbon-content h3 {
          background: linear-gradient(90deg, var(--accent), #ffc13d, var(--accent));
          background-size: 200% auto;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          animation: wcuShimmer 1.5s linear infinite;
        }
        .wcu-ribbon-item:hover .wcu-ribbon-img {
          transform: scale(1.02);
        }
        .wcu-ribbon-img {
          transition: transform 0.4s ease;
        }
        .wcu-photo-inner {
          width: 100%;
          height: 100%;
          transition: transform 6s ease;
        }
        .wcu-photo-inner:hover {
          transform: scale(1.04);
        }
        .wcu-photo-left-1 {
          transform: translateX(-60px);
        }
        .wcu-photo-right-2 {
          transform: translateX(60px);
        }
        .wcu-heading {
          opacity: 0;
          transform: translateY(30px);
          transition: opacity 0.7s ease, transform 0.7s ease;
        }
      `}</style>

            <section
                ref={sectionRef}
                style={{
                    fontFamily: "var(--font)",
                    background: "var(--white)",
                    padding: "70px 30px",
                    maxWidth: 1180,
                    margin: "0 auto",
                }}
            >
                <h2
                    className="wcu-heading"
                    style={{
                        textAlign: "center",
                        fontSize: 42,
                        fontWeight: 900,
                        color: "var(--navy)",
                        lineHeight: 1.3,
                        marginBottom: 50,
                        fontFamily: "var(--font2)",
                    }}
                >
                    From First Draft To Bestseller<br />We've Got You Covered
                </h2>

                {/* ── Row 1: Photo Left, Items Right ── */}
                <div style={rowStyle}>
                    <div
                        className="wcu-photo-left-1"
                        style={{ ...photoStyle }}
                    >
                        <div className="wcu-photo-inner">
                            <Image
                                src="/images/WCU-Left.webp"
                                alt="Expert book publishing"
                                fill
                                sizes="32vw"
                                style={{ objectFit: "cover" }}
                            />
                        </div>
                        {/* overlay gradient */}
                        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(13,18,64,0.25) 0%, transparent 50%)", pointerEvents: "none" }} />
                    </div>

                    <div style={colStyle}>
                        {firstItems.map((item) => (
                            <div key={item.number} className="wcu-ribbon-item">
                                {/* ribbon image background */}
                                <div className="wcu-ribbon-img" style={{ position: "absolute", inset: 0, zIndex: 0 }}>
                                    <Image
                                        src={item.ribbon}
                                        alt={item.number}
                                        fill
                                        sizes="100%"
                                        style={{ objectFit: "fill" }}
                                    />
                                </div>
                                {/* content */}
                                <div
                                    className="wcu-ribbon-content"
                                    style={{ position: "relative", zIndex: 1, padding: "50px 20px 54px 200px", width: "100%" }}
                                >
                                    <h3 style={{ fontSize: 20, fontWeight: 800, color: "var(--accent)", margin: "0 0 5px" }}>
                                        {item.title}
                                    </h3>
                                    <p style={{ fontSize: 16, color: "#444", lineHeight: 1.65, margin: 0 }}>
                                        {item.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* ── Row 2: Items Left, Photo Right ── */}
                <div style={rowStyle}>
                    <div style={colStyle}>
                        {secondItems.map((item) => (
                            <div key={item.number} className="wcu-ribbon-item wcu-ribbon-item-left">
                                <div className="wcu-ribbon-img" style={{ position: "absolute", inset: 0, zIndex: 0 }}>
                                    <Image
                                        src={item.ribbon}
                                        alt={item.number}
                                        fill
                                        sizes="100%"
                                        style={{ objectFit: "fill" }}
                                    />
                                </div>
                                <div
                                    className="wcu-ribbon-content"
                                    style={{ position: "relative", zIndex: 1, padding: "50px 200px 54px 20px", width: "100%" }}
                                >
                                    <h3 style={{ fontSize: 20, fontWeight: 800, color: "var(--accent)", margin: "0 0 5px" }}>
                                        {item.title}
                                    </h3>
                                    <p style={{ fontSize: 16, color: "#444", lineHeight: 1.65, margin: 0 }}>
                                        {item.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div
                        className="wcu-photo-right-2"
                        style={{ ...photoStyle }}
                    >
                        <div className="wcu-photo-inner">
                            <Image
                                src="/images/WCU-Right.webp"
                                alt="Book publishers"
                                fill
                                sizes="32vw"
                                style={{ objectFit: "cover" }}
                            />
                        </div>
                        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(13,18,64,0.25) 0%, transparent 50%)", pointerEvents: "none" }} />
                    </div>
                </div>
            </section>
        </>
    );
}