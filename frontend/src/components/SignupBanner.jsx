import { useLocation, useNavigate } from "react-router-dom";

function SignupBanner() {
  const navigate = useNavigate();
  const location = useLocation();

  const handleSignupClick = () => {
    if (location.pathname === "/") {
      document.getElementById("signup")?.scrollIntoView({ behavior: "smooth" });
      return;
    }

    navigate("/");

    window.setTimeout(() => {
      document.getElementById("signup")?.scrollIntoView({ behavior: "smooth" });
    }, 80);
  };

  return (
    <section className="section">
      <div className="container">
        <div className="signup-banner">
          <div className="signup-banner-copy">
            <p className="signup-banner-eyebrow">Ready to get reminders?</p>
            <h2>Curious about your garbage day?</h2>
            <p>
              Sign up for weekly reminders and we’ll help you stay on top of
              collection day, schedule changes, and special pickup dates.
            </p>
          </div>

          <button
            type="button"
            className="btn btn-on-green"
            onClick={handleSignupClick}
          >
            Sign up
          </button>
        </div>
      </div>
    </section>
  );
}

export default SignupBanner;
