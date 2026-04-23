"use client";

const styles = `
  @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800;900&display=swap');

  .nybp-hero {
    background-color: #1a1f5e;
    min-height: 600px;
    position: relative;
    overflow: hidden;
    font-family: 'Poppins', sans-serif;
  }

  .nybp-hero-bg {
    position: absolute;
    inset: 0;
    background-image: url('/images/home-books.png');
    background-repeat: no-repeat;
    background-position: bottom center;
    background-size: contain;
    opacity: 0.1;
    pointer-events: none;
    z-index: 0;
  }

  .nybp-hero-inner {
    position: relative;
    z-index: 1;
    max-width: 1320px;
    margin: 0 auto;
    padding: 60px 30px 70px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 40px;
  }

  .nybp-hero-left { flex: 1; max-width: 580px; }

  .nybp-hero-eyebrow {
    font-size: 16px;
    font-weight: 600;
    color: rgba(255,255,255,0.8);
    text-transform: uppercase;
    letter-spacing: 0.5px;
    margin-bottom: 2px;
  }

  .nybp-hero-title {
    font-size: clamp(72px, 9vw, 108px);
    font-weight: 800;
    color: #00BCD4;
    line-height: 0.88;
    text-transform: uppercase;
    margin: 0;
    letter-spacing: -1px;
  }

  .nybp-hero-subtitle {
    font-size: clamp(15px, 1.8vw, 20px);
    font-weight: 700;
    color: #ffffff;
    text-transform: uppercase;
    margin-top: 14px;
    margin-bottom: 20px;
    line-height: 1.35;
    letter-spacing: 0.3px;
  }

  .nybp-hero-desc {
    font-size: 14px;
    font-weight: 400;
    color: rgba(255,255,255,0.78);
    line-height: 1.78;
    margin-bottom: 28px;
    max-width: 500px;
  }

  .nybp-hero-badges { display: flex; align-items: center; gap: 20px; margin-bottom: 30px; flex-wrap: wrap; }
  .nybp-hero-badges img { height: 70px; width: auto; object-fit: cover; }

  .nybp-hero-btns { display: flex; align-items: center; gap: 14px; flex-wrap: wrap; }

  .nybp-btn-chat {
    background: transparent;
    border: 2px solid rgba(255,255,255,0.45);
    color: #ffffff;
    padding: 12px 30px;
    border-radius: 50px;
    font-family: 'Poppins', sans-serif;
    font-size: 14px;
    font-weight: 600;
    cursor: pointer;
    transition: border-color 0.2s, background 0.2s;
  }
  .nybp-btn-chat:hover { border-color: #ffffff; background: rgba(255,255,255,0.08); }

  .nybp-btn-free {
    background: #00BCD4;
    border: none;
    color: #1a1f5e;
    padding: 12px 30px;
    border-radius: 50px;
    font-family: 'Poppins', sans-serif;
    font-size: 14px;
    font-weight: 700;
    cursor: pointer;
    transition: background 0.2s;
  }
  .nybp-btn-free:hover { background: #0097A7; }

  .nybp-laptop-float {
    position: absolute;
    top: 24px;
    left: 45%;
    transform: translateX(-110px);
    width: 230px;
    pointer-events: none;
    z-index: 0;
  }

  .nybp-hero-right { flex-shrink: 0; width: 550px; position: relative; padding-right: 100px; }

  .nybp-form-card {
    background: #ffffff;
    border-radius: 14px;
    padding: 34px 30px 30px;
    box-shadow: 0 20px 60px rgba(0,0,0,0.4);
    position: relative;
    z-index: 2;
    border-top: 4px solid #00BCD4;
  }

  .nybp-form-logo { text-align: left; margin-bottom: 14px; }
  .nybp-form-logo img { height: 56px; width: auto; object-fit: contain; }

  .nybp-form-title {
    font-size: 14px;
    font-weight: 700;
    color: #1a1f5e;
    text-transform: uppercase;
    letter-spacing: 1.5px;
    margin-bottom: 20px;
  }

  .nybp-input {
    width: 100%;
    border: 1.5px solid #dde1e7;
    border-radius: 8px;
    padding: 13px 16px;
    font-family: 'Poppins', sans-serif;
    font-size: 13.5px;
    color: #444;
    outline: none;
    margin-bottom: 12px;
    display: block;
    transition: border-color 0.2s;
    background: #fff;
  }
  .nybp-input::placeholder { color: #aab0bb; }
  .nybp-input:focus { border-color: #00BCD4; }

  textarea.nybp-input { height: 108px; resize: vertical; }

  .nybp-captcha {
    display: flex;
    align-items: center;
    gap: 10px;
    border: 1.5px solid #dde1e7;
    border-radius: 8px;
    padding: 12px 16px;
    margin-bottom: 14px;
    font-family: 'Poppins', sans-serif;
    font-size: 13.5px;
    color: #555;
  }
  .nybp-captcha input[type="checkbox"] { width: 18px; height: 18px; accent-color: #00BCD4; cursor: pointer; flex-shrink: 0; }
  .nybp-captcha-brand { margin-left: auto; text-align: center; font-size: 10px; color: #999; line-height: 1.5; }
  .nybp-captcha-brand .nybp-lock { font-size: 16px; }

  .nybp-btn-contact {
    width: 100%;
    background: #00BCD4;
    color: #1a1f5e;
    border: none;
    border-radius: 8px;
    padding: 15px;
    font-family: 'Poppins', sans-serif;
    font-size: 15px;
    font-weight: 700;
    letter-spacing: 1px;
    text-transform: uppercase;
    cursor: pointer;
    transition: background 0.2s;
  }
  .nybp-btn-contact:hover { background: #0097A7; }

  .nybp-tablet-float {
    position: absolute;
    right: -85px;
    top: 55%;
    transform: translateY(-50%);
    width: 150px;
    pointer-events: none;
    z-index: 3;
  }

  @media (max-width: 960px) {
    .nybp-hero-inner { flex-direction: column; padding: 40px 20px 48px; }
    .nybp-hero-right { width: 100%; padding-right: 0; }
    .nybp-laptop-float { display: none; }
    .nybp-tablet-float { display: none; }
    .nybp-hero-left { max-width: 100%; }
  }
`;

export default function Hero() {
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: styles }} />
      <section className="nybp-hero">
        <div className="nybp-hero-bg" />
        <img src="/images/laptop.webp" alt="" className="nybp-laptop-float" />
        <div className="nybp-hero-inner">
          <div className="nybp-hero-left">
            <p className="nybp-hero-eyebrow">Make Your Book A</p>
            <h1 className="nybp-hero-title">BEST<br />SELLER</h1>
            <p className="nybp-hero-subtitle">With Our Expert Book Publishing Services</p>
            <p className="nybp-hero-desc">
              Don't hide your story when the world is waiting to hear it. Show your creativity
              with confidence and let us guide you through every step. Your creativity stays
              in your hands, and we never change your voice or your vision. Writing, editing,
              marketing, designing, publishing, everything you need is right here at NY Book Publishers.
            </p>
            <div className="nybp-hero-badges">
              <img src="/images/google3.png" alt="Google Reviews 5 Stars" />
              <img src="/images/footer-icon1.webp" alt="Trustpilot 5 Stars" />
            </div>
            <div className="nybp-hero-btns">
              <button className="nybp-btn-chat">Chat with us</button>
              <button className="nybp-btn-free">Book Free Consultation</button>
            </div>
          </div>
          <div className="nybp-hero-right">
            <div className="nybp-form-card">
              <div className="nybp-form-logo">
                <img src="/images/new-logo.png" alt="NY Book Publishers" />
              </div>
              <p className="nybp-form-title">Become A Published Author</p>
              <input className="nybp-input" type="text" placeholder="Enter Your Name" />
              <input className="nybp-input" type="email" placeholder="Enter Your Email" />
              <input className="nybp-input" type="tel" placeholder="+123 456 7890" />
              <textarea className="nybp-input" placeholder="Type Your Messages . . . ." />
              <div className="nybp-captcha">
                <input type="checkbox" id="nybp-robot" />
                <label htmlFor="nybp-robot">I'm not a robot</label>
                <div className="nybp-captcha-brand">
                  <div className="nybp-lock">🔒</div>
                  <div>reCAPTCHA</div>
                  <div>Privacy - Terms</div>
                </div>
              </div>
              <button className="nybp-btn-contact">Contact Us</button>
            </div>
            <img src="/images/tablet.webp" alt="" className="nybp-tablet-float" />
          </div>
        </div>
      </section>
    </>
  );
}