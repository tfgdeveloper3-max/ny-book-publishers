import Image from "next/image";

interface Item {
    number: string;
    ribbon: string;
    title: string;
    description: string;
}

const firstItems: Item[] = [
    {
        number: "01",
        ribbon: "/images/WCU-1.webp",
        title: "Expert Editing",
        description:
            "Our skilled editors carefully shape your manuscript, fixing errors and polishing your words so your story flows beautifully. We make sure it's the best it can be, impressing every reader and making you proud.",
    },
    {
        number: "02",
        ribbon: "/images/WCU-2.webp",
        title: "Custom Design",
        description:
            "From stunning covers to clean interior layouts, we bring your vision to life. Whether you want bold, artistic, or classic styles, your book will look professional and inviting, perfect for grabbing attention online and in stores.",
    },
    {
        number: "03",
        ribbon: "/images/WCU-3.webp",
        title: "Full Assistance",
        description:
            "We're with you at every stage. From writing help to final listings, our friendly team makes sure you're never left guessing. Questions pop up in your mind — we're just a call or message away, always ready to help.",
    },
];

const secondItems: Item[] = [
    {
        number: "04",
        ribbon: "/images/WCU-4.webp",
        title: "24/7 Support",
        description:
            "Your book matters to us around the clock. Our team is here day and night to answer questions, calm worries, and keep things moving so your publishing journey stays smooth and stress-free.",
    },
    {
        number: "05",
        ribbon: "/images/WCU-5.webp",
        title: "Exclusive Discounts",
        description:
            "Publishing shouldn't cost a fortune. We offer special deals and package savings so you can enjoy top-quality book publishing services without overpaying. It's the best way to get great results on your budget.",
    },
    {
        number: "06",
        ribbon: "/images/WCU-6.webp",
        title: "Marketing Power",
        description:
            "We don't just publish and disappear. Our marketing team helps spread the word, builds excitement, and gets more eyes on your book. The goal is simple: help you reach readers everywhere and grow your audience.",
    },
];

interface ItemCardProps {
    item: Item;
    align: "left" | "right";
}

const ItemCard: React.FC<ItemCardProps> = ({ item, align }) => {
    const isRight = align === "right";

    return (
        <div
            style={{
                position: "relative",
                minHeight: "120px",
                display: "flex",
                alignItems: "center",
            }}
        >
            <div
                style={{
                    position: "absolute",
                    inset: 0,
                    zIndex: 0,
                }}
            >
                <Image
                    src={item.ribbon}
                    alt={item.number}
                    fill
                    sizes="100%"
                    style={{ objectFit: "fill" }}
                />
            </div>

            <div
                style={{
                    position: "relative",
                    zIndex: 1,
                    padding: isRight
                        ? "50px 200px 54px 20px"
                        : "50px 20px 54px 200px",
                    width: "100%",
                }}
            >
                <h3
                    style={{
                        fontSize: "20px",
                        fontWeight: 800,
                        color: "#1a2a6c",
                        margin: "0 0 5px",
                    }}
                >
                    {item.title}
                </h3>

                <p
                    style={{
                        fontSize: "16px",
                        color: "#444",
                        lineHeight: 1.65,
                        margin: 0,
                    }}
                >
                    {item.description}
                </p>
            </div>
        </div>
    );
};

const WhyChooseUs: React.FC = () => {
    const photoStyle: React.CSSProperties = {
        width: "48%",
        flexShrink: 0,
        height: "800px",
        borderRadius: "10px",
        overflow: "hidden",
        position: "relative",
    };

    const rowStyle: React.CSSProperties = {
        display: "flex",
        alignItems: "stretch",
        gap: "20px",
        marginBottom: "50px",
    };

    const itemsColStyle: React.CSSProperties = {
        flex: 1,
        display: "flex",
        flexDirection: "column",
        gap: "6px",
    };

    return (
        <section
            style={{
                fontFamily: "'Nunito Sans', sans-serif",
                background: "#fff",
                padding: "70px 30px",
                maxWidth: "1180px",
                margin: "0 auto",
            }}
        >
            <h2
                style={{
                    textAlign: "center",
                    fontSize: "42px",
                    fontWeight: 900,
                    color: "#1a2a6c",
                    lineHeight: 1.3,
                    marginBottom: "50px",
                }}
            >
                From First Draft To Bestseller
                <br />
                We&apos;ve Got You Covered
            </h2>

            <div style={rowStyle}>
                <div style={photoStyle}>
                    <Image
                        src="/images/WCU-Left.webp"
                        alt="Expert book publishing"
                        fill
                        sizes="(max-width: 768px) 100vw, 32vw"
                        style={{ objectFit: "cover" }}
                    />
                </div>

                <div style={itemsColStyle}>
                    {firstItems.map((item) => (
                        <ItemCard
                            key={item.number}
                            item={item}
                            align="left"
                        />
                    ))}
                </div>
            </div>

            <div style={rowStyle}>
                <div style={itemsColStyle}>
                    {secondItems.map((item) => (
                        <ItemCard
                            key={item.number}
                            item={item}
                            align="right"
                        />
                    ))}
                </div>

                <div style={photoStyle}>
                    <Image
                        src="/images/WCU-Right.webp"
                        alt="Book publishers for new authors"
                        fill
                        sizes="(max-width: 768px) 100vw, 32vw"
                        style={{ objectFit: "cover" }}
                    />
                </div>
            </div>
        </section>
    );
};

export default WhyChooseUs;