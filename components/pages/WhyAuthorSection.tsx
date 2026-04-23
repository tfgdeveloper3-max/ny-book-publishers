"use client";

const styles = `
  @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800&display=swap');

  .why-section { background: #ffffff; padding: 70px 60px 80px; font-family: 'Poppins', sans-serif; }
  .why-header { text-align: center; max-width: 860px; margin: 0 auto 52px; }
  .why-title { font-size: clamp(24px, 3vw, 38px); font-weight: 700; color: #00BCD4; margin-bottom: 18px; line-height: 1.25; }
  .why-desc { font-size: 14.5px; color: rgba(11, 11, 11, 0.8); line-height: 1.8; }

  .why-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 0; max-width: 1200px; margin: 0 auto; }

  .why-card { padding: 36px 24px 28px; display: flex; flex-direction: column; align-items: center; text-align: center; position: relative; }
  .why-card.light { background: rgba(0,188,212,0.07); }
  .why-card.dark  { background: rgba(0,188,212,0.14); }

  .why-card::before { content: ''; position: absolute; left: 0; top: 20%; bottom: 20%; width: 4px; background: #00BCD4; border-radius: 0 4px 4px 0; }

  .why-card-icon { width: 72px; height: 72px; object-fit: contain; margin-bottom: 18px; }
  .why-card-title { font-size: 15px; font-weight: 700; color: #00BCD4; margin-bottom: 12px; line-height: 1.3; }
  .why-card-desc { font-size: 13px; color: rgba(11, 11, 11, 0.78); line-height: 1.75; margin-bottom: 20px; display: -webkit-box; -webkit-line-clamp: 5; -webkit-box-orient: vertical; overflow: hidden; flex: 1; }

  .why-card-btn { background: #00BCD4; border: none; color: #1a1f5e; padding: 9px 26px; border-radius: 50px; font-family: 'Poppins', sans-serif; font-size: 13px; font-weight: 700; cursor: pointer; transition: background 0.2s; text-decoration: none; display: inline-block; margin-top: auto; }
  .why-card-btn:hover { background: #0097A7; }

  @media (max-width: 1024px) { .why-grid { grid-template-columns: repeat(2, 1fr); } }
  @media (max-width: 640px) { .why-section { padding: 50px 20px; } .why-grid { grid-template-columns: 1fr; } }
`;

const services = [
  { icon: "/images/icon1.webp", title: "Ghostwriting Services", desc: "Let our ghostwriters turn your vision into a reality. Working behind the scenes, they'll craft your story with precision, capturing your voice and ideas as if it were their own. Whether it's fiction, memoir, or non-fiction, our talented team will create an authentic manuscript that feels like you wrote every word.", href: "#" },
  { icon: "/images/icon2.webp", title: "Book Editing Services", desc: "A great story needs a sharp editor. Our skilled editors will fine-tune your manuscript, honing the plot, strengthening characters, and smoothing the flow. With careful attention to detail, we'll ensure your book is polished to perfection, ready to fascinate readers.", href: "#" },
  { icon: "/images/icon3.webp", title: "Book Cover Design Services", desc: "First impressions matter, especially when it comes to books. Our expert designers will create a cover that not only stands out but also reflects the heart of your story. At a glance, your visuals will attract readers and make an unforgettable impression.", href: "#" },
  { icon: "/images/icon4.webp", title: "Ebook Publishing Services", desc: "Let us handle the complexities of publishing. From formatting to distribution, we'll manage the entire process to ensure your book lands in the right places and reaches the right audience. With our seamless publishing solutions, your book will be available everywhere.", href: "#" },
  { icon: "/images/icon8.webp", title: "Book Coaching Services", desc: "Writing a book can be a long and challenging journey, but you don't have to go it alone. Our experienced book coaches will be there every step of the way, offering guidance, motivation, and constructive feedback. Together, we'll help you bring your best work to life.", href: "#" },
  { icon: "/images/icon6.webp", title: "Book Marketing Services", desc: "Getting your book noticed is key. Our strategic marketing services will create buzz around your book, reaching your target audience through personalized campaigns designed to boost visibility and engagement. Watch your readership grow with our expert marketing team.", href: "#" },
  { icon: "/images/icon7.webp", title: "Illustration Design Services", desc: "Let your book's visuals match its story. Our talented illustrators will bring your words to life with stunning artwork that enhances your narrative and appeals to readers of all ages. Make your book a visual masterpiece with our illustration services.", href: "#" },
  { icon: "/images/icon8.webp", title: "Beta Reader Services", desc: "Our beta reader testing service taps into diverse groups of readers to provide honest insights and suggestions, helping you fine-tune your manuscript for maximum impact. Make your book the best it can be with reader-driven feedback before your official launch.", href: "#" },
];

export default function WhyAuthorsSection() {
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: styles }} />
      <section className="why-section">
        <div className="why-header">
          <h2 className="why-title">Why Authors Choose NY Book Publishers</h2>
          <p className="why-desc">NY Book Publishers – global leaders in professional book publishing services. Whether you're looking for expert publishing services, affordable options, or specialized support in areas like professional publishing or poetry, we've got you covered. We're trusted by both new and experienced authors, and NY Book Publishers reviews show why we're often called the best book publishers for new writers.</p>
        </div>
        <div className="why-grid">
          {services.map((s, i) => {
            const row = Math.floor(i / 4);
            const col = i % 4;
            const isLight = (row + col) % 2 === 0;
            return (
              <div className={`why-card ${isLight ? "light" : "dark"}`} key={i}>
                <img src={s.icon} alt={s.title} className="why-card-icon" />
                <h3 className="why-card-title">{s.title}</h3>
                <p className="why-card-desc">{s.desc}</p>
                <a href={s.href} className="why-card-btn">Explore Now</a>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
}