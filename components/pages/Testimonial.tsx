"use client";

import { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

interface Testimonial {
    id: number;
    name: string;
    review: string;
}

const testimonials: Testimonial[] = [
    {
        id: 1,
        name: "Carmen Alvina",
        review:
            "Don Rhodes is a treat to work with. I thought I had written a great manuscript and was just about to self publish my book when an acquaintance suggested that I seek professional help. They strengthened the substance and structure of my manuscript and elevated the quality of my book. Their white glove services are exceptional.",
    },
    {
        id: 2,
        name: "Scott L. Miller",
        review:
            "To date, NYBP has generally been extremely helpful and receptive to my questions and needs. To get what I wanted, in an effort to garner national attention for my writing, it cost a lot of money but it was an amount I was able to afford. In three months since Boundless was published, NYBP has turned it into a #1 bestseller on Kindle.",
    },
    {
        id: 3,
        name: "Stacy Kaye",
        review:
            "Book Publishing is not everyone's cup of tea. So, I decided to use New York Book Publishing services. They are professionals in book publishing and possess a strong grip on the publishing process at various platforms. They are even pros at content development and designing illustrations and covers. Kudos to Jim Bannister.",
    },
    {
        id: 4,
        name: "Donald Hobson",
        review:
            "I am astonished! They religiously guided us through the intricacies of the publishing world, unraveling the complexities and helping us at every step. Collaborating with them was a life-changing experience that will remain forever in our memories. Anyone in need of high-quality articles should definitely check out their website.",
    },
    {
        id: 5,
        name: "K. Scott Wells",
        review:
            "Very professional and excellent illustration, editing, and publication. There is a pleasant helpful, and professional relationship, communication, and interaction right away. Keep it up, please!",
    },
    {
        id: 6,
        name: "Queen",
        review:
            "Lisa Smith has been exceptional to work with, as has Connor Stewart. Their cover teams are excellent, and I've had the perfect amount of input. They print and send my copies in a timely fashion. Bottom line is I'm very happy so far with my experience with NYBP.",
    },
];

const TestimonialsSection: React.FC = () => {
    useEffect(() => {
        if (!document.querySelector("#swiper-css")) {
            const link = document.createElement("link");
            link.id = "swiper-css";
            link.rel = "stylesheet";
            link.href = "https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.css";
            document.head.appendChild(link);
        }

        const initSwiper = (): void => {
            new (window as any).Swiper(".testimonials-swiper", {
                slidesPerView: 3,
                centeredSlides: true,
                spaceBetween: 30,
                loop: true,
                speed: 600,
                navigation: {
                    nextEl: ".t-next",
                    prevEl: ".t-prev",
                },
            });
        };

        if (!(window as any).Swiper) {
            const script = document.createElement("script");
            script.src = "https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.js";
            script.onload = initSwiper;
            document.body.appendChild(script);
        } else {
            initSwiper();
        }
    }, []);

    return (
        <>
            <style jsx global>{`
        .testimonials-swiper .swiper-slide-active .t-card {
          transform: scale(1.12);
          box-shadow: 0 24px 60px rgba(0, 0, 0, 0.4);
          z-index: 2;
        }
        .testimonials-swiper .swiper-slide:not(.swiper-slide-active) .t-card {
          transform: scale(0.88);
          box-shadow: 0 6px 20px rgba(0, 0, 0, 0.15);
          opacity: 0.85;
        }
        .testimonials-swiper {
          overflow: visible !important;
          padding: 40px 0 50px !important;
        }
        .testimonials-swiper .swiper-pagination {
          display: none;
        }
      `}</style>

            <section className="t-section">
                <div className="t-overlay" />

                <div className="t-head">
                    <h2>WHAT OUR CLIENTS SAY</h2>
                    <p>
                        We have a track record of delivering excellence through our
                        services. Here&apos;s what some of our clients have to say about
                        our work.
                    </p>
                </div>

                <div className="t-row">
                    <button className="t-arrow t-prev">&#8592;</button>

                    <div className="swiper testimonials-swiper t-swiper">
                        <div className="swiper-wrapper">
                            {testimonials.map((t) => (
                                <div className="swiper-slide" key={t.id}>
                                    <div className="t-card">
                                        <div className="t-accent" />
                                        <div className="t-quote">
                                            <svg viewBox="0 0 24 24" width="28" height="28" fill="#fff">
                                                <path d="M6 17h3l2-4V7H5v6h3zm8 0h3l2-4V7h-6v6h3z" />
                                            </svg>
                                        </div>
                                        <p className="t-review">{t.review}</p>
                                        <div className="t-stars">★★★★★</div>
                                        <div className="t-name">{t.name}</div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <button className="t-arrow t-next">&#8594;</button>
                </div>
            </section>

            <style jsx>{`
        .t-section {
          font-family: "Nunito Sans", sans-serif;
          background-color: #1e2a78;
          background-image: url("/images/testimonial-bg.png");
          background-size: cover;
          background-position: center;
          background-repeat: no-repeat;
          padding: 70px 0 80px;
          position: relative;
          overflow: hidden;
        }

        .t-overlay {
          position: absolute;
          inset: 0;
          background-size: 80px 80px;
          pointer-events: none;
          z-index: 0;
        }

        .t-head {
          text-align: center;
          margin-bottom: 50px;
          position: relative;
          z-index: 1;
          padding: 0 20px;
        }
        .t-head h2 {
          font-size: 36px;
          font-weight: 900;
          color: #fff;
          letter-spacing: 1.5px;
          margin-bottom: 14px;
        }
        .t-head p {
          font-size: 14px;
          color: rgba(255, 255, 255, 0.75);
          max-width: 560px;
          margin: 0 auto;
          line-height: 1.7;
        }

        .t-row {
          position: relative;
          z-index: 1;
          display: flex;
          align-items: center;
          max-width: 1300px;
          margin: 0 auto;
          padding: 0 10px;
        }

        .t-swiper {
          flex: 1;
          min-width: 0;
        }

        .t-arrow {
          background: #fff;
          border: none;
          border-radius: 50%;
          width: 50px;
          height: 50px;
          flex-shrink: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          font-size: 20px;
          color: #1e2a78;
          font-weight: 900;
          box-shadow: 0 4px 16px rgba(0, 0, 0, 0.3);
          transition: background 0.2s;
          z-index: 10;
          margin: 0 10px;
        }
        .t-arrow:hover {
          background: #eef0ff;
        }

        .t-card {
          background: #fff;
          border-radius: 16px;
          padding: 50px 24px 28px;
          position: relative;
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          min-height: 340px;
          transition: transform 0.4s ease, box-shadow 0.4s ease, opacity 0.4s ease;
        }

        .t-accent {
          position: absolute;
          left: 0;
          top: 20%;
          bottom: 20%;
          width: 3px;
          background: #e07060;
          border-radius: 0 2px 2px 0;
        }

        .t-quote {
          background: #1e2a78;
          border-radius: 10px;
          width: 62px;
          height: 62px;
          display: flex;
          align-items: center;
          justify-content: center;
          position: absolute;
          top: -31px;
          left: 50%;
          transform: translateX(-50%);
          box-shadow: 0 4px 14px rgba(0, 0, 0, 0.25);
        }

        .t-review {
          font-size: 13.5px;
          color: #333;
          line-height: 1.75;
          margin-bottom: 18px;
          flex: 1;
          display: -webkit-box;
          -webkit-line-clamp: 7;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }

        .t-stars {
          color: #f5a623;
          font-size: 18px;
          letter-spacing: 3px;
          margin-bottom: 8px;
        }

        .t-name {
          font-size: 16px;
          font-weight: 800;
          color: #1e2a78;
        }

        @media (max-width: 768px) {
          .t-head h2 {
            font-size: 24px;
          }
          .t-arrow {
            width: 38px;
            height: 38px;
            font-size: 16px;
            margin: 0 6px;
          }
        }
      `}</style>
        </>
    );
};

export default TestimonialsSection;