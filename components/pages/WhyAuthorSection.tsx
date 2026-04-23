"use client";

const services = [
  { icon: "/images/icon1.webp", title: "Ghostwriting Services", desc: "Let our ghostwriters turn your vision into a reality. They'll craft your story with precision, capturing your voice and ideas as if it were their own.", href: "#" },
  { icon: "/images/icon2.webp", title: "Book Editing Services", desc: "A great story needs a sharp editor. Our skilled editors will fine-tune your manuscript, honing the plot, strengthening characters, and smoothing the flow.", href: "#" },
  { icon: "/images/icon3.webp", title: "Book Cover Design Services", desc: "First impressions matter. Our expert designers will create a cover that not only stands out but also reflects the heart of your story.", href: "#" },
  { icon: "/images/icon4.webp", title: "Ebook Publishing Services", desc: "From formatting to distribution, we'll manage the entire process to ensure your book lands in the right places and reaches the right audience.", href: "#" },
  { icon: "/images/icon8.webp", title: "Book Coaching Services", desc: "Our experienced book coaches will be there every step of the way, offering guidance, motivation, and constructive feedback.", href: "#" },
  { icon: "/images/icon6.webp", title: "Book Marketing Services", desc: "Our strategic marketing services will create buzz around your book, reaching your target audience through personalized campaigns.", href: "#" },
  { icon: "/images/icon7.webp", title: "Illustration Design Services", desc: "Our talented illustrators will bring your words to life with stunning artwork that enhances your narrative and appeals to readers of all ages.", href: "#" },
  { icon: "/images/icon8.webp", title: "Beta Reader Services", desc: "Our beta reader testing service taps into diverse groups of readers to provide honest insights and suggestions.", href: "#" },
];

export default function WhyAuthorsSection() {
  return (
    <section style={{ background: "var(--white)", padding: "70px 60px 80px", fontFamily: "var(--font)" }}>
      <div style={{ textAlign: "center", maxWidth: 860, margin: "0 auto 52px" }}>
        <h2 style={{ fontSize: "clamp(24px, 3vw, 38px)", fontWeight: 700, color: "var(--navy)", marginBottom: 18, lineHeight: 1.25 }}>Why Authors Choose NY Book Publishers</h2>
        <p style={{ fontSize: 14.5, color: "var(--text-mid)", lineHeight: 1.8 }}>NY Book Publishers – global leaders in professional book publishing services. Trusted by both new and experienced authors.</p>
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", maxWidth: 1200, margin: "0 auto" }}>
        {services.map((s, i) => {
          const row = Math.floor(i / 4), col = i % 4;
          const isLight = (row + col) % 2 === 0;
          return (
            <div key={i} className="nybp-card-hover" style={{ padding: "36px 24px 28px", display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center", position: "relative", background: isLight ? "rgba(240,165,0,0.06)" : "rgba(240,165,0,0.12)", borderLeft: "4px solid var(--accent)" }}>
              <img src={s.icon} alt={s.title} style={{ width: 72, height: 72, objectFit: "contain", marginBottom: 18 }} />
              <h3 style={{ fontSize: 15, fontWeight: 700, color: "var(--accent)", marginBottom: 12, lineHeight: 1.3 }}>{s.title}</h3>
              <p style={{ fontSize: 13, color: "var(--text-mid)", lineHeight: 1.75, marginBottom: 20, flex: 1, display: "-webkit-box", WebkitLineClamp: 5, WebkitBoxOrient: "vertical", overflow: "hidden" } as React.CSSProperties}>{s.desc}</p>
              <a href={s.href} className="btn-accent" style={{ fontSize: 13, padding: "9px 26px", marginTop: "auto" }}>Explore Now</a>
            </div>
          );
        })}
      </div>
    </section>
  );
}