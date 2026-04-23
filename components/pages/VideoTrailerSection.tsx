"use client";

const styles = `
  @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800&display=swap');

  .trailer-section {
    position: relative;
    overflow: hidden;
    padding: 80px 40px;
    font-family: 'Poppins', sans-serif;
    text-align: center;
    background-color: #0a0f4e;
  }

  /* Background image */
  .trailer-bg {
    position: absolute;
    inset: 0;
    background-image: url('/images/trailer-bg.webp');
    background-repeat: no-repeat;
    background-position: center center;
    background-size: cover;
    opacity: 1;
    pointer-events: none;
    z-index: 0;
  }

  /* Dark overlay on top of bg */
  .trailer-overlay {
    position: absolute;
    inset: 0;
    background: rgba(10, 15, 78, 0.72);
    z-index: 1;
    pointer-events: none;
  }

  .trailer-content {
    position: relative;
    z-index: 2;
    max-width: 780px;
    margin: 0 auto;
  }

  .trailer-title {
    font-size: clamp(26px, 3.5vw, 44px);
    font-weight: 800;
    color: #00BCD4;
    line-height: 1.2;
    margin-bottom: 20px;
  }

  .trailer-desc {
    font-size: 14.5px;
    color: rgba(255, 255, 255, 0.88);
    line-height: 1.85;
    margin-bottom: 36px;
    max-width: 680px;
    margin-left: auto;
    margin-right: auto;
  }

  /* YouTube embed wrapper */
  .trailer-video-wrap {
    width: 100%;
    max-width: 520px;
    margin: 0 auto 44px;
    border-radius: 8px;
    overflow: hidden;
    box-shadow: 0 16px 50px rgba(0,0,0,0.5);
    aspect-ratio: 16 / 9;
    background: #000;
  }
  .trailer-video-wrap iframe {
    width: 100%;
    height: 100%;
    border: none;
    display: block;
  }

  /* Buttons */
  .trailer-btns {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 16px;
    flex-wrap: wrap;
  }

  .trailer-btn {
    background: transparent;
    border: 2px solid rgba(255,255,255,0.6);
    color: #ffffff;
    padding: 12px 28px;
    border-radius: 50px;
    font-family: 'Poppins', sans-serif;
    font-size: 14px;
    font-weight: 600;
    cursor: pointer;
    transition: background 0.2s, border-color 0.2s;
    text-decoration: none;
    display: inline-flex;
    align-items: center;
    gap: 8px;
  }
  .trailer-btn:hover {
    background: rgba(255,255,255,0.1);
    border-color: #ffffff;
  }

  @media (max-width: 640px) {
    .trailer-section { padding: 60px 20px; }
    .trailer-video-wrap { max-width: 100%; }
  }
`;

export default function VideoTrailerSection() {
    return (
        <>
            <style dangerouslySetInnerHTML={{ __html: styles }} />

            <section className="trailer-section">
                <div className="trailer-bg" />
                <div className="trailer-overlay" />

                <div className="trailer-content">
                    <h2 className="trailer-title">
                        NYBP Lights Up Times Square<br />
                        Watch Our Exclusive Video Trailer!
                    </h2>

                    <p className="trailer-desc">
                        Your book, featured in the heart of New York City! NY Book Publishers has taken the
                        spotlight in Times Square, showcasing incredible stories on the world's biggest stage.
                        Join the ranks of celebrated authors who have seen their books shine. Our expert team
                        ensures your story gets the recognition it deserves.<br />
                        Don't miss this unforgettable moment—watch the video and get inspired today!
                    </p>

                    <div className="trailer-video-wrap">
                        {/* <iframe
                            src=""
                            title="NYBP Times Square Video Trailer"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        /> */}
                    </div>

                    <div className="trailer-btns">
                        <a href="#" className="trailer-btn">
                            💬 Let's Discuss
                        </a>
                        <a href="#" className="trailer-btn">
                            📞 Create Your Book's Future
                        </a>
                    </div>
                </div>
            </section>
        </>
    );
}