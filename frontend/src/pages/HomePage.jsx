import { useState } from "react";
import HeroPreview from "../components/HeroPreview";
import { homeHighlights, homepageFeatures } from "../siteContent";
import "../styles/page.css";
import { createSignup } from "../services/api";

function FeatureIcon({ type }) {
  if (type === "location") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path
          d="M12 21s6-5.33 6-11a6 6 0 1 0-12 0c0 5.67 6 11 6 11Z"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <circle
          cx="12"
          cy="10"
          r="2.4"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
        />
      </svg>
    );
  }

  if (type === "bell") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path
          d="M15 17H5.5a1 1 0 0 1-.8-1.6L6 13.7V10a6 6 0 1 1 12 0v3.7l1.3 1.7a1 1 0 0 1-.8 1.6H15"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M9.5 17a2.5 2.5 0 0 0 5 0"
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
        d="M20 12a8 8 0 1 1-2.34-5.66"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M20 4v6h-6"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function HomePage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    address: "",
    city: "",
    postalCode: "",
    consent: false,
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [hasPostalCodeMatch, setHasPostalCodeMatch] = useState(false);

  const handleChange = (event) => {
    const { id, value, type, checked } = event.target;

    setFormData((current) => ({
      ...current,
      [id]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setErrorMessage("");
    setIsSubmitting(true);

    try {
      const result = await createSignup({
        name: formData.name,
        email: formData.email,
        address: formData.address,
        city: formData.city,
        postalCode: formData.postalCode,
        consent: formData.consent,
      });

      setIsSubmitted(true);
      setSuccessMessage(result.message);
      setHasPostalCodeMatch(result.postalCodeMatch);
    } catch (error) {
      setErrorMessage(
        error.message || "Something went wrong. Please try again.",
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main id="main">
      <section className="hero">
        <div className="container hero-grid">
          <div className="hero-copy">
            <span className="eyebrow">Weekly reminder sign-up</span>
            <h1>Garbage day. Recycling day. Helpful reminders for any day.</h1>
            <p>
              Get weekly reminders for garbage, recycling, yard waste, seasonal
              pickup, and collection schedule changes through one simple sign-up
              form.
            </p>

            <div className="hero-actions">
              <button
                type="button"
                className="btn btn-primary"
                onClick={() => {
                  document
                    .getElementById("signup")
                    ?.scrollIntoView({ behavior: "smooth" });
                }}
              >
                Get weekly reminders
              </button>
            </div>

            <ul className="plain-list">
              {homeHighlights.map((item) => (
                <li key={item}>
                  <span className="dot" aria-hidden="true" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <HeroPreview />
        </div>
      </section>

      <section className="section surface" id="features">
        <div className="container">
          <div className="section-head features-head">
            <h2>How it works</h2>
            <p>
              The service stays focused on one job: make collection reminders
              easier to remember and easier to act on.
            </p>
          </div>

          <div className="cards three-up">
            {homepageFeatures.map((feature) => (
              <article className="card feature-card" key={feature.title}>
                <span className="feature-icon" aria-hidden="true">
                  <FeatureIcon type={feature.icon} />
                </span>
                <h3 className="feature-title">{feature.title}</h3>
                <p className="feature-description">{feature.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section" id="signup">
        <div className="container signup-grid signup-grid-wide">
          <div className="info-box signup-info-box">
            <div className="signup-help-list">
              <article className="signup-help-item">
                <h3>Already signed up?</h3>
                <p>
                  Mark{" "}
                  <a href="mailto:care@garbageday.com">care@garbageday.com</a>{" "}
                  as a safe sender to avoid reminders landing in your spam
                  folder.
                </p>
              </article>

              <article className="signup-help-item">
                <h3>Address changed?</h3>
                <p>
                  Fill out the form above with your new address and same email.
                  Your profile will update in our system!
                </p>
              </article>
            </div>
          </div>

          <div className="signup-box signup-form-box">
            {!isSubmitted ? (
              <>
                <h3>Reminder form</h3>
                <p className="copy-muted">
                  Fill in the details below to join the reminder list.
                </p>

                <form className="form-grid" onSubmit={handleSubmit}>
                  <label htmlFor="name">Your name</label>
                  <input
                    id="name"
                    type="text"
                    placeholder="Jane Smith"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />

                  <label htmlFor="email">Email address</label>
                  <input
                    id="email"
                    type="email"
                    placeholder="name@example.com"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />

                  <label htmlFor="address">Street address</label>
                  <input
                    id="address"
                    type="text"
                    placeholder="123 Main Street"
                    value={formData.address}
                    onChange={handleChange}
                    required
                  />

                  <div className="form-row two-up">
                    <div>
                      <label htmlFor="city">City</label>
                      <input
                        id="city"
                        type="text"
                        placeholder="Vaughan"
                        value={formData.city}
                        onChange={handleChange}
                        required
                      />
                    </div>

                    <div>
                      <label htmlFor="postalCode">Postal code</label>
                      <input
                        id="postalCode"
                        type="text"
                        placeholder="L4H 1A1"
                        value={formData.postalCode}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>

                  <label className="checkbox-row" htmlFor="consent">
                    <input
                      id="consent"
                      type="checkbox"
                      checked={formData.consent}
                      onChange={handleChange}
                      required
                    />
                    <span>
                      By entering my email, I agree to receive emails from
                      GarbageDay. I understand that I can unsubscribe at any
                      time.*
                    </span>
                  </label>

                  {errorMessage ? (
                    <p className="form-error">{errorMessage}</p>
                  ) : null}

                  <button
                    type="submit"
                    className="btn btn-primary"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Submitting..." : "Sign up"}
                  </button>
                </form>
              </>
            ) : (
              <div className="signup-success">
                <span className="signup-success-icon" aria-hidden="true">
                  ✓
                </span>
                <h3>Thanks for signing up!</h3>

                <p className="copy-muted">
                  {successMessage ||
                    "Your reminder request has been received. Keep an eye on your inbox for your upcoming GarbageDay emails."}
                </p>

                {hasPostalCodeMatch ? (
                  <p className="copy-muted">
                    Good news — we already have another signup in your postal
                    code, so your area may already be active in our system.
                  </p>
                ) : null}

                <p className="copy-muted">
                  To make sure you receive reminders, add{" "}
                  <a href="mailto:care@garbageday.com">care@garbageday.com</a>{" "}
                  to your safe sender list.
                </p>
              </div>
            )}
          </div>
        </div>
      </section>
    </main>
  );
}

export default HomePage;
