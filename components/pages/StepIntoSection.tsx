"use client";

const styles = `
  @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800&display=swap');

  .stepinto-section {
    background-color: #00BCD4;
    position: relative;
    overflow: hidden;
    padding: 60px 150px 60px 200px;
    font-family: 'Poppins', sans-serif;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 40px;
    min-height: 320px;
  }

  /* Leaf — bottom RIGHT corner */
  .stepinto-leaf {
    position: absolute;
    right: 0;
    bottom: 0;
    height: 100%;
    width: auto;
    object-fit: contain;
    object-position: bottom right;
    opacity: 0.9;
    pointer-events: none;
    z-index: 0;
  }

  .stepinto-left {
    flex: 1;
    max-width: 600px;
    position: relative;
    z-index: 1;
  }

  .stepinto-title {
    font-size: clamp(22px, 2.8vw, 34px);
    font-weight: 700;
    color: #1a1f5e;
    line-height: 1.3;
    margin-bottom: 16px;
  }

  .stepinto-desc {
    font-size: 14px;
    color: #ffffff;
    line-height: 1.75;
    margin-bottom: 30px;
    max-width: 520px;
    opacity: 0.9;
  }

  .stepinto-btns {
    display: flex;
    align-items: center;
    gap: 14px;
    flex-wrap: wrap;
  }

  .stepinto-btn-outline {
    background: transparent;
    border: 2px solid #1a1f5e;
    color: #1a1f5e;
    padding: 11px 28px;
    border-radius: 50px;
    font-family: 'Poppins', sans-serif;
    font-size: 14px;
    font-weight: 600;
    cursor: pointer;
    transition: background 0.2s, color 0.2s;
    text-decoration: none;
    display: inline-block;
  }
  .stepinto-btn-outline:hover { background: #1a1f5e; color: #ffffff; }

  .stepinto-btn-navy {
    background: #1a1f5e;
    border: 2px solid #1a1f5e;
    color: #ffffff;
    padding: 11px 28px;
    border-radius: 50px;
    font-family: 'Poppins', sans-serif;
    font-size: 14px;
    font-weight: 600;
    cursor: pointer;
    transition: background 0.2s;
    text-decoration: none;
    display: inline-block;
  }
  .stepinto-btn-navy:hover { background: #0f1340; }

  .stepinto-right {
    flex-shrink: 0;
    position: relative;
    z-index: 1;
    margin-right: 150px;
  }
  .stepinto-right img {
    width: 360px;
    height: 400px
    object-fit: contain;
    display: block;
    filter: drop-shadow(0 10px 30px rgba(0,0,0,0.2));
  }

  @media (max-width: 768px) {
    .stepinto-section { flex-direction: column; padding: 40px 24px; }
    .stepinto-right { margin-right: 0; }
    .stepinto-right img { width: 220px; }
  }
`;

export default function StepIntoSection() {
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: styles }} />

      <section className="stepinto-section">

        {/* Leaf — right corner watermark */}
        <img src="/images/ready-leaf.png" alt="" className="stepinto-leaf" />

        <div className="stepinto-left">
          <h2 className="stepinto-title">
            Step Into The World Of Authors…<br />
            Your Time Is Now! Get Book<br />
            Publishing Services!
          </h2>
          <p className="stepinto-desc">
            Don't wait any longer to make your book a reality. From start to finish, publishing your
            story has never been this simple, exciting, and within your reach. Get expert book
            publishing services now!
          </p>
          <div className="stepinto-btns">
            <a href="#" className="stepinto-btn-outline">Book Now</a>
            <a href="#" className="stepinto-btn-navy">Chat with Experts</a>
            <a href="tel:8553847020" className="stepinto-btn-navy">Call now</a>
          </div>
        </div>

        <div className="stepinto-right">
          <img src="/images/yes-book.png" alt="Stack of Books" />
        </div>

      </section>
    </>
  );
}