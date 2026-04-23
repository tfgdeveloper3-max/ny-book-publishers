"use client";

import { useState } from "react";

const styles = `
  @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800&display=swap');

  .testimonials-wrapper {
    font-family: 'Poppins', sans-serif;
  }

  /* ── Top CTA band (white) ── */
  .testimonials-cta {
    background: #ffffff;
    text-align: center;
    padding: 48px 24px 52px;
  }

  .testimonials-cta h2 {
    font-size: clamp(22px, 3.2vw, 36px);
    font-weight: 800;
    color: #1a1f5e;
    margin: 0 0 10px;
    line-height: 1.2;
  }

  .testimonials-cta p {
    font-size: clamp(16px, 2vw, 22px);
    font-weight: 400;
    color: #1a1f5e;
    margin: 0 0 16px;
  }

  .testimonials-cta a {
    font-size: clamp(16px, 2vw, 22px);
    font-weight: 700;
    color: #00BCD4;
    text-decoration: underline;
    cursor: pointer;
    transition: color 0.2s;
  }
  .testimonials-cta a:hover { color: #cf5438; }

  /* ── Bottom carousel band (coral) ── */
  .testimonials-carousel-band {
    background: #00BCD4;
    padding: 56px 24px 64px;
  }

  .testimonials-carousel-band h3 {
    font-size: clamp(22px, 3vw, 34px);
    font-weight: 800;
    color: #1a1f5e;
    text-align: center;
    margin: 0 0 44px;
  }

  /* Carousel row */
  .carousel-row {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0;
    max-width: 1200px;
    margin: 0 auto;
  }

  /* Arrow buttons */
  .carousel-arrow {
    background: transparent;
    border: 2.5px solid #ffffff;
    border-radius: 50%;
    width: 48px;
    height: 48px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    flex-shrink: 0;
    margin: 0 18px;
    transition: background 0.2s, transform 0.15s;
    color: #ffffff;
  }
  .carousel-arrow:hover {
    background: rgba(255,255,255,0.2);
    transform: scale(1.08);
  }
  .carousel-arrow svg {
    width: 20px;
    height: 20px;
    stroke: #ffffff;
    stroke-width: 2.5;
    fill: none;
  }

  /* Cards track */
  .carousel-track {
    display: flex;
    gap: 24px;
    overflow: hidden;
    flex: 1;
    max-width: 960px;
  }

  /* Individual video card */
  .video-card {
    flex: 0 0 calc(33.333% - 16px);
    border-radius: 6px;
    overflow: hidden;
    border: 3px solid #1a1f5e;
    position: relative;
    aspect-ratio: 9/16;
    max-height: 300px;
    cursor: pointer;
    transition: transform 0.2s, box-shadow 0.2s;
  }
  .video-card:hover { transform: translateY(-4px); box-shadow: 0 12px 32px rgba(0,0,0,0.25); }

  .video-card img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
  }

  /* Dark overlay */
  .video-card-overlay {
    position: absolute;
    inset: 0;
    background: rgba(0,0,0,0.18);
    transition: background 0.2s;
  }
  .video-card:hover .video-card-overlay { background: rgba(0,0,0,0.32); }

  /* Play button */
  .play-btn {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 52px;
    height: 52px;
    border-radius: 50%;
    background: rgba(255,255,255,0.88);
    display: flex;
    align-items: center;
    justify-content: center;
    transition: background 0.2s, transform 0.2s;
  }
  .video-card:hover .play-btn {
    background: #ffffff;
    transform: translate(-50%, -50%) scale(1.1);
  }
  .play-btn svg {
    width: 20px;
    height: 20px;
    fill: #1a1f5e;
    margin-left: 3px;
  }

  /* Caption bar at bottom of card */
  .video-caption {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    background: linear-gradient(transparent, rgba(0,0,0,0.75));
    padding: 28px 12px 12px;
    color: #ffffff;
  }
  .video-caption .author-name {
    font-size: 13px;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.5px;
    display: block;
    background: #00BCD4;
    padding: 2px 8px;
    display: inline-block;
    margin-bottom: 4px;
  }
  .video-caption .book-title {
    font-size: 11px;
    font-weight: 400;
    opacity: 0.85;
    display: block;
  }

  /* Dot indicators */
  .carousel-dots {
    display: flex;
    justify-content: center;
    gap: 8px;
    margin-top: 28px;
  }
  .dot {
    width: 9px;
    height: 9px;
    border-radius: 50%;
    background: rgba(255,255,255,0.45);
    cursor: pointer;
    transition: background 0.2s, transform 0.2s;
    border: none;
    padding: 0;
  }
  .dot.active {
    background: #ffffff;
    transform: scale(1.25);
  }

  @media (max-width: 768px) {
    .video-card { flex: 0 0 calc(100% - 0px); max-height: 260px; }
    .carousel-arrow { margin: 0 8px; width: 40px; height: 40px; }
  }
`;

const TESTIMONIALS = [
    {
        id: 1,
        thumb: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=400&q=80",
        author: null,
        book: null,
        label: "writing, editing, and",
    },
    {
        id: 2,
        thumb: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=400&q=80",
        author: "Diana Cristy",
        book: "The Face Of A Killer",
    },
    {
        id: 3,
        thumb: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=400&q=80",
        author: "Davia R. K.",
        book: null,
    },
    {
        id: 4,
        thumb: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&q=80",
        author: "Sarah M.",
        book: "Beyond The Horizon",
    },
    {
        id: 5,
        thumb: "https://images.unsplash.com/photo-1552058544-f2b08422138a?w=400&q=80",
        author: "James T.",
        book: "The Last Chapter",
    },
];

const VISIBLE = 3;

export default function AuthorTestimonials() {
    const [index, setIndex] = useState(0);
    const total = TESTIMONIALS.length;
    const maxIndex = total - VISIBLE;

    const prev = () => setIndex((i) => Math.max(0, i - 1));
    const next = () => setIndex((i) => Math.min(maxIndex, i + 1));
    const visible = TESTIMONIALS.slice(index, index + VISIBLE);

    return (
        <>
            <style dangerouslySetInnerHTML={{ __html: styles }} />

            <div className="testimonials-wrapper">
                {/* ── White CTA band ── */}
                <div className="testimonials-cta">
                    <h2>Say Yes To Seeing Your Name In Print!</h2>
                    <p>Try Our Book Publishing Services Now!</p>
                    <a href="#">NYBP Is Waiting For You!</a>
                </div>

                {/* ── Coral carousel band ── */}
                <div className="testimonials-carousel-band">
                    <h3>Author Testimonials: Their Words, Our Work</h3>

                    <div className="carousel-row">
                        {/* Left arrow */}
                        <button
                            className="carousel-arrow"
                            onClick={prev}
                            disabled={index === 0}
                            aria-label="Previous"
                            style={{ opacity: index === 0 ? 0.4 : 1 }}
                        >
                            <svg viewBox="0 0 24 24">
                                <polyline points="15 18 9 12 15 6" />
                            </svg>
                        </button>

                        {/* Cards */}
                        <div className="carousel-track">
                            {visible.map((t) => (
                                <div key={t.id} className="video-card">
                                    <img src={t.thumb} alt={t.author ?? "Author testimonial"} />
                                    <div className="video-card-overlay" />

                                    {/* Play button */}
                                    <div className="play-btn">
                                        <svg viewBox="0 0 24 24">
                                            <polygon points="5,3 19,12 5,21" />
                                        </svg>
                                    </div>

                                    {/* Caption */}
                                    {(t.author || t.label) && (
                                        <div className="video-caption">
                                            {t.author && (
                                                <span className="author-name">{t.author}</span>
                                            )}
                                            {t.label && (
                                                <span
                                                    style={{
                                                        fontSize: 11,
                                                        color: "#f0e040",
                                                        fontWeight: 600,
                                                    }}
                                                >
                                                    {t.label}
                                                </span>
                                            )}
                                            {t.book && (
                                                <span className="book-title">{t.book}</span>
                                            )}
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>

                        {/* Right arrow */}
                        <button
                            className="carousel-arrow"
                            onClick={next}
                            disabled={index >= maxIndex}
                            aria-label="Next"
                            style={{ opacity: index >= maxIndex ? 0.4 : 1 }}
                        >
                            <svg viewBox="0 0 24 24">
                                <polyline points="9 18 15 12 9 6" />
                            </svg>
                        </button>
                    </div>

                    {/* Dots */}
                    <div className="carousel-dots">
                        {Array.from({ length: maxIndex + 1 }).map((_, i) => (
                            <button
                                key={i}
                                className={`dot ${i === index ? "active" : ""}`}
                                onClick={() => setIndex(i)}
                                aria-label={`Go to slide ${i + 1}`}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
}