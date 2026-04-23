"use client";

const styles = `
  @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800&display=swap');

  .proud-section {
    background: #ffffff;
    font-family: 'Poppins', sans-serif;
    display: flex;
    align-items: stretch;
    min-height: 520px;
    overflow: hidden;
  }

  .proud-left {
    flex: 0 0 45%;
    position: relative;
    display: flex;
    align-items: flex-end;
    justify-content: center;
    padding: 0 0 0 40px;
  }
  .proud-left img {
    width: 480px;
    height: 743px;
    max-width: 100%;
    object-fit: contain;
    display: block;
    position: relative;
    z-index: 1;
  }

  .proud-right {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 60px 60px 60px 0;
  }

  .proud-badge {
    background: #00BCD4;
    display: inline-block;
    padding: 10px 28px;
    margin-bottom: 24px;
    align-self: flex-start;
  }
  .proud-badge span {
    font-size: clamp(22px, 3vw, 36px);
    font-weight: 800;
    color: #1a1f5e;
    letter-spacing: 1px;
    text-transform: uppercase;
  }

  .proud-title {
    font-size: clamp(22px, 2.8vw, 34px);
    font-weight: 700;
    color: #00BCD4;
    line-height: 1.3;
    margin-bottom: 20px;
  }

  .proud-desc {
    font-size: 14px;
    line-height: 1.85;
    margin-bottom: 32px;
    max-width: 480px;
  }

  .proud-btn {
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
  .proud-btn:hover { background: #1a1f5e; color: #00BCD4; transform: translateY(-1px); }

  @media (max-width: 900px) {
    .proud-section { flex-direction: column; }
    .proud-left { padding: 40px 20px 0; justify-content: center; }
    .proud-left img { width: 260px; }
    .proud-right { padding: 32px 24px 48px; }
  }
`;

export default function ProudSection() {
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: styles }} />
      <section className="proud-section">
        <div className="proud-left">
          <img src="/images/book-3.png" alt="Published Books Stack" />
        </div>
        <div className="proud-right">
          <div className="proud-badge">
            <span>NYBP IS PROUD</span>
          </div>
          <h2 className="proud-title">
            To Help More Than 500+<br />
            Authors Publish Their<br />
            Books
          </h2>
          <p className="proud-desc">
            From first-time writers to experienced voices, so many have trusted our expert book
            publishing services to turn their stories into beautiful books. Whether they needed help
            with editing, cover design, or navigating self publishing platforms, we've been there at
            every step. As one of the top self publishing book companies New York has to offer, we
            make the journey simple and exciting. We love seeing each author hold their finished book
            and beam with pride, and we'd love to do the same for you. Now you don't have to ask
            yourself how to 'find publisher for my book' because you have us.
          </p>
          <a href="#" className="proud-btn">Get a free quote for your book projects</a>
        </div>
      </section>
    </>
  );
}