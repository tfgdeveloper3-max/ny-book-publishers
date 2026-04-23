import Image from "next/image";

const firstItems = [
    { number: "01", ribbon: "/images/WCU-1.webp", title: "Expert Editing", description: "Our skilled editors carefully shape your manuscript, fixing errors and polishing your words so your story flows beautifully." },
    { number: "02", ribbon: "/images/WCU-2.webp", title: "Custom Design", description: "From stunning covers to clean interior layouts, we bring your vision to life with professional and inviting styles." },
    { number: "03", ribbon: "/images/WCU-3.webp", title: "Full Assistance", description: "We're with you at every stage. From writing help to final listings, our friendly team makes sure you're never left guessing." },
];
const secondItems = [
    { number: "04", ribbon: "/images/WCU-4.webp", title: "24/7 Support", description: "Our team is here day and night to answer questions, calm worries, and keep things moving so your publishing journey stays smooth." },
    { number: "05", ribbon: "/images/WCU-5.webp", title: "Exclusive Discounts", description: "We offer special deals and package savings so you can enjoy top-quality book publishing services without overpaying." },
    { number: "06", ribbon: "/images/WCU-6.webp", title: "Marketing Power", description: "Our marketing team helps spread the word, builds excitement, and gets more eyes on your book to grow your audience." },
];

export default function WhyChooseUs() {
    const photoStyle: React.CSSProperties = { width: "48%", flexShrink: 0, height: 800, borderRadius: 10, overflow: "hidden", position: "relative" };
    const rowStyle: React.CSSProperties = { display: "flex", alignItems: "stretch", gap: 20, marginBottom: 50 };
    const colStyle: React.CSSProperties = { flex: 1, display: "flex", flexDirection: "column", gap: 6 };

    return (
        <section style={{ fontFamily: "var(--font)", background: "var(--white)", padding: "70px 30px", maxWidth: 1180, margin: "0 auto" }}>
            <h2 style={{ textAlign: "center", fontSize: 42, fontWeight: 900, color: "var(--navy)", lineHeight: 1.3, marginBottom: 50 }}>
                From First Draft To Bestseller<br />We've Got You Covered
            </h2>
            <div style={rowStyle}>
                <div style={photoStyle}><Image src="/images/WCU-Left.webp" alt="Expert book publishing" fill sizes="32vw" style={{ objectFit: "cover" }} /></div>
                <div style={colStyle}>
                    {firstItems.map(item => (
                        <div key={item.number} style={{ position: "relative", minHeight: 120, display: "flex", alignItems: "center" }}>
                            <div style={{ position: "absolute", inset: 0, zIndex: 0 }}><Image src={item.ribbon} alt={item.number} fill sizes="100%" style={{ objectFit: "fill" }} /></div>
                            <div style={{ position: "relative", zIndex: 1, padding: "50px 20px 54px 200px", width: "100%" }}>
                                <h3 style={{ fontSize: 20, fontWeight: 800, color: "var(--accent)", margin: "0 0 5px" }}>{item.title}</h3>
                                <p style={{ fontSize: 16, color: "#444", lineHeight: 1.65, margin: 0 }}>{item.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div style={rowStyle}>
                <div style={colStyle}>
                    {secondItems.map(item => (
                        <div key={item.number} style={{ position: "relative", minHeight: 120, display: "flex", alignItems: "center" }}>
                            <div style={{ position: "absolute", inset: 0, zIndex: 0 }}><Image src={item.ribbon} alt={item.number} fill sizes="100%" style={{ objectFit: "fill" }} /></div>
                            <div style={{ position: "relative", zIndex: 1, padding: "50px 200px 54px 20px", width: "100%" }}>
                                <h3 style={{ fontSize: 20, fontWeight: 800, color: "var(--accent)", margin: "0 0 5px" }}>{item.title}</h3>
                                <p style={{ fontSize: 16, color: "#444", lineHeight: 1.65, margin: 0 }}>{item.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
                <div style={photoStyle}><Image src="/images/WCU-Right.webp" alt="Book publishers" fill sizes="32vw" style={{ objectFit: "cover" }} /></div>
            </div>
        </section>
    );
}