import { useState } from "react";
import FAQItem from "../components/FAQItem";
import SignupBanner from "../components/SignupBanner";
import { faqItems } from "../siteContent";
import "../styles/page.css";

function FAQPage() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <main id="main">
      <section className="section">
        <div className="container">
          <div className="section-head">
            <h1>Frequently asked questions</h1>
            <p>
              The live FAQ page explains the reminder service, says the service
              is free, describes municipal and partner interest, and answers
              questions about privacy, feedback, and city coverage.
            </p>
          </div>

          <div className="faq-list">
            {faqItems.map((item, index) => (
              <FAQItem
                key={item.question}
                item={item}
                isOpen={openIndex === index}
                onToggle={() => setOpenIndex(openIndex === index ? -1 : index)}
              />
            ))}
          </div>
        </div>
      </section>

      <SignupBanner />
    </main>
  );
}

export default FAQPage;
