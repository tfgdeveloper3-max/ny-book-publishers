"use client";

const styles = `
  @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800&display=swap');

  .global-section {
    margin-top: 40px;
    padding: 20px 0px !important;
    background: #ffffff;
    font-family: 'Poppins', sans-serif;
  }

  /* Heading — gradient only here */
  .global-section-heading {
    background: linear-gradient(90deg, #2e3079 0%, #2e3079 78%, #ffffff 87%);
    padding: 28px 60px 28px 200px;
  }
  .global-section-heading h2 {
    color: #ffffff;
    font-size: clamp(22px, 3vw, 34px);
    font-weight: 700;
    line-height: 1.35;
    margin: 0;
  }

  /* Body — white background */
  .global-section-body {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 48px 60px 48px 200px;
    gap: 48px;
    background: #ffffff;
  }

  /* Left text */
  .global-section-left {
    flex: 1;
    max-width: 580px;
  }
  .global-section-left p {
    font-size: 14.5px;
    font-weight: 400;
    color: #333333;
    line-height: 1.85;
    margin-bottom: 22px;
  }
  .global-section-left p:last-of-type { margin-bottom: 0; }

  /* Buttons */
  .global-section-btns {
    display: flex;
    align-items: center;
    gap: 16px;
    margin-top: 32px;
    flex-wrap: wrap;
  }
  .global-btn-call {
    background: #1a1f5e;
    color: #ffffff;
    border: none;
    padding: 13px 32px;
    border-radius: 50px;
    font-family: 'Poppins', sans-serif;
    font-size: 14px;
    font-weight: 600;
    cursor: pointer;
    transition: background 0.2s, transform 0.15s;
    text-decoration: none;
    display: inline-block;
  }
  .global-btn-call:hover { background: #0f1340; transform: translateY(-1px); }

  .global-btn-consult {
    background: #00BCD4;
    color: #ffffff;
    border: none;
    padding: 13px 32px;
    border-radius: 50px;
    font-family: 'Poppins', sans-serif;
    font-size: 14px;
    font-weight: 600;
    cursor: pointer;
    transition: background 0.2s, transform 0.15s;
    text-decoration: none;
    display: inline-block;
  }
  .global-btn-consult:hover { background: #cf5438; transform: translateY(-1px); }

  /* Right — book mockup */
  .global-section-right {
    flex-shrink: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 150px;
  }
  .global-section-right img {
    padding-right: 50px;
    width: 420px;
    max-width: 100%;
    object-fit: contain;
    display: block;
  }

  /* Bottom brand bar — white bg */
  .global-brand-bar {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 24px 60px 24px 200px;
    gap: 0;
    background: #ffffff;
    border-top: 1px solid #eeeeee;
  }

  .global-brand-tagline {
    flex: 0 0 auto;
    max-width: 560px;
    padding-right: 32px;
    border-right: 2px solid #cccccc;
  }
  .global-brand-tagline p {
    font-size: 18.5px;
    font-weight: 700;
    color: #00BCD4;
    line-height: 1.6;
    margin: 0;
  }

  .global-brand-logos {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    gap: 40px;
    padding-left: 40px;
    margin-left: auto;
    flex-wrap: wrap;
  }
  .global-brand-logos img {
    height: 30px;
    width: auto;
    object-fit: contain;
    opacity: 0.85;
    transition: opacity 0.2s, transform 0.2s;
  }
  .global-brand-logos img:hover { opacity: 1; transform: scale(1.05); }

  /* Responsive */
  @media (max-width: 900px) {
    .global-section-heading { padding: 24px 20px; }
    .global-section-body { flex-direction: column; padding: 32px 20px; }
    .global-section-left { max-width: 100%; }
    .global-section-right img { width: 300px; }
    .global-section-right { margin-right: 0; }
    .global-brand-bar { flex-direction: column; align-items: flex-start; padding: 20px; gap: 20px; }
    .global-brand-tagline { border-right: none; border-bottom: 1px solid #eee; padding-bottom: 16px; padding-right: 0; max-width: 100%; }
    .global-brand-logos { padding-left: 0; }
  }
`;

export default function GlobalSection() {
    return (
        <>
            <style dangerouslySetInnerHTML={{ __html: styles }} />

            <section className="global-section">

                <div className="global-section-heading">
                    <h2>NY Book Publisher – Global Leaders In<br />Professional Book Publishing Services</h2>
                </div>

                <div className="global-section-body">
                    <div className="global-section-left">
                        <p>
                            At NY Book Publishers, we're proud to be global leaders in professional book publishing
                            services. As one of the top book publishing companies New York offers, we support authors
                            from the very first idea to seeing their book on shelves. Many writers feel overwhelmed by
                            self book publishers, complicated processes, or searching endlessly for a publisher near me.
                            That's where we step in.
                        </p>
                        <p>
                            We offer complete solutions including editing, book writing help, cover design, formatting,
                            ISBN registration, and listings on Amazon and other major retailers. Our team also creates
                            smart marketing strategies so your book doesn't just get published, it gets noticed.
                        </p>
                        <p>
                            Whether you're looking for expert book publish services, affordable options from cheap
                            publishing companies, or specialized support like pro publishing or poetry, we have you
                            covered. We're trusted by new and experienced authors alike, with NY Book Publishers reviews
                            showing why people call us the best book publishers for new authors.
                        </p>
                        <p>
                            If you're dreaming of joining the ranks of famous self book publishers or want your book to
                            be proudly listed among top New York book publishing companies, let us help. Your story
                            deserves to be read and with NY Book Publishers, you'll finally get to see it out in the
                            world exactly as you imagined.
                        </p>

                        <div className="global-section-btns">
                            <a href="tel:8553847020" className="global-btn-call">Call now</a>
                            <a href="#" className="global-btn-consult">Get Free Consultation</a>
                        </div>
                    </div>

                    <div className="global-section-right">
                        <img src="/images/book-mock-1.png" alt="Book Mockup" />
                    </div>
                </div>

                <div className="global-brand-bar">
                    <div className="global-brand-tagline">
                        <p>Elevate Your Words, Create Lasting Impressions:<br />Rely On Our Passionate Book Publishing Services</p>
                    </div>
                    <div className="global-brand-logos justify-end items-end">
                        <img src="/images/brand1.webp" alt="Scribd" />
                        <img src="/images/brand2.webp" alt="Kobo" />
                        <img src="/images/brand4.webp" alt="Google Books" />
                        <img src="/images/brand5.webp" alt="Amazon" />
                    </div>
                </div>

            </section>
        </>
    );
}