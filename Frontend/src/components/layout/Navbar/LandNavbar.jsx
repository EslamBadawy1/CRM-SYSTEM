import styles from "./LandNavbar.module.css";
import { useNavigate } from "react-router-dom";

const LandNavbar = () => {
  const navigate = useNavigate();

  const navLinks = [
    {
      name: "Home",
      path: "#hero",
    },
    {
      name: "Features",
      path: "#features",
    },
    {
      name: "Register Lead",
      path: "#lead-form",
    },
    {
      name: "Testimonials",
      path: "#testimonials",
    },
  ];

  return (
    <nav className={`navbar navbar-expand-lg ${styles.navbar}`}>
      <div className="container">

        {/* Logo */}

        <a href="/" className={styles.logo}>
          <i className="fa-solid fa-users"></i>
          Nexus CRM
        </a>

        {/* Links */}

        <ul className={`navbar-nav mx-auto ${styles.navLinks}`}>
          {navLinks.map((link) => (
            <li key={link.name} className="nav-item">
              <a
                href={link.path}
                className={styles.navLink}
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>

        {/* Login Button */}

        <button
          className={`btn btn-primary ${styles.loginBtn}`}
          onClick={() => navigate("/login")}
        >
          <i className="fa-solid fa-right-to-bracket"></i>
          Login
        </button>

      </div>
    </nav>
  );
};

export default LandNavbar;
