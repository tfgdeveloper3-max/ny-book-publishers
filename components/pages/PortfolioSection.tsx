"use client";
import { useEffect, useRef } from "react";

const styles = `
  @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700;800&display=swap');

  .portfolio-section {
    background: #ebebeb;
    padding: 60px 0 70px;
    font-family: 'Poppins', sans-serif;
  }

  .portfolio-title {
    text-align: center;
    font-size: clamp(24px, 3vw, 38px);
    font-weight: 700;
    color: #1a1f5e;
    margin-bottom: 0;
    padding: 0 20px;
  }

  .portfolio-swiper {
    width: 100%;
    padding-top: 50px !important;
    padding-bottom: 60px !important;
  }

  /* Each slide */
  .portfolio-swiper .swiper-slide {
    width: 320px !important;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .portfolio-swiper .swiper-slide img {
    width: 320px;
    height: 485px;
    object-fit: cover;
    border-radius: 6px;
    display: block;
    box-shadow: 0 8px 28px rgba(0, 0, 0, 0.22);
  }

  /* Arrows */
  .portfolio-swiper .swiper-button-prev,
  .portfolio-swiper .swiper-button-next {
    color: #aaaaaa !important;
  }
  .portfolio-swiper .swiper-button-prev:hover,
  .portfolio-swiper .swiper-button-next:hover {
    color: #1a1f5e !important;
  }
  .portfolio-swiper .swiper-button-prev::after,
  .portfolio-swiper .swiper-button-next::after {
    font-size: 22px !important;
    font-weight: 700 !important;
  }

  /* Dots */
  .portfolio-swiper .swiper-pagination {
    bottom: 12px !important;
  }
  .portfolio-swiper .swiper-pagination-bullet {
    width: 10px !important;
    height: 10px !important;
    background: #bbbbbb !important;
    opacity: 1 !important;
  }
  .portfolio-swiper .swiper-pagination-bullet-active {
    background: #1a1f5e !important;
    transform: scale(1.25) !important;
  }
`;

const books = [
    { src: "/images/Portfolio/01.jpg", alt: "The New Dark" },
    { src: "/images/Portfolio/02.jpg", alt: "Engraved" },
    { src: "/images/Portfolio/03.jpg", alt: "Money Lies and The Housewives" },
    { src: "/images/Portfolio/04.jpg", alt: "The Face of a Killer" },
    { src: "/images/Portfolio/05.jpg", alt: "Boundless" },
    { src: "/images/Portfolio/06.jpg", alt: "DNAlien" },
    { src: "/images/Portfolio/07.jpg", alt: "DNAlien II" },
    { src: "/images/Portfolio/08.jpg", alt: "DNAlien III" },
    { src: "/images/Portfolio/09.jpg", alt: "The First Book of the Heart" },
    { src: "/images/Portfolio/10.jpg", alt: "The Seed of Adam" },
    { src: "/images/Portfolio/11.jpg", alt: "Saboteur" },
    { src: "/images/Portfolio/12.jpg", alt: "Becoming Quitproof" },
];

export default function PortfolioSection() {
    const swiperRef = useRef<HTMLDivElement>(null);
    const swiperInstanceRef = useRef<any>(null);

    useEffect(() => {
        const loadSwiper = async () => {
            if (!document.getElementById("swiper-css")) {
                const link = document.createElement("link");
                link.id = "swiper-css";
                link.rel = "stylesheet";
                link.href = "https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.css";
                document.head.appendChild(link);
            }

            if (!(window as any).Swiper) {
                await new Promise<void>((resolve) => {
                    const script = document.createElement("script");
                    script.src = "https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.js";
                    script.onload = () => resolve();
                    document.body.appendChild(script);
                });
            }

            if (swiperRef.current && !(swiperRef.current as any)._swiperInstance) {
                const Swiper = (window as any).Swiper;

                const instance = new Swiper(swiperRef.current, {
                    effect: "coverflow",
                    grabCursor: true,
                    centeredSlides: true,
                    slidesPerView: "auto",
                    loop: true,
                    loopedSlides: 3,
                    autoplay: {
                        delay: 3000,
                        disableOnInteraction: false,
                    },
                    coverflowEffect: {
                        rotate: 50,       
                        stretch: 0,
                        depth: 150,      
                        modifier: 1,
                        slideShadows: true,  
                    },
                
                    on: {
                        init(swiper: any) {
                            updateClip(swiper);
                        },
                        slideChange(swiper: any) {
                            updateClip(swiper);
                        },
                    },
                    pagination: {
                        el: ".portfolio-pagination",
                        clickable: true,
                    },
                    navigation: {
                        nextEl: ".portfolio-next",
                        prevEl: ".portfolio-prev",
                    },
                });

                function updateClip(swiper: any) {
                    const el = swiper.el as HTMLElement;
                    el.style.overflow = "hidden";
                }

                (swiperRef.current as any)._swiperInstance = instance;
                swiperInstanceRef.current = instance;
            }
        };

        loadSwiper();

        return () => {
            if (swiperInstanceRef.current) {
                swiperInstanceRef.current.destroy?.(true, true);
            }
        };
    }, []);

    return (
        <>
            <style dangerouslySetInnerHTML={{ __html: styles }} />

            <section className="portfolio-section">
                <h2 className="portfolio-title">Proudly Published By NY Book Publishers</h2>

                <div ref={swiperRef} className="swiper portfolio-swiper">
                    <div className="swiper-wrapper">
                        {books.map((book, i) => (
                            <div className="swiper-slide" key={i}>
                                <img src={book.src} alt={book.alt} />
                            </div>
                        ))}
                    </div>

                    <div className="swiper-button-prev portfolio-prev" />
                    <div className="swiper-button-next portfolio-next" />
                    <div className="swiper-pagination portfolio-pagination" />
                </div>
            </section>
        </>
    );
}