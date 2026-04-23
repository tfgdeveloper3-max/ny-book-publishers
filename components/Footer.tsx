"use client";

const styles = `
  @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800&display=swap');

  .footer-wrapper {
    font-family: 'Poppins', sans-serif;
  }

  /* ── Top dark navy links band ── */
  .footer-top {
    background: #1a1f5e;
    padding: 56px 60px 60px;
  }

  .footer-top-inner {
    max-width: 1200px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1.2fr;
    gap: 32px;
  }

  .footer-col h4 {
    font-size: 17px;
    font-weight: 700;
    color: #00BCD4;
    margin: 0 0 22px;
  }

  .footer-col ul {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    flex-direction: column;
    gap: 14px;
  }

  .footer-col ul li a {
    font-size: 14px;
    color: #ffffff;
    text-decoration: none;
    transition: color 0.2s;
    font-weight: 400;
  }
  .footer-col ul li a:hover { color: #00BCD4; }

  /* Trustpilot & Google col */
  .footer-reviews-col {
    display: flex;
    flex-direction: column;
    gap: 20px;
    align-items: flex-start;
  }

  .footer-reviews-col img {
    max-width: 170px;
    width: 100%;
    object-fit: contain;
  }

  /* ── Middle peach/cream band ── */
  .footer-middle {
    background: #e0f7fa;
    padding: 32px 60px;
  }

  .footer-middle-inner {
    max-width: 1200px;
    margin: 0 auto;
    display: flex;
    align-items: center;
    gap: 40px;
    flex-wrap: wrap;
  }

  /* Logo */
  .footer-logo img {
    height: 72px;
    width: auto;
    object-fit: contain;
  }

  /* Address */
  .footer-address {
    flex: 1;
  }
  .footer-address p {
    font-size: 15px;
    font-weight: 700;
    color: #1a1f5e;
    margin: 0;
    line-height: 1.7;
  }

  /* Contact */
  .footer-contact {
    flex: 1;
  }
  .footer-contact a {
    display: block;
    font-size: 15px;
    font-weight: 700;
    color: #1a1f5e;
    text-decoration: none;
    line-height: 1.7;
    transition: color 0.2s;
  }
  .footer-contact a:hover { color: #00BCD4; }

  /* Social icons */
  .footer-socials {
    display: flex;
    gap: 20px;
    align-items: center;
    margin-left: auto;
  }

  .footer-social-link {
    color: #00BCD4;
    text-decoration: none;
    font-size: 22px;
    transition: color 0.2s, transform 0.15s;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .footer-social-link:hover { color: #cf5438; transform: translateY(-2px); }

  .footer-social-link svg {
    width: 22px;
    height: 22px;
    fill: #00BCD4;
    transition: fill 0.2s;
  }
  .footer-social-link:hover svg { fill: #cf5438; }

  /* ── Bottom copyright band ── */
  .footer-bottom {
    background: #1a1f5e;
    padding: 18px 24px;
    text-align: center;
    position: relative;
  }

  .footer-bottom p {
    font-size: 13px;
    color: rgba(255,255,255,0.75);
    margin: 0;
  }

  /* Help button bottom-right */
  .footer-help-btn {
    position: absolute;
    right: 24px;
    top: 50%;
    transform: translateY(-50%);
    background: #00BCD4;
    color: #ffffff;
    border: none;
    padding: 10px 20px;
    border-radius: 50px;
    font-family: 'Poppins', sans-serif;
    font-size: 13px;
    font-weight: 600;
    cursor: pointer;
    display: flex;
    align-items: center;
    gap: 8px;
    transition: background 0.2s;
  }
  .footer-help-btn:hover { background: #0f4a47; }

  .footer-help-btn svg {
    width: 16px;
    height: 16px;
    fill: #ffffff;
  }

  @media (max-width: 1024px) {
    .footer-top-inner {
      grid-template-columns: 1fr 1fr 1fr;
    }
    .footer-reviews-col { grid-column: span 1; }
  }

  @media (max-width: 768px) {
    .footer-top { padding: 40px 24px 48px; }
    .footer-top-inner { grid-template-columns: 1fr 1fr; gap: 28px; }
    .footer-middle { padding: 28px 24px; }
    .footer-middle-inner { gap: 24px; }
    .footer-socials { margin-left: 0; }
    .footer-help-btn { display: none; }
  }

  @media (max-width: 480px) {
    .footer-top-inner { grid-template-columns: 1fr; }
  }
`;

export default function FooterSection() {
    return (
        <>
            <style dangerouslySetInnerHTML={{ __html: styles }} />
            <footer className="footer-wrapper">

                {/* ── Top links band ── */}
                <div className="footer-top">
                    <div className="footer-top-inner">

                        {/* Quick Links */}
                        <div className="footer-col">
                            <h4>Quick Links</h4>
                            <ul>
                                <li><a href="#">Home</a></li>
                                <li><a href="#">About Us</a></li>
                                <li><a href="#">Portfolio</a></li>
                                <li><a href="#">Reviews</a></li>
                                <li><a href="#">Blogs</a></li>
                            </ul>
                        </div>

                        {/* Services */}
                        <div className="footer-col">
                            <h4>Services</h4>
                            <ul>
                                <li><a href="#">Ghostwriting Services</a></li>
                                <li><a href="#">Book Editing Services</a></li>
                                <li><a href="#">Book Cover Design Services</a></li>
                                <li><a href="#">Ebook Publishing Services</a></li>
                            </ul>
                        </div>

                        {/* Books */}
                        <div className="footer-col">
                            <h4>Books</h4>
                            <ul>
                                <li><a href="#">Book Marketing Services</a></li>
                                <li><a href="#">Illustration Design Services</a></li>
                                <li><a href="#">Beta Reader Services</a></li>
                                <li><a href="#">Book Coaching Services</a></li>
                            </ul>
                        </div>

\                        <div className="footer-col">
                            <h4>Help</h4>
                            <ul>
                                <li><a href="#">Contact Us</a></li>
                                <li><a href="#">Terms And conditions</a></li>
                                <li><a href="#">Privacy Policy</a></li>
                            </ul>
                        </div>

\                        <div className="footer-col footer-reviews-col">
                            <img src="/images/footer-icon1.webp" alt="Trustpilot 5 stars" />
                            <img src="/images/google3.png" alt="Google Reviews 5 stars" />
                        </div>

                    </div>
                </div>

                <div className="footer-middle">
                    <div className="footer-middle-inner">

                        <div className="footer-logo">
                            <img src="/images/new-logo.png" alt="NY Book Publishers" />
                        </div>

                        <div className="footer-address">
                            <p>
                                Mailing Address:<br />
                                42 Broadway 12th floor, New York, NY 10004
                            </p>
                        </div>

                        <div className="footer-contact">
                            <a href="mailto:info@nybookpublishers.com">info@nybookpublishers.com</a>
                            <a href="tel:8553847020">(855) 384-7020</a>
                        </div>

                        <div className="footer-socials">
                            <a href="#" className="footer-social-link" aria-label="Facebook">
                                <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                                </svg>
                            </a>
                            <a href="#" className="footer-social-link" aria-label="Instagram">
                                <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" fill="none" stroke="#00BCD4" strokeWidth="2" />
                                    <circle cx="12" cy="12" r="4" fill="none" stroke="#00BCD4" strokeWidth="2" />
                                    <circle cx="17.5" cy="6.5" r="1" fill="#00BCD4" stroke="none" />
                                </svg>
                            </a>
                            <a href="#" className="footer-social-link" aria-label="Pinterest">
                                <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M12 2C6.477 2 2 6.477 2 12c0 4.236 2.636 7.855 6.356 9.312-.088-.791-.167-2.005.035-2.868.181-.78 1.172-4.97 1.172-4.97s-.299-.598-.299-1.482c0-1.388.806-2.428 1.808-2.428.853 0 1.267.64 1.267 1.408 0 .858-.546 2.14-.828 3.33-.236.995.499 1.806 1.476 1.806 1.772 0 3.136-1.867 3.136-4.562 0-2.387-1.715-4.055-4.163-4.055-2.833 0-4.498 2.124-4.498 4.32 0 .856.33 1.772.741 2.274a.3.3 0 0 1 .069.285c-.076.315-.244.995-.277 1.134-.044.183-.146.222-.337.134-1.249-.581-2.03-2.407-2.03-3.874 0-3.154 2.292-6.052 6.608-6.052 3.469 0 6.165 2.473 6.165 5.776 0 3.447-2.173 6.22-5.19 6.22-1.013 0-1.966-.527-2.292-1.148l-.623 2.378c-.226.869-.835 1.958-1.244 2.621.937.29 1.931.446 2.962.446 5.523 0 10-4.477 10-10S17.523 2 12 2z" />
                                </svg>
                            </a>
                            <a href="#" className="footer-social-link" aria-label="LinkedIn">
                                <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z" />
                                    <circle cx="4" cy="4" r="2" />
                                </svg>
                            </a>
                        </div>

                    </div>
                </div>

                <div className="footer-bottom">
                    <p>Copyright © 2026 Book Publishing Group LLC All Rights Reserved.</p>
                    <button className="footer-help-btn">
                        <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="12" cy="12" r="10" fill="none" stroke="white" strokeWidth="2" />
                            <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" />
                            <line x1="12" y1="17" x2="12.01" y2="17" stroke="white" strokeWidth="2" strokeLinecap="round" />
                        </svg>
                        Help
                    </button>
                </div>

            </footer>
        </>
    );
}