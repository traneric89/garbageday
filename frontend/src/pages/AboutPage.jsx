import SignupBanner from "../components/SignupBanner";
import "../styles/page.css";

function AboutIcon({ type }) {
  if (type === "vision") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path
          d="M2 12s3.5-6 10-6 10 6 10 6-3.5 6-10 6S2 12 2 12Z"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <circle
          cx="12"
          cy="12"
          r="3"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
        />
      </svg>
    );
  }

  if (type === "leaf") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path
          d="M19 5c-6.5.2-11 3.7-13 9 1.7 3.5 5.3 5.2 8.9 4.3C19.1 17.2 21 11.8 19 5Z"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M8 15c2.6-2.8 5.4-4.7 8.5-5.8"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
        />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path
        d="M12 3v18M6.5 7.5h9a3 3 0 1 1 0 6h-7a3 3 0 1 0 0 6h9"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

const aboutCards = [
  {
    title: "A deeper vision",
    description:
      "You know what GarbageDay is about. We offer a simple solution to a nagging problem by telling you when to take out your garbage or recycling. But our vision is so much deeper.",
    icon: "vision",
  },
  {
    title: "Everyday sustainable choices",
    description:
      "We bring you content to raise awareness and make it easier for you to make sustainable choices. From recycling tips, to deals on eco-friendly brands, we want to enable actions in your everyday life to have a more positive impact on the environment.",
    icon: "leaf",
  },
  {
    title: "Free through partnerships",
    description:
      "Partnering with these brands allows us to keep our reminder service free! So keep an eye out for those perks in your reminders! We’re owned and operated by RBC Ventures Inc., a subsidiary of Royal Bank of Canada and we’re thrilled that they support our vision!",
    icon: "perks",
  },
];

function AboutPage() {
  return (
    <main id="main">
      <section className="section">
        <div className="container about-stack">
          <div className="quote-card about-hero-card">
            <p className="eyebrow about-eyebrow">About us</p>
            <div className="quote-copy about-hero-copy">
              We&apos;re a small team focused on making eco-friendly choices
              easier, one household at a time.
            </div>
          </div>
        </div>
      </section>

      <section className="section surface">
        <div className="container">
          <div className="section-head about-cards-head">
            <h2>What drives GarbageDay</h2>
          </div>

          <div className="cards three-up">
            {aboutCards.map((card) => (
              <article className="card about-feature-card" key={card.title}>
                <span className="about-feature-icon" aria-hidden="true">
                  <AboutIcon type={card.icon} />
                </span>
                <h3 className="about-feature-title">{card.title}</h3>
                <p>{card.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <SignupBanner />
    </main>
  );
}

export default AboutPage;
