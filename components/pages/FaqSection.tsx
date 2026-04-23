"use client";

import { useState } from "react";

const styles = `
  @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800&display=swap');

  .faq-wrapper {
    font-family: 'Poppins', sans-serif;
    background: #1a1f5e;
    padding: 64px 40px 100px;
    position: relative;
    overflow: visible;
  }

  .faq-title {
    font-size: clamp(20px, 2.8vw, 30px);
    font-weight: 700;
    color: #00BCD4;
    text-align: center;
    margin: 0 0 44px;
  }

  .faq-list {
    max-width: 760px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    gap: 14px;
  }

  /* Each accordion item */
  .faq-item {
    border: 1.5px solid #00BCD4;
    border-radius: 40px;
    overflow: hidden;
    transition: border-color 0.2s;
  }
  .faq-item.open {
    border-radius: 20px;
  }

  .faq-question {
    width: 100%;
    background: transparent;
    border: none;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 16px 24px;
    cursor: pointer;
    font-family: 'Poppins', sans-serif;
    font-size: 14px;
    font-weight: 500;
    color: #ffffff;
    text-align: left;
    gap: 16px;
    transition: color 0.2s;
  }
  .faq-question:hover { color: #00BCD4; }

  .faq-icon {
    flex-shrink: 0;
    width: 28px;
    height: 28px;
    border: 1.5px solid #00BCD4;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: background 0.2s, transform 0.3s;
    color: #00BCD4;
    font-size: 18px;
    font-weight: 300;
    line-height: 1;
  }
  .faq-item.open .faq-icon {
    background: #00BCD4;
    color: #ffffff;
    transform: rotate(45deg);
  }

  .faq-answer {
    max-height: 0;
    overflow: hidden;
    transition: max-height 0.35s ease, padding 0.25s ease;
    padding: 0 24px;
  }
  .faq-item.open .faq-answer {
    max-height: 300px;
    padding: 0 24px 18px;
  }

  .faq-answer p {
    font-size: 13px;
    color: rgba(255,255,255,0.75);
    line-height: 1.85;
    margin: 0;
  }

  /* Decorative book bottom-left */
  .faq-deco {
    position: absolute;
    bottom: -40px;
    left: 24px;
    width: 110px;
    opacity: 0.9;
    pointer-events: none;
    z-index: 1;
  }

  @media (max-width: 600px) {
    .faq-wrapper { padding: 48px 20px 80px; }
    .faq-question { font-size: 13px; padding: 14px 18px; }
  }
`;

const FAQS = [
    {
        q: "What genres of books do NY Book Publishers typically accept?",
        a: "We work with all genres — fiction, non-fiction, memoirs, children's books, self-help, business, academic, and more. Our team has experience across a wide variety of writing styles and formats.",
    },
    {
        q: "How do I submit my manuscript to NY Book Publishers?",
        a: "Simply reach out via our contact form or email us at info@nybookpublishers.com. Once we receive your manuscript, our team will review it and get back to you within 2–3 business days with next steps.",
    },
    {
        q: "Will the NY Book Publishers handle the marketing and promotion of my book?",
        a: "Yes! We offer comprehensive marketing and promotional services including social media campaigns, press releases, book launches, and Amazon optimization to help your book reach the widest audience possible.",
    },
    {
        q: "Can I choose my own cover design for my book?",
        a: "Absolutely. You can provide your own design or collaborate with our professional designers to create a stunning cover that reflects your vision. We offer unlimited revisions until you're fully satisfied.",
    },
    {
        q: "How do royalties work with NY Book Publishers?",
        a: "You retain 100% of your royalties. We help you publish through platforms like Amazon KDP, Barnes & Noble Press, and others, where royalties are paid directly to you by the platform.",
    },
];

export default function FAQSection() {
    const [open, setOpen] = useState<number | null>(null);

    const toggle = (i: number) => setOpen(open === i ? null : i);

    return (
        <>
            <style dangerouslySetInnerHTML={{ __html: styles }} />
            <div className="faq-wrapper">
                <h2 className="faq-title">Want to know more about NY Book Publishers?</h2>

                <div className="faq-list">
                    {FAQS.map((faq, i) => (
                        <div key={i} className={`faq-item ${open === i ? "open" : ""}`}>
                            <button className="faq-question" onClick={() => toggle(i)}>
                                <span>{faq.q}</span>
                                <span className="faq-icon">+</span>
                            </button>
                            <div className="faq-answer">
                                <p>{faq.a}</p>
                            </div>
                        </div>
                    ))}
                </div>

                <img
                    className="faq-deco"
                    src="/images/read-book.webp"
                    alt=""
                    aria-hidden="true"
                />
            </div>
        </>
    );
}