import './FAQItem.css';

function FAQItem({ item, isOpen, onToggle }) {
  return (
    <section className="faq-item">
      <button
        className="faq-question"
        type="button"
        aria-expanded={isOpen}
        onClick={onToggle}
      >
        <span>{item.question}</span>
        <span aria-hidden="true">{isOpen ? '−' : '+'}</span>
      </button>
      {isOpen ? <div className="faq-answer"><p>{item.answer}</p></div> : null}
    </section>
  );
}

export default FAQItem;
