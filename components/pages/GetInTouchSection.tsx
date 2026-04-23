"use client";

import { useState } from "react";

const styles = `
  @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800&display=swap');

  .git-wrapper {
    font-family: 'Poppins', sans-serif;
    background: #ffffff;
  }

  /* ── Top "Get In Touch" band ── */
  .git-top {
    text-align: center;
    padding: 64px 24px 48px;
    border-bottom: 1px solid #f0f0f0;
  }

  .git-top h2 {
    font-size: clamp(28px, 4vw, 48px);
    font-weight: 800;
    color: #1a1f5e;
    margin: 0 0 10px;
  }

  .git-top h3 {
    font-size: clamp(16px, 2.2vw, 22px);
    font-weight: 700;
    color: #00BCD4;
    margin: 0 0 16px;
    line-height: 1.4;
  }

  .git-top p {
    font-size: 14px;
    color: #666;
    line-height: 1.8;
    max-width: 500px;
    margin: 0 auto 28px;
  }

  .git-top-btns {
    display: flex;
    gap: 14px;
    justify-content: center;
    flex-wrap: wrap;
  }

  .git-btn-coral {
    background: #00BCD4;
    color: #1a1f5e;
    border: none;
    padding: 13px 28px;
    border-radius: 50px;
    font-family: 'Poppins', sans-serif;
    font-size: 13px;
    font-weight: 600;
    cursor: pointer;
    transition: background 0.2s, transform 0.15s;
    text-decoration: none;
    display: inline-block;
  }
  .git-btn-coral:hover { background: #1a1f5e; color: #00BCD4; transform: translateY(-1px); }

  .git-btn-navy {
    background: #1a1f5e;
    color: #ffffff;
    border: none;
    padding: 13px 28px;
    border-radius: 50px;
    font-family: 'Poppins', sans-serif;
    font-size: 13px;
    font-weight: 600;
    cursor: pointer;
    transition: background 0.2s, transform 0.15s;
    text-decoration: none;
    display: inline-block;
  }
  .git-btn-navy:hover { background: #0f1340; transform: translateY(-1px); }

  /* ── Bottom form band ── */
  .git-form-band {
    padding: 64px 40px 72px;
    display: flex;
    gap: 40px;
    align-items: flex-start;
    max-width: 1100px;
    margin: 0 auto;
  }

  /* Left book image */
  .git-book-col {
    flex: 0 0 380px;
    padding-top: 100px;
    display: flex;
    align-items: flex-end;
    justify-content: center;
  }
  .git-book-col img {
    width: 100%;
    height: 100%;
    object-fit: contain;
    filter: drop-shadow(0 8px 24px rgba(0,0,0,0.12));
  }

  /* Right form */
  .git-form-col {
    flex: 1;
  }

  .git-form-col h3 {
    font-size: clamp(22px, 3vw, 32px);
    font-weight: 800;
    color: #1a1f5e;
    margin: 0 0 28px;
  }

  .git-form {
    display: flex;
    flex-direction: column;
    gap: 14px;
  }

  .git-form input,
  .git-form textarea {
    width: 100%;
    border: 1.5px solid #1a1f5e;
    border-radius: 6px;
    padding: 14px 16px;
    font-family: 'Poppins', sans-serif;
    font-size: 14px;
    color: #333;
    outline: none;
    transition: border-color 0.2s, box-shadow 0.2s;
    background: #fff;
    box-sizing: border-box;
  }
  .git-form input:focus,
  .git-form textarea:focus {
    border-color: #00BCD4;
    box-shadow: 0 0 0 3px rgba(232,115,90,0.12);
  }
  .git-form input::placeholder,
  .git-form textarea::placeholder { color: #aaa; }

  .git-form-row {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 14px;
  }

  .git-form textarea {
    resize: vertical;
    min-height: 130px;
  }

  /* reCAPTCHA placeholder */
  .git-recaptcha {
    display: flex;
    align-items: center;
    gap: 12px;
    border: 1.5px solid #d0d0d0;
    border-radius: 6px;
    padding: 14px 16px;
    background: #f9f9f9;
  }

  .git-recaptcha-check {
    width: 20px;
    height: 20px;
    border: 2px solid #aaa;
    border-radius: 3px;
    cursor: pointer;
    flex-shrink: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #fff;
    transition: border-color 0.2s;
  }
  .git-recaptcha-check.checked {
    border-color: #4caf50;
    background: #4caf50;
  }
  .git-recaptcha-check.checked::after {
    content: '✓';
    color: white;
    font-size: 12px;
  }

  .git-recaptcha-label {
    font-size: 13px;
    color: #555;
    flex: 1;
  }

  .git-recaptcha-logo {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2px;
  }
  .git-recaptcha-logo span {
    font-size: 9px;
    color: #aaa;
    letter-spacing: 0.5px;
  }
  .git-recaptcha-logo svg {
    width: 32px;
    height: 32px;
  }

  .git-submit-btn {
    background: #1a1f5e;
    color: #ffffff;
    border: none;
    padding: 14px 44px;
    border-radius: 50px;
    font-family: 'Poppins', sans-serif;
    font-size: 14px;
    font-weight: 600;
    cursor: pointer;
    transition: background 0.2s, transform 0.15s;
    align-self: flex-start;
  }
  .git-submit-btn:hover { background: #0f1340; transform: translateY(-1px); }

  @media (max-width: 768px) {
    .git-form-band { flex-direction: column; padding: 40px 20px 56px; }
    .git-book-col { display: none; }
    .git-form-row { grid-template-columns: 1fr; }
    .git-top { padding: 48px 20px 36px; }
  }
`;

export default function GetInTouchSection() {
    const [checked, setChecked] = useState(false);
    const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });

    const handle = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
        setForm({ ...form, [e.target.name]: e.target.value });

    return (
        <>
            <style dangerouslySetInnerHTML={{ __html: styles }} />
            <div className="git-wrapper">

                <div className="git-top">
                    <h2>Get In Touch</h2>
                    <h3>Contact NY Book Publishers For Professional Book<br />Publishing Services</h3>
                    <p>
                        Reach out to our team and start your author journey with confidence.
                        We're here to listen, guide, and make the book publishing process
                        easy, smooth, and enjoyable for you.
                    </p>
                    <div className="git-top-btns">
                        <a href="#" className="git-btn-coral">Chat With Experts</a>
                        <a href="tel:8553847020" className="git-btn-navy">📞 (855) 384-7020</a>
                    </div>
                </div>

                <div className="git-form-band">
                    <div className="git-book-col">
                        <img src="/images/yes-book.png" alt="Books stack" />
                    </div>

                    <div className="git-form-col">
                        <h3>Ready To Discuss Your Story?</h3>

                        <div className="git-form">
                            <input
                                name="name"
                                placeholder="Enter Your Name"
                                value={form.name}
                                onChange={handle}
                            />

                            <div className="git-form-row">
                                <input
                                    name="email"
                                    type="email"
                                    placeholder="Enter Your Email"
                                    value={form.email}
                                    onChange={handle}
                                />
                                <input
                                    name="phone"
                                    type="tel"
                                    placeholder="Enter Phone Number"
                                    value={form.phone}
                                    onChange={handle}
                                />
                            </div>

                            <textarea
                                name="message"
                                placeholder="Enter Message"
                                value={form.message}
                                onChange={handle}
                            />

                            <div className="git-recaptcha">
                                <div
                                    className={`git-recaptcha-check ${checked ? "checked" : ""}`}
                                    onClick={() => setChecked(!checked)}
                                />
                                <span className="git-recaptcha-label">I'm not a robot</span>
                                <div className="git-recaptcha-logo">
                                    <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <circle cx="32" cy="32" r="30" stroke="#4A90D9" strokeWidth="4" />
                                        <path d="M20 32 C20 24 26 18 32 18 C38 18 44 24 44 32" stroke="#4A90D9" strokeWidth="3" fill="none" strokeLinecap="round" />
                                        <path d="M44 32 C44 40 38 46 32 46 C26 46 20 40 20 32" stroke="#00BCD4" strokeWidth="3" fill="none" strokeLinecap="round" />
                                        <polygon points="44,26 50,32 44,38" fill="#4A90D9" />
                                        <polygon points="20,38 14,32 20,26" fill="#00BCD4" />
                                    </svg>
                                    <span>reCAPTCHA</span>
                                    <span>Privacy · Terms</span>
                                </div>
                            </div>

                            <button className="git-submit-btn">Get Started</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}