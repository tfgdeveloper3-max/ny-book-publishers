"use client";

const styles = `
  @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800&display=swap');

  .watch-section {
    position: relative;
    background-color: #2e3079;
    padding: 80px 60px;
    text-align: center;
    overflow: hidden;
    font-family: 'Poppins', sans-serif;
    height: 530px
  }

  /* Background sketch image overlay */
  .watch-section-bg {
    position: absolute;
    inset: 0;
    background-image: url('/images/discover-layer-2.png');
    background-repeat: no-repeat;
    background-position: center center;
    background-size: cover;
    opacity: 0.8;
    pointer-events: none;
    z-index: 0;
  }

  /* Content above bg */
  .watch-section-content {
    position: relative;
    z-index: 1;
    max-width: 980px;
    margin: 0 auto;
  }

  .watch-section-title {
    font-size: clamp(20px, 3.5vw, 38px);
    font-weight: 600;
    color: #00BCD4;
    line-height: 1.25;
    margin-bottom: 28px;
  }

  .watch-section-desc {
    font-size: 14px;
    font-weight: 400;
    color: rgba(255, 255, 255, 0.90);
    line-height: 1.85;
    margin-bottom: 44px;
    max-width: 900px;
    margin-left: auto;
    margin-right: auto;
  }

  .watch-btn {
    display: inline-block;
    background: transparent;
    border: 2px solid #e8a090;
    color: #ffffff;
    padding: 14px 44px;
    border-radius: 50px;
    font-family: 'Poppins', sans-serif;
    font-size: 15px;
    font-weight: 500;
    text-decoration: none;
    cursor: pointer;
    transition: background 0.2s, color 0.2s, border-color 0.2s;
    letter-spacing: 0.2px;
  }
  .watch-btn:hover {
    background: #00BCD4;
    border-color: #00BCD4;
    color: #ffffff;
  }

  @media (max-width: 768px) {
    .watch-section { padding: 60px 24px; }
    .watch-section-desc { font-size: 14px; }
  }
`;

export default function WatchSection() {
    return (
        <>
            <style dangerouslySetInnerHTML={{ __html: styles }} />

            <section className="watch-section">
                <div className="watch-section-bg" />

                <div className="watch-section-content">
                    <h2 className="watch-section-title">
                        Watch How Easy Book Publishing Can Be With Us
                    </h2>

                    <p className="watch-section-desc">
                        At NY Book Publishers, we do so much more than just publish your book. We, the best self
                        publishing book companies, can help you write it, polish it through careful editing, design
                        a stunning cover and interior layout, and take care of all the details like ISBN registration
                        and getting your book listed on Amazon and other top platforms. So many authors feel stuck
                        trying to juggle different services or figure out confusing self publishing platforms. That's
                        why we're here. As expert book publishers and one of the most trusted book publishing
                        companies New York has, we handle everything in one place. From your first idea to the moment
                        you see your book on the shelves, we're by your side. If you've been searching for 'book
                        publishers near me,' you need a real partner to handle it all, not just another self book
                        publisher, we're here to make it happen. Enjoy the process and we'll take care of the rest.
                    </p>

                    <a href="#" className="watch-btn">Book your consultation today!</a>
                </div>
            </section>
        </>
    );
}