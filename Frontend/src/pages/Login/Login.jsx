import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

import styles from "./Login.module.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChartLine,
  faEnvelope,
  faLock,
  faShield,
} from "@fortawesome/free-solid-svg-icons";

import {
  faGoogle,
  faFacebook,
} from "@fortawesome/free-brands-svg-icons";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const res = await axios.post(
        "http://localhost:8000/api/auth/login",
        {
          email,
          password,
        }
      );

      localStorage.setItem("token", res.data.token);
      localStorage.setItem("role", res.data.user.role);

      navigate("/admin/dashboard");

    } catch (error) {
      console.log(error.response?.data);

      alert("Invalid Email Or Password");
    }
  };

  return (
    <div className={styles.page}>
      {/* LEFT SIDE */}
      <div className={styles.left}>
        <div className={styles.card}>
          {/* BRAND */}
          <div className={styles.brand}>
            <span className={styles.logo}>
              <FontAwesomeIcon icon={faChartLine} />
            </span>

            <span>Nexus CRM</span>
          </div>

          <h2 className={styles.title}>Welcome back</h2>

          <p className={styles.subtitle}>
            Please enter your details to access your dashboard.
          </p>

          {/* EMAIL */}
          <div className={styles.inputGroup}>
            <FontAwesomeIcon icon={faEnvelope} />

            <input
              type="email"
              placeholder="eslmabadawy@gmail.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          {/* PASSWORD */}
          <div className={styles.inputGroup}>
            <FontAwesomeIcon icon={faLock} />

            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          {/* OPTIONS */}
          <div className={styles.row}>
            <label>
              <FontAwesomeIcon icon={faShield} /> Remember me
            </label>

            <a href="#">Forgot password?</a>
          </div>

          {/* BUTTON */}
          <button
            type="button"
            className={styles.button}
            onClick={handleLogin}
          >
            Sign In →
          </button>

          {/* DIVIDER */}
          <div className={styles.divider}>
            OR CONTINUE WITH
          </div>

          {/* SOCIAL */}
          <div className={styles.social}>
            <button>
              <FontAwesomeIcon icon={faGoogle} /> Google
            </button>

            <button>
              <FontAwesomeIcon icon={faFacebook} /> Facebook
            </button>
          </div>
        </div>
      </div>

      {/* RIGHT SIDE */}
      <div className={styles.right}>
        <div className={styles.badge}>
          ● NEW: AI PIPELINE INSIGHTS
        </div>

        <h1>
          Close more deals with{" "}
          <span>Nexus Sales Intelligence.</span>
        </h1>

        <p>
          Leverage enterprise-grade predictive modeling to identify
          high-intent leads and automate your follow-up workflows.
        </p>

        <div className={styles.cards}>
          <div className={styles.infoCard}>
            <h3>42% Growth</h3>
            <p>Increase in close rates</p>
          </div>

          <div className={styles.infoCard}>
            <h3>Bank-Grade</h3>
            <p>SOC2 compliant security</p>
          </div>
        </div>
      </div>
    </div>
  );
}