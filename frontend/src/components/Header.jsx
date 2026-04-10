import { NavLink, useLocation, useNavigate } from "react-router-dom";
import "./Header.css";

function Logo() {
  return (
    <svg
      viewBox="0 0 64 64"
      width="28"
      height="28"
      aria-label="Garbage Day logo"
      role="img"
      fill="none"
    >
      <path
        d="M21 20L13 12L24 15L27 23"
        fill="currentColor"
        opacity="0.14"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinejoin="round"
      />
      <path
        d="M43 20L51 12L40 15L37 23"
        fill="currentColor"
        opacity="0.14"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinejoin="round"
      />
      <ellipse
        cx="32"
        cy="35"
        rx="18"
        ry="15"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.6"
      />
      <path
        d="M19.5 31.5C23 27.5 27 25.5 32 25.5C37 25.5 41 27.5 44.5 31.5"
        stroke="currentColor"
        strokeWidth="2.6"
        strokeLinecap="round"
      />
      <path
        d="M19.5 31.5C23.5 35.5 27.5 37.5 32 37.5C36.5 37.5 40.5 35.5 44.5 31.5"
        stroke="currentColor"
        strokeWidth="6.5"
        strokeLinecap="round"
        opacity="0.16"
      />
      <path
        d="M24.5 32.5C26.2 34.1 28.5 35 32 35C35.5 35 37.8 34.1 39.5 32.5"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
        opacity="0.55"
      />
      <circle cx="26.5" cy="35.5" r="2.3" fill="currentColor" />
      <circle cx="37.5" cy="35.5" r="2.3" fill="currentColor" />
      <path d="M32 38.8L28.8 41.5H35.2L32 38.8Z" fill="currentColor" />
      <path
        d="M29.3 44C30.3 45.1 31.2 45.7 32 45.7C32.8 45.7 33.7 45.1 34.7 44"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
      />
      <path
        d="M21.5 40.5L17.8 42M42.5 40.5L46.2 42"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        opacity="0.55"
      />
    </svg>
  );
}

function Header() {
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
    <header className="topbar">
      <div className="container topbar-inner">
        <NavLink to="/" className="brand" aria-label="Go to homepage">
          <span className="brand-mark" aria-hidden="true">
            <Logo />
          </span>
          <span className="brand-name">
            <span>Garbage Day</span>
            <small>Weekly pickup reminders</small>
          </span>
        </NavLink>

        <nav className="nav" aria-label="Primary navigation">
          <NavLink to="/about">About</NavLink>
          <NavLink to="/faq">FAQ</NavLink>

          <button
            type="button"
            className="nav-signup-btn"
            onClick={handleSignupClick}
          >
            Sign up
          </button>
        </nav>
      </div>
    </header>
  );
}

export default Header;
