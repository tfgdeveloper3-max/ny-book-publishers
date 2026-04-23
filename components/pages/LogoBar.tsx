"use client";

const styles = `
  @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600&display=swap');

  .nybp-logobar {
    background: #11184e;
    overflow: hidden;
    border-top: 1px solid #11184e;
    border-bottom: 1px solid #11184e;
    height: 120px;
    display: flex;
    align-items: center;
  }

  .nybp-logobar-track {
    display: flex;
    align-items: center;
    width: max-content;
    height: 100%;
    animation: nybpSlide 24s linear infinite;
  }
  .nybp-logobar-track:hover {
    animation-play-state: paused;
  }

  .nybp-logo-item {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0 56px;
    flex-shrink: 0;
  }

  .nybp-logo-item img {
    height: 38px;
    width: auto;
    object-fit: contain;
    opacity: 0.75;
    filter: grayscale(15%);
    transition: opacity 0.3s, filter 0.3s, transform 0.3s;
    display: block;
  }
  .nybp-logo-item img:hover {
    opacity: 1;
    filter: grayscale(0%);
    transform: scale(1.06);
  }

  @keyframes nybpSlide {
    0%   { transform: translateX(0); }
    100% { transform: translateX(-50%); }
  }
`;

const logos = [
    { src: "/images/hero-logo4.png", alt: "Apple Books" },
    { src: "/images/amazon.png", alt: "Amazon Kindle" },
    { src: "/images/hero-logo2.png", alt: "IngramSpark" },
    { src: "/images/hero-logo1.png", alt: "Goodreads" },
];

const allLogos = [...logos, ...logos, ...logos, ...logos, ...logos, ...logos];

export default function LogoBar() {
    return (
        <>
            <style dangerouslySetInnerHTML={{ __html: styles }} />

            <div className="nybp-logobar">
                <div className="nybp-logobar-track">
                    {allLogos.map((logo, i) => (
                        <div className="nybp-logo-item" key={i}>
                            <img src={logo.src} alt={logo.alt} />
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}