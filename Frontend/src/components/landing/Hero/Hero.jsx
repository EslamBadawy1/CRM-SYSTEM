import styles from "./Hero.module.css";
import { useNavigate } from "react-router-dom";

import dashboardImage from "../../../assets/images/crm-dashboard.png";

const Hero = () => {
  const navigate = useNavigate();

  return (
    <section id="hero" className={styles.hero}>
      <div className="container">

        <div className="row align-items-center">

          {/* Left Side */}

          <div className="col-lg-6">

            <span className={styles.badge}>
              Smart CRM Solution
            </span>

            <h1 className={styles.title}>
              Manage Leads
              <br />
              Like a Pro
            </h1>

            <p className={styles.description}>
              Track leads, assign agents,
              manage follow-ups and monitor
              your sales performance in one place.
            </p>

            <div className={styles.actions}>

              <button
                className="btn btn-primary "
              >
                <a href="#lead-form" className="text-white text-decoration-none">
                  Register Lead
                </a>
              </button>

              <button
                className="btn btn-outline-primary"
                onClick={() => navigate("Login")}
              >
                Login
              </button>

            </div>

          </div>

          {/* Right Side */}

          <div className="col-lg-6">

            <img
              src={dashboardImage}
              alt="CRM Dashboard"
              className={styles.dashboardImage}
            />

          </div>

        </div>

      </div>
    </section>
  );
};

export default Hero;