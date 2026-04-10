import "./HeroPreview.css";

function HeroPreview() {
  return (
    <aside className="hero-card" aria-label="Example reminder preview">
      <div className="mini-calendar">
        <div className="calendar-head">
          <div>
            <h2 className="hero-card-title">Reminder preview</h2>
            <p className="copy-muted">
              A simple weekly heads-up before pickup day.
            </p>
          </div>
        </div>

        <div className="calendar-grid" aria-hidden="true">
          {Array.from({ length: 14 }, (_, index) => index + 1).map((day) => (
            <span key={day} className={day === 9 ? "mark" : ""}>
              {day}
            </span>
          ))}
        </div>

        <div className="calendar-note">
          <span className="pill amber">Reminder example</span>
          <p>
            Put out garbage and recycling tonight. Collection is tomorrow
            morning.
          </p>
        </div>
      </div>
    </aside>
  );
}

export default HeroPreview;
