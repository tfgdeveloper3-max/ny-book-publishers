"use client";

const styles = `
  @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800;900&display=swap');

  .gp-wrapper {
    font-family: 'Poppins', sans-serif;
    background: #ffffff;
    overflow: hidden;
  }

  /* ── Coral banner with GET + book image overlapping ── */
  .gp-banner { 
    justify-content: center;
  }

  .gp-banner-inner {
    background: #00BCD4;
    width: 100%;
    min-height: 90px;
    display: flex;
    justify-content: center;
    padding: 0 40px;
  }

  .gp-banner-text {
    font-size: clamp(52px, 8vw, 96px);
    font-weight: 900;
    color: #ffffff;
    line-height: 1;
    padding: 18px 0;
    letter-spacing: -1px;
  }

  /* ── Main content row ── */
  .gp-body {
    display: flex;
    align-items: flex-start;
    padding: 0 40px 60px;
    gap: 0;
    position: relative;
  }

  /* Left: book image — starts from above banner */
  .gp-book-col {
    flex: 0 0 44%;
    position: relative;
    margin-top: -60px;
    z-index: 2;
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
  }

  .gp-book-col img {
    width: 100%;
    max-width: 520px;
    height: 550px;
    object-fit: contain;
    display: block;
    filter: drop-shadow(0 20px 40px rgba(0,0,0,0.18));
  }

  /* Right: content */
  .gp-content-col {
    flex: 1;
    padding: 36px 0 0 32px;
  }

  .gp-title {
    font-size: clamp(22px, 2.8vw, 34px);
    font-weight: 800;
    color: #1a1f5e;
    line-height: 1.25;
    margin: 0 0 16px;
  }
  .gp-title .accent { color: #00BCD4; }

  .gp-desc {
    font-size: 14px;
    color: #555;
    line-height: 1.85;
    margin: 0 0 28px;
    max-width: 460px;
  }

  /* Contact row */
  .gp-contact-row {
    display: flex;
    gap: 32px;
    margin-bottom: 28px;
    flex-wrap: wrap;
  }

  .gp-contact-item {
    display: flex;
    align-items: center;
    gap: 12px;
  }

  .gp-contact-icon {
    width: 42px;
    height: 42px;
    flex-shrink: 0;
  }

  .gp-contact-label {
    font-size: 13px;
    font-weight: 700;
    color: #00BCD4;
    display: block;
    margin-bottom: 2px;
  }
  .gp-contact-value {
    font-size: 13px;
    color: #1a1f5e;
    font-weight: 500;
    display: block;
  }

  /* Buttons */
  .gp-btn-row {
    display: flex;
    gap: 14px;
    flex-wrap: wrap;
  }


  .gp-btn-primary {
    background: #00BCD4;
    color: #1a1f5e;
    border: none;
    padding: 13px 32px;
    border-radius: 50px;
    font-family: 'Poppins', sans-serif;
    font-size: 14px;
    font-weight: 700;
    cursor: pointer;
    transition: background 0.2s, transform 0.15s;
    text-decoration: none;
    display: inline-block;
    align-self: flex-start;
  }
  .gp-btn-primary:hover { background: #1a1f5e; color: #00BCD4; transform: translateY(-1px); }

  .gp-btn-secondary {
    background: #1a1f5e;
    color: #ffffff;
    border: none;
    padding: 13px 32px;
    border-radius: 50px;
    font-family: 'Poppins', sans-serif;
    font-size: 13px;
    font-weight: 600;
    cursor: pointer;
    transition: background 0.2s, transform 0.15s;
    text-decoration: none;
    display: inline-block;
  }
  .gp-btn-secondary:hover { background: #0f1340; transform: translateY(-1px); }

  @media (max-width: 768px) {
    .gp-banner { padding-left: 0; justify-content: center; }
    .gp-body { flex-direction: column; padding: 0 20px 48px; }
    .gp-book-col { flex: none; width: 100%; margin-top: -40px; justify-content: center; }
    .gp-book-col img { max-width: 260px; }
    .gp-content-col { padding: 24px 0 0; }
    .gp-banner-text { font-size: 52px; padding: 14px 20px; }
  }
`;

export default function GetPremiumSection() {
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: styles }} />
      <div className="gp-wrapper">

        {/* Coral banner — "GET" text, right side 50% width */}
        <div className="gp-banner">
          <div className="gp-banner-inner">
            <span className="gp-banner-text">GET</span>
          </div>
        </div>

        {/* Body row */}
        <div className="gp-body">

          {/* Book image — overlaps the coral banner */}
          <div className="gp-book-col">
            <img src="/images/book-2.png" alt="Book mockup" />
          </div>

          {/* Right content */}
          <div className="gp-content-col">
            <h2 className="gp-title">
              Premium <span className="accent">Book<br />Publishing</span> Services!
            </h2>

            <p className="gp-desc">
              From editing to design and full distribution, we handle everything so you can
              proudly hold your book and share it with the world. Sign up and let our book
              publishing experts handle the rest
            </p>

            {/* Contact row */}
            <div className="gp-contact-row">
              <div className="gp-contact-item">
                <img
                  src="/images/phone.webp"
                  alt="Call Us"
                  className="gp-contact-icon"
                />
                <div>
                  <span className="gp-contact-label">Call Us</span>
                  <span className="gp-contact-value">(855) 384-7020</span>
                </div>
              </div>

              <div className="gp-contact-item">
                <img
                  src="/images/envp.webp"
                  alt="Email"
                  className="gp-contact-icon"
                />
                <div>
                  <span className="gp-contact-label">Discuss your ideas</span>
                  <span className="gp-contact-value">info@nybookpublishers.com</span>
                </div>
              </div>
            </div>

            {/* Buttons */}
            <div className="gp-btn-row">
              <a href="#" className="gp-btn-primary">Get a free quote for your book projects</a>
              <a href="#" className="gp-btn-secondary">Live Chat</a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}